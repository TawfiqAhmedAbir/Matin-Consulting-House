# Matin Consulting House — published site folder

Netlify **publish directory**: this folder (`02_rebrand_working_site/maheenmatin.com`).

## Layout (quick mental model)

| Path | Purpose |
|------|---------|
| **`branding/`** | Edit these: `brand-overrides.js` (copy / behavior), `brand-overrides.css` (design). |
| **`assets/images/`** | Brand images: logo, full-page background tile, etc. |
| **`static/`** | Old **Create React App** build output — do not edit by hand. |
| **`docs/`** | Extra documentation and design references (not needed for the site to run). |
| **`index.html`** | Loads React + branding; favicon paths live here. |

Full detail: **[docs/STRUCTURE.md](docs/STRUCTURE.md)**

## Local preview

```bash
python -m http.server 4174
```

Open [http://127.0.0.1:4174/](http://127.0.0.1:4174/)

## After you change branding files

Bump the `?v=...` query string on the `<link>` and `<script>` tags for `branding/brand-overrides.*` in **`index.html`** so browsers fetch fresh files.

## Portfolio images at repo root

Files like `redditClone.png`, `portfolioProject.png`, `gameProject.png` stay beside `index.html` because the **compiled** React bundle references those **exact filenames**. If you replace an image, keep the filename or rebuild the app from its React source.
