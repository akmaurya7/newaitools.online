const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Replace text-ink/35 through text-ink/65 with text-ink/70
      const originalContent = content;
      content = content.replace(/text-ink\/(35|40|45|50|55|60|65)/g, 'text-ink/70');
      // Replace text-white/60 with text-white/75
      content = content.replace(/text-white\/(50|55|60|65)/g, 'text-white/80');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated contrast in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'frontend/components'));
processDirectory(path.join(__dirname, 'frontend/App.tsx')); // Or handle files explicitly
const appPath = path.join(__dirname, 'frontend', 'App.tsx');
if(fs.existsSync(appPath)) {
  let content = fs.readFileSync(appPath, 'utf8');
  const original = content;
  content = content.replace(/text-ink\/(35|40|45|50|55|60|65)/g, 'text-ink/70');
  content = content.replace(/text-white\/(50|55|60|65)/g, 'text-white/80');
  if(content !== original) {
    fs.writeFileSync(appPath, content, 'utf8');
    console.log(`Updated contrast in ${appPath}`);
  }
}
console.log("Done.");
