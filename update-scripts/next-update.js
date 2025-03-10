
const fs = require('fs');
const path = require('path');

// Read package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Update scripts for Next.js
packageJson.scripts = {
  ...packageJson.scripts,
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
};

// Save updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Package.json updated for Next.js migration');
