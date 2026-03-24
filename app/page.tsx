import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, TrendingUp, Brain, FlaskConical, Star, CheckCircle, Activity, Clock, Users, Award } from 'lucide-react';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'BPC-157 Stack | #1 Peptide Protocols for Healing, Performance & Longevity',
  description: 'Discover the most effective BPC-157 stacks and peptide protocols. Science-backed guides for injury healing, body recomposition, anti-aging, and cognitive enhancement.',
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const stats = [
  { value: '100+', label: 'Peer-Reviewed Studies', icon: FlaskConical },
  { value: '12', label: 'Peptides', icon: Activity },
  { value: '5', label: 'Expert Stack Protocols', icon: Zap },
  { value: '50K+', label: 'People Informed', icon: Users },
];

const goals = [
  {
    icon: Shield,
    title: 'Injury Healing',
    subtitle: 'Recover 2-3x faster',
    desc: 'BPC-157 + TB-500 stack heals tendons, ligaments, gut, and muscle through proven mechanisms — not pain management.',
    href: '/healing',
    color: 'emerald',
    peptides: ['BPC-157', 'TB-500', 'KPV'],
    stat: '4-8 weeks to full tendon repair',
  },
  {
    icon: TrendingUp,
    title: 'Body Recomposition',
    subtitle: 'Burn fat, build muscle',
    desc: 'Ipamorelin + CJC-1295 creates synergistic GH release — 8-10x more effective than either peptide alone.',
    href: '/body-composition',
    color: 'blue',
    peptides: ['Ipamorelin', 'CJC-1295', 'HGH Frag'],
    stat: 'Comparable to low-dose HGH therapy',
  },
  {
    icon: Zap,
    title: 'Anti-Aging',
    subtitle: 'Reverse biological age',
    desc: 'Epithalon extends telomeres. GHK-Cu resets 31% of aged genes. SS-31 repairs mitochondria. Triple-threat longevity.',
    href: '/anti-aging',
    color: 'purple',
    peptides: ['Epithalon', 'GHK-Cu', 'SS-31'],
    stat: '28% mortality reduction in 12-yr trial',
  },
  {
    icon: Brain,
    title: 'Cognitive Edge',
    subtitle: 'Peak mental performance',
    desc: 'Semax boosts BDNF dramatically. Selank eliminates anxiety without sedation. The only stack that makes you calmer AND sharper.',
    href: '/stacks/cognitive-stack',
    color: 'amber',
    peptides: ['Semax', 'Selank'],
    stat: 'Used clinically for stroke recovery',
  },
];

const testimonials = [
  { text: 'BPC-157 + TB-500 healed an Achilles tendon my doctor said would take 9 months. Back training in 8 weeks.', name: 'Marcus R.', role: 'CrossFit Competitor', stars: 5 },
  { text: 'Ipamorelin changed my sleep quality overnight. Recovery cut in half. The body recomp results are undeniable.', name: 'James K.', role: 'Natural Bodybuilder', stars: 5 },
  { text: 'GHK-Cu + Epithalon — 5 years younger in the mirror in 3 months. Skin density, energy, sleep. Everything shifted.', name: 'Sarah M.', role: 'Longevity Researcher', stars: 5 },
  { text: 'Semax + Selank is the only thing that has ever made me feel calm AND sharp simultaneously. Life-changing stack.', name: 'David L.', role: 'Software Engineer', stars: 5 },
];

const faqs = [
  { q: 'What makes BPC-157 the #1 healing peptide?', a: 'BPC-157 has no known lethal dose in animal studies, works orally unlike most peptides, and has 100+ published papers. It simultaneously upregulates GH receptors, improves blood flow, and repairs gut lining — no other peptide covers all three.' },
  { q: 'Do I have to inject? Can BPC-157 be taken orally?', a: 'BPC-157 is one of the only peptides proven to work orally — it\'s gastric acid stable. Capsules or dissolved powder work systemically. Most other peptides require subcutaneous injection with a painless insulin needle.' },
  { q: 'What\'s the fastest healing stack?', a: 'BPC-157 + TB-500. BPC-157 handles local targeted repair; TB-500 mobilizes stem cells body-wide. Together they reduce tendon and ligament recovery time by 50-70% vs natural healing.' },
  { q: 'Are these peptides safe?', a: 'BPC-157 has no hormonal activity and no known LD50. Always source COA-verified peptides from a reputable supplier.' },
  { q: 'How soon will I see results?', a: 'BPC-157: pain reduction in 2-4 days, structural healing in 4-8 weeks. Ipamorelin: improved sleep within 1-2 weeks, body comp changes in 4-8 weeks. Selank: anxiety reduction within 30 minutes of first use.' },
];

const marqueeItems = [
  '✦ BPC-157 — Ultimate Healer', '✦ TB-500 — Systemic Repair', '✦ GHK-Cu — Gene Reset',
  '✦ Epithalon — Telomere Extension', '✦ Ipamorelin — Clean GH', '✦ Selank — Anti-Anxiety',
  '✦ Semax — BDNF Surge', '✦ SS-31 — Mitochondrial Repair', '✦ MOTS-c — Metabolic Master',
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const featuredStacks = stacks.slice(0, 3);

  return (
    <div className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'BPC-157 Stack — #1 Peptide Protocols for Healing, Performance & Longevity',
            description: 'The most comprehensive BPC-157 and peptide protocol resource. Science-backed stacks for injury healing, body recomposition, anti-aging, and cognitive enhancement.',
            url: 'https://bp157stack.com',
            isPartOf: { '@type': 'WebSite', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            about: [
              { '@type': 'Thing', name: 'BPC-157' },
              { '@type': 'Thing', name: 'TB-500' },
              { '@type': 'Thing', name: 'Peptide Protocols' },
              { '@type': 'Thing', name: 'Injury Healing' },
              { '@type': 'Thing', name: 'Anti-Aging' },
            ],
          }),
        }}
      />

      {/* ═══════════════════════════════════════════════
          HERO — Full viewport, cinematic
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-16 bg-dark-900">
        {/* Animated background grid */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Radial gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-neon-green/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Copy */}
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/25 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-neon-green text-xs font-semibold uppercase tracking-widest">Trusted Peptide Protocols</span>
              </div>

              <h1
                aria-label="BPC-157 Peptide Protocols — Heal. Optimize. Dominate."
                className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight"
              >
                <span className="text-white block">Heal.</span>
                <span className="block" style={{ WebkitTextStroke: '2px #00ff88', color: 'transparent' }}>Optimize.</span>
                <span className="text-white block">Dominate.</span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
                The most comprehensive BPC-157 and peptide protocol resource.
                Science-backed stacks for injury healing, body recomposition,
                anti-aging, and cognitive enhancement.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
                >
                  View
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/stacks" className="btn-secondary text-base px-8 py-4">
                  View Protocols
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-5">
                {['COA Verified', 'US Domestic', 'Pharmaceutical Grade', 'Expert Protocols'].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-neon-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Product showcase */}
            <div className="relative hidden lg:block">
              {/* Main vial image */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Glowing ring */}
                <div className="absolute inset-8 rounded-full border border-neon-green/20 animate-pulse-slow" />
                <div className="absolute inset-4 rounded-full border border-neon-green/10" />

                {/* Center product image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-56 h-56">
                    <div className="absolute inset-0 bg-neon-green/5 rounded-full blur-3xl" />
                    <Image
                      src="https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp"
                      alt="BPC-157 — Research Grade"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute top-8 -right-4 bg-dark-700 border border-neon-green/20 rounded-xl px-3 py-2 text-xs font-semibold text-neon-green shadow-xl">
                  #1 Healing Peptide
                </div>
                <div className="absolute bottom-12 -left-4 bg-dark-700 border border-blue-500/20 rounded-xl px-3 py-2 text-xs font-semibold text-blue-400 shadow-xl">
                  100+ Studies
                </div>
                <div className="absolute top-1/2 -right-8 bg-dark-700 border border-purple-500/20 rounded-xl px-3 py-2 text-xs font-semibold text-purple-400 shadow-xl">
                  No Known LD50
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════ */}
      <div className="bg-dark-800 border-y border-neon-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-6 h-6 text-neon-green mx-auto mb-2 opacity-70" />
                <div className="text-4xl font-black text-white mb-1">{value}</div>
                <div className="text-slate-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════ */}
      <div className="bg-neon-green/5 border-b border-neon-green/10 py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-neon-green/70 text-xs font-mono tracking-widest shrink-0">{item}</span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          GOAL SELECTOR — 2×2 grid, large cards
      ═══════════════════════════════════════════════ */}
      <section className="bg-dark-900 py-24 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Choose Your Protocol</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What Are You <span className="gradient-text">Optimizing For?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Pick your goal. We give you the exact peptide stack, dosing protocol, and where to source it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {goals.map(({ icon: Icon, title, subtitle, desc, href, color, peptides, stat }) => {
              const colorMap: Record<string, string> = {
                emerald: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5 group-hover:border-emerald-400/40',
                blue: 'text-blue-400 border-blue-400/20 bg-blue-400/5 group-hover:border-blue-400/40',
                purple: 'text-purple-400 border-purple-400/20 bg-purple-400/5 group-hover:border-purple-400/40',
                amber: 'text-amber-400 border-amber-400/20 bg-amber-400/5 group-hover:border-amber-400/40',
              };
              const iconBg: Record<string, string> = {
                emerald: 'bg-emerald-400/10 text-emerald-400',
                blue: 'bg-blue-400/10 text-blue-400',
                purple: 'bg-purple-400/10 text-purple-400',
                amber: 'bg-amber-400/10 text-amber-400',
              };
              return (
                <Link
                  key={title}
                  href={href}
                  className={`group relative p-8 rounded-2xl border transition-all duration-300 ${colorMap[color]} bg-dark-800/50 backdrop-blur-sm hover:shadow-xl block`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg[color]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{subtitle}</p>
                      <h3 className="text-white font-black text-2xl">{title}</h3>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6">{desc}</p>

                  {/* Peptide tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {peptides.map((p) => (
                      <span key={p} className="text-xs font-mono bg-dark-700 text-slate-300 px-2.5 py-1 rounded-lg border border-white/5">{p}</span>
                    ))}
                  </div>

                  {/* Stat callout */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 italic">{stat}</span>
                    <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: color === 'emerald' ? '#34d399' : color === 'blue' ? '#60a5fa' : color === 'purple' ? '#c084fc' : '#fbbf24' }}>
                      See Protocol <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURED STACKS — Horizontal scroll feel
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Proven Combinations</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Top Peptide <span className="gradient-text">Stacks</span>
              </h2>
            </div>
            <Link href="/stacks" className="btn-secondary text-sm hidden sm:flex items-center gap-1">
              All Stacks <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {featuredStacks.map((stack, i) => (
              <div key={stack.id} className="group relative">
                {/* Numbered indicator */}
                <div className="absolute -top-4 -left-2 z-10 w-8 h-8 rounded-full bg-dark-900 border border-neon-green/20 flex items-center justify-center text-neon-green text-xs font-black font-mono">
                  0{i + 1}
                </div>
                <div className="glass-card p-7 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                      stack.difficulty === 'Beginner' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' :
                      stack.difficulty === 'Intermediate' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
                      'text-red-400 border-red-400/30 bg-red-400/10'
                    }`}>{stack.difficulty}</span>
                    <span className="text-slate-600 text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{stack.duration}</span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-neon-green transition-colors">{stack.name}</h3>
                  <p className="text-neon-green text-xs font-medium mb-3">{stack.goal}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{stack.tagline}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {stack.peptides.map((p) => (
                      <span key={p} className="text-xs font-mono bg-dark-700 text-neon-green/70 px-2 py-0.5 rounded">{p.toUpperCase()}</span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link href={`/stacks/${stack.id}`} className="btn-secondary text-xs px-4 py-2 flex-1 text-center">Protocol</Link>
                    <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-xs px-4 py-2 flex items-center gap-1">
                      View <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRODUCT SHOWCASE
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">COA-Verified · Research Grade</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Featured <span className="gradient-text">Peptides</span>
              </h2>
            </div>
            <Link href="/products" className="btn-secondary text-sm hidden sm:flex items-center gap-1">
              All Peptides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-secondary text-base px-8 py-4">View All 12 Peptides</Link>
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOCIAL PROOF — Testimonials + Stars
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Real Results</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              What Users <span className="gradient-text">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Quick Answers</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="glass-card p-6 border-l-2 border-neon-green/30">
                <h3 className="text-white font-semibold mb-2">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/faq" className="btn-secondary text-sm px-8 py-3">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — Full-width banner
      ═══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/6 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/6 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 text-neon-green mx-auto mb-6 opacity-70" />
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4 leading-tight">
            Stop Waiting.<br />
            <span className="gradient-text">Start Healing.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            COA-verified peptides, US domestic shipping, and the most trusted name in peptides.
            Your protocol starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-lg px-12 py-5 flex items-center gap-2 group"
            >
              View
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/guide" className="btn-secondary text-lg px-10 py-5">
              Read the Guide First
            </Link>
          </div>
          <p className="text-slate-600 text-xs">
            Not medical advice. Consult a physician before use.
          </p>
        </div>
      </section>
    </div>
  );
}
