export const DISCOUNT = 0.10;
export function sale(price: number): string {
  return (price * (1 - DISCOUNT)).toFixed(2);
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  affiliateUrl: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  protocol: string;
  synergies: string[];
  seoTitle: string;
  deepDiveTitle: string;
  highlights: { title: string; body: string }[];
}

const aff = (slug: string) => `https://phiogen.is/products/${slug}?ref=PEPS`;

// All product image URLs from Phiogen
const IMG = {
  bpc157:   'https://phiogen.is/images/products/bpc-157-10mg.png',
  tb500:    'https://phiogen.is/images/products/tb-500-thymosin-beta-4-10mg.png',
  ghkcu:    'https://phiogen.is/images/products/ghk-cu-50mg.png',
  epithalon:'https://phiogen.is/images/products/epitalon-50mg.png',
  cjcipa:   'https://phiogen.is/images/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg.png',
  nad:      'https://phiogen.is/images/products/nad-500mg.png',
  igf:      'https://phiogen.is/images/products/igf-1-lr3-1mg.png',
  snap8:    'https://phiogen.is/images/products/snap-8-10mg.png',
  sema5:    'https://phiogen.is/images/products/semaglutide-6mg.png',
  sema:     'https://phiogen.is/images/products/semaglutide-12mg.png',
  sema15:   'https://phiogen.is/images/products/semaglutide-20mg.png',
  tirz:     'https://phiogen.is/images/products/tirzepatide-15mg.png',
  tirz30:   'https://phiogen.is/images/products/tirzepatide-30mg.png',
  tirz60:   'https://phiogen.is/images/products/tirzepatide-60mg.png',
  reta:     'https://phiogen.is/images/products/retatrutide-10mg.png',
  reta15:   'https://phiogen.is/images/products/retatrutide-15mg.png',
  reta30:   'https://phiogen.is/images/products/retatrutide-20mg.png',
  reta60:   'https://phiogen.is/images/products/retatrutide-30mg.png',
  cagri:    'https://phiogen.is/images/products/cagri-sema-blend-5mg-cagrilintide-5mg-sema-10mg.png',
  bacwater: 'https://phiogen.is/images/products/bacteriostatic-water-30ml.png',
};

export const products: Product[] = [
  // ─── HEALING ────────────────────────────────────────────────────────────────
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'The #1 Healing Peptide in the World',
    price: 54.99,
    category: 'Healing',
    tags: ['healing', 'gut', 'tendons', 'ligaments', 'inflammation', 'flagship', 'oral'],
    image: IMG.bpc157,
    affiliateUrl: aff('bpc157-10mg'),
    shortDescription: 'BPC-157 is the most studied healing peptide — accelerates tendon, ligament, muscle, and gut repair with zero systemic side effects and no known LD50.',
    fullDescription: `BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from human gastric juice. It has been studied in over 100 peer-reviewed papers and consistently demonstrates remarkable regenerative properties across multiple tissue types.

**How It Works**

BPC-157 operates through multiple simultaneous mechanisms: it upregulates growth hormone receptors in fibroblast cells, accelerating collagen and connective tissue production. It modulates nitric oxide synthesis to improve blood flow to injured areas, and activates the FAK-paxillin pathway critical for tendon and ligament repair.

Unlike steroids or NSAIDs — which suppress inflammation without actually healing tissue — BPC-157 repairs the underlying structural damage.

**The Oral Advantage**

BPC-157 is unique among peptides in being gastric acid stable. It maintains systemic effectiveness when taken orally, making it accessible for those who prefer not to inject. For gut-specific issues (leaky gut, IBD, Crohn's), oral delivery is actually superior since it delivers the peptide directly to intestinal tissue.

**What Results to Expect**

Pain reduction and initial healing: 2-4 days. Structural tendon/ligament repair: 4-8 weeks. Gut healing: 1-3 weeks. Athletes using BPC-157 report complete healing of chronic injuries that persisted for years.

**Safety Profile**

BPC-157 has no known LD50 in animal studies — no dose has been found to cause death. It has zero hormonal activity and does not suppress natural hormone production. No significant adverse effects have been reported at research doses.

**FAQ**

*Can BPC-157 be used long-term?* Yes — BPC-157 does not cause receptor desensitization. Extended protocols at maintenance doses are considered safe based on current research.

*Should I inject near the injury site?* Subcutaneous injection near the injury site may improve local effects, but systemic injection and oral use also work well for most injuries.`,
    benefits: [
      'Dramatically accelerates tendon and ligament healing — 4-8 weeks vs 6-12 months',
      'Repairs gut lining — proven effective for leaky gut, IBS, and IBD',
      'Reduces inflammation without suppressing immune function',
      'Improves blood vessel formation to injured tissue (angiogenesis)',
      'No known LD50 — exceptional safety profile across 100+ studies',
      'Works orally — unique among healing peptides',
      'Protects against NSAID-induced gut damage',
      'Neuroprotective — crosses blood-brain barrier, aids CNS healing',
    ],
    protocol: `**Standard Healing Protocol:**
- Dose: 250-500mcg per day
- Method: Subcutaneous injection OR oral (dissolved in water or capsule)
- Timing: Once or twice daily; fasted for oral use
- Cycle: 4-12 weeks for injury; 4-8 weeks for gut repair
- For acute injuries: 500mcg twice daily for first 2 weeks (loading)

**Storage:** Refrigerate reconstituted peptide; use within 30 days`,
    synergies: ['tb-500', 'ghk-cu', 'nad', 'cjc1295-ipamorelin'],
    seoTitle: 'Buy BPC-157 10mg | #1 Healing Peptide for Tendons, Gut & Recovery | BPC-157 Stack',
    deepDiveTitle: 'BPC-157: The Complete Research Guide to the Most Powerful Healing Peptide',
    highlights: [
      { title: 'Gut Healer', body: 'Repairs intestinal barrier integrity — the most researched peptide for leaky gut, IBS, and Crohn\'s. Oral delivery works directly on intestinal tissue.' },
      { title: 'Tendon & Ligament', body: 'Upregulates GH receptors in fibroblasts, accelerating collagen synthesis in connective tissue. Reduces recovery time by 50-70%.' },
      { title: 'Nerve Healing', body: 'Crosses the blood-brain barrier and protects dopaminergic neurons — unique among healing peptides. Used for peripheral nerve repair.' },
      { title: 'Oral Bioavailability', body: 'One of the only peptides that maintains effectiveness orally — gastric acid stable and systemically absorbed through gut wall.' },
    ],
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    tagline: 'Systemic Body-Wide Repair & Flexibility',
    price: 59.99,
    category: 'Healing',
    tags: ['healing', 'flexibility', 'muscle', 'tendons', 'systemic', 'stem cells'],
    image: IMG.tb500,
    affiliateUrl: aff('tb500-10mg'),
    shortDescription: 'TB-500 (Thymosin Beta-4) provides systemic healing — mobilizes stem cells, repairs muscles and tendons simultaneously, and dramatically improves flexibility.',
    fullDescription: `TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide found in virtually all human and animal cells. It plays a critical role in tissue repair, cell migration, and the regulation of actin — the protein responsible for cellular movement and wound healing.

**How It Works**

TB-500 works systemically — unlike BPC-157 which excels locally, TB-500 circulates throughout the body and heals multiple injury sites simultaneously. It binds to actin and mobilizes stem cells from bone marrow to injury sites. This stem cell mobilization is what makes TB-500 uniquely powerful for systemic repair.

It also upregulates anti-inflammatory cytokines and downregulates pro-inflammatory pathways, creating the optimal environment for rapid repair without immune suppression.

**The BPC-157 Synergy**

BPC-157 + TB-500 is the gold standard healing stack precisely because they target different mechanisms:
- BPC-157: local targeted healing via GH receptor upregulation and angiogenesis
- TB-500: systemic healing via actin regulation and stem cell mobilization

Together, they cover every biological mechanism of tissue repair simultaneously.

**What Results to Expect**

Flexibility improvements within 2-3 weeks. Chronic tendon injuries show measurable repair within 4-6 weeks. Many users describe feeling "10 years younger" in their joints and muscles after a full loading protocol.

**FAQ**

*How often do I inject?* Loading: 2mg twice weekly for 4-6 weeks. Maintenance: 2mg once weekly.
*Can TB-500 heal the heart?* Animal studies show cardiac tissue repair — TB-500 has been studied for heart failure and ischemia with promising results.`,
    benefits: [
      'Systemic healing — repairs multiple injury sites throughout the body simultaneously',
      'Mobilizes bone marrow stem cells to injury sites',
      'Dramatically improves joint and muscle flexibility within 2-3 weeks',
      'Accelerates muscle fiber repair after tears and strains',
      'Reduces scar tissue formation — higher-quality healing',
      'Anti-inflammatory without immune suppression',
      'Studied for cardiac tissue repair in animal models',
      'The perfect systemic complement to BPC-157\'s local action',
    ],
    protocol: `**Loading Phase (Weeks 1-6):**
- Dose: 2mg twice per week (4mg total/week)
- Method: Subcutaneous injection
- Sites: Rotate injection sites

**Maintenance Phase (Week 7+):**
- Dose: 2mg once per week
- Duration: Ongoing as needed

**Best Stack:** Combine with BPC-157 for comprehensive local + systemic healing.`,
    synergies: ['bpc-157', 'ghk-cu', 'cjc1295-ipamorelin', 'igf-1lr3'],
    seoTitle: 'Buy TB-500 Thymosin Beta-4 | Systemic Healing & Flexibility Peptide | BPC-157 Stack',
    deepDiveTitle: 'TB-500: The Systemic Healing Peptide That Completes the BPC-157 Stack',
    highlights: [
      { title: 'Systemic vs Local', body: 'TB-500 circulates body-wide via bloodstream — healing multiple injury sites at once, while BPC-157 excels at local targeted repair.' },
      { title: 'Stem Cell Mobilization', body: 'Mobilizes bone marrow-derived stem cells to damaged tissue — supercharging the body\'s native repair mechanisms beyond what\'s possible naturally.' },
      { title: 'Flexibility Factor', body: 'Actin regulation improves muscle fiber alignment and elasticity. Users report feeling noticeably more flexible within 2-3 weeks of loading.' },
      { title: 'Scar Reduction', body: 'Reduces fibrotic scar tissue formation compared to natural healing — leading to higher-quality tissue repair with better function.' },
    ],
  },

  // ─── ANTI-AGING ─────────────────────────────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'Copper Peptide That Resets Your Genes',
    price: 50.00,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'skin', 'collagen', 'copper', 'hair', 'gene-reset', 'longevity'],
    image: IMG.ghkcu,
    affiliateUrl: aff('ghk-cu'),
    shortDescription: 'GHK-Cu (Copper Peptide) reverses the gene expression of 31% of aged genes, rebuilds collagen, and activates cellular cleanup — the master anti-aging signal.',
    fullDescription: `GHK-Cu (Glycine-Histidine-Lysine Copper) is a naturally occurring copper complex found in human plasma, saliva, and urine. Discovered in the 1970s, it has been studied as what may be the body's most important anti-aging molecular signal.

**The 31% Gene Reset**

The most significant finding in GHK-Cu research: a landmark study demonstrated that GHK-Cu reversed the gene expression pattern of 31% of aged human genes — effectively rewinding the molecular clock. This isn't cosmetic. It changes how cells actually function at the gene expression level.

**Multi-Mechanism Anti-Aging**

GHK-Cu acts through at least five distinct anti-aging mechanisms:
1. Stimulates fibroblasts to produce collagen I, III, and IV
2. Activates 30+ growth factors
3. Activates the proteasome (cellular cleanup machinery that removes damaged proteins)
4. Upregulates antioxidant enzymes (SOD, catalase)
5. Promotes wound healing and reduces scarring

**Hair Restoration**

GHK-Cu enlarges hair follicle size, prolongs the growth phase, and blocks DHT locally when applied topically. It's one of the most evidence-backed natural approaches to improving hair density.

**FAQ**

*Topical vs injectable?* Topical works well for skin and hair. Injectable GHK-Cu produces stronger systemic effects on whole-body aging markers.`,
    benefits: [
      'Reverses gene expression of 31% of aged genes — the most powerful biological anti-aging signal known',
      'Stimulates collagen I, III, and IV synthesis in fibroblasts',
      'Activates the proteasome — cellular cleanup that declines with aging',
      'Thickens and firms aging skin within 4-8 weeks',
      'Promotes hair follicle growth and increases density',
      'Upregulates SOD and catalase — primary antioxidant enzymes',
      'Activates 30+ growth factors simultaneously',
      'Reduces wound healing time and minimizes scarring',
    ],
    protocol: `**Injectable (Systemic Anti-Aging):**
- Dose: 1-2mg subcutaneous daily
- Cycle: 8-12 weeks on, 4 weeks off
- Best time: Evening (aligns with overnight repair)

**Topical (Skin & Hair):**
- Apply 1-2% GHK-Cu serum to face or scalp daily
- Use consistently — minimum 8 weeks for visible results

**Best Stack:** GHK-Cu + Epithalon for comprehensive anti-aging protocol.`,
    synergies: ['epithalon', 'bpc-157', 'snap-8', 'nad'],
    seoTitle: 'Buy GHK-Cu Copper Peptide | Reverses 31% of Aged Genes | BPC-157 Stack',
    deepDiveTitle: 'GHK-Cu: The Copper Peptide That Resets Your Genes and Reverses Biological Aging',
    highlights: [
      { title: '31% Gene Reset', body: 'Landmark research shows GHK-Cu reverses 31% of aged gene expression — the most powerful anti-aging molecular signal discovered to date.' },
      { title: 'Collagen Architecture', body: 'Stimulates fibroblasts to produce three types of collagen simultaneously — rebuilding the structural foundation of youthful skin.' },
      { title: 'Hair Rescue', body: 'Enlarges hair follicle size and prolongs the growth (anagen) phase — one of the most evidence-backed peptides for improving hair density naturally.' },
      { title: 'Proteasome Activator', body: 'Activates the cellular cleanup machine that removes damaged, aggregated proteins — one of the core mechanisms behind the aging phenotype.' },
    ],
  },
  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'Telomere Extension & Longevity Master',
    price: 139.99,
    category: 'Anti-Aging',
    tags: ['longevity', 'telomeres', 'telomerase', 'sleep', 'epigenetics', 'mortality'],
    image: IMG.epithalon,
    affiliateUrl: aff('epithalon-50mg'),
    shortDescription: 'Epithalon is the only known compound to stimulate telomerase and lengthen telomeres — with a 28% mortality reduction shown in a 12-year human clinical trial.',
    fullDescription: `Epithalon (Epitalon) is a tetrapeptide (Ala-Glu-Asp-Gly) derived from Epithalamin, a polypeptide extracted from the pineal gland. Developed and studied by Russian scientist Vladimir Khavinson, who has published over 60 research papers on its longevity effects over 40 years.

**The Telomere Connection**

Telomeres are the protective caps on chromosomes that shorten with each cell division. Telomere shortening is one of the primary biological hallmarks of aging. Epithalon stimulates telomerase — the enzyme that rebuilds telomeres — making it the only known compound to actually reverse telomere shortening in humans.

**The 28% Mortality Study**

In a landmark 12-year controlled trial, elderly patients who received Epithalon showed 28% lower all-cause mortality compared to controls. This is an extraordinary effect size for any aging intervention.

Additional documented effects:
- Restored menstrual function in women with uterine disorders
- Improved vision in retinal degeneration patients
- Normalized melatonin rhythm and sleep architecture
- Anti-tumor properties in multiple studies

**Pineal Gland Restoration**

Epithalon normalizes the hypothalamus-pituitary axis and restores pineal gland function — which declines significantly after age 40. This explains the dramatic improvements in sleep quality that nearly every user reports within the first cycle.

**FAQ**

*How often should I run Epithalon?* 1-2 cycles per year (spring and fall are traditional). Each cycle is 10-20 consecutive days at 5-10mg/day.`,
    benefits: [
      'Only known compound to stimulate telomerase and lengthen telomeres',
      '28% lower all-cause mortality in 12-year human clinical trial',
      'Normalizes melatonin production — dramatically improves deep sleep',
      'Restores pineal gland function that declines with aging',
      'Increases antioxidant enzyme production (SOD, catalase)',
      'Anti-tumor properties demonstrated in multiple studies',
      'Normalizes hypothalamus-pituitary axis function',
      'Epigenetic methylation pattern normalization',
    ],
    protocol: `**Standard Longevity Protocol:**
- Dose: 5-10mg subcutaneous daily
- Cycle: 10-20 consecutive days
- Frequency: 1-2 cycles per year (spring + fall)

**Intensive Protocol:**
- 20 days on, 4-month break, repeat 2x/year

**Storage:** Lyophilized powder — refrigerate; reconstitute with bacteriostatic water just before use.`,
    synergies: ['ghk-cu', 'nad', 'epithalon', 'snap-8'],
    seoTitle: 'Buy Epithalon 50mg | Telomere Extension & 28% Mortality Reduction | BPC-157 Stack',
    deepDiveTitle: 'Epithalon: The Russian Longevity Peptide With 60 Studies and 12-Year Human Trial Data',
    highlights: [
      { title: 'Telomerase Activation', body: 'The only compound proven to activate telomerase and actually lengthen telomeres in humans — reversing a core mechanism of cellular aging.' },
      { title: '28% Mortality Drop', body: 'A 12-year controlled human study: Epithalon-treated patients had 28% lower all-cause mortality. One of the most remarkable longevity findings ever published.' },
      { title: 'Sleep Restoration', body: 'Restores pineal gland function and melatonin rhythm. Users almost universally report dramatically improved sleep quality within the first 10-day cycle.' },
      { title: '60 Published Studies', body: 'Dr. Vladimir Khavinson\'s 40 years of research produced over 60 peer-reviewed papers — making Epithalon one of the most documented longevity compounds in existence.' },
    ],
  },
  {
    slug: 'nad',
    name: 'NAD+ 500mg',
    tagline: 'Cellular Energy & Longevity Cofactor',
    price: 45.00,
    category: 'Anti-Aging',
    tags: ['NAD+', 'longevity', 'mitochondria', 'energy', 'DNA repair', 'sirtuins'],
    image: IMG.nad,
    affiliateUrl: aff('nad'),
    shortDescription: 'NAD+ is the master cellular energy molecule that declines 50% by age 50 — supplementation restores sirtuin activity, DNA repair, and mitochondrial function.',
    fullDescription: `NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every living cell and essential for over 500 enzymatic reactions. It is most critical for mitochondrial energy production (ATP synthesis) and as a substrate for sirtuins — the longevity proteins that control epigenetic aging.

**The Decline Problem**

NAD+ levels decline approximately 50% between age 20 and 50. This decline is directly associated with: reduced energy production, impaired DNA damage repair, epigenetic dysfunction, metabolic slowdown, and reduced stress resistance. Virtually every hallmark of aging is connected to NAD+ decline.

**How NAD+ Works**

NAD+ is required by:
- **PARP enzymes**: DNA damage repair — critical for genomic stability
- **Sirtuins (SIRT1-7)**: Epigenetic regulators that control aging, inflammation, and metabolism
- **Complex I of the electron transport chain**: Core of mitochondrial energy production

Restoring NAD+ activates all of these pathways simultaneously — a true systems-level anti-aging intervention.

**Results**

Users report significant increases in physical energy within 1-2 weeks. Exercise performance improves. Cognitive clarity and motivation improve (NAD+ drives dopamine synthesis pathways). Long-term benefits include improved metabolic markers and reduced inflammation.`,
    benefits: [
      'Restores NAD+ levels that decline 50% by age 50',
      'Activates sirtuins (SIRT1-7) — the master longevity proteins',
      'Powers PARP enzymes for DNA damage repair',
      'Restores mitochondrial Complex I function and ATP production',
      'Improves physical energy and exercise performance within 1-2 weeks',
      'Enhances cognitive clarity, motivation, and focus',
      'Reduces inflammatory markers via sirtuin activation',
      'Synergizes with caloric restriction and exercise for longevity',
    ],
    protocol: `**Oral Protocol (Capsule):**
- Dose: 500mg daily
- Timing: Morning with food
- Cycle: Daily ongoing — safe for extended use

**Injection Protocol (Higher Bioavailability):**
- Dose: 100-500mg subcutaneous or IV
- Frequency: Daily to 3x weekly

**Stack with:** Epithalon + GHK-Cu for comprehensive anti-aging protocol.`,
    synergies: ['epithalon', 'ghk-cu', 'nad'],
    seoTitle: 'Buy NAD+ 500mg | Cellular Energy, Sirtuins & Longevity | BPC-157 Stack',
    deepDiveTitle: 'NAD+: The Master Longevity Molecule That Powers Every Cell in Your Body',
    highlights: [
      { title: '50% Decline by 50', body: 'NAD+ levels drop approximately 50% between ages 20 and 50 — this decline drives most of the biochemical hallmarks of aging.' },
      { title: 'Sirtuin Activation', body: 'Sirtuins (SIRT1-7) are the master longevity proteins. NAD+ is their only substrate — no NAD+, no sirtuin activity.' },
      { title: 'DNA Repair Engine', body: 'PARP enzymes that repair DNA damage — the #1 cause of cancer and cellular aging — require NAD+ to function.' },
      { title: 'Energy Restoration', body: 'Powers Complex I of the mitochondrial electron transport chain — restoring the foundational energy production that declines with aging.' },
    ],
  },
  {
    slug: 'snap-8',
    name: 'SNAP-8',
    tagline: 'Botox-Alternative Wrinkle Peptide',
    price: 69.99,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'skin', 'wrinkles', 'expression lines', 'topical', 'Botox-alternative'],
    image: IMG.snap8,
    affiliateUrl: aff('snap-8'),
    shortDescription: 'SNAP-8 is a peptide that inhibits neuromuscular transmission to reduce expression wrinkles — a non-injection alternative to Botox with clinical efficacy data.',
    fullDescription: `SNAP-8 (Acetyl Glutamyl Heptapeptide-3) is a synthetic octapeptide that mimics the N-terminal end of SNAP-25, a protein involved in neuromuscular signal transmission. By competing with SNAP-25, it reduces the release of neurotransmitters that cause muscle contractions — softening expression wrinkles without injections.

**How It Works**

Muscle contractions (from facial expressions) are the primary cause of dynamic wrinkles — crow's feet, forehead lines, and frown lines. SNAP-8 competes with SNAP-25 at the neuromuscular junction, partially blocking the signal that triggers these contractions. The result is measurable wrinkle reduction without paralysis.

**Clinical Data**

In a double-blind, placebo-controlled study, SNAP-8 reduced wrinkle volume by up to 63% over 28 days. When compared to Argireline (a similar mechanism peptide), SNAP-8 showed superior efficacy.

**Key Applications**

- Crow's feet (periorbital wrinkles)
- Forehead lines
- Glabellar lines (between eyebrows)
- Nasolabial folds

**Stacking for Skin**

SNAP-8 + GHK-Cu is the definitive topical anti-aging stack: SNAP-8 reduces expression lines from above while GHK-Cu rebuilds the collagen matrix from below. Together they address wrinkles through two completely different mechanisms.`,
    benefits: [
      'Reduces expression wrinkle volume by up to 63% in 28-day clinical trial',
      'Non-injection alternative to Botox — no paralysis, no downtime',
      'Targets crow\'s feet, forehead lines, frown lines, and nasolabial folds',
      'Clinically superior to Argireline in head-to-head comparison',
      'Synergizes with GHK-Cu for dual-mechanism wrinkle reduction',
      'Can be used in serums, creams, or eye treatments',
      'No systemic absorption — topical application stays local',
      'Safe for long-term daily use',
    ],
    protocol: `**Topical Protocol:**
- Concentration: 5-10% in serum or cream base
- Application: 2x daily to target areas (AM + PM)
- Areas: Crow's feet, forehead, between eyebrows
- Cycle: Ongoing daily use; visible results in 2-4 weeks

**Best Combined Application:** Apply GHK-Cu serum first, then SNAP-8 after absorption.`,
    synergies: ['ghk-cu', 'epithalon', 'nad', 'bpc-157'],
    seoTitle: 'Buy SNAP-8 Peptide | Botox-Alternative Wrinkle Reduction | BPC-157 Stack',
    deepDiveTitle: 'SNAP-8: The Topical Peptide That Reduces Expression Wrinkles by 63% Without Injections',
    highlights: [
      { title: '63% Wrinkle Reduction', body: 'Double-blind clinical trial: SNAP-8 reduced wrinkle volume by up to 63% over 28 days — the strongest topical peptide efficacy data available.' },
      { title: 'Non-Invasive Botox', body: 'Partially blocks the same neuromuscular pathway as Botox — reducing expression lines without needles, paralysis, or medical appointments.' },
      { title: 'Superior to Argireline', body: 'Head-to-head comparison shows SNAP-8 outperforms Argireline, the original neuromuscular wrinkle peptide, in clinical settings.' },
      { title: 'Dual-Stack Power', body: 'Combined with GHK-Cu, SNAP-8 addresses wrinkles from two directions — neuromuscular reduction from above, collagen rebuilding from below.' },
    ],
  },

  // ─── BODY COMPOSITION ───────────────────────────────────────────────────────
  {
    slug: 'cjc1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'The Gold Standard GH Peptide Stack',
    price: 50.00,
    category: 'Body Composition',
    tags: ['growth hormone', 'GH', 'fat loss', 'muscle', 'sleep', 'recovery', 'GHRH', 'GHRP'],
    image: IMG.cjcipa,
    affiliateUrl: aff('cjc1295-ipamorelin'),
    shortDescription: 'CJC-1295 + Ipamorelin is the gold standard GH peptide combination — synergistically producing 8-10x more growth hormone than either alone, with zero cortisol spike.',
    fullDescription: `CJC-1295 (Modified GRF 1-29) is a synthetic GHRH analog. Ipamorelin is a selective GHRP (Growth Hormone Releasing Peptide). Together they form the most widely prescribed peptide combination in anti-aging and regenerative medicine clinics worldwide.

**Why the Combination Works**

CJC-1295 acts on the GHRH receptor, priming the pituitary to release GH. Ipamorelin acts on the ghrelin receptor (GHS-R1a), triggering the GH pulse. These two mechanisms are synergistic — the combined effect produces 8-10x more GH than either peptide alone.

Critically, Ipamorelin is the cleanest GHRP: it does NOT raise cortisol, prolactin, or ACTH — preserving muscle and maintaining an anabolic hormonal environment.

**What This Means for Your Body**

Growth hormone pulses during deep sleep drive:
- Fatty acid oxidation (fat burning)
- Muscle protein synthesis
- Collagen production
- Cellular repair
- Sleep architecture improvement

By amplifying the natural nocturnal GH pulse, this stack maximizes all of these effects simultaneously — without the cost, risks, or supraphysiological levels of synthetic HGH.

**Body Composition Timeline**

Weeks 1-2: Improved sleep quality, faster recovery
Weeks 3-6: Measurable fat loss, improved skin texture
Months 2-4: Lean muscle gains, significant body composition shift`,
    benefits: [
      'Synergistic GH release — 8-10x more than either peptide alone',
      'Zero cortisol, prolactin, or ACTH elevation — pure clean GH pulse',
      'Accelerates fat loss, particularly visceral and abdominal adipose',
      'Increases lean muscle mass and protein synthesis',
      'Dramatically improves sleep quality and recovery',
      'Stimulates collagen production for skin and connective tissue',
      'No desensitization — maintains effectiveness on extended protocols',
      'The most prescribed peptide combination in anti-aging clinics worldwide',
    ],
    protocol: `**Standard Protocol:**
- CJC-1295 (no DAC): 100-200mcg subcutaneous
- Ipamorelin: 200-300mcg subcutaneous
- Timing: Before bed on 3+ hour fast — amplifies nocturnal GH pulse
- Frequency: Daily, or 5 days on / 2 days off

**Cycle Length:** 3-6 months minimum for meaningful body composition changes.`,
    synergies: ['bpc-157', 'tb-500', 'igf-1lr3', 'nad'],
    seoTitle: 'Buy CJC-1295 Ipamorelin | Gold Standard GH Stack for Fat Loss & Muscle | BPC-157 Stack',
    deepDiveTitle: 'CJC-1295 / Ipamorelin: The Clinic-Standard GH Peptide Stack That Transforms Body Composition',
    highlights: [
      { title: '8-10x GH Amplification', body: 'Synergistic GHRH + GHRP action produces 8-10x more GH than either peptide alone — the most powerful legal GH optimization available.' },
      { title: 'Zero Cortisol', body: 'Ipamorelin is the only GHRP that does not raise cortisol or prolactin — maintaining the anabolic environment needed for fat loss and muscle growth.' },
      { title: 'Sleep Architecture', body: 'GH is primarily secreted during slow-wave sleep. This combination amplifies nocturnal GH pulses, deepening sleep and accelerating overnight recovery.' },
      { title: 'Clinic Standard', body: 'The most commonly prescribed peptide protocol in anti-aging clinics — with years of real-world data on safety and efficacy.' },
    ],
  },
  {
    slug: 'igf-1lr3',
    name: 'IGF-1 LR3',
    tagline: 'Insulin-Like Growth Factor for Muscle & Recovery',
    price: 79.99,
    category: 'Body Composition',
    tags: ['IGF-1', 'muscle growth', 'recovery', 'anabolic', 'satellite cells', 'performance'],
    image: IMG.igf,
    affiliateUrl: aff('igf-1lr3'),
    shortDescription: 'IGF-1 LR3 is a long-acting analog of Insulin-Like Growth Factor 1 — activating muscle satellite cells and driving muscle hypertrophy and repair beyond what GH alone achieves.',
    fullDescription: `IGF-1 LR3 (Long R3 Insulin-Like Growth Factor 1) is a modified form of IGF-1 with an arginine substitution and an extended N-terminal peptide that dramatically increases its half-life from minutes to hours and reduces binding to IGF-binding proteins.

**IGF-1 vs Growth Hormone**

Growth hormone drives fat loss and recovery, but many of its anabolic effects are mediated through IGF-1 — which is produced in the liver in response to GH. IGF-1 LR3 bypasses this step, delivering IGF-1 signaling directly to muscles and other tissues.

IGF-1 is arguably more potent than GH itself for muscle hypertrophy because it:
1. Activates muscle satellite cells (stem cells in muscle tissue)
2. Promotes myoblast differentiation into new muscle fibers
3. Drives protein synthesis at the cellular level
4. Has a longer half-life than native IGF-1 (20-30 hours vs ~20 minutes)

**Who It's For**

IGF-1 LR3 is for experienced users who have already optimized diet, training, and sleep — and want to push muscle development further. It's particularly valued for:
- Post-injury muscle rebuilding
- Breaking through plateaus
- Improving muscle fullness and hardness
- Accelerating recovery from intense training

**Important Note**

IGF-1 LR3 is a potent compound. Due to its anabolic potency, it's best used in short cycles (4-6 weeks) with a break afterward to prevent potential IGF-1 receptor desensitization.`,
    benefits: [
      'Activates muscle satellite cells — drives genuine muscle fiber hyperplasia',
      'Half-life of 20-30 hours — dramatically longer than native IGF-1',
      'Bypasses GH → liver → IGF-1 pathway for direct tissue delivery',
      'Promotes myoblast differentiation into new muscle fibers',
      'Accelerates recovery from intense training and muscle damage',
      'Improves muscle fullness, hardness, and vascularity',
      'Synergizes with CJC-1295/Ipamorelin for complete GH axis optimization',
      'Post-injury muscle rebuilding — particularly effective for atrophied muscle',
    ],
    protocol: `**Standard Protocol:**
- Dose: 20-50mcg per injection
- Method: Subcutaneous or intramuscular
- Timing: Post-workout (within 30-60 minutes)
- Frequency: Daily or on training days only
- Cycle: 4-6 weeks on, equal time off

**Caution:** Start at lowest dose (20mcg) to assess response. Monitor blood glucose — IGF-1 has mild hypoglycemic effects. Use with food nearby.`,
    synergies: ['cjc1295-ipamorelin', 'tb-500', 'bpc-157', 'nad'],
    seoTitle: 'Buy IGF-1 LR3 | Muscle Satellite Cell Activator for Hypertrophy | BPC-157 Stack',
    deepDiveTitle: 'IGF-1 LR3: The Long-Acting Growth Factor That Activates Muscle Satellite Cells',
    highlights: [
      { title: 'Satellite Cell Activation', body: 'IGF-1 LR3 activates muscle satellite cells — the stem cells that create new muscle fibers. This is the mechanism behind muscle hyperplasia, not just hypertrophy.' },
      { title: '20-30 Hour Half-Life', body: 'The LR3 modification extends half-life from ~20 minutes (native IGF-1) to 20-30 hours — providing sustained anabolic signaling from a single injection.' },
      { title: 'Direct Tissue Delivery', body: 'Bypasses the GH → liver → IGF-1 conversion pathway, delivering growth factor signaling directly to muscle and other target tissues.' },
      { title: 'Post-Workout Prime', body: 'Most effective when injected post-workout — amplifying the anabolic window when satellite cells are most receptive to growth signals.' },
    ],
  },

  // ─── WEIGHT LOSS (GLP) ──────────────────────────────────────────────────────
  {
    slug: 'glp-1s-semaglutide',
    name: 'GLP-1 S (Semaglutide)',
    tagline: 'Next-Gen GLP-1 Receptor Agonist for Weight Loss',
    price: 99.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'semaglutide', 'weight loss', 'insulin', 'Ozempic', 'Wegovy', 'metabolic'],
    image: IMG.sema,
    affiliateUrl: aff('glp-1s-10mg'),
    shortDescription: 'Semaglutide (GLP-1 S) is a GLP-1 receptor agonist with clinical trials showing 15-20% body weight reduction — the most effective pharmacological weight loss agent studied.',
    fullDescription: `Semaglutide is a GLP-1 (Glucagon-Like Peptide-1) receptor agonist — a class of compounds that mimic the gut hormone GLP-1, which regulates appetite, insulin secretion, and gastric emptying. Commercially available as Ozempic (diabetes) and Wegovy (weight loss), semaglutide represents the most significant advancement in metabolic medicine in decades.

**How It Works**

GLP-1 receptors are found throughout the body — in the pancreas, gut, brain, heart, and liver. Semaglutide activates all of them:

**Appetite:** Acts on hypothalamic GLP-1 receptors to reduce hunger signals and increase satiety. Users report dramatically reduced appetite and food cravings, particularly for high-fat, high-sugar foods.

**Metabolism:** Slows gastric emptying, improving post-meal glucose control and extending satiety. Stimulates insulin secretion only when blood glucose is elevated (glucose-dependent) — minimizing hypoglycemia risk.

**Weight Loss:** Clinical trials (SUSTAIN, STEP) show 15-20% body weight reduction over 68 weeks — the most effective pharmacological weight loss ever demonstrated in controlled trials.

**Beyond Weight**

Semaglutide has shown benefits beyond weight loss:
- 20% reduction in cardiovascular events in the SELECT trial
- Reduced liver fat in NASH
- Potential neuroprotective effects (GLP-1 receptors in the brain)

**Research Context**

`,
    benefits: [
      '15-20% body weight reduction in 68-week clinical trials — most effective pharmacological weight loss studied',
      'Dramatically reduces appetite and food cravings via hypothalamic GLP-1 receptors',
      '20% reduction in cardiovascular events shown in the SELECT trial',
      'Glucose-dependent insulin stimulation — low hypoglycemia risk',
      'Improves insulin sensitivity and metabolic health markers',
      'Slows gastric emptying for extended satiety',
      'Potential neuroprotective and anti-inflammatory effects',
      'Shown to reduce liver fat in non-alcoholic steatohepatitis (NASH)',
    ],
    protocol: `**Standard Escalation Protocol:**
- Week 1-4: 0.25mg subcutaneous weekly
- Week 5-8: 0.5mg subcutaneous weekly
- Week 9-12: 1mg subcutaneous weekly
- Week 13+: 2mg subcutaneous weekly (maintenance)

**Injection:** Once weekly subcutaneous. Rotate injection sites (abdomen, thigh, upper arm).
**Note:** Consult a physician if using therapeutically.`,
    synergies: ['glp-2t-tirzepatide', 'nad', 'bpc-157'],
    seoTitle: 'Buy GLP-1 S Semaglutide | 15-20% Weight Loss Research Peptide | BPC-157 Stack',
    deepDiveTitle: 'Semaglutide (GLP-1 S): The Research Peptide Behind the Weight Loss Revolution',
    highlights: [
      { title: '15-20% Weight Reduction', body: 'STEP trials: average 15-20% body weight reduction over 68 weeks — the highest efficacy ever demonstrated in pharmaceutical weight loss research.' },
      { title: 'Cardiovascular Protection', body: 'SELECT trial: 20% reduction in cardiovascular events in obese/overweight adults with established cardiovascular disease.' },
      { title: 'Brain Appetite Control', body: 'Acts on hypothalamic GLP-1 receptors to fundamentally reprogram hunger signals — reducing cravings for high-calorie foods at the neurological level.' },
      { title: 'Glucose Intelligence', body: 'Stimulates insulin only when blood glucose is elevated — the glucose-dependent mechanism that makes GLP-1 agonists far safer than traditional insulin secretagogues.' },
    ],
  },
  {
    slug: 'glp-2t-tirzepatide',
    name: 'GLP-2 T (Tirzepatide)',
    tagline: 'Dual GIP/GLP-1 Agonist — Superior Weight Loss',
    price: 149.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'tirzepatide', 'weight loss', 'Mounjaro', 'dual agonist', 'metabolic'],
    image: IMG.tirz,
    affiliateUrl: aff('glp-2t-15m'),
    shortDescription: 'Tirzepatide (GLP-2 T) is a dual GIP/GLP-1 receptor agonist showing up to 22.5% body weight reduction in trials — outperforming semaglutide in head-to-head data.',
    fullDescription: `Tirzepatide is a first-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist. By activating both receptor types simultaneously, it achieves superior weight loss efficacy compared to GLP-1 agonists alone. Available commercially as Mounjaro (diabetes) and Zepbound (obesity).

**Why Dual Agonism Is More Effective**

GIP receptors and GLP-1 receptors have complementary but distinct mechanisms:

**GIP (GIP receptor):**
- Potentiates insulin secretion synergistically with GLP-1
- Reduces glucagon secretion
- Acts on adipose tissue to regulate fat storage
- Potential direct CNS appetite suppression

**GLP-1 (GLP-1 receptor):**
- Slows gastric emptying
- Reduces appetite via hypothalamic action
- Glucose-dependent insulin stimulation

Together, these mechanisms produce synergistic weight loss that exceeds GLP-1 agonism alone.

**Clinical Superiority**

SURMOUNT trials: Up to 22.5% body weight reduction at highest dose (15mg) over 72 weeks — significantly greater than semaglutide's ~15-16% in comparable populations.

In the SURPASS-2 trial directly comparing tirzepatide vs semaglutide, tirzepatide achieved superior weight loss at all doses tested.`,
    benefits: [
      'Up to 22.5% body weight reduction — superior to semaglutide in head-to-head trials',
      'Dual GIP + GLP-1 receptor activation — two complementary appetite and metabolism mechanisms',
      'SURPASS-2: outperformed semaglutide at all doses tested',
      'Improved HbA1c reduction for metabolic health',
      'Reduces visceral fat more effectively than single-mechanism agents',
      'Glucose-dependent insulin secretion — minimal hypoglycemia risk',
      'Beneficial effects on lipid profiles and cardiovascular markers',
      'Superior weight loss without proportional increase in side effects',
    ],
    protocol: `**Escalation Protocol:**
- Week 1-4: 2.5mg subcutaneous weekly
- Week 5-8: 5mg subcutaneous weekly
- Week 9-12: 7.5mg subcutaneous weekly
- Week 13-16: 10mg subcutaneous weekly
- Week 17+: 12.5-15mg (maximum dose, as tolerated)

**Injection:** Once weekly subcutaneous. Rotate sites.
`,
    synergies: ['glp-1s-semaglutide', 'glp-3r-retatrutide', 'nad'],
    seoTitle: 'Buy GLP-2 T Tirzepatide | Dual GIP/GLP-1 for 22.5% Weight Loss | BPC-157 Stack',
    deepDiveTitle: 'Tirzepatide (GLP-2 T): The Dual Agonist That Outperformed Semaglutide in Every Trial',
    highlights: [
      { title: '22.5% Weight Reduction', body: 'SURMOUNT-1: maximum dose achieved 22.5% body weight reduction — the highest efficacy ever demonstrated in controlled weight loss trials at the time of publication.' },
      { title: 'Beat Semaglutide', body: 'SURPASS-2 head-to-head: tirzepatide outperformed semaglutide at all three doses tested — superior HbA1c and weight loss in direct comparison.' },
      { title: 'Dual Mechanism', body: 'GIP + GLP-1 dual agonism creates synergistic metabolic effects that neither receptor can achieve alone — explaining the superior clinical outcomes.' },
      { title: 'Visceral Fat Priority', body: 'Tirzepatide has shown preferential reduction of visceral adipose tissue — the metabolically dangerous fat that surrounds organs and drives inflammation.' },
    ],
  },
  {
    slug: 'glp-3r-retatrutide',
    name: 'GLP-3 R (Retatrutide)',
    tagline: 'Triple Receptor Agonist — Next-Level Weight Loss',
    price: 149.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'glucagon', 'retatrutide', 'triple agonist', 'weight loss', 'next-gen'],
    image: IMG.reta,
    affiliateUrl: aff('glp-3r-10mg'),
    shortDescription: 'Retatrutide (GLP-3 R) is a triple GLP-1/GIP/glucagon receptor agonist showing 24% body weight reduction in Phase II — the most potent weight loss peptide in clinical development.',
    fullDescription: `Retatrutide is a triple receptor agonist simultaneously targeting GLP-1, GIP, and glucagon receptors — representing the next frontier beyond dual agonists like tirzepatide. It is in late-stage clinical development and has already demonstrated the most impressive weight loss data in clinical trial history.

**Triple Mechanism**

Adding glucagon receptor agonism to the GIP+GLP-1 mechanism introduces a third metabolic pathway:

**Glucagon receptor:**
- Directly stimulates hepatic fat burning (liver fat oxidation)
- Increases basal energy expenditure (raises metabolic rate)
- Promotes lipolysis in adipose tissue
- Reduces hepatic fat accumulation

This addition explains why retatrutide outperforms tirzepatide in weight loss efficacy.

**Phase II Trial Results**

In the Phase II trial (N Engl J Med, 2023):
- 24.2% body weight reduction at 48 weeks (highest dose)
- Continued weight loss trend at week 48 with no plateau in sight
- Superior to tirzepatide data at comparable timepoints
- Significant reductions in liver fat, triglycerides, and blood pressure

**Where It Stands**

Retatrutide is currently in Phase III trials. If results hold, it will represent the most effective obesity therapy ever developed by a substantial margin.`,
    benefits: [
      '24.2% body weight reduction in Phase II trial at 48 weeks — unprecedented',
      'Triple GLP-1/GIP/glucagon receptor agonism — three simultaneous weight loss mechanisms',
      'Glucagon agonism raises basal metabolic rate — burns more calories at rest',
      'Significant reduction in liver fat (NASH-relevant)',
      'Reduces triglycerides and blood pressure in addition to weight',
      'No weight loss plateau observed at 48 weeks — continued trajectory',
      'Most advanced compound in pipeline for obesity treatment',
      'Phase III trials underway with high probability of approval',
    ],
    protocol: `**Phase II Escalation Protocol (Reference):**
- 2mg weekly × 4 weeks
- 4mg weekly × 4 weeks
- 8mg weekly × 4 weeks
- 12mg weekly (maintenance)

**Injection:** Once weekly subcutaneous.
**Note:** Phase III compound. Clinical data pending.`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'nad'],
    seoTitle: 'Buy GLP-3 R Retatrutide | Triple Agonist with 24% Weight Loss in Phase II | BPC-157 Stack',
    deepDiveTitle: 'Retatrutide (GLP-3 R): The Triple Receptor Agonist Rewriting Weight Loss Science',
    highlights: [
      { title: '24% Weight Reduction', body: 'Phase II results: 24.2% body weight reduction at 48 weeks — with no plateau. The highest weight loss ever demonstrated in a clinical trial at that point.' },
      { title: 'Triple Mechanism', body: 'GLP-1 + GIP + glucagon receptor activation — the glucagon component raises basal metabolic rate and drives liver fat oxidation beyond what dual agonists achieve.' },
      { title: 'Liver Fat Reduction', body: 'Significant hepatic fat reduction — making retatrutide potentially the first anti-obesity agent with strong NASH (liver disease) efficacy simultaneously.' },
      { title: 'No Plateau', body: 'Unlike semaglutide, retatrutide showed continued weight loss trajectory at 48 weeks with no plateau — suggesting even greater efficacy over longer treatment.' },
    ],
  },
  {
    slug: 'cagri-sema',
    name: 'GLP-1 C + GLP-1 S (Cagrisema)',
    tagline: 'Cagrilintide + Semaglutide — Dual Peptide Combination',
    price: 109.99,
    category: 'Weight Loss',
    tags: ['cagrilintide', 'semaglutide', 'amylin', 'GLP-1', 'combination', 'weight loss', 'next-gen'],
    image: IMG.cagri,
    affiliateUrl: aff('glp-1cglp-1s-5mg'),
    shortDescription: 'Cagrisema combines cagrilintide (amylin analog) with semaglutide — targeting two separate appetite pathways for additive weight loss exceeding either compound alone.',
    fullDescription: `Cagrisema is a novel combination of cagrilintide (a long-acting amylin analog) and semaglutide. This combination targets two completely distinct appetite regulatory systems simultaneously — the amylin pathway and the GLP-1 pathway — achieving additive weight loss superior to semaglutide alone.

**The Amylin Pathway**

Amylin is co-secreted with insulin from pancreatic beta cells. It:
- Slows gastric emptying (like GLP-1, but through different receptors)
- Suppresses glucagon secretion
- Acts on area postrema and hypothalamus to reduce food intake
- Produces satiety through pathways entirely separate from GLP-1

Cagrilintide is a long-acting amylin analog with a half-life suitable for once-weekly dosing — designed specifically for co-administration with semaglutide.

**Additive Efficacy**

Because amylin and GLP-1 act through completely different receptors and pathways, combining them produces additive (not redundant) appetite suppression:

Phase III REDEFINE trials: Cagrisema showed ~25% body weight reduction — compared to ~15% for semaglutide alone at comparable doses. Demonstrating clear superiority of the combination.

**Clinical Development**

Cagrisema is in Phase III trials. Early data positions it between tirzepatide and retatrutide in efficacy, with the unique advantage of an entirely different mechanism from GIP-based dual/triple agonists.`,
    benefits: [
      '~25% weight reduction in REDEFINE trials vs ~15% for semaglutide alone',
      'Dual amylin + GLP-1 mechanism — two completely separate appetite pathways',
      'Additive weight loss beyond what GLP-1 agonism alone achieves',
      'Amylin pathway reduces hunger through hypothalamic area postrema signaling',
      'Different mechanism from GIP-based approaches (tirzepatide, retatrutide)',
      'Once-weekly injection — same convenience as semaglutide',
      'Phase III clinical program underway — strong regulatory pipeline',
      'Superior to semaglutide in head-to-head design',
    ],
    protocol: `**Protocol (Based on Phase III Design):**
- Cagrilintide component: 2.4mg weekly
- Semaglutide component: 2.4mg weekly
- Combined weekly injection, subcutaneous
- Escalation over 16 weeks from starting dose

 Phase III compound. Clinical guidance required for pharmaceutical use.`,
    synergies: ['glp-1s-semaglutide', 'glp-2t-tirzepatide', 'glp-3r-retatrutide', 'nad'],
    seoTitle: 'Buy Cagrisema GLP-1 C + GLP-1 S | Dual Amylin/GLP-1 for 25% Weight Loss | BPC-157 Stack',
    deepDiveTitle: 'Cagrisema: The Amylin + Semaglutide Combination That Rewrites Weight Loss Expectations',
    highlights: [
      { title: '25% vs 15%', body: 'REDEFINE trials: cagrisema achieved ~25% weight reduction vs ~15% for semaglutide alone — a 67% improvement from adding the amylin pathway.' },
      { title: 'Unique Mechanism', body: 'Amylin receptor activation is completely distinct from GLP-1, GIP, and glucagon pathways — meaning it adds genuine additive efficacy rather than pathway overlap.' },
      { title: 'Different from GIP Combos', body: 'While tirzepatide and retatrutide use GIP receptor pathways, cagrisema uses the amylin system — offering a mechanistically distinct option for non-responders.' },
      { title: 'Phase III Pipeline', body: 'In Phase III trials with Novo Nordisk — positioned as the next generation of obesity pharmacotherapy beyond semaglutide monotherapy.' },
    ],
  },

  // ─── GLP DOSAGE VARIANTS ────────────────────────────────────────────────────
  {
    slug: 'glp-1s-semaglutide-5mg',
    name: 'GLP-1 S Semaglutide 5mg',
    tagline: 'Starter Dose — GLP-1 Receptor Agonist for Weight Loss',
    price: 79.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'semaglutide', 'weight loss', 'Ozempic', 'starter', 'metabolic'],
    image: IMG.sema5,
    affiliateUrl: aff('glp-1s-5mg'),
    shortDescription: 'Semaglutide 5mg — ideal starter vial for GLP-1 weight loss protocols. Same compound as Ozempic/Wegovy at a research-grade price point for dose titration.',
    fullDescription: `Semaglutide 5mg is the preferred starting size for GLP-1 receptor agonist protocols. At a 0.25mg/week starting dose, a single 5mg vial provides roughly 20 weeks of initial dosing — making it the ideal entry point for those new to GLP-1 therapy who want to assess tolerability before committing to larger vials. Starting low is not just cautious; it is the protocol that produced the clinical trial results.

**Why Starting Low Matters**

The standard GLP-1 escalation protocol exists for a reason: GI adaptation. At 0.25mg/week, the gut has time to adjust to slowed gastric emptying — dramatically reducing the nausea, vomiting, and GI discomfort that cause most early dropouts. The clinical trial populations that achieved 15-20% weight loss all followed this slow escalation approach, not aggressive early dosing.

**Clinical Results at Full Dose**

Semaglutide (Ozempic/Wegovy active compound) has demonstrated 15-20% body weight reduction in 68-week clinical trials at 2.4mg/week. Beginning with a 5mg vial sets the foundation for this outcome by allowing the GI system to adapt during weeks 1-8, ensuring maintenance of higher doses becomes possible rather than intolerable.

**Reconstitution and Storage**

A 5mg vial reconstituted with 2mL bacteriostatic water yields a 2.5mg/mL concentration — convenient for dose escalation. Draw 0.1mL for a 0.25mg dose and 0.2mL for a 0.5mg dose using a standard 1mL insulin syringe. Refrigerate after reconstitution and use within 28 days.`,
    benefits: [
      '15-20% body weight reduction in clinical trials at therapeutic doses',
      'Ideal starter size for dose titration and GI adaptation',
      'Same compound as Ozempic/Wegovy',
      'Dramatically reduces appetite via hypothalamic GLP-1 receptors',
      'Glucose-dependent insulin stimulation — low hypoglycemia risk',
    ],
    protocol: `**Starter Protocol:**
- Reconstitute with 2mL bacteriostatic water (2.5mg/mL)
- Week 1-4: 0.1mL (0.25mg) subcutaneous weekly
- Week 5-8: 0.2mL (0.5mg) weekly
- Move to 10mg vial to continue escalation`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'nad', 'bpc-157'],
    seoTitle: 'Buy Semaglutide 5mg | GLP-1 S Starter Dose Weight Loss | BPC-157 Stack',
    deepDiveTitle: 'Semaglutide 5mg: The Right Starting Size for Your GLP-1 Protocol',
    highlights: [
      { title: 'Starter Value', body: 'Perfect first vial — 20 weeks of starter dosing at 0.25mg/week while you assess tolerability.' },
      { title: 'Same as Ozempic', body: 'Identical active compound to Ozempic and Wegovy at a fraction of pharmaceutical pricing.' },
      { title: '15-20% Weight Loss', body: 'At therapeutic doses, semaglutide produces 15-20% body weight reduction in 68-week trials.' },
      { title: 'GI Adaptation', body: 'Starting low allows the gut to adapt — minimizing nausea and improving tolerability at therapeutic doses.' },
    ],
  },
  {
    slug: 'glp-1s-semaglutide-15mg',
    name: 'GLP-1 S Semaglutide 15mg',
    tagline: 'Full-Course Supply — Maximum Dose Weight Loss Protocol',
    price: 159.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'semaglutide', 'weight loss', 'Wegovy', 'maintenance', 'full course'],
    image: IMG.sema15,
    affiliateUrl: aff('glp-1s-15mg'),
    shortDescription: 'Semaglutide 15mg — the largest single-vial option for full-protocol GLP-1 weight loss. Covers multiple months at maintenance doses for maximum weight reduction.',
    fullDescription: `Semaglutide 15mg is the most cost-effective option for experienced GLP-1 users already at therapeutic doses. At 2mg/week, a 15mg vial provides 7.5 weeks of maximum-dose coverage. At 1mg/week, it covers 15 full weeks — making it the best value per milligram for committed users who have completed escalation and are maintaining their target dose.

**STEP-1 Trial Data — What Maintenance Achieves**

At 2.4mg/week maintenance: 16.9% average body weight reduction at 68 weeks, with 86% of participants achieving at least 5% weight loss and 69% achieving at least 10%. These results are only achieved when patients stay on the drug — the 15mg vial minimizes supply gaps and per-unit cost for long-term commitment to the protocol.

**SURMOUNT-4 Withdrawal Warning**

The STEP-4 withdrawal trial demonstrated significant weight regain within 20 weeks of stopping semaglutide. Continuous uninterrupted dosing is essential for maintaining results — which makes having a larger supply on hand critical for avoiding gaps. The 15mg vial provides this continuity at the lowest cost per dose.

**Storage and Reconstitution**

Reconstitute with 3mL bacteriostatic water for a 5mg/mL concentration. At 2mg/week, draw 0.4mL per injection. At 1mg/week, draw 0.2mL. Store in the refrigerator after reconstitution and use within 28 days. Use a 1mL insulin syringe for precise measurement.`,
    benefits: [
      'Best per-milligram value for maintenance-phase semaglutide protocols',
      'Covers 7-15 weeks at therapeutic doses depending on dose level',
      '15-20% weight loss efficacy — same as Ozempic/Wegovy',
      'Fewer reconstitutions for better sterility and convenience',
      '20% cardiovascular event reduction — SELECT trial',
    ],
    protocol: `**Maintenance Protocol:**
- Reconstitute with 3mL bacteriostatic water (5mg/mL)
- Maintenance: 0.2mL (1mg) or 0.4mL (2mg) weekly
- Store reconstituted; use within 28 days`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'nad', 'bpc-157'],
    seoTitle: 'Buy Semaglutide 15mg | GLP-1 S Maximum Dose Long-Term Supply | BPC-157 Stack',
    deepDiveTitle: 'Semaglutide 15mg: Most Economical Option for Full-Protocol GLP-1 Weight Loss',
    highlights: [
      { title: 'Best Value', body: 'Lowest per-milligram semaglutide price — optimal for users maintaining therapeutic doses.' },
      { title: '15 Weeks Supply', body: 'At 1mg/week, a single 15mg vial covers 15 full weeks of maintenance dosing.' },
      { title: '16.9% Average Loss', body: 'STEP-1 trial at 2.4mg/week: 16.9% average body weight reduction at 68 weeks.' },
      { title: 'Maintenance Grade', body: 'Designed for committed users who have found their optimal dose and want cost-effective long-term access.' },
    ],
  },
  {
    slug: 'glp-2t-tirzepatide-30mg',
    name: 'GLP-2 T Tirzepatide 30mg',
    tagline: 'High-Dose Dual GIP/GLP-1 — Full Escalation Supply',
    price: 279.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'tirzepatide', 'Mounjaro', 'high dose', 'escalation', 'dual agonist'],
    image: IMG.tirz30,
    affiliateUrl: aff('glp-2t-30mg'),
    shortDescription: 'Tirzepatide 30mg — covers the complete escalation from 2.5mg to 7.5mg/week in one vial. Optimal size for full SURMOUNT protocol dosing.',
    fullDescription: `Tirzepatide 30mg is the ideal vial for running a complete escalation protocol from start to the mid-range dose. The SURMOUNT trial escalates from 2.5mg/week to 15mg/week over several months — a 30mg vial covers the first three escalation steps cleanly, providing 4 weeks at each dose level before needing to move to a larger vial.

**SURMOUNT-1 Results at Maximum Dose**

At the highest dose of 15mg, tirzepatide produced 22.5% body weight reduction over 72 weeks — significantly exceeding semaglutide's 15-16% in comparable populations. The SURPASS-2 trial, which directly compared tirzepatide to semaglutide 1mg, showed tirzepatide's superiority at all three doses tested (5mg, 10mg, and 15mg).

**Why the Dual GIP/GLP-1 Mechanism Outperforms**

Adding GIP receptor agonism to GLP-1 creates synergistic metabolic effects that neither receptor can achieve alone. GIP receptors in adipose tissue directly regulate fat storage, GIP potentiates insulin secretion through a different pathway than GLP-1, and the combination produces preferential visceral fat reduction — the metabolically dangerous fat surrounding abdominal organs. This explains the 50% improvement in weight loss over semaglutide.

**Escalation Schedule from 30mg**

Reconstitute with 3mL bacteriostatic water for a 10mg/mL concentration. Week 1-4: 0.25mL (2.5mg); Week 5-8: 0.5mL (5mg); Week 9-12: 0.75mL (7.5mg). After 12 weeks, 22.5mg will have been used, leaving a small bridge dose before transitioning to the 60mg vial for higher-dose maintenance.`,
    benefits: [
      'Up to 22.5% body weight reduction — superior to semaglutide',
      'Dual GIP + GLP-1 agonism for complementary metabolic effects',
      'Covers first 12 weeks of SURMOUNT escalation protocol',
      'Outperformed semaglutide at all doses in SURPASS-2 trial',
      'Preferential visceral fat reduction',
    ],
    protocol: `**Escalation from 30mg Vial:**
- Reconstitute with 3mL bacteriostatic water (10mg/mL)
- Weeks 1-4: 0.25mL (2.5mg) weekly
- Weeks 5-8: 0.5mL (5mg) weekly
- Weeks 9-12: 0.75mL (7.5mg) weekly — 22.5mg used`,
    synergies: ['glp-1s-semaglutide', 'glp-3r-retatrutide', 'glp-2t-tirzepatide', 'nad'],
    seoTitle: 'Buy Tirzepatide 30mg | GLP-2 T Full Escalation Dual Agonist | BPC-157 Stack',
    deepDiveTitle: 'Tirzepatide 30mg: Optimal Vial for Full-Protocol Dual GIP/GLP-1 Weight Loss',
    highlights: [
      { title: '22.5% Weight Loss', body: 'SURMOUNT-1 at 15mg: 22.5% body weight reduction — the highest weight loss ever demonstrated in a controlled trial at that time.' },
      { title: 'Scalable Protocol', body: '30mg covers the first 12 weeks of escalation — ideal first phase before moving to higher-dose vials.' },
      { title: 'Beat Semaglutide', body: 'SURPASS-2 direct comparison: tirzepatide outperformed semaglutide at 5mg, 10mg, and 15mg — at every dose tested.' },
      { title: 'Dual Mechanism', body: 'GIP + GLP-1 synergistic weight loss that neither receptor can achieve alone.' },
    ],
  },
  {
    slug: 'glp-2t-tirzepatide-60mg',
    name: 'GLP-2 T Tirzepatide 60mg',
    tagline: 'Bulk Supply — Long-Term Tirzepatide Maintenance Protocol',
    price: 489.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'tirzepatide', 'Mounjaro', 'bulk', 'maintenance', 'long-term'],
    image: IMG.tirz60,
    affiliateUrl: aff('glp-2-t-60mg'),
    shortDescription: 'Tirzepatide 60mg — maximum bulk supply for long-term protocols at 10-15mg/week maintenance. Best per-milligram pricing for committed tirzepatide users.',
    fullDescription: `Tirzepatide 60mg provides the best economy of scale for users who have completed escalation and are maintaining at 10-15mg/week. At 10mg/week, one vial covers 6 full weeks. At 15mg/week (the maximum dose), a single vial covers 4 weeks. This is the bulk option for committed users who have verified their optimal dose and want to minimize cost and reconstitution frequency.

**SURMOUNT-4 Withdrawal Data — Why Continuous Dosing Matters**

SURMOUNT-4 demonstrated that participants who stopped tirzepatide after achieving significant weight loss regained more than half of their lost weight within 88 weeks. This data is critical: tirzepatide is not a short-term intervention. Long-term continuous dosing is required to maintain results, making a reliable bulk supply essential for anyone serious about the protocol.

**Maximum Dose Results from SURMOUNT-1**

At 15mg/week — which this vial supports for 4 weeks — SURMOUNT-1 demonstrated 22.5% average body weight reduction at 72 weeks. This makes tirzepatide the most effective approved weight loss agent in history at the time of publication, and the 60mg vial is the most practical format for sustained maximum-dose treatment.

**Reconstitution and Dosing at 60mg**

Reconstitute with 4-6mL bacteriostatic water to achieve a working concentration between 10mg/mL and 15mg/mL. At 10mg/mL with a weekly 10mg dose, draw 1mL per injection. Store refrigerated after reconstitution and use within 28 days. Rotate injection sites (abdomen, thigh, upper arm) to prevent site reactions.`,
    benefits: [
      'Lowest per-milligram cost for tirzepatide',
      '6 weeks at 10mg/week or 4 weeks at 15mg/week maintenance',
      'SURMOUNT-3: continued weight loss beyond 72 weeks without plateau',
      'Minimizes reconstitution frequency for long-term protocols',
      'Superior to semaglutide in every head-to-head comparison',
    ],
    protocol: `**Long-Term Maintenance:**
- Reconstitute with 4-6mL bacteriostatic water
- At 10mg/week: 0.5mL/week — 6 weeks supply
- At 15mg/week: 0.75mL/week — 4 weeks supply
- Refrigerate; use within 28 days`,
    synergies: ['glp-1s-semaglutide', 'glp-3r-retatrutide', 'glp-2t-tirzepatide-30mg', 'nad'],
    seoTitle: 'Buy Tirzepatide 60mg | GLP-2 T Bulk Long-Term Weight Loss Supply | BPC-157 Stack',
    deepDiveTitle: 'Tirzepatide 60mg: Bulk Supply for Sustained Long-Term Dual Agonist Weight Loss',
    highlights: [
      { title: 'Best Value', body: 'Lowest per-milligram tirzepatide cost — for users committed to long-term maintenance.' },
      { title: 'No Plateau', body: 'SURMOUNT-3: continued weight loss beyond 72 weeks, supporting uninterrupted long-term use.' },
      { title: 'Withdrawal Risk', body: 'SURMOUNT-4: significant weight regain after stopping — bulk supply ensures continuous protocol.' },
      { title: '6 Weeks Supply', body: 'At 10mg/week, one 60mg vial provides 6 full weeks of maintenance treatment.' },
    ],
  },
  {
    slug: 'glp-3r-retatrutide-15mg',
    name: 'GLP-3 R Retatrutide 15mg',
    tagline: 'Triple Agonist — Escalation Protocol Starter',
    price: 189.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'glucagon', 'retatrutide', 'triple agonist', 'Phase III', 'escalation'],
    image: IMG.reta15,
    affiliateUrl: aff('glp-3r-15mg'),
    shortDescription: 'Retatrutide 15mg — starter vial for the world\'s most potent weight loss peptide in Phase III development. 24% weight loss with no plateau at 48 weeks.',
    fullDescription: `Retatrutide 15mg covers the first 7-8 weeks of the escalation protocol at 2mg/week, making it the ideal entry point for the most advanced weight loss peptide in clinical development. The triple receptor mechanism — simultaneously activating GLP-1, GIP, and glucagon receptors — adds hepatic fat oxidation and basal metabolic rate elevation beyond what dual agonists like tirzepatide can achieve, which is why Phase II data showed 24.2% weight reduction at 48 weeks.

**The Glucagon Receptor Addition — Why It Matters**

Glucagon receptor agonism is what separates retatrutide from every other weight loss compound currently available. Glucagon directly stimulates the liver to burn fat (hepatic fat oxidation), raises basal metabolic rate so more calories are burned at rest, and promotes lipolysis in adipose tissue. These mechanisms are entirely absent from semaglutide and only partially present in tirzepatide. Adding glucagon agonism to the GIP+GLP-1 foundation is what pushed weight loss from tirzepatide's 22.5% to retatrutide's 24.2%.

**Phase II Results and the Absence of a Plateau**

The most remarkable finding from the retatrutide Phase II trial (New England Journal of Medicine, 2023) was not just the 24.2% weight reduction — it was that the weight loss had not plateaued at 48 weeks. This is unprecedented. Every prior compound showed a plateau, where weight loss slowed or stopped. Retatrutide's continued downward trajectory suggests even greater efficacy could be achieved with longer treatment.

**Starting the Protocol with 15mg**

Reconstitute with 3mL bacteriostatic water for a 5mg/mL concentration. At 2mg/week, draw 0.4mL per injection. The 15mg vial covers weeks 1-7 at the starter dose, during which GI adaptation occurs. After the 15mg vial is used, transition to the 30mg or 60mg vial to continue escalation toward 4-12mg/week.`,
    benefits: [
      '24.2% weight reduction in Phase II at 48 weeks — unprecedented',
      '15mg covers 7+ weeks of starter escalation at 2mg/week',
      'Triple GLP-1/GIP/glucagon mechanism',
      'No plateau at 48 weeks — continued weight loss trajectory',
      'Phase III trials ongoing — most advanced pipeline compound',
    ],
    protocol: `**Escalation from 15mg Vial:**
- Reconstitute with 3mL bacteriostatic water (5mg/mL)
- Weeks 1-4: 0.4mL (2mg) weekly
- Weeks 5-8: 0.8mL (4mg) weekly — all 15mg used
- Continue with 30mg or 60mg vial`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'glp-3r-retatrutide', 'nad'],
    seoTitle: 'Buy Retatrutide 15mg | GLP-3 R Triple Agonist Starter | BPC-157 Stack',
    deepDiveTitle: 'Retatrutide 15mg: Entry Point to the Most Potent Weight Loss Peptide in Development',
    highlights: [
      { title: '24% Weight Loss', body: 'Phase II: 24.2% body weight reduction at 48 weeks — highest ever in weight loss clinical history.' },
      { title: 'Starter Vial', body: '15mg covers first 7+ weeks at 2mg/week — perfect for assessing tolerability.' },
      { title: 'Triple Mechanism', body: 'GLP-1 + GIP + glucagon: the glucagon arm adds hepatic fat burning and raises metabolic rate.' },
      { title: 'Phase III Active', body: 'In TRIUMPH Phase III trials — expected to be the most effective anti-obesity drug ever approved.' },
    ],
  },
  {
    slug: 'glp-3r-retatrutide-30mg',
    name: 'GLP-3 R Retatrutide 30mg',
    tagline: 'Triple Agonist — Full Escalation Vial',
    price: 349.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'glucagon', 'retatrutide', 'triple agonist', 'escalation', 'weight loss'],
    image: IMG.reta30,
    affiliateUrl: aff('glp-3-r-30mg'),
    shortDescription: 'Retatrutide 30mg — most practical vial for the complete triple agonist escalation protocol. Covers weeks 1-12 of the Phase II reference dosing schedule.',
    fullDescription: `Retatrutide 30mg covers the complete initial escalation from 2mg to 8mg/week over the first 8-10 weeks. Running 4 weeks at 2mg (8mg total) and 4 weeks at 4mg (16mg total) uses 24mg — leaving 6mg as a bridging dose before moving to the 60mg vial for high-dose maintenance. This makes the 30mg vial the most efficient single purchase for establishing the retatrutide protocol.

**The Phase II Escalation Reference Protocol**

The clinical trial escalation — 2mg, 4mg, 8mg, 12mg weekly at 4-week intervals — produced 24.2% body weight reduction at 48 weeks without hitting a plateau. The 30mg vial covers the first half of this escalation cleanly. At 8mg/week (the Phase II mid-dose), meaningful weight loss and metabolic improvements are already measurable, and the continued trajectory toward 12mg represents the peak of what is currently achievable with any single weight loss compound.

**Triple Mechanism — Compounding With Each Escalation Step**

As doses increase through the escalation, all three receptor pathways intensify simultaneously. GLP-1 agonism deepens appetite suppression. GIP receptor effects on adipose tissue regulation become more pronounced. Glucagon receptor activity raises basal metabolic rate further, directly increasing calorie burn at rest. The compounding of three distinct mechanisms across the dose range explains why retatrutide continues to produce results where other compounds plateau.

**Practical Notes for the 30mg Vial**

Reconstitute with 3mL bacteriostatic water for a 10mg/mL concentration, making dose measurement straightforward. At 2mg/week draw 0.2mL; at 4mg/week draw 0.4mL. Store refrigerated after reconstitution and use within 28 days. Transition to the 60mg vial when the 30mg is nearly depleted to avoid any gap in dosing.`,
    benefits: [
      'Covers weeks 1-8 of complete escalation protocol from a single vial',
      '24% body weight reduction in Phase II — outperforms all competitors',
      'Triple mechanism: GLP-1 + GIP + glucagon receptor agonism',
      'Glucagon agonism raises metabolic rate beyond dual agonists',
      'Phase III trials ongoing with highest expected peak efficacy',
    ],
    protocol: `**Full Escalation from 30mg:**
- Reconstitute with 3mL bacteriostatic water (10mg/mL)
- Weeks 1-4: 2mg (0.2mL) weekly — 8mg used
- Weeks 5-8: 4mg (0.4mL) weekly — 24mg used
- Remaining 6mg bridges to 60mg vial`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'glp-3r-retatrutide-15mg', 'nad'],
    seoTitle: 'Buy Retatrutide 30mg | GLP-3 R Full Escalation Triple Agonist | BPC-157 Stack',
    deepDiveTitle: 'Retatrutide 30mg: Most Efficient Vial for Triple Agonist Escalation Protocol',
    highlights: [
      { title: 'Full 8-Week Escalation', body: 'Covers weeks 1-8 from 2mg to 4mg/week — the most efficient single vial for starting the retatrutide protocol.' },
      { title: '24% Outperforms All', body: 'Phase II: 24% weight reduction outperforms tirzepatide and semaglutide at comparable timepoints.' },
      { title: 'Glucagon Advantage', body: 'Third receptor adds hepatic fat burning and basal metabolic rate elevation — explaining the superior clinical data.' },
      { title: 'Phase III Pipeline', body: 'Most likely to become the highest-efficacy approved anti-obesity drug — Phase III data expected 2025-2026.' },
    ],
  },
  {
    slug: 'glp-3r-retatrutide-60mg',
    name: 'GLP-3 R Retatrutide 60mg',
    tagline: 'Triple Agonist Bulk — Peak Maintenance Dosing',
    price: 589.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'glucagon', 'retatrutide', 'triple agonist', 'bulk', 'maximum dose'],
    image: IMG.reta60,
    affiliateUrl: aff('glp-3-r-60mg'),
    shortDescription: 'Retatrutide 60mg — bulk supply for the most potent weight loss peptide in Phase III. Optimal for maintenance dosing at 8-12mg/week with the lowest per-mg cost.',
    fullDescription: `Retatrutide 60mg is the bulk format for experienced users who have completed the escalation protocol and are maintaining at 8-12mg/week. At 12mg/week it provides 5 full weeks of uninterrupted treatment. At 8mg/week, one vial covers 7.5 weeks. Phase II data at 12mg/week showed continued weight loss through 48 weeks without plateau — the only weight loss compound to demonstrate this, and the core reason continuous uninterrupted high-dose use is both achievable and clinically justified.

**No Plateau at 48 Weeks — The Critical Finding**

In every prior GLP-1 class compound, a weight loss plateau is observed as the body adapts to the appetite-suppressing effects. Retatrutide's Phase II data showed no such plateau at 48 weeks at the highest dose. This is attributed to the glucagon receptor arm, which continuously raises basal metabolic rate — meaning the body actually burns more energy even as it loses weight, counteracting the metabolic adaptation that causes other compounds to plateau.

**Hepatic Fat Benefits at Maintenance Doses**

At maintenance doses of 8-12mg/week, retatrutide produces significant reductions in liver fat — relevant for the substantial overlap between obesity and non-alcoholic fatty liver disease (NAFLD/NASH). Glucagon receptor agonism drives hepatic fat oxidation directly, making retatrutide uniquely suited to address both the metabolic and hepatic components of metabolic syndrome simultaneously.

**Storage and Cost Efficiency at 60mg**

The 60mg vial represents the lowest per-milligram cost for retatrutide. Reconstitute with 6mL bacteriostatic water for a 10mg/mL concentration. At 12mg/week, draw 1.2mL per injection using a standard 1mL syringe plus a separate 0.2mL draw, or reconstitute to a different concentration. Refrigerate after reconstitution and use within 28 days.`,
    benefits: [
      'Most economical per-milligram retatrutide price',
      '5-7 weeks at 8-12mg/week maintenance from one vial',
      'Phase II: continued weight loss without plateau through 48 weeks',
      'Full triple receptor engagement at peak doses',
      'Minimizes reconstitution for long-term protocols',
    ],
    protocol: `**Peak Maintenance from 60mg:**
- Reconstitute with 6mL bacteriostatic water (10mg/mL)
- At 8mg/week: 0.8mL weekly — 7.5 weeks supply
- At 12mg/week: 1.2mL weekly — 5 weeks supply
- Refrigerate; use within 28 days`,
    synergies: ['glp-2t-tirzepatide-60mg', 'glp-1s-semaglutide-15mg', 'glp-3r-retatrutide-30mg', 'nad'],
    seoTitle: 'Buy Retatrutide 60mg | GLP-3 R Bulk Maximum Dose Triple Agonist | BPC-157 Stack',
    deepDiveTitle: 'Retatrutide 60mg: Bulk Maintenance Supply for the Most Potent Weight Loss Peptide',
    highlights: [
      { title: 'Best Bulk Value', body: 'Lowest per-mg retatrutide cost — for experienced users maintaining at 8-12mg/week long-term.' },
      { title: 'No Plateau', body: 'Phase II: continued weight loss at 48 weeks — supporting continuous high-dose protocols.' },
      { title: '7.5 Weeks Supply', body: 'At 8mg/week, one 60mg vial covers 7.5 full weeks of uninterrupted triple agonist therapy.' },
      { title: 'Full Triple Engagement', body: 'All three receptor types fully engaged at maintenance doses — maximum synergistic effect.' },
    ],
  },

  // ─── SUPPLIES ───────────────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10mL',
    tagline: 'Essential Reconstitution Solution',
    price: 9.99,
    category: 'Supplies',
    tags: ['reconstitution', 'bacteriostatic water', 'injection supplies', 'essential', 'peptide prep'],
    image: IMG.bacwater,
    affiliateUrl: aff('bacteriostatic-water-reconstitution-solution-10ml'),
    shortDescription: 'Pharmaceutical-grade bacteriostatic water for safe peptide reconstitution — contains 0.9% benzyl alcohol to prevent bacterial growth in multi-use vials.',
    fullDescription: `Bacteriostatic water is sterile water containing 0.9% benzyl alcohol as a bacteriostatic agent. It is specifically designed for reconstituting lyophilized (freeze-dried) peptides and other compounds. Using the correct reconstitution solution is essential for maintaining peptide integrity, purity, and sterility.

**Why Bacteriostatic Water, Not Sterile Water**

Sterile water lacks a bacteriostatic preservative — meaning once opened, it can be contaminated within minutes. Bacteriostatic water's 0.9% benzyl alcohol prevents bacterial growth in multi-use vials, making it safe to use the same vial multiple times over 28 days after reconstitution.

For any peptide that requires multiple draws (which is most peptides), bacteriostatic water is essential.

**Reconstitution Guidelines**

Standard reconstitution for most peptides:
- 5mg vial: Add 1mL bacteriostatic water = 5,000mcg/mL
- 10mg vial: Add 2mL bacteriostatic water = 5,000mcg/mL
- Inject water slowly against the side of the vial (not directly onto the powder)
- Gently swirl — never shake — to dissolve

**Storage**

Reconstituted peptides stored with bacteriostatic water should be refrigerated at 2-8°C and used within 28-30 days.`,
    benefits: [
      'Pharmaceutical-grade bacteriostatic agent (0.9% benzyl alcohol)',
      'Prevents bacterial contamination in multi-use vials for 28+ days',
      'Essential for all lyophilized peptide reconstitution',
      'Maintains peptide sterility and integrity between uses',
      'Standard 10mL vial — sufficient for multiple reconstitutions',
      'Compatible with all peptides',
      'Must-have supply for any peptide protocol',
      'From Apollo Peptide Sciences — same trusted source as your peptides',
    ],
    protocol: `**Reconstitution Process:**
1. Wipe vial tops with alcohol swab
2. Draw desired water volume into sterile syringe
3. Insert needle at angle into peptide vial
4. Inject water slowly against the glass wall (not onto powder)
5. Gently swirl until fully dissolved — never shake
6. Refrigerate immediately

**Standard ratio:** 1mL per 5mg peptide = 5,000mcg/mL concentration.`,
    synergies: ['bpc-157', 'tb-500', 'cjc1295-ipamorelin', 'epithalon'],
    seoTitle: 'Buy Bacteriostatic Water 10mL | Peptide Reconstitution Solution | BPC-157 Stack',
    deepDiveTitle: 'Bacteriostatic Water: Why Correct Reconstitution Is Critical for Peptide Safety and Efficacy',
    highlights: [
      { title: 'Bacteriostatic Protection', body: '0.9% benzyl alcohol prevents bacterial contamination for 28+ days after opening — essential for multi-use vials and repeated dosing.' },
      { title: 'Peptide Integrity', body: 'Correct reconstitution preserves the peptide\'s structure and potency. Wrong solutions can denature peptides, reducing efficacy and safety.' },
      { title: '10mL Volume', body: 'A 10mL vial provides enough reconstitution solution for multiple peptide vials — practical for running multiple protocols simultaneously.' },
      { title: 'Same Source', body: 'Bacteriostatic water from Apollo Peptide Sciences — pharmaceutical-grade from the same trusted source as all your peptides.' },
    ],
  },

  // ── Batch 1: Healing / Recovery ──────────────────────────────────────────

  {
    slug: 'bpc-157-tb-500-blend-20mg',
    name: 'BPC-157 + TB-500 Blend 20mg',
    tagline: 'Dual-peptide synergy for accelerated tissue repair and recovery',
    price: 99.99,
    category: 'Healing',
    tags: ['BPC-157', 'TB-500', 'Blend', 'Healing', 'Recovery', 'Injury'],
    image: 'https://phiogen.is/images/products/bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg?ref=PEPS',
    shortDescription: 'A 20mg blend of BPC-157 (10mg) and TB-500 (10mg) combining gut-brain healing with systemic tissue remodeling for comprehensive injury recovery.',
    fullDescription: `**The Synergistic Healing Stack**

BPC-157 and TB-500 are the two most widely researched regenerative peptides available, and combining them in a single vial creates a healing protocol that addresses injury from multiple biological angles. BPC-157 operates primarily through the NO-cGMP pathway, promoting angiogenesis and modulating growth hormone receptors locally at sites of damage. TB-500 (Thymosin Beta-4) acts systemically by upregulating actin polymerization, facilitating cell migration, and reducing inflammation across connective tissue.

**Mechanism of Combined Action**

Where BPC-157 excels at tendon-to-bone junctions, gut lining integrity, and nerve repair, TB-500 specializes in muscle fiber regeneration, cardiovascular tissue healing, and reducing systemic fibrosis. Together, they cover the full spectrum of soft tissue and connective tissue recovery. Clinical observations suggest that their complementary pathways reduce overall recovery time compared to either peptide used alone.

**Who Benefits Most**

Athletes dealing with chronic overuse injuries, post-surgical patients, or anyone managing tendinopathy, muscle tears, or inflammatory joint conditions will find this blend particularly effective. The 20mg total dose (10mg each) provides a meaningful therapeutic concentration for a full recovery cycle.`,
    benefits: [
      'Accelerates tendon, ligament, and muscle repair simultaneously',
      'Reduces acute and chronic inflammation at injury sites',
      'Promotes angiogenesis for improved blood flow to damaged tissue',
      'Supports nerve regeneration and neuroprotection',
      'Enhances gut lining integrity and GI healing',
      'Systemic TB-500 activity complements local BPC-157 action',
      'Single vial convenience for a proven dual-peptide protocol',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water to the 20mg vial (5mg/mL concentration per peptide).

**Dosing:**
- Injury recovery: 250–500mcg of each peptide twice daily
- Maintenance: 250mcg each once daily
- Cycle length: 4–8 weeks, then 2–4 weeks off

**Injection route:** Subcutaneous near injury site preferred; IM acceptable for deeper tissue`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'epithalon'],
    seoTitle: 'Buy BPC-157 + TB-500 Blend 20mg | Healing Peptide Stack | Injury Recovery',
    deepDiveTitle: 'BPC-157 + TB-500 Blend: The Science Behind the Ultimate Healing Peptide Combination',
    highlights: [
      { title: '10mg + 10mg Dose', body: 'Each vial contains 10mg BPC-157 and 10mg TB-500 — a full therapeutic quantity for a complete injury recovery cycle without purchasing two separate vials.' },
      { title: 'Complementary Pathways', body: 'BPC-157 targets local tissue repair via NO-cGMP; TB-500 acts systemically on actin and cell migration — together they cover every layer of soft tissue healing.' },
      { title: 'Angiogenesis + Remodeling', body: 'BPC-157 drives new blood vessel growth into damaged tissue while TB-500 remodels the extracellular matrix, restoring structural integrity faster.' },
      { title: 'Protocol-Ready', body: 'Pre-blended for convenience — one vial, one reconstitution, one injection protocol covering both peptides simultaneously.' },
    ],
  },

  {
    slug: 'bpc-157-tb-500-blend-10mg',
    name: 'BPC-157 + TB-500 Blend 10mg',
    tagline: 'Entry-level dual peptide healing blend for targeted recovery',
    price: 59.99,
    category: 'Healing',
    tags: ['BPC-157', 'TB-500', 'Blend', 'Healing', 'Recovery'],
    image: 'https://phiogen.is/images/products/bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-tb-500-blend-bpc-157-5mg-tb-500-5mg?ref=PEPS',
    shortDescription: 'A 10mg blend of BPC-157 (5mg) and TB-500 (5mg) — an accessible entry point for the gold-standard healing peptide combination.',
    fullDescription: `**Starting the Healing Stack**

The 10mg blend (5mg BPC-157 + 5mg TB-500) provides a cost-effective introduction to the most powerful healing peptide combination in the research community. This smaller dose is ideal for new users testing their response, for shorter acute injury protocols, or as a maintenance dose following a full 20mg cycle.

**The Same Pathways, Smaller Investment**

Both peptides work through the same mechanisms regardless of vial size — BPC-157 through the NO-cGMP healing cascade and TB-500 through systemic actin regulation and cell migration. The 5mg+5mg dose supports shorter 4-week acute protocols or lower-frequency dosing for chronic maintenance.

**Practical Application**

Many users start with this 10mg blend, assess their recovery response, and then graduate to the 20mg version for ongoing cycles. It's also a popular choice for stacking with a separate BPC-157 or TB-500 vial when targeting a specific tissue while maintaining systemic coverage.`,
    benefits: [
      'Cost-effective entry point for the dual-peptide healing protocol',
      'Covers both local and systemic tissue repair pathways',
      'Suitable for acute injuries requiring a shorter 4-week protocol',
      'Ideal maintenance dose following a full recovery cycle',
      'Reduces inflammation at injury sites',
      'Promotes tendon, ligament, and muscle fiber regeneration',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5mg/mL per peptide).

**Dosing:**
- Acute injury: 250mcg of each twice daily for 4 weeks
- Maintenance: 250mcg each once daily, 3–5x per week

**Injection route:** Subcutaneous near injury site`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'epithalon'],
    seoTitle: 'Buy BPC-157 + TB-500 Blend 10mg | Healing Peptide Starter | Injury Recovery',
    deepDiveTitle: 'BPC-157 + TB-500 10mg Blend: Accessible Dual-Peptide Healing for Every Budget',
    highlights: [
      { title: '5mg + 5mg Formula', body: 'Delivers 5mg of each peptide — enough for a full acute protocol at standard doses or an extended maintenance cycle.' },
      { title: 'Lower Entry Cost', body: 'At $59.99, this blend makes the gold-standard BPC-157/TB-500 combination accessible without the commitment of the full 20mg vial.' },
      { title: 'Same Synergy', body: 'Identical complementary mechanism to the 20mg blend — BPC-157 locally repairing tissue while TB-500 systemically reduces inflammation and promotes remodeling.' },
      { title: 'Flexible Stacking', body: 'Can be stacked alongside standalone BPC-157 or TB-500 vials to tailor dose ratios based on specific injury needs.' },
    ],
  },

  {
    slug: 'bpc-157-capsules',
    name: 'BPC-157 Capsules 500mcg x60',
    tagline: 'Oral BPC-157 for gut-targeted healing and systemic recovery',
    price: 69.99,
    category: 'Healing',
    tags: ['BPC-157', 'Capsules', 'Oral', 'Gut Healing', 'Recovery'],
    image: 'https://phiogen.is/images/products/bpc-157-capsules-500mcg-x-60-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-capsules-500mcg-x-60-capsules?ref=PEPS',
    shortDescription: '60 capsules of 500mcg BPC-157 each — the needle-free option for gut healing, leaky gut, and systemic recovery via oral administration.',
    fullDescription: `**Oral BPC-157: The Gut-First Approach**

BPC-157 was originally discovered as a fragment derived from gastric juice proteins, making oral delivery a scientifically sound route — particularly for gastrointestinal applications. Each capsule contains 500mcg of BPC-157, providing a 60-day supply at standard daily dosing. Oral BPC-157 bypasses the need for injection while still delivering meaningful systemic concentrations for many users.

**Why Oral Delivery Works for BPC-157**

Unlike most peptides, BPC-157 has demonstrated remarkable stability in gastric acid, which is why it was originally studied for ulcer healing. Research in animal models has shown that oral BPC-157 heals gastric ulcers, reduces intestinal inflammation, and shows systemic effects on tendons and the nervous system. For those with IBS, leaky gut, Crohn's, or post-NSAID gut damage, oral BPC-157 is often preferred over injectable forms.

**Practical Advantages**

No reconstitution, no needles, no refrigeration concerns. Simply take 1-2 capsules daily, ideally on an empty stomach. This format is particularly popular for gut-focused protocols, travel, and users who prefer oral supplementation over peptide injections.`,
    benefits: [
      'Heals gastric ulcers and restores gut lining integrity',
      'Reduces IBS, IBD, and leaky gut symptoms',
      'Systemic tissue repair through oral bioavailability',
      'Supports tendon and ligament recovery without injection',
      'Neuroprotective effects via systemic circulation',
      'Anti-inflammatory action throughout the GI tract',
      'No reconstitution or needles required',
    ],
    protocol: `**Dosing:**
- Gut healing: 500mcg–1000mcg daily on an empty stomach
- Systemic recovery: 500mcg twice daily
- Cycle: 4–8 weeks continuous

**Timing:** Take 30 minutes before meals for best GI absorption`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'kpv-10mg'],
    seoTitle: 'Buy BPC-157 Capsules 500mcg x60 | Oral BPC-157 for Gut Healing | No Injection',
    deepDiveTitle: 'Oral BPC-157 Capsules: Gut-Targeted Healing Without Needles',
    highlights: [
      { title: '60-Day Supply', body: '60 capsules at 500mcg each provides a full two-month protocol at standard daily dosing — exceptional value for a complete healing cycle.' },
      { title: 'Gut-Native Peptide', body: 'BPC-157 was discovered in gastric juice, making oral delivery uniquely effective for gut healing, ulcer repair, and intestinal inflammation reduction.' },
      { title: 'Needle-Free Convenience', body: 'No reconstitution, no injections, no refrigeration — simply take capsules daily for a practical healing protocol that fits any lifestyle.' },
      { title: 'Systemic Reach', body: 'Oral BPC-157 achieves systemic circulation beyond the gut, supporting tendon health, nerve repair, and anti-inflammatory effects throughout the body.' },
    ],
  },

  {
    slug: 'bpc-157-capsules-1000mcg',
    name: 'BPC-157 Capsules 1000mcg x30',
    tagline: 'High-dose oral BPC-157 for intensive gut and systemic repair',
    price: 59.99,
    category: 'Healing',
    tags: ['BPC-157', 'Capsules', 'Oral', 'High-Dose', 'Gut Healing'],
    image: 'https://phiogen.is/images/products/bpc-157-capsules-500mcg-x-60-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-capsules-500mcg-x-60-capsules?ref=PEPS',
    shortDescription: '30 capsules of 1000mcg BPC-157 — double-strength oral formula for intensive gut repair, acute GI conditions, and accelerated systemic recovery.',
    fullDescription: `**Double-Strength Oral BPC-157**

The 1000mcg capsule format delivers twice the per-dose concentration compared to standard 500mcg capsules, making it ideal for users who need intensive gut healing or prefer single-capsule dosing at higher therapeutic amounts. With 30 capsules, this provides a full month of daily high-dose therapy or two months of 500mcg dosing split from each capsule.

**When Higher Doses Are Warranted**

Research suggests higher doses of BPC-157 may accelerate healing timelines for acute gut injuries, severe leaky gut syndrome, post-antibiotic gut damage, or active inflammatory bowel conditions. The 1000mcg dose per capsule matches the higher end of commonly used oral protocols and reduces the need to take multiple capsules.

**Comparing the Formats**

Compared to the 500mcg x60 format, this 1000mcg x30 option suits users who prefer fewer capsules per dose or need a more concentrated hit for acute phases. Both formats provide the same total BPC-157 content (30mg), offering flexibility in how you structure your protocol.`,
    benefits: [
      'High-dose oral delivery for intensive GI healing',
      'Ideal for acute leaky gut, IBD, and post-antibiotic repair',
      'Single-capsule convenience at therapeutic 1mg dose',
      'Same total content as 500mcg x60 with simplified dosing',
      'Restores gut lining and reduces intestinal permeability',
      'Systemic anti-inflammatory and tissue repair effects',
    ],
    protocol: `**Dosing:**
- Acute gut healing: 1 capsule (1000mcg) daily on empty stomach
- Intensive protocol: 1 capsule twice daily for first 2 weeks
- Cycle: 30-day acute phase, reassess

**Timing:** Morning on empty stomach for maximum gut absorption`,
    synergies: ['bpc-157', 'tb-500', 'kpv-10mg', 'ghk-cu'],
    seoTitle: 'Buy BPC-157 Capsules 1000mcg x30 | High-Dose Oral BPC-157 | Gut Repair',
    deepDiveTitle: 'BPC-157 1000mcg Capsules: High-Dose Oral Therapy for Intensive Gut and Systemic Healing',
    highlights: [
      { title: '1mg Per Capsule', body: 'Each capsule delivers a full 1000mcg (1mg) of BPC-157 — the higher therapeutic range for acute gut conditions and intensive recovery phases.' },
      { title: '30-Day Acute Supply', body: 'Structured for a focused 30-day intensive healing cycle at one capsule daily, or 15 days at the maximum twice-daily protocol.' },
      { title: 'Simplified Protocol', body: 'One capsule covers the high-dose oral protocol without multiple pills — ideal for users who value simplicity in their supplement routine.' },
      { title: 'Same Total Dose', body: 'Contains 30mg of BPC-157 total — identical to the 500mcg x60 format, just restructured for higher per-dose delivery.' },
    ],
  },

  {
    slug: 'bpc-157-5mg',
    name: 'BPC-157 5mg',
    tagline: 'The original healing peptide — injectable BPC-157 for targeted tissue repair',
    price: 34.99,
    category: 'Healing',
    tags: ['BPC-157', 'Injectable', 'Healing', 'Tendon', 'Gut'],
    image: 'https://phiogen.is/images/products/bpc-157-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-10mg?ref=PEPS',
    shortDescription: 'Injectable BPC-157 5mg — the foundational healing peptide for tendon repair, gut healing, nerve regeneration, and anti-inflammatory support.',
    fullDescription: `**The Most Researched Healing Peptide**

Body Protection Compound-157 (BPC-157) is a 15-amino-acid peptide derived from a protein found in gastric juice. It has accumulated one of the largest bodies of preclinical research of any healing peptide, demonstrating regenerative effects on tendons, ligaments, muscles, the gut lining, peripheral nerves, and even brain tissue. The 5mg vial provides approximately 10–20 days of standard injectable dosing.

**Mechanism: The NO-cGMP Pathway**

BPC-157 exerts its healing effects primarily by upregulating nitric oxide synthase activity, promoting angiogenesis (new blood vessel growth), and modulating the growth hormone receptor system. This results in accelerated cellular proliferation, collagen synthesis, and tissue remodeling at sites of damage. Crucially, BPC-157 appears to work even in the presence of systemic NSAID use, making it useful for athletes who cannot avoid anti-inflammatory medications.

**Clinical Relevance**

The 5mg vial is the standard entry dose for BPC-157 protocols. It's commonly stacked with TB-500 for synergistic tissue healing or used standalone for isolated gut repair protocols. The injectable form provides superior bioavailability compared to oral capsules for systemic musculoskeletal applications.`,
    benefits: [
      'Accelerates tendon-to-bone healing and ligament repair',
      'Heals gastric ulcers and intestinal inflammation',
      'Promotes nerve regeneration and neuroprotection',
      'Increases angiogenesis in damaged tissue',
      'Reduces joint inflammation and supports cartilage integrity',
      'Works synergistically with TB-500 for comprehensive repair',
      'Effective even alongside NSAID use',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 250–500mcg once or twice daily
- Near injury site: subcutaneous injection preferred
- Systemic: inject in abdominal subcutaneous fat
- Cycle: 4–8 weeks on, 2–4 weeks off`,
    synergies: ['tb-500', 'ghk-cu', 'bpc-157-tb-500-blend-20mg', 'kpv-10mg'],
    seoTitle: 'Buy BPC-157 5mg | Injectable Healing Peptide | Tendon Repair & Gut Health',
    deepDiveTitle: 'BPC-157 5mg: The Complete Guide to the Most Versatile Healing Peptide',
    highlights: [
      { title: 'Tendon & Ligament Repair', body: 'BPC-157 is the most studied peptide for tendon-to-bone healing, significantly accelerating recovery from common sports injuries in animal models.' },
      { title: 'Gut-Native Origin', body: 'Derived from a gastric protein, BPC-157 has intrinsic affinity for GI tissue — making it uniquely effective for gut lining repair, ulcer healing, and IBD.' },
      { title: 'Angiogenic Action', body: 'Promotes new blood vessel formation at injury sites, a critical step in tissue repair that many conventional treatments fail to address.' },
      { title: 'Broad Spectrum Healing', body: 'From nerve regeneration to muscle repair to cardiovascular healing, BPC-157 demonstrates regenerative effects across nearly every tissue type studied.' },
    ],
  },

  {
    slug: 'bpc-157-20mg',
    name: 'BPC-157 20mg',
    tagline: 'High-volume BPC-157 for extended recovery cycles and research',
    price: 89.99,
    category: 'Healing',
    tags: ['BPC-157', 'Injectable', 'Healing', 'High-Dose', 'Extended Protocol'],
    image: 'https://phiogen.is/images/products/bpc-157-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-10mg?ref=PEPS',
    shortDescription: 'A 20mg vial of injectable BPC-157 — ideal for extended healing protocols, high-dose research applications, and users who prefer fewer reconstitutions.',
    fullDescription: `**Extended Protocol Supply**

The 20mg BPC-157 vial is designed for researchers and users who require a sustained, long-cycle approach to tissue healing. At standard dosing (250–500mcg twice daily), a single 20mg vial provides 20–40 days of continuous therapy without the need to reconstitute a new vial mid-protocol — ensuring consistent dosing and reducing preparation overhead.

**Superior Value for Long Cycles**

Compared to purchasing four 5mg vials, the 20mg format typically offers meaningful cost savings and operational simplicity. For chronic injuries, post-surgical recovery, or users running an 8-week healing cycle, the 20mg vial is the practical choice.

**Research Grade Consistency**

For those studying BPC-157's systemic effects across longer timeframes — cardiovascular protection, neuroprotection, or cumulative collagen synthesis — a single large vial eliminates batch variability that can occur when switching between vials mid-experiment.`,
    benefits: [
      '20–40 days of standard-dose BPC-157 in a single vial',
      'Cost-effective for extended 8-week healing cycles',
      'Consistent peptide concentration throughout entire protocol',
      'Ideal for chronic tendon, joint, and gut conditions',
      'Reduces reconstitution frequency and associated contamination risk',
      'Full spectrum BPC-157 benefits: tendon, gut, nerve, cardiovascular',
      'Suitable for both 250mcg and 500mcg twice-daily protocols',
    ],
    protocol: `**Reconstitution:** Add 4mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 250–500mcg once or twice daily
- Extended cycle: 8–12 weeks for chronic conditions
- High-dose acute: 500mcg twice daily for first 2 weeks, then taper

**Storage:** Refrigerate after reconstitution; use within 30 days`,
    synergies: ['tb-500', 'tb-500-20mg', 'ghk-cu', 'bpc-157-tb-500-blend-20mg'],
    seoTitle: 'Buy BPC-157 20mg | Extended Protocol BPC-157 | High-Dose Healing Peptide',
    deepDiveTitle: 'BPC-157 20mg: Maximum Supply for Comprehensive Healing Cycles',
    highlights: [
      { title: '20mg Single Vial', body: 'Four times the quantity of the standard 5mg vial — enough for a complete 4-8 week protocol without mid-cycle reconstitution interruptions.' },
      { title: 'Best Value per mg', body: 'At $89.99 for 20mg vs $34.99 for 5mg, the 20mg vial delivers significantly better cost-per-mg for committed long-cycle users.' },
      { title: 'Chronic Condition Focus', body: 'Designed for persistent injuries, post-surgical protocols, and research requiring continuous multi-week BPC-157 administration.' },
      { title: 'Reduced Batch Variance', body: 'Single-vial consistency eliminates any variability between vials mid-protocol — critical for precise research applications.' },
    ],
  },

  {
    slug: 'kpv-10mg',
    name: 'KPV 10mg',
    tagline: 'Anti-inflammatory tripeptide for gut healing and immune modulation',
    price: 49.99,
    category: 'Healing',
    tags: ['KPV', 'Anti-Inflammatory', 'Gut Healing', 'IBD', 'Immune'],
    image: 'https://phiogen.is/images/products/kpv-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/kpv-10mg?ref=PEPS',
    shortDescription: 'KPV (Lys-Pro-Val) is a naturally occurring C-terminal alpha-MSH tripeptide with potent anti-inflammatory properties targeting the gut lining and immune system.',
    fullDescription: `**Nature's Anti-Inflammatory Tripeptide**

KPV is a tripeptide (Lysine-Proline-Valine) that represents the active C-terminal fragment of alpha-melanocyte-stimulating hormone (α-MSH). It retains the anti-inflammatory properties of the full α-MSH molecule while being significantly smaller and more stable. KPV acts directly on intestinal epithelial cells and immune cells to reduce pro-inflammatory cytokine production, making it one of the most targeted peptides for gut-specific inflammation.

**Mechanism of Action**

KPV binds to melanocortin receptors (MC1R and MC3R) expressed on intestinal epithelial and immune cells. This binding suppresses NF-κB signaling — the master regulator of inflammatory pathways — reducing production of TNF-α, IL-6, and IL-1β. Crucially, KPV can penetrate into cells and interact with intracellular inflammatory mediators directly, a rare property for a peptide.

**Clinical Applications**

Research has demonstrated KPV's efficacy in models of colitis, Crohn's disease, and gut permeability dysfunction. It is increasingly studied for wound healing applications, skin inflammation, and as an adjunct to other healing peptides like BPC-157 for comprehensive GI repair protocols.`,
    benefits: [
      'Potent reduction of gut-specific inflammation via NF-κB suppression',
      'Heals intestinal epithelial barrier and reduces leaky gut',
      'Reduces pro-inflammatory cytokines TNF-α, IL-6, IL-1β',
      'Supports IBD, Crohn\'s, and ulcerative colitis management',
      'Penetrates cells for direct intracellular anti-inflammatory action',
      'Synergizes with BPC-157 for comprehensive gut repair',
      'Potential wound healing and skin inflammation applications',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (10,000mcg/mL).

**Dosing:**
- Gut inflammation: 100–500mcg twice daily subcutaneous or oral
- Oral route: dissolve in water and drink on empty stomach
- Acute flare: 500mcg twice daily for 2 weeks, then maintenance
- Cycle: 4–8 weeks`,
    synergies: ['bpc-157', 'bpc-157-capsules', 'tb-500', 'll-37'],
    seoTitle: 'Buy KPV 10mg | Anti-Inflammatory Peptide | Gut Healing & IBD Support',
    deepDiveTitle: 'KPV Peptide: The Tripeptide Targeting Gut Inflammation at the Cellular Level',
    highlights: [
      { title: 'NF-κB Suppression', body: 'KPV directly inhibits NF-κB, the master switch for inflammatory gene expression — delivering targeted anti-inflammatory action without systemic immune suppression.' },
      { title: 'Gut Epithelial Affinity', body: 'Uniquely effective in intestinal tissue where it reduces barrier permeability and heals the epithelial lining damaged by IBD, NSAIDs, and dysbiosis.' },
      { title: 'Intracellular Penetration', body: 'Unlike most peptides, KPV can enter cells directly to interact with intracellular inflammatory mediators — a mechanism that amplifies its anti-inflammatory potency.' },
      { title: 'α-MSH Fragment', body: 'Derived from the C-terminus of alpha-MSH, KPV inherits the hormone\'s core anti-inflammatory activity in a stable, targeted tripeptide form.' },
    ],
  },

  {
    slug: 'll-37',
    name: 'LL-37 5mg',
    tagline: 'Human host defense peptide with antimicrobial and immunomodulatory properties',
    price: 69.99,
    category: 'Healing',
    tags: ['LL-37', 'Antimicrobial', 'Immune', 'Host Defense', 'Wound Healing'],
    image: 'https://phiogen.is/images/products/ll-37-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ll-37-10mg?ref=PEPS',
    shortDescription: 'LL-37 is the only human cathelicidin — a host defense peptide that kills bacteria, modulates immune responses, and promotes wound healing and angiogenesis.',
    fullDescription: `**The Body's Own Defense Molecule**

LL-37 is a 37-amino-acid peptide that is the sole human cathelicidin, part of the innate immune system's first-line defense against pathogens. Named for its leucine-leucine (LL) N-terminus and 37-amino-acid length, it is naturally produced by neutrophils, macrophages, and epithelial cells. Beyond its antimicrobial activity, LL-37 has emerged as a potent regulator of immune responses, wound healing, and angiogenesis.

**Multi-Modal Mechanism**

LL-37 disrupts bacterial membranes through electrostatic interactions, killing gram-positive and gram-negative bacteria, fungi, and some viruses. Simultaneously, it acts as an immune modulator — activating immune cells, promoting macrophage recruitment, and inducing anti-inflammatory signaling in chronic wound environments. It also stimulates keratinocyte and endothelial cell migration, accelerating wound closure and re-epithelialization.

**Research and Clinical Potential**

LL-37 deficiency has been linked to chronic non-healing wounds, recurrent skin infections, and inflammatory conditions. Research is investigating its therapeutic applications in chronic wound management, antibiotic-resistant infections, lung conditions, and even cancer immunotherapy due to its ability to activate dendritic cells.`,
    benefits: [
      'Broad-spectrum antimicrobial activity against bacteria, fungi, and viruses',
      'Accelerates wound closure and re-epithelialization',
      'Modulates innate immune response and macrophage recruitment',
      'Promotes angiogenesis in chronic wound beds',
      'Anti-biofilm activity against antibiotic-resistant organisms',
      'Reduces chronic inflammation in wound environments',
      'Stimulates keratinocyte migration for tissue repair',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Wound healing: 100–250mcg daily subcutaneous near wound
- Immune support: 100mcg subcutaneous daily
- Cycle: 4–6 weeks

**Note:** LL-37 has broad biological activity; start at lower doses`,
    synergies: ['bpc-157', 'kpv-10mg', 'ghk-cu', 'tb-500'],
    seoTitle: 'Buy LL-37 5mg | Human Cathelicidin Peptide | Antimicrobial & Wound Healing',
    deepDiveTitle: 'LL-37: The Only Human Cathelicidin and Its Role in Immune Defense and Tissue Repair',
    highlights: [
      { title: 'Sole Human Cathelicidin', body: 'LL-37 is the only cathelicidin expressed in humans — making it a unique and irreplaceable component of innate immune defense and wound repair biology.' },
      { title: 'Membrane-Disrupting Antimicrobial', body: 'Kills bacteria by physically disrupting their membranes through electrostatic interaction — effective against antibiotic-resistant strains that conventional antibiotics cannot reach.' },
      { title: 'Wound Healing Activator', body: 'Stimulates keratinocyte and endothelial cell migration, macrophage recruitment, and angiogenesis — all critical processes for closing chronic non-healing wounds.' },
      { title: 'Immune Modulator', body: 'Beyond killing pathogens, LL-37 orchestrates the entire innate immune response, activating dendritic cells and regulating the balance between pro- and anti-inflammatory signaling.' },
    ],
  },

  {
    slug: 'pentadecapeptide-bpc',
    name: 'Pentadecapeptide BPC 10mg',
    tagline: 'Stable oral/injectable BPC variant with full gut and systemic healing activity',
    price: 59.99,
    category: 'Healing',
    tags: ['BPC', 'Pentadecapeptide', 'Healing', 'Gut', 'Stable'],
    image: 'https://phiogen.is/images/products/bpc-157-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-10mg?ref=PEPS',
    shortDescription: 'Pentadecapeptide BPC is a stable, research-verified form of the 15-amino-acid body protection compound — active via injectable and oral routes for comprehensive healing.',
    fullDescription: `**The Research-Verified BPC Sequence**

Pentadecapeptide BPC refers to the verified 15-amino-acid sequence of Body Protection Compound, the same sequence originally isolated from gastric juice and studied extensively across more than 500 publications. This designation emphasizes the verified peptide identity and purity, confirming the exact research sequence that has been used in virtually all BPC-157 studies to date.

**Stability and Bioavailability Advantages**

The pentadecapeptide BPC sequence demonstrates notable resistance to enzymatic degradation in both gastric acid and systemic circulation, which is the basis for its effectiveness via both oral and injectable routes. This stability distinguishes it from many peptides that require injection to preserve activity, offering flexibility in administration based on therapeutic goals.

**Therapeutic Applications**

Applications span the full range of BPC-157 research: tendon and ligament repair, gut lining restoration, nerve healing, cardiovascular protection, and modulation of the HPA axis for stress-related conditions. The 10mg vial size is particularly useful for researchers running longer protocols or stacking with other healing peptides.`,
    benefits: [
      'Full-spectrum BPC-157 healing activity in verified sequence form',
      'Stable in gastric acid — effective via oral and injectable routes',
      'Tendon, ligament, muscle, and bone healing acceleration',
      'Gut lining restoration and intestinal anti-inflammatory effects',
      'Neuroprotective and nerve regeneration properties',
      'HPA axis modulation for stress and cortisol balance',
      'Larger 10mg vial for extended protocols',
    ],
    protocol: `**Injectable:** Reconstitute with 2mL bacteriostatic water (5,000mcg/mL). Dose 250–500mcg subcutaneously near injury or in abdominal fat.
**Oral:** Dissolve portion in water and drink on empty stomach.

**Cycle:** 4–8 weeks, 2–4 weeks off`,
    synergies: ['tb-500', 'bpc-157', 'kpv-10mg', 'ghk-cu'],
    seoTitle: 'Buy Pentadecapeptide BPC 10mg | Research BPC Peptide | Gut & Tissue Healing',
    deepDiveTitle: 'Pentadecapeptide BPC: The Verified Research Sequence Behind 500+ BPC-157 Studies',
    highlights: [
      { title: 'Research-Verified Sequence', body: 'Pentadecapeptide BPC is the exact 15-amino-acid sequence used in the scientific literature — ensuring your results match what the research predicts.' },
      { title: 'Dual-Route Activity', body: 'Rare stability in gastric acid makes this peptide effective via both oral and injectable routes — allowing protocol flexibility without sacrificing bioavailability.' },
      { title: '10mg Research Volume', body: 'A larger vial format supporting extended multi-week protocols or research applications requiring consistent dosing over time.' },
      { title: 'Comprehensive Healing', body: 'Covers gut, tendon, nerve, and cardiovascular repair in a single peptide — the most versatile healing agent in the research peptide space.' },
    ],
  },

  {
    slug: 'pt-141',
    name: 'PT-141 (Bremelanotide) 10mg',
    tagline: 'Melanocortin-based peptide for sexual health and libido enhancement',
    price: 69.99,
    category: 'Healing',
    tags: ['PT-141', 'Bremelanotide', 'Sexual Health', 'Libido', 'Melanocortin'],
    image: 'https://phiogen.is/images/products/pt-141-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/pt-141-10mg?ref=PEPS',
    shortDescription: 'PT-141 (Bremelanotide) is an FDA-referenced melanocortin receptor agonist that enhances sexual arousal and libido in both men and women through central nervous system pathways.',
    fullDescription: `**Central Pathway Sexual Enhancement**

PT-141 (Bremelanotide) is unique among sexual health compounds because it acts through the central nervous system rather than through cardiovascular mechanisms. By activating melanocortin receptors MC3R and MC4R in the hypothalamus, PT-141 directly triggers sexual arousal pathways — making it effective regardless of vascular health status, unlike PDE5 inhibitors such as sildenafil.

**Mechanism: Hypothalamic Activation**

MC3R and MC4R receptors in the hypothalamus regulate sexual behavior, appetite, and energy balance. PT-141 activation of these receptors initiates a cascade of dopaminergic and oxytocinergic signaling that produces genuine neurological arousal. Clinical studies confirmed this mechanism in both male and female subjects, leading to FDA approval of a nasal spray version (Vyleesi) for female hypoactive sexual desire disorder.

**Applications for Men and Women**

In men, PT-141 enhances erectile function through a mechanism entirely separate from vascular tone, providing benefit even when PDE5 inhibitors are contraindicated or insufficient. In women, it increases genital arousal, lubrication, and the desire for sexual activity. The 10mg research vial provides approximately 10–20 uses at standard doses.`,
    benefits: [
      'Enhances sexual arousal in both men and women via CNS pathways',
      'Activates hypothalamic melanocortin receptors for neurological arousal',
      'Effective for sexual dysfunction where vascular treatments fail',
      'FDA-referenced mechanism (approved as Vyleesi for HSDD)',
      'Increases dopaminergic and oxytocinergic signaling',
      'Does not require sexual stimulation to initiate effect',
      'Complements other performance peptides in a stack',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (10,000mcg/mL).

**Dosing:**
- Standard: 0.5–1mg (500–1000mcg) subcutaneous 1–2 hours before activity
- First use: start at 0.5mg to assess tolerance
- Frequency: as needed, not daily continuous dosing

**Common side effects:** Transient nausea, flushing — typically resolve within 2 hours`,
    synergies: ['tb-500', 'bpc-157', 'nad-100mg', 'ghk-cu'],
    seoTitle: 'Buy PT-141 Bremelanotide 10mg | Sexual Health Peptide | Libido Enhancement',
    deepDiveTitle: 'PT-141 Bremelanotide: The CNS Sexual Arousal Peptide With FDA-Referenced Mechanism',
    highlights: [
      { title: 'CNS, Not Vascular', body: 'Unlike Viagra or Cialis, PT-141 works through brain receptors — activating hypothalamic arousal centers directly, independent of blood pressure or vascular health.' },
      { title: 'FDA-Referenced Science', body: 'The same mechanism underlies Vyleesi (bremelanotide nasal spray), FDA-approved for female HSDD — validating the melanocortin pathway\'s role in sexual arousal.' },
      { title: 'Effective for Both Sexes', body: 'Clinical data supports PT-141\'s efficacy in both men and women — increasing desire, arousal, and satisfaction through the same central pathway.' },
      { title: 'As-Needed Dosing', body: 'Used 1–2 hours before activity rather than daily — providing targeted enhancement without the hormonal disruption of continuous treatment protocols.' },
    ],
  },

  {
    slug: 'selank',
    name: 'Selank 5mg',
    tagline: 'Russian-developed anxiolytic peptide for anxiety relief and cognitive enhancement',
    price: 59.99,
    category: 'Cognitive',
    tags: ['Selank', 'Anxiety', 'Nootropic', 'BDNF', 'Cognitive'],
    image: 'https://phiogen.is/images/products/selank-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/selank-10mg?ref=PEPS',
    shortDescription: 'Selank is a synthetic heptapeptide anxiolytic developed by the Russian Academy of Sciences — reduces anxiety without sedation while enhancing BDNF and cognitive function.',
    fullDescription: `**Russia's Non-Sedating Anxiolytic Peptide**

Selank was developed at the Institute of Molecular Genetics in Russia as a synthetic analog of the endogenous immunomodulatory peptide tuftsin. Approved as a pharmaceutical in Russia for anxiety disorders, it has gained international attention as a research peptide with a unique profile: anxiolytic effects comparable to benzodiazepines without sedation, addiction potential, or cognitive impairment.

**Mechanism: GABA and BDNF Modulation**

Selank modulates GABAergic neurotransmission — the primary inhibitory system in the brain — without directly binding to GABA-A receptors the way benzodiazepines do. This indirect modulation produces anxiety reduction without the receptor downregulation that leads to tolerance and dependence. Simultaneously, Selank increases BDNF (brain-derived neurotrophic factor) levels, which promotes neuroplasticity, memory consolidation, and cognitive enhancement.

**Cognitive and Anxiolytic Applications**

Users report reduced anxiety, improved stress resilience, enhanced focus, and better memory retention — a combination rarely achieved by pharmaceutical anxiolytics. Selank is particularly popular among high-performance individuals who need anxiety management without the mental fog associated with conventional treatments.`,
    benefits: [
      'Reduces anxiety and stress without sedation or cognitive impairment',
      'No addiction potential or withdrawal effects',
      'Increases BDNF for neuroplasticity and memory enhancement',
      'Modulates GABAergic system without receptor downregulation',
      'Improves focus, attention, and cognitive performance under stress',
      'Immune-modulating properties via tuftsin-analog mechanism',
      'Approved pharmaceutical in Russia with clinical track record',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Anxiety/cognitive: 250–500mcg intranasally or subcutaneously once or twice daily
- Intranasal: dilute in saline for nasal spray administration
- Cycle: 2–4 weeks on, 1–2 weeks off
- Can be used acutely for stress events`,
    synergies: ['semax', 'dsip', 'dihexa', 'cerebrolysin'],
    seoTitle: 'Buy Selank 5mg | Anxiolytic Nootropic Peptide | BDNF & Anxiety Relief',
    deepDiveTitle: 'Selank: The Non-Addictive Anxiolytic Peptide That Enhances Rather Than Impairs Cognition',
    highlights: [
      { title: 'Zero Sedation Profile', body: 'Unlike benzodiazepines, Selank reduces anxiety without causing drowsiness, cognitive fog, or impaired reaction time — allowing normal function during treatment.' },
      { title: 'BDNF Upregulation', body: 'Selank increases brain-derived neurotrophic factor, promoting neuroplasticity, long-term potentiation, and memory formation — a genuine cognitive enhancer alongside its anxiolytic effects.' },
      { title: 'No Dependence Risk', body: 'Approved clinical use in Russia with no documented addiction, tolerance, or withdrawal — a fundamental advantage over conventional GABAergic anxiolytics.' },
      { title: 'Tuftsin Analog', body: 'Derived from tuftsin, an endogenous immunomodulatory peptide, Selank also supports immune function — addressing the immunosuppressive effects of chronic stress.' },
    ],
  },

  {
    slug: 'semax',
    name: 'Semax 10mg',
    tagline: 'Neuroprotective ACTH-analog peptide for cognitive enhancement and brain recovery',
    price: 59.99,
    category: 'Cognitive',
    tags: ['Semax', 'Nootropic', 'BDNF', 'Neuroprotective', 'Cognitive'],
    image: 'https://phiogen.is/images/products/n-acetyl-semax-amidate-30mg.png',
    affiliateUrl: 'https://phiogen.is/products/n-acetyl-semax-amidate-30mg?ref=PEPS',
    shortDescription: 'Semax is a synthetic ACTH(4-7) analog developed in Russia for cognitive enhancement, neuroprotection, and recovery from stroke or brain injury.',
    fullDescription: `**ACTH-Derived Neuroprotective Peptide**

Semax is a heptapeptide analog of ACTH(4-10) developed by the Institute of Molecular Genetics in Moscow. Approved in Russia and Ukraine for stroke rehabilitation, brain trauma recovery, and cognitive disorders, it has emerged as one of the most potent nootropic peptides available for research. Semax dramatically increases BDNF, NGF, and other neurotrophic factors while providing neuroprotection against ischemic damage.

**Mechanism: Neurotrophic Factor Cascade**

Semax activates melanocortin receptors and triggers a cascade that upregulates BDNF (brain-derived neurotrophic factor) and NGF (nerve growth factor) — the two most important proteins for neuronal survival, synaptic plasticity, and neurogenesis. This produces both acute cognitive enhancement (improved focus, memory, processing speed) and long-term neuroprotective effects that support recovery from brain injury and age-related neurodegeneration.

**Cognitive and Medical Applications**

Clinically, Semax has been used for stroke rehabilitation, ADHD-like attention deficits, memory disorders, and optic nerve atrophy. In the research and performance community, it's prized for its ability to enhance cognitive performance under stress, accelerate learning, and protect the brain from neurotoxic insults.`,
    benefits: [
      'Dramatically increases BDNF and NGF for neuroplasticity',
      'Enhances memory formation, recall, and learning speed',
      'Neuroprotective against ischemic and traumatic brain injury',
      'Improves attention, focus, and executive function',
      'Approved clinical use for stroke rehabilitation in Russia',
      'Anti-anxiety and anti-depressant secondary effects',
      'Supports recovery from concussion and traumatic brain injury',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (10,000mcg/mL).

**Dosing:**
- Cognitive enhancement: 200–600mcg intranasally once or twice daily
- Neuroprotection/recovery: 600mcg–1mg daily
- Cycle: 2–4 weeks on, 1–2 weeks off
- Intranasal route preferred for direct CNS delivery`,
    synergies: ['selank', 'dihexa', 'cerebrolysin', 'dsip'],
    seoTitle: 'Buy Semax 10mg | Nootropic Peptide | BDNF Upregulation & Neuroprotection',
    deepDiveTitle: 'Semax: ACTH-Analog Neuropeptide That Transforms Cognitive Performance Through BDNF',
    highlights: [
      { title: 'BDNF Amplification', body: 'Semax produces some of the largest BDNF increases of any known compound — the neurotrophic factor that drives neuroplasticity, learning, and neuronal survival.' },
      { title: 'Stroke Rehabilitation', body: 'Clinically approved in Russia for stroke recovery — Semax\'s neuroprotective mechanism reduces ischemic damage and accelerates functional brain recovery.' },
      { title: 'Intranasal CNS Delivery', body: 'Nasal administration delivers Semax directly to the olfactory epithelium and into the CNS, bypassing the blood-brain barrier for maximum neurological bioavailability.' },
      { title: 'Dual Action: Acute + Chronic', body: 'Provides immediate cognitive enhancement with the first dose while simultaneously building long-term neuroplasticity through sustained neurotrophic factor elevation.' },
    ],
  },

  {
    slug: 'tb-500-5mg',
    name: 'TB-500 5mg',
    tagline: 'Thymosin Beta-4 for systemic tissue repair and anti-inflammatory recovery',
    price: 39.99,
    category: 'Healing',
    tags: ['TB-500', 'Thymosin Beta-4', 'Healing', 'Recovery', 'Anti-Inflammatory'],
    image: 'https://phiogen.is/images/products/tb-500-thymosin-beta-4-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/tb-500-thymosin-beta-4-5mg?ref=PEPS',
    shortDescription: 'TB-500 (Thymosin Beta-4) 5mg — the systemic tissue repair peptide that promotes actin regulation, cell migration, and anti-inflammatory healing throughout the body.',
    fullDescription: `**Systemic Tissue Repair Through Actin Regulation**

TB-500, the synthetic form of Thymosin Beta-4 (Tβ4), is a 43-amino-acid peptide that regulates cellular actin — the structural protein fundamental to cell migration, proliferation, and differentiation. By sequestering G-actin and promoting actin polymerization, TB-500 facilitates the movement of cells to injury sites, accelerating tissue repair in muscle, tendon, ligament, skin, and cardiac tissue systemically.

**Mechanism: Cell Migration and Angiogenesis**

TB-500's primary mechanism involves upregulating actin-binding proteins that drive cell migration, and activating VEGF (vascular endothelial growth factor) for angiogenesis. This combination ensures that both the cells needed for repair and the blood supply to support them arrive at injury sites rapidly. TB-500 also modulates metalloproteinases for extracellular matrix remodeling — essential for restoring tissue architecture.

**Complementary to BPC-157**

While BPC-157 operates primarily through local NO-cGMP pathways, TB-500 acts systemically, making the two peptides highly complementary. TB-500 is particularly effective for injuries at a distance from injection site, cardiovascular tissue repair, and reducing systemic fibrosis following injury.`,
    benefits: [
      'Systemic tissue repair through actin regulation and cell migration',
      'Promotes angiogenesis via VEGF upregulation',
      'Reduces inflammation and fibrosis in healing tissue',
      'Accelerates muscle, tendon, and ligament recovery',
      'Supports cardiovascular tissue repair',
      'Complements BPC-157 for comprehensive injury protocols',
      'Effective even at injection sites distant from the injury',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Loading phase: 2.0–2.5mg twice weekly for 4–6 weeks
- Maintenance: 1.0–2.0mg twice monthly
- Injection: subcutaneous; systemic action regardless of site

**Stack:** Combine with BPC-157 for synergistic healing`,
    synergies: ['bpc-157', 'bpc-157-tb-500-blend-20mg', 'ghk-cu', 'tb4-frag'],
    seoTitle: 'Buy TB-500 5mg | Thymosin Beta-4 Peptide | Systemic Tissue Repair',
    deepDiveTitle: 'TB-500 Thymosin Beta-4: Systemic Healing Through Actin Regulation and Cell Migration',
    highlights: [
      { title: 'Systemic Action', body: 'Unlike locally-acting peptides, TB-500 works throughout the entire body regardless of injection site — ideal for widespread injury, multiple areas, or inaccessible deep tissue.' },
      { title: 'Actin Regulation', body: 'By modulating the actin cytoskeleton, TB-500 enables the cell migration critical to wound healing, tissue remodeling, and new vessel formation at injury sites.' },
      { title: 'VEGF-Mediated Angiogenesis', body: 'Activates VEGF signaling to grow new capillaries into damaged tissue, ensuring adequate blood supply for sustained healing and regeneration.' },
      { title: 'BPC-157 Synergy', body: 'TB-500\'s systemic mechanism perfectly complements BPC-157\'s local action — together they address every phase of injury repair from initial inflammation through final remodeling.' },
    ],
  },

  {
    slug: 'tb-500-20mg',
    name: 'TB-500 20mg',
    tagline: 'High-volume Thymosin Beta-4 for extended recovery protocols',
    price: 99.99,
    category: 'Healing',
    tags: ['TB-500', 'Thymosin Beta-4', 'Healing', 'High-Dose', 'Extended Protocol'],
    image: 'https://phiogen.is/images/products/tb-500-thymosin-beta-4-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/tb-500-thymosin-beta-4-20mg?ref=PEPS',
    shortDescription: 'TB-500 (Thymosin Beta-4) 20mg — maximum supply for extended healing cycles, loading protocols, and research requiring sustained systemic tissue repair.',
    fullDescription: `**Extended Supply for Comprehensive Recovery**

The TB-500 20mg vial is designed for users committed to a full therapeutic loading and maintenance protocol or for research applications requiring multiple cycles. At the standard loading dose of 2–2.5mg twice weekly, a 20mg vial provides 4–5 weeks of loading phase supply — matching exactly with the typical protocol structure before transitioning to a maintenance schedule.

**Loading + Maintenance Protocol**

TB-500's established protocol involves a loading phase at higher doses to saturate receptors and initiate robust tissue repair, followed by lower-frequency maintenance dosing. The 20mg vial is ideally sized for the entire loading phase or for covering both loading and early maintenance in a single purchase.

**Cost Efficiency and Research Value**

For researchers running multiple TB-500 cycles or studying its cardiovascular, muscle, and systemic effects longitudinally, the 20mg vial offers superior cost-per-mg value and eliminates mid-protocol reconstitution. It's also the practical choice for users who require TB-500 as part of an ongoing post-surgical or chronic injury protocol.`,
    benefits: [
      'Full loading phase supply in a single vial',
      'Superior cost-per-mg for committed healing protocols',
      'Eliminates mid-protocol reconstitution and batch variance',
      'Ideal for post-surgical and chronic injury management',
      'Systemic tissue repair across all connective tissue types',
      'Full TB-500 benefits: muscle, tendon, cardiovascular, skin',
      'Research-grade consistency for longitudinal studies',
    ],
    protocol: `**Reconstitution:** Add 4mL bacteriostatic water (5,000mcg/mL).

**Loading phase:** 2.0–2.5mg twice weekly for 4–6 weeks
**Maintenance:** 1.0–2.0mg twice monthly ongoing

**Storage:** Refrigerate; use within 30 days of reconstitution`,
    synergies: ['bpc-157-20mg', 'bpc-157-tb-500-blend-20mg', 'ghk-cu', 'tb4-frag'],
    seoTitle: 'Buy TB-500 20mg | High-Volume Thymosin Beta-4 | Extended Healing Protocol',
    deepDiveTitle: 'TB-500 20mg: Maximum Thymosin Beta-4 Supply for Full Loading and Maintenance Protocols',
    highlights: [
      { title: '20mg Single Vial', body: 'A full loading phase supply in one vial — no mid-protocol disruption, no batch variance, and a straightforward path through the complete loading schedule.' },
      { title: 'Protocol-Matched Volume', body: 'At 2.5mg twice weekly, 20mg covers exactly 4 weeks of loading phase — perfectly matched to the established TB-500 healing protocol structure.' },
      { title: 'Best Value per mg', body: 'Significant cost savings versus purchasing multiple 5mg vials — making the 20mg format the rational choice for any protocol lasting more than 2 weeks.' },
      { title: 'Chronic Condition Support', body: 'For post-surgical recovery, persistent tendinopathy, or cardiovascular tissue repair, the 20mg vial enables the sustained protocol that chronic conditions require.' },
    ],
  },

  {
    slug: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1 5mg',
    tagline: 'Immune-regulating thymic peptide for immune function and chronic infection support',
    price: 79.99,
    category: 'Healing',
    tags: ['Thymosin Alpha-1', 'Immune', 'Antiviral', 'Thymus', 'Immune Modulation'],
    image: 'https://phiogen.is/images/products/thymosin-alpha-1-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/thymosin-alpha-1-5mg?ref=PEPS',
    shortDescription: 'Thymosin Alpha-1 (Tα1) is an endogenous thymic peptide that modulates T-cell function, enhances antiviral immunity, and has FDA-approved applications in cancer and hepatitis treatment.',
    fullDescription: `**The Thymus-Derived Immune Regulator**

Thymosin Alpha-1 is a 28-amino-acid peptide naturally secreted by the thymus gland that plays a central role in T-cell maturation and immune system regulation. First isolated in the 1970s by Allan Goldstein, it has since been approved (as Zadaxin) in over 35 countries for treatment of hepatitis B, hepatitis C, and as an adjunct in cancer chemotherapy. Its unique mechanism of immune modulation rather than simple stimulation makes it valuable for both immunodeficient and autoimmune conditions.

**Mechanism: T-Cell Maturation and Cytokine Regulation**

Tα1 acts on thymic epithelial cells and directly on T-cell precursors to promote T-cell differentiation, particularly the development of Th1 (cell-mediated) immune responses. It upregulates MHC class I expression, enhances cytotoxic T-lymphocyte activity, and promotes dendritic cell maturation — while simultaneously suppressing pro-inflammatory Th2 responses that drive autoimmunity. This bidirectional modulation is its defining characteristic.

**Research and Clinical Applications**

Beyond viral hepatitis and cancer adjunct therapy, research supports Tα1 applications in chronic fatigue syndrome, HIV, sepsis, vaccine enhancement, and age-related immune decline. Its thymic origin makes it particularly relevant as thymic involution with age drives the immune senescence associated with increased infection susceptibility and cancer risk.`,
    benefits: [
      'Enhances T-cell maturation and cytotoxic lymphocyte activity',
      'Approved in 35+ countries for hepatitis B, C, and cancer adjunct therapy',
      'Modulates immune response bidirectionally — activates deficient, calms overactive',
      'Antiviral activity against multiple viral pathogens',
      'Reduces age-related immune decline (immunosenescence)',
      'Promotes dendritic cell maturation for adaptive immunity',
      'Synergizes with vaccines to enhance antibody response',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Immune enhancement: 0.8–1.6mg subcutaneous twice weekly
- Acute infection: 1.6mg daily for 1–2 weeks
- Chronic protocol: 1.6mg twice weekly for 6–12 months
- Vaccine enhancement: 1.6mg on day of and day after vaccination`,
    synergies: ['thymalin', 'epithalon', 'ghk-cu', 'll-37'],
    seoTitle: 'Buy Thymosin Alpha-1 5mg | Immune Modulation Peptide | T-Cell Enhancement',
    deepDiveTitle: 'Thymosin Alpha-1: The Thymic Peptide Bridging Immunodeficiency and Autoimmunity Research',
    highlights: [
      { title: 'Approved in 35+ Countries', body: 'Thymosin Alpha-1 (Zadaxin) has genuine pharmaceutical approval for hepatitis and cancer applications — one of the few research peptides with a direct clinical counterpart.' },
      { title: 'Bidirectional Immune Modulation', body: 'Activates depressed immune responses while calming overactive autoimmune pathways — a unique regulatory action that distinguishes it from conventional immune stimulants.' },
      { title: 'Thymic Origin', body: 'Naturally produced by the thymus, Tα1 addresses the root cause of age-related immune decline — compensating for thymic involution that begins in the mid-20s.' },
      { title: 'Vaccine Adjuvant', body: 'Clinical evidence shows Tα1 significantly enhances antibody response when administered alongside vaccines — a practical immune optimization application.' },
    ],
  },

  {
    slug: 'tb4-frag',
    name: 'TB4-Frag 2mg',
    tagline: 'Active TB-500 fragment for targeted repair without full Tβ4 activity',
    price: 49.99,
    category: 'Healing',
    tags: ['TB4-Frag', 'Thymosin Beta-4 Fragment', 'Healing', 'Actin', 'Recovery'],
    image: 'https://phiogen.is/images/products/tb4-frag-2mg.png',
    affiliateUrl: 'https://phiogen.is/products/tb4-frag-2mg?ref=PEPS',
    shortDescription: 'TB4-Frag is the active actin-binding fragment of Thymosin Beta-4, providing targeted tissue repair and anti-inflammatory activity at lower cost than full TB-500.',
    fullDescription: `**The Active Core of Thymosin Beta-4**

TB4-Frag is the 17-amino-acid active fragment of Thymosin Beta-4 that contains the actin-binding sequence (LKKTETQ) responsible for most of TB-500's regenerative activity. Research has identified this fragment as the minimal sequence sufficient for actin sequestration, cell migration promotion, and anti-inflammatory signaling — providing a more targeted and cost-effective alternative to full-length TB-500 for some applications.

**Mechanism: Actin Sequestration**

The LKKTETQ sequence in TB4-Frag binds G-actin with high affinity, preventing its incorporation into filaments in resting cells while making it available for rapid polymerization during cell migration. This dynamic regulation drives the coordinated cell movement needed for wound healing, angiogenesis, and tissue remodeling. TB4-Frag also reduces TNF-alpha-induced apoptosis in injured cells.

**When to Choose TB4-Frag**

TB4-Frag is ideal for users who want targeted actin-mediated healing at a lower dose and cost, or for stacking with full TB-500 to amplify the active fragment concentration during intensive healing cycles. It's particularly popular for localized joint and soft tissue injuries where systemic distribution is less critical.`,
    benefits: [
      'Contains the active LKKTETQ actin-binding sequence of TB-500',
      'Promotes cell migration and wound healing at targeted sites',
      'Reduces TNF-alpha-induced cell apoptosis at injury sites',
      'Anti-inflammatory activity via cytokine modulation',
      'More cost-effective per active unit than full-length TB-500',
      'Ideal for stacking with full TB-500 for amplified effect',
      'Supports angiogenesis and extracellular matrix remodeling',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (2,000mcg/mL).

**Dosing:**
- Standard: 300–500mcg subcutaneous once or twice weekly
- Stacked with TB-500: reduce both doses by 30%
- Cycle: 4–6 weeks

**Route:** Subcutaneous; near injury site for local effect`,
    synergies: ['tb-500', 'bpc-157', 'bpc-157-tb-500-blend-20mg', 'ghk-cu'],
    seoTitle: 'Buy TB4-Frag 2mg | Thymosin Beta-4 Active Fragment | Targeted Tissue Repair',
    deepDiveTitle: 'TB4-Frag: The Minimal Active Sequence of Thymosin Beta-4 for Targeted Healing',
    highlights: [
      { title: 'Active LKKTETQ Sequence', body: 'Contains only the minimal actin-binding sequence responsible for TB-500\'s core healing activity — concentrated potency without extraneous peptide mass.' },
      { title: 'Cost-Effective Alternative', body: 'Delivers the critical actin-sequestration mechanism at a lower cost per active dose than full-length TB-500 — practical for budget-conscious healing protocols.' },
      { title: 'Stackable with TB-500', body: 'Synergistically amplifies TB-500 activity when co-administered, allowing users to increase active fragment concentration without proportionally increasing cost.' },
      { title: 'Anti-Apoptotic Action', body: 'Directly reduces TNF-alpha-induced cell death at injury sites — protecting viable tissue adjacent to damage and preserving the cellular architecture needed for healing.' },
    ],
  },

  {
    slug: 'dsip',
    name: 'DSIP 5mg',
    tagline: 'Delta Sleep-Inducing Peptide for deep sleep restoration and stress hormone regulation',
    price: 49.99,
    category: 'Cognitive',
    tags: ['DSIP', 'Sleep', 'Recovery', 'Cortisol', 'Delta Sleep'],
    image: 'https://phiogen.is/images/products/dsip-delta-sleep-inducing-peptide-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/dsip-delta-sleep-inducing-peptide-5mg?ref=PEPS',
    shortDescription: 'DSIP (Delta Sleep-Inducing Peptide) is a hypothalamic nonapeptide that promotes deep slow-wave sleep, regulates cortisol rhythms, and enhances recovery-critical sleep architecture.',
    fullDescription: `**The Deep Sleep Peptide**

Delta Sleep-Inducing Peptide (DSIP) was first isolated from the cerebral venous blood of rabbits in a state of electrically-induced delta sleep. This nonapeptide (9 amino acids) naturally promotes the generation of slow-wave (delta wave) sleep — the deepest, most restorative phase of the sleep cycle during which GH secretion peaks, tissue repair accelerates, and memory consolidation occurs. DSIP has since been found in the hypothalamus, limbic system, and peripheral tissues.

**Mechanism: Sleep Architecture and HPA Axis**

DSIP's primary mechanism involves modulating the release of several pituitary hormones and neurotransmitters to shift sleep architecture toward delta wave dominance. It also regulates the hypothalamic-pituitary-adrenal (HPA) axis — normalizing cortisol rhythms, reducing stress-induced cortisol elevation, and supporting the circadian release of LH and GH that characterizes healthy sleep. This HPA modulation extends its benefits beyond sleep into daytime stress regulation.

**Recovery and Performance Applications**

Athletes and high-performers use DSIP to restore sleep quality degraded by training stress, travel, or work demands. Improved deep sleep translates directly to faster muscle recovery, higher GH secretion, sharper cognition the following day, and reduced systemic inflammation. DSIP also shows promise in managing pain syndromes, alcohol withdrawal, and age-related sleep degradation.`,
    benefits: [
      'Promotes delta wave (deep sleep) generation and sleep architecture',
      'Regulates cortisol rhythms via HPA axis normalization',
      'Enhances growth hormone secretion during sleep',
      'Improves sleep quality without next-day sedation',
      'Accelerates athletic recovery through optimized deep sleep',
      'Reduces stress-induced cortisol elevation',
      'Supports circadian rhythm normalization',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Sleep enhancement: 100–300mcg subcutaneous 20–30 minutes before bed
- Cortisol regulation: 100mcg in the evening
- Cycle: 2–4 weeks on, 1 week off

**Note:** Effects are most pronounced on the first few nights of use`,
    synergies: ['selank', 'semax', 'epithalon', 'nad-100mg'],
    seoTitle: 'Buy DSIP 5mg | Delta Sleep Peptide | Deep Sleep Restoration & Cortisol Control',
    deepDiveTitle: 'DSIP: The Hypothalamic Peptide That Restores Deep Sleep and Regulates Your Stress Axis',
    highlights: [
      { title: 'Delta Wave Promotion', body: 'DSIP was named for its ability to induce slow-wave sleep — the deep, restorative phase where GH peaks, tissue repairs, and memory consolidates.' },
      { title: 'HPA Axis Regulation', body: 'Beyond sleep, DSIP normalizes the hypothalamic-pituitary-adrenal axis — reducing excess cortisol that disrupts sleep architecture and impairs recovery.' },
      { title: 'No Morning Grogginess', body: 'Unlike pharmaceutical sleep aids, DSIP promotes natural sleep architecture without receptor binding that causes next-day sedation or cognitive impairment.' },
      { title: 'GH Secretion Window', body: 'By deepening delta wave sleep, DSIP extends the peak GH secretion window — making each night\'s sleep more anabolic and regenerative.' },
    ],
  },

  {
    slug: 'dihexa',
    name: 'Dihexa 50mg',
    tagline: 'Ultra-potent nootropic peptide for synaptic formation and cognitive restoration',
    price: 99.99,
    category: 'Cognitive',
    tags: ['Dihexa', 'Nootropic', 'Synaptogenesis', 'Memory', 'Cognitive Enhancement'],
    image: 'https://phiogen.is/images/products/p21-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/p21-10mg?ref=PEPS',
    shortDescription: 'Dihexa is an HGF/c-Met signaling agent reported to be 10 million times more potent than BDNF at promoting synaptogenesis — the most powerful nootropic peptide in research.',
    fullDescription: `**The Synaptogenesis Peptide**

Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide) is a small peptide developed at Washington State University that amplifies hepatocyte growth factor (HGF) signaling through the c-Met receptor. Its discovery emerged from Alzheimer's disease research, and it demonstrated extraordinary potency in promoting the formation of new synaptic connections — the physical substrate of memory and learning. Researchers estimated Dihexa to be approximately 10 million times more potent than BDNF at inducing synaptogenesis in vitro.

**Mechanism: HGF/c-Met Amplification**

HGF and its receptor c-Met are critical for neurodevelopment and synaptic plasticity, but their activity declines significantly with age and neurodegeneration. Dihexa binds to and stabilizes HGF, dramatically potentiating its binding to c-Met. This amplification cascade drives dendritic branching, synapse formation, and synaptic strengthening — effectively reversing the synaptic loss that underlies age-related cognitive decline.

**Cognitive Applications**

Dihexa is researched for Alzheimer's disease reversal, traumatic brain injury recovery, and cognitive enhancement in healthy individuals. Users report dramatic improvements in working memory, pattern recognition, verbal fluency, and overall cognitive sharpness. The effects appear to be persistent beyond the dosing period, consistent with the structural nature of synaptogenesis rather than transient neurotransmitter modulation.`,
    benefits: [
      'Promotes synaptogenesis through HGF/c-Met pathway amplification',
      'Reported 10 million times more potent than BDNF at synapse formation',
      'Reverses age-related synaptic loss and cognitive decline',
      'Improves working memory, pattern recognition, and verbal fluency',
      'Potential Alzheimer\'s and TBI recovery applications',
      'Persistent cognitive benefits beyond active dosing period',
      'Dendritic branching and synaptic strengthening',
    ],
    protocol: `**Administration:** Dihexa is typically administered topically (transdermal) or subcutaneously.

**Dosing:**
- Topical: 3–10mg dissolved in DMSO or carrier cream, applied to inner arm
- Subcutaneous: 1–3mg per dose, 2–3x per week
- Cycle: 4–8 weeks; allow 8+ weeks off before repeating

**Caution:** Start low; powerful effects — assess cognitive response before escalating`,
    synergies: ['semax', 'selank', 'cerebrolysin', 'nad-100mg'],
    seoTitle: 'Buy Dihexa 50mg | Synaptogenesis Nootropic Peptide | Most Potent Cognitive Peptide',
    deepDiveTitle: 'Dihexa: The HGF/c-Met Amplifier 10 Million Times Stronger Than BDNF at Building Synapses',
    highlights: [
      { title: '10 Million x BDNF Potency', body: 'Dihexa\'s potency at inducing synaptogenesis dwarfs even BDNF — currently the most potent synapse-forming compound identified in research.' },
      { title: 'Structural Neuroplasticity', body: 'Rather than transiently modulating neurotransmitters, Dihexa drives structural synapse formation — creating lasting cognitive improvements that persist beyond the dosing period.' },
      { title: 'HGF Stabilization', body: 'Dihexa works by stabilizing HGF and amplifying its binding to c-Met — a novel mechanism that activates the brain\'s endogenous synaptic growth signaling cascade.' },
      { title: 'Alzheimer\'s Research Origin', body: 'Developed specifically to reverse the synaptic loss of Alzheimer\'s disease, Dihexa targets the exact biological process underlying cognitive decline across all ages.' },
    ],
  },

  {
    slug: 'cerebrolysin',
    name: 'Cerebrolysin 215mg/5mL',
    tagline: 'Clinically proven neurotrophic factor mixture for brain repair and cognitive enhancement',
    price: 49.99,
    category: 'Cognitive',
    tags: ['Cerebrolysin', 'Neurotrophic', 'Neuropeptides', 'Brain Repair', 'Cognitive'],
    image: 'https://phiogen.is/images/products/pinealon-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/pinealon-20mg?ref=PEPS',
    shortDescription: 'Cerebrolysin is a porcine-derived neuropeptide mixture (215mg/5mL) with clinically proven effects on Alzheimer\'s disease, stroke recovery, and TBI rehabilitation.',
    fullDescription: `**The Clinical Neurotrophic Standard**

Cerebrolysin is a standardized neuropeptide preparation derived from purified porcine brain proteins. Approximately 25% of the preparation consists of active neuropeptides, with the remainder being amino acids. It contains naturally-occurring neurotrophic factors including BDNF, NGF, CNTF, GDNF, and others in bioavailable form — creating a multi-target neurotrophic support that mimics the brain's own growth factor cocktail.

**Clinical Evidence Base**

Cerebrolysin has been studied in over 200 clinical trials and is approved as a pharmaceutical in over 40 countries for Alzheimer's disease, stroke rehabilitation, and traumatic brain injury. Meta-analyses have consistently demonstrated improvements in global cognitive function, activities of daily living, and neurological deficit scores following stroke. This robust clinical evidence distinguishes it from most research nootropics.

**Mechanism: Multi-Factor Neuroprotection**

The mixture acts through multiple neurotrophic receptors simultaneously — unlike single-peptide approaches, Cerebrolysin activates TrkA, TrkB, and GFRα receptors that regulate neuronal survival, synaptic plasticity, and neurogenesis. It also reduces amyloid precursor protein processing, decreases tau hyperphosphorylation, and protects against excitotoxicity — addressing multiple Alzheimer's pathology targets simultaneously.`,
    benefits: [
      'Clinically proven in 200+ trials for Alzheimer\'s, stroke, TBI',
      'Contains naturally occurring BDNF, NGF, CNTF, GDNF',
      'Approved pharmaceutical in 40+ countries',
      'Reduces amyloid processing and tau hyperphosphorylation',
      'Enhances synaptic plasticity and neurogenesis',
      'Protects neurons against excitotoxic damage',
      'Improves global cognition, memory, and neurological recovery',
    ],
    protocol: `**Administration:** Intravenous (IV) or intramuscular (IM) injection.

**Dosing:**
- Cognitive enhancement: 5–10mL IV or IM daily for 10–20 days
- Stroke/TBI recovery: 10–30mL IV daily for 10–21 days (clinical protocol)
- Research: 5mL IM daily for 10 days, 30 days off, repeat

**Note:** IV administration requires slow infusion; dilute in saline`,
    synergies: ['semax', 'dihexa', 'selank', 'nad-100mg'],
    seoTitle: 'Buy Cerebrolysin 215mg/5mL | Clinical Neurotrophic Peptide | Alzheimer\'s & TBI',
    deepDiveTitle: 'Cerebrolysin: The Clinically Validated Neuropeptide Mixture Used in 40+ Countries for Brain Repair',
    highlights: [
      { title: '200+ Clinical Trials', body: 'Cerebrolysin has one of the largest clinical evidence bases of any neuropeptide — proven effective in Alzheimer\'s, stroke recovery, and TBI across decades of research.' },
      { title: 'Natural Neurotrophic Cocktail', body: 'Contains the brain\'s own growth factors (BDNF, NGF, GDNF, CNTF) in naturally occurring proportions — providing multi-receptor neurotrophic support no single peptide can match.' },
      { title: 'Alzheimer\'s Pathology Targeting', body: 'Directly reduces amyloid precursor protein processing and tau hyperphosphorylation — addressing the two primary pathological hallmarks of Alzheimer\'s disease.' },
      { title: 'Pharmaceutical-Grade Approval', body: 'Registered as a pharmaceutical drug in 40+ countries including throughout Europe and Asia — the highest validation of safety and efficacy available for any neuroregenerative compound.' },
    ],
  },

  {
    slug: 'nad-100mg',
    name: 'NAD+ 100mg',
    tagline: 'Injectable NAD+ for cellular energy, DNA repair, and anti-aging restoration',
    price: 29.99,
    category: 'Healing',
    tags: ['NAD+', 'Anti-Aging', 'Energy', 'DNA Repair', 'Mitochondria'],
    image: 'https://phiogen.is/images/products/nad-100mg.png',
    affiliateUrl: 'https://phiogen.is/products/nad-100mg?ref=PEPS',
    shortDescription: 'Injectable NAD+ 100mg — the coenzyme central to cellular energy metabolism, sirtuin activation, DNA repair, and mitochondrial biogenesis for comprehensive anti-aging support.',
    fullDescription: `**The Cellular Energy Coenzyme**

Nicotinamide adenine dinucleotide (NAD+) is a coenzyme found in every living cell, essential for over 500 enzymatic reactions including those governing energy metabolism, DNA repair, and circadian rhythm regulation. NAD+ levels decline by approximately 50% between the ages of 40 and 60, contributing to mitochondrial dysfunction, reduced cellular stress resistance, and accelerated aging. Injectable NAD+ directly replenishes intracellular levels faster than oral precursors.

**Mechanism: Sirtuins, PARP, and Mitochondria**

NAD+ activates sirtuin deacetylases (SIRT1-7) that regulate metabolism, stress resistance, and inflammation. It also fuels PARP enzymes critical for DNA strand break repair — essential for genomic stability and cancer prevention. In mitochondria, NAD+ is indispensable for the electron transport chain that generates ATP. Collectively, these mechanisms make NAD+ repletion one of the most evidence-supported anti-aging interventions.

**Injectable vs. Oral Advantage**

While oral NMN and NR are popular NAD+ precursors, injectable NAD+ bypasses intestinal metabolism and directly enters circulation for immediate cellular uptake. This provides faster and more complete repletion, particularly relevant for acute protocols, post-illness recovery, or situations where rapid cellular energy restoration is the goal.`,
    benefits: [
      'Directly replenishes cellular NAD+ for immediate metabolic impact',
      'Activates sirtuins for DNA repair, metabolism, and longevity pathways',
      'Restores mitochondrial electron transport chain function',
      'Enhances ATP production and cellular energy output',
      'Supports PARP-mediated DNA repair for genomic stability',
      'Improves cognitive clarity and reduces brain fog',
      'Accelerates recovery from illness, fatigue, and metabolic stress',
    ],
    protocol: `**Reconstitution:** Pre-dissolved at 100mg; dilute in 100–250mL saline for IV infusion.

**Dosing:**
- IV infusion: 100–500mg in saline over 1–3 hours, 1–3x per week
- Subcutaneous: 25–50mg daily (slower absorption, lower flush response)
- Loading: daily IV for 5–10 days, then 1–2x weekly maintenance

**Note:** IV NAD+ commonly causes a flushing sensation during infusion — normal and transient`,
    synergies: ['epithalon', 'ghk-cu', 'mots-c', 'ss-31'],
    seoTitle: 'Buy NAD+ 100mg Injectable | Cellular Energy & Anti-Aging Coenzyme | Sirtuin Activation',
    deepDiveTitle: 'Injectable NAD+: Restoring the Master Coenzyme of Cellular Energy, DNA Repair, and Longevity',
    highlights: [
      { title: 'Direct NAD+ Repletion', body: 'Injectable NAD+ bypasses intestinal conversion required by oral precursors — delivering the active coenzyme directly to cells for immediate energetic and metabolic impact.' },
      { title: 'Sirtuin Activation', body: 'NAD+ fuels the sirtuin enzymes (SIRT1-7) that regulate DNA repair, metabolic efficiency, inflammation, and cellular stress resistance — the molecular mediators of longevity.' },
      { title: 'Mitochondrial Restoration', body: 'As the electron acceptor in the ETC, NAD+ is non-negotiable for ATP synthesis — replenishing it restores mitochondrial function at the root cause of age-related energy decline.' },
      { title: 'PARP DNA Repair', body: 'NAD+ fuels PARP enzymes that repair DNA strand breaks — the genomic damage that accumulates with aging and is the primary driver of cancer, senescence, and cellular dysfunction.' },
    ],
  },

  // ── Batch 2: Anti-Aging / Longevity ──────────────────────────────────────

  {
    slug: 'ace-031',
    name: 'ACE-031 1mg',
    tagline: 'Myostatin inhibitor for dramatic lean mass gain and muscle preservation',
    price: 199.99,
    category: 'Body Composition',
    tags: ['ACE-031', 'Myostatin', 'Muscle Growth', 'Body Composition', 'Lean Mass'],
    image: 'https://phiogen.is/images/products/ace-031-1mg.png',
    affiliateUrl: 'https://phiogen.is/products/ace-031-1mg?ref=PEPS',
    shortDescription: 'ACE-031 is an ActRIIB-Fc fusion protein that blocks myostatin and related TGF-β ligands, producing dramatic increases in lean muscle mass with concurrent fat loss.',
    fullDescription: `**Blocking the Muscle Growth Brake**

ACE-031 (ACVR2B-Fc) is a fusion protein that acts as a decoy receptor for ActRIIB — the receptor through which myostatin, activin A, GDF-11, and other TGF-β family members signal to inhibit muscle growth. By binding these ligands before they reach their natural receptors, ACE-031 effectively removes the biological brakes on muscle hypertrophy, allowing dramatically accelerated muscle growth even without changes in training.

**Clinical Evidence: Unprecedented Muscle Gains**

In clinical trials for Duchenne muscular dystrophy, a single dose of ACE-031 produced 3–5% increases in lean body mass within weeks — results that typically require months of intense training. The compound simultaneously reduced fat mass, creating a highly favorable body composition shift. These results established ACE-031 as perhaps the most potent single-compound muscle-building agent in research.

**Research and Athletic Applications**

While developed for muscle-wasting diseases, ACE-031's mechanism is of intense research interest for body composition optimization. The multi-ligand inhibition (myostatin + activin A + GDF-11) distinguishes it from myostatin-only inhibitors, potentially explaining its superior potency. Research is also investigating its effects on bone density and cardiometabolic markers.`,
    benefits: [
      'Inhibits myostatin, activin A, and GDF-11 simultaneously',
      'Produces 3–5% lean mass gains with single-dose clinical evidence',
      'Concurrent reduction in fat mass for improved body composition',
      'Preserves muscle mass during caloric restriction or illness',
      'May improve bone mineral density via ActRIIB blockade',
      'Potentially reverses muscle-wasting in disease states',
      'Most potent lean mass agent studied in clinical trials',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (1,000mcg/mL).

**Dosing:**
- Research protocol: 0.1–0.3mg/kg subcutaneous every 2–4 weeks
- Note: ACE-031 is for research purposes only; clinical protocols vary by indication
- Cycle: extended research cycles with careful monitoring

**Caution:** Potent compound — nose bleeds and vascular effects observed in trials at higher doses`,
    synergies: ['ipamorelin-10mg', 'cjc-ghrp2-blend', 'tb-500', 'nad-100mg'],
    seoTitle: 'Buy ACE-031 1mg | Myostatin Inhibitor Peptide | Lean Muscle Mass Growth',
    deepDiveTitle: 'ACE-031: The ActRIIB Decoy Receptor That Clinically Doubled Muscle Growth Expectations',
    highlights: [
      { title: '3–5% LBM in Weeks', body: 'Clinical trial data in DMD showed ACE-031 produced lean body mass increases of 3–5% within weeks of a single injection — unprecedented in muscle-building research.' },
      { title: 'Multi-Ligand Blockade', body: 'Blocks not just myostatin but also activin A and GDF-11 — all three ActRIIB ligands that suppress muscle growth, delivering more comprehensive inhibition than myostatin-only approaches.' },
      { title: 'Simultaneous Fat Loss', body: 'Clinical data confirmed concurrent fat mass reduction alongside lean mass gains — a dual body composition shift that is exceptionally difficult to achieve by any other means.' },
      { title: 'Bone Density Potential', body: 'ActRIIB signaling also regulates bone remodeling; ACE-031 blockade shows promise for increasing bone mineral density alongside its muscle effects.' },
    ],
  },

  {
    slug: 'abaloparatide',
    name: 'Abaloparatide 3mg',
    tagline: 'PTHrP analog for bone density restoration and osteoporosis reversal',
    price: 149.99,
    category: 'Anti-Aging',
    tags: ['Abaloparatide', 'Bone Density', 'PTHrP', 'Osteoporosis', 'Anti-Aging'],
    image: 'https://phiogen.is/images/products/abaloparatide-3mg.png',
    affiliateUrl: 'https://phiogen.is/products/abaloparatide-3mg?ref=PEPS',
    shortDescription: 'Abaloparatide is a PTHrP(1-34) analog (FDA-approved as Tymlos) that builds bone density by predominantly stimulating bone formation over resorption — the anabolic bone therapy.',
    fullDescription: `**FDA-Approved Anabolic Bone Therapy**

Abaloparatide (brand name Tymlos) is a synthetic 34-amino-acid analog of parathyroid hormone-related protein (PTHrP) approved by the FDA in 2017 for postmenopausal osteoporosis. Unlike bisphosphonates that merely slow bone loss, abaloparatide actively stimulates new bone formation by selectively engaging the PTH1R receptor in a conformation that predominantly activates osteoblastic (bone-building) rather than osteoclastic (bone-resorbing) pathways.

**Mechanism: Anabolic vs. Anti-Resorptive**

Abaloparatide's selective binding to the RG conformational state of PTH1R produces a predominantly anabolic signal — stimulating osteoblast differentiation and activity while minimizing osteoclast activation. This anabolic window is larger than that of teriparatide (PTH analog), which activates both formation and resorption more equally. Clinical trials demonstrated significantly higher bone mineral density gains and lower fracture rates compared to placebo.

**Clinical Data and Applications**

The ACTIVE trial demonstrated 86% reduction in vertebral fracture risk and 43% reduction in non-vertebral fracture risk compared to placebo over 18 months. Abaloparatide is relevant not only for treating established osteoporosis but for anti-aging protocols focused on preserving bone architecture — one of the most underappreciated determinants of healthspan.`,
    benefits: [
      'FDA-approved anabolic therapy for osteoporosis (Tymlos)',
      '86% reduction in vertebral fracture risk in clinical trial',
      'Preferentially stimulates bone formation over bone resorption',
      'Increases BMD at spine, hip, and total body sites',
      'Superior anabolic window compared to teriparatide',
      'Preserves bone microarchitecture for fracture resistance',
      'Relevant for anti-aging bone health optimization',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (3,000mcg/mL).

**Dosing:**
- Clinical protocol: 80mcg subcutaneous daily (per FDA label)
- Research dose: 40–80mcg subcutaneous daily
- Cycle: 18–24 months maximum (FDA recommendation); then bisphosphonate follow-on

**Note:** Monitor for orthostatic hypotension; avoid if history of bone cancers or hypercalcemia`,
    synergies: ['ghk-cu', 'thymosin-alpha-1', 'nad-100mg', 'ss-31'],
    seoTitle: 'Buy Abaloparatide 3mg | Bone Density Peptide | FDA-Approved PTHrP Analog',
    deepDiveTitle: 'Abaloparatide: The FDA-Approved PTHrP Analog That Actually Builds New Bone',
    highlights: [
      { title: 'FDA Approved (Tymlos)', body: 'Abaloparatide carries FDA approval for osteoporosis — providing the highest regulatory validation for safety and efficacy of any bone-building peptide.' },
      { title: 'Anabolic Bone Building', body: 'Unlike anti-resorptives that slow bone loss, abaloparatide actively stimulates osteoblast activity to build entirely new bone — reversing osteoporosis rather than just halting it.' },
      { title: '86% Fracture Risk Reduction', body: 'The ACTIVE trial demonstrated an 86% reduction in vertebral fracture risk over 18 months — a clinical outcome that transforms the prognosis for high-risk osteoporosis patients.' },
      { title: 'Superior Anabolic Window', body: 'Selectively engages the anabolic PTH1R conformation more than teriparatide, producing more bone formation per unit of bone resorption — a better safety-efficacy profile.' },
    ],
  },

  {
    slug: 'epitalon-10mg',
    name: 'Epitalon 10mg',
    tagline: 'Pineal telomere peptide for longevity, circadian restoration, and anti-aging',
    price: 59.99,
    category: 'Anti-Aging',
    tags: ['Epitalon', 'Telomerase', 'Anti-Aging', 'Longevity', 'Pineal'],
    image: 'https://phiogen.is/images/products/epitalon-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/epitalon-10mg?ref=PEPS',
    shortDescription: 'Epitalon (Epithalon) is a tetrapeptide developed by Professor Khavinson that activates telomerase, elongates telomeres, and restores pineal function for longevity and circadian health.',
    fullDescription: `**The Longevity Tetrapeptide**

Epitalon (Ala-Glu-Asp-Gly) is a synthetic tetrapeptide developed by Professor Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology. It is the synthetic analog of Epithalamin, a natural polypeptide extracted from the pineal gland. Khavinson's decades of research — including a 25-year human trial showing significantly increased survival and reduced cancer incidence — have established Epitalon as one of the most researched longevity peptides in existence.

**Mechanism: Telomerase Activation and Pineal Restoration**

Epitalon's primary anti-aging mechanism involves activating telomerase, the enzyme that elongates telomeres — the protective end-caps of chromosomes that shorten with each cell division. Telomere shortening is a fundamental clock of cellular aging; their elongation allows cells to replicate more times before entering senescence. Epitalon also restores pineal gland function, normalizing melatonin secretion rhythms that decline with age and are central to circadian health.

**Longevity Research Foundation**

Animal studies demonstrated dramatically increased maximum lifespan in multiple species. The human longevity trial, while small, showed statistically significant reductions in overall mortality and cancer mortality in the Epitalon group over 25 years of follow-up — unique data that no other peptide possesses.`,
    benefits: [
      'Activates telomerase to elongate telomeres and extend cellular lifespan',
      'Restores pineal gland function and melatonin secretion rhythms',
      'Reduces cancer incidence in long-term human trial data',
      'Antioxidant and DNA repair enhancement',
      'Normalizes circadian rhythm and improves sleep quality',
      'Reduces markers of oxidative stress and inflammation',
      '25-year human longevity trial with survival benefit data',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Standard cycle: 5–10mg daily for 10–20 days, 2x per year
- Subcutaneous or IM injection once daily during cycle
- Intranasal: some users prefer nasal administration at 100mcg/nostril daily

**Note:** Twice-yearly cycling (spring and fall) mirrors the research protocols`,
    synergies: ['nad-100mg', 'ghk-cu', 'thymosin-alpha-1', 'mots-c'],
    seoTitle: 'Buy Epitalon 10mg | Telomerase Activating Peptide | Anti-Aging Longevity',
    deepDiveTitle: 'Epitalon: The Telomerase-Activating Tetrapeptide With 25-Year Human Longevity Data',
    highlights: [
      { title: 'Telomerase Activation', body: 'Epitalon activates telomerase — the enzyme that rebuilds shortened telomeres — addressing the fundamental cellular clock of aging at the chromosomal level.' },
      { title: '25-Year Human Trial', body: 'Unique long-term human data shows reduced overall and cancer mortality in Epitalon users over 25 years — the longest-running human longevity peptide study in existence.' },
      { title: 'Pineal Restoration', body: 'Restores the declining pineal function that underlies age-related circadian disruption, melatonin deficiency, and the downstream hormonal cascade of aging.' },
      { title: 'Twice-Yearly Protocol', body: 'The established protocol of two 10-20 day cycles per year makes Epitalon one of the most convenient longevity interventions — minimal time commitment for maximum anti-aging impact.' },
    ],
  },

  {
    slug: 'foxo4-dri',
    name: 'FOXO4-DRI 10mg',
    tagline: 'Senolytic peptide that eliminates senescent cells driving aging and disease',
    price: 149.99,
    category: 'Anti-Aging',
    tags: ['FOXO4-DRI', 'Senolytic', 'Senescence', 'Anti-Aging', 'Longevity'],
    image: 'https://phiogen.is/images/products/fox04-dri-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/fox04-dri-10mg?ref=PEPS',
    shortDescription: 'FOXO4-DRI is a D-retro-inverso peptide that selectively eliminates senescent cells by disrupting the FOXO4-p53 survival signal that prevents their apoptosis.',
    fullDescription: `**Eliminating the Zombie Cells of Aging**

Senescent cells — cells that have permanently stopped dividing but resist apoptosis — accumulate with age and are increasingly recognized as a primary driver of age-related disease. They secrete a toxic mix of inflammatory cytokines, proteases, and growth factors (the senescence-associated secretory phenotype, or SASP) that damages surrounding tissue, drives chronic inflammation, and accelerates aging in neighboring cells. FOXO4-DRI targets the exact survival signal that keeps these cells alive.

**Mechanism: Disrupting the FOXO4-p53 Axis**

In senescent cells, the transcription factor FOXO4 binds to p53 in the nucleus, preventing p53 from triggering apoptosis (programmed cell death). FOXO4-DRI is a D-amino acid retro-inverso peptide that mimics the FOXO4-p53 interaction domain, competitively displacing endogenous FOXO4 from p53. This releases p53 to activate its apoptotic program, selectively killing senescent cells while leaving normal healthy cells unharmed.

**Research Outcomes**

The landmark 2017 Nature Medicine paper by de Keizer et al. showed that FOXO4-DRI treatment in aged mice restored fitness, fur density, and renal function while dramatically reducing senescent cell burden. Subsequent research has explored its applications in chemotherapy-induced senescence, radiation-associated tissue damage, and natural aging reversal.`,
    benefits: [
      'Selectively eliminates senescent cells through FOXO4-p53 disruption',
      'Reduces senescence-associated secretory phenotype (SASP) inflammation',
      'Restores tissue function by clearing zombie cell burden',
      'Spares healthy non-senescent cells from apoptosis',
      'Demonstrated restoration of fitness and organ function in aged mice',
      'Potential applications in chemo/radiation-induced senescence',
      'Addresses a root cause of inflammaging and age-related disease',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (10,000mcg/mL).

**Dosing:**
- Research protocol: 5mg/kg IV or subcutaneous 3x per week for 3 weeks
- Conservative start: 1–2mg subcutaneous 3x per week, 2–4 weeks
- Allow 3–6 months between cycles for senescent cell clearance to manifest

**Caution:** Emerging research area — protocols are not fully established`,
    synergies: ['nad-100mg', 'epithalon', 'ghk-cu', 'ss-31'],
    seoTitle: 'Buy FOXO4-DRI 10mg | Senolytic Peptide | Senescent Cell Elimination',
    deepDiveTitle: 'FOXO4-DRI: The Senolytic Peptide That Forces Senescent Cells to Self-Destruct',
    highlights: [
      { title: 'Senolytic Precision', body: 'FOXO4-DRI selectively kills senescent cells by disrupting their survival signal — leaving healthy cells completely unharmed through a mechanism of high biological specificity.' },
      { title: 'FOXO4-p53 Axis', body: 'Targets the exact protein-protein interaction that gives senescent cells their resistance to apoptosis — the FOXO4-p53 complex that acts as a cellular death suppressor.' },
      { title: 'Tissue Function Restoration', body: 'Nature Medicine data showed that eliminating senescent cells restored physical fitness, renal function, and even fur density in aged mice — demonstrating that aging-related decline is reversible.' },
      { title: 'SASP Reduction', body: 'Clearing senescent cells eliminates the source of the SASP inflammatory storm — reducing chronic inflammation that accelerates aging in surrounding tissue throughout the body.' },
    ],
  },

  {
    slug: 'ghk-cu-100mg',
    name: 'GHK-Cu 100mg',
    tagline: 'High-volume copper tripeptide for skin regeneration, anti-aging, and wound repair',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['GHK-Cu', 'Copper Peptide', 'Skin', 'Anti-Aging', 'Wound Healing'],
    image: 'https://phiogen.is/images/products/ghk-cu-100mg.png',
    affiliateUrl: 'https://phiogen.is/products/ghk-cu-100mg?ref=PEPS',
    shortDescription: 'GHK-Cu 100mg — maximum supply of the copper-binding tripeptide that activates over 4,000 human genes, restores skin structure, and reverses markers of cellular aging.',
    fullDescription: `**The Gene-Activating Copper Peptide**

GHK-Cu (glycyl-L-histidyl-L-lysine copper) is a naturally occurring copper-binding tripeptide found in human plasma that activates over 4,000 human genes — representing approximately 31% of all genes associated with aging processes. Plasma GHK-Cu levels peak in early adulthood and decline by approximately 60% between age 20 and 60, a decline that correlates strongly with increased skin aging, impaired wound healing, and reduced tissue regenerative capacity.

**Mechanism: Transcription Factor Cascade**

GHK-Cu acts as a potent transcription factor activator, influencing gene expression pathways governing antioxidant defense, anti-inflammatory signaling, collagen synthesis, matrix metalloproteinase regulation, and stem cell activation. Its copper-chelating activity also modulates superoxide dismutase and other copper-dependent enzymes critical for cellular defense against oxidative damage.

**Skin and Systemic Applications**

In skin, GHK-Cu stimulates collagen, elastin, and decorin synthesis while activating dermal fibroblasts — producing measurable improvements in skin thickness, elasticity, and wrinkle depth. Systemically, it reduces lung inflammation, promotes nerve regeneration, and shows anti-cancer effects through normalization of cancer-altered gene expression. The 100mg format serves extended topical/injectable protocols or research applications.`,
    benefits: [
      'Activates 4,000+ genes in aging-associated pathways',
      'Stimulates collagen, elastin, and decorin synthesis',
      'Reduces wrinkle depth and improves skin elasticity',
      'Accelerates wound healing and skin barrier restoration',
      'Anti-inflammatory via NF-κB pathway modulation',
      'Antioxidant via SOD and copper-enzyme activation',
      'Promotes nerve regeneration and systemic anti-aging effects',
    ],
    protocol: `**Injectable:** Reconstitute in bacteriostatic water (10mg/mL or per preference). Dose 0.1–0.5mg subcutaneous daily.
**Topical:** Dissolve in cosmetic base at 0.1–2% concentration; apply to skin daily.

**Cycle:** Injectable 4–8 weeks; topical continuous use`,
    synergies: ['snap-8-50mg', 'epithalon', 'nad-100mg', 'ghk-cu-50mg'],
    seoTitle: 'Buy GHK-Cu 100mg | Copper Peptide Anti-Aging | Gene Activation & Skin Repair',
    deepDiveTitle: 'GHK-Cu: The 4,000-Gene Activating Copper Peptide at the Core of Anti-Aging Biology',
    highlights: [
      { title: '4,000+ Gene Activation', body: 'GHK-Cu influences the expression of over 4,000 human genes — an extraordinary breadth of biological reach that no single pharmaceutical compound can match.' },
      { title: 'Collagen Architecture Restoration', body: 'Stimulates synthesis of collagen I, III, and V plus elastin and decorin — rebuilding the extracellular matrix structure that deteriorates with age and UV exposure.' },
      { title: '100mg Extended Supply', body: 'The 100mg vial supports months of topical protocols or extended injectable cycles — the practical choice for long-term skin anti-aging or systemic regenerative programs.' },
      { title: 'Natural Plasma Peptide', body: 'Found naturally in human blood, GHK-Cu is a physiological molecule — its supplementation restores levels to those found in young adults rather than introducing a foreign compound.' },
    ],
  },

  {
    slug: 'glutathione-200mg',
    name: 'Glutathione 200mg',
    tagline: 'Master antioxidant for cellular defense, detoxification, and immune support',
    price: 49.99,
    category: 'Anti-Aging',
    tags: ['Glutathione', 'Antioxidant', 'Detox', 'Anti-Aging', 'Immune'],
    image: 'https://phiogen.is/images/products/glutathione-200mg.png',
    affiliateUrl: 'https://phiogen.is/products/glutathione-200mg?ref=PEPS',
    shortDescription: 'Injectable Glutathione 200mg — the body\'s master antioxidant for cellular detoxification, immune enhancement, skin brightening, and protection against oxidative aging.',
    fullDescription: `**The Master Antioxidant**

Glutathione (GSH) is a tripeptide (γ-L-glutamyl-L-cysteinyl-glycine) that serves as the primary endogenous antioxidant in virtually every cell of the human body. It is central to phase II detoxification in the liver, protects mitochondria from oxidative damage, maintains the redox state of immune cells, and regenerates other antioxidants including vitamins C and E. Glutathione levels decline significantly with age, chronic illness, poor diet, and environmental toxin exposure.

**Why Injectable Glutathione Outperforms Oral**

Oral glutathione has historically poor bioavailability due to breakdown in the GI tract. Injectable (IV or IM) glutathione bypasses this degradation, delivering intact GSH directly to cells for immediate antioxidant activity. This is why IV glutathione therapy is used clinically for Parkinson's disease, heavy metal detoxification, liver disease, and immune enhancement.

**Anti-Aging and Aesthetic Applications**

Beyond its critical biological functions, glutathione has become widely used for skin brightening — it reduces melanin synthesis by inhibiting tyrosinase, the rate-limiting enzyme in melanin production. This, combined with its antioxidant protection of skin cells, makes injectable glutathione a cornerstone of comprehensive anti-aging aesthetic protocols.`,
    benefits: [
      'Primary cellular antioxidant against reactive oxygen species',
      'Central to hepatic phase II detoxification',
      'Regenerates vitamins C and E for amplified antioxidant network',
      'Protects mitochondria from oxidative damage',
      'Reduces melanin synthesis for skin brightening effects',
      'Enhances NK cell and T-cell immune function',
      'Reduces systemic inflammation and oxidative aging markers',
    ],
    protocol: `**IV administration:** Dilute in 100mL saline, infuse over 15–30 minutes.
**IM:** Inject 200–600mg glutathione directly.

**Dosing:**
- Antioxidant/wellness: 200–600mg IV/IM 2–3x per week
- Skin brightening: 600–1500mg IV 3x per week until desired effect
- Maintenance: 200mg weekly`,
    synergies: ['nad-100mg', 'epithalon', 'ghk-cu', 'ss-31'],
    seoTitle: 'Buy Glutathione 200mg Injectable | Master Antioxidant | Detox & Skin Brightening',
    deepDiveTitle: 'Injectable Glutathione: The Master Antioxidant for Detoxification, Immunity, and Anti-Aging',
    highlights: [
      { title: 'Master Cellular Antioxidant', body: 'Glutathione is the most abundant and critical intracellular antioxidant — neutralizing free radicals, detoxifying carcinogens, and protecting every cell from oxidative damage.' },
      { title: 'Injectable Bioavailability', body: 'Oral glutathione is poorly absorbed; injectable delivery bypasses GI degradation to deliver intact GSH directly to cells — the route used in clinical glutathione therapy worldwide.' },
      { title: 'Liver Detoxification', body: 'Central to phase II liver detoxification, glutathione conjugates and neutralizes toxins, heavy metals, and carcinogens — making adequate GSH levels essential for effective detox capacity.' },
      { title: 'Skin Brightening', body: 'Inhibits tyrosinase to reduce melanin synthesis, while antioxidant protection of melanocytes reduces age spots and hyperpigmentation — making glutathione a proven aesthetic anti-aging tool.' },
    ],
  },

  {
    slug: 'glutathione-600mg',
    name: 'Glutathione 600mg',
    tagline: 'Clinical-dose injectable glutathione for intensive detox and anti-aging',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['Glutathione', 'Antioxidant', 'Detox', 'Anti-Aging', 'Clinical Dose'],
    image: 'https://phiogen.is/images/products/glutathione-600mg.png',
    affiliateUrl: 'https://phiogen.is/products/glutathione-600mg?ref=PEPS',
    shortDescription: 'Glutathione 600mg injectable — triple the standard dose for intensive detoxification protocols, Parkinson\'s therapy, skin brightening, and clinical-level antioxidant support.',
    fullDescription: `**Clinical-Level Antioxidant Intervention**

The 600mg glutathione dose matches the protocol used in Parkinson's disease clinical research, where IV glutathione administration produced significant reductions in motor symptoms by reducing oxidative stress in the substantia nigra. This dosage also represents the standard "whitening dose" used in aesthetic medicine for skin brightening protocols, and the typical dose used in clinical IV nutrient therapy for liver disease and heavy metal detoxification.

**When 200mg Isn't Enough**

The 600mg dose is appropriate when more aggressive antioxidant support is needed: following chemotherapy (which dramatically depletes cellular glutathione), during heavy metal chelation protocols, for intensive skin brightening programs, or when managing conditions characterized by severe oxidative stress such as Parkinson's disease, chronic fatigue syndrome, or severe liver disease.

**Value and Convenience**

A single 600mg vial eliminates the need to combine multiple lower-dose vials for clinical protocols. For practitioners or advanced users running 600mg sessions multiple times weekly, this larger format is the efficient choice.`,
    benefits: [
      'Clinical dose matching Parkinson\'s disease research protocols',
      'Intensive liver detoxification and heavy metal chelation support',
      'Established aesthetic "whitening dose" for skin brightening',
      'Superior post-chemotherapy glutathione repletion',
      'Three times the antioxidant capacity of 200mg dose',
      'Reduces neurological oxidative stress in CNS conditions',
      'Efficient single-vial preparation for clinical protocols',
    ],
    protocol: `**IV administration:** Dilute in 100–250mL saline, infuse over 30–60 minutes.
**IM:** 600mg per injection site.

**Dosing:**
- Parkinson's/neurological: 600–1400mg IV daily or 3x weekly
- Skin brightening: 600–1500mg IV 3x weekly for 3–6 months
- Detoxification: 600mg IV 3x weekly for 4–8 weeks`,
    synergies: ['nad-100mg', 'ghk-cu', 'ss-31', 'epithalon'],
    seoTitle: 'Buy Glutathione 600mg Injectable | Clinical Dose Antioxidant | Parkinson\'s & Detox',
    deepDiveTitle: 'Glutathione 600mg: Clinical-Dose Antioxidant Therapy for Neurological, Hepatic, and Aesthetic Applications',
    highlights: [
      { title: 'Parkinson\'s Protocol Dose', body: '600mg matches the dose used in Parkinson\'s disease IV glutathione clinical research, where it reduced oxidative damage in the substantia nigra and improved motor function.' },
      { title: 'Standard Brightening Dose', body: '600mg is the accepted minimum for aesthetic glutathione skin brightening protocols — the dose at which tyrosinase inhibition produces clinically visible depigmentation effects.' },
      { title: 'Post-Chemotherapy Repletion', body: 'Chemotherapy dramatically depletes cellular glutathione as it kills cancer cells — 600mg repletion sessions restore GSH levels critical for recovery and immune reconstitution.' },
      { title: 'Efficient Single-Vial Format', body: 'Eliminates the inefficiency of combining three 200mg vials for clinical protocols — one vial, one draw, full clinical dose, streamlined workflow.' },
    ],
  },

  {
    slug: 'glutathione-1500mg',
    name: 'Glutathione 1500mg',
    tagline: 'Maximum-dose injectable glutathione for intensive protocols and clinical applications',
    price: 179.99,
    category: 'Anti-Aging',
    tags: ['Glutathione', 'Antioxidant', 'High-Dose', 'Anti-Aging', 'Detox'],
    image: 'https://phiogen.is/images/products/glutathione-1500mg.png',
    affiliateUrl: 'https://phiogen.is/products/glutathione-1500mg?ref=PEPS',
    shortDescription: 'Glutathione 1500mg injectable — high-dose format for intensive skin brightening, severe oxidative stress, hepatic loading, and maximum antioxidant saturation protocols.',
    fullDescription: `**Maximum Glutathione Intervention**

The 1500mg glutathione vial is designed for intensive therapeutic protocols where maximum antioxidant saturation is the goal. This dose is used in aggressive skin brightening programs, severe hepatic disease management, high-dose antioxidant protocols following toxic exposures, and research applications requiring maximum systemic glutathione repletion. It represents approximately 7.5x the body's daily endogenous production rate.

**Applications Requiring Maximum Doses**

Aesthetic clinics running intensive skin lightening programs typically use 1200–2400mg per session, administered multiple times weekly. Severe cases of non-alcoholic steatohepatitis (NASH), alcohol-related liver disease, or acute hepatotoxic injury require glutathione doses in the 1000–3000mg range to meaningfully impact hepatic oxidative stress. Post-exposure heavy metal protocols similarly benefit from maximum-dose GSH to support metallothionein-mediated sequestration.

**Cost Efficiency at Scale**

For practices or individuals requiring multiple high-dose sessions, the 1500mg single-vial format offers superior cost and time efficiency versus combining multiple smaller vials — while ensuring consistent concentration in every session.`,
    benefits: [
      'Maximum antioxidant saturation for intensive clinical protocols',
      'Ideal for aggressive skin brightening and melanin suppression',
      'Severe hepatic disease and post-toxic exposure management',
      'Heavy metal chelation protocol support',
      'Maximum PARP and mitochondrial glutathione support',
      'Efficient single-vial format for high-dose sessions',
      'Replenishes severely depleted GSH reserves rapidly',
    ],
    protocol: `**IV administration:** Dilute in 250–500mL saline, infuse over 60–90 minutes.

**Dosing:**
- Intensive brightening: 1200–1500mg IV 3x weekly for 3 months
- Hepatic support: 1500mg IV 3x weekly for 4–8 weeks
- Acute detox: 1500mg IV daily for 5–10 days

**Note:** High-dose IV GSH should be administered by qualified practitioners`,
    synergies: ['nad-100mg', 'ghk-cu', 'ss-31', 'epithalon'],
    seoTitle: 'Buy Glutathione 1500mg Injectable | High-Dose Antioxidant | Skin Brightening Protocol',
    deepDiveTitle: 'Glutathione 1500mg: Maximum-Dose Antioxidant Therapy for Intensive Clinical and Aesthetic Applications',
    highlights: [
      { title: '1500mg Single Vial', body: 'The highest single-dose glutathione format available — supporting intensive clinical protocols that require 1200mg+ per session without multi-vial combinations.' },
      { title: 'Aesthetic Brightening Protocol', body: 'Standard aggressive skin brightening protocols use 1200–2400mg per session; this 1500mg vial is perfectly sized for single or split-session intensive depigmentation therapy.' },
      { title: 'Hepatic Loading', body: 'The liver requires massive glutathione reserves for phase II detoxification — 1500mg IV sessions dramatically increase hepatic GSH availability for compromised liver function.' },
      { title: 'Maximum Cost Efficiency', body: 'Per-mg cost advantage over smaller vials for practices and individuals committed to high-dose glutathione therapy over extended protocol periods.' },
    ],
  },

  {
    slug: 'melanotan-1',
    name: 'Melanotan I 10mg',
    tagline: 'Melanocortin agonist for photoprotective tanning without UV exposure',
    price: 59.99,
    category: 'Anti-Aging',
    tags: ['Melanotan I', 'Tanning', 'Melanocortin', 'Photoprotection', 'Skin'],
    image: 'https://phiogen.is/images/products/melanotan-1-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/melanotan-1-10mg?ref=PEPS',
    shortDescription: 'Melanotan I (afamelanotide) is a superpotent α-MSH analog that stimulates melanin production for a natural tan with photoprotection — FDA-approved for erythropoietic protoporphyria.',
    fullDescription: `**The Sunless Tanning and Photoprotection Peptide**

Melanotan I (afamelanotide) is a synthetic analog of α-melanocyte stimulating hormone (α-MSH) that is more potent and longer-lasting than the endogenous hormone. It acts on MC1R (melanocortin-1 receptor) on melanocytes to stimulate melanin synthesis — producing a natural, UV-independent tan that also provides genuine photoprotection by increasing the skin's UV-absorbing pigment.

**FDA Approval: Erythropoietic Protoporphyria**

Melanotan I (Scenesse) was approved by the FDA and EMA for erythropoietic protoporphyria (EPP), a condition where sunlight causes excruciating pain. By increasing melanin baseline, Melanotan I dramatically extends the time EPP patients can spend in sunlight without pain — validating its photoprotective mechanism beyond cosmetic application.

**Distinction from Melanotan II**

Melanotan I is selective for MC1R and does not significantly activate MC3R or MC4R, which means it lacks Melanotan II's sexual arousal and appetite-suppressing side effects. This targeted melanocortin selectivity makes Melanotan I more suitable for individuals seeking tanning and photoprotection without the additional systemic effects of the non-selective MT-II.`,
    benefits: [
      'Stimulates melanin synthesis for UV-independent natural tanning',
      'Provides genuine photoprotection by increasing melanin density',
      'FDA-approved mechanism (Scenesse for EPP)',
      'Selective MC1R agonism without MT-II sexual side effects',
      'Reduces sunburn sensitivity and UV skin damage',
      'Longer duration of action than endogenous α-MSH',
      'May reduce skin cancer risk through photoprotective melanin',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Tanning protocol: 0.5–1mg subcutaneous every 2–3 days initially
- Maintenance: 0.5–1mg weekly once desired pigmentation achieved
- Best used with minimal UV exposure to activate melanin

**Note:** Nausea common initially — take before bed or use antiemetic`,
    synergies: ['melanotan-2', 'ghk-cu', 'snap-8-50mg', 'pt-141'],
    seoTitle: 'Buy Melanotan I 10mg | Afamelanotide | UV-Independent Tanning & Photoprotection',
    deepDiveTitle: 'Melanotan I: The FDA-Approved α-MSH Analog for Safe Tanning and UV Photoprotection',
    highlights: [
      { title: 'FDA-Approved Mechanism', body: 'The exact same peptide (afamelanotide/Scenesse) is FDA-approved for EPP — confirming Melanotan I\'s efficacy and mechanism for melanin stimulation at the regulatory level.' },
      { title: 'True Photoprotection', body: 'Unlike self-tanning cosmetics, Melanotan I builds actual eumelanin in melanocytes — providing real UV absorption and DNA protection that reduces sunburn and UV skin damage.' },
      { title: 'MC1R Selectivity', body: 'Targets MC1R on melanocytes without activating MC3R/MC4R — delivering clean tanning and photoprotection without appetite changes or sexual arousal associated with Melanotan II.' },
      { title: 'UV-Independent Results', body: 'Produces measurable tanning with minimal UV exposure required — useful for individuals with sun sensitivity, time constraints, or those seeking photoprotection before UV exposure.' },
    ],
  },

  {
    slug: 'melanotan-2',
    name: 'Melanotan II 10mg',
    tagline: 'Broad-spectrum melanocortin peptide for tanning, libido, and appetite regulation',
    price: 59.99,
    category: 'Anti-Aging',
    tags: ['Melanotan II', 'Tanning', 'Libido', 'Melanocortin', 'Appetite'],
    image: 'https://phiogen.is/images/products/melanotan-2-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/melanotan-2-10mg?ref=PEPS',
    shortDescription: 'Melanotan II is a cyclic α-MSH analog that activates multiple melanocortin receptors, producing UV-independent tanning, enhanced libido, and appetite suppression.',
    fullDescription: `**Multi-Receptor Melanocortin Agonist**

Melanotan II (MT-II) is a cyclic heptapeptide analog of α-MSH that activates MC1R, MC3R, and MC4R — delivering effects beyond just tanning. MC1R activation produces melanin synthesis and tanning, MC3R activation affects energy balance and anti-inflammation, and MC4R activation drives the central nervous system effects including sexual arousal and appetite suppression. This multi-receptor profile makes MT-II a uniquely multifunctional melanocortin peptide.

**The Original Performance Tanning Peptide**

Melanotan II was the first synthetic melanocortin peptide to gain widespread use in the research and performance community, decades before Melanotan I received FDA approval. Its rapid tanning effect (often visible within 2–3 injections), concurrent libido enhancement, and appetite-reducing properties made it exceptionally popular for body composition phases where both aesthetic and performance goals converge.

**Applications and Tradeoffs**

The broad receptor activation of MT-II means more comprehensive effects but also more potential side effects compared to selective Melanotan I. Nausea, facial flushing, and spontaneous erections in men are common initial effects that typically diminish with continued use. The appetite suppression effect, while useful for fat loss phases, requires dietary attention to maintain adequate nutrition.`,
    benefits: [
      'UV-independent tanning through MC1R melanin stimulation',
      'Enhances libido and sexual arousal via MC4R activation',
      'Appetite suppression beneficial for fat loss phases',
      'Broad melanocortin receptor activation for comprehensive effects',
      'Rapid tanning visible within days of first use',
      'Anti-inflammatory effects via MC3R activation',
      'Combines tanning and body composition benefits simultaneously',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Loading: 0.25–0.5mg subcutaneous daily for 7–14 days
- Maintenance: 0.5–1mg every 2–3 days
- Take before bed to minimize nausea; antiemetic if needed

**Note:** Strong effects at MC4R; do not use if not prepared for sexual arousal effects`,
    synergies: ['melanotan-1', 'pt-141', 'ghk-cu', 'snap-8-50mg'],
    seoTitle: 'Buy Melanotan II 10mg | Multi-Receptor Tanning Peptide | Libido & Tan Stack',
    deepDiveTitle: 'Melanotan II: The Multi-Receptor Melanocortin Peptide for Tanning, Libido, and Appetite Control',
    highlights: [
      { title: 'Triple Receptor Action', body: 'Activates MC1R for tanning, MC3R for anti-inflammation, and MC4R for sexual arousal and appetite suppression — three therapeutic axes from a single peptide.' },
      { title: 'Rapid Tanning Onset', body: 'Observable tanning often begins within the first week of dosing — significantly faster than Melanotan I\'s gentler melanin accumulation pace.' },
      { title: 'Libido Enhancement', body: 'MC4R activation in the hypothalamus triggers the same central sexual arousal pathway as PT-141 (bremelanotide) — making MT-II effectively a combined tanning and libido peptide.' },
      { title: 'Appetite Management', body: 'Central MC3R/MC4R activation reduces appetite and increases energy expenditure — useful during cutting phases where aesthetic improvement and dietary adherence are simultaneous goals.' },
    ],
  },

  {
    slug: 'humanin',
    name: 'Humanin 1mg',
    tagline: 'Mitochondrial-derived peptide for neuroprotection, metabolic health, and longevity',
    price: 99.99,
    category: 'Anti-Aging',
    tags: ['Humanin', 'Mitochondria', 'Neuroprotection', 'Anti-Aging', 'Longevity'],
    image: 'https://phiogen.is/images/products/mots-c-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/mots-c-10mg?ref=PEPS',
    shortDescription: 'Humanin is a mitochondria-encoded micropeptide that provides neuroprotection against Alzheimer\'s pathology, improves insulin sensitivity, and extends lifespan in multiple model organisms.',
    fullDescription: `**Mitochondrial-Derived Longevity Peptide**

Humanin is a 21-amino-acid peptide encoded within the 16S rRNA gene of mitochondrial DNA — the first member of a newly recognized class of mitochondria-derived peptides (MDPs) with systemic hormonal functions. Discovered through expression screening for Alzheimer's-protective genes, Humanin is secreted by mitochondria and cells in response to stress, acting in an endocrine fashion to protect against apoptosis, inflammation, and metabolic dysfunction.

**Mechanism: Multi-Pathway Cytoprotection**

Humanin acts through multiple receptors including FPRL1, gp130, and the trimeric receptor CNTFR/WSX-1/gp130 complex. Through these pathways, it inhibits Bax-induced apoptosis, activates STAT3 signaling for cellular survival, promotes AMPK for metabolic efficiency, and reduces inflammatory cytokine production. In neurons, it specifically prevents amyloid-beta-induced cell death through mechanisms that intersect with the Alzheimer's disease pathology cascade.

**Longevity and Clinical Correlations**

Humanin levels correlate with longevity — centenarians and their offspring have significantly higher plasma Humanin levels than age-matched controls. In model organisms, exogenous Humanin extends lifespan and healthspan. Its insulin-sensitizing effects have been studied for metabolic syndrome and diabetes, while its neuroprotective properties continue to drive Alzheimer's disease research.`,
    benefits: [
      'Neuroprotection against Alzheimer\'s amyloid-beta toxicity',
      'Inhibits apoptosis via Bax pathway modulation',
      'Improves insulin sensitivity and metabolic function',
      'Reduces systemic inflammation via STAT3 activation',
      'Correlates with longevity — higher in centenarians',
      'Mitochondrial protection against oxidative stress',
      'Extends lifespan in multiple model organisms',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (1,000mcg/mL).

**Dosing:**
- Anti-aging: 100–250mcg subcutaneous 2–3x per week
- Neuroprotection: 500mcg subcutaneous daily for 4–8 weeks
- Cycle: 4–8 weeks on, 4 weeks off

**Stack:** Combine with MOTS-c for comprehensive mitochondrial peptide protocol`,
    synergies: ['mots-c', 'ss-31', 'nad-100mg', 'epithalon'],
    seoTitle: 'Buy Humanin 1mg | Mitochondrial Longevity Peptide | Alzheimer\'s Neuroprotection',
    deepDiveTitle: 'Humanin: The Mitochondria-Encoded Longevity Peptide That Protects Against Alzheimer\'s and Aging',
    highlights: [
      { title: 'Mitochondrial Origin', body: 'Encoded in mitochondrial DNA — Humanin is a member of the newly discovered class of mitochondria-derived peptides (MDPs) that function as systemic longevity hormones.' },
      { title: 'Alzheimer\'s Neuroprotection', body: 'Directly inhibits amyloid-beta-induced neuronal apoptosis — the exact cell death pathway that drives Alzheimer\'s neurodegeneration — through multiple complementary mechanisms.' },
      { title: 'Centenarian Correlation', body: 'Plasma Humanin levels are significantly higher in centenarians and their offspring versus age-matched controls — creating a compelling longevity biomarker and therapeutic rationale.' },
      { title: 'Insulin Sensitization', body: 'Activates AMPK and improves insulin signaling — addressing the metabolic dysfunction that links aging, obesity, and neurodegeneration through shared insulin resistance pathways.' },
    ],
  },

  {
    slug: 'mots-c',
    name: 'MOTS-c 5mg',
    tagline: 'Mitochondrial micropeptide for metabolic regulation, exercise adaptation, and longevity',
    price: 129.99,
    category: 'Anti-Aging',
    tags: ['MOTS-c', 'Mitochondria', 'Metabolic', 'Exercise', 'Longevity'],
    image: 'https://phiogen.is/images/products/mots-c-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/mots-c-10mg?ref=PEPS',
    shortDescription: 'MOTS-c is a mitochondria-encoded peptide that mimics the metabolic effects of exercise, improves insulin sensitivity, reduces obesity, and activates AMPK for longevity signaling.',
    fullDescription: `**Exercise in a Peptide**

MOTS-c (mitochondrial open reading frame of the 12S rRNA-c) is a 16-amino-acid peptide encoded in mitochondrial DNA that circulates as an endocrine hormone, regulating metabolic homeostasis. Its actions are sometimes described as "exercise in a peptide" because it activates the same AMPK pathway triggered by physical activity, while also inducing GLUT4 translocation for improved glucose uptake, enhancing fatty acid oxidation, and improving mitochondrial efficiency.

**Mechanism: AMPK and Metabolic Reprogramming**

MOTS-c enters the nucleus and activates AMPK (AMP-activated protein kinase) — the master metabolic regulator that increases glucose uptake, promotes fatty acid oxidation, inhibits anabolic pathways during energy stress, and triggers mitochondrial biogenesis. These effects are essentially the metabolic signature of aerobic exercise, explaining why MOTS-c has been called a mitochondrial exercise signal.

**Longevity and Insulin Resistance**

MOTS-c levels decline with age and obesity. In animal models, exogenous MOTS-c administration reversed diet-induced obesity and insulin resistance. In age-accelerated mouse models, MOTS-c treatment extended median lifespan and improved physical performance. Human longevity studies have identified MOTS-c polymorphisms associated with extreme longevity in Japanese centenarians.`,
    benefits: [
      'Activates AMPK for exercise-mimicking metabolic effects',
      'Improves insulin sensitivity and GLUT4-mediated glucose uptake',
      'Reduces obesity and supports fat oxidation',
      'Triggers mitochondrial biogenesis for improved cellular energy',
      'Longevity association with Japanese centenarian polymorphisms',
      'Reverses age-related metabolic decline',
      'Synergizes with Humanin for comprehensive mitochondrial peptide stack',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Metabolic/longevity: 5–10mg subcutaneous weekly, or 2.5mg 2x per week
- Fat loss: 5mg subcutaneous 3x per week
- Cycle: 8–12 weeks on, 4 weeks off

**Stack:** Combine with Humanin for complete mitochondrial MDP protocol`,
    synergies: ['humanin', 'ss-31', 'nad-100mg', 'epithalon'],
    seoTitle: 'Buy MOTS-c 5mg | Mitochondrial Exercise Peptide | AMPK & Metabolic Health',
    deepDiveTitle: 'MOTS-c: The Mitochondrial Exercise Peptide That Reprograms Metabolism Through AMPK',
    highlights: [
      { title: 'Exercise Mimetic', body: 'MOTS-c activates AMPK — the same pathway triggered by aerobic exercise — producing metabolic benefits of physical activity at a cellular level regardless of training status.' },
      { title: 'Mitochondrial DNA Origin', body: 'Like Humanin, MOTS-c is encoded in mitochondrial DNA and functions as an endocrine hormone — a member of the newly recognized mitochondria-derived peptide (MDP) class.' },
      { title: 'Obesity and Diabetes Reversal', body: 'Animal studies demonstrate reversal of diet-induced obesity and insulin resistance — metabolic conditions that underlie much of age-related disease and mortality.' },
      { title: 'Centenarian Longevity Link', body: 'Specific MOTS-c genetic variants are significantly overrepresented in Japanese centenarians — establishing a direct genetic link between MOTS-c biology and exceptional human longevity.' },
    ],
  },

  {
    slug: 'ss-31',
    name: 'SS-31 (Elamipretide) 10mg',
    tagline: 'Mitochondria-targeted peptide for energy restoration, cardiac repair, and anti-aging',
    price: 149.99,
    category: 'Anti-Aging',
    tags: ['SS-31', 'Elamipretide', 'Mitochondria', 'Cardiac', 'Anti-Aging'],
    image: 'https://phiogen.is/images/products/ss-31-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ss-31-10mg?ref=PEPS',
    shortDescription: 'SS-31 (Elamipretide) is a mitochondria-targeted tetrapeptide that binds cardiolipin, restores electron transport chain efficiency, and reverses age-related mitochondrial dysfunction.',
    fullDescription: `**Targeting the Heart of Cellular Energy**

SS-31 (Szeto-Schiller peptide-31, elamipretide) is a cell-permeable tetrapeptide that selectively accumulates in the inner mitochondrial membrane where it binds to cardiolipin — a phospholipid essential for organizing the respiratory complexes of the electron transport chain (ETC). By stabilizing cardiolipin and preventing its peroxidation, SS-31 maintains cristae architecture and electron transport efficiency, directly addressing the mitochondrial dysfunction that underlies aging and many chronic diseases.

**Clinical Development: Heart Failure**

SS-31 (as elamipretide) has been studied in multiple clinical trials for heart failure, ischemia-reperfusion injury, and Barth syndrome — a fatal mitochondrial cardiopathy. In heart failure trials, IV elamipretide significantly improved cardiac function, exercise capacity, and quality of life. The Phase 2 STEADFAST trial in Barth syndrome showed dramatic improvements in exercise tolerance in this cardiolipin-deficient disease.

**Aging and Cellular Rejuvenation**

Aging is fundamentally accompanied by cardiolipin loss and ETC disorganization. Studies in aged mice showed that SS-31 treatment partially restored mitochondrial function, exercise capacity, and metabolic rate to levels seen in young animals — even when initiated in late life. This rejuvenation profile makes SS-31 one of the most compelling anti-aging interventions at the mechanistic level.`,
    benefits: [
      'Binds cardiolipin to stabilize ETC respiratory complexes',
      'Restores mitochondrial membrane potential and ATP production',
      'Reduces mitochondrial ROS generation at the source',
      'Clinical evidence in heart failure and Barth syndrome',
      'Reverses age-related mitochondrial dysfunction in aged tissue',
      'Reduces ischemia-reperfusion injury in cardiac and renal tissue',
      'Preserves cristae architecture essential for ETC efficiency',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Anti-aging: 1–2mg subcutaneous daily or every other day
- Cardiac/clinical: 0.05mg/kg IV or subcutaneous daily (clinical protocol)
- Cycle: 4–8 weeks on, 2–4 weeks off

**Stack:** Combine with NAD+, MOTS-c, and Humanin for full mitochondrial stack`,
    synergies: ['humanin', 'mots-c', 'nad-100mg', 'epithalon'],
    seoTitle: 'Buy SS-31 Elamipretide 10mg | Mitochondria-Targeted Peptide | Cardiac Anti-Aging',
    deepDiveTitle: 'SS-31 Elamipretide: The Cardiolipin-Binding Peptide That Restores Mitochondrial Function at the Source',
    highlights: [
      { title: 'Cardiolipin Binding', body: 'SS-31 is the only peptide that directly binds cardiolipin — the mitochondrial lipid that organizes electron transport complexes and whose peroxidation is a central event in aging.' },
      { title: 'ETC Efficiency Restoration', body: 'By stabilizing cristae structure and preventing cardiolipin oxidation, SS-31 restores electron transport chain efficiency at the exact site of age-related mitochondrial decline.' },
      { title: 'Clinical Heart Failure Data', body: 'Multiple clinical trials have demonstrated elamipretide\'s efficacy in heart failure and Barth syndrome — providing rare clinical validation for a peptide with anti-aging applications.' },
      { title: 'Late-Life Rejuvenation', body: 'Studies show mitochondrial and functional improvements even when SS-31 treatment starts in late life — suggesting reversibility of aging-associated mitochondrial dysfunction.' },
    ],
  },

  {
    slug: 'thymalin',
    name: 'Thymalin 20mg',
    tagline: 'Thymus bioregulator peptide for immune system rejuvenation and longevity',
    price: 79.99,
    category: 'Anti-Aging',
    tags: ['Thymalin', 'Thymus', 'Immune', 'Anti-Aging', 'Bioregulator'],
    image: 'https://phiogen.is/images/products/thymulin-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/thymulin-10mg?ref=PEPS',
    shortDescription: 'Thymalin is a polypeptide thymus bioregulator developed by Professor Khavinson that rejuvenates immune function, reduces cancer incidence, and extends longevity in human clinical data.',
    fullDescription: `**The Thymus Rejuvenation Peptide**

Thymalin is a polypeptide extract of the thymus gland developed by Professor Khavinson as part of his peptide bioregulator research program at the St. Petersburg Institute of Bioregulation. The thymus — the master organ of T-cell maturation — undergoes progressive involution beginning in puberty and is nearly completely atrophied by age 50, contributing directly to the immune senescence that makes older adults vulnerable to infections, cancer, and autoimmune disease. Thymalin counteracts this decline.

**Clinical Evidence: Human Longevity**

In Khavinson's landmark 30-year study, elderly patients treated with thymus bioregulators (including Thymalin) had significantly reduced mortality, lower cancer incidence, and better immune function compared to controls. A subsequent 8-year study confirmed reduced cardiovascular and cancer mortality. These remain some of the only long-term human clinical data supporting a peptide longevity intervention.

**Mechanism: T-Cell Restoration**

Thymalin restores T-cell populations — particularly CD4+ helper and CD8+ cytotoxic cells — that decline with aging and thymic involution. It upregulates thymic hormone production (thymosin, thymulin) and restores the ratio of T-helper to T-suppressor cells that characterizes healthy immune surveillance. This immune rejuvenation translates directly to improved resistance to infection, cancer surveillance, and reduced autoimmunity.`,
    benefits: [
      'Restores T-cell populations depleted by thymic involution',
      'Human clinical data showing reduced mortality and cancer incidence',
      'Rejuvenates immune surveillance against cancer cells',
      'Normalizes T-helper/T-suppressor ratio for immune balance',
      'Upregulates thymosin and thymulin production',
      'Reduces susceptibility to infections in aged immune systems',
      'Synergizes with Thymosin Alpha-1 for comprehensive thymic support',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water.

**Dosing:**
- Anti-aging protocol: 10mg IM or subcutaneous daily for 10 days, 2x per year
- Immune rehabilitation: 10–20mg daily for 10 days per cycle
- Khavinson protocol: spring and fall 10-day cycles

**Stack:** Combine with Epitalon and Cortagen for full Khavinson bioregulator stack`,
    synergies: ['thymosin-alpha-1', 'epithalon', 'cortagen', 'nad-100mg'],
    seoTitle: 'Buy Thymalin 20mg | Thymus Bioregulator Peptide | Immune Rejuvenation & Longevity',
    deepDiveTitle: 'Thymalin: The Thymus Peptide With 30-Year Human Clinical Data on Longevity and Cancer Prevention',
    highlights: [
      { title: '30-Year Human Trial', body: 'Thymalin is supported by one of the longest-running peptide longevity studies — a 30-year human clinical trial showing reduced mortality, cancer, and cardiovascular disease.' },
      { title: 'Thymic Involution Reversal', body: 'Directly targets the progressive loss of thymus function that begins in adolescence — restoring T-cell production that is the root cause of age-related immune decline.' },
      { title: 'Cancer Surveillance Restoration', body: 'By rejuvenating cytotoxic T-cell populations, Thymalin restores the immune system\'s ability to identify and eliminate pre-cancerous and cancer cells.' },
      { title: 'Khavinson Bioregulator System', body: 'Part of Khavinson\'s organ-specific bioregulator system — Thymalin works synergistically with Epitalon (pineal), Cortagen (brain), and Vesugen (vascular) for comprehensive rejuvenation.' },
    ],
  },

  {
    slug: 'snap-8-50mg',
    name: 'SNAP-8 50mg',
    tagline: 'SNAP-25 mimetic peptide for botox-like wrinkle reduction without injections',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['SNAP-8', 'Anti-Wrinkle', 'Botox Alternative', 'Skin', 'Expression Lines'],
    image: 'https://phiogen.is/images/products/snap-8-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/snap-8-10mg?ref=PEPS',
    shortDescription: 'SNAP-8 is an octapeptide that competes with SNAP-25 to inhibit SNARE complex formation, reducing muscle micro-contractions and expression lines for a topical botox-like effect.',
    fullDescription: `**Topical Neurotransmission Inhibitor for Wrinkle Reduction**

SNAP-8 (acetyl octapeptide-3) is a synthetic octapeptide fragment of SNAP-25 — a protein critical to the SNARE complex that mediates acetylcholine vesicle release at neuromuscular junctions. By competitively inhibiting SNAP-25 binding within the SNARE complex, SNAP-8 reduces the intensity of muscle contractions in facial muscles, diminishing the repetitive micro-movements that form expression lines and dynamic wrinkles.

**The Topical Botox Alternative**

Unlike botulinum toxin injections that permanently block neuromuscular transmission, SNAP-8 produces a partial, reversible reduction in neuromuscular activity when applied topically. Clinical studies showed that SNAP-8 reduced the depth of forehead wrinkles by up to 63% in certain skin types over 28 days, outperforming Argireline (acetyl hexapeptide-3) which uses the same mechanism but with fewer amino acids.

**Formulation and Application**

SNAP-8 is used exclusively as a topical ingredient — dissolved in water and incorporated into serums, creams, or lotions at concentrations of 2–10%. It is a peptide-based cosmeceutical that works synergistically with GHK-Cu and other anti-aging peptides in multi-ingredient formulations targeting different aspects of the aging process.`,
    benefits: [
      'Reduces dynamic expression wrinkles through SNARE complex inhibition',
      'Non-invasive topical alternative with botox-like mechanism',
      'Up to 63% wrinkle depth reduction in clinical studies',
      'More potent than Argireline through extended peptide sequence',
      'Compatible with GHK-Cu in comprehensive anti-aging formulations',
      'Reversible mechanism — no permanent neuromuscular effects',
      'Particularly effective for forehead, crow\'s feet, and glabellar lines',
    ],
    protocol: `**Formulation:** Dissolve in water phase of cosmetic preparation at 2–10% concentration.

**Application:**
- Apply 2–3 drops of 2–5% serum to cleansed skin, morning and evening
- Target forehead, crow\'s feet, and expression lines
- Results typically visible within 2–4 weeks of daily use
- Continue daily for sustained effect`,
    synergies: ['ghk-cu', 'ghk-cu-50mg', 'ghk-cu-100mg', 'melanotan-1'],
    seoTitle: 'Buy SNAP-8 50mg | Anti-Wrinkle Peptide | Topical Botox Alternative',
    deepDiveTitle: 'SNAP-8: The SNARE-Inhibiting Octapeptide That Reduces Expression Wrinkles Like Topical Botox',
    highlights: [
      { title: 'SNARE Complex Inhibition', body: 'SNAP-8 targets the same neuromuscular transmission pathway as botulinum toxin — competitively binding to SNAP-25 to reduce the acetylcholine release that drives expression line formation.' },
      { title: '63% Wrinkle Reduction', body: 'Clinical studies demonstrated up to 63% reduction in wrinkle depth over 28 days — exceptional efficacy for a topical, non-invasive peptide treatment.' },
      { title: 'Argireline Upgrade', body: 'SNAP-8 extends Argireline\'s 6-amino-acid sequence by two additional residues, improving receptor binding and delivering stronger SNARE inhibition for greater anti-wrinkle potency.' },
      { title: 'Cosmeceutical Synergy', body: 'Pairs ideally with GHK-Cu in multi-functional anti-aging formulations — SNAP-8 prevents new wrinkle formation through muscle relaxation while GHK-Cu rebuilds collagen beneath.' },
    ],
  },

  {
    slug: 'ghk-cu-50mg',
    name: 'GHK-Cu 50mg',
    tagline: 'Copper tripeptide for skin regeneration, wound healing, and anti-aging gene activation',
    price: 59.99,
    category: 'Anti-Aging',
    tags: ['GHK-Cu', 'Copper Peptide', 'Skin', 'Anti-Aging', 'Collagen'],
    image: 'https://phiogen.is/images/products/ghk-cu-50mg.png',
    affiliateUrl: 'https://phiogen.is/products/ghk-cu-50mg?ref=PEPS',
    shortDescription: 'GHK-Cu 50mg — the accessible entry point for the copper tripeptide that activates thousands of anti-aging genes and restores skin collagen, elastin, and barrier function.',
    fullDescription: `**The Original Copper Peptide**

GHK-Cu (glycyl-L-histidyl-L-lysine copper) was first isolated by Loren Pickart in 1973 from human plasma albumin. Decades of subsequent research revealed that this simple tripeptide coordinates copper ions and serves as a master regulator of tissue remodeling, wound healing, and anti-aging gene expression. The 50mg vial is the ideal starting point for users beginning topical or injectable GHK-Cu protocols.

**Gene Expression and Skin Rejuvenation**

At the molecular level, GHK-Cu acts as a transcription factor activator, modulating the expression of genes controlling collagen synthesis, matrix metalloproteinase regulation, antioxidant defense, and stem cell activation. Applied to skin, it stimulates dermal fibroblasts to produce collagen I, III, and V, restores elastin and proteoglycan content, and activates the glycosaminoglycan synthesis that maintains skin hydration and structure.

**Multiple Administration Routes**

GHK-Cu is effective both topically and via injection. Topically at 0.1–2%, it reduces fine lines, improves skin tone, and accelerates wound healing. Injectable GHK-Cu at lower concentrations (0.1–0.5mg subcutaneous) produces systemic gene activation effects — anti-inflammatory, neuroprotective, and antioxidant — that topical application cannot match in scope.`,
    benefits: [
      'Stimulates collagen I, III, and V synthesis in dermal fibroblasts',
      'Activates thousands of anti-aging genes in skin and systemic tissue',
      'Reduces fine lines and wrinkles through collagen restoration',
      'Accelerates wound healing and skin barrier repair',
      'Improves skin tone, thickness, and hydration',
      'Anti-inflammatory via NF-κB modulation',
      'Compatible with both topical and injectable administration',
    ],
    protocol: `**Topical:** Dissolve 50mg in 50mL carrier (peptide serum base). Apply 2x daily.
**Injectable:** Reconstitute in bacteriostatic water at 1–5mg/mL. Dose 0.1–0.5mg subcutaneous daily.

**Cycle:** Topical — continuous; Injectable — 4–8 week cycles`,
    synergies: ['snap-8-50mg', 'ghk-cu-100mg', 'epithalon', 'nad-100mg'],
    seoTitle: 'Buy GHK-Cu 50mg | Copper Peptide | Anti-Aging Skin Regeneration',
    deepDiveTitle: 'GHK-Cu 50mg: The Copper Tripeptide Entry Point for Skin Regeneration and Anti-Aging Gene Activation',
    highlights: [
      { title: '50mg Starting Supply', body: 'The ideal introductory quantity for users new to GHK-Cu — sufficient for a full 8-week injectable protocol or months of topical serum application.' },
      { title: 'Collagen Restoration', body: 'Stimulates dermal fibroblasts to produce all major collagen types — rebuilding the structural protein network that gives skin its thickness, strength, and wrinkle resistance.' },
      { title: 'Dual-Route Efficacy', body: 'Works topically on skin structure and injected for systemic anti-aging gene activation — a rare peptide that delivers genuine value through both administration routes.' },
      { title: 'Fifty Years of Research', body: 'Discovered in 1973, GHK-Cu has one of the longest research histories of any cosmeceutical peptide — providing decades of safety and efficacy data.' },
    ],
  },

  {
    slug: 'pinealon',
    name: 'Pinealon 20mg',
    tagline: 'Pineal gland tripeptide for neuroprotection, sleep restoration, and cognitive longevity',
    price: 79.99,
    category: 'Cognitive',
    tags: ['Pinealon', 'Pineal', 'Neuroprotection', 'Sleep', 'Cognitive'],
    image: 'https://phiogen.is/images/products/pinealon-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/pinealon-20mg?ref=PEPS',
    shortDescription: 'Pinealon is a tripeptide bioregulator of the pineal gland that provides neuroprotection, enhances memory, and supports circadian rhythm restoration — part of Khavinson\'s bioregulator system.',
    fullDescription: `**The Pineal Bioregulator**

Pinealon (Glu-Asp-Arg, EDR) is a short tripeptide bioregulator developed by Professor Khavinson that corresponds to the active sequence of the pineal gland. Like all of Khavinson's bioregulators, it is designed to restore the gene expression patterns of the specific organ from which it is derived — in this case the pineal gland, which governs melatonin secretion, circadian rhythms, and exerts neuroprotective effects throughout the nervous system.

**Neuroprotective Mechanism**

Pinealon has demonstrated neuroprotective effects in models of hypoxia, oxidative stress, and glutamate-induced neurotoxicity. It activates antioxidant gene expression in neuronal cells, promotes BDNF production, and modulates the HIF-1α pathway that regulates cellular responses to oxygen deprivation — relevant for stroke, TBI, and age-related neurovascular disease.

**Cognitive and Sleep Applications**

Unlike DSIP which primarily targets sleep architecture, Pinealon addresses the pineal gland's broader function — restoring the melatonin secretion rhythm, reducing oxidative stress in pineal tissue, and maintaining the circadian entrainment that coordinates nearly every physiological process. Age-related pineal calcification and function decline is directly linked to cognitive aging; Pinealon is researched as a means of preserving pineal function and the cognitive health it supports.`,
    benefits: [
      'Neuroprotective against hypoxia, oxidative stress, and excitotoxicity',
      'Restores pineal gland function and melatonin secretion rhythm',
      'Activates antioxidant gene expression in neuronal tissue',
      'Supports memory and cognitive function in aging',
      'Modulates HIF-1α for cellular oxygen stress adaptation',
      'Enhances BDNF production for neuroplasticity',
      'Part of Khavinson\'s validated bioregulator longevity system',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water.

**Dosing:**
- Neuroprotection/anti-aging: 5–10mg daily for 10 days, 2x per year
- Sleep restoration: 5mg subcutaneous in the evening during cycle
- Intranasal: 1–2mg per nostril daily during cycle

**Stack:** Combine with Epitalon and Thymalin in Khavinson protocol`,
    synergies: ['epithalon', 'thymalin', 'dsip', 'semax'],
    seoTitle: 'Buy Pinealon 20mg | Pineal Gland Peptide | Neuroprotection & Circadian Sleep',
    deepDiveTitle: 'Pinealon: The Pineal Gland Tripeptide for Neuroprotection, Sleep Restoration, and Cognitive Longevity',
    highlights: [
      { title: 'Pineal Gland Bioregulator', body: 'Pinealon is the specific bioregulator for the pineal gland — restoring the organ that governs melatonin, circadian entrainment, and neurological antioxidant protection.' },
      { title: 'Hypoxia Neuroprotection', body: 'Demonstrated protection against hypoxia-induced neuronal death through HIF-1α pathway modulation — relevant for stroke prevention and altitude or vascular cognitive impairment.' },
      { title: 'Khavinson Bioregulator System', body: 'Part of Khavinson\'s evidence-based bioregulator protocol — validated alongside Thymalin, Epitalon, and Cortagen for comprehensive organ-system rejuvenation.' },
      { title: 'Circadian Restoration', body: 'By restoring pineal function, Pinealon re-anchors the entire circadian clock — improving sleep quality, hormonal rhythms, and the metabolic processes that are time-locked to the circadian cycle.' },
    ],
  },

  {
    slug: 'cortagen',
    name: 'Cortagen 20mg',
    tagline: 'Brain cortex bioregulator peptide for cognitive protection and neurological longevity',
    price: 79.99,
    category: 'Anti-Aging',
    tags: ['Cortagen', 'Brain', 'Neuropeptide', 'Cognitive', 'Bioregulator'],
    image: 'https://phiogen.is/images/products/cortagen-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/cortagen-20mg?ref=PEPS',
    shortDescription: 'Cortagen is a bioregulator peptide for the cerebral cortex that supports neurological function, cognitive longevity, and neuroprotection — part of Khavinson\'s organ-specific bioregulator system.',
    fullDescription: `**Cortical Bioregulation for Cognitive Longevity**

Cortagen (Ala-Glu-Asp-Pro) is a tetrapeptide bioregulator developed by Khavinson that corresponds to an active sequence of the cerebral cortex. Like all bioregulators in this system, it is designed to restore normal gene expression patterns in the target organ — in this case the cerebral cortex — by penetrating cell nuclei and interacting with DNA to upregulate organ-specific protein synthesis.

**Mechanism: Epigenetic Gene Regulation**

Khavinson's bioregulators operate through a proposed epigenetic mechanism whereby short peptides penetrate cells, enter the nucleus, and bind to promoter regions of target genes. For cortical bioregulators like Cortagen, this results in upregulation of neurotrophic factors, antioxidant proteins, and structural proteins specific to cortical neurons — restoring the transcriptional signature of younger cortical tissue.

**Neurological Applications**

Cortagen is used as part of comprehensive anti-aging peptide stacks targeting the neurological system. It has been studied for cognitive decline prevention, post-stroke cortical recovery, and as part of Khavinson's longevity protocols. When combined with Pinealon (for the pineal gland) and Thymalin (for the immune system), it forms the neurological component of a system targeting the three primary drivers of aging: immune senescence, neuroendocrine decline, and cortical function loss.`,
    benefits: [
      'Restores gene expression patterns in cerebral cortex neurons',
      'Neuroprotective support for cortical tissue aging',
      'Part of Khavinson\'s validated organ-specific bioregulator system',
      'Supports cognitive function maintenance in aging',
      'Upregulates cortex-specific neurotrophic and antioxidant proteins',
      'Post-stroke cortical recovery research applications',
      'Synergizes with Pinealon and Thymalin in complete bioregulator stack',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water.

**Dosing:**
- Standard bioregulator cycle: 5–10mg daily IM or subcutaneous for 10 days
- 2x per year (spring and fall) per Khavinson protocol
- Can be combined in same cycle as other bioregulators

**Stack:** Epitalon + Thymalin + Cortagen + Pinealon for comprehensive Khavinson protocol`,
    synergies: ['epithalon', 'thymalin', 'pinealon', 'nad-100mg'],
    seoTitle: 'Buy Cortagen 20mg | Brain Cortex Bioregulator | Cognitive Anti-Aging Peptide',
    deepDiveTitle: 'Cortagen: The Cerebral Cortex Bioregulator for Cognitive Longevity in the Khavinson Bioregulator System',
    highlights: [
      { title: 'Cerebral Cortex Specificity', body: 'Cortagen is developed specifically for the cerebral cortex — targeting the brain region responsible for higher cognitive function, memory, and neurological aging.' },
      { title: 'Epigenetic Mechanism', body: 'Proposed to enter cell nuclei and interact with promoter DNA sequences — an epigenetic mechanism that may restore youthful transcriptional patterns in aging cortical neurons.' },
      { title: 'Khavinson Bioregulator Integration', body: 'Designed to work alongside Thymalin and Pinealon in Khavinson\'s multi-system approach — addressing the neural, immune, and neuroendocrine pillars of aging simultaneously.' },
      { title: 'Post-Stroke Research', body: 'Studied for cortical recovery following ischemic stroke — supporting the brain\'s neuroplastic recovery and reducing the cognitive deficits associated with vascular events.' },
    ],
  },

  {
    slug: 'vesugen',
    name: 'Vesugen 20mg',
    tagline: 'Vascular bioregulator peptide for blood vessel health and cardiovascular longevity',
    price: 79.99,
    category: 'Anti-Aging',
    tags: ['Vesugen', 'Vascular', 'Cardiovascular', 'Bioregulator', 'Anti-Aging'],
    image: 'https://phiogen.is/images/products/vesugen-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/vesugen-20mg?ref=PEPS',
    shortDescription: 'Vesugen is a vascular bioregulator peptide that restores blood vessel integrity, reduces endothelial aging, and supports cardiovascular longevity in Khavinson\'s bioregulator system.',
    fullDescription: `**Vascular System Bioregulation**

Vesugen (Lys-Glu-Asp) is a tripeptide bioregulator developed by Professor Khavinson targeting the vascular endothelium and smooth muscle — the tissues that line and control blood vessels. Vascular aging, characterized by endothelial dysfunction, increased arterial stiffness, and atherosclerotic plaque formation, is one of the primary drivers of age-related morbidity and mortality. Vesugen is designed to restore normal gene expression in vascular tissue, counteracting these age-related changes.

**Endothelial Function and Cardiovascular Risk**

The endothelium regulates vascular tone, inflammation, coagulation, and immune cell trafficking. Endothelial dysfunction precedes virtually every manifestation of cardiovascular disease. Vesugen's bioregulatory action on endothelial and vascular smooth muscle cells aims to restore endothelial nitric oxide production, reduce vascular oxidative stress, and maintain the gene expression patterns associated with healthy, youthful vascular function.

**Integration in Longevity Protocols**

Cardiovascular disease accounts for the largest share of age-related mortality. By specifically targeting vascular biology, Vesugen addresses this leading cause of death at the cellular level. In Khavinson's comprehensive bioregulator approach, Vesugen provides the vascular system component alongside Thymalin (immune), Cortagen (brain), and Epitalon (pineal) for complete multi-system rejuvenation.`,
    benefits: [
      'Restores endothelial function and vascular gene expression',
      'Reduces age-related arterial stiffness and endothelial dysfunction',
      'Targets the primary driver of cardiovascular mortality',
      'Supports endothelial nitric oxide production',
      'Reduces vascular oxidative stress and inflammation',
      'Part of Khavinson\'s validated multi-system bioregulator protocol',
      'Cardiovascular longevity support at the endothelial level',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water.

**Dosing:**
- Standard cycle: 5–10mg IM or subcutaneous daily for 10 days, 2x per year
- Cardiovascular focus: 10mg daily for 10 days, 3–4x per year
- Part of combined Khavinson bioregulator cycle

**Stack:** Vesugen + Thymalin + Epitalon + Cortagen for comprehensive longevity protocol`,
    synergies: ['epithalon', 'thymalin', 'cortagen', 'nad-100mg'],
    seoTitle: 'Buy Vesugen 20mg | Vascular Bioregulator Peptide | Cardiovascular Longevity',
    deepDiveTitle: 'Vesugen: The Vascular Bioregulator Addressing Endothelial Aging and Cardiovascular Longevity',
    highlights: [
      { title: 'Endothelial Targeting', body: 'Vesugen specifically targets vascular endothelium — the single-cell layer lining all blood vessels whose dysfunction underlies virtually every form of cardiovascular disease.' },
      { title: 'Cardiovascular Mortality Focus', body: 'By addressing vascular aging — the number one cause of age-related death — Vesugen targets the most impactful biological system for longevity extension.' },
      { title: 'Nitric Oxide Restoration', body: 'Endothelial NO production is a key biomarker of vascular health that declines with age; Vesugen\'s bioregulatory action supports the eNOS activity that maintains vascular tone and flexibility.' },
      { title: 'Khavinson Vascular Bioregulator', body: 'Represents the cardiovascular arm of Khavinson\'s bioregulator protocol — designed to complement Thymalin, Cortagen, and Epitalon in organ-specific system-wide rejuvenation.' },
    ],
  },

  {
    slug: 'cartalax',
    name: 'Cartalax 20mg',
    tagline: 'Cartilage bioregulator peptide for joint regeneration and connective tissue longevity',
    price: 79.99,
    category: 'Healing',
    tags: ['Cartalax', 'Cartilage', 'Joint', 'Bioregulator', 'Healing'],
    image: 'https://phiogen.is/images/products/cartalax-20mg.png',
    affiliateUrl: 'https://phiogen.is/products/cartalax-20mg?ref=PEPS',
    shortDescription: 'Cartalax is a cartilage bioregulator tripeptide that restores chondrocyte gene expression, supports joint regeneration, and addresses the root cause of age-related cartilage degeneration.',
    fullDescription: `**Cartilage Bioregulation for Joint Longevity**

Cartalax (Ala-Glu-Asp) is a tripeptide bioregulator developed by Khavinson that targets cartilage tissue — the specialized connective tissue that covers joint surfaces and whose degeneration is the defining feature of osteoarthritis. Unlike symptomatic treatments for joint pain, Cartalax is designed to restore normal gene expression in chondrocytes (the cells of cartilage), potentially addressing the root cause of age-related cartilage loss rather than just managing its symptoms.

**Chondrocyte Biology and Osteoarthritis**

Chondrocytes are the only cell type in cartilage, and their function — synthesizing collagen II, aggrecan, and other extracellular matrix components — declines with aging and cumulative mechanical stress. Once cartilage is lost, conventional medicine has few options beyond pain management and joint replacement. Cartalax's bioregulatory approach aims to preserve and restore chondrocyte synthetic function before irreversible damage occurs.

**Sports and Anti-Aging Applications**

For athletes, Cartalax provides a proactive approach to joint health that complements BPC-157 and TB-500's acute repair mechanisms. For aging individuals, it addresses the progressive joint degeneration that limits mobility and quality of life in later decades. As part of a comprehensive tissue bioregulator protocol alongside other Khavinson peptides, Cartalax provides the connective tissue component of a multi-system rejuvenation approach.`,
    benefits: [
      'Restores chondrocyte gene expression for cartilage matrix synthesis',
      'Addresses root cause of osteoarthritis — chondrocyte dysfunction',
      'Supports collagen II and aggrecan synthesis in joint cartilage',
      'Proactive joint preservation for athletes and aging individuals',
      'Part of Khavinson\'s validated organ-specific bioregulator system',
      'Complements BPC-157 and TB-500 for comprehensive joint healing',
      'Reduces age-related cartilage degeneration at the cellular level',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water.

**Dosing:**
- Standard cycle: 5–10mg IM or subcutaneous daily for 10 days, 2–4x per year
- Joint focus: 10mg daily for 10 days, monthly for 3–6 months for established OA
- Maintenance: 2x per year for joint preservation

**Stack:** Combine with BPC-157 and TB-500 for acute repair plus bioregulatory support`,
    synergies: ['bpc-157', 'tb-500', 'epithalon', 'ghk-cu'],
    seoTitle: 'Buy Cartalax 20mg | Cartilage Bioregulator Peptide | Joint Regeneration',
    deepDiveTitle: 'Cartalax: The Cartilage Bioregulator That Restores Chondrocyte Function at the Root of Joint Aging',
    highlights: [
      { title: 'Chondrocyte-Specific Action', body: 'Cartalax targets chondrocytes — the only cells in cartilage — to restore their collagen II and proteoglycan synthesis that maintains joint surface integrity.' },
      { title: 'Root-Cause Approach', body: 'Rather than masking joint pain, Cartalax addresses the biological cause — chondrocyte dysfunction — using Khavinson\'s organ-specific bioregulatory approach to restore cellular function.' },
      { title: 'Cartilage Preservation', body: 'Proactive cartilage maintenance prevents the irreversible damage of advanced osteoarthritis that ends athletic careers and limits mobility in aging — an ounce of prevention over a pound of joint replacement.' },
      { title: 'BPC-157 Synergy', body: 'Combines powerfully with BPC-157 for joint healing — BPC-157 provides acute repair signaling while Cartalax restores the long-term chondrocyte function that sustains cartilage health.' },
    ],
  },

  // ── Batch 3: Fat Loss / Metabolic ────────────────────────────────────────

  {
    slug: '5-amino-1mq-50mg',
    name: '5-Amino-1MQ 50mg',
    tagline: 'NNMT inhibitor for fat cell reduction, NAD+ elevation, and metabolic enhancement',
    price: 79.99,
    category: 'Weight Loss',
    tags: ['5-Amino-1MQ', 'NNMT Inhibitor', 'Fat Loss', 'NAD+', 'Metabolic'],
    image: 'https://phiogen.is/images/products/5-amino-1mq-50mg.png',
    affiliateUrl: 'https://phiogen.is/products/5-amino-1mq-50mg?ref=PEPS',
    shortDescription: '5-Amino-1MQ is a selective NNMT inhibitor that reduces fat cell size, elevates intracellular NAD+, and enhances metabolic rate — the mechanistically novel small molecule for body composition.',
    fullDescription: `**NNMT Inhibition: The Novel Fat Loss Target**

5-Amino-1-methylquinolinium (5-Amino-1MQ) is a selective inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme highly expressed in adipose tissue that promotes fat storage by consuming methyl groups and lowering intracellular NAD+. By blocking NNMT, 5-Amino-1MQ simultaneously elevates NAD+ levels in fat cells, activates SIRT1-mediated fat oxidation, and reverses the metabolic reprogramming that causes adipocyte hypertrophy (fat cell enlargement).

**Mechanism: The NAD+-SIRT1 Axis in Fat Tissue**

NNMT overactivity in adipose tissue creates a cycle of low NAD+, suppressed sirtuin activity, increased fat storage, and impaired thermogenesis. 5-Amino-1MQ breaks this cycle by restoring NAD+ availability in adipocytes, allowing SIRT1 to activate fat oxidation pathways and PGC-1α to upregulate mitochondrial biogenesis. Animal studies showed that treated mice lost fat without changes in food intake or activity — a metabolic rate enhancement, not appetite suppression.

**Practical Body Composition Applications**

5-Amino-1MQ is particularly relevant for individuals with diet-resistant fat accumulation, metabolic syndrome, or those in a body recomposition phase where fat loss without muscle loss is the primary goal. Its NAD+-elevating mechanism also provides the cognitive and energy benefits associated with NAD+ repletion.`,
    benefits: [
      'Inhibits NNMT to break the adipose fat-storage cycle',
      'Elevates intracellular NAD+ in fat cells for SIRT1 activation',
      'Reduces fat cell size without caloric restriction requirement',
      'Enhances metabolic rate through mitochondrial biogenesis',
      'Diet-resistant fat loss mechanism — complements caloric deficit',
      'Cognitive and energy benefits from elevated NAD+ levels',
      'Novel body composition tool targeting fat cell biology directly',
    ],
    protocol: `**Dosing:**
- Standard: 50mg orally once or twice daily with food
- Cycle: 8–12 weeks on, 4 weeks off
- Best combined with moderate caloric deficit and resistance training

**Administration:** Oral capsule/powder; dissolve in DMSO for sublingual use`,
    synergies: ['semaglutide-3mg', 'nad-100mg', 'aod9604-5mg', '5-amino-1mq-capsules'],
    seoTitle: 'Buy 5-Amino-1MQ 50mg | NNMT Inhibitor Fat Loss | NAD+ & Metabolic Enhancement',
    deepDiveTitle: '5-Amino-1MQ: The NNMT Inhibitor That Reverses Fat Cell Metabolic Reprogramming',
    highlights: [
      { title: 'NNMT Inhibition', body: '5-Amino-1MQ targets NNMT — an enzyme overexpressed in obese adipose tissue that suppresses NAD+ and drives fat storage — breaking the metabolic cycle at its source.' },
      { title: 'Fat Loss Without Caloric Restriction', body: 'Animal studies demonstrated significant fat loss without food restriction or increased activity — pure metabolic rate enhancement from restored NAD+/SIRT1 signaling in fat cells.' },
      { title: 'Adipocyte NAD+ Elevation', body: 'By blocking NNMT\'s NAD+ consumption, 5-Amino-1MQ restores NAD+ specifically in fat cells — activating sirtuin-mediated fat oxidation that was suppressed by NNMT overactivity.' },
      { title: 'Dual Body Composition Benefit', body: 'Reduces fat cell size while preserving lean mass — a true body recomposition mechanism rather than the indiscriminate weight loss of caloric restriction or appetite suppression.' },
    ],
  },

  {
    slug: '5-amino-1mq-capsules',
    name: '5-Amino-1MQ Capsules 50mg x60',
    tagline: 'Convenient oral NNMT inhibitor capsules for sustained metabolic fat loss',
    price: 119.99,
    category: 'Weight Loss',
    tags: ['5-Amino-1MQ', 'Capsules', 'NNMT Inhibitor', 'Fat Loss', 'Oral'],
    image: 'https://phiogen.is/images/products/5-amino-1mq-capsules-50mg-x-60-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/5-amino-1mq-capsules-50mg-x-60-capsules?ref=PEPS',
    shortDescription: '60 capsules of 5-Amino-1MQ 50mg each — a full 60-day supply of the NNMT inhibitor for sustained metabolic fat loss and NAD+ enhancement in convenient capsule form.',
    fullDescription: `**60-Day NNMT Inhibitor Protocol in Capsule Form**

The 5-Amino-1MQ 50mg x60 capsule format provides a complete two-month supply of this novel fat loss compound in the most convenient possible delivery system. Each capsule contains 50mg of 5-Amino-1MQ pre-measured and ready to use — no weighing, no dissolution, no DMSO required. Simply take 1–2 capsules daily and let the NNMT inhibition mechanism do its work.

**Superior Convenience for Long-Term Protocols**

The 60-capsule format is designed for users who recognize that NNMT inhibition works best over extended periods as fat cells gradually reduce in size and metabolic reprogramming reverses. The consistent dosing achievable with pre-measured capsules ensures the steady NNMT inhibition needed for optimal results — no skipped doses from preparation complexity.

**Value Proposition**

At $119.99 for 60 capsules, this format provides superior cost-per-dose compared to purchasing the 50mg raw powder repeatedly, while delivering the capsule convenience premium that users who value simplicity are willing to pay. It's the format of choice for individuals who want 5-Amino-1MQ as a reliable part of their daily supplement routine.`,
    benefits: [
      'Pre-dosed 50mg capsules for consistent NNMT inhibition',
      '60-day supply for complete long-cycle metabolic reprogramming',
      'No preparation required — most convenient 5-Amino-1MQ format',
      'All benefits of NNMT inhibition: fat reduction, NAD+, energy',
      'Suitable for continuous daily supplementation',
      'Precise dosing eliminates measurement error',
      'Travel-friendly capsule format for protocol adherence',
    ],
    protocol: `**Dosing:**
- Standard: 1 capsule (50mg) once or twice daily with food
- Cycle: 60-day continuous (one full bottle), 30 days off
- Morning dosing preferred for energy and metabolic benefits

**Stack:** Combine with resistance training and moderate caloric deficit`,
    synergies: ['5-amino-1mq-50mg', 'nad-100mg', 'semaglutide-3mg', 'aod9604-5mg'],
    seoTitle: 'Buy 5-Amino-1MQ Capsules 50mg x60 | NNMT Inhibitor Fat Loss | 60-Day Supply',
    deepDiveTitle: '5-Amino-1MQ Capsules 60-Day Supply: The Convenient Long-Cycle NNMT Inhibitor Protocol',
    highlights: [
      { title: '60-Day Complete Protocol', body: 'One bottle provides the full 60-day NNMT inhibition cycle that allows metabolic reprogramming to fully manifest — the right duration for meaningful fat cell reduction.' },
      { title: 'Zero Preparation', body: 'Pre-measured capsules eliminate the complexity of weighing, dissolving, or titrating — making consistent daily NNMT inhibition as simple as any standard supplement.' },
      { title: 'Same Mechanism, Better Compliance', body: 'The capsule format supports better long-term compliance than powder forms — critical for a compound whose benefits depend on sustained, consistent NNMT inhibition over weeks.' },
      { title: 'Travel-Ready Protocol', body: 'Capsules travel without refrigeration, measurement tools, or special handling — maintaining your body composition protocol regardless of location or schedule.' },
    ],
  },

  {
    slug: '5-amino-1mq-5mg',
    name: '5-Amino-1MQ 5mg',
    tagline: 'Low-dose NNMT inhibitor for microdosing and research titration',
    price: 19.99,
    category: 'Weight Loss',
    tags: ['5-Amino-1MQ', 'Low-Dose', 'NNMT Inhibitor', 'Research', 'Microdosing'],
    image: 'https://phiogen.is/images/products/5-amino-1mq-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/5-amino-1mq-5mg?ref=PEPS',
    shortDescription: '5-Amino-1MQ 5mg — a research-scale quantity ideal for dose titration, initial response assessment, or as a low-dose NNMT inhibitor adjunct in combination protocols.',
    fullDescription: `**Research-Scale Entry Point**

The 5mg 5-Amino-1MQ vial is designed for researchers performing initial dose-response assessments, for users who want to test tolerability before committing to larger quantities, or as a low-dose component in stacked metabolic protocols. At 5mg, it provides approximately 5 days of microdose testing (1mg/day) or a single full assessment at the 5mg level.

**Titration and Research Applications**

Understanding individual response to 5-Amino-1MQ before committing to a 50mg daily protocol is rational — particularly given that NNMT's role in methylation metabolism means individual variation in response is expected. The 5mg format allows researchers to begin at sub-therapeutic doses and escalate, characterizing the response profile that will inform optimal dosing for the larger protocol.

**Low-Dose Combination Use**

Some advanced protocols combine 5-Amino-1MQ at lower doses (5–10mg) with complementary fat loss agents such as semaglutide or AOD9604, using the NNMT inhibitor to address the fat cell biology directly while the other agents handle appetite/energy balance. The 5mg quantity is suitable for this adjunct role without the full commitment of a 50mg daily protocol.`,
    benefits: [
      'Entry-level quantity for initial tolerability and response assessment',
      'Dose titration before committing to 50mg standard protocol',
      'Low-cost way to introduce NNMT inhibition to a stack',
      'Research-scale for preclinical dose-response studies',
      'Useful as low-dose adjunct alongside other metabolic agents',
      'Same NNMT inhibition mechanism regardless of dose size',
    ],
    protocol: `**Dosing:**
- Titration: 1–2.5mg daily for first week to assess response
- Research: 5mg single dose or divide over multiple days
- Once tolerance confirmed, transition to 50mg daily protocol

**Administration:** Dissolve in DMSO or carrier for sublingual/topical use`,
    synergies: ['5-amino-1mq-50mg', '5-amino-1mq-capsules', 'nad-100mg', 'aod9604-2mg'],
    seoTitle: 'Buy 5-Amino-1MQ 5mg | Low-Dose NNMT Inhibitor | Research Titration',
    deepDiveTitle: '5-Amino-1MQ 5mg: Research-Scale NNMT Inhibitor for Titration and Combination Protocols',
    highlights: [
      { title: 'Titration-Sized Format', body: 'The 5mg quantity is precisely sized for responsible dose escalation — start low, assess individual NNMT inhibitor response, then scale to the therapeutic 50mg protocol with confidence.' },
      { title: 'Lowest Cost Entry', body: 'At $19.99, the 5mg vial is the most accessible entry point to 5-Amino-1MQ — allowing introduction to NNMT inhibition without financial commitment to a full cycle.' },
      { title: 'Adjunct Protocol Use', body: 'Low-dose NNMT inhibition (5–10mg) adds mechanistic complementarity to any fat loss stack targeting different biological levers — appetite, energy balance, and now fat cell biology.' },
      { title: 'Same Quality, Smaller Quantity', body: 'Identical peptide grade as the 50mg vial — no compromise in quality for the research-scale format, just right-sized for the intended application.' },
    ],
  },

  {
    slug: 'aicar',
    name: 'AICAR 50mg',
    tagline: 'AMPK activator for endurance enhancement, fat oxidation, and metabolic health',
    price: 69.99,
    category: 'Body Composition',
    tags: ['AICAR', 'AMPK', 'Endurance', 'Fat Oxidation', 'Metabolic'],
    image: 'https://phiogen.is/images/products/aicar-50mg.png',
    affiliateUrl: 'https://phiogen.is/products/aicar-50mg?ref=PEPS',
    shortDescription: 'AICAR (AICA ribonucleotide) is an AMPK activator that increases endurance capacity, enhances fat oxidation, and produces metabolic adaptations mimicking aerobic exercise training.',
    fullDescription: `**The Exercise Mimetic AMPK Activator**

AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) is a cell-permeable adenosine monophosphate analog that activates AMP-activated protein kinase (AMPK) — the master metabolic switch that senses cellular energy status and coordinates responses to energy stress. AICAR was famously used in the Salk Institute research that showed it could double the running endurance of sedentary mice, even without training — earning it the label of an "exercise pill."

**Mechanism: AMPK and Metabolic Reprogramming**

AICAR activates AMPK by mimicking the high AMP:ATP ratio that occurs during intense exercise. AMPK activation triggers a cascade that upregulates glucose uptake (GLUT4 translocation), increases fatty acid oxidation (CPT1 upregulation), promotes mitochondrial biogenesis (PGC-1α activation), and enhances insulin sensitivity — essentially programming the cellular metabolic state of a trained endurance athlete.

**Performance and Body Composition Applications**

Athletes use AICAR for endurance enhancement, accelerated metabolic adaptation during training camps, and fat oxidation in cutting phases. Its ability to increase mitochondrial content and fatty acid oxidation capacity makes it valuable for anyone seeking to improve their metabolic fitness — whether for athletic performance or long-term metabolic health and body composition.`,
    benefits: [
      'Activates AMPK to produce exercise-mimetic metabolic effects',
      'Doubles endurance capacity in sedentary animal models',
      'Increases fatty acid oxidation via CPT1 upregulation',
      'Promotes mitochondrial biogenesis through PGC-1α',
      'Improves insulin sensitivity and glucose metabolism',
      'Enhances glycogen sparing for endurance performance',
      'Metabolic adaptation without requiring increased training volume',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Performance: 500mcg–1mg/kg subcutaneous 1–2 hours before activity
- Metabolic/body composition: 10–20mg subcutaneous daily
- Cycle: 4–8 weeks; WADA-prohibited in competition

**Note:** AICAR is a prohibited substance in competitive sport`,
    synergies: ['slu-pp-332-30caps', 'nad-100mg', 'mots-c', 'bam-15-30ml'],
    seoTitle: 'Buy AICAR 50mg | AMPK Activator | Exercise Mimetic Endurance Enhancement',
    deepDiveTitle: 'AICAR: The AMPK-Activating Exercise Mimetic That Doubled Endurance Without Training',
    highlights: [
      { title: 'Doubled Endurance in Studies', body: 'Salk Institute research showed AICAR administration doubled running endurance in untrained mice — producing the cardiovascular adaptation of months of training in weeks of injection.' },
      { title: 'AMPK Master Switch', body: 'AICAR directly activates AMPK — the cellular sensor that coordinates all metabolic adaptations to exercise — producing trained-state metabolism without proportional training stress.' },
      { title: 'Mitochondrial Biogenesis', body: 'Upregulates PGC-1α, the master regulator of mitochondrial creation — increasing the number of mitochondria per cell and fundamentally improving cellular energy capacity.' },
      { title: 'Fat Oxidation Enhancement', body: 'Increases CPT1 expression to transport fatty acids into mitochondria for oxidation — shifting the body\'s fuel preference toward fat and sparing glycogen for high-intensity efforts.' },
    ],
  },

  {
    slug: 'aod9604-2mg',
    name: 'AOD9604 2mg',
    tagline: 'HGH-derived lipolytic fragment for targeted fat loss without anabolic side effects',
    price: 39.99,
    category: 'Weight Loss',
    tags: ['AOD9604', 'HGH Fragment', 'Fat Loss', 'Lipolysis', 'Body Composition'],
    image: 'https://phiogen.is/images/products/aod9604-2mg.png',
    affiliateUrl: 'https://phiogen.is/products/aod9604-2mg?ref=PEPS',
    shortDescription: 'AOD9604 is the lipolytic C-terminal fragment of human growth hormone (hGH 177-191) that stimulates fat breakdown and inhibits lipogenesis without growth-promoting side effects.',
    fullDescription: `**The Fat-Burning Fragment of Growth Hormone**

AOD9604 is a synthetic peptide comprising amino acids 177–191 of the C-terminus of human growth hormone — the fragment responsible for hGH's lipolytic (fat-breaking) activity. Unlike full-length hGH, AOD9604 does not bind to the IGF-1 receptor, produce IGF-1, promote glucose intolerance, or cause tissue growth — it is purely the fat-mobilizing portion of hGH with none of the anabolic risks.

**Mechanism: Lipolysis Without IGF-1**

AOD9604 mimics the way endogenous growth hormone stimulates fat breakdown: by activating β3-adrenergic receptors in adipose tissue and stimulating hormone-sensitive lipase, which hydrolyzes stored triglycerides into free fatty acids for energy use. It simultaneously inhibits lipogenesis (new fat creation) by downregulating fatty acid synthase activity. The result is a dual action on fat metabolism — more breakdown, less storage.

**Clinical Background**

AOD9604 has progressed through Phase IIb clinical trials for obesity with a good safety profile. While the clinical trials were not powered for approval, the safety data established that AOD9604 does not affect blood glucose, does not cause insulin resistance, and has no significant adverse effects at research doses — addressing key concerns with full hGH use for fat loss.`,
    benefits: [
      'Stimulates lipolysis via β3-adrenergic receptor activation',
      'Inhibits lipogenesis by downregulating fatty acid synthase',
      'No IGF-1 production or growth-promoting side effects',
      'No effect on blood glucose or insulin sensitivity',
      'Targeted fat loss without anabolic risks of full hGH',
      'Phase IIb clinical trial safety data',
      'Complements appetite-suppressing GLP-1 agents for comprehensive fat loss',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (2,000mcg/mL).

**Dosing:**
- Fat loss: 300–500mcg subcutaneous once daily, preferably fasted morning
- Cycle: 12–16 weeks continuous
- Best combined with caloric deficit and resistance training

**Timing:** Morning fasted injection maximizes lipolytic effect`,
    synergies: ['semaglutide-3mg', '5-amino-1mq-50mg', 'aod9604-5mg', 'adipotide-5mg'],
    seoTitle: 'Buy AOD9604 2mg | HGH Fragment Fat Loss Peptide | Lipolytic Without IGF-1',
    deepDiveTitle: 'AOD9604: The Pure Lipolytic Fragment of Growth Hormone With Clinical Safety Data',
    highlights: [
      { title: 'Pure Fat Loss Mechanism', body: 'AOD9604 contains only the lipolytic domain of hGH — stimulating fat breakdown and inhibiting fat storage without any of the anabolic, growth-promoting, or diabetogenic effects of full hGH.' },
      { title: 'No IGF-1 Production', body: 'Unlike hGH, AOD9604 does not activate IGF-1 signaling — eliminating cancer risk concerns, tissue growth, and glucose intolerance associated with elevated IGF-1.' },
      { title: 'Clinical Safety Validation', body: 'Phase IIb clinical trials established AOD9604\'s safety profile in humans — providing regulatory-grade evidence that this fragment is well-tolerated at therapeutic doses.' },
      { title: 'GLP-1 Complement', body: 'While GLP-1 agonists suppress appetite to reduce caloric intake, AOD9604 directly accelerates fat mobilization — a complementary mechanism for comprehensive body fat reduction.' },
    ],
  },

  {
    slug: 'aod9604-5mg',
    name: 'AOD9604 5mg',
    tagline: 'Larger supply HGH lipolytic fragment for extended fat loss protocols',
    price: 69.99,
    category: 'Weight Loss',
    tags: ['AOD9604', 'HGH Fragment', 'Fat Loss', 'Lipolysis', 'Extended Protocol'],
    image: 'https://phiogen.is/images/products/aod9604-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/aod9604-5mg?ref=PEPS',
    shortDescription: 'AOD9604 5mg — extended supply of the hGH lipolytic fragment for longer fat loss cycles without mid-protocol reconstitution.',
    fullDescription: `**Extended Protocol AOD9604**

The 5mg AOD9604 vial provides approximately 10–17 days of standard daily dosing (300–500mcg/day) — sufficient for continuous protocol use without the interruption of reconstituting a new vial mid-cycle. For users committed to a 12–16 week AOD9604 fat loss cycle, the 5mg format reduces the frequency of reconstitution and maintains consistent peptide concentration throughout the protocol.

**Same Mechanism, More Supply**

Every aspect of AOD9604's lipolytic mechanism remains identical in the 5mg vial — the same β3-adrenergic activation, fatty acid synthase inhibition, and targeted fat mobilization. The larger vial simply ensures uninterrupted protocol adherence, which is important for a compound where cumulative daily dosing drives progressive fat loss.

**Cost Efficiency**

At $69.99 for 5mg versus $39.99 for 2mg, the 5mg vial provides approximately 14% better cost-per-mg — a meaningful efficiency gain for users planning extended cycles where multiple vials would otherwise be required.`,
    benefits: [
      '10–17 days of continuous dosing in a single vial',
      'Reduces reconstitution frequency for extended fat loss cycles',
      'Better cost-per-mg than the 2mg format',
      'All AOD9604 lipolytic benefits: fat breakdown + lipogenesis inhibition',
      'Consistent concentration throughout longer protocols',
      'Ideal for 12–16 week body composition programs',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water (2,500–5,000mcg/mL).

**Dosing:**
- Fat loss: 300–500mcg subcutaneous daily, morning fasted
- Cycle: 12–16 weeks; use multiple 5mg vials for full cycle
- Best with caloric deficit, high-protein diet, and resistance training`,
    synergies: ['semaglutide-3mg', 'aod9604-2mg', 'aod9604-10mg', '5-amino-1mq-50mg'],
    seoTitle: 'Buy AOD9604 5mg | HGH Fragment Fat Loss Extended Supply | Lipolytic Peptide',
    deepDiveTitle: 'AOD9604 5mg: Extended Supply for Long-Cycle Lipolytic Protocols Without IGF-1',
    highlights: [
      { title: '5mg Extended Supply', body: 'Provides 10+ days of standard dosing per vial — reducing mid-protocol reconstitution and supporting the uninterrupted daily dosing that drives progressive fat loss.' },
      { title: 'Cost Efficiency', body: 'At approximately 14% better cost-per-mg than the 2mg format, the 5mg vial is the smart choice for planned multi-week AOD9604 protocols.' },
      { title: 'Protocol Continuity', body: 'Fewer vial changes means more consistent peptide concentration, less preparation time, and better adherence to the daily fasted dosing schedule that maximizes lipolytic effect.' },
      { title: 'Stack Foundation', body: 'The 5mg format is ideal as the lipolytic foundation of a fat loss stack — AOD9604 for fat mobilization, combined with appetite and energy management from complementary agents.' },
    ],
  },

  {
    slug: 'aod9604-10mg',
    name: 'AOD9604 10mg',
    tagline: 'Maximum supply AOD9604 for full cycle fat loss without multiple vial purchases',
    price: 119.99,
    category: 'Weight Loss',
    tags: ['AOD9604', 'HGH Fragment', 'Fat Loss', 'High-Volume', 'Body Composition'],
    image: 'https://phiogen.is/images/products/aod9604-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/aod9604-10mg?ref=PEPS',
    shortDescription: 'AOD9604 10mg — a full 20-33 day supply for extended fat loss cycles, representing the best value-per-mg for committed AOD9604 users.',
    fullDescription: `**Full-Cycle Supply for Maximum Commitment**

The 10mg AOD9604 vial provides 20–33 days of continuous daily dosing at standard therapeutic doses — covering a full month of protocol with a single vial. For users running AOD9604 as the lipolytic backbone of a 12–16 week fat loss program, the 10mg format minimizes vial purchases while maximizing cost efficiency and protocol consistency.

**Best Value Format**

At $119.99 for 10mg, this format provides the best cost-per-mg of all AOD9604 options — approximately 17% better than the 5mg vial and 24% better than the 2mg vial. For serious body composition programs, this cost efficiency compounds meaningfully across a multi-month cycle.

**Research Applications**

For researchers studying AOD9604's lipolytic mechanism, the 10mg format provides sufficient quantity for multi-week protocols with dose escalation, simultaneous condition comparisons, or longitudinal metabolic studies without mid-study batch changes that could introduce variance.`,
    benefits: [
      'Full month of continuous daily dosing in a single vial',
      'Best cost-per-mg of all AOD9604 formats',
      'Ideal for 12–16 week dedicated fat loss programs',
      'Eliminates multiple mid-protocol vial purchases',
      'Research-grade quantity for metabolic studies',
      'All AOD9604 lipolytic benefits at maximum protocol supply',
    ],
    protocol: `**Reconstitution:** Add 2–4mL bacteriostatic water (2,500–5,000mcg/mL).

**Dosing:**
- Fat loss: 300–500mcg subcutaneous daily, morning fasted
- Full cycle: 10mg covers 20–33 days; two vials for 6-week block
- Best with sustained caloric deficit and training consistency`,
    synergies: ['semaglutide-3mg', 'aod9604-5mg', '5-amino-1mq-50mg', 'adipotide-10mg'],
    seoTitle: 'Buy AOD9604 10mg | HGH Fragment Best Value Fat Loss | Full Cycle Supply',
    deepDiveTitle: 'AOD9604 10mg: Maximum Supply for Comprehensive Lipolytic Fat Loss Protocols',
    highlights: [
      { title: 'Best Value per mg', body: 'The 10mg format delivers AOD9604 at the lowest cost-per-mg — the rational purchase for anyone committed to a full 12+ week fat loss cycle.' },
      { title: '30+ Day Single Vial', body: 'A full month of daily dosing without reconstituting a new vial — supporting the uninterrupted protocol adherence that drives consistent progressive fat loss.' },
      { title: 'Multi-Month Planning', body: 'For a 12-week program, two to three 10mg vials provide the entire cycle — enabling bulk purchase and planning rather than ad hoc re-ordering mid-protocol.' },
      { title: 'Research Protocol Quantity', body: 'Sufficient quantity for multi-arm research studies, dose escalation assessments, or longitudinal metabolic monitoring without batch change confounds.' },
    ],
  },

  {
    slug: 'adipotide-5mg',
    name: 'Adipotide (FTPP) 5mg',
    tagline: 'Proapoptotic peptide that destroys adipose blood supply for targeted fat loss',
    price: 89.99,
    category: 'Weight Loss',
    tags: ['Adipotide', 'FTPP', 'Fat Loss', 'Proapoptotic', 'Vasculature'],
    image: 'https://phiogen.is/images/products/adipotide-fttp-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/adipotide-fttp-5mg?ref=PEPS',
    shortDescription: 'Adipotide (FTPP) is a chimeric proapoptotic peptide that selectively destroys the blood vessels supplying white adipose tissue, causing fat cell death through targeted vascular elimination.',
    fullDescription: `**Targeting Fat Tissue's Blood Supply**

Adipotide (Fat-Targeting Pro-apoptotic Peptide, FTPP) is a chimeric peptide consisting of a targeting sequence that binds prohibitin on the surface of white adipose tissue blood vessels, conjugated to a proapoptotic sequence (KLAKLAK)2 that kills the cell it enters. By selectively binding to and destroying the vasculature of white adipose tissue, Adipotide causes the fat cells it supplies to die from lack of blood flow — a completely novel mechanism for fat loss.

**Mechanism: Selective Vascular Apoptosis**

The targeting peptide (CKGGRAKDC) binds prohibitin expressed on the luminal surface of blood vessels within white adipose tissue — a unique molecular "ZIP code" that distinguishes adipose vasculature from the blood vessels of other tissues. Upon binding, the conjugated (KLAKLAK)2 sequence disrupts mitochondrial membranes, inducing apoptosis specifically in the endothelial cells of fat tissue vasculature. Without blood supply, the surrounding fat cells undergo secondary apoptosis.

**Primate Research Data**

In obese rhesus monkeys, Adipotide treatment produced 11% body weight loss and 27% reduction in visceral fat over four weeks — extraordinary results that represent some of the most dramatic fat loss observed with any single compound in primate research. Adipotide also improved insulin sensitivity, suggesting benefits beyond simple fat mass reduction.`,
    benefits: [
      'Novel mechanism: destroys adipose vasculature, not fat cells directly',
      '11% body weight loss in obese primate research',
      '27% visceral fat reduction in 4-week primate study',
      'Improved insulin sensitivity alongside fat loss',
      'Targets prohibitin on adipose vasculature with molecular precision',
      'Proapoptotic action specific to white adipose tissue blood vessels',
      'Addresses visceral fat — the most metabolically dangerous depot',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Research protocol: 100–200mcg/kg subcutaneous daily for 4 weeks (based on primate data)
- Conservative: 1mg subcutaneous daily for 4 weeks
- Monitor kidney function; renal stress observed in primate studies

**Caution:** Monitor hydration and kidney function; renal effects noted in research`,
    synergies: ['semaglutide-3mg', 'aod9604-5mg', '5-amino-1mq-50mg', 'adipotide-10mg'],
    seoTitle: 'Buy Adipotide FTPP 5mg | Proapoptotic Fat Loss Peptide | Visceral Fat Reduction',
    deepDiveTitle: 'Adipotide FTPP: The Proapoptotic Peptide That Eliminates Fat Tissue by Destroying Its Blood Supply',
    highlights: [
      { title: 'Unprecedented Fat Loss Mechanism', body: 'Adipotide works by a mechanism no other compound uses — binding specifically to adipose vasculature and inducing apoptosis to destroy the blood supply that sustains fat cells.' },
      { title: '27% Visceral Fat Reduction', body: 'Primate data demonstrated 27% reduction in visceral adipose tissue in four weeks — targeting the most dangerous fat depot linked to metabolic disease and cardiovascular risk.' },
      { title: 'Molecular Zip Code Targeting', body: 'The prohibitin-targeting sequence acts as a molecular address for adipose vasculature specifically — delivering the proapoptotic payload with tissue-level precision.' },
      { title: 'Insulin Sensitivity Bonus', body: 'Alongside dramatic fat loss, Adipotide improved insulin sensitivity in primates — addressing the metabolic consequences of obesity, not just the aesthetic ones.' },
    ],
  },

  {
    slug: 'adipotide-10mg',
    name: 'Adipotide (FTPP) 10mg',
    tagline: 'High-volume proapoptotic fat loss peptide for extended visceral fat targeting',
    price: 149.99,
    category: 'Weight Loss',
    tags: ['Adipotide', 'FTPP', 'Fat Loss', 'Proapoptotic', 'High-Dose'],
    image: 'https://phiogen.is/images/products/adipotide-fttp-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/adipotide-fttp-10mg?ref=PEPS',
    shortDescription: 'Adipotide (FTPP) 10mg — double supply for extended or higher-dose proapoptotic fat loss protocols targeting visceral adipose vasculature.',
    fullDescription: `**Extended Proapoptotic Fat Loss Protocol**

The 10mg Adipotide vial provides twice the quantity of the 5mg format — extending the research or therapeutic cycle duration, enabling higher dose investigations, or providing a longer continuous protocol without mid-cycle vial changes. For the 4-week primate protocol that showed 11% bodyweight loss, 10mg provides more flexibility in dose calibration and protocol length.

**Dose Scaling for Research**

In the primate studies, Adipotide was administered at 100–300mcg/kg over 4 weeks. For a human-scale research protocol, doses must be calibrated carefully given the potency of the proapoptotic mechanism. The 10mg format provides sufficient quantity to explore dose-response relationships or extend the 4-week protocol with a tapering phase for gradual vascular restoration.

**Maximum Value for Serious Protocols**

At $149.99 for 10mg versus $89.99 for 5mg, the 10mg vial offers better cost-per-mg for researchers planning extended or multiple Adipotide cycles. The cost savings allow more thorough dose-response characterization without budget constraints on protocol design.`,
    benefits: [
      'Double supply for extended or higher-dose research protocols',
      'Enables dose-response characterization at multiple levels',
      'Better cost-per-mg than the 5mg format',
      'Supports 8-week extended protocols or higher-dose 4-week cycles',
      'All Adipotide benefits: visceral fat targeting and vascular apoptosis',
      'Sufficient quantity for comprehensive primate-protocol replication',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 1mg subcutaneous daily for 4–8 weeks
- Dose escalation: start 0.5mg, increase to 1–2mg over 2 weeks
- Monitor kidney function throughout; maintain high hydration

**Caution:** Start low; monitor renal markers every 2 weeks`,
    synergies: ['semaglutide-3mg', 'adipotide-5mg', 'aod9604-10mg', '5-amino-1mq-50mg'],
    seoTitle: 'Buy Adipotide FTPP 10mg | Extended Proapoptotic Fat Loss | High-Volume Research',
    deepDiveTitle: 'Adipotide FTPP 10mg: Maximum Supply for Extended Visceral Fat Targeting Protocols',
    highlights: [
      { title: '10mg Research Volume', body: 'Double the 5mg format — supporting extended protocol durations, dose escalation designs, or multi-subject research without supply interruptions.' },
      { title: 'Protocol Flexibility', body: 'The 10mg volume enables either a standard 4-week protocol at higher doses or an extended 8-week cycle at standard doses — accommodating multiple research designs.' },
      { title: 'Best Cost-per-mg', body: 'The 10mg vial provides better cost-per-mg than the 5mg format — the rational choice for researchers planning comprehensive Adipotide dose-response characterization.' },
      { title: 'Primate Protocol Replication', body: '10mg provides sufficient quantity to closely replicate the 4-week primate protocol dosing schedule, supporting translational research from primate data to human-scale protocols.' },
    ],
  },

  {
    slug: 'bam-15-30ml',
    name: 'BAM-15 30mg/mL 30mL',
    tagline: 'Mitochondrial uncoupler for metabolic rate enhancement and thermogenic fat loss',
    price: 89.99,
    category: 'Body Composition',
    tags: ['BAM-15', 'Mitochondrial Uncoupler', 'Thermogenic', 'Fat Loss', 'Metabolic Rate'],
    image: 'https://phiogen.is/images/products/bam-15-30mg-ml-30ml.png',
    affiliateUrl: 'https://phiogen.is/products/bam-15-30mg-ml-30ml?ref=PEPS',
    shortDescription: 'BAM-15 is a mitochondria-targeted protonophore that increases metabolic rate and thermogenic fat burning without raising body temperature or causing cardiovascular toxicity.',
    fullDescription: `**Safe Mitochondrial Uncoupling**

BAM-15 (BAM15; N5,N6-bis(2-fluorophenyl)-[1,2,5]oxadiazolo[3,4-b]pyrazine-5,6-diamine) is a novel mitochondrial uncoupler developed to address the fundamental limitation of older uncouplers like DNP — dangerous and non-selective heating of the body. BAM-15 uncouples the mitochondrial proton gradient to generate heat from metabolic substrates, increasing overall energy expenditure and fat oxidation, but without accumulating in off-target tissues or raising core body temperature at relevant doses.

**Mechanism: Proton Gradient Dissipation**

Mitochondria generate ATP by creating a proton gradient across the inner membrane through the electron transport chain, then using that gradient to drive ATP synthase. Uncouplers like BAM-15 dissipate this gradient as heat instead of ATP, forcing mitochondria to oxidize more fuel to maintain cellular energy. At selected doses, BAM-15 increases metabolic rate significantly without the dangerous systemic temperature elevation that made DNP lethal.

**Research Outcomes: Fat Loss with Muscle Preservation**

Mouse studies using BAM-15 showed 30% reduction in fat mass over 4 weeks with preserved lean mass — a body recomposition profile that most metabolic interventions cannot achieve. Liver fat was also reduced, suggesting benefits for non-alcoholic fatty liver disease. BAM-15's mitochondrial targeting and temperature safety profile distinguish it from all previous uncoupling agents.`,
    benefits: [
      'Increases metabolic rate by dissipating mitochondrial proton gradient',
      '30% fat mass reduction in 4-week mouse studies',
      'Preserves lean mass during fat loss — true body recomposition',
      'Reduces liver fat and addresses NAFLD risk factors',
      'No body temperature increase at research doses',
      'Mitochondria-targeted for organ safety profile',
      'Novel mechanism complementary to GLP-1 and other fat loss agents',
    ],
    protocol: `**Administration:** Oral liquid; BAM-15 is typically administered orally or in drinking water in research.

**Dosing:**
- Research: 5–10mg/kg orally daily based on animal studies
- Human translation: start 50–100mg orally daily, assess tolerance
- Cycle: 4–8 weeks on, 4 weeks off

**Note:** Emerging research compound; human protocols not yet established`,
    synergies: ['slu-pp-332-30caps', 'aicar', 'nad-100mg', 'semaglutide-3mg'],
    seoTitle: 'Buy BAM-15 30mg/mL 30mL | Safe Mitochondrial Uncoupler | Thermogenic Fat Loss',
    deepDiveTitle: 'BAM-15: The Mitochondrial Uncoupler That Burns Fat Without Raising Body Temperature',
    highlights: [
      { title: 'Temperature-Safe Uncoupling', body: 'BAM-15 achieves mitochondrial uncoupling and metabolic rate increase without the dangerous core temperature elevation that made DNP and earlier uncouplers lethal.' },
      { title: '30% Fat Mass Reduction', body: 'Mouse studies demonstrated 30% fat mass reduction over four weeks — among the most dramatic fat loss results of any mechanistically novel compound in recent research.' },
      { title: 'Lean Mass Preservation', body: 'Unlike caloric restriction that sacrifices muscle, BAM-15\'s metabolic uncoupling preserves lean mass — enabling the simultaneous fat loss and muscle maintenance of true body recomposition.' },
      { title: 'NAFLD Improvement', body: 'Reduces liver fat accumulation alongside systemic fat loss — addressing the liver disease risk that frequently accompanies obesity and metabolic syndrome.' },
    ],
  },

  {
    slug: 'bam-15-50ml',
    name: 'BAM-15 50mg/mL 30mL',
    tagline: 'Higher concentration BAM-15 for dose-flexible mitochondrial uncoupling research',
    price: 129.99,
    category: 'Body Composition',
    tags: ['BAM-15', 'Mitochondrial Uncoupler', 'High Concentration', 'Thermogenic', 'Fat Loss'],
    image: 'https://phiogen.is/images/products/bam-15-50mg-ml-30ml.png',
    affiliateUrl: 'https://phiogen.is/products/bam-15-50mg-ml-30ml?ref=PEPS',
    shortDescription: 'BAM-15 at 50mg/mL in 30mL — higher concentration format for increased flexibility in dose calibration across research protocols for mitochondrial uncoupling.',
    fullDescription: `**Higher Concentration for Protocol Flexibility**

The 50mg/mL BAM-15 format provides 1,500mg total in 30mL — 67% more total compound than the 30mg/mL format at smaller liquid volume. This concentration allows more precise dose calibration for users who need to accurately deliver specific mg/kg doses in lower liquid volumes, reducing the volume of oral administration required at higher research doses.

**Research Protocol Advantages**

At 50mg/mL, smaller liquid volumes are required to deliver equivalent doses — an advantage when administering to research animals or when minimizing oral liquid volume is important for tolerance or protocol design. The higher concentration also extends protocol duration per bottle at standard doses.

**Same Mechanism, More Flexibility**

The BAM-15 compound is identical at both concentrations — the only difference is the mg/mL ratio, giving researchers the flexibility to choose the concentration that best fits their dosing equipment, subject characteristics, and protocol requirements.`,
    benefits: [
      'Higher concentration for precise dose calibration at lower volumes',
      '1,500mg total BAM-15 for extended research protocols',
      'Smaller oral liquid volumes at equivalent doses',
      'Increased protocol duration per bottle at standard doses',
      'All BAM-15 thermogenic and fat loss mechanisms preserved',
      'Better suited for high-dose research designs',
    ],
    protocol: `**Administration:** Oral liquid; measure precisely with syringe for dose accuracy.

**Dosing:**
- High-dose research: 10–20mg/kg orally (animal-to-human not yet validated)
- Human translational: 50–150mg orally daily
- Cycle: 4–8 weeks; allow 4 weeks recovery

**Use precise measurement tools; higher concentration requires accurate dosing`,
    synergies: ['bam-15-30ml', 'slu-pp-332-liquid', 'aicar', 'semaglutide-3mg'],
    seoTitle: 'Buy BAM-15 50mg/mL 30mL | High Concentration Mitochondrial Uncoupler | Research',
    deepDiveTitle: 'BAM-15 50mg/mL: Higher Concentration Format for Advanced Mitochondrial Uncoupling Research',
    highlights: [
      { title: '50mg/mL Concentration', body: 'Higher concentration delivers equivalent doses in smaller liquid volumes — reducing oral administration burden and allowing more precise dose calibration with standard research equipment.' },
      { title: '1,500mg Total Content', body: '30mL at 50mg/mL provides 1,500mg total BAM-15 — 67% more compound than the 30mg/mL format for extended or higher-dose research protocols.' },
      { title: 'Protocol Duration Extension', body: 'At the same daily dose, the higher concentration provides fewer administrations needed and longer protocol duration per bottle — improving research efficiency.' },
      { title: 'Advanced Research Design', body: 'Ideal for dose escalation studies, multi-arm comparisons, or protocols requiring precise mg/kg dosing at higher levels where the 30mg/mL concentration would require inconveniently large volumes.' },
    ],
  },

  {
    slug: 'l-carnitine-400mg',
    name: 'L-Carnitine 400mg/mL',
    tagline: 'Injectable L-Carnitine for enhanced fat oxidation and exercise performance',
    price: 39.99,
    category: 'Body Composition',
    tags: ['L-Carnitine', 'Fat Oxidation', 'Performance', 'Injectable', 'Body Composition'],
    image: 'https://phiogen.is/images/products/l-carnitine-400mg-ml.png',
    affiliateUrl: 'https://phiogen.is/products/l-carnitine-400mg-ml?ref=PEPS',
    shortDescription: 'Injectable L-Carnitine 400mg/mL for superior bioavailability versus oral supplementation — transports fatty acids into mitochondria for enhanced fat oxidation and performance.',
    fullDescription: `**The Fatty Acid Transport Molecule**

L-Carnitine is a conditionally essential nutrient that plays an indispensable role in energy metabolism — it is the transporter that carries long-chain fatty acids across the inner mitochondrial membrane for beta-oxidation. Without adequate L-Carnitine, fat cannot be efficiently used as fuel, making carnitine status a rate-limiting factor for fat oxidation. Injectable L-Carnitine achieves blood levels far superior to oral supplementation.

**Injectable vs. Oral Bioavailability**

Oral L-Carnitine has approximately 14–18% bioavailability due to incomplete intestinal absorption and significant first-pass metabolism. Injectable L-Carnitine bypasses these limitations, achieving blood levels 10–20x higher than equivalent oral doses. This direct delivery to circulation means fatty acids can be transported into mitochondria at maximum capacity — particularly important during fasted exercise when fat oxidation is the primary energy source.

**Performance and Body Composition**

Research supports L-Carnitine's role in reducing exercise-induced muscle damage (by reducing glycogen utilization and shifting fuel use to fat), improving recovery, increasing VO2 max, and reducing post-exercise lactate accumulation. The 400mg/mL concentration provides a clinically relevant dose in a practical injection volume.`,
    benefits: [
      'Transports fatty acids into mitochondria for beta-oxidation',
      'Injectable bioavailability 10–20x superior to oral forms',
      'Reduces exercise-induced muscle damage and fatigue',
      'Improves fat oxidation during aerobic and fasted exercise',
      'Decreases post-exercise lactate accumulation',
      'Supports thyroid hormone metabolism and cardiac energy',
      'Synergistic with AOD9604 for comprehensive fat mobilization',
    ],
    protocol: `**Dosing:**
- Fat oxidation: 1–2g (2.5–5mL) IM or IV before aerobic exercise
- Recovery: 1–2g post-exercise IM injection
- Daily: 500mg–1g subcutaneous morning injection on non-training days
- Cycle: continuous use is safe; no cycling required`,
    synergies: ['aod9604-5mg', 'aicar', 'l-carnitine-600mg', 'semaglutide-3mg'],
    seoTitle: 'Buy L-Carnitine 400mg/mL Injectable | Fat Oxidation | Exercise Performance',
    deepDiveTitle: 'Injectable L-Carnitine: Superior Bioavailability for Maximum Fat Oxidation and Performance',
    highlights: [
      { title: '400mg/mL Concentration', body: 'A clinically relevant concentration delivering 400mg per mL — a full gram dose in just 2.5mL injection, minimizing injection volume while delivering therapeutic carnitine levels.' },
      { title: 'Injectable Bioavailability', body: 'Bypasses the 14-18% oral bioavailability limitation — injectable L-Carnitine achieves blood levels that oral supplementation simply cannot match regardless of dose.' },
      { title: 'Mitochondrial Gateway', body: 'L-Carnitine is literally the molecule that opens the door to mitochondrial fat burning — without adequate carnitine, dietary and stored fat cannot be efficiently oxidized for energy.' },
      { title: 'Exercise Damage Reduction', body: 'By shifting fuel use toward fat and away from muscle glycogen and protein, L-Carnitine reduces the cellular damage that accumulates during training — supporting faster recovery between sessions.' },
    ],
  },

  {
    slug: 'l-carnitine-600mg',
    name: 'L-Carnitine 600mg/mL',
    tagline: 'High-concentration injectable L-Carnitine for maximum fat oxidation efficiency',
    price: 49.99,
    category: 'Body Composition',
    tags: ['L-Carnitine', 'High Concentration', 'Fat Oxidation', 'Injectable', 'Performance'],
    image: 'https://phiogen.is/images/products/l-carnitine-600mg-ml.png',
    affiliateUrl: 'https://phiogen.is/products/l-carnitine-600mg-ml?ref=PEPS',
    shortDescription: 'L-Carnitine 600mg/mL — higher concentration injectable for delivering full gram doses in minimal injection volume, ideal for clinical IV protocols and pre-workout performance stacks.',
    fullDescription: `**Maximum Concentration for Minimum Volume**

The 600mg/mL L-Carnitine formulation delivers 600mg per mL — allowing a full 1,800mg dose in just 3mL of injection fluid. This high concentration is designed for users who require larger carnitine doses (1.5–3g) but prefer to minimize injection volume, or for IV drip applications where the concentrated formulation can be diluted precisely into saline for infusion.

**Clinical and Pre-Workout Applications**

Pre-workout IV L-Carnitine protocols used in clinical weight management settings typically employ 1–3g doses, where the 600mg/mL concentration significantly reduces infusion volume and preparation time. Athletes seeking maximum pre-training fat oxidation use 1.5–2g doses; the 600mg/mL format delivers these in 2.5–3.3mL — practical for IM administration without large injection volumes.

**Enhanced Protocol Efficiency**

For regular users who inject L-Carnitine daily, the 600mg/mL concentration means 33% less liquid volume per gram of carnitine compared to the 400mg/mL format — a meaningful comfort and convenience improvement for daily subcutaneous or IM use over weeks and months.`,
    benefits: [
      '600mg per mL for full-dose delivery in minimal volume',
      '33% more efficient than 400mg/mL for same carnitine dose',
      'Ideal for IV dilution in clinical carnitine infusion protocols',
      'Practical 2.5mL volume for 1.5g pre-workout dose',
      'All L-Carnitine fat oxidation and performance benefits',
      'Reduces injection discomfort versus high-volume lower-concentration formats',
    ],
    protocol: `**Dosing:**
- Pre-workout: 1.5–2g (2.5–3.3mL) IM 30 minutes before training
- IV protocol: 2–3g diluted in 100mL saline over 15–30 minutes
- Daily maintenance: 500mg–1g subcutaneous daily
- Continuous use protocol; no cycling required`,
    synergies: ['l-carnitine-400mg', 'aod9604-5mg', 'aicar', 'semaglutide-3mg'],
    seoTitle: 'Buy L-Carnitine 600mg/mL Injectable | High Concentration Fat Oxidation | IV Protocol',
    deepDiveTitle: 'L-Carnitine 600mg/mL: Maximum Concentration Injectable for Clinical and Performance Protocols',
    highlights: [
      { title: '600mg/mL Peak Concentration', body: 'The highest available L-Carnitine injectable concentration — delivering full 1.8g doses in a 3mL injection, minimizing volume while maximizing carnitine delivery.' },
      { title: 'IV Protocol Ready', body: 'Ideal concentration for dilution into IV saline protocols — allowing precise dose calibration for clinical carnitine infusion therapy.' },
      { title: '33% Volume Reduction', body: 'Versus the 400mg/mL format, the 600mg/mL concentration reduces injection volume by 33% for equivalent doses — less discomfort and faster administration for regular users.' },
      { title: 'Efficient Daily Dosing', body: 'For athletes and users taking L-Carnitine daily, the 600mg/mL concentration means meaningfully smaller injections every day — improving long-term protocol adherence.' },
    ],
  },

  {
    slug: 'mazdutide',
    name: 'Mazdutide 6mg',
    tagline: 'GLP-1/glucagon dual agonist for superior weight loss and metabolic control',
    price: 129.99,
    category: 'Weight Loss',
    tags: ['Mazdutide', 'GLP-1', 'Glucagon', 'Dual Agonist', 'Weight Loss'],
    image: 'https://phiogen.is/images/products/mazdutide-6mg.png',
    affiliateUrl: 'https://phiogen.is/products/mazdutide-6mg?ref=PEPS',
    shortDescription: 'Mazdutide is a once-weekly GLP-1/glucagon receptor dual agonist in Phase III trials that produces superior weight loss versus GLP-1 monotherapy by adding thermogenic glucagon activation.',
    fullDescription: `**Dual-Receptor Weight Loss Innovation**

Mazdutide (IBI362, OXM3) is an oxyntomodulin-based peptide being developed by Innovent Biologics that simultaneously activates both GLP-1 receptors and glucagon receptors. While GLP-1 agonists like semaglutide reduce appetite and slow gastric emptying, the additional glucagon receptor activation increases energy expenditure through hepatic fat oxidation and thermogenesis — addressing both sides of the energy balance equation simultaneously.

**Mechanism: GLP-1 + Glucagon Synergy**

GLP-1 receptor activation reduces appetite, slows gastric emptying, improves insulin secretion, and reduces glucagon. Adding glucagon receptor activation counterintuitively enhances weight loss by increasing metabolic rate, promoting hepatic fatty acid oxidation, and reducing liver fat — effects that GLP-1 alone cannot achieve. Phase II trials demonstrated weight loss of 10–15% body weight over 24 weeks at optimal doses.

**Phase III Pipeline**

Mazdutide is currently in Phase III trials in China and Phase II/III in global markets, positioning it among the next generation of weight loss pharmaceuticals. For researchers and advanced users, it represents a glimpse at dual-mechanism obesity pharmacology that is expected to outperform GLP-1 monotherapy in comparative trials.`,
    benefits: [
      'Dual GLP-1/glucagon receptor activation for superior weight loss',
      'Increases metabolic rate via glucagon thermogenic signaling',
      'Reduces liver fat through hepatic fatty acid oxidation',
      'Appetite suppression from GLP-1 receptor pathway',
      '10–15% body weight loss in Phase II trials',
      'Once-weekly dosing for improved adherence',
      'Addresses both appetite and energy expenditure simultaneously',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Research: 0.1–0.3mg subcutaneous weekly (based on Phase II protocols)
- Start: 0.1mg weekly for 4 weeks, increase to 0.2mg, then 0.3mg
- Once-weekly subcutaneous injection

**Note:** Phase III compound; protocols are based on clinical trial data`,
    synergies: ['semaglutide-3mg', 'survodutide', '5-amino-1mq-50mg', 'aod9604-5mg'],
    seoTitle: 'Buy Mazdutide 6mg | GLP-1 Glucagon Dual Agonist | Phase III Weight Loss Peptide',
    deepDiveTitle: 'Mazdutide: The GLP-1/Glucagon Dual Agonist Delivering Superior Weight Loss in Phase III Trials',
    highlights: [
      { title: 'Dual Receptor Mechanism', body: 'Combines GLP-1 appetite suppression with glucagon\'s thermogenic and hepatic fat oxidation effects — addressing both caloric intake and energy expenditure for superior weight loss.' },
      { title: '10–15% Body Weight Loss', body: 'Phase II data showing 10–15% body weight reduction over 24 weeks — competitive with or exceeding established GLP-1 monotherapy at comparable doses.' },
      { title: 'Liver Fat Reduction', body: 'Glucagon receptor activation specifically reduces hepatic fat accumulation — addressing NAFLD/NASH, the liver disease complication of obesity that GLP-1 agonists address less effectively.' },
      { title: 'Phase III Pipeline', body: 'In active Phase III development — representing the clinically validated next generation of weight loss pharmacology that will reach the market after semaglutide.' },
    ],
  },

  {
    slug: 'o-304',
    name: 'O-304 (ATX-304) 100mg x60 Capsules',
    tagline: 'Pan-AMPK activator for metabolic syndrome, exercise mimicry, and body composition',
    price: 119.99,
    category: 'Body Composition',
    tags: ['O-304', 'ATX-304', 'AMPK', 'Metabolic Syndrome', 'Exercise Mimetic'],
    image: 'https://phiogen.is/images/products/o-304-atx-304-100mg-x-60-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/o-304-atx-304-100mg-x-60-capsules?ref=PEPS',
    shortDescription: 'O-304 (ATX-304) is a first-in-class pan-AMPK activator in clinical trials that produces exercise-like metabolic effects — improving insulin sensitivity, reducing fat, and enhancing vascular function.',
    fullDescription: `**The Clinical-Stage Pan-AMPK Activator**

O-304 (ATX-304) is a small molecule pan-AMPK activator developed by Betagenon AB, currently in Phase IIb trials for type 2 diabetes and cardiovascular disease. As a "pan" activator, it activates all AMPK heterotrimeric complexes — not just the α2β1γ1 form activated by existing agents — producing a more complete exercise-mimetic metabolic response than any previous AMPK activator.

**Mechanism: Comprehensive AMPK Activation**

O-304 binds to the ADaM (allosteric drug and metabolite) site on AMPK, activating the enzyme allosterically and protecting it from dephosphorylation simultaneously. Pan-AMPK activation coordinates glucose uptake, fatty acid oxidation, mitochondrial biogenesis, and vascular relaxation (via eNOS activation) — producing a metabolic state that closely mimics sustained aerobic exercise across multiple tissues.

**Clinical Evidence**

Phase I/IIa trials demonstrated that O-304 significantly reduced fasting glucose, improved insulin sensitivity, reduced visceral fat, and improved peripheral blood flow in type 2 diabetic patients. The concurrent vascular effects — including improved microvascular blood flow — make O-304 particularly relevant for metabolic syndrome, where vascular dysfunction accompanies insulin resistance and obesity.`,
    benefits: [
      'First-in-class pan-AMPK activator in clinical trials',
      'Reduces fasting glucose and improves insulin sensitivity',
      'Promotes fat oxidation and reduces visceral adiposity',
      'Improves vascular function via eNOS activation',
      'Oral capsule format for convenient daily dosing',
      'Exercise-mimetic effects without physical exertion requirement',
      '60-capsule supply for complete metabolic improvement cycle',
    ],
    protocol: `**Dosing:**
- Metabolic improvement: 100mg orally daily with food (per clinical protocol)
- Exercise mimicry: 100–200mg daily for 8–12 weeks
- Cycle: 12-week cycles aligned with clinical trial protocols

**Capsule format:** Take with food; clinical trials used once-daily oral dosing`,
    synergies: ['aicar', 'mots-c', 'slu-pp-332-30caps', 'nad-100mg'],
    seoTitle: 'Buy O-304 ATX-304 100mg x60 Capsules | Pan-AMPK Activator | Clinical Metabolic Agent',
    deepDiveTitle: 'O-304 (ATX-304): The Pan-AMPK Activator in Clinical Trials for Metabolic Syndrome and Cardiovascular Disease',
    highlights: [
      { title: 'Pan-AMPK Activation', body: 'O-304 activates all AMPK complexes simultaneously — delivering more complete exercise-mimetic metabolic signaling than any previous AMPK-targeting compound.' },
      { title: 'Clinical Trial Validation', body: 'Phase I/IIa data confirms reductions in fasting glucose, improved insulin sensitivity, and visceral fat loss in T2D patients — regulatory-grade evidence for its metabolic efficacy.' },
      { title: 'Vascular Function Improvement', body: 'Beyond metabolic effects, O-304 improves microvascular blood flow via eNOS activation — addressing the vascular component of metabolic syndrome that pure metabolic agents miss.' },
      { title: 'ADaM Site Binding', body: 'O-304 uses AMPK\'s allosteric activation site (ADaM) — a mechanism that both activates the enzyme and protects its activation from being reversed, sustaining the metabolic signal.' },
    ],
  },

  {
    slug: 'semaglutide-3mg',
    name: 'Semaglutide 3mg',
    tagline: 'GLP-1 receptor agonist for appetite suppression, glucose control, and weight loss',
    price: 49.99,
    category: 'Weight Loss',
    tags: ['Semaglutide', 'GLP-1', 'Weight Loss', 'Appetite', 'Ozempic'],
    image: 'https://phiogen.is/images/products/semaglutide-3mg.png',
    affiliateUrl: 'https://phiogen.is/products/semaglutide-3mg?ref=PEPS',
    shortDescription: 'Semaglutide 3mg — the GLP-1 receptor agonist behind Ozempic and Wegovy, for appetite suppression, blood glucose control, and significant body weight reduction.',
    fullDescription: `**The World's Most Impactful Weight Loss Drug**

Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist developed by Novo Nordisk, approved as Ozempic for type 2 diabetes and Wegovy for obesity. It mimics endogenous GLP-1 by activating GLP-1 receptors in the pancreas, hypothalamus, and GI tract — producing dose-dependent appetite suppression, delayed gastric emptying, improved insulin secretion, and reduced glucagon production. Clinical trials demonstrated 15–20% body weight loss — more than any previous anti-obesity medication.

**Mechanism: Brain, Gut, and Pancreas**

GLP-1 receptors in the hypothalamus reduce appetite and increase satiety signals. In the GI tract, semaglutide slows gastric emptying, reducing post-meal glucose spikes and extending satiety periods. In the pancreas, it enhances glucose-dependent insulin secretion and suppresses inappropriate glucagon release. The 3mg vial provides approximately 3–6 weeks of supply at common research doses.

**Cardiovascular Benefits**

Beyond weight loss, semaglutide reduces major adverse cardiovascular events (MACE) by 20% in diabetic patients with established cardiovascular disease (SUSTAIN-6 trial) and reduces cardiovascular mortality and hospitalizations in non-diabetic obese patients (SELECT trial). These cardiovascular benefits have extended semaglutide's relevance beyond weight management.`,
    benefits: [
      'Suppresses appetite through hypothalamic GLP-1 receptor activation',
      '15–20% body weight loss in clinical trials',
      'Reduces major adverse cardiovascular events by 20%',
      'Improves insulin secretion and reduces glucagon',
      'Delays gastric emptying for extended satiety',
      'Reduces visceral and subcutaneous fat stores',
      'FDA-approved mechanism (Ozempic/Wegovy)',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- Starting: 0.25mg subcutaneous weekly for 4 weeks
- Escalate: 0.5mg weekly for 4 weeks, then 1mg weekly
- Maintenance: 1–2mg weekly (Ozempic protocol)
- Wegovy: escalate to 2.4mg weekly over 16 weeks`,
    synergies: ['semaglutide-30mg', 'aod9604-5mg', '5-amino-1mq-50mg', 'mazdutide'],
    seoTitle: 'Buy Semaglutide 3mg | GLP-1 Weight Loss | Ozempic Research Peptide',
    deepDiveTitle: 'Semaglutide: The GLP-1 Agonist Behind Ozempic and Wegovy — Mechanism and Protocol Guide',
    highlights: [
      { title: '15–20% Body Weight Loss', body: 'Clinical trials of semaglutide 2.4mg demonstrated 15–20% body weight reduction over 68 weeks — more than any previously approved anti-obesity medication.' },
      { title: 'Cardiovascular Protection', body: 'Beyond weight loss, SELECT trial data confirmed semaglutide reduces major cardiovascular events in obese non-diabetic patients — a landmark result reframing obesity treatment.' },
      { title: 'Brain-Gut-Pancreas Mechanism', body: 'Semaglutide acts simultaneously on three organ systems — hypothalamus for appetite, GI tract for gastric emptying, and pancreas for insulin/glucagon — producing comprehensive metabolic control.' },
      { title: 'FDA-Approved Pharmacology', body: 'Approved as Ozempic and Wegovy, semaglutide\'s mechanism has passed the highest regulatory scrutiny — providing validated, well-characterized pharmacology for research applications.' },
    ],
  },

  {
    slug: 'semaglutide-30mg',
    name: 'Semaglutide 30mg',
    tagline: 'High-volume semaglutide for extended GLP-1 weight loss protocols',
    price: 249.99,
    category: 'Weight Loss',
    tags: ['Semaglutide', 'GLP-1', 'Weight Loss', 'High-Volume', 'Extended Protocol'],
    image: 'https://phiogen.is/images/products/semaglutide-30mg.png',
    affiliateUrl: 'https://phiogen.is/products/semaglutide-30mg?ref=PEPS',
    shortDescription: 'Semaglutide 30mg — a 10x larger vial for extended GLP-1 weight loss programs, providing approximately 30+ weeks of therapeutic dosing at Ozempic maintenance doses.',
    fullDescription: `**Sustained GLP-1 Protocol Supply**

The 30mg semaglutide vial provides approximately 15–30 weeks of dosing at the standard Ozempic maintenance dose of 1–2mg weekly — covering the full titration phase and much of the maintenance phase from a single vial. This eliminates the repeated purchasing and reconstitution required when managing semaglutide protocols with smaller vials, ensuring consistent concentration and protocol adherence throughout the weight loss journey.

**Economic Advantage for Long-Term Protocols**

Obesity treatment is not a sprint — the most significant body weight reductions with semaglutide are achieved over 52–68 weeks of continuous treatment. The 30mg vial is purpose-built for users who understand this timeline and want the economic and logistical efficiency of bulk supply. Per-mg cost is significantly improved versus the 3mg format for committed long-term users.

**Research and Clinical Management**

For physicians, wellness clinics, or research programs managing multiple subjects or patients on semaglutide protocols, the 30mg format provides substantial operational efficiency — fewer individual vial preparations, better inventory management, and consistent dosing quality throughout extended observation periods.`,
    benefits: [
      '15–30 weeks of weekly dosing from a single vial',
      'Optimal for the full 52–68 week clinical weight loss timeline',
      'Best cost-per-mg for long-term semaglutide protocols',
      'Eliminates mid-protocol reconstitution and supply interruptions',
      'All semaglutide benefits: appetite suppression, weight loss, cardioprotection',
      'Efficient format for clinical and research program management',
    ],
    protocol: `**Reconstitution:** Add 10–15mL bacteriostatic water for working concentration.

**Dosing:** Same as 3mg vial — titrate from 0.25mg weekly to 1–2.4mg weekly maintenance
**Extended protocol:** Plan 12–18 months of continuous use for maximum weight loss results
**Storage:** Refrigerate after reconstitution; use within 28–30 days`,
    synergies: ['semaglutide-3mg', 'aod9604-10mg', 'mazdutide', 'survodutide'],
    seoTitle: 'Buy Semaglutide 30mg | High-Volume GLP-1 | Extended Weight Loss Protocol',
    deepDiveTitle: 'Semaglutide 30mg: Maximum Supply for Long-Term GLP-1 Weight Loss Programs',
    highlights: [
      { title: '30mg Single Vial', body: 'Ten times the quantity of the 3mg vial — providing a continuous, uninterrupted semaglutide supply that matches the long-term treatment timelines where maximum weight loss occurs.' },
      { title: 'Best Cost-per-mg', body: 'Dramatically better cost-per-mg than the 3mg format — making sustained long-term GLP-1 treatment economically viable for the protocols where clinical data shows the best outcomes.' },
      { title: 'Protocol Continuity', body: 'Eliminating mid-cycle vial changes removes a key point of protocol failure — users on long-term semaglutide benefit most when treatment is uninterrupted.' },
      { title: 'Clinical Timeline Match', body: 'The 68-week STEP trials demonstrated maximum 15–20% weight loss only at protocol completion — the 30mg format is sized for users committed to this evidence-based treatment duration.' },
    ],
  },

  {
    slug: 'slu-pp-332-30caps',
    name: 'SLU-PP-332 100mg x30 Capsules',
    tagline: 'ERRα/γ agonist mimicking extreme endurance exercise at the gene expression level',
    price: 59.99,
    category: 'Body Composition',
    tags: ['SLU-PP-332', 'ERR', 'Exercise Mimetic', 'Endurance', 'Fat Oxidation'],
    image: 'https://phiogen.is/images/products/slu-pp-332-100mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/slu-pp-332-100mg-x-30-capsules?ref=PEPS',
    shortDescription: 'SLU-PP-332 is a synthetic ERRα/γ agonist that activates the transcriptional programs of extreme endurance exercise — dramatically increasing mitochondrial density and fat oxidation capacity.',
    fullDescription: `**Activating the Endurance Exercise Transcriptome**

SLU-PP-332 is a synthetic agonist of estrogen-related receptors alpha and gamma (ERRα/γ) — orphan nuclear receptors that act as master regulators of the transcriptional response to endurance exercise. By directly activating ERRα/γ, SLU-PP-332 triggers the expression of hundreds of genes normally only activated by sustained aerobic training, producing mitochondrial biogenesis, increased fatty acid oxidation capacity, and improved exercise efficiency without physical training.

**Mechanism: Nuclear Receptor Transcription**

ERRα and ERRγ regulate gene networks governing mitochondrial biogenesis (via PGC-1α coactivation), fatty acid oxidation (CPT1, HADHA), oxidative phosphorylation complexes, and muscle fiber type composition. SLU-PP-332 activates these receptors with high potency and ERR selectivity, producing a gene expression pattern that resembles — but exceeds — what occurs during marathon training. Treated mice ran 70% longer and 45% farther than controls.

**Research Outcomes**

The original Washington University study demonstrated dramatic improvements in endurance and metabolic parameters. Subsequent research has confirmed fat mass reduction, improved insulin sensitivity, and potential cardiovascular benefits. As an oral compound with nuclear receptor mechanism, SLU-PP-332 represents a distinct and complementary approach to exercise mimicry compared to AMPK activators like AICAR.`,
    benefits: [
      'Activates ERRα/γ to trigger endurance exercise gene programs',
      'Increases mitochondrial density and oxidative capacity',
      'Treated mice ran 70% longer and 45% farther than controls',
      'Enhances fatty acid oxidation via CPT1 and HADHA upregulation',
      'Reduces fat mass while preserving lean tissue',
      'Improves insulin sensitivity through metabolic reprogramming',
      'Oral capsule format for convenient daily dosing',
    ],
    protocol: `**Dosing:**
- Standard: 100mg orally once daily (per research protocols)
- Pre-workout: 100–200mg 1–2 hours before aerobic training
- Cycle: 4–8 weeks; assess response before extending

**Note:** ERRα/γ agonism produces genuine transcriptional changes — expect 2–4 weeks before full effects manifest`,
    synergies: ['aicar', 'slu-pp-332-120caps', 'bam-15-30ml', 'nad-100mg'],
    seoTitle: 'Buy SLU-PP-332 100mg x30 Capsules | ERR Agonist | Exercise Mimetic Endurance',
    deepDiveTitle: 'SLU-PP-332: The ERRα/γ Agonist That Activates the Endurance Exercise Transcriptome',
    highlights: [
      { title: '70% Endurance Increase', body: 'The original research showed SLU-PP-332 increased running distance by 70% in sedentary mice — among the most dramatic exercise performance enhancements observed with any single compound.' },
      { title: 'Nuclear Receptor Mechanism', body: 'Unlike kinase-targeted exercise mimetics, SLU-PP-332 works at the transcription factor level — activating hundreds of exercise-responsive genes simultaneously for comprehensive metabolic reprogramming.' },
      { title: 'ERRα/γ Selectivity', body: 'Selective for ERR orphan receptors rather than estrogen receptors — avoiding the hormonal effects that would accompany non-selective nuclear receptor activation.' },
      { title: 'Distinct from AICAR', body: 'SLU-PP-332\'s ERR transcriptional mechanism is mechanistically distinct from AICAR\'s AMPK activation — enabling powerful synergy when both pathways are engaged simultaneously.' },
    ],
  },

  {
    slug: 'slu-pp-332-120caps',
    name: 'SLU-PP-332 100mg x120 Capsules',
    tagline: 'Four-month ERRα/γ agonist supply for sustained endurance and metabolic optimization',
    price: 159.99,
    category: 'Body Composition',
    tags: ['SLU-PP-332', 'ERR Agonist', 'Endurance', 'Bulk Supply', 'Exercise Mimetic'],
    image: 'https://phiogen.is/images/products/slu-pp-332-100mg-x-120-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/slu-pp-332-100mg-x-120-capsules?ref=PEPS',
    shortDescription: 'SLU-PP-332 100mg x120 capsules — a four-month supply for sustained ERRα/γ-mediated endurance enhancement and metabolic optimization at the best available price per dose.',
    fullDescription: `**Sustained ERRα/γ Activation for Lasting Results**

The 120-capsule format represents a four-month supply of SLU-PP-332 at 100mg daily — enough for a full extended protocol that allows the nuclear receptor transcriptional changes to fully manifest and produce lasting mitochondrial and metabolic adaptations. ERRα/γ-mediated gene expression changes require several weeks to translate into meaningful phenotypic improvements; the 120-capsule format ensures this timeline isn't cut short.

**Protocol Design for Transcriptional Changes**

Nuclear receptor agonism works differently from kinase activation or hormone supplementation — the effects are mediated through gene transcription and protein synthesis, which take weeks to accumulate. A 4-month protocol allows for a 2–3 week induction phase, a 6–8 week peak adaptation phase, and an extended maintenance phase where the metabolic improvements become self-sustaining through increased mitochondrial mass.

**Best Value for Committed Users**

At $159.99 for 120 capsules versus $59.99 for 30 capsules, the bulk format provides a 33% cost reduction per capsule — significant savings for users committed to a full extended protocol that nuclear receptor biology requires for maximum benefit.`,
    benefits: [
      'Four-month supply for complete ERRα/γ adaptation cycle',
      '33% cost savings versus the 30-capsule format',
      'Allows full transcriptional program to manifest over extended protocol',
      'Supports sustained mitochondrial biogenesis and fat oxidation',
      'Uninterrupted supply prevents mid-protocol dose gap',
      'Best value per dose for long-term SLU-PP-332 users',
    ],
    protocol: `**Dosing:**
- Standard: 100mg orally once daily
- With training: 100–200mg 1–2 hours before aerobic sessions
- Full 4-month cycle: 120 capsules at one daily covers 4 months exactly

**Protocol design:** Allow 4–6 weeks for initial adaptations; maximum benefits typically visible at week 8–12`,
    synergies: ['slu-pp-332-30caps', 'aicar', 'bam-15-30ml', 'nad-100mg'],
    seoTitle: 'Buy SLU-PP-332 100mg x120 | ERR Agonist Bulk Supply | 4-Month Endurance Protocol',
    deepDiveTitle: 'SLU-PP-332 120 Capsules: Four-Month Sustained ERRα/γ Activation for Maximum Metabolic Adaptation',
    highlights: [
      { title: '4-Month Protocol Supply', body: '120 capsules at one daily covers exactly 4 months — the duration needed for nuclear receptor transcriptional changes to produce lasting, self-sustaining mitochondrial adaptations.' },
      { title: '33% Cost Reduction', body: 'Bulk format saves 33% per capsule versus the 30-capsule option — meaningful savings across a 4-month protocol that makes committed extended use economically practical.' },
      { title: 'Transcriptional Adaptation Timeline', body: 'ERRα/γ-mediated gene expression requires weeks to translate into phenotypic results; 4 months allows the full induction, peak adaptation, and consolidation phases to complete.' },
      { title: 'No Supply Interruption', body: 'A single bottle covers the entire protocol — eliminating the reorder timing risk that could create dosing gaps disrupting the transcriptional program mid-cycle.' },
    ],
  },

  {
    slug: 'slu-pp-332-1mg-caps',
    name: 'SLU-PP-332 1mg x30 Capsules',
    tagline: 'Low-dose ERRα/γ agonist capsules for titration and microdosing research',
    price: 39.99,
    category: 'Body Composition',
    tags: ['SLU-PP-332', 'Low-Dose', 'ERR Agonist', 'Titration', 'Research'],
    image: 'https://phiogen.is/images/products/slu-pp-332-1mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/slu-pp-332-1mg-x-30-capsules?ref=PEPS',
    shortDescription: 'SLU-PP-332 1mg x30 capsules — low-dose format for dose-response research, titration before standard 100mg protocols, and combination stacks requiring precise low-level ERRα/γ activation.',
    fullDescription: `**Research-Scale Low-Dose Format**

The 1mg SLU-PP-332 capsule format is designed for researchers studying dose-response relationships of ERRα/γ agonism, for users initiating SLU-PP-332 at below-therapeutic doses to characterize their individual response, or for combination protocols where low-level ERRα/γ activation is desired as part of a multi-mechanism metabolic stack.

**Dose-Response Characterization**

Given that SLU-PP-332 was only characterized at high doses in the initial research studies, there is genuine scientific value in understanding whether lower doses (1–10mg) produce partial ERRα/γ activation with potentially more selective metabolic effects. The 1mg capsule format enables this systematic investigation in a way the 100mg capsules cannot.

**Combination Protocol Utility**

Advanced metabolic stacks combining multiple exercise mimetics (AICAR, SLU-PP-332, BAM-15, MOTS-c) may benefit from lower individual doses of each compound to avoid off-target effects while maintaining pathway activation. At 1mg per capsule, SLU-PP-332 can be precisely titrated into multi-compound protocols at any desired contribution level.`,
    benefits: [
      'Low-dose format for dose-response research and titration',
      'Enables systematic dose escalation from 1mg to 100mg',
      'Precise combination dosing in multi-compound protocols',
      'Accessible entry to SLU-PP-332 at minimal cost',
      'Research-grade format for ERRα/γ dose-response characterization',
      'Same selectivity for ERRα/γ at lower activation level',
    ],
    protocol: `**Dosing:**
- Titration start: 1mg daily for week 1, double weekly to target dose
- Research: 1–10mg daily to characterize sub-threshold ERRα/γ response
- Combination protocol: 1–5mg as SLU-PP-332 contribution in multi-agent stack

**Note:** Below-therapeutic doses may show minimal individual effects; useful for combination use`,
    synergies: ['slu-pp-332-30caps', 'aicar', 'mots-c', 'bam-15-30ml'],
    seoTitle: 'Buy SLU-PP-332 1mg x30 Capsules | Low-Dose ERR Agonist | Titration Research',
    deepDiveTitle: 'SLU-PP-332 1mg Capsules: Low-Dose ERRα/γ Activation for Research Titration and Combination Protocols',
    highlights: [
      { title: '1mg Precision Dosing', body: 'Enables investigation of sub-threshold ERRα/γ activation levels that standard 100mg capsules make impossible — filling a genuine gap in dose-response characterization.' },
      { title: 'Stack Calibration', body: 'Allows precise incorporation of SLU-PP-332 at any desired level in multi-compound metabolic stacks — 1, 2, 5mg — without the inflexibility of the 100mg format.' },
      { title: 'Accessible Entry Point', body: 'At $39.99 for 30 capsules, this is the lowest-cost introduction to SLU-PP-332 — appropriate for researchers who want to characterize this compound before committing to full-dose protocols.' },
      { title: 'Systematic Escalation', body: 'Starting at 1mg and doubling weekly to 100mg provides a rigorous, data-rich titration protocol that characterizes the entire dose-response curve of ERRα/γ agonism.' },
    ],
  },

  {
    slug: 'slu-pp-332-liquid',
    name: 'SLU-PP-332 1mg/mL 30mL',
    tagline: 'Liquid SLU-PP-332 for precise dose titration and flexible sublingual administration',
    price: 79.99,
    category: 'Body Composition',
    tags: ['SLU-PP-332', 'Liquid', 'ERR Agonist', 'Sublingual', 'Flexible Dosing'],
    image: 'https://phiogen.is/images/products/slu-pp-332-1mg-ml-30ml.png',
    affiliateUrl: 'https://phiogen.is/products/slu-pp-332-1mg-ml-30ml?ref=PEPS',
    shortDescription: 'SLU-PP-332 liquid at 1mg/mL in 30mL — for precise volume-based dosing of this ERRα/γ agonist, enabling flexible sublingual or oral administration at any desired dose.',
    fullDescription: `**Liquid Format for Flexible Dosing**

The liquid SLU-PP-332 formulation at 1mg/mL provides the flexibility to dose anywhere from 0.5mg (0.5mL) to 30mg (30mL) within a single bottle — making it the most versatile format for exploring SLU-PP-332's dose-response profile or for users who prefer liquid oral administration. Sublingual delivery may enhance bioavailability compared to capsule forms for some users.

**Sublingual Bioavailability Advantage**

Sublingual administration of lipophilic compounds can bypass first-pass hepatic metabolism by absorbing directly through the oral mucosa into systemic circulation. SLU-PP-332's pharmacokinetic profile may benefit from this route, particularly for users whose gut absorption is inconsistent or who want faster onset of the metabolic effects.

**Volume-Based Precision**

For researchers or advanced users who want to precisely control dose in mg (rather than mg per capsule increments), the liquid format provides 0.1mL accuracy with a standard 1mL research syringe — enabling 0.1mg dose increments. This precision is valuable for careful dose-response characterization or for maintaining specific mg/kg dosing as body composition changes during a protocol.`,
    benefits: [
      'Continuous dose range from sub-milligram to 30mg per bottle',
      'Sublingual route for potential first-pass bypass',
      '0.1mL precision dosing with standard research syringe',
      'Flexible administration versus fixed-dose capsule formats',
      'Same ERRα/γ mechanism regardless of administration route',
      'Practical for users with capsule swallowing preference for liquid',
    ],
    protocol: `**Dosing:**
- Sublingual: hold 0.5–5mL under tongue for 60–90 seconds before swallowing
- Oral: swallow measured dose directly, or add to water
- Research: precise mL-based dosing using graduated syringe

**Concentration:** 1mg/mL — 1mL = 1mg; typical dose 5–30mL daily`,
    synergies: ['slu-pp-332-5mg-liquid', 'aicar', 'slu-pp-332-30caps', 'bam-15-30ml'],
    seoTitle: 'Buy SLU-PP-332 1mg/mL 30mL Liquid | ERR Agonist Sublingual | Flexible Dosing',
    deepDiveTitle: 'SLU-PP-332 Liquid 1mg/mL: Flexible Dosing and Sublingual Administration for ERRα/γ Activation',
    highlights: [
      { title: 'Continuous Dose Range', body: 'Unlike capsules with fixed 1mg or 100mg increments, the liquid format enables any dose from 0.1mg to 30mg — complete flexibility for any research or protocol design.' },
      { title: 'Sublingual Option', body: 'Holding under the tongue bypasses first-pass metabolism for more direct systemic absorption — potentially improving bioavailability for this lipophilic ERRα/γ agonist.' },
      { title: 'Research Precision', body: 'Volume-based dosing with a 1mL syringe provides 0.1mg accuracy — the precision required for rigorous dose-response characterization.' },
      { title: 'Administration Flexibility', body: 'Swallow, sublingual hold, dilute in water, or incorporate into formulations — the liquid format adapts to any administration preference or protocol requirement.' },
    ],
  },

  {
    slug: 'slu-pp-332-5mg-liquid',
    name: 'SLU-PP-332 5mg/mL 30mL',
    tagline: 'Higher concentration SLU-PP-332 liquid for standard to high-dose ERRα/γ protocols',
    price: 99.99,
    category: 'Body Composition',
    tags: ['SLU-PP-332', 'Liquid', 'High Concentration', 'ERR Agonist', 'Exercise Mimetic'],
    image: 'https://phiogen.is/images/products/slu-pp-332-5mg-ml-30ml.png',
    affiliateUrl: 'https://phiogen.is/products/slu-pp-332-5mg-ml-30ml?ref=PEPS',
    shortDescription: 'SLU-PP-332 5mg/mL in 30mL — higher concentration liquid for users requiring 50–150mg doses who prefer liquid format with reduced administration volume.',
    fullDescription: `**Higher Concentration Liquid for Standard Doses**

The 5mg/mL SLU-PP-332 liquid provides 150mg total in 30mL — and at 5x the concentration of the 1mg/mL format, delivers the standard 100mg research dose in just 20mL of liquid. This reduces the oral volume required for therapeutic doses while maintaining the flexibility advantages of liquid administration over capsules.

**Bridging Research and Standard Dosing**

For users who have titrated up from lower doses (using the 1mg/mL format) and established their target at 50–100mg daily, the 5mg/mL concentration provides the appropriate liquid volume for these standard doses without the excessive volumes that the lower concentration would require. A 100mg dose requires only 20mL — manageable for once-daily oral administration.

**Protocol Continuity**

Users transitioning from the 1mg/mL titration format to standard dosing often prefer to stay with the liquid route rather than switching to capsules. The 5mg/mL format enables this continuity — same administration method, higher concentration, same flexibility for dose adjustment as protocols evolve.`,
    benefits: [
      '5x concentration of 1mg/mL for practical standard-dose volumes',
      '100mg dose delivered in just 20mL of liquid',
      'Bridges titration to standard dosing while maintaining liquid flexibility',
      'Better value per mg than the 1mg/mL format',
      'All ERRα/γ agonist benefits in higher-concentration liquid form',
      'Suitable for sublingual administration at concentrated doses',
    ],
    protocol: `**Dosing:**
- Standard: 20mL orally or sublingually for 100mg dose
- Low standard: 10mL for 50mg dose
- Research high-dose: 30mL for 150mg dose
- Measure precisely with graduated syringe

**Daily use:** Simple once-daily oral administration; take with or without food`,
    synergies: ['slu-pp-332-liquid', 'slu-pp-332-30caps', 'aicar', 'bam-15-50ml'],
    seoTitle: 'Buy SLU-PP-332 5mg/mL 30mL Liquid | Higher Concentration ERR Agonist | Standard Dosing',
    deepDiveTitle: 'SLU-PP-332 5mg/mL Liquid: Higher Concentration Format for Standard-Dose ERRα/γ Protocols',
    highlights: [
      { title: '5mg/mL Practical Concentration', body: 'Delivers the research standard 100mg dose in a practical 20mL oral volume — versus 100mL required with the 1mg/mL format at the same dose.' },
      { title: 'Titration Continuation', body: 'The natural progression from the 1mg/mL titration format — same liquid route, same flexibility, but appropriate concentration for standard therapeutic doses.' },
      { title: 'Better Value per mg', body: 'Higher concentration typically represents better value per active compound unit than lower-concentration liquid formats — rewarding users who have committed to the liquid route.' },
      { title: '150mg Total Content', body: '30mL at 5mg/mL provides 150mg total SLU-PP-332 — sufficient for 45-day standard protocol at 3.3mg/day or 15-day protocol at 10mg/day research dose.' },
    ],
  },

  {
    slug: 'survodutide',
    name: 'Survodutide 10mg',
    tagline: 'GLP-1/glucagon dual agonist for obesity and NASH with superior fat liver targeting',
    price: 159.99,
    category: 'Weight Loss',
    tags: ['Survodutide', 'GLP-1', 'Glucagon', 'Dual Agonist', 'NASH', 'Obesity'],
    image: 'https://phiogen.is/images/products/survodutide-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/survodutide-10mg?ref=PEPS',
    shortDescription: 'Survodutide (BI 456906) is a Phase III GLP-1/glucagon receptor dual agonist from Boehringer Ingelheim with particular efficacy against non-alcoholic steatohepatitis (NASH) and obesity.',
    fullDescription: `**Next-Generation GLP-1/Glucagon Dual Agonism**

Survodutide (BI 456906) is a once-weekly subcutaneous dual GLP-1/glucagon receptor agonist developed by Boehringer Ingelheim, currently in Phase III trials for obesity and NASH. Its glucagon receptor component is particularly potent for hepatic fat reduction — making Survodutide the dual agonist with the strongest evidence for treating both obesity and the associated liver disease (NASH) that is increasingly prevalent in obese populations.

**NASH Targeting: The Glucagon Advantage**

Glucagon receptor activation in hepatocytes directly stimulates hepatic fatty acid oxidation and reduces de novo lipogenesis — the two key drivers of non-alcoholic fatty liver disease. Phase II NASH trials with Survodutide showed marked improvements in liver steatosis, inflammation, and fibrosis scores, positioning it as a potential disease-modifying treatment for NASH — a condition with no approved pharmacotherapy.

**Phase III Pipeline and Clinical Data**

Phase II obesity trials showed 14.9% body weight loss over 46 weeks at optimal doses — competitive with semaglutide and other approved GLP-1 agonists. The Phase III NASH trial is a landmark study with potential to establish Survodutide as the first approved treatment for this condition, which affects over 1.5% of the global population and has no current pharmacological standard of care.`,
    benefits: [
      'GLP-1/glucagon dual agonism for obesity and NASH simultaneously',
      '14.9% body weight loss in Phase II at optimal doses',
      'Strongest liver fat reduction of any dual agonist in development',
      'Phase III NASH trial — potential first NASH approval',
      'Reduces liver steatosis, inflammation, and fibrosis',
      'Once-weekly dosing for sustained weight and liver fat control',
      'Addresses the obesity-NASH continuum with a single agent',
    ],
    protocol: `**Reconstitution:** Add 2–3mL bacteriostatic water.

**Dosing:**
- Phase II protocol: 1.2–4.8mg subcutaneous weekly (dose escalation)
- Start: 0.3mg weekly, escalate monthly to target
- Maximum studied: 4.8mg weekly
- Once-weekly subcutaneous injection`,
    synergies: ['semaglutide-3mg', 'mazdutide', '5-amino-1mq-50mg', 'nad-100mg'],
    seoTitle: 'Buy Survodutide 10mg | GLP-1/Glucagon Dual Agonist | NASH and Obesity Treatment',
    deepDiveTitle: 'Survodutide: The Phase III GLP-1/Glucagon Dual Agonist Targeting Obesity and NASH Simultaneously',
    highlights: [
      { title: 'NASH Disease Modification', body: 'Survodutide is in active Phase III trials as a potential first approved NASH treatment — targeting liver fat, inflammation, and fibrosis simultaneously through glucagon receptor hepatic activation.' },
      { title: 'Hepatic Glucagon Action', body: 'Glucagon receptor activation drives hepatic fatty acid oxidation and reduces de novo lipogenesis — directly targeting the liver fat accumulation at the core of NASH pathology.' },
      { title: '14.9% Bodyweight Loss', body: 'Phase II obesity data showing 14.9% weight reduction at 46 weeks — competitive with the best established GLP-1 agonists and without the cardiovascular outcome data limitations.' },
      { title: 'Obesity-NASH Continuum', body: 'A single compound addressing both obesity and its most dangerous metabolic complication — survodutide is the only agent in late-stage development designed to treat this disease continuum simultaneously.' },
    ],
  },

  {
    slug: 'tesofensine-capsules',
    name: 'Tesofensine 500mcg x30 Capsules',
    tagline: 'Triple monoamine reuptake inhibitor for powerful appetite suppression and weight loss',
    price: 99.99,
    category: 'Weight Loss',
    tags: ['Tesofensine', 'Triple Reuptake Inhibitor', 'Appetite', 'Weight Loss', 'Monoamine'],
    image: 'https://phiogen.is/images/products/tesofensine-500mcg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/tesofensine-500mcg-x-30-capsules?ref=PEPS',
    shortDescription: 'Tesofensine is a triple serotonin/dopamine/norepinephrine reuptake inhibitor that produces 10.6% body weight loss — more than double older appetite suppressants — through central appetite suppression.',
    fullDescription: `**The Triple Monoamine Reuptake Inhibitor**

Tesofensine was originally developed for Parkinson's and Alzheimer's disease, where it incidentally produced dramatic weight loss in clinical trial participants — leading to its redevelopment as an obesity treatment. As a serotonin-dopamine-norepinephrine reuptake inhibitor (SNDRI), it raises monoamine levels in hypothalamic appetite centers, producing powerful appetite suppression that exceeds sibutramine (which only inhibits two transporters) without the cardiovascular side effects that led to sibutramine's withdrawal.

**Phase II Clinical Data**

In the Phase IIb TIPO-1 trial, tesofensine 0.5mg daily produced 10.6% body weight loss over 24 weeks in obese patients — more than double the 4.5% loss seen with sibutramine and significantly exceeding other centrally-acting appetite suppressants. The mechanism of triple monoamine elevation in the hypothalamus produces sustained appetite reduction that many patients describe as a complete loss of food preoccupation.

**Central vs. Peripheral Approach**

Tesofensine's purely central mechanism contrasts with GLP-1 agonists' peripheral gut-based action, making them highly complementary. While GLP-1 agents slow gastric emptying and modulate gut hormones, tesofensine directly modulates the central reward circuitry and appetite centers — addressing the behavioral and neurochemical aspects of overconsumption that gut-focused agents cannot fully address.`,
    benefits: [
      'Triple reuptake inhibition of serotonin, dopamine, and norepinephrine',
      '10.6% body weight loss in Phase IIb trial — best in class among CNS agents',
      'Central appetite suppression targeting hypothalamic reward circuitry',
      'Complementary mechanism to GLP-1 agonists',
      'May reduce food preoccupation and binge eating behavior',
      'Once-daily dosing for sustained appetite control',
      'Phase IIb clinical validation',
    ],
    protocol: `**Dosing:**
- Standard: 0.5mg (500mcg) orally once daily in the morning
- Start with 0.25mg for 2 weeks to assess tolerability
- Cycle: 24-week protocol based on Phase IIb design

**Common effects:** Dry mouth, nausea, insomnia at initiation — typically resolve in 1–2 weeks`,
    synergies: ['semaglutide-3mg', 'tesofensine-tablets', 'aod9604-5mg', '5-amino-1mq-50mg'],
    seoTitle: 'Buy Tesofensine 500mcg x30 Capsules | Triple Reuptake Inhibitor Weight Loss',
    deepDiveTitle: 'Tesofensine: The Triple Monoamine Reuptake Inhibitor With Phase II Weight Loss Exceeding All Comparators',
    highlights: [
      { title: '10.6% Weight Loss', body: 'Phase IIb TIPO-1 trial demonstrated 10.6% body weight loss over 24 weeks at 0.5mg daily — more than double sibutramine and any other centrally-acting appetite suppressant studied.' },
      { title: 'Triple Mechanism', body: 'Simultaneously inhibits all three monoamine transporters — SERT, DAT, and NET — raising serotonin, dopamine, and norepinephrine in appetite centers for multi-pathway suppression.' },
      { title: 'Reward Circuitry Targeting', body: 'By modulating dopaminergic reward signaling, tesofensine addresses the hedonic "wanting" component of food intake — reducing food preoccupation that GLP-1 agents do not specifically target.' },
      { title: 'GLP-1 Complementarity', body: 'Central monoamine mechanism and peripheral GLP-1 mechanism are non-overlapping and synergistic — tesofensine plus semaglutide addresses appetite from both the CNS reward and GI satiety perspectives.' },
    ],
  },

  {
    slug: 'tesofensine-tablets',
    name: 'Tesofensine 500mcg x30 Tablets',
    tagline: 'Tablet form triple monoamine reuptake inhibitor for precise weight loss dosing',
    price: 99.99,
    category: 'Weight Loss',
    tags: ['Tesofensine', 'Tablets', 'Triple Reuptake Inhibitor', 'Weight Loss', 'Appetite'],
    image: 'https://phiogen.is/images/products/tesofensine-500mcg-x-30-tablets.png',
    affiliateUrl: 'https://phiogen.is/products/tesofensine-500mcg-x-30-tablets?ref=PEPS',
    shortDescription: 'Tesofensine 500mcg tablets — the same triple monoamine reuptake inhibitor in tablet form, offering the scored tablet option for easier half-dose (250mcg) administration during titration.',
    fullDescription: `**Tablet Format for Dose Flexibility**

The tablet formulation of Tesofensine 500mcg provides the same active compound as the capsule version, with the additional advantage of scorability — tablets can be divided to deliver 250mcg doses during the initial titration phase. This practical dose-splitting capability reduces the need to purchase separate 250mcg capsule formats for initiation protocols.

**Titration Made Simple**

The Phase IIb TIPO-1 trial recommended initiating tesofensine at 0.25mg (250mcg) for the first 2 weeks before escalating to the therapeutic 0.5mg dose. Scored tablets enable this graduated approach without requiring separate low-dose formulations — simply halve the tablet for the initiation phase, then move to whole tablets for maintenance.

**Same Mechanism, Format Choice**

Some users prefer the swallowability of capsules while others prefer the control over tablet splitting — both deliver identical pharmacological action. The tablet format is particularly relevant for users who need to customize their dose beyond fixed capsule increments, or who are sensitive to the initiation side effects and want the precision to fine-tune their starting dose.`,
    benefits: [
      'Scorable tablets enable 250mcg half-dose for gentle titration',
      'Same triple monoamine reuptake inhibition as capsule form',
      'Dose customization beyond fixed capsule increments',
      'Convenient once-daily oral administration',
      '10.6% Phase IIb body weight loss mechanism',
      'Practical format for users who prefer tablet over capsule',
    ],
    protocol: `**Dosing:**
- Titration: 1/2 tablet (250mcg) daily for weeks 1–2
- Standard: 1 tablet (500mcg) daily from week 3 onward
- Morning administration for optimal CNS monoamine elevation
- 24-week protocol per Phase IIb design`,
    synergies: ['tesofensine-capsules', 'semaglutide-3mg', 'aod9604-5mg', '5-amino-1mq-50mg'],
    seoTitle: 'Buy Tesofensine 500mcg x30 Tablets | Triple Reuptake Inhibitor | Scored for Titration',
    deepDiveTitle: 'Tesofensine Tablets: Scored Format Enabling Precise Dose Titration for Triple Monoamine Weight Loss',
    highlights: [
      { title: 'Scored for Half-Dosing', body: 'Tablets can be divided for the recommended 250mcg initiation dose — eliminating the need for a separate lower-strength formulation during the first 2 weeks of titration.' },
      { title: 'Format Choice Flexibility', body: 'Identical pharmacology to the capsule version — the tablet format simply offers a physical form preference option and the added flexibility of dose splitting.' },
      { title: 'Titration-Optimized', body: 'The tablet format is specifically advantageous for the recommended gradual introduction protocol where starting at half the maintenance dose reduces initial monoaminergic side effects.' },
      { title: 'Once-Daily Simplicity', body: 'A single morning tablet maintains consistent monoamine elevation throughout the day — aligning the peak appetite suppression with the daytime hours when food intake decisions are made.' },
    ],
  },

  // ── Batch 4: Growth Peptides + Blends ────────────────────────────────────

  {
    slug: 'ipamorelin-10mg',
    name: 'Ipamorelin 10mg',
    tagline: 'Selective GHRP for clean GH release without cortisol or prolactin elevation',
    price: 59.99,
    category: 'Body Composition',
    tags: ['Ipamorelin', 'GHRP', 'Growth Hormone', 'Body Composition', 'Recovery'],
    image: 'https://phiogen.is/images/products/ipamorelin-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ipamorelin-10mg?ref=PEPS',
    shortDescription: 'Ipamorelin is a selective growth hormone releasing peptide (GHRP) that stimulates pulsatile GH release with minimal cortisol, prolactin, or acetylcholine side effects.',
    fullDescription: `**The Cleanest GHRP**

Ipamorelin is a pentapeptide GHRP that stimulates GH secretion through ghrelin receptor (GHS-R1a) activation in the pituitary and hypothalamus. Among all GHRPs, Ipamorelin is distinguished by its exceptional selectivity — it releases GH without the cortisol, prolactin, or acetylcholine side effects that complicate GHRP-2 and GHRP-6. This clean profile makes it the GHRP of choice for anti-aging, body composition, and long-term use protocols.

**Mechanism: Selective Ghrelin Receptor Agonism**

Ipamorelin activates GHS-R1a receptors in pituitary somatotrophs to release GH in pulsatile bursts that mimic the natural GH secretion pattern. Unlike exogenous HGH, this pulsatile release preserves the negative feedback regulation that protects against GH excess. The selectivity for GHS-R1a versus other receptors is the molecular basis for Ipamorelin's superior side effect profile.

**Applications**

Ipamorelin is most commonly used as part of a GHRH+GHRP combination (most often with CJC-1295 No DAC) that synergistically maximizes GH pulse amplitude. Alone, it supports anti-aging, improved sleep quality, fat loss, and muscle preservation. Its tolerability makes it suitable for year-round cycling, which is difficult with less selective GHRPs.`,
    benefits: [
      'Selective GH release without cortisol or prolactin elevation',
      'Preserves natural pulsatile GH secretion pattern',
      'Synergizes with CJC-1295 for amplified GH pulses',
      'Supports fat loss, muscle maintenance, and recovery',
      'Improves sleep quality and deep sleep duration',
      'Anti-aging benefits through GH-mediated tissue repair',
      'Suitable for long-term cycling due to clean side effect profile',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 200–300mcg subcutaneous before bed or post-workout
- With CJC-1295 No DAC: inject both together at bedtime
- Cycle: 3 months on, 1 month off (or continuous at lower doses)

**Best timing:** Empty stomach; avoid food 2 hours before and 1 hour after`,
    synergies: ['cjc-1295-nodac-10mg', 'ipa-cjc-15mg', 'ghrp-2', 'sermorelin'],
    seoTitle: 'Buy Ipamorelin 10mg | Selective GHRP | Clean GH Release for Body Composition',
    deepDiveTitle: 'Ipamorelin: The Most Selective GHRP for Clean, Pulsatile GH Release Without Side Effects',
    highlights: [
      { title: 'No Cortisol Elevation', body: 'Unlike GHRP-2 and GHRP-6, Ipamorelin does not raise cortisol — the catabolic hormone that would otherwise counteract GH\'s anabolic effects and compromise body composition goals.' },
      { title: 'Pulsatile GH Release', body: 'Mimics the body\'s natural GH secretion pattern by triggering discrete pulses rather than the sustained elevation produced by exogenous HGH injections.' },
      { title: 'CJC-1295 Synergy', body: 'When combined with a GHRH (like CJC-1295 No DAC), Ipamorelin\'s GHRP action synergizes through complementary pituitary mechanisms to dramatically amplify GH pulse magnitude.' },
      { title: 'Long-Term Safety Profile', body: 'The absence of significant off-target receptor effects makes Ipamorelin suitable for the extended cycling that maximizes GH-related body composition and anti-aging benefits.' },
    ],
  },

  {
    slug: 'cjc-1295-nodac-10mg',
    name: 'CJC-1295 No DAC 10mg',
    tagline: 'Short-acting GHRH analog for pulsatile GH release with natural feedback preservation',
    price: 79.99,
    category: 'Body Composition',
    tags: ['CJC-1295', 'No DAC', 'GHRH', 'Growth Hormone', 'Body Composition'],
    image: 'https://phiogen.is/images/products/cjc-1295-no-dac-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/cjc-1295-no-dac-10mg?ref=PEPS',
    shortDescription: 'CJC-1295 No DAC is a modified GHRH peptide that stimulates GH secretion in pulsatile bursts (half-life ~30 min), preserving natural feedback regulation while amplifying GH release.',
    fullDescription: `**The Pulsatile GHRH Analog**

CJC-1295 No DAC (also called MOD GRF 1-29) is a modified version of GHRH(1-29) with 4 amino acid substitutions that improve stability and half-life. The "No DAC" designation indicates the absence of the Drug Affinity Complex that characterizes the long-acting CJC-1295 with DAC — making this version a short-acting GHRH analog with a ~30 minute half-life that produces discrete GH pulses rather than sustained elevation.

**Why Pulsatile GH is Preferred**

The natural GH secretion pattern involves distinct pulses, primarily at night during deep sleep. These pulses are important because they trigger the downstream IGF-1 production that mediates GH's anabolic and metabolic effects, while the valleys between pulses prevent the desensitization and receptor downregulation that occurs with sustained GH elevation. CJC-1295 No DAC preserves this physiological pulse pattern.

**Standard Pairing with Ipamorelin**

CJC-1295 No DAC is most commonly injected simultaneously with Ipamorelin to create a synergistic GHRH+GHRP combination. The GHRH analog primes the pituitary for release while the GHRP (Ipamorelin) triggers the secretion — producing GH pulses significantly larger than either peptide alone.`,
    benefits: [
      'Preserves natural pulsatile GH secretion pattern',
      'Synergizes with GHRPs for amplified GH pulse magnitude',
      'Short half-life maintains natural GH valleys between pulses',
      'Supports lean mass, fat loss, and sleep quality',
      'Prevents receptor desensitization vs long-acting GHRH variants',
      'Foundation of the standard CJC-1295/Ipamorelin protocol',
      'Anti-aging and recovery benefits through physiological GH optimization',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 100–300mcg subcutaneous with Ipamorelin before bed
- Same syringe injection with Ipamorelin acceptable
- Cycle: 3 months on, 1 month off
- Fasted state; avoid food 2 hours before and 1 hour after injection`,
    synergies: ['ipamorelin-10mg', 'cjc-ghrp2-blend', 'ipa-cjc-15mg', 'cjc-1295-nodac-5mg'],
    seoTitle: 'Buy CJC-1295 No DAC 10mg | GHRH Peptide | Pulsatile GH Release Protocol',
    deepDiveTitle: 'CJC-1295 No DAC: The Pulsatile GHRH Analog That Preserves Natural GH Feedback in Growth Peptide Protocols',
    highlights: [
      { title: 'Pulsatile vs. Sustained Release', body: 'The short half-life (~30 min) of CJC-1295 No DAC produces discrete GH pulses rather than the sustained elevation that risks receptor downregulation and feedback suppression.' },
      { title: 'GHRH+GHRP Synergy', body: 'GHRH primes pituitary somatotrophs while GHRP triggers release — the combination is dramatically more effective than either alone, the basis of the standard CJC-1295/Ipamorelin protocol.' },
      { title: 'Physiological Feedback Preservation', body: 'Natural feedback loops remain intact with short-acting GHRH — the pituitary can still respond to somatostatin, preventing the blunted response seen with exogenous HGH.' },
      { title: 'Night Pulse Optimization', body: 'Timed with Ipamorelin at bedtime, CJC-1295 No DAC amplifies the largest natural GH pulse — maximizing overnight anabolic and restorative GH activity.' },
    ],
  },

  {
    slug: 'cjc-1295-nodac-5mg',
    name: 'CJC-1295 No DAC 5mg',
    tagline: 'Entry-level GHRH analog for the classic pulsatile growth hormone protocol',
    price: 49.99,
    category: 'Body Composition',
    tags: ['CJC-1295', 'No DAC', 'GHRH', 'Growth Hormone', 'Entry-Level'],
    image: 'https://phiogen.is/images/products/cjc-1295-no-dac-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/cjc-1295-no-dac-5mg?ref=PEPS',
    shortDescription: 'CJC-1295 No DAC 5mg — the entry-level GHRH quantity for testing the classic pulsatile GH protocol before committing to larger supply.',
    fullDescription: `**Entry-Level GHRH for Protocol Testing**

The 5mg CJC-1295 No DAC vial provides approximately 16–50 doses at standard dosing (100–300mcg per injection) — sufficient for 2–7 weeks of daily use or 4–8 weeks of every-other-day use. This format is ideal for users new to GHRH peptides who want to assess their response to the CJC-1295/Ipamorelin protocol before purchasing larger quantities.

**Same Mechanism at Lower Commitment**

Every aspect of the GHRH mechanism, pituitary priming, and GH pulse amplification is identical in the 5mg vial. The smaller size simply reflects a lower quantity commitment — appropriate for first-time users, short-term protocols, or as a complement to a larger Ipamorelin vial in a size-matched combination.

**Protocol Introduction**

Many users begin their growth peptide journey with CJC-1295 No DAC 5mg + Ipamorelin 10mg as their first combination, allowing them to experience the GH pulse enhancement, sleep improvement, and body composition changes that come from optimized pulsatile GH secretion before committing to longer, higher-volume cycles.`,
    benefits: [
      'Entry-level quantity for protocol testing and initial response',
      'Cost-effective introduction to GHRH+GHRP combination dosing',
      'Sufficient for 2–7 weeks of daily GHRH administration',
      'All CJC-1295 No DAC pulsatile GHRH benefits',
      'Size-matched with Ipamorelin for combination use',
      'Ideal for first-time growth peptide users',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 100–200mcg subcutaneous with Ipamorelin at bedtime
- Combine in same syringe as Ipamorelin
- Fasted state 2 hours before injection`,
    synergies: ['ipamorelin-10mg', 'cjc-1295-nodac-10mg', 'ipa-cjc-15mg', 'ghrp-2'],
    seoTitle: 'Buy CJC-1295 No DAC 5mg | Entry-Level GHRH | Growth Hormone Protocol Starter',
    deepDiveTitle: 'CJC-1295 No DAC 5mg: Entry-Level GHRH for the Classic Pulsatile Growth Hormone Protocol',
    highlights: [
      { title: '5mg Starter Supply', body: 'Provides 16–50 doses for testing the CJC-1295/Ipamorelin protocol — enough to experience the sleep, recovery, and body composition effects before committing to larger vials.' },
      { title: 'Paired with Ipamorelin', body: 'The classic first-time growth peptide stack: CJC-1295 No DAC 5mg + Ipamorelin 10mg — giving Ipamorelin users more total supply while keeping the GHRH component appropriately sized.' },
      { title: 'Same GHRH Mechanism', body: 'Identical pharmacology to the 10mg vial — the only difference is the quantity, not the quality or potency of the GHRH activity.' },
      { title: 'Low Barrier to Entry', body: 'At $49.99, this is an accessible entry point to the evidence-backed CJC-1295/Ipamorelin protocol that has become the gold standard for peptide-based GH optimization.' },
    ],
  },

  {
    slug: 'cjc-1295-dac-10mg',
    name: 'CJC-1295 with DAC 10mg',
    tagline: 'Long-acting GHRH analog for sustained GH elevation and once-weekly convenience',
    price: 99.99,
    category: 'Body Composition',
    tags: ['CJC-1295', 'DAC', 'GHRH', 'Long-Acting', 'Growth Hormone'],
    image: 'https://phiogen.is/images/products/cjc-1295-with-dac-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/cjc-1295-with-dac-10mg?ref=PEPS',
    shortDescription: 'CJC-1295 with DAC is a long-acting GHRH analog (half-life 6–8 days) that provides sustained GH elevation through albumin binding — enabling once-weekly injection protocols.',
    fullDescription: `**The Long-Acting GHRH**

CJC-1295 with DAC (Drug Affinity Complex) uses a maleimide technology to covalently bind to circulating albumin after injection, dramatically extending its half-life from ~30 minutes (No DAC version) to 6–8 days. A single weekly injection maintains sustained GHRH receptor stimulation, producing elevated baseline GH and IGF-1 levels throughout the week — a fundamentally different pharmacokinetic profile from the No DAC version.

**Albumin Binding Mechanism**

The DAC technology incorporates a lysine-maleimide tag that reacts with the free thiol of Cys34 on serum albumin immediately after subcutaneous injection. Because albumin's half-life is approximately 19 days and CJC-1295 DAC is protected inside this carrier, the peptide circulates for 6–8 days, providing continuous GHRH receptor occupancy and sustained downstream GH and IGF-1 elevation.

**Trade-offs vs. No DAC**

The convenience of once-weekly dosing comes with a different activity profile. CJC-1295 DAC produces sustained elevated GH rather than discrete pulses — which may be advantageous for certain body composition goals (continuous muscle protein synthesis support) but sacrifices some of the feedback preservation advantages of the pulsatile approach. It is typically not combined with GHRPs for this reason.`,
    benefits: [
      'Long-acting albumin binding produces 6–8 day half-life',
      'Once-weekly injection for convenience',
      'Sustained GH and IGF-1 elevation throughout the week',
      'Supports continuous muscle protein synthesis',
      'Reduces injection frequency vs daily No DAC protocols',
      'Promotes body composition improvement with reduced administration burden',
      'Suitable for users who prioritize protocol simplicity',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 1–2mg subcutaneous once weekly
- Cycle: 3 months on, 1 month off
- Note: Not typically combined with GHRPs (different pharmacokinetic profile)

**Timing:** Any time; no fasting requirement due to sustained release mechanism`,
    synergies: ['ipamorelin-10mg', 'cjc-1295-nodac-10mg', 'sermorelin', 'tesamorelin'],
    seoTitle: 'Buy CJC-1295 with DAC 10mg | Long-Acting GHRH | Once-Weekly GH Protocol',
    deepDiveTitle: 'CJC-1295 with DAC: The Albumin-Bound Long-Acting GHRH for Once-Weekly Sustained GH Elevation',
    highlights: [
      { title: '6–8 Day Half-Life', body: 'The DAC technology extends CJC-1295\'s half-life from 30 minutes to 6–8 days through covalent albumin binding — enabling once-weekly injection without daily protocol complexity.' },
      { title: 'Albumin Carrier System', body: 'By hijacking albumin\'s natural 19-day half-life, the DAC tag converts a fragile short-acting peptide into a practical once-weekly sustained release formulation.' },
      { title: 'Continuous IGF-1 Support', body: 'Sustained GHRH receptor stimulation maintains elevated IGF-1 throughout the week — providing continuous growth factor support for muscle protein synthesis and tissue repair.' },
      { title: 'Protocol Simplicity', body: 'One injection per week versus daily No DAC injections — dramatic convenience improvement that supports long-term protocol adherence for users with time constraints.' },
    ],
  },

  {
    slug: 'ghrp-2',
    name: 'GHRP-2 10mg',
    tagline: 'Potent GHRP for maximal GH release with complementary hunger effects',
    price: 49.99,
    category: 'Body Composition',
    tags: ['GHRP-2', 'GHRP', 'Growth Hormone', 'Body Composition', 'Muscle Growth'],
    image: 'https://phiogen.is/images/products/ghrp-2-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ghrp-2-10mg?ref=PEPS',
    shortDescription: 'GHRP-2 (Pralmorelin) is a synthetic hexapeptide that triggers maximal GH secretion with moderate cortisol elevation — ideal for mass-gaining phases requiring maximum GH amplitude.',
    fullDescription: `**Maximum GH Amplitude GHRP**

GHRP-2 is a synthetic hexapeptide GHRP that activates ghrelin receptor (GHS-R1a) to produce among the largest GH pulses of any GHRP studied. Unlike Ipamorelin's clean selectivity, GHRP-2 also stimulates modest cortisol and prolactin release — a trade-off that users accept for the higher GH peak. For mass-gaining protocols where maximum anabolic GH exposure is the priority, GHRP-2 may outperform the more selective Ipamorelin.

**Cortisol Context**

The mild cortisol elevation with GHRP-2 (2–3x baseline, transient) is lower than physiological stress cortisol and typically manageable in the context of a well-structured diet and recovery program. Many users specifically cycle GHRP-2 during muscle-building phases when maximum GH amplitude is worth the cortisol trade-off, then switch to Ipamorelin for cut phases or long-term maintenance.

**Appetite Stimulation**

Like the endogenous ghrelin it mimics, GHRP-2 stimulates appetite — a potentially useful effect during bulking protocols where caloric intake is the limiting factor for muscle gain. This ghrelin-mediated appetite increase distinguishes GHRP-2 (and GHRP-6) from Ipamorelin, which produces minimal appetite effects.`,
    benefits: [
      'Maximum GH pulse amplitude among common GHRPs',
      'Appetite stimulation useful for mass-gaining protocols',
      'Activates ghrelin receptor for GH secretion and appetite',
      'Synergizes with GHRH peptides for amplified GH release',
      'Moderate cortisol elevation — manageable in structured protocols',
      'Supports lean mass accrual during caloric surplus phases',
      'Established research safety profile (Pralmorelin)',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 100–300mcg subcutaneous before bed or post-workout
- Combine with CJC-1295 No DAC for synergistic GH release
- Cycle: 3 months on, 1 month off

**Note:** Take on empty stomach; higher cortisol may require management in sensitive individuals`,
    synergies: ['cjc-1295-nodac-10mg', 'cjc-ghrp2-blend', 'ipamorelin-10mg', 'hexarelin'],
    seoTitle: 'Buy GHRP-2 10mg | Maximum GH Release Peptide | Mass Gaining GHRP Protocol',
    deepDiveTitle: 'GHRP-2: Maximum Amplitude Growth Hormone Releasing Peptide for Mass-Gaining Protocols',
    highlights: [
      { title: 'Maximum GH Amplitude', body: 'GHRP-2 produces among the largest GH pulses of any GHRP — making it the choice for mass-gaining phases where maximum anabolic GH exposure is the priority over side effect cleanliness.' },
      { title: 'Appetite Amplification', body: 'Ghrelin receptor activation stimulates appetite — turning a potential side effect into an advantage for users who struggle to consume sufficient calories during bulking protocols.' },
      { title: 'Cortisol Trade-off', body: 'Modest cortisol elevation is the price of maximum GH amplitude with GHRP-2 — a trade-off many advanced users accept during mass phases while cycling to Ipamorelin for cuts and maintenance.' },
      { title: 'CJC-1295 Synergy', body: 'GHRP-2 + CJC-1295 No DAC is one of the highest GH pulse amplifications achievable with research peptides — the aggressive combination for users who want maximum growth hormone output.' },
    ],
  },

  {
    slug: 'ghrp-6',
    name: 'GHRP-6 10mg',
    tagline: 'The original GHRP with powerful hunger stimulation for aggressive mass protocols',
    price: 49.99,
    category: 'Body Composition',
    tags: ['GHRP-6', 'GHRP', 'Growth Hormone', 'Appetite', 'Mass Gaining'],
    image: 'https://phiogen.is/images/products/ghrp-6-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ghrp-6-10mg?ref=PEPS',
    shortDescription: 'GHRP-6 is the original growth hormone releasing hexapeptide — producing powerful GH secretion and the strongest appetite stimulation of any GHRP for aggressive mass protocols.',
    fullDescription: `**The Original GHRP**

GHRP-6 was one of the first synthetic GHRPs developed and remains widely used for its combination of significant GH release and potent appetite stimulation. Like GHRP-2, it activates the ghrelin receptor, but it produces more pronounced appetite and hunger effects — a feature exploited in mass-gaining protocols where food intake maximization is the goal alongside GH optimization.

**Appetite Stimulation Profile**

The hunger increase with GHRP-6 is the most pronounced of the commonly used GHRPs — users describe intense hunger beginning 20–30 minutes after injection and lasting 1–2 hours. This appetite window is strategically used to time the post-injection meal for maximum caloric and nutrient intake, combining GH-stimulated anabolic signaling with the high-calorie intake needed to support mass gain.

**Historical Significance and Comparison**

GHRP-6 laid the groundwork for understanding the ghrelin receptor system and its role in GH regulation. While Ipamorelin has largely replaced it for clean GH optimization and GHRP-2 is preferred for maximum GH amplitude without extreme hunger, GHRP-6 occupies a unique position for mass athletes who specifically want both GH elevation and hunger amplification in a single compound.`,
    benefits: [
      'Significant GH secretion through ghrelin receptor activation',
      'Strongest appetite stimulation among common GHRPs',
      'Strategic hunger window for maximizing post-injection caloric intake',
      'Synergizes with GHRH peptides for amplified GH pulses',
      'Supports muscle mass accrual in caloric surplus phases',
      'Original GHRP with extensive research background',
      'Cost-effective entry to GHRP use at lower price point',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Standard: 100–300mcg subcutaneous before bed or pre-meal during bulking
- Pre-meal timing: inject 30 min before planned large meal to maximize hunger
- Combine with CJC-1295 No DAC for GHRH synergy
- Cycle: 3 months on, 1 month off`,
    synergies: ['cjc-1295-nodac-10mg', 'cjc-ghrp6-blend', 'ghrp-2', 'ipamorelin-10mg'],
    seoTitle: 'Buy GHRP-6 10mg | Appetite Stimulating GHRP | Mass Gaining Growth Hormone Peptide',
    deepDiveTitle: 'GHRP-6: The Original Growth Hormone Releasing Hexapeptide With Maximum Appetite Stimulation',
    highlights: [
      { title: 'Maximum Appetite Stimulation', body: 'GHRP-6 produces the strongest hunger increase of any GHRP — creating a strategic eating window that mass-gaining athletes use to maximize caloric intake alongside GH stimulation.' },
      { title: 'Ghrelin-Mimetic Profile', body: 'As the most ghrelin-like of the synthetic GHRPs, GHRP-6 most closely replicates the natural GH release and appetite stimulation of the endogenous fasting hormone.' },
      { title: 'Mass Phase Optimization', body: 'The combination of GH pulse stimulation and appetite amplification makes GHRP-6 uniquely positioned for aggressive bulking phases — supporting both the hormonal and caloric requirements for maximum muscle growth.' },
      { title: 'Established Research Base', body: 'Decades of research on GHRP-6 have characterized its pharmacology, dosing, and safety profile thoroughly — making it one of the best-understood growth hormone releasing peptides available.' },
    ],
  },

  {
    slug: 'gonadorelin',
    name: 'Gonadorelin Acetate',
    tagline: 'GnRH peptide for LH/FSH stimulation and hormonal axis preservation during TRT',
    price: 49.99,
    category: 'Body Composition',
    tags: ['Gonadorelin', 'GnRH', 'LH', 'FSH', 'TRT', 'Hormonal Axis'],
    image: 'https://phiogen.is/images/products/gonadorelin-acetate.png',
    affiliateUrl: 'https://phiogen.is/products/gonadorelin-acetate?ref=PEPS',
    shortDescription: 'Gonadorelin is synthetic GnRH (gonadotropin-releasing hormone) that stimulates LH and FSH secretion — used to maintain testicular function and fertility during testosterone replacement therapy.',
    fullDescription: `**Preserving the Hormonal Axis on TRT**

Gonadorelin is synthetic gonadotropin-releasing hormone (GnRH) — the hypothalamic decapeptide that normally stimulates the pituitary to release luteinizing hormone (LH) and follicle-stimulating hormone (FSH). On testosterone replacement therapy, exogenous testosterone suppresses the hypothalamic-pituitary-gonadal (HPG) axis, resulting in LH/FSH suppression and testicular atrophy. Gonadorelin directly replaces the suppressed GnRH signal to maintain pituitary LH/FSH secretion.

**Mechanism: Pulsatile GnRH Stimulation**

Gonadorelin must be administered in a pulsatile fashion (every 90–120 minutes with a pump, or twice-daily subcutaneous injections in clinical use) to maintain pituitary responsiveness — continuous GnRH receptor stimulation desensitizes the pituitary and paradoxically suppresses LH/FSH. Correctly dosed pulsatile gonadorelin maintains testicular size, intra-testicular testosterone production, and fertility parameters while on TRT.

**Replacing HCG**

Gonadorelin has become the preferred alternative to HCG (human chorionic gonadotropin) for testicular preservation on TRT as HCG availability has become more restricted. While HCG acts at the LH receptor on Leydig cells directly, gonadorelin preserves the entire HPG axis pathway — potentially a more physiological approach.`,
    benefits: [
      'Stimulates LH and FSH secretion to preserve testicular function on TRT',
      'Prevents testicular atrophy during testosterone replacement therapy',
      'Maintains fertility and intra-testicular testosterone production',
      'Physiological HPG axis preservation versus direct LH receptor agonism',
      'FDA-recognized mechanism (marketed as Factrel)',
      'Preferable alternative to HCG for TRT co-administration',
      'Supports post-TRT recovery of natural testosterone production',
    ],
    protocol: `**Reconstitution:** Add 1–2mL bacteriostatic water.

**Dosing:**
- TRT testicular preservation: 100–200mcg subcutaneous twice daily (morning and evening)
- Cycle: continuous while on TRT protocol
- Off TRT: 100mcg twice daily for 4–6 weeks to support axis recovery

**Note:** Pulsatile administration is critical — avoid continuous infusion`,
    synergies: ['cjc-1295-nodac-10mg', 'ipamorelin-10mg', 'kisspeptin-5mg', 'sermorelin'],
    seoTitle: 'Buy Gonadorelin Acetate | GnRH Peptide | LH/FSH Stimulation for TRT',
    deepDiveTitle: 'Gonadorelin: Synthetic GnRH for Preserving the HPG Axis and Testicular Function During TRT',
    highlights: [
      { title: 'TRT Axis Preservation', body: 'Prevents the testicular atrophy and fertility loss that accompanies testosterone replacement by maintaining the LH/FSH stimulation that exogenous testosterone suppresses.' },
      { title: 'HCG Alternative', body: 'Provides testicular preservation through physiological HPG axis activation rather than direct LH receptor agonism — a more natural approach to maintaining testicular function on TRT.' },
      { title: 'Pulsatile Requirement', body: 'GnRH must be delivered pulsatile rather than continuous — a fundamental principle that separates therapeutic from desensitizing GnRH administration.' },
      { title: 'Fertility Preservation', body: 'By maintaining FSH-stimulated spermatogenesis, gonadorelin preserves male fertility during TRT — critical for men who may wish to conceive during or after hormone therapy.' },
    ],
  },

  {
    slug: 'hexarelin',
    name: 'Hexarelin 5mg',
    tagline: 'Most potent GHRP for maximum GH release and cardioprotective secondary effects',
    price: 59.99,
    category: 'Body Composition',
    tags: ['Hexarelin', 'GHRP', 'Growth Hormone', 'Cardioprotection', 'Maximum GH'],
    image: 'https://phiogen.is/images/products/hexarelin-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/hexarelin-5mg?ref=PEPS',
    shortDescription: 'Hexarelin is the most potent synthetic GHRP, producing maximum GH release while also demonstrating cardioprotective effects through a separate receptor mechanism.',
    fullDescription: `**The Most Potent GHRP**

Hexarelin (His-D-Trp-Ala-Trp-D-Phe-Lys-NH2) is a synthetic hexapeptide GHRP that produces the highest GH release per dose of all commonly available GHRPs. It activates GHS-R1a for GH secretion but also binds to a separate, uncharacterized receptor in cardiac tissue — producing cardioprotective effects that are independent of GH and occur even in GH-deficient models. This dual mechanism makes Hexarelin unique among GHRPs.

**Mechanism: GHS-R1a and Cardiac Receptors**

Like all GHRPs, Hexarelin stimulates pituitary GH release through GHS-R1a activation. The potency advantage comes from Hexarelin's particularly high receptor affinity and efficacy at this site. The cardioprotective mechanism involves a separate receptor in cardiomyocytes that mediates anti-apoptotic and anti-ischemic effects through pathways including PKC activation and NO signaling — completely independent of GH.

**Desensitization Consideration**

Hexarelin's potency comes with a desensitization liability — with chronic high-dose use, GH release per injection declines. For this reason, Hexarelin is often used in shorter, higher-impact cycles (4–6 weeks) or at lower doses for extended use, rather than the continuous long-term protocols more common with Ipamorelin. Its cardioprotective applications are studied at doses below those that cause desensitization.`,
    benefits: [
      'Highest GH release per dose among commonly used GHRPs',
      'Cardioprotective effects through a separate cardiac receptor',
      'Anti-apoptotic and anti-ischemic cardiac protection independent of GH',
      'Maximum anabolic GH exposure for intensive cycles',
      'Synergizes with GHRH peptides for peak GH pulse amplitude',
      'Cardiac tissue receptor activation at sub-GH doses',
      'Shorter cycles at high doses mitigate desensitization risk',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Maximum GH: 100–300mcg subcutaneous 2–3x daily (short cycle 4–6 weeks)
- Cardioprotection: 50–100mcg 1–2x daily for extended use
- Cycle: 4–6 weeks at high dose, 2–4 weeks off; or lower-dose continuous
- Combine with CJC-1295 No DAC for GH pulse amplification`,
    synergies: ['cjc-1295-nodac-10mg', 'ghrp-2', 'ipamorelin-10mg', 'nad-100mg'],
    seoTitle: 'Buy Hexarelin 5mg | Most Potent GHRP | Maximum GH Release & Cardioprotection',
    deepDiveTitle: 'Hexarelin: The Most Potent GHRP With Unique Cardioprotective Receptor Effects',
    highlights: [
      { title: 'Highest GH Potency', body: 'Hexarelin produces the largest GH release per dose of any synthetic GHRP — the maximum option for intensive cycles where peak GH exposure is the priority.' },
      { title: 'Cardioprotective Receptor', body: 'A unique cardiac receptor (separate from GHS-R1a) mediates direct cardioprotective effects — anti-apoptotic and anti-ischemic protection that no other GHRP provides.' },
      { title: 'GH-Independent Cardiac Action', body: 'Cardioprotection occurs even in GH-deficient models and at sub-GH doses — confirming a direct cardiac receptor mechanism that is mechanistically distinct from the GH pathway.' },
      { title: 'Intensive Cycle Format', body: 'Hexarelin\'s potency-desensitization profile suits shorter (4–6 week) high-intensity cycles rather than continuous use — a distinct protocol approach from the long-cycle GHRPs.' },
    ],
  },

  {
    slug: 'kisspeptin-5mg',
    name: 'Kisspeptin-10 5mg',
    tagline: 'Hypothalamic GnRH trigger peptide for natural LH, FSH, and testosterone restoration',
    price: 59.99,
    category: 'Body Composition',
    tags: ['Kisspeptin', 'GnRH', 'LH', 'Testosterone', 'Hormonal Axis'],
    image: 'https://phiogen.is/images/products/kisspeptin-10-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/kisspeptin-10-5mg?ref=PEPS',
    shortDescription: 'Kisspeptin-10 is the endogenous neuropeptide that triggers hypothalamic GnRH release — the most upstream intervention for restoring natural LH, FSH, and testosterone production.',
    fullDescription: `**The GnRH Trigger**

Kisspeptin is a neuropeptide produced by hypothalamic KNDy neurons that acts as the master regulator of GnRH pulsatility — it is the upstream signal that tells hypothalamic GnRH neurons when to fire. Kisspeptin-10 refers to the biologically active 10-amino-acid C-terminal fragment. By activating Kiss1R receptors on GnRH neurons, Kisspeptin-10 directly stimulates pulsatile GnRH release, which in turn triggers LH and FSH secretion from the pituitary, and ultimately testosterone production from the testes.

**Upstream HPG Axis Restoration**

Kisspeptin acts upstream of even GnRH in the HPG axis — making it the most physiologically fundamental intervention for restoring the entire HPG axis. After steroid use, TRT, or due to hypothalamic suppression, kisspeptin addresses the problem at the hypothalamic level rather than the pituitary or gonadal level. This makes it particularly relevant for post-cycle recovery and for conditions where hypothalamic GnRH pulsatility is the primary deficiency.

**Fertility and PCT Applications**

Kisspeptin-10 stimulates both LH and FSH simultaneously through its GnRH-mediated mechanism, making it effective for both testosterone restoration and spermatogenesis support. Research applications include male hypogonadism, infertility, and post-anabolic restoration, where the multi-level HPG axis activation distinguishes it from HCG (gonadal-level only) and clomiphene (pituitary-level only).`,
    benefits: [
      'Most upstream HPG axis intervention — activates at hypothalamic level',
      'Triggers GnRH release to stimulate both LH and FSH',
      'Restores natural testosterone production and spermatogenesis',
      'Effective for hypothalamic suppression from steroid/TRT use',
      'Simultaneous LH and FSH stimulation versus gonadal-only HCG',
      'PCT (post-cycle therapy) and fertility restoration applications',
      'Endogenous mechanism — restores natural signaling pathway',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- HPG restoration: 100–250mcg subcutaneous once or twice daily
- PCT: 250mcg twice daily for 4–6 weeks
- Fertility: 100–250mcg subcutaneous 2–3x daily per research protocols

**Note:** Pulsatile administration maximizes GnRH response; avoid continuous high-dose`,
    synergies: ['gonadorelin', 'kisspeptin-10mg', 'cjc-1295-nodac-10mg', 'sermorelin'],
    seoTitle: 'Buy Kisspeptin-10 5mg | GnRH Trigger | HPG Axis Restoration & PCT',
    deepDiveTitle: 'Kisspeptin-10: The Upstream Hypothalamic Trigger for Complete HPG Axis Restoration',
    highlights: [
      { title: 'Upstream HPG Activation', body: 'Kisspeptin acts above GnRH in the axis hierarchy — the most fundamental intervention for restoring natural testosterone by addressing hypothalamic suppression directly.' },
      { title: 'Dual LH/FSH Stimulation', body: 'GnRH-mediated activation stimulates both LH and FSH simultaneously — supporting testosterone production and spermatogenesis in a way that LH-only agents (HCG) cannot.' },
      { title: 'Endogenous Mechanism', body: 'As an endogenous neuropeptide activating natural signaling pathways, kisspeptin restores the hormonal axis through the body\'s own receptor systems rather than pharmacological bypass.' },
      { title: 'PCT Gold Standard', body: 'Hypothalamic-level restoration during PCT addresses the suppression at its source — making kisspeptin the physiologically logical starting point for comprehensive post-cycle hormonal recovery.' },
    ],
  },

  {
    slug: 'kisspeptin-10mg',
    name: 'Kisspeptin-10 10mg',
    tagline: 'High-volume Kisspeptin-10 for extended HPG restoration and fertility protocols',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Kisspeptin', 'GnRH', 'LH', 'FSH', 'High-Volume', 'Fertility'],
    image: 'https://phiogen.is/images/products/kisspeptin-10-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/kisspeptin-10-10mg?ref=PEPS',
    shortDescription: 'Kisspeptin-10 10mg — double supply for extended HPG axis restoration protocols, fertility treatment cycles, and research applications requiring sustained kisspeptin administration.',
    fullDescription: `**Extended Supply for Long-Cycle Restoration**

The 10mg Kisspeptin-10 vial is designed for users running extended post-cycle recovery protocols, fertility treatment cycles, or research applications requiring sustained kisspeptin administration over multiple weeks. At 250mcg twice daily, a single 10mg vial provides 20 days of dosing — significantly longer than the 5mg format enables for sustained HPG axis restoration programs.

**Fertility Protocol Requirements**

Clinical fertility applications of kisspeptin typically involve daily or multiple-times-daily administration over 4–8 weeks, requiring vial quantities well beyond the 5mg format. The 10mg vial provides the supply needed for a meaningful fertility protocol without mid-cycle re-ordering disruption.

**Research Applications**

Kisspeptin-10 is an active area of reproductive endocrinology research. The 10mg format serves both clinical research protocols and extended dose-response investigations — providing sufficient quantity to explore kisspeptin's effects on LH pulse frequency, amplitude, and testosterone restoration across different dosing intervals and durations.`,
    benefits: [
      'Extended supply for 20+ days of twice-daily dosing',
      'Designed for fertility and HPG restoration long protocols',
      'Better cost-per-mg than the 5mg format',
      'Research-grade quantity for reproductive endocrinology studies',
      'Sufficient for 4–8 week PCT or fertility protocols without reorder',
      'All kisspeptin HPG axis restoration benefits',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Extended PCT: 250mcg twice daily for 6–8 weeks
- Fertility protocol: 100–250mcg 2–3x daily for 4–8 weeks
- Cycle: continuous during recovery phase; reassess at 4-week intervals

**Stack:** Combine with Gonadorelin for combined GnRH stimulus`,
    synergies: ['kisspeptin-5mg', 'gonadorelin', 'cjc-1295-nodac-10mg', 'sermorelin'],
    seoTitle: 'Buy Kisspeptin-10 10mg | Extended HPG Restoration | Fertility Protocol Supply',
    deepDiveTitle: 'Kisspeptin-10 10mg: Extended Supply for Comprehensive HPG Axis Restoration and Fertility Protocols',
    highlights: [
      { title: '20+ Day Continuous Supply', body: 'At twice-daily 250mcg dosing, the 10mg vial provides 20 days of uninterrupted kisspeptin administration — appropriate for the extended recovery timelines HPG axis restoration requires.' },
      { title: 'Fertility Protocol Sizing', body: 'Clinical fertility kisspeptin protocols require weeks of sustained administration; the 10mg format is sized for these extended applications without mid-protocol supply interruptions.' },
      { title: 'Research Protocol Quantity', body: 'Sufficient for multi-week dose-response studies or longitudinal HPG axis monitoring — the right volume for reproductive endocrinology research designs.' },
      { title: 'Best Cost-per-mg', body: 'Per-mg cost advantage over the 5mg format rewards users committed to longer protocols — making comprehensive HPG axis restoration economically accessible.' },
    ],
  },

  {
    slug: 'peg-mgf',
    name: 'PEG-MGF 2mg',
    tagline: 'Pegylated IGF-1 splice variant for satellite cell activation and muscle hypertrophy',
    price: 59.99,
    category: 'Body Composition',
    tags: ['PEG-MGF', 'MGF', 'IGF-1 Splice', 'Muscle Hypertrophy', 'Satellite Cells'],
    image: 'https://phiogen.is/images/products/peg-mgf-2mg.png',
    affiliateUrl: 'https://phiogen.is/products/peg-mgf-2mg?ref=PEPS',
    shortDescription: 'PEG-MGF (Pegylated Mechano Growth Factor) is a pegylated IGF-1 splice variant that activates muscle satellite cells and promotes hypertrophy through a mechanism distinct from systemic IGF-1.',
    fullDescription: `**Muscle Satellite Cell Activator**

Mechano Growth Factor (MGF) is a splice variant of IGF-1 that is locally expressed in muscle tissue in response to mechanical strain or damage. It differs from systemic IGF-1 in that its primary action is on muscle satellite cells (myogenic stem cells) — activating them to fuse with damaged muscle fibers and contribute new nuclei for growth. PEG-MGF is the pegylated version, which extends its half-life from ~minutes to approximately 1–2 days by protecting it from enzymatic degradation.

**Mechanism: Satellite Cell Activation**

MGF activates a distinct receptor from IGF-1Ea, initiating a cascade that drives satellite cells out of quiescence, promotes their proliferation, and directs their differentiation and fusion into existing muscle fibers. This satellite cell activation is the mechanism by which muscles increase their myonuclear domain after hypertrophic training — a fundamental limiting factor in long-term muscle growth. By amplifying this process, PEG-MGF accelerates the satellite cell response to training beyond what exercise alone achieves.

**Hypertrophy Applications**

PEG-MGF is used post-workout (within hours of training) to amplify the mechanical growth signal in worked muscles. The localized nature of MGF expression means site-specific injections can target particular muscle groups for selective hypertrophy. The pegylation extends the active window from minutes to 24+ hours, allowing once or twice weekly injection scheduling.`,
    benefits: [
      'Activates muscle satellite cells for new myonuclear contribution',
      'Addresses a fundamental limiting factor of long-term hypertrophy',
      'Pegylation extends half-life from minutes to 1–2 days',
      'Site-specific injection for targeted muscle group enhancement',
      'Distinct mechanism from systemic IGF-1 — complementary, not redundant',
      'Amplifies training-induced satellite cell response',
      'Supports long-term hypertrophic muscle growth beyond standard plateaus',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (2,000mcg/mL).

**Dosing:**
- Post-workout: 100–200mcg intramuscular into trained muscle within 2 hours of training
- Bilateral muscles: split dose between both sides
- Frequency: 2–3x per week on training days
- Cycle: 4–8 weeks, 4 weeks off`,
    synergies: ['ipamorelin-10mg', 'cjc-1295-nodac-10mg', 'bpc-157', 'tb-500'],
    seoTitle: 'Buy PEG-MGF 2mg | Mechano Growth Factor | Satellite Cell Activation for Hypertrophy',
    deepDiveTitle: 'PEG-MGF: The Pegylated IGF-1 Splice Variant That Activates Muscle Satellite Cells for Hypertrophy',
    highlights: [
      { title: 'Satellite Cell Activation', body: 'MGF\'s unique mechanism activates muscle satellite cells — the myogenic stem cells that contribute new nuclei to growing muscle fibers, a process that limits hypertrophy potential.' },
      { title: 'Distinct from IGF-1', body: 'MGF binds a different receptor and activates different downstream pathways from systemic IGF-1Ea — providing mechanistically complementary rather than redundant muscle growth signaling.' },
      { title: 'Pegylation Extension', body: 'PEGylation extends MGF\'s effective half-life from minutes to 24+ hours — transforming a compound that would degrade before reaching target cells into a practical, injectable muscle growth factor.' },
      { title: 'Site-Specific Enhancement', body: 'Intramuscular injection into trained muscle delivers MGF to the exact satellite cell populations that just received the training stimulus — site-specific hypertrophy in targeted muscle groups.' },
    ],
  },

  {
    slug: 'sermorelin',
    name: 'Sermorelin 5mg',
    tagline: 'FDA-approved GHRH(1-29) analog for GH optimization and anti-aging',
    price: 49.99,
    category: 'Body Composition',
    tags: ['Sermorelin', 'GHRH', 'Growth Hormone', 'Anti-Aging', 'GH Optimization'],
    image: 'https://phiogen.is/images/products/sermorelin-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/sermorelin-5mg?ref=PEPS',
    shortDescription: 'Sermorelin is the first 29 amino acids of GHRH, formerly FDA-approved for pediatric GH deficiency — stimulates pulsatile GH release for anti-aging and body composition without exogenous HGH risks.',
    fullDescription: `**The Original Synthetic GHRH**

Sermorelin (GHRH 1-29 NH2) was the first synthetic GHRH analog to receive FDA approval, originally marketed as Geref for the diagnosis and treatment of pediatric growth hormone deficiency. It contains the first 29 amino acids of native GHRH, which represents the biologically active domain responsible for GHS stimulation of pituitary GH secretion. While FDA approval has lapsed (commercial manufacture discontinued), it remains one of the most researched GHRH analogs.

**Advantages over Exogenous HGH**

Sermorelin works by stimulating the pituitary to produce and release its own GH rather than bypassing pituitary function entirely. This preserves natural GH pulsatility, maintains feedback regulation preventing GH excess, avoids IGF-1-mediated risks of exogenous HGH, and costs significantly less than pharmaceutical HGH. The anti-aging community has embraced sermorelin as the physiological approach to GH optimization.

**Clinical and Anti-Aging Data**

Clinical studies show that sermorelin restores GH secretion in GH-deficient adults, improving body composition (reduced fat mass, increased lean mass), sleep quality, bone density, and quality-of-life markers. These outcomes match HGH therapy results without the known risks associated with supraphysiological GH levels.`,
    benefits: [
      'Stimulates pituitary to produce and release its own GH',
      'Former FDA-approved GH-stimulating drug with clinical data',
      'Preserves natural GH pulsatility and feedback regulation',
      'Improves body composition: reduces fat, increases lean mass',
      'Enhances sleep quality and deep sleep duration',
      'Avoids exogenous HGH risks at fraction of the cost',
      'Anti-aging benefits: skin quality, energy, recovery',
    ],
    protocol: `**Reconstitution:** Add 1mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Anti-aging: 200–300mcg subcutaneous before bed
- Combine with Ipamorelin for synergistic GH pulse amplification
- Cycle: 3–6 months on, 1 month off
- Fasted state for maximum GH release`,
    synergies: ['ipamorelin-10mg', 'cjc-1295-nodac-10mg', 'sermorelin-15mg', 'ghrp-2'],
    seoTitle: 'Buy Sermorelin 5mg | GHRH(1-29) Peptide | Anti-Aging GH Stimulation',
    deepDiveTitle: 'Sermorelin: The FDA-Approved GHRH(1-29) Peptide for Physiological GH Optimization and Anti-Aging',
    highlights: [
      { title: 'FDA-Approved History', body: 'Sermorelin was an FDA-approved pharmaceutical for GH deficiency — providing regulatory-validated clinical evidence for its GH-stimulating mechanism and safety profile.' },
      { title: 'Physiological GH Optimization', body: 'Stimulates the pituitary to make its own GH rather than bypassing it — preserving natural feedback regulation and pulsatility that exogenous HGH destroys.' },
      { title: 'Fraction of HGH Cost', body: 'Achieves similar body composition, sleep, and anti-aging benefits to pharmaceutical HGH at a fraction of the cost — the most economically accessible route to GH optimization.' },
      { title: 'Clinical Body Composition Data', body: 'Studies demonstrate significant reductions in fat mass and increases in lean mass with sermorelin — matching HGH outcomes through the pituitary pathway rather than direct replacement.' },
    ],
  },

  {
    slug: 'sermorelin-15mg',
    name: 'Sermorelin 15mg',
    tagline: 'Extended supply GHRH(1-29) for long-cycle GH optimization and anti-aging',
    price: 99.99,
    category: 'Body Composition',
    tags: ['Sermorelin', 'GHRH', 'Growth Hormone', 'Extended Protocol', 'Anti-Aging'],
    image: 'https://phiogen.is/images/products/sermorelin-15mg.png',
    affiliateUrl: 'https://phiogen.is/products/sermorelin-15mg?ref=PEPS',
    shortDescription: 'Sermorelin 15mg — extended supply for 50+ days of anti-aging GHRH therapy in a single vial, ideal for committed long-cycle GH optimization protocols.',
    fullDescription: `**Long-Cycle Anti-Aging GHRH Therapy**

The 15mg Sermorelin vial provides 50–75 days of continuous anti-aging dosing at standard 200–300mcg nightly injection — covering an entire 2–3 month protocol phase from a single vial. Anti-aging sermorelin protocols are most effective when run continuously for 6 months or more; the 15mg format enables extended uninterrupted therapy with fewer reconstitutions.

**Protocol Efficiency**

For users who have confirmed their response to sermorelin with a 5mg trial vial and are now committing to the full anti-aging protocol, the 15mg format is the logical step up. Managing a single vial for 50+ days versus reconstituting three separate 5mg vials reduces preparation work, contamination risk, and supply management complexity.

**Best Value for Long-Term Users**

The 15mg vial offers improved cost-per-mg versus purchasing three 5mg vials — meaningful savings for users who intend to run sermorelin continuously for 6–12 months as part of an anti-aging protocol. Combined with a Kisspeptin or Ipamorelin stack, the 15mg vial anchors the GHRH component efficiently for the full duration.`,
    benefits: [
      '50–75 days of anti-aging GHRH dosing from a single vial',
      'Designed for the 6-month+ continuous protocols where sermorelin works best',
      'Better cost-per-mg versus three 5mg vials',
      'Fewer mid-protocol reconstitutions and contamination events',
      'All sermorelin GHRH benefits: GH pulse stimulation, body composition, sleep',
      'Anchors the GHRH component for extended CJC/Ipamorelin-equivalent protocols',
    ],
    protocol: `**Reconstitution:** Add 3mL bacteriostatic water (5,000mcg/mL).

**Dosing:**
- Anti-aging: 200–300mcg subcutaneous before bed, nightly
- One vial covers 50–75 days of continuous therapy
- Cycle: 3–6 months per phase; reassess every 6 months`,
    synergies: ['ipamorelin-10mg', 'sermorelin', 'cjc-1295-nodac-10mg', 'ghrp-2'],
    seoTitle: 'Buy Sermorelin 15mg | Extended Anti-Aging GHRH | Long-Cycle GH Optimization',
    deepDiveTitle: 'Sermorelin 15mg: Extended Supply GHRH(1-29) for Long-Cycle Anti-Aging Growth Hormone Protocols',
    highlights: [
      { title: '15mg Long-Cycle Supply', body: 'Three times the 5mg starter format — providing 50–75 days of nightly dosing for the extended protocols where sermorelin\'s anti-aging benefits fully manifest.' },
      { title: 'Anti-Aging Protocol Match', body: 'Anti-aging sermorelin protocols require months of continuous use; the 15mg vial is sized to cover 2–3 months as a single reconstituted vial — the right format for sustained therapy.' },
      { title: 'Fewer Reconstitutions', body: 'One preparation for 50+ days versus multiple 5mg vial reconstitutions — reducing preparation time, contamination opportunities, and the operational burden of long-term peptide protocols.' },
      { title: 'Cost Efficiency at Scale', body: 'Better per-mg cost than multiple 5mg vials rewards the long-term commitment that maximizes sermorelin\'s cumulative GH optimization and anti-aging benefits.' },
    ],
  },

  {
    slug: 'tesamorelin',
    name: 'Tesamorelin 2mg',
    tagline: 'FDA-approved GHRH analog for visceral fat reduction and GH restoration',
    price: 69.99,
    category: 'Body Composition',
    tags: ['Tesamorelin', 'GHRH', 'Visceral Fat', 'FDA-Approved', 'GH'],
    image: 'https://phiogen.is/images/products/tesamorelin-2mg.png',
    affiliateUrl: 'https://phiogen.is/products/tesamorelin-2mg?ref=PEPS',
    shortDescription: 'Tesamorelin (Egrifta) is an FDA-approved GHRH analog specifically indicated for HIV-associated lipodystrophy, demonstrating 15–20% reduction in visceral fat in clinical trials.',
    fullDescription: `**FDA-Approved for Visceral Fat Reduction**

Tesamorelin (trade name Egrifta) is a synthetic GHRH analog that received FDA approval in 2010 for the treatment of HIV-associated lipodystrophy — a condition of excess visceral fat accumulation caused by antiretroviral therapy. It is unique among GHRH analogs in having specific FDA approval for a fat-reducing indication, with randomized controlled trial data demonstrating 15–20% reductions in visceral adipose tissue (VAT) after 26 weeks.

**Mechanism: GHRH-Mediated GH and IGF-1 Restoration**

Tesamorelin activates pituitary GHRH receptors to restore GH secretion, which is often suppressed in lipodystrophy states. The resulting increase in GH and downstream IGF-1 drives lipolysis in visceral adipose tissue specifically — the fat depot most strongly regulated by GH. This GH-mediated visceral fat reduction is distinct from general weight loss and specifically targets the metabolically dangerous intra-abdominal fat depot.

**Beyond HIV: Body Composition Applications**

The mechanism of GH-restored visceral fat reduction is relevant beyond HIV lipodystrophy — any individual with suppressed GH secretion (due to aging, obesity, stress, or other factors) and excess visceral fat may benefit from tesamorelin's GHRH-mediated GH restoration. Research is ongoing in non-HIV lipodystrophy, obesity, and cognitive function in aging.`,
    benefits: [
      'FDA-approved for visceral fat reduction (Egrifta)',
      '15–20% reduction in visceral adipose tissue in clinical trials',
      'Restores GH and IGF-1 via hypothalamic GHRH receptor activation',
      'Specifically targets visceral fat — the most dangerous fat depot',
      'Preserves GH pulsatility and feedback regulation',
      'Improves lipid profile and metabolic markers alongside fat reduction',
      'Research applications in aging and age-related visceral adiposity',
    ],
    protocol: `**Reconstitution:** Add 0.5mL sterile water for injection per 2mg vial.

**Dosing:**
- FDA-indicated dose: 2mg subcutaneous daily
- Research protocol: 1–2mg subcutaneous daily
- Cycle: 26 weeks per FDA trial design; ongoing use possible

**Timing:** Morning injection; clinical protocol uses daily dosing`,
    synergies: ['ipamorelin-10mg', 'tesamorelin-10mg', 'sermorelin', 'aod9604-5mg'],
    seoTitle: 'Buy Tesamorelin 2mg | FDA-Approved Visceral Fat GHRH | Egrifta Research Peptide',
    deepDiveTitle: 'Tesamorelin: The FDA-Approved GHRH Analog With Clinical Evidence for 15–20% Visceral Fat Reduction',
    highlights: [
      { title: 'FDA Approved for Fat Reduction', body: 'Tesamorelin (Egrifta) is FDA-approved specifically for visceral fat reduction — the only GHRH analog with regulatory approval for a body composition indication.' },
      { title: '15–20% Visceral Fat Loss', body: 'Randomized controlled trial data shows 15–20% reduction in VAT over 26 weeks — clinical-grade evidence for GH-mediated visceral fat reduction.' },
      { title: 'Visceral Fat Specificity', body: 'GH-mediated lipolysis disproportionately targets visceral adipose tissue — the intra-abdominal fat depot most strongly linked to cardiovascular disease and metabolic syndrome.' },
      { title: 'Pituitary Pathway Preservation', body: 'Like all GHRH analogs, tesamorelin works through the pituitary to restore natural GH secretion — preserving feedback regulation versus the risks of direct GH replacement.' },
    ],
  },

  {
    slug: 'tesamorelin-10mg',
    name: 'Tesamorelin 10mg',
    tagline: 'Extended supply FDA-approved GHRH analog for sustained visceral fat reduction',
    price: 149.99,
    category: 'Body Composition',
    tags: ['Tesamorelin', 'GHRH', 'Visceral Fat', 'High-Volume', 'Extended Protocol'],
    image: 'https://phiogen.is/images/products/tesamorelin-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/tesamorelin-10mg?ref=PEPS',
    shortDescription: 'Tesamorelin 10mg — 5x the single-dose vial, providing 10 days of the FDA clinical dose for extended visceral fat reduction protocols.',
    fullDescription: `**Extended Tesamorelin Protocol Supply**

The 10mg tesamorelin vial contains five times the amount of the standard 2mg vial — providing 10 days of daily 1mg dosing, or 5 days at the full FDA 2mg/day dose. This format reduces the frequency of vial reconstitution for users running the standard 26-week clinical protocol with daily injections, and offers cost efficiency versus purchasing five 2mg vials.

**Protocol Coverage**

The FDA-validated tesamorelin protocol uses 2mg daily for 26 weeks — requiring approximately 52 vials of the 2mg format, or approximately 10 vials of the 5mg or 5 vials of the 10mg. The 10mg format consolidates supply and reduces both cost-per-mg and reconstitution frequency for committed extended-cycle users.

**Research and Clinical Applications**

For researchers studying tesamorelin's dose-response relationships, cognitive effects in aging, or comparative efficacy against other GHRH analogs, the 10mg vial provides sufficient quantity for multi-condition or extended observation protocols without batch variability concerns.`,
    benefits: [
      'Five-dose supply for extended visceral fat reduction protocols',
      'Best cost-per-mg of tesamorelin formats',
      'Reduces reconstitution frequency in daily dosing protocols',
      'All tesamorelin FDA-validated benefits: visceral fat, GH, metabolic markers',
      'Research quantity for dose-response and comparative studies',
      'Practical for 26-week clinical protocol with fewer vial changes',
    ],
    protocol: `**Reconstitution:** Add 2–3mL bacteriostatic water (3,300–5,000mcg/mL).

**Dosing:**
- Clinical: 2mg subcutaneous daily
- Research: 1–2mg subcutaneous daily
- Extended cycle: 26 weeks minimum for full visceral fat reduction effect`,
    synergies: ['tesamorelin', 'ipamorelin-10mg', 'ipa-tesa-blend', 'aod9604-10mg'],
    seoTitle: 'Buy Tesamorelin 10mg | Extended Visceral Fat Protocol | GHRH High-Volume',
    deepDiveTitle: 'Tesamorelin 10mg: Maximum Supply for the Extended Daily Protocol That Delivers Visceral Fat Reduction',
    highlights: [
      { title: '10mg Protocol Anchor', body: 'Five times the standard 2mg vial — covering 5–10 days of the clinical protocol from a single reconstitution, reducing preparation frequency for committed daily users.' },
      { title: 'Clinical Protocol Efficiency', body: 'The 26-week tesamorelin clinical protocol requires daily dosing; the 10mg format dramatically reduces the number of vials needed and improves per-dose cost efficiency.' },
      { title: 'Best per-mg Value', body: 'The largest available tesamorelin format delivers the lowest cost-per-mg — making the full clinical protocol economically accessible for users committed to the 26-week evidence-based approach.' },
      { title: 'Research Flexibility', body: 'Sufficient quantity for dose escalation research, multi-subject studies, or longitudinal comparison of tesamorelin versus other GHRH analogs at equivalent dosing.' },
    ],
  },

  {
    slug: 'glow-blend',
    name: 'GLOW Blend 20mg',
    tagline: 'Anti-aging peptide blend for skin radiance, collagen synthesis, and comprehensive rejuvenation',
    price: 99.99,
    category: 'Anti-Aging',
    tags: ['GLOW Blend', 'Anti-Aging', 'Skin', 'Collagen', 'GHK-Cu', 'Blend'],
    image: 'https://phiogen.is/images/products/glow-blend-50mg.png',
    affiliateUrl: 'https://phiogen.is/products/glow-blend-50mg?ref=PEPS',
    shortDescription: 'GLOW Blend is a curated anti-aging peptide combination targeting skin radiance, collagen production, and cellular rejuvenation — a multi-peptide approach to comprehensive skin health.',
    fullDescription: `**The Multi-Peptide Anti-Aging Blend**

GLOW Blend combines complementary anti-aging peptides that work through different mechanisms to address the multiple pathways of skin aging — collagen degradation, oxidative damage, vascular changes, and cellular senescence. The blend approach allows each peptide to contribute its specific activity while synergistic interactions between them amplify the overall anti-aging effect beyond what any single peptide achieves alone.

**Mechanism: Multi-Pathway Skin Rejuvenation**

Anti-aging skin biology involves multiple concurrent processes: declining collagen synthesis in fibroblasts, increased MMP-mediated matrix degradation, reduced keratinocyte turnover, impaired wound healing, and chronic inflammation. The GLOW Blend addresses several of these simultaneously — with copper peptide components supporting collagen and elastin synthesis, melanocyte-regulating peptides for even tone, and anti-inflammatory components reducing the chronic skin inflammation that accelerates aging.

**Who Benefits**

The GLOW Blend is ideal for users who want a comprehensive skin anti-aging protocol without managing and dosing multiple separate peptides. For those committed to long-term skin optimization and willing to invest in a higher-value combination product, the blend delivers clinical-level intervention against multiple aging pathways in a single formulation.`,
    benefits: [
      'Multi-pathway skin anti-aging through complementary peptide mechanisms',
      'Supports collagen, elastin, and proteoglycan synthesis',
      'Reduces chronic skin inflammation and oxidative damage',
      'Improves skin radiance, tone, and texture',
      'Synergistic peptide interactions for amplified anti-aging effect',
      'Comprehensive skin rejuvenation without multiple separate peptides',
      'Long-term skin quality improvement through continued use',
    ],
    protocol: `**Reconstitution:** Add 2–4mL bacteriostatic water based on target concentration.

**Application:**
- Injectable: subcutaneous mesotherapy micro-injections at 0.1–0.2mL per site
- Topical: dissolve in cosmetic carrier for serum application
- Cycle: 4–8 week injectable course; topical continuous

**Target areas:** Face, neck, décolletage for targeted skin anti-aging`,
    synergies: ['ghk-cu', 'snap-8-50mg', 'epithalon', 'melanotan-1'],
    seoTitle: 'Buy GLOW Blend 20mg | Multi-Peptide Anti-Aging Skin Blend | Collagen & Radiance',
    deepDiveTitle: 'GLOW Blend: The Multi-Peptide Anti-Aging Formulation for Comprehensive Skin Rejuvenation',
    highlights: [
      { title: 'Multi-Pathway Coverage', body: 'Addresses collagen loss, oxidative damage, inflammation, and cellular senescence simultaneously — the comprehensive approach that single peptides cannot achieve.' },
      { title: 'Protocol Simplicity', body: 'One blend covers the functions of multiple individual peptides — reducing the complexity, cost, and dosing management of a multi-peptide skin anti-aging protocol.' },
      { title: 'Synergistic Interactions', body: 'Peptides in combination produce effects that exceed the sum of their individual activities — the biological basis for blend formulations in anti-aging dermatology.' },
      { title: 'Long-Term Investment', body: 'Skin structural improvements from collagen synthesis and fibroblast activation accumulate over months — GLOW Blend is designed for users committed to sustained, long-term skin quality improvement.' },
    ],
  },

  {
    slug: 'cjc-ghrp2-blend',
    name: 'CJC-1295/GHRP-2 Blend 10mg',
    tagline: 'Pre-combined GHRH+GHRP blend for maximum GH pulse amplification',
    price: 79.99,
    category: 'Body Composition',
    tags: ['CJC-1295', 'GHRP-2', 'Blend', 'Growth Hormone', 'Body Composition'],
    image: 'https://phiogen.is/images/products/cjc-1295-ghrp-2-blend-cjc-5mg-ghrp-2-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/cjc-1295-ghrp-2-blend-cjc-5mg-ghrp-2-5mg?ref=PEPS',
    shortDescription: 'Pre-combined CJC-1295 No DAC (5mg) + GHRP-2 (5mg) blend — the maximum GH pulse combination in a single vial for streamlined GHRH+GHRP protocol execution.',
    fullDescription: `**The Maximum GH Pulse Combination**

The CJC-1295/GHRP-2 blend combines the complementary GHRH and GHRP mechanisms in a single pre-mixed vial — the GHRH primes and amplifies pituitary somatotroph response while GHRP-2 simultaneously triggers GH secretion. This combination consistently produces GH pulses that are 2–10x larger than either peptide alone, exploiting the synergy between the two GH regulatory pathways that converge at the pituitary.

**Why Blend vs. Separate Vials**

Pre-blended CJC-1295 + GHRP-2 eliminates the need to draw from two separate vials and combine in a syringe — simplifying the protocol while ensuring precise 1:1 molar ratio dosing. The 5mg+5mg blend matches the standard CJC-1295/GHRP-2 combination protocol proportions that have become the established approach for users pursuing maximum GH pulse optimization.

**GHRP-2 for Mass Gaining**

The choice of GHRP-2 over Ipamorelin in this blend is intentional for mass-gaining applications — GHRP-2 produces higher GH amplitude and appetite stimulation compared to Ipamorelin's cleaner profile. For users in a muscle-building phase where both maximum GH and increased appetite are advantageous, the CJC-1295/GHRP-2 combination is the preferred stack.`,
    benefits: [
      'Maximum GH pulse amplification from GHRH+GHRP synergy',
      'Single vial simplicity versus managing two separate peptides',
      'Pre-combined 1:1 ratio matches established research protocols',
      'GHRP-2\'s appetite stimulation supports caloric surplus in bulking',
      'CJC-1295 primes pituitary for GHRP-2 triggered release',
      'Maximizes overnight GH pulse for anabolic recovery',
      'Streamlined protocol for busy users who value simplicity',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (CJC: 2,500mcg/mL + GHRP-2: 2,500mcg/mL).

**Dosing:**
- Standard: 0.1mL (250mcg each) subcutaneous before bed
- Mass protocol: 0.2mL (500mcg each) before bed and post-workout
- Empty stomach; no food 2 hours before or 1 hour after

**Cycle:** 3 months on, 1 month off`,
    synergies: ['cjc-1295-nodac-10mg', 'ghrp-2', 'ipa-cjc-15mg', 'ipamorelin-10mg'],
    seoTitle: 'Buy CJC-1295/GHRP-2 Blend 10mg | Maximum GH Pulse | GHRH+GHRP Combination',
    deepDiveTitle: 'CJC-1295/GHRP-2 Blend: Pre-Combined Maximum GH Pulse Amplification in a Single Vial',
    highlights: [
      { title: 'Maximum GH Synergy', body: 'GHRH primes pituitary somatotrophs while GHRP-2 triggers peak GH release — the combination produces GH pulses 2–10x larger than either component alone.' },
      { title: 'One Vial Protocol', body: 'Eliminates the daily complexity of drawing and combining two peptides — the blend delivers the same combination dosing in a single syringe pull.' },
      { title: '1:1 Ratio Precision', body: '5mg CJC-1295 + 5mg GHRP-2 provides perfectly balanced dosing at the 1:1 ratio that clinical research and practical protocols consistently recommend.' },
      { title: 'Mass Phase Optimization', body: 'GHRP-2\'s appetite stimulation combined with the maximum GH pulse creates an anabolic environment for both elevated GH signaling and the caloric surplus needed for muscle growth.' },
    ],
  },

  {
    slug: 'cjc-ghrp6-blend',
    name: 'CJC-1295/GHRP-6 Blend 10mg',
    tagline: 'GHRH+GHRP-6 blend for potent GH release with maximum appetite stimulation',
    price: 79.99,
    category: 'Body Composition',
    tags: ['CJC-1295', 'GHRP-6', 'Blend', 'Growth Hormone', 'Appetite'],
    image: 'https://phiogen.is/images/products/cjc-1295-ghrp-6-blend-cjc-5mg-ghrp-6-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/cjc-1295-ghrp-6-blend-cjc-5mg-ghrp-6-5mg?ref=PEPS',
    shortDescription: 'Pre-combined CJC-1295 No DAC (5mg) + GHRP-6 (5mg) blend — strong GH release combined with GHRP-6\'s aggressive appetite stimulation for mass-building protocols.',
    fullDescription: `**GHRH + Maximum Hunger GHRP**

The CJC-1295/GHRP-6 blend combines CJC-1295 No DAC's pituitary priming with GHRP-6's powerful ghrelin-mediated GH secretion and appetite effects. GHRP-6 produces the strongest appetite stimulation of any GHRP — making this blend the optimal choice for hardgainers or mass-phase athletes who struggle to consume sufficient calories and want both GH optimization and hunger amplification from a single pre-workout/pre-bed injection.

**Appetite-Amplified Anabolism**

The hungry state created by GHRP-6 begins approximately 20–30 minutes after injection and lasts 1–2 hours. Strategic timing — injecting 30 minutes before a large meal — combines the GH pulse amplification from the CJC-1295/GHRP-6 combination with maximized caloric intake during the GH-elevated window. This synchronized anabolic environment is unique to the GHRP-6 blend versus Ipamorelin-based combinations.

**Comparison with CJC/GHRP-2 Blend**

Both blends use GHRH+GHRP synergy for amplified GH pulses. The GHRP-6 version emphasizes appetite stimulation (stronger hunger but slightly lower GH amplitude) while the GHRP-2 version prioritizes GH amplitude with moderate hunger. The choice between them depends on whether maximum appetite or maximum GH is the primary priority.`,
    benefits: [
      'CJC-1295 GHRH synergy amplifies GHRP-6-triggered GH pulse',
      'Strongest appetite stimulation of any GHRH+GHRP combination',
      'Pre-combined 1:1 ratio for protocol simplicity',
      'Strategic pre-meal injection timing for maximum anabolic caloric window',
      'Supports caloric surplus requirements for aggressive mass gaining',
      'Single vial replaces two-peptide draw protocol',
      'Ideal for hardgainers or athletes in aggressive bulking phases',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (CJC: 2,500mcg/mL + GHRP-6: 2,500mcg/mL).

**Dosing:**
- Pre-bed mass protocol: 0.1–0.2mL (250–500mcg each) subcutaneous
- Pre-meal timing: inject 30 min before largest meal of the day
- Empty stomach before injection; large meal 30 min after

**Cycle:** 3 months on, 1 month off`,
    synergies: ['cjc-1295-nodac-10mg', 'ghrp-6', 'cjc-ghrp2-blend', 'ipamorelin-10mg'],
    seoTitle: 'Buy CJC-1295/GHRP-6 Blend 10mg | GHRH+GHRP-6 | Maximum Appetite + GH Release',
    deepDiveTitle: 'CJC-1295/GHRP-6 Blend: GHRH Combined with Maximum Appetite GHRP for Mass-Building Protocols',
    highlights: [
      { title: 'Maximum Appetite GHRP', body: 'GHRP-6 produces the strongest hunger of any GHRP — this blend is designed specifically for users who want both GH optimization and aggressive appetite amplification from a single injection.' },
      { title: 'Pre-Meal Timing Strategy', body: 'Inject 30 minutes before a large meal to align the hunger window with strategic eating — maximizing caloric intake during the GH-elevated period for synergistic anabolic conditions.' },
      { title: 'Hardgainer Protocol', body: 'The CJC/GHRP-6 combination solves both problems for hardgainers simultaneously — insufficient appetite and suboptimal GH secretion — with a single pre-combined injection.' },
      { title: 'Appetite vs. GH Trade-off', body: 'Compared to the GHRP-2 blend, CJC/GHRP-6 favors maximum appetite stimulation over peak GH amplitude — the appropriate choice when caloric intake is the greater limiting factor for mass gain.' },
    ],
  },

  {
    slug: 'ipa-cjc-15mg',
    name: 'Ipamorelin/CJC-1295 Blend 15mg',
    tagline: 'The gold-standard GHRH+GHRP combination for clean, optimized GH pulsatility',
    price: 109.99,
    category: 'Body Composition',
    tags: ['Ipamorelin', 'CJC-1295', 'Blend', 'Growth Hormone', 'Anti-Aging'],
    image: 'https://phiogen.is/images/products/ipamorelin-cjc-1295-blend-cjc-10mg-ipa-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/ipamorelin-cjc-1295-blend-cjc-10mg-ipa-5mg?ref=PEPS',
    shortDescription: 'Ipamorelin/CJC-1295 blend (CJC-10mg + Ipamorelin 5mg) — the gold-standard growth hormone protocol combining clean GHRP-mediated GH release with GHRH amplification.',
    fullDescription: `**The Gold-Standard Growth Peptide Protocol**

The Ipamorelin/CJC-1295 combination has become the most widely used growth hormone peptide protocol in the anti-aging and body composition communities — earning this reputation through its optimal balance of efficacy and tolerability. CJC-1295 No DAC provides the GHRH stimulus that primes the pituitary for enhanced GH release, while Ipamorelin selectively triggers the release without the cortisol, prolactin, or excessive appetite effects of GHRP-2 or GHRP-6.

**Why This Combination Dominates**

The dominance of the Ipamorelin/CJC-1295 protocol reflects its ideal characteristics: amplified GH pulses (2–10x larger than monotherapy), clean side effect profile (no cortisol, minimal hunger), compatibility with long-term cycling, and applicability across body composition goals from cutting to anti-aging to athletic performance. The 15mg total dose (10mg CJC + 5mg Ipamorelin) reflects the typical 2:1 CJC:Ipamorelin ratio used in most protocols.

**Single Vial Convenience**

Pre-combining CJC-1295 and Ipamorelin in one vial eliminates the daily ritual of drawing from two separate vials, ensuring the peptides are always at the optimal ratio and minimizing preparation time and contamination risk. This is the format for users who want the proven protocol with maximum day-to-day convenience.`,
    benefits: [
      'Gold-standard GHRH+GHRP combination for GH optimization',
      'Clean GH release with no cortisol or prolactin elevation',
      'Synergistic GH pulse 2–10x larger than either peptide alone',
      'Suitable for cutting, recomposition, anti-aging, and athletic performance',
      'Single vial pre-combined for daily protocol simplicity',
      'Preserves natural GH pulsatility and feedback regulation',
      '2:1 CJC:Ipamorelin ratio per established protocol standards',
    ],
    protocol: `**Reconstitution:** Add 3mL bacteriostatic water (CJC: 3,333mcg/mL + Ipa: 1,667mcg/mL).

**Dosing:**
- Standard: 0.1mL subcutaneous before bed (333mcg CJC + 167mcg Ipamorelin)
- Athletic/body composition: 0.2mL before bed
- Empty stomach; no food 2 hours before, 1 hour after

**Cycle:** 3–6 months on, 1 month off — the standard anti-aging protocol`,
    synergies: ['cjc-1295-nodac-10mg', 'ipamorelin-10mg', 'cjc-ghrp2-blend', 'sermorelin'],
    seoTitle: 'Buy Ipamorelin/CJC-1295 Blend 15mg | Gold-Standard GH Protocol | Anti-Aging',
    deepDiveTitle: 'Ipamorelin/CJC-1295 Blend: The Gold-Standard Growth Hormone Peptide Protocol in a Single Vial',
    highlights: [
      { title: 'Gold-Standard Protocol', body: 'The Ipamorelin/CJC-1295 combination is the most widely prescribed growth peptide protocol — combining maximum GH pulse amplification with the cleanest side effect profile of any GHRH+GHRP combination.' },
      { title: 'No Cortisol Elevation', body: 'Ipamorelin\'s selectivity ensures no cortisol raise — unlike GHRP-2 or GHRP-6 blends, CJC/Ipamorelin achieves maximum GH amplification without the catabolic cortisol trade-off.' },
      { title: '2:1 Optimized Ratio', body: 'The 10mg CJC + 5mg Ipamorelin ratio reflects the established clinical and research evidence for optimal GHRH:GHRP dosing balance — more CJC for sustained priming, less Ipamorelin for selective triggering.' },
      { title: 'All-Purpose Protocol', body: 'Suitable for every body composition goal and anti-aging application — cutting, bulking, maintenance, and longevity users all benefit from optimized pulsatile GH without the specialization required by GHRP-2 or GHRP-6 blends.' },
    ],
  },

  {
    slug: 'ipa-tesa-blend',
    name: 'IPA/TESA Blend 15mg',
    tagline: 'Ipamorelin + Tesamorelin blend for visceral fat reduction with clean GH optimization',
    price: 149.99,
    category: 'Body Composition',
    tags: ['Ipamorelin', 'Tesamorelin', 'Blend', 'Visceral Fat', 'Body Composition'],
    image: 'https://phiogen.is/images/products/ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg.png',
    affiliateUrl: 'https://phiogen.is/products/ipa-tesa-blend-ipa-5mg-tesa-10mg-15mg?ref=PEPS',
    shortDescription: 'IPA/TESA Blend (Ipamorelin 5mg + Tesamorelin 10mg) — combines FDA-validated tesamorelin visceral fat reduction with Ipamorelin\'s clean GHRP amplification in a single vial.',
    fullDescription: `**The Visceral Fat Reduction Stack**

The IPA/TESA blend combines the FDA-validated visceral fat-reducing GHRH analog (tesamorelin) with the cleanest GH-amplifying GHRP (ipamorelin) for a comprehensive GH optimization protocol with particular emphasis on visceral adipose tissue reduction. Tesamorelin's proven 15–20% VAT reduction combined with ipamorelin's additional GH pulse amplification creates a synergistic protocol for addressing metabolically dangerous visceral fat.

**Why Tesamorelin + Ipamorelin**

Tesamorelin, as a GHRH analog, works synergistically with ipamorelin (a GHRP) through the same GHRH+GHRP complementary mechanism as CJC-1295+Ipamorelin. The addition of ipamorelin's pituitary GH trigger amplifies the GH pulses initiated by tesamorelin, potentially producing superior outcomes to tesamorelin monotherapy. Combining the FDA-approved fat reduction profile of tesamorelin with ipamorelin's clean side effect profile creates an ideal protocol for visceral fat reduction with GH optimization.

**Target Population**

This blend is ideal for middle-aged to older individuals with excess visceral fat, metabolic syndrome features, suppressed GH secretion, or those who want the benefits of the FDA-validated tesamorelin protocol augmented by Ipamorelin's synergistic GH amplification.`,
    benefits: [
      'FDA-validated tesamorelin visceral fat reduction mechanism',
      'Ipamorelin GHRP amplifies tesamorelin GHRH-mediated GH pulses',
      '15–20% visceral fat reduction supported by tesamorelin clinical data',
      'Clean side effect profile — no cortisol elevation from ipamorelin',
      'Single vial combining two complementary GH optimization mechanisms',
      'Targets metabolically dangerous visceral adipose tissue specifically',
      'Synergistic GHRH+GHRP combination for superior fat and GH outcomes',
    ],
    protocol: `**Reconstitution:** Add 3mL bacteriostatic water (Tesa: 3,333mcg/mL + Ipa: 1,667mcg/mL).

**Dosing:**
- Standard: 0.3mL subcutaneous daily (1mg Tesa + 0.5mg Ipa)
- Full tesamorelin dose: 0.6mL daily (2mg Tesa + 1mg Ipa)
- Morning injection per tesamorelin clinical protocol

**Cycle:** 26 weeks minimum for full visceral fat reduction effect`,
    synergies: ['tesamorelin', 'ipamorelin-10mg', 'aod9604-5mg', 'cjc-1295-nodac-10mg'],
    seoTitle: 'Buy IPA/TESA Blend 15mg | Ipamorelin + Tesamorelin | Visceral Fat & GH Stack',
    deepDiveTitle: 'IPA/TESA Blend: Ipamorelin + Tesamorelin Synergy for Visceral Fat Reduction and GH Optimization',
    highlights: [
      { title: 'FDA-Validated Fat Reduction', body: 'Tesamorelin\'s 15–20% visceral fat reduction clinical evidence is the foundation of this blend — combining the strongest evidence-based visceral fat GHRH with ipamorelin\'s clean amplification.' },
      { title: 'GHRH+GHRP Synergy', body: 'Tesamorelin (GHRH) + Ipamorelin (GHRP) activates both GH regulatory pathways simultaneously — producing larger GH pulses than tesamorelin alone for superior body composition outcomes.' },
      { title: 'Visceral Fat Targeting', body: 'GH-mediated lipolysis is particularly potent in visceral adipose tissue — this blend\'s elevated GH environment specifically accelerates the reduction of the most metabolically dangerous fat depot.' },
      { title: 'Clean Profile Advantage', body: 'Ipamorelin\'s selectivity adds GHRP amplification without cortisol — a critical consideration when using a fat-targeting protocol where cortisol elevation would counteract the lipolytic objective.' },
    ],
  },

  {
    slug: 'klow-blend',
    name: 'KLOW Blend 80mg',
    tagline: 'Comprehensive metabolic support blend for GLP-1 users managing ketone and metabolic effects',
    price: 119.99,
    category: 'Body Composition',
    tags: ['KLOW Blend', 'Metabolic', 'GLP-1 Support', 'Body Composition', 'Blend'],
    image: 'https://phiogen.is/images/products/klow-blend-80mg.png',
    affiliateUrl: 'https://phiogen.is/products/klow-blend-80mg?ref=PEPS',
    shortDescription: 'KLOW Blend 80mg is a specialized metabolic support formulation designed to address the common side effects and metabolic shifts experienced during GLP-1 agonist weight loss protocols.',
    fullDescription: `**Metabolic Support During GLP-1 Therapy**

KLOW Blend is a specialized combination peptide and metabolic support formulation designed to complement GLP-1 agonist protocols (semaglutide, tirzepatide, survodutide) by addressing the metabolic shifts, muscle loss risk, and GI effects that can complicate GLP-1 therapy. As GLP-1 agonists become the dominant weight loss intervention, the need for adjunct support formulations that optimize outcomes and reduce side effects has grown significantly.

**Addressing GLP-1 Protocol Challenges**

GLP-1 agonists produce rapid weight loss but with important caveats — muscle mass loss alongside fat loss, micronutrient depletion from reduced food intake, and for some users, problematic GI side effects during dose escalation. The KLOW Blend targets these concerns with a combination approach that supports lean mass preservation, metabolic efficiency, and GI comfort during active GLP-1 therapy.

**Combination Synergy**

The blend's components work together to address the specific metabolic context of GLP-1-mediated weight loss — preserving the lean body mass and metabolic rate that are at risk when rapid caloric deficit is achieved pharmacologically rather than through training-induced energy balance. For users investing in GLP-1 therapy, KLOW Blend represents an optimization layer that can meaningfully improve the body composition outcome of the weight loss.`,
    benefits: [
      'Designed to complement GLP-1 agonist weight loss protocols',
      'Supports lean mass preservation during rapid GLP-1-induced weight loss',
      'Addresses metabolic shifts associated with GLP-1 therapy',
      'Reduces risk of muscle loss alongside fat loss during pharmacological caloric deficit',
      'Multi-component blend targeting GLP-1 therapy-specific challenges',
      'Optimizes body composition outcome of GLP-1 investment',
      'Supports metabolic rate and mitochondrial function during active weight loss',
    ],
    protocol: `**Reconstitution:** Add 4–8mL bacteriostatic water based on target concentration.

**Dosing:**
- GLP-1 support: administer concurrently with semaglutide or tirzepatide protocol
- Standard: as directed on blend-specific protocol guide
- Cycle: continuous while on GLP-1 therapy

**Stack:** Use alongside resistance training to maximize lean mass preservation`,
    synergies: ['semaglutide-3mg', 'survodutide', 'mazdutide', '5-amino-1mq-50mg'],
    seoTitle: 'Buy KLOW Blend 80mg | GLP-1 Support Blend | Lean Mass Preservation During Weight Loss',
    deepDiveTitle: 'KLOW Blend: The Metabolic Support Formulation Designed to Optimize GLP-1 Agonist Outcomes',
    highlights: [
      { title: 'GLP-1 Adjunct Design', body: 'Formulated specifically for users on semaglutide, tirzepatide, or other GLP-1 agonists — addressing the lean mass and metabolic rate concerns that standard GLP-1 therapy doesn\'t directly manage.' },
      { title: 'Lean Mass Protection', body: 'Rapid GLP-1-induced weight loss frequently includes muscle loss alongside fat loss; KLOW Blend\'s components specifically target the preservation of lean body mass during pharmacological caloric deficit.' },
      { title: 'Metabolic Rate Support', body: 'Addresses the metabolic rate reduction risk during rapid weight loss — supporting mitochondrial function and metabolic efficiency to prevent the adaptive thermogenesis that undermines long-term weight maintenance.' },
      { title: 'GLP-1 Protocol Optimization', body: 'For users making a significant investment in GLP-1 therapy, KLOW Blend is an optimization layer — ensuring the weight lost is predominantly fat and the body composition outcome matches the investment made.' },
    ],
  },

  {
    slug: 'reta-cagri',
    name: 'Reta-Cagri 5mg/5mg',
    tagline: 'Retatrutide + Cagrilintide dual agonist blend for next-generation obesity management',
    price: 149.99,
    category: 'Weight Loss',
    tags: ['Retatrutide', 'Cagrilintide', 'Dual Agonist', 'GLP-1', 'Amylin', 'Obesity'],
    image: 'https://phiogen.is/images/products/reta-cagri-5mg-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/reta-cagri-5mg-5mg?ref=PEPS',
    shortDescription: 'Reta-Cagri combines Retatrutide (GIP/GLP-1/glucagon triple agonist) with Cagrilintide (long-acting amylin analog) — representing the next generation of obesity pharmacology beyond semaglutide.',
    fullDescription: `**The Next Generation of Obesity Pharmacology**

Reta-Cagri combines two of the most advanced obesity pipeline compounds into a single formulation: Retatrutide (LY3437943), Eli Lilly's triple GIP/GLP-1/glucagon receptor agonist currently in Phase III, and Cagrilintide, Novo Nordisk's long-acting amylin analog that is the companion drug to semaglutide in the Phase III CagriSema combination trial. This combination targets four complementary weight loss mechanisms simultaneously.

**Retatrutide: Triple Receptor Agonism**

Retatrutide activates GIP, GLP-1, and glucagon receptors simultaneously — building on semaglutide's dual GLP-1 mechanism by adding GIP (the incretin hormone that enhances GLP-1's effects and reduces GI side effects) and glucagon (which drives hepatic fat oxidation and thermogenesis). Phase II data showed 24% body weight loss over 48 weeks — the highest weight loss reported for any injectable obesity drug in clinical trials.

**Cagrilintide: Amylin Pathway**

Cagrilintide is a long-acting amylin analog that activates amylin receptors in the hypothalamus and brainstem to reduce caloric intake through a mechanism completely distinct from GLP-1. Amylin suppresses glucagon, slows gastric emptying, and directly activates satiety neurons. Combined with semaglutide in the CagriSema trial, cagrilintide + semaglutide showed 22.7% body weight loss versus 16.1% for semaglutide alone — confirming the additive benefit of amylin pathway targeting.`,
    benefits: [
      'Retatrutide\'s 24% body weight loss in Phase II (highest ever reported)',
      'Cagrilintide\'s amylin mechanism is complementary to GLP-1 action',
      'Four receptors targeted simultaneously: GIP, GLP-1, glucagon, amylin',
      'Next-generation beyond semaglutide in development pipeline',
      'Amylin pathway reduces glucagon and enhances satiety signals',
      'Triple agonism + amylin may synergistically exceed any single mechanism',
      'Targets both appetite and energy expenditure through multiple pathways',
    ],
    protocol: `**Reconstitution:** Add 2mL bacteriostatic water (Reta: 2,500mcg/mL + Cagri: 2,500mcg/mL).

**Dosing:**
- Research: start at 0.25mg each weekly, escalate monthly
- Retatrutide clinical: 0.5–12mg weekly escalation over 12 weeks
- Cagrilintide clinical: 0.25–4.5mg weekly escalation

**Note:** Advanced pipeline compounds; base protocols on Phase II/III clinical data`,
    synergies: ['semaglutide-3mg', 'survodutide', 'mazdutide', '5-amino-1mq-50mg'],
    seoTitle: 'Buy Reta-Cagri 5mg/5mg | Retatrutide + Cagrilintide | Next-Gen Obesity Treatment',
    deepDiveTitle: 'Reta-Cagri: Combining Retatrutide Triple Agonism with Cagrilintide Amylin Action for Maximum Weight Loss',
    highlights: [
      { title: '24% Body Weight Loss', body: 'Retatrutide\'s Phase II trial produced 24% body weight reduction over 48 weeks — the highest weight loss ever reported for any injectable obesity medication in clinical history.' },
      { title: 'Four-Receptor Mechanism', body: 'GIP + GLP-1 + Glucagon + Amylin receptor activation simultaneously — an unprecedented mechanistic breadth targeting appetite, energy expenditure, hepatic fat, and satiety through four independent pathways.' },
      { title: 'CagriSema Validation', body: 'Cagrilintide + semaglutide (CagriSema) showed 22.7% vs 16.1% weight loss for semaglutide alone in Phase III — confirming the additive amylin benefit and validating the multi-mechanism approach.' },
      { title: 'Next Generation Pipeline', body: 'Both compounds are in active Phase III development, representing the next tier of approved obesity pharmacology expected to surpass semaglutide — Reta-Cagri provides research access to both simultaneously.' },
    ],
  },

  // ─── ADDITIONAL HEALING ──────────────────────────────────────────────────────
  {
    slug: 'bpc-157-30mg',
    name: 'BPC-157 30mg',
    tagline: 'Bulk BPC-157 — Sustained Healing Protocol Supply',
    price: 119.99,
    category: 'Healing',
    tags: ['healing', 'gut', 'tendons', 'bulk', 'long-term', 'value'],
    image: 'https://phiogen.is/images/products/bpc-157-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-10mg?ref=PEPS',
    shortDescription: 'BPC-157 30mg is the bulk vial for extended healing protocols — provides 60+ days of standard dosing at 500mcg/day with the lowest per-mcg cost.',
    fullDescription: `BPC-157 30mg provides the best per-unit value for users running extended healing protocols or stacking BPC-157 with TB-500 over multiple months. A single 30mg vial reconstituted with 6mL bacteriostatic water yields a 5mg/mL concentration, providing 60 days of 500mcg/day dosing from one vial.

**Who Needs the 30mg Vial**

Athletes and individuals dealing with chronic injuries benefit most from extended BPC-157 protocols (12-16 weeks). The 30mg vial eliminates mid-protocol supply gaps that disrupt healing continuity. For those running the full BPC-157 + TB-500 stack, having a larger BPC-157 supply ensures both peptides run simultaneously through the full loading and maintenance phases.

**Reconstitution Guide**

Add 6mL bacteriostatic water to the 30mg vial to achieve a 5mg/mL (5,000mcg/mL) concentration. Each 0.1mL draw = 500mcg. Store refrigerated after reconstitution and use within 28-30 days. For a 250mcg dose, draw 0.05mL using a 1mL insulin syringe.

**Extended Protocol Results**

Extended BPC-157 protocols (12+ weeks) are used for complete structural repair of chronic tendon and ligament injuries that didn't resolve with shorter cycles. The 30mg bulk size makes this clinically relevant protocol economically practical.`,
    benefits: [
      'Best per-mcg value for extended BPC-157 protocols',
      '60+ days of 500mcg/day dosing from one vial',
      'Eliminates supply gaps during multi-month healing protocols',
      'Ideal for chronic injury repair requiring 12-16 week cycles',
      'Same potency and purity as standard vials',
      'Reduces reconstitution frequency for long-term users',
    ],
    protocol: `**Extended Healing Protocol:**
- Reconstitute with 6mL bacteriostatic water (5mg/mL)
- Standard dose: 0.1mL (500mcg) subcutaneous daily
- Cycle: 12-16 weeks for chronic injuries
- Store refrigerated; use within 28 days`,
    synergies: ['tb-500', 'ghk-cu', 'nad', 'bpc-157-tb-500-blend-20mg'],
    seoTitle: 'Buy BPC-157 30mg | Bulk Healing Peptide Extended Protocol | BPC-157 Stack',
    deepDiveTitle: 'BPC-157 30mg: Best Value Bulk Supply for Extended Healing Protocols',
    highlights: [
      { title: 'Best Value', body: 'Lowest per-mcg BPC-157 price — 30mg covers 60+ days of 500mcg daily dosing from a single vial.' },
      { title: 'No Supply Gaps', body: 'Extended healing protocols require uninterrupted supply — 30mg eliminates mid-cycle shortages.' },
      { title: 'Chronic Injury Grade', body: 'Chronic tendon and ligament injuries need 12-16 week protocols. The 30mg vial is built for this.' },
      { title: 'Same BPC-157', body: 'Identical compound and quality as the standard 10mg vial — just more of it for less per milligram.' },
    ],
  },
  {
    slug: 'ara-290',
    name: 'ARA-290 4mg',
    tagline: 'Erythropoietin-Derived Neuropeptide for Nerve Repair',
    price: 89.99,
    category: 'Healing',
    tags: ['neuropathy', 'nerve repair', 'pain', 'inflammation', 'EPO-derived'],
    image: 'https://phiogen.is/images/products/ara-290-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/ara-290-10mg?ref=PEPS',
    shortDescription: 'ARA-290 is a non-hematopoietic erythropoietin peptide that repairs small fiber neuropathy and reduces neuroinflammation — studied clinically for diabetic neuropathy.',
    fullDescription: `ARA-290 is an 11-amino-acid peptide derived from the helix-B surface of erythropoietin (EPO) — engineered to retain EPO's tissue-protective and anti-inflammatory effects while eliminating red blood cell stimulation. This makes ARA-290 safe for repeated use without the hematopoietic risks associated with EPO itself.

**Mechanism: Innate Repair Receptor**

ARA-290 acts through the Innate Repair Receptor (IRR), a heterodimer of the EPO receptor and the beta common receptor (CD131). This receptor is expressed on damaged and inflamed tissues — ARA-290 specifically targets tissue under stress and activates repair pathways only where they're needed.

**Clinical Evidence for Neuropathy**

Phase II clinical trials in sarcoidosis patients with small fiber neuropathy demonstrated significant improvements in pain scores, nerve fiber density, and quality of life measures. The peptide promoted small fiber nerve regrowth in patients with established neuropathic damage — a finding with significant implications for diabetic peripheral neuropathy, chemotherapy-induced neuropathy, and other causes of small fiber loss.

**Anti-Inflammatory Action**

ARA-290 reduces production of pro-inflammatory cytokines (TNF-α, IL-6, IL-1β) at injury sites while promoting M2 macrophage polarization — shifting the immune response from destructive inflammation toward repair. This mechanism makes it valuable for any condition with chronic neuroinflammation.`,
    benefits: [
      'Repairs small fiber nerve damage — clinically demonstrated in Phase II trials',
      'Reduces neuropathic pain without opioid mechanisms',
      'Promotes nerve fiber regrowth in established neuropathy',
      'Anti-inflammatory: reduces TNF-α, IL-6, IL-1β at injury sites',
      'Non-hematopoietic — no red blood cell stimulation unlike EPO',
      'Targets damaged tissue specifically via the Innate Repair Receptor',
    ],
    protocol: `**Neuropathy Protocol:**
- Dose: 4mcg/kg body weight subcutaneous daily
- Duration: 4-12 weeks depending on condition severity
- Typical: 1mg-4mg per injection for most users
- Best paired with BPC-157 for comprehensive nerve + tissue repair`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'nad'],
    seoTitle: 'Buy ARA-290 | EPO-Derived Neuropathy Repair Peptide | BPC-157 Stack',
    deepDiveTitle: 'ARA-290: The EPO Peptide That Repairs Peripheral Neuropathy',
    highlights: [
      { title: 'Nerve Regrowth', body: 'Phase II trials demonstrated small fiber nerve density improvements in sarcoidosis neuropathy — the only peptide with this clinical proof.' },
      { title: 'Non-Hematopoietic', body: 'Derived from EPO but engineered to eliminate red blood cell stimulation — all the tissue repair, none of the hematological risk.' },
      { title: 'Innate Repair Receptor', body: 'Targets the IRR — only activated on damaged/inflamed tissue, creating a tissue-specific therapeutic effect.' },
      { title: 'Cytokine Control', body: 'Reduces TNF-α, IL-6, IL-1β simultaneously — addressing the neuroinflammation cycle that perpetuates neuropathic pain.' },
    ],
  },
  {
    slug: 'cjc-1295-ipamorelin-15mg',
    name: 'CJC-1295 / Ipamorelin Blend 15mg',
    tagline: 'Extended Supply — Growth Hormone Pulse Protocol',
    price: 119.99,
    category: 'Body Composition',
    tags: ['GH', 'growth hormone', 'CJC-1295', 'ipamorelin', 'muscle', 'fat loss', 'blend'],
    image: 'https://phiogen.is/images/products/ipamorelin-cjc-1295-blend-cjc-10mg-ipa-5mg-15mg.png',
    affiliateUrl: 'https://phiogen.is/products/ipamorelin-cjc-1295-blend-cjc-10mg-ipa-5mg-15mg?ref=PEPS',
    shortDescription: 'CJC-1295 / Ipamorelin 15mg blend — extended supply for the gold-standard growth hormone stimulation stack. Covers 10+ weeks of twice-daily dosing.',
    fullDescription: `CJC-1295/Ipamorelin blend is the most clinically rational GH secretagogue combination available. CJC-1295 (No DAC) extends each GH pulse by amplifying GHRH signaling, while Ipamorelin triggers the pulsatile release without elevating cortisol or prolactin. The 15mg bulk vial (CJC 10mg + Ipamorelin 5mg) provides the most cost-effective format for sustained protocols.

**Why This Combination Works**

Ipamorelin alone produces strong, clean GH pulses — the cleanest of all ghrelin mimetics, with no cortisol or prolactin elevation at standard doses. CJC-1295 amplifies these pulses through the GHRH receptor, increasing both the amplitude and duration of each pulse. Together, they produce GH levels 2-3x higher than either compound alone.

**Protocol Timing**

GH pulses are most beneficial when timed to align with natural pulsatile peaks — typically upon waking, before training, and before sleep. The combination taken 30-45 minutes pre-workout or pre-sleep optimizes the anabolic and fat-mobilizing window.

**Long-Term Benefits**

A full 12-24 week protocol produces measurable improvements in body composition, skin quality, sleep depth, joint health, and recovery rate. The benefits compound over time as elevated IGF-1 remodels lean tissue and reduces visceral fat.`,
    benefits: [
      '15mg covers 10+ weeks of standard twice-daily dosing',
      'Best value per-mg for extended CJC/Ipa stack protocols',
      'Produces 2-3x higher GH pulses than either compound alone',
      'No cortisol or prolactin elevation at research doses',
      'Improves body composition, sleep quality, and joint health',
      'Stimulates natural pulsatile GH — physiologically superior to exogenous HGH',
    ],
    protocol: `**Standard GH Pulse Protocol (15mg vial):**
- Reconstitute with 3mL bacteriostatic water (5mg/mL)
- CJC:Ipa ratio is 2:1 in this blend
- Dose: 0.1mL (500mcg total) twice daily
- Timing: Upon waking + 30min before sleep
- Cycle: 12-24 weeks, 4-week off periods`,
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'ghk-cu', 'tb-500'],
    seoTitle: 'Buy CJC-1295 Ipamorelin 15mg Blend | Extended GH Protocol Supply | BPC-157 Stack',
    deepDiveTitle: 'CJC-1295/Ipamorelin 15mg: Extended Supply for the Gold-Standard GH Stack',
    highlights: [
      { title: '10+ Weeks Supply', body: '15mg vial covers 10+ weeks of twice-daily 500mcg dosing — enough for a complete growth hormone optimization cycle.' },
      { title: '2-3x GH Amplification', body: 'CJC-1295 + Ipamorelin together produce 2-3x higher GH pulses than either compound alone via dual receptor activation.' },
      { title: 'Clean Profile', body: 'Ipamorelin is the most selective ghrelin mimetic — no cortisol, no prolactin, just clean pulsatile GH release.' },
      { title: 'Compounding Results', body: 'GH secretagogue benefits compound over 12-24 week cycles: body recomposition, joint repair, and sleep quality improve progressively.' },
    ],
  },
  {
    slug: 'liraglutide',
    name: 'Liraglutide 18mg',
    tagline: 'Original GLP-1 — Daily Dosing Weight Loss Protocol',
    price: 99.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'liraglutide', 'Victoza', 'Saxenda', 'weight loss', 'daily'],
    image: 'https://phiogen.is/images/products/liraglutide-18mg.png',
    affiliateUrl: 'https://phiogen.is/products/liraglutide-18mg?ref=PEPS',
    shortDescription: 'Liraglutide is the original GLP-1 receptor agonist (Victoza/Saxenda) — the foundational weight loss peptide with the most clinical data, dosed daily for continuous appetite control.',
    fullDescription: `Liraglutide was the first GLP-1 receptor agonist approved for weight management (as Saxenda, 3mg/day). While semaglutide and tirzepatide have superseded it in efficacy, liraglutide has the most extensive long-term safety data of any GLP-1 compound — with 15+ years of clinical experience and the SCALE and LEADER trials providing robust cardiovascular and metabolic outcome data.

**Why Some Prefer Daily Liraglutide**

Weekly GLP-1 injections (semaglutide, tirzepatide) produce higher peak concentrations that can intensify side effects during the first 24-48 hours post-injection. Daily liraglutide maintains more stable plasma levels with lower peak-to-trough variation, which some users find produces more consistent appetite suppression with less nausea concentration.

**SCALE Obesity Trial Results**

At 3mg/day, liraglutide produced 8% average body weight reduction at 56 weeks in the SCALE Obesity trial — less than semaglutide's 15-20% but still clinically significant. The cardiovascular benefits from LEADER (13% reduction in major cardiac events) have been confirmed in follow-up analyses.

**Reconstitution and Daily Protocol**

An 18mg vial reconstituted with 3.6mL bacteriostatic water yields a 5mg/mL concentration. At 1.2mg/day (a common starting dose), draw 0.24mL daily. At the maximum 3mg/day dose, draw 0.6mL daily, and the vial covers 6 days at maximum dose or 15 days at starting dose.`,
    benefits: [
      '15+ years of clinical safety data — the most studied GLP-1 agonist',
      '8% average weight loss at 56 weeks in SCALE trial',
      '13% cardiovascular event reduction in LEADER trial',
      'Daily dosing produces stable GLP-1 levels without weekly peaks',
      'Reduces HbA1c and improves insulin sensitivity',
      'Approved for both type 2 diabetes (Victoza) and obesity (Saxenda)',
    ],
    protocol: `**Daily Protocol:**
- Reconstitute with 3.6mL bacteriostatic water (5mg/mL)
- Starting dose: 0.6mg/day (0.12mL) for 1 week
- Escalate by 0.6mg/week to 1.2mg, 1.8mg, 2.4mg, 3mg
- Maximum: 3mg/day (0.6mL)
- Inject subcutaneously daily, same time each day`,
    synergies: ['glp-1s-semaglutide', 'glp-2t-tirzepatide', '5-amino-1mq-50mg', 'nad'],
    seoTitle: 'Buy Liraglutide 18mg | Original GLP-1 Daily Weight Loss Protocol | BPC-157 Stack',
    deepDiveTitle: 'Liraglutide: The Original GLP-1 With 15 Years of Clinical Safety Data',
    highlights: [
      { title: '15 Years of Data', body: 'Liraglutide has more long-term safety data than any other GLP-1 agonist — LEADER trial confirms cardiovascular benefits.' },
      { title: 'Stable Daily Levels', body: 'Daily dosing eliminates the peak-trough variability of weekly injections — some users report more consistent appetite control.' },
      { title: '8% Average Loss', body: 'SCALE Obesity trial: 8% average body weight reduction at 56 weeks at maximum 3mg/day dose.' },
      { title: 'Cardiovascular Proven', body: 'LEADER trial: 13% reduction in major adverse cardiovascular events — one of the most important outcomes for metabolic syndrome.' },
    ],
  },
  {
    slug: 'cagrilintide',
    name: 'Cagrilintide 5mg',
    tagline: 'Long-Acting Amylin Analog — Next-Gen Appetite Control',
    price: 99.99,
    category: 'Weight Loss',
    tags: ['amylin', 'cagrilintide', 'GLP-1', 'weight loss', 'satiety', 'Phase III'],
    image: 'https://phiogen.is/images/products/cagrilintide-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/cagrilintide-5mg?ref=PEPS',
    shortDescription: 'Cagrilintide is a long-acting amylin analog that adds a fourth mechanism to GLP-1 protocols — slows gastric emptying through amylin receptor agonism for compounding weight loss.',
    fullDescription: `Cagrilintide is a long-acting amylin analog developed by Novo Nordisk for once-weekly subcutaneous dosing. Amylin is a peptide co-secreted with insulin from pancreatic beta cells that slows gastric emptying, reduces glucagon secretion, and signals satiety to the brain. Cagrilintide recapitulates these effects with a half-life that supports weekly dosing.

**The Amylin Mechanism**

Amylin works through a distinct receptor system (calcitonin receptor/RAMP complexes) that is entirely separate from GLP-1 receptors. This means cagrilintide adds complementary appetite and metabolic effects without receptor cross-talk or competition. When combined with semaglutide (as CagriSema), the two compounds produce synergistic weight loss beyond either alone.

**CagriSema Clinical Evidence**

The Phase III REDEFINE 1 trial of CagriSema (cagrilintide 2.4mg + semaglutide 2.4mg once weekly) demonstrated 22.7% body weight reduction at 68 weeks versus 16.1% for semaglutide alone — a 42% improvement attributable solely to the addition of cagrilintide. This validated amylin agonism as a meaningful complementary mechanism.

**Standalone Cagrilintide**

As a standalone, cagrilintide at 4.5mg/week produced approximately 10.8% body weight reduction in Phase II — less than semaglutide alone, but with complementary mechanisms that stack additively when combined.`,
    benefits: [
      'Adds amylin receptor agonism — a mechanism absent from all GLP-1 agonists',
      'Phase III CagriSema: 22.7% weight loss vs 16.1% for semaglutide alone',
      'Slows gastric emptying through a distinct receptor system',
      'Reduces post-meal glucagon secretion independently of GLP-1',
      'Long-acting — once weekly dosing',
      'Stack with any GLP-1 for additive weight loss',
    ],
    protocol: `**Escalation Protocol:**
- Starting dose: 0.25mg once weekly
- Escalate by 0.25mg every 4 weeks
- Maximum studied: 4.5mg once weekly
- Most combine with semaglutide or tirzepatide for synergy`,
    synergies: ['glp-1s-semaglutide', 'glp-2t-tirzepatide', 'reta-cagri', 'cagri-sema'],
    seoTitle: 'Buy Cagrilintide 5mg | Amylin Analog for Enhanced GLP-1 Weight Loss | BPC-157 Stack',
    deepDiveTitle: 'Cagrilintide: The Amylin Analog That Adds 42% More Weight Loss to Semaglutide',
    highlights: [
      { title: '+42% Weight Loss', body: 'CagriSema Phase III: adding cagrilintide to semaglutide increased weight loss from 16.1% to 22.7% — a 42% relative improvement.' },
      { title: 'Distinct Mechanism', body: 'Amylin receptor agonism via calcitonin receptor/RAMP complexes — no cross-talk with GLP-1 receptors, pure additive effect.' },
      { title: 'Weekly Dosing', body: 'Long-acting formulation supports once-weekly injection schedule — same convenience as semaglutide and tirzepatide.' },
      { title: 'Phase III Validated', body: 'REDEFINE 1 trial confirms the synergistic mechanism — not just additive, the combination outperforms the sum of parts.' },
    ],
  },
  {
    slug: 'nad-250mg',
    name: 'NAD+ 250mg',
    tagline: 'High-Dose NAD+ — Mitochondrial Optimization Protocol',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['NAD+', 'anti-aging', 'mitochondria', 'energy', 'longevity', 'cellular repair'],
    image: 'https://phiogen.is/images/products/nad-500mg.png',
    affiliateUrl: 'https://phiogen.is/products/nad-500mg?ref=PEPS',
    shortDescription: 'NAD+ 250mg provides high-dose nicotinamide adenine dinucleotide for mitochondrial optimization, DNA repair activation, and sirtuin-mediated longevity signaling.',
    fullDescription: `NAD+ (Nicotinamide Adenine Dinucleotide) is the master regulator of cellular energy metabolism. It declines 50% from age 20 to 60, and this decline is now understood to be a causal driver of the aging phenotype. Direct NAD+ supplementation via injection restores intracellular levels within hours, activating sirtuins, PARP enzymes, and the CD38 pathway simultaneously.

**The 250mg Advantage**

The 250mg vial is the middle-ground option between maintenance (100mg) and clinical-grade (500mg) dosing. A single 250mg dose produces immediate, measurable improvements in energy, mental clarity, and metabolic markers. Many users report the 250mg dose as the threshold where acute subjective effects become most noticeable — the "flush" feeling that confirms NAD+ activity in tissues.

**Sirtuin Activation and Longevity**

Sirtuins (SIRT1-7) are NAD+-dependent deacetylases that regulate epigenetic expression, mitochondrial biogenesis, inflammation, and DNA repair. They only function when NAD+ levels are adequate — which is why NAD+ decline with aging represents a master switch that dims longevity signaling across multiple systems simultaneously. Restoring NAD+ reactivates all seven sirtuins at once.

**IV vs Subcutaneous Delivery**

While IV NAD+ is used clinically for addiction and neurological conditions, subcutaneous injection achieves systemic elevation and is appropriate for longevity and metabolic optimization protocols without the clinical overhead of IV administration.`,
    benefits: [
      'Restores NAD+ levels that decline 50% between age 20-60',
      'Activates all seven sirtuins — the master longevity enzymes',
      'Enhances mitochondrial biogenesis and energy production',
      'Activates PARP enzymes for DNA strand break repair',
      '250mg threshold: acute energy and cognitive effects are most noticeable',
      'Improves insulin sensitivity and metabolic flexibility',
    ],
    protocol: `**Optimization Protocol:**
- Reconstitute with 2.5mL bacteriostatic water (100mg/mL)
- Dose: 0.5mL-2.5mL (50mg-250mg) subcutaneous
- Frequency: 2-3x per week or as needed
- Many start at 100mg and escalate to 250mg based on response
- Store refrigerated; use within 28 days`,
    synergies: ['nad', 'nad-100mg', 'ghk-cu', 'epithalon'],
    seoTitle: 'Buy NAD+ 250mg | High-Dose Mitochondrial Optimization | BPC-157 Stack',
    deepDiveTitle: 'NAD+ 250mg: High-Dose Protocol for Mitochondrial and Longevity Optimization',
    highlights: [
      { title: '50% Age Decline', body: 'NAD+ drops 50% from age 20 to 60 — injection directly restores cellular levels within hours, reactivating all dependent longevity pathways.' },
      { title: 'Seven Sirtuins', body: 'NAD+ is required by all 7 sirtuins — the enzymes that regulate epigenetics, inflammation, mitochondria, and DNA repair. All are reactivated together.' },
      { title: '250mg Sweet Spot', body: 'Users report 250mg as the dose threshold where acute energy, clarity, and tissue-level effects become clearly noticeable.' },
      { title: 'PARP Activation', body: 'PARP enzymes consume NAD+ to repair DNA strand breaks — adequate NAD+ is essential for maintaining genomic stability as you age.' },
    ],
  },
  {
    slug: 'nad-500mg',
    name: 'NAD+ 500mg',
    tagline: 'Clinical-Grade NAD+ — Maximum Restoration Protocol',
    price: 149.99,
    category: 'Anti-Aging',
    tags: ['NAD+', 'anti-aging', 'mitochondria', 'longevity', 'clinical', 'high-dose'],
    image: 'https://phiogen.is/images/products/nad-500mg.png',
    affiliateUrl: 'https://phiogen.is/products/nad-500mg?ref=PEPS',
    shortDescription: 'NAD+ 500mg is the clinical-grade high-dose option — used in addiction recovery, neurological repair, and longevity clinics for maximum mitochondrial restoration.',
    fullDescription: `NAD+ 500mg represents the clinical-grade dosing tier used in IV infusion clinics for addiction recovery, traumatic brain injury, and aggressive anti-aging protocols. While IV delivery is traditionally preferred for this dose range, subcutaneous injection of 500mg produces systemic restoration and is increasingly used by longevity-focused individuals seeking the full mitochondrial and neurological benefits without clinical infrastructure.

**Clinical Applications at This Dose Range**

IV NAD+ clinics use 500mg-1000mg per session for opioid and alcohol addiction recovery, based on evidence that restoring NAD+ in the brain reduces withdrawal severity and craving intensity. Neurological applications include traumatic brain injury, Parkinson's support, and age-related cognitive decline — all linked to NAD+ insufficiency in neural tissue.

**Mitochondrial Biogenesis at High Doses**

500mg NAD+ activates PGC-1α, the master regulator of mitochondrial biogenesis — inducing the formation of new mitochondria in neurons and muscle tissue. This is the mechanism behind the profound cognitive clarity and physical energy that clinical NAD+ patients frequently report. At lower doses, this pathway is only partially activated.

**Longevity Clinic Protocol**

Standard longevity clinic NAD+ protocol: 500mg 2-3x per week for 2-4 weeks (loading), then 500mg once weekly (maintenance). This restores and maintains NAD+ levels at the high end of the physiologically normal range for a 20-30 year old.`,
    benefits: [
      'Clinical-grade dose used in addiction recovery and neurological repair',
      'Activates PGC-1α for mitochondrial biogenesis — new mitochondria formation',
      'Maximum sirtuin activation across all 7 family members',
      'Neurological restoration for cognitive decline and TBI recovery',
      'Most economical high-dose NAD+ option per milligram',
      'Covers full loading + maintenance protocols from a single vial',
    ],
    protocol: `**Loading Protocol:**
- Reconstitute with 5mL bacteriostatic water (100mg/mL)
- Week 1-2: 250mg-500mg 3x/week (loading)
- Week 3+: 250mg-500mg once weekly (maintenance)
- For cognitive effects: morning dosing
- For sleep: evening dosing preferred`,
    synergies: ['nad', 'nad-250mg', 'epithalon', 'ghk-cu'],
    seoTitle: 'Buy NAD+ 500mg | Clinical-Grade Maximum Dose Longevity Protocol | BPC-157 Stack',
    deepDiveTitle: 'NAD+ 500mg: The Clinical Dose for Maximum Mitochondrial Restoration',
    highlights: [
      { title: 'Clinical-Grade Dose', body: 'Used in addiction recovery, TBI, and neurological clinics — the dose range where the most clinically significant NAD+ effects occur.' },
      { title: 'New Mitochondria', body: 'PGC-1α activation at 500mg induces mitochondrial biogenesis — literally creating new mitochondria in neurons and muscle.' },
      { title: 'Brain Restoration', body: 'IV NAD+ at this dose range reduces opioid and alcohol withdrawal severity — evidence that NAD+ is directly neuroactive at clinical doses.' },
      { title: 'Full Protocol', body: 'One 500mg vial covers the full loading + maintenance protocol at standard longevity clinic dosing.' },
    ],
  },
  {
    slug: 'bacteriostatic-water-30ml',
    name: 'Bacteriostatic Water 30mL',
    tagline: 'Large Volume Reconstitution Supply',
    price: 19.99,
    category: 'Supplies',
    tags: ['reconstitution', 'bacteriostatic water', 'supplies', 'injection', 'peptide prep'],
    image: 'https://phiogen.is/images/products/bacteriostatic-water-30ml.png',
    affiliateUrl: 'https://phiogen.is/products/bacteriostatic-water-30ml?ref=PEPS',
    shortDescription: 'Bacteriostatic water 30mL — triple the volume of the standard vial for running multiple concurrent peptide protocols or bulk reconstitution needs.',
    fullDescription: `Bacteriostatic water 30mL provides three times the reconstitution volume of the standard 10mL vial, making it ideal for users running multiple concurrent peptide protocols or those who prefer to reconstitute larger vials with single-step accuracy. The 30mL vial contains the same 0.9% benzyl alcohol bacteriostatic solution that preserves multi-use vials for 28+ days after reconstitution.

**When to Choose 30mL**

If you're running 3 or more peptides simultaneously — a common approach in advanced stacks (e.g., BPC-157 + TB-500 + CJC/Ipa + NAD+) — the 30mL vial eliminates the need to juggle multiple 10mL bottles. One 30mL bottle handles the entire reconstitution supply for a comprehensive multi-peptide protocol.

**Cost Efficiency**

The 30mL vial provides better value per mL than the 10mL — particularly important for advanced users who go through reconstitution water quickly. Running 4 peptide vials simultaneously uses approximately 8-10mL per reconstitution cycle.

**Storage and Compatibility**

Compatible with all peptides and injectable compounds. Store at room temperature before opening; refrigerate or store at room temperature after opening (the bacteriostatic agent keeps it sterile). Use within 28 days of first opening.`,
    benefits: [
      '3x volume of standard 10mL vial in one bottle',
      'Ideal for multi-protocol users running 3+ peptides concurrently',
      'Better per-mL value for high-volume reconstitution needs',
      'Same 0.9% benzyl alcohol formulation as 10mL version',
      'Reduces supply management complexity for advanced stacks',
      'Compatible with all peptides and injectable compounds',
    ],
    protocol: `**Reconstitution:**
- Use same technique as with 10mL vial
- Inject water slowly against vial glass wall (not directly onto powder)
- Gently swirl to dissolve — never shake
- Refrigerate reconstituted peptides; use within 28 days
- Larger vial is easy to draw from with standard insulin syringes`,
    synergies: ['bacteriostatic-water', 'bpc-157', 'tb-500', 'nad'],
    seoTitle: 'Buy Bacteriostatic Water 30mL | Large Volume Peptide Reconstitution | BPC-157 Stack',
    deepDiveTitle: 'Bacteriostatic Water 30mL: Triple-Volume Supply for Multi-Protocol Peptide Users',
    highlights: [
      { title: '3x Volume', body: '30mL covers reconstitution for multiple peptide vials across a complete multi-compound stack — one bottle handles everything.' },
      { title: 'Advanced User Grade', body: 'Designed for users running 3+ peptides simultaneously who want to simplify supply management.' },
      { title: 'Same Formulation', body: '0.9% benzyl alcohol — identical bacteriostatic protection as the 10mL standard vial.' },
      { title: 'Better Value', body: 'Lower per-mL cost compared to the 10mL vial — economical for high-volume reconstitution needs.' },
    ],
  },
  {
    slug: 'insulin-syringes-100ct',
    name: 'Insulin Syringes 1mL 29G x 100',
    tagline: 'Essential Injection Supplies for Peptide Protocols',
    price: 24.99,
    category: 'Supplies',
    tags: ['syringes', 'injection supplies', 'insulin needle', '29 gauge', 'peptide prep'],
    image: 'https://phiogen.is/images/products/insulin-syringes-1ml-29g-x-100.png',
    affiliateUrl: 'https://phiogen.is/products/insulin-syringes-1ml-29g-x-100?ref=PEPS',
    shortDescription: '1mL 29G insulin syringes (100-count) — the standard tool for precise subcutaneous peptide injection. Pre-measured markings make dosing exact and consistent.',
    fullDescription: `1mL insulin syringes with 29-gauge needles are the standard delivery tool for subcutaneous peptide injection. The 1mL capacity and fine graduation markings (in 0.01mL increments on most units) allow precise dosing of peptide concentrations ranging from 250mcg to 2mg per injection with accuracy that larger syringes cannot achieve.

**Why 29G for Peptide Injection**

Peptide solutions are low-viscosity — they draw and inject easily through a 29G needle without the resistance that thicker preparations require larger gauges to overcome. The 29G needle is fine enough to minimize injection site discomfort while maintaining sufficient flow for a smooth injection. Some users prefer 30G or 31G for even finer gauge, but 29G is the most universally used for subcutaneous peptide delivery.

**Precision Dosing with 1mL Capacity**

The 1mL syringe capacity accommodates essentially all standard peptide doses when using typical reconstitution concentrations (1-5mg/mL). Standard 500mcg BPC-157 at 5mg/mL concentration = 0.1mL draw, which is clearly visible and precise on a 1mL syringe's markings.

**100-Count Supply**

100 syringes covers 3+ months of daily injection protocols or 6+ months of every-other-day dosing. Running the BPC-157 + TB-500 stack (two daily injections) uses 2 syringes/day = 50 days from one pack.`,
    benefits: [
      '29G needle minimizes injection site discomfort for subcutaneous use',
      '1mL capacity with 0.01mL graduations for precise peptide dosing',
      '100-count covers 50+ days of dual daily injection protocols',
      'Standard tool for all subcutaneous peptide delivery',
      'Compatible with all peptide solutions and bacteriostatic water',
      'Essential supply for any injectable peptide protocol',
    ],
    protocol: `**Injection Technique:**
1. Draw bacteriostatic water from reconstitution vial first
2. Inject into peptide vial at an angle (not directly onto powder)
3. After reconstitution, draw the desired dose amount
4. Pinch skin at injection site, insert at 45° angle
5. Inject slowly and steadily, withdraw needle
6. Rotate injection sites to prevent local reactions`,
    synergies: ['bacteriostatic-water', 'bacteriostatic-water-30ml', 'bpc-157', 'tb-500'],
    seoTitle: 'Buy Insulin Syringes 29G 1mL x100 | Peptide Injection Supplies | BPC-157 Stack',
    deepDiveTitle: 'Insulin Syringes 1mL 29G: The Standard Tool for Precise Peptide Injection',
    highlights: [
      { title: '29G Fine Gauge', body: '29-gauge needle is fine enough for minimal discomfort in subcutaneous tissue while maintaining smooth flow for low-viscosity peptide solutions.' },
      { title: 'Precision Markings', body: '0.01mL graduation markings allow accurate dosing — critical for small-volume peptide measurements like 0.05mL (250mcg at 5mg/mL).' },
      { title: '100-Count Pack', body: 'Covers 50 days of dual daily injections (BPC-157 + TB-500 stack) or 100 days of single daily protocols.' },
      { title: 'Universal Compatibility', body: 'Works with all peptide solutions at standard reconstitution concentrations — one syringe type for your entire protocol.' },
    ],
  },
  {
    slug: 'mk-677',
    name: 'MK-677 (Ibutamoren) 30mg x30 Capsules',
    tagline: 'Oral GH Secretagogue — Daily Growth Hormone Elevation',
    price: 59.99,
    category: 'Body Composition',
    tags: ['MK-677', 'ibutamoren', 'GH', 'growth hormone', 'oral', 'muscle', 'sleep'],
    image: 'https://phiogen.is/images/products/mk-677-ibutamoren-30mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/mk-677-ibutamoren-30mg-x-30-capsules?ref=PEPS',
    shortDescription: 'MK-677 (Ibutamoren) is an oral ghrelin mimetic that elevates GH and IGF-1 continuously — the only oral compound that sustainably raises growth hormone without injection.',
    fullDescription: `MK-677 (Ibutamoren) is a non-peptide oral ghrelin receptor agonist that elevates GH and IGF-1 levels by 40-80% at 25-30mg/day. Unlike injectable GH secretagogues that produce pulsatile release, MK-677 produces sustained elevation — making it uniquely suited for maximizing 24-hour IGF-1 exposure and the body recomposition benefits that follow.

**Mechanism: Ghrelin Receptor Agonism**

MK-677 binds and activates the ghrelin receptor (GHS-R1a) in the hypothalamus and pituitary, triggering GH secretion through both increased GHRH signaling and reduced somatostatin tone. This produces GH pulses that are larger than natural pulses but still pulsatile — maintaining the regulatory feedback mechanisms that prevent oversuppression.

**Clinical Results**

A 2-year clinical trial in 65-71 year-olds demonstrated 40% IGF-1 increase, maintained through the full duration with no desensitization. Lean mass increased while fat mass decreased. Sleep architecture improved measurably at 4 weeks with enhanced slow-wave sleep. Bone mineral density improved over 12 months.

**Key Considerations**

MK-677 increases appetite significantly through its ghrelin mechanism — users in a caloric surplus gain muscle efficiently; users in a deficit may find appetite management more difficult. Blood glucose may increase modestly (IGF-1 effect). The oral route eliminates injection complexity, making MK-677 the gateway compound for many users entering growth hormone optimization.`,
    benefits: [
      '40-80% increase in GH and IGF-1 at 25-30mg/day — verified in 2-year clinical trial',
      'Oral delivery — no injections required',
      'Enhances slow-wave sleep depth from week 4 onward',
      'No desensitization over 24 months in clinical studies',
      'Simultaneous muscle gain + fat loss in caloric maintenance',
      'Improves bone mineral density over 12+ month protocols',
    ],
    protocol: `**Standard Protocol:**
- Dose: 25-30mg orally once daily (1 capsule)
- Timing: Before sleep (takes advantage of natural GH pulse + improved slow-wave sleep)
- Cycle: 3-6 months minimum for body recomposition effects
- Take with food to reduce nausea at initiation`,
    synergies: ['cjc1295-ipamorelin', 'igf-1lr3', 'tb-500', 'ghk-cu'],
    seoTitle: 'Buy MK-677 Ibutamoren 30mg x30 Caps | Oral GH Secretagogue | BPC-157 Stack',
    deepDiveTitle: 'MK-677: The Only Oral Compound That Sustainably Elevates Growth Hormone',
    highlights: [
      { title: '40-80% GH Increase', body: '2-year clinical trial: 40-80% IGF-1 elevation maintained throughout without desensitization — unprecedented duration for a GH secretagogue.' },
      { title: 'Oral — No Injections', body: 'The only meaningful GH secretagogue that works orally — eliminating the injection complexity of peptide GH protocols.' },
      { title: 'Sleep Upgrade', body: 'Measurable improvement in slow-wave sleep from week 4 — synergizing the recovery benefits of enhanced GH signaling with better sleep quality.' },
      { title: 'No Suppression', body: 'MK-677 elevates GH through receptor agonism, not exogenous replacement — natural pulsatile regulation is maintained throughout.' },
    ],
  },
  {
    slug: 'bpc-157-nasal',
    name: 'BPC-157 Nasal Spray 500mcg/mL',
    tagline: 'Intranasal BPC-157 — Direct CNS and Sinus Delivery',
    price: 49.99,
    category: 'Healing',
    tags: ['BPC-157', 'nasal', 'intranasal', 'CNS', 'gut', 'healing', 'no injection'],
    image: 'https://phiogen.is/images/products/bpc-157-capsules-500mcg-x-60-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-capsules-500mcg-x-60-capsules?ref=PEPS',
    shortDescription: 'BPC-157 intranasal spray delivers the peptide directly through the nasal mucosa for CNS, sinus, and systemic effects — needle-free alternative with rapid onset.',
    fullDescription: `BPC-157 intranasal spray provides an alternative delivery route for users seeking CNS-targeted effects or needle-free administration. The nasal mucosa has a rich blood supply and direct olfactory nerve pathways to the brain — intranasal delivery achieves measurable plasma levels and CNS penetration without injection.

**Intranasal Advantages for CNS Indications**

For neurological applications — dopaminergic protection, brain injury recovery, depression, and anxiety — intranasal delivery may offer superior CNS distribution compared to subcutaneous injection, as the olfactory pathway provides a route that partially bypasses the blood-brain barrier. BPC-157 has demonstrated neuroprotective effects via both systemic and direct CNS pathways.

**Sinus and Upper Respiratory Healing**

Intranasal BPC-157 has been used anecdotally for chronic sinusitis, nasal polyp reduction, and post-surgical mucosal healing. The peptide's pro-angiogenic and anti-inflammatory properties are directly applied to nasal tissue at the site of delivery.

**Bioavailability Considerations**

Intranasal bioavailability of BPC-157 is lower than injection but significantly higher than oral for systemic indications. For users primarily targeting CNS or nasal effects, intranasal delivery is the optimal route. For systemic healing (tendons, gut), injection or oral remains preferred.`,
    benefits: [
      'Needle-free delivery — accessible for injection-averse users',
      'Direct CNS delivery via olfactory nerve pathways',
      'Superior CNS distribution for neurological and mood applications',
      'Directly treats sinus inflammation and mucosal issues',
      'Rapid onset — nasal mucosa absorption is faster than oral',
      'Convenient travel-friendly format',
    ],
    protocol: `**Intranasal Protocol:**
- 1-2 sprays per nostril, 1-2x daily
- Each spray delivers ~100mcg
- Tilt head back slightly for best mucosal contact
- For CNS effects: morning dosing preferred
- For sinus healing: use after nasal rinsing`,
    synergies: ['bpc-157', 'bpc-157-capsules', 'selank', 'semax'],
    seoTitle: 'Buy BPC-157 Nasal Spray | Intranasal Delivery for CNS and Healing | BPC-157 Stack',
    deepDiveTitle: 'BPC-157 Nasal Spray: Direct CNS Delivery for Neurological and Sinus Applications',
    highlights: [
      { title: 'No Injection', body: 'Nasal spray delivery eliminates needles entirely — the most accessible BPC-157 format for injection-averse users.' },
      { title: 'CNS Pathway', body: 'Olfactory nerve provides a direct route to the brain — superior CNS distribution for dopaminergic protection and mood applications.' },
      { title: 'Sinus Healer', body: 'Direct application to nasal mucosa treats sinusitis, mucosal inflammation, and post-surgical nasal healing at the source.' },
      { title: 'Fast Onset', body: 'Nasal mucosa is highly vascularized — absorption begins within minutes versus 30-60 minutes for oral BPC-157.' },
    ],
  },
  {
    slug: 'igf-1-lr3-100mcg',
    name: 'IGF-1 LR3 100mcg',
    tagline: 'Targeted Muscle Repair at the Cellular Level',
    price: 29.99,
    category: 'Body Composition',
    tags: ['IGF-1', 'LR3', 'muscle', 'hypertrophy', 'growth factor', 'repair'],
    image: 'https://phiogen.is/images/products/igf-1-lr3-100mcg.png',
    affiliateUrl: 'https://phiogen.is/products/igf-1-lr3-100mcg?ref=PEPS',
    shortDescription: 'IGF-1 LR3 100mcg — precision starter vial for the most potent muscle anabolic peptide. Stimulates satellite cell activation and myonuclear addition directly.',
    fullDescription: `IGF-1 LR3 (Long R3 Insulin-Like Growth Factor 1) is a modified version of endogenous IGF-1 with a 13-amino-acid N-terminal extension and arginine substitution that dramatically extends its half-life from minutes to 20-30 hours. This modification makes LR3 approximately 3x more potent than native IGF-1 for muscle growth signaling.

**Satellite Cell Activation**

IGF-1 is the primary activator of muscle satellite cells — the stem cells that fuse with existing muscle fibers to add new myonuclei. Adding myonuclei permanently increases a muscle fiber's capacity for protein synthesis. This is the mechanism behind IGF-1's ability to produce hypertrophy that persists even after discontinuation — myonuclear addition is a durable structural change.

**Bilaterally Amplified With GH Secretagogues**

IGF-1 LR3 works synergistically with CJC-1295/Ipamorelin: the growth hormone secretagogues elevate endogenous GH, which drives liver IGF-1 production (systemic). Injected IGF-1 LR3 adds local muscle tissue signaling directly, bypassing the liver IGF-1 ceiling.

**100mcg — The Precision Starting Point**

100mcg is ideal for first-time IGF-1 users establishing individual response. Many users work up to 40-100mcg/day post-workout after confirming tolerability. Hypoglycemia is the primary risk at higher doses — starting at 20-40mcg per injection allows assessment before escalating.`,
    benefits: [
      'Permanently adds myonuclei to muscle fibers — durable hypertrophic changes',
      'Activates satellite cells directly — the only non-hormonal pathway to hyperplasia',
      '20-30 hour half-life vs minutes for native IGF-1',
      '3x more potent than endogenous IGF-1 per unit',
      'Synergistic with GH secretagogues for dual systemic + local anabolic effect',
      'Accelerates muscle repair after training micro-damage',
    ],
    protocol: `**Starting Protocol:**
- Reconstitute with 1mL bacteriostatic water (100mcg/mL)
- Starting dose: 0.2mL (20mcg) post-workout
- Advanced: 0.4-1mL (40-100mcg) post-workout
- Inject near trained muscle groups (bilateral local injection)
- Monitor for hypoglycemia at higher doses — eat nearby`,
    synergies: ['igf-1lr3', 'cjc1295-ipamorelin', 'tb-500', 'bpc-157'],
    seoTitle: 'Buy IGF-1 LR3 100mcg | Starter Vial Muscle Anabolic Peptide | BPC-157 Stack',
    deepDiveTitle: 'IGF-1 LR3 100mcg: Satellite Cell Activation and Myonuclear Addition for Permanent Hypertrophy',
    highlights: [
      { title: 'Permanent Hypertrophy', body: 'IGF-1 adds myonuclei to muscle fibers — a durable structural change that persists beyond the protocol, unlike hormonal hypertrophy.' },
      { title: '3x More Potent', body: 'LR3 modification makes it 3x more potent than native IGF-1 with 20-30 hour half-life vs minutes for endogenous IGF-1.' },
      { title: 'Precision Starter', body: '100mcg vial allows precise dose titration — start at 20mcg post-workout and escalate to find your optimal response.' },
      { title: 'Satellite Cells', body: 'Primary activator of muscle satellite cells — the stem cells responsible for myonuclear addition and true muscular hyperplasia.' },
    ],
  },
  {
    slug: 'epithalon-50mg',
    name: 'Epithalon 50mg',
    tagline: 'Bulk Epithalon — Extended Telomere Extension Protocol',
    price: 249.99,
    category: 'Anti-Aging',
    tags: ['epithalon', 'telomeres', 'longevity', 'anti-aging', 'telomerase', 'bulk'],
    image: 'https://phiogen.is/images/products/epitalon-50mg.png',
    affiliateUrl: 'https://phiogen.is/products/epitalon-50mg?ref=PEPS',
    shortDescription: 'Epithalon 50mg — bulk supply for extended telomere extension and longevity protocols. The most cost-effective format for the only known telomerase-activating compound.',
    fullDescription: `Epithalon (Epitalon) 50mg is the bulk supply option for users who have confirmed their response to Epithalon and want to run extended or repeated protocols. Standard Epithalon cycles use 5-10mg/day for 10-20 days, meaning a 50mg vial covers 2-5 complete cycles — making it the most economical choice for annual or biannual longevity protocols.

**Telomerase Activation — Still Unique After 40 Years**

Despite decades of longevity research, Epithalon remains the only compound with clinical evidence for telomerase activation and actual telomere length extension in humans. The 12-year mortality trial in elderly humans (Khavinson, 2012) demonstrated a 28% reduction in all-cause mortality in treated versus control groups. No other compound available today has this combination of mechanism and clinical longevity data.

**50mg Protocol Economics**

At 5mg/day for 20 days (the standard Khavinson protocol), a 50mg vial provides exactly one full annual protocol. At 10mg/day for 10 days (a compressed protocol that achieves similar telomerase activation), 50mg covers 5 complete cycles — enough for 5 years of annual protocols.

**Stacking With GHK-Cu**

The Epithalon + GHK-Cu combination addresses two distinct hallmarks of aging simultaneously: Epithalon restores telomere length and epigenetic gene expression via the pineal axis, while GHK-Cu reverses 31% of aged gene expression through copper-mediated transcription factor activation. Together they represent the most evidence-backed longevity stack currently available.`,
    benefits: [
      'Covers 2-5 complete Epithalon longevity cycles from one vial',
      'Best per-mg value for the telomerase-activating peptide',
      '28% all-cause mortality reduction in 12-year human trial',
      'Only compound with clinical evidence for actual telomere lengthening',
      'Restores pineal melatonin production for improved sleep quality',
      'Resets epigenetic aging markers toward a younger phenotype',
    ],
    protocol: `**Standard Khavinson Protocol (from 50mg vial):**
- Reconstitute with 10mL bacteriostatic water (5mg/mL)
- Dose: 5-10mg subcutaneous daily
- Cycle: 10-20 days on, 6 months off
- Annual protocol: 10mg/day × 10 days = 100mg/year
- Run 1-2x per year for longevity maintenance`,
    synergies: ['epithalon', 'ghk-cu', 'nad', 'nad-250mg'],
    seoTitle: 'Buy Epithalon 50mg | Bulk Telomere Extension Longevity Protocol | BPC-157 Stack',
    deepDiveTitle: 'Epithalon 50mg: Bulk Supply for Multi-Year Telomere Extension Protocols',
    highlights: [
      { title: '5 Annual Cycles', body: 'At 10mg/day × 10 days per year, 50mg covers 5 complete annual longevity protocols — years of telomerase activation from one vial.' },
      { title: '28% Mortality Reduction', body: '12-year human clinical trial: 28% all-cause mortality reduction — the most compelling longevity data for any single peptide.' },
      { title: 'Only Telomerase Activator', body: 'Despite decades of research, Epithalon remains the only compound with human evidence for telomerase activation and telomere lengthening.' },
      { title: 'Best Bulk Value', body: 'Lowest per-mg Epithalon cost — economically practical for annual longevity protocols over multiple years.' },
    ],
  },
  {
    slug: 'ghrp-2-5mg',
    name: 'GHRP-2 5mg',
    tagline: 'Potent GH Pulse — Starter Vial',
    price: 29.99,
    category: 'Body Composition',
    tags: ['GHRP-2', 'growth hormone', 'GH pulse', 'ghrelin', 'starter', 'muscle'],
    image: 'https://phiogen.is/images/products/ghrp-2-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/ghrp-2-5mg?ref=PEPS',
    shortDescription: 'GHRP-2 5mg starter vial — strong ghrelin mimetic that triggers significant GH pulses with moderate cortisol and prolactin elevation at standard doses.',
    fullDescription: `GHRP-2 (Growth Hormone Releasing Peptide-2) is one of the earliest and most studied synthetic ghrelin receptor agonists. At research doses of 100-300mcg per injection, GHRP-2 produces strong GH pulses that are larger than those produced by Ipamorelin, at the cost of modest cortisol and prolactin elevation. For users prioritizing raw GH output, GHRP-2 is a powerful option.

**GHRP-2 vs Ipamorelin**

Ipamorelin is the cleaner compound — no cortisol, no prolactin at standard doses. GHRP-2 produces larger GH peaks but comes with moderate hormonal side effects. The comparison is not universally in favor of one or the other: for short-term GH maximization (injury recovery, body composition sprint), GHRP-2 may produce faster initial results. For long-term optimization, Ipamorelin's cleaner profile is preferred.

**Synergy with CJC-1295**

Like all ghrelin mimetics, GHRP-2 works synergistically with GHRH analogs (CJC-1295, Sermorelin). CJC-1295 amplifies the amplitude of GHRP-2-triggered GH pulses by 2-3x — the combination is significantly more effective than either alone.

**5mg Starter Vial**

The 5mg vial provides 16-50 injections at 100-300mcg per dose — enough to assess individual response and establish optimal dosing before committing to larger supplies.`,
    benefits: [
      'Strong GH pulses — larger peak than Ipamorelin at equivalent doses',
      '5mg provides 16-50 doses for dose-response assessment',
      'Powerful synergy with CJC-1295 No DAC or Sermorelin',
      'Promotes appetite — beneficial for users in caloric surplus protocols',
      'Well-studied compound with 20+ years of research data',
      'Accelerates recovery and muscle repair via GH/IGF-1 axis',
    ],
    protocol: `**Standard Protocol:**
- Reconstitute with 1mL bacteriostatic water (5mg/mL)
- Dose: 0.02-0.06mL (100-300mcg) subcutaneous
- Frequency: 2-3x daily, fasted (30+ min before meals)
- Best combined with CJC-1295 for amplified GH response`,
    synergies: ['cjc-1295-nodac-10mg', 'cjc-ghrp2-blend', 'igf-1lr3', 'sermorelin'],
    seoTitle: 'Buy GHRP-2 5mg | Strong GH Pulse Starter Vial | BPC-157 Stack',
    deepDiveTitle: 'GHRP-2 5mg: Powerful Ghrelin Mimetic for Maximum Growth Hormone Pulses',
    highlights: [
      { title: 'Largest GH Peaks', body: 'GHRP-2 produces the largest acute GH pulses of common ghrelin mimetics — superior for short-term GH maximization.' },
      { title: 'Starter Size', body: '5mg provides 16-50 doses at standard concentrations — ideal for establishing individual dose response.' },
      { title: 'CJC Synergy', body: 'GHRP-2 + CJC-1295 produces 2-3x more GH than either alone — the amplification effect is dramatic and reliable.' },
      { title: '20+ Years Research', body: 'One of the most studied GH secretagogues — extensive literature confirms mechanisms, dosing, and expected outcomes.' },
    ],
  },
  {
    slug: 'tesamorelin-5mg',
    name: 'Tesamorelin 5mg',
    tagline: 'FDA-Approved GHRH — Visceral Fat Reduction',
    price: 79.99,
    category: 'Body Composition',
    tags: ['tesamorelin', 'GHRH', 'visceral fat', 'GH', 'FDA-approved', 'body composition'],
    image: 'https://phiogen.is/images/products/tesamorelin-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/tesamorelin-5mg?ref=PEPS',
    shortDescription: 'Tesamorelin 5mg — the only FDA-approved growth hormone releasing hormone for visceral fat reduction. Proven to reduce abdominal fat 15-20% at 2mg/day.',
    fullDescription: `Tesamorelin is a synthetic GHRH (Growth Hormone Releasing Hormone) analog with trans-2-hexenoic acid modification that stabilizes it against degradation. The FDA approved it as Egrifta for HIV-associated lipodystrophy, where it reduces visceral adipose tissue 15-20% at 2mg/day — the only approved pharmaceutical for this specific indication.

**Visceral Fat Mechanism**

Tesamorelin stimulates the pituitary to release GH in a pulsatile, physiologically normal pattern. Elevated GH directly increases lipolysis in visceral adipose tissue through hormone-sensitive lipase activation. Unlike direct GH injection (which produces supraphysiological levels), tesamorelin works through the body's own regulatory feedback — producing GH elevation within the physiological range.

**Clinical Evidence**

The FDA approval trials (ENCORE-1 and ENCORE-2) demonstrated 15-20% reduction in visceral adipose tissue area at 2mg/day over 26 weeks. Importantly, visceral fat reduction was maintained only while on tesamorelin — discontinuation led to partial return within 12 weeks. This has led to continuous use protocols in clinical practice.

**Ipamorelin Synergy**

Adding Ipamorelin or GHRP-2 to tesamorelin amplifies GH pulses through dual receptor activation. The Ipamorelin/Tesamorelin blend is a well-established stack for users seeking maximum visceral fat mobilization combined with lean mass preservation.`,
    benefits: [
      'FDA-approved for visceral fat reduction — 15-20% decrease at 2mg/day',
      'Physiological GH elevation within normal feedback range',
      'Improves triglyceride and lipid profiles in metabolic syndrome',
      'Preserves lean mass while reducing visceral fat',
      'Synergizes powerfully with ghrelin mimetics for amplified GH output',
      'Reduces cardiovascular risk markers associated with visceral adiposity',
    ],
    protocol: `**Clinical Protocol (5mg vial):**
- Reconstitute with 2.5mL bacteriostatic water (2mg/mL)
- Dose: 1mL (2mg) subcutaneous daily
- Timing: Before bed (aligns with overnight GH pulse)
- Cycle: 26+ weeks based on FDA trial data
- 5mg vial covers 2.5 days — typically paired with 10mg vials for full protocols`,
    synergies: ['tesamorelin-10mg', 'ipa-tesa-blend', 'ipamorelin-10mg', 'sermorelin'],
    seoTitle: 'Buy Tesamorelin 5mg | FDA-Approved GHRH Visceral Fat Reduction | BPC-157 Stack',
    deepDiveTitle: 'Tesamorelin 5mg: FDA-Approved Growth Hormone Analog for Visceral Fat Loss',
    highlights: [
      { title: 'FDA Approved', body: 'The only FDA-approved GHRH for visceral fat reduction — based on two Phase III trials demonstrating 15-20% visceral adipose tissue decrease.' },
      { title: 'Visceral Fat Target', body: 'Specifically mobilizes visceral adipose tissue (metabolically dangerous abdominal fat) through GH-mediated lipolysis.' },
      { title: 'Physiological GH', body: 'Stimulates pulsatile GH within the body\'s own feedback loop — no receptor downregulation or supra-physiological suppression.' },
      { title: 'Lipid Benefits', body: 'Reduces triglycerides and improves lipid profiles alongside visceral fat — addressing multiple cardiovascular risk factors.' },
    ],
  },

  // ─── ADDITIONAL PRODUCTS ────────────────────────────────────────────────────
  {
    slug: 'pt-141-5mg',
    name: 'PT-141 (Bremelanotide) 5mg',
    tagline: 'Sexual Function Enhancement — Melanocortin Pathway',
    price: 44.99,
    category: 'Healing',
    tags: ['PT-141', 'sexual health', 'libido', 'bremelanotide', 'melanocortin', 'starter'],
    image: 'https://phiogen.is/images/products/pt-141-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/pt-141-10mg?ref=PEPS',
    shortDescription: 'PT-141 (Bremelanotide) 5mg starter vial — FDA-approved melanocortin receptor agonist that enhances sexual desire through central nervous system mechanisms.',
    fullDescription: `PT-141 (Bremelanotide) is a synthetic melanocortin receptor agonist that acts centrally in the brain to enhance sexual desire and arousal. Unlike PDE5 inhibitors (Viagra, Cialis) that work peripherally on blood flow, PT-141 activates the MC3R and MC4R receptors in the hypothalamus — the brain centers that regulate sexual motivation. This is why PT-141 works for both men and women across different etiologies of sexual dysfunction.

**FDA Approval and Clinical Evidence**

PT-141 was approved as Vyleesi (bremelanotide) in 2019 for hypoactive sexual desire disorder (HSDD) in premenopausal women. The RECONNECT trials demonstrated significant improvements in sexual desire and distress in 25% of treated women versus 17% placebo — a statistically significant effect through an entirely novel mechanism.

**Central vs Peripheral Mechanism**

The distinction from conventional sexual function medications is clinically significant: PT-141 works regardless of whether blood flow is impaired, making it effective where PDE5 inhibitors fail. It also generates genuine subjective desire — a psychological and neurological effect rather than a purely physical one.

**5mg Starter Vial**

At 1.75mg per dose (the FDA-approved dose for HSDD), a 5mg vial provides approximately 2-3 doses — ideal for assessing individual response before committing to the 10mg vial.`,
    benefits: [
      'FDA-approved for sexual dysfunction — bremelanotide (Vyleesi)',
      'Works through CNS melanocortin receptors, not peripheral blood flow',
      'Effective for both men and women across multiple dysfunction types',
      'Generates genuine desire response — psychological + neurological',
      'Works where PDE5 inhibitors fail (non-vasogenic dysfunction)',
      'Starter 5mg vial for dose response assessment',
    ],
    protocol: `**On-Demand Protocol:**
- Reconstitute with 1mL bacteriostatic water (5mg/mL)
- Dose: 0.35mL (1.75mg) subcutaneous 45 min before activity
- FDA-approved dose: 1.75mg; research up to 2mg
- Use no more than once every 24 hours
- Note: transient nausea and flushing are common at initiation`,
    synergies: ['pt-141', 'bpc-157', 'melanotan-2', 'ghk-cu'],
    seoTitle: 'Buy PT-141 Bremelanotide 5mg | Starter Vial Sexual Enhancement Peptide | BPC-157 Stack',
    deepDiveTitle: 'PT-141 5mg: FDA-Approved Melanocortin Agonist for Central Sexual Desire Enhancement',
    highlights: [
      { title: 'FDA Approved', body: 'Bremelanotide (Vyleesi) is FDA-approved for HSDD — clinical validation of both safety and efficacy through the RECONNECT trial program.' },
      { title: 'Brain-Based Desire', body: 'Acts on hypothalamic melanocortin receptors to generate genuine neurological desire — not just peripheral blood flow augmentation.' },
      { title: 'Gender Inclusive', body: 'Works for both men and women through the same central mechanism — unique among sexual function compounds.' },
      { title: 'Starter Format', body: '5mg provides 2-3 full doses for dose-response assessment before the 10mg vial.' },
    ],
  },
  {
    slug: 'selank-10mg',
    name: 'Selank 10mg',
    tagline: 'Extended Supply — Anxiolytic and Cognitive Nootropic',
    price: 99.99,
    category: 'Cognitive',
    tags: ['selank', 'anxiety', 'nootropic', 'cognitive', 'BDNF', 'stress', 'bulk'],
    image: 'https://phiogen.is/images/products/selank-10mg.png',
    affiliateUrl: 'https://phiogen.is/products/selank-10mg?ref=PEPS',
    shortDescription: 'Selank 10mg — extended supply for the Russian nootropic peptide that reduces anxiety, enhances BDNF, and improves working memory without sedation or tolerance.',
    fullDescription: `Selank is a heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) developed by the Institute of Molecular Genetics of the Russian Academy of Sciences as an anxiolytic and nootropic compound. Unlike benzodiazepines, Selank does not cause sedation, dependence, or tolerance — it produces anti-anxiety effects through GABA modulation and simultaneously enhances cognitive function.

**Dual Anxiolytic-Nootropic Profile**

Selank's unique value is the combination of anxiety reduction with cognitive enhancement — a pairing that conventional anxiolytics cannot achieve. Benzodiazepines reduce anxiety at the cost of cognitive function; Selank reduces anxiety while simultaneously improving working memory, information processing, and task performance. This makes it ideal for performance-oriented users dealing with stress.

**BDNF Upregulation**

Selank increases Brain-Derived Neurotrophic Factor (BDNF) — the primary neuroplasticity signal that supports learning, memory formation, and neuronal maintenance. BDNF decline is implicated in depression, cognitive aging, and neurological disorders. Chronic Selank use appears to support neuroplasticity via this mechanism.

**10mg Supply Economics**

At 250-500mcg intranasal daily (a common protocol), a 10mg vial provides 20-40 doses — enough for 3-6 weeks of consistent use. Selank's effects build over repeated administration, making the 10mg vial the minimum practical supply for observing cumulative benefits.`,
    benefits: [
      'Reduces anxiety without sedation or tolerance formation',
      'Simultaneously enhances working memory and cognitive performance',
      'Increases BDNF — supports neuroplasticity and memory formation',
      'No dependence potential unlike GABA-active anxiolytics',
      '10mg provides 20-40 doses for sustained protocol use',
      'Improves stress resilience without hormonal suppression',
    ],
    protocol: `**Anxiolytic-Nootropic Protocol:**
- Intranasal: 250-500mcg (2-4 sprays of 125mcg/spray solution) daily
- Subcutaneous: 100-300mcg once or twice daily
- Cycle: 2-4 weeks on, 1-2 weeks off
- Best taken morning for cognitive effects, evening for anxiety/sleep`,
    synergies: ['selank', 'semax', 'dihexa', 'dsip'],
    seoTitle: 'Buy Selank 10mg | Extended Supply Cognitive Nootropic Anxiolytic | BPC-157 Stack',
    deepDiveTitle: 'Selank 10mg: Extended Supply for the Dual Anxiolytic-Nootropic Peptide',
    highlights: [
      { title: 'Anxiety Without Sedation', body: 'Reduces anxiety through GABA modulation without the cognitive impairment and dependence risk of benzodiazepines.' },
      { title: 'Cognitive Enhancement', body: 'Improves working memory and information processing while reducing anxiety — a combination no conventional anxiolytic can offer.' },
      { title: 'BDNF Boost', body: 'Upregulates Brain-Derived Neurotrophic Factor — the primary signal for neuroplasticity, memory consolidation, and neuronal health.' },
      { title: '3-6 Weeks Supply', body: '10mg provides 20-40 doses at standard concentrations — enough to observe the cumulative benefits that emerge over repeated administration.' },
    ],
  },
  {
    slug: 'semax-30mg',
    name: 'Semax 30mg',
    tagline: 'Bulk Cognitive Enhancer — ACTH Analog Nootropic',
    price: 149.99,
    category: 'Cognitive',
    tags: ['semax', 'nootropic', 'cognitive', 'BDNF', 'ACTH', 'neuroprotection', 'bulk'],
    image: 'https://phiogen.is/images/products/n-acetyl-semax-amidate-30mg.png',
    affiliateUrl: 'https://phiogen.is/products/n-acetyl-semax-amidate-30mg?ref=PEPS',
    shortDescription: 'Semax 30mg bulk supply — the ACTH-derived cognitive enhancer approved in Russia for stroke recovery and neuroprotection, with powerful nootropic and BDNF-upregulating effects.',
    fullDescription: `Semax is a synthetic heptapeptide derived from ACTH(4-10) — a fragment of adrenocorticotropic hormone that retains cognitive effects without hormonal activity. Developed in Russia and approved for clinical use in stroke recovery and transient ischemic attack, Semax has a 25-year clinical safety record and extensive nootropic research base.

**BDNF and NGF Upregulation**

Semax's most significant mechanism for nootropic users: it rapidly increases BDNF (Brain-Derived Neurotrophic Factor) and NGF (Nerve Growth Factor) in the hippocampus and prefrontal cortex within hours of administration. These neurotrophins support synaptogenesis, memory consolidation, and protection of existing neurons. Chronic Semax use appears to produce lasting improvements in neuroplasticity markers.

**Clinical Use in Neurological Recovery**

Russian clinical protocols use Semax for ischemic stroke recovery, where it reduces neurological deficit severity and accelerates functional recovery compared to standard care. The neuroprotective mechanism involves reduced glutamate excitotoxicity and improved cerebral blood flow autoregulation.

**30mg Bulk Value**

At 200-600mcg intranasal daily (typical nootropic dosing), 30mg provides 50-150 doses — 7 weeks to 5 months of supply depending on protocol. The bulk vial is significantly more economical for users who have confirmed their response and want to maintain ongoing cognitive optimization.`,
    benefits: [
      'Approved clinically in Russia for stroke recovery for 25+ years',
      'Rapidly increases BDNF and NGF in hippocampus and prefrontal cortex',
      'Improves focus, working memory, and cognitive processing speed',
      'Neuroprotective against ischemia and glutamate excitotoxicity',
      '30mg provides 50-150 doses — most economical format',
      'No hormonal activity despite ACTH peptide origin',
    ],
    protocol: `**Nootropic Protocol:**
- Intranasal: 200-600mcg daily (1-3 sprays)
- Subcutaneous: 0.25-1mg once daily
- Cycle: 2-4 weeks, assess response, cycle off 1-2 weeks
- Best taken in the morning for sustained cognitive effects`,
    synergies: ['semax', 'selank', 'dihexa', 'nad'],
    seoTitle: 'Buy Semax 30mg | Bulk ACTH Nootropic Cognitive Enhancement | BPC-157 Stack',
    deepDiveTitle: 'Semax 30mg: Bulk Supply for Russia\'s Clinical-Grade Nootropic Peptide',
    highlights: [
      { title: 'Clinically Approved', body: 'Approved in Russia for 25+ years for stroke and TIA recovery — one of the most clinically validated nootropic peptides.' },
      { title: 'BDNF + NGF Together', body: 'Raises both BDNF and NGF in key brain regions within hours — dual neurotrophin elevation for enhanced neuroplasticity.' },
      { title: 'Bulk Economics', body: '30mg provides 50-150 doses — 5+ months of nootropic protocol supply at significant savings over smaller vials.' },
      { title: 'Safe Profile', body: 'No hormonal activity, no dependence, 25 years of clinical data — the most evidence-backed of all nootropic peptides.' },
    ],
  },
  {
    slug: 'nad-1000mg',
    name: 'NAD+ 1000mg',
    tagline: 'Clinic-Grade NAD+ — Maximum Longevity and Neuro Protocol',
    price: 249.99,
    category: 'Anti-Aging',
    tags: ['NAD+', 'longevity', 'mitochondria', 'neurological', 'clinic', 'bulk', 'maximum'],
    image: 'https://phiogen.is/images/products/nad-1000mg.png',
    affiliateUrl: 'https://phiogen.is/products/nad-1000mg?ref=PEPS',
    shortDescription: 'NAD+ 1000mg — clinic-grade bulk supply for maximum longevity, neurological recovery, and addiction medicine protocols at the lowest per-milligram cost.',
    fullDescription: `NAD+ 1000mg is the bulk format for users running aggressive anti-aging protocols, intensive neurological recovery programs, or ongoing maintenance at high doses. IV infusion clinics commonly use 500-1000mg per session for neurological applications — the 1000mg vial provides two full clinic-equivalent sessions or extended maintenance supply.

**Maximum Sirtuin and PARP Engagement**

At 500-1000mg doses, all seven sirtuins and PARP enzymes reach maximum activation simultaneously. This level of NAD+ restoration is associated with the most significant subjective and measurable improvements in energy, cognition, and metabolic markers. Users who have tried lower doses frequently report 500mg+ as a qualitative threshold — not just more of the same, but a different experience.

**Neurological Recovery Applications**

The addiction medicine use of NAD+ (IV drip protocols for opioid/alcohol withdrawal) is based on evidence that NAD+ depletion is central to the neurological dysregulation underlying dependence. IV clinics report significant attenuation of withdrawal symptoms and reduced post-acute withdrawal syndrome (PAWS) with high-dose NAD+. The 1000mg vial provides two full IV-equivalent sessions for these applications.

**Economics of the 1000mg Vial**

The 1000mg vial represents the lowest per-milligram NAD+ cost in the catalog. For users committed to weekly high-dose NAD+ maintenance, the 1000mg vial covers 2-4 weeks at 250-500mg/session — making it the most economical ongoing longevity protocol.`,
    benefits: [
      'Lowest per-milligram NAD+ cost for committed longevity protocols',
      'Maximum simultaneous sirtuin (1-7) and PARP enzyme activation',
      'Covers 2 IV-equivalent sessions for neurological recovery',
      'Attenuation of PAWS and withdrawal-related neurological dysregulation',
      '1000mg covers 2-4 weeks at 250-500mg/session maintenance',
      'All mitochondrial, epigenetic, and DNA repair pathways fully engaged',
    ],
    protocol: `**Aggressive Longevity Protocol:**
- Reconstitute with 10mL bacteriostatic water (100mg/mL)
- Loading: 500mg 3x/week for 2 weeks
- Maintenance: 250-500mg once weekly
- Neurological applications: 500mg daily for 5-10 days
- Store refrigerated; use within 28 days`,
    synergies: ['nad', 'nad-500mg', 'nad-250mg', 'epithalon'],
    seoTitle: 'Buy NAD+ 1000mg | Clinic-Grade Bulk Longevity Protocol | BPC-157 Stack',
    deepDiveTitle: 'NAD+ 1000mg: Maximum-Dose Clinic-Grade NAD+ for Longevity and Neurological Recovery',
    highlights: [
      { title: 'Best Per-mg Value', body: 'Lowest per-milligram NAD+ cost — for users committed to regular high-dose maintenance protocols.' },
      { title: 'Clinic Equivalent', body: 'Provides 2 IV clinic-equivalent sessions (500mg each) — addiction medicine grade for neurological recovery applications.' },
      { title: 'Full Pathway Activation', body: 'All 7 sirtuins + PARP enzymes + PGC-1α fully activated at 500mg+ doses — maximum engagement of every NAD+-dependent longevity pathway.' },
      { title: '4-Week Supply', body: 'At 250mg/week maintenance, 1000mg covers 4 full weeks of high-dose longevity protocol from a single reconstituted vial.' },
    ],
  },
  {
    slug: 'amlexanox',
    name: 'Amlexanox 25mg',
    tagline: 'IKKε/TBK1 Inhibitor — Metabolic Inflammation Reversal',
    price: 89.99,
    category: 'Weight Loss',
    tags: ['amlexanox', 'IKKε', 'TBK1', 'metabolic syndrome', 'insulin resistance', 'inflammation'],
    image: 'https://phiogen.is/images/products/amlexanox-25mg.png',
    affiliateUrl: 'https://phiogen.is/products/amlexanox-25mg?ref=PEPS',
    shortDescription: 'Amlexanox inhibits IKKε and TBK1 — the inflammatory kinases that drive insulin resistance in obesity. Reduces metabolic inflammation and improves insulin sensitivity.',
    fullDescription: `Amlexanox is an FDA-approved anti-inflammatory compound (originally for canker sores) that was found to inhibit IKKε (inhibitor of nuclear factor kappa-B kinase epsilon) and TBK1 (TANK-binding kinase 1) — two kinases that become overactivated in obesity and drive insulin resistance through chronic low-grade inflammation in adipose tissue.

**The Metabolic Inflammation Mechanism**

In obese individuals, macrophages infiltrate adipose tissue and activate IKKε and TBK1, creating a state of chronic low-grade inflammation that directly causes insulin resistance. This is distinct from the energy imbalance that causes weight gain — it's a downstream consequence that makes weight loss progressively harder. Amlexanox addresses this resistance mechanism rather than appetite or energy expenditure.

**Clinical Evidence**

A 12-week clinical trial in obese insulin-resistant patients demonstrated improvements in insulin sensitivity, fasting glucose, HbA1c, and body weight versus placebo. The weight loss was modest (1-2kg) but the metabolic improvements were significant — amlexanox's primary value is improving the metabolic environment for subsequent weight loss rather than causing direct weight loss itself.

**Stack Context**

Amlexanox is most valuable when combined with GLP-1 agonists or other weight loss compounds in insulin-resistant individuals where metabolic inflammation is limiting results. By reducing IKKε/TBK1 activity, it removes the inflammatory brake on insulin signaling that blunts response to other metabolic interventions.`,
    benefits: [
      'Inhibits IKKε and TBK1 — the inflammatory kinases that drive insulin resistance in obesity',
      'Improves insulin sensitivity independent of weight loss',
      'Reduces HbA1c and fasting glucose in insulin-resistant patients',
      'Addresses the inflammatory root cause of metabolic syndrome progression',
      'Synergizes with GLP-1 agonists in insulin-resistant individuals',
      'Anti-inflammatory mechanism distinct from all weight loss compounds',
    ],
    protocol: `**Metabolic Protocol:**
- Dose: 25mg oral 3x daily with meals
- Duration: 12+ weeks for full metabolic benefit
- Best combined with GLP-1 agonists in insulin-resistant individuals
- Monitor fasting glucose and HbA1c every 4-6 weeks`,
    synergies: ['glp-1s-semaglutide', 'glp-2t-tirzepatide', '5-amino-1mq-50mg', 'aicar'],
    seoTitle: 'Buy Amlexanox 25mg | IKKε TBK1 Inhibitor Metabolic Inflammation | BPC-157 Stack',
    deepDiveTitle: 'Amlexanox: Targeting the Inflammatory Root of Insulin Resistance',
    highlights: [
      { title: 'Root Cause', body: 'Inhibits IKKε/TBK1 — the inflammatory kinases that convert obesity into insulin resistance, not just appetite suppression or calorie reduction.' },
      { title: 'Insulin Sensitivity', body: 'Clinical trial: measurable improvements in insulin sensitivity, HbA1c, and fasting glucose over 12 weeks in insulin-resistant patients.' },
      { title: 'GLP-1 Synergy', body: 'Removes the inflammatory brake on insulin signaling that limits GLP-1 response in severely insulin-resistant individuals.' },
      { title: 'Distinct Mechanism', body: 'Works through metabolic inflammation pathways entirely separate from GLP-1, AMPK, or adipokine pathways — additive to all other approaches.' },
    ],
  },
  {
    slug: 'bpc-157-tb-500-blend-5mg',
    name: 'BPC-157 + TB-500 Blend 5mg',
    tagline: 'Trial-Size Healing Stack — Starter Protocol',
    price: 34.99,
    category: 'Healing',
    tags: ['BPC-157', 'TB-500', 'blend', 'healing', 'starter', 'trial'],
    image: 'https://phiogen.is/images/products/bpc-157-tb-500-blend-bpc-157-2-5mg-tb-500-2-5mg.png',
    affiliateUrl: 'https://phiogen.is/products/bpc-157-tb-500-blend-bpc-157-2-5mg-tb-500-2-5mg?ref=PEPS',
    shortDescription: 'BPC-157 + TB-500 Blend 5mg (2.5mg each) — trial-size entry into the gold-standard healing stack. Perfect for first-timers assessing response before committing to larger vials.',
    fullDescription: `BPC-157 + TB-500 5mg blend (2.5mg BPC-157 + 2.5mg TB-500) is the trial entry point for the most clinically rational healing stack. At 500mcg/day split between both peptides, this vial provides approximately 5 days of standard dosing — long enough to experience initial pain reduction and mobility improvements that BPC-157 and TB-500 produce within the first week.

**Why Start With the Blend**

First-time peptide users benefit from the convenience of a pre-mixed blend: single reconstitution, single injection, optimal ratio automatically maintained. The 5mg starter size minimizes initial investment while providing enough product to confirm individual tolerability and response before scaling to the 10mg or 20mg blend.

**What to Expect in the First 5 Days**

BPC-157 produces noticeable anti-inflammatory effects within 24-48 hours of first administration. TB-500 begins producing flexibility improvements typically in 5-10 days. The 5mg vial captures the initial BPC-157 response window and begins the TB-500 loading process that continues with the 10mg or 20mg vial.

**Scaling Up**

The 5mg blend is designed as a gateway to the 10mg and 20mg vials. Most users who complete the 5mg starter report sufficient response to continue with the larger vials through a full 4-8 week loading cycle.`,
    benefits: [
      'Lowest-cost entry into BPC-157 + TB-500 dual healing stack',
      'Pre-mixed at optimal 1:1 ratio — single injection covers both peptides',
      'Captures first 5 days of BPC-157 anti-inflammatory response',
      'Confirms individual tolerability before larger protocol commitment',
      'Same compound quality as larger vials',
      'Natural gateway to 10mg and 20mg blend for full protocols',
    ],
    protocol: `**Starter Protocol:**
- Reconstitute with 1mL bacteriostatic water (5mg/mL)
- Dose: 0.1mL (500mcg total: 250mcg BPC-157 + 250mcg TB-500)
- Once daily subcutaneous for 5 days
- Assess response, then move to 10mg or 20mg blend`,
    synergies: ['bpc-157-tb-500-blend-10mg', 'bpc-157-tb-500-blend-20mg', 'bpc-157', 'tb-500'],
    seoTitle: 'Buy BPC-157 TB-500 Blend 5mg | Starter Trial Healing Stack | BPC-157 Stack',
    deepDiveTitle: 'BPC-157 + TB-500 5mg: Trial-Size Entry into the Gold-Standard Healing Stack',
    highlights: [
      { title: 'Lowest Entry Cost', body: 'Minimum investment to experience the BPC-157 + TB-500 synergy — ideal for first-timers evaluating the stack.' },
      { title: '1:1 Pre-Mixed', body: 'Optimal 1:1 ratio of BPC-157 to TB-500 pre-mixed — eliminates dosing math and separate injections.' },
      { title: '5-Day Window', body: 'Enough product to capture initial BPC-157 anti-inflammatory response and begin TB-500 loading.' },
      { title: 'Scale Up', body: 'Designed as a gateway to 10mg and 20mg blend for users who confirm positive response.' },
    ],
  },
  {
    slug: 'mk-2866-ostarine',
    name: 'MK-2866 (Ostarine) 30mg x30 Capsules',
    tagline: 'Selective Androgen Receptor Modulator for Lean Mass',
    price: 69.99,
    category: 'Body Composition',
    tags: ['SARM', 'ostarine', 'MK-2866', 'lean mass', 'muscle', 'bone density'],
    image: 'https://phiogen.is/images/products/mk-2866-ostarine-30mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/mk-2866-ostarine-30mg-x-30-capsules?ref=PEPS',
    shortDescription: 'MK-2866 (Ostarine) is the most-studied SARM — selectively activates androgen receptors in muscle and bone with minimal hormonal suppression at research doses.',
    fullDescription: `MK-2866 (Ostarine, Enobosarm) is the original and most extensively studied selective androgen receptor modulator. It was developed by GTx to address muscle wasting and osteoporosis, advancing to Phase III clinical trials. At research doses (10-30mg/day), it selectively activates androgen receptors in muscle and bone tissue without the virilizing effects of anabolic steroids.

**Clinical Trial Data**

Phase II trials demonstrated significant lean mass preservation in cancer patients experiencing cachexia at 3mg/day — far below typical fitness dosing. Phase III (POWER 1 and 2 trials) for cancer cachexia enrolled 650+ patients, representing the most clinical data of any SARM compound. Lean mass gains of 1.5-3kg over 12 weeks at 10-25mg/day are consistently reported in fitness research applications.

**Selectivity and Hormonal Profile**

Ostarine preferentially binds androgen receptors in muscle and bone versus prostate and reproductive tissue, reducing androgenic side effects. At 30mg/day, mild testosterone suppression occurs — typically reversible within 4-6 weeks of discontinuation. PCT is generally recommended at doses above 15mg/day for cycles longer than 4 weeks.

**Bone Density Benefits**

A secondary finding in cancer trial data: Ostarine improved bone mineral density alongside lean mass preservation. This dual muscle + bone anabolic effect makes it particularly relevant for older users with both sarcopenia and osteoporosis risk.`,
    benefits: [
      'Most extensively studied SARM — Phase III clinical trial data',
      '1.5-3kg lean mass gain over 12 weeks at 10-25mg/day',
      'Minimal androgenic side effects compared to anabolic steroids',
      'Improves bone mineral density alongside lean mass',
      'Oral administration — no injections required',
      'Well-characterized suppression profile with predictable recovery',
    ],
    protocol: `**Lean Mass Protocol:**
- Dose: 15-30mg oral daily (1 capsule)
- Cycle: 8-12 weeks
- PCT: recommended at 30mg/day for 8+ week cycles
- Timing: once daily, same time each day
- Bulking: 25-30mg. Cutting/recomp: 15-20mg`,
    synergies: ['mk-677', 'lgd-4033', 'cjc1295-ipamorelin', 'igf-1lr3'],
    seoTitle: 'Buy MK-2866 Ostarine 30mg x30 | Most Studied SARM Lean Mass | BPC-157 Stack',
    deepDiveTitle: 'MK-2866 Ostarine: Phase III Clinical Data on the Most Studied SARM',
    highlights: [
      { title: 'Phase III Data', body: 'POWER 1 and 2 trials enrolled 650+ patients — more clinical data than any other SARM compound.' },
      { title: '1.5-3kg Lean Mass', body: 'Consistent 1.5-3kg lean mass gain over 12 weeks at 10-25mg/day across multiple study populations.' },
      { title: 'Bone + Muscle', body: 'Unique dual anabolic effect on both muscle and bone mineral density — particularly relevant for aging populations.' },
      { title: 'Selective Binding', body: 'Preferential muscle and bone androgen receptor binding with reduced prostate and reproductive tissue activation.' },
    ],
  },
  {
    slug: 'lgd-4033',
    name: 'LGD-4033 (Ligandrol) 10mg x30 Capsules',
    tagline: 'Most Potent Oral SARM for Lean Muscle Mass',
    price: 69.99,
    category: 'Body Composition',
    tags: ['SARM', 'LGD-4033', 'ligandrol', 'muscle', 'strength', 'lean mass'],
    image: 'https://phiogen.is/images/products/lgd-4033-ligandrol-10mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/lgd-4033-ligandrol-10mg-x-30-capsules?ref=PEPS',
    shortDescription: 'LGD-4033 (Ligandrol) is the most potent oral SARM for lean mass — produces significant strength and muscle gains with suppression levels that require post-cycle therapy.',
    fullDescription: `LGD-4033 (Ligandrol) is a non-steroidal selective androgen receptor modulator developed by Ligand Pharmaceuticals. In a Phase I clinical trial at 1mg/day for 21 days, lean mass increases of 1.21kg were observed — exceeding what testosterone produces at equivalent suppression levels. At research doses of 5-10mg/day, LGD-4033 is the most potent lean mass SARM in the current research catalog.

**Phase I Clinical Data**

The Viking Therapeutics Phase I trial at 1mg/day demonstrated dose-dependent lean mass gains with a favorable safety profile over 21 days. Muscle biopsies showed increased protein synthesis rates. Testosterone suppression was dose-dependent and reversible — testosterone returned to baseline within 5 weeks of discontinuation at 1mg/day.

**Potency and Risk Profile**

LGD-4033 is more suppressive than Ostarine at equivalent doses — post-cycle therapy (PCT) is strongly recommended for cycles exceeding 6 weeks, particularly at 5-10mg/day. The suppression is well-characterized and reliably reversible, but the greater potency means more significant lean mass gains alongside more significant hormonal management requirements.

**Body Recomposition**

LGD-4033 excels at body recomposition — gaining lean mass while losing fat simultaneously. At 5mg/day in a moderate caloric deficit, users consistently report net lean tissue increases alongside visible fat reduction, which is uncommon with traditional anabolic compounds.`,
    benefits: [
      '1.21kg lean mass gain at just 1mg/day in Phase I trial — exceptional potency',
      'Most effective oral SARM for strength and lean mass gain',
      'Excels at body recomposition in caloric deficit',
      'Well-characterized reversible suppression profile',
      'Oral — no injections required',
      'Dose-dependent effects allow precise titration of risk/reward',
    ],
    protocol: `**Lean Mass Protocol:**
- Dose: 5-10mg oral daily (0.5-1 capsule)
- Cycle: 6-8 weeks
- PCT: Essential at 5-10mg for cycles 6+ weeks
- Bulking: 10mg/day. Recomp: 5mg/day
- Monitor testosterone levels at end of cycle`,
    synergies: ['mk-2866-ostarine', 'mk-677', 'cjc1295-ipamorelin', 'igf-1lr3'],
    seoTitle: 'Buy LGD-4033 Ligandrol 10mg x30 | Most Potent SARM for Lean Mass | BPC-157 Stack',
    deepDiveTitle: 'LGD-4033 Ligandrol: Phase I Clinical Data on the Most Potent Lean Mass SARM',
    highlights: [
      { title: 'Phase I Validated', body: '1.21kg lean mass in 21 days at 1mg/day in controlled trial — exceeds testosterone at equivalent suppression in Phase I data.' },
      { title: 'Most Potent SARM', body: 'Produces the largest lean mass gains of any available oral SARM compound — the apex of SARM body composition performance.' },
      { title: 'Recomp Specialist', body: 'Gains lean mass simultaneously with fat loss in caloric deficit — a body recomposition outcome difficult to achieve with conventional approaches.' },
      { title: 'Reversible Suppression', body: 'Well-characterized testosterone suppression that returns to baseline within 5 weeks of discontinuation — predictable and manageable.' },
    ],
  },
  {
    slug: 'rad-140',
    name: 'RAD-140 (Testolone) 10mg x30 Capsules',
    tagline: 'Neuroprotective SARM — Lean Mass and Brain Health',
    price: 74.99,
    category: 'Body Composition',
    tags: ['SARM', 'RAD-140', 'testolone', 'muscle', 'neuroprotective', 'lean mass'],
    image: 'https://phiogen.is/images/products/rad-140-testolone-10mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/rad-140-testolone-10mg-x-30-capsules?ref=PEPS',
    shortDescription: 'RAD-140 (Testolone) is a high-potency SARM with unique neuroprotective properties — activates brain androgen receptors to protect neurons while building lean mass.',
    fullDescription: `RAD-140 (Testolone) is a potent SARM developed by Radius Health with two properties that distinguish it from LGD-4033 and Ostarine: high anabolic potency (anabolic:androgenic ratio of 90:1 vs testosterone's 1:1) and demonstrated neuroprotective effects through activation of androgen receptors in the brain. This makes RAD-140 uniquely suited for users seeking both body composition and cognitive/neurological benefits.

**Neuroprotection Mechanism**

In preclinical research, RAD-140 activated brain androgen receptors to reduce apoptosis (programmed cell death) of neurons exposed to amyloid-beta — a key mechanism in Alzheimer's pathology. It also demonstrated reduction of kainate-induced neurotoxicity. These effects have positioned RAD-140 as a candidate for neurodegenerative disease research alongside its body composition applications.

**Anabolic Profile**

At 10mg/day, RAD-140 produces lean mass gains comparable to LGD-4033 with a similar suppression profile. The high anabolic:androgenic ratio means significant muscle activation with reduced risk of androgenic side effects compared to testosterone. Phase I trial data confirms human safety at therapeutic doses.

**Phase I Clinical Data**

RAD-140 advanced to Phase I trials for breast cancer (androgen receptor positive). The trial data established a safety profile in humans at doses used for body composition — providing the same clinical validation advantage that LGD-4033 and Ostarine have over other research compounds.`,
    benefits: [
      'Unique neuroprotective effects via brain androgen receptor activation',
      'High anabolic:androgenic ratio — 90:1 vs testosterone\'s 1:1',
      'Phase I clinical data confirms human safety profile',
      'Lean mass gains comparable to LGD-4033',
      'Reduces amyloid-beta neurotoxicity in preclinical models',
      'Potential synergy with cognitive peptides for combined physical + brain optimization',
    ],
    protocol: `**Body Composition Protocol:**
- Dose: 10mg oral daily (1 capsule)
- Cycle: 8-12 weeks
- PCT: Recommended after cycles 8+ weeks
- Timing: once daily with food`,
    synergies: ['lgd-4033', 'mk-2866-ostarine', 'mk-677', 'nad'],
    seoTitle: 'Buy RAD-140 Testolone 10mg x30 | Neuroprotective SARM Lean Mass | BPC-157 Stack',
    deepDiveTitle: 'RAD-140: The SARM With Neuroprotective Properties and Phase I Clinical Data',
    highlights: [
      { title: 'Brain Protection', body: 'Activates brain androgen receptors to reduce amyloid-beta neurotoxicity — the only SARM with demonstrated neuroprotective preclinical data.' },
      { title: '90:1 Ratio', body: 'Anabolic:androgenic ratio of 90:1 vs testosterone\'s 1:1 — highly selective muscle activation with minimal androgenic side effects.' },
      { title: 'Phase I Validated', body: 'Human Phase I clinical data from breast cancer trial — same regulatory hurdle cleared as Ostarine and LGD-4033.' },
      { title: 'Dual Target', body: 'Simultaneously builds lean mass and protects neurons — unique value proposition for longevity-focused users.' },
    ],
  },
  {
    slug: 'yk-11',
    name: 'YK-11 10mg x30 Capsules',
    tagline: 'Myostatin Inhibitor — Muscle Growth Beyond Genetic Ceiling',
    price: 79.99,
    category: 'Body Composition',
    tags: ['YK-11', 'myostatin', 'SARM', 'muscle', 'follistatin', 'hypertrophy'],
    image: 'https://phiogen.is/images/products/yk-11-10mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/yk-11-10mg-x-30-capsules?ref=PEPS',
    shortDescription: 'YK-11 inhibits myostatin — the protein that limits maximum muscle growth. By blocking myostatin, YK-11 induces follistatin expression and removes the genetic ceiling on muscle hypertrophy.',
    fullDescription: `YK-11 is a steroidal SARM that operates through a mechanism distinct from all other SARMs: it inhibits myostatin by inducing expression of follistatin in muscle cells. Myostatin is a negative regulator of muscle growth that establishes the genetic ceiling on muscle mass — individuals with myostatin mutations or knockout naturally develop extreme muscularity. YK-11 pharmacologically mimics this effect.

**The Myostatin-Follistatin Axis**

Myostatin (GDF-8) is a TGF-beta family member secreted by muscle cells that limits hypertrophy through SMAD2/3 signaling. Follistatin is the endogenous antagonist — it binds and neutralizes myostatin, allowing unrestricted muscle growth. YK-11 induces follistatin expression via androgen receptor activation, effectively creating a temporary myostatin-deficient state.

**Unique SARM Profile**

Unlike non-steroidal SARMs (LGD, RAD, Ostarine), YK-11's steroidal structure gives it a different activity profile with stronger androgen receptor activation in some tissues. It produces larger lean mass gains than non-steroidal SARMs in some user populations — at the cost of stronger suppression and a less clean hormonal profile. PCT is essential.

**Research Limitations**

YK-11 has less clinical data than Ostarine or LGD-4033. Animal and in vitro data are available; no controlled human trials have been published. The anecdotal body of evidence from users is extensive but lacks the clinical validation of the more-studied SARMs. This places it in a higher-risk, higher-reward tier for informed users.`,
    benefits: [
      'Inhibits myostatin via follistatin induction — removes muscle growth ceiling',
      'Largest reported lean mass gains of any SARM compound',
      'Unique steroidal SARM with distinct mechanism from LGD/Ostarine/RAD',
      'Follistatin increases persist beyond YK-11 clearance',
      'Synergistic with anabolic peptides via complementary growth pathways',
      'The highest-potency muscle growth SARM in the current catalog',
    ],
    protocol: `**Advanced Protocol:**
- Dose: 5-10mg oral daily (0.5-1 capsule)
- Cycle: 6-8 weeks maximum
- PCT: Essential — YK-11 is significantly suppressive
- Start at 5mg to assess tolerance
- Not recommended as a first SARM`,
    synergies: ['lgd-4033', 'mk-677', 'igf-1lr3', 'cjc1295-ipamorelin'],
    seoTitle: 'Buy YK-11 10mg x30 | Myostatin Inhibitor SARM Max Muscle Growth | BPC-157 Stack',
    deepDiveTitle: 'YK-11: The Myostatin Inhibitor That Breaks the Genetic Ceiling on Muscle Growth',
    highlights: [
      { title: 'Myostatin Inhibition', body: 'Induces follistatin expression to neutralize myostatin — pharmacologically mimicking the extreme muscularity of myostatin-knockout genetics.' },
      { title: 'Growth Ceiling Removed', body: 'By inhibiting the protein that limits maximum muscle mass, YK-11 enables growth that exceeds individual genetic potential.' },
      { title: 'Steroidal SARM', body: 'Unique steroidal structure produces a different androgen receptor activation pattern than non-steroidal SARMs — distinct mechanism, distinct results.' },
      { title: 'Advanced Users', body: 'Recommended for experienced SARM users familiar with hormonal management — not a first-cycle compound.' },
    ],
  },
  {
    slug: 'cardarine-gw501516',
    name: 'Cardarine (GW501516) 10mg x30 Capsules',
    tagline: 'PPARδ Agonist — Endurance and Fat Oxidation',
    price: 59.99,
    category: 'Body Composition',
    tags: ['cardarine', 'GW501516', 'PPARδ', 'endurance', 'fat oxidation', 'AMPK'],
    image: 'https://phiogen.is/images/products/cardarine-gw-501516-10mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/cardarine-gw-501516-10mg-x-30-capsules?ref=PEPS',
    shortDescription: 'Cardarine (GW501516) is a PPARδ agonist that dramatically enhances endurance, fat oxidation, and metabolic flexibility — the "exercise in a bottle" compound from early AMPK research.',
    fullDescription: `Cardarine (GW501516) is a PPARδ (Peroxisome Proliferator-Activated Receptor delta) agonist that fundamentally changes how cells generate energy — favoring fat oxidation over glucose utilization and dramatically increasing mitochondrial density in skeletal muscle. In animal studies, Cardarine increased running endurance by 68% and produced a lean body composition phenotype without caloric restriction.

**The PPARδ Mechanism**

PPARδ activation triggers a metabolic reprogramming that shifts the primary fuel source in muscle from glucose to fatty acids. This produces two major benefits: (1) virtually unlimited endurance limited only by fat stores rather than glycogen, and (2) enhanced fat mobilization that produces body composition changes independent of caloric restriction. The effect is sometimes described as "exercise gene" activation.

**AMPK Synergy**

Cardarine synergizes powerfully with AICAR (AMPK activator) — the two compounds act on different upstream regulators that converge on the same fat-burning and mitochondrial biogenesis pathways. Together they produce greater endurance and metabolic improvements than either alone, which is why the Cardarine + AICAR stack was informally known as the "drug that passed all the doping tests" in endurance sports research.

**Safety Context**

GW501516 was discontinued from pharmaceutical development after showing dose-dependent carcinogenicity in animal studies at doses far exceeding typical research applications. This context is important for informed use — the doses used in the animal studies (3-10mg/kg, far exceeding human research doses) showed these effects; the clinical relevance at low human doses remains debated in the research community.`,
    benefits: [
      '68% endurance increase in animal studies via PPARδ activation',
      'Shifts fuel utilization to fat oxidation — virtually unlimited endurance fuel',
      'Increases mitochondrial density in skeletal muscle',
      'Body composition improvement without caloric restriction',
      'Synergizes powerfully with AICAR for compounding metabolic effects',
      'Non-hormonal — no suppression, no PCT required',
    ],
    protocol: `**Endurance Protocol:**
- Dose: 10mg oral daily (1 capsule)
- Timing: 1-2 hours before cardio for acute endurance benefit
- Cycle: 6-8 weeks
- No PCT required — non-hormonal mechanism
- Stack with AICAR for maximum metabolic effect`,
    synergies: ['aicar', 'slu-pp-332-30caps', 'mk-677', '5-amino-1mq-50mg'],
    seoTitle: 'Buy Cardarine GW501516 10mg x30 | PPARδ Agonist Endurance Fat Burning | BPC-157 Stack',
    deepDiveTitle: 'Cardarine GW501516: The PPARδ Agonist That Reprograms Metabolism for Fat Burning',
    highlights: [
      { title: '68% Endurance Boost', body: 'Animal studies: 68% increase in running endurance — via mitochondrial density increase and shift to fat as primary fuel.' },
      { title: 'Fat as Fuel', body: 'PPARδ activation shifts muscle energy production from glucose to fat oxidation — producing endurance limited by adipose stores, not glycogen.' },
      { title: 'Non-Hormonal', body: 'Works through PPARδ nuclear receptor — no testosterone suppression, no PCT required, women and men can use equally.' },
      { title: 'AICAR Stack', body: 'Cardarine + AICAR is the most studied metabolic endurance stack — two compounds acting on separate upstream regulators of the same pathways.' },
    ],
  },
  {
    slug: 'sr9009-stenabolic',
    name: 'SR9009 (Stenabolic) 10mg x30 Capsules',
    tagline: 'Rev-erbα Agonist — Circadian Metabolism and Endurance',
    price: 59.99,
    category: 'Body Composition',
    tags: ['SR9009', 'stenabolic', 'Rev-erbα', 'circadian', 'endurance', 'metabolism'],
    image: 'https://phiogen.is/images/products/sr9009-stenabolic-10mg-x-30-capsules.png',
    affiliateUrl: 'https://phiogen.is/products/sr9009-stenabolic-10mg-x-30-capsules?ref=PEPS',
    shortDescription: 'SR9009 (Stenabolic) activates Rev-erbα — the circadian clock nuclear receptor that programs metabolic activity cycles. Increases mitochondrial number and exercise capacity.',
    fullDescription: `SR9009 (Stenabolic) is a synthetic ligand for Rev-erbα (nuclear receptor subfamily 1 group D member 1) — a key component of the circadian molecular clock that regulates metabolic gene expression in a time-dependent manner. By activating Rev-erbα, SR9009 reprograms the circadian metabolic program toward the "active" state regardless of time of day, increasing mitochondrial number, enhancing fat oxidation, and dramatically improving exercise capacity.

**Circadian Metabolism**

Rev-erbα is a transcriptional repressor that controls the expression of genes involved in mitochondrial biogenesis, fat metabolism, and inflammation across a 24-hour cycle. When SR9009 activates Rev-erbα continuously, it extends the "metabolically active" circadian window — the body behaves as if it is in the most metabolically active portion of its 24-hour cycle regardless of actual time.

**Mitochondrial Biogenesis and Endurance**

In animal models, SR9009 treatment produced a 50% increase in mitochondrial number in skeletal muscle alongside a 50% increase in running capacity. The mechanism is direct: more mitochondria = more capacity for oxidative phosphorylation = better endurance and fat burning. This distinguishes SR9009 from stimulant-based performance compounds that don't produce structural adaptations.

**Bioavailability Consideration**

SR9009 has modest oral bioavailability — some users prefer sublingual or intranasal administration to improve absorption. The capsule form is the most convenient but may require higher doses to achieve equivalent plasma levels compared to alternative delivery routes.`,
    benefits: [
      '50% increase in mitochondrial number in animal models',
      '50% increase in running capacity via structural metabolic adaptation',
      'Activates circadian "metabolically active" state continuously',
      'Reduces fat mass and inflammation via Rev-erbα programming',
      'Non-hormonal — no suppression, no PCT required',
      'Synergizes with Cardarine for compounding endurance and fat burning',
    ],
    protocol: `**Endurance/Recomp Protocol:**
- Dose: 10-20mg daily (1-2 capsules), spread through day
- Timing: dose before workouts for acute performance benefit
- Cycle: 8-12 weeks
- No PCT required — non-hormonal
- Note: oral bioavailability is modest; some prefer sublingual dosing`,
    synergies: ['cardarine-gw501516', 'aicar', 'mk-677', 'slu-pp-332-30caps'],
    seoTitle: 'Buy SR9009 Stenabolic 10mg x30 | Rev-erbα Agonist Circadian Metabolism | BPC-157 Stack',
    deepDiveTitle: 'SR9009 Stenabolic: Rev-erbα Activation for Continuous Circadian Metabolic Advantage',
    highlights: [
      { title: '50% More Mitochondria', body: 'Animal models: 50% increase in skeletal muscle mitochondrial number — structural adaptation that improves endurance capacity permanently during treatment.' },
      { title: 'Circadian Override', body: 'Rev-erbα activation extends the metabolically active circadian window — your metabolism operates as if it\'s peak activity time regardless of actual time.' },
      { title: 'Structural Adaptation', body: 'Unlike stimulants, SR9009 produces actual structural changes (more mitochondria) — the performance benefits are mechanistically grounded.' },
      { title: 'Non-Hormonal', body: 'Works through nuclear receptor Rev-erbα — no testosterone involvement, no suppression, equal access for men and women.' },
    ],
  },
  {
    slug: 'ozempic-pen',
    name: 'Semaglutide 2.4mg Pre-filled Pen',
    tagline: 'Ready-to-Use Wegovy-Equivalent Injection Pen',
    price: 129.99,
    category: 'Weight Loss',
    tags: ['semaglutide', 'pen', 'GLP-1', 'Wegovy', 'ready-to-use', 'convenience'],
    image: 'https://phiogen.is/images/products/semaglutide-2-4mg-pre-filled-pen.png',
    affiliateUrl: 'https://phiogen.is/products/semaglutide-2-4mg-pre-filled-pen?ref=PEPS',
    shortDescription: 'Pre-filled semaglutide 2.4mg pen — ready-to-use, no reconstitution required. The most convenient format for Wegovy-equivalent GLP-1 weekly injection.',
    fullDescription: `The pre-filled semaglutide pen provides a ready-to-use format that eliminates reconstitution entirely — pre-loaded at 2.4mg/dose for users already at therapeutic dosing. Simply dial the dose, attach a needle, and inject. This format is particularly valued by users who travel frequently, prefer simplicity over flexibility, or are transitioning from pharmaceutical GLP-1 products.

**No Reconstitution Convenience**

Lyophilized vial protocols require bacteriostatic water, syringes, careful reconstitution technique, and volume calculations. The pre-filled pen eliminates all of this — the dose is pre-measured, the delivery mechanism is integrated, and storage is straightforward. For users who have established their optimal dose and want to minimize protocol friction, the pen format is the clear choice.

**2.4mg Dose Context**

2.4mg/week is the Wegovy-equivalent maximum dose where semaglutide clinical trials (STEP-1 through STEP-4) demonstrated 15-17% average body weight reduction. Users arriving at this dose have typically been through the 0.25mg → 0.5mg → 1mg → 1.7mg → 2.4mg escalation and are maintaining at peak therapeutic effect.

**Compatibility with Existing Protocols**

The pen format uses standard pen needles (4mm-8mm, 31-32G) available separately. Pen needles should be changed between doses to maintain sterility and injection comfort. Store at room temperature before first use and refrigerate after opening (or follow specific storage instructions provided with the product).`,
    benefits: [
      'No reconstitution — ready to inject immediately',
      'Pre-loaded at 2.4mg — maximum STEP trial dose',
      'Eliminates volume calculation and syringe preparation',
      'Ideal for travel and users preferring minimal protocol friction',
      'Dial-a-dose mechanism for precise weekly injection',
      'Wegovy-equivalent convenience without pharmaceutical pricing',
    ],
    protocol: `**Ready-to-Use Protocol:**
- Attach pen needle before each use, remove after
- Dial 2.4mg (or prescribed dose) weekly
- Inject subcutaneously into abdomen, thigh, or upper arm
- Rotate injection sites weekly
- Store at room temperature; refrigerate after first use`,
    synergies: ['glp-1s-semaglutide', 'cagrilintide', '5-amino-1mq-50mg', 'nad'],
    seoTitle: 'Buy Semaglutide 2.4mg Pre-filled Pen | Wegovy-Equivalent Convenience | BPC-157 Stack',
    deepDiveTitle: 'Semaglutide 2.4mg Pen: Ready-to-Use Maximum Dose GLP-1 for Committed Users',
    highlights: [
      { title: 'Zero Prep', body: 'Pre-filled and ready to inject — no bacteriostatic water, no syringe calibration, no volume calculation needed.' },
      { title: 'Max STEP Dose', body: '2.4mg/week matches the Wegovy maximum dose where 15-17% average weight loss was demonstrated in Phase III.' },
      { title: 'Travel Ready', body: 'Pen format is the most travel-compatible GLP-1 delivery — no separate water vial, no syringes, minimal TSA complexity.' },
      { title: 'Protocol Simplicity', body: 'For users maintaining at their optimal dose, the pen eliminates all preparation complexity from the weekly injection routine.' },
    ],
  },
  {
    slug: 'nad-patches',
    name: 'NAD+ Transdermal Patches x30',
    tagline: 'Patch Delivery — Sustained NAD+ Release Without Injection',
    price: 49.99,
    category: 'Anti-Aging',
    tags: ['NAD+', 'patches', 'transdermal', 'anti-aging', 'no injection', 'sustained release'],
    image: 'https://phiogen.is/images/products/nad-transdermal-patches-x30.png',
    affiliateUrl: 'https://phiogen.is/products/nad-transdermal-patches-x30?ref=PEPS',
    shortDescription: 'NAD+ transdermal patches — sustained-release delivery over 12-24 hours without injection, ideal for consistent NAD+ maintenance between higher-dose injection protocols.',
    fullDescription: `NAD+ transdermal patches provide a sustained-release delivery mechanism that maintains elevated NAD+ levels over 12-24 hours without the acute peak-and-trough profile of injection. Each patch is designed for once or twice daily application to clean dry skin on the inner arm, back, or abdomen.

**Transdermal vs Injection**

Injected NAD+ produces a rapid plasma peak followed by gradual decline — the peak is associated with acute cognitive and energy effects, but levels normalize between doses. Transdermal delivery maintains a steadier plasma level over the wear period, which may be preferable for users seeking consistent neurological support rather than acute elevation. For maximum restoration, injection remains superior; patches excel for maintenance.

**Convenience Advantage**

Patches eliminate the reconstitution and injection process entirely. For users who have established their NAD+ protocol with injections but want a lower-friction maintenance option, or for those who are injection-averse, transdermal NAD+ provides a practical alternative.

**Stack Role**

The typical advanced user protocol: monthly or quarterly intensive NAD+ injection loading (500mg-1000mg 3x/week for 2-4 weeks), followed by patch-based maintenance between loading cycles. This combines the restoration power of high-dose injection with the convenience of continuous transdermal maintenance.`,
    benefits: [
      'No injection — needle-free daily NAD+ maintenance',
      'Sustained 12-24 hour release for stable plasma levels',
      '30-day supply from one pack — one patch per day',
      'Ideal maintenance between intensive injection loading cycles',
      'Travel-friendly — no refrigeration required',
      'Accessible for injection-averse users seeking NAD+ benefits',
    ],
    protocol: `**Daily Maintenance Protocol:**
- Apply one patch to clean, dry skin daily
- Rotation sites: inner arm, abdomen, back
- Remove and replace every 12-24 hours
- Combine with quarterly injection loading cycles for optimal restoration`,
    synergies: ['nad', 'nad-250mg', 'nad-500mg', 'ghk-cu'],
    seoTitle: 'Buy NAD+ Transdermal Patches x30 | Needle-Free Daily NAD+ Maintenance | BPC-157 Stack',
    deepDiveTitle: 'NAD+ Patches: Sustained-Release Daily Maintenance Without Injection',
    highlights: [
      { title: 'No Needle', body: 'Patch delivery eliminates injections entirely — NAD+ maintenance accessible to anyone regardless of injection comfort.' },
      { title: 'Steady State', body: '12-24 hour sustained release maintains consistent NAD+ plasma levels without the peaks and troughs of injection protocols.' },
      { title: '30-Day Supply', body: 'One pack covers a full month of daily maintenance — practical for users supplementing between intensive injection loading cycles.' },
      { title: 'Travel Ready', body: 'No refrigeration, no needles, no liquid — the most travel-compatible NAD+ format available.' },
    ],
  },
  {
    slug: 'melanotan-2-capsules',
    name: 'Melanotan II Capsules 1mg x30',
    tagline: 'Oral Melanotan II — Tanning and Libido Without Injection',
    price: 49.99,
    category: 'Anti-Aging',
    tags: ['melanotan II', 'tanning', 'libido', 'capsules', 'oral', 'melanocortin'],
    image: 'https://phiogen.is/images/products/melanotan-2-capsules-1mg-x30.png',
    affiliateUrl: 'https://phiogen.is/products/melanotan-2-capsules-1mg-x30?ref=PEPS',
    shortDescription: 'Melanotan II capsules 1mg x30 — oral delivery of the tanning and libido-enhancing melanocortin peptide without subcutaneous injection.',
    fullDescription: `Melanotan II (MT-2) is a synthetic analog of alpha-melanocyte-stimulating hormone (α-MSH) that activates melanocortin receptors to produce skin darkening, increased libido, and appetite suppression. The 1mg capsule format provides oral delivery — lower bioavailability than injection but adequate for users seeking tanning effects with maximum convenience.

**Melanocortin Receptor Effects**

MT-2 activates MC1R (melanocyte stimulation, skin pigmentation), MC3R/MC4R (appetite suppression, libido enhancement), and MC5R (exocrine glands). The multi-receptor profile produces the compound's characteristic combination of effects: tanning without UV exposure, increased sexual desire, and modestly reduced appetite.

**Oral vs Injectable**

Oral Melanotan II has significantly lower bioavailability than subcutaneous injection due to peptide degradation in the gut. However, melanocortin effects are dose-dependent, and many users achieve adequate tanning and libido effects with oral dosing at 1-2mg, particularly for maintenance once injection-initiated effects are established. The capsule format represents a practical maintenance and convenience option.

**Tanning Protocol**

Melanotan II-induced melanogenesis requires some UV stimulus for optimal results — 5-10 minutes of natural sunlight or tanning bed exposure once or twice weekly dramatically accelerates the pigmentation response. Without any UV exposure, results are more modest.`,
    benefits: [
      'Injection-free melanocortin receptor activation',
      'Promotes skin tanning via MC1R activation — reduced UV requirement',
      'Enhances libido via central MC4R agonism',
      'Modest appetite suppression as secondary benefit',
      '30-day capsule supply for convenient maintenance protocols',
      'Suitable as maintenance after injection-initiated tanning',
    ],
    protocol: `**Oral Tanning Protocol:**
- Dose: 1mg (1 capsule) daily
- Start with 0.5mg to assess tolerance
- Combine with brief UV exposure (5-10 min) for optimal pigmentation
- Reduce to every-other-day once desired tan is achieved
- Common side effects: flushing, nausea at initiation`,
    synergies: ['melanotan-2', 'melanotan-1', 'pt-141', 'ghk-cu'],
    seoTitle: 'Buy Melanotan II Capsules 1mg x30 | Oral Tanning Libido Peptide | BPC-157 Stack',
    deepDiveTitle: 'Melanotan II Capsules: Oral Delivery for Tanning and Libido Enhancement',
    highlights: [
      { title: 'No Injection', body: 'Oral capsule format provides melanocortin effects without subcutaneous injection — most accessible MT-2 delivery method.' },
      { title: 'UV-Accelerated Tanning', body: 'MC1R activation with 5-10 minutes of UV exposure produces tanning significantly faster than UV alone.' },
      { title: 'Central Libido', body: 'MC4R agonism in the hypothalamus enhances libido through the same central pathway as PT-141 (FDA-approved bremelanotide).' },
      { title: 'Maintenance Format', body: 'Ideal for maintaining tanning and libido effects after injection-based protocols have established initial levels.' },
    ],
  },
  {
    slug: 'gdf-11',
    name: 'GDF-11 100mcg',
    tagline: 'Growth Differentiation Factor 11 — Systemic Rejuvenation Signal',
    price: 149.99,
    category: 'Anti-Aging',
    tags: ['GDF-11', 'anti-aging', 'parabiosis', 'rejuvenation', 'TGF-beta', 'longevity'],
    image: 'https://phiogen.is/images/products/gdf-11-100mcg.png',
    affiliateUrl: 'https://phiogen.is/products/gdf-11-100mcg?ref=PEPS',
    shortDescription: 'GDF-11 is the circulating "young blood factor" from parabiosis research — a TGF-beta family protein that declines with aging and whose restoration reverses cardiac and neurological aging markers.',
    fullDescription: `GDF-11 (Growth Differentiation Factor 11) gained widespread attention after 2013 Harvard research demonstrated that its declining levels in aging blood contribute to multiple aging phenotypes, and that restoration of GDF-11 levels (via parabiotic blood exchange with young animals) reversed cardiac hypertrophy, improved skeletal muscle regeneration, and enhanced neurogenesis. GDF-11 is a circulating protein that declines with age and acts as a systemic signal of biological youth.

**The Parabiosis Research**

The original Nature Medicine studies (Loffredo et al., 2013; Sinha et al., 2014) showed that young blood restored mitochondrial function and reversed age-related cardiac enlargement in old mice — and that GDF-11 was a key active factor. Neural stem cell proliferation and olfactory neurogenesis also improved. This represented the first direct molecular evidence for a circulating "youth factor" concept.

**Current Research Status**

The GDF-11 field is contested — subsequent research raised questions about quantification methodology and interpretation of some findings. However, the core observations about its anti-aging effects remain in the literature, and GDF-11 continues to be researched as a component of systemic aging biology. It represents a frontier anti-aging compound with promising but still-developing evidence.

**Practical Application**

At 100mcg doses, GDF-11 is used in anti-aging research protocols targeting cardiac function, neuroplasticity, and skeletal muscle regeneration. Given the developing nature of the evidence, it is typically used as part of a comprehensive stack rather than as a primary anti-aging intervention.`,
    benefits: [
      'The "young blood factor" from landmark Harvard parabiosis research',
      'Reverses age-related cardiac hypertrophy in animal models',
      'Enhances neural stem cell proliferation and neurogenesis',
      'Improves skeletal muscle regeneration capacity',
      'Potential systemic rejuvenation through circulating TGF-beta signaling',
      'Frontier anti-aging compound at the intersection of aging biology research',
    ],
    protocol: `**Research Protocol:**
- Dose: 100mcg subcutaneous 2-3x per week
- Cycle: 4-8 weeks, 4-8 weeks off
- Best combined with GHK-Cu and Epithalon for comprehensive anti-aging
- Store reconstituted; refrigerate; use within 14 days`,
    synergies: ['epithalon', 'ghk-cu', 'humanin', 'mots-c'],
    seoTitle: 'Buy GDF-11 100mcg | Young Blood Factor Anti-Aging Peptide | BPC-157 Stack',
    deepDiveTitle: 'GDF-11: The Circulating Young Blood Factor from Parabiosis Anti-Aging Research',
    highlights: [
      { title: 'Young Blood Factor', body: 'Identified in Harvard parabiosis research as a key molecule in young blood that reverses aging phenotypes — circulating TGF-beta youth signal.' },
      { title: 'Cardiac Rejuvenation', body: 'Reverses age-related cardiac hypertrophy (enlarged, stiffened heart muscle) — one of the clearest structural anti-aging effects demonstrated.' },
      { title: 'Neurogenesis', body: 'Enhances neural stem cell activity and olfactory neurogenesis — direct evidence for central nervous system rejuvenation potential.' },
      { title: 'Frontier Science', body: 'At the cutting edge of aging biology — actively researched and representing the most mechanistically novel approach in the anti-aging catalog.' },
    ],
  },
  {
    slug: 'fgl2',
    name: 'FGL2 (Fibroleukin) 1mg',
    tagline: 'Immune Modulation and Anti-Inflammatory Peptide',
    price: 119.99,
    category: 'Healing',
    tags: ['FGL2', 'immune', 'anti-inflammatory', 'fibroleukin', 'Treg', 'autoimmune'],
    image: 'https://phiogen.is/images/products/fgl2-1mg.png',
    affiliateUrl: 'https://phiogen.is/products/fgl2-1mg?ref=PEPS',
    shortDescription: 'FGL2 (Fibroleukin) is an immune checkpoint molecule that expands regulatory T cells (Tregs) and reduces autoimmune inflammation — studied for tolerance induction and chronic inflammation.',
    fullDescription: `FGL2 (Fibroleukin) is a member of the fibrinogen superfamily that functions as an immune checkpoint molecule. It is secreted by regulatory T cells (Tregs) and exerts immunosuppressive effects through FcγRIIB receptor signaling, inhibiting dendritic cell maturation and effector T cell activation. FGL2 represents a novel approach to modulating the immune system for autoimmune and chronic inflammatory conditions.

**Regulatory T Cell Axis**

FGL2 is part of the Treg suppression arsenal — the molecular tools that regulatory T cells use to dampen immune overactivity. By expanding Treg function and inhibiting pro-inflammatory dendritic cell activation, FGL2 creates a more tolerogenic immune environment without global immunosuppression.

**Research Applications**

FGL2 has been studied in models of transplant tolerance, autoimmune hepatitis, inflammatory bowel disease, and sepsis-related immunopathology. Its mechanism differs fundamentally from anti-inflammatory peptides like BPC-157 — where BPC-157 reduces local inflammation through growth factor modulation, FGL2 acts centrally on the adaptive immune regulatory network.

**Advanced Research Compound**

FGL2 is a frontier immune research compound with significant mechanistic interest but limited clinical data. It is typically used by advanced researchers exploring immune modulation protocols, often in combination with more established anti-inflammatory peptides.`,
    benefits: [
      'Expands regulatory T cell (Treg) function for tolerogenic immune modulation',
      'Inhibits dendritic cell maturation — reduces adaptive immune overactivation',
      'Novel mechanism distinct from all other anti-inflammatory peptides',
      'Studied in autoimmune hepatitis, IBD, and transplant tolerance models',
      'Addresses the regulatory immune network rather than just local inflammation',
      'Frontier compound for advanced immune modulation research',
    ],
    protocol: `**Research Protocol:**
- Dose: 0.1-1mg subcutaneous 3x per week
- Cycle: 4-8 weeks
- Best combined with BPC-157 for complementary local + systemic immune effects
- Advanced users only — limited clinical data`,
    synergies: ['bpc-157', 'thymosin-alpha-1', 'll-37', 'kpv-10mg'],
    seoTitle: 'Buy FGL2 Fibroleukin 1mg | Immune Checkpoint Regulatory T Cell Modulator | BPC-157 Stack',
    deepDiveTitle: 'FGL2 Fibroleukin: Immune Checkpoint Molecule for Regulatory T Cell-Based Immune Modulation',
    highlights: [
      { title: 'Treg Amplifier', body: 'Secreted by and enhances regulatory T cells — the immune cells responsible for preventing autoimmune overactivation and maintaining tolerance.' },
      { title: 'Checkpoint Biology', body: 'Acts as an immune checkpoint molecule through FcγRIIB — reducing dendritic cell activation that drives adaptive immune overresponse.' },
      { title: 'Distinct from NSAIDs', body: 'Works through the adaptive immune regulatory network, not COX pathways or cytokine suppression — a fundamentally different anti-inflammatory approach.' },
      { title: 'Research Frontier', body: 'Autoimmune, IBD, and transplant tolerance research — one of the most mechanistically novel immune compounds in active research.' },
    ],
  },
  {
    slug: 'igf-1-des',
    name: 'IGF-1 DES 1mg',
    tagline: 'Truncated IGF-1 — 10x More Potent Local Anabolic Signal',
    price: 79.99,
    category: 'Body Composition',
    tags: ['IGF-1 DES', 'IGF', 'muscle', 'local anabolic', 'hypertrophy', 'satellite cells'],
    image: 'https://phiogen.is/images/products/igf-1-des-1mg.png',
    affiliateUrl: 'https://phiogen.is/products/igf-1-des-1mg?ref=PEPS',
    shortDescription: 'IGF-1 DES is a truncated form of IGF-1 that is 10x more potent than native IGF-1 for local muscle anabolic signaling — the most potent injectable muscle growth peptide.',
    fullDescription: `IGF-1 DES (Des(1-3)IGF-1) is a naturally occurring truncated form of IGF-1 lacking the first three amino acids. This truncation reduces binding to IGF-binding proteins (IGFBPs), which would otherwise sequester most injected IGF-1 LR3. Without IGFBP binding, DES IGF-1 is immediately bioavailable at the injection site — making it 10x more potent than native IGF-1 for local muscle anabolic signaling.

**DES vs LR3 — Different Tools for Different Purposes**

IGF-1 LR3 is systemically distributed after injection, producing body-wide anabolic effects. IGF-1 DES, by contrast, acts locally at the injection site — making it ideal for targeted muscle group development. Injected bilaterally into the trained muscle group post-workout, DES IGF-1 concentrates the anabolic signal exactly where it's needed, producing more selective hypertrophy than systemic IGF-1 LR3.

**Satellite Cell Activation at the Injection Site**

Like all IGF-1 variants, DES IGF-1 activates muscle satellite cells at the injection site. The concentrated local effect means more satellite cells activate in the targeted muscle group, adding myonuclei precisely where the user injects — allowing deliberate asymmetric muscle development for rebalancing or specialization.

**Protocol: Local Post-Workout Injection**

DES IGF-1 is administered immediately post-workout while muscle satellite cells are maximally responsive. Bilateral injection into the exercised muscle group (e.g., both biceps after arm training) concentrates the anabolic effect in that tissue during the peak myogenic response window.`,
    benefits: [
      '10x more potent than native IGF-1 at the injection site via IGFBP bypass',
      'Targeted local muscle anabolic effect — deliberate selective hypertrophy',
      'Activates satellite cells precisely at injection site post-workout',
      'Does not require hepatic metabolism — directly bioavailable',
      'Ideal for lagging muscle group specialization or rebalancing',
      'Additive with systemic IGF-1 LR3 for comprehensive anabolic coverage',
    ],
    protocol: `**Local Anabolic Protocol:**
- Reconstitute with 1mL bacteriostatic water (1mg/mL)
- Dose: 20-100mcg per injection site post-workout
- Inject bilaterally into trained muscle group immediately post-training
- Frequency: post-workout sessions only
- Monitor for hypoglycemia at higher doses — eat within 30 min`,
    synergies: ['igf-1lr3', 'igf-1-lr3-100mcg', 'cjc1295-ipamorelin', 'tb-500'],
    seoTitle: 'Buy IGF-1 DES 1mg | 10x More Potent Local Anabolic Peptide | BPC-157 Stack',
    deepDiveTitle: 'IGF-1 DES: The Truncated IGF-1 Variant That Is 10x More Potent for Local Muscle Anabolism',
    highlights: [
      { title: '10x More Potent', body: 'IGFBP bypass makes DES IGF-1 10x more potent than native IGF-1 locally — the same anabolic effect at one-tenth the dose at the injection site.' },
      { title: 'Targeted Hypertrophy', body: 'Local action means anabolic signal concentrates in the injected muscle — deliberate selective growth for lagging muscle groups.' },
      { title: 'Site-Specific Satellite Cells', body: 'Activates satellite cells and adds myonuclei precisely where injected — enabling anatomically targeted muscle rebalancing.' },
      { title: 'LR3 Complement', body: 'DES provides local potency; LR3 provides systemic coverage — together they create comprehensive IGF-1 anabolic coverage of the whole body.' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(slugs: string[]): Product[] {
  return products.filter((p) => slugs.includes(p.slug));
}

export const categories = Array.from(new Set(products.map((p) => p.category)));
