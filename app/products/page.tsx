import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Tag, FlaskConical } from 'lucide-react';
import { products, sale } from '@/lib/products';
import ProductImage from '@/components/ProductImage';

export const metadata: Metadata = {
  title: 'All Peptides & Research Compounds | BPC-157 Stack',
  description: 'Complete catalog of 140+ research peptides — BPC-157, TB-500, GLP-1 agonists, SARMs, nootropics, anti-aging compounds and more. Third-party tested, COA verified.',
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
            All {products.length} Peptides
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Complete research compound catalog — healing peptides, GLP-1 agonists, growth hormone secretagogues, nootropics, anti-aging compounds, and SARMs.
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
                <div
                  key={product.slug}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-md transition-all duration-200 group flex flex-col relative"
                >
                  {/* Stretched link covers entire card */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="absolute inset-0 z-0"
                    aria-label={`View ${product.name}`}
                  />

                  {/* Image */}
                  <div className="relative h-52 bg-gray-50 overflow-hidden flex-shrink-0">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 relative z-10">
                    <h3 className="text-gray-900 font-black text-lg leading-tight mb-1 group-hover:text-amber-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-amber-600 text-sm font-bold mb-2 leading-tight">{product.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                      {product.shortDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="flex items-center gap-0.5 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          <Tag className="w-2.5 h-2.5" />{tag}
                        </span>
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <div className="flex flex-col leading-tight">
                        <span className="text-gray-900 font-black text-xl">${sale(product.price)}</span>
                        <span className="text-gray-400 text-xs line-through">${product.price}</span>
                      </div>
                      <a
                        href={product.affiliateUrl}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="relative z-10 text-xs font-bold px-3 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors flex items-center gap-1"
                      >
                        Check Price <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div className="text-center py-12 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-4">All products — US-based supplier, third-party tested, COA available</p>
          <a
            href="https://phiogen.is/?ref=PEPS"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-white font-black px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors"
          >
            View Full Store <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
