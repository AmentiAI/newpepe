import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Brain,
  FlaskConical, Clock, AlertTriangle, Star, Sparkles, Layers,
  Camera, Calendar, Target,
} from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import LooksmaxxingStackBuilder from '@/components/LooksmaxxingStackBuilder';

export const metadata: Metadata = {
  title: 'The Complete Looksmaxxing Stack: Peptide Protocols for Appearance (2026)',
  description: 'The ultimate looksmaxxing peptide stack — Foundation, Complete, and Advanced tiers. GHK-Cu, BPC-157, CJC-1295, IGF-1 LR3, Epithalon. Timelines, routines, and case studies for 2026.',
  keywords: 'looksmaxxing stack, peptides for appearance, looksmaxxing peptides, GHK-Cu stack, BPC-157 looksmaxxing, peptide appearance protocol, best peptides for looks',
  openGraph: {
    title: 'The Complete Looksmaxxing Peptide Stack 2026',
    description: 'Three tiers of looksmaxxing peptide protocols — from Foundation to Advanced. Build your appearance optimization stack.',
    type: 'article',
    url: 'https://bp157stack.com/looksmaxxing-stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Looksmaxxing Stack Guide 2026',
    description: 'The ultimate peptide protocol for appearance optimization — Foundation, Complete, and Advanced tiers.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/looksmaxxing-stack',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const stackTiers = [
  {
    tier: 'Tier 1',
    name: 'The Foundation Stack',
    cost: '~$100–150/month',
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    ideal: 'Beginners. Maximum bang-for-buck. Covers 80% of the biological foundations.',
    peptides: [
      { name: 'GHK-Cu Topical', dose: '1–2 mg/day serum', role: 'Skin collagen I/III/IV, anti-aging, pore tightening, anti-inflammatory, gene expression reset', cost: '$45/mo' },
      { name: 'BPC-157 Oral', dose: '250–500 mcg 2x/day', role: 'Gut-skin axis repair, systemic anti-inflammation, acne reduction, scar healing foundation', cost: '$55/mo' },
    ],
    targets: ['Skin collagen production', 'Gut-skin axis repair', 'Acne and skin inflammation', 'Scar healing initiation', 'Anti-aging basics'],
  },
  {
    tier: 'Tier 2',
    name: 'The Complete Appearance Stack',
    cost: '~$200–300/month',
    color: 'border-blue-500/40',
    badge: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
    ideal: 'Intermediate users wanting comprehensive appearance optimization. Adds GH axis and neuropeptide anti-wrinkle.',
    peptides: [
      { name: 'GHK-Cu Topical', dose: '1–2 mg/day', role: 'Core collagen stimulator', cost: '$45/mo' },
      { name: 'BPC-157 Oral', dose: '250–500 mcg 2x/day', role: 'Gut-skin axis, systemic anti-inflammation', cost: '$55/mo' },
      { name: 'SNAP-8 Topical', dose: '10% in serum', role: 'Anti-wrinkle neuropeptide — expression line relaxation', cost: '$35/mo' },
      { name: 'CJC-1295 + Ipamorelin', dose: '200 mcg each before bed', role: 'GH pulse → IGF-1 elevation → systemic collagen and body composition', cost: '$85/mo' },
    ],
    targets: ['Everything in Tier 1', 'Expression line relaxation (Botox alternative)', 'Systemic collagen production via GH axis', 'Body composition improvement', 'Sleep quality (GH release benefit)'],
  },
  {
    tier: 'Tier 3',
    name: 'The Advanced Protocol',
    cost: '~$400–600/month',
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
    ideal: 'Serious biohackers. Maximum appearance and longevity optimization. Adds direct IGF-1 and cellular age reversal.',
    peptides: [
      { name: 'GHK-Cu Topical', dose: '1–2 mg/day', role: 'Core collagen stimulator', cost: '$45/mo' },
      { name: 'BPC-157 Oral', dose: '250–500 mcg 2x/day', role: 'Gut-skin axis, systemic anti-inflammation', cost: '$55/mo' },
      { name: 'SNAP-8 Topical', dose: '10% in serum', role: 'Expression line relaxation', cost: '$35/mo' },
      { name: 'CJC-1295 + Ipamorelin', dose: '200 mcg each before bed', role: 'GH pulse, IGF-1 elevation, sleep quality', cost: '$85/mo' },
      { name: 'IGF-1 LR3', dose: '20–50 mcg/day (4–6 week cycles)', role: 'Direct IGF-1 receptor activation — collagen, facial fat, hair, bone structure', cost: '$120/mo' },
      { name: 'Epithalon', dose: '5–10 mg per 10-day course (2x/year)', role: 'Telomere protection → cellular longevity → sustained collagen capacity', cost: '$70/mo avg' },
    ],
    targets: ['Everything in Tier 2', 'Direct IGF-1 stimulation for collagen and facial fat', 'Facial bone density maintenance', 'Cellular aging reversal (telomere protection)', 'Maximum hair follicle support', 'Comprehensive longevity protocol'],
  },
];

const dailyRoutine = [
  {
    time: 'Morning',
    actions: [
      { action: 'IGF-1 LR3 injection (if on active cycle)', detail: '20–50 mcg SC, abdomen or thigh. Eat 20g carbs within 20 min.' },
      { action: 'GHK-Cu topical application', detail: 'Apply serum to face, beard area, and/or scalp after cleansing. Massage 60 seconds.' },
      { action: 'Vitamin C serum (optional but synergistic)', detail: 'Apply over or after GHK-Cu for collagen co-factor support.' },
      { action: 'Sunscreen SPF 30+', detail: 'Non-negotiable. Protects newly synthesized collagen from UV degradation.' },
    ],
    icon: Zap,
    color: 'text-amber-400',
  },
  {
    time: 'Midday / With Meals',
    actions: [
      { action: 'BPC-157 oral (first dose)', detail: '250–500 mcg taken 30 min before your main meal.' },
      { action: 'Zinc picolinate (with meal)', detail: '15–30 mg — collagen synthesis co-factor, anti-acne.' },
      { action: 'Omega-3 (with meal)', detail: '2–3g EPA/DHA — reduces arachidonic acid inflammatory cascade.' },
    ],
    icon: FlaskConical,
    color: 'text-teal-400',
  },
  {
    time: 'Evening / Pre-Sleep',
    actions: [
      { action: 'BPC-157 oral (second dose)', detail: '250–500 mcg before your last meal of the day.' },
      { action: 'CJC-1295 + Ipamorelin injection', detail: '200 mcg each, SC. Take 30 min before sleep for optimal GH pulse with natural sleep GH release.' },
      { action: 'SNAP-8 topical (expression line areas)', detail: 'Apply to forehead, crow\'s feet, and expression lines. Allow to absorb before sleep.' },
      { action: 'Sleep optimization', detail: '7–9 hours. GH release primarily occurs in slow-wave sleep — poor sleep negates the secretagogue benefits.' },
    ],
    icon: Clock,
    color: 'text-purple-400',
  },
  {
    time: 'Weekly (Derma Roll Day)',
    actions: [
      { action: 'Derma roll target areas', detail: '0.25–0.5mm roller on face/beard/scalp. Every 5–7 days.' },
      { action: 'High-dose GHK-Cu post-roll', detail: 'Apply GHK-Cu immediately after rolling. 400–1000x higher absorption through microchannels.' },
      { action: 'Red light therapy (10–20 min)', detail: '630–850nm wavelengths synergistically stimulate fibroblasts alongside GHK-Cu.' },
    ],
    icon: Star,
    color: 'text-emerald-400',
  },
];

const monthlyTimeline = [
  {
    month: 'Month 1',
    title: 'Foundation Phase',
    changes: [
      'Skin hydration noticeably improved (GHK-Cu water retention effect)',
      'Skin redness and inflammation reducing',
      'Gut health improvements if BPC-157 is addressing gut issues',
      'Sleep quality improving (CJC-1295/Ipamorelin if in stack)',
      'Baseline photos should show improved skin glow and texture',
    ],
    color: 'border-slate-500/40',
    badge: 'bg-slate-500/20 text-slate-400',
  },
  {
    month: 'Months 2–3',
    title: 'Early Structural Changes',
    changes: [
      'Fine lines and shallow wrinkles visibly reducing',
      'Skin texture significantly smoother — pores appearing tighter',
      'Early hair improvement: reduced shedding, early density increase',
      'Body composition changes becoming visible (with CJC-1295/Ipamorelin)',
      'PIH (post-acne marks) beginning to fade with GHK-Cu protocol',
    ],
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-400',
  },
  {
    month: 'Months 3–6',
    title: 'Significant Appearance Change',
    changes: [
      'Skin quality dramatically improved vs baseline photos',
      'Deeper wrinkles and expression lines noticeably reduced',
      'Hair density clearly improved in responsive follicle areas',
      'Body recomposition well underway — improved jawline definition',
      'Most users at this stage see results comparable to professional treatments',
    ],
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    month: 'Months 6–12',
    title: 'Comprehensive Transformation',
    changes: [
      'New collagen fiber formation completing structural remodeling',
      'Acne scars showing significant improvement (with derma roll + GHK-Cu)',
      'Full beard density improvement if beard protocol followed',
      'Facial fat volume preservation and improvement visible',
      'Cellular aging reversal (Epithalon users) — skin vitality maintained or improving',
    ],
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-400',
  },
];

const trackingGuide = [
  {
    category: 'Photography Protocol',
    items: [
      'Same location, same lighting (natural light or consistent artificial)',
      'Same time of day (lighting and skin hydration vary throughout day)',
      'Same distance from camera, same angle (front, 45°, 90° profile)',
      'Weekly photos minimum; daily photos in first 4 weeks',
      'No makeup, no filters — bare skin tracking only',
    ],
    icon: Camera,
    color: 'text-blue-400',
  },
  {
    category: 'Skin Quality Metrics',
    items: [
      'Skin smoothness and texture (visual and tactile assessment)',
      'Pore size — especially in T-zone and cheeks',
      'Fine line depth in expression areas',
      'Skin firmness and bounce-back quality',
      'Hydration and glow vs dullness',
    ],
    icon: Layers,
    color: 'text-purple-400',
  },
  {
    category: 'Body & Structure',
    items: [
      'Body composition: weight, body fat % (DEXA or tape measurements)',
      'Jawline definition — photographed from below',
      'Beard density: weekly close-up photos of coverage areas',
      'Hair density: top-down scalp photos in consistent lighting',
    ],
    icon: TrendingUp,
    color: 'text-emerald-400',
  },
];

const caseStudies = [
  {
    archetype: 'The 25-Year-Old Optimizer',
    profile: 'Male, 25, no current appearance issues. Wants to optimize early, prevent aging, and maximize appearance.',
    stack: 'Tier 1 Foundation Stack',
    rationale: 'At 25, natural collagen production is still near-peak. GHK-Cu + BPC-157 prevents premature decline, addresses any early signs, and builds the gut health foundation. Adding CJC-1295/Ipamorelin as a Tier 2 upgrade if budget allows.',
    primaryGoals: ['Preventive collagen maintenance', 'Skin glow and texture optimization', 'Gut health foundation for long-term appearance'],
    timeline: 'Results visible in 4–8 weeks. Protocol sustainable indefinitely.',
    color: 'border-emerald-500/40',
  },
  {
    archetype: 'The 40-Year-Old Reversing Aging',
    profile: 'Male or female, 40, noticing accelerating appearance aging — skin laxity, fine lines, reduced skin quality, some hair thinning.',
    stack: 'Tier 2–3 Complete or Advanced Stack',
    rationale: 'At 40, natural IGF-1 is significantly declining. CJC-1295/Ipamorelin or IGF-1 LR3 to restore GH/IGF-1 axis. GHK-Cu for comprehensive collagen reset. Epithalon for long-term cellular aging protection.',
    primaryGoals: ['Collagen density restoration', 'GH axis optimization', 'Hair density improvement', 'Facial fat volume preservation'],
    timeline: '3–6 months for significant reversal of visible aging markers.',
    color: 'border-blue-500/40',
  },
  {
    archetype: 'Post-Acne Scar Healing',
    profile: 'Any age. History of cystic acne, now clear but left with PIH and textural scars.',
    stack: 'Tier 1 with derma roller protocol, then Tier 2',
    rationale: 'BPC-157 oral clears any remaining gut-driven inflammation. GHK-Cu with derma rolling is the primary scar remodeling mechanism — the combination of micro-needling + collagen-stimulating peptide is the most effective non-invasive scar treatment available. Add CJC-1295/Ipamorelin to accelerate IGF-1-driven healing.',
    primaryGoals: ['PIH resolution', 'Textural scar improvement', 'Collagen remodeling of acne damage'],
    timeline: 'PIH: 3–5 months. Deep scar improvement: 6–12 months.',
    color: 'border-rose-500/40',
  },
];

const nonPeptideStack = [
  { item: 'SPF 30+ Sunscreen (daily)', importance: 'Non-negotiable. UV MMP activation degrades new collagen. All peptide results are undermined without UV protection.', synergy: 'Direct protection of GHK-Cu synthesized collagen' },
  { item: 'Red Light Therapy (630–850nm, 10–20 min/day)', importance: 'Independently stimulates fibroblasts and ATP production. Synergistic with GHK-Cu at the cellular level.', synergy: 'Amplifies GHK-Cu collagen stimulation' },
  { item: 'Sleep Optimization (7–9h, dark room)', importance: 'GH release occurs in slow-wave sleep. CJC-1295/Ipamorelin is wasted without quality sleep.', synergy: 'Maximizes CJC-1295/Ipamorelin GH pulse amplitude' },
  { item: 'Vitamin C (500–1000 mg/day + topical)', importance: 'Required co-factor for collagen fiber assembly. Without Vitamin C, new collagen cannot form proper triple-helix structure.', synergy: 'Essential for GHK-Cu collagen synthesis' },
  { item: 'Derma Roller (0.25–0.5mm, weekly)', importance: 'Increases GHK-Cu absorption 400–1000x. Independently triggers wound-healing and follicle stem cell activation.', synergy: 'Multiplies GHK-Cu topical effectiveness' },
];

const faqs = [
  {
    q: 'Where should I start with looksmaxxing peptides as a beginner?',
    a: 'Start with the Tier 1 Foundation Stack: GHK-Cu topical + BPC-157 oral. This combination is the highest-evidence, most cost-effective, and lowest-risk starting point. GHK-Cu topical requires no injections and addresses the primary collagen mechanisms directly at the skin. BPC-157 oral (no injection needed) addresses the gut-skin axis that drives a significant percentage of skin quality and acne issues. Run Tier 1 for 8–12 weeks and track results with weekly photos before adding complexity. Most people see results significant enough from Tier 1 alone that they do not need to progress immediately to more expensive stacks.',
  },
  {
    q: 'How long before I see results from a looksmaxxing peptide stack?',
    a: 'Collagen synthesis has a minimum 4-week lag before skin changes become visible — you are building structural proteins, not applying a filter. Timeline: 2–4 weeks for skin hydration, glow, and inflammation improvement. 4–8 weeks for texture and early firmness improvement. 8–16 weeks for visible structural collagen changes (wrinkle reduction, skin firming). 3–6 months for comprehensive appearance changes. Hair changes take longer (4–6 months) due to the hair growth cycle. The key to not losing motivation is taking baseline photos and comparing weekly — changes are gradual enough to be invisible day-to-day but dramatic when compared to photos from 3 months ago.',
  },
  {
    q: 'Can women use the looksmaxxing stack?',
    a: 'Yes — peptide looksmaxxing protocols are highly relevant for women. GHK-Cu and BPC-157 are hormonal-context independent; they work identically in male and female physiology for their collagen, skin barrier, and gut-healing mechanisms. CJC-1295/Ipamorelin similarly works in women — GH optimization is beneficial for both sexes. IGF-1 LR3 at appearance doses (20–50 mcg/day) is used by women for skin collagen and healing without body composition effects being a concern at these doses. The only adjustment for women: be cautious with IGF-1 LR3 timing around the menstrual cycle (some women report better tolerance in the follicular phase).',
  },
  {
    q: 'How do I cycle peptides in a looksmaxxing stack?',
    a: 'Cycling guidelines by peptide: GHK-Cu topical — can be used continuously without cycling; it is topical and endogenous. BPC-157 oral — 8–12 weeks on / 4 weeks off for safety; some use maintenance dosing (once daily) indefinitely. CJC-1295/Ipamorelin — 3 months on / 1 month off is the standard protocol. IGF-1 LR3 — 4–6 weeks on / 4 weeks off strictly (axis recovery needed). Epithalon — 10-day course 2x per year (not continuous). In practice, for a beginner on Tier 1: GHK-Cu continuous, BPC-157 cycle 8 weeks on / 4 weeks off. The 4-week off-periods from BPC-157 are good times to assess how your baseline has changed and photograph results.',
  },
  {
    q: 'Is looksmaxxing with peptides safe long-term?',
    a: 'The safety profile varies by peptide. GHK-Cu topical: excellent long-term safety — it is endogenous, non-toxic, and extensively used in commercial skincare. BPC-157: favorable safety in animal research with no identified toxicity; human research is limited but adverse event rates are very low in reported use. CJC-1295/Ipamorelin: preserves the natural GH axis (unlike exogenous HGH), making it the safer long-term approach to GH optimization. IGF-1 LR3: requires cycling due to axis suppression and hypoglycemia risk; not appropriate for continuous long-term use. Overall: peptides have a substantially better safety profile than pharmaceutical alternatives (retinoids, antibiotics, isotretinoin) when used at research appearance doses with appropriate cycling protocols.',
  },
  {
    q: 'Do I need to inject peptides for looksmaxxing or are there non-injection options?',
    a: 'Several highly effective looksmaxxing options are available without injections: GHK-Cu topical serum (no injection — the primary collagen driver), BPC-157 oral capsule or solution (no injection — addresses gut-skin axis), and SNAP-8 topical (no injection — expression line reduction). These three alone constitute a comprehensive appearance protocol without any needle use. The injectable options (CJC-1295/Ipamorelin, IGF-1 LR3) add significant additional benefit but are not required for meaningful results. If you are needle-averse or beginning, start with the topical + oral options first.',
  },
];

export default function LooksmaxxingStackPage() {
  return (
    <main className="min-h-screen bg-dark-900 text-slate-200">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/25 via-dark-900 to-emerald-900/15" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-purple-300 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            Complete Appearance Protocol
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            The Complete{' '}
            <span className="text-neon-green">Looksmaxxing Stack</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Three tiers of scientifically-grounded peptide protocols for appearance optimization — from accessible Foundation to comprehensive Advanced. Build your stack, set your timeline, transform your appearance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} rel="nofollow noopener noreferrer" className="btn-cta flex items-center gap-2">
              View All Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guide" className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-xl text-slate-300 hover:border-slate-400 transition-colors">
              Full Protocol Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">The Philosophy: Biology-First Appearance Optimization</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-slate-300 leading-relaxed">
              Looksmaxxing through peptides is categorically different from cosmetic procedures or topical cover-up products. It operates on the biological foundations of appearance — the collagen matrix that provides skin structure, the gut-skin axis that drives inflammation and acne, the GH/IGF-1 axis that governs whole-body anabolic and reparative signaling, and the cellular aging processes that determine how quickly these foundations degrade.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The results from this approach are structural and lasting — not temporary. When you rebuild collagen density, the new collagen fibers have a half-life of approximately two years. When you heal the gut-skin axis, the skin barrier improvements persist as long as the gut remains healthy. When you optimize the GH/IGF-1 axis, you are maintaining the hormonal environment that keeps all of these reparative processes running.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The key peptides that constitute the looksmaxxing arsenal each address a specific biological foundation: GHK-Cu for collagen and cellular aging, BPC-157 for gut-skin axis and systemic inflammation, SNAP-8 for expression line prevention, CJC-1295/Ipamorelin for GH axis optimization, IGF-1 LR3 for direct growth factor signaling, and Epithalon for cellular longevity. Understanding why each one belongs in the protocol — and what happens when you combine them — is the difference between a random supplement stack and a precision appearance optimization system.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Tiers */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Stack Tiers</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Three tiers from foundation to advanced — each with a specific cost, complexity, and results profile.</p>
          </div>
          <div className="space-y-6">
            {stackTiers.map((tier) => (
              <div key={tier.tier} className={`glass-card p-6 border ${tier.color} space-y-5`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${tier.badge}`}>{tier.tier}</span>
                    <h3 className="text-slate-100 font-bold text-lg">{tier.name}</h3>
                  </div>
                  <span className="text-amber-300 font-bold">{tier.cost}</span>
                </div>
                <p className="text-slate-400 text-sm italic">{tier.ideal}</p>

                <div className="space-y-2">
                  {tier.peptides.map((peptide) => (
                    <div key={peptide.name} className="flex items-start gap-3 p-3 bg-slate-800/60 rounded-xl text-sm">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-slate-100 font-semibold">{peptide.name}</span>
                          <span className="text-slate-500 text-xs">{peptide.dose}</span>
                          <span className="text-amber-300 text-xs ml-auto">{peptide.cost}</span>
                        </div>
                        <p className="text-slate-400 text-xs mt-1">{peptide.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wide">Targets</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tier.targets.map((t) => (
                      <span key={t} className={`text-xs px-2 py-0.5 rounded-full border ${tier.badge}`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Builder Component */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Build Your Personal Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Select your goals and budget to get a personalized peptide stack recommendation.
            </p>
          </div>
          <LooksmaxxingStackBuilder />
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">The Daily Looksmaxxing Routine</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Timing and sequencing matter. Here is the full daily and weekly protocol for the Complete Appearance Stack.
            </p>
          </div>
          <div className="space-y-4">
            {dailyRoutine.map((block) => (
              <div key={block.time} className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <block.icon className={`w-5 h-5 ${block.color}`} />
                  <h3 className={`font-bold text-lg ${block.color}`}>{block.time}</h3>
                </div>
                <div className="space-y-3">
                  {block.actions.map((action) => (
                    <div key={action.action} className="flex items-start gap-3 p-3 bg-slate-800/60 rounded-xl">
                      <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-slate-200 font-semibold text-sm">{action.action}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{action.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Expected Results by Month</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              What to realistically expect and when — for the Complete Appearance Stack (Tier 2).
            </p>
          </div>
          <div className="space-y-4">
            {monthlyTimeline.map((t) => (
              <div key={t.month} className={`glass-card p-6 border ${t.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ${t.badge}`}>{t.month}</span>
                  <div className="space-y-3">
                    <h3 className="text-slate-100 font-bold">{t.title}</h3>
                    <ul className="space-y-1">
                      {t.changes.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-slate-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">What to Track &amp; How</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Accurate baseline tracking is essential — appearance changes are gradual enough to be invisible day-to-day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trackingGuide.map((category) => (
              <div key={category.category} className="glass-card p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                  <h3 className={`font-bold ${category.color}`}>{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 text-neon-green mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Case Studies: 3 Archetypes</h2>
          </div>
          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <div key={cs.archetype} className={`glass-card p-6 border ${cs.color} space-y-4`}>
                <h3 className="text-slate-100 font-bold text-lg">{cs.archetype}</h3>
                <p className="text-slate-400 text-sm italic">{cs.profile}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500 text-xs uppercase tracking-wide">Recommended Stack</span>
                    <p className="text-neon-green font-semibold mt-1">{cs.stack}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs uppercase tracking-wide">Timeline</span>
                    <p className="text-amber-300 font-medium mt-1">{cs.timeline}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{cs.rationale}</p>
                <div>
                  <span className="text-slate-500 text-xs uppercase tracking-wide">Primary Goals</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cs.primaryGoals.map((g) => (
                      <span key={g} className="text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2 py-0.5 rounded-full">{g}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Peptide Synergy */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">Stacking with Non-Peptide Interventions</h2>
          <div className="space-y-3">
            {nonPeptideStack.map((item) => (
              <div key={item.item} className="glass-card p-5 flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-slate-100 font-semibold text-sm">{item.item}</p>
                  <p className="text-slate-400 text-sm">{item.importance}</p>
                  <p className="text-amber-300 text-xs">Synergy: {item.synergy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Looksmaxxing Stack FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6 space-y-3">
                <h3 className="text-slate-100 font-bold">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
          <h2 className="text-3xl font-bold text-white">Begin Your Looksmaxxing Protocol</h2>
          <p className="text-slate-400">
            Start with the Foundation Stack (GHK-Cu + BPC-157) and see measurable results in 8 weeks. Scale up as you see fit.
          </p>
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200 text-sm">
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

      <InternalLinks path="/looksmaxxing-stack" />
    </main>
  );
}
