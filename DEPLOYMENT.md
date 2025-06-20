# Cloudflare Pages 部署指南

## 前置要求

1. 安装 Cloudflare CLI (Wrangler)
```bash
npm install -g wrangler
```

2. 登录 Cloudflare 账户
```bash
wrangler login
```

## 部署方式

### 方式一：使用 Cloudflare Dashboard（推荐）

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 "Pages" 部分
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 连接你的 GitHub 仓库
6. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `yarn build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (留空)
7. 点击 "Save and Deploy"

### 方式二：使用命令行

1. 构建项目：
```bash
yarn build
```

2. 部署到 Cloudflare Pages：
```bash
yarn deploy
```

3. 部署预览版本：
```bash
yarn deploy:preview
```

## 环境变量配置

在 Cloudflare Dashboard 中，你可以设置以下环境变量：

- `NODE_ENV`: `production`
- 其他项目需要的环境变量

## 自定义域名

1. 在 Cloudflare Dashboard 中进入你的 Pages 项目
2. 点击 "Custom domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录

## 性能优化

项目已配置以下优化：

- 静态资源缓存：1年
- HTML 文件：不缓存，实时更新
- 安全头配置
- SPA 路由支持

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 `yarn build` 是否在本地成功
   - 查看构建日志中的错误信息

2. **路由不工作**
   - 确保 `_redirects` 文件在 `dist` 目录中
   - 检查 Cloudflare Pages 的 "Functions" 设置

3. **资源加载失败**
   - 检查 `vite.config.js` 中的 `base` 配置
   - 确保所有资源路径正确

### 调试命令

```bash
# 本地预览构建结果
yarn preview

# 检查 dist 目录内容
ls -la dist/

# 验证 wrangler 配置
wrangler pages project list
``` 