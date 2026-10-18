# MoneyLeak v0.7 — PWA Icon Path Fix

This package fixes the icon URL mismatch identified in the live screenshots. The repository's icon files are at the root, so `manifest.json` and `sw.js` now reference `/MoneyLeak/icon-192.png` and `/MoneyLeak/icon-512.png` instead of a missing `icons/` folder. Existing finance UI/features are preserved.

## Upload
1. Extract this ZIP.
2. Upload/replace `index.html`, `manifest.json`, `version.json`, `sw.js`, `icon-192.png`, and `icon-512.png` in the repository root.
3. Keep `.github/workflows/version.yml` in that exact folder path.
4. Commit to the branch used by GitHub Pages (`main` or `master`).
5. Ensure Actions has Settings → Actions → General → Workflow permissions → Read and write permissions.

## Verify
After GitHub Pages deploys, these should display the wallet image (not 404):
- https://ayushm321.github.io/MoneyLeak/icon-192.png
- https://ayushm321.github.io/MoneyLeak/icon-512.png

Then reopen the site in Chrome and try Install again. This fixes the confirmed missing-icon paths; if installation still fails, check Chrome's installability diagnostics next.

## Version rule
This update is v0.7. The workflow is intended to increment the version on each app-file push, excluding version.json and README.md. Verify its Actions run after upload.
