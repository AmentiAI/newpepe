import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, FlaskConical, Shield, Layers } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GlpWeightLossCalculator from '@/components/GlpWeightLossCalculator';

export const metadata: Metadata = {
  title: 'Semaglutide vs Tirzepatide vs Retatrutide: Which GLP Peptide Wins? (2026)',
  description: 'Semaglutide vs tirzepatide vs retatrutide — full comparison of mechanisms, fat loss results, side effects, and dosing. Which GLP peptide is right for you?',
  keywords: 'semaglutide vs tirzepatide, tirzepatide vs retatrutide, semaglutide vs tirzepatide vs retatrutide, best GLP peptide, ozempic vs mounjaro, GLP-1 comparison, which GLP peptide is best',
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide: Full Comparison 2026',
    description: 'Which GLP peptide wins for fat loss? Complete mechanism, results, and side-effect comparison.',
    type: 'article',
    url: 'https://www.bp157stack.com/semaglutide-vs-tirzepatide-vs-retatrutide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semaglutide vs Tirzepatide vs Retatrutide',
    description: 'Which GLP peptide is best for fat loss? Head-to-head comparison.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

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
  { q: 'Can you switch between GLP-1 peptides mid-protocol?', a: 'Yes — switching between GLP-1 peptides is possible and often done when results plateau or when moving to a more potent agent. When switching from semaglutide to tirzepatide, begin at the lowest tirzepatide dose (2.5mg/week) even if you were at a higher semaglutide dose — the receptor profiles differ enough that tolerance must be re-established. Similarly, switching from tirzepatide to retatrutide requires starting at retatrutide\'s initial dose. Allow 2–4 weeks for GI tolerance to establish with any new agent. There is no contraindication to switching; the transition just requires patience with titration.' },
  { q: 'How long should you stay on GLP-1 peptides?', a: 'There is no universal answer — it depends on your goals and starting point. Most clinical trials run 68–72 weeks (about 16–18 months). Discontinuation studies consistently show that weight regain occurs in most users when GLP-1 peptides are stopped without lifestyle changes being maintained. The most practical approach: run until target weight/body composition is achieved (typically 6–18 months), then evaluate. Some users transition to a very low maintenance dose (e.g., 0.25mg semaglutide bi-weekly) to maintain results. Long-term continuous use appears safe based on available data, but annual metabolic panels are recommended for anyone on continuous GLP therapy.' },
  { q: 'Do semaglutide and tirzepatide cause muscle loss?', a: 'They can, and this is one of the most important practical concerns with GLP-1 therapy. In the SURMOUNT-1 trial for tirzepatide, approximately 30–40% of total weight lost was lean mass. For semaglutide in STEP trials, lean mass loss was similar. This is not inevitable — it is largely preventable with (1) adequate protein intake (1g+ per lb of lean mass), (2) resistance training 3–4x/week throughout the protocol, and (3) considering CJC-1295/Ipamorelin to maintain elevated GH/IGF-1 and actively preserve or build muscle during the caloric deficit.' },
  { q: 'Are GLP-1 peptides effective for PCOS?', a: 'Yes — GLP-1 receptor agonists show meaningful benefits for PCOS (polycystic ovary syndrome) through multiple mechanisms. PCOS is frequently associated with insulin resistance, which GLP-1 agonists directly address through improved insulin sensitivity and reduced fasting insulin levels. Weight loss achieved with GLP-1 peptides further improves hormonal balance, reduces androgen levels, and restores menstrual regularity in many cases. Several clinical studies have shown that semaglutide and liraglutide improve ovulation frequency, reduce testosterone levels, and improve metabolic markers in women with PCOS. Tirzepatide, with its dual GIP action adding additional insulin sensitivity improvement, may be particularly relevant for PCOS management, though less PCOS-specific data exists for tirzepatide than for the older GLP-1 agents. Any PCOS-related use should be done under medical supervision.' },
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Body Composition', item: 'https://www.bp157stack.com/body-composition' },
                { '@type': 'ListItem', position: 3, name: 'Semaglutide vs Tirzepatide vs Retatrutide', item: 'https://www.bp157stack.com/semaglutide-vs-tirzepatide-vs-retatrutide' },
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
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">GLP PEPTIDE COMPARISON 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Semaglutide vs Tirzepatide<br />
            <span className="text-purple-400">vs Retatrutide</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
            Three GLP peptides. Three different mechanisms. Wildly different results.
            Here&apos;s exactly how they compare — and which one is right for your goals.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Semaglutide', stat: '~15–17%', sub: 'body weight lost' },
              { label: 'Tirzepatide', stat: '~20–22%', sub: 'body weight lost' },
              { label: 'Retatrutide', stat: '~24–26%', sub: 'body weight lost' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                <div className="text-2xl font-black text-gray-900">{s.stat}</div>
                <div className="text-gray-500 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NEW: HOW GLP-1 AGONISTS WORK === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <FlaskConical className="w-7 h-7 text-purple-400" />
          <h2 className="text-3xl font-black text-gray-900">How GLP-1 Agonists Actually Work</h2>
        </div>
        <p className="text-gray-500 mb-10 max-w-3xl">GLP-1 receptor agonists are not appetite suppressants in the stimulant sense. They work through a complex web of hormonal, neurological, and metabolic pathways that are fundamentally different from anything that came before them.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">GLP-1 Receptor Biology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">GLP-1 (Glucagon-Like Peptide-1) is a 30-amino acid incretin hormone naturally produced by L-cells in the small intestine in response to food intake. GLP-1 receptors (GLP-1R) are expressed throughout the body: in pancreatic beta cells, the hypothalamus, brainstem, vagal nerve terminals, cardiac tissue, kidneys, and the gastrointestinal tract. This wide receptor distribution explains why GLP-1 agonists affect so many systems simultaneously — it is not a single-target drug but a hormone mimic acting across an entire biological network. Natural GLP-1 has a half-life of approximately 2 minutes (degraded by DPP-IV). Pharmaceutical GLP-1 agonists like semaglutide are engineered to resist degradation, extending half-life to days or weeks.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">The Incretin Effect</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Incretins are gut hormones that amplify insulin secretion in response to food — a &quot;signal amplifier&quot; that tells the pancreas to expect glucose before it arrives in the bloodstream. GLP-1 is the primary incretin. When GLP-1R on pancreatic beta cells are activated, insulin secretion increases in a glucose-dependent manner: insulin rises when blood glucose is elevated, but GLP-1R activation causes minimal insulin release when glucose is normal. This glucose-dependency is the key safety feature that distinguishes GLP-1 agonists from older diabetes drugs that could cause dangerous hypoglycemia regardless of blood glucose levels.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">Hypothalamic Appetite Suppression</h3>
              <p className="text-gray-600 text-sm leading-relaxed">The most clinically significant weight-loss mechanism of GLP-1 agonists operates in the brain, not the gut. GLP-1 receptors in the arcuate nucleus of the hypothalamus — the brain&apos;s primary hunger and satiety control center — respond to GLP-1 activation by increasing signals through POMC/CART neurons (satiety neurons) and decreasing signals through AgRP/NPY neurons (hunger neurons). This rewires the brain&apos;s hunger setpoint. Users consistently report that food simply becomes less appealing, not that they are fighting hunger with willpower. The hypothalamic mechanism also reduces cravings specifically for high-fat, high-sugar foods — the &quot;food noise&quot; reduction that GLP-1 users frequently describe. This is categorically different from stimulant-based appetite suppressants (like phentermine), which work through adrenergic pathways and cause tolerance, rebound hunger, cardiovascular stress, and anxiety.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">Gastric Emptying Slowdown</h3>
              <p className="text-gray-600 text-sm leading-relaxed">GLP-1R activation in the gastrointestinal tract slows gastric emptying — the rate at which the stomach empties its contents into the small intestine. This effect produces the sensation of fullness for hours after a smaller meal, since food lingers in the stomach longer. It also reduces post-meal glucose spikes by slowing carbohydrate absorption. The gastric emptying effect is dose-dependent and is the primary driver of GI side effects (nausea, bloating, delayed digestion). Eating slowly, choosing smaller portions, and avoiding high-fat meals while titrating all help minimize this side effect as the body adapts.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">Cardiovascular Benefits</h3>
              <p className="text-gray-600 text-sm leading-relaxed">GLP-1 agonists have demonstrated remarkable cardiovascular benefits in major outcome trials — going far beyond metabolic effects. The LEADER trial (semaglutide) and SURPASS-CVOT trial (tirzepatide) showed significant reductions in major adverse cardiovascular events (MACE): heart attack, stroke, and cardiovascular death. GLP-1R activation in cardiac tissue directly reduces inflammation, improves endothelial function, reduces blood pressure, and decreases arterial stiffness. These cardiovascular benefits appear to be partially independent of weight loss — GLP-1 agonists may directly protect cardiac tissue through receptor-mediated signaling.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-purple-400 font-black text-lg mb-3">Brain Reward Pathway Effects</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Perhaps the most interesting emerging research on GLP-1 agonists involves the dopaminergic reward system. GLP-1 receptors exist in the ventral tegmental area (VTA) and nucleus accumbens — core components of the brain&apos;s reward circuitry. Activation of these receptors modulates the dopamine response to food cues, reducing the &quot;reward value&quot; of high-calorie food. Emerging research suggests this mechanism may extend to alcohol and nicotine reward, explaining anecdotal reports of reduced cravings for alcohol and addictive behaviors. This is why GLP-1 agonists feel fundamentally different from all prior weight-loss approaches: they change the brain&apos;s motivation to eat rather than requiring conscious willpower to resist eating.</p>
              <div className="bg-purple-500/8 border border-purple-500/20 rounded-lg p-3">
                <p className="text-purple-700 text-xs font-bold mb-1">Why This Matters vs Stimulant Suppressants</p>
                <p className="text-gray-500 text-xs">Stimulants (phentermine, amphetamines) suppress appetite by flooding the brain with norepinephrine — essentially a stress response that happens to reduce hunger. This causes tolerance within weeks, rebound appetite when stopped, cardiovascular strain, and anxiety. GLP-1 agonists work through entirely different biology — no tolerance to the appetitive effects has been observed, no cardiovascular stress, and no anxiety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Head-to-Head Breakdown</h2>
          <p className="text-gray-500 mb-10">Mechanism, results, side effects, and best-fit use case for each peptide.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {peptides.map((p) => (
              <div key={p.name} className={`glass-card p-6 border-t-2 ${p.color === 'blue' ? 'border-blue-500' : p.color === 'emerald' ? 'border-emerald-500' : 'border-purple-500'}`}>
                <div className={`text-xs font-bold tracking-widest mb-1 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'emerald' ? 'text-emerald-400' : 'text-purple-400'}`}>{p.mechanism}</div>
                <h3 className="text-gray-900 font-black text-xl mb-1">{p.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{p.brand}</p>

                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Weight loss</span><span className="text-gray-900 font-semibold">{p.weightLoss}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Muscle loss</span><span className="text-gray-900 font-semibold">{p.muscleLoss}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Dosing start</span><span className="text-gray-900 font-semibold text-xs">{p.dosing.split('→')[0].trim()}</span></div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Pros</p>
                  <ul className="space-y-1">
                    {p.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-gray-600 text-xs">
                        <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-emerald-400" /> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wider">Cons</p>
                  <ul className="space-y-1">
                    {p.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-gray-500 text-xs">
                        <XCircle className="w-3 h-3 shrink-0 mt-0.5 text-red-400/70" /> {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500 mb-1">Best for</p>
                  <p className="text-gray-900 text-xs font-semibold">{p.bestFor}</p>
                </div>

                <Link href={`/products/${p.slug}`} className="block text-center text-xs font-semibold py-2 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-white/30 transition-colors">
                  View {p.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NEW: CALCULATOR === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">GLP-1 Weight Loss Calculator</h2>
          <p className="text-gray-500 max-w-2xl">Enter your current weight, choose a peptide, and set your timeline to see your expected weight loss range based on clinical trial data.</p>
        </div>
        <GlpWeightLossCalculator />
      </section>

      {/* Comparison table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Quick Comparison Table</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Factor</th>
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
                    <td className="py-3 px-4 text-gray-500 font-semibold">{factor}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{sema}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{tirz}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{reta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* === NEW: TITRATION SCHEDULES === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Titration Schedule: All Three Peptides</h2>
        <p className="text-gray-500 mb-10 max-w-3xl">Titrating slowly is not optional — it is the primary strategy for minimizing GI side effects and improving long-term tolerability. Never rush to a higher dose to accelerate results; GI side effects at high doses frequently cause protocol discontinuation.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Semaglutide */}
          <div className="glass-card p-6 border-t-2 border-blue-500">
            <h3 className="text-blue-400 font-black text-xl mb-5">Semaglutide</h3>
            <div className="space-y-3">
              {[
                { weeks: 'Weeks 1–4', dose: '0.25mg/week', note: 'Starting dose. Mild nausea and appetite suppression begins. Most users tolerate this well. Eat slowly, avoid large meals.', sideEffects: 'Mild nausea, reduced appetite', severity: 'low' },
                { weeks: 'Weeks 5–8', dose: '0.5mg/week', note: 'First meaningful fat loss typically appears here. GI symptoms may increase transiently after dose increase. Protein intake becomes critical.', sideEffects: 'Nausea, possible constipation', severity: 'moderate' },
                { weeks: 'Weeks 9–12', dose: '1mg/week', note: 'Body weight reduction often 5–8% at this point. Hunger is substantially suppressed. Sleep may be slightly disrupted by GI symptoms initially.', sideEffects: 'Nausea, bloating, reflux possible', severity: 'moderate' },
                { weeks: 'Weeks 13+', dose: '2mg/week', note: 'Maximum research dose for most users. At this dose, fat loss is accelerating but GI tolerance must be well-established before advancing.', sideEffects: 'Most GI symptoms peak here', severity: 'high' },
              ].map((tier) => (
                <div key={tier.weeks} className={`rounded-xl p-4 border ${tier.severity === 'low' ? 'bg-blue-500/5 border-blue-500/20' : tier.severity === 'moderate' ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-900 font-bold text-xs">{tier.weeks}</span>
                    <span className="text-blue-400 font-black text-sm">{tier.dose}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-1">{tier.note}</p>
                  <p className={`text-xs font-semibold ${tier.severity === 'low' ? 'text-emerald-400' : tier.severity === 'moderate' ? 'text-yellow-400' : 'text-red-400'}`}>{tier.sideEffects}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tirzepatide */}
          <div className="glass-card p-6 border-t-2 border-emerald-500">
            <h3 className="text-emerald-400 font-black text-xl mb-5">Tirzepatide</h3>
            <div className="space-y-3">
              {[
                { weeks: 'Weeks 1–4', dose: '2.5mg/week', note: 'Lower nausea burden than semaglutide at start. The dual GIP mechanism tends to be well tolerated at this dose. Appetite reduction is noticeable.', sideEffects: 'Mild nausea, fatigue', severity: 'low' },
                { weeks: 'Weeks 5–8', dose: '5mg/week', note: 'Clear fat loss beginning. GI side effects may increase. Taking injection at night before bed reduces daytime nausea for most users.', sideEffects: 'Nausea, diarrhea possible', severity: 'moderate' },
                { weeks: 'Weeks 9–12', dose: '7.5mg/week', note: 'Substantial body composition changes visible. Some users experience heartburn/reflux at this dose — elevating head of bed can help.', sideEffects: 'Nausea, constipation, reflux', severity: 'moderate' },
                { weeks: 'Weeks 13+', dose: '10–15mg/week', note: 'Maximum efficacy zone. 15mg/week produces the highest fat loss in trials (20–22% body weight). GI tolerance must be fully established.', sideEffects: 'All GI symptoms possible', severity: 'high' },
              ].map((tier) => (
                <div key={tier.weeks} className={`rounded-xl p-4 border ${tier.severity === 'low' ? 'bg-emerald-500/5 border-emerald-500/20' : tier.severity === 'moderate' ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-900 font-bold text-xs">{tier.weeks}</span>
                    <span className="text-emerald-400 font-black text-sm">{tier.dose}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-1">{tier.note}</p>
                  <p className={`text-xs font-semibold ${tier.severity === 'low' ? 'text-emerald-400' : tier.severity === 'moderate' ? 'text-yellow-400' : 'text-red-400'}`}>{tier.sideEffects}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Retatrutide */}
          <div className="glass-card p-6 border-t-2 border-purple-500">
            <h3 className="text-purple-400 font-black text-xl mb-5">Retatrutide</h3>
            <div className="space-y-3">
              {[
                { weeks: 'Weeks 1–4', dose: '2mg/week', note: 'Starting dose is lower than tirzepatide. The triple agonist mechanism requires careful titration. Heart rate may increase slightly — monitor if you have cardiac history.', sideEffects: 'Nausea, slight HR increase', severity: 'low' },
                { weeks: 'Weeks 5–8', dose: '4mg/week', note: 'Thermogenic effects of glucagon component become more apparent — some users feel warmer and have higher resting energy expenditure. Fat loss accelerating.', sideEffects: 'Nausea, diarrhea, fatigue', severity: 'moderate' },
                { weeks: 'Weeks 9–12', dose: '6mg/week', note: 'Body weight reduction 10–15% by this stage for many users. GI burden is the highest of the three agents at equivalent relative doses. Take at night, avoid fatty meals.', sideEffects: 'Higher GI burden, possible HR elevation', severity: 'high' },
                { weeks: 'Weeks 13+', dose: '8–12mg/week', note: 'Maximum protocol dose. Reserved for experienced users with established tolerance. This dose range produces the highest fat loss of any GLP agent in trials.', sideEffects: 'All GI symptoms, monitor HR', severity: 'high' },
              ].map((tier) => (
                <div key={tier.weeks} className={`rounded-xl p-4 border ${tier.severity === 'low' ? 'bg-purple-500/5 border-purple-500/20' : tier.severity === 'moderate' ? 'bg-yellow-500/5 border-yellow-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-gray-900 font-bold text-xs">{tier.weeks}</span>
                    <span className="text-purple-400 font-black text-sm">{tier.dose}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-1">{tier.note}</p>
                  <p className={`text-xs font-semibold ${tier.severity === 'low' ? 'text-emerald-400' : tier.severity === 'moderate' ? 'text-yellow-400' : 'text-red-400'}`}>{tier.sideEffects}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GI Management Tips */}
        <div className="mt-8 glass-card p-6">
          <h3 className="text-gray-900 font-black text-lg mb-4">GI Side Effect Management During Titration</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { tip: 'Inject at night before bed', reason: 'Sleeping through peak GI effects dramatically reduces perceived nausea for most users' },
              { tip: 'Eat smaller, more frequent meals', reason: 'Gastric emptying is slowed — large meals cause significant distension and nausea' },
              { tip: 'Avoid high-fat meals within 2 hours', reason: 'Fat dramatically slows gastric emptying further, compounding nausea' },
              { tip: 'Chew food thoroughly', reason: 'Reduces gastric burden and slows eating pace naturally' },
              { tip: 'Stay well hydrated', reason: 'Constipation (from slowed GI motility) is prevented by adequate fluid intake' },
              { tip: 'Never rush titration', reason: 'GI tolerance develops with time — staying at each dose 4 weeks before increasing is non-negotiable' },
            ].map((item) => (
              <div key={item.tip} className="bg-slate-800/40 rounded-xl p-4">
                <p className="text-gray-900 font-bold text-sm mb-1">{item.tip}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NEW: SIDE EFFECT MANAGEMENT GUIDE === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-7 h-7 text-emerald-400" />
            <h2 className="text-3xl font-black text-gray-900">Side Effect Management Guide</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">Most GLP-1 side effects are manageable and predictable. The users who successfully complete protocols are the ones who understand what causes each side effect and how to address it proactively.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-6">
              <h3 className="text-emerald-400 font-black text-lg mb-4">Nausea: The Primary Challenge</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Nausea is caused by gastric emptying slowdown — food sits in the stomach longer than normal, creating pressure and irritation. It is most pronounced when eating too much, eating too fast, or eating fatty/rich foods. Key strategies:</p>
              <ul className="space-y-2">
                {[
                  'Eat at 60–70% of your normal meal size',
                  'Slow your eating pace to 20+ minutes per meal',
                  'Avoid spicy, greasy, or very rich foods',
                  'Inject at night — most side effects occur during sleep',
                  'Ginger tea or ginger chews can reduce acute nausea',
                  'Never increase dose when experiencing significant nausea',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-gray-500 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-emerald-400 font-black text-lg mb-4">Protein Intake: Non-Negotiable</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">GLP-1 agonists reduce total caloric intake — but they do not discriminate between fat loss and muscle loss. Without adequate protein, a significant portion of the weight lost will be lean mass. Minimum requirements:</p>
              <ul className="space-y-2">
                {[
                  'Minimum 1g protein per lb of lean body mass',
                  'Prioritize protein at every meal — eat protein first',
                  'Greek yogurt, cottage cheese, eggs, and protein shakes are easy high-protein options when appetite is low',
                  'Use protein tracking for at least the first 4–6 weeks',
                  'Leucine-rich proteins (whey, meat) most effective for muscle protein synthesis',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-gray-500 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-emerald-400 font-black text-lg mb-4">Hair Loss Prevention</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Telogen effluvium — temporary hair shedding related to rapid weight loss and caloric restriction — affects a subset of GLP-1 users, typically 3–6 months into a protocol. It is not caused by the peptide directly but by the physiological stress of rapid weight loss. Prevention strategies:</p>
              <ul className="space-y-2">
                {[
                  'Zinc 25–50mg/day (deficiency accelerates hair loss)',
                  'Biotin 5–10mg/day (supports keratin synthesis)',
                  'Adequate total caloric intake — extreme deficits increase risk',
                  'Iron levels — ensure iron is not deficient (get tested)',
                  'Slower rate of weight loss reduces telogen effluvium risk',
                  'Hair shedding is temporary — regrowth typically occurs within 3–6 months',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-gray-500 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-emerald-400 font-black text-lg mb-4">Muscle Preservation Protocol</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">Lean mass loss is preventable with the right protocol. This is the most impactful thing you can do alongside GLP-1 therapy for long-term body composition outcomes:</p>
              <ul className="space-y-2">
                {[
                  'Resistance training 3–4x per week — non-negotiable for preservation',
                  'Progressive overload: maintain training intensity even as weight drops',
                  'Compound movements (squat, deadlift, press, row) most efficient for mass preservation',
                  'Consider CJC-1295/Ipamorelin stack for GH-mediated muscle preservation',
                  'Creatine monohydrate 3–5g/day — well-evidenced for lean mass preservation',
                  'Track body fat %, not just scale weight — success is fat loss with muscle retention',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-gray-500 text-xs">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === NEW: GLP + GH RECOMP STACK === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-7 h-7 text-purple-400" />
          <h2 className="text-3xl font-black text-gray-900">GLP-1 + GH Peptide Recomp Stack</h2>
        </div>
        <p className="text-gray-500 mb-8 max-w-3xl">Combining GLP-1 agonists with CJC-1295/Ipamorelin creates what many consider the most effective body recomposition protocol available — addressing both sides of the equation simultaneously.</p>

        <div className="glass-card p-8 mb-6">
          <h3 className="text-gray-900 font-black text-xl mb-4">The Ultimate Body Recomp Protocol</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                GLP-1 peptides and GH secretagogues operate on completely different biological axes. GLP-1 agonists reduce caloric intake through appetite suppression, slow gastric emptying, and improve insulin sensitivity — producing significant fat loss. Their weakness is lean mass loss risk during aggressive caloric deficits.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                CJC-1295/Ipamorelin directly counters this by elevating GH and IGF-1, which are the primary hormonal signals for muscle protein synthesis and lean mass preservation. Elevated GH also enhances lipolysis (fat burning) — adding to the fat loss effect of the GLP-1 agent. The combination produces simultaneous fat loss and muscle preservation that neither protocol achieves as effectively alone.
              </p>
            </div>
            <div>
              <div className="bg-slate-800/50 rounded-xl p-5 h-full">
                <p className="text-purple-400 font-bold text-sm mb-4">Mechanism Comparison</p>
                {[
                  { label: 'Fat loss (GLP-1 only)', pct: 60, color: 'bg-blue-500' },
                  { label: 'Muscle preservation (CJC/Ipa)', pct: 75, color: 'bg-emerald-500' },
                  { label: 'Fat loss (combined)', pct: 85, color: 'bg-purple-500' },
                  { label: 'Muscle preservation (combined)', pct: 95, color: 'bg-gradient-to-r from-purple-500 to-emerald-400' },
                ].map((bar) => (
                  <div key={bar.label} className="mb-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{bar.label}</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.pct}%` }} />
                    </div>
                  </div>
                ))}
                <p className="text-gray-500 text-xs mt-3 italic">Relative scores — illustrative, not absolute clinical data.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800/40 rounded-xl p-5">
              <p className="text-purple-400 font-bold text-sm mb-2">GLP-1 Component</p>
              <p className="text-gray-600 text-xs leading-relaxed">Semaglutide 0.25–1mg/week, tirzepatide 2.5–10mg/week, or retatrutide per titration schedule. Inject once weekly on a consistent day.</p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-5">
              <p className="text-blue-400 font-bold text-sm mb-2">CJC/Ipamorelin Component</p>
              <p className="text-gray-600 text-xs leading-relaxed">CJC-1295 (no DAC) 100–200mcg + Ipamorelin 200–300mcg subcutaneous, before bed, 5 nights/week. Fast 2–3 hours before injection.</p>
            </div>
            <div className="bg-slate-800/40 rounded-xl p-5">
              <p className="text-emerald-400 font-bold text-sm mb-2">Timing Considerations</p>
              <p className="text-gray-600 text-xs leading-relaxed">GLP-1 weekly injection and CJC/Ipa nightly injection can be on the same day — use different injection sites. No interaction between the two.</p>
            </div>
          </div>

          <div className="border border-purple-500/20 bg-purple-500/5 rounded-xl p-5">
            <p className="text-purple-700 font-bold mb-2">Expected Outcomes vs Either Alone</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-500 text-xs font-semibold mb-1">GLP-1 Only</p>
                <p className="text-gray-600 text-xs">15–25% body weight lost. 30–40% of that may be lean mass. Net fat loss excellent; body composition mixed without active muscle preservation.</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-semibold mb-1">CJC/Ipa Only</p>
                <p className="text-gray-600 text-xs">Gradual fat loss (5–10% body fat at 6 months) with concurrent muscle gain. Slower total weight loss but superior body composition changes.</p>
              </div>
              <div>
                <p className="text-purple-700 text-xs font-semibold mb-1">Combined Stack</p>
                <p className="text-gray-600 text-xs">Rapid fat loss from GLP-1 with muscle preservation from elevated GH/IGF-1. True recomposition: lose fat, maintain or gain muscle simultaneously. Optimal outcome for most users.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack tip */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <h2 className="text-xl font-black text-gray-900 mb-3">The Advanced Play: Stack GLP + GH Peptides</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
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
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">GLP Peptide FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-purple-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Shop GLP Peptides</h2>
          <p className="text-gray-500 mb-6">COA-verified semaglutide, tirzepatide, and retatrutide. US domestic shipping.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View All GLP Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/body-composition" className="btn-secondary px-8 py-4">Body Composition Guide</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/semaglutide-vs-tirzepatide-vs-retatrutide" />
    </div>
  );
}
