import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Sparkles, Dna, Zap, Clock, TrendingDown, Brain, Activity, FlaskConical, Calendar } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';
import BioAgeAssessment from '@/components/BioAgeAssessment';

export const metadata: Metadata = {
  title: 'Best Anti-Aging Peptides 2026: Epithalon, GHK-Cu, SS-31 & NAD+ | Longevity Protocols',
  description: 'The most scientifically advanced anti-aging peptide protocols. Epithalon lengthens telomeres, GHK-Cu resets 31% of aged genes, SS-31 restores mitochondrial function. Full dosing protocols.',
  keywords: 'anti-aging peptides, Epithalon telomere, GHK-Cu copper peptide, SS-31 mitochondria, NAD+ longevity, SNAP-8 wrinkles, longevity protocol',
  openGraph: {
    title: 'Anti-Aging Peptides: Epithalon, GHK-Cu, SS-31 & NAD+ | Longevity Protocols',
    description: 'Epithalon lengthens telomeres, GHK-Cu resets 31% of aged genes, SS-31 restores mitochondrial function. Full dosing protocols.',
    type: 'article',
    url: 'https://bp157stack.com/anti-aging',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anti-Aging Peptides: Epithalon, GHK-Cu, SS-31 & NAD+',
    description: 'The most scientifically advanced anti-aging peptide protocols for longevity.',
  },
};

const SOURCE_URL = '/out';

const agingHallmarks = [
  {
    icon: '🧬',
    title: 'Telomere Shortening',
    peptide: 'Epithalon',
    color: 'amber',
    mechanism: 'Telomeres — the protective caps on chromosomes — shorten with every cell division. Epithalon activates telomerase, the enzyme that rebuilds telomeres, slowing and partially reversing cellular aging.',
    evidence: '28% mortality reduction in 12-year human trial (2012)',
  },
  {
    icon: '🔬',
    title: 'Epigenetic Drift',
    peptide: 'GHK-Cu',
    color: 'amber',
    mechanism: 'As cells age, gene expression drifts — pro-inflammatory, pro-fibrotic patterns dominate. GHK-Cu resets 31% of aged genes back toward youthful expression patterns in tissue culture models.',
    evidence: '4,000+ genes modulated in gene expression studies',
  },
  {
    icon: '⚡',
    title: 'Mitochondrial Decline',
    peptide: 'SS-31',
    color: 'blue',
    mechanism: 'Mitochondrial inner membrane integrity declines with age, reducing ATP production by up to 50% in aging tissues. SS-31 stabilizes cardiolipin — the key lipid in the inner membrane — restoring electron transport chain efficiency.',
    evidence: 'Phase II/III clinical trials for heart failure and ALS',
  },
  {
    icon: '🔋',
    title: 'NAD+ Depletion',
    peptide: 'NAD+',
    color: 'emerald',
    mechanism: 'NAD+ levels decline 50%+ from age 20 to 60. This essential coenzyme powers SIRT1/3 (sirtuins), PARP DNA repair, and cellular energy metabolism. Direct IV/injection NAD+ bypasses gut absorption limits of NMN/NR.',
    evidence: 'Sirtuin activation — the longevity pathway directly activated by caloric restriction',
  },
  {
    icon: '🌸',
    title: 'Collagen Matrix Breakdown',
    peptide: 'SNAP-8',
    color: 'rose',
    mechanism: 'SNAP-8 (acetyl octapeptide-3) inhibits catecholamine release at the neuromuscular junction — reducing muscle contractions that form expression lines while stimulating dermal collagen synthesis.',
    evidence: 'Up to 63% reduction in wrinkle depth in clinical trials',
  },
];

const longevityStack = [
  { step: '01', peptide: 'Epithalon', dose: '5–10mg', freq: 'Daily, 10-day course', role: 'Telomere extension — run 2× per year' },
  { step: '02', peptide: 'GHK-Cu', dose: '2mg/day', freq: 'Daily SC or topical', role: 'Gene reset + collagen synthesis' },
  { step: '03', peptide: 'SS-31', dose: '1–2mg', freq: '2–3× per week', role: 'Mitochondrial membrane repair' },
  { step: '04', peptide: 'NAD+', dose: '500mg', freq: 'Daily IV push (or 250mg SC)', role: 'Sirtuin activation + DNA repair' },
  { step: '05', peptide: 'SNAP-8', dose: '10mg', freq: 'Topical 2× daily', role: 'Skin rejuvenation + wrinkle reduction' },
];

const ageingResearch = [
  { year: '1994', event: 'Epithalon synthesized by Prof. Vladimir Khavinson at St. Petersburg Gerontology Institute — first telomerase-activating peptide' },
  { year: '2003', event: 'Loren Pickart publishes landmark GHK-Cu study showing 4,000+ gene modulation in human fibroblasts' },
  { year: '2005', event: 'Szeto-Schiller peptides (SS-31) developed — cardiolipin-targeting compounds restore mitochondrial function in aging cells' },
  { year: '2011', event: 'David Sinclair (Harvard) identifies NAD+ / sirtuin axis as fundamental longevity pathway — catalyzes NMN/NAD research wave' },
  { year: '2012', event: 'Epithalon 12-year human trial published — 28% mortality reduction in treated group vs. placebo' },
  { year: '2016', event: 'SS-31 enters Phase II clinical trials for heart failure (Stealth BioTherapeutics) — mito repair moves from lab to clinic' },
  { year: '2021', event: 'GHK-Cu enters wound healing and skin aging clinical trials — clinical validation of 4,000+ gene modulation claim' },
  { year: '2024', event: 'Multi-target longevity protocols combining telomere, mitochondrial, and epigenetic approaches become standard research focus' },
];

const beforeAfterMetrics = [
  { metric: 'Biological Age Score', before: 'Chronological + lifestyle damage', after: 'Can reduce 5–15 years on epigenetic clocks', peptide: 'Epithalon + GHK-Cu' },
  { metric: 'Mitochondrial ATP Output', before: 'Declining ~1–2%/year post-30', after: 'Restored toward youthful function', peptide: 'SS-31 + NAD+' },
  { metric: 'Skin Collagen Density', before: 'Reducing with each decade', after: 'Increases with GHK-Cu within weeks', peptide: 'GHK-Cu + SNAP-8' },
  { metric: 'Telomere Length', before: 'Shortens 50–200bp per year naturally', after: 'Slowed/arrested + partial regrowth', peptide: 'Epithalon' },
  { metric: 'Expression Line Depth', before: 'Deepens with repeated muscle movement', after: '63% reduction in 28-day trial', peptide: 'SNAP-8' },
  { metric: 'Energy & Fatigue', before: 'Increasing fatigue due to mito decline', after: 'Measurable improvement in 2–4 weeks', peptide: 'NAD+ + SS-31' },
];

export default function AntiAgingPage() {
  const products = getProductsByCategory('Anti-Aging');

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-50 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-bold tracking-wide">LONGEVITY & ANTI-AGING PROTOCOLS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 leading-tight mb-6">
            Don&apos;t Just Live<br />
            <span style={{ color: '#d97706' }}>Live Younger.</span>
          </h1>
          <p className="text-gray-800 text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            Five anti-aging peptides targeting five distinct molecular hallmarks of aging.
            The most comprehensive longevity protocol available outside of a clinical trial.
          </p>
          <p className="text-gray-600 text-base mb-10 max-w-2xl mx-auto">
            These are clinically studied compounds with peer-reviewed evidence
            targeting the actual molecular mechanisms of biological aging.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-base px-8 py-4">
              View Full Longevity Stack
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {[
              { num: '5', label: 'Aging Mechanisms Targeted' },
              { num: '28%', label: 'Mortality Reduction (Epithalon trial)' },
              { num: '31%', label: 'Aged Genes Reset by GHK-Cu' },
              { num: 'Ph II/III', label: 'SS-31 Clinical Trial Stage' },
            ].map((s) => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black text-amber-600">{s.num}</div>
                <div className="text-gray-700 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIOLOGICAL AGE ASSESSMENT WIDGET */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
            <Brain className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-bold tracking-wide">BIOLOGICAL AGE ASSESSMENT</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">How Old Are You, Biologically?</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Rate 10 aspects of your current health and vitality. The assessment calculates your estimated biological age gap and recommends a targeted peptide protocol.
          </p>
        </div>
        <BioAgeAssessment />
      </section>

      {/* 5 HALLMARKS — FULL SCIENCE DEEP DIVE */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
              <FlaskConical className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 text-sm font-bold tracking-wide">SCIENCE DEEP DIVE</span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-3">
              5 Hallmarks of Aging. 5 Targeted Peptides.
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Aging is not one process — it&apos;s a cascade of simultaneous molecular failures.
              Each peptide targets a different root cause. Here is the full science.
            </p>
          </div>

          <div className="space-y-8">

            {/* Hallmark 1: Telomere Shortening */}
            <div className="glass-card p-6 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">🧬</span>
                <div>
                  <div className="text-xs font-bold text-amber-600 tracking-widest">HALLMARK 01</div>
                  <h3 className="text-gray-900 font-black text-2xl">Telomere Shortening</h3>
                  <div className="text-amber-600 font-semibold">Targeted by: Epithalon</div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">What It Is</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Telomeres are the repetitive DNA sequences (TTAGGG in humans) capping the ends of chromosomes, protecting them like the plastic tip of a shoelace. Every time a cell divides, the telomere shortens by 50–200 base pairs because DNA polymerase cannot fully replicate the terminal ends. When telomeres shorten below a critical threshold, cells enter senescence (permanent cell cycle arrest) or undergo apoptosis. Critically, many cells with critically short telomeres do neither — they become senescent cells that secrete a pro-inflammatory cocktail called the SASP (senescence-associated secretory phenotype), actively accelerating aging in surrounding tissue. Telomere length is measurable in blood and is one of the most clinically validated biomarkers of biological age.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">How It Drives Aging</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Shorter average telomere length in white blood cells (leukocyte telomere length, or LTL) is associated with increased all-cause mortality, cardiovascular disease, Alzheimer&apos;s disease, type 2 diabetes, and multiple cancers. Studies of identical twins show that the twin with shorter telomeres at any given age has significantly higher risk of age-related diseases. The causal relationship is bidirectional: short telomeres accelerate aging, and the hallmarks of aging (inflammation, oxidative stress, metabolic dysfunction) in turn accelerate telomere shortening, creating a vicious cycle that compounds over decades.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">Epithalon: Evidence and Timeline</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Epithalon (Ala-Glu-Asp-Gly), a tetrapeptide from the pineal gland, activates telomerase (hTERT) — the enzyme that adds TTAGGG repeats back to shortened telomeres. In Khavinson&apos;s landmark 12-year human trial (2012), elderly patients receiving Epithalon twice yearly showed 28% mortality reduction versus untreated controls over the full study period. In vitro studies show measurable telomere lengthening within 3–6 months of supplementation. The practical expectation: acute effects within weeks (improved sleep, energy — via Epithalon&apos;s pineal/melatonin regulation), with telomere-level impact accumulating over months to years of twice-annual cycling.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-amber-600 text-xs font-medium">28% mortality reduction — Khavinson et al., 12-year trial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hallmark 2: Epigenetic Drift */}
            <div className="glass-card p-6 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">🔬</span>
                <div>
                  <div className="text-xs font-bold text-amber-600 tracking-widest">HALLMARK 02</div>
                  <h3 className="text-gray-900 font-black text-2xl">Epigenetic Drift</h3>
                  <div className="text-amber-600 font-semibold">Targeted by: GHK-Cu</div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">What It Is</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Epigenetics refers to changes in gene expression that do not alter the DNA sequence itself but change which genes are switched on or off. DNA methylation patterns — the primary epigenetic clock used to measure biological aging — drift systematically over time. Steve Horvath&apos;s DNA methylation clock (2013) can predict biological age from blood to within 3.6 years with accuracy that surpasses all other known aging biomarkers. As we age, the methylation patterns that kept pro-inflammatory, pro-fibrotic, and oncogenic genes suppressed become dysregulated — turning on genes that should be off and silencing genes that drive youthful cellular function.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">How It Drives Aging</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Epigenetic drift is arguably the most encompassing aging mechanism because it determines the expression of every other aging pathway. Drifted methylation patterns upregulate inflammatory cytokines (contributing to inflammaging), downregulate antioxidant genes (exacerbating oxidative stress), and upregulate fibrotic pathways (contributing to tissue stiffening and organ dysfunction). The good news: unlike DNA sequence mutations, epigenetic changes are reversible. Yamanaka factor reprogramming studies have shown that epigenetic age can be reversed — and GHK-Cu represents a peptide-level intervention in this same direction.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">GHK-Cu: Evidence and Timeline</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    GHK-Cu (glycyl-L-histidyl-L-lysine copper complex) modulates over 4,000 human genes, resetting the expression patterns of aged fibroblasts toward youthful states. Specifically, GHK-Cu upregulates antioxidant genes (SOD1, catalase), anti-inflammatory pathways, collagen synthesis genes, and DNA repair pathways — while downregulating pro-inflammatory and fibrotic genes. Clinical effects appear at 4–8 weeks: measurable improvement in skin collagen density, reduced fine lines, improved wound healing response. The gene expression changes — the deeper anti-aging mechanism — accumulate over months of consistent use.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span className="text-amber-600 text-xs font-medium">4,000+ genes modulated — Pickart &amp; Margolina, 2018</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hallmark 3: Mitochondrial Dysfunction */}
            <div className="glass-card p-6 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">⚡</span>
                <div>
                  <div className="text-xs font-bold text-blue-600 tracking-widest">HALLMARK 03</div>
                  <h3 className="text-gray-900 font-black text-2xl">Mitochondrial Dysfunction</h3>
                  <div className="text-blue-600 font-semibold">Targeted by: SS-31</div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">What It Is</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Mitochondria — the cell&apos;s energy generators — produce ATP through the electron transport chain (ETC) located on the inner mitochondrial membrane (IMM). Cardiolipin, a unique phospholipid found only in the IMM, is essential for maintaining the electrochemical gradient that drives ATP synthase. With age, cardiolipin becomes oxidized and structurally damaged, causing cytochrome c (a critical ETC component) to detach from the inner membrane. This disrupts electron flow, reduces ATP output, increases reactive oxygen species (ROS) production, and — critically — triggers the release of pro-apoptotic signals. By age 70, mitochondrial ATP production in muscle cells has declined by 40–50%.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">How It Drives Aging</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Mitochondrial dysfunction drives aging through multiple simultaneous mechanisms. Reduced ATP output impairs every energy-demanding cellular process: protein synthesis, DNA repair, membrane maintenance, and immune function. Increased ROS production from a dysfunctional ETC creates oxidative stress that damages DNA, proteins, and lipids in a self-amplifying cycle. Mitochondrial dysfunction also impairs AMPK signaling (the cellular energy sensor), disrupts autophagy (cellular cleaning), and contributes to the chronic low-grade inflammation (inflammaging) characteristic of aging through mtDNA leakage. Muscle fatigue, cognitive decline, cardiovascular dysfunction, and immune senescence all have mitochondrial dysfunction as a significant contributing factor.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">SS-31: Evidence and Timeline</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    SS-31 (Elamipretide) is a tetrapeptide that preferentially concentrates on the inner mitochondrial membrane by electrostatic interaction. It binds directly to cardiolipin, stabilizing its structure and preventing cytochrome c dissociation. This restores ETC complex I/III activity, increases ATP production, and dramatically reduces mitochondrial ROS output. In aging mouse models, SS-31 reverses age-associated declines in muscle function, cardiac output, and kidney function. Phase II/III clinical trials show significant improvement in heart failure patients. The timeline: energy improvements and exercise tolerance changes are often noticeable within 2–4 weeks of starting SS-31, with progressive structural mitochondrial improvements accumulating over months.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-blue-600 text-xs font-medium">Phase II/III trials ongoing — Stealth BioTherapeutics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hallmark 4: NAD+ Depletion */}
            <div className="glass-card p-6 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">🔋</span>
                <div>
                  <div className="text-xs font-bold text-emerald-600 tracking-widest">HALLMARK 04</div>
                  <h3 className="text-gray-900 font-black text-2xl">NAD+ Depletion</h3>
                  <div className="text-emerald-600 font-semibold">Targeted by: NAD+ (direct supplementation)</div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">What It Is</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every living cell that serves as the essential cofactor for hundreds of metabolic reactions. Its concentration in human tissue declines by approximately 50% between age 20 and 60 — a consistent finding across tissue types and species. This decline is driven by multiple simultaneous processes: increased consumption by PARP enzymes (which use NAD+ for DNA repair in response to accumulating DNA damage), increased consumption by CD38 (a NAD+ glycohydrolase that increases with aging-associated inflammation), and reduced biosynthetic capacity as the NAD+ salvage pathway declines.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">How It Drives Aging</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    NAD+ depletion is uniquely impactful because it throttles two of the most critical longevity pathways simultaneously. First, sirtuins (SIRT1-7) — the deacetylase enzymes that regulate DNA repair, inflammation, metabolism, and cellular stress responses — require NAD+ as a cofactor. When NAD+ falls, sirtuin activity falls with it, removing a key brake on aging-associated gene expression changes. Second, PARP enzymes require NAD+ for DNA repair — as DNA damage accumulates with age, PARP demand increases, depleting NAD+ faster and creating a vicious cycle where DNA damage accelerates the depletion of the very coenzyme needed to repair it.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">NAD+ Direct: Evidence and Timeline</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Direct NAD+ supplementation via SC injection or IV delivers the coenzyme without relying on the NMN/NR biosynthetic pathway (which becomes less efficient with age). David Sinclair&apos;s Harvard lab demonstrated that restoring NAD+ levels in aged mice reverts vascular aging, improves muscle function, and enhances DNA repair capacity. Clinical trials of NMN supplementation show measurable improvements in muscle insulin sensitivity and physical performance in older adults. The injectable route achieves serum levels 10–20× higher than oral precursors. Expected timeline: energy, cognitive clarity, and exercise recovery improvements typically appear within 2–4 weeks of daily supplementation.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 text-xs font-medium">Sirtuin activation — same pathway as caloric restriction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hallmark 5: Cellular Senescence / Collagen */}
            <div className="glass-card p-6 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-5xl">🌸</span>
                <div>
                  <div className="text-xs font-bold text-rose-600 tracking-widest">HALLMARK 05</div>
                  <h3 className="text-gray-900 font-black text-2xl">Cellular Senescence & Collagen Breakdown</h3>
                  <div className="text-rose-600 font-semibold">Targeted by: SNAP-8 + GHK-Cu</div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">What It Is</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Cellular senescence — the state of permanent cell cycle arrest in response to stress, telomere shortening, or oncogenic signaling — accumulates with age and is a major driver of tissue dysfunction. Senescent cells secrete the SASP (senescence-associated secretory phenotype): a mixture of inflammatory cytokines, matrix metalloproteinases (MMPs), and growth factors that degrade the extracellular matrix, destroy neighboring cells&apos; collagen architecture, and promote chronic inflammation. Structurally, this manifests as declining skin collagen density (1% per year after age 30), increased wrinkle depth, reduced skin elasticity, and the general structural decline of connective tissue throughout the body.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">How It Drives Aging</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Senescent cell accumulation drives aging through the SASP — which creates a chronically inflammatory tissue environment that accelerates the aging of neighboring cells, impairs stem cell niches, and disrupts organ function. SASP-derived MMPs break down collagen in skin, joints, and vasculature simultaneously. The visible consequences — sagging skin, deepening wrinkles, joint stiffness, atherosclerosis — are structural manifestations of the same underlying senescent cell burden. Clearance of senescent cells (senolytics) is a major area of longevity research, but simultaneously supporting the extracellular matrix and inhibiting the neuromuscular contractions that accelerate surface aging offers a complementary approach.
                  </p>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold mb-2">SNAP-8 & GHK-Cu: Evidence and Timeline</h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    SNAP-8 (acetyl octapeptide-3) inhibits the SNARE complex at neuromuscular junctions, reducing catecholamine release and the muscle contractions that form dynamic expression lines — a mechanism analogous to Botox but without systemic neuromuscular effects. Clinical trials show 63% reduction in wrinkle depth at the expression lines after 28 days of twice-daily topical application. GHK-Cu simultaneously counteracts SASP-driven MMP overexpression, upregulates TIMP (MMP inhibitors), and drives new collagen synthesis. Together, these two peptides address both the cause (MMP-driven collagen breakdown) and the mechanical driver (neuromuscular contraction) of visible skin aging. Visible effects typically appear at 4–6 weeks; structural collagen changes are measurable at 3 months.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-3 py-1">
                    <CheckCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span className="text-rose-600 text-xs font-medium">SNAP-8: 63% wrinkle reduction — 28-day clinical trial</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANTI-AGING STACK CALENDAR */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-bold tracking-wide">YEAR-ROUND PROTOCOL</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Anti-Aging Stack Calendar</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The most effective longevity protocol layers cyclical and ongoing interventions across the full year. This calendar represents the optimal annual protocol.
          </p>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              period: 'Months 1–2',
              label: 'Telomere Foundation',
              color: '#d97706',
              peptides: [
                { name: 'Epithalon', dose: '5–10 mg/day', duration: '10-day cycle × 2', note: 'First telomerase activation cycle of the year' },
                { name: 'NAD+', dose: '250 mg SC daily', duration: 'Ongoing from month 1', note: 'Start sirtuin activation immediately' },
              ],
              notes: 'The Epithalon cycle bookends the year and is the highest-priority intervention. Run two 10-day cycles in month 1 (days 1–10, then days 21–30) for maximum initial telomere activation.',
            },
            {
              period: 'Months 3–6',
              label: 'Epigenetic & Structural Reset',
              color: '#f59e0b',
              peptides: [
                { name: 'GHK-Cu', dose: '2 mg SC daily', duration: 'Ongoing months 3–12', note: 'Gene expression reset + collagen drive' },
                { name: 'SS-31', dose: '1–2 mg SC', duration: '2–3× weekly, ongoing', note: 'Mitochondrial repair begins compounding' },
                { name: 'NAD+', dose: '250 mg SC daily', duration: 'Continued', note: 'Sirtuin + DNA repair ongoing' },
              ],
              notes: 'This 4-month block builds the deepest longevity gains. GHK-Cu gene modulation and SS-31 mitochondrial repair are cumulative — the longer the continuous run, the greater the benefit.',
            },
            {
              period: 'Month 6',
              label: 'Mid-Year Telomere Boost',
              color: '#d97706',
              peptides: [
                { name: 'Epithalon', dose: '5–10 mg/day', duration: '10-day cycle', note: 'Second annual telomere cycle — 6-month spacing' },
                { name: 'CJC-1295/Ipamorelin', dose: '100/100 mcg SC nightly', duration: 'Begin month 6, continue', note: 'Night-time GH pulsatility restoration — enhances sleep, body composition, and skin' },
              ],
              notes: 'The mid-year Epithalon cycle maintains telomere length gains from months 1–2. Adding CJC-1295/Ipamorelin nightly from this point leverages the improved cellular environment to drive hormonal optimization.',
            },
            {
              period: 'Months 7–12',
              label: 'Maintenance & Optimization',
              color: '#10b981',
              peptides: [
                { name: 'GHK-Cu', dose: '2 mg SC daily', duration: 'Continued', note: 'Ongoing gene reset and collagen synthesis' },
                { name: 'SS-31', dose: '1 mg SC', duration: '2× weekly maintenance', note: 'Mitochondrial maintenance dosing' },
                { name: 'NAD+', dose: '250 mg SC daily', duration: 'Continued', note: 'Year-round sirtuin activation' },
                { name: 'SNAP-8', dose: '10 mg topical', duration: '2× daily ongoing', note: 'Sustained wrinkle reduction and dermal collagen' },
              ],
              notes: 'The second half of the year consolidates the structural and genetic changes initiated in months 1–6. SNAP-8 topical is particularly visible in this window — 6 months of daily application produces clinically significant skin improvements.',
            },
          ].map((period) => (
            <div key={period.period} className="glass-card p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: period.color }} />
              <div className="mb-3">
                <div className="text-xs font-bold tracking-widest mb-1" style={{ color: period.color }}>{period.period}</div>
                <h3 className="text-gray-900 font-bold">{period.label}</h3>
              </div>
              <div className="space-y-3 mb-4">
                {period.peptides.map((p) => (
                  <div key={p.name} className="rounded-lg p-3 bg-gray-100 border border-gray-200">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <span className="text-gray-900 font-bold text-sm">{p.name}</span>
                      <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 border border-gray-200">{p.dose}</span>
                    </div>
                    <div className="text-gray-600 text-xs">{p.duration}</div>
                    <div className="text-gray-700 text-xs mt-1">{p.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{period.notes}</p>
            </div>
          ))}
        </div>

        {/* Always-on bar */}
        <div className="glass-card p-5">
          <div className="text-xs font-bold tracking-widest text-amber-600 mb-3">YEAR-ROUND (MONTHS 1–12)</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'NAD+', detail: '250–500 mg SC or IV daily — sirtuin activation and DNA repair requires consistent year-round NAD+ elevation' },
              { name: 'GHK-Cu', detail: '2 mg SC daily after month 3 — 4,000+ gene modulation compounds with every month of continuous use' },
              { name: 'SNAP-8 topical', detail: '10 mg topical 2× daily — mechanical wrinkle prevention and dermal collagen require daily application for maintained effect' },
            ].map((item) => (
              <div key={item.name} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                <div>
                  <div className="text-gray-900 font-bold text-sm">{item.name}</div>
                  <div className="text-gray-700 text-xs leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Full Longevity Stack */}
      <section className="py-16" style={{ background: 'rgba(251,191,36,0.04)', borderTop: '1px solid rgba(217,119,6,0.15)', borderBottom: '1px solid rgba(217,119,6,0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-4">
                <Dna className="w-4 h-4 text-amber-600" />
                <span className="text-amber-600 text-sm font-semibold">THE LONGEVITY STACK</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                A Multi-Target<br />
                <span className="text-amber-600">Longevity Protocol</span>
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                No single intervention can address all hallmarks of aging simultaneously.
                The anti-aging stack combines five clinically studied compounds that work on
                complementary mechanisms — targeting aging at the genetic, epigenetic,
                mitochondrial, cellular, and structural levels.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6">
                This is not anti-aging cosmetics. This is molecular biology — the same mechanisms
                studied by leading longevity researchers at Harvard, Stanford, and the Buck Institute.
              </p>
              <div className="flex gap-3">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                  View the Stack <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-sm px-6 py-3">
                  Full Protocol
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {longevityStack.map((item) => (
                <div key={item.step} className="flex items-center gap-4 p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <span className="text-amber-600 font-black text-sm">{item.step}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-gray-900 font-bold">{item.peptide}</span>
                      <span className="text-amber-600 text-xs font-mono border border-amber-200 px-2 py-0.5 rounded bg-gray-100 text-gray-800">{item.dose}</span>
                      <span className="text-gray-600 text-xs">{item.freq}</span>
                    </div>
                    <div className="text-gray-700 text-xs mt-0.5">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANTI-AGING BLOOD PANEL GUIDE */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-bold tracking-wide">BIOMARKER GUIDE</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Anti-Aging Blood Panel:<br />
            <span style={{ color: '#d97706' }}>What to Test and When</span>
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Objective biomarker tracking is the most powerful way to confirm that your longevity protocol is working at the cellular level. Test before starting, and retest at 3–6 months. Here is what to measure and what the results mean.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Hormonal Axis',
                color: '#d97706',
                markers: [
                  { name: 'IGF-1', normal: '100–300 ng/mL depending on age', what: 'Growth hormone/IGF-1 axis status. BPC-157 upregulates GHR; CJC-1295/Ipamorelin should increase IGF-1 measurably by 3 months.' },
                  { name: 'Total & Free Testosterone', normal: 'Age-specific reference ranges', what: 'Decline with age is well-established. Epithalon and NAD+ may partially support hormonal optimization. Track trend, not single value.' },
                  { name: 'Estradiol', normal: 'Age/sex appropriate', what: 'Important context for testosterone. Imbalanced T/E2 ratio accelerates aging — particularly relevant for those adding HRT.' },
                  { name: 'DHEA-S', normal: 'Age-specific', what: 'The most consistent biomarker of adrenal aging. Declines linearly from the 30s. NAD+ and Epithalon may partially support adrenal function.' },
                ],
              },
              {
                category: 'Inflammation & Oxidative Stress',
                color: '#ef4444',
                markers: [
                  { name: 'hsCRP', normal: '<1.0 mg/L optimal for longevity', what: 'High-sensitivity C-reactive protein is the most reliable marker of chronic low-grade inflammation (inflammaging). GHK-Cu should reduce CRP measurably by month 3.' },
                  { name: 'IL-6', normal: '<1.5 pg/mL', what: 'A primary SASP cytokine from senescent cells. Elevated IL-6 predicts accelerated aging and all-cause mortality. Target of GHK-Cu and NAD+ (via sirtuin activation).' },
                  { name: '8-OHdG (urine)', normal: 'Functional range', what: 'Oxidative DNA damage marker. SS-31 and NAD+ should reduce this over time as mitochondrial ROS production is reduced.' },
                ],
              },
              {
                category: 'Metabolic Function',
                color: '#10b981',
                markers: [
                  { name: 'Fasting insulin & HOMA-IR', normal: 'HOMA-IR <2.0 optimal', what: 'Insulin resistance is one of the most age-accelerating metabolic states. NAD+ and SS-31 both improve insulin sensitivity via SIRT1 and mitochondrial restoration.' },
                  { name: 'HbA1c', normal: '<5.4% for longevity', what: 'Long-term glucose regulation. Advanced glycation end-products (AGEs) from chronic hyperglycemia crosslink collagen and accelerate aging — a direct mechanism GHK-Cu counteracts.' },
                  { name: 'Comprehensive metabolic panel', normal: 'Standard reference ranges', what: 'Baseline kidney and liver function. No known effect of the longevity stack on these markers, but important to establish baseline.' },
                ],
              },
              {
                category: 'Longevity-Specific',
                color: '#f59e0b',
                markers: [
                  { name: 'Telomere length (blood)', normal: 'Age-adjusted percentile', what: 'Direct measure of Epithalon\'s primary target. Commercial testing (LifeLength, Repeat Diagnostics) provides age-adjusted percentile. Expect measurable change after 6–12 months of twice-annual Epithalon cycling.' },
                  { name: 'Biological age (DNA methylation clock)', normal: 'Below chronological age = good', what: 'Horvath DNAm clock or equivalent (TruAge, GlycanAge). The most comprehensive single biomarker of aging rate. GHK-Cu\'s gene modulation should be detectable on repeated testing at 6–12 months.' },
                  { name: 'NAD+ blood levels', normal: 'Declining with age; optimal >50 µM', what: 'Direct measure of NAD+ repletion. Currently available through specialized longevity labs. Confirms that your supplementation route is achieving adequate systemic levels.' },
                ],
              },
            ].map((cat) => (
              <div key={cat.category} className="glass-card p-6">
                <h3 className="font-black text-lg mb-4" style={{ color: cat.color }}>{cat.category}</h3>
                <div className="space-y-4">
                  {cat.markers.map((m) => (
                    <div key={m.name}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900 font-bold text-sm">{m.name}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 border border-gray-200">{m.normal}</span>
                      </div>
                      <p className="text-gray-700 text-xs leading-relaxed">{m.what}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl p-5 bg-amber-50 border border-amber-200">
            <h3 className="text-amber-600 font-bold mb-2">Testing Timeline Recommendation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-900 font-bold">Baseline (before starting)</div>
                <p className="text-gray-700 text-xs mt-1">Complete hormonal panel, hsCRP, metabolic panel, HbA1c, fasting insulin. Optional: telomere length and DNAm clock for motivated users.</p>
              </div>
              <div>
                <div className="text-gray-900 font-bold">Month 3 Retest</div>
                <p className="text-gray-700 text-xs mt-1">hsCRP, IGF-1, metabolic panel. Early response markers should already show improvement — validates protocol is working.</p>
              </div>
              <div>
                <div className="text-gray-900 font-bold">Month 6–12 Full Retest</div>
                <p className="text-gray-700 text-xs mt-1">Full panel including telomere length and DNAm clock if available. This is the window where the deepest longevity biomarker changes become measurable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Expected Outcomes by Biomarker</h2>
        <p className="text-gray-700 text-center mb-10 max-w-xl mx-auto">
          Based on peer-reviewed literature and documented research findings for each peptide.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-amber-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left py-4 px-5 text-gray-700 font-semibold">Biomarker / Outcome</th>
                <th className="text-left py-4 px-5 text-gray-600 font-semibold">Untreated Aging</th>
                <th className="text-left py-4 px-5 text-amber-600 font-semibold">With Protocol</th>
                <th className="text-left py-4 px-5 text-gray-700 font-semibold">Key Peptide</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfterMetrics.map((row, i) => (
                <tr key={row.metric} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <td className="py-3 px-5 text-gray-900 font-medium">{row.metric}</td>
                  <td className="py-3 px-5 text-gray-600">{row.before}</td>
                  <td className="py-3 px-5 text-amber-600">{row.after}</td>
                  <td className="py-3 px-5 text-gray-700 text-xs font-mono">{row.peptide}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs text-center mt-4">*Based on peer-reviewed animal and human studies. Individual results vary.</p>
      </section>

      {/* Research History */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">The Science Timeline</h2>
            <p className="text-gray-700 max-w-xl mx-auto">Three decades of longevity peptide research leading to today&apos;s protocols.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-600/50 via-amber-600/20 to-transparent" />
            <div className="space-y-5 pl-16">
              {ageingResearch.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-white border border-amber-200 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-600" />
                  </div>
                  <div className="glass-card p-5">
                    <div className="text-amber-600 font-black text-lg mb-1">{item.year}</div>
                    <p className="text-gray-800 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Anti-Aging Peptides</h2>
            <p className="text-gray-700 mt-1">Epithalon, GHK-Cu, SS-31, NAD+, and SNAP-8 — the complete longevity stack</p>
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

      {/* Why Now section */}
      <section className="py-16" style={{ background: 'rgba(251,191,36,0.04)', borderTop: '1px solid rgba(217,119,6,0.1)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-3xl font-black text-gray-900 mb-6 text-center">
              Why Start a Longevity Protocol Now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-amber-600 font-bold mb-3">The Compounding Problem</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Telomere shortening, mitochondrial decline, and epigenetic drift are cumulative processes.
                  Each year of delay means more cellular damage to reverse. The optimal time to start is
                  before the decline accelerates — typically in your 30s, though benefits are documented at any age.
                </p>
              </div>
              <div>
                <h3 className="text-amber-600 font-bold mb-3">The Evidence Window</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Epithalon&apos;s 12-year trial is the longest published longevity peptide study to date.
                  The 28% mortality reduction compounds over time — you cannot retroactively apply years
                  of telomerase activation. The research window is now, not later.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                Start Your Longevity Protocol <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/stacks/anti-aging-longevity" className="btn-secondary text-base px-8 py-4">
                View Full Stack Protocol
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(251,191,36,0.02)', borderTop: '1px solid rgba(217,119,6,0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Anti-Aging Peptide FAQ</h2>
          <div className="space-y-3">
            {[
              {
                q: 'Do anti-aging peptides work for people in their 30s? Is preventive use valuable?',
                a: "Absolutely — and the case for starting in your 30s is arguably stronger than the case for starting later. The hallmarks of aging are not events that begin at 60; they are continuous processes that start in early adulthood. Telomere shortening begins at birth. Mitochondrial ATP decline begins in the late 20s to early 30s. NAD+ levels begin falling measurably from the mid-20s. Epigenetic drift has been detectable on methylation clocks since the 30s. The reason to start early is compounding: each year of intervention reduces the total accumulated damage that later interventions must reverse. Epithalon cycling twice annually from age 35 instead of age 55 represents 20 additional years of telomerase activation. The protocols for preventive use in the 30s are typically lower dose and less intensive than restorative protocols in older users: Epithalon 5 mg cycle twice yearly, GHK-Cu 1–2 mg daily ongoing, NAD+ 250 mg daily, and SS-31 1 mg twice weekly as a foundational mitochondrial maintenance protocol.",
              },
              {
                q: "How do I know if Epithalon is working? What should I notice and measure?",
                a: "Epithalon's effects operate on two timescales: early neuroendocrine effects (weeks) and molecular longevity effects (months to years). In the first 1–3 weeks of a cycle, most users report improved sleep quality and duration — this is Epithalon's pineal gland activation and melatonin regulation effect, which is often the most immediately noticeable change. Some users report improved mood, energy, and a general sense of cellular vitality in the first cycle. These acute effects are real but not the primary reason to use Epithalon. The telomere-lengthening and mortality-reduction effects are not perceptible subjectively — they require objective measurement. The best way to confirm Epithalon is working over time: (1) Telomere length testing before the first cycle and after 12 months of twice-annual cycling (LifeLength or Repeat Diagnostics). (2) Biological age (DNAm clock testing via TruAge or similar) at baseline and at 12 months. (3) Track your sleep quality, energy levels, and subjective vitality scores on each cycle — consistent improvement over 2–3 years of cycling is meaningful signal. If you experience none of the early neuroendocrine effects (sleep improvement) in the first cycle, verify your peptide source purity and consider increasing to 10 mg/day for subsequent cycles.",
              },
              {
                q: 'Do anti-aging peptides interfere with cancer treatments or increase cancer risk?',
                a: "This is a critical safety question that requires a careful, evidence-based answer. The concern about telomere-lengthening peptides like Epithalon and cancer is theoretically plausible — telomerase is reactivated in approximately 90% of cancer cells, which is part of why cancers become immortal. However, the research on Epithalon does not show increased cancer incidence. The 12-year human clinical trial showed a 28% mortality reduction — not an increase — and no excess cancer events in the treated group. The key distinction is between telomerase activation in normal somatic cells (what Epithalon does) and the constitutive telomerase overexpression in cancer cells. Normal cell telomerase activation is regulated and pulsatile; cancer cell telomerase is constitutive and unregulated. These are mechanistically distinct. That said: Epithalon and other peptides have not been tested in the context of active cancer treatment in clinical trials. For anyone currently undergoing chemotherapy, radiation, or targeted cancer therapy, any new supplement or peptide should be discussed with their oncologist. Peptide use should be paused during active cancer treatment unless specifically approved by the treating team. GHK-Cu's gene modulation includes upregulation of p53 and downregulation of several oncogenes — it has an arguably beneficial safety profile from a cancer-biology perspective.",
              },
              {
                q: 'Can anti-aging peptides be combined with HRT or TRT?',
                a: "Yes — and in many cases, the combination is synergistic rather than redundant. Hormone replacement therapy (HRT) and testosterone replacement therapy (TRT) address hormonal decline but do not directly target telomere shortening, epigenetic drift, or mitochondrial dysfunction. Anti-aging peptides work at molecular levels that HRT/TRT does not reach. The combination effectively covers multiple aging mechanisms simultaneously. Specifically: NAD+ + TRT is synergistic because sirtuin activation improves testosterone receptor sensitivity and reduces the aromatization that can occur with TRT. Epithalon + HRT: Epithalon supports the neuroendocrine system broadly, including the pineal-hypothalamic-pituitary axis, which can improve the hormonal regulation context in which HRT operates. GHK-Cu + HRT: GHK-Cu's collagen support complements estrogen's well-established role in collagen maintenance, providing additive structural benefits. SS-31 + TRT: mitochondrial restoration addresses the energy production side of testosterone's anabolic signaling in muscle. There are no known pharmacological interactions between standard HRT/TRT protocols (testosterone, estradiol, progesterone) and anti-aging peptides. Both can be used concurrently. Bloodwork monitoring — particularly hsCRP, IGF-1, and hormonal panels — is recommended quarterly when running both simultaneously.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900 font-semibold text-sm">{q}</span>
                  <span className="text-amber-600 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5 border-l-2 border-amber-400">
                  <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <InternalLinks path="/anti-aging" />
    </div>
  );
}
