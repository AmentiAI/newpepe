import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Brain,
  FlaskConical, Clock, AlertTriangle, Layers, Activity, Microscope,
} from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import Igf1EffectsMap from '@/components/Igf1EffectsMap';

export const metadata: Metadata = {
  title: 'IGF-1 LR3 for Looksmaxxing: The 7 Appearance Mechanisms Explained (2026)',
  description: 'IGF-1 LR3 for appearance — how it affects skin collagen, facial fat, muscle fullness, hair follicles, bone structure, and wound healing. Dosing, protocols, and the looksmaxxing stack.',
  keywords: 'IGF-1 LR3 looksmaxxing, IGF-1 appearance, IGF-1 skin collagen, IGF-1 LR3 dose, IGF-1 facial fat, IGF-1 hair follicles, IGF-1 LR3 protocol',
  openGraph: {
    title: 'IGF-1 LR3 for Looksmaxxing: 7 Appearance Mechanisms (2026)',
    description: 'How IGF-1 LR3 affects every aspect of your appearance — collagen, facial fat, muscle volume, hair, bone structure, and more.',
    type: 'article',
    url: 'https://bp157stack.com/igf-1-looksmaxxing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGF-1 LR3 for Looksmaxxing Guide 2026',
    description: 'The complete guide to IGF-1 LR3 for appearance optimization.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/igf-1-looksmaxxing',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const appearanceMechanisms = [
  {
    number: '01',
    title: 'Collagen Synthesis Stimulation',
    desc: 'IGF-1 LR3 directly activates IGF-1 receptors on skin fibroblasts, driving upregulation of Type I and III collagen synthesis. Research documents a dose-dependent increase in collagen production in fibroblast cultures. This is the single most important anti-aging mechanism — improving skin firmness, thickness, and wrinkle reduction.',
    timeline: '6–10 weeks',
    color: 'border-cyan-500/40',
    badge: 'bg-cyan-500/20 text-cyan-700',
  },
  {
    number: '02',
    title: 'Skin Thickness &amp; Firmness',
    desc: 'IGF-1 receptors are expressed in keratinocytes (skin surface cells). IGF-1 LR3 stimulates keratinocyte proliferation → thicker dermis → skin looks and feels fuller and tighter. Thin, crepey skin — a hallmark of aging and excessive caloric restriction — responds directly to IGF-1 axis optimization.',
    timeline: '8–12 weeks',
    color: 'border-blue-500/40',
    badge: 'bg-blue-500/20 text-blue-700',
  },
  {
    number: '03',
    title: 'Facial Fat Volume Preservation',
    desc: 'IGF-1 supports the health of facial fat compartments — reducing pathological catabolic loss of subcutaneous facial fat that produces the "gaunt" or "sunken" look of aging or extreme dieting. Important for maintaining the facial fat volume that creates a youthful vs aged appearance.',
    timeline: '3–6 months',
    color: 'border-indigo-500/40',
    badge: 'bg-indigo-500/20 text-indigo-700',
  },
  {
    number: '04',
    title: 'Muscle Fullness &amp; Volume',
    desc: 'Even at subpharmacological appearance doses (20–50 mcg/day), IGF-1 LR3 improves protein synthesis in muscle tissue → better muscle volume → more defined facial structure. Masseter, temporalis, and neck muscle development contribute significantly to the angular, defined look associated with attractive male faces.',
    timeline: '4–8 weeks',
    color: 'border-violet-500/40',
    badge: 'bg-violet-500/20 text-violet-700',
  },
  {
    number: '05',
    title: 'Hair Follicle Stimulation',
    desc: 'IGF-1 is a universal growth factor for all follicle types — scalp, beard, eyebrows, and body. Unlike DHT-dependent mechanisms, IGF-1\'s anagen-prolonging effect applies to all androgenic contexts. Documented in dermal papilla cell research: IGF-1 upregulates VEGF and FGF-7, two key growth factors for follicle cycling.',
    timeline: '8–16 weeks',
    color: 'border-teal-500/40',
    badge: 'bg-teal-500/20 text-teal-700',
  },
  {
    number: '06',
    title: 'Wound Healing &amp; Scar Reduction',
    desc: 'IGF-1 is one of the primary wound healing growth factors — secreted at wound sites by platelets and macrophages. Elevated systemic IGF-1 from LR3 accelerates healing and improves scar quality. Acne scarring, surgical marks, and any skin trauma heals with better outcomes when IGF-1 levels are optimal.',
    timeline: '2–4 weeks (active healing); 4–8 weeks (scar quality)',
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-700',
  },
  {
    number: '07',
    title: 'Bone Density Maintenance',
    desc: 'At research doses, IGF-1 supports osteoblast activity and bone mineral density. Facial bone density is a primary determinant of long-term appearance. The subtle facial bone shrinkage of aging (receding orbital rims, reduced jaw prominence) is driven partly by declining IGF-1 levels. Supporting osteoblast activity preserves facial bone structure over time.',
    timeline: '6–18 months',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-700',
  },
];

const dosingProtocols = [
  {
    name: 'Appearance Protocol',
    dose: '20–50 mcg/day',
    timing: 'Morning (fasted) or post-workout',
    duration: '4–6 weeks on / 4 weeks off',
    goals: 'Skin collagen, facial fat preservation, hair follicles, wound healing',
    cost: '~$60–90/month',
    level: 'Entry',
    color: 'border-cyan-500/40',
    badge: 'bg-cyan-500/20 text-cyan-700',
  },
  {
    name: 'Body Composition Protocol',
    dose: '50–100 mcg/day',
    timing: 'Post-workout (within 30 min)',
    duration: '4–6 weeks on / 4 weeks off',
    goals: 'All appearance benefits + significant body recomposition, muscle fullness, facial structure',
    cost: '~$100–180/month',
    level: 'Intermediate',
    color: 'border-blue-500/40',
    badge: 'bg-blue-500/20 text-blue-700',
  },
];

const igfVsSecretagogues = [
  {
    label: 'IGF-1 LR3',
    pros: ['Direct receptor activation — bypasses binding proteins', '20+ hour half-life vs natural IGF-1\'s 15 minutes', 'Faster results per mcg than secretagogues', 'Works independently of natural GH production', 'Better for people with compromised GH axis'],
    cons: ['More suppressive of natural IGF-1 axis', 'Hypoglycemia risk (eat carbs post-injection)', 'More expensive per equivalent effect', 'Shorter cycling required (4–6 weeks max)', 'Less studied long-term than secretagogues'],
    color: 'border-cyan-500/30',
  },
  {
    label: 'CJC-1295 + Ipamorelin',
    pros: ['Stimulates your own GH production — preserves axis', 'Better long-term safety profile', 'Natural GH pulse pattern maintained', 'Sleep quality improvement bonus effect', 'Lower hypoglycemia risk'],
    cons: ['Indirect — must go through your GH axis', 'Limited by your pituitary\'s capacity', 'Slower onset of collagen/appearance results', 'Less potent per mcg than direct IGF-1', 'Requires before-bed dosing for optimal GH pulse'],
    color: 'border-purple-500/30',
  },
];

const sideEffects = [
  { effect: 'Hypoglycemia', risk: 'Moderate if fasted', mitigation: 'Eat 15–20g fast carbs within 20 minutes of injection. Never inject IGF-1 LR3 before sleep without eating.', color: 'text-amber-400' },
  { effect: 'Temporary insulin resistance', risk: 'Low at appearance doses', mitigation: 'Avoid high-carbohydrate meals immediately post-injection. Cycle off as recommended (4–6 weeks).', color: 'text-amber-400' },
  { effect: 'Jaw growth (acromegaly)', risk: 'Not relevant at appearance doses', mitigation: 'Acromegaly requires years of supraphysiological GH excess. 20–50 mcg/day IGF-1 LR3 does not produce acromegalic bone changes.', color: 'text-emerald-400' },
  { effect: 'Axis suppression', risk: 'Moderate — reversible', mitigation: 'Cycle off for equal time to on-time (4 weeks on / 4 weeks off). Natural IGF-1 production recovers fully within 2–4 weeks of stopping.', color: 'text-amber-400' },
  { effect: 'Injection site reactions', risk: 'Low', mitigation: 'Rotate injection sites. Use insulin syringes for minimal discomfort. Subcutaneous injection into abdomen or thigh fat is standard.', color: 'text-emerald-400' },
];

const looksmaxxingStack = [
  { peptide: 'IGF-1 LR3', role: 'Direct IGF-1 receptor activation for collagen, facial fat, hair, and structure', dose: '20–50 mcg/day', timing: 'Morning or post-workout', priority: 'Core' },
  { peptide: 'GHK-Cu', role: 'Topical collagen stimulation, gene expression reset, skin barrier improvement', dose: '1–2 mg/day topical', timing: 'Morning application', priority: 'Core' },
  { peptide: 'CJC-1295 + Ipamorelin', role: 'Natural GH pulse optimization → sustained IGF-1 elevation → systemic collagen', dose: '200 mcg each', timing: 'Before bed', priority: 'Enhancer' },
];

const faqs = [
  {
    q: 'What makes IGF-1 LR3 different from regular IGF-1?',
    a: 'IGF-1 LR3 (Long-Arg3-IGF-1) has two key modifications from natural IGF-1: (1) A glutamic acid to arginine substitution at position 3, which significantly reduces binding affinity for IGF-1 binding proteins (IGFBPs). Natural IGF-1 in blood is mostly bound to IGFBPs — making it biologically inactive. IGF-1 LR3 resists IGFBP binding, meaning a far higher percentage remains in the free, biologically active form. (2) An N-terminal extension (the "Long" part) further reduces IGFBP binding. The combined result: IGF-1 LR3 has a half-life of 20–30 hours vs natural IGF-1\'s 15 minutes, and its biological potency per microgram is dramatically higher due to IGFBP resistance. This makes it exceptionally effective for sustained receptor activation throughout the day from a single injection.',
  },
  {
    q: 'Will IGF-1 LR3 cause my jaw to grow larger?',
    a: 'No — at research appearance doses (20–50 mcg/day), IGF-1 LR3 does not cause acromegalic bone changes. Acromegaly (abnormal bone growth) requires sustained supraphysiological GH and IGF-1 levels — typically 10–20x above normal for years. This is seen in patients with untreated GH-secreting pituitary tumors, not in research peptide users at appearance doses. The doses used in appearance protocols produce IGF-1 levels that are elevated but remain within a physiological range. Bone growth concerns are a misunderstanding of dose-response curves — the doses required for bone effects are an order of magnitude higher than appearance protocol doses.',
  },
  {
    q: 'Who benefits most from IGF-1 LR3 for appearance?',
    a: 'The groups with the highest response: (1) Adults 28+ where natural IGF-1 production has begun declining. IGF-1 peaks in the early 20s and declines 14% per decade after 30 — restoring it to optimal levels produces the most dramatic results. (2) Anyone with facial gauntness from aging, prolonged caloric restriction, or excessive cardio training — conditions that reduce facial fat and skin fullness. (3) People with slow wound healing or persistent acne scarring who need accelerated tissue repair. (4) Users wanting to maximize collagen production from a GHK-Cu protocol — IGF-1 LR3 amplifies the fibroblast response to GHK-Cu\'s signaling.',
  },
  {
    q: 'How do I avoid hypoglycemia with IGF-1 LR3?',
    a: 'IGF-1 LR3 has mild insulin-like activity that can lower blood glucose — the primary safety concern. Prevention is straightforward: (1) Never inject IGF-1 LR3 in a fasted state without having food available. (2) Inject post-workout or with a meal that contains 20–30g of carbohydrates. (3) Keep a fast-acting glucose source (juice, glucose tablets, candy) accessible for the first 30–60 minutes post-injection, especially when starting. (4) Symptoms of hypoglycemia: lightheadedness, shakiness, sweating, confusion — drink juice or eat sugar immediately if these occur. (5) At appearance doses (20–50 mcg/day), hypoglycemia is uncommon in people who eat before injecting — it is primarily a concern for those injecting in a deeply fasted state.',
  },
  {
    q: 'Can I stack IGF-1 LR3 with CJC-1295/Ipamorelin?',
    a: 'Yes — this is a commonly used combination and the mechanisms are complementary. CJC-1295/Ipamorelin stimulates your own GH release → your pituitary produces GH → liver converts GH to IGF-1. IGF-1 LR3 provides direct IGF-1 receptor stimulation independently of your natural GH/IGF-1 axis. The combination provides both the pulsatile GH release benefits (which have independent tissue effects beyond IGF-1) and the sustained IGF-1 receptor activation from LR3. When stacking, use lower doses of each: IGF-1 LR3 at 20–30 mcg/day and CJC-1295/Ipamorelin at 100–200 mcg each. Monitor for hypoglycemia as the combined IGF-1 elevation is additive.',
  },
  {
    q: 'How long should I cycle IGF-1 LR3?',
    a: 'The standard recommendation is 4–6 weeks on followed by 4 weeks off. The on-time limit exists because sustained elevated IGF-1 suppresses your natural IGF-1 production (negative feedback on the GH/IGF-1 axis). After 4–6 weeks, the axis suppression may become significant enough that benefits plateau. The off-time allows natural IGF-1 production to fully recover (typically within 2–4 weeks). Some practitioners use a longer 8-week cycle for appearance goals (less concern about axis suppression than for body composition goals), but 4–6 weeks is the most commonly used and best-studied duration. Appearance benefits from collagen and wound healing gains are retained after cycling off — the structural changes persist.',
  },
];

export default function Igf1LooksmaxxingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50/30" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 rounded-full px-4 py-2 text-cyan-700 text-sm font-semibold">
            <Activity className="w-4 h-4" />
            IGF-1 LR3 &amp; Appearance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            IGF-1 LR3 for{' '}
            <span className="text-emerald-700">Looksmaxxing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            IGF-1 LR3 affects seven distinct appearance mechanisms. Here is exactly how it works, what doses to use, and how to stack it for maximum appearance optimization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} rel="nofollow noopener noreferrer" className="btn-cta flex items-center gap-2">
              View IGF-1 LR3 Sources <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/anti-aging" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 transition-colors">
              Anti-Aging Stack
            </Link>
          </div>
        </div>
      </section>

      {/* What is IGF-1 LR3 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">What is IGF-1 LR3?</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-gray-600 leading-relaxed">
              IGF-1 LR3 (Insulin-like Growth Factor-1, Long-Arg3) is a modified variant of the naturally occurring IGF-1 hormone. Natural IGF-1 is produced primarily by the liver in response to growth hormone (GH) signaling and has a half-life of just 15 minutes before it is bound by IGF-binding proteins (IGFBPs) that render it inactive.
            </p>
            <p className="text-gray-600 leading-relaxed">
              IGF-1 LR3 has two specific amino acid modifications that transform this limitation: an arginine substitution at position 3 and an N-terminal extension that together reduce IGFBP binding affinity by approximately <strong className="text-cyan-700">90%</strong>. The result is a peptide that circulates in its fully active form for 20–30 hours after a single injection — providing continuous receptor activation that natural IGF-1 cannot achieve.
            </p>
            <p className="text-gray-600 leading-relaxed">
              IGF-1 is the central mediator of growth hormone's anabolic and reparative effects on the body. While GH acts on bone and fat directly, the majority of GH's tissue-building effects — including collagen synthesis, muscle protein synthesis, skin thickness, and hair follicle support — are mediated through IGF-1. By providing sustained IGF-1 receptor stimulation, IGF-1 LR3 unlocks these appearance-relevant effects at doses far below those required with natural IGF-1.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Appearance Mechanisms */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">The 7 Appearance Mechanisms of IGF-1 LR3</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              IGF-1 LR3 is uniquely comprehensive — it affects more aspects of appearance than virtually any other single research peptide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {appearanceMechanisms.map((mech) => (
              <div key={mech.number} className={`glass-card p-5 border ${mech.color} space-y-3`}>
                <div className="flex items-start gap-3">
                  <span className={`text-2xl font-black ${mech.badge.replace('bg-', 'text-').replace('/20', '/60').replace(' border border-', ' ').split(' ')[0]}`}>
                    {mech.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-gray-800 font-bold text-sm" dangerouslySetInnerHTML={{ __html: mech.title }} />
                    <span className={`text-xs px-2 py-0.5 rounded-full ${mech.badge}`}>
                      Timeline: {mech.timeline}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{mech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Effects Map */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">IGF-1 LR3 Appearance Effects: Interactive Map</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Click any area to see the specific mechanism, timeline, dose, and synergistic peptides.
            </p>
          </div>
          <Igf1EffectsMap />
        </div>
      </section>

      {/* Dosing */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Dosing Protocols</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dosingProtocols.map((protocol) => (
              <div key={protocol.name} className={`glass-card p-6 border ${protocol.color} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-bold">{protocol.name}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${protocol.badge}`}>{protocol.level}</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dose</span>
                    <span className="text-gray-700 font-medium">{protocol.dose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Timing</span>
                    <span className="text-gray-700">{protocol.timing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-gray-700">{protocol.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Est. Cost</span>
                    <span className="text-amber-700 font-semibold">{protocol.cost}</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700/50">
                  <p className="text-gray-500 text-xs">{protocol.goals}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              <strong className="text-cyan-700">Injection technique:</strong> Use a 29–31 gauge insulin syringe. Inject subcutaneously into the abdomen fat or outer thigh — 45-degree angle, slow injection. Rotate sites daily. Reconstitute with bacteriostatic water (1–2mL per vial) and store in refrigerator. Draw 0.1mL for a 20 mcg dose from a 200 mcg/mL solution (reconstitute 2mg in 10mL for this concentration). Always eat before or immediately after injection to prevent hypoglycemia.
            </p>
          </div>
        </div>
      </section>

      {/* IGF-1 LR3 vs GH Secretagogues */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">IGF-1 LR3 vs GH Secretagogues</h2>
          <p className="text-gray-500">
            Both approaches activate the GH/IGF-1 axis, but through different mechanisms with different risk/reward profiles.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {igfVsSecretagogues.map((option) => (
              <div key={option.label} className={`glass-card p-6 border ${option.color} space-y-4`}>
                <h3 className="text-gray-800 font-bold text-lg">{option.label}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-emerald-400 text-xs font-semibold uppercase">Advantages</span>
                    <ul className="mt-2 space-y-1">
                      {option.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-gray-600 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-amber-400 text-xs font-semibold uppercase">Considerations</span>
                    <ul className="mt-2 space-y-1">
                      {option.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-gray-500 text-xs">
                          <span className="text-amber-400 mt-0.5 flex-shrink-0">—</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-cyan-700">Recommendation for appearance goals:</strong> For users new to peptides, start with CJC-1295/Ipamorelin (safer, preserves natural axis, suitable for long-term use). For users who have established a peptide baseline and want to accelerate results, add IGF-1 LR3 in 4–6 week cycles alongside or alternating with the secretagogue stack. The combination of both approaches at lower doses provides excellent results with better safety margins than either at high doses alone.
            </p>
          </div>
        </div>
      </section>

      {/* The IGF-1 Looksmaxxing Stack */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">The IGF-1 Looksmaxxing Stack</h2>
          <div className="space-y-4">
            {looksmaxxingStack.map((item, i) => (
              <div key={item.peptide} className="glass-card p-5 flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-700 font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-gray-800 font-bold">{item.peptide}</span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${item.priority === 'Core' ? 'bg-cyan-500/20 text-cyan-700 border border-cyan-500/40' : 'bg-purple-500/20 text-purple-700 border border-purple-500/40'}`}>
                      {item.priority}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                  <div className="flex gap-4 text-xs">
                    <span className="text-gray-500">Dose: <span className="text-gray-600">{item.dose}</span></span>
                    <span className="text-gray-500">Timing: <span className="text-gray-600">{item.timing}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Effects */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Side Effects &amp; Safety</h2>
          <div className="space-y-3">
            {sideEffects.map((se) => (
              <div key={se.effect} className="glass-card p-5 flex items-start gap-4">
                <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${se.color}`} />
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-gray-800 font-semibold text-sm">{se.effect}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${se.color === 'text-emerald-400' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}`}>
                      {se.risk}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{se.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">IGF-1 LR3 FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6 space-y-3">
                <h3 className="text-gray-800 font-bold">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Activity className="w-12 h-12 text-cyan-400 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">Begin Your IGF-1 LR3 Protocol</h2>
          <p className="text-gray-500">
            Start with 20–30 mcg/day appearance dose and combine with GHK-Cu topical for the most comprehensive collagen and skin quality protocol available.
          </p>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-200 text-sm">
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            For research purposes only. Consult a qualified physician before use.
          </div>
          <Link
            href={SOURCE_URL}
            rel="nofollow noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            View Recommended Suppliers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <InternalLinks path="/igf-1-looksmaxxing" />
    </main>
  );
}
