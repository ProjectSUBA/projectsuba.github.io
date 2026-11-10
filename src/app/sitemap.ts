import type { MetadataRoute } from 'next';
import { projects, publications } from '@/lib/data';
import { SITE_URL } from '@/lib/site';
import { hasFullText } from '@/lib/ui';

export const dynamic = 'force-static';

const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/our-work', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/symboh', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/comma', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/publications', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/updates', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/get-involved', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = pages.map((p) => ({
    url: `${SITE_URL}${p.path}/`,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const projectPages = projects.map((p) => ({
    url: `${SITE_URL}/our-work/${p.id}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Only publications with full text have their own page.
  const publicationPages = publications.filter(hasFullText).map((pub) => ({
    url: `${SITE_URL}/publications/${pub.slug}/`,
    lastModified: new Date(pub.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...publicationPages];
}
