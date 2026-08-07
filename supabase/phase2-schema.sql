-- FunX Universe — Phase 2: wishlist
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Additive only — does not touch products, admin_users, or profiles.

create table if not exists public.wishlists (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

alter table public.wishlists enable row level security;

create policy "wishlists_read_own_rows" on public.wishlists
  for select to authenticated
  using (auth.uid() = user_id);

create policy "wishlists_insert_own_rows" on public.wishlists
  for insert to authenticated
  with check (auth.uid() = user_id);

create policy "wishlists_delete_own_rows" on public.wishlists
  for delete to authenticated
  using (auth.uid() = user_id);
