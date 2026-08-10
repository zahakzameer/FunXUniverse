# FunX Universe — Toy Store Website

Static multi-page site (HTML + React). Pages author JSX directly (no local build step needed for development — open `index.html` and it runs via in-browser Babel same as always). Deployment now precompiles that JSX ahead of time — see **Deploying** below.

## Structure
- `index.html` — Homepage
- `toys-plush.html`, `new.html`, `trending.html`, `collectibles.html`, `sale.html` — Category/listing pages
- `product.html?id=p1` — Product detail page (reads `?id=` query param)
- `cart.html`, `wishlist.html`, `search.html` — Shopping utility pages
- `authentication.html`, `forgot-password.html`, `account.html` — Auth
- `contact.html`, `shipping.html`, `returns.html`, `track-order.html` — Support
- `story.html`, `journal-post.html`, `provenance.html`, `press.html` — Brand/editorial
- `privacy.html`, `terms.html` — Legal
- `common.jsx` — Shared header/footer/product-card/cart logic, loaded by every page via `<script type="text/babel" src="common.jsx">`
- `motion.js` / `motion.css` — Site-wide scroll-reveal, tilt, sound micro-interactions
- `hero-portal.js` — Three.js particle hero effect (homepage)
- `tokens/colors.css`, `styles.css` — Design tokens and base styles
- `_ds_bundle.js` — Design-system component library (buttons, badges, inputs, etc.)
- `assets/` — Logos and static images
- `image-slot.js` — Drag-and-drop image placeholder component (used where real product photos aren't uploaded yet)

## Notes
- All product data lives in `common.jsx` (`PRODUCTS` array, 100 items) — edit there to add/change products.
- Cart/wishlist state is stored in `localStorage` (`funx_cart` key).
- Theme (light/dark) toggle persists to `localStorage` (`funx_theme` key).
- No backend — contact form, checkout, and auth are front-end only (no real submission yet).

## Deploying
`.github/workflows/deploy.yml` runs on every push to `main`: it precompiles `common.jsx` and each page's inline JSX to plain JS (`scripts/build.js`) into `dist/`, then deploys `dist/` to GitHub Pages — visitors' browsers no longer run Babel at all. This requires a one-time repo setting: **Settings → Pages → Build and deployment → Source: "GitHub Actions"** (not "Deploy from a branch").

To build locally: `npm install && npm run build`, output lands in `dist/`.
