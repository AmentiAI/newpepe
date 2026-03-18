import type { Metadata } from 'next';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Research Peptides | BPC-157, TB-500, Ipamorelin & More | BPC-157 Stack',
  description: 'Complete peptide catalog with protocols and dosing guides. BPC-157, TB-500, GHK-Cu, Ipamorelin, Epithalon, and 30+ more research peptides from Apollo Peptide Sciences.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';
const categories = ['All', 'Healing', 'Anti-Aging', 'Body Composition', 'Cognitive'];

export default function ProductsPage() {
  const categorized = {
    Healing: products.filter((p) => p.category === 'Healing'),
    'Anti-Aging': products.filter((p) => p.category === 'Anti-Aging'),
    'Body Composition': products.filter((p) => p.category === 'Body Composition'),
    Cognitive: products.filter((p) => p.category === 'Cognitive'),
  };

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <FlaskConical className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-medium">Complete Peptide Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Research <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Every peptide with full protocols, dosing guides, and stack recommendations.
            Sourced exclusively from Apollo Peptide Sciences.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Shop All at Apollo Peptides <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* By Category */}
        {Object.entries(categorized).map(([category, prods]) => (
          prods.length > 0 && (
            <div key={category} className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-neon-green rounded-full inline-block" />
                {category} Peptides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {prods.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          )
        ))}

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Order?
          </h2>
          <p className="text-slate-400 mb-6">
            All peptides on this site are available at Apollo Peptide Sciences — COA verified, US domestic shipping.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Visit Apollo Peptide Sciences <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
