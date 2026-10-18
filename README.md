# MoneyLeak v0.6 — Installable Web App

This update fixes the PWA icon paths and cache version while preserving the existing MoneyLeak web app interface and features. It is a web app/PWA package, not an Android APK.

## Upload
1. Extract this ZIP.
2. Upload the extracted contents to the root of `AyushM321/MoneyLeak`, preserving folders.
3. Replace `index.html`, `manifest.json`, `version.json`, and `sw.js`.
4. Put the two PNGs inside `icons/` as `icon-192.png` and `icon-512.png`.
5. Keep `.github/workflows/version.yml`.
6. Commit the changes. Ensure Actions has Settings → Actions → General → Workflow permissions → Read and write permissions.

## Install on Android
Open `https://ayushm321.github.io/MoneyLeak/` in Chrome and choose Install app if available. If Chrome still refuses installation, check DevTools/Chrome remote inspection for manifest and service-worker errors; the shortcut option remains a fallback.

## Version rule
This package is `v0.6`. The workflow increments the minor version on each push to main/master that changes app files (excluding version.json and README.md). Verify the workflow run and deployed version after uploading.
