import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Zap, Shield, TrendingUp, Brain, FlaskConical, Star,
  CheckCircle, Activity, Clock, Users, Award, Target, BookOpen,
  Microscope, Dna, HeartPulse, Leaf, Wind, ExternalLink,
  AlertTriangle, Package, Thermometer, BadgeCheck,
} from 'lucide-react';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'BPC-157 Stack | #1 Peptide Protocols for Healing, Performance & Longevity',
  description: 'Discover the most effective BPC-157 stacks and peptide protocols. Science-backed guides for injury healing, body recomposition, anti-aging, and cognitive enhancement.',
};

const SOURCE_URL = '/out';

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

const howItWorksSteps = [
  {
    step: '01',
    icon: Target,
    title: 'Choose Your Goal',
    desc: 'Identify what you\'re targeting: healing, anti-aging, body comp, or cognitive enhancement. Each goal maps to a distinct set of peptides with different mechanisms.',
    color: 'emerald',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Pick Your Protocol',
    desc: 'Browse our evidence-based stacks or individual peptides for your specific needs. Every protocol includes dosing, timing, cycle length, and what to expect week by week.',
    color: 'blue',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Source & Start',
    desc: 'Get COA-verified peptides from our recommended supplier and follow the protocol. US domestic shipping means your peptides arrive cold and uncompromised.',
    color: 'neon',
  },
];

const researchStudies = [
  {
    peptide: 'BPC-157',
    title: 'Achilles Tendon Healing Accelerated 2-4×',
    citation: 'Sikiric et al., 2010',
    finding: 'BPC-157 accelerates Achilles tendon healing by 2-4× vs controls — with full structural repair confirmed histologically.',
    href: '/products/bpc-157',
    color: 'emerald',
    icon: Activity,
  },
  {
    peptide: 'Epithalon',
    title: 'Telomere Extension & 28% Mortality Reduction',
    citation: 'Khavinson et al., 2012',
    finding: 'Epithalon extends telomere length and reduces mortality by 28% in human trials spanning 12 years — the strongest longevity data for any peptide.',
    href: '/products/epithalon',
    color: 'purple',
    icon: Dna,
  },
  {
    peptide: 'GHK-Cu',
    title: '31% of Age-Related Gene Changes Reversed',
    citation: 'Pickart et al., 2015',
    finding: 'GHK-Cu reverses 31% of age-related gene expression changes identified in aging tissue, restoring youthful transcriptional patterns at the cellular level.',
    href: '/products/ghk-cu',
    color: 'amber',
    icon: Microscope,
  },
  {
    peptide: 'TB-500',
    title: 'Stem Cell Mobilization & Accelerated Repair',
    citation: 'Hinkel et al., 2015',
    finding: 'TB-500 mobilizes endogenous stem cells from bone marrow and accelerates muscle and wound healing — confirmed in both cardiac and skeletal muscle tissue.',
    href: '/products/tb-500',
    color: 'blue',
    icon: HeartPulse,
  },
];

const userTargets = [
  {
    icon: Activity,
    title: 'Tendon & Ligament Healing',
    badge: 'Most Popular',
    desc: 'Chronic tendinopathies, post-surgical repair, and sports injuries. BPC-157 + TB-500 is the gold standard protocol.',
    href: '/healing',
    color: 'emerald',
  },
  {
    icon: Leaf,
    title: 'Gut & Digestive Health',
    badge: null,
    desc: 'Leaky gut, IBD, Crohn\'s, and chronic GI inflammation. BPC-157 oral is uniquely effective for intestinal tissue.',
    href: '/guide',
    color: 'green',
  },
  {
    icon: Dna,
    title: 'Anti-Aging & Longevity',
    badge: null,
    desc: 'Telomere extension, gene expression reset, and mitochondrial repair. The triple-protocol with Epithalon, GHK-Cu, and SS-31.',
    href: '/anti-aging',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'Body Recomposition',
    badge: null,
    desc: 'Fat loss with muscle preservation. GH secretagogues like Ipamorelin + CJC-1295 produce clean GH pulses without side effects.',
    href: '/body-composition',
    color: 'blue',
  },
  {
    icon: Brain,
    title: 'Anxiety & Mood',
    badge: null,
    desc: 'Selank provides rapid anxiolytic effects without sedation. Semax simultaneously raises BDNF for cognitive clarity and mood stability.',
    href: '/stacks/cognitive-stack',
    color: 'amber',
  },
  {
    icon: Wind,
    title: 'Hair Loss',
    badge: null,
    desc: 'GHK-Cu stimulates hair follicle growth and increases hair density. One of the most well-documented cosmetic applications of any peptide.',
    href: '/ghk-cu-for-hair-loss',
    color: 'rose',
  },
];

const recentGuides = [
  {
    title: 'BPC-157 for Tendons: The Complete Protocol',
    desc: 'Dosing, timing, injection sites, and what to expect at weeks 1, 4, and 8. The most detailed tendon protocol available.',
    href: '/bpc-157-for-tendons',
    tag: 'Healing',
    tagColor: 'emerald',
  },
  {
    title: 'GHK-Cu for Hair Loss: Does It Actually Work?',
    desc: 'The science behind copper peptides and hair follicle stimulation. Real data, real dosing, realistic expectations.',
    href: '/ghk-cu-for-hair-loss',
    tag: 'Anti-Aging',
    tagColor: 'purple',
  },
  {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide: The Comparison',
    desc: 'Side-by-side breakdown of the three leading GLP-1 peptides — efficacy, side effects, cost, and who each one is for.',
    href: '/semaglutide-vs-tirzepatide-vs-retatrutide',
    tag: 'Weight Loss',
    tagColor: 'blue',
  },
  {
    title: 'Is BPC-157 Legal? FDA Status 2026',
    desc: 'Current legal status, the FDA\'s 2024 reclassification attempt, and what it means for research use in 2026.',
    href: '/is-bpc-157-legal',
    tag: 'Legal',
    tagColor: 'amber',
  },
  {
    title: 'How to Reconstitute Peptides (Step-by-Step)',
    desc: 'A complete visual guide to mixing lyophilized peptides with bacteriostatic water — no experience required.',
    href: '/how-to-reconstitute-peptides',
    tag: 'Beginner',
    tagColor: 'slate',
  },
  {
    title: 'CJC-1295/Ipamorelin: Week-by-Week Results',
    desc: 'Detailed week-by-week log of what to expect from the most popular GH secretagogue stack, with dosing and timing.',
    href: '/cjc-1295-ipamorelin-results',
    tag: 'Body Comp',
    tagColor: 'rose',
  },
];

const coaPoints = [
  {
    icon: AlertTriangle,
    title: 'What Low-Quality Peptides Look Like',
    desc: 'Underdosed vials, mystery filler compounds, no third-party testing, and foreign origin with no cold-chain shipping. The peptide research market has a counterfeiting problem — without a COA you have no idea what you\'re injecting.',
    color: 'red',
  },
  {
    icon: BadgeCheck,
    title: 'What to Verify in a COA',
    desc: 'Identity confirmation (HPLC or MS), purity percentage (look for 98%+), heavy metals panel (lead, arsenic, mercury, cadmium), and endotoxin testing. A real COA comes from an accredited independent lab — not the manufacturer.',
    color: 'emerald',
  },
  {
    icon: Thermometer,
    title: 'Why US Domestic Shipping Matters',
    desc: 'Lyophilized peptides are stable at room temperature for weeks, but reconstituted peptides degrade quickly above 8°C. US domestic suppliers can ship overnight on ice. International orders from overseas labs spend days in customs at ambient temperatures.',
    color: 'blue',
  },
  {
    icon: Package,
    title: 'Our Sourcing Recommendation',
    desc: 'We recommend Apollo Peptide Sciences — every batch ships with a full third-party COA, 98%+ purity guarantee, US domestic fulfillment, and cold-chain packaging. They are the only supplier we link to on this site.',
    color: 'neon',
    isAffiliate: true,
  },
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
                      src={products.find(p => p.slug === 'bpc-157')!.image}
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
          HOW IT WORKS — 3-step education section
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From identifying your goal to running your first protocol — three steps is all it takes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-14 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-emerald-400/30 via-blue-400/30 to-neon-green/30" />

            {howItWorksSteps.map(({ step, icon: Icon, title, desc, color }) => {
              const colorMap: Record<string, string> = {
                emerald: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
                blue: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
                neon: 'bg-neon-green/10 border-neon-green/20 text-neon-green',
              };
              const stepColor: Record<string, string> = {
                emerald: 'text-emerald-400 border-emerald-400/30',
                blue: 'text-blue-400 border-blue-400/30',
                neon: 'text-neon-green border-neon-green/30',
              };
              return (
                <div key={step} className="glass-card p-8 flex flex-col items-center text-center relative">
                  {/* Step number */}
                  <div className={`text-xs font-black font-mono mb-5 px-3 py-1 rounded-full border ${stepColor[color]}`}>
                    STEP {step}
                  </div>
                  {/* Icon circle */}
                  <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 ${colorMap[color]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/guide" className="btn-secondary text-sm px-8 py-3 inline-flex items-center gap-2">
              Read the Full Beginner Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          GOAL SELECTOR — 2×2 grid, large cards
      ═══════════════════════════════════════════════ */}
      <section className="bg-dark-800 py-24 grid-bg border-y border-white/5">
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
          RESEARCH & EVIDENCE — 4 study highlight cards
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Peer-Reviewed Science</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Backed by <span className="gradient-text">30+ Years of Research</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These are not supplements with vague health claims. Every peptide on this site has published human or animal trials
              demonstrating specific, measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchStudies.map(({ peptide, title, citation, finding, href, color, icon: Icon }) => {
              const colorMap: Record<string, string> = {
                emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
                purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
                amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
                blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
              };
              const badgeColor: Record<string, string> = {
                emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
                purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
                amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
                blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
              };
              return (
                <div key={title} className="glass-card p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${colorMap[color]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${badgeColor[color]}`}>
                      {peptide}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                    <p className="text-slate-500 text-xs font-mono mb-3">{citation}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{finding}</p>
                  </div>
                  <div className="mt-auto pt-3 border-t border-white/5">
                    <Link href={href} className="text-neon-green text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View Peptide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT USERS ARE TARGETING — Goal stats grid
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Community Goals</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              What Our Users Are <span className="gradient-text">Targeting</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Every visitor to this site comes with a specific goal. Here is what the community is working on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {userTargets.map(({ icon: Icon, title, badge, desc, href, color }) => {
              const colorClasses: Record<string, string> = {
                emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 hover:border-emerald-400/40',
                green: 'text-green-400 bg-green-400/10 border-green-400/20 hover:border-green-400/40',
                purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20 hover:border-purple-400/40',
                blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 hover:border-blue-400/40',
                amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20 hover:border-amber-400/40',
                rose: 'text-rose-400 bg-rose-400/10 border-rose-400/20 hover:border-rose-400/40',
              };
              const iconClasses: Record<string, string> = {
                emerald: 'bg-emerald-400/10 text-emerald-400',
                green: 'bg-green-400/10 text-green-400',
                purple: 'bg-purple-400/10 text-purple-400',
                blue: 'bg-blue-400/10 text-blue-400',
                amber: 'bg-amber-400/10 text-amber-400',
                rose: 'bg-rose-400/10 text-rose-400',
              };
              return (
                <Link
                  key={title}
                  href={href}
                  className={`group glass-card p-6 flex flex-col gap-4 border transition-all duration-200 ${colorClasses[color]}`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconClasses[color]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {badge && (
                      <span className="text-xs font-semibold text-neon-green bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1.5">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{
                    color: color === 'emerald' ? '#34d399' : color === 'green' ? '#4ade80' : color === 'purple' ? '#c084fc' : color === 'blue' ? '#60a5fa' : color === 'amber' ? '#fbbf24' : '#fb7185',
                  }}>
                    Explore Protocol <ArrowRight className="w-4 h-4" />
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
      <section className="py-24 bg-dark-900 grid-bg">
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
      <section className="py-24 bg-dark-800 border-y border-white/5">
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
          RECENT GUIDES — 6 article cards
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900 grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">In-Depth Content</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Recent <span className="gradient-text">Guides</span>
              </h2>
            </div>
            <Link href="/guide" className="btn-secondary text-sm hidden sm:flex items-center gap-1">
              All Guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentGuides.map(({ title, desc, href, tag, tagColor }) => {
              const tagClasses: Record<string, string> = {
                emerald: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
                purple: 'bg-purple-400/10 text-purple-400 border-purple-400/20',
                blue: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
                amber: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
                slate: 'bg-slate-400/10 text-slate-400 border-slate-400/20',
                rose: 'bg-rose-400/10 text-rose-400 border-rose-400/20',
              };
              return (
                <Link
                  key={href}
                  href={href}
                  className="group glass-card p-6 flex flex-col gap-4 hover:border-neon-green/20 transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagClasses[tagColor]}`}>
                      {tag}
                    </span>
                    <BookOpen className="w-4 h-4 text-slate-600 group-hover:text-neon-green transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-neon-green transition-colors">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-neon-green text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY SOURCE QUALITY MATTERS
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-3">Sourcing Integrity</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Why Source Quality <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A COA-verified peptide and a random vial from an unvetted lab look identical. What you inject is not.
              Here is what separates research-grade peptides from the counterfeits circulating the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coaPoints.map(({ icon: Icon, title, desc, color, isAffiliate }) => {
              const colorMap: Record<string, string> = {
                red: 'text-red-400 bg-red-400/10 border-red-400/20',
                emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
                blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
                neon: 'text-neon-green bg-neon-green/10 border-neon-green/20',
              };
              return (
                <div key={title} className={`glass-card p-7 flex flex-col gap-4 ${color === 'neon' ? 'border-neon-green/20' : ''}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${colorMap[color]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                  {isAffiliate && (
                    <div className="mt-auto pt-4 border-t border-white/5">
                      <a
                        href={SOURCE_URL}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="btn-cta text-sm px-6 py-2.5 inline-flex items-center gap-2"
                      >
                        View Apollo Peptide Sciences <ExternalLink className="w-4 h-4" />
                      </a>
                      <p className="text-slate-600 text-xs mt-2">Affiliate link — we earn a commission at no cost to you.</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SOCIAL PROOF — Testimonials + Stars
      ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-dark-900">
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
      <section className="py-24 bg-dark-800 border-y border-white/5">
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
