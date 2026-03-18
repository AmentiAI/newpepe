import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Anti-Aging Peptides | Epithalon, GHK-Cu & Longevity Protocols | BPC-157 Stack',
  description: 'The most effective anti-aging peptide protocols. Epithalon telomere extension, GHK-Cu gene reset, SS-31 mitochondrial repair. Reverse biological age with science.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const mechanisms = [
  { title: 'Telomere Extension', peptide: 'Epithalon', desc: 'Activates telomerase to rebuild the protective caps on chromosomes that shorten with age. 28% mortality reduction in 12-year human trial.' },
  { title: 'Gene Expression Reset', peptide: 'GHK-Cu', desc: 'Reverses the expression of 31% of aged genes. Stimulates collagen, activates cellular cleanup, and rebuilds skin matrix.' },
  { title: 'Mitochondrial Repair', peptide: 'SS-31', desc: 'Stabilizes the inner mitochondrial membrane, restoring ATP production that declines with aging. In Phase II/III clinical trials.' },
];

export default function AntiAgingPage() {
  const products = getProductsByCategory('Anti-Aging');

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Anti-Aging Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Reverse Biological <span className="gradient-text">Aging</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Three peptides. Three distinct mechanisms. The most comprehensive anti-aging protocol available
            outside of clinical trials — targeting telomeres, gene expression, and mitochondria simultaneously.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop Anti-Aging Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-base px-8 py-4">
              View Full Protocol
            </Link>
          </div>
        </div>

        {/* 3 Mechanisms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mechanisms.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <div className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">{m.peptide}</div>
              <h3 className="text-white font-bold text-lg mb-3">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{m.desc}</p>
              <Link href={`/products/${m.peptide.toLowerCase().replace('-', '-')}`} className="text-neon-green text-sm hover:underline flex items-center gap-1">
                Full Guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>

        {/* Why these three */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why These Three Peptides?</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Aging is not a single process — it&apos;s a cascade of molecular failures happening simultaneously.
            Telomere shortening, epigenetic dysregulation, mitochondrial decline, and protein aggregation all
            contribute. A single intervention can&apos;t address all of them.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            The Epithalon + GHK-Cu + SS-31 stack targets the three most fundamental, most well-researched aging mechanisms:
          </p>
          <ul className="space-y-2">
            {[
              'Epithalon addresses the root cause of cellular senescence — telomere shortening',
              'GHK-Cu resets gene expression patterns that drift toward an aged phenotype over time',
              'SS-31 repairs the mitochondrial inner membrane, restoring the energy production that powers all cellular repair',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <h2 className="text-2xl font-bold text-white mb-6">Anti-Aging Peptides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Start Your Longevity Protocol</h2>
          <p className="text-slate-400 mb-6">Epithalon, GHK-Cu, and SS-31 from Apollo Peptide Sciences — the most trusted research peptide source.</p>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2">
            Shop Anti-Aging Peptides <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
