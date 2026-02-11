/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const images = [
  {
    input: 'public/hero.jpeg',
    output: 'public/hero.webp',
    width: 1200, // LCP 用に最適化
    quality: 85
  },
  {
    input: 'public/bar-counter.jpg',
    output: 'public/bar-counter.webp',
    width: 1400,
    quality: 75
  },
  {
    input: 'public/logo.png',
    output: 'public/logo.webp',
    width: 200,
    quality: 85 // 品質を上げて画質改善
  },
  {
    input: 'public/logo.png',
    output: 'public/logo-favicon.webp',
    width: 64,
    quality: 85,
    grayscale: true
  },
  // public/images内の画像を最適化
  {
    input: 'public/images/bottles.png',
    output: 'public/images/bottles.webp',
    width: 800,
    quality: 70
  },
  {
    input: 'public/images/room.png',
    output: 'public/images/room.webp',
    width: 600,
    quality: 75
  },
  {
    input: 'public/images/staff.png',
    output: 'public/images/staff.webp',
    width: 600,
    quality: 75
  },
  {
    input: 'public/images/wall.png',
    output: 'public/images/wall.webp',
    width: 800,
    quality: 70
  },
  {
    input: 'public/images/whiskey.png',
    output: 'public/images/whiskey.webp',
    width: 600,
    quality: 75
  },
  // 新規セクション背景用画像
  {
    input: 'public/building.jpg',
    output: 'public/building.webp',
    width: 1600,
    quality: 70
  },
  {
    input: 'public/lump.jpg',
    output: 'public/lump.webp',
    width: 1600,
    quality: 70
  },
  {
    input: 'public/billboard.jpg',
    output: 'public/billboard.webp',
    width: 1600,
    quality: 70
  }
];

  for (const img of images) {
    const inputPath = path.join(publicDir, img.input.replace(/^public\//, ''));
    const outputPath = path.join(publicDir, img.output.replace(/^public\//, ''));

    if (fs.existsSync(inputPath)) {
      let pipeline = sharp(inputPath)
        .resize({ width: img.width, withoutEnlargement: true });

      if (img.grayscale) {
        pipeline = pipeline.grayscale();
      }

      await pipeline
        .webp({ quality: img.quality })
        .toFile(outputPath);
      console.log(`Converted ${img.input} to ${path.basename(outputPath)}`);
    } else {
      console.log(`File ${img.input} not found`);
    }
  }
}

convertImages().catch(console.error);
