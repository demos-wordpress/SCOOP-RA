# SCOOPÉRA — portable sales page

A complete, prebuilt static sales website for the SCOOPÉRA WordPress theme.

**Start with [START-HERE.md](START-HERE.md)** for upload and hosting instructions in Roman Hindi.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Sales copy, pricing, FAQs and screenshot preview dialog |
| `styles.css` | Responsive cream, pink and chocolate design |
| `app.js` | Screenshot viewer, keyboard controls and checkout activation |
| `config.js` | Seller-supplied Gumroad checkout URL |
| `assets/` | Bundled screenshots, local fonts and font licences |
| `ASSET-CREDITS.md` | Image and font attribution |
| `.nojekyll` | Optional static-host compatibility file |

There is no installation, framework dependency, server runtime or build requirement. Upload the extracted files, keeping `index.html` at the publishing root. All content assets use relative paths.

## Checkout

All three purchase controls read `checkoutUrl` from `config.js`. It is already set to:

https://muaazshk6.gumroad.com/l/scoopera-wordpress-theme?wanted=true

The query parameter is retained. Checkout availability, the current Gumroad price and payment completion were not independently verified. The display price remains $29 USD. No payment credentials or paid theme download are embedded in this export.

## Hosting

Store this source in a GitHub repository. For this commercial sales page, connect that repository to Cloudflare Pages or another suitable static host. GitHub Pages' official usage limits restrict sites primarily intended to facilitate commercial transactions, so direct GitHub Pages hosting is not recommended for this offer.

Cloudflare settings for these root-level files: production branch `main`, no framework preset, build command `exit 0`, output directory `.`, root directory blank. No environment variables are needed.

This is a standalone export of the sales page, not the installable PHP WordPress theme. It does not depend on the existing private preview or a ChatGPT login. The hosted preview was not changed by creating this export.

## Validation scope

The archive's local asset references, section targets, checkout selector count, font notices and JavaScript syntax were checked. The files match the current sales-page source. A fresh rendered browser test, user-account deployment and live transaction were not performed.
