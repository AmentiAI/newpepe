#!/usr/bin/env node
// Submit all site URLs to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after deploys: `node scripts/indexnow-submit.mjs`
// Optional: pass URLs as args to submit a subset.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const HOST = 'www.bp157stack.com';
const KEY = '85342aad8b6ef9cc1f2553494f014961';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

function collectStaticRoutes() {
  const sitemapSrc = readFileSync(resolve(__dirname, '..', 'app', 'sitemap.ts'), 'utf8');
  const paths = new Set();
  for (const m of sitemapSrc.matchAll(/\$\{BASE_URL\}([^`'"\s]*)/g)) {
    const p = m[1] || '/';
    paths.add(p === '' ? '/' : p);
  }
  paths.add('/');
  return [...paths].map((p) => `https://${HOST}${p}`);
}

async function loadProductAndStackSlugs() {
  const [{ products }, { stacks }] = await Promise.all([
    import(resolve(__dirname, '..', 'lib', 'products.ts')).catch(() => ({ products: [] })),
    import(resolve(__dirname, '..', 'lib', 'stacks.ts')).catch(() => ({ stacks: [] })),
  ]);
  const urls = [];
  for (const p of products) urls.push(`https://${HOST}/products/${p.slug}`);
  for (const s of stacks) urls.push(`https://${HOST}/stacks/${s.id}`);
  return urls;
}

async function submit(urls) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  console.log(`IndexNow ${res.status} ${res.statusText}: ${urls.length} urls`);
  if (text) console.log(text);
  if (!res.ok) process.exit(1);
}

async function main() {
  const cliUrls = process.argv.slice(2).filter(Boolean);
  let urls;
  if (cliUrls.length > 0) {
    urls = cliUrls;
  } else {
    const staticUrls = collectStaticRoutes();
    let dynamicUrls = [];
    try {
      dynamicUrls = await loadProductAndStackSlugs();
    } catch (e) {
      console.warn('Could not load products/stacks (TS import). Submitting static URLs only.');
    }
    urls = [...new Set([...staticUrls, ...dynamicUrls])];
  }
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  const CHUNK = 10000;
  for (let i = 0; i < urls.length; i += CHUNK) {
    await submit(urls.slice(i, i + CHUNK));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
