-- FunX Universe — Phase 3: role-based staff/admin access + audit log
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Additive only — does NOT drop admin_users. See phase3-cleanup.sql for that,
-- to be run separately once you've verified everything here works.

-- ── profiles: role + module permissions ─────────────────────────────────
alter table public.profiles
  add column if not exists role text not null default 'customer',
  add column if not exists permissions text[] not null default '{}';

do $$ begin
  alter table public.profiles
    add constraint profiles_role_check check (role in ('customer','staff','admin'));
exception when duplicate_object then null;
end $$;

-- ── one-time migration from admin_users ──────────────────────────────────
update public.profiles p
set role = 'admin'
from public.admin_users a
where p.id = a.id and a.can_manage_users = true;

update public.profiles p
set role = 'staff', permissions = array['products']
from public.admin_users a
where p.id = a.id
  and a.can_manage_users = false
  and (a.can_add or a.can_edit or a.can_delete);

-- ── permission-check helpers ──────────────────────────────────────────────
-- security definer + owned by the SQL-editor role, so these read profiles
-- WITHOUT triggering profiles' own RLS policies (same reasoning as the
-- existing is_admin_with() for admin_users — avoids infinite recursion).
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce((select role = 'admin' from public.profiles where id = auth.uid()), false);
$$;

create or replace function public.has_module(module text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce(
    (select role = 'admin' or (role = 'staff' and module = any(permissions))
     from public.profiles where id = auth.uid()),
    false
  );
$$;

-- ── products / storage RLS: swap admin_users checks for has_module ───────
drop policy if exists "products_insert_with_can_add" on public.products;
drop policy if exists "products_update_with_can_edit" on public.products;
drop policy if exists "products_delete_with_can_delete" on public.products;

create policy "products_insert_with_module" on public.products
  for insert to authenticated
  with check (has_module('products'));

create policy "products_update_with_module" on public.products
  for update to authenticated
  using (has_module('products'))
  with check (has_module('products'));

create policy "products_delete_with_module" on public.products
  for delete to authenticated
  using (has_module('products'));

drop policy if exists "product_images_upload" on storage.objects;
drop policy if exists "product_images_update" on storage.objects;
drop policy if exists "product_images_delete" on storage.objects;

create policy "product_images_upload" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'product-images' and has_module('products'));

create policy "product_images_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'product-images' and has_module('products'));

create policy "product_images_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'product-images' and has_module('products'));

-- ── profiles RLS: let admins see/manage everyone, for the staff screen ───
create policy "profiles_admin_read_all" on public.profiles
  for select to authenticated
  using (is_admin());

create policy "profiles_admin_update_all" on public.profiles
  for update to authenticated
  using (is_admin())
  with check (is_admin());

-- ── audit log ──────────────────────────────────────────────────────────
create table if not exists public.audit_log (
  id bigserial primary key,
  actor_id uuid references auth.users(id),
  actor_email text,
  action text not null,
  table_name text not null,
  record_id text,
  changes jsonb,
  created_at timestamptz not null default now()
);

alter table public.audit_log enable row level security;

create policy "audit_log_admin_read" on public.audit_log
  for select to authenticated
  using (is_admin());
-- No insert/update/delete policy for the authenticated role at all — the
-- table is only ever written by the trigger below (security definer), so
-- staff/admins can't edit their own trail through the normal API.

create or replace function public.log_audit()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  actor uuid := auth.uid();
  actor_email text;
  row_id text;
begin
  if TG_TABLE_NAME = 'profiles' and TG_OP = 'UPDATE' then
    if OLD.role is not distinct from NEW.role and OLD.permissions is not distinct from NEW.permissions then
      return NEW; -- skip ordinary profile edits (name, phone, address) — only role/permission changes are audited
    end if;
  end if;

  select email into actor_email from public.profiles where id = actor;
  row_id := case when TG_OP = 'DELETE' then OLD.id::text else NEW.id::text end;

  insert into public.audit_log (actor_id, actor_email, action, table_name, record_id, changes)
  values (
    actor, actor_email, lower(TG_OP), TG_TABLE_NAME, row_id,
    case when TG_OP = 'DELETE' then to_jsonb(OLD) else to_jsonb(NEW) end
  );

  return case when TG_OP = 'DELETE' then OLD else NEW end;
end;
$$;

drop trigger if exists audit_products on public.products;
create trigger audit_products
  after insert or update or delete on public.products
  for each row execute function public.log_audit();

drop trigger if exists audit_profiles on public.profiles;
create trigger audit_profiles
  after update on public.profiles
  for each row execute function public.log_audit();
