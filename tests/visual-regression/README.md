# Visual Regression Workflow

Use this folder to compare the frozen legacy site with the new Next.js app.

## Install Playwright

From `tests/visual-regression` run:

`npm install`

This installs the local `playwright` dependency used by `capture-parity.mjs`.

## Required servers

Run the legacy preview on port `4310` and the built Next app on `3000`.

Terminal A from the repo root:

`python scripts/serve-legacy.py`

Terminal B from `apps/web`:

`npm run build`

Then:

`npm run start -- --hostname 127.0.0.1 --port 3000`

`next start` serves the last `.next` build, so always run `npm run build` again after source changes before capturing screenshots.

## Capture screenshots

From the repo root run:

`node tests/visual-regression/capture-parity.mjs`

Optional environment variables:

- `LEGACY_BASE_URL` defaults to `http://127.0.0.1:4310`
- `WEB_BASE_URL` defaults to `http://127.0.0.1:3000`

The capture script loads the legacy portfolio page at `/projects` (CRA route) while the Next app uses `/portfolio`, so the `portfolio.png` pair compares the same content on both sides.

This writes:

- `tests/reference-screenshots/legacy/*.png`
- `tests/visual-regression/current/*.png`

These image pairs can be compared manually or used as the baseline for a future automated image diff step.
