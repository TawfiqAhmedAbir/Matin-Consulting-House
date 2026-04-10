# Repository Structure

## Legacy reference

- `legacy/current-site/maheenmatin.com`
  - frozen website reference
  - do not treat this as the future source of truth

## New app

- `apps/web/app`
  - route files and layout
- `apps/web/components`
  - reusable page sections and layout pieces
- `apps/web/content`
  - structured copy and data
- `apps/web/lib`
  - route/constants/helpers
- `apps/web/public/images`
  - copied brand and portfolio assets used by the rebuild
- `apps/web/styles`
  - shared styling tokens and utilities

## Tests and comparison

- `tests/reference-screenshots`
  - legacy reference captures
- `tests/visual-regression`
  - parity capture script and generated comparison output

## Utility and docs

- `scripts/serve-legacy.py`
  - local legacy preview helper
- `docs/`
  - migration, deployment, and repo guidance
