import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Body Composition Peptides | Fat Loss & Muscle with Ipamorelin + CJC-1295 | BPC-157 Stack',
  description: 'The complete body recomposition peptide guide. Ipamorelin, CJC-1295, and HGH Fragment 176-191 for fat loss, lean muscle, and GH optimization without side effects.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

export default function BodyCompositionPage() {
  const products = getProductsByCategory('Body Composition');

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Body Composition Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Burn Fat. Build Muscle. <span className="gradient-text">Sleep Better.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            The Ipamorelin + CJC-1295 + HGH Fragment stack is the most effective non-hormonal approach
            to body recomposition — comparable to low-dose HGH therapy without the costs or risks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop Body Comp Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/body-recomp" className="btn-secondary text-base px-8 py-4">
              Full Recomp Protocol
            </Link>
          </div>
        </div>

        {/* How GH peptides work */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">How GH Peptides Transform Body Composition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Growth hormone declines with age — typically 1-2% per year after age 30. This drives the
                accumulation of body fat, loss of lean muscle, declining sleep quality, and slower recovery
                that most people accept as &quot;normal aging.&quot;
              </p>
              <p className="text-slate-400 leading-relaxed">
                Ipamorelin + CJC-1295 restore youthful GH pulsatility — the natural pattern of GH release
                that occurs during deep sleep. This drives fat oxidation, muscle protein synthesis, and
                the deep sleep cycles needed for full recovery.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-3">Why the Combo Is 8-10x More Effective</h3>
              <ul className="space-y-2">
                {[
                  'CJC-1295 (GHRH) primes the pituitary to release GH',
                  'Ipamorelin (GHRP) triggers the GH pulse',
                  'Together they create synergistic amplification',
                  'Neither causes cortisol or prolactin elevation',
                  'HGH Frag 176-191 adds targeted fat burning',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Products */}
        <h2 className="text-2xl font-bold text-white mb-6">Body Composition Peptides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Recomp Protocol</h2>
          <p className="text-slate-400 mb-6">All body composition peptides available at Apollo Peptide Sciences — COA verified, US domestic.</p>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2">
            Shop Body Comp Peptides <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
