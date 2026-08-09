-- FunX Universe — Phase 3 (premium rebuild): orders, cart, reviews backend
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- Additive only — does not touch products, profiles, wishlists, or audit_log.
--
-- This is schema + RLS only. No page on the live site calls any of this yet
-- (cart.html is still localStorage-only, there is no checkout UI, admin's
-- Orders tab is still "Coming Soon", reviews are still local-only on
-- product.html) — that wiring is deliberately deferred to later phases so
-- nothing half-built ships ahead of a verified backend.

-- ── cart_items ───────────────────────────────────────────────────────────
-- Persistent, per-account cart. Not wired into the app yet — a later phase
-- migrates the logged-in cart off localStorage into this.
create table if not exists public.cart_items (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null references public.products(id) on delete cascade,
  qty integer not null check (qty > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, product_id)
);

alter table public.cart_items enable row level security;

create policy "cart_items_read_own_rows" on public.cart_items
  for select to authenticated
  using (auth.uid() = user_id);

create policy "cart_items_insert_own_rows" on public.cart_items
  for insert to authenticated
  with check (auth.uid() = user_id);

create policy "cart_items_update_own_rows" on public.cart_items
  for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "cart_items_delete_own_rows" on public.cart_items
  for delete to authenticated
  using (auth.uid() = user_id);

-- ── orders / order_items ─────────────────────────────────────────────────
-- Checkout requires login (per the shopping-flow plan), so there is no
-- guest-order case to design around — user_id is always set.
create table if not exists public.orders (
  id bigserial primary key,
  order_number text generated always as ('FX-' || (10000 + id)::text) stored,
  user_id uuid not null references auth.users(id),
  status text not null default 'pending'
    check (status in ('pending','processing','shipped','delivered','cancelled')),
  subtotal numeric not null default 0,
  shipping_cost numeric not null default 0,
  total numeric not null default 0,
  currency text not null default 'PKR',
  shipping_address jsonb not null,
  contact_email text not null,
  contact_phone text,
  payment_status text not null default 'unpaid'
    check (payment_status in ('unpaid','paid','failed','refunded')),
  payment_reference text,
  tracking_number text,
  courier text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id bigserial primary key,
  order_id bigint not null references public.orders(id) on delete cascade,
  -- product_id is nullable + on delete set null so a later product deletion
  -- can never corrupt historical order records — everything needed to show
  -- an order is denormalized onto this row at purchase time.
  product_id text references public.products(id) on delete set null,
  product_name text not null,
  product_sku text,
  unit_price numeric not null,
  qty integer not null check (qty > 0),
  line_total numeric not null
);

alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "orders_read_own" on public.orders
  for select to authenticated
  using (auth.uid() = user_id);

create policy "orders_staff_read_all" on public.orders
  for select to authenticated
  using (has_module('orders') or is_admin());

create policy "orders_staff_update" on public.orders
  for update to authenticated
  using (has_module('orders') or is_admin())
  with check (has_module('orders') or is_admin());
-- Deliberately no insert policy for authenticated, and no delete policy at
-- all — see create_order() below. A raw client insert into orders/
-- order_items is rejected by RLS with no matching policy; the RPC is the
-- only path in, same pattern as audit_log's insert-only-via-trigger design.

create policy "order_items_read_own" on public.order_items
  for select to authenticated
  using (exists (
    select 1 from public.orders o
    where o.id = order_items.order_id and o.user_id = auth.uid()
  ));

create policy "order_items_staff_read_all" on public.order_items
  for select to authenticated
  using (has_module('orders') or is_admin());

-- ── create_order(): the only way an order can ever be created ────────────
-- SECURITY DEFINER, same pattern as is_admin()/has_module()/log_audit() —
-- runs with elevated rights regardless of the caller's RLS. Recomputes
-- price from products itself (never trusts a client-supplied price) and
-- locks + decrements stock inside the same transaction a row at a time
-- (FOR UPDATE), so two people buying the last unit of something can't both
-- succeed. If anything fails partway (bad product id, insufficient stock),
-- the whole transaction — including the order shell already inserted —
-- rolls back automatically; nothing partial is ever left behind.
create or replace function public.create_order(
  items jsonb,                    -- [{ "product_id": "...", "qty": 2 }, ...]
  p_shipping_address jsonb,
  p_contact_email text,
  p_contact_phone text,
  p_shipping_cost numeric default 0
)
returns table (order_id bigint, order_number text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_order_id bigint;
  v_subtotal numeric := 0;
  item jsonb;
  v_product_id text;
  v_qty integer;
  v_price numeric;
  v_stock integer;
  v_name text;
  v_sku text;
begin
  if v_user_id is null then
    raise exception 'Not authenticated';
  end if;

  if items is null or jsonb_array_length(items) = 0 then
    raise exception 'Cart is empty';
  end if;

  insert into public.orders (user_id, shipping_cost, shipping_address, contact_email, contact_phone)
  values (v_user_id, coalesce(p_shipping_cost, 0), p_shipping_address, p_contact_email, p_contact_phone)
  returning id into v_order_id;

  for item in select * from jsonb_array_elements(items)
  loop
    v_product_id := item->>'product_id';
    v_qty := (item->>'qty')::integer;

    if v_product_id is null or v_qty is null or v_qty <= 0 then
      raise exception 'Invalid cart line: %', item;
    end if;

    select coalesce(sale_price, price), quantity, name, sku
      into v_price, v_stock, v_name, v_sku
      from public.products
      where id = v_product_id
      for update;

    if not found then
      raise exception 'Product % no longer exists', v_product_id;
    end if;

    if v_stock < v_qty then
      raise exception 'Not enough stock for %: % requested, % available', v_name, v_qty, v_stock;
    end if;

    update public.products set quantity = quantity - v_qty where id = v_product_id;

    insert into public.order_items (order_id, product_id, product_name, product_sku, unit_price, qty, line_total)
    values (v_order_id, v_product_id, v_name, v_sku, v_price, v_qty, v_price * v_qty);

    v_subtotal := v_subtotal + (v_price * v_qty);
  end loop;

  update public.orders
    set subtotal = v_subtotal, total = v_subtotal + coalesce(p_shipping_cost, 0)
    where id = v_order_id;

  return query select o.id, o.order_number from public.orders o where o.id = v_order_id;
end;
$$;

-- ── audit: extend the existing log_audit() trigger to orders ─────────────
-- log_audit() (defined in phase3-schema.sql) already special-cases
-- 'profiles' to skip ordinary edits; every order UPDATE (status, tracking,
-- payment) is meaningful, so orders gets no such filtering.
drop trigger if exists audit_orders on public.orders;
create trigger audit_orders
  after update on public.orders
  for each row execute function public.log_audit();

-- ── reviews ────────────────────────────────────────────────────────────
-- Verified-purchase-only is enforced here, at the database level, not just
-- in whatever UI eventually calls this — a real delivered order_item for
-- the product is required before an insert is even accepted.
create table if not exists public.reviews (
  id bigserial primary key,
  product_id text not null references public.products(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  order_item_id bigint references public.order_items(id) on delete set null,
  rating integer not null check (rating between 1 and 5),
  title text,
  body text,
  photo_urls text[] not null default '{}',
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

alter table public.reviews enable row level security;

create policy "reviews_public_read_approved" on public.reviews
  for select
  using (status = 'approved');

create policy "reviews_read_own" on public.reviews
  for select to authenticated
  using (auth.uid() = user_id);

create policy "reviews_staff_read_all" on public.reviews
  for select to authenticated
  using (has_module('marketing') or is_admin());

create policy "reviews_insert_verified_purchase" on public.reviews
  for insert to authenticated
  with check (
    auth.uid() = user_id
    and exists (
      select 1
      from public.order_items oi
      join public.orders o on o.id = oi.order_id
      where oi.product_id = reviews.product_id
        and o.user_id = auth.uid()
        and o.status = 'delivered'
    )
  );

-- A customer can edit their own review while it's still pending, but the
-- WITH CHECK requires it to STAY pending — this is what stops someone
-- editing their own row straight to status='approved' and skipping
-- moderation entirely (RLS has no column-level granularity, so the row's
-- shape after the edit is the only thing that can be constrained).
create policy "reviews_update_own_while_pending" on public.reviews
  for update to authenticated
  using (auth.uid() = user_id and status = 'pending')
  with check (auth.uid() = user_id and status = 'pending');

create policy "reviews_staff_moderate" on public.reviews
  for update to authenticated
  using (has_module('marketing') or is_admin())
  with check (has_module('marketing') or is_admin());

create policy "reviews_delete_own" on public.reviews
  for delete to authenticated
  using (auth.uid() = user_id);
