import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Flame, TrendingDown, Zap } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import WeightLossSelector from '@/components/WeightLossSelector';

export const metadata: Metadata = {
  title: 'Best Peptides for Weight Loss 2026 | GLP-1, GH Peptides & Fat Loss Guide',
  description: 'The complete guide to peptides for weight loss. Compare GLP-1 peptides (semaglutide, tirzepatide, retatrutide), GH secretagogues, and fat-burning peptides — with protocols for each goal.',
  keywords: 'peptides for weight loss, best weight loss peptide, GLP-1 peptide weight loss, semaglutide weight loss, tirzepatide weight loss, CJC-1295 fat loss, peptide injection for weight loss, best peptide for fat loss 2026',
  openGraph: {
    title: 'Best Peptides for Weight Loss 2026 — Complete Guide',
    description: 'GLP-1 peptides, GH secretagogues, and fat-burning peptides compared. Find the right protocol for your weight loss goal.',
    type: 'article',
    url: 'https://www.bp157stack.com/peptides-for-weight-loss',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Weight Loss 2026 — Complete Guide',
    description: 'GLP-1s, GH peptides, and fat burners compared. Find the right protocol for your goal.',
  },
  alternates: { canonical: 'https://www.bp157stack.com/peptides-for-weight-loss' },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

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

const allFaqs = [
  { q: 'What is the best peptide for weight loss?', a: 'For pure weight loss, tirzepatide and retatrutide currently show the most dramatic clinical results (22–29% body weight reduction in trials). For body recomposition — losing fat while preserving or building muscle — CJC-1295 Ipamorelin is the gold standard. For maximum results, some advanced users combine GLP-1s with GH peptides, using the GLP for fat loss and the GH peptide to protect lean mass.' },
  { q: 'How do GLP-1 peptides cause weight loss?', a: 'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide) mimic GLP-1, a hormone produced in the gut after eating. They slow gastric emptying (food leaves the stomach more slowly, keeping you fuller longer), reduce appetite signals in the brain\'s hunger centers, and improve insulin sensitivity. The result is a significant reduction in caloric intake without the hunger or deprivation of traditional dieting.' },
  { q: 'Do peptides cause muscle loss during weight loss?', a: 'GLP-1 peptides can cause muscle loss if protein intake is low — studies show roughly 25–40% of weight lost on GLP-1 drugs alone is lean mass, not fat. This is why combining a GLP-1 with CJC-1295 Ipamorelin (to stimulate GH and preserve muscle) and maintaining high protein intake (0.8g+ per pound of bodyweight) is increasingly recommended. GH secretagogues alone (without GLP-1) do not cause muscle loss.' },
  { q: 'How long does it take for weight loss peptides to work?', a: 'GLP-1 peptides: appetite suppression begins within 1–2 weeks; meaningful weight loss visible at 4–8 weeks; maximum results at 6–12 months. GH secretagogues (CJC-1295/Ipamorelin): sleep improvement within 1–2 weeks; body composition changes visible at 6–8 weeks; peak recomposition at 3–6 months.' },
  { q: 'Can I take CJC-1295 Ipamorelin and semaglutide together?', a: 'Yes — this combination is increasingly popular. Semaglutide drives the caloric deficit through appetite suppression; CJC-1295 Ipamorelin protects lean muscle and improves sleep. They work through completely different pathways with no negative interaction. This stack is particularly valuable for people concerned about muscle loss from GLP-1 monotherapy.' },
  { q: 'Does the weight lost on GLP-1 peptides come back after stopping?', a: 'Weight regain after stopping GLP-1 peptides is a real and well-documented phenomenon. Clinical data shows that most patients regain a significant portion of lost weight within 12 months of discontinuation — the underlying hormonal drive toward weight gain (reduced satiety signaling, metabolic adaptation) resumes. This does not mean GLP-1s are not worth using — the metabolic improvements achieved (reduced visceral fat, improved insulin sensitivity, cardiovascular risk reduction) have lasting value. The most effective strategy is transitioning to a lower maintenance dose after reaching goal weight, rather than full cessation.' },
  { q: 'Are there peptides for weight loss without hormonal disruption?', a: 'Yes — GH secretagogues (CJC-1295/Ipamorelin) and MOTS-c are the cleanest options. They produce fat loss without affecting sex hormones (testosterone, estrogen, progesterone), thyroid, or adrenal function. GLP-1 peptides also have no androgenic or estrogenic activity — they affect only the GLP-1 receptor system related to appetite and insulin. None of the common weight loss peptides cause hormonal disruption in the traditional sense.' },
  { q: 'Can peptide weight loss help with sleep apnea?', a: 'Yes — there is meaningful evidence here. GLP-1 peptides reduce airway fat deposits and adipose tissue around the throat, which directly reduces sleep apnea severity. The SURMOUNT-OSA trial specifically demonstrated that tirzepatide significantly reduced the Apnea-Hypopnea Index (AHI) in obese patients with sleep apnea — by up to 55% in some groups. GH peptides improve sleep architecture independently by deepening slow-wave sleep, which benefits all sleep disorders. For obese individuals with sleep apnea, the GLP-1 class produces the most clinically significant improvement.' },
];

export default function PeptidesForWeightLossPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #0d0610 50%, #060610 100%)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
          { '@type': 'ListItem', position: 2, name: 'Peptides for Weight Loss', item: 'https://www.bp157stack.com/peptides-for-weight-loss' },
        ]},
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: allFaqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
        { '@context': 'https://schema.org', '@type': 'Article', headline: 'Best Peptides for Weight Loss 2026', description: 'Complete guide comparing GLP-1 peptides, GH secretagogues, and fat-burning peptide protocols.', author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' } },
      ]) }} />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-rose-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6">
            <Flame className="w-4 h-4 text-rose-400" />
            <span className="text-rose-400 text-sm font-semibold tracking-wide">WEIGHT LOSS PEPTIDE GUIDE 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Best Peptides for<br /><span className="text-rose-400">Weight Loss</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
            From GLP-1 drugs losing 25% body weight in clinical trials to GH peptides that burn fat while building muscle —
            the peptide landscape for weight loss in 2026 is more powerful than ever. Here&apos;s the complete comparison.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[{ num: '29%', label: 'Max body weight lost (retatrutide trial)' }, { num: '4', label: 'GLP-1 products in catalog' }, { num: '22%', label: 'Tirzepatide average (SURMOUNT-5)' }, { num: '15%', label: 'Semaglutide average (STEP trial)' }].map(s => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black text-rose-400">{s.num}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Loss Selector */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Find Your Peptide Protocol</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Answer 4 quick questions to get a personalized recommendation based on your goal, experience, and preferences.
          </p>
        </div>
        <WeightLossSelector />
      </section>

      {/* Mechanism overview */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Three Ways Peptides Drive Fat Loss</h2>
        <p className="text-gray-500 mb-10">Not all weight loss peptides work the same way. Understanding the mechanism helps you choose the right one.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { num: '01', title: 'Appetite Suppression', color: 'rose', desc: 'GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide) suppress hunger hormones and slow gastric emptying — dramatically reducing caloric intake without willpower.' },
            { num: '02', title: 'GH-Driven Lipolysis', color: 'blue', desc: 'Growth hormone directly activates hormone-sensitive lipase in fat cells, mobilizing stored triglycerides for oxidation. CJC-1295 Ipamorelin amplifies your natural GH pulse 8–10×.' },
            { num: '03', title: 'Muscle Preservation', color: 'emerald', desc: 'IGF-1 LR3 and GH peptides preserve and build lean mass during fat loss — the key to avoiding the "skinny fat" outcome common on GLP-1 monotherapy.' },
          ].map(c => (
            <div key={c.num} className="glass-card p-6">
              <div className={`text-xs font-bold tracking-widest mb-2 ${c.color === 'rose' ? 'text-rose-400' : c.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`}>{c.num}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-3">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLP-1 vs GH Peptides: Full Comparison */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1.5 mb-6">
            <TrendingDown className="w-4 h-4 text-rose-400" />
            <span className="text-rose-400 text-sm font-semibold">DEEP COMPARISON</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">GLP-1 Peptides vs. GH Peptides: The Full Comparison</h2>

          <div className="space-y-6 text-gray-900 leading-relaxed">
            <p>
              The two major categories of weight loss peptides work through fundamentally different mechanisms, produce different kinds of fat loss, and suit different types of people. Understanding this distinction is the most important decision in building a peptide fat loss protocol.
            </p>

            <h3 className="text-gray-900 font-bold text-xl mt-8 mb-3">How GLP-1 Peptides Work</h3>
            <p>
              GLP-1 (glucagon-like peptide-1) is a hormone naturally secreted by L-cells in the small intestine in response to food consumption. It signals the pancreas to release insulin, tells the stomach to slow gastric emptying, and — most critically for weight loss — activates satiety receptors in the hypothalamus to suppress appetite. GLP-1 receptor agonists (semaglutide, tirzepatide, retatrutide) mimic this hormone at supraphysiological levels, creating a persistent state of reduced appetite and improved insulin signaling.
            </p>
            <p>
              The mechanism of action for tirzepatide expands this further: it also agonizes GIP (glucose-dependent insulinotropic polypeptide) receptors, which independently improve insulin secretion, reduce glucagon (the fat-storing signal), and appear to enhance the GLP-1 effect synergistically. Retatrutide adds glucagon receptor agonism to further increase metabolic rate, explaining its superior weight loss outcomes in Phase II trials.
            </p>

            <h3 className="text-gray-900 font-bold text-xl mt-8 mb-3">How GH Peptides Work</h3>
            <p>
              Growth hormone secretagogues (CJC-1295, Ipamorelin, GHRP-6) work by stimulating the pituitary gland to produce more of your own growth hormone during natural secretion pulses — primarily during deep sleep. GH is directly lipolytic: it binds GH receptors on adipocytes and activates hormone-sensitive lipase, which hydrolyzes stored triglycerides into free fatty acids available for oxidation. Simultaneously, GH signals the liver to produce IGF-1, which drives muscle protein synthesis and satellite cell activation.
            </p>
            <p>
              The fat loss from GH peptides is qualitatively different from GLP-1 fat loss. GLP-1s produce fat loss through reduced caloric intake (appetite suppression). GH peptides produce fat loss through increased fat oxidation — your body burns more fat even at the same caloric intake. This distinction matters enormously for body composition: GH-driven fat loss preferentially removes visceral and subcutaneous fat while adding lean muscle, producing a very different aesthetic result than GLP-1 monotherapy.
            </p>

            <h3 className="text-gray-900 font-bold text-xl mt-8 mb-3">Who Needs Which</h3>
            <div className="space-y-3">
              {[
                { type: 'Obese / High Body Fat (30%+ men, 38%+ women)', rec: 'Start with GLP-1 class', reason: 'The volume of fat to lose exceeds what GH peptides can realistically achieve in a reasonable timeline. GLP-1s produce dramatic caloric restriction that accelerates fat loss significantly. Add CJC/Ipa after reaching 25–28% BF to protect lean mass and improve sleep.' },
                { type: 'Athletes / Body Composition Focus', rec: 'GH Peptides (CJC-1295 / Ipamorelin + IGF-1 LR3)', reason: 'Athletes and people seeking body recomposition benefit more from GH secretagogues. The goal is not just less weight — it\'s more muscle and less fat simultaneously. GLP-1s, used alone, cause lean mass loss that is counterproductive for this population.' },
                { type: 'Metabolic Syndrome / Pre-Diabetes', rec: 'GLP-1 first, then add GH peptides', reason: 'Metabolic syndrome and insulin resistance respond immediately and powerfully to GLP-1 agonists — improving glucose metabolism, reducing visceral fat, and dramatically improving cardiovascular risk markers. After metabolic normalization (3–6 months), adding GH secretagogues enhances body composition further.' },
              ].map((item) => (
                <div key={item.type} className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-gray-900 font-bold text-sm mb-1">{item.type}</div>
                  <div className="text-rose-400 text-xs font-semibold mb-2">→ {item.rec}</div>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>

            <h3 className="text-gray-900 font-bold text-xl mt-8 mb-3">The Ultimate Cut: Stacking GLP-1 + GH Peptides</h3>
            <p>
              The most sophisticated fat loss protocol combines both categories. Semaglutide or tirzepatide drives the caloric deficit through appetite suppression. CJC-1295/Ipamorelin protects lean mass and improves sleep quality. IGF-1 LR3 added in 4-week cycles provides direct anti-catabolic signaling. MOTS-c rounds out the stack with metabolic optimization via AMPK activation.
            </p>
            <p>
              This combination addresses every pathway of fat loss simultaneously — caloric reduction, fat mobilization, muscle preservation, sleep quality, and metabolic rate — and produces significantly superior results to either category alone. The main limitation is complexity and cost: running 3–4 peptides simultaneously requires more knowledge and higher monthly spend (~$200–350/month combined).
            </p>

            <h3 className="text-gray-900 font-bold text-xl mt-8 mb-3">Cost and Side Effect Comparison</h3>
            <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <th className="text-left py-3 px-4 text-gray-500 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 text-rose-400 font-semibold">GLP-1 Peptides</th>
                    <th className="text-left py-3 px-4 text-blue-400 font-semibold">GH Peptides</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Monthly cost (research)', glp: '$80–180/month', gh: '$60–120/month' },
                    { label: 'Primary side effects', glp: 'Nausea (30–40%), constipation, fatigue', gh: 'Mild water retention (temporary), hunger increase' },
                    { label: 'Serious risks', glp: 'Pancreatitis (rare), thyroid monitoring advised', gh: 'Extremely rare with correct dosing' },
                    { label: 'Injection frequency', glp: 'Once weekly', gh: 'Daily (before bed)' },
                    { label: 'GI effects', glp: 'Significant at start; improves over weeks', gh: 'Minimal' },
                    { label: 'Sleep effects', glp: 'Neutral to slightly positive', gh: 'Dramatically positive (deep sleep improvement)' },
                  ].map((row, i) => (
                    <tr key={row.label} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                      <td className="py-2.5 px-4 text-gray-500 font-medium">{row.label}</td>
                      <td className="py-2.5 px-4 text-gray-600">{row.glp}</td>
                      <td className="py-2.5 px-4 text-gray-600">{row.gh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fat Loss Without Muscle Loss */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 mb-6">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-semibold">MUSCLE PROTECTION</span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-8">Fat Loss Without Muscle Loss: The Protein Protocol</h2>

        <div className="space-y-5">
          <p className="text-gray-900 leading-relaxed">
            The single biggest mistake in peptide-assisted weight loss is neglecting protein intake. Research consistently shows that 25–40% of total weight loss on GLP-1 monotherapy is lean mass, not fat. At high deficit levels, this means losing significant muscle alongside fat — producing a &quot;smaller but softer&quot; result rather than the lean, defined physique most people want.
          </p>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold text-lg mb-4">Minimum Protein Requirements During Fat Loss</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              The research consensus for muscle preservation during caloric deficit is 1.6–2.2g of protein per kg of bodyweight (0.73–1.0g per lb). This range represents what muscle tissue requires to prevent breakdown when calories are restricted. At the higher end of this range (2.0–2.2g/kg), studies show near-complete muscle preservation even during aggressive deficits of 500–750 kcal/day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { weight: '150 lbs (68kg)', protein: '109–150g/day', note: 'Minimum for muscle preservation' },
                { weight: '180 lbs (82kg)', protein: '131–180g/day', note: 'Optimal range for most adults' },
                { weight: '220 lbs (100kg)', protein: '160–220g/day', note: 'High bodyweight requires more' },
              ].map((p) => (
                <div key={p.weight} className="rounded-lg p-3" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
                  <div className="text-emerald-400 font-bold text-sm">{p.weight}</div>
                  <div className="text-gray-900 font-black text-lg">{p.protein}</div>
                  <div className="text-gray-500 text-xs">{p.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold text-lg mb-3">Why Peptides Reduce the Muscle-Sparing Protein Requirement</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              GH peptides (CJC-1295/Ipamorelin) directly reduce the protein intake needed to preserve muscle during a cut. Growth hormone is anti-catabolic — it suppresses muscle protein breakdown at the signaling level by reducing the catabolic cytokines (myostatin, atrogin-1, MuRF1) that break down muscle tissue during caloric restriction. Users combining GH peptides with GLP-1s can maintain muscle at the lower end of the protein range (1.6g/kg) rather than requiring the higher end (2.2g/kg), making adherence significantly easier.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold text-lg mb-3">Protein Sources and Timing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-gray-900 font-semibold text-sm mb-2">Best Protein Sources on GLP-1</div>
                <ul className="space-y-1.5">
                  {[
                    'Eggs and egg whites (easy to eat when nauseous)',
                    'Greek yogurt (high density, soft texture)',
                    'Protein isolate shakes (concentrated, low volume)',
                    'Chicken breast, fish (lean, high protein density)',
                    'Cottage cheese (slow-digesting, filling)',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm mb-2">Timing Priorities</div>
                <ul className="space-y-1.5">
                  {[
                    'Morning (post-injection GH window): 40–60g protein',
                    'Post-workout: 30–40g within 45 minutes',
                    'Evening (before last meal): 20–30g protein',
                    'Distribute remaining protein across 2–3 other meals',
                    'Total: 4–5 protein feedings per day',
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold text-lg mb-3">Training During a Peptide Cut</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Resistance training is non-negotiable for muscle preservation during fat loss — particularly on GLP-1 protocols. Mechanical load signals to muscle tissue that it is needed, which activates anti-catabolic pathways that override the muscle-breakdown signals from caloric restriction. Even 2–3 days per week of compound resistance training (squats, deadlifts, rows, presses) is sufficient to preserve the vast majority of lean mass during aggressive weight loss. Combining this with adequate protein and the anti-catabolic signaling of GH peptides produces the best possible body composition outcome during fat loss.
            </p>
          </div>
        </div>
      </section>

      {/* Weight Loss Plateau */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1.5 mb-6">
            <Flame className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">TROUBLESHOOTING</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">The Weight Loss Plateau Problem</h2>

          <div className="space-y-6 text-gray-900 leading-relaxed">
            <p>
              Weight loss plateaus are almost universal in long-term fat loss protocols — including peptide-assisted ones. Understanding what a plateau actually represents versus a temporary fluctuation is critical before making any protocol changes.
            </p>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold text-lg mb-3">True Plateau vs. Temporary Fluctuation</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A true plateau is 3–4 weeks of no progress in body weight AND no change in body composition measurements (waist, hip, limb circumference). A temporary fluctuation is 1–2 weeks of scale stagnation that often accompanies muscle gain (which is denser than fat), water retention from higher carbohydrate intake, or hormonal fluctuations. The mistake is treating a 2-week scale stall as a plateau and making unnecessary protocol changes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg p-3" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
                  <div className="text-emerald-400 font-bold text-sm mb-2">Temporary Fluctuation</div>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• Scale weight stagnant 1–2 weeks</li>
                    <li>• Measurements still improving</li>
                    <li>• Clothes fitting better</li>
                    <li>• Higher carb or sodium intake recently</li>
                  </ul>
                  <div className="text-emerald-400 text-xs font-semibold mt-2">Action: Stay the course</div>
                </div>
                <div className="rounded-lg p-3" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}>
                  <div className="text-amber-400 font-bold text-sm mb-2">True Plateau</div>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li>• No weight change 3–4+ weeks</li>
                    <li>• Measurements also stagnant</li>
                    <li>• Diet and training consistent</li>
                    <li>• Energy lower, hunger returning</li>
                  </ul>
                  <div className="text-amber-400 text-xs font-semibold mt-2">Action: Protocol adjustment needed</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold text-lg mb-3">Plateau-Breaking Strategies</h3>
              <div className="space-y-3">
                {[
                  { strategy: 'GLP-1 Dose Escalation', detail: 'If on semaglutide or tirzepatide, titrate up by one dose level. GLP-1 appetite suppression effect partially wanes at a given dose over time as receptor sensitivity adapts — moving to the next dose tier restores the caloric deficit.', priority: 'First attempt' },
                  { strategy: 'Injection Site Rotation', detail: 'Rotating injection sites (abdomen, thigh, upper arm) prevents localized subcutaneous tissue changes that can affect absorption rate. Users who inject only in the same site can develop lipodystrophy that reduces peptide bioavailability.', priority: 'Implement immediately' },
                  { strategy: 'Add GH Peptide Stack', detail: 'If using GLP-1 only, adding CJC-1295/Ipamorelin introduces a second fat loss mechanism (direct lipolysis via GH) that works independently of appetite. This synergy reliably breaks GLP-1-only plateaus.', priority: 'High value addition' },
                  { strategy: 'Diet Break (1–2 weeks)', detail: 'A structured diet break — eating at maintenance calories for 1–2 weeks — resets leptin levels and reverses adaptive thermogenesis (the metabolic slow-down response to prolonged deficit). After the break, fat loss accelerates significantly.', priority: 'When all else fails' },
                  { strategy: 'Switch GLP-1 Agent', detail: 'If on semaglutide and plateaued at maximum dose, switching to tirzepatide activates the additional GIP receptor pathway and reliably produces further weight loss. Tirzepatide → Retatrutide represents the next step for those who plateau on tirzepatide.', priority: 'Advanced option' },
                ].map((item) => (
                  <div key={item.strategy} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-gray-900 font-bold text-sm">{item.strategy}</div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">{item.priority}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category sections */}
      {peptideCategories.map((cat) => (
        <section key={cat.name} className="py-12" style={{ background: 'rgba(6,6,16,0.6)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4 ${cat.color === 'rose' ? 'bg-rose-500/10 border border-rose-500/20' : 'bg-blue-500/10 border border-blue-500/20'}`}>
              <span className={`text-sm font-bold ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{cat.name.toUpperCase()}</span>
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">{cat.name}</h2>
            <p className={`font-semibold mb-4 ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{cat.tagline}</p>
            <p className="text-gray-500 mb-8 max-w-3xl text-sm leading-relaxed">{cat.mechanism}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {cat.peptides.map(p => (
                <Link key={p.name} href={p.href} className="glass-card p-5 hover:border-white/20 transition-colors group">
                  <div className="text-gray-900 font-bold mb-2 group-hover:text-emerald-400 transition-colors">{p.name}</div>
                  <div className={`text-2xl font-black mb-1 ${cat.color === 'rose' ? 'text-rose-400' : 'text-blue-400'}`}>{p.result}</div>
                  <div className="text-gray-500 text-xs">{p.time}</div>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div><span className="text-emerald-400 font-semibold">Best for: </span><span className="text-gray-500">{cat.bestFor}</span></div>
              <div><span className="text-amber-400 font-semibold">Downsides: </span><span className="text-gray-500">{cat.downsides}</span></div>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison table */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">GLP-1 vs GH Peptides vs Stack</h2>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                <th className="text-left py-4 px-5 text-gray-500 font-semibold">Feature</th>
                <th className="text-left py-4 px-5 text-rose-400 font-bold">GLP-1 Peptides</th>
                <th className="text-left py-4 px-5 text-blue-400 font-bold">GH Secretagogues</th>
                <th className="text-left py-4 px-5 text-emerald-400 font-bold">Combined Stack</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-5 text-gray-600 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-gray-500">{row.glp}</td>
                  <td className="py-3 px-5 text-gray-500">{row.gh}</td>
                  <td className="py-3 px-5 text-gray-500">{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Weight Loss Peptide FAQ</h2>
        <div className="space-y-3">
          {allFaqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-rose-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5"><p className="text-gray-500 text-sm leading-relaxed">{a}</p></div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Shop Weight Loss Peptides</h2>
          <p className="text-gray-500 mb-6">Semaglutide, tirzepatide, retatrutide, CJC-1295 Ipamorelin — COA verified, US domestic.</p>
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
