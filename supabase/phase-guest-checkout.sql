-- FunX Universe — guest checkout
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- What this does:
--   1. Makes orders.user_id nullable — a guest order has no account behind it.
--   2. Replaces create_order() so it accepts an unauthenticated caller,
--      requiring a real contact_email in that case (already a required
--      column) instead of raising "Not authenticated".
--   3. Adds lookup_order(): the only way anyone — guest or signed-in —
--      can read an order back without being signed in as its owner. It
--      requires BOTH the exact order number and the exact contact email,
--      the same two-factor pattern virtually every "track my order" page
--      uses; order numbers alone are sequential and guessable, but the
--      email pairing makes that harmless. Returns a plain jsonb blob
--      (order fields + line items), never a raw table row, so it can't
--      leak anything beyond what's explicitly selected here.
--
-- Does NOT touch orders_read_own / orders_staff_read_all RLS — a signed-in
-- customer still sees their own order history exactly as before; this is
-- additive, for the no-account case.

alter table public.orders alter column user_id drop not null;

create or replace function public.create_order(
  items jsonb,
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
  if v_user_id is null and (p_contact_email is null or p_contact_email = '') then
    raise exception 'A contact email is required to check out as a guest';
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

grant execute on function public.create_order(jsonb, jsonb, text, text, numeric) to anon;

create or replace function public.lookup_order(
  p_order_number text,
  p_contact_email text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order record;
  v_items jsonb;
begin
  select * into v_order
    from public.orders
    where order_number = p_order_number
      and lower(contact_email) = lower(p_contact_email);

  if not found then
    return null;
  end if;

  select coalesce(jsonb_agg(jsonb_build_object(
      'product_name', oi.product_name,
      'qty', oi.qty,
      'unit_price', oi.unit_price,
      'line_total', oi.line_total
    )), '[]'::jsonb) into v_items
    from public.order_items oi
    where oi.order_id = v_order.id;

  return jsonb_build_object(
    'order_number', v_order.order_number,
    'status', v_order.status,
    'subtotal', v_order.subtotal,
    'shipping_cost', v_order.shipping_cost,
    'total', v_order.total,
    'currency', v_order.currency,
    'tracking_number', v_order.tracking_number,
    'courier', v_order.courier,
    'created_at', v_order.created_at,
    'items', v_items
  );
end;
$$;

grant execute on function public.lookup_order(text, text) to anon, authenticated;

-- authentication.html's "verify this order is genuine" check previously
-- accepted ANY input longer than 2 characters as a real order — a fake
-- check on a page whose entire purpose is fraud prevention. This gives it
-- a real, minimal-exposure yes/no: order number alone, no email required
-- (lower stakes than full tracking), and it returns nothing but a boolean
-- — never status, total, or contact info — so it can't be used to probe
-- real order details the way a full lookup could.
create or replace function public.order_exists(
  p_order_number text
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (select 1 from public.orders where order_number = p_order_number);
$$;

grant execute on function public.order_exists(text) to anon, authenticated;
