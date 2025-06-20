# handytool.store

This repo is the source code of [handytool.store](http://www.handytool.store)

## 🚀 快速部署

### 方式一：使用 Cloudflare Dashboard（推荐）

1. Fork 或克隆此仓库
2. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. 进入 "Pages" 部分
4. 点击 "Create a project"
5. 选择 "Connect to Git"
6. 连接你的 GitHub 仓库
7. 配置构建设置：
   - **Framework preset**: None
   - **Build command**: `yarn build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (留空)
8. 点击 "Save and Deploy"

### 方式二：使用命令行

1. 安装 Cloudflare CLI：
```bash
npm install -g wrangler
```

2. 登录 Cloudflare：
```bash
wrangler login
```

3. 部署项目：
```bash
./deploy.sh
```

### 方式三：使用 GitHub Actions（自动部署）

1. 在 GitHub 仓库设置中添加以下 Secrets：
   - `CLOUDFLARE_API_TOKEN`: 你的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare Account ID

2. 推送代码到 main/master 分支即可自动部署

## 🛠️ 本地开发

```bash
# 安装依赖
yarn install

# 启动开发服务器
yarn dev

# 构建项目
yarn build

# 预览构建结果
yarn preview
```

## 📁 项目结构

```
├── src/
│   ├── pages/          # 多页面应用
│   ├── components/     # Svelte 组件
│   └── utils/          # 工具函数
├── dist/               # 构建输出目录
├── public/             # 静态资源
└── script/             # 构建脚本
```

## 🔧 技术栈

- **框架**: Svelte 4
- **构建工具**: Vite
- **样式**: Sass
- **部署**: Cloudflare Pages

## �� 许可证

MIT License
