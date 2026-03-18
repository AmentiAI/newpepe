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

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

// All real product image URLs from Apollo Peptide Sciences
const IMG = {
  bpc157: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
  tb500: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp',
  ghkcu: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
  epithalon: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
  cjcipa: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
  nad: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp',
  igf: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp',
  snap8: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
  sema: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_10mg-1.webp',
  tirz: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
  reta: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/retatrutide_10mg-1.webp',
  cagri: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp',
  bacwater: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/reconsitution_solution_10ml.webp',
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
    affiliateUrl: AFFILIATE,
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
    synergies: ['tb-500', 'ghk-cu', 'kpv', 'cjc1295-ipamorelin'],
    seoTitle: 'BPC-157 10mg | #1 Healing Peptide for Tendons, Gut & Recovery | BPC-157 Stack',
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
    price: 64.99,
    category: 'Healing',
    tags: ['healing', 'flexibility', 'muscle', 'tendons', 'systemic', 'stem cells'],
    image: IMG.tb500,
    affiliateUrl: AFFILIATE,
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
    seoTitle: 'TB-500 Thymosin Beta-4 | Systemic Healing & Flexibility Peptide | BPC-157 Stack',
    deepDiveTitle: 'TB-500: The Systemic Healing Peptide That Completes the BPC-157 Stack',
    highlights: [
      { title: 'Systemic vs Local', body: 'TB-500 circulates body-wide via bloodstream — healing multiple injury sites at once, while BPC-157 excels at local targeted repair.' },
      { title: 'Stem Cell Mobilization', body: 'Mobilizes bone marrow-derived stem cells to damaged tissue — supercharging the body\'s native repair mechanisms beyond what\'s possible naturally.' },
      { title: 'Flexibility Factor', body: 'Actin regulation improves muscle fiber alignment and elasticity. Users report feeling noticeably more flexible within 2-3 weeks of loading.' },
      { title: 'Scar Reduction', body: 'Reduces fibrotic scar tissue formation compared to natural healing — leading to higher-quality tissue repair with better function.' },
    ],
  },
  {
    slug: 'kpv',
    name: 'KPV',
    tagline: 'Potent Anti-Inflammatory Gut Healer',
    price: 39.99,
    category: 'Healing',
    tags: ['anti-inflammatory', 'gut', 'IBD', 'Crohn\'s', 'skin', 'immune'],
    image: IMG.bpc157,
    affiliateUrl: AFFILIATE,
    shortDescription: 'KPV is a potent anti-inflammatory tripeptide from alpha-MSH — penetrates cells and inhibits NF-κB at the nuclear level for IBD, leaky gut, and skin inflammation.',
    fullDescription: `KPV (Lys-Pro-Val) is a C-terminal tripeptide fragment of alpha-melanocyte-stimulating hormone (alpha-MSH). It carries the full anti-inflammatory potency of its parent hormone in a smaller, more bioavailable package that can actually penetrate cell membranes.

**How It Works**

KPV works at the nuclear level — it penetrates cell membranes and directly inhibits NF-κB, the master transcription factor controlling inflammatory gene expression. This is fundamentally different from surface-level anti-inflammatories. It suppresses TNF-α, IL-6, and IL-8 without blunting immune function.

**Primary Applications**

IBD, Crohn's Disease, and Ulcerative Colitis: Oral KPV delivers the peptide directly to inflamed intestinal tissue. Studies show remarkable reduction in gut inflammation markers.

Skin inflammation: Topical KPV reduces psoriasis plaques, eczema lesions, and contact dermatitis — visible results within 1-2 weeks.

Neuroinflammation: Reduces brain inflammation linked to depression, cognitive decline, and neurological disorders.

**Stacking with BPC-157**

KPV + BPC-157 is the definitive gut healing stack. BPC-157 repairs structural integrity; KPV eliminates the inflammatory cascade that caused the damage. Together they address both cause and effect.`,
    benefits: [
      'Penetrates cell membranes and inhibits NF-κB at nuclear level',
      'Directly reduces TNF-α, IL-6, and IL-8 — master inflammatory cytokines',
      'Proven efficacy for IBD, Crohn\'s, and ulcerative colitis',
      'Topically effective for psoriasis, eczema, and contact dermatitis',
      'Reduces neuroinflammation linked to depression and brain fog',
      'Does not suppress overall immune function',
      'Compatible with BPC-157 for comprehensive gut healing',
      'Oral and injectable routes both effective',
    ],
    protocol: `**Gut Healing Protocol:**
- Dose: 500mcg-2mg orally, 2-3x daily before meals
- Cycle: 4-8 weeks

**Skin Protocol:**
- Topical: 1-2% KPV in a carrier cream, applied 2x daily

**Injectable:**
- 250-500mcg subcutaneous, 1-2x daily for systemic inflammation

**Best Stack:** KPV + BPC-157 oral = most comprehensive gut healing protocol.`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'nad'],
    seoTitle: 'KPV Peptide | Anti-Inflammatory for IBD, Crohn\'s & Gut Healing | BPC-157 Stack',
    deepDiveTitle: 'KPV: The Nuclear Anti-Inflammatory That Heals IBD, Skin, and Neuroinflammation',
    highlights: [
      { title: 'Nuclear Action', body: 'KPV penetrates cell membranes and acts directly at the nuclear level — more targeted than any surface-level anti-inflammatory.' },
      { title: 'Gut-Specific Delivery', body: 'Oral KPV reaches the intestinal wall — ideal for IBD, Crohn\'s, and leaky gut when combined with BPC-157 for complete gut repair.' },
      { title: 'No Immune Suppression', body: 'Unlike steroids, KPV selectively reduces damaging inflammation while preserving the immune functions that protect against infection.' },
      { title: 'Skin Results', body: 'Topical KPV reduces redness, scaling, and itching in inflammatory skin conditions — visible results in as little as 2 weeks.' },
    ],
  },

  // ─── ANTI-AGING ─────────────────────────────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'Copper Peptide That Resets Your Genes',
    price: 49.99,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'skin', 'collagen', 'copper', 'hair', 'gene-reset', 'longevity'],
    image: IMG.ghkcu,
    affiliateUrl: AFFILIATE,
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
    synergies: ['epithalon', 'bpc-157', 'snap-8', 'ss-31', 'nad'],
    seoTitle: 'GHK-Cu Copper Peptide | Reverses 31% of Aged Genes | BPC-157 Stack',
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
    price: 79.99,
    category: 'Anti-Aging',
    tags: ['longevity', 'telomeres', 'telomerase', 'sleep', 'epigenetics', 'mortality'],
    image: IMG.epithalon,
    affiliateUrl: AFFILIATE,
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
    synergies: ['ghk-cu', 'ss-31', 'nad', 'snap-8'],
    seoTitle: 'Epithalon 50mg | Telomere Extension & 28% Mortality Reduction | BPC-157 Stack',
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
    price: 44.99,
    category: 'Anti-Aging',
    tags: ['NAD+', 'longevity', 'mitochondria', 'energy', 'DNA repair', 'sirtuins'],
    image: IMG.nad,
    affiliateUrl: AFFILIATE,
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
    synergies: ['epithalon', 'ghk-cu', 'ss-31', 'mots-c'],
    seoTitle: 'NAD+ 500mg | Cellular Energy, Sirtuins & Longevity | BPC-157 Stack',
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
    price: 44.99,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'skin', 'wrinkles', 'expression lines', 'topical', 'Botox-alternative'],
    image: IMG.snap8,
    affiliateUrl: AFFILIATE,
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
    seoTitle: 'SNAP-8 Peptide | Botox-Alternative Wrinkle Reduction | BPC-157 Stack',
    deepDiveTitle: 'SNAP-8: The Topical Peptide That Reduces Expression Wrinkles by 63% Without Injections',
    highlights: [
      { title: '63% Wrinkle Reduction', body: 'Double-blind clinical trial: SNAP-8 reduced wrinkle volume by up to 63% over 28 days — the strongest topical peptide efficacy data available.' },
      { title: 'Non-Invasive Botox', body: 'Partially blocks the same neuromuscular pathway as Botox — reducing expression lines without needles, paralysis, or medical appointments.' },
      { title: 'Superior to Argireline', body: 'Head-to-head comparison shows SNAP-8 outperforms Argireline, the original neuromuscular wrinkle peptide, in clinical settings.' },
      { title: 'Dual-Stack Power', body: 'Combined with GHK-Cu, SNAP-8 addresses wrinkles from two directions — neuromuscular reduction from above, collagen rebuilding from below.' },
    ],
  },
  {
    slug: 'ss-31',
    name: 'SS-31 (Elamipretide)',
    tagline: 'Mitochondrial Inner Membrane Repair',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['mitochondria', 'anti-aging', 'energy', 'longevity', 'cardioprotection', 'ATP'],
    image: IMG.nad,
    affiliateUrl: AFFILIATE,
    shortDescription: 'SS-31 (Elamipretide) concentrates in the mitochondrial inner membrane — restoring cardiolipin integrity and ATP production that collapse with aging. Phase II/III clinical trials.',
    fullDescription: `SS-31 (also called Elamipretide or MTP-131) is a mitochondria-targeted tetrapeptide that selectively accumulates in the inner mitochondrial membrane — the most critical and most commonly overlooked site of cellular aging.

**Why the Inner Membrane Matters**

The inner mitochondrial membrane (IMM) is where ATP production actually happens. It houses the electron transport chain (ETC) and ATP synthase. The IMM contains a unique phospholipid called cardiolipin that is essential for ETC function. With age, cardiolipin oxidizes and the membrane loses structural integrity — causing the collapse in energy production that characterizes aging.

**How SS-31 Works**

SS-31 selectively binds to cardiolipin in the IMM, stabilizing its structure and protecting it from oxidative damage. This:
1. Restores electron transport chain efficiency
2. Dramatically increases ATP output
3. Reduces mitochondrial ROS (reactive oxygen species)
4. Restores the membrane potential required for healthy mitochondrial function

**Clinical Evidence**

SS-31 has advanced to Phase II and III clinical trials for heart failure — extraordinary evidence for a longevity peptide. Results show improved exercise capacity, reduced cardiac damage markers, and restored mitochondrial function in patients with heart failure.`,
    benefits: [
      'Directly targets and stabilizes cardiolipin in the mitochondrial inner membrane',
      'Restores electron transport chain efficiency and ATP production',
      'Reduces mitochondrial ROS — primary driver of mitochondrial aging',
      'Phase II/III clinical trials for heart failure — strongest evidence base of any longevity peptide',
      'Improves exercise capacity and physical energy measurably',
      'Protects against ischemia-reperfusion injury',
      'Reverses age-related mitochondrial structural changes',
      'Reduces inflammation through mitochondrial pathway normalization',
    ],
    protocol: `**Standard Protocol:**
- Dose: 1-5mg subcutaneous daily
- Frequency: Daily for ongoing protection; or 8-12 week cycles
- Timing: Morning

**Cardioprotective:** Clinical trials use IV infusion; subcutaneous at 1-3mg daily is the research standard for longevity use.

**Best Stack:** SS-31 + NAD+ + Epithalon = comprehensive mitochondrial and telomeric anti-aging protocol.`,
    synergies: ['epithalon', 'ghk-cu', 'nad', 'mots-c'],
    seoTitle: 'SS-31 Elamipretide | Mitochondrial Repair for Energy & Anti-Aging | BPC-157 Stack',
    deepDiveTitle: 'SS-31: The Mitochondrial Peptide in Phase III Trials That Restores Cellular Energy',
    highlights: [
      { title: 'Inner Membrane Targeting', body: 'One of the few compounds that concentrates specifically in the mitochondrial inner membrane — the most critical site for energy production.' },
      { title: 'Phase III Clinical Trials', body: 'SS-31 has reached Phase II and III clinical trials for heart failure — extraordinary evidence for a research peptide.' },
      { title: 'Cardiolipin Restoration', body: 'Protects and stabilizes cardiolipin — the phospholipid anchor of the electron transport chain whose degradation is a primary cause of mitochondrial aging.' },
      { title: 'Energy Surge', body: 'Users report noticeable increases in physical energy and exercise capacity — the direct consequence of restored ATP output in muscle mitochondria.' },
    ],
  },

  // ─── BODY COMPOSITION ───────────────────────────────────────────────────────
  {
    slug: 'cjc1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin',
    tagline: 'The Gold Standard GH Peptide Stack',
    price: 59.99,
    category: 'Body Composition',
    tags: ['growth hormone', 'GH', 'fat loss', 'muscle', 'sleep', 'recovery', 'GHRH', 'GHRP'],
    image: IMG.cjcipa,
    affiliateUrl: AFFILIATE,
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
    seoTitle: 'CJC-1295 Ipamorelin | Gold Standard GH Stack for Fat Loss & Muscle | BPC-157 Stack',
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
    price: 69.99,
    category: 'Body Composition',
    tags: ['IGF-1', 'muscle growth', 'recovery', 'anabolic', 'satellite cells', 'performance'],
    image: IMG.igf,
    affiliateUrl: AFFILIATE,
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
    seoTitle: 'IGF-1 LR3 | Muscle Satellite Cell Activator for Hypertrophy | BPC-157 Stack',
    deepDiveTitle: 'IGF-1 LR3: The Long-Acting Growth Factor That Activates Muscle Satellite Cells',
    highlights: [
      { title: 'Satellite Cell Activation', body: 'IGF-1 LR3 activates muscle satellite cells — the stem cells that create new muscle fibers. This is the mechanism behind muscle hyperplasia, not just hypertrophy.' },
      { title: '20-30 Hour Half-Life', body: 'The LR3 modification extends half-life from ~20 minutes (native IGF-1) to 20-30 hours — providing sustained anabolic signaling from a single injection.' },
      { title: 'Direct Tissue Delivery', body: 'Bypasses the GH → liver → IGF-1 conversion pathway, delivering growth factor signaling directly to muscle and other target tissues.' },
      { title: 'Post-Workout Prime', body: 'Most effective when injected post-workout — amplifying the anabolic window when satellite cells are most receptive to growth signals.' },
    ],
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c',
    tagline: 'Mitochondrial Metabolic Hormone',
    price: 74.99,
    category: 'Body Composition',
    tags: ['metabolism', 'fat loss', 'AMPK', 'insulin', 'longevity', 'mitochondria', 'exercise-mimetic'],
    image: IMG.nad,
    affiliateUrl: AFFILIATE,
    shortDescription: 'MOTS-c is a mitochondria-encoded peptide hormone that activates AMPK, improves insulin sensitivity, and acts as a powerful exercise mimetic for fat loss and longevity.',
    fullDescription: `MOTS-c is encoded in the mitochondrial genome — making it one of the few peptides with this distinction. It circulates as a hormone, traveling from mitochondria to the nucleus where it regulates hundreds of metabolic genes. It represents a fundamentally new class of compound: the mitochondrial hormone.

**Exercise in a Peptide**

Exercise raises MOTS-c levels in muscle and blood. Exogenous MOTS-c mimics and amplifies the metabolic benefits of exercise at the cellular level — activating the same pathways that make exercise so profoundly beneficial for metabolic health. This makes it genuinely an "exercise mimetic."

**AMPK Activation**

MOTS-c's primary mechanism is AMPK (AMP-activated protein kinase) activation — the cellular energy sensor that switches cells from fat storage to fat burning mode. AMPK activation:
- Increases fatty acid oxidation
- Improves insulin sensitivity and glucose uptake
- Inhibits mTOR (reducing fat storage)
- Stimulates mitochondrial biogenesis

**Longevity Connection**

Higher circulating MOTS-c levels are associated with longer lifespan across multiple species. Levels decline with age. Japanese centenarians have been found to carry genetic variants associated with elevated MOTS-c signaling.`,
    benefits: [
      'Activates AMPK — the metabolic master switch from fat storage to fat burning',
      'Improves insulin sensitivity and glucose regulation',
      'Exercise mimetic — replicates metabolic benefits of physical activity',
      'Mitochondria-encoded longevity signal — declines with age',
      'Reduces adipogenesis (blocks new fat cell formation)',
      'Improves physical endurance and reduces fatigue',
      'Anti-inflammatory via metabolic pathway normalization',
      'Centenarian genetics associated with elevated MOTS-c signaling',
    ],
    protocol: `**Metabolic Protocol:**
- Dose: 5-10mg per week total
- Method: Subcutaneous injection
- Frequency: 2-3 injections per week
- Timing: Pre-exercise for synergistic metabolic effect
- Cycle: 8-16 weeks

**Best Stack:** MOTS-c + CJC-1295/Ipamorelin for comprehensive body recomposition.`,
    synergies: ['cjc1295-ipamorelin', 'nad', 'ss-31', 'bpc-157'],
    seoTitle: 'MOTS-c Peptide | Mitochondrial Metabolic Hormone for Fat Loss & Longevity | BPC-157 Stack',
    deepDiveTitle: 'MOTS-c: The Mitochondrial Hormone That Makes Your Metabolism Act 20 Years Younger',
    highlights: [
      { title: 'Mitochondrial Hormone', body: 'Encoded in the mitochondrial genome — MOTS-c is a new class of peptide that acts as a systemic metabolic regulator throughout the body.' },
      { title: 'AMPK Master Switch', body: 'Activates the same cellular pathway triggered by exercise and caloric restriction — flipping metabolism from storage mode to burning mode.' },
      { title: 'Exercise Amplifier', body: 'MOTS-c rises with exercise; exogenous MOTS-c amplifies training adaptations — making every workout more metabolically effective.' },
      { title: 'Centenarian Signal', body: 'Genetic variants that increase MOTS-c signaling are overrepresented in centenarians — making it one of the most exciting longevity-associated molecules found.' },
    ],
  },

  // ─── WEIGHT LOSS (GLP) ──────────────────────────────────────────────────────
  {
    slug: 'glp-1s-semaglutide',
    name: 'GLP-1 S (Semaglutide)',
    tagline: 'Next-Gen GLP-1 Receptor Agonist for Weight Loss',
    price: 129.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'semaglutide', 'weight loss', 'insulin', 'Ozempic', 'Wegovy', 'metabolic'],
    image: IMG.sema,
    affiliateUrl: AFFILIATE,
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

This product is sold for research purposes only. Semaglutide is commercially available by prescription in pharmaceutical grade formulations.`,
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
**Note:** For research purposes. Consult a physician for clinical use.`,
    synergies: ['glp-2t-tirzepatide', 'nad', 'bpc-157', 'mots-c'],
    seoTitle: 'GLP-1 S Semaglutide | 15-20% Weight Loss Research Peptide | BPC-157 Stack',
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
    affiliateUrl: AFFILIATE,
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
**Note:** For research purposes only.`,
    synergies: ['glp-1s-semaglutide', 'glp-3r-retatrutide', 'nad', 'mots-c'],
    seoTitle: 'GLP-2 T Tirzepatide | Dual GIP/GLP-1 for 22.5% Weight Loss | BPC-157 Stack',
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
    price: 179.99,
    category: 'Weight Loss',
    tags: ['GLP-1', 'GIP', 'glucagon', 'retatrutide', 'triple agonist', 'weight loss', 'next-gen'],
    image: IMG.reta,
    affiliateUrl: AFFILIATE,
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
**Note:** Phase III compound — for research purposes only. Clinical data pending.`,
    synergies: ['glp-2t-tirzepatide', 'glp-1s-semaglutide', 'nad', 'mots-c'],
    seoTitle: 'GLP-3 R Retatrutide | Triple Agonist with 24% Weight Loss in Phase II | BPC-157 Stack',
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
    price: 189.99,
    category: 'Weight Loss',
    tags: ['cagrilintide', 'semaglutide', 'amylin', 'GLP-1', 'combination', 'weight loss', 'next-gen'],
    image: IMG.cagri,
    affiliateUrl: AFFILIATE,
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

**Note:** For research purposes only. Phase III compound. Clinical guidance required for pharmaceutical use.`,
    synergies: ['glp-1s-semaglutide', 'glp-2t-tirzepatide', 'glp-3r-retatrutide', 'nad'],
    seoTitle: 'Cagrisema GLP-1 C + GLP-1 S | Dual Amylin/GLP-1 for 25% Weight Loss | BPC-157 Stack',
    deepDiveTitle: 'Cagrisema: The Amylin + Semaglutide Combination That Rewrites Weight Loss Expectations',
    highlights: [
      { title: '25% vs 15%', body: 'REDEFINE trials: cagrisema achieved ~25% weight reduction vs ~15% for semaglutide alone — a 67% improvement from adding the amylin pathway.' },
      { title: 'Unique Mechanism', body: 'Amylin receptor activation is completely distinct from GLP-1, GIP, and glucagon pathways — meaning it adds genuine additive efficacy rather than pathway overlap.' },
      { title: 'Different from GIP Combos', body: 'While tirzepatide and retatrutide use GIP receptor pathways, cagrisema uses the amylin system — offering a mechanistically distinct option for non-responders.' },
      { title: 'Phase III Pipeline', body: 'In Phase III trials with Novo Nordisk — positioned as the next generation of obesity pharmacotherapy beyond semaglutide monotherapy.' },
    ],
  },

  // ─── SUPPLIES ───────────────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water',
    name: 'Bacteriostatic Water 10mL',
    tagline: 'Essential Reconstitution Solution',
    price: 12.99,
    category: 'Supplies',
    tags: ['reconstitution', 'bacteriostatic water', 'injection supplies', 'essential', 'peptide prep'],
    image: IMG.bacwater,
    affiliateUrl: AFFILIATE,
    shortDescription: 'Pharmaceutical-grade bacteriostatic water for safe peptide reconstitution — contains 0.9% benzyl alcohol to prevent bacterial growth in multi-use vials.',
    fullDescription: `Bacteriostatic water is sterile water containing 0.9% benzyl alcohol as a bacteriostatic agent. It is specifically designed for reconstituting lyophilized (freeze-dried) peptides and other research compounds. Using the correct reconstitution solution is essential for maintaining peptide integrity, purity, and sterility.

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
      'Compatible with all research peptides',
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
    seoTitle: 'Bacteriostatic Water 10mL | Peptide Reconstitution Solution | BPC-157 Stack',
    deepDiveTitle: 'Bacteriostatic Water: Why Correct Reconstitution Is Critical for Peptide Safety and Efficacy',
    highlights: [
      { title: 'Bacteriostatic Protection', body: '0.9% benzyl alcohol prevents bacterial contamination for 28+ days after opening — essential for multi-use vials and repeated dosing.' },
      { title: 'Peptide Integrity', body: 'Correct reconstitution preserves the peptide\'s structure and potency. Wrong solutions can denature peptides, reducing efficacy and safety.' },
      { title: '10mL Volume', body: 'A 10mL vial provides enough reconstitution solution for multiple peptide vials — practical for running multiple protocols simultaneously.' },
      { title: 'Same Source', body: 'Bacteriostatic water from Apollo Peptide Sciences — pharmaceutical-grade from the same trusted source as all your research peptides.' },
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
