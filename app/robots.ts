import { MetadataRoute } from 'next';

const ALLOW_AGENTS = [
  'Googlebot',
  'Google-Extended',
  'Bingbot',
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'CCBot',
  'DuckDuckBot',
  'DuckAssistBot',
  'YandexBot',
  'FacebookBot',
  'FacebookExternalHit',
  'MistralAI-User',
  'cohere-ai',
  'Cohere-AI',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'Diffbot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/out'] },
      ...ALLOW_AGENTS.map((ua) => ({ userAgent: ua, allow: '/', disallow: ['/out'] })),
      { userAgent: 'Bytespider', disallow: '/' },
    ],
    sitemap: 'https://www.bp157stack.com/sitemap.xml',
    host: 'https://www.bp157stack.com',
  };
}
