# MoneyLeak Web App v0.5

Mobile-first installable web app. Existing finance features and dark emerald interface are preserved. This package is for the web app/PWA only; Android APK build files are intentionally excluded.

## Upload to GitHub
1. Extract this ZIP.
2. Upload its contents to the root of `AyushM321/MoneyLeak`, preserving folder paths.
3. Replace `index.html`, `manifest.json`, `version.json`, `sw.js`, and the `icons/` files.
4. Keep `.github/workflows/version.yml`.
5. In Settings → Actions → General → Workflow permissions, select Read and write permissions.
6. Commit to `main` or `master`.

## Install on Android
1. Open https://ayushm321.github.io/MoneyLeak/ in Chrome.
2. Open Chrome's menu and choose Install app or Add to Home screen.
3. Launch MoneyLeak from its home-screen icon for a standalone app-like window.
4. If an older installation shows stale files, open the site online and reopen the app; if necessary, remove the old installation and install again.

## Versioning
This package starts at `0.5`. The workflow increments the minor version for each push to main/master except changes limited to `version.json` or `README.md` (for example 0.5 → 0.6). The app displays the value fetched from `version.json`.

GitHub Actions must have contents write permission. Check the live Pages site after the workflow completes; the repository's existing Pages publishing setup determines how updates go live.
