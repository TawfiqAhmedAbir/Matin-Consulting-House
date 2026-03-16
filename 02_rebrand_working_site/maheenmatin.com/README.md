# Website Maintenance Guide (Junior-Friendly)

This project is a mirrored React build with a customization layer on top.

## Quick File Map

- `index.html` - entry file; loads the compiled app and custom overrides.
- `brand-overrides.css` - visual customization layer (layout, colors, nav, hero polish).
- `brand-overrides.js` - text/content customization layer (home/about/contact/nav labels).
- `manifest.json` - app metadata (name, icon, theme color).
- `_redirects` - SPA routing rule for Netlify-style hosting.
- `logo-matin.png`, `cover-matin.png` - brand assets used by HTML/CSS/JS.
- `redditClone.png`, `portfolioProject.png`, `gameProject.png` - project images used by the compiled app.
- `static/` - compiled React bundle and fonts (treat as build output).

## Safe To Edit vs Do Not Touch

- Safe to edit:
  - `brand-overrides.css`
  - `brand-overrides.js`
  - `manifest.json`
  - `index.html` (only metadata and include paths)
- Avoid editing directly:
  - `static/js/main.37a8e69e.js`
  - `static/css/main.5662ea01.css`
  - Files under `static/media/`

## Common Changes (Where To Edit)

- Change brand text (title, headings, About/Contact copy):
  - Edit constants and section updaters in `brand-overrides.js`.
- Change styles (colors, spacing, nav buttons, hero look):
  - Edit `brand-overrides.css`.
- Change favicon/app icon:
  - Replace `logo-matin.png`, then confirm `index.html` and `manifest.json` point to it.
- Change background texture:
  - Replace `cover-matin.png`, then adjust `body` background rules in `brand-overrides.css` if needed.

## How The Customization Layer Works

1. The original app renders from the compiled bundle in `static/`.
2. `brand-overrides.css` overrides styles after the main CSS loads.
3. `brand-overrides.js` updates labels/text after render.
4. A `MutationObserver` reapplies branding when React rerenders.

## Local Run

From this folder (`maheenmatin.com/`):

```bash
python -m http.server 4174
```

Then open:

- [http://127.0.0.1:4174/](http://127.0.0.1:4174/)

## Pre-Release Checklist

- Homepage loads without console errors.
- Navigation hover labels do not overlap icons.
- Brand name appears correctly in title and page text.
- About and Contact text matches current messaging.
- Mobile layout still looks acceptable around header and hero sections.
