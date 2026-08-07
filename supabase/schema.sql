-- FunX Universe admin panel — Supabase schema
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- After running, see the bottom of this file for the one-time step to make
-- your own account a full admin (can_manage_users), since every new signup
-- starts with zero permissions by design.

-- ── products ─────────────────────────────────────────────────────────────
create table if not exists public.products (
  id text primary key,
  name text not null,
  description text,
  brand text default 'FunX',
  line text,
  universe text,
  type text,
  age text,
  material text,
  color text,
  electronic boolean not null default false,
  price numeric not null,
  sale_price numeric,
  badge text,
  rating numeric not null default 0,
  reviews integer not null default 0,
  stock integer not null default 25,
  box_length_in numeric,
  box_width_in numeric,
  box_height_in numeric,
  weight_lb numeric,
  is_new boolean not null default false,
  is_trending boolean not null default false,
  is_collectible boolean not null default false,
  is_sale boolean not null default false,
  images text[] not null default '{}',
  video_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- ── admin_users ──────────────────────────────────────────────────────────
-- Per-user permission flags. A row is auto-created (all false) whenever
-- someone signs up via Supabase Auth on admin.html — see trigger below.
create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  can_add boolean not null default false,
  can_edit boolean not null default false,
  can_delete boolean not null default false,
  can_manage_users boolean not null default false,
  created_at timestamptz not null default now()
);

-- ── permission-check helper ──────────────────────────────────────────────
-- security definer + owned by the SQL-editor role (postgres), so it reads
-- admin_users WITHOUT triggering admin_users' own RLS policies — this is
-- what avoids infinite-recursion when the admin_users policies themselves
-- need to check permissions.
create or replace function public.is_admin_with(perm text)
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select coalesce(
    (select case perm
      when 'can_add' then can_add
      when 'can_edit' then can_edit
      when 'can_delete' then can_delete
      when 'can_manage_users' then can_manage_users
      else false
    end
    from public.admin_users where id = auth.uid()),
    false
  );
$$;

-- ── auto-create admin_users row on signup ───────────────────────────────
create or replace function public.handle_new_admin_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_users (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_admin_user();

-- ── RLS: products ────────────────────────────────────────────────────────
alter table public.products enable row level security;

create policy "products_public_read" on public.products
  for select
  using (true);

create policy "products_insert_with_can_add" on public.products
  for insert to authenticated
  with check (is_admin_with('can_add'));

create policy "products_update_with_can_edit" on public.products
  for update to authenticated
  using (is_admin_with('can_edit'))
  with check (is_admin_with('can_edit'));

create policy "products_delete_with_can_delete" on public.products
  for delete to authenticated
  using (is_admin_with('can_delete'));

-- ── RLS: admin_users ─────────────────────────────────────────────────────
alter table public.admin_users enable row level security;

create policy "admin_users_read_own_row" on public.admin_users
  for select to authenticated
  using (auth.uid() = id);

create policy "admin_users_managers_read_all" on public.admin_users
  for select to authenticated
  using (is_admin_with('can_manage_users'));

create policy "admin_users_managers_update" on public.admin_users
  for update to authenticated
  using (is_admin_with('can_manage_users'))
  with check (is_admin_with('can_manage_users'));

-- ── Storage: product-images bucket ──────────────────────────────────────
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

create policy "product_images_public_read" on storage.objects
  for select
  using (bucket_id = 'product-images');

create policy "product_images_upload" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'product-images'
    and (is_admin_with('can_add') or is_admin_with('can_edit'))
  );

create policy "product_images_update" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'product-images'
    and (is_admin_with('can_add') or is_admin_with('can_edit'))
  );

create policy "product_images_delete" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'product-images'
    and is_admin_with('can_delete')
  );

-- ── One-time manual step (do this after you sign up on admin.html) ──────
-- Every new signup starts with zero permissions. Run this once, with your
-- own email, to make yourself a full admin who can manage other users:
--
--   update public.admin_users
--   set can_add = true, can_edit = true, can_delete = true, can_manage_users = true
--   where email = 'you@example.com';
