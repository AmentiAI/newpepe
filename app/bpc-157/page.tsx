import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Shield, Activity, Zap, FlaskConical,
  Star, ExternalLink, Award, HeartPulse, Brain, Leaf,
} from 'lucide-react';
import { getProductBySlug } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy BPC-157 | #1 Healing Peptide — Tendons, Gut, Recovery | BPC-157 Stack',
  description: 'BPC-157 is the most studied healing peptide — 100+ peer-reviewed studies, no known LD50, works orally. Heals tendons, ligaments, gut, and more in 4-8 weeks.',
  alternates: { canonical: 'https://bp157stack.com/bpc-157' },
};

const SOURCE_URL = '/out?p=bpc157-10mg';

export default function BPC157Page() {
  const product = getProductBySlug('bpc-157')!;

  const stats = [
    { value: '100+', label: 'Peer-Reviewed Studies', color: 'emerald' },
    { value: '4-8wk', label: 'Tendon Repair Timeline', color: 'blue' },
    { value: 'No LD50', label: 'Known Lethal Dose', color: 'purple' },
    { value: 'Oral', label: 'Works Without Injecting', color: 'amber' },
  ];

  const benefits = [
    { icon: Activity, title: 'Tendon & Ligament Healing', body: 'Upregulates GH receptors in fibroblasts — accelerating collagen synthesis and connective tissue repair. Recovers injuries in 4-8 weeks that would otherwise take 6-12 months.', color: 'emerald' },
    { icon: Leaf, title: 'Gut & Digestive Repair', body: 'Repairs intestinal barrier integrity — the most researched peptide for leaky gut, IBS, IBD, and Crohn\'s. Oral delivery targets intestinal tissue directly.', color: 'green' },
    { icon: Brain, title: 'Neuroprotection', body: 'Crosses the blood-brain barrier and protects dopaminergic neurons. Used for peripheral nerve repair and concussion recovery.', color: 'blue' },
    { icon: HeartPulse, title: 'Anti-Inflammatory', body: 'Reduces inflammation through modulation of the NO-cGMP system — without suppressing immune function like NSAIDs and corticosteroids do.', color: 'rose' },
    { icon: Zap, title: 'Angiogenesis', body: 'Stimulates blood vessel formation (angiogenesis) to injured tissue, improving nutrient and oxygen delivery that accelerates the entire healing cascade.', color: 'amber' },
    { icon: Shield, title: 'Exceptional Safety', body: 'No known LD50 across all animal studies. Zero hormonal activity. Does not suppress natural hormone production. 100+ studies with no serious adverse effects.', color: 'purple' },
  ];

  const studies = [
    { title: 'Achilles Tendon: 2-4× Faster Healing', citation: 'Sikiric et al., 2010', finding: 'BPC-157 accelerated Achilles tendon healing by 2-4× compared to controls — confirmed histologically with full structural repair.' },
    { title: 'Gut Lining Repair in IBD Models', citation: 'Sikiric et al., 2016', finding: 'Oral BPC-157 repaired intestinal barrier integrity and reduced inflammatory markers in colitis and Crohn\'s models.' },
    { title: 'Nerve Regeneration', citation: 'Sikirić et al., 2018', finding: 'BPC-157 accelerated sciatic nerve repair and functional recovery — crossing the BBB to protect against neurotoxicity.' },
    { title: 'Muscle Crush Injury Repair', citation: 'Chang et al., 2010', finding: 'BPC-157 dramatically accelerated recovery from crush injuries — both local injection and systemic administration were effective.' },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    green: 'bg-green-400/10 text-green-400 border-green-400/20',
    blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
  };

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-dark-900 grid-bg">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-emerald-400/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-green/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-4 py-1.5">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">#1 Healing Peptide</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-neon-green/10 border border-neon-green/20 rounded-full px-3 py-1.5">
                  <Star className="w-3 h-3 text-neon-green" />
                  <span className="text-neon-green text-xs font-semibold">100+ Studies</span>
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="text-white block">Buy BPC-157</span>
                <span className="text-3xl sm:text-4xl font-bold text-slate-400 block mt-2 leading-tight">
                  The World&apos;s Most Studied<br />
                  <span className="text-emerald-400">Healing Peptide</span>
                </span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                BPC-157 accelerates tendon, ligament, muscle, and gut repair with zero systemic side effects.
                Works orally or by injection. 100+ published studies. No known lethal dose.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  Shop BPC-157 — ${product.price}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/products/bpc-157" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                  Full Catalog Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Tendon Guide', href: '/bpc-157-for-tendons' },
                  { label: 'Gut Health', href: '/bpc-157-for-gut-health' },
                  { label: 'Oral vs Injectable', href: '/bpc-157-oral-vs-injectable' },
                  { label: 'BPC-157 vs TB-500', href: '/bpc-157-vs-tb-500' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-xs text-emerald-400 border border-emerald-400/20 hover:border-emerald-400/50 px-3 py-1.5 rounded-full transition-all duration-200">
                    {label} →
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                {['COA Verified', 'US Domestic Shipping', 'No Known LD50', 'Oral or Injectable'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="absolute inset-0 bg-emerald-400/5 rounded-3xl blur-3xl" />
              <div className="relative">
                <div className="absolute inset-10 rounded-full border border-emerald-400/20 animate-pulse" />
                <div className="relative w-80 h-80">
                  <Image
                    src={product.image}
                    alt="BPC-157 Research Grade Peptide"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="320px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-700 border border-emerald-400/30 rounded-xl px-4 py-2 text-sm font-bold text-emerald-400 shadow-xl">
                  $54.99
                </div>
                <div className="absolute bottom-8 -left-6 bg-dark-700 border border-neon-green/20 rounded-xl px-3 py-2 text-xs font-semibold text-neon-green shadow-xl">
                  100+ Studies
                </div>
                <div className="absolute top-1/3 -right-8 bg-dark-700 border border-blue-500/20 rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 shadow-xl">
                  Oral Option
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <div className="bg-dark-800 border-y border-emerald-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="text-center">
                <div className={`text-4xl font-black mb-1 ${
                  color === 'emerald' ? 'text-emerald-400' :
                  color === 'blue' ? 'text-blue-400' :
                  color === 'purple' ? 'text-purple-400' : 'text-amber-400'
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
              What BPC-157 <span className="gradient-text">Actually Does</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              BPC-157 doesn&apos;t just mask symptoms — it repairs the underlying structural damage through multiple simultaneous mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {benefits.map(({ icon: Icon, title, body, color }) => (
              <div key={title} className={`glass-card p-6 flex flex-col gap-4 border ${colorMap[color].replace('text-', 'border-').replace('/10', '/20').replace(' text-', ' ')}`}>
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
              Shop BPC-157 Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL ─────────────────────────────────────── */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Dosing Protocol</p>
              <h2 className="text-4xl font-black text-white mb-6">
                How to Use <span className="gradient-text">BPC-157</span>
              </h2>
              <div className="space-y-4">
                {[
                  { phase: 'Standard Dose', detail: '250–500 mcg per day', note: 'Most common research dose' },
                  { phase: 'Loading (Acute Injury)', detail: '500 mcg twice daily × 2 weeks', note: 'For severe or fresh injuries' },
                  { phase: 'Administration', detail: 'Subcutaneous injection OR oral', note: 'BPC-157 is gastric-acid stable' },
                  { phase: 'Cycle Length', detail: '4–12 weeks for injury', note: '4–8 weeks for gut issues' },
                  { phase: 'Timing', detail: 'Once or twice daily, fasted', note: 'Fasted preferred for oral use' },
                ].map(({ phase, detail, note }) => (
                  <div key={phase} className="glass-card p-4 flex gap-4 items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{phase}</p>
                      <p className="text-white font-bold">{detail}</p>
                      <p className="text-slate-500 text-xs">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-card p-6 border-emerald-400/20">
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" />
                  Best Stacks with BPC-157
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'BPC-157 + TB-500', desc: 'Gold standard healing stack — local + systemic repair', href: '/tb-500', color: 'emerald' },
                    { name: 'BPC-157 + GHK-Cu', desc: 'Healing + anti-aging — collagen and tissue repair combined', href: '/ghk-cu', color: 'purple' },
                    { name: 'BPC-157 + NAD+', desc: 'Cellular energy + repair for comprehensive recovery', href: '/products/nad', color: 'blue' },
                  ].map(({ name, desc, href, color }) => (
                    <Link key={name} href={href} className="flex items-start gap-3 p-3 rounded-xl bg-dark-700/60 hover:bg-dark-700 transition-colors group">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${color === 'emerald' ? 'bg-emerald-400' : color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`} />
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-neon-green transition-colors">{name}</p>
                        <p className="text-slate-500 text-xs">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/stacks/healing-stack" className="mt-4 btn-secondary text-sm px-5 py-2.5 inline-flex items-center gap-1.5">
                  View Full Healing Stack <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="glass-card p-6 border-neon-green/15 text-center">
                <FlaskConical className="w-8 h-8 text-neon-green mx-auto mb-3" />
                <h3 className="text-white font-bold mb-2">Ready to Order?</h3>
                <p className="text-slate-400 text-sm mb-4">COA-verified, 98%+ purity, US domestic shipping.</p>
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                  Buy BPC-157 <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-slate-600 text-xs mt-2">Affiliate link — at no extra cost to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH ─────────────────────────────────────── */}
      <section className="py-24 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Peer-Reviewed Science</p>
            <h2 className="text-4xl font-black text-white mb-4">
              The Research Behind <span className="gradient-text">BPC-157</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {studies.map(({ title, citation, finding }) => (
              <div key={title} className="glass-card p-6 flex flex-col gap-3">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full w-fit border border-emerald-400/20">{citation}</span>
                <h3 className="text-white font-bold text-lg">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{finding}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products/bpc-157" className="btn-secondary px-8 py-3 inline-flex items-center gap-2 mr-4">
              Full Product Details <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
              Shop BPC-157 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ───────────────────────────────── */}
      <section className="py-20 bg-dark-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-8">
            BPC-157 <span className="gradient-text">Deep-Dive Guides</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'BPC-157 for Tendons', desc: 'Complete protocol for tendon & ligament healing', href: '/bpc-157-for-tendons', tag: 'Healing' },
              { title: 'BPC-157 for Gut Health', desc: 'Oral BPC-157 for leaky gut, IBD, and IBS', href: '/bpc-157-for-gut-health', tag: 'Gut' },
              { title: 'BPC-157 for Anxiety', desc: 'Anxiolytic and neuroprotective effects', href: '/bpc-157-for-anxiety', tag: 'Cognitive' },
              { title: 'Oral vs Injectable', desc: 'Which delivery method works better?', href: '/bpc-157-oral-vs-injectable', tag: 'Guide' },
              { title: 'Scar Healing Protocol', desc: 'Using BPC-157 to reduce scar tissue', href: '/bpc-157-scar-healing', tag: 'Healing' },
              { title: 'BPC-157 vs TB-500', desc: 'Which healing peptide should you choose?', href: '/bpc-157-vs-tb-500', tag: 'Comparison' },
            ].map(({ title, desc, href, tag }) => (
              <Link key={href} href={href} className="group glass-card p-5 flex flex-col gap-3 hover:border-emerald-400/30 transition-all duration-200">
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full w-fit">{tag}</span>
                <h3 className="text-white font-bold group-hover:text-emerald-400 transition-colors">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
                <div className="mt-auto flex items-center gap-1 text-emerald-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-20 bg-dark-900 grid-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">COA-Verified · 98%+ Purity</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Start Your <span className="gradient-text">BPC-157 Protocol</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            US domestic shipping. Third-party tested. Cold-chain packaging. Every batch comes with a Certificate of Analysis.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop BPC-157 — $54.99 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/healing-stack" className="btn-secondary text-base px-8 py-4">
              View Healing Stack
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {['100+ Studies', 'Oral or Injectable', 'No LD50', 'US Domestic'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> {item}
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-4">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
        </div>
      </section>

    </div>
  );
}
