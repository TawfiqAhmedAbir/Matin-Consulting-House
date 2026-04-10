# Site folder layout (junior-friendly)

This directory is what Netlify publishes (`publish` root). Everything here is either **editable branding**, **generated app output**, or **static assets** the browser loads by URL.

## Folder tree

```
maheenmatin.com/
├── index.html              # Entry: loads React bundle + branding (edit meta / script paths carefully)
├── manifest.json           # PWA metadata (name, icon path)
├── _redirects              # SPA fallback → index.html (Netlify)
│
├── branding/               # ✏️ YOUR MAIN EDITS LIVE HERE
│   ├── brand-overrides.js  # Copy, routes, DOM fixes, navigation labels
│   └── brand-overrides.css # Visual design: layout, colors, typography, components
│
├── assets/
│   └── images/             # Brand images referenced by HTML / CSS / JS (not the old React portfolio PNGs)
│       ├── logo-matin.png
│       └── background-seamless-2048.jpg
│
├── static/                 # ⚠️ Compiled Create React App output — treat as read-only
│   ├── css/
│   └── js/
│
├── docs/
│   ├── STRUCTURE.md        # This file
│   └── design-references/  # Screenshots / references for designers (not required at runtime)
│
└── *.png                   # Legacy portfolio images used by filenames inside static/js (keep names/paths)
```

## What juniors should edit

| Goal | File |
|------|------|
| Wording, headings, contact/about copy, nav labels | `branding/brand-overrides.js` |
| Look & feel: spacing, colors, fonts, responsive rules | `branding/brand-overrides.css` |
| Favicon / logo file | Replace `assets/images/logo-matin.png`, keep the same filename **or** update paths in `index.html`, `manifest.json`, and `LOGO_ASSET` in `brand-overrides.js` |
| Page title / meta | `index.html` |

## What not to hand-edit

- `static/js/main.*.js` and `static/css/main.*.css` — minified React build. To change app logic properly you’d rebuild from source or migrate to a Vite/React repo with real `src/` files.

## How requests map to files

- URL paths are relative to this folder. Example: `assets/images/logo-matin.png` is loaded as `/assets/images/logo-matin.png` when the site is served from the site root.

## Compared to a “normal” greenfield React repo

A typical new project looks like:

```
src/
  components/
  pages/
  App.tsx
  main.tsx
public/
```

Here, the **role of `src/`** is split: behavior and styles you control live under **`branding/`** and **`assets/`**, while the old **`static/`** bundle is the stand-in for compiled `src/` until you rebuild the app from source.

## Deploy

Root `netlify.toml` sets `publish = "02_rebrand_working_site/maheenmatin.com"`. After moving files, always bump the `?v=` query on branding URLs in `index.html` so visitors don’t keep cached old JS/CSS.
