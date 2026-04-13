import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, FlaskConical } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import WrinkleTargetSelector from '@/components/WrinkleTargetSelector';

export const metadata: Metadata = {
  title: 'SNAP-8 Anti-Wrinkle Peptide: The Botox Alternative Explained (2026)',
  description: 'SNAP-8 (acetyl glutamyl heptapeptide-3) — the neuropeptide that inhibits the SNARE complex to reduce expression line depth by up to 63%. Complete guide: mechanism, vs Botox, vs Argireline, protocols, and application zones.',
  keywords: 'SNAP-8 peptide, SNAP-8 anti-wrinkle, SNAP-8 vs Botox, acetyl glutamyl heptapeptide-3, SNAP-8 skin, SNAP-8 wrinkles, topical neuropeptide wrinkle, SNARE complex peptide',
  openGraph: {
    title: 'SNAP-8: The Botox Alternative Neuropeptide — Complete Guide 2026',
    description: 'SNARE complex inhibition without neurotoxin — SNAP-8 reduces wrinkle depth by up to 63%. Full protocol guide.',
    type: 'article',
    url: 'https://bp157stack.com/snap-8-anti-wrinkle-peptide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNAP-8: The Non-Invasive Botox Alternative — 2026 Guide',
    description: 'How SNAP-8\'s SNARE inhibition reduces wrinkle depth by 63% without injection, paralysis, or neurotoxin.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/snap-8-anti-wrinkle-peptide',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const snareExplanation = [
  {
    step: 1,
    title: 'Nerve Signal Arrives',
    desc: 'Motor neuron fires. Electrical signal travels down axon to the neuromuscular junction — the gap between nerve and muscle cell.',
    color: 'text-blue-400',
    badge: 'bg-blue-500/20 border-blue-500/30',
  },
  {
    step: 2,
    title: 'SNARE Complex Forms',
    desc: 'SNAP-25, synaptobrevin (VAMP), and syntaxin proteins combine to form the SNARE complex. This acts as a molecular "zipper" that docks acetylcholine vesicles to the cell membrane.',
    color: 'text-purple-400',
    badge: 'bg-purple-500/20 border-purple-500/30',
  },
  {
    step: 3,
    title: 'Neurotransmitter Released',
    desc: 'SNARE complex fully assembled → vesicle fuses with membrane → acetylcholine released into synapse → muscle receives signal → contracts.',
    color: 'text-amber-400',
    badge: 'bg-amber-500/20 border-amber-500/30',
  },
  {
    step: 4,
    title: 'SNAP-8 Intervenes Here',
    desc: 'SNAP-8 competes with SNAP-25 for binding sites in the SNARE complex. It reduces SNARE assembly efficiency — less neurotransmitter released → weaker muscle contraction → wrinkle relaxation.',
    color: 'text-emerald-400',
    badge: 'bg-emerald-500/20 border-emerald-500/30',
  },
];

const vsComparison = [
  {
    attribute: 'Mechanism',
    botox: 'Cleaves SNAP-25 (permanent destruction of SNARE protein)',
    argireline: 'Competes with SNAP-25 (6 amino acids)',
    snap8: 'Competes with SNAP-25 (8 amino acids — more complete inhibition)',
  },
  {
    attribute: 'Application',
    botox: 'Injection directly into muscle',
    argireline: 'Topical serum (5–10%)',
    snap8: 'Topical serum (5–10%)',
  },
  {
    attribute: 'Onset',
    botox: '2–5 days (rapid)',
    argireline: '4–6 weeks',
    snap8: '3–4 weeks initial; 6–8 weeks full effect',
  },
  {
    attribute: 'Wrinkle Reduction',
    botox: 'Near-complete paralysis of target muscle',
    argireline: '~30% wrinkle depth reduction (28-day studies)',
    snap8: 'Up to 63% wrinkle depth reduction (28-day studies at 10%)',
  },
  {
    attribute: 'Paralysis Risk',
    botox: 'Yes — ptosis, asymmetry from spread common',
    argireline: 'None — reversible, topical',
    snap8: 'None — reversible, topical, no paralysis',
  },
  {
    attribute: 'Safety Profile',
    botox: 'Neurotoxin — systemic spread risk, immune response, contraindicated in pregnancy',
    argireline: 'Excellent — no known systemic risks',
    snap8: 'Excellent — no known systemic risks',
  },
  {
    attribute: 'Permanence',
    botox: '3–6 months per treatment, repeated indefinitely',
    argireline: 'Reversible — effects diminish when discontinued',
    snap8: 'Reversible — effects diminish when discontinued',
  },
  {
    attribute: 'Cost',
    botox: '$400–800+ per treatment area, 2–4x/year',
    argireline: '$15–60/month (topical serum)',
    snap8: '$15–60/month (topical serum)',
  },
];

const applicationZones = [
  {
    zone: 'Forehead',
    lines: 'Horizontal expression lines',
    muscle: 'Frontalis',
    technique: 'Apply full-finger across entire forehead. Upward strokes from brow to hairline.',
    priority: 'High',
    color: 'border-indigo-500/30',
  },
  {
    zone: 'Glabella (11s)',
    lines: 'Vertical frown lines between brows',
    muscle: 'Corrugator supercilii + Procerus',
    technique: 'Ring finger pressing between brows. Apply while consciously relaxing the area.',
    priority: 'High',
    color: 'border-purple-500/30',
  },
  {
    zone: "Crow's Feet",
    lines: 'Radiating periorbital lines',
    muscle: 'Orbicularis oculi (lateral)',
    technique: 'Ring finger lateral to eye only. Gentle application — thin skin absorbs quickly.',
    priority: 'High',
    color: 'border-blue-500/30',
  },
  {
    zone: 'Mouth / Perioral',
    lines: 'Upper lip lines, mouth corner lines',
    muscle: 'Orbicularis oris + DAO',
    technique: 'Apply around mouth perimeter avoiding lip surface. Small circular motions.',
    priority: 'Moderate',
    color: 'border-emerald-500/30',
  },
  {
    zone: 'Neck',
    lines: 'Platysmal bands + horizontal neck lines',
    muscle: 'Platysma',
    technique: 'Upward strokes full neck surface. Can combine with GHK-Cu for structural support.',
    priority: 'Moderate',
    color: 'border-amber-500/30',
  },
];

const formulation = [
  {
    component: 'SNAP-8 Peptide',
    concentration: '5–10% in final product',
    note: 'Purchase as raw powder (INCI: Acetyl Glutamyl Heptapeptide-3). Dissolve in water phase of formulation.',
  },
  {
    component: 'Carrier Base',
    concentration: 'Balance to 100%',
    note: 'Water + hyaluronic acid (0.5–1%) or aloe vera gel. Hyaluronic acid improves skin absorption and adds independent hydration benefit. Avoid heavy oils or waxes that impede SNAP-8 penetration to dermis.',
  },
  {
    component: 'Niacinamide',
    concentration: '2–5% (optional)',
    note: 'Synergistic — niacinamide reduces pore size and sebum; does not interfere with SNAP-8 SNARE mechanism. Good for oily skin formulations.',
  },
  {
    component: 'Preservative',
    concentration: '0.5–1%',
    note: 'Phenoxyethanol/ethylhexylglycerin blend is common. Required for water-based products to prevent contamination. SNAP-8 is stable in preserved aqueous systems.',
  },
];

const timeline = [
  {
    period: 'Week 1–2',
    title: 'Hydration Phase',
    changes: [
      'Skin hydration increases (from hyaluronic acid carrier if used)',
      'No visible wrinkle changes at this stage — SNARE inhibition is cumulative',
      'Some users notice "priming" effect: skin feels softer and more receptive',
      'Establish AM and PM application routine consistently',
    ],
    color: 'border-slate-500/40',
  },
  {
    period: 'Week 3–4',
    title: 'Subtle Softening',
    changes: [
      'Expression lines begin to appear less sharp at rest (not during active expression)',
      'Particularly noticeable in forehead and crow\'s feet — these muscles activate frequently',
      'Skin depth under treated lines slightly increased from SNAP-8 buildup',
      'Photograph under consistent lighting to capture subtle changes',
    ],
    color: 'border-amber-500/40',
  },
  {
    period: 'Week 6–8',
    title: 'Measurable Depth Reduction',
    changes: [
      'Clinical studies show up to 63% wrinkle depth reduction at 10% concentration at 4 weeks',
      'Deeper lines show first measurable improvement for most users at this point',
      'Rest-state (static) lines begin softening alongside dynamic lines',
      'If combining with GHK-Cu: collagen fill effects become visible and additive',
    ],
    color: 'border-emerald-500/40',
  },
  {
    period: 'Week 12',
    title: 'Full Effect',
    changes: [
      'Maximum SNAP-8 effect achieved with consistent twice-daily application',
      'Combined SNAP-8 + GHK-Cu users see most dramatic results at this stage',
      'Static (resting) wrinkle improvement is the clearest indicator of collagen involvement',
      'Maintenance: once-daily AM application sustains results at lower cost',
    ],
    color: 'border-purple-500/40',
  },
];

const faqs = [
  {
    q: 'Is SNAP-8 really comparable to Botox?',
    a: 'The mechanism is similar (both target SNARE complex neurotransmitter release), but the efficacy and onset are different. Botox cleaves SNAP-25 permanently until new protein is synthesized — producing near-complete muscle paralysis within days. SNAP-8 competes non-destructively with SNAP-25 — producing partial, reversible reduction in muscle contraction strength over 3–6 weeks. Studies show up to 63% wrinkle depth reduction for SNAP-8 at 10%, which is less than Botox\'s near-complete effect but without any neurotoxin, paralysis risk, or injection. For people who want significant improvement without Botox\'s risks and costs, SNAP-8 is genuinely useful and has a better long-term safety profile for continuous use.',
  },
  {
    q: 'What concentration should I start with?',
    a: 'Start with 5% for mild expression lines or first-time SNAP-8 use. Increase to 7.5% after 4 weeks if results are insufficient. 10% is the maximum studied concentration and is appropriate for deep expression lines or accelerated protocols. SNAP-8 has an excellent safety profile at all concentrations — the increase in concentration primarily affects efficacy speed and depth, not safety.',
  },
  {
    q: 'How does SNAP-8 compare to Argireline?',
    a: 'SNAP-8 (8 amino acids) was designed as an improvement on Argireline/hexapeptide-3 (6 amino acids). The longer 8-amino acid sequence provides more complete occupation of the SNAP-25 binding site and better topical penetration through the skin\'s barrier. Clinical head-to-head evaluations show SNAP-8 achieves approximately double the wrinkle depth reduction of Argireline at equivalent concentrations (63% vs ~30%). Both are reversible SNARE inhibitors without neurotoxin risk — SNAP-8 is simply the superior version.',
  },
  {
    q: 'Can SNAP-8 cause drooping or asymmetry like Botox?',
    a: 'No. Botox drooping (ptosis) and asymmetry results from diffusion of the neurotoxin to unintended muscles. SNAP-8 works via topical absorption — it does not spread to surrounding muscles beyond its application area, and its competitive (non-destructive) mechanism means it cannot completely paralyze a muscle. It reduces contraction strength, it does not eliminate it. There are no reported cases of SNAP-8-induced ptosis, asymmetry, or unintended muscle effects at any studied concentration.',
  },
  {
    q: 'Should I apply SNAP-8 before or after other skincare?',
    a: 'Apply SNAP-8 as the first active ingredient on clean, damp skin — before serums, moisturizers, or SPF. Water-based SNAP-8 serum should go on first. Then wait 5 minutes and apply GHK-Cu if using both. Then moisturizer and/or SPF on top. The rationale: SNAP-8 needs direct contact with skin receptors before the skin surface is occluded by heavier products. Layering SNAP-8 under heavy creams reduces its effective penetration.',
  },
  {
    q: 'How long do results last if I stop using SNAP-8?',
    a: 'SNAP-8 results are not permanent — they are maintained by continued use. The SNARE competition mechanism requires SNAP-8 to be present at the neuromuscular junction. When you stop, SNAP-25 is no longer competed with, the SNARE complex reassembles normally, and full muscle contraction strength returns within 1–3 weeks. The collagen component (if combined with GHK-Cu) is more durable because physical collagen matrix changes persist after peptide cessation. This is a key reason to combine SNAP-8 with GHK-Cu: SNAP-8 relaxes wrinkles while GHK-Cu rebuilds the structural collagen that makes those gains more lasting.',
  },
];

export default function Snap8AntiWrinklePage() {
  return (
    <main className="bg-dark-900 min-h-screen text-gray-700">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4 block">
              Anti-Wrinkle Neuropeptide
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              SNAP-8: The SNARE-Inhibiting{' '}
              <span className="text-neon-green">Botox Alternative</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SNAP-8 (acetyl glutamyl heptapeptide-3) is an 8 amino acid neuropeptide that targets the same molecular machinery as Botox — the SNARE complex — without neurotoxin, injection, or paralysis risk. Clinical studies show up to 63% reduction in wrinkle depth at 10% topical concentration. This guide covers the mechanism, application zones, formulation, and how to combine SNAP-8 with GHK-Cu for superior results.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Get Research Peptides <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SNARE Mechanism */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How SNAP-8 Relaxes Wrinkles: The SNARE Mechanism</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Understanding the SNARE complex explains why SNAP-8 works — and why it is both effective and safe compared to neurotoxin approaches.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {snareExplanation.map((step) => (
              <div key={step.step} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                <div className={`text-3xl font-black mb-3 ${step.color}`}>{step.step}</div>
                <h3 className={`font-bold mb-2 ${step.color}`}>{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                {step.step === 4 && (
                  <div className={`mt-3 text-xs px-2 py-1 rounded border ${step.badge}`}>
                    SNAP-8 point of action
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Botox vs Argireline */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">SNAP-8 vs Botox vs Argireline</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            A direct comparison of the three SNARE-targeting approaches across eight critical attributes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Attribute</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-rose-400">Botox</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-amber-400">Argireline</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-indigo-400">SNAP-8</th>
                </tr>
              </thead>
              <tbody>
                {vsComparison.map((row, i) => (
                  <tr key={row.attribute} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-dark-800/20' : ''}`}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-600">{row.attribute}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{row.botox}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{row.argireline}</td>
                    <td className="py-3 px-4 text-sm text-indigo-300">{row.snap8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wrinkle Zone Selector */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Zone-Specific Protocols</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            Different facial zones have different muscle structures, skin thickness, and wrinkle types. The selector below generates targeted protocols for each zone based on your wrinkle severity.
          </p>
          <WrinkleTargetSelector />
        </div>
      </section>

      {/* Application Zones Overview */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Zones: Full Reference</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applicationZones.map((zone) => (
              <div key={zone.zone} className={`rounded-xl border bg-dark-800/40 p-5 ${zone.color}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{zone.zone}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${zone.priority === 'High' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-500/20 text-gray-500 border border-slate-500/30'}`}>
                    {zone.priority} Priority
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">Wrinkle Type: {zone.lines}</p>
                <p className="text-xs text-gray-500 mb-3">Muscle: {zone.muscle}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{zone.technique}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulation Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulation Guide: Building Your SNAP-8 Serum</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            SNAP-8 can be formulated into an effective serum with minimal components. The carrier choice significantly affects penetration and cosmetic feel.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {formulation.map((f) => (
              <div key={f.component} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{f.component}</h3>
                  <span className="text-xs text-indigo-400 font-mono">{f.concentration}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{f.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">GHK-Cu + SNAP-8 Combination: The Synergistic Anti-Wrinkle Stack</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              SNAP-8 addresses wrinkle formation (muscle contraction driving expression lines); GHK-Cu addresses the collagen deficit beneath the wrinkle. These mechanisms are not just additive — they are synergistic. SNAP-8 reduces the mechanical stress on the collagen matrix; GHK-Cu rebuilds it. GHK-Cu&apos;s collagen synthesis produces gains that persist after peptide cessation; SNAP-8&apos;s muscle relaxation effect makes those structural gains more visible.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                'Apply SNAP-8 serum first on clean skin',
                'Wait 5 minutes for initial absorption',
                'Apply GHK-Cu serum or topical preparation',
                'Allow 5 minutes, then moisturizer/SPF',
                'AM: both peptides; PM: GHK-Cu focus',
                'Timeline: expect 8–10 weeks for synergistic full effect',
              ].map((step) => (
                <div key={step} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">SNAP-8 Results Timeline</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t) => (
              <div key={t.period} className={`rounded-xl border bg-dark-800/40 p-5 ${t.color}`}>
                <h3 className="font-bold text-gray-900 mb-1">{t.period}</h3>
                <p className="text-xs text-indigo-400 font-semibold mb-3">{t.title}</p>
                <ul className="space-y-2">
                  {t.changes.map((c, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Most */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Benefits Most from SNAP-8</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { group: 'Expression Line Priority', desc: 'Dynamic wrinkles (those that appear with facial movement) respond most directly to SNAP-8\'s muscle relaxation mechanism. Forehead lines, crow\'s feet, and frown lines in people who are expressively active are the prime candidates.', color: 'border-indigo-500/30' },
              { group: 'Ages 30–60', desc: 'The 30–60 age range represents the sweet spot: expression lines are established but collagen reserves are sufficient for SNAP-8 + GHK-Cu combination to produce visible filling. Younger users see prevention; older users see relaxation of existing lines.', color: 'border-purple-500/30' },
              { group: 'Non-Invasive Preference', desc: 'People who want Botox-like wrinkle reduction without neurotoxin, injection, cost ($400–800+/treatment), and the psychological/social concerns of facial injection are the natural audience for SNAP-8 protocols.', color: 'border-blue-500/30' },
              { group: 'Botox Maintenance Gap', desc: 'SNAP-8 is excellent for maintaining Botox results between treatments — extending the period of wrinkle relaxation and reducing total Botox frequency needed.', color: 'border-emerald-500/30' },
              { group: 'Skin-Care Enthusiasts', desc: 'People already using evidence-based skincare (retinoids, vitamin C, SPF) who want to add the most potent available topical wrinkle intervention to their routine.', color: 'border-amber-500/30' },
              { group: 'Prevention-Oriented', desc: 'Using SNAP-8 at lower concentrations (5%) from early 30s reduces the cumulative mechanical damage from repeated muscle contraction — preventing deep lines from forming.', color: 'border-rose-500/30' },
            ].map((g) => (
              <div key={g.group} className={`rounded-xl border bg-dark-800/40 p-5 ${g.color}`}>
                <h3 className="font-bold text-gray-900 mb-2">{g.group}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <FlaskConical className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/30 to-dark-800 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your SNAP-8 Protocol</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              Source research-grade SNAP-8 for topical formulation. Combine with GHK-Cu for the comprehensive anti-wrinkle stack.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Get Research Peptides <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-600 mt-4">
              For research purposes only. Not medical advice.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks path="/snap-8-anti-wrinkle-peptide" />
    </main>
  );
}
