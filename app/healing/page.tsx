import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'BPC-157 for Healing | Best Peptides for Injury Recovery | BPC-157 Stack',
  description: 'The complete guide to healing peptides. BPC-157 + TB-500 protocols for tendons, ligaments, muscles, gut, and nerve repair. Science-backed dosing included.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

export default function HealingPage() {
  const healingProducts = getProductsByCategory('Healing');

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">Healing Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Heal Injuries <span className="gradient-text">2-3x Faster</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            BPC-157 and TB-500 are the most researched healing peptides in the world. Together they repair tendons,
            ligaments, muscles, gut, and nerves — faster than any other intervention available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop Healing Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
              View Healing Stack Protocol
            </Link>
          </div>
        </div>

        {/* Why BPC-157 */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why BPC-157 is the #1 Healing Peptide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-slate-400 leading-relaxed">
                BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from human gastric juice.
                It has been studied in over 100 peer-reviewed papers and consistently shows remarkable healing properties
                across multiple tissue types.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Unlike NSAIDs or corticosteroids, BPC-157 doesn&apos;t just mask pain — it addresses the underlying
                tissue damage. It upregulates growth hormone receptors in fibroblasts, accelerates collagen production,
                and improves blood flow to injured areas.
              </p>
              <p className="text-slate-400 leading-relaxed">
                BPC-157 has no known LD50 in animal studies — meaning no dose has been found to cause death —
                making it one of the most researched and safest peptides available.
              </p>
            </div>
            <div>
              <h3 className="text-neon-green font-semibold mb-3">What BPC-157 Heals</h3>
              <ul className="space-y-2">
                {[
                  'Tendon tears and tendinopathy',
                  'Ligament injuries (ACL, MCL)',
                  'Muscle tears and strains',
                  'Gut lining (leaky gut, IBD, Crohn\'s)',
                  'Nerve damage and neuropathy',
                  'Bone fractures',
                  'Corneal damage',
                  'NSAID-induced gut damage',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gold Standard Stack */}
        <div className="bg-dark-800 border border-neon-green/20 rounded-2xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-bold text-white">The Gold Standard: BPC-157 + TB-500</h2>
          </div>
          <p className="text-slate-400 mb-6">
            The most powerful healing combination. BPC-157 handles local targeted repair while TB-500 provides
            systemic body-wide healing — together they cut recovery time by 50-70%.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-dark-700/50 rounded-xl p-5">
              <h3 className="text-neon-green font-semibold mb-2">BPC-157 Role</h3>
              <p className="text-slate-400 text-sm">Local targeted healing — stimulates growth factor receptors at the injury site, repairs gut lining, improves local blood flow.</p>
            </div>
            <div className="bg-dark-700/50 rounded-xl p-5">
              <h3 className="text-neon-green font-semibold mb-2">TB-500 Role</h3>
              <p className="text-slate-400 text-sm">Systemic body-wide healing — mobilizes stem cells from bone marrow to injury sites, improves flexibility, reduces scar tissue.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-sm px-6 py-3">
              Full Protocol
            </Link>
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
              Shop the Stack <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Products */}
        <h2 className="text-2xl font-bold text-white mb-6">Healing Peptides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Start Healing Today</h2>
          <p className="text-slate-400 mb-6">BPC-157 and TB-500 from Apollo Peptide Sciences — COA verified, US domestic, fast shipping.</p>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2">
            Shop Healing Peptides at Apollo <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
