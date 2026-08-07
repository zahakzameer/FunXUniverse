-- FunX Universe — Phase 1: customer authentication
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Additive only — does not touch admin_users or any existing table/policy.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  country text,
  phone text,
  shipping_address jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_read_own_row" on public.profiles
  for select to authenticated
  using (auth.uid() = id);

create policy "profiles_update_own_row" on public.profiles
  for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create a profile row on signup, pulling name/country out of the
-- signUp() options.data metadata. Added as a SECOND, independent trigger
-- on auth.users — Postgres runs multiple triggers on the same event fine,
-- so this never touches the existing handle_new_admin_user trigger.
create or replace function public.handle_new_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name, country)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'country'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
  after insert on auth.users
  for each row execute function public.handle_new_profile();

-- Backfill: the admin account created earlier this session predates this
-- trigger, so it has no profile row yet without this.
insert into public.profiles (id, email)
select id, email from auth.users
on conflict (id) do nothing;
