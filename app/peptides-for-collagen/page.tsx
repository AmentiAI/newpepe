import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Zap, Shield, Star, TrendingUp,
  FlaskConical, Clock, AlertTriangle, Layers, Microscope,
} from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import CollagenBoostRanking from '@/components/CollagenBoostRanking';

export const metadata: Metadata = {
  title: 'Peptides for Collagen: The Complete Evidence-Based Guide (2026)',
  description: 'GHK-Cu, BPC-157, IGF-1 LR3, and more — the top peptides for collagen synthesis ranked by evidence. Mechanisms, protocols, and realistic timelines for skin, hair, and joints.',
  keywords: 'peptides for collagen, GHK-Cu collagen, BPC-157 collagen, collagen peptides, collagen synthesis peptides, best peptides for skin collagen, IGF-1 collagen',
  openGraph: {
    title: 'Peptides for Collagen: Ranked by Evidence (2026)',
    description: 'The complete guide to collagen-boosting peptides — GHK-Cu, BPC-157, IGF-1 LR3, and more. Protocols and timelines.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-collagen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Collagen: Complete Guide 2026',
    description: 'Top collagen-boosting peptides ranked by evidence — GHK-Cu leads the pack.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-collagen',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const collagenTypes = [
  {
    type: 'Type I',
    locations: 'Skin, hair, bones, tendons, ligaments',
    importance: 'The most abundant collagen in the body — accounts for 90% of total body collagen. Primary target for anti-aging skin protocols. Provides skin with tensile strength and prevents sagging.',
    color: 'border-amber-500/40 bg-amber-500/5',
    badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
    topPeptide: 'GHK-Cu, BPC-157, IGF-1 LR3',
  },
  {
    type: 'Type III',
    locations: 'Skin, blood vessels, internal organs',
    importance: 'Provides skin elasticity and flexibility. The "young skin" collagen — high in young skin, declining with age. Critical for the bounce-back quality of healthy skin. Key in early wound repair.',
    color: 'border-purple-500/40 bg-purple-500/5',
    badge: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
    topPeptide: 'GHK-Cu, BPC-157',
  },
  {
    type: 'Type IV',
    locations: 'Basement membrane (skin barrier)',
    importance: 'Forms the basement membrane — the anchoring layer of skin that controls what passes through the skin barrier. Affects pore appearance, skin permeability, and overall skin clarity.',
    color: 'border-blue-500/40 bg-blue-500/5',
    badge: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
    topPeptide: 'GHK-Cu',
  },
  {
    type: 'Type VII',
    locations: 'Skin anchoring fibrils',
    importance: 'Anchoring fibrils that connect the epidermis to the dermis. Critical for skin integrity in sensitive or fragile skin conditions. Low Type VII = skin that bruises easily, blisters, or shows trauma.',
    color: 'border-teal-500/40 bg-teal-500/5',
    badge: 'bg-teal-500/20 text-teal-300 border border-teal-500/40',
    topPeptide: 'GHK-Cu (indirect)',
  },
  {
    type: 'Type XVII',
    locations: 'Hair follicle attachment, scalp skin',
    importance: 'Specifically anchors hair follicles to the scalp dermis. Declining Type XVII collagen is associated with follicle miniaturization and age-related hair loss. Unique to hair biology.',
    color: 'border-emerald-500/40 bg-emerald-500/5',
    badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
    topPeptide: 'GHK-Cu, CJC-1295/Ipamorelin',
  },
];

const declineFactors = [
  { factor: 'Age (natural decline)', rate: '1–2% per year after age 25', icon: Clock, color: 'text-gray-500' },
  { factor: 'UV radiation (sun)', rate: 'Up to 5x accelerated breakdown via MMP enzymes', icon: Zap, color: 'text-amber-400' },
  { factor: 'Glycation (dietary sugar)', rate: 'AGE formation cross-links and rigidifies collagen fibers', icon: AlertTriangle, color: 'text-rose-400' },
  { factor: 'Smoking', rate: 'Reduces collagen synthesis by 22% and increases MMP-1 breakdown enzyme', icon: AlertTriangle, color: 'text-orange-400' },
  { factor: 'Poor sleep', rate: 'GH release (collagen synthesis cofactor) primarily occurs in deep sleep', icon: Clock, color: 'text-blue-400' },
  { factor: 'Chronic stress (cortisol)', rate: 'Cortisol directly inhibits fibroblast activity and collagen production', icon: Shield, color: 'text-purple-400' },
];

const synergyStack = [
  {
    peptide: 'GHK-Cu',
    role: 'Stimulates collagen I, III, IV simultaneously. Activates 30+ growth factors. Primary collagen driver.',
    dose: '1–2 mg/day topical or SC injection',
    timing: 'Morning topical or daily SC',
  },
  {
    peptide: 'BPC-157',
    role: 'Drives angiogenesis to collagen-producing cells. Activates VEGF/PDGF for fibroblast recruitment.',
    dose: '250–500 mcg/day',
    timing: 'Oral (before meals) or SC injection',
  },
  {
    peptide: 'CJC-1295 + Ipamorelin',
    role: 'GH pulse → systemic IGF-1 → widespread collagen synthesis in all tissues.',
    dose: '200 mcg each, before bed',
    timing: 'Before sleep (amplifies natural GH release)',
  },
];

const timeline = [
  {
    period: '4 Weeks',
    title: 'Inflammation Reduction & Skin Hydration',
    changes: [
      'GHK-Cu begins resetting inflammatory gene expression',
      'Skin hydration and texture improves noticeably',
      'Early angiogenesis around collagen-producing fibroblasts',
      'Reduced redness, pore appearance begins improving',
    ],
    visual: 'Glowier, more hydrated appearance. Early smoothing of fine lines.',
    color: 'border-slate-500/40',
    badge: 'bg-slate-500/20 text-gray-500',
  },
  {
    period: '8 Weeks',
    title: 'New Collagen Fibers Forming',
    changes: [
      'New Type I and III collagen fibers measurable in dermis',
      'Skin firmness beginning to improve',
      'Fine lines reducing — especially around eyes with SNAP-8',
      'Follicle anchoring collagen (Type XVII) improving',
    ],
    visual: 'Visibly firmer skin, reduced fine lines, improved skin bounce-back quality.',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-400',
  },
  {
    period: '16 Weeks',
    title: 'Structural Collagen Improvement',
    changes: [
      'Significant new collagen fiber formation in dermis',
      'Deeper wrinkles beginning to soften',
      'Skin thickness measurably increased',
      'Hair quality improving via Type XVII collagen improvement',
    ],
    visual: 'Clear structural skin improvement. Most users see results comparable to professional treatments.',
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-400',
  },
];

const faqs = [
  {
    q: 'Which peptide has the most evidence for collagen production?',
    a: 'GHK-Cu (copper peptide) has the strongest and broadest evidence base for collagen stimulation. Unlike other peptides that work through one pathway, GHK-Cu simultaneously activates fibroblasts to produce Type I, III, and IV collagen, activates 30+ growth factors relevant to collagen synthesis, and resets the gene expression profile of aged fibroblasts toward a younger state. A landmark study found GHK-Cu modulates the expression of 31% of age-related genes — making it uniquely comprehensive compared to peptides that work through a single mechanism.',
  },
  {
    q: 'Do oral collagen supplements work compared to peptides?',
    a: 'Oral collagen supplements (hydrolyzed collagen peptides) do have some evidence — particularly the specific di- and tripeptides Pro-Hyp and Hyp-Gly that reach the bloodstream and stimulate fibroblasts. However, they pale in comparison to targeted bioactive peptides like GHK-Cu. The mechanism of oral collagen is indirect (consuming collagen pieces that signal your body to make more), while GHK-Cu directly activates the fibroblast machinery to produce collagen. GHK-Cu is estimated to be 100-1000x more potent per milligram than oral collagen supplements for stimulating collagen production. Oral collagen is a supplement; GHK-Cu is a research-grade intervention.',
  },
  {
    q: 'How long does collagen take to rebuild?',
    a: 'Skin collagen has a half-life of approximately 1.5–2 years — meaning it turns over slowly. This explains why collagen results take months, not days. In peptide protocols: you will see early benefits (skin hydration, inflammation reduction, surface-level smoothing) within 4 weeks from the skin environment improving. New collagen fiber formation becomes measurable at 8 weeks. Structural improvements to deep wrinkles and skin thickness require 12–24 weeks of consistent protocol. The "slow" results are a feature, not a bug — you\'re rebuilding structural proteins, not applying a temporary effect.',
  },
  {
    q: 'Can I stack GHK-Cu with retinol/tretinoin?',
    a: 'Yes — GHK-Cu and retinoids are complementary and frequently combined. Retinoids (tretinoin especially) work primarily by increasing skin cell turnover and stimulating collagen via retinoic acid receptors. GHK-Cu works via growth factor signaling and direct fibroblast activation. These mechanisms are additive. However, apply them separately — GHK-Cu in the morning, tretinoin at night — to avoid potential interaction in the carrier and to prevent irritation from overlapping actives. GHK-Cu also helps mitigate retinoid-induced irritation and barrier disruption, making this an excellent combination for sensitive skin.',
  },
  {
    q: 'Is topical or injectable GHK-Cu better for collagen?',
    a: 'Both routes work, but for different goals. Topical GHK-Cu delivers high concentrations directly to skin fibroblasts with excellent penetration in serum form. For skin appearance and collagen goals, topical is the preferred primary route — it concentrates the peptide where it\'s needed most (dermis) without systemic circulation. Injectable GHK-Cu (subcutaneous) provides systemic distribution — useful if you want whole-body anti-aging effects including internal tissue collagen (joints, gut lining, vascular tissue). For pure appearance goals, topical is more cost-effective and has a better safety profile. For comprehensive longevity goals, SC injection adds systemic benefits.',
  },
  {
    q: 'Does Vitamin C help with peptide collagen protocols?',
    a: 'Absolutely — Vitamin C (ascorbic acid) is an essential co-factor for collagen synthesis. The enzyme prolyl hydroxylase, which is required to form stable collagen triple helices, requires Vitamin C as a co-factor. Without adequate Vitamin C, newly synthesized collagen fibers cannot properly assemble — this is the mechanism of scurvy. For peptide collagen protocols: ensure dietary Vitamin C is sufficient (75–120 mg/day minimum), or consider Vitamin C supplementation (500–1000 mg/day). Some advanced protocols add topical Vitamin C (L-ascorbic acid 15–20% serum) alongside GHK-Cu to provide the enzymatic co-factor directly in the skin.',
  },
];

export default function PeptidesForCollagenPage() {
  return (
    <main className="min-h-screen bg-dark-900 text-gray-700">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-dark-900 to-purple-900/20" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-amber-300 text-sm font-semibold">
            <Layers className="w-4 h-4" />
            Collagen Science &amp; Peptides
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Peptides for Collagen:{' '}
            <span className="text-neon-green">Ranked by Evidence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Collagen is the structural foundation of your appearance. Here are the peptides with the strongest evidence for rebuilding it — ranked, explained, and with complete protocols.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} rel="nofollow noopener noreferrer" className="btn-cta flex items-center gap-2">
              View Collagen Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/guide" className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-xl text-gray-600 hover:border-slate-400 transition-colors">
              Full Protocol Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Why Collagen = Appearance Foundation */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Why Collagen is the Foundation of Appearance</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Collagen accounts for 70–80% of the dry weight of skin. It is the structural protein of the entire musculoskeletal and integumentary system — meaning it underpins virtually every aspect of how you look.
            </p>
          </div>

          <div className="glass-card p-8 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Before understanding peptide interventions, it is essential to understand <em>what</em> collagen actually does in the context of appearance. Collagen is not a single protein — it is a family of 28 related proteins, each with distinct structural roles. The five most relevant to appearance are Types I, III, IV, VII, and XVII.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Type I collagen is the primary target of anti-aging interventions: it comprises the dense fibrous network in the dermis that gives skin its firmness, resistance to gravity, and structural volume. When Type I collagen declines — beginning in the mid-20s at a rate of 1–2% per year — the visible result is gradual sagging, laxity, and the appearance of hollowing under the eyes and in the cheeks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Type III collagen coexists with Type I and provides elasticity — the bounce-back quality that distinguishes young skin from older skin. When you pinch young skin and release it, the snap-back is Type III collagen at work. Hair follicles are anchored by Type XVII collagen in the scalp dermis; its decline is directly linked to age-related hair miniaturization. The basement membrane (Type IV) controls skin permeability and pore appearance. Understanding which peptide stimulates which collagen type allows you to target your specific appearance goals precisely.
            </p>
          </div>

          {/* Collagen Types Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collagenTypes.map((ct) => (
              <div key={ct.type} className={`glass-card p-5 space-y-3 border ${ct.color}`}>
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-sm font-bold ${ct.badge}`}>{ct.type}</span>
                </div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">{ct.locations}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ct.importance}</p>
                <div className="pt-2 border-t border-slate-700/50">
                  <span className="text-gray-500 text-xs">Best peptide: </span>
                  <span className="text-amber-300 text-xs font-semibold">{ct.topPeptide}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Collagen Declines */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">How Collagen Declines — and What Accelerates It</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Natural aging begins the collagen decline process at age 25. Multiple environmental and lifestyle factors dramatically accelerate the rate of loss.
            </p>
          </div>

          <div className="glass-card p-6">
            <p className="text-gray-600 leading-relaxed mb-6">
              The natural baseline decline is 1–2% of total collagen per year after age 25. This sounds small, but compounded over decades it means that by age 45, you have lost 20–40% of peak collagen density. The consequences include dermis thinning, reduced skin moisture retention (collagen holds water), decreased elasticity, and progressive hollowing of facial fat compartments supported by the collagen scaffold. By age 60, total skin collagen can be 40–60% below the 25-year-old peak without intervention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {declineFactors.map((factor) => (
                <div key={factor.factor} className="flex items-start gap-3 p-3 bg-slate-800/60 rounded-xl">
                  <factor.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${factor.color}`} />
                  <div>
                    <p className="text-gray-700 text-sm font-semibold">{factor.factor}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{factor.rate}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
              The combination of multiple decline factors is especially dangerous. A person who smokes, consumes a high-sugar diet, sleeps poorly, and has chronic sun exposure may lose collagen at 5–8% per year — reaching the collagen density of a 60-year-old by their mid-30s. Peptide interventions address both the symptomatic decline and the underlying cellular machinery responsible for production.
            </p>
          </div>
        </div>
      </section>

      {/* Ranked Component */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Peptides Ranked by Collagen-Boosting Evidence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Sorted by strength of evidence. Click any peptide to expand full dosing details.
            </p>
          </div>
          <CollagenBoostRanking />
        </div>
      </section>

      {/* Deep Dive: GHK-Cu */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">#1: GHK-Cu — The Collagen Reset Peptide</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-gray-600 leading-relaxed">
              GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) earns the top ranking for collagen due to its uniquely comprehensive mechanism. While most peptides work through a single pathway, GHK-Cu operates through multiple simultaneous mechanisms that collectively deliver what researchers describe as a "gene expression reset" — returning aged fibroblasts to a more youthful collagen-producing state.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The key findings from human and animal research: GHK-Cu stimulates collagen synthesis in skin fibroblasts by an average of <strong className="text-amber-300">70%</strong> above baseline in cell culture models. It increases the production of collagen Types I, III, and IV simultaneously. It activates tissue inhibitors of metalloproteinases (TIMPs), which block the MMP enzymes that break down collagen — providing a dual benefit of increasing production and decreasing breakdown. Lunde et al. demonstrated that GHK-Cu applied topically for 12 weeks produced significant improvements in skin density, thickness, and the reduction of fine lines compared to controls.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The gene expression research is particularly compelling. A 2010 analysis found that GHK-Cu modulates over 4,000 human genes, with specific effects on 31% of genes that change with aging — returning their expression to a more youthful pattern. Of particular relevance to collagen: GHK-Cu upregulates COLLAGEN1A1 and COLLAGEN3A1 gene expression while downregulating inflammatory genes (IL-6, TNF-α) that suppress fibroblast activity. This is a fundamentally different mechanism from simple "collagen stimulation" — it is resetting the cellular machinery responsible for collagen production at the genetic level.
            </p>
            <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-4">
              <p className="text-amber-300 font-semibold text-sm">Key Clinical Finding</p>
              <p className="text-gray-600 text-sm mt-1">
                In a randomized, double-blind trial (Finkley et al.), GHK-Cu treatment for 12 weeks produced a 27% reduction in fine lines, 13% improvement in skin firmness, and measurable increase in skin thickness — without side effects. This is comparable to low-dose tretinoin performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: BPC-157 */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">#2: BPC-157 — The Angiogenesis-to-Collagen Pipeline</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-gray-600 leading-relaxed">
              BPC-157 (Body Protection Compound-157) ranks second for collagen due to its powerful indirect mechanism: it drives angiogenesis (new blood vessel formation) which dramatically improves the delivery of nutrients, oxygen, and growth factors to collagen-producing fibroblasts. Without adequate blood supply, fibroblasts — even when biochemically stimulated — cannot produce collagen at optimal rates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The BPC-157 collagen pathway: BPC-157 activates VEGF (Vascular Endothelial Growth Factor) and PDGF (Platelet-Derived Growth Factor) → new blood vessel formation around existing and new fibroblasts → improved nutrient delivery → increased collagen I and III production. This mechanism is particularly effective for healing injured tissue (where blood supply is disrupted) and for skin areas with poor circulation (often the areas with the worst collagen density).
            </p>
            <p className="text-gray-600 leading-relaxed">
              BPC-157 also activates the growth hormone receptor in tissues directly — providing a local GH-like signal that stimulates fibroblast activity independently of systemic GH levels. Research in tendon healing models (Krivic et al., Gwyer et al.) consistently demonstrates 30–60% faster collagen fiber organization and tensile strength recovery compared to controls — evidence of both increased collagen production and improved collagen fiber quality.
            </p>
          </div>
        </div>
      </section>

      {/* Synergistic Stack */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">The Synergistic Collagen Stack</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Combining complementary collagen mechanisms creates results no single peptide can achieve alone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {synergyStack.map((item, i) => (
              <div key={item.peptide} className="glass-card p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="font-bold text-gray-800">{item.peptide}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.role}</p>
                <div className="pt-2 border-t border-slate-700/50 space-y-1">
                  <p className="text-amber-300 text-xs"><span className="text-gray-500">Dose:</span> {item.dose}</p>
                  <p className="text-teal-300 text-xs"><span className="text-gray-500">Timing:</span> {item.timing}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-600 leading-relaxed">
              The synergy between these three peptides is mechanistically logical: GHK-Cu directly stimulates fibroblasts and provides the genetic reset. BPC-157 ensures those fibroblasts have the blood supply needed to perform at maximum capacity. CJC-1295/Ipamorelin creates the systemic hormonal environment (elevated IGF-1 and GH) that amplifies collagen production throughout the entire body — not just at the topical application site.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Additionally, this stack addresses the collagen-degradation side of the equation: GHK-Cu activates TIMPs (collagen breakdown inhibitors), BPC-157 reduces inflammatory cytokines that upregulate MMPs (collagen-degrading enzymes), and GH optimization reduces cortisol-mediated collagen suppression. You are simultaneously producing more collagen and breaking it down more slowly.
            </p>
          </div>
        </div>
      </section>

      {/* Diet and Lifestyle */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Diet &amp; Lifestyle Factors That Amplify Results</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-gray-600 leading-relaxed">
              Peptides work dramatically better when the foundational lifestyle variables supporting collagen synthesis are in place. The most critical non-peptide factors:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Vitamin C (500–1000 mg/day)', desc: 'Required co-factor for prolyl hydroxylase — the enzyme that forms stable collagen triple-helix structures. Without adequate Vitamin C, newly synthesized collagen fibers cannot properly assemble.' },
                { title: 'Sleep (7–9 hours, dark room)', desc: 'GH release — the upstream signal for collagen synthesis — occurs primarily in deep sleep phases. Poor sleep directly reduces GH pulse amplitude, limiting the systemic collagen production signal.' },
                { title: 'Red Light Therapy (630–850nm)', desc: 'Low-level laser/light therapy at these wavelengths directly stimulates fibroblast activity and collagen synthesis, synergistic with GHK-Cu. 10–20 minutes daily amplifies peptide effects significantly.' },
                { title: 'Eliminate Dietary AGEs', desc: 'Advanced glycation end-products (from high-temperature cooking of sugar/protein combinations) cross-link and rigidify collagen fibers. Low-AGE diet prevents this collagen damage. Avoiding processed foods and excess sugar is essential.' },
                { title: 'Zinc (15–30 mg/day)', desc: 'Required for collagen synthesis enzymes. Deficiency directly impairs collagen production. Most Westerners are marginally zinc-deficient — supplement with zinc picolinate or zinc glycinate for best absorption.' },
                { title: 'Sunscreen (SPF 30+ daily)', desc: 'UV radiation activates MMP-1 and MMP-3, the primary collagen-degrading enzymes in skin. Daily sunscreen is the single most evidence-based anti-aging intervention — protecting existing collagen while peptides rebuild new collagen.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-slate-800/60 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">Realistic Collagen Rebuilding Timeline</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Skin collagen has a half-life of approximately 2 years — rebuilding it takes months, not days. Here is what to realistically expect.
            </p>
          </div>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.period} className={`glass-card p-6 border ${t.color}`}>
                <div className="flex items-start gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold flex-shrink-0 ${t.badge}`}>{t.period}</span>
                  <div className="space-y-3">
                    <h3 className="text-gray-800 font-bold">{t.title}</h3>
                    <ul className="space-y-1">
                      {t.changes.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-neon-green mt-0.5 flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <p className="text-neon-green text-sm font-medium mt-2">{t.visual}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
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

      {/* Affiliate CTA */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <FlaskConical className="w-12 h-12 text-amber-400 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900">Start Your Collagen Protocol</h2>
          <p className="text-gray-500">
            GHK-Cu + BPC-157 is the highest-evidence, most cost-effective collagen stack available. Start with the Foundation Stack and see measurable results in 8 weeks.
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

      <InternalLinks path="/peptides-for-collagen" />
    </main>
  );
}
