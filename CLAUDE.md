# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

This is a static (no-build) HTML/CSS/vanilla-JS event landing site (Korean, mobile-first) for company workshop/tour events, e.g. "제주 드림투어". There is no Node/npm toolchain in this environment — do not assume `npm`/`npx` are available.

## Build/lint/test

None. There is no build step, package.json, linter, or test suite. Open `index.html` directly in a browser (or serve the folder statically) to preview; there is no single-test command because there are no tests.

## Architecture

- Pure static site: `index.html`, `schedule.html`, `location.html`, `faq.html`, `survey.html`, each loading `css/style.css` then `js/content.js` → `js/main.js` → a page-specific script (`home.js`/`schedule.js`/`location.js`/`faq.js`/`survey.js`) in that order.
- `js/content.js` is the single content data file (event name, date, notice banner, rain-plan, contact/staff, meeting info, `schedule[]`, `locations[]`, `checklist[]`, `faq[]`, `survey`) — this is the only file non-developers should need to edit between events. It's heavily commented in Korean.
- `js/main.js` renders shared chrome on every page (notice banner, sticky header, floating call-now button, bottom tab nav) based on `document.body.dataset.page`.
- Each page's own script renders its `<div id="*-content">` from `window.CONTENT` using small HTML-string builder functions (`escapeHtml`, `telHref`, `mapButtonHtml` are shared helpers defined in `main.js`).
- No frameworks, bundler, or npm dependencies — everything runs directly in the browser via `<script src>` tags.
- Deploy target is static hosting (Vercel "Other" framework preset, or GitHub Pages) — see [README.md](README.md) for the operator-facing editing/deploy guide.
