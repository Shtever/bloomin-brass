# Bloomin' Brass

Website for Bloomin' Brass: handcrafted earrings made from brass reclaimed at the shooting range.

Plain HTML/CSS/JS with no build step. It's hosted on GitHub Pages from the `main` branch.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `shop.html` | The Collection (all products) |
| `product.html?id=...` | Single product page |
| `about.html` | Our story |
| `faq.html` | FAQ, care and policies |
| `contact.html` | Contact / custom orders |

## Adding or editing a product

1. Put the photo in `images/products/` (square photos look best, about 1000×1000).
2. Open `js/products.js` and copy one of the product blocks.
3. Give it a unique `id`, then fill in the name, price, image path and descriptions.
4. Commit and push. The site updates in a minute or two.

- Mark a piece as sold with `sold: true`. It stays on the site, greyed out.
- Put it on the home page with `featured: true` (up to three are shown).
- Add a checkout link (Stripe Payment Link, PayPal, etc.) in `buyUrl`. Without one, the button asks the shopper to get in touch instead.

## Settings

The contact email and social links live in the `SITE` block at the top of `js/products.js`.

## Preview locally

Open `index.html` in a browser.
