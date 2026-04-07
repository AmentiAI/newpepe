import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, FlaskConical, Star } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GhkCuProtocolGuide from '@/components/GhkCuProtocolGuide';

export const metadata: Metadata = {
  title: 'GHK-Cu Skin Protocol: Topical vs Injectable, Concentrations & Results (2026)',
  description: 'The complete GHK-Cu skin protocol guide. 31% gene reset mechanism, 5 collagen types, topical concentrations (0.5–2%), injectable dosing, combination stacks with SNAP-8 and Epithalon. Evidence-based and detailed.',
  keywords: 'GHK-Cu skin protocol, GHK-Cu topical concentration, GHK-Cu injectable skin, copper peptide skin protocol, GHK-Cu collagen skin, GHK-Cu anti-aging protocol',
  openGraph: {
    title: 'GHK-Cu Skin Protocol: Complete Guide 2026',
    description: '31% gene reset, 5 collagen types — topical and injectable GHK-Cu skin protocols with week-by-week timelines.',
    type: 'article',
    url: 'https://bp157stack.com/ghk-cu-skin-protocol',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu Skin Protocol: Topical vs Injectable Guide 2026',
    description: 'Complete GHK-Cu skin protocol — concentrations, timing, combinations, and evidence.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/ghk-cu-skin-protocol',
  },
};

const SOURCE_URL = '/out';

const geneResetData = [
  {
    category: 'Upregulated (Anti-aging)',
    color: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300',
    genes: [
      { gene: 'COL1A1, COL3A1', effect: 'Collagen I and III synthesis — structural skin support' },
      { gene: 'COL4A1', effect: 'Basement membrane collagen — skin adhesion and integrity' },
      { gene: 'ELN', effect: 'Elastin production — skin snap-back and resilience' },
      { gene: 'VEGF', effect: 'Angiogenesis — dermal blood vessel formation for glow' },
      { gene: 'TIMP1, TIMP2', effect: 'Collagen protease inhibition — preserving new collagen' },
      { gene: 'PSMA family', effect: 'Proteasome activation — clearing damaged proteins' },
    ],
  },
  {
    category: 'Downregulated (Pro-aging suppressed)',
    color: 'text-rose-400',
    badge: 'bg-rose-500/20 text-rose-300',
    genes: [
      { gene: 'MMP-1, MMP-2, MMP-9', effect: 'Collagenase and gelatinase — enzymes that degrade collagen' },
      { gene: 'IL-6, TNF-α', effect: 'Pro-inflammatory cytokines driving skin aging' },
      { gene: 'TGF-β1 (excess)', effect: 'Excessive scar-forming collagen overexpression normalized' },
      { gene: 'CDKN1A (p21)', effect: 'Cell cycle arrest gene — GHK-Cu reduces premature senescence' },
    ],
  },
];

const collagenTypes = [
  {
    type: 'Collagen I',
    role: 'Primary structural collagen (80–85% of skin collagen). Provides tensile strength and firmness. Loss of Collagen I = sagging, wrinkles, loss of facial definition.',
    ghkEffect: 'GHK-Cu upregulates COL1A1 expression — the most direct anti-aging collagen intervention available without prescription.',
    color: 'border-emerald-500/30',
  },
  {
    type: 'Collagen III',
    role: 'Flexible network collagen. Provides skin resilience and "bounce." Also the collagen that leads wound healing. Higher ratio of III to I = healthier, more resilient skin.',
    ghkEffect: 'GHK-Cu upregulates COL3A1 alongside type I, maintaining the optimal I:III ratio for skin quality and healing.',
    color: 'border-blue-500/30',
  },
  {
    type: 'Collagen IV',
    role: 'Basement membrane collagen. Forms the structural foundation between dermis and epidermis. Degradation causes epidermal irregularity and is associated with UV photoaging.',
    ghkEffect: 'GHK-Cu stimulates COL4A1 expression, reinforcing the dermo-epidermal junction — critical for maintaining skin architecture.',
    color: 'border-purple-500/30',
  },
  {
    type: 'Collagen VII',
    role: 'Anchoring fibrils — connects the dermis to the basement membrane. Deficiency causes skin fragility and contributes to sagging as anchoring fibrils weaken with age.',
    ghkEffect: 'GHK-Cu upregulates collagen VII synthesis, improving dermal anchoring strength and reducing skin laxity.',
    color: 'border-amber-500/30',
  },
  {
    type: 'Collagen XVII',
    role: 'Hemidesmosome component at the skin-hair follicle interface. Important for skin barrier integrity and hair follicle anchoring. Also called BP180.',
    ghkEffect: 'GHK-Cu stimulation of collagen XVII supports both skin barrier function and the structural integrity of hair follicle attachment.',
    color: 'border-cyan-500/30',
  },
];

const agingMechanisms = [
  {
    mechanism: 'Glycation',
    what: 'Sugar molecules cross-link with collagen proteins (forming Advanced Glycation End-products or AGEs), causing collagen stiffness and yellowing. Major driver of dull, rigid skin.',
    ghkAction: 'GHK-Cu\'s proteasome activation accelerates clearance of glycated proteins. Its anti-inflammatory effects also reduce the oxidative stress that drives glycation.',
    color: 'text-amber-400',
  },
  {
    mechanism: 'Oxidative Stress',
    what: 'ROS (reactive oxygen species) from UV, pollution, and metabolic activity damage DNA, proteins, and lipids in skin cells. Primary mechanism of photoaging.',
    ghkAction: 'GHK-Cu upregulates antioxidant genes including superoxide dismutase (SOD) and catalase. Also modulates Nrf2 pathway, the master antioxidant transcription factor.',
    color: 'text-emerald-400',
  },
  {
    mechanism: 'Telomere Shortening',
    what: 'Each cell division shortens telomeres. Skin cells divide frequently and accumulate short telomeres, leading to senescence and SASP (pro-inflammatory secretion).',
    ghkAction: 'GHK-Cu has shown telomere-protective effects in some studies, though Epithalon is the primary peptide for telomere extension. GHK-Cu reduces oxidative telomere damage.',
    color: 'text-rose-400',
  },
  {
    mechanism: 'Chronic Inflammation',
    what: '"Inflammaging" — low-grade chronic inflammation drives collagenase expression, accelerates senescence, and disrupts skin barrier function. Central to all skin aging.',
    ghkAction: 'GHK-Cu downregulates TNF-α, IL-6, and IL-1β — the core pro-inflammatory cytokines of inflammaging. This anti-inflammatory effect is well-documented and contributes significantly to skin improvements.',
    color: 'text-blue-400',
  },
];

const combinations = [
  {
    stack: 'GHK-Cu + SNAP-8',
    purpose: 'Anti-Wrinkle Stack',
    synergy: 'Complementary mechanisms: SNAP-8 relaxes the facial muscles causing dynamic wrinkles; GHK-Cu rebuilds the collagen matrix underneath. SNAP-8 works on the wrinkle formation cause; GHK-Cu rebuilds what was lost. Studies suggest combination produces greater wrinkle reduction than either peptide alone.',
    protocol: 'Apply SNAP-8 first (to dry skin), wait 5 minutes, then apply GHK-Cu. Can be done AM and/or PM.',
    color: 'border-purple-500/30',
  },
  {
    stack: 'GHK-Cu + BPC-157',
    purpose: 'Scar Healing Stack',
    synergy: 'BPC-157 drives angiogenesis and fibroblast activation in scar tissue from below; GHK-Cu topical applied directly to the scar modulates collagen type ratio and reduces local inflammation. BPC-157 can be injected near the scar site for local effect; GHK-Cu applied topically to the surface.',
    protocol: 'BPC-157 250–500mcg SC (near scar or systemic) + GHK-Cu 1–2% topical applied to scar surface twice daily.',
    color: 'border-blue-500/30',
  },
  {
    stack: 'GHK-Cu + Epithalon',
    purpose: 'Longevity Anti-Aging Stack',
    synergy: 'GHK-Cu addresses acute gene expression and collagen synthesis; Epithalon addresses the upstream cellular aging driver (telomere shortening and senescence). Together they operate at different time scales and mechanisms for comprehensive cellular age reversal.',
    protocol: 'GHK-Cu daily (topical and/or injectable) as continuous background; Epithalon in quarterly 10-day cycles (10mg total per cycle).',
    color: 'border-rose-500/30',
  },
];

const faqs = [
  {
    q: 'Is topical or injectable GHK-Cu more effective for skin?',
    a: 'For skin specifically, both routes work — but they address different aspects. Topical provides direct local collagen upregulation at the application site and is excellent for skin texture, pore size, and surface quality. Injectable provides systemic gene expression reset effects (the full 31% aged gene reversal) that affect all tissues including hair, nails, and internal organs alongside skin. For maximum results, combining both routes (injectable for systemic effects, topical for direct skin delivery) produces the strongest outcomes. For most users starting out, topical alone delivers excellent skin results.',
  },
  {
    q: 'How do I mix GHK-Cu at home for topical use?',
    a: 'Equipment needed: GHK-Cu powder (research grade), bacteriostatic or distilled water, propylene glycol (optional), small mixing vessel, dropper bottle. Protocol: dissolve GHK-Cu powder in distilled water to target concentration (e.g., 15mg in 15mL distilled water = 1mg/mL = 0.1%). For a richer serum, use 50% water / 50% propylene glycol as carrier — PG improves skin penetration and acts as preservative. Alternatively, dissolve in aloe vera gel or a commercial hyaluronic acid serum base for a more cosmetically elegant product. Store refrigerated; use within 2–4 weeks for water-only preparations or up to 3 months for PG-based preparations.',
  },
  {
    q: 'Are commercial GHK-Cu serums effective?',
    a: 'Most commercial cosmetic GHK-Cu products are ineffective for therapeutic skin improvements because they use sub-therapeutic concentrations (typically 0.001–0.01% GHK-Cu). Research studies demonstrating collagen synthesis and gene expression effects used concentrations of 0.1–0.2% (1–2mg/mL). Commercial products at typical cosmetic concentrations are approximately 10–100x too dilute to produce the effects documented in research. The exceptions are a small number of medical-grade GHK-Cu formulations and compounded preparations at higher concentrations — but these require prescription in many jurisdictions or sourcing research-grade GHK-Cu for self-preparation.',
  },
  {
    q: 'Does GHK-Cu have a blue color? What does that mean?',
    a: 'Yes — GHK-Cu powder has a distinctive blue color due to the copper chelation. The blue color is from the copper d-d electron transition — the same reason copper solutions are blue in chemistry. When dissolved in water, the solution ranges from pale blue to deep blue depending on concentration. This blue color is a quality indicator: if your GHK-Cu powder or solution is white, clear, or any color other than blue, it is likely not GHK-Cu or has degraded copper content. The color fades as GHK-Cu is diluted in a serum. If applied topically, the blue tint is visible at higher concentrations but fades within minutes as the peptide is absorbed.',
  },
  {
    q: 'What are GHK-Cu\'s anti-aging effects beyond skin?',
    a: 'GHK-Cu\'s gene expression modulation extends to multiple tissues beyond skin. Research has documented: lung tissue repair (upregulates anti-fibrotic and repair genes in lung), hair follicle activation, bone density support (stimulates osteoblast activity), nerve regeneration (neuroprotective gene expression), liver protection (anti-fibrotic effects in liver tissue), and overall antioxidant defense systemically. The 31% aged gene reset is not limited to skin — it reflects GHK-Cu\'s broad role as an endogenous gene regulatory molecule throughout the body.',
  },
  {
    q: 'Can I use GHK-Cu with retinol or vitamin A products?',
    a: 'Yes — GHK-Cu and retinol have complementary, non-competing mechanisms and can be used in the same routine, though typically not simultaneously. Retinol accelerates cell turnover and stimulates collagen via retinoic acid receptors; GHK-Cu drives collagen via direct gene regulation. Use retinol PM, then GHK-Cu either AM or a different PM application (apply GHK-Cu first, then retinol after 5–10 minutes, or alternate nights if sensitivity is a concern). GHK-Cu\'s anti-inflammatory properties can actually help mitigate retinol irritation — some users find the combination less irritating than retinol alone.',
  },
  {
    q: 'What does GHK-Cu smell or taste like?',
    a: 'Topically applied GHK-Cu is generally odorless or has a very faint metallic scent at high concentrations — this is normal and comes from the copper component. If using injectable GHK-Cu and reconstituting at higher concentrations, you may notice a faint metallic scent in the vial — normal for copper-containing compounds. Some users report a slight metallic taste when using oral GHK-Cu (which is typically unabsorbable at meaningful quantities — injection or topical are the effective routes). The topical serum preparation, if made with aloe or HA base, typically has no notable scent.',
  },
  {
    q: 'How long should I run a GHK-Cu skin protocol before expecting full results?',
    a: 'Set expectations around biological timelines: initial hydration and barrier improvements occur within days to 2 weeks; surface texture improvements are visible at 3–6 weeks; significant collagen density changes are measurable at 8–12 weeks; full structural remodeling (pore reduction, firmness, deep wrinkle improvement) peaks at 12–16 weeks with continuous use. After this point, maintenance dosing (3–5x/week) sustains the improvements. Many users note that results continue improving slowly beyond 16 weeks with consistent use — GHK-Cu\'s gene expression effects are continuous, not a one-time reset.',
  },
];

export default function GhkCuSkinProtocolPage() {
  return (
    <main className="bg-dark-900 min-h-screen text-slate-200">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-dark-800 to-dark-900 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4 block">
              GHK-Cu Deep Dive
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              GHK-Cu Skin Protocol:{' '}
              <span className="text-neon-green">31% Gene Reset, 5 Collagen Types</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              GHK-Cu (glycyl-l-histidyl-l-lysine copper) is the most comprehensively researched peptide for skin. It resets 31% of aged genes, stimulates five distinct collagen types, drives angiogenesis, activates proteasome function, and suppresses inflammation — producing skin quality changes no cosmetic ingredient can replicate. This guide covers the complete skin protocol: topical concentrations, injectable dosing, combination stacks, and week-by-week timelines.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Source GHK-Cu <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Protocol Guide Component */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your GHK-Cu Protocol</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Select between topical, injectable, and combination approaches. The concentration slider adjusts the topical protocol details. Each tab shows week-by-week timelines.
          </p>
          <GhkCuProtocolGuide />
        </div>
      </section>

      {/* 31% Gene Reset */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">The 31% Gene Reset: What It Actually Means</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                In 2012, Dr. Loren Pickart and Amanda Margolina published a comprehensive analysis of GHK-Cu&apos;s effects on human gene expression using genome-wide microarray data. The analysis examined which genes change expression as tissue ages, then assessed how GHK-Cu exposure altered those expression patterns.
              </p>
              <p>
                The finding: GHK-Cu modulates the expression of approximately 4,000 genes. Of the genes that shift expression patterns with aging, GHK-Cu resets approximately 31% back toward their youthful pattern — either upregulating genes that were suppressed with age, or downregulating genes that were overactivated with age.
              </p>
              <p>
                The practical significance: skin aging is not simply collagen loss. It is a comprehensive shift in cellular behavior, gene transcription programs, inflammatory signaling, and repair capacity. GHK-Cu addresses this at the gene level — the deepest intervention available without direct gene therapy.
              </p>
              <p>
                The mechanism involves GHK-Cu binding to cell surface receptors and modulating downstream transcription factor activity, including SP1 (collagen gene promoter), NF-κB (inflammatory cytokines), Nrf2 (antioxidant defense), and p53 (cellular stress response). This multi-transcription-factor modulation explains the breadth of GHK-Cu&apos;s effects across different tissues.
              </p>
            </div>
            <div className="space-y-4">
              {geneResetData.map((group) => (
                <div key={group.category} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${group.color}`}>
                    {group.category}
                  </div>
                  <div className="space-y-2">
                    {group.genes.map((g) => (
                      <div key={g.gene} className="flex items-start gap-3 text-sm">
                        <span className={`font-mono text-xs px-2 py-0.5 rounded ${group.badge} flex-shrink-0 mt-0.5`}>
                          {g.gene}
                        </span>
                        <span className="text-slate-400">{g.effect}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Collagen Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">5 Collagen Types GHK-Cu Stimulates</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Unlike most &ldquo;collagen-boosting&rdquo; products that non-specifically reference &ldquo;collagen,&rdquo; GHK-Cu has demonstrated upregulation of five distinct collagen types — each with a different structural role in skin.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collagenTypes.map((ct) => (
              <div key={ct.type} className={`rounded-xl border bg-dark-800/40 p-5 ${ct.color}`}>
                <h3 className="font-bold text-white mb-2">{ct.type}</h3>
                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{ct.role}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">GHK-Cu Effect</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{ct.ghkEffect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aging Mechanisms */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Skin Aging Mechanisms GHK-Cu Addresses</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Skin ages through multiple simultaneous mechanisms. GHK-Cu&apos;s multi-target gene expression modulation addresses each of these pathways.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {agingMechanisms.map((m) => (
              <div key={m.mechanism} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                <h3 className={`font-bold text-lg mb-2 ${m.color}`}>{m.mechanism}</h3>
                <p className="text-sm text-slate-400 mb-3">{m.what}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">GHK-Cu Response</p>
                  <p className="text-sm text-slate-300 leading-relaxed">{m.ghkAction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combination Stacks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Combination Stacks: GHK-Cu with Other Peptides</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            GHK-Cu&apos;s multiple mechanisms make it an excellent base for multi-peptide stacks. Each combination targets a different primary goal.
          </p>
          <div className="grid lg:grid-cols-3 gap-5">
            {combinations.map((combo) => (
              <div key={combo.stack} className={`rounded-xl border bg-dark-800/40 p-6 ${combo.color}`}>
                <h3 className="font-bold text-white mb-1">{combo.stack}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">{combo.purpose}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{combo.synergy}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Protocol</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{combo.protocol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-dark-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-dark-800/60 border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2 flex items-start gap-2">
                  <FlaskConical className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-dark-800 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Start Your GHK-Cu Skin Protocol</h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Research-grade GHK-Cu for topical and injectable use. Begin with the foundational topical protocol and scale to injectable for maximum systemic effects.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Source Research-Grade GHK-Cu <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-slate-600 mt-4">
              For research purposes only. Not medical advice. Consult a healthcare professional.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks path="/ghk-cu-skin-protocol" />
    </main>
  );
}
