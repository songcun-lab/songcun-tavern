import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { filterPublished, formatDateISO } from '../lib/utils';

export const GET: APIRoute = async () => {
  const posts = filterPublished(await getCollection('posts'));
  const index = posts.map(p => ({
    slug: p.slug,
    title: p.data.title,
    description: p.data.description,
    category: p.data.category,
    tags: p.data.tags,
    date: formatDateISO(p.data.date),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
