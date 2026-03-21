import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles, Dna, Zap, Clock, TrendingDown, Brain, Activity } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Best Anti-Aging Peptides 2026: Epithalon, GHK-Cu, SS-31 & NAD+ | Longevity Protocols',
  description: 'The most scientifically advanced anti-aging peptide protocols. Epithalon lengthens telomeres, GHK-Cu resets 31% of aged genes, SS-31 restores mitochondrial function. Full dosing protocols.',
  keywords: 'anti-aging peptides, Epithalon telomere, GHK-Cu copper peptide, SS-31 mitochondria, NAD+ longevity, SNAP-8 wrinkles, longevity protocol',
  openGraph: {
    title: 'Anti-Aging Peptides: Epithalon, GHK-Cu, SS-31 & NAD+ | Longevity Protocols',
    description: 'Epithalon lengthens telomeres, GHK-Cu resets 31% of aged genes, SS-31 restores mitochondrial function. Full dosing protocols.',
    type: 'article',
    url: 'https://bp157stack.com/anti-aging',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anti-Aging Peptides: Epithalon, GHK-Cu, SS-31 & NAD+',
    description: 'The most scientifically advanced anti-aging peptide protocols for longevity.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const agingHallmarks = [
  {
    icon: '🧬',
    title: 'Telomere Shortening',
    peptide: 'Epithalon',
    color: 'purple',
    mechanism: 'Telomeres — the protective caps on chromosomes — shorten with every cell division. Epithalon activates telomerase, the enzyme that rebuilds telomeres, slowing and partially reversing cellular aging.',
    evidence: '28% mortality reduction in 12-year human trial (2012)',
  },
  {
    icon: '🔬',
    title: 'Epigenetic Drift',
    peptide: 'GHK-Cu',
    color: 'amber',
    mechanism: 'As cells age, gene expression drifts — pro-inflammatory, pro-fibrotic patterns dominate. GHK-Cu resets 31% of aged genes back toward youthful expression patterns in tissue culture models.',
    evidence: '4,000+ genes modulated in gene expression studies',
  },
  {
    icon: '⚡',
    title: 'Mitochondrial Decline',
    peptide: 'SS-31',
    color: 'blue',
    mechanism: 'Mitochondrial inner membrane integrity declines with age, reducing ATP production by up to 50% in aging tissues. SS-31 stabilizes cardiolipin — the key lipid in the inner membrane — restoring electron transport chain efficiency.',
    evidence: 'Phase II/III clinical trials for heart failure and ALS',
  },
  {
    icon: '🔋',
    title: 'NAD+ Depletion',
    peptide: 'NAD+',
    color: 'emerald',
    mechanism: 'NAD+ levels decline 50%+ from age 20 to 60. This essential coenzyme powers SIRT1/3 (sirtuins), PARP DNA repair, and cellular energy metabolism. Direct IV/injection NAD+ bypasses gut absorption limits of NMN/NR.',
    evidence: 'Sirtuin activation — the longevity pathway directly activated by caloric restriction',
  },
  {
    icon: '🌸',
    title: 'Collagen Matrix Breakdown',
    peptide: 'SNAP-8',
    color: 'rose',
    mechanism: 'SNAP-8 (acetyl octapeptide-3) inhibits catecholamine release at the neuromuscular junction — reducing muscle contractions that form expression lines while stimulating dermal collagen synthesis.',
    evidence: 'Up to 63% reduction in wrinkle depth in clinical trials',
  },
];

const longevityStack = [
  { step: '01', peptide: 'Epithalon', dose: '5–10mg', freq: 'Daily, 10-day course', role: 'Telomere extension — run 2× per year' },
  { step: '02', peptide: 'GHK-Cu', dose: '2mg/day', freq: 'Daily SC or topical', role: 'Gene reset + collagen synthesis' },
  { step: '03', peptide: 'SS-31', dose: '1–2mg', freq: '2–3× per week', role: 'Mitochondrial membrane repair' },
  { step: '04', peptide: 'NAD+', dose: '500mg', freq: 'Daily IV push (or 250mg SC)', role: 'Sirtuin activation + DNA repair' },
  { step: '05', peptide: 'SNAP-8', dose: '10mg', freq: 'Topical 2× daily', role: 'Skin rejuvenation + wrinkle reduction' },
];

const ageingResearch = [
  { year: '1994', event: 'Epithalon synthesized by Prof. Vladimir Khavinson at St. Petersburg Gerontology Institute — first telomerase-activating peptide' },
  { year: '2003', event: 'Loren Pickart publishes landmark GHK-Cu study showing 4,000+ gene modulation in human fibroblasts' },
  { year: '2005', event: 'Szeto-Schiller peptides (SS-31) developed — cardiolipin-targeting compounds restore mitochondrial function in aging cells' },
  { year: '2011', event: 'David Sinclair (Harvard) identifies NAD+ / sirtuin axis as fundamental longevity pathway — catalyzes NMN/NAD research wave' },
  { year: '2012', event: 'Epithalon 12-year human trial published — 28% mortality reduction in treated group vs. placebo' },
  { year: '2016', event: 'SS-31 enters Phase II clinical trials for heart failure (Stealth BioTherapeutics) — mito repair moves from lab to clinic' },
  { year: '2021', event: 'GHK-Cu enters wound healing and skin aging clinical trials — clinical validation of 4,000+ gene modulation claim' },
  { year: '2024', event: 'Multi-target longevity protocols combining telomere, mitochondrial, and epigenetic approaches become standard research focus' },
];

const beforeAfterMetrics = [
  { metric: 'Biological Age Score', before: 'Chronological + lifestyle damage', after: 'Can reduce 5–15 years on epigenetic clocks', peptide: 'Epithalon + GHK-Cu' },
  { metric: 'Mitochondrial ATP Output', before: 'Declining ~1–2%/year post-30', after: 'Restored toward youthful function', peptide: 'SS-31 + NAD+' },
  { metric: 'Skin Collagen Density', before: 'Reducing with each decade', after: 'Increases with GHK-Cu within weeks', peptide: 'GHK-Cu + SNAP-8' },
  { metric: 'Telomere Length', before: 'Shortens 50–200bp per year naturally', after: 'Slowed/arrested + partial regrowth', peptide: 'Epithalon' },
  { metric: 'Expression Line Depth', before: 'Deepens with repeated muscle movement', after: '63% reduction in 28-day trial', peptide: 'SNAP-8' },
  { metric: 'Energy & Fatigue', before: 'Increasing fatigue due to mito decline', after: 'Measurable improvement in 2–4 weeks', peptide: 'NAD+ + SS-31' },
];

export default function AntiAgingPage() {
  const products = getProductsByCategory('Anti-Aging');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #0f0720 40%, #060610 100%)' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        {/* Purple glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/8 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold tracking-wide">LONGEVITY & ANTI-AGING PROTOCOLS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
            Don&apos;t Just Live<br />
            <span style={{ color: '#a855f7' }}>Live Younger.</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            Five anti-aging peptides targeting five distinct molecular hallmarks of aging.
            The most comprehensive longevity protocol available outside of a clinical trial.
          </p>
          <p className="text-slate-500 text-base mb-10 max-w-2xl mx-auto">
            These are clinically studied compounds with peer-reviewed evidence
            targeting the actual molecular mechanisms of biological aging.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-base px-8 py-4">
              View Full Longevity Stack
            </Link>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { num: '5', label: 'Aging Mechanisms Targeted' },
              { num: '28%', label: 'Mortality Reduction (Epithalon trial)' },
              { num: '31%', label: 'Aged Genes Reset by GHK-Cu' },
              { num: 'Ph II/III', label: 'SS-31 Clinical Trial Stage' },
            ].map((s) => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black text-purple-400">{s.num}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Hallmarks of Aging — one per peptide */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">
            5 Hallmarks of Aging. 5 Targeted Peptides.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Aging is not one process — it&apos;s a cascade of simultaneous molecular failures.
            Each peptide targets a different root cause.
          </p>
        </div>
        <div className="space-y-5">
          {agingHallmarks.map((item, i) => (
            <div key={item.title} className="glass-card p-6 md:p-8 group hover:border-purple-500/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0 text-center md:text-left w-full md:w-auto">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="text-xs font-bold text-purple-400 tracking-widest">PEPTIDE</div>
                  <div className="text-white font-black text-xl">{item.peptide}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-slate-500 font-mono text-sm">0{i + 1}</span>
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-3">{item.mechanism}</p>
                  <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-purple-300 text-xs font-medium">{item.evidence}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Full Longevity Stack — step guide */}
      <section className="py-16" style={{ background: 'rgba(168, 85, 247, 0.03)', borderTop: '1px solid rgba(168, 85, 247, 0.1)', borderBottom: '1px solid rgba(168, 85, 247, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5 mb-4">
                <Dna className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">THE LONGEVITY STACK</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                A Multi-Target<br />
                <span className="text-purple-400">Longevity Protocol</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                No single intervention can address all hallmarks of aging simultaneously.
                The anti-aging stack combines five clinically studied compounds that work on
                complementary mechanisms — targeting aging at the genetic, epigenetic,
                mitochondrial, cellular, and structural levels.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                This is not anti-aging cosmetics. This is molecular biology — the same mechanisms
                studied by leading longevity researchers at Harvard, Stanford, and the Buck Institute.
              </p>
              <div className="flex gap-3">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                  Shop the Stack <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-sm px-6 py-3">
                  Full Protocol
                </Link>
              </div>
            </div>

            {/* Stack steps */}
            <div className="space-y-3">
              {longevityStack.map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.12)' }}>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <span className="text-purple-400 font-black text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-bold">{item.peptide}</span>
                      <span className="text-purple-400 text-xs font-mono border border-purple-500/30 px-2 py-0.5 rounded">{item.dose}</span>
                      <span className="text-slate-500 text-xs">{item.freq}</span>
                    </div>
                    <div className="text-slate-400 text-xs mt-0.5">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3 text-center">Expected Outcomes by Biomarker</h2>
        <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
          Based on peer-reviewed literature and documented research findings for each peptide.
        </p>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(168, 85, 247, 0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(168, 85, 247, 0.05)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Biomarker / Outcome</th>
                <th className="text-left py-4 px-5 text-slate-500 font-semibold">Untreated Aging</th>
                <th className="text-left py-4 px-5 text-purple-400 font-semibold">With Protocol</th>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Key Peptide</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfterMetrics.map((row, i) => (
                <tr key={row.metric} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-white font-medium">{row.metric}</td>
                  <td className="py-3 px-5 text-slate-500">{row.before}</td>
                  <td className="py-3 px-5 text-purple-300">{row.after}</td>
                  <td className="py-3 px-5 text-slate-400 text-xs font-mono">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-xs text-center mt-4">*Based on peer-reviewed animal and human studies. Individual results vary.</p>
      </section>

      {/* Research History */}
      <section className="py-16" style={{ background: 'rgba(6, 6, 16, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">The Science Timeline</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Three decades of longevity peptide research leading to today&apos;s protocols.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />
            <div className="space-y-5 pl-16">
              {ageingResearch.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-dark-800 border border-purple-500/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>
                  <div className="glass-card p-5">
                    <div className="text-purple-400 font-black text-lg mb-1">{item.year}</div>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-white">Anti-Aging Peptides</h2>
            <p className="text-slate-400 mt-1">Epithalon, GHK-Cu, SS-31, NAD+, and SNAP-8 — the complete longevity stack</p>
          </div>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
            className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2 hidden sm:flex">
            Shop All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* Why Now / Urgency section */}
      <section className="py-16" style={{ background: 'rgba(168, 85, 247, 0.03)', borderTop: '1px solid rgba(168, 85, 247, 0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-black text-white mb-6 text-center">
              Why Start a Longevity Protocol Now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-purple-400 font-bold mb-3">The Compounding Problem</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Telomere shortening, mitochondrial decline, and epigenetic drift are cumulative processes.
                  Each year of delay means more cellular damage to reverse. The optimal time to start is
                  before the decline accelerates — typically in your 30s, though benefits are documented at any age.
                </p>
              </div>
              <div>
                <h3 className="text-purple-400 font-bold mb-3">The Evidence Window</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Epithalon&apos;s 12-year trial is the longest published longevity peptide study to date.
                  The 28% mortality reduction compounds over time — you cannot retroactively apply years
                  of telomerase activation. The research window is now, not later.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                Start Your Longevity Protocol <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-base px-8 py-4">
                View Full Stack Protocol
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/anti-aging" />
    </div>
  );
}
