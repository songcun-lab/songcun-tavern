import type { CollectionEntry } from 'astro:content';

/** Prefix an internal path with the configured base (for GitHub Pages sub-path deploys). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!path.startsWith('/')) path = '/' + path;
  return base + path;
}

/** Format date as YYYY年M月D日 */
export function formatDate(date: Date): string {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

/** Format date as YYYY-MM-DD */
export function formatDateISO(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Category slug mapping (Chinese category → URL-safe slug) */
const CATEGORY_SLUGS: Record<string, string> = {
  'AI清酒': 'ai',
  '人生下半场': 'second-half',
  '职场手记': 'career',
  '工业与能源': 'industry',
  '创业小酌': 'startup',
  '人间杂谈': 'life',
};

export function categorySlug(category: string): string {
  return CATEGORY_SLUGS[category] ?? encodeURIComponent(category);
}

export function slugToCategory(slug: string): string | undefined {
  return Object.entries(CATEGORY_SLUGS).find(([, s]) => s === slug)?.[0];
}

export const ALL_CATEGORIES = Object.keys(CATEGORY_SLUGS);

/** Category metadata: description + tavern flavor */
export const CATEGORY_META: Record<string, { slug: string; desc: string; en: string }> = {
  'AI清酒': {
    slug: 'ai',
    en: 'AI Sake',
    desc: 'AI 学习笔记：大模型、Agent、Prompt、AI 工作流，以及我是怎么一步一步学会的。',
  },
  '人生下半场': {
    slug: 'second-half',
    en: 'Second Half',
    desc: '中年转型、面对低谷、重新出发、重建秩序。真诚克制，不鸡汤。',
  },
  '职场手记': {
    slug: 'career',
    en: 'Career Notes',
    desc: '二十年体制内外的职场经验：战略、管理、汇报、沟通、ToB 与转型。',
  },
  '工业与能源': {
    slug: 'industry',
    en: 'Industry & Energy',
    desc: '煤炭、矿山、能源、智能矿山、工业互联网——一个工业老兵眼中的 AI。',
  },
  '创业小酌': {
    slug: 'startup',
    en: 'Startup Sips',
    desc: '工业环保、工业 AI、ToB 产品与销售、一人公司、中年创业的真实记录。',
  },
  '人间杂谈': {
    slug: 'life',
    en: 'Life Misc',
    desc: '读书、电影、城市、家庭、北京生活。让酒馆保持人味。',
  },
};

/** Sort posts by date descending */
export function sortPosts(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Filter out drafts in production */
export function filterPublished(posts: CollectionEntry<'posts'>[]): CollectionEntry<'posts'>[] {
  return posts.filter(p => !p.data.draft);
}

/** Estimate reading time for Chinese content */
export function readingTime(content: string): number {
  const cjkCount = (content.match(/[\u4e00-\u9fff]/g) || []).length;
  const otherWords = content
    .replace(/[\u4e00-\u9fff]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = cjkCount / 400 + otherWords / 200;
  return Math.max(1, Math.round(minutes));
}
