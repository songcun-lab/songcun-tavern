import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { sortPosts, filterPublished } from '../lib/utils';

export async function GET(context: APIContext) {
  const posts = sortPosts(filterPublished(await getCollection('posts')));
  return rss({
    title: '宋村清酒小酒馆',
    description: '人到中场，借 AI 重启人生。关于 AI、工作、工业、创业，以及人生下半场的一些真实记录。',
    site: context.site!,
    items: posts.map(p => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/blog/${p.slug}/`,
      categories: [p.data.category, ...p.data.tags],
    })),
    customData: '<language>zh-CN</language>',
  });
}
