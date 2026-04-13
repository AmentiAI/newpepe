import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, FlaskConical } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import SkinQualityAssessment from '@/components/SkinQualityAssessment';

export const metadata: Metadata = {
  title: 'Peptides for Skin Quality: GHK-Cu, SNAP-8, BPC-157 & More (2026)',
  description: 'The definitive guide to using research peptides for skin quality. GHK-Cu\'s 31% gene reset, SNAP-8 wrinkle mechanism, Epithalon telomere extension, and BPC-157 gut-skin axis — evidence-based protocols for every skin concern.',
  keywords: 'peptides for skin quality, GHK-Cu skin, SNAP-8 skin, BPC-157 skin, peptides for glowing skin, peptides for collagen, skin quality peptides, research peptides skin',
  openGraph: {
    title: 'Peptides for Skin Quality: Complete Guide 2026',
    description: 'Science-backed peptide protocols for skin texture, firmness, luminosity, and anti-aging. GHK-Cu, SNAP-8, Epithalon, and BPC-157.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-skin-quality',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Skin Quality: The Complete 2026 Guide',
    description: 'GHK-Cu gene reset, SNAP-8 wrinkle mechanism, BPC-157 gut-skin axis — evidence-based skin peptide protocols.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-skin-quality',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const skinDimensions = [
  {
    dimension: 'Texture',
    icon: '◈',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    desc: 'Surface smoothness and uniformity. Influenced by collagen density in the dermis, rate of cell turnover, and integrity of the stratum corneum. Poor texture manifests as rough patches, unevenness, and enlarged visible pores.',
    peptides: ['GHK-Cu', 'BPC-157'],
    measurement: 'Macro photography under consistent lighting, 4-week intervals',
  },
  {
    dimension: 'Pore Size',
    icon: '◉',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    desc: 'Determined by the collagen scaffold around follicle openings. As collagen weakens with age, pores lose their structural support and appear larger. GHK-Cu\'s collagen synthesis directly tightens pore walls.',
    peptides: ['GHK-Cu', 'CJC-1295/Ipamorelin'],
    measurement: '10x magnification skin scope or high-resolution camera comparison',
  },
  {
    dimension: 'Firmness & Elasticity',
    icon: '✦',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    desc: 'Collagen I and III provide structural firmness; elastin provides snap-back elasticity. After age 25, collagen production declines approximately 1% per year. GHK-Cu directly reverses this decline via gene upregulation.',
    peptides: ['GHK-Cu', 'CJC-1295/Ipamorelin', 'Epithalon', 'IGF-1 LR3'],
    measurement: 'Cutometer (clinical) or pinch test on cheek — speed of snap-back',
  },
  {
    dimension: 'Luminosity & Glow',
    icon: '☀',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    desc: 'Results from skin microcirculation density, water content, and light scattering properties of the collagen matrix. Dull skin has reduced blood vessel density and dehydrated intercellular spaces. GHK-Cu drives angiogenesis that literally increases blood vessel density in the dermis.',
    peptides: ['GHK-Cu', 'BPC-157', 'Epithalon'],
    measurement: 'Chromameter or visual comparison in natural diffuse light',
  },
  {
    dimension: 'Hydration',
    icon: '💧',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    desc: 'Depends on both barrier function (preventing trans-epidermal water loss) and the dermal water-binding capacity of hyaluronic acid and glycosaminoglycans — which require collagen as their scaffolding. GHK-Cu upregulates collagen and hyaluronic acid production simultaneously.',
    peptides: ['GHK-Cu', 'Epithalon'],
    measurement: 'Corneometer or skin conductance; subjective tightness / plumpness assessment',
  },
  {
    dimension: 'Tone Evenness',
    icon: '🎨',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    desc: 'Uneven pigmentation driven by post-inflammatory hyperpigmentation (PIH), photodamage, and hormonal melanin overproduction. GHK-Cu\'s gene expression reset includes downregulating inflammatory signals that drive excess melanin. Epithalon\'s cellular rejuvenation produces full-face tone normalization.',
    peptides: ['GHK-Cu', 'Epithalon', 'BPC-157'],
    measurement: 'MEXAMETER (clinical) or standardized photography with color reference card',
  },
];

const peptideDeepDives = [
  {
    name: 'GHK-Cu',
    subtitle: '31% Gene Reset + 5-Type Collagen Synthesis',
    color: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-700',
    sections: [
      {
        title: 'The 31% Gene Reset',
        content: 'A 2012 analysis of genome-wide gene expression data by Pickart and Margolina demonstrated that GHK-Cu modulates the activity of over 4,000 human genes. Of the genes altered by aging, approximately 31% are reset toward a youthful expression pattern by GHK-Cu. This is not a generalized antioxidant effect — it is targeted gene regulation via specific receptor interactions and signaling cascade modulation. The implications for skin biology are profound: aged skin does not just lack collagen, it has entire gene expression programs shifted toward a pro-aging state, and GHK-Cu reverses a significant fraction of that shift.',
      },
      {
        title: 'Collagen Types I, III, IV: What They Do',
        content: 'GHK-Cu upregulates multiple distinct collagen types: Collagen I (the primary structural collagen, providing tensile strength and firmness), Collagen III (more flexible, provides skin resilience; also the collagen that leads early wound healing), Collagen IV (basement membrane collagen, critical for skin adhesion and structural integrity), Collagen VII (anchoring fibrils that attach epidermis to dermis — reduced in aging skin causing sagging), and Collagen XVII (hemidesmosome component, important for skin-hair follicle interface). The simultaneous upregulation of multiple collagen types produces comprehensive structural improvement that single-mechanism cosmetics cannot replicate.',
      },
      {
        title: 'Proteasome Activation',
        content: 'Beyond collagen synthesis, GHK-Cu activates proteasome function — the cellular machinery that degrades and clears damaged proteins. Aged skin accumulates carbonylated proteins, advanced glycation end-products (AGEs), and other damaged cellular components. GHK-Cu\'s proteasome upregulation accelerates the clearance of this molecular damage, contributing to the visible skin clarity and luminosity improvements users report.',
      },
      {
        title: 'Protocol for Skin',
        content: 'Topical: 1–2mg GHK-Cu dissolved in serum (water, propylene glycol, or hyaluronic acid base), applied to face and neck daily. Injectable: 0.5–1mg SC daily for systemic effects. Timeline: 4–8 weeks topical for initial improvements; 8–12 weeks for full collagen remodeling effect. Concentration matters — commercial cosmetics (0.001–0.01%) are significantly below research-grade concentrations (0.1–0.2% = ~0.5–1mg/mL).',
      },
    ],
  },
  {
    name: 'SNAP-8',
    subtitle: 'SNARE Complex Inhibition → Wrinkle Relaxation',
    color: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-700',
    sections: [
      {
        title: 'How SNAP-8 Relaxes Wrinkles',
        content: 'SNAP-8 (acetyl glutamyl heptapeptide-3) is an 8 amino acid peptide that mimics the N-terminal end of SNAP-25 protein. SNAP-25 is a critical component of the SNARE complex — the molecular machinery that docks acetylcholine vesicles to the neuromuscular junction membrane. By competing with SNAP-25 for binding sites in the SNARE complex, SNAP-8 reduces the efficiency of neurotransmitter release, weakening (but not eliminating) facial muscle contraction strength. This is the same fundamental mechanism as botulinum toxin, but without the neurotoxin, without injection into muscle tissue, and without the risk of paralysis.',
      },
      {
        title: 'SNAP-8 vs. Argireline (Hexapeptide-3)',
        content: 'Argireline is the better-known 6 amino acid SNARE inhibitor. SNAP-8 is the 8 amino acid version with a longer sequence providing improved topical penetration and receptor binding duration. Clinical studies show SNAP-8 reduces wrinkle depth by up to 63% at 10% concentration over 28 days, compared to approximately 30% for Argireline in head-to-head evaluations. SNAP-8 is considered the superior SNARE-inhibiting peptide for topical applications.',
      },
      {
        title: 'Application Protocol',
        content: 'Concentration: 5% for mild dynamic wrinkles; 7.5% for moderate; 10% for deep expression lines. Application: fingertip or cotton pad to targeted areas twice daily (AM and PM). Carrier: water-based serum with hyaluronic acid or aloe vera base — avoid heavy occlusive creams that reduce penetration. Best for: forehead lines, crow\'s feet (periorbital), frown lines (glabella), perioral lines, neck bands.',
      },
    ],
  },
  {
    name: 'Epithalon',
    subtitle: 'Telomere Extension → Skin Cell Longevity',
    color: 'text-rose-400',
    badge: 'bg-rose-500/20 text-rose-700',
    sections: [
      {
        title: 'Telomeres and Skin Aging',
        content: 'Every cell division shortens telomeres — the protective caps on chromosomes. When telomeres reach a critically short length, the cell enters senescence (stops dividing) or apoptosis. Skin cells have a high turnover rate, meaning they hit telomere limits faster than many other tissues. Senescent skin cells accumulate and secrete pro-inflammatory cytokines (the "senescence-associated secretory phenotype" or SASP), which damages surrounding healthy skin tissue. This accumulation of senescent cells is a primary driver of skin aging.',
      },
      {
        title: 'How Epithalon Reverses This',
        content: 'Epithalon (Ala-Glu-Asp-Gly) activates telomerase — the enzyme that adds telomere repeats back to chromosome ends. Originally isolated from the pineal gland by Dr. Vladimir Khavinson at the St. Petersburg Institute of Bioregulation, Epithalon has demonstrated telomere elongation in cell culture studies. In a pivotal clinical study, patients receiving Epithalon showed measurable telomere length increases over 3-year follow-up periods. For skin specifically, this translates to fibroblasts (collagen-producing cells) and keratinocytes maintaining replication capacity for longer — producing more collagen and turning over the epidermis more effectively.',
      },
      {
        title: 'Protocol',
        content: 'Standard Epithalon course: 10mg total over 10 consecutive days (1mg/day SC or IV). Frequency: once per quarter initially; maintenance at twice per year. Some users prefer 20mg over 20 days for a more intensive first course. Effects develop 4–6 weeks after the course ends as telomerase-stimulated cells complete additional divisions.',
      },
    ],
  },
  {
    name: 'BPC-157',
    subtitle: 'Gut-Skin Axis Repair → Systemic Skin Improvement',
    color: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-700',
    sections: [
      {
        title: 'The Gut-Skin Axis',
        content: 'The gut-skin axis is a bidirectional communication system between intestinal microbiome health and skin condition. A compromised gut barrier ("leaky gut" or intestinal hyperpermeability) allows bacterial lipopolysaccharides (LPS) and other inflammatory molecules to enter systemic circulation. This systemic inflammation manifests in the skin as inflammatory acne, rosacea flares, eczema exacerbations, psoriasis, and dullness. BPC-157 is the most effective peptide for healing intestinal hyperpermeability — it repairs tight junction proteins, reduces intestinal inflammation, and normalizes gut motility.',
      },
      {
        title: 'Beyond Gut: Wound Healing and Scar Prevention',
        content: 'BPC-157 drives angiogenesis in wound tissue, accelerating the delivery of oxygen and nutrients needed for repair. It activates fibroblasts to produce collagen in a more organized pattern (type I vs. type III dominant), producing scars with better texture and color match. For acne, BPC-157\'s anti-inflammatory effect at both the gut and local tissue level reduces the severity of individual lesions and the PIH they leave behind. Applied locally to healing wounds, BPC-157 improves scar cosmetic outcomes compared to untreated controls in multiple animal model studies.',
      },
    ],
  },
];

const skinProtocols = [
  {
    type: 'Dry/Aging Skin',
    color: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-700',
    peptides: ['GHK-Cu 1–2mg topical PM', 'SNAP-8 5–7.5% topical AM', 'Epithalon quarterly cycle'],
    focus: 'Maximum collagen support, wrinkle relaxation, cellular longevity',
    note: 'Use rich carrier base (hyaluronic acid + ceramide) to address barrier compromise alongside peptides.',
  },
  {
    type: 'Oily/Acne-Prone',
    color: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-700',
    peptides: ['BPC-157 250–500mcg SC 5x/week', 'GHK-Cu 1mg lightweight water-based serum PM'],
    focus: 'Gut-skin axis repair, systemic inflammation reduction, sebum regulation',
    note: 'Avoid heavy cream carriers. Water, aloe, or hyaluronic acid base only. Address gut root cause first.',
  },
  {
    type: 'Dull/Uneven Skin',
    color: 'border-emerald-500/30',
    badge: 'bg-emerald-500/20 text-emerald-700',
    peptides: ['GHK-Cu 1–2mg topical AM + PM', 'Epithalon quarterly cycle', 'BPC-157 for systemic inflammation'],
    focus: 'Angiogenesis for microcirculation, cellular rejuvenation, PIH reduction',
    note: 'GHK-Cu\'s angiogenesis effect (more blood vessels in dermis) is the primary mechanism for luminosity — results appear at 4–6 weeks.',
  },
  {
    type: 'Sensitive/Redness-Prone',
    color: 'border-rose-500/30',
    badge: 'bg-rose-500/20 text-rose-700',
    peptides: ['BPC-157 250mcg SC 5x/week (systemic anti-inflammatory)', 'GHK-Cu 0.5mg in aloe base, every other day → daily'],
    focus: 'Systemic inflammation reduction first; gentle topical introduction',
    note: 'GHK-Cu is unusually well-tolerated even by reactive skin due to its anti-inflammatory properties. Introduce slowly.',
  },
];

const timeline = [
  {
    period: 'Week 1',
    title: 'Initial Adaptation',
    color: 'border-slate-500',
    badge: 'bg-slate-500/20 text-gray-600',
    changes: [
      'Skin hydration begins improving (GHK-Cu activates hyaluronic acid production)',
      'Gut changes with BPC-157 may cause temporary digestive adjustment',
      'SNAP-8 does not yet produce visible wrinkle changes — skin must begin adapting',
      'Baseline skin photos essential — document NOW before any visible changes',
    ],
  },
  {
    period: 'Month 1',
    title: 'First Visible Changes',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-700',
    changes: [
      'SNAP-8: Subtle softening of expression lines in most users',
      'GHK-Cu: Improved skin hydration and slight luminosity increase',
      'BPC-157: Clearer skin for gut-driven acne/rosacea cases (inflammation reducing)',
      'Pore appearance beginning to reduce (collagen tightening around pore walls begins)',
    ],
  },
  {
    period: 'Month 3',
    title: 'Significant Improvements',
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-700',
    changes: [
      'GHK-Cu: Measurable collagen density increase; visible firmness improvement',
      'SNAP-8: Significant wrinkle depth reduction (up to 63% at full dose/duration)',
      'Epithalon (if used): First cellular rejuvenation effects becoming visible',
      'Scar tissue texture improvement from BPC-157 (if applicable)',
      'Skin tone evening out — PIH fading from old breakouts',
    ],
  },
  {
    period: 'Month 6',
    title: 'Full Protocol Effect',
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-700',
    changes: [
      'Comprehensive collagen matrix remodeling complete — significant age reversal visible',
      'Maximum wrinkle reduction from SNAP-8 reached at this point',
      'Epithalon cumulative effect: skin cell quality, tone, and elasticity all improved',
      'Gut-skin axis fully normalized with BPC-157 — stable clear skin baseline',
      'Hair and beard improvements visible from GHK-Cu (if applied to scalp)',
    ],
  },
];

const faqs = [
  {
    q: 'How does skin quality affect perceived attractiveness?',
    a: 'Research consistently shows skin quality — particularly skin homogeneity (evenness of color and texture) — is among the most significant predictors of perceived attractiveness and estimated age. A 2012 study in Evolution and Human Behavior found that skin homogeneity alone accounts for a large proportion of the variation in perceived age, independent of facial structure. Improving skin quality via peptides addresses the highest-leverage appearance variable.',
  },
  {
    q: 'Can peptides replace my skincare routine?',
    a: 'Research peptides work synergistically with conventional skincare rather than replacing it. GHK-Cu pairs well with hyaluronic acid (which it stimulates anyway) and can be layered with vitamin C serums. SNAP-8 complements retinol (which accelerates cell turnover to surface the new collagen SNAP-8 protects). BPC-157 addresses gut-root causes that conventional skincare cannot touch. Use peptides as a high-potency addition to an evidence-based routine.',
  },
  {
    q: 'What concentration of GHK-Cu actually works?',
    a: 'Research studies demonstrating meaningful skin effects typically use concentrations of 0.1–0.2% (1–2mg/mL in solution). Most commercial cosmetic "copper peptide serums" contain 0.001–0.01% GHK-Cu — 10–100x below research-grade concentrations. These products provide minimal effects. Research-grade GHK-Cu requires separate sourcing and reconstitution, which is why understanding peptide self-preparation matters for this application.',
  },
  {
    q: 'How do I know if BPC-157 is addressing my gut-skin axis?',
    a: 'Signs that gut health is contributing to skin issues: skin worsens after inflammatory foods (gluten, dairy, alcohol, processed sugar), breakouts correlate with digestive discomfort, skin quality fluctuates with gut symptoms, rosacea or eczema that worsens with stress (stress-related gut permeability). If any of these apply, BPC-157 systemic protocol targeting gut repair is likely your highest-impact intervention before topical peptides.',
  },
  {
    q: 'Is Epithalon really extending telomeres in humans?',
    a: 'Epithalon\'s telomerase activation has been demonstrated in cell culture and animal models. Clinical human data is more limited but positive — Khavinson\'s research group published several studies showing telomere length preservation and age-related marker improvements in Epithalon-treated patients followed over years. The mechanism is established; the magnitude of human telomere extension at standard dosing is an open research question. Current evidence supports Epithalon as a meaningful anti-aging intervention even if the full telomere extension effect remains to be precisely quantified in large human trials.',
  },
  {
    q: 'Can I use all these peptides at the same time?',
    a: 'GHK-Cu, SNAP-8, and Epithalon have no known interactions and are frequently combined. BPC-157 is generally compatible with all of the above. The main consideration is sequencing topical application — apply SNAP-8 first (it needs direct contact with skin proteins), then GHK-Cu after 5 minutes. CJC-1295/Ipamorelin should be injected separately and is typically used in cycles. Always introduce new peptides one at a time so you can identify individual effects and any adverse responses.',
  },
];

export default function PeptidesForSkinQualityPage() {
  return (
    <main className="bg-white min-h-screen text-gray-700">
      {/* Hero */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">
              Skin Science
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Peptides for Skin Quality:{' '}
              <span className="text-emerald-700">The Evidence-Based Guide</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Skin quality is the highest-leverage variable in perceived attractiveness and estimated age. Research shows that homogeneous, firm, luminous skin signals health and youth more powerfully than any other facial feature. This guide covers every peptide with evidence for skin quality improvement — from GHK-Cu&apos;s 31% gene reset to Epithalon&apos;s telomere extension — with specific protocols for each skin concern.
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

      {/* 6 Dimensions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The 6 Dimensions of Skin Quality</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Skin quality is not a single variable — it is the composite of six measurable dimensions. Research peptides address each with distinct mechanisms.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skinDimensions.map((dim) => (
              <div key={dim.dimension} className={`rounded-xl border bg-gray-50 p-5 ${dim.border}`}>
                <div className={`text-xl mb-2 ${dim.color}`}>{dim.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${dim.color}`}>{dim.dimension}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{dim.desc}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {dim.peptides.map((p) => (
                    <span key={p} className="text-xs bg-gray-100 border border-gray-200 text-gray-600 rounded px-2 py-0.5">
                      {p}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic">{dim.measurement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Assessment Tool */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Personalized Protocol</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Different skin concerns require different peptide combinations. The assessment tool identifies the optimal peptide protocol for your specific skin type and concern — with exact dosing and expected timeline.
              </p>
              <div className="space-y-3">
                {[
                  'Instant protocol recommendation based on your skin profile',
                  'Specific peptide dosing tailored to your skin type',
                  'Week-by-week timeline for each protocol',
                  'Pro tips for your specific skin concern',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <SkinQualityAssessment />
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Peptide Deep Dives: Mechanisms & Evidence</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Understanding why each peptide works — not just that it works — allows you to select the right interventions for your specific skin biology.
          </p>
          <div className="space-y-6">
            {peptideDeepDives.map((pep) => (
              <div key={pep.name} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-2xl font-bold ${pep.color}`}>{pep.name}</h3>
                    <span className={`text-xs rounded-full px-3 py-1 ${pep.badge}`}>{pep.subtitle}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                  {pep.sections.map((section) => (
                    <div key={section.title} className="p-5">
                      <h4 className="font-semibold text-gray-700 mb-2 text-sm">{section.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols by Skin Type */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Protocols by Skin Type</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            General principles for matching peptide protocols to specific skin presentations.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {skinProtocols.map((sp) => (
              <div key={sp.type} className={`rounded-xl border bg-gray-50 p-5 ${sp.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs rounded-full px-2 py-0.5 ${sp.badge}`}>{sp.type}</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Focus: {sp.focus}</p>
                <div className="space-y-1 mb-3">
                  {sp.peptides.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {p}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 italic">{sp.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect: Week 1 to Month 6</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Setting accurate expectations is critical. Peptide effects are cumulative — the most significant improvements occur at months 3–6, not week 2.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t) => (
              <div key={t.period} className={`rounded-xl border bg-gray-50 p-5 ${t.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs rounded-full px-2 py-1 font-semibold ${t.badge}`}>{t.period}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{t.title}</h3>
                <ul className="space-y-2">
                  {t.changes.map((c, i) => (
                    <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
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
          <div className="bg-gradient-to-r from-emerald-900/30 to-dark-800 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Skin Quality Protocol</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              Research-grade GHK-Cu, SNAP-8, BPC-157, and Epithalon from verified peptide suppliers.
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

      <InternalLinks path="/peptides-for-skin-quality" />
    </main>
  );
}
