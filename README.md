# Matin Consulting House

This repository now contains two parallel versions of the website:

- `legacy/current-site/maheenmatin.com` - frozen reference copy of the current site
- `apps/web` - new Next.js rebuild target

## Current deployment

Netlify is now configured to build and publish the Next.js app in `apps/web`.

## New app commands

From `apps/web`:

- `npm run lint`
- `npm run build`
- `npm run start -- --hostname 127.0.0.1 --port 3000`

## Key docs

- `docs/content-map.md`
- `docs/deployment.md`
- `docs/repo-structure.md`
- `tests/visual-regression/README.md`
