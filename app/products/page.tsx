import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import {
  ArrowRight, FlaskConical, Shield, Zap, TrendingUp, Scale,
  Brain, CheckCircle, Package, Layers,
  HelpCircle, Star, AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Peptides | BPC-157, TB-500, Ipamorelin & More | BPC-157 Stack',
  description: 'Complete peptide catalog with protocols and dosing guides. BPC-157, TB-500, GHK-Cu, Ipamorelin, Epithalon, and more.',
};

const SOURCE_URL = '/out';

const goalCards = [
  {
    icon: Shield,
    goal: 'Healing',
    tagline: 'Recover from injuries faster',
    topPeptides: [
      { name: 'BPC-157', slug: 'bpc-157', note: 'Local tissue repair, gut, tendons' },
      { name: 'TB-500', slug: 'tb-500', note: 'Systemic stem cell mobilization' },
    ],
    color: 'emerald',
  },
  {
    icon: Zap,
    goal: 'Anti-Aging',
    tagline: 'Reverse biological age markers',
    topPeptides: [
      { name: 'Epithalon', slug: 'epithalon', note: 'Telomere extension, longevity' },
      { name: 'GHK-Cu', slug: 'ghk-cu', note: 'Gene expression reset' },
    ],
    color: 'purple',
  },
  {
    icon: TrendingUp,
    goal: 'Body Comp',
    tagline: 'Fat loss with muscle retention',
    topPeptides: [
      { name: 'Ipamorelin', slug: 'ipamorelin-cjc-1295', note: 'Clean GH pulse, no cortisol spike' },
      { name: 'CJC-1295', slug: 'ipamorelin-cjc-1295', note: 'GHRH amplifier for synergy' },
    ],
    color: 'blue',
  },
  {
    icon: Scale,
    goal: 'Weight Loss',
    tagline: 'GLP-1 mediated fat reduction',
    topPeptides: [
      { name: 'Semaglutide', slug: 'semaglutide', note: 'GLP-1 agonist, appetite control' },
      { name: 'Tirzepatide', slug: 'tirzepatide', note: 'Dual GIP/GLP-1, strongest data' },
    ],
    color: 'amber',
  },
  {
    icon: Brain,
    goal: 'Cognitive',
    tagline: 'Focus, clarity, anxiety relief',
    topPeptides: [
      { name: 'Semax', slug: 'semax', note: 'BDNF elevation, neuroplasticity' },
      { name: 'Selank', slug: 'selank', note: 'Anxiolytic without sedation' },
    ],
    color: 'rose',
  },
];

const categoryDescriptions: Record<string, { heading: string; body: string }> = {
  Healing: {
    heading: 'Accelerate Recovery at the Cellular Level',
    body: 'Healing peptides work by directly modulating the biological pathways responsible for tissue regeneration — upregulating growth factor receptors, improving local blood flow through nitric oxide synthesis, and mobilizing repair cells to damaged areas. Unlike NSAIDs or corticosteroids that mask pain by suppressing inflammation, these peptides repair underlying structural damage. BPC-157 is the most studied entry point; TB-500 provides systemic reach that complements local action.',
  },
  'Anti-Aging': {
    heading: 'Target the Root Mechanisms of Aging',
    body: 'Anti-aging peptides intervene at the molecular level — extending telomere length, resetting age-related gene expression patterns, and repairing mitochondrial membrane function. Epithalon\'s effect on telomerase activation is the most clinically documented telomere intervention available outside of gene therapy. GHK-Cu resets transcriptional programs in aging tissue. These are not cosmetic tweaks; they address the hallmarks of cellular aging directly.',
  },
  'Body Composition': {
    heading: 'Growth Hormone Secretagogues Explained',
    body: 'Body composition peptides in this category are GH secretagogues — compounds that stimulate the pituitary to produce and release growth hormone naturally, rather than introducing exogenous HGH. This preserves the normal pulsatile release pattern that is safer long-term, avoids pituitary suppression, and costs a fraction of pharmaceutical HGH. Ipamorelin combined with CJC-1295 produces synergistic GH pulses 8-10x greater than either peptide alone.',
  },
  'Weight Loss': {
    heading: 'GLP-1 Receptor Agonists: How They Work',
    body: 'Weight loss peptides in this category are GLP-1 (glucagon-like peptide-1) receptor agonists — they mimic a natural gut hormone that signals satiety, slows gastric emptying, and reduces appetite. Semaglutide was the first to dominate headlines; Tirzepatide adds dual GIP receptor agonism for stronger efficacy; Retatrutide adds a third mechanism (GIP + GLP-1 + glucagon). These are the most clinically validated weight loss compounds in existence.',
  },
  Supplies: {
    heading: 'Proper Reconstitution Is Non-Negotiable',
    body: 'Peptides arrive in lyophilized (freeze-dried) powder form and must be reconstituted with bacteriostatic water before use. The reconstitution process affects peptide stability, potency, and sterility. Using the wrong diluent, improper mixing technique, or contaminated supplies can degrade your peptide or introduce infection risk. Every protocol on this site assumes correct reconstitution — supplies are not optional.',
  },
};

const productFaqs = [
  {
    q: 'How are these peptides tested for purity?',
    a: 'Every peptide from our recommended supplier is tested by an independent, accredited third-party laboratory using High-Performance Liquid Chromatography (HPLC) and mass spectrometry (MS). The Certificate of Analysis (COA) confirms identity, purity percentage (98%+), and a heavy metals panel. COAs are batch-specific and available on request.',
  },
  {
    q: "What's the minimum order to try a peptide?",
    a: 'Most peptides are available in single vials — there is no minimum order beyond one unit. BPC-157 at 10mg and TB-500 at 10mg are the most common entry quantities. A single 10mg vial of BPC-157 is enough for a 4-6 week beginner protocol at 250-500mcg/day.',
  },
  {
    q: 'How long does shipping take from US domestic?',
    a: 'Apollo Peptide Sciences ships from within the United States. Standard shipping is 3-5 business days; expedited options are available. Lyophilized peptides are stable at room temperature for weeks, so standard shipping is sufficient. Reconstituted peptides should be refrigerated immediately on arrival.',
  },
  {
    q: 'Can I use multiple peptides at once?',
    a: 'Yes — stacking peptides is common and often produces synergistic results. BPC-157 + TB-500 is the most popular combination. However, beginners should start with a single peptide to establish baseline response before adding a second. See our stacks page for vetted combinations with specific dosing protocols.',
  },
  {
    q: 'What is the shelf life of lyophilized peptides?',
    a: 'Lyophilized (freeze-dried) peptides stored refrigerated (2-8°C) are typically stable for 18-24 months. Stored in a freezer (-20°C) they can last 2+ years. Once reconstituted with bacteriostatic water, the solution should be refrigerated and used within 4-6 weeks. Never freeze a reconstituted peptide solution.',
  },
  {
    q: 'Do I need a prescription?',
    a: 'These peptides are sold for research purposes. In the United States, they are not FDA-approved pharmaceutical drugs and do not require a prescription for research use. Legal status varies by country. BPC-157\'s regulatory situation has evolved — see our "Is BPC-157 Legal?" guide for the current 2026 status.',
  },
];

export default function ProductsPage() {
  const categorized: Record<string, ReturnType<typeof products.filter>> = {
    Healing: products.filter((p) => p.category === 'Healing'),
    'Anti-Aging': products.filter((p) => p.category === 'Anti-Aging'),
    'Body Composition': products.filter((p) => p.category === 'Body Composition'),
    'Weight Loss': products.filter((p) => p.category === 'Weight Loss'),
    Supplies: products.filter((p) => p.category === 'Supplies'),
  };

  const colorMap: Record<string, string> = {
    emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 hover:border-emerald-400/40',
    purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20 hover:border-purple-400/40',
    blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 hover:border-blue-400/40',
    amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20 hover:border-amber-400/40',
    rose: 'text-rose-400 bg-rose-400/10 border-rose-400/20 hover:border-rose-400/40',
  };
  const iconBg: Record<string, string> = {
    emerald: 'bg-emerald-400/10 text-emerald-400',
    purple: 'bg-purple-400/10 text-purple-400',
    blue: 'bg-blue-400/10 text-blue-400',
    amber: 'bg-amber-400/10 text-amber-400',
    rose: 'bg-rose-400/10 text-rose-400',
  };

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════════════════════════════════════════
            HEADER
        ═══════════════════════════════════════════════ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <FlaskConical className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-medium">Complete Peptide Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Every peptide with full protocols, dosing guides, and stack recommendations.
            COA-verified, third-party tested, US domestic.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════
            NEW TO PEPTIDES? — Beginner featured card
        ═══════════════════════════════════════════════ */}
        <div className="mb-14 glass-card p-8 border-neon-green/20 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-3 py-1 mb-4">
                <Star className="w-3.5 h-3.5 text-neon-green" />
                <span className="text-neon-green text-xs font-semibold uppercase tracking-widest">New to Peptides?</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Start Here: <span className="text-neon-green">BPC-157</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl">
                If you are new to peptides, BPC-157 is the universally recommended entry point — and for good reason.
                It has no known lethal dose, zero hormonal activity, works orally (no injections required), covers more
                conditions than any other single peptide, and has 100+ published studies. Start with BPC-157 alone for
                4-8 weeks, assess your response, then layer in additional peptides if needed.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/guide" className="btn-secondary text-sm px-5 py-2.5 flex items-center gap-1.5">
                  Read the Beginner Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/products/bpc-157" className="btn-secondary text-sm px-5 py-2.5 flex items-center gap-1.5">
                  BPC-157 Full Protocol <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/faq" className="btn-secondary text-sm px-5 py-2.5">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="shrink-0 flex flex-col gap-3 lg:items-end">
              <Link href="/stacks" className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                Compare All Stacks <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-slate-600 text-xs lg:text-right max-w-[180px]">
                Not sure which peptides to combine? Our stacks page has pre-built protocols.
              </p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            HOW TO CHOOSE — Goal decision guide
        ═══════════════════════════════════════════════ */}
        <div className="mb-16">
          <div className="mb-8">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-2">Decision Guide</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              How to Choose a <span className="gradient-text">Peptide</span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Not sure where to start? Match your primary goal to the peptides designed for it.
              Each card shows the top two options for that objective.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            {goalCards.map(({ icon: Icon, goal, tagline, topPeptides, color }) => (
              <div
                key={goal}
                className={`glass-card p-5 flex flex-col gap-4 border transition-all duration-200 ${colorMap[color]}`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg[color]}`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-0.5">{goal}</h3>
                  <p className="text-slate-500 text-xs">{tagline}</p>
                </div>
                <div className="space-y-2">
                  {topPeptides.map(({ name, slug, note }) => (
                    <Link
                      key={slug}
                      href={`/products/${slug}`}
                      className="block bg-dark-700/60 rounded-lg px-3 py-2 hover:bg-dark-700 transition-colors group"
                    >
                      <p className="text-white text-xs font-semibold group-hover:text-neon-green transition-colors">{name}</p>
                      <p className="text-slate-500 text-xs leading-tight mt-0.5">{note}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stack quiz callout */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-neon-green/15 bg-neon-green/5">
            <AlertCircle className="w-5 h-5 text-neon-green shrink-0" />
            <p className="text-slate-300 text-sm">
              <span className="text-white font-semibold">Not sure which goal fits you?</span>{' '}
              Our stacks page organizes everything by condition and goal with detailed explanations.
            </p>
            <Link href="/stacks" className="btn-cta text-xs px-4 py-2 shrink-0 flex items-center gap-1">
              Take the Stack Quiz <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            PEPTIDE STACKS vs SINGLE PEPTIDES
        ═══════════════════════════════════════════════ */}
        <div className="mb-16 glass-card p-8">
          <div className="mb-8">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-2">Strategy</p>
            <h2 className="text-3xl font-black text-white mb-2">
              Stacks vs Single Peptides
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl">
              Understanding when to use one peptide versus a combination changes your results and your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Single peptide column */}
            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-400/10 text-blue-400 flex items-center justify-center">
                  <FlaskConical className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-white font-bold text-lg">Single Peptide</h3>
              </div>
              <ul className="space-y-3 mb-5">
                {[
                  'Best for beginners — clear feedback on what is working',
                  'Lower cost: one vial per cycle',
                  'Simpler protocol — one injection site, one dosing schedule',
                  'Easier to identify side effects or sensitivities',
                  'Recommended entry point: BPC-157 alone for 4-8 weeks',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                Best for: First-timers, budget-conscious users, specific targeted issues
              </p>
            </div>

            {/* Stack column */}
            <div className="rounded-2xl border border-neon-green/20 bg-neon-green/5 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-neon-green/10 text-neon-green flex items-center justify-center">
                  <Layers className="w-4.5 h-4.5" />
                </div>
                <h3 className="text-white font-bold text-lg">Peptide Stack</h3>
              </div>
              <ul className="space-y-3 mb-5">
                {[
                  'Synergistic effects — BPC-157 + TB-500 heal 2x faster than either alone',
                  'Address multiple pathways simultaneously',
                  'Better for advanced goals: body comp, full anti-aging protocols',
                  'More cost effective per outcome for intermediate users',
                  'Pre-built stacks available with exact dosing — no guesswork',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-neon-green text-xs font-semibold uppercase tracking-wider">
                Best for: Intermediate users, serious goals, faster outcomes
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-slate-500 font-semibold pb-3 pr-4">Factor</th>
                  <th className="text-center text-blue-400 font-semibold pb-3 px-4">Single Peptide</th>
                  <th className="text-center text-neon-green font-semibold pb-3 px-4">Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Monthly cost (est.)', '$50-70', '$80-140'],
                  ['Protocol complexity', 'Low', 'Medium'],
                  ['Time to results', '2-4 weeks', '1-3 weeks (synergy)'],
                  ['Recommended for beginners', 'Yes', 'After 1 solo cycle'],
                  ['Maximum effect ceiling', 'Moderate', 'High'],
                ].map(([factor, single, stack]) => (
                  <tr key={factor}>
                    <td className="text-slate-400 py-3 pr-4">{factor}</td>
                    <td className="text-center text-slate-300 py-3 px-4">{single}</td>
                    <td className="text-center text-slate-300 py-3 px-4">{stack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link href="/stacks" className="btn-cta text-sm px-7 py-3 inline-flex items-center gap-2">
            Browse All Pre-Built Stacks <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ═══════════════════════════════════════════════
            BY CATEGORY — with intro paragraphs
        ═══════════════════════════════════════════════ */}
        {Object.entries(categorized).map(([category, prods]) =>
          prods.length > 0 ? (
            <div key={category} className="mb-20">
              {/* Category header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                  <span className="w-2 h-6 bg-neon-green rounded-full inline-block" />
                  {category === 'Supplies' ? 'Reconstitution Supplies' : `${category} Peptides`}
                </h2>
                {categoryDescriptions[category] && (
                  <div className="mt-4 pl-5 border-l border-neon-green/20">
                    <p className="text-neon-green text-sm font-semibold mb-1.5">
                      {categoryDescriptions[category].heading}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                      {categoryDescriptions[category].body}
                    </p>
                  </div>
                )}
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {prods.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ) : null
        )}

        {/* ═══════════════════════════════════════════════
            FAQ — Products page specific
        ═══════════════════════════════════════════════ */}
        <div className="mb-14">
          <div className="mb-10">
            <p className="text-neon-green text-xs font-semibold uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              Questions specific to ordering, sourcing, and using peptides from this catalog.
            </p>
          </div>

          <div className="space-y-3">
            {productFaqs.map(({ q, a }, i) => (
              <div key={i} className="glass-card p-6 border-l-2 border-neon-green/25">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4.5 h-4.5 text-neon-green mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/faq" className="btn-secondary text-sm px-8 py-3 inline-flex items-center gap-2">
              View Full FAQ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════════════ */}
        <div className="text-center mt-4 p-10 glass-card border-neon-green/15">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-1.5 mb-5">
            <Package className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-xs font-semibold uppercase tracking-widest">COA-Verified · US Domestic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Order?
          </h2>
          <p className="text-slate-400 mb-4 max-w-lg mx-auto">
            All peptides on this site are available from our recommended supplier — third-party tested,
            98%+ purity guaranteed, with US domestic shipping and cold-chain packaging.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
            >
              View Apollo Peptide Sciences <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks" className="btn-secondary text-base px-8 py-4">
              Browse Stacks First
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            {['COA Verified', 'US Domestic', '98%+ Purity', 'Cold-Chain Shipping'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-neon-green" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-4">
            Affiliate link — we earn a commission at no additional cost to you. Not medical advice.
          </p>
        </div>

      </div>
    </div>
  );
}
