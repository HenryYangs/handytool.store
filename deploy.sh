#!/bin/bash

echo "🚀 开始部署到 Cloudflare Pages..."

# 检查是否安装了 wrangler
if ! command -v wrangler &> /dev/null; then
    echo "❌ 未找到 wrangler，请先安装：npm install -g wrangler"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功"

# 部署到 Cloudflare Pages
echo "🌐 部署到 Cloudflare Pages..."
wrangler pages deploy dist

if [ $? -eq 0 ]; then
    echo "✅ 部署成功！"
    echo "🎉 你的网站已经部署到 Cloudflare Pages"
else
    echo "❌ 部署失败"
    exit 1
fi 