import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp, Zap, Moon, Flame, BarChart3, Scale, Activity } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';
import BodyRecompCalculator from '@/components/BodyRecompCalculator';

export const metadata: Metadata = {
  title: 'Body Composition Peptides | CJC-1295, Ipamorelin, IGF-1 LR3 & GLP Peptides | BPC-157 Stack',
  description: 'The complete body recomposition peptide guide. CJC-1295 + Ipamorelin, IGF-1 LR3, MOTS-c, and GLP peptides for fat loss, lean muscle, and GH optimization. Evidence-based protocols.',
  keywords: 'body composition peptides, CJC-1295 Ipamorelin, IGF-1 LR3 muscle, MOTS-c fat loss, semaglutide, tirzepatide, peptide fat burning',
  openGraph: {
    title: 'Body Composition Peptides | CJC-1295, Ipamorelin, IGF-1 LR3 & GLP Peptides',
    description: 'CJC-1295 + Ipamorelin, IGF-1 LR3, MOTS-c, and GLP peptides for fat loss, lean muscle, and GH optimization.',
    type: 'article',
    url: 'https://bp157stack.com/body-composition',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Composition Peptides | CJC-1295, Ipamorelin & GLP Peptides',
    description: 'Burn fat and build muscle with the most effective body recomposition peptide protocols.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

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
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 text-sm font-semibold tracking-wide">BODY RECOMPOSITION PROTOCOLS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Burn Fat.<br />
                Build Muscle.<br />
                <span className="text-blue-600">Simultaneously.</span>
              </h1>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                The peptide approach to body recomposition is the closest thing available to &quot;cheat codes&quot;
                for physique — GH optimization, direct anabolic signaling, and metabolic acceleration
                that compounds over 12 weeks.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
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
                  <div className="text-blue-600 font-black">{stat.stat}</div>
                  <div className="text-gray-900 text-sm font-semibold">{stat.title}</div>
                  <div className="text-gray-600 text-xs">{stat.sub}</div>
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
            <h2 className="text-3xl font-black text-gray-900 mb-3">How the GH Peptide Stack Works</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              CJC-1295 + Ipamorelin work in a 2-step mechanism that mirrors and amplifies
              the body&apos;s own growth hormone regulation system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ghPulseSteps.map((step) => (
              <div key={step.num} className="relative glass-card p-6">
                <div className="text-4xl font-black text-blue-500/20 mb-3">{step.num}</div>
                <h3 className="text-gray-900 font-black mb-3">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                {step.num !== '04' && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-blue-500/40 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Recomp Goal Calculator */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Body Recomp Goal Calculator</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Enter your current stats and goal. Get a personalized peptide stack, protein target, and realistic timeline estimate.
          </p>
        </div>
        <BodyRecompCalculator />
      </section>

      {/* The Science of Body Recomposition */}
      <section className="py-16" style={{ background: 'rgba(59, 130, 246, 0.03)', borderTop: '1px solid rgba(59, 130, 246, 0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 mb-6">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-semibold">THE SCIENCE</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">The Science of Body Recomposition</h2>

          <div className="prose-style space-y-6 text-gray-800 leading-relaxed">
            <p>
              Natural body recomposition — losing fat and gaining muscle at the same time — is extraordinarily difficult under normal physiological conditions. The reason comes down to a fundamental conflict between anabolic and catabolic signaling. Building muscle requires a caloric surplus that drives anabolic pathways (mTOR, protein synthesis). Losing fat requires a caloric deficit that triggers catabolic pathways (lipolysis, protein breakdown for energy). These signals directly oppose each other, which is why the standard advice has always been to bulk and cut in separate phases.
            </p>

            <p>
              Growth hormone peptides solve this conflict at the signaling level. When you amplify your natural GH pulse with CJC-1295 and Ipamorelin, you activate the GH/IGF-1 axis independently of caloric intake. GH is directly lipolytic — it activates hormone-sensitive lipase in adipocytes, mobilizing stored triglycerides for oxidation even during a moderate caloric surplus. Simultaneously, the IGF-1 that GH stimulates in the liver directly binds IGF-1 receptors on skeletal muscle, activating mTOR and protein synthesis without requiring the insulin spike that normally accompanies it. This is the peptide recomp mechanism: anabolic signaling and lipolysis occurring together — not because you&apos;re eating more, but because your GH axis is running at a level it hasn&apos;t seen since your 20s.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8 mb-3">IGF-1 and the Muscle Protein Synthesis Cascade</h3>
            <p>
              IGF-1 LR3, the extended half-life variant, is the downstream executor of the GH signal. Native IGF-1 has a half-life of approximately 10 minutes because it rapidly binds IGF-binding proteins (IGFBPs) that neutralize it. The arginine-3 substitution in IGF-1 LR3 prevents this IGFBP binding, extending the active half-life to 20–30 hours and allowing it to reach muscle tissue at meaningful concentrations.
            </p>
            <p>
              At the muscle cell, IGF-1 LR3 binds the IGF-1 receptor and activates the PI3K/Akt/mTOR pathway — the master regulator of muscle protein synthesis. Uniquely, IGF-1 LR3 can stimulate satellite cell proliferation and differentiation, a process called muscle hyperplasia. This is distinct from the hypertrophy (enlarging existing cells) that exercise produces. Hyperplasia is the creation of new muscle fibers — a significantly more powerful mechanism that explains why experienced users report muscle gains that would be impossible naturally.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8 mb-3">Insulin Sensitivity and Nutrient Partitioning</h3>
            <p>
              The metabolic foundation of peptide-assisted recomposition is insulin sensitivity. When GH and IGF-1 levels are optimized, insulin sensitivity at the muscle improves dramatically — meaning more glucose and amino acids are directed to muscle tissue rather than fat cells. MOTS-c enhances this effect further by activating AMPK (AMP-activated protein kinase), the metabolic master switch that mimics caloric restriction and exercise at the cellular level. The net result is a body that preferentially partitions nutrients toward muscle building and away from fat storage — even when eating at maintenance or a slight surplus.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8 mb-3">Why CJC-1295 / Ipamorelin Is Specifically Ideal</h3>
            <p>
              Not all GH-stimulating approaches are equivalent. Pharmaceutical HGH administration is continuous and non-pulsatile — it elevates GH steadily, which blunts natural GH receptor sensitivity over time and eventually suppresses endogenous production. CJC-1295 + Ipamorelin works differently: it amplifies the natural pulsatile GH secretion that the body&apos;s own hypothalamus-pituitary axis produces.
            </p>
            <p>
              Pulsatile GH secretion is physiologically critical. GH receptors in muscle, adipose tissue, and liver require periods of low GH between pulses to reset and maintain full sensitivity. By amplifying the body&apos;s own pituitary pulses rather than imposing steady-state exogenous GH, CJC-1295/Ipamorelin preserves receptor sensitivity, does not suppress endogenous production, and produces a more physiological hormonal environment. The nightly dosing aligns with the natural GH peak that occurs during slow-wave sleep — amplifying it 8–10× during the window when the body is already primed for repair and anabolism.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8 mb-3">The 12-Week Minimum Commitment</h3>
            <p>
              Body recomposition with peptides requires a minimum 12-week commitment because the changes being driven are structural. Fat oxidation takes weeks to produce visible results as millions of adipocytes reduce in size. Muscle fiber hypertrophy requires progressive mechanical stimulus and repeated protein synthesis cycles over weeks. Satellite cell proliferation (from IGF-1 LR3) and the subsequent integration of new muscle fibers takes 4–8 weeks per cycle. The hormonal environment established by consistent nightly GH pulsing builds cumulatively — the peptide&apos;s effects compound over time rather than being static.
            </p>
            <p>
              Users who judge the stack after 3–4 weeks are evaluating it at the adaptation phase. The most significant body composition changes — visible waist reduction, measurable lean mass gain, improved vascularity — occur in the 5–10 week window. This is why every serious protocol specifies 12 weeks minimum, with optimal results appearing in the 3–6 month range for advanced recomposition goals.
            </p>
          </div>
        </div>
      </section>

      {/* Training Protocol */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5 mb-6">
          <Activity className="w-4 h-4 text-emerald-600" />
          <span className="text-emerald-600 text-sm font-semibold">TRAINING PROTOCOL</span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-8">Training Protocol for Peptide-Assisted Recomp</h2>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-black text-lg mb-3">Rep Ranges That Maximize GH Response</h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Exercise-induced GH secretion peaks with moderate-to-high intensity training in the 6–12 rep range at 70–85% of 1RM. This intensity window produces the greatest metabolic stress, lactate accumulation, and subsequent GH pulse. Sets taken close to muscular failure in this rep range create the acute GH spike that synergizes with your nightly CJC-1295/Ipamorelin dose — you are essentially adding a training-induced GH pulse on top of the amplified natural sleep pulse.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { range: '4–6 reps', effect: 'Primarily strength (neural)', gh: 'Moderate GH response' },
                { range: '6–12 reps', effect: 'Hypertrophy peak', gh: 'Maximum GH response' },
                { range: '15–20 reps', effect: 'Muscular endurance', gh: 'Lower GH response' },
              ].map((r) => (
                <div key={r.range} className="rounded-xl p-4" style={{ background: r.range === '6–12 reps' ? 'rgba(16,185,129,0.08)' : 'rgba(0,0,0,0.02)', border: r.range === '6–12 reps' ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(0,0,0,0.06)' }}>
                  <div className={`font-black text-lg mb-1 ${r.range === '6–12 reps' ? 'text-emerald-600' : 'text-gray-700'}`}>{r.range}</div>
                  <div className="text-gray-900 text-xs font-semibold">{r.effect}</div>
                  <div className="text-gray-600 text-xs mt-1">{r.gh}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-black text-lg mb-3">Compound Movements for GH Secretion</h3>
            <p className="text-gray-800 text-sm leading-relaxed mb-4">
              Compound multi-joint movements involving large muscle groups produce the greatest GH response. Heavy squats and deadlifts are the most potent exercise-induced GH stimulants available — the combination of lower body mass engaged, metabolic stress, and central nervous system activation produces GH pulses that rival pharmacological doses in acute terms. This is why experienced recompers structure every session around these movements first, with isolation work added afterward.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Back squat / front squat (highest GH response)',
                'Conventional / Romanian deadlift',
                'Barbell rows and pull-ups',
                'Overhead press (standing)',
                'Leg press (high volume)',
                'Bench press (compound upper)',
              ].map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-gray-800">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-black text-lg mb-3">Training Frequency and Recovery Optimization</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              On a GH peptide protocol, recovery dramatically accelerates. Many users can handle training frequency that would overtrain them naturally. Recommended structure: 4 training days per week (upper/lower split or push/pull/legs with one repeat day), with 48–72 hours between sessions hitting the same muscle group. Rest days are not wasted days — the nightly GH pulse is actively repairing and building tissue on days off, often producing the greatest strength gains on the first session back after a rest day.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-black text-lg mb-3">Cardio Timing and the EPOC Synergy</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              If doing fasted cardio, schedule it in the morning — 8–12 hours after your peptide injection. This captures the tail end of the elevated GH environment established during sleep, when GH-driven lipolysis is still active. Avoid heavy cardio within 3 hours before your nightly peptide dose: exercise elevates somatostatin (GH inhibitor), which would blunt the CJC-1295/Ipamorelin pulse. High-intensity interval training (HIIT) produces significant EPOC (excess post-exercise oxygen consumption) that extends fat oxidation for 24–48 hours — a potent synergy with the GH-driven lipolytic environment your peptide protocol maintains.
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Protocol */}
      <section className="py-16" style={{ background: 'rgba(249, 250, 251, 0.8)', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-6">
            <Flame className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-semibold">NUTRITION PROTOCOL</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Nutrition Optimization for Peptide Recomp</h2>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-black text-lg mb-3">Protein Timing and the Post-Injection Window</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                The GH pulse triggered by CJC-1295/Ipamorelin peaks 1–3 hours after injection. This GH elevation drives IGF-1 production over the following 6–12 hours. During this window, muscle tissue has elevated sensitivity to amino acid uptake — making the first meal after waking (following a nightly injection) a high-priority protein feeding. Target 40–60g of protein at this meal from fast-digesting sources (eggs, Greek yogurt, protein isolate). If doing a morning workout, consume protein immediately post-training to capitalize on both the exercise-induced mTOR activation and the residual GH/IGF-1 elevation from the previous night.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-black text-lg mb-3">Fasting Before Injection for Maximum GH Pulse</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Insulin directly suppresses GH secretion. When insulin is elevated after a meal, somatostatin increases and the pituitary&apos;s GH-secreting capacity is blunted. To maximize the CJC-1295/Ipamorelin pulse, inject in a fasted or near-fasted state — at minimum 2 hours after your last meal, ideally 3 hours. This means having your last food of the day by 8–9pm if injecting at 10–11pm before sleep. Avoiding carbohydrates specifically (the strongest insulin trigger) at the final pre-injection meal further enhances GH pulse amplitude.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-black text-lg mb-3">Caloric Targets by Goal</h3>
              <div className="space-y-4">
                {[
                  { goal: 'Aggressive Recomp', cals: 'Maintenance ±100 kcal/day', protein: '1.0–1.2g per lb bodyweight', carbs: 'Moderate — prioritize post-workout', note: 'The GH peptide creates the anabolic/lipolytic environment — caloric precision matters less than with diet-only approaches' },
                  { goal: 'Lean Bulk', cals: '+200–400 kcal above maintenance', protein: '1.0–1.3g per lb bodyweight', carbs: 'Higher — fuel the anabolism', note: 'Eating slightly above maintenance with optimal GH signaling produces lean mass gains with minimal fat accumulation' },
                  { goal: 'Cut with Muscle Preservation', cals: '-300–500 kcal below maintenance', protein: '1.2–1.6g per lb bodyweight', carbs: 'Cycled — higher on training days', note: 'GH peptide dramatically reduces the muscle-sparing requirement — you will preserve muscle at deficits that would strip it naturally' },
                ].map((g) => (
                  <div key={g.goal} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="text-amber-600 font-bold text-sm mb-2">{g.goal}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2 text-xs">
                      <div><span className="text-gray-600">Calories: </span><span className="text-gray-900">{g.cals}</span></div>
                      <div><span className="text-gray-600">Protein: </span><span className="text-gray-900">{g.protein}</span></div>
                      <div><span className="text-gray-600">Carbs: </span><span className="text-gray-900">{g.carbs}</span></div>
                    </div>
                    <p className="text-gray-600 text-xs italic">{g.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-black text-lg mb-3">Carb Cycling on the 12-Week Protocol</h3>
              <p className="text-gray-800 text-sm leading-relaxed">
                Basic carb cycling amplifies peptide recomposition results significantly. On training days, consume higher carbohydrates (150–250g depending on bodyweight) primarily around training — pre-workout for energy, post-workout to spike insulin and drive nutrient uptake into muscles at peak GH/IGF-1 sensitivity. On rest days, reduce carbohydrates to 50–100g (vegetables, some fruit) while keeping protein constant — this creates intermittent periods of lower insulin that allow GH-driven fat mobilization to proceed unopposed. The cyclical insulin variation prevents the metabolic adaptation that occurs with steady-state diets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Peptide Profiles */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Body Composition Peptide Profiles</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
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
                    <h3 className="text-gray-900 font-black text-xl">{p.name}</h3>
                    <span className="text-xs font-bold bg-gray-100 border border-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{p.type}</span>
                  </div>
                  <p className="text-gray-700 text-base mt-1">{p.mechanism}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <ul className="space-y-2">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-gray-800">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.06)', border: '1px solid rgba(59, 130, 246, 0.15)' }}>
                    <div className="text-amber-600 text-xs font-bold mb-1">DOSE GUIDE</div>
                    <div className="text-gray-900 text-sm font-mono">{p.dose}</div>
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">{p.ideal}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12-Week Timeline */}
      <section className="py-16" style={{ background: 'rgba(249, 250, 251, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">The 12-Week Recomp Timeline</h2>
            <p className="text-gray-700 max-w-xl mx-auto">What to expect week by week on the CJC-1295/Ipamorelin + IGF-1 LR3 stack.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {recompTimeline.map((phase) => (
                <div key={phase.week} className="glass-card p-5">
                  <div className="text-blue-600 font-bold text-xs mb-2 font-mono">{phase.week}</div>
                  <h3 className="text-gray-900 font-black text-sm mb-2">{phase.title}</h3>
                  <p className="text-gray-700 text-xs leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peptides vs HGH Comparison */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">GH Peptides vs. Actual HGH</h2>
        <p className="text-gray-700 text-center mb-10 max-w-xl mx-auto">
          Why most experts recommend starting with GH peptides before considering pharmaceutical HGH.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
                <th className="text-left py-4 px-5 text-gray-700 font-semibold">Feature</th>
                <th className="text-center py-4 px-5 text-gray-600 font-semibold">Pharmaceutical HGH</th>
                <th className="text-center py-4 px-5 text-blue-600 font-bold">GH Peptide Stack</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {vsHGH.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent' }}>
                  <td className="py-3 px-5 text-gray-800 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-center text-gray-600">{row.gh}</td>
                  <td className="py-3 px-5 text-center text-blue-600">{row.peptide}</td>
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
              <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-3 py-1.5 mb-4">
                <Scale className="w-4 h-4 text-rose-600" />
                <span className="text-rose-600 text-sm font-semibold">GLP WEIGHT LOSS PEPTIDES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                The GLP-1 Revolution:<br />
                <span className="text-rose-600">Sema, Tirz & Reta</span>
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                GLP-1 receptor agonists like Semaglutide are the most effective weight loss compounds
                ever studied — producing 15–22% body weight reduction in clinical trials. The research
                peptide versions (Semaglutide, Tirzepatide, Retatrutide) work via identical mechanisms
                at a fraction of pharmaceutical pricing.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { code: 'S', name: 'Semaglutide (GLP-1)', result: '15% avg weight loss', desc: 'GLP-1 receptor agonist — same as Ozempic/Wegovy' },
                  { code: 'T', name: 'Tirzepatide (GIP/GLP-1)', result: '21% avg weight loss', desc: 'Dual agonist — same as Mounjaro/Zepbound — more potent' },
                  { code: 'R', name: 'Retatrutide (GIP/GLP-1/Glucagon)', result: '24% weight loss', desc: 'Triple agonist — the most powerful in the class, Phase III trials' },
                ].map((item) => (
                  <div key={item.code} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                      <span className="text-rose-600 text-xs font-bold">{item.code}</span>
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold text-sm">{item.name} — {item.result}</div>
                      <div className="text-gray-700 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                className="btn-cta text-sm px-6 py-3 flex items-center gap-2 inline-flex">
                View <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-black text-lg mb-4">GLP Peptide Clinical Results</h3>
              <div className="space-y-5">
                {[
                  { name: 'Semaglutide', loss: 15, trial: 'STEP-1 Trial (n=1961)' },
                  { name: 'Tirzepatide', loss: 21, trial: 'SURMOUNT-1 Trial (n=2539)' },
                  { name: 'Retatrutide', loss: 24, trial: 'Phase II Trial (n=338)' },
                  { name: 'Cagrisema', loss: 25, trial: 'REDEFINE-1 Trial (n=3400)' },
                ].map((drug) => (
                  <div key={drug.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-900 font-semibold">{drug.name}</span>
                      <span className="text-rose-600 font-bold">{drug.loss}% weight loss</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 rounded-full"
                        style={{ width: `${drug.loss * 4}%` }}
                      />
                    </div>
                    <div className="text-gray-500 text-xs mt-1">{drug.trial}</div>
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
            <h2 className="text-3xl font-black text-gray-900">Body Composition Peptides</h2>
            <p className="text-gray-700 mt-1">GH peptides, metabolic activators, and GLP weight loss compounds</p>
          </div>
          <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
            className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2 hidden sm:flex">
            View All <ArrowRight className="w-4 h-4" />
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
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Body Composition FAQ</h2>
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
              {
                q: 'Do peptides work for body recomposition without training?',
                a: 'GH peptides will produce some fat loss and body composition improvement even without training — the GH-driven lipolysis is not exercise-dependent. However, without the mechanical stimulus of resistance training, the anabolic component (muscle building) is minimal. Training dramatically amplifies every peptide benefit: it multiplies the GH secretion, increases IGF-1 receptor sensitivity in muscle, and creates the mechanical trigger that directs the anabolic signaling toward specific muscles. Think of training as the "steering wheel" for where the anabolic signal goes.'
              },
              {
                q: 'What is the ideal body fat percentage to start GH peptides?',
                a: 'GH peptides work across all body fat levels, but produce the best body composition results between 15–25% body fat (for men) and 22–32% body fat (for women). At very high body fat levels (30%+ men, 38%+ women), GLP-1 peptides typically produce more dramatic visible results first — the fat loss from appetite suppression outpaces the subtler recomp effects of GH peptides. At very low body fat (<10% men), GH peptides shift primarily toward muscle building as the lipolytic effect has less fat to mobilize.'
              },
              {
                q: 'How long should you cycle off before the next recomp cycle?',
                a: 'For CJC-1295/Ipamorelin, a 4–8 week break after a 12-week cycle is recommended to maintain pituitary receptor sensitivity. Many experienced users take a 4-week break and find no loss of effectiveness on the subsequent cycle. IGF-1 LR3 is cycled more strictly: 4 weeks on, 4 weeks off at minimum, due to the risk of IGF-1 receptor desensitization. During the off-cycle, maintain training intensity — results achieved (muscle gained, fat lost) are largely preserved with continued resistance training and adequate protein.'
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900 font-semibold text-sm">{faq.q}</span>
                  <span className="text-blue-600 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 border-l-2 border-amber-400">
                  <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🔥</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Start Your Recomp Protocol Today
              </h2>
              <p className="text-gray-800 text-lg mb-2 max-w-xl mx-auto">
                CJC-1295, Ipamorelin, IGF-1 LR3, and GLP peptides from our recommended supplier.
              </p>
              <p className="text-gray-600 text-sm mb-8">COA verified · US domestic · Fast shipping</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
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
