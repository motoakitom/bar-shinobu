#!/usr/bin/env node

/**
 * GitHub Pages 用パス修正スクリプト
 * publicフォルダのアセットパスにbasePathを追加
 */

import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const BASE_PATH = "/bar-shinobu";
const OUT_DIR = "./out";

// 修正対象のパスパターン（basePathが付いていないpublicアセット）
const PATH_PATTERNS = [
  // 画像ファイル
  { from: /src="\/shinobu_logo\.svg"/g, to: `src="${BASE_PATH}/shinobu_logo.svg"` },
  { from: /src="\/hero\.(png|webp)"/g, to: `src="${BASE_PATH}/hero.$1"` },
  { from: /src="\/images\//g, to: `src="${BASE_PATH}/images/` },
  { from: /src="\/logo-favicon\.webp"/g, to: `src="${BASE_PATH}/logo-favicon.webp"` },
  { from: /href="\/shinobu_logo\.svg"/g, to: `href="${BASE_PATH}/shinobu_logo.svg"` },
  // PDF
  { from: /href="\/menu\.pdf"/g, to: `href="${BASE_PATH}/menu.pdf"` },
  // Favicon
  { from: /href="\/favicon\.ico"/g, to: `href="${BASE_PATH}/favicon.ico"` },
  // 背景画像 (CSS inline style)
  { from: /background-image:url\(\/images\//g, to: `background-image:url(${BASE_PATH}/images/` },
  { from: /background-image:url\(\/hero\./g, to: `background-image:url(${BASE_PATH}/hero.` },
  // Preload images (href="/images/...")
  { from: /href="\/images\//g, to: `href="${BASE_PATH}/images/` },
  // Preload hero/shinobu_logo
  { from: /href="\/(hero\.(png|webp)|shinobu_logo\.svg)"/g, to: `href="${BASE_PATH}/$1"` },
  // Favicon webp (href)
  { from: /href="\/logo-favicon\.webp"/g, to: `href="${BASE_PATH}/logo-favicon.webp"` },
  // Meta icons (without basePath)
  { from: /"href":"\/shinobu_logo\.svg"/g, to: `"href":"${BASE_PATH}/shinobu_logo.svg"` },
  { from: /"href":"\/logo-favicon\.webp"/g, to: `"href":"${BASE_PATH}/logo-favicon.webp"` },
  { from: /"href":"\/hero\.png"/g, to: `"href":"${BASE_PATH}/hero.png"` },
  { from: /"href":"\/images\//g, to: `"href":"${BASE_PATH}/images/` },
  // Internal page links
  { from: /href="\/privacy"/g, to: `href="${BASE_PATH}/privacy/` },
  { from: /href="\/terms"/g, to: `href="${BASE_PATH}/terms/` },
  // Other root files
  { from: /href="\/robots\.txt"/g, to: `href="${BASE_PATH}/robots.txt"` },
  { from: /href="\/sitemap\.xml"/g, to: `href="${BASE_PATH}/sitemap.xml"` },
];

async function* walkDir(dir) {
  const files = await readdir(dir);
  for (const file of files) {
    const path = join(dir, file);
    const stats = await stat(path);
    if (stats.isDirectory()) {
      // _next/static/chunks 内のJSファイルも対象にする
      if (file !== "_next" || dir.includes("_next/static")) {
        yield* walkDir(path);
      }
    } else if (file.endsWith(".html") || file.endsWith(".js")) {
      yield path;
    }
  }
}

async function fixPaths() {
  console.log("🔧 Fixing asset paths for GitHub Pages...");
  
  let fixedCount = 0;
  
  for await (const filePath of walkDir(OUT_DIR)) {
    const content = await readFile(filePath, "utf-8");
    const originalContent = content;
    
    let newContent = content;
    for (const pattern of PATH_PATTERNS) {
      newContent = newContent.replace(pattern.from, pattern.to);
    }
    
    if (newContent !== originalContent) {
      await writeFile(filePath, newContent, "utf-8");
      console.log(`  ✓ Fixed: ${filePath}`);
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
}

fixPaths().catch(console.error);
