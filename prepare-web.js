const fs = require('fs');
const path = require('path');
const root = process.cwd();
const out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'manifest.json', 'version.json', 'sw.js']) {
  if (fs.existsSync(path.join(root, file))) fs.copyFileSync(path.join(root, file), path.join(out, file));
}
if (fs.existsSync(path.join(root, 'icons'))) fs.cpSync(path.join(root, 'icons'), path.join(out, 'icons'), { recursive: true });
console.log('Prepared existing MoneyLeak web app for Android without changing its features.');
