# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Status

This is a static (no-build) HTML/CSS/vanilla-JS event landing site (Korean, mobile-first) for company workshop/tour events, e.g. "제주 드림투어". There is no Node/npm toolchain in this environment — do not assume `npm`/`npx` are available.

## Build/lint/test

None. There is no build step, package.json, linter, or test suite. Open `index.html` directly in a browser (or serve the folder statically) to preview; there is no single-test command because there are no tests.

## Architecture

- Pure static site: `index.html`, `schedule.html`, `upload.html`, `location.html`, `faq.html`, `survey.html`, each loading `css/style.css` then `js/content.js` → `js/main.js` → a page-specific script (`home.js`/`schedule.js`/`upload.js`/`location.js`/`faq.js`/`survey.js`) in that order.
- `js/content.js` is the single content data file (event name, date, notice banner, rain-plan, contact/staff, meeting info, `schedule[]`, `locations[]`, `checklist[]`, `faq[]`, `survey`, `sectionsEnabled`) — the source of truth non-developers edit between events, either by hand or via `editor.html`. It's heavily commented in Korean.
- Participant photo upload has no backend: each `schedule[]` item can carry `photoUpload: { enabled, formUrl, driveFolderUrl }`. `formUrl` is a Google Form (file-upload question) participants submit to; `driveFolderUrl` is the Drive folder those responses land in, embedded read-only via `https://drive.google.com/embeddedfolderview?id=...` (same no-API-key embed pattern as the Google Maps embed on the location page). `js/photo-upload.js` holds the shared helpers (`extractDriveFolderId`, `driveFolderEmbedUrl`, `hasAnyUploadSection`, `buildUploadCard`); `upload.html`/`js/upload.js` lists every enabled item, `schedule.js`'s accordion just links to `upload.html` instead of duplicating the widget, and `main.js`/`home.js` only show the "사진업로드" nav tab/quick-menu entry when `hasAnyUploadSection` is true.
- `sectionsEnabled` (rainPlan/staff/meetingSummary/checklist/faq/survey) lets an operator hide a whole optional section for one event without deleting its data — `home.js` checks it before rendering each block, and `main.js` filters the FAQ/survey nav tabs by it.
- `js/main.js` renders shared chrome on every page (notice banner, sticky header, floating call-now button, bottom tab nav) based on `document.body.dataset.page`.
- Each page's own script renders its `<div id="*-content">` from `window.CONTENT` using small HTML-string builder functions (`escapeHtml`, `telHref`, `mapButtonHtml` are shared helpers defined in `main.js`).
- `editor.html` + `js/editor.js` + `css/editor.css` are an operator-only, no-backend form editor: it loads `js/content.js` into `window.CONTENT`, deep-clones it into a local `state` object, lets you edit/add/remove/reorder every field through form controls (each dynamic list row binds inputs directly to the object reference in `state`, so re-render only happens on add/remove/move — not on every keystroke), and on "저장" serializes `state` back into a `window.CONTENT = {...}` file via `Blob`/`URL.createObjectURL` for the operator to download and overwrite `js/content.js` with. It is not linked from the visitor-facing nav and has no auth — treat it as unlisted, not private.
- `projects.html` + `js/projects.js` + `js/project-store.js` layer optional multi-draft management on top of the editor via `localStorage` (browser-local only, never deployed data): each draft is `dreamtour_project_<id>` plus an index at `dreamtour_project_index`. Opening `editor.html?project=<id>` makes `editor.js` read `PROJECT_ID` from the query string, seed `state` from that stored draft instead of `window.CONTENT`, and debounce-autosave every edit back to `localStorage` via `markDirty()`. Opening `editor.html` with no `project` param keeps the original single-project behavior (seeds from `window.CONTENT`, no autosave, "unsaved changes" warning on unload). Either way, `content.js` 파일 저장 is still required to actually ship a draft to the live site.
- No frameworks, bundler, or npm dependencies — everything runs directly in the browser via `<script src>` tags.
- Deploy target is static hosting (Vercel "Other" framework preset, or GitHub Pages) — see [README.md](README.md) for the operator-facing editing/deploy guide.
