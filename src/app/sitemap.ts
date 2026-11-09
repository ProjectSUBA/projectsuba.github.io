import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/symboh`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/comma`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/initiatives`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/our-work`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/publications`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/events`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${base}/get-involved`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
