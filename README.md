# FunX Universe — Toy Store Website

Static multi-page site (HTML + React via CDN/Babel, no build step). Open `index.html` directly or serve the folder with any static host (GitHub Pages, Netlify, Vercel).

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
Just push this folder to a GitHub repo and enable **GitHub Pages** (Settings → Pages → deploy from branch, root folder), or drag the folder into Netlify/Vercel.
