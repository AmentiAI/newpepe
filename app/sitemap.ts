import { MetadataRoute } from 'next';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import { isAbsorbed } from '@/lib/absorbed-slugs';

const BASE_URL = 'https://www.bp157stack.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                                    priority: 1.0,  changeFrequency: 'daily',   lastModified: now },
    { url: `${BASE_URL}/products`,                                      priority: 0.9,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/stacks`,                                        priority: 0.9,  changeFrequency: 'weekly',  lastModified: now },
    { url: `${BASE_URL}/healing`,                                       priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/anti-aging`,                                    priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/body-composition`,                              priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/wolverine-stack`,                               priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-vs-tb-500`,                             priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/is-bpc-157-legal`,                              priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/how-to-reconstitute-peptides`,                  priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/cjc-1295-ipamorelin-results`,                   priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-weight-loss`,                      priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/semaglutide-vs-tirzepatide-vs-retatrutide`,     priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-for-gut-health`,                        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-women`,                            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/ghk-cu-for-hair-loss`,                          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-for-tendons`,                           priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/best-peptides-for-men-over-50`,                 priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-for-anxiety`,                           priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-oral-vs-injectable`,                    priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/epithalon-complete-guide`,                      priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/guide`,                                         priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/faq`,                                           priority: 0.7,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/contact`,                                       priority: 0.4,  changeFrequency: 'yearly',  lastModified: now },
    { url: `${BASE_URL}/bpc-157`,                                       priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/tb-500`,                                        priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/ghk-cu`,                                        priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/epithalon`,                                     priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/ipamorelin`,                                    priority: 0.95, changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/looksmaxxing-peptides`,                         priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-skin-quality`,                     priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/ghk-cu-skin-protocol`,                          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/snap-8-anti-wrinkle-peptide`,                   priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/bpc-157-scar-healing`,                          priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-collagen`,                         priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-beard-growth`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/igf-1-looksmaxxing`,                            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-acne-skin`,                        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/looksmaxxing-stack`,                            priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/jawline-peptide-guide`,                         priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-sleep`,                            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/peptides-for-testosterone`,                     priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/gym-peptide-stack`,                             priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/fat-loss-peptide-stack`,                        priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/skin-tightening-peptides`,                      priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/nad-complete-guide`,                            priority: 0.8,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/retatrutide-complete-guide`,                    priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
    { url: `${BASE_URL}/tirzepatide-complete-guide`,                    priority: 0.9,  changeFrequency: 'monthly', lastModified: now },
  ];

  const productPages: MetadataRoute.Sitemap = products
    .filter((p) => !isAbsorbed(p.slug))
    .map((p) => ({
      url: `${BASE_URL}/products/${p.slug}`,
      priority: 0.85,
      changeFrequency: 'weekly' as const,
      lastModified: now,
    }));

  const stackPages: MetadataRoute.Sitemap = stacks.map((s) => ({
    url: `${BASE_URL}/stacks/${s.id}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
    lastModified: now,
  }));

  return [...staticPages, ...productPages, ...stackPages];
}
