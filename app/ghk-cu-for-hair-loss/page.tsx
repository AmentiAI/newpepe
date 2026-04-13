import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import HairLossTypeQuiz from '@/components/HairLossTypeQuiz';

export const metadata: Metadata = {
  title: 'GHK-Cu for Hair Loss: Does Copper Peptide Actually Regrow Hair? (2026)',
  description: 'GHK-Cu copper peptide for hair loss — what the research shows, how it works, topical vs injection protocol, and realistic results timeline. The complete guide for 2026.',
  keywords: 'GHK-Cu hair loss, copper peptide hair loss, GHK-Cu hair growth, GHK-Cu for hair regrowth, copper peptide hair regrowth, GHK-Cu topical hair, peptide hair loss treatment',
  openGraph: {
    title: 'GHK-Cu for Hair Loss: Complete Guide 2026',
    description: 'Does GHK-Cu copper peptide regrow hair? Research, protocol, and realistic results.',
    type: 'article',
    url: 'https://bp157stack.com/ghk-cu-for-hair-loss',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu for Hair Loss: Does It Work?',
    description: 'Complete guide to GHK-Cu copper peptide for hair regrowth — research, protocol, and results.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const mechanisms = [
  { title: 'Follicle Stem Cell Activation', desc: 'GHK-Cu reactivates dormant hair follicle stem cells that have stopped cycling. This is the core mechanism for hair regrowth — getting miniaturized follicles cycling again.' },
  { title: 'DHT Blocker (Indirect)', desc: 'GHK-Cu modulates the androgen receptor signaling pathways in scalp tissue, reducing follicular sensitivity to DHT — the primary driver of androgenetic alopecia.' },
  { title: 'Angiogenesis at the Follicle', desc: 'Stimulates new blood vessel formation around hair follicles, improving nutrient and oxygen delivery to follicles that have been miniaturizing due to poor circulation.' },
  { title: 'Collagen & Scalp Matrix', desc: 'Stimulates collagen synthesis in the scalp dermis. A healthier scalp matrix (proper thickness, hydration, blood supply) supports larger, stronger follicle anchoring.' },
  { title: 'Gene Expression Reset', desc: 'GHK-Cu is a known gene regulator — it upregulates genes associated with follicle cycling and downregulates genes associated with inflammation and follicle senescence.' },
  { title: 'Anti-Inflammatory Effect', desc: 'Scalp inflammation is a key driver of hair loss in many conditions (androgenetic alopecia, alopecia areata). GHK-Cu reduces scalp TNF-α and interleukin activity.' },
];

const protocols = [
  {
    type: 'Topical (Scalp Application)',
    dose: '1–2mg dissolved in carrier solution or serum',
    frequency: 'Daily application to affected areas',
    best: 'Most convenient. Best for androgenetic alopecia and early-stage thinning. Apply to clean, dry scalp. Can be mixed with minoxidil for synergistic effect.',
    result: 'Results: 2–4 months for miniaturization reversal, 4–6 months for visible regrowth',
  },
  {
    type: 'Subcutaneous Injection',
    dose: '0.5–1mg/day SC',
    frequency: 'Daily or 5 days/week',
    best: 'Systemic anti-aging and skin benefits alongside hair effects. More expensive and complex. Preferred for users already using GHK-Cu for systemic anti-aging.',
    result: 'Results: systemic benefits faster, hair effects similar to topical timeline',
  },
  {
    type: 'Combination: Topical + Minoxidil',
    dose: 'GHK-Cu serum (topical) + minoxidil 5%',
    frequency: 'GHK-Cu AM, minoxidil PM (or same time)',
    best: 'Most studied combination. GHK-Cu addresses follicle biology; minoxidil increases blood flow. Complementary mechanisms with better results than either alone.',
    result: 'Results: 3–4 months for initial density improvement',
  },
];

const faqs = [
  { q: 'Does GHK-Cu copper peptide actually work for hair loss?', a: 'Research is promising — GHK-Cu has multiple demonstrated mechanisms for hair growth: follicle stem cell activation, angiogenesis at the follicle, DHT pathway modulation, and scalp inflammation reduction. Studies show follicle size increase and improved cycling. Anecdotally, users report consistent results — particularly for androgenetic alopecia and early thinning. It is not as potent as minoxidil or finasteride for severe AGA, but it can be combined with them.' },
  { q: 'How do I apply GHK-Cu for hair loss?', a: 'Dissolve GHK-Cu powder in a carrier (distilled water, propylene glycol, or a serum base) and apply directly to the scalp using a dropper or applicator. Part the hair and apply to the areas of thinning. Massage gently for 60 seconds to improve absorption. Apply to a clean, dry scalp — ideally after washing. Daily application produces the best results. Many users mix GHK-Cu into their existing serum or minoxidil solution.' },
  { q: 'How long does GHK-Cu take to regrow hair?', a: 'Hair growth is slow by nature. With GHK-Cu: expect to see reduced shedding and scalp inflammation improvement in the first 4–8 weeks. Miniaturization reversal (thicker, healthier follicles) typically becomes measurable at 2–4 months. Visible hair density improvement from newly regrown hairs: 4–6 months minimum. This is consistent with the biological timeline for the hair growth cycle — GHK-Cu is not a rapid regrowth drug.' },
  { q: 'Can GHK-Cu be combined with finasteride or minoxidil?', a: 'Yes — GHK-Cu has complementary mechanisms to both. With minoxidil: GHK-Cu improves follicle biology and reduces scalp inflammation while minoxidil increases blood flow and prolongs anagen phase. This is an excellent combination. With finasteride: GHK-Cu provides a non-systemic DHT pathway modulation at the follicle level while finasteride blocks systemic DHT conversion. Stacking all three (GHK-Cu + minoxidil + finasteride) is the most comprehensive non-surgical hair protocol available.' },
  { q: 'Is GHK-Cu safe for the scalp?', a: 'GHK-Cu has an excellent safety profile — topically and systemically. It is endogenous (naturally produced in the body), non-carcinogenic, and non-toxic even at high concentrations in animal models. Topically, very few users report irritation (typically from carrier ingredients rather than GHK-Cu itself). It is safe for long-term daily use. No systemic side effects from topical application have been identified.' },
  { q: 'Does GHK-Cu work for eyebrow and beard growth?', a: 'Yes — GHK-Cu\'s follicle-stimulating mechanisms apply to any area with hair follicles, not just the scalp. For eyebrow regrowth (including over-plucked or thinning brows), apply a dilute GHK-Cu solution (0.5–1mg/mL) directly to brow area once daily with a cotton swab or small applicator. Avoid contact with eyes. For beard density improvements, apply to patchy areas of the beard. Results typically take 3–4 months. The same angiogenesis and stem cell activation mechanisms that work on scalp follicles work on facial follicles — GHK-Cu does not distinguish between hair types.' },
  { q: 'What is the difference between GHK-Cu and GHK (without copper)?', a: 'GHK (glycyl-L-histidyl-L-lysine) is the tripeptide backbone. GHK-Cu is GHK bound to a copper ion (Cu²⁺). The copper binding is what makes GHK-Cu biologically active for most of its key functions — including follicle stem cell activation, angiogenesis, and gene regulation. Copper is required for these mechanisms. GHK without copper has some activity but is significantly less potent for hair and skin applications. When purchasing, always verify you are getting GHK-Cu (with copper) and not simply GHK peptide. The molecular weight should be approximately 340.4 Da and the compound should appear as a blue-colored powder (the blue color comes from the copper chelation).' },
  { q: 'What is the minimum effective dose of GHK-Cu for hair loss?', a: 'Research and clinical experience suggest a minimum effective topical dose of approximately 1mg per application applied daily. Some studies show efficacy with concentrations as low as 0.5mg/mL in a serum. For a 30mL serum, a typical preparation is 15–30mg of GHK-Cu powder per bottle (yielding 0.5–1mg/mL). Lower concentrations (0.1–0.2mg/mL) commonly found in commercial cosmetic serums are likely sub-therapeutic for hair regrowth specifically — though they may provide some scalp health benefit. For serious hair loss use, aim for a minimum of 1mg GHK-Cu delivered to the scalp daily.' },
  { q: 'Can GHK-Cu help with hair loss from chemotherapy?', a: 'Chemotherapy-induced alopecia (CIA) is mechanistically different from androgenetic alopecia — it is caused by cytotoxic damage to rapidly dividing hair follicle matrix cells rather than DHT or chronic miniaturization. GHK-Cu\'s relevance to CIA lies in its anti-inflammatory and tissue-repair properties, not its DHT modulation. There is limited direct research on GHK-Cu for CIA specifically, but its mechanisms suggest potential benefit in the recovery phase after chemotherapy ends: accelerating follicle re-entry into anagen, reducing scalp inflammation, and supporting the scalp matrix environment. GHK-Cu is not recommended during active chemotherapy without oncologist approval. Post-chemotherapy, it may support faster hair recovery as part of a broader regrowth protocol.' },
];

const timelineMonths = [
  {
    month: 'Week 1–4',
    title: 'Scalp Environment Improvement',
    color: 'border-slate-500',
    badge: 'bg-slate-500/20 text-slate-300',
    changes: [
      'Reduced scalp inflammation and irritation',
      'Improved scalp hydration and moisture retention',
      'Early angiogenesis around follicles begins',
      'No visible hair changes yet — this is foundation work',
    ],
    measure: 'Note scalp oiliness, itchiness, and redness scores.',
    expectation: 'Do not expect visible hair change. Premature discontinuation at this stage is the most common mistake.',
  },
  {
    month: 'Month 2',
    title: 'Reduced Shedding',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-300',
    changes: [
      'Noticeable reduction in daily hair shedding',
      'Hairs that do shed may be shorter (broken anagen hairs) — this is a good sign',
      'Existing hairs may feel slightly thicker',
      'Follicle miniaturization begins to slow',
    ],
    measure: 'Count hairs on pillow and in shower drain weekly. Take overhead photo.',
    expectation: 'Many users notice shedding reduction as the first sign GHK-Cu is working. Shedding reduction precedes regrowth by 1–2 months.',
  },
  {
    month: 'Month 3',
    title: 'Miniaturization Reversal',
    color: 'border-amber-400/50',
    badge: 'bg-amber-400/20 text-amber-300',
    changes: [
      'Terminal (thick, pigmented) hairs begin replacing vellus (fine, colorless) hairs',
      'Hair shaft diameter measurably increases in affected areas',
      'Scalp coverage looks slightly improved in photos',
      'Hairline recession may stabilize',
    ],
    measure: 'Hair density photos under consistent lighting. Check hair shaft thickness in thinning areas.',
    expectation: 'This is the key milestone — miniaturization reversal is the proof of follicle reactivation. Subtle but significant.',
  },
  {
    month: 'Month 4',
    title: 'New Growth Emergence',
    color: 'border-emerald-500/50',
    badge: 'bg-emerald-500/20 text-emerald-300',
    changes: [
      'Short new hairs visible at scalp surface in thinning areas',
      'Density improvement measurable in photos vs. baseline',
      'Previously dormant follicles producing new vellus hairs that will progressively thicken',
      'Crown or temple coverage improving',
    ],
    measure: 'Side-by-side comparison photos vs. month 1 baseline. Count new hairs in a 1cm² area.',
    expectation: 'New hairs are initially fine and short — they will thicken over subsequent months. This is genuine regrowth, not cosmetic improvement.',
  },
  {
    month: 'Month 5',
    title: 'Density Consolidation',
    color: 'border-emerald-400/60',
    badge: 'bg-emerald-400/20 text-emerald-300',
    changes: [
      'New hairs from month 4 becoming longer and more visible',
      'Hair density visibly improved in treated areas',
      'Hair texture improvement — thicker, stronger shafts',
      'Some follicles completing their first full anagen cycle with GHK-Cu support',
    ],
    measure: 'Overall coverage assessment. Hair pull test (gently pull 60 hairs — fewer than 6 coming out is normal).',
    expectation: 'Continued improvement. Results compound — follicles completing a healthy cycle return for subsequent cycles.',
  },
  {
    month: 'Month 6',
    title: 'Visible Transformation',
    color: 'border-neon-green/60',
    badge: 'bg-emerald-500/20 text-emerald-300',
    changes: [
      'Clear density improvement vs. 6-month-ago baseline photos',
      'Hairline stabilization or partial reversal',
      'Hair strength, thickness, and coverage substantially improved',
      'Foundation for continued long-term maintenance established',
    ],
    measure: 'Full comparison photo set. Trichoscopy or dermatologist follicle count if available.',
    expectation: '6 months is the minimum assessment window. Some follicles require additional time. Continued use maintains and builds on results — cessation will eventually allow the loss process to resume.',
  },
];

const treatmentComparison = [
  {
    treatment: 'GHK-Cu',
    mechanism: 'Follicle stem cell activation, DHT pathway modulation, angiogenesis, anti-inflammatory',
    efficacyAGA: 'Moderate (strong when combined)',
    sideEffects: 'Essentially none — highly tolerable',
    costMonth: '$20–60/mo (DIY serum)',
    timeToResults: '3–4 months',
    canCombine: 'Yes — combines with everything',
    highlight: true,
  },
  {
    treatment: 'Minoxidil',
    mechanism: 'Vasodilation, potassium channel opening, prolongs anagen phase',
    efficacyAGA: 'Moderate — strong for early AGA',
    sideEffects: 'Initial shedding, scalp irritation, rare systemic effects (oral)',
    costMonth: '$5–40/mo',
    timeToResults: '3–6 months',
    canCombine: 'Yes',
    highlight: false,
  },
  {
    treatment: 'Finasteride',
    mechanism: '5-alpha reductase inhibitor — blocks DHT systemically',
    efficacyAGA: 'High for AGA — best DHT blocker',
    sideEffects: 'Sexual side effects (3–5%), post-finasteride syndrome (rare)',
    costMonth: '$10–30/mo',
    timeToResults: '6–12 months',
    canCombine: 'Yes',
    highlight: false,
  },
  {
    treatment: 'PRP',
    mechanism: 'Platelet growth factors stimulate follicle activity',
    efficacyAGA: 'Moderate — results vary',
    sideEffects: 'Scalp soreness, rare infection',
    costMonth: '$200–500/session (4–6 sessions/yr)',
    timeToResults: '3–6 months',
    canCombine: 'Yes (synergistic with GHK-Cu)',
    highlight: false,
  },
  {
    treatment: 'Hair Transplant',
    mechanism: 'Surgical redistribution of DHT-resistant follicles',
    efficacyAGA: 'High for coverage — permanent',
    sideEffects: 'Surgical risks, scarring, shock loss',
    costMonth: '$4,000–15,000 (one-time)',
    timeToResults: '12–18 months',
    canCombine: 'GHK-Cu accelerates post-op healing',
    highlight: false,
  },
];

export default function GhkCuHairLossPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Anti-Aging', item: 'https://bp157stack.com/anti-aging' },
                { '@type': 'ListItem', position: 3, name: 'GHK-Cu for Hair Loss', item: 'https://bp157stack.com/ghk-cu-for-hair-loss' },
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
              headline: 'GHK-Cu for Hair Loss: Does Copper Peptide Actually Regrow Hair?',
              description: 'Complete guide to GHK-Cu for hair regrowth — mechanisms, protocol, and realistic results timeline.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-sm font-semibold tracking-wide">GHK-CU HAIR LOSS GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            GHK-Cu for<br />
            <span className="text-amber-400">Hair Loss</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            GHK-Cu (copper peptide) has multiple proven mechanisms for hair regrowth.
            Here's what the research shows, the complete protocol, and what results to realistically expect.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: '6', label: 'Regrowth mechanisms' },
              { stat: 'Daily', label: 'Application frequency' },
              { stat: '2–4 mo', label: 'First visible results' },
              { stat: 'No sides', label: 'Safety profile' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-amber-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Loss Type Quiz */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 mb-4">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Interactive Tool</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">What Type of Hair Loss Do You Have?</h2>
          <p className="text-slate-400 max-w-2xl">The right GHK-Cu protocol depends on your specific hair loss type. Answer 5 questions to get a personalized assessment and protocol recommendation.</p>
        </div>
        <HairLossTypeQuiz />
      </section>

      {/* Mechanisms */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Why GHK-Cu Works for Hair</h2>
        <p className="text-slate-400 mb-10">GHK-Cu doesn't work through a single pathway — it hits hair follicle biology at 6 different levels simultaneously.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mechanisms.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <CheckCircle className="w-5 h-5 text-amber-400 mb-3" />
              <h3 className="text-white font-bold mb-2">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Comparison Table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-3">GHK-Cu vs. Other Hair Loss Treatments</h2>
          <p className="text-slate-400 mb-8">How GHK-Cu stacks up against the most common hair loss interventions — and why combining them outperforms any single treatment.</p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[900px]">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Treatment</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Mechanism</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Efficacy for AGA</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Side Effects</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Cost/Month</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Time to Results</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Can Combine</th>
                </tr>
              </thead>
              <tbody>
                {treatmentComparison.map((row, i) => (
                  <tr
                    key={row.treatment}
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.04)',
                      background: row.highlight
                        ? 'rgba(245,158,11,0.06)'
                        : i % 2 === 0
                        ? 'rgba(255,255,255,0.01)'
                        : 'transparent',
                    }}
                  >
                    <td className="py-3 px-4">
                      <span className={`font-black ${row.highlight ? 'text-amber-400' : 'text-white'}`}>
                        {row.treatment}
                        {row.highlight && (
                          <span className="ml-2 text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded-full font-bold">THIS GUIDE</span>
                        )}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400 text-xs leading-relaxed max-w-[220px]">{row.mechanism}</td>
                    <td className="py-3 px-4 text-slate-300 text-xs">{row.efficacyAGA}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{row.sideEffects}</td>
                    <td className="py-3 px-4 text-slate-300 text-xs font-semibold">{row.costMonth}</td>
                    <td className="py-3 px-4 text-slate-300 text-xs">{row.timeToResults}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">{row.canCombine}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs mt-4">Cost estimates based on research-grade sourcing for GHK-Cu, generic pricing for minoxidil/finasteride. PRP clinic pricing varies significantly by location.</p>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Application Protocols</h2>
          <div className="space-y-5">
            {protocols.map((p, i) => (
              <div key={p.type} className="glass-card p-6">
                <div className="text-xs font-bold text-amber-400 tracking-widest mb-1">PROTOCOL {i + 1}</div>
                <h3 className="text-white font-black text-lg mb-4">{p.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div><p className="text-slate-500 text-xs mb-1">Dose</p><p className="text-white text-sm font-semibold">{p.dose}</p></div>
                  <div><p className="text-slate-500 text-xs mb-1">Frequency</p><p className="text-white text-sm font-semibold">{p.frequency}</p></div>
                  <div><p className="text-slate-500 text-xs mb-1">Expected Results</p><p className="text-amber-400 text-xs font-semibold">{p.result}</p></div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIY Serum Guide */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-3">How to Make a GHK-Cu Serum at Home</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">Making your own GHK-Cu scalp serum is straightforward, significantly cheaper than pre-made serums, and lets you control the exact concentration. Here is a complete step-by-step guide.</p>

          <div className="space-y-5">
            {/* Equipment */}
            <div className="glass-card p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Step 1 — Equipment</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-semibold text-sm mb-2">You will need:</p>
                  <ul className="space-y-1.5 text-slate-400 text-sm">
                    <li>• 30mL amber glass dropper bottle (UV-protective)</li>
                    <li>• Small digital scale (0.001g precision)</li>
                    <li>• Sterile or distilled water</li>
                    <li>• 1mL measuring pipette or oral syringe</li>
                    <li>• Stir rod or clean toothpick for mixing</li>
                    <li>• Refrigerator storage space</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-2">Optional enhancers:</p>
                  <ul className="space-y-1.5 text-slate-400 text-sm">
                    <li>• Pure aloe vera gel (no additives) — 20–30% of solution</li>
                    <li>• Food-grade vegetable glycerin — 5% of solution</li>
                    <li>• Propylene glycol (USP grade) — 5–10% for penetration</li>
                    <li>• Panthenol (Vitamin B5) — 1% for scalp conditioning</li>
                    <li>• Rosemary extract (0.5%) — evidence-based hair growth support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Carrier recipe */}
            <div className="glass-card p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Step 2 — Carrier Solution Recipe (30mL batch)</div>
              <p className="text-slate-300 text-sm mb-4">For a 1mg/mL GHK-Cu serum (30mg total per bottle — approximately 30 daily doses at 1mg each):</p>
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Ingredient</th>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Amount</th>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['GHK-Cu powder', '30mg (0.030g)', 'Active ingredient'],
                      ['Distilled water', '18–21mL', 'Base solvent'],
                      ['Pure aloe vera gel', '6–8mL', 'Carrier, soothing, absorption aid'],
                      ['Vegetable glycerin', '1.5mL', 'Humectant, viscosity, stability'],
                      ['Propylene glycol (optional)', '1.5mL', 'Penetration enhancer'],
                    ].map(([ing, amt, pur], i) => (
                      <tr key={ing} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                        <td className="py-2 px-4 text-white font-medium">{ing}</td>
                        <td className="py-2 px-4 text-amber-400 font-semibold text-xs">{amt}</td>
                        <td className="py-2 px-4 text-slate-400 text-xs">{pur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dissolving process */}
            <div className="glass-card p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Step 3 — Dissolving GHK-Cu</div>
              <ol className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">1.</span>Weigh 30mg of GHK-Cu powder on your precision scale. GHK-Cu is hygroscopic — work quickly and reseal the container.</li>
                <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">2.</span>Add 2–3mL of distilled water first. GHK-Cu is highly water-soluble and dissolves easily — do not add heat. Stir gently for 30–60 seconds until completely dissolved. The solution will appear faintly blue-green due to the copper.</li>
                <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">3.</span>Add aloe vera gel and glycerin. Stir gently — avoid vigorous shaking which can introduce air bubbles and degrade the peptide.</li>
                <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">4.</span>Top up with remaining distilled water to reach 30mL total volume. Transfer to the amber glass bottle.</li>
                <li className="flex gap-3"><span className="text-amber-400 font-bold shrink-0">5.</span>Label with: ingredient list, concentration (1mg/mL), batch date, use-by date (4 weeks if refrigerated).</li>
              </ol>
            </div>

            {/* Storage */}
            <div className="glass-card p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Step 4 — Storage</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Refrigerator', detail: '4–8°C — stable for 3–4 weeks', icon: '❄️' },
                  { label: 'Freezer', detail: '-20°C — stable for 6 months', icon: '🧊' },
                  { label: 'Room temperature', detail: '72 hours maximum — use quickly', icon: '⚠️' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/3 border border-white/8 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className="text-white font-semibold text-sm">{s.label}</div>
                    <div className="text-slate-400 text-xs mt-1">{s.detail}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-4">GHK-Cu is sensitive to prolonged heat and light exposure. Store away from direct sunlight. The amber bottle provides UV protection. Do not freeze repeatedly — freeze in portions if planning long-term storage.</p>
            </div>

            {/* Application + Titration */}
            <div className="glass-card p-6">
              <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Step 5 — Application Technique & Titration</div>
              <p className="text-slate-300 text-sm mb-4">Apply to a clean, dry scalp. Wet hair significantly reduces absorption by diluting the serum and preventing scalp contact.</p>
              <div className="space-y-3 mb-5">
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 font-bold shrink-0 text-sm">1.</span>
                  <p className="text-slate-300 text-sm">Part hair in affected areas to expose the scalp. Apply serum with the dropper directly to the scalp (not the hair shafts).</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 font-bold shrink-0 text-sm">2.</span>
                  <p className="text-slate-300 text-sm">Massage gently with fingertips for 60 seconds in circular motions — this improves scalp blood flow and aids absorption.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-amber-400 font-bold shrink-0 text-sm">3.</span>
                  <p className="text-slate-300 text-sm">Allow to dry for 5–10 minutes before styling. Do not rinse out. Apply once daily in the morning or before bed — consistency matters more than timing.</p>
                </div>
              </div>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4">
                <div className="text-amber-400 text-xs font-bold uppercase mb-2">Titration Schedule</div>
                <div className="space-y-2">
                  {[
                    ['Weeks 1–2', '0.5mg/mL (half strength)', 'Assess scalp tolerance, establish routine'],
                    ['Weeks 3–4', '1mg/mL (standard)', 'Full therapeutic dose for most users'],
                    ['Month 2+', '1–2mg/mL', 'Increase if well tolerated and seeking faster results'],
                  ].map(([period, dose, note]) => (
                    <div key={period} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm">
                      <span className="text-amber-400 font-semibold w-28 shrink-0">{period}</span>
                      <span className="text-white font-medium">{dose}</span>
                      <span className="text-slate-400 text-xs">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Month-by-Month Timeline */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Month-by-Month Results Timeline</h2>
        <p className="text-slate-400 mb-10 max-w-2xl">What actually happens during 6 months of consistent GHK-Cu use — with realistic expectations and what to measure at each stage.</p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10 hidden sm:block" />
          <div className="space-y-6">
            {timelineMonths.map((month, i) => (
              <div key={month.month} className="relative flex gap-5">
                <div className="shrink-0 flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full border-2 ${month.color} bg-[#060610] flex items-center justify-center text-white font-black text-xs z-10`}>
                    {i + 1}
                  </div>
                </div>
                <div className={`glass-card p-5 flex-1 border-l-2 ${month.color}`}>
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${month.badge} mr-2`}>{month.month}</span>
                      <span className="text-white font-black">{month.title}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {month.changes.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-400" /> {c}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/3 rounded-lg p-3">
                      <div className="text-slate-500 text-[10px] uppercase tracking-wide mb-1">What to measure</div>
                      <p className="text-slate-400 text-xs leading-relaxed">{month.measure}</p>
                    </div>
                    <div className="bg-amber-400/5 rounded-lg p-3">
                      <div className="text-amber-400 text-[10px] uppercase tracking-wide mb-1">Expectation</div>
                      <p className="text-slate-400 text-xs leading-relaxed">{month.expectation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GHK-Cu for Skin */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 mb-6">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Bonus: Skin Benefits</span>
          </div>
          <h2 className="text-2xl font-black text-white mb-3">GHK-Cu for Skin: Anti-Aging Powerhouse</h2>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl">
            The same bottle of GHK-Cu you use for your scalp can transform your skin. GHK-Cu is one of the most comprehensively researched anti-aging peptides in dermatology — with a different dilution, the same compound provides remarkable facial benefits simultaneously.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: 'Collagen Induction',
                desc: 'GHK-Cu directly stimulates fibroblast activity, increasing collagen I, III, and VII synthesis — the structural proteins that give skin its firmness and elasticity. Studies show 70%+ increases in collagen production in fibroblast cultures. Applied topically, this translates to measurably firmer, thicker skin within 3–4 months of consistent use.',
              },
              {
                title: 'Wrinkle Reduction',
                desc: 'GHK-Cu inhibits matrix metalloproteinases (MMPs) — enzymes that break down collagen and elastin. Simultaneously, it upregulates the genes that rebuild the extracellular matrix. This dual action (build + protect) produces more durable improvements than approaches that only stimulate collagen without protecting it from degradation.',
              },
              {
                title: 'Wound Healing & Skin Repair',
                desc: 'GHK-Cu was first identified in plasma for its wound-healing properties. It accelerates re-epithelialization, reduces scar formation (antifibrotic), stimulates nerve fiber growth in skin, and promotes stem cell activity in the dermis. Users post-procedure (peels, microneedling, laser) find GHK-Cu dramatically accelerates healing and reduces post-inflammatory hyperpigmentation.',
              },
              {
                title: 'Skin Barrier & Glycosaminoglycans',
                desc: 'GHK-Cu stimulates production of dermatan sulfate, chondroitin sulfate, and hyaluronic acid in the dermis. These glycosaminoglycans (GAGs) hold water in the skin matrix, improving hydration depth and skin texture. Unlike topical hyaluronic acid which sits on the surface, GHK-Cu causes the skin to produce its own deeper hydration.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-5">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 border border-emerald-500/20">
            <h3 className="text-white font-bold mb-4">How to Apply GHK-Cu to Face (Dual Use Protocol)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/3 rounded-xl p-4">
                <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Face Concentration</div>
                <p className="text-slate-300 text-sm font-semibold">0.1–0.5mg/mL</p>
                <p className="text-slate-400 text-xs mt-1">Much lower than scalp dose — facial skin is more permeable and sensitive</p>
              </div>
              <div className="bg-white/3 rounded-xl p-4">
                <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Timing</div>
                <p className="text-slate-300 text-sm font-semibold">PM routine, after cleansing</p>
                <p className="text-slate-400 text-xs mt-1">Apply after toner, before moisturizer. Can be used AM with SPF over top</p>
              </div>
              <div className="bg-white/3 rounded-xl p-4">
                <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Synergistic with</div>
                <p className="text-slate-300 text-sm font-semibold">Retinol (separate AM/PM)</p>
                <p className="text-slate-400 text-xs mt-1">Do not layer simultaneously with high-dose Vitamin C (copper oxidation)</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Separate your scalp serum (1–2mg/mL) from your facial serum (0.1–0.5mg/mL) by dilution — just add more carrier solution to a portion of your batch. The same GHK-Cu powder sources both. Apply scalp serum AM to thinning areas, facial serum PM after cleansing. Both applications use the same copper peptide — no separate products needed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">GHK-Cu Hair Loss FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-amber-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Get GHK-Cu Copper Peptide</h2>
          <p className="text-slate-400 mb-6">COA-verified GHK-Cu — for topical hair application and systemic anti-aging.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View GHK-Cu <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/ghk-cu" className="btn-secondary px-8 py-4">GHK-Cu Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/ghk-cu-for-hair-loss" />
    </div>
  );
}
