const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public/blog/images');
const files = fs.readdirSync(imgDir);

(async () => {
  for (const file of files) {
    if (file.match(/\.(png|jpe?g)$/i)) {
      const fullPath = path.join(imgDir, file);
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const newPath = path.join(imgDir, basename + '.webp');
      
      console.log(`Processing ${file}...`);
      await sharp(fullPath)
        .resize({ width: 800, withoutEnlargement: true }) // Max 800px width
        .webp({ quality: 80 })
        .toFile(newPath);
      
      console.log(`Created ${basename}.webp`);
      
      // Delete original to force the update check, or keep it. Let's delete to ensure we don't serve huge files.
      fs.unlinkSync(fullPath);
    }
  }
})();
