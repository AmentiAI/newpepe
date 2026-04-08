import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';

const BASE_URL = 'https://bp157stack.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                                    priority: 1.0, changeFrequency: 'daily',   lastModified: new Date('2026-04-05') },
    { url: `${BASE_URL}/products`,                                      priority: 0.9, changeFrequency: 'weekly',  lastModified: new Date('2026-04-04') },
    { url: `${BASE_URL}/stacks`,                                        priority: 0.9, changeFrequency: 'weekly',  lastModified: new Date('2026-04-04') },
    { url: `${BASE_URL}/healing`,                                       priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-28') },
    { url: `${BASE_URL}/anti-aging`,                                    priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-28') },
    { url: `${BASE_URL}/body-composition`,                              priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-25') },
    // High-value comparison & intent pages
    { url: `${BASE_URL}/wolverine-stack`,                               priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-30') },
    { url: `${BASE_URL}/bpc-157-vs-tb-500`,                            priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-22') },
    { url: `${BASE_URL}/is-bpc-157-legal`,                             priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-20') },
    { url: `${BASE_URL}/how-to-reconstitute-peptides`,                 priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-18') },
    { url: `${BASE_URL}/cjc-1295-ipamorelin-results`,                  priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-15') },
    // High-traffic keyword pages
    { url: `${BASE_URL}/peptides-for-weight-loss`,                     priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-27') },
    { url: `${BASE_URL}/semaglutide-vs-tirzepatide-vs-retatrutide`,    priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-03-26') },
    { url: `${BASE_URL}/bpc-157-for-gut-health`,                       priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-24') },
    { url: `${BASE_URL}/peptides-for-women`,                           priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-23') },
    { url: `${BASE_URL}/ghk-cu-for-hair-loss`,                         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-21') },
    { url: `${BASE_URL}/bpc-157-for-tendons`,                          priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-19') },
    { url: `${BASE_URL}/best-peptides-for-men-over-50`,                priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-17') },
    { url: `${BASE_URL}/bpc-157-for-anxiety`,                          priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-16') },
    { url: `${BASE_URL}/bpc-157-oral-vs-injectable`,                   priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-14') },
    { url: `${BASE_URL}/epithalon-complete-guide`,                     priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-12') },
    { url: `${BASE_URL}/guide`,                                         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-03-10') },
    { url: `${BASE_URL}/faq`,                                           priority: 0.7, changeFrequency: 'monthly', lastModified: new Date('2026-03-08') },
    { url: `${BASE_URL}/contact`,                                       priority: 0.4, changeFrequency: 'yearly',  lastModified: new Date('2026-03-01') },
    // Dedicated product landing pages
    { url: `${BASE_URL}/bpc-157`,                                         priority: 0.95, changeFrequency: 'monthly', lastModified: new Date('2026-04-08') },
    { url: `${BASE_URL}/tb-500`,                                          priority: 0.95, changeFrequency: 'monthly', lastModified: new Date('2026-04-08') },
    { url: `${BASE_URL}/ghk-cu`,                                          priority: 0.95, changeFrequency: 'monthly', lastModified: new Date('2026-04-08') },
    { url: `${BASE_URL}/epithalon`,                                       priority: 0.95, changeFrequency: 'monthly', lastModified: new Date('2026-04-08') },
    { url: `${BASE_URL}/ipamorelin`,                                      priority: 0.95, changeFrequency: 'monthly', lastModified: new Date('2026-04-08') },
    // Looksmaxxing pages
    { url: `${BASE_URL}/looksmaxxing-peptides`,                        priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-04-05') },
    { url: `${BASE_URL}/peptides-for-skin-quality`,                    priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-04-05') },
    { url: `${BASE_URL}/ghk-cu-skin-protocol`,                         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-04') },
    { url: `${BASE_URL}/snap-8-anti-wrinkle-peptide`,                  priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-04') },
    { url: `${BASE_URL}/bpc-157-scar-healing`,                         priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-03') },
    { url: `${BASE_URL}/peptides-for-collagen`,                        priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-04-03') },
    { url: `${BASE_URL}/peptides-for-beard-growth`,                    priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-02') },
    { url: `${BASE_URL}/igf-1-looksmaxxing`,                           priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-02') },
    { url: `${BASE_URL}/peptides-for-acne-skin`,                       priority: 0.8, changeFrequency: 'monthly', lastModified: new Date('2026-04-01') },
    { url: `${BASE_URL}/looksmaxxing-stack`,                           priority: 0.9, changeFrequency: 'monthly', lastModified: new Date('2026-04-01') },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2026-03-29'),
  }));

  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date('2026-03-29'),
  }));

  return [...staticPages, ...productPages, ...stackPages];
}
