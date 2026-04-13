import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Zap, Dna, ExternalLink, Award,
  Sparkles, Wind,
} from 'lucide-react';
import { getProductBySlug, sale } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy GHK-Cu Copper Peptide | Reverses 31% of Aged Genes, Skin & Hair | BPC-157 Stack',
  description: 'GHK-Cu reverses gene expression of 31% of aged genes, rebuilds collagen, restores hair follicles, and activates cellular cleanup. The master anti-aging signal.',
  alternates: { canonical: 'https://bp157stack.com/ghk-cu' },
};

const SOURCE_URL = '/out?p=ghk-cu';

export default function GHKCuPage() {
  const product = getProductBySlug('ghk-cu')!;

  const stats = [
    { value: '31%', label: 'Aged Genes Reversed', color: 'purple' },
    { value: '30+', label: 'Growth Factors Activated', color: 'amber' },
    { value: '8wk', label: 'Visible Skin Results', color: 'emerald' },
    { value: 'Dual', label: 'Injectable + Topical', color: 'blue' },
  ];

  const benefits = [
    { icon: Dna, title: '31% Gene Reset', body: 'Landmark research shows GHK-Cu reverses 31% of age-related gene expression — restoring youthful transcriptional patterns at the cellular level.', color: 'purple' },
    { icon: Sparkles, title: 'Collagen Synthesis', body: 'Stimulates fibroblasts to produce collagen I, III, and IV simultaneously — rebuilding the structural foundation of youthful, firm skin.', color: 'amber' },
    { icon: Wind, title: 'Hair Follicle Restoration', body: 'Enlarges hair follicle size, prolongs the growth (anagen) phase, and blocks DHT locally. One of the most evidence-backed peptides for natural hair density improvement.', color: 'emerald' },
    { icon: Zap, title: 'Proteasome Activation', body: 'Activates the cellular cleanup machinery that removes damaged and aggregated proteins — one of the core mechanisms behind the aging phenotype.', color: 'blue' },
    { icon: Dna, title: 'Antioxidant Boost', body: 'Upregulates SOD (superoxide dismutase) and catalase — the primary antioxidant enzymes that decline with aging and drive oxidative damage.', color: 'rose' },
    { icon: Sparkles, title: 'Wound Healing', body: 'Reduces wound healing time and minimizes scar formation — activating 30+ growth factors simultaneously for comprehensive tissue repair.', color: 'purple' },
  ];

  const colorMap: Record<string, string> = {
    purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  };

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-dark-900 grid-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-400/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Master Anti-Aging Signal</span>
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="text-gray-900 block">Buy GHK-Cu</span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-500 block mt-2 leading-tight">
                  Copper Peptide That<br />
                  <span className="text-purple-400">Resets Your Genes</span>
                </span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                GHK-Cu reverses the gene expression of 31% of aged genes, rebuilds collagen, restores
                hair follicles, and activates cellular cleanup — the most powerful anti-aging signal known.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  Shop GHK-Cu — ${sale(product.price)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/products/ghk-cu" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                  Full Catalog Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'GHK-Cu for Hair Loss', href: '/ghk-cu-for-hair-loss' },
                  { label: 'Skin Protocol', href: '/ghk-cu-skin-protocol' },
                  { label: 'Anti-Aging Stack', href: '/anti-aging' },
                  { label: 'Epithalon Combo', href: '/epithalon' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-xs text-purple-400 border border-purple-400/20 hover:border-purple-400/50 px-3 py-1.5 rounded-full transition-all duration-200">
                    {label} →
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                {['COA Verified', 'Topical + Injectable', '31% Gene Reset', 'Hair & Skin'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-400/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <div className="absolute inset-10 rounded-full border border-purple-400/20 animate-pulse" />
                <div className="relative w-80 h-80">
                  <Image
                    src={product.image}
                    alt="GHK-Cu Copper Peptide Research Grade"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="320px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-700 border border-purple-400/30 rounded-xl px-4 py-2 text-sm font-bold text-purple-400 shadow-xl">
                  $50.00
                </div>
                <div className="absolute bottom-8 -left-8 bg-dark-700 border border-amber-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-amber-400 shadow-xl">
                  31% Gene Reset
                </div>
                <div className="absolute top-1/3 -right-10 bg-dark-700 border border-emerald-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-emerald-400 shadow-xl">
                  Hair & Skin
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div className="bg-dark-800 border-y border-purple-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <div className={`text-4xl font-black mb-1 ${
                  color === 'purple' ? 'text-purple-400' :
                  color === 'amber' ? 'text-amber-400' :
                  color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'
                }`}>{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENEFITS GRID ────────────────────────────────── */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Evidence-Based Effects</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              What GHK-Cu <span className="gradient-text">Actually Does</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              GHK-Cu acts through at least five distinct anti-aging mechanisms — it&apos;s not a cosmetic tweak, it changes how cells function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefits.map(({ icon: Icon, title, body, color }) => (
              <div key={title} className="glass-card p-6 flex flex-col gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop GHK-Cu Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ─────────────────────────────────────── */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Dosing Protocol</p>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                How to Use <span className="gradient-text">GHK-Cu</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="glass-card p-5 border-purple-400/20">
                  <h3 className="text-purple-400 font-bold mb-3">Injectable (Systemic Anti-Aging)</h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Dose:</span> 1–2mg subcutaneous daily</li>
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Cycle:</span> 8–12 weeks on, 4 weeks off</li>
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Timing:</span> Evening (aligns with overnight repair)</li>
                  </ul>
                </div>
                <div className="glass-card p-5 border-amber-400/20">
                  <h3 className="text-amber-400 font-bold mb-3">Topical (Skin & Hair)</h3>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Apply:</span> 1–2% GHK-Cu serum to face or scalp daily</li>
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Results:</span> Visible skin changes in 8+ weeks</li>
                    <li className="flex gap-2"><span className="text-gray-500 shrink-0">Hair:</span> Minimum 12 weeks for density changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-card p-6 border-purple-400/20">
                <h3 className="text-gray-900 font-bold text-lg mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  Best Stacks with GHK-Cu
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'GHK-Cu + Epithalon', desc: 'Triple anti-aging: gene reset + telomere extension', href: '/epithalon' },
                    { name: 'GHK-Cu + SNAP-8', desc: 'Collagen rebuild + wrinkle reduction — full skin protocol', href: '/snap-8-anti-wrinkle-peptide' },
                    { name: 'GHK-Cu + BPC-157', desc: 'Healing + anti-aging — collagen and tissue repair', href: '/bpc-157' },
                  ].map(({ name, desc, href }) => (
                    <Link key={name} href={href} className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/60 hover:bg-dark-700 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-gray-900 font-semibold text-sm group-hover:text-neon-green transition-colors">{name}</p>
                        <p className="text-gray-500 text-xs">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 border-neon-green/15 text-center">
                <h3 className="text-gray-900 font-bold mb-2">Get COA-Verified GHK-Cu</h3>
                <p className="text-gray-500 text-sm mb-4">Injectable + topical options · US domestic shipping</p>
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                  Buy GHK-Cu — $50 <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-gray-600 text-xs mt-2">Affiliate link — at no extra cost to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ───────────────────────────────── */}
      <section className="py-20 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            GHK-Cu <span className="gradient-text">Deep-Dive Guides</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'GHK-Cu for Hair Loss', desc: 'Does copper peptide actually regrow hair? The research.', href: '/ghk-cu-for-hair-loss', tag: 'Hair' },
              { title: 'GHK-Cu Skin Protocol', desc: 'Complete guide to topical application for anti-aging', href: '/ghk-cu-skin-protocol', tag: 'Skin' },
              { title: 'Anti-Aging Protocols', desc: 'The full longevity stack with Epithalon and SS-31', href: '/anti-aging', tag: 'Anti-Aging' },
              { title: 'Peptides for Collagen', desc: 'Full breakdown of collagen-boosting peptides', href: '/peptides-for-collagen', tag: 'Collagen' },
              { title: 'Skin Quality Guide', desc: 'Best peptides for skin quality improvement', href: '/peptides-for-skin-quality', tag: 'Skin' },
              { title: 'Looksmaxxing Stack', desc: 'Complete aesthetics optimization peptide stack', href: '/looksmaxxing-stack', tag: 'Aesthetics' },
            ].map(({ title, desc, href, tag }) => (
              <Link key={href} href={href} className="group glass-card p-5 flex flex-col gap-3 hover:border-purple-400/30 transition-all duration-200">
                <span className="text-xs font-semibold text-purple-400 bg-purple-400/10 border border-purple-400/20 px-2.5 py-0.5 rounded-full w-fit">{tag}</span>
                <h3 className="text-gray-900 font-bold group-hover:text-purple-400 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop GHK-Cu — $50.00 <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
