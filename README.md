# 宋村清酒小酒馆 · Songcun Tavern

> 人到中场，借 AI 重启人生。
> Notes on AI, Work & Second Life · From Village to AGI

宋村博士的个人博客。一个安静、真实、能长期存在的地方——记录 AI 学习、职场经验、工业与能源观察、创业实践，以及人生下半场的思考。

## 技术栈

| 项目 | 选择 |
|------|------|
| 框架 | [Astro](https://astro.build)（静态站点生成） |
| 样式 | Tailwind CSS + 自定义设计变量（宣纸色 / 墨色 / 木色琥珀） |
| 内容 | Markdown / MDX（Astro Content Collections） |
| 搜索 | Fuse.js 纯静态客户端搜索 |
| 其他 | RSS、Sitemap、深色模式、响应式设计 |

无用户系统、无数据库、无后端。纯静态，十年后还能跑。

## 本地开发

```bash
# 安装依赖（需要 Node.js 18+ 和 pnpm）
pnpm install

# 启动开发服务器（http://localhost:4321）
pnpm dev

# 构建生产版本（输出到 dist/）
pnpm build

# 本地预览构建结果
pnpm preview
```

## 如何写一篇新文章

在 `src/content/posts/` 目录下新建一个 `.md` 文件（文件名即 URL slug，建议用英文短横线命名，如 `my-new-post.md`），头部写 frontmatter：

```markdown
---
title: 文章标题
description: 一两句话的摘要，会显示在列表页和搜索结果里。
date: 2026-08-01
category: AI清酒        # 六选一，见下方分类表
tags: [标签1, 标签2]     # 任意标签
featured: false          # true 则出现在首页"掌柜推荐"
draft: false             # true 则不发布（构建时忽略）
---

正文用标准 Markdown 写……
```

保存后，本地 `pnpm dev` 即时可见；推送到 GitHub 后自动重新部署。

### 六个分类

| 分类名（frontmatter 用） | 说明 |
|--------------------------|------|
| AI清酒 | AI 学习笔记、工具、工作流 |
| 人生下半场 | 中年转型、重新出发 |
| 职场手记 | 职场经验、管理、ToB |
| 工业与能源 | 煤炭、矿山、工业 AI |
| 创业小酌 | 创业实践与记录 |
| 人间杂谈 | 读书、生活、随笔 |

## 目录结构

```
songcun-tavern/
├── public/              # 静态资源（favicon、OG 图、robots.txt）
├── src/
│   ├── components/      # Header / Footer / PostCard
│   ├── content/
│   │   ├── config.ts    # 内容模型定义
│   │   └── posts/       # ★ 所有文章都在这里
│   ├── layouts/         # BaseLayout（全局布局 + SEO meta）
│   ├── lib/             # 工具函数（日期、分类、阅读时长）
│   ├── pages/           # 页面路由（首页/博客/分类/标签/归档/关于/搜索…）
│   └── styles/          # global.css（设计系统变量）
├── astro.config.mjs     # Astro 配置（site 地址在这里改）
└── tailwind.config.mjs
```

## 部署

当前部署在 **GitHub Pages**：推送到 `main` 分支后，由 GitHub Actions 自动构建并发布（见 `.github/workflows/deploy.yml`）。

公开地址：https://songcun-lab.github.io/songcun-tavern/

### 迁移到 Cloudflare Pages（可选，约 5 分钟）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create → Pages → Connect to Git，选择 `songcun-lab/songcun-tavern` 仓库
2. 构建设置：Framework preset 选 **Astro**，Build command `pnpm build`，Output directory `dist`
3. 修改 `astro.config.mjs`：`site` 改为 `https://songcun-tavern.pages.dev`，并删掉 `base` 一行
4. 修改 `public/robots.txt` 中的 Sitemap 地址为新域名
5. push 后 Cloudflare 自动构建上线；后续可在 Pages 设置里绑定自己的独立域名

如更换任何域名，都需同步修改两处：`astro.config.mjs` 中的 `site`/`base` 字段，以及 `public/robots.txt` 中的 Sitemap 地址。

## 许可

文章内容版权归作者所有，转载请注明出处。代码部分 MIT。
