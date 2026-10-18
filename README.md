# MoneyLeak Android APK build (GitHub website workflow)

This package wraps the existing MoneyLeak `index.html` app in a native Android shell using Capacitor. The finance app UI and features are kept in the web app; no local terminal or Android Studio is required to build the APK.

## Upload to GitHub
1. Open `https://github.com/AyushM321/MoneyLeak` in a browser and select the `main` branch (or `master` if that is the repository's default branch).
2. Extract this ZIP on your device/computer. Upload/replace the files and folders in this ZIP into the repository root, keeping their folder paths. Do not upload the ZIP file itself. Do not delete your existing files.
3. In GitHub, open **Settings → Actions → General → Workflow permissions**. Select **Read and write permissions**, then save.
4. Commit the uploaded files. Open the repository's **Actions** tab and select **MoneyLeak Android APK and Auto Version**. Wait for the run to finish green.
5. Open that workflow run, scroll to **Artifacts**, and download the `MoneyLeak-vX.Y-APK` artifact. Extract it; the `.apk` file is the installer.
6. Send the APK to your Android phone and open it. Android may ask you to allow installing unknown apps for the app you used to open the APK. Only install APKs you built from your own repository.

## Automatic versioning
Every push to `main`/`master` that changes app files runs the workflow and increments `version.json` (for example, `0.3` → `0.4` → `0.5`) before building the APK. The workflow commits the new version back to GitHub and sets the Android `versionName` and `versionCode`. The `version.json`-only commit does not start another build.

## Important
- This first APK is a **debug APK**. It is installable for personal use, but it is not a Play Store release package.
- This does not automatically install updates on the phone. For each new version, download and install the newly built APK; Android may ask to confirm the update. Keep the same package ID and install signing identity for seamless in-place updates. A future release workflow can create a properly signed release APK/AAB, but that requires a private signing key.
- The APK build runs in GitHub Actions; this ZIP itself is not an APK.
