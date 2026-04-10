# Content Map

## Legacy source

The frozen legacy content still lives in:

- `legacy/current-site/maheenmatin.com/branding/brand-overrides.js`
- `legacy/current-site/maheenmatin.com/branding/brand-overrides.css`

## New app source of truth

Structured content now lives in:

- `apps/web/content/site.ts`
- `apps/web/content/home.ts`
- `apps/web/content/about.ts`
- `apps/web/content/portfolio.ts`
- `apps/web/content/contact.ts`

## UI mapping

- Home hero: `apps/web/components/home/Hero.tsx`
- About page: `apps/web/components/about/AboutOverview.tsx`
- Portfolio page: `apps/web/components/portfolio/PortfolioGrid.tsx`
- Contact page: `apps/web/components/contact/ContactOverview.tsx`
- Shared shell: `apps/web/app/layout.tsx` and `apps/web/app/globals.css`
