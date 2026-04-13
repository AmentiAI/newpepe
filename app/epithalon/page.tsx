import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Dna, Moon, Zap, FlaskConical,
  ExternalLink, Award, TrendingUp,
} from 'lucide-react';
import { getProductBySlug, sale } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy Epithalon | Telomere Extension & 28% Mortality Reduction | BPC-157 Stack',
  description: 'Epithalon is the only compound proven to lengthen telomeres — with 28% lower mortality in a 12-year human trial. The most evidence-backed longevity peptide.',
  alternates: { canonical: 'https://bp157stack.com/epithalon' },
};

const SOURCE_URL = '/out?p=epithalon-50mg';

export default function EpithalonPage() {
  const product = getProductBySlug('epithalon')!;

  const stats = [
    { value: '28%', label: 'Mortality Reduction (12-yr trial)', color: 'purple' },
    { value: '60+', label: 'Published Studies', color: 'amber' },
    { value: '10-20d', label: 'Cycle Length', color: 'blue' },
    { value: '40yr', label: 'Research History', color: 'emerald' },
  ];

  const benefits = [
    { icon: Dna, title: 'Telomere Extension', body: 'The only known compound to stimulate telomerase and actually lengthen telomeres in humans — reversing a core hallmark of cellular aging.', color: 'purple' },
    { icon: TrendingUp, title: '28% Mortality Reduction', body: 'In a landmark 12-year controlled human trial, Epithalon-treated patients showed 28% lower all-cause mortality — one of the most extraordinary longevity findings ever published.', color: 'amber' },
    { icon: Moon, title: 'Sleep Architecture Restoration', body: 'Restores pineal gland function and normalizes melatonin rhythm. Nearly every user reports dramatically improved deep sleep quality within the first 10-day cycle.', color: 'blue' },
    { icon: Zap, title: 'Epigenetic Normalization', body: 'Normalizes methylation patterns in aging DNA — restoring the epigenetic landscape toward younger biological age markers.', color: 'emerald' },
    { icon: FlaskConical, title: 'Anti-Tumor Properties', body: 'Multiple studies demonstrate anti-tumor activity — Epithalon inhibits oncogene expression and has been studied in breast and prostate cancer models.', color: 'rose' },
    { icon: Dna, title: 'Hypothalamus-Pituitary Reset', body: 'Normalizes the HPT (hypothalamic-pituitary-thyroid) axis and restores youthful hormone regulation patterns that decline with age.', color: 'purple' },
  ];

  const colorMap: Record<string, string> = {
    purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  };

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-dark-900 grid-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-purple-400/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Telomere Extension Peptide</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full px-3 py-1.5">
                  <span className="text-amber-400 text-xs font-semibold">60+ Studies</span>
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="text-white block">Buy Epithalon</span>
                <span className="text-3xl sm:text-4xl font-bold text-slate-400 block mt-2 leading-tight">
                  28% Lower Mortality.<br />
                  <span className="text-purple-400">Telomeres Extended.</span>
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                Epithalon is the only compound proven to stimulate telomerase and lengthen telomeres in humans.
                A 12-year human clinical trial showed 28% lower all-cause mortality. 60+ published studies.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  Shop Epithalon — ${sale(product.price)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/products/epithalon" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                  Full Catalog Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Complete Guide', href: '/epithalon-complete-guide' },
                  { label: 'Anti-Aging Stack', href: '/anti-aging' },
                  { label: 'GHK-Cu Combo', href: '/ghk-cu' },
                  { label: 'Men Over 50', href: '/best-peptides-for-men-over-50' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-xs text-purple-400 border border-purple-400/20 hover:border-purple-400/50 px-3 py-1.5 rounded-full transition-all duration-200">
                    {label} →
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                {['COA Verified', '28% Mortality Drop', 'Telomere Extension', '60+ Studies'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
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
                    alt="Epithalon Telomere Longevity Peptide"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="320px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-700 border border-purple-400/30 rounded-xl px-4 py-2 text-sm font-bold text-purple-400 shadow-xl">
                  $139.99
                </div>
                <div className="absolute bottom-8 -left-8 bg-dark-700 border border-amber-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-amber-400 shadow-xl">
                  28% ↓ Mortality
                </div>
                <div className="absolute top-1/3 -right-10 bg-dark-700 border border-blue-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 shadow-xl">
                  Telomere Extension
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
                  color === 'blue' ? 'text-blue-400' : 'text-emerald-400'
                }`}>{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
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
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What Epithalon <span className="gradient-text">Actually Does</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Over 40 years of research by Dr. Vladimir Khavinson has produced the most comprehensive longevity dataset for any single peptide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefits.map(({ icon: Icon, title, body, color }) => (
              <div key={title} className="glass-card p-6 flex flex-col gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop Epithalon Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 12-YEAR STUDY CALLOUT ────────────────────────── */}
      <section className="py-20 bg-dark-800 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 border-purple-400/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-400/3 rounded-2xl pointer-events-none" />
            <div className="relative">
              <Dna className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-3">Landmark Clinical Trial</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                28% Lower All-Cause Mortality<br />
                <span className="text-purple-400">In a 12-Year Human Trial</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Khavinson et al. (2012) followed elderly patients for 12 years. Those who received Epithalon
                showed 28% lower all-cause mortality compared to the control group — an extraordinary effect
                size that no supplement has ever matched.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                  Shop Epithalon <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/epithalon-complete-guide" className="btn-secondary px-8 py-3 inline-flex items-center gap-2">
                  Read Full Research Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ─────────────────────────────────────── */}
      <section className="py-24 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Dosing Protocol</p>
              <h2 className="text-4xl font-black text-white mb-6">
                How to Use <span className="gradient-text">Epithalon</span>
              </h2>

              <div className="space-y-4">
                {[
                  { label: 'Standard Dose', value: '5–10mg subcutaneous daily' },
                  { label: 'Cycle Length', value: '10–20 consecutive days' },
                  { label: 'Frequency', value: '1–2 cycles per year (spring + fall)' },
                  { label: 'Intensive', value: '20 days on, 4-month break, repeat' },
                  { label: 'Best Stack', value: 'GHK-Cu + Epithalon for full longevity protocol' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-4 p-4 glass-card">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 shrink-0" />
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-white font-bold text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-card p-6 border-purple-400/20">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  Best Stacks with Epithalon
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Epithalon + GHK-Cu', desc: 'Gold standard anti-aging: telomere + gene expression reset', href: '/ghk-cu' },
                    { name: 'Epithalon + NAD+', desc: 'Cellular energy + longevity — comprehensive aging protocol', href: '/products/nad' },
                    { name: 'Full Anti-Aging Protocol', desc: 'Epithalon + GHK-Cu + SS-31 triple-mechanism stack', href: '/anti-aging' },
                  ].map(({ name, desc, href }) => (
                    <Link key={name} href={href} className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/60 hover:bg-dark-700 transition-colors group">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-neon-green transition-colors">{name}</p>
                        <p className="text-slate-500 text-xs">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 border-neon-green/15 text-center">
                <h3 className="text-white font-bold mb-2">Get COA-Verified Epithalon</h3>
                <p className="text-slate-400 text-sm mb-4">50mg vial · US domestic · third-party tested</p>
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                  Buy Epithalon — $139.99 <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-slate-600 text-xs mt-2">Affiliate link — at no extra cost to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-20 bg-dark-800 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Start Your <span className="gradient-text">Longevity Protocol</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            The only compound proven to extend telomeres. 28% lower mortality. Stack with GHK-Cu for the complete anti-aging protocol.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop Epithalon — $139.99 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/anti-aging" className="btn-secondary text-base px-8 py-4">
              Full Anti-Aging Guide
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
        </div>
      </section>

    </div>
  );
}
