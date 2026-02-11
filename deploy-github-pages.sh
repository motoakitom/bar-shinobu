#!/bin/bash

# GitHub Pages デプロイスクリプト
# 使用方法: ./deploy-github-pages.sh

set -e

echo "🔨 Building..."
npm run build

echo "📦 Preparing deployment..."
cd out

# Gitが初期化されていなければ初期化
if [ ! -d .git ]; then
  git init
  git remote add origin $1
fi

echo "📝 Committing..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "🚀 Pushing to GitHub Pages..."
git push -u origin main

echo "✅ Deployment complete!"
echo "Your site will be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com\///' | sed 's/\.git$//).github.io"
