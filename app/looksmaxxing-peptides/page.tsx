import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, FlaskConical, Zap, Shield, Star } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import LooksmaxxingRoadmap from '@/components/LooksmaxxingRoadmap';

export const metadata: Metadata = {
  title: 'Looksmaxxing with Peptides: The Complete Science-Backed Protocol (2026)',
  description: 'The definitive guide to looksmaxxing with research peptides. GHK-Cu, SNAP-8, BPC-157, IGF-1 LR3, CJC-1295/Ipamorelin, and Epithalon — how each improves appearance, and how to stack them.',
  keywords: 'looksmaxxing peptides, peptides for appearance, GHK-Cu looksmaxxing, SNAP-8 anti-wrinkle, BPC-157 skin, peptides for looks, appearance optimization peptides',
  openGraph: {
    title: 'Looksmaxxing with Peptides: Complete Protocol 2026',
    description: 'Science-backed peptide protocols for skin, structure, hair, and body composition. The complete looksmaxxing guide.',
    type: 'article',
    url: 'https://bp157stack.com/looksmaxxing-peptides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Looksmaxxing with Peptides: The Science-Backed Protocol',
    description: 'GHK-Cu, SNAP-8, BPC-157, IGF-1 LR3 and more — complete guide to peptides for appearance optimization.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/looksmaxxing-peptides',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const pillars = [
  {
    icon: '✦',
    title: 'Skin Quality',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    desc: 'Collagen density, hydration, pore size, tone evenness, and luminosity. Skin quality is the single highest-leverage appearance variable — research consistently shows perceived age is determined more by skin condition than facial bone structure.',
    peptides: ['GHK-Cu', 'SNAP-8', 'Epithalon', 'BPC-157'],
  },
  {
    icon: '◈',
    title: 'Facial Structure',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    desc: 'Collagen scaffolding, facial fat distribution, jawline definition, and orbital bone health. Structural improvements are slower but permanent. IGF-1 LR3 and GH secretagogues drive collagen matrix remodeling that affects facial appearance.',
    peptides: ['IGF-1 LR3', 'CJC-1295/Ipamorelin', 'GHK-Cu'],
  },
  {
    icon: '◉',
    title: 'Hair & Beard',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/5',
    desc: 'Hair density, thickness, and scalp health. Beard density and coverage. GHK-Cu is the gold standard — it activates follicle stem cells, modulates androgen signaling at the follicle level, and drives angiogenesis around miniaturizing follicles.',
    peptides: ['GHK-Cu', 'BPC-157', 'CJC-1295/Ipamorelin'],
  },
  {
    icon: '◆',
    title: 'Body Composition',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    desc: 'Facial fat distribution, muscle tone, and overall leanness. The face reflects body composition — higher body fat increases facial adiposity and reduces jawline definition. GH peptides drive simultaneous muscle gain and fat loss.',
    peptides: ['CJC-1295/Ipamorelin', 'BPC-157', 'IGF-1 LR3'],
  },
];

const peptideProfiles = [
  {
    name: 'GHK-Cu',
    fullName: 'Copper Tripeptide GHK-Cu',
    category: 'Collagen + Gene Reset',
    color: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-700 border-emerald-500/30',
    priority: 'Foundational',
    mechanism: 'GHK-Cu binds copper ions and acts as a gene expression modulator. Lund University research demonstrated GHK-Cu resets the expression of 31% of aged genes back toward a youthful pattern. It directly upregulates collagen I, III, IV, VII, and XVII synthesis; activates proteasome activity to clear damaged proteins; and stimulates angiogenesis.',
    appearance: 'Primary driver of skin quality improvements: collagen density, pore reduction, firmness, and luminosity. Also stimulates hair follicle stem cell activation and beard density.',
    dose: '1–2mg/day topical; 0.5–1mg/day SC injectable',
    timeline: 'Visible improvements: 4–8 weeks topical, systemic effects ongoing',
  },
  {
    name: 'SNAP-8',
    fullName: 'Acetyl Glutamyl Heptapeptide-3',
    category: 'Anti-Wrinkle Neuropeptide',
    color: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-700 border-purple-500/30',
    priority: 'Targeted',
    mechanism: 'SNAP-8 inhibits the SNARE complex — the same molecular target as botulinum toxin (Botox) but without the neurotoxin. By competing with SNAP-25 in the SNARE protein complex, SNAP-8 reduces acetylcholine vesicle release at neuromuscular junctions, decreasing the strength of facial muscle contractions that cause dynamic wrinkles.',
    appearance: 'Reduces expression line depth by up to 63% in clinical studies. Best for forehead lines, crow\'s feet, frown lines, and perioral wrinkles. Gradual onset (4–6 weeks) vs immediate for Botox, but no risk of paralysis or immune response.',
    dose: '5–10% concentration in topical serum, AM and PM application',
    timeline: 'Subtle softening by week 3–4; measurable depth reduction by week 6–8',
  },
  {
    name: 'BPC-157',
    fullName: 'Body Protective Compound 157',
    category: 'Gut-Skin Axis + Scar Healing',
    color: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-700 border-blue-500/30',
    priority: 'Foundational',
    mechanism: 'BPC-157 is a 15 amino acid peptide derived from a gastric protein. It drives angiogenesis (new blood vessel formation), accelerates fibroblast activation for collagen remodeling, and regulates nitric oxide signaling. Its gut-healing effects address the gut-skin axis — leaky gut causes systemic inflammation that manifests as skin disorders.',
    appearance: 'Accelerates wound and scar healing with superior cosmetic outcomes. Systemic gut-skin axis repair reduces inflammatory acne, rosacea, and eczema flares. Scar tissue remodeling from type III collagen to stronger type I collagen improves scar appearance over 3–6 months.',
    dose: '250–500mcg SC, 5 days/week; local injection near scars for targeted effect',
    timeline: 'Gut improvements: 2–4 weeks; scar remodeling: 3–6 months',
  },
  {
    name: 'IGF-1 LR3',
    fullName: 'Insulin-like Growth Factor 1 Long R3',
    category: 'Collagen + Structural',
    color: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-700 border-cyan-500/30',
    priority: 'Advanced',
    mechanism: 'IGF-1 LR3 is a synthetic analog of IGF-1 with a 20–30x longer half-life (70–80 hours vs 2–3 hours). It signals through the IGF-1 receptor to drive protein synthesis, collagen production, and tissue remodeling. Unlike systemic IGF-1, the LR3 modification reduces binding to IGF-binding proteins, making more of the peptide bioavailable.',
    appearance: 'Drives collagen matrix remodeling that affects facial volume and structural appearance. Improves muscle protein synthesis and fat oxidation simultaneously — improving body composition and facial definition. Hair follicle proliferation is also stimulated via IGF-1 receptors in the follicle.',
    dose: '50–80mcg/day SC or IM, 4 weeks on / 4 weeks off',
    timeline: 'Body composition changes: 4–6 weeks; collagen effects: 8–12 weeks',
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    fullName: 'GHRH Analog + Ghrelin Mimetic Stack',
    category: 'GH Axis → Collagen + Fat Loss',
    color: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-700 border-amber-500/30',
    priority: 'Advanced',
    mechanism: 'CJC-1295 is a GHRH analog that amplifies pituitary GH release. Ipamorelin is a ghrelin receptor agonist (GHSR) that triggers a GH pulse. Together they produce a synergistic increase in endogenous GH secretion of 3–10x baseline. The GH pulse triggers downstream IGF-1 production in the liver, driving collagen synthesis, fat mobilization, and muscle protein anabolism.',
    appearance: 'The best peptide stack for simultaneous fat loss + collagen gain — the two most impactful body composition variables for facial appearance. Reduces facial adiposity while improving skin collagen density. Hair quality and density improve secondary to GH elevation. Improved sleep quality from ipamorelin further enhances skin recovery.',
    dose: 'CJC-1295: 300mcg + Ipamorelin: 100mcg, 2–3x/week SC before bed',
    timeline: 'Fat loss changes: 6–8 weeks; collagen improvements: 10–12 weeks',
  },
  {
    name: 'Epithalon',
    fullName: 'Epithalamin Tetrapeptide (Ala-Glu-Asp-Gly)',
    category: 'Cellular Aging Reversal',
    color: 'text-rose-400',
    badge: 'bg-rose-500/20 text-rose-700 border-rose-500/30',
    priority: 'Advanced',
    mechanism: 'Epithalon activates telomerase — the enzyme that extends telomeres on chromosomes. Telomere shortening is a primary molecular driver of cellular aging. By restoring telomerase activity, Epithalon extends cellular lifespan, allowing skin cells and other tissues to replicate more times before senescence. It also acts on the pineal gland to restore circadian rhythm and melatonin production.',
    appearance: 'Addresses the root cause of skin aging at the cellular level — telomere attrition. Epithalon-treated cells in vitro continue dividing past normal Hayflick limits. Clinically, users report significant improvements in skin elasticity, age spot reduction, and overall skin quality sustained for months after a single treatment course.',
    dose: '10mg total over 10 consecutive days, SC or IV; once per quarter or twice per year',
    timeline: 'Initial improvements: 4–6 weeks post-cycle; cumulative effects build with repeated cycles',
  },
];

const stackPhilosophy = [
  {
    level: 'Budget Foundation',
    cost: '~$80–120/month',
    color: 'border-slate-400/30',
    text: 'text-gray-600',
    peptides: ['GHK-Cu topical (1mg/day)', 'BPC-157 (250mcg SC, 5x/week)'],
    rationale: 'Maximum benefit for minimal cost. GHK-Cu addresses skin quality — the highest-leverage appearance variable. BPC-157 addresses gut-skin axis, scar healing, and systemic inflammation. These two peptides address 3 of 4 looksmaxxing pillars at a fraction of advanced protocol costs.',
  },
  {
    level: 'Standard Protocol',
    cost: '~$200–280/month',
    color: 'border-emerald-400/30',
    text: 'text-emerald-700',
    peptides: ['GHK-Cu (continue)', 'BPC-157 (continue)', 'SNAP-8 topical (5–10% serum)', 'CJC-1295/Ipamorelin (2x/week)'],
    rationale: 'Adds targeted wrinkle reduction via SNAP-8 and GH-axis activation via CJC/Ipamorelin. The GH peptides drive fat loss and collagen simultaneously — transforming body composition and skin quality together. This is the most popular protocol among experienced users for balanced, comprehensive improvement.',
  },
  {
    level: 'Premium Protocol',
    cost: '~$400–600/month',
    color: 'border-purple-400/30',
    text: 'text-purple-700',
    peptides: ['GHK-Cu (injectable + topical)', 'BPC-157', 'SNAP-8', 'CJC-1295/Ipamorelin', 'Epithalon (quarterly cycle)', 'IGF-1 LR3 (4-week cycles)'],
    rationale: 'Full stack targeting all appearance pillars simultaneously. Injectable GHK-Cu provides systemic gene reset effects; Epithalon provides telomere extension; IGF-1 LR3 cycles drive structural collagen improvements. Reserved for serious biohackers and anti-aging enthusiasts with peptide experience.',
  },
];

const faqs = [
  {
    q: 'Is looksmaxxing with peptides safe?',
    a: 'The peptides covered here have extensive research profiles. GHK-Cu and SNAP-8 are used in commercial cosmetics at lower concentrations — research-grade doses are higher but use the same molecules. BPC-157 has an exceptional safety profile in animal studies. The main risks are from improper sourcing, reconstitution, or injection technique. Always source from verified peptide suppliers and learn proper sterile injection protocol if self-administering injectables.',
  },
  {
    q: 'How long before I see real appearance changes?',
    a: 'The most rapid improvements come from SNAP-8 (expression line softening at 3–4 weeks) and BPC-157 gut-skin axis effects (clearer skin in 2–4 weeks). GHK-Cu topical produces visible skin quality improvements at 4–8 weeks. GH peptides for body composition require 6–10 weeks. Full protocol effects become most apparent at the 3–4 month mark. Looksmaxxing is a long-term project — commit to at least 3 months before evaluating results.',
  },
  {
    q: 'What is the single best peptide for looksmaxxing?',
    a: 'GHK-Cu, because skin quality is the highest-leverage appearance variable and GHK-Cu is the most comprehensively researched peptide for skin — with mechanisms targeting collagen synthesis, gene expression, angiogenesis, and antioxidant defense simultaneously. It also benefits hair/beard. For most people starting out, GHK-Cu topical alone produces more visible improvement than any other single peptide.',
  },
  {
    q: 'Can women use these peptide protocols?',
    a: 'Yes — all of these peptides work via mechanisms that are not sex-specific. GHK-Cu, SNAP-8, Epithalon, and BPC-157 have identical mechanisms in male and female biology. For CJC-1295/Ipamorelin and IGF-1 LR3, women typically use the lower end of dosing ranges and should be aware of different hormonal interactions. The looksmaxxing benefits (skin quality, fat loss, collagen) are equally applicable.',
  },
  {
    q: 'Do I need to inject peptides or can I use topicals only?',
    a: 'A significant portion of looksmaxxing benefits can be achieved topically. GHK-Cu and SNAP-8 are both effective as topicals. BPC-157 has limited topical bioavailability so oral or SC injection is needed for systemic gut-skin axis effects. CJC-1295/Ipamorelin and IGF-1 LR3 require injection. For injection-averse users, a GHK-Cu + SNAP-8 topical stack is a high-impact starting point.',
  },
  {
    q: 'How do peptides compare to skincare products like retinol or vitamin C?',
    a: 'Peptides operate at a fundamentally different level than conventional skincare. Retinol accelerates cell turnover and stimulates collagen via retinoic acid receptor activation — effective but causes irritation and photosensitivity. Vitamin C is a collagen cofactor and antioxidant — supportive but not a direct collagen synthesizer. GHK-Cu directly resets gene expression patterns and drives multiple collagen types simultaneously. SNAP-8 has a neuromuscular mechanism with no equivalent in conventional skincare. These peptides can be layered with conventional skincare for additive effects.',
  },
];

export default function LooksmaxxingPeptidesPage() {
  return (
    <main className="bg-white min-h-screen text-gray-700">
      {/* Hero */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">
              Appearance Optimization
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Looksmaxxing with Peptides:{' '}
              <span className="text-emerald-700">The Complete Science-Backed Protocol</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Looksmaxxing has moved beyond gym routines and skincare serums. Research peptides — GHK-Cu, SNAP-8, BPC-157, IGF-1 LR3, and others — operate at the gene expression and cellular signaling level, producing appearance improvements that topical cosmetics cannot replicate. This guide covers every appearance-relevant peptide, how they work, and how to stack them strategically.
            </p>
            <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* What is looksmaxxing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is Looksmaxxing — And Why Peptides Change the Game</h2>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Looksmaxxing is the systematic optimization of physical appearance through deliberate intervention — diet, training, grooming, skincare, and increasingly, biomedical tools including research peptides. The concept, once discussed only in niche online communities, has gone mainstream as the evidence base for interventional approaches to appearance has grown.
              </p>
              <p>
                The reason peptides represent a step-change in looksmaxxing is mechanistic depth. Conventional approaches to appearance optimization work on surface variables: topical moisturizers hydrate temporarily; foundation products cover; gym training builds muscle over months. Research peptides operate at the signaling layer — modulating gene expression, directing collagen synthesis, resetting aged cellular programs, and stimulating angiogenesis. These are not surface-level effects.
              </p>
              <p>
                A landmark 2012 analysis of GHK-Cu by Dr. Loren Pickart and colleagues at Lund University identified that this copper tripeptide modulates the expression of over 4,000 genes — resetting approximately 31% of genes altered by aging back toward a youthful expression pattern. No topical cosmetic ingredient operates at this level. That is the difference peptides make.
              </p>
              <p>
                Importantly, looksmaxxing with peptides is not about achieving unrealistic ideals. The goal is optimization within your genetic ceiling — improving skin quality, reducing signs of aging, optimizing body composition, and enhancing the features you already have. These are measurable, evidence-based outcomes with well-characterized mechanisms.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Why Peptides vs. Conventional Cosmetics
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Collagen Synthesis', peptide: 'Direct gene upregulation (GHK-Cu)', topical: 'Indirect stimulation at best' },
                  { label: 'Wrinkle Mechanism', peptide: 'SNARE complex inhibition (SNAP-8)', topical: 'Surface hydration only' },
                  { label: 'Gene Expression', peptide: '31% aged gene reset (GHK-Cu)', topical: 'No direct gene-level activity' },
                  { label: 'Telomere Extension', peptide: 'Telomerase activation (Epithalon)', topical: 'Not achievable topically' },
                  { label: 'Scar Remodeling', peptide: 'Fibroblast + angiogenesis (BPC-157)', topical: 'Limited surface effect only' },
                  { label: 'Body Composition', peptide: 'GH axis activation (CJC/Ipamorelin)', topical: 'Not applicable' },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 text-xs border-b border-gray-100 pb-2">
                    <span className="text-gray-500 font-medium">{row.label}</span>
                    <span className="text-emerald-400">{row.peptide}</span>
                    <span className="text-gray-500">{row.topical}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The 4 Pillars of Appearance Optimization</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            A comprehensive looksmaxxing protocol addresses all four variables simultaneously — because they interact. Better body composition affects facial definition; better gut health affects skin quality; better GH levels affect all four pillars at once.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className={`rounded-xl border p-5 ${p.bg} ${p.border}`}>
                <div className={`text-2xl mb-3 ${p.color}`}>{p.icon}</div>
                <h3 className={`font-bold text-lg mb-2 ${p.color}`}>{p.title}</h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.peptides.map((pep) => (
                    <span key={pep} className="text-xs bg-gray-100 text-gray-600 border border-gray-200 rounded px-2 py-0.5">
                      {pep}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peptide Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Every Appearance-Relevant Peptide: Mechanisms & Protocols</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Each peptide below has specific, well-characterized mechanisms for appearance improvement. Understanding the mechanism lets you choose which peptides match your specific goals.
          </p>
          <div className="space-y-5">
            {peptideProfiles.map((pep) => (
              <div key={pep.name} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`text-xl font-bold ${pep.color}`}>{pep.name}</h3>
                      <span className={`text-xs border rounded-full px-2 py-0.5 ${pep.badge}`}>{pep.priority}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{pep.fullName} — {pep.category}</p>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <div>{pep.dose}</div>
                    <div className="text-gray-600 mt-1">{pep.timeline}</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Mechanism</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{pep.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Appearance Effects</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{pep.appearance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Component */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Phase-by-Phase Looksmaxxing Roadmap</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            A structured 4-phase approach builds the protocol systematically, allowing you to assess what is working before adding complexity.
          </p>
          <LooksmaxxingRoadmap />
        </div>
      </section>

      {/* Stack Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stack Philosophy: Budget vs. Premium Protocols</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            The protocol you run should match your experience level, budget, and specific goals. More expensive is not always better — the foundational peptides produce the most visible improvements for most people.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {stackPhilosophy.map((s) => (
              <div key={s.level} className={`rounded-xl border p-6 bg-gray-50 ${s.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-bold text-lg ${s.text}`}>{s.level}</h3>
                  <span className="text-sm text-gray-500">{s.cost}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {s.peptides.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {p}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{s.rationale}</p>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Looksmaxxing Protocol?</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              Source pharmaceutical-grade research peptides from a verified supplier. Start with the foundational stack and build from there.
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
              For research purposes only. Not medical advice. Consult a healthcare professional before use.
            </p>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore the Full Looksmaxxing Library</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { href: '/peptides-for-skin-quality', label: 'Peptides for Skin Quality: Complete Guide' },
              { href: '/ghk-cu-skin-protocol', label: 'GHK-Cu Skin Protocol: Topical & Injectable' },
              { href: '/snap-8-anti-wrinkle-peptide', label: 'SNAP-8: The Botox Alternative' },
              { href: '/bpc-157-scar-healing', label: 'BPC-157 for Scar Healing' },
              { href: '/ghk-cu-for-hair-loss', label: 'GHK-Cu for Hair Loss & Beard Growth' },
              { href: '/epithalon-complete-guide', label: 'Epithalon: Telomere Extension Guide' },
              { href: '/anti-aging', label: 'Anti-Aging Peptide Protocols' },
              { href: '/body-composition', label: 'Peptides for Body Composition' },
              { href: '/cjc-1295-ipamorelin-results', label: 'CJC-1295 / Ipamorelin Results' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:border-emerald-500/40 transition-all"
              >
                <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks path="/looksmaxxing-peptides" />
    </main>
  );
}
