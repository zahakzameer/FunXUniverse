-- FunX Universe — Phase 5: category management
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Additive only — does not touch products, profiles, orders, or any existing table.
--
-- products.category stays free text (not a foreign key) — admin.html's
-- rename flow bulk-updates matching product rows itself, so nothing here
-- needs to enforce referential integrity at the database level.

create table if not exists public.categories (
  id bigserial primary key,
  name text not null unique,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.categories enable row level security;

create policy "categories_public_read" on public.categories
  for select
  using (true);

create policy "categories_insert_with_module" on public.categories
  for insert to authenticated
  with check (has_module('products') or is_admin());

create policy "categories_update_with_module" on public.categories
  for update to authenticated
  using (has_module('products') or is_admin())
  with check (has_module('products') or is_admin());

create policy "categories_delete_with_module" on public.categories
  for delete to authenticated
  using (has_module('products') or is_admin());

-- Seed with the current 18 categories in their existing alphabetical order,
-- so nothing changes visually the moment this ships.
insert into public.categories (name, sort_order) values
  ('Action Figures', 0),
  ('Baby Toys', 1),
  ('Bags & Accessories', 2),
  ('Building Blocks', 3),
  ('Décor & Lighting', 4),
  ('Die-Cast Vehicles', 5),
  ('Dolls & Doll Houses', 6),
  ('Educational Toys', 7),
  ('Fidget & Skill Toys', 8),
  ('Games & Puzzles', 9),
  ('Household & Lifestyle', 10),
  ('Keychains', 11),
  ('Musical Toys', 12),
  ('Novelty & Gadgets', 13),
  ('Outdoor & Sports', 14),
  ('Plush Toys', 15),
  ('Remote Control Vehicles', 16),
  ('Role Play & Pretend Play', 17)
on conflict (name) do nothing;
