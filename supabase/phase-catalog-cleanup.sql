-- FunX Universe — catalog data-quality cleanup
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- Context: FunX_products_complete.csv was compared against the live
-- `products` table and matches it row-for-row — the import was correct,
-- the source CSV itself just has a handful of rough entries. Display-side
-- title-casing (common.jsx's titleCase()) already fixes ALL-CAPS names
-- cosmetically at render time, so this script only touches things that
-- title-casing CANNOT fix: real spelling mistakes, each backed by evidence
-- in the product's own description field — nothing here is guessed.

-- ── Typo fixes (name only — descriptions already say the correct word) ────
update public.products set name = 'Gearbox' where id = 'garebox-62';
-- description reads "The Gearbox Keychain is a creative and stylish accessory..."

update public.products set name = 'Ford Raptor' where id = 'ford-rapter-69';
-- "Rapter" -> "Raptor", matching the real Ford Raptor this is modeled on

update public.products set name = 'Tom and Jerry' where id = 'tom-nd-jerry-57';
-- description reads "this Tom & Jerry Keychain"

-- ── Everything else found in the audit is flagged, not changed ────────────
-- These need a decision only the store owner can make (real product
-- identity or a real price is commercial data, not a display bug):
--
-- 1. Priced at 0 despite having real descriptions and real stock —
--    already excluded from the storefront (common.jsx filters
--    `p.price > 0`), so nothing is broken for customers today, but they
--    can never go live until someone sets a real price:
--      guitar-2   (GUITAR,  qty 1)
--      yoyo-3     (YOYO,    qty 2)
--
-- 2. Zero price, zero stock, no description at all — true empty stub
--    rows, also already excluded from the storefront:
--      stuff-toys-49, keychains-54, antique-cars-68
--
-- 3. Name gives no real identity even after title-casing, and nothing in
--    the description clarifies it further — needs the owner to say what
--    the actual product is:
--      100-56   (Keychains, SKU KC-002) — likely a "100" novelty keychain,
--               but that's a guess, not a confirmed fact
--      lzxvs-71 (Die-Cast Vehicles, SKU DC-006) — description is generic
--               boilerplate with no real model name in it anywhere
--
-- 4. Likely duplicates — same category/price/description shape under two
--    different SKUs. Left as two separate live rows since deleting either
--    one would silently remove real inventory without confirmation:
--      bowling-game-40 (GM-005) vs bowling-game-66 (GM-006)
--      rivalry-rc-car-42 (RC-002, "Rivalry rc car") vs
--        rivalry-car-65 (DC-002, "RIVALRY CAR") — close enough in name/
--        price/category to be worth a second look, though these may
--        genuinely be a Die-Cast vs RC version of the same toy
