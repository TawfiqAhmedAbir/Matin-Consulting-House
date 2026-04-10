# Deployment Status

## Current production target

`netlify.toml` is configured to deploy the Next.js app from `apps/web`:

- Base directory: `apps/web`
- Build command: `npm run build`
- Publish directory: `.next`

## Release readiness

The cutover checks are complete:

1. The new app matches the legacy site closely on home, about, portfolio, and contact.
2. Screenshot captures were reviewed during parity work.
3. The new app passes `npm run lint` and `npm run build` in `apps/web`.

## Push-to-deploy expectation

Once these repository changes are committed and pushed to the branch Netlify deploys from, Netlify should build the new `apps/web` site instead of the frozen legacy folder.
