import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';

const BASE_URL = 'https://bp157stack.com';
// Update this date when content is meaningfully revised
const CONTENT_DATE = new Date('2025-03-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/products`, priority: 0.9, changeFrequency: 'weekly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/stacks`, priority: 0.9, changeFrequency: 'weekly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/healing`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/anti-aging`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/body-composition`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    // High-value comparison & intent pages
    { url: `${BASE_URL}/wolverine-stack`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bpc-157-vs-tb-500`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/is-bpc-157-legal`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/how-to-reconstitute-peptides`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/cjc-1295-ipamorelin-results`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    // High-traffic keyword pages
    { url: `${BASE_URL}/peptides-for-weight-loss`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/semaglutide-vs-tirzepatide-vs-retatrutide`, priority: 0.9, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bpc-157-for-gut-health`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/peptides-for-women`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/ghk-cu-for-hair-loss`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bpc-157-for-tendons`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/best-peptides-for-men-over-50`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bpc-157-for-anxiety`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/bpc-157-oral-vs-injectable`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/epithalon-complete-guide`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/guide`, priority: 0.8, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/faq`, priority: 0.7, changeFrequency: 'monthly', lastModified: CONTENT_DATE },
    { url: `${BASE_URL}/contact`, priority: 0.4, changeFrequency: 'yearly', lastModified: CONTENT_DATE },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: CONTENT_DATE,
  }));

  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: CONTENT_DATE,
  }));

  return [...staticPages, ...productPages, ...stackPages];
}
