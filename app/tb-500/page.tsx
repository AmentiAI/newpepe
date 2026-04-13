import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Activity, Zap, Shield, FlaskConical,
  ExternalLink, Award, TrendingUp, Wind,
} from 'lucide-react';
import { getProductBySlug, sale } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy TB-500 (Thymosin Beta-4) | Systemic Healing & Flexibility Peptide | BPC-157 Stack',
  description: 'TB-500 mobilizes stem cells body-wide, heals multiple injuries simultaneously, and dramatically improves flexibility. The perfect partner to BPC-157.',
  alternates: { canonical: 'https://bp157stack.com/tb-500' },
};

const SOURCE_URL = '/out?p=tb500-10mg';

export default function TB500Page() {
  const product = getProductBySlug('tb-500')!;

  const stats = [
    { value: '2-3wk', label: 'Flexibility Improvement', color: 'blue' },
    { value: 'Systemic', label: 'Body-Wide Healing', color: 'emerald' },
    { value: 'Stem Cells', label: 'Mobilized from Bone Marrow', color: 'purple' },
    { value: '2×/wk', label: 'Loading Phase Dose', color: 'amber' },
  ];

  const benefits = [
    { icon: Activity, title: 'Systemic Healing', body: 'Unlike BPC-157 which works locally, TB-500 circulates body-wide — healing multiple injury sites simultaneously through one protocol.', color: 'blue' },
    { icon: Zap, title: 'Stem Cell Mobilization', body: 'Mobilizes bone marrow-derived stem cells to damaged tissue — supercharging the body\'s native repair mechanisms far beyond what\'s naturally possible.', color: 'emerald' },
    { icon: Wind, title: 'Flexibility & Joint Health', body: 'Actin regulation improves muscle fiber alignment and elasticity. Users report feeling noticeably more flexible within 2-3 weeks of the loading phase.', color: 'blue' },
    { icon: Shield, title: 'Anti-Inflammatory', body: 'Upregulates anti-inflammatory cytokines and downregulates pro-inflammatory pathways — optimal healing environment without immune suppression.', color: 'purple' },
    { icon: TrendingUp, title: 'Muscle Repair', body: 'Accelerates healing of muscle fiber tears and strains. Used by athletes to maintain training while healing soft tissue injuries.', color: 'amber' },
    { icon: Activity, title: 'Scar Reduction', body: 'Reduces fibrotic scar tissue formation during healing — resulting in higher-quality functional tissue repair compared to natural healing.', color: 'rose' },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  };

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-white grid-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-400/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/25 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Systemic Healing Peptide</span>
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="text-gray-900 block">Buy TB-500</span>
                <span className="text-3xl sm:text-4xl font-bold text-gray-500 block mt-2 leading-tight">
                  Thymosin Beta-4 —<br />
                  <span className="text-blue-400">Body-Wide Repair</span>
                </span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                TB-500 mobilizes stem cells, heals multiple injuries simultaneously, and improves flexibility
                throughout the entire body. The systemic complement to BPC-157&apos;s local action.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  Shop TB-500 — ${sale(product.price)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/products/tb-500" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                  Full Catalog Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'BPC-157 + TB-500 Stack', href: '/stacks/healing-stack' },
                  { label: 'BPC-157 vs TB-500', href: '/bpc-157-vs-tb-500' },
                  { label: 'Full Healing Guide', href: '/healing' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-xs text-blue-400 border border-blue-400/20 hover:border-blue-400/50 px-3 py-1.5 rounded-full transition-all duration-200">
                    {label} →
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                {['COA Verified', 'US Domestic Shipping', 'Systemic Action', 'Stem Cell Mobilizer'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-400/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <div className="absolute inset-10 rounded-full border border-blue-400/20 animate-pulse" />
                <div className="relative w-80 h-80">
                  <Image
                    src={product.image}
                    alt="TB-500 Thymosin Beta-4 Research Peptide"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="320px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-700 border border-blue-400/30 rounded-xl px-4 py-2 text-sm font-bold text-blue-400 shadow-xl">
                  $59.99
                </div>
                <div className="absolute bottom-8 -left-6 bg-dark-700 border border-emerald-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-emerald-400 shadow-xl">
                  Stem Cell Mobilizer
                </div>
                <div className="absolute top-1/3 -right-10 bg-dark-700 border border-purple-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-purple-400 shadow-xl">
                  Systemic Healing
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div className="bg-gray-50 border-y border-blue-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <div className={`text-4xl font-black mb-1 ${
                  color === 'blue' ? 'text-blue-400' :
                  color === 'emerald' ? 'text-emerald-400' :
                  color === 'purple' ? 'text-purple-400' : 'text-amber-400'
                }`}>{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENEFITS GRID ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Evidence-Based Effects</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              What TB-500 <span className="gradient-text">Actually Does</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              TB-500 works systemically — giving it reach that BPC-157 alone can&apos;t achieve.
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
              Shop TB-500 Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── BPC-157 SYNERGY ──────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Gold Standard Stack</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              BPC-157 + TB-500: <span className="gradient-text">The Healing Stack</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              These two peptides are greater than the sum of their parts — they cover every biological mechanism of tissue repair simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card p-7 border-emerald-400/20">
              <h3 className="text-emerald-400 font-bold text-lg mb-4">BPC-157 — Local Targeted Repair</h3>
              <ul className="space-y-2">
                {['Upregulates GH receptors in fibroblasts', 'Improves blood flow via nitric oxide', 'Repairs gut lining and intestinal barrier', 'Crosses blood-brain barrier for nerve repair'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-7 border-blue-400/20">
              <h3 className="text-blue-400 font-bold text-lg mb-4">TB-500 — Systemic Body-Wide Repair</h3>
              <ul className="space-y-2">
                {['Mobilizes stem cells from bone marrow', 'Heals multiple injury sites simultaneously', 'Improves flexibility throughout body', 'Reduces scar tissue formation'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center flex flex-wrap gap-4 justify-center">
            <Link href="/stacks/healing-stack" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
              View Full Healing Stack Protocol <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/bpc-157" className="btn-secondary px-8 py-3 inline-flex items-center gap-2">
              Learn About BPC-157 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ─────────────────────────────────────── */}
      <section className="py-24 bg-white grid-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Dosing Protocol</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              How to Use <span className="gradient-text">TB-500</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="glass-card p-6 border-blue-400/20">
              <h3 className="text-blue-400 font-bold mb-4">Loading Phase (Weeks 1–6)</h3>
              <div className="space-y-3">
                {[
                  ['Dose', '2mg twice per week (4mg/week)'],
                  ['Method', 'Subcutaneous injection'],
                  ['Sites', 'Rotate injection sites'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-6 border-neon-green/15">
              <h3 className="text-emerald-700 font-bold mb-4">Maintenance Phase (Week 7+)</h3>
              <div className="space-y-3">
                {[
                  ['Dose', '2mg once per week'],
                  ['Duration', 'Ongoing as needed'],
                  ['Best Stack', 'Add BPC-157 for local + systemic healing'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{label}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6 text-center border-neon-green/15">
            <Award className="w-8 h-8 text-emerald-700 mx-auto mb-3" />
            <h3 className="text-gray-900 font-bold text-lg mb-2">Get COA-Verified TB-500</h3>
            <p className="text-gray-500 text-sm mb-4">98%+ purity · US domestic shipping · cold-chain packaging</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                Buy TB-500 — $59.99 <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/products/tb-500" className="btn-secondary px-6 py-3">
                Full Product Details
              </Link>
            </div>
            <p className="text-gray-600 text-xs mt-3">Affiliate link — commission at no extra cost. Not medical advice.</p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Start Your <span className="gradient-text">TB-500 Protocol</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            US domestic. COA-verified. Shipped cold. Stack with BPC-157 for maximum healing.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop TB-500 — $59.99 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/bpc-157" className="btn-secondary text-base px-8 py-4">
              Add BPC-157
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
        </div>
      </section>

    </div>
  );
}
