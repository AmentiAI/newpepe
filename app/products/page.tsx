import type { Metadata } from 'next';
import { FlaskConical, ArrowRight } from 'lucide-react';
import { products as allProducts } from '@/lib/products';
import { isAbsorbed } from '@/lib/absorbed-slugs';
import ProductCatalogCard from '@/components/ProductCatalogCard';

const products = allProducts.filter((p) => !isAbsorbed(p.slug));

export const metadata: Metadata = {
  title: 'Buy Peptides Online — Full Catalog, COA Verified | BPC-157 Stack',
  description: 'Buy 140+ peptides online — BPC-157, TB-500, GLP-1 agonists, growth hormone, nootropics, anti-aging compounds. Third-party tested, COA verified, US domestic shipping.',
  alternates: { canonical: 'https://www.bp157stack.com/products' },
};

const categoryColor: Record<string, string> = {
  Healing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Anti-Aging': 'bg-amber-50 text-amber-700 border-amber-200',
  'Body Composition': 'bg-blue-50 text-blue-700 border-blue-200',
  'Weight Loss': 'bg-rose-50 text-rose-700 border-rose-200',
  Cognitive: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Supplies: 'bg-gray-100 text-gray-600 border-gray-200',
};

const categoryOrder = ['Healing', 'Anti-Aging', 'Body Composition', 'Weight Loss', 'Cognitive', 'Supplies'];

export default function ProductsPage() {
  const categories = categoryOrder.filter(cat =>
    products.some(p => p.category === cat)
  );

  const grouped: Record<string, typeof products> = {};
  for (const cat of categories) {
    grouped[cat] = products.filter(p => p.category === cat);
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical className="w-5 h-5 text-amber-500" />
            <span className="text-amber-600 font-bold text-sm uppercase tracking-widest">Full Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">
            Buy Peptides Online — {products.length} Compounds, COA Verified
          </h1>
          <p className="text-gray-900 text-lg max-w-2xl">
            Full peptide catalog with third-party tested purity — healing peptides, GLP-1 agonists, growth hormone secretagogues, nootropics, anti-aging compounds, and SARMs. US domestic shipping.
          </p>

          {/* Category jump links */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map(cat => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-colors ${categoryColor[cat] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}
              >
                {cat} <span className="opacity-60">({grouped[cat].length})</span>
              </a>
            ))}
          </div>
        </div>

        {/* Category sections */}
        {categories.map(cat => (
          <section
            key={cat}
            id={cat.toLowerCase().replace(/\s+/g, '-')}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black px-3 py-1 rounded-full border ${categoryColor[cat] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  {cat}
                </span>
                <h2 className="text-2xl font-black text-gray-900">{grouped[cat].length} products</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[cat].map(product => (
                <ProductCatalogCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-gray-100">
          <p className="text-gray-700 text-sm mb-4">All products — US-based supplier, third-party tested, COA available</p>
          <a
            href="https://phiogen.is/?ref=PEPS"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 font-black px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors"
          >
            View Full Store <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
