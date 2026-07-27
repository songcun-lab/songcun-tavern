#!/usr/bin/env bash
# 一键部署脚本：构建站点并推送到 gh-pages 分支（GitHub Pages 自动发布）
# 用法：./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

echo "==> Building site..."
pnpm build

echo "==> Deploying dist/ to gh-pages branch..."
cd dist
touch .nojekyll
git init -b gh-pages -q
git add -A
git -c user.name="Dr. Songcun" -c user.email="songcun-lab@users.noreply.github.com" \
  commit -m "deploy: $(date +%Y-%m-%d_%H:%M)" -q
git push -f https://github.com/songcun-lab/songcun-tavern.git gh-pages
cd ..
rm -rf dist/.git

echo "==> Done. Site: https://songcun-lab.github.io/songcun-tavern/"
