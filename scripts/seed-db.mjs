import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load env
const envPath = join(process.cwd(), '.env.local');
const envContent = readFileSync(envPath, 'utf8');
const dbUrl = envContent.match(/DATABASE_URL=(.+)/)?.[1]?.trim();

if (!dbUrl) {
  console.error('DATABASE_URL not found in .env.local');
  process.exit(1);
}

const sql = neon(dbUrl);

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const products = [
  { slug: 'bpc-157', name: 'BPC-157', category: 'Healing', tags: ['healing', 'gut', 'tendons', 'ligaments'], short_description: 'BPC-157 is the most studied healing peptide — accelerates tendon, ligament, muscle, and gut repair with zero systemic side effects.', price: 54.99, affiliate_url: AFFILIATE },
  { slug: 'tb-500', name: 'TB-500', category: 'Healing', tags: ['healing', 'flexibility', 'systemic'], short_description: 'TB-500 provides systemic healing — repairs muscles, tendons, and skin while dramatically improving flexibility.', price: 64.99, affiliate_url: AFFILIATE },
  { slug: 'ghk-cu', name: 'GHK-Cu', category: 'Anti-Aging', tags: ['anti-aging', 'skin', 'collagen'], short_description: 'GHK-Cu (Copper Peptide) rebuilds collagen, reverses skin aging, and resets 31% of aged genes.', price: 49.99, affiliate_url: AFFILIATE },
  { slug: 'epithalon', name: 'Epithalon', category: 'Anti-Aging', tags: ['longevity', 'telomeres', 'sleep'], short_description: 'Epithalon is the only known peptide to stimulate telomerase and lengthen telomeres.', price: 79.99, affiliate_url: AFFILIATE },
  { slug: 'ipamorelin', name: 'Ipamorelin', category: 'Body Composition', tags: ['growth hormone', 'fat loss', 'muscle'], short_description: 'Ipamorelin is the cleanest growth hormone secretagogue — no cortisol or prolactin spikes.', price: 44.99, affiliate_url: AFFILIATE },
  { slug: 'cjc-1295', name: 'CJC-1295', category: 'Body Composition', tags: ['growth hormone', 'GHRH', 'fat loss'], short_description: 'CJC-1295 (no DAC) extends and amplifies GH pulses — the perfect partner to Ipamorelin.', price: 49.99, affiliate_url: AFFILIATE },
  { slug: 'hgh-frag-176-191', name: 'HGH Fragment 176-191', category: 'Body Composition', tags: ['fat loss', 'lipolysis'], short_description: 'HGH Fragment 176-191 is the isolated fat-burning tail of HGH — 12.5x more effective at fat oxidation.', price: 44.99, affiliate_url: AFFILIATE },
  { slug: 'selank', name: 'Selank', category: 'Cognitive', tags: ['anxiety', 'nootropic', 'BDNF'], short_description: 'Selank eliminates anxiety, sharpens cognition, and improves memory — without sedation or addiction.', price: 54.99, affiliate_url: AFFILIATE },
  { slug: 'semax', name: 'Semax', category: 'Cognitive', tags: ['cognitive', 'BDNF', 'neuroprotection'], short_description: 'Semax dramatically increases BDNF and provides powerful neuroprotection.', price: 59.99, affiliate_url: AFFILIATE },
  { slug: 'kpv', name: 'KPV', category: 'Healing', tags: ['anti-inflammatory', 'gut', 'IBD'], short_description: 'KPV is a potent anti-inflammatory tripeptide for gut inflammation, skin conditions, and IBD.', price: 39.99, affiliate_url: AFFILIATE },
  { slug: 'ss-31', name: 'SS-31', category: 'Anti-Aging', tags: ['mitochondria', 'longevity', 'energy'], short_description: 'SS-31 targets and repairs mitochondrial inner membranes — restoring cellular energy production.', price: 89.99, affiliate_url: AFFILIATE },
  { slug: 'mots-c', name: 'MOTS-c', category: 'Body Composition', tags: ['metabolism', 'fat loss', 'AMPK'], short_description: 'MOTS-c is a mitochondrial-derived metabolic regulator — activating AMPK for fat burning and longevity.', price: 74.99, affiliate_url: AFFILIATE },
];

async function seed() {
  console.log('Creating products table...');

  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      tags TEXT[] DEFAULT '{}',
      short_description TEXT,
      price DECIMAL(10,2),
      affiliate_url TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  console.log('Seeding products...');

  for (const product of products) {
    await sql`
      INSERT INTO products (slug, name, category, tags, short_description, price, affiliate_url)
      VALUES (${product.slug}, ${product.name}, ${product.category}, ${product.tags}, ${product.short_description}, ${product.price}, ${product.affiliate_url})
      ON CONFLICT (slug) DO UPDATE SET
        name = EXCLUDED.name,
        category = EXCLUDED.category,
        tags = EXCLUDED.tags,
        short_description = EXCLUDED.short_description,
        price = EXCLUDED.price,
        affiliate_url = EXCLUDED.affiliate_url
    `;
    console.log(`  ✓ ${product.name}`);
  }

  console.log('\n✅ Database seeded successfully!');
  console.log(`   ${products.length} products inserted.`);
}

seed().catch(console.error);
