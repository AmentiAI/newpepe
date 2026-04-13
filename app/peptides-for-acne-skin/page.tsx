import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Shield, FlaskConical,
  AlertTriangle, Microscope, HeartPulse, Layers,
} from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import AcneTriggerAssessment from '@/components/AcneTriggerAssessment';

export const metadata: Metadata = {
  title: 'Peptides for Acne & Skin: BPC-157 Gut-Skin, GHK-Cu Scar Protocol (2026)',
  description: 'BPC-157 for acne — the gut-skin axis mechanism, cystic acne, isotretinoin protection, and GHK-Cu for PIH and scar remodeling. Complete evidence-based protocol guide 2026.',
  keywords: 'peptides for acne, BPC-157 acne, GHK-Cu acne scars, peptides for skin, BPC-157 gut skin, acne scar peptides, BPC-157 isotretinoin, peptides for PIH',
  openGraph: {
    title: 'Peptides for Acne & Skin: BPC-157 and GHK-Cu Protocol 2026',
    description: 'BPC-157 heals the gut-skin axis. GHK-Cu rebuilds skin architecture. The complete peptide acne protocol.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-acne-skin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Acne & Skin Guide 2026',
    description: 'BPC-157 and GHK-Cu for acne, PIH, and scar remodeling — complete protocol.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-acne-skin',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const gutSkinMechanisms = [
  {
    title: 'Leaky Gut → Systemic Inflammation',
    desc: 'A compromised intestinal barrier allows lipopolysaccharides (LPS) and undigested food particles to enter the bloodstream. These trigger systemic inflammatory cytokine production (IL-1β, TNF-α, IL-6) that drives skin barrier dysfunction and sebaceous gland hyperactivity — fueling acne from the inside.',
    peptide: 'BPC-157 repairs tight junctions in intestinal epithelium, directly sealing the leaky gut mechanism.',
  },
  {
    title: 'Microbiome Dysbiosis → Skin Dysbiosis',
    desc: 'Gut microbiome imbalances (excess Propionibacterium, depleted Lactobacillus/Bifidobacterium) correlate directly with skin microbiome changes, including increased Cutibacterium acnes proliferation on skin. BPC-157 modulates gut microbiome composition toward healthier profiles.',
    peptide: 'BPC-157 oral addresses the gut microbiome root cause; topical GHK-Cu provides skin barrier repair.',
  },
  {
    title: 'Cortisol Loop → Sebum → Acne',
    desc: 'Chronic stress elevates cortisol → increases sebum production via adrenal androgens → creates ideal conditions for C. acnes proliferation → inflammatory acne. The gut-brain-skin axis means gut dysfunction amplifies the cortisol stress response.',
    peptide: 'BPC-157\'s gut-brain axis modulation reduces the cortisol amplification loop.',
  },
  {
    title: 'Zinc and Nutrient Malabsorption',
    desc: 'Gut inflammation impairs nutrient absorption, including zinc — a critical mineral for acne management (zinc is a 5α-reductase inhibitor, reducing DHT-driven sebum, and has direct anti-microbial properties on skin). Many acne patients are subclinically zinc deficient due to gut dysfunction.',
    peptide: 'BPC-157 restores gut absorption capacity, improving zinc and other acne-relevant nutrient levels.',
  },
];

const acneTypes = [
  {
    type: 'Hormonal Acne',
    pattern: 'Jaw, chin, lower cheeks. Cyclical in women. Back acne common.',
    primaryApproach: 'BPC-157 oral (reduces systemic inflammation) + dietary intervention (low-glycemic, dairy-free)',
    topicalApproach: 'GHK-Cu for barrier repair and PIH reduction',
    additionalNotes: 'Zinc (30 mg/day) inhibits 5α-reductase, reducing the DHT-driven sebum production that drives hormonal acne.',
    color: 'border-rose-500/40',
    badge: 'bg-rose-500/20 text-rose-700',
  },
  {
    type: 'Cystic / Nodular Acne',
    pattern: 'Deep, painful, large lesions. Chin, jaw, cheeks, back. High inflammation.',
    primaryApproach: 'BPC-157 oral at higher dose (500 mcg twice daily) — the strongest anti-inflammatory approach available without prescription',
    topicalApproach: 'GHK-Cu for post-lesion repair; avoid direct application to active inflamed lesions',
    additionalNotes: 'If on isotretinoin (Accutane), BPC-157 oral is used by practitioners to protect gut lining from Accutane\'s severe GI side effects.',
    color: 'border-orange-500/40',
    badge: 'bg-orange-500/20 text-orange-300',
  },
  {
    type: 'Comedonal Acne',
    pattern: 'Whiteheads and blackheads. Forehead, nose, chin. Poor skin barrier.',
    primaryApproach: 'GHK-Cu topical for pore tightening, skin barrier repair, and sebum regulation',
    topicalApproach: 'GHK-Cu at 1–2 mg/mL, applied after niacinamide serum',
    additionalNotes: 'BPC-157 oral supports from the gut side. Type IV collagen improvement from GHK-Cu directly addresses pore appearance.',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-700',
  },
  {
    type: 'Post-Inflammatory Hyperpigmentation (PIH)',
    pattern: 'Red or dark marks left after acne heals. Can persist for months–years.',
    primaryApproach: 'GHK-Cu topical — gene expression normalization addresses abnormal melanin production in post-inflammatory skin',
    topicalApproach: 'GHK-Cu + Niacinamide 10% (inhibits melanin transfer to keratinocytes) + Vitamin C serum',
    additionalNotes: 'Derma rolling (0.25mm) over PIH marks increases GHK-Cu absorption dramatically, accelerating resolution.',
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-700',
  },
];

const accutaneProtocol = [
  {
    phase: 'During Isotretinoin Course',
    protocol: 'BPC-157 oral 250 mcg twice daily (before meals)',
    rationale: 'Isotretinoin (Accutane) is associated with significant GI side effects including inflammatory bowel disease, colitis, and gut microbiome disruption in a subset of users. BPC-157\'s primary mechanism — healing intestinal epithelium and modulating gut inflammation — directly addresses these risks.',
    timing: 'Take BPC-157 30 minutes before meals, throughout the isotretinoin course',
  },
  {
    phase: 'Post-Accutane: Scar Phase',
    protocol: 'GHK-Cu topical (1–2 mg/mL serum) + Derma roller 0.5mm every 7 days',
    rationale: 'Isotretinoin dramatically reduces sebum and acne, but does not address existing scarring. Post-course, GHK-Cu topical begins the collagen remodeling process on acne scars, PIH, and textural damage left by years of acne.',
    timing: 'Begin 4–6 weeks after completing isotretinoin course (when skin sensitivity normalizes)',
  },
  {
    phase: 'Long-Term Maintenance',
    protocol: 'GHK-Cu topical daily + BPC-157 oral 2–3x per week (maintenance dose)',
    rationale: 'Prevent recurrence of gut dysfunction while continuing scar remodeling. GHK-Cu maintenance application sustains the skin architecture improvements ongoing.',
    timing: 'Indefinite maintenance protocol',
  },
];

const dietProtocol = [
  { item: 'Low-glycemic diet', mechanism: 'Reduces IGF-1 and insulin spikes → reduces sebum production. High-glycemic foods (white bread, sugar, processed carbs) are the most evidence-supported dietary acne triggers.', impact: 'High' },
  { item: 'Dairy elimination trial', mechanism: 'Dairy contains IGF-1 and androgenic precursors (particularly skim milk) that directly stimulate sebaceous glands. 4-week elimination trial identifies dairy-sensitive cases.', impact: 'High (in dairy-sensitive individuals)' },
  { item: 'Omega-3 supplementation (2–3g EPA+DHA)', mechanism: 'Reduces arachidonic acid cascade → reduces inflammatory prostaglandins that drive cystic acne inflammation. Documented benefit in RCTs.', impact: 'Moderate' },
  { item: 'Zinc (25–30 mg/day as picolinate/glycinate)', mechanism: '5α-reductase inhibition reduces DHT-driven sebum. Direct antimicrobial activity against C. acnes. Anti-inflammatory at sebaceous glands. Meta-analysis confirms zinc efficacy vs placebo.', impact: 'Moderate-High' },
  { item: 'Probiotic (Lactobacillus rhamnosus GG)', mechanism: 'Directly supports gut microbiome diversity. Synergistic with BPC-157\'s gut healing — BPC-157 creates the environment for beneficial bacteria to flourish.', impact: 'Moderate (when gut dysbiosis present)' },
];

const timeline = [
  {
    period: '4–6 Weeks',
    title: 'Active Acne Reduction',
    events: [
      'BPC-157 reduces intestinal permeability — systemic inflammatory load decreasing',
      'Fewer new inflammatory lesions forming',
      'Skin barrier function improving with GHK-Cu',
      'Gut symptoms (if present) noticeably improving',
    ],
    color: 'border-rose-500/40',
    badge: 'bg-rose-500/20 text-rose-700',
  },
  {
    period: '8–12 Weeks',
    title: 'Skin Architecture Repair',
    events: [
      'PIH (post-inflammatory hyperpigmentation) beginning to fade',
      'Pore appearance improving (Type IV collagen basement membrane rebuilding)',
      'Skin texture smoother — surface irregularities reducing',
      'New acne occurrence significantly reduced or eliminated',
    ],
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-700',
  },
  {
    period: '3–6 Months',
    title: 'PIH Resolution',
    events: [
      'Post-inflammatory hyperpigmentation mostly resolved with GHK-Cu + niacinamide protocol',
      'Skin tone more even and uniform',
      'Pore size visibly reduced compared to baseline',
      'Shallow scars beginning to fill in',
    ],
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-700',
  },
  {
    period: '6–12 Months',
    title: 'Scar Remodeling',
    events: [
      'Deep acne scars (ice pick, boxcar, rolling) improving with derma roller + GHK-Cu protocol',
      'Overall skin quality dramatically improved vs pre-protocol baseline',
      'Skin collagen density measurably improved',
      'Long-term gut health normalized',
    ],
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-700',
  },
];

const faqs = [
  {
    q: 'How does BPC-157 help with acne specifically?',
    a: 'BPC-157 addresses acne through the gut-skin axis — a route that most topical treatments completely miss. The mechanism: BPC-157 heals tight junctions in the intestinal epithelium, reducing "leaky gut" — the condition where bacterial endotoxins (LPS) cross the gut barrier into the bloodstream. Once in circulation, LPS triggers systemic inflammatory cytokine production (IL-1β, TNF-α, IL-6) that drives sebaceous gland hyperactivity, skin barrier dysfunction, and C. acnes proliferation. By sealing the gut, BPC-157 reduces this systemic inflammatory driver. Research documents BPC-157\'s effects on VEGF, nitric oxide production, and direct cytokine modulation — all relevant to the inflammatory cascade behind cystic acne.',
  },
  {
    q: 'Can I use BPC-157 while on Accutane (isotretinoin)?',
    a: 'BPC-157 oral is used alongside isotretinoin by practitioners specifically to protect the gut from Accutane\'s known gastrointestinal side effects. Isotretinoin is associated with increased risk of inflammatory bowel disease, ulcerative colitis, and Crohn\'s disease in susceptible users — likely via disruption of the intestinal epithelium and microbiome. BPC-157\'s primary mechanism (healing gut epithelial tight junctions, modulating intestinal inflammation, supporting gut microbiome health) directly counteracts these mechanisms. Standard protocol: BPC-157 250 mcg oral twice daily throughout the isotretinoin course. Always coordinate with the prescribing physician.',
  },
  {
    q: 'Which type of acne responds best to peptides?',
    a: 'Cystic and hormonal acne — both driven by systemic inflammatory processes with a strong gut-skin component — respond best to BPC-157 oral. The mechanism is ideal for these types: reducing the systemic cytokine cascade (IL-1β, TNF-α) that drives cystic inflammation, and addressing the gut permeability that amplifies the hormonal acne inflammatory response. Comedonal acne (blackheads, whiteheads) responds better to GHK-Cu topical which directly improves the skin barrier and pore architecture (Type IV collagen basement membrane). PIH and scar damage respond best to GHK-Cu topical with derma rolling, which activates the collagen remodeling process at the scar site.',
  },
  {
    q: 'How do I use GHK-Cu for acne scars?',
    a: 'The most effective protocol for GHK-Cu + acne scar treatment: (1) Derma roll the scarred area with a 0.5mm roller (once per week — allow 7 days healing between sessions). (2) Immediately after rolling, apply GHK-Cu serum (1–2 mg/mL) to the rolled area. The microchannels allow dramatically higher GHK-Cu penetration to the dermis where scar remodeling occurs. (3) On non-rolling days, apply GHK-Cu serum once or twice daily. (4) For PIH specifically: add Niacinamide 10% serum and Vitamin C 15–20% serum to the protocol. (5) Use SPF 30+ sunscreen daily — UV exposure stimulates melanin production and worsens PIH. Timeline for visible scar improvement: 3–6 months minimum; 6–12 months for maximum remodeling.',
  },
  {
    q: 'Does GHK-Cu cause acne or worsen breakouts?',
    a: 'GHK-Cu is anti-inflammatory at the skin barrier level — it does not cause or worsen acne breakouts. In fact, it has properties that improve the conditions that lead to acne: it reduces skin inflammation (via cytokine modulation), improves the skin barrier (reducing bacteria entry), and modulates skin immune responses. However, the carrier solution you use to dissolve GHK-Cu matters. If using propylene glycol at high concentrations or coconut oil-based carriers, these can be comedogenic (pore-clogging) and cause breakouts. Use a non-comedogenic carrier: distilled water + glycerin + minimal propylene glycol (10% or less). Alternatively, use a commercially formulated GHK-Cu serum with a verified non-comedogenic formula.',
  },
  {
    q: 'How long does it take for BPC-157 to improve acne?',
    a: 'The timeline depends on how significant the gut-skin axis component is in your acne. Users with clear gut issues (bloating, IBS, irregular digestion) alongside acne typically see the most dramatic response: gut symptoms improve within 2–4 weeks, followed by reduced new acne lesion formation at 4–6 weeks, and significantly improved skin by 8–12 weeks. Users without obvious gut symptoms have a more variable response — the gut-skin axis may still be involved subclinically, but the benefit is less predictable. In a 2-month trial of BPC-157 with no result on acne, it is worth questioning whether the gut-skin axis is the primary driver vs pure hormonal or topical factors.',
  },
  {
    q: 'Can peptides help with hormonal acne in women?',
    a: 'Yes — though the approach is important. Hormonal acne in women (typically cyclical, jaw/chin predominant, related to the luteal phase of the menstrual cycle) is driven by progesterone → androgens → sebum → C. acnes inflammation. BPC-157 addresses the systemic inflammatory amplification of this hormonal cycle without interfering with hormone levels themselves (unlike anti-androgens like spironolactone). GHK-Cu topically addresses the skin barrier and PIH that result from the acne. Additionally, zinc supplementation (25–30 mg/day) is one of the most evidence-supported non-prescription interventions for hormonal acne due to its 5α-reductase inhibition (reducing DHT conversion at the sebaceous gland level) — pair this with the peptide protocol for comprehensive hormonal acne management.',
  },
];

export default function PeptidesForAcneSkinPage() {
  return (
    <main className="min-h-screen bg-white text-gray-700">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-emerald-50/30" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-2 text-rose-700 text-sm font-semibold">
            <HeartPulse className="w-4 h-4" />
            Acne &amp; Skin Healing
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Peptides for{' '}
            <span className="text-emerald-700">Acne &amp; Skin</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acne and acne scarring are among the most significant appearance detractors. BPC-157 heals the gut-skin axis that drives inflammation. GHK-Cu rebuilds the skin architecture left damaged by years of acne.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} rel="nofollow noopener noreferrer" className="btn-cta flex items-center gap-2">
              View Acne Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/bpc-157-for-gut-health" className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:border-gray-400 transition-colors">
              BPC-157 Gut Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Why Acne is a Looksmaxxing Priority */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Why Acne is a Looksmaxxing Priority</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-gray-600 leading-relaxed">
              Research on facial attractiveness consistently identifies skin quality as one of the highest-weighted variables in appearance assessment — ahead of facial symmetry, proportions, and even bone structure in some studies. Active acne, and particularly the scarring it leaves, are among the most significant negative signals in skin quality assessment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unlike aging-related appearance changes (which are gradual and expected), acne presents a visible inflammatory disease that signals health and hormonal dysregulation. Post-inflammatory hyperpigmentation (PIH) and acne scarring can persist for years — sometimes decades — after the active acne resolves, creating a permanent appearance burden from a condition that was hopefully temporary.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The peptide approach to acne is fundamentally different from conventional dermatology: instead of killing bacteria on the skin surface (benzoyl peroxide, antibiotics) or suppressing sebum gland activity (isotretinoin), it addresses the systemic inflammatory root causes — particularly the gut-skin axis — while simultaneously rebuilding the skin architecture damaged by years of inflammation.
            </p>
          </div>
        </div>
      </section>

      {/* Gut-Skin Axis */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">The Gut-Skin Axis: Why BPC-157 Works for Acne</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              70% of the immune system is gut-associated. Gut dysfunction drives skin inflammation through four distinct mechanisms.
            </p>
          </div>
          <div className="space-y-4">
            {gutSkinMechanisms.map((mechanism) => (
              <div key={mechanism.title} className="glass-card p-5 space-y-3">
                <h3 className="text-gray-800 font-bold">{mechanism.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{mechanism.desc}</p>
                <div className="pt-2 border-t border-slate-700/50 flex items-start gap-2">
                  <Shield className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                  <p className="text-rose-700 text-sm">{mechanism.peptide}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-rose-700">The BPC-157 mechanism for gut healing:</strong> BPC-157 (Body Protection Compound-157) was originally isolated from gastric juice. Its primary documented mechanism is repair of intestinal tight junctions — the molecular seals between gut epithelial cells that prevent pathological permeability. It upregulates tight junction proteins (ZO-1, occludin, claudin) and activates the growth hormone receptor locally in gut tissue. In rat models of induced colitis and leaky gut, BPC-157 dramatically reduces intestinal permeability markers and systemic inflammation within 2–4 weeks. This is the mechanism behind its effectiveness for gut-driven skin inflammation.
            </p>
          </div>
        </div>
      </section>

      {/* Acne Types */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Acne Types &amp; Peptide Approach</h2>
          <div className="space-y-5">
            {acneTypes.map((type) => (
              <div key={type.type} className={`glass-card p-6 border ${type.color} space-y-4`}>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${type.badge}`}>{type.type}</span>
                </div>
                <p className="text-gray-500 text-sm italic">{type.pattern}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Primary Approach</span>
                    <p className="text-gray-600 mt-1">{type.primaryApproach}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Topical Approach</span>
                    <p className="text-gray-600 mt-1">{type.topicalApproach}</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-700/50">
                  <p className="text-gray-500 text-xs">{type.additionalNotes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Tool */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Find Your Personalized Protocol</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Answer 3 questions to get your tailored peptide acne protocol based on your specific acne type and gut status.
            </p>
          </div>
          <AcneTriggerAssessment />
        </div>
      </section>

      {/* Accutane + BPC-157 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">The Isotretinoin + BPC-157 Protocol</h2>
          <div className="glass-card p-6 border border-amber-500/30 bg-amber-500/5">
            <p className="text-amber-700 font-semibold">Important Context</p>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Isotretinoin (Accutane) is the most effective pharmaceutical acne treatment available — it produces permanent remission in 60–80% of users. However, its gastrointestinal side effects are significant: IBD risk increase (particularly for those with family history), gut dysbiosis, and inflammatory bowel symptoms during treatment affect a meaningful percentage of users. BPC-157 oral is used by practitioners to protect the gut throughout the isotretinoin course. This is not a substitute for medical monitoring — coordinate with the prescribing dermatologist.
            </p>
          </div>
          <div className="space-y-4">
            {accutaneProtocol.map((phase) => (
              <div key={phase.phase} className="glass-card p-5 space-y-3">
                <h3 className="text-gray-800 font-bold">{phase.phase}</h3>
                <p className="text-rose-700 text-sm font-medium">{phase.protocol}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{phase.rationale}</p>
                <p className="text-gray-500 text-xs"><span className="text-gray-500">Timing:</span> {phase.timing}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Protocol */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Diet Interventions That Amplify Peptide Effects</h2>
          <div className="space-y-3">
            {dietProtocol.map((item) => (
              <div key={item.item} className="glass-card p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-gray-800 font-semibold text-sm">{item.item}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${item.impact.startsWith('High') ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'}`}>
                      {item.impact}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.mechanism}</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Expected Timeline</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Active acne responds faster than scarring — the two phases require different timelines and different interventions.</p>
          </div>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.period} className={`glass-card p-6 border ${t.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ${t.badge}`}>{t.period}</span>
                  <div className="space-y-3">
                    <h3 className="text-gray-800 font-bold">{t.title}</h3>
                    <ul className="space-y-1">
                      {t.events.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                          {e}
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Acne &amp; Peptides FAQ</h2>
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
          <FlaskConical className="w-12 h-12 text-rose-400 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">Start Your Acne Protocol</h2>
          <p className="text-gray-500">
            BPC-157 oral + GHK-Cu topical is the most comprehensive acne and post-acne skin repair protocol available through research peptides. See active acne reduction in 4–6 weeks.
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

      <InternalLinks path="/peptides-for-acne-skin" />
    </main>
  );
}
