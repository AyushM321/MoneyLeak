MoneyLeak v0.3 app setup bundle
================================

Contains:
- manifest.json (install metadata)
- icons/icon-192.png and icons/icon-512.png (custom MoneyLeak app icon)
- version.json (initial version)
- .github/workflows/version.yml (increments the displayed version on subsequent main-branch pushes)

IMPORTANT:
This bundle does not contain a replacement index.html. Your current index.html contains the finance app, and replacing it with a newly invented file could destroy features or data handling. To finish the integration, index.html must be updated to:
1. Add <link rel="manifest" href="manifest.json"> and theme-color meta in <head>.
2. Show a version badge beside MoneyLeak and fetch version.json on load.
3. Optionally register a service worker for offline support.

The version workflow increments to v0.3 on its first run, then advances on later pushes to main. In GitHub, ensure Settings > Actions > General allows workflows to have read/write repository permissions.

Upload paths to the repository root exactly as shown in this ZIP.
