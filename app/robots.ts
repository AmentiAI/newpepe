import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/out'] },
      { userAgent: 'Googlebot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/out'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/out'] },
      { userAgent: 'GPTBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/out'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Perplexity-User', allow: '/', disallow: ['/out'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Claude-User', allow: '/', disallow: ['/out'] },
      { userAgent: 'anthropic-ai', allow: '/', disallow: ['/out'] },
      { userAgent: 'Applebot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: ['/out'] },
      { userAgent: 'Amazonbot', allow: '/', disallow: ['/out'] },
      { userAgent: 'CCBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'YandexBot', allow: '/', disallow: ['/out'] },
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: 'https://www.bp157stack.com/sitemap.xml',
    host: 'https://www.bp157stack.com',
  };
}
