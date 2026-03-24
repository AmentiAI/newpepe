import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Flame, TrendingDown, Zap } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Best Peptides for Weight Loss 2026 | GLP-1, GH Peptides & Fat Loss Guide',
  description: 'The complete guide to peptides for weight loss. Compare GLP-1 peptides (semaglutide, tirzepatide, retatrutide), GH secretagogues, and fat-burning peptides — with protocols for each goal.',
  keywords: 'peptides for weight loss, best weight loss peptide, GLP-1 peptide weight loss, semaglutide weight loss, tirzepatide weight loss, CJC-1295 fat loss, peptide injection for weight loss, best peptide for fat loss 2026',
  openGraph: {
    title: 'Best Peptides for Weight Loss 2026 — Complete Guide',
    description: 'GLP-1 peptides, GH secretagogues, and fat-burning peptides compared. Find the right protocol for your weight loss goal.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-weight-loss',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Weight Loss 2026 — Complete Guide',
    description: 'GLP-1s, GH peptides, and fat burners compared. Find the right protocol for your goal.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const peptideCategories = [
  {
    name: 'GLP-1 Receptor Agonists',
    color: 'rose',
    tagline: 'Fastest fat loss — clinically proven appetite suppression',
    mechanism: 'Mimic GLP-1, a gut hormone that slows gastric emptying, suppresses appetite, and improves insulin sensitivity. Originally developed for type 2 diabetes, now the most potent fat-loss tool available.',
    peptides: [
      { name: 'Semaglutide', result: '~15% body weight', time: '68 weeks', href: '/products/glp-1s-semaglutide' },
      { name: 'Tirzepatide', result: '~22% body weight', time: '72 weeks', href: '/products/glp-2t-tirzepatide' },
      { name: 'Retatrutide', result: '~24–29% body weight', time: '48 weeks', href: '/products/glp-3r-retatrutide' },
      { name: 'CagriSema', result: '~25% body weight', time: '68 weeks', href: '/products/cagri-sema' },
    ],
    bestFor: 'Significant weight loss (20+ lbs), type 2 diabetes, metabolic syndrome',
    downsides: 'GI side effects (nausea, constipation). Risk of lean muscle loss if protein intake is low.',
  },
  {
    name: 'Growth Hormone Secretagogues',
    color: 'blue',
    tagline: 'Body recomposition — burn fat while preserving or building muscle',
    mechanism: 'Stimulate the pituitary to release more GH during sleep. GH is directly lipolytic — it mobilizes stored fat for energy while simultaneously preserving lean muscle. Best for body recomposition rather than pure weight loss.',
    peptides: [
      { name: 'CJC-1295 / Ipamorelin', result: '5–15% body fat reduction', time: '3–6 months', href: '/products/cjc1295-ipamorelin' },
      { name: 'IGF-1 LR3', result: 'Muscle preservation + fat loss', time: '4–6 week cycles', href: '/products/igf-1lr3' },
    ],
    bestFor: 'Athletes, people who want to lose fat while gaining or keeping muscle, improving sleep quality',
    downsides: 'Slower than GLP-1s for pure weight loss. Works best combined with training.',
  },
];

const comparisonRows = [
  { feature: 'Average Fat Loss', glp: '15–29% body weight', gh: '5–15% body fat', stack: '20–30% body weight + muscle gain' },
  { feature: 'Speed of Results', glp: 'Rapid (weeks 4–8)', gh: 'Gradual (months 2–4)', stack: 'Rapid fat loss + slow muscle gain' },
  { feature: 'Muscle Preservation', glp: '⚠️ Risk of muscle loss', gh: '✅ Preserves and builds muscle', stack: '✅ Best muscle preservation' },
  { feature: 'Dosing Frequency', glp: 'Once weekly', gh: 'Daily (before bed)', stack: 'Both schedules combined' },
  { feature: 'GI Side Effects', glp: '⚠️ Nausea, constipation common', gh: '✅ Minimal', stack: '⚠️ From GLP component' },
  { feature: 'Sleep Quality', glp: 'Neutral', gh: '✅ Dramatically improved', stack: '✅ Improved' },
  { feature: 'Best For', glp: 'Pure weight loss goal', gh: 'Body recomp + performance', stack: 'Maximum results if motivated' },
];

const faqs = [
  { q: 'What is the best peptide for weight loss?', a: 'For pure weight loss, tirzepatide and retatrutide currently show the most dramatic clinical results (22–29% body weight reduction in trials). For body recomposition — losing fat while preserving or building muscle — CJC-1295 Ipamorelin is the gold standard. For maximum results, some advanced users combine GLP-1s with GH peptides, using the GLP for fat loss and the GH peptide to protect lean mass.' },
  { q: 'How do GLP-1 peptides cause weight loss?', a: 'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide) mimic GLP-1, a hormone produced in the gut after eating. They slow gastric emptying (food leaves the stomach more slowly, keeping you fuller longer), reduce appetite signals in the brain\'s hunger centers, and improve insulin sensitivity. The result is a significant reduction in caloric intake without the hunger or deprivation of traditional dieting.' },
  { q: 'Do peptides cause muscle loss during weight loss?', a: 'GLP-1 peptides can cause muscle loss if protein intake is low — studies show roughly 25–40% of weight lost on GLP-1 drugs alone is lean mass, not fat. This is why combining a GLP-1 with CJC-1295 Ipamorelin (to stimulate GH and preserve muscle) and maintaining high protein intake (0.8g+ per pound of bodyweight) is increasingly recommended. GH secretagogues alone (without GLP-1) do not cause muscle loss.' },
  { q: 'How long does it take for weight loss peptides to work?', a: 'GLP-1 peptides: appetite suppression begins within 1–2 weeks; meaningful weight loss visible at 4–8 weeks; maximum results at 6–12 months. GH secretagogues (CJC-1295/Ipamorelin): sleep improvement within 1–2 weeks; body composition changes visible at 6–8 weeks; peak recomposition at 3–6 months.' },
  { q: 'Can I take CJC-1295 Ipamorelin and semaglutide together?', a: 'Yes — this combination is increasingly popular. Semaglutide drives the caloric deficit through appetite suppression; CJC-1295 Ipamorelin protects lean muscle and improves sleep. They work through completely different pathways with no negative interaction. This stack is particularly valuable for people concerned about muscle loss from GLP-1 monotherapy.' },
];

export default function PeptidesForWeightLossPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #0d0610 50%, #060610 100%)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
          { '@type': 'ListItem', position: 2, name: 'Peptides for Weight Loss', item: 'https://bp157stack.com/peptides-for-weight-loss' },
        ]},
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
        { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Peptides for Weight Loss 2026', description: 'Complete guide comparing GLP-1 peptides, GH secretagogues, and fat-burning peptide protocols.', author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' } },
      ]) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-rose-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-rose-400" />
            <span className="text-rose-400 text-sm font-semibold tracking-wide">WEIGHT LOSS PEPTIDE GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Best Peptides for<br /><span className="text-rose-400">Weight Loss</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            From GLP-1 drugs losing 25% body weight in clinical trials to GH peptides that burn fat while building muscle —
            the peptide landscape for weight loss in 2026 is more powerful than ever. Here's the complete comparison.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[{ num: '29%', label: 'Max body weight lost (retatrutide trial)' }, { num: '4', label: 'GLP-1 products in catalog' }, { num: '22%', label: 'Tirzepatide average (SURMOUNT-5)' }, { num: '15%', label: 'Semaglutide average (STEP trial)' }].map(s => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black text-rose-400">{s.num}</div>
                <div className="text-slate-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanism overview */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Three Ways Peptides Drive Fat Loss</h2>
        <p className="text-slate-400 mb-10">Not all weight loss peptides work the same way. Understanding the mechanism helps you choose the right one.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { num: '01', title: 'Appetite Suppression', color: 'rose', desc: 'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide) suppress hunger hormones and slow gastric emptying — dramatically reducing caloric intake without willpower.' },
            { num: '02', title: 'GH-Driven Lipolysis', color: 'blue', desc: 'Growth hormone directly activates hormone-sensitive lipase in fat cells, mobilizing stored triglycerides for oxidation. CJC-1295 Ipamorelin amplifies your natural GH pulse 8–10×.' },
            { num: '03', title: 'Muscle Preservation', color: 'emerald', desc: 'IGF-1 LR3 and GH peptides preserve and build lean mass during fat loss — the key to avoiding the "skinny fat" outcome common on GLP-1 monotherapy.' },
          ].map(c => (
            <div key={c.num} className="glass-card p-6">
              <div className={`text-xs font-bold tracking-widest mb-2 ${c.color === 'rose' ? 'text-rose-400' : c.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}>{c.num}</div>
              <h3 className="text-white font-bold text-lg mb-3">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category sections */}
      {peptideCategories.map((cat) => (
        <section key={cat.name} className="py-12" style={{ background: 'rgba(6,6,16,0.6)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 ${cat.color === 'rose' ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-blue-500/10 border border-blue-500/20'}`}>
              <span className={`text-sm font-bold ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{cat.name.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl font-black text-white mb-2">{cat.name}</h2>
            <p className={`font-semibold mb-4 ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{cat.tagline}</p>
            <p className="text-slate-400 mb-8 max-w-3xl text-sm leading-relaxed">{cat.mechanism}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {cat.peptides.map(p => (
                <Link key={p.name} href={p.href} className="glass-card p-5 hover:border-white/20 transition-colors group">
                  <div className="text-white font-bold mb-2 group-hover:text-emerald-400 transition-colors">{p.name}</div>
                  <div className={`text-2xl font-black mb-1 ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{p.result}</div>
                  <div className="text-slate-500 text-xs">{p.time}</div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div><span className="text-emerald-400 font-semibold">Best for: </span><span className="text-slate-400">{cat.bestFor}</span></div>
              <div><span className="text-amber-400 font-semibold">Downsides: </span><span className="text-slate-400">{cat.downsides}</span></div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison table */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-8 text-center">GLP-1 vs GH Peptides vs Stack</h2>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Feature</th>
                <th className="text-left py-4 px-5 text-rose-400 font-bold">GLP-1 Peptides</th>
                <th className="text-left py-4 px-5 text-blue-400 font-bold">GH Secretagogues</th>
                <th className="text-left py-4 px-5 text-emerald-400 font-bold">Combined Stack</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-5 text-slate-300 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-slate-400">{row.glp}</td>
                  <td className="py-3 px-5 text-slate-400">{row.gh}</td>
                  <td className="py-3 px-5 text-slate-400">{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-8 text-center">Weight Loss Peptide FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-rose-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5"><p className="text-slate-400 text-sm leading-relaxed">{a}</p></div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-white mb-3">Shop Weight Loss Peptides</h2>
          <p className="text-slate-400 mb-6">Semaglutide, tirzepatide, retatrutide, CJC-1295 Ipamorelin — COA verified, US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta px-8 py-4 flex items-center gap-2">View <ArrowRight className="w-5 h-5" /></a>
            <Link href="/semaglutide-vs-tirzepatide-vs-retatrutide" className="btn-secondary px-8 py-4">Compare GLP-1s</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/peptides-for-weight-loss" />
    </div>
  );
}
