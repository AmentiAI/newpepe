import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, TrendingUp, Zap, Moon, FlaskConical,
  ExternalLink, Award, Activity,
} from 'lucide-react';
import { getProductBySlug, sale } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Buy CJC-1295 / Ipamorelin | Gold Standard GH Stack for Fat Loss & Muscle | BPC-157 Stack',
  description: 'CJC-1295 + Ipamorelin produces 8-10x more growth hormone than either alone — with zero cortisol spike. The most prescribed peptide stack in anti-aging clinics.',
  alternates: { canonical: 'https://bp157stack.com/ipamorelin' },
};

const SOURCE_URL = '/out?p=cjc1295-ipamorelin';

export default function IpamorelinPage() {
  const product = getProductBySlug('cjc1295-ipamorelin')!;

  const stats = [
    { value: '8-10×', label: 'GH Amplification vs Solo', color: 'blue' },
    { value: 'Zero', label: 'Cortisol Spike', color: 'emerald' },
    { value: '1-2wk', label: 'Sleep Improvement', color: 'purple' },
    { value: '3-6mo', label: 'Body Recomp Timeline', color: 'amber' },
  ];

  const benefits = [
    { icon: Zap, title: '8-10× GH Amplification', body: 'Synergistic GHRH + GHRP action produces 8-10x more GH than either peptide alone — the most powerful legal GH optimization available.', color: 'blue' },
    { icon: TrendingUp, title: 'Zero Cortisol Spike', body: 'Ipamorelin is the only GHRP that does not raise cortisol, prolactin, or ACTH — maintaining the anabolic environment needed for fat loss and muscle growth.', color: 'emerald' },
    { icon: Moon, title: 'Sleep Architecture', body: 'GH is primarily secreted during slow-wave sleep. This combo amplifies nocturnal GH pulses, deepening sleep and dramatically accelerating overnight recovery.', color: 'purple' },
    { icon: Activity, title: 'Fat Loss', body: 'GH directly drives fatty acid oxidation — especially visceral and abdominal fat. Most users see measurable fat loss within 3-6 weeks of consistent use.', color: 'amber' },
    { icon: TrendingUp, title: 'Muscle & Recovery', body: 'GH drives protein synthesis and connective tissue repair. Athletes use this stack to increase lean mass, improve recovery, and train at higher volumes.', color: 'blue' },
    { icon: FlaskConical, title: 'Clinic-Standard Protocol', body: 'The most commonly prescribed peptide combination in anti-aging and regenerative medicine clinics worldwide — with years of real-world safety and efficacy data.', color: 'emerald' },
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
    amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
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
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Gold Standard GH Stack</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5">
                  <span className="text-emerald-400 text-xs font-semibold">Zero Cortisol</span>
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
                <span className="text-gray-900 block">Buy Ipamorelin +</span>
                <span className="text-gray-900 block">CJC-1295</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-500 block mt-2 leading-tight">
                  <span className="text-blue-400">8-10× GH Amplification</span><br />
                  Zero Cortisol. Pure Results.
                </span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                The most widely prescribed peptide combination in anti-aging clinics.
                Synergistic GH release for fat loss, muscle, sleep, and recovery — without spiking cortisol.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  Shop Ipamorelin/CJC — ${sale(product.price)}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/products/cjc1295-ipamorelin" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                  Full Catalog Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: 'Week-by-Week Results', href: '/cjc-1295-ipamorelin-results' },
                  { label: 'Body Comp Guide', href: '/body-composition' },
                  { label: 'Athlete Stack', href: '/stacks/athlete-stack' },
                  { label: 'Men Over 50', href: '/best-peptides-for-men-over-50' },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} className="text-xs text-blue-400 border border-blue-400/20 hover:border-blue-400/50 px-3 py-1.5 rounded-full transition-all duration-200">
                    {label} →
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-5">
                {['COA Verified', '8-10× GH Boost', 'Zero Cortisol', 'Clinic Standard'].map((item) => (
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
                    alt="CJC-1295 Ipamorelin GH Stack Peptide"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="320px"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-dark-700 border border-blue-400/30 rounded-xl px-4 py-2 text-sm font-bold text-blue-400 shadow-xl">
                  $50.00
                </div>
                <div className="absolute bottom-8 -left-8 bg-dark-700 border border-emerald-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-emerald-400 shadow-xl">
                  8-10× GH
                </div>
                <div className="absolute top-1/3 -right-10 bg-dark-700 border border-purple-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-purple-400 shadow-xl">
                  Clinic Standard
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

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Synergy Explained</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why This Stack <span className="gradient-text">Works So Well</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass-card p-7 border-blue-400/20">
              <h3 className="text-blue-400 font-bold text-lg mb-2">CJC-1295</h3>
              <p className="text-gray-500 text-xs mb-4">Growth Hormone Releasing Hormone (GHRH) Analog</p>
              <p className="text-gray-500 text-sm leading-relaxed">Acts on the GHRH receptor, priming the pituitary gland to release growth hormone. It creates the biological readiness for a large GH pulse — but needs the triggering signal.</p>
            </div>
            <div className="glass-card p-7 border-emerald-400/20">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">Ipamorelin</h3>
              <p className="text-gray-500 text-xs mb-4">Growth Hormone Releasing Peptide (GHRP)</p>
              <p className="text-gray-500 text-sm leading-relaxed">Acts on the ghrelin receptor (GHS-R1a), providing the triggering signal that fires the GH pulse. It&apos;s the cleanest GHRP — zero cortisol, zero prolactin, zero ACTH elevation.</p>
            </div>
          </div>

          <div className="glass-card p-8 border-neon-green/15 text-center mb-12">
            <Zap className="w-10 h-10 text-emerald-700 mx-auto mb-4" />
            <h3 className="text-gray-900 font-bold text-2xl mb-3">Together: 8-10× More GH</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              CJC-1295 primes the pituitary. Ipamorelin pulls the trigger. The result is a synergistic GH release 8-10× greater than either peptide alone — without any of the side effects of synthetic HGH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Week-by-Week</p>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What to <span className="gradient-text">Expect</span>
            </h2>
          </div>

          <div className="space-y-4 mb-10">
            {[
              { phase: 'Week 1-2', result: 'Improved sleep quality and depth. Faster workout recovery. Slight increase in energy.', color: 'blue' },
              { phase: 'Week 3-6', result: 'Measurable fat loss begins. Improved skin texture and tone. Better muscle pumps during training.', color: 'emerald' },
              { phase: 'Month 2-3', result: 'Visible lean muscle gains. Significant body composition shift. Joints feel better. Stronger training sessions.', color: 'purple' },
              { phase: 'Month 4-6', result: 'Maximum body recomposition results. Sustained fat loss. Improved hormone markers. Enhanced overall wellbeing.', color: 'amber' },
            ].map(({ phase, result, color }) => (
              <div key={phase} className="glass-card p-5 flex gap-4 items-start">
                <div className={`text-xs font-black px-3 py-1.5 rounded-full border shrink-0 mt-0.5 ${colorMap[color]}`}>{phase}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{result}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 border-neon-green/15 text-center">
            <h3 className="text-gray-900 font-bold text-lg mb-2">
              <Award className="w-5 h-5 text-emerald-700 inline mr-2" />
              Get COA-Verified CJC-1295 / Ipamorelin
            </h3>
            <p className="text-gray-500 text-sm mb-4">Combo vial available · US domestic shipping · third-party tested</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-3 inline-flex items-center gap-2">
                Buy Ipamorelin/CJC — $50 <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/cjc-1295-ipamorelin-results" className="btn-secondary px-6 py-3">
                See Week-by-Week Results
              </Link>
            </div>
            <p className="text-gray-600 text-xs mt-3">Affiliate link — at no extra cost to you.</p>
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ───────────────────────────────── */}
      <section className="py-20 bg-white grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            Related <span className="gradient-text">Guides</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'CJC-1295/Ipamorelin: Week-by-Week Results', desc: 'Detailed results log — what to expect at each stage', href: '/cjc-1295-ipamorelin-results', tag: 'Body Comp' },
              { title: 'Body Recomposition Guide', desc: 'Complete guide to fat loss with muscle retention', href: '/body-composition', tag: 'Fat Loss' },
              { title: 'Athlete Performance Stack', desc: 'BPC-157 + TB-500 + Ipamorelin for training and recovery', href: '/stacks/athlete-stack', tag: 'Athlete' },
              { title: 'Men Over 50 Protocol', desc: 'GH optimization for men in their 50s and beyond', href: '/best-peptides-for-men-over-50', tag: 'Men' },
              { title: 'Wolverine Stack', desc: 'Ultimate recovery and performance stack for athletes', href: '/wolverine-stack', tag: 'Performance' },
              { title: 'IGF-1 LR3 Guide', desc: 'Combine with CJC/Ipamorelin for maximum anabolic effect', href: '/igf-1-looksmaxxing', tag: 'Advanced' },
            ].map(({ title, desc, href, tag }) => (
              <Link key={href} href={href} className="group glass-card p-5 flex flex-col gap-3 hover:border-blue-400/30 transition-all duration-200">
                <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-0.5 rounded-full w-fit">{tag}</span>
                <h3 className="text-gray-900 font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Start Your <span className="gradient-text">GH Protocol</span>
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            The clinic-standard GH peptide stack. US domestic shipping. COA-verified. Start seeing results in 1-2 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              Shop Ipamorelin/CJC — $50 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/body-composition" className="btn-secondary text-base px-8 py-4">
              Body Comp Guide
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
        </div>
      </section>

    </div>
  );
}
