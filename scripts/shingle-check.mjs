#!/usr/bin/env node
// Shingle-overlap audit for product pages.
// Detects when product copy reuses too many 6-word shingles across pages —
// the signal Google uses to label pages as duplicate / "Crawled - currently
// not indexed". Run after large content edits: `node scripts/shingle-check.mjs`
//
// Output: ranked list of product pairs by shingle-overlap %. >25% is a yellow
// flag, >40% is likely-duplicate territory.

import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');

const SHINGLE_SIZE = 6;
const WARN_PCT = 25;
const FAIL_PCT = 40;

function loadProducts() {
  const r = spawnSync(
    'npx',
    [
      '--yes',
      'tsx',
      '-e',
      `import { products } from '${ROOT}/lib/products';
       const out = products.map(p => ({
         slug: p.slug,
         name: p.name,
         category: p.category,
         text: [p.shortDescription, p.fullDescription, (p.benefits||[]).join(' '), p.protocol||'', (p.highlights||[]).map(h => h.title + ' ' + h.body).join(' ')].join(' ')
       }));
       process.stdout.write(JSON.stringify(out));`,
    ],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }
  );
  if (r.status !== 0) {
    console.error('Failed to load products via tsx. stderr:');
    console.error(r.stderr);
    process.exit(1);
  }
  return JSON.parse(r.stdout);
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function shingles(tokens, size) {
  const set = new Set();
  for (let i = 0; i + size <= tokens.length; i++) {
    set.add(tokens.slice(i, i + size).join(' '));
  }
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

function overlapPct(a, b) {
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  const min = Math.min(a.size, b.size);
  return min === 0 ? 0 : (inter / min) * 100;
}

function main() {
  const products = loadProducts();
  console.log(`Loaded ${products.length} products. Computing ${SHINGLE_SIZE}-grams...`);

  const shingled = products.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    set: shingles(tokenize(p.text), SHINGLE_SIZE),
  }));

  const pairs = [];
  for (let i = 0; i < shingled.length; i++) {
    for (let j = i + 1; j < shingled.length; j++) {
      const pct = overlapPct(shingled[i].set, shingled[j].set);
      if (pct >= WARN_PCT) {
        pairs.push({
          a: shingled[i].slug,
          b: shingled[j].slug,
          aCat: shingled[i].category,
          bCat: shingled[j].category,
          pct,
          jac: jaccard(shingled[i].set, shingled[j].set) * 100,
        });
      }
    }
  }

  pairs.sort((x, y) => y.pct - x.pct);

  console.log(`\nFound ${pairs.length} pairs over ${WARN_PCT}% min-side overlap.\n`);
  for (const p of pairs) {
    const flag = p.pct >= FAIL_PCT ? 'DUPE ' : 'WARN ';
    const sameCat = p.aCat === p.bCat ? `[${p.aCat}]` : `[${p.aCat} ↔ ${p.bCat}]`;
    console.log(
      `${flag} ${p.pct.toFixed(1).padStart(5)}% min · ${p.jac.toFixed(1).padStart(5)}% jac  ${sameCat}  ${p.a}  ↔  ${p.b}`
    );
  }

  const fails = pairs.filter((p) => p.pct >= FAIL_PCT);
  if (fails.length > 0) {
    console.log(`\nFAIL: ${fails.length} pair(s) over ${FAIL_PCT}% — these will likely be labelled duplicate by Google.`);
    process.exit(2);
  } else if (pairs.length > 0) {
    console.log(`\nWarnings only — no pair over ${FAIL_PCT}%.`);
  } else {
    console.log(`\nClean — no pair over ${WARN_PCT}%.`);
  }
}

main();
