import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // GitHub Pages 部署配置；若迁移 Cloudflare Pages，改为 site: 'https://songcun-tavern.pages.dev' 并删掉 base
  site: 'https://songcun-lab.github.io',
  base: '/songcun-tavern',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
