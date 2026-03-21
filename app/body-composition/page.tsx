import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Moon, Flame, BarChart3, Scale, Activity } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Body Composition Peptides | CJC-1295, Ipamorelin, IGF-1 LR3 & GLP Peptides | BPC-157 Stack',
  description: 'The complete body recomposition peptide guide. CJC-1295 + Ipamorelin, IGF-1 LR3, MOTS-c, and GLP peptides for fat loss, lean muscle, and GH optimization. Evidence-based protocols.',
  keywords: 'body composition peptides, CJC-1295 Ipamorelin, IGF-1 LR3 muscle, MOTS-c fat loss, semaglutide, tirzepatide, peptide fat burning',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const ghPulseSteps = [
  { num: '01', title: 'CJC-1295 Primes the Pituitary', color: 'blue', desc: 'CJC-1295 (no-DAC) is a GHRH analog — it binds GHRH receptors on somatotroph cells in the pituitary, priming them to release GH. Without this step, subsequent GHRP stimulus is significantly weaker.' },
  { num: '02', title: 'Ipamorelin Triggers the Pulse', color: 'emerald', desc: 'Ipamorelin (a GHRP) binds ghrelin receptors and triggers the pituitary to fire a GH pulse. The key advantage: it does not increase cortisol, prolactin, or ACTH — making it the cleanest GHRP available.' },
  { num: '03', title: 'Synergistic Amplification', color: 'neon', desc: 'When both are dosed together, GH output is 8–10× greater than either alone. The GHRH priming + GHRP trigger mechanism mirrors the natural hypothalamic-pituitary GH axis.' },
  { num: '04', title: 'GH Drives Body Recomp', color: 'purple', desc: 'The GH pulse stimulates IGF-1 production in the liver, which drives muscle protein synthesis and fat oxidation simultaneously — the "holy grail" of body recomposition.' },
];

const peptideProfiles = [
  {
    name: 'CJC-1295/Ipamorelin',
    type: 'GH Stack',
    color: 'blue',
    emoji: '💉',
    mechanism: 'GHRH + GHRP synergy — amplified natural GH pulses during deep sleep',
    benefits: ['8–10× GH output vs. either alone', 'Improved sleep quality within 1–2 weeks', 'Progressive fat loss over 8–12 weeks', 'Lean muscle preservation and growth'],
    ideal: 'Best starter stack for anyone wanting GH-related benefits without actual HGH',
    dose: '100mcg/100mcg SC nightly',
  },
  {
    name: 'IGF-1 LR3',
    type: 'Muscle Growth',
    color: 'emerald',
    emoji: '🔬',
    mechanism: 'Direct IGF-1 receptor agonist — bypasses GH axis for direct anabolic stimulus',
    benefits: ['Hyperplasia (new muscle cell creation)', 'Anti-catabolic during cuts', 'Rapid muscle fiber expansion', 'Enhanced nutrient partitioning'],
    ideal: 'Best for experienced users seeking accelerated muscle growth beyond GH-based approaches',
    dose: '20–40mcg post-workout or on rising',
  },
  {
    name: 'MOTS-c',
    type: 'Metabolic',
    color: 'amber',
    emoji: '⚡',
    mechanism: 'Mitochondrial-derived AMPK activator — the same pathway triggered by caloric restriction and exercise',
    benefits: ['Activates AMPK (metabolic master switch)', 'Improves insulin sensitivity significantly', 'Mimics exercise at the cellular level', 'Protective against obesity and diabetes'],
    ideal: 'Best for metabolic optimization — particularly with insulin resistance or plateau breaking',
    dose: '5–10mg SC 2–3× per week',
  },
  {
    name: 'Semaglutide (GLP-1)',
    type: 'Weight Loss',
    color: 'rose',
    emoji: '🎯',
    mechanism: 'GLP-1 receptor agonist — suppresses appetite via hypothalamic signaling and slows gastric emptying',
    benefits: ['15–20% body weight loss in clinical trials', 'Significant cardiovascular risk reduction', 'Blood sugar regulation', 'Sustained appetite suppression'],
    ideal: 'Best for significant weight loss goals — the same mechanism as Ozempic/Wegovy',
    dose: '0.25mg/week, titrate to 2.4mg',
  },
];

const recompTimeline = [
  { week: 'Weeks 1–2', title: 'Adaptation Phase', desc: 'Sleep quality improves dramatically. GH pulses intensify. Water retention may increase temporarily as lean tissue grows. Energy levels elevate.' },
  { week: 'Weeks 3–4', title: 'Body Composition Shift', desc: 'Fat loss begins — particularly subcutaneous fat around midsection. Strength increases. Muscle fullness and pump improve markedly.' },
  { week: 'Weeks 5–8', title: 'Peak Recomp Window', desc: 'The most significant changes occur in this window. Visible recomposition is clear — leaner waist, fuller muscle bellies, improved vascularity at lower body fat.' },
  { week: 'Weeks 9–12', title: 'Consolidation Phase', desc: 'Lean mass continues building. Fat loss maintains its pace. Many users report 1–2% body fat reduction total with 2–5lbs lean mass gained in a single 12-week cycle.' },
  { week: 'Week 12+', title: 'Maintenance or Cycle', desc: 'Take 4–8 week break or continue with lower maintenance dose. Results are largely permanent — muscle cells added via IGF-1 LR3 do not disappear. Fat cells that were oxidized are gone.' },
];

const vsHGH = [
  { feature: 'Cost', gh: '$600–1,500/month for pharma HGH', peptide: '$80–200/month for CJC/Ipa stack' },
  { feature: 'Administration', gh: 'Daily injection required', peptide: 'Nightly injection (5 min before sleep)' },
  { feature: 'Axis Suppression', gh: 'Suppresses natural GH production', peptide: 'Works WITH natural GH axis — no suppression' },
  { feature: 'Side Effect Profile', gh: 'Carpal tunnel, joint pain, potential HGH gut', peptide: 'Extremely minimal — mild water retention only' },
  { feature: 'Water Retention', gh: 'Significant — face and hands', peptide: 'Mild to moderate, resolves in weeks' },
  { feature: 'IGF-1 Elevation', gh: 'Direct — significant elevation', peptide: 'Indirect via natural GH pulses — more physiological' },
  { feature: 'Legal Status', gh: 'Prescription only', peptide: 'No prescription required' },
];

export default function BodyCompositionPage() {
  const products = getProductsByCategory('Body Composition');

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #060e1a 40%, #060610 100%)' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-semibold tracking-wide">BODY RECOMPOSITION PROTOCOLS</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
                Burn Fat.<br />
                Build Muscle.<br />
                <span className="text-blue-400">Simultaneously.</span>
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                The peptide approach to body recomposition is the closest thing available to &quot;cheat codes&quot;
                for physique — GH optimization, direct anabolic signaling, and metabolic acceleration
                that compounds over 12 weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2">
                  Shop <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/body-recomp" className="btn-secondary text-base px-8 py-4">
                  Full Recomp Protocol
                </Link>
              </div>
            </div>

            {/* What to expect */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🔥', title: 'Fat Oxidation', stat: '2–4× increase', sub: 'vs. diet alone' },
                { emoji: '💪', title: 'Lean Muscle', stat: '2–5 lbs', sub: 'per 12-week cycle' },
                { emoji: '😴', title: 'Sleep Quality', stat: 'Weeks 1–2', sub: 'measurable improvement' },
                { emoji: '⚡', title: 'Energy', stat: 'Week 2+', sub: 'significant increase' },
                { emoji: '📉', title: 'Body Fat', stat: '1–3%', sub: 'reduction per cycle' },
                { emoji: '💉', title: 'vs. HGH Cost', stat: '90% less', sub: 'comparable results' },
              ].map((stat) => (
                <div key={stat.title} className="glass-card p-4 text-center">
                  <div className="text-3xl mb-1">{stat.emoji}</div>
                  <div className="text-blue-400 font-black">{stat.stat}</div>
                  <div className="text-white text-sm font-semibold">{stat.title}</div>
                  <div className="text-slate-500 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How GH Peptide Stacking Works */}
      <section className="py-16" style={{ background: 'rgba(59, 130, 246, 0.03)', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">How the GH Peptide Stack Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              CJC-1295 + Ipamorelin work in a 2-step mechanism that mirrors and amplifies
              the body&apos;s own growth hormone regulation system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ghPulseSteps.map((step) => (
              <div key={step.num} className="relative glass-card p-6">
                <div className="text-4xl font-black text-blue-500/20 mb-3">{step.num}</div>
                <h3 className="text-white font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                {step.num !== '04' && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500/40 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peptide Profiles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">Body Composition Peptide Profiles</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Different peptides for different goals. Start with the stack that matches your primary objective.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {peptideProfiles.map((p) => (
            <div key={p.name} className="glass-card p-7 hover:border-blue-500/30 transition-colors group">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{p.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-black text-xl">{p.name}</h3>
                    <span className="text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">{p.type}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{p.mechanism}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.06)', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                    <div className="text-blue-400 text-xs font-semibold mb-1">DOSE GUIDE</div>
                    <div className="text-white text-sm font-mono">{p.dose}</div>
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">{p.ideal}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12-Week Timeline */}
      <section className="py-16" style={{ background: 'rgba(6, 6, 16, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">The 12-Week Recomp Timeline</h2>
            <p className="text-slate-400 max-w-xl mx-auto">What to expect week by week on the CJC-1295/Ipamorelin + IGF-1 LR3 stack.</p>
          </div>
          <div className="relative">
            {/* Progress bar */}
            <div className="hidden md:block h-1 bg-gradient-to-r from-blue-500/20 via-blue-500/60 to-blue-500/20 rounded-full mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {recompTimeline.map((phase, i) => (
                <div key={phase.week} className="glass-card p-5">
                  <div className="text-blue-400 font-bold text-xs mb-2 font-mono">{phase.week}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{phase.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peptides vs HGH Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3 text-center">GH Peptides vs. Actual HGH</h2>
        <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
          Why most experts recommend starting with GH peptides before considering pharmaceutical HGH.
        </p>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(59, 130, 246, 0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Feature</th>
                <th className="text-center py-4 px-5 text-slate-500 font-semibold">Pharmaceutical HGH</th>
                <th className="text-center py-4 px-5 text-blue-400 font-bold">GH Peptide Stack</th>
              </tr>
            </thead>
            <tbody>
              {vsHGH.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-slate-300 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-center text-slate-500">{row.gh}</td>
                  <td className="py-3 px-5 text-center text-blue-300">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* GLP Weight Loss Section */}
      <section className="py-16" style={{ background: 'rgba(244, 63, 94, 0.03)', borderTop: '1px solid rgba(244, 63, 94, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1.5 mb-4">
                <Scale className="w-4 h-4 text-rose-400" />
                <span className="text-rose-400 text-sm font-semibold">GLP WEIGHT LOSS PEPTIDES</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                The GLP-1 Revolution:<br />
                <span className="text-rose-400">Sema, Tirz & Reta</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                GLP-1 receptor agonists like Semaglutide are the most effective weight loss compounds
                ever studied — producing 15–22% body weight reduction in clinical trials. The research
                peptide versions (Semaglutide, Tirzepatide, Retatrutide) work via identical mechanisms
                at a fraction of pharmaceutical pricing.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <span className="text-rose-400 text-xs font-bold">S</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Semaglutide (GLP-1) — 15% avg weight loss</div>
                    <div className="text-slate-400 text-xs">GLP-1 receptor agonist — same as Ozempic/Wegovy</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <span className="text-rose-400 text-xs font-bold">T</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Tirzepatide (GIP/GLP-1) — 21% avg weight loss</div>
                    <div className="text-slate-400 text-xs">Dual agonist — same as Mounjaro/Zepbound — more potent</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                    <span className="text-rose-400 text-xs font-bold">R</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Retatrutide (GIP/GLP-1/Glucagon) — 24% weight loss</div>
                    <div className="text-slate-400 text-xs">Triple agonist — the most powerful in the class, Phase III trials</div>
                  </div>
                </div>
              </div>
              <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                className="btn-cta text-sm px-6 py-3 flex items-center gap-2 inline-flex">
                Shop <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-4">GLP Peptide Clinical Results</h3>
              <div className="space-y-5">
                {[
                  { name: 'Semaglutide', loss: 15, color: 'rose', trial: 'STEP-1 Trial (n=1961)' },
                  { name: 'Tirzepatide', loss: 21, color: 'orange', trial: 'SURMOUNT-1 Trial (n=2539)' },
                  { name: 'Retatrutide', loss: 24, color: 'red', trial: 'Phase II Trial (n=338)' },
                  { name: 'Cagrisema', loss: 25, color: 'purple', trial: 'REDEFINE-1 Trial (n=3400)' },
                ].map((drug) => (
                  <div key={drug.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-white font-semibold">{drug.name}</span>
                      <span className="text-rose-400 font-bold">{drug.loss}% weight loss</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full"
                        style={{ width: `${drug.loss * 4}%` }}
                      />
                    </div>
                    <div className="text-slate-600 text-xs mt-1">{drug.trial}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-white">Body Composition Peptides</h2>
            <p className="text-slate-400 mt-1">GH peptides, metabolic activators, and GLP weight loss compounds</p>
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

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(59, 130, 246, 0.03)', borderTop: '1px solid rgba(59, 130, 246, 0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Body Composition FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do CJC-1295 and Ipamorelin affect natural testosterone or hormones?',
                a: 'No. GH peptides work exclusively on the growth hormone axis (hypothalamus → pituitary → GH release). They do not affect testosterone, LH, FSH, estrogen, cortisol, or prolactin. No PCT is required after a GH peptide cycle.'
              },
              {
                q: 'When is the best time to inject CJC-1295 + Ipamorelin?',
                a: 'The most effective window is 30–60 minutes before sleep. The largest natural GH pulse occurs during the first wave of deep sleep. Dosing beforehand amplifies this pulse dramatically. Second-best is first thing in the morning in a fasted state.'
              },
              {
                q: 'How does IGF-1 LR3 differ from regular IGF-1?',
                a: 'IGF-1 LR3 has a modified arginine-3 substitution that prevents binding to IGF binding proteins (IGFBPs). This extends its half-life from ~10 minutes (native IGF-1) to 20–30 hours, dramatically increasing bioavailability and anabolic duration.'
              },
              {
                q: 'Can I stack CJC-1295/Ipamorelin with IGF-1 LR3?',
                a: 'Yes — this is actually the most effective body composition stack. Dose CJC/Ipa at night before sleep for GH pulse amplification. Dose IGF-1 LR3 post-workout or upon waking for direct anabolic signaling. The two pathways are complementary.'
              },
              {
                q: 'What is the difference between Semaglutide and Tirzepatide?',
                a: 'Semaglutide is a GLP-1 receptor agonist only. Tirzepatide is a dual GIP/GLP-1 agonist — hitting both incretin receptors. The added GIP mechanism significantly enhances fat burning and produces ~6% greater weight loss on average. Retatrutide adds glucagon agonism for the strongest effect in the class.'
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{faq.q}</span>
                  <span className="text-blue-400 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🔥</div>
              <h2 className="text-3xl font-black text-white mb-4">
                Start Your Recomp Protocol Today
              </h2>
              <p className="text-slate-300 text-lg mb-2 max-w-xl mx-auto">
                CJC-1295, Ipamorelin, IGF-1 LR3, and GLP peptides from Apollo Peptide Sciences.
              </p>
              <p className="text-slate-500 text-sm mb-8">COA verified · US domestic · Fast shipping</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  Shop <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/body-recomp" className="btn-secondary text-base px-8 py-4">
                  View Full Recomp Stack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/body-composition" />
    </div>
  );
}
