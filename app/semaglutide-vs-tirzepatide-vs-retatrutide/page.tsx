import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Peptide Wins? (2026)',
  description: 'Semaglutide vs tirzepatide vs retatrutide — full comparison of mechanisms, fat loss results, side effects, and dosing. Which GLP peptide is right for you?',
  keywords: 'semaglutide vs tirzepatide, tirzepatide vs retatrutide, semaglutide vs tirzepatide vs retatrutide, best GLP peptide, ozempic vs mounjaro, GLP-1 comparison, which GLP peptide is best',
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide: Full Comparison 2026',
    description: 'Which GLP peptide wins for fat loss? Complete mechanism, results, and side-effect comparison.',
    type: 'article',
    url: 'https://bp157stack.com/semaglutide-vs-tirzepatide-vs-retatrutide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semaglutide vs Tirzepatide vs Retatrutide',
    description: 'Which GLP peptide is best for fat loss? Head-to-head comparison.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const peptides = [
  {
    name: 'Semaglutide',
    brand: 'Ozempic / Wegovy',
    slug: 'glp-1s-semaglutide',
    color: 'blue',
    mechanism: 'GLP-1 receptor agonist only',
    weightLoss: '15–17% body weight',
    muscleLoss: 'Moderate',
    sideEffects: 'Moderate nausea, GI upset',
    dosing: '0.25mg/week → up to 2.4mg/week',
    cost: '$',
    bestFor: 'First-time GLP users, moderate fat loss goals',
    pros: ['Most studied — 5+ years clinical data', 'Lowest side-effect burden', 'Easiest titration', 'Potent appetite suppression'],
    cons: ['Single receptor (GLP-1 only)', 'Less fat loss than newer options', 'Some muscle loss without resistance training'],
  },
  {
    name: 'Tirzepatide',
    brand: 'Mounjaro / Zepbound',
    slug: 'glp-2t-tirzepatide',
    color: 'emerald',
    mechanism: 'Dual GIP + GLP-1 agonist',
    weightLoss: '20–22% body weight',
    muscleLoss: 'Low-moderate',
    sideEffects: 'Similar to semaglutide, slightly more GI',
    dosing: '2.5mg/week → up to 15mg/week',
    cost: '$$',
    bestFor: 'Serious fat loss + muscle preservation goals',
    pros: ['Dual mechanism — more pathways hit', 'Better body composition vs semaglutide', 'GIP action improves insulin sensitivity', 'More fat loss at equivalent doses'],
    cons: ['Less long-term data than semaglutide', 'Slightly higher GI side-effect rate', 'More expensive per mg'],
  },
  {
    name: 'Retatrutide',
    brand: 'Research peptide (Phase 3)',
    slug: 'glp-3r-retatrutide',
    color: 'purple',
    mechanism: 'Triple GIP + GLP-1 + glucagon agonist',
    weightLoss: '24–26% body weight',
    muscleLoss: 'Low (glucagon promotes fat oxidation)',
    sideEffects: 'Higher GI — pulse HR increase noted',
    dosing: '1mg/week → up to 12mg/week',
    cost: '$$$',
    bestFor: 'Maximum fat loss, refractory obesity, experienced users',
    pros: ['Highest fat loss of any peptide class', 'Glucagon component boosts thermogenesis', 'Better visceral fat clearance', 'Preserves lean mass better than GLP-1 alone'],
    cons: ['Newest — less clinical data', 'More complex side-effect profile', 'Heart rate elevation (monitor)', 'Not yet FDA-approved (research use)'],
  },
];

const faqs = [
  { q: 'Which is stronger: semaglutide, tirzepatide, or retatrutide?', a: 'For raw fat loss: retatrutide > tirzepatide > semaglutide. Retatrutide\'s triple agonist mechanism (GIP + GLP-1 + glucagon) produces the highest weight loss in trials — approximately 24–26% vs 20–22% for tirzepatide vs 15–17% for semaglutide at maximum doses. However, retatrutide also has the most complex side-effect profile and the least long-term data.' },
  { q: 'What is the difference between semaglutide and tirzepatide?', a: 'Semaglutide targets only GLP-1 receptors. Tirzepatide targets both GLP-1 and GIP receptors simultaneously. The dual GIP/GLP-1 mechanism gives tirzepatide superior fat loss (20–22% vs 15–17% body weight) and better body composition outcomes, with similar or slightly higher GI side effects. Most users who have plateaued on semaglutide see renewed progress switching to tirzepatide.' },
  { q: 'Should I start with semaglutide or tirzepatide?', a: 'For most first-time GLP users: start with semaglutide. It has the most clinical data, the most predictable titration protocol, and the lowest barrier to entry. If your results plateau at 12–16 weeks or your fat loss goals require more than 15% body weight reduction, transitioning to tirzepatide is a logical step up.' },
  { q: 'Is retatrutide available to buy?', a: 'Retatrutide is currently in Phase 3 clinical trials. It is available as a research peptide through peptide suppliers. It is not FDA-approved as of 2026. Research use means it is not for human consumption per FDA guidelines, though it is widely used in the research community.' },
  { q: 'Do GLP peptides cause muscle loss?', a: 'All GLP-class peptides carry some risk of lean mass loss alongside fat loss — this is the primary concern with this drug class. The key mitigation: (1) resistance training 3–4×/week, (2) high protein intake (1g+/lb bodyweight), (3) consider stacking with a GH secretagogue like CJC-1295/Ipamorelin to preserve or build muscle simultaneously. Retatrutide\'s glucagon component appears to reduce lean mass loss vs older GLP agents.' },
  { q: 'Can you stack semaglutide with CJC-1295/Ipamorelin?', a: 'Yes — this is a popular combination. GLP peptides target fat loss through appetite suppression and metabolic rate, while CJC-1295/Ipamorelin boosts growth hormone to preserve and build lean muscle. The combination addresses the #1 risk of GLP-only protocols (muscle loss) and can produce significant body recomposition simultaneously.' },
];

export default function GlpComparisonPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #060c1c 50%, #060610 100%)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Body Composition', item: 'https://bp157stack.com/body-composition' },
                { '@type': 'ListItem', position: 3, name: 'Semaglutide vs Tirzepatide vs Retatrutide', item: 'https://bp157stack.com/semaglutide-vs-tirzepatide-vs-retatrutide' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Peptide Wins?',
              description: 'Full comparison of semaglutide, tirzepatide, and retatrutide — mechanisms, fat loss results, side effects, and which to choose.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">GLP PEPTIDE COMPARISON 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Semaglutide vs Tirzepatide<br />
            <span className="text-purple-400">vs Retatrutide</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            Three GLP peptides. Three different mechanisms. Wildly different results.
            Here's exactly how they compare — and which one is right for your goals.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Semaglutide', stat: '~15–17%', sub: 'body weight lost' },
              { label: 'Tirzepatide', stat: '~20–22%', sub: 'body weight lost' },
              { label: 'Retatrutide', stat: '~24–26%', sub: 'body weight lost' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-xs text-slate-500 mb-1">{s.label}</div>
                <div className="text-2xl font-black text-white">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Head-to-Head Breakdown</h2>
        <p className="text-slate-400 mb-10">Mechanism, results, side effects, and best-fit use case for each peptide.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {peptides.map((p) => (
            <div key={p.name} className={`glass-card p-6 border-t-2 ${p.color === 'blue' ? 'border-blue-500' : p.color === 'emerald' ? 'border-emerald-500' : 'border-purple-500'}`}>
              <div className={`text-xs font-bold tracking-widest mb-1 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'emerald' ? 'text-emerald-400' : 'text-purple-400'}`}>{p.mechanism}</div>
              <h3 className="text-white font-black text-xl mb-1">{p.name}</h3>
              <p className="text-slate-500 text-xs mb-4">{p.brand}</p>

              <div className="space-y-2 mb-5 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Weight loss</span><span className="text-white font-semibold">{p.weightLoss}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Muscle loss</span><span className="text-white font-semibold">{p.muscleLoss}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Dosing start</span><span className="text-white font-semibold text-xs">{p.dosing.split('→')[0].trim()}</span></div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">Pros</p>
                <ul className="space-y-1">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-slate-300 text-xs">
                      <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-emerald-400" /> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">Cons</p>
                <ul className="space-y-1">
                  {p.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-slate-400 text-xs">
                      <XCircle className="w-3 h-3 shrink-0 mt-0.5 text-red-400/70" /> {con}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-slate-500 mb-1">Best for</p>
                <p className="text-white text-xs font-semibold">{p.bestFor}</p>
              </div>

              <Link href={`/products/${p.slug}`} className="block text-center text-xs font-semibold py-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors">
                View {p.name} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Quick Comparison Table</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Factor</th>
                  <th className="text-center py-3 px-4 text-blue-400 font-bold">Semaglutide</th>
                  <th className="text-center py-3 px-4 text-emerald-400 font-bold">Tirzepatide</th>
                  <th className="text-center py-3 px-4 text-purple-400 font-bold">Retatrutide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Receptors targeted', 'GLP-1', 'GLP-1 + GIP', 'GLP-1 + GIP + Glucagon'],
                  ['Fat loss (max dose)', '15–17%', '20–22%', '24–26%'],
                  ['Muscle preservation', 'Moderate', 'Good', 'Best'],
                  ['GI side effects', 'Moderate', 'Moderate–High', 'High'],
                  ['Clinical data', 'Extensive', 'Strong', 'Phase 3 trials'],
                  ['Best starting dose', '0.25mg/wk', '2.5mg/wk', '1mg/wk'],
                  ['Ideal for', 'Beginners', 'Intermediate', 'Advanced/aggressive'],
                ].map(([factor, sema, tirz, reta], i) => (
                  <tr key={factor} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4 text-slate-400 font-semibold">{factor}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{sema}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{tirz}</td>
                    <td className="py-3 px-4 text-center text-slate-300">{reta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stack tip */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <h2 className="text-xl font-black text-white mb-3">The Advanced Play: Stack GLP + GH Peptides</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            GLP peptides excel at fat loss but carry lean mass loss risk. Stacking with CJC-1295/Ipamorelin (a GH secretagogue) counters this — GH actively builds and preserves muscle while the GLP burns fat. The result is true body recomposition rather than pure weight loss.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/stacks/body-recomp" className="btn-secondary text-sm px-5 py-2.5">Body Recomp Stack</Link>
            <Link href="/products/cjc1295-ipamorelin" className="btn-secondary text-sm px-5 py-2.5">CJC-1295 / Ipamorelin</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">GLP Peptide FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-purple-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-white mb-3">Shop GLP Peptides</h2>
          <p className="text-slate-400 mb-6">COA-verified semaglutide, tirzepatide, and retatrutide. US domestic shipping.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop All GLP Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/body-composition" className="btn-secondary px-8 py-4">Body Composition Guide</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/semaglutide-vs-tirzepatide-vs-retatrutide" />
    </div>
  );
}
