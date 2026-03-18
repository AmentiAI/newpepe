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

export const products: Product[] = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    tagline: 'The Ultimate Healing Peptide',
    price: 54.99,
    category: 'Healing',
    tags: ['healing', 'gut', 'tendons', 'ligaments', 'inflammation', 'flagship'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'BPC-157 is the most studied healing peptide — accelerates tendon, ligament, muscle, and gut repair with zero systemic side effects.',
    fullDescription: `BPC-157 (Body Protection Compound 157) is a partial sequence of body protection compound derived from human gastric juice. It consists of 15 amino acids and has been studied extensively for its remarkable regenerative properties.

**How It Works**

BPC-157 works through multiple mechanisms simultaneously. It upregulates growth hormone receptors in fibroblast cells, accelerating the production of collagen and connective tissue. It modulates nitric oxide synthesis to improve blood flow to injured areas, and activates the FAK-paxillin pathway which is critical for tendon and ligament repair.

Unlike many performance compounds, BPC-157 has no known LD50 in animal studies — meaning no dose has been found to cause death — making it one of the safest peptides studied.

**What Results to Expect**

Users report significant reductions in pain and inflammation within 2-4 days of starting BPC-157. Tendon and ligament injuries that traditionally take 6-12 months to heal show measurable improvement within 4-8 weeks on BPC-157. Gut issues including leaky gut, IBS, and Crohn's-like symptoms respond within 1-3 weeks.

Athletes use BPC-157 to stay training through minor injuries, and many report complete healing of chronic injuries that persisted for years.

**Who It's For**

BPC-157 is ideal for anyone with:
- Joint, tendon, or ligament injuries
- Chronic pain from previous injuries
- Gut issues (leaky gut, IBS, Crohn's)
- Post-surgery recovery
- Muscle tears or strains
- NSAID-induced gut damage

**FAQ**

*Can BPC-157 be taken orally?* Yes — BPC-157 is gastric acid stable and shows systemic effects when taken orally, making it unique among peptides. Injectable and oral forms both work.

*How long should I run BPC-157?* Typical protocols are 4-12 weeks for injury healing. Some users cycle it 8 weeks on, 4 weeks off for maintenance.

*Is BPC-157 safe?* No significant adverse effects have been reported in human or animal studies at research doses. It has no hormonal activity and does not suppress natural hormone production.`,
    benefits: [
      'Dramatically accelerates tendon and ligament healing',
      'Repairs gut lining — effective for leaky gut, IBS, and IBD',
      'Reduces inflammation without suppressing immune function',
      'Improves blood vessel formation to injured tissue',
      'No known LD50 — exceptional safety profile',
      'Works orally or via injection',
      'Protects against NSAID-induced gut damage',
      'Neuroprotective effects — may aid CNS healing',
    ],
    protocol: `**Standard Protocol:**
- Dose: 250-500mcg per day
- Method: Subcutaneous injection near injury site, or oral (capsule/solution)
- Timing: Once or twice daily, preferably fasted for oral use
- Cycle: 4-12 weeks for injury healing; 4-8 weeks for gut repair
- Storage: Refrigerate reconstituted peptide; use within 30 days`,
    synergies: ['tb-500', 'ghk-cu', 'kpv', 'ipamorelin'],
    seoTitle: 'BPC-157 | #1 Healing Peptide for Tendons, Gut & Recovery | BPC-157 Stack',
    deepDiveTitle: 'BPC-157: The Complete Guide to the Most Powerful Healing Peptide',
    highlights: [
      { title: 'Gut Healer', body: 'BPC-157 repairs intestinal barrier integrity, making it the most researched peptide for leaky gut and IBD.' },
      { title: 'Tendon & Ligament Repair', body: 'Upregulates growth hormone receptors in fibroblasts — accelerates collagen production in connective tissue.' },
      { title: 'Nerve Healing', body: 'Crosses the blood-brain barrier and protects dopaminergic neurons — unique among healing peptides.' },
      { title: 'Oral Bioavailability', body: 'One of the only peptides that maintains effectiveness when taken orally, making it accessible for those who prefer not to inject.' },
    ],
  },
  {
    slug: 'tb-500',
    name: 'TB-500',
    tagline: 'Systemic Repair & Flexibility',
    price: 64.99,
    category: 'Healing',
    tags: ['healing', 'flexibility', 'muscle', 'tendons', 'systemic', 'thymosin'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'TB-500 (Thymosin Beta-4) provides systemic healing — repairs muscles, tendons, and skin while dramatically improving flexibility and recovery speed.',
    fullDescription: `TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide found in virtually all human and animal cells. It plays a critical role in tissue repair, cell migration, and the regulation of actin — the protein responsible for cellular movement and wound healing.

**How It Works**

TB-500 works by promoting cell migration and proliferation in damaged tissue. It binds to actin and helps mobilize stem cells from bone marrow to injury sites. This makes it a systemic healer — unlike BPC-157 which works well locally, TB-500 circulates throughout the body and heals multiple sites simultaneously.

It also upregulates anti-inflammatory cytokines and downregulates pro-inflammatory pathways, creating the optimal environment for rapid repair.

**What Results to Expect**

TB-500 is renowned for healing injuries that don't respond to conventional treatment. Chronic tendon injuries, muscle tears, and even cardiac tissue damage respond well. Users report significant flexibility improvements within 2-3 weeks — many describe feeling "10 years younger" in their joints and muscles.

**Who It's For**

TB-500 is the go-to peptide for:
- Athletes with multiple simultaneous injuries
- Anyone with chronic, hard-to-heal injuries
- Post-surgery systemic recovery
- Improving whole-body flexibility
- Heart damage recovery (per animal studies)
- Older athletes experiencing age-related stiffness

**FAQ**

*How does TB-500 differ from BPC-157?* BPC-157 is more localized and gut-specific; TB-500 is systemic. Stack them for complete coverage.

*What's the injection frequency?* Loading phase: 2mg twice weekly for 4-6 weeks. Maintenance: 2mg once per week.`,
    benefits: [
      'Systemic healing — repairs multiple injury sites simultaneously',
      'Dramatically improves joint and muscle flexibility',
      'Accelerates muscle fiber repair after tears',
      'Mobilizes stem cells to injury sites',
      'Reduces scar tissue formation',
      'Anti-inflammatory without immune suppression',
      'Shown to support cardiac tissue repair in animal studies',
      'Synergizes powerfully with BPC-157',
    ],
    protocol: `**Loading Phase (Weeks 1-6):**
- Dose: 2mg twice per week (4mg total/week)
- Method: Subcutaneous injection
- Timing: Any time of day

**Maintenance Phase:**
- Dose: 2mg once per week
- Duration: Ongoing as needed

**Stack with BPC-157** for maximum healing results.`,
    synergies: ['bpc-157', 'ghk-cu', 'ipamorelin', 'cjc-1295'],
    seoTitle: 'TB-500 Thymosin Beta-4 | Systemic Healing & Flexibility Peptide | BP157Stack',
    deepDiveTitle: 'TB-500: Systemic Tissue Repair and the BPC-157 Stack That Heals Everything',
    highlights: [
      { title: 'Systemic vs Local', body: 'TB-500 circulates body-wide, healing multiple injury sites at once — the perfect complement to BPC-157\'s local action.' },
      { title: 'Flexibility Factor', body: 'Actin regulation improves muscle fiber alignment and elasticity — users report feeling noticeably more flexible within weeks.' },
      { title: 'Stem Cell Mobilization', body: 'TB-500 mobilizes bone marrow stem cells to damaged tissue, supercharging the body\'s natural repair mechanisms.' },
      { title: 'Scar Reduction', body: 'Reduces fibrotic scar tissue formation, leading to higher-quality healing vs standard recovery.' },
    ],
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    tagline: 'Copper Peptide Anti-Aging & Skin Repair',
    price: 49.99,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'skin', 'collagen', 'copper', 'hair', 'wound healing'],
    image: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'GHK-Cu (Copper Peptide) is the most powerful natural anti-aging compound — rebuilds collagen, reverses skin aging, and resets 31% of aged genes.',
    fullDescription: `GHK-Cu (Glycine-Histidine-Lysine Copper) is a naturally occurring copper complex that exists in human plasma, saliva, and urine. Discovered in the 1970s, it has been studied extensively as the body's master anti-aging signal.

**How It Works**

GHK-Cu acts as a biological signal that resets genes to a younger state. A landmark study found that GHK-Cu reversed the gene expression of 31% of aged human genes — effectively rewinding the molecular clock. It stimulates collagen synthesis, activates over 30 growth factors, and upregulates the body's antioxidant systems.

It also activates the proteasome — the cellular cleanup machinery that removes damaged proteins — which declines dramatically with age.

**What Results to Expect**

Skin: Measurable improvements in thickness, firmness, and elasticity within 4-8 weeks. Reduction of fine lines and wrinkles. Improved wound healing and reduced scarring.

Hair: Stimulates hair follicle size and density. Blocks DHT locally when applied topically, making it useful for hair loss.

Systemic: Improved sleep quality, reduced anxiety, and enhanced wound healing reported by users on injectable GHK-Cu.

**FAQ**

*Topical vs injectable?* Topical works well for skin and hair. Injectable GHK-Cu produces stronger systemic effects.`,
    benefits: [
      'Reverses gene expression of 31% of aged genes',
      'Stimulates collagen and elastin production',
      'Activates 30+ growth factors',
      'Thickens and firms aging skin within 4-8 weeks',
      'Promotes hair follicle growth and density',
      'Activates cellular cleanup (proteasome activation)',
      'Reduces inflammation and oxidative stress',
      'Improves wound healing and scar reduction',
    ],
    protocol: `**Injectable Protocol:**
- Dose: 1-2mg per day subcutaneous
- Cycle: 4-8 weeks on, 4 weeks off
- Best time: Evening (aligns with overnight repair processes)

**Topical Protocol:**
- Apply 1-2% GHK-Cu serum to face/scalp daily
- Use consistently for minimum 8 weeks to see results

**Stack with:** Epithalon for comprehensive anti-aging.`,
    synergies: ['epithalon', 'bpc-157', 'ipamorelin', 'ss-31'],
    seoTitle: 'GHK-Cu Copper Peptide | Anti-Aging, Collagen & Skin Repair | BPC-157 Stack',
    deepDiveTitle: 'GHK-Cu: The Copper Peptide That Resets Your Genes and Reverses Aging',
    highlights: [
      { title: '31% Gene Reset', body: 'Landmark research shows GHK-Cu reverses expression of 31% of aged genes — the most powerful biological anti-aging signal discovered.' },
      { title: 'Collagen Builder', body: 'Stimulates fibroblasts to produce collagen I, III, and IV — rebuilding the skin matrix from within.' },
      { title: 'Hair Rescue', body: 'Enlarges hair follicle size and prolongs the growth phase — a natural, peptide-based approach to hair density.' },
      { title: 'Cellular Cleanup', body: 'Activates the proteasome to remove damaged proteins — one of the core mechanisms of aging reversal.' },
    ],
  },
  {
    slug: 'epithalon',
    name: 'Epithalon',
    tagline: 'Telomere Extension & Longevity',
    price: 79.99,
    category: 'Anti-Aging',
    tags: ['anti-aging', 'longevity', 'telomeres', 'sleep', 'epigenetics'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'Epithalon is the only known peptide to stimulate telomerase and lengthen telomeres — the biological key to extending healthy lifespan.',
    fullDescription: `Epithalon (Epitalon) is a tetrapeptide (Ala-Glu-Asp-Gly) derived from Epithalamin, a polypeptide extracted from the pineal gland. It was developed by Russian scientist Vladimir Khavinson, who has published over 60 studies on its remarkable longevity effects.

**How It Works**

Epithalon stimulates telomerase — the enzyme that rebuilds telomeres, the protective caps on chromosomes that shorten with each cell division. Telomere shortening is one of the primary biological mechanisms of aging. By restoring telomerase activity, Epithalon essentially resets the cellular aging clock.

It also normalizes the function of the hypothalamus-pituitary axis, increases antioxidant enzyme production, and regulates melatonin production for improved sleep.

**Results in Human Trials**

In a landmark 12-year study, elderly patients who received Epithalon had 28% lower mortality than controls. Additional studies showed improved vision in retinal degeneration patients and restored menstrual function in women with uterine disorders.

**FAQ**

*How often should Epithalon be used?* Most protocols are 10-20 day courses, 1-2 times per year. Some use quarterly cycles.

*Will I feel effects immediately?* Improvements in sleep quality and energy are often reported within the first cycle. Anti-aging effects accumulate over multiple cycles.`,
    benefits: [
      'Only known peptide to stimulate telomerase and lengthen telomeres',
      'Shown to reduce mortality by 28% in 12-year human trial',
      'Normalizes melatonin production for deep, restorative sleep',
      'Increases antioxidant enzyme production (SOD, catalase)',
      'Restores hypothalamus-pituitary axis function',
      'Improves vision and retinal function',
      'Epigenetic reset — methylation pattern normalization',
      'Anti-tumor properties shown in multiple studies',
    ],
    protocol: `**Standard Longevity Protocol:**
- Dose: 5-10mg per day
- Method: Subcutaneous injection
- Cycle: 10-20 consecutive days
- Frequency: 1-2 cycles per year (spring and fall)
- Storage: Lyophilized powder — refrigerate; reconstitute with bacteriostatic water

**Intensive Protocol:**
- 20 days on, followed by 4-month break
- Repeat 2x per year for longevity maintenance`,
    synergies: ['ghk-cu', 'ss-31', 'ipamorelin', 'selank'],
    seoTitle: 'Epithalon Peptide | Telomere Extension & Longevity | BPC-157 Stack Guide',
    deepDiveTitle: 'Epithalon: The Longevity Peptide That Extends Telomeres and Reduces Mortality',
    highlights: [
      { title: 'Telomere Extension', body: 'The only peptide proven to activate telomerase and actually lengthen telomeres — reversing a core mechanism of aging.' },
      { title: '28% Mortality Reduction', body: 'A 12-year human study showed Epithalon-treated patients had 28% lower all-cause mortality — remarkable for any intervention.' },
      { title: 'Sleep Normalization', body: 'Restores pineal gland function and melatonin rhythm — users consistently report dramatically improved sleep quality.' },
      { title: 'Russian Research Legacy', body: '60+ published studies by Dr. Vladimir Khavinson over 40 years of research — one of the most documented peptides in existence.' },
    ],
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    tagline: 'Clean GH Release — No Cortisol Spike',
    price: 44.99,
    category: 'Body Composition',
    tags: ['growth hormone', 'fat loss', 'muscle', 'sleep', 'recovery', 'GH'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'Ipamorelin is the cleanest growth hormone secretagogue — stimulates GH release without cortisol or prolactin spikes for lean mass and fat loss.',
    fullDescription: `Ipamorelin is a pentapeptide GHRP (Growth Hormone Releasing Peptide) that selectively stimulates growth hormone release from the pituitary gland. Unlike older GHRPs, Ipamorelin does not raise cortisol, prolactin, or ACTH — making it the cleanest GH secretagogue available.

**How It Works**

Ipamorelin binds to the ghrelin receptor (GHS-R1a) in the pituitary and hypothalamus, triggering a strong, clean pulse of GH release that mimics the body's natural pulsatile secretion pattern. This is fundamentally different from synthetic HGH, which creates supraphysiological levels. Ipamorelin keeps you within a natural range while maximizing your body's output.

**What Results to Expect**

Users report measurable fat loss within 4-6 weeks, particularly visceral and subcutaneous abdominal fat. Lean muscle gains are moderate but high-quality. Sleep quality improves dramatically — GH is primarily secreted during slow-wave sleep, and Ipamorelin amplifies this nocturnal pulse. Recovery from training accelerates significantly.

**FAQ**

*Should I stack Ipamorelin with CJC-1295?* Yes — this is the gold standard combination. CJC-1295 extends the GH pulse while Ipamorelin initiates it, creating synergistic amplification.

*How long until I see results?* Fat loss and sleep improvements appear within 4-6 weeks. Significant body composition changes require 3-6 months.`,
    benefits: [
      'Selective GH release — no cortisol, prolactin, or ACTH elevation',
      'Accelerates fat loss, especially visceral and abdominal fat',
      'Increases lean muscle mass over 3-6 month protocols',
      'Dramatically improves sleep quality and deep sleep duration',
      'Accelerates workout recovery and reduces DOMS',
      'Improves skin thickness and collagen production',
      'No desensitization — can be used long-term without receptor downregulation',
      'Synergizes powerfully with CJC-1295',
    ],
    protocol: `**Standard Protocol (with CJC-1295):**
- Ipamorelin: 200-300mcg
- CJC-1295 (no DAC): 100-200mcg
- Timing: Before bed on empty stomach (3-4 hour fast)
- Frequency: 5 days on, 2 days off

**Solo Protocol:**
- 200-300mcg subcutaneous, 2-3x daily
- Most important dose: before sleep

**Cycle Length:** 3-6 months for body composition; indefinite for anti-aging at lower doses.`,
    synergies: ['cjc-1295', 'hgh-frag-176-191', 'bpc-157', 'ghk-cu'],
    seoTitle: 'Ipamorelin | Cleanest GH Peptide for Fat Loss & Muscle | BPC-157 Stack',
    deepDiveTitle: 'Ipamorelin: The Clean Growth Hormone Secretagogue for Body Composition',
    highlights: [
      { title: 'Zero Cortisol', body: 'Unlike GHRP-6 and Hexarelin, Ipamorelin does not raise cortisol — preserving muscle and keeping you anabolic.' },
      { title: 'Sleep Architecture', body: 'GH is primarily secreted during slow-wave sleep — Ipamorelin amplifies this nocturnal pulse, improving sleep depth and recovery.' },
      { title: 'No Desensitization', body: 'Studies show no receptor downregulation with long-term Ipamorelin use — it can be used in extended protocols without diminishing returns.' },
      { title: 'The Ideal Stack', body: 'Ipamorelin + CJC-1295 is the most popular peptide combination — achieving synergistic GH release that exceeds either peptide alone.' },
    ],
  },
  {
    slug: 'cjc-1295',
    name: 'CJC-1295',
    tagline: 'Extended GH Pulse Amplifier',
    price: 49.99,
    category: 'Body Composition',
    tags: ['growth hormone', 'GHRH', 'fat loss', 'muscle', 'body composition'],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'CJC-1295 (no DAC) is a GHRH analog that extends and amplifies growth hormone pulses — the perfect partner to Ipamorelin for maximum GH output.',
    fullDescription: `CJC-1295 without DAC (also called Modified GRF 1-29) is a synthetic analog of Growth Hormone Releasing Hormone (GHRH). It stimulates the pituitary to release growth hormone by mimicking the body's own GHRH, but with enhanced stability and receptor affinity.

**How It Works**

CJC-1295 (no DAC) acts on the GHRH receptor in the pituitary, priming it to release a large GH pulse when a GHRP (like Ipamorelin) triggers it. Together they create synergistic amplification — the combination produces significantly more GH than either peptide alone.

The "no DAC" version has a shorter half-life (~30 minutes) that maintains a natural pulsatile GH pattern, which is healthier and more effective than the continuous elevation caused by CJC-1295 with DAC.

**Combination Protocol**

This is best used in combination with Ipamorelin. The GHRH + GHRP combination is the gold standard for peptide-based growth hormone optimization — used by anti-aging clinics and performance athletes worldwide.`,
    benefits: [
      'Amplifies GH release synergistically with Ipamorelin',
      'Maintains natural pulsatile GH pattern (no DAC version)',
      'Accelerates fat loss and body recomposition',
      'Improves lean muscle mass retention and growth',
      'Enhances skin quality and collagen density',
      'Improves sleep quality and recovery',
      'Increased IGF-1 production for systemic anabolic effects',
      'Well-tolerated with minimal side effects',
    ],
    protocol: `**Standard Combination Protocol:**
- CJC-1295 (no DAC): 100-200mcg
- Pair with Ipamorelin: 200-300mcg
- Inject simultaneously, subcutaneous
- Timing: Before bed, 3+ hour fast
- Frequency: Daily or 5 days on / 2 days off

**Cycle Length:** 3-6 months minimum for meaningful body composition changes.`,
    synergies: ['ipamorelin', 'hgh-frag-176-191', 'bpc-157', 'tb-500'],
    seoTitle: 'CJC-1295 Peptide | GHRH Analog for GH Release & Body Recomp | BPC-157 Stack',
    deepDiveTitle: 'CJC-1295: The Growth Hormone Amplifier That Completes the Ipamorelin Stack',
    highlights: [
      { title: 'Synergistic Amplification', body: 'CJC-1295 + Ipamorelin produces 8-10x more GH than either peptide alone — the most powerful legal GH optimization available.' },
      { title: 'No DAC Advantage', body: 'The no-DAC version mirrors natural pulsatile GH release, avoiding the blunted response caused by continuous CJC-1295-DAC elevation.' },
      { title: 'IGF-1 Boost', body: 'Elevated GH drives increased liver IGF-1 production — the primary mediator of anabolic and anti-aging effects throughout the body.' },
      { title: 'Clinic Standard', body: 'The CJC-1295/Ipamorelin combination is the most commonly prescribed peptide protocol in anti-aging and regenerative medicine clinics.' },
    ],
  },
  {
    slug: 'hgh-frag-176-191',
    name: 'HGH Fragment 176-191',
    tagline: 'Targeted Fat Burning Peptide',
    price: 44.99,
    category: 'Body Composition',
    tags: ['fat loss', 'cutting', 'lipolysis', 'GH fragment', 'body composition'],
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'HGH Fragment 176-191 is the isolated fat-burning tail of human growth hormone — potent lipolysis without glucose elevation or anabolic effects.',
    fullDescription: `HGH Fragment 176-191 is a modified form of amino acids 176-191 of the HGH polypeptide — specifically the region responsible for fat metabolism. By isolating this fragment, researchers created a peptide that delivers the fat-burning benefits of HGH without the anabolic effects or blood sugar elevation.

**How It Works**

HGH Frag activates lipolysis (fat breakdown) by mimicking the way HGH stimulates fat cells. It blocks lipogenesis (new fat storage) and accelerates the breakdown of stored adipose tissue. Unlike full HGH, it does NOT raise IGF-1 levels and does NOT affect insulin sensitivity — making it safe for extended use.

Studies show it's 12.5x more effective at fat oxidation than full HGH while having none of the negative effects.

**Who It's For**

HGH Frag is ideal for anyone in a cutting phase who wants to preserve muscle while aggressively targeting body fat — particularly stubborn abdominal, hip, and thigh fat.`,
    benefits: [
      '12.5x more effective at fat oxidation than full HGH',
      'Does not raise blood sugar or insulin resistance',
      'Does not elevate IGF-1 — no unwanted anabolic effects',
      'Specifically targets stubborn adipose tissue',
      'Preserves lean muscle mass during caloric deficits',
      'Does not cause receptor desensitization',
      'Shown to improve bone mineral density in studies',
      'No negative feedback on natural GH production',
    ],
    protocol: `**Fat Loss Protocol:**
- Dose: 250-500mcg, 2-3x daily
- Timing: Upon waking (fasted), pre-workout, and before bed
- Method: Subcutaneous injection
- Diet: Works best with low-carb or fasted states
- Cycle: 8-16 weeks

**Stack with:** Ipamorelin/CJC-1295 for synergistic fat loss + muscle preservation.`,
    synergies: ['ipamorelin', 'cjc-1295', 'mots-c', 'bpc-157'],
    seoTitle: 'HGH Fragment 176-191 | Targeted Fat Loss Peptide | BPC-157 Stack Guide',
    deepDiveTitle: 'HGH Fragment 176-191: 12.5x More Effective Fat Burning Without GH Side Effects',
    highlights: [
      { title: 'Pure Fat Burning', body: 'Isolated fat-metabolizing region of HGH — all the lipolysis, none of the blood sugar elevation or IGF-1 increase.' },
      { title: 'Stubborn Fat', body: 'Particularly effective against visceral and subcutaneous abdominal fat — the hardest to lose through diet alone.' },
      { title: 'No Desensitization', body: 'Unlike full HGH, Fragment 176-191 does not downregulate GH receptors — extended protocols maintain effectiveness.' },
      { title: 'Muscle Preservation', body: 'During caloric restriction, HGH Frag maintains lean mass while accelerating fat oxidation — the holy grail of body recomposition.' },
    ],
  },
  {
    slug: 'selank',
    name: 'Selank',
    tagline: 'Anti-Anxiety Nootropic Peptide',
    price: 54.99,
    category: 'Cognitive',
    tags: ['anxiety', 'cognitive', 'nootropic', 'mood', 'focus', 'GABA'],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'Selank is a Russian nootropic peptide that eliminates anxiety, sharpens cognition, and improves memory — without sedation or addiction risk.',
    fullDescription: `Selank is a synthetic heptapeptide analog of the immunomodulatory peptide Tuftsin, developed by the Institute of Molecular Genetics of the Russian Academy of Sciences. It was registered as a drug in Russia for anxiety and asthenia treatment.

**How It Works**

Selank modulates the GABAergic system (same as benzodiazepines) but without the sedation, tolerance, or withdrawal issues. It also increases BDNF (brain-derived neurotrophic factor), upregulates serotonin and dopamine synthesis, and has neuroprotective antioxidant effects.

It's the only anxiolytic compound that simultaneously improves cognitive performance — most anti-anxiety drugs impair focus, but Selank sharpens it.

**Results**

Users report a calm, clear mental state within 20-30 minutes of intranasal or injectable use. Anxiety dissolves while mental clarity improves. Memory formation and recall improve measurably. The effect lasts 4-8 hours with no hangover or cognitive impairment.`,
    benefits: [
      'Eliminates anxiety without sedation or impairment',
      'Improves memory formation and recall',
      'Enhances focus and cognitive clarity simultaneously',
      'Increases BDNF — protects and grows neurons',
      'No tolerance, addiction, or withdrawal potential',
      'Anti-depressant effects via serotonin modulation',
      'Neuroprotective antioxidant properties',
      'Registered pharmaceutical in Russia — extensively researched',
    ],
    protocol: `**Standard Protocol:**
- Dose: 250-500mcg per use
- Method: Intranasal (nasal spray) or subcutaneous injection
- Frequency: 1-2x daily as needed, or 10-day cycles
- Duration: Use as needed; no dependency concerns

**Intranasal:** Most common — 1-2 sprays per nostril (250mcg/spray typical)`,
    synergies: ['semax', 'epithalon', 'ghk-cu', 'bpc-157'],
    seoTitle: 'Selank Peptide | Anti-Anxiety Nootropic for Focus & Mood | BPC-157 Stack',
    deepDiveTitle: 'Selank: The Russian Peptide That Kills Anxiety While Boosting Cognition',
    highlights: [
      { title: 'No Sedation', body: 'Unlike benzodiazepines and antihistamines, Selank eliminates anxiety while maintaining or improving mental clarity.' },
      { title: 'BDNF Boost', body: 'Increases brain-derived neurotrophic factor — the molecule that drives neuroplasticity and long-term brain health.' },
      { title: 'Zero Dependency', body: 'No tolerance development, no withdrawal effects — Selank can be used as needed without escalating dosage.' },
      { title: 'Dual Action', body: 'The only compound proven to simultaneously reduce anxiety AND improve cognitive performance — a combination no other class of drug achieves.' },
    ],
  },
  {
    slug: 'semax',
    name: 'Semax',
    tagline: 'Cognitive Enhancer & Neuroprotectant',
    price: 59.99,
    category: 'Cognitive',
    tags: ['cognitive', 'nootropic', 'BDNF', 'focus', 'neuroprotection', 'stroke'],
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'Semax is a synthetic ACTH analog that dramatically increases BDNF, boosts dopamine, and provides powerful neuroprotection — the ultimate brain performance peptide.',
    fullDescription: `Semax is a heptapeptide analog of ACTH (adrenocorticotropic hormone) developed in Russia. It's one of the most researched nootropic peptides, with human studies showing powerful cognitive enhancement and neuroprotective effects.

**How It Works**

Semax dramatically increases BDNF and NGF (nerve growth factor) — the two most important neurotrophins for brain health. It enhances dopaminergic and serotonergic neurotransmission, improving motivation, mood, and executive function. It also has documented neuroprotective effects, used clinically in Russia to treat stroke and TBI.

**Results**

Cognitive effects are noticeable within 30-60 minutes of intranasal administration: improved focus, faster information processing, enhanced verbal fluency, and better working memory. Long-term use (8-12 weeks) produces neuroplastic changes that persist beyond the protocol.`,
    benefits: [
      'Dramatically increases BDNF and NGF — drives neuroplasticity',
      'Enhances dopaminergic signaling for motivation and focus',
      'Improves working memory, information processing speed',
      'Neuroprotective — reduces neuronal damage from oxidative stress',
      'Used clinically for stroke and TBI recovery in Russia',
      'Antidepressant effects without SSRI-related side effects',
      'Improves attention and reduces cognitive fatigue',
      'No tolerance or dependency potential',
    ],
    protocol: `**Daily Protocol:**
- Dose: 200-600mcg (intranasal) or 100-300mcg (subcutaneous)
- Timing: Morning for focus/productivity; daily for neuroprotection
- Frequency: Daily or as needed
- Cycle: 10-14 days on, 7 days off for neurotrophic effects

**Stack with Selank** for combined anxiety reduction + cognitive enhancement.`,
    synergies: ['selank', 'epithalon', 'ghk-cu', 'dihexa'],
    seoTitle: 'Semax Peptide | #1 Nootropic for BDNF, Focus & Neuroprotection | BPC-157 Stack',
    deepDiveTitle: 'Semax: The BDNF-Boosting Russian Nootropic That Outperforms Any Smart Drug',
    highlights: [
      { title: 'BDNF Surge', body: 'Semax produces the largest BDNF increase of any known peptide — BDNF is the primary driver of neuroplasticity and learning.' },
      { title: 'Clinical Track Record', body: 'Used in Russian hospitals for stroke and TBI recovery — one of the few nootropics with actual clinical applications.' },
      { title: 'Dopamine Enhancement', body: 'Increases dopamine receptor sensitivity and synthesis — improving motivation, drive, and executive function without stimulant effects.' },
      { title: 'Stacks With Selank', body: 'Semax + Selank is the gold standard cognitive peptide stack — combining BDNF-driven enhancement with anxiolysis for peak mental performance.' },
    ],
  },
  {
    slug: 'kpv',
    name: 'KPV',
    tagline: 'Potent Anti-Inflammatory Tripeptide',
    price: 39.99,
    category: 'Healing',
    tags: ['anti-inflammatory', 'gut', 'immune', 'skin', 'IBD', 'Crohn\'s'],
    image: 'https://images.unsplash.com/photo-1579154341184-8c8c0cf7b1e4?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'KPV is a potent anti-inflammatory tripeptide derived from alpha-MSH that targets gut inflammation, skin conditions, and systemic inflammatory disorders.',
    fullDescription: `KPV (Lys-Pro-Val) is a C-terminal tripeptide fragment of alpha-melanocyte-stimulating hormone (alpha-MSH). It carries the anti-inflammatory activity of its parent hormone but in a smaller, more bioavailable form.

**How It Works**

KPV directly penetrates cell membranes and inhibits pro-inflammatory cytokines (TNF-α, IL-6, IL-8) at the nuclear level. It suppresses NF-κB — the master inflammatory switch — without suppressing immune function. This makes it fundamentally different from steroids or NSAIDs.

**Key Applications**

- **IBD/Crohn's/Colitis**: Oral KPV has shown remarkable results in reducing gut inflammation in mouse models of Crohn's and ulcerative colitis
- **Skin inflammation**: Topical KPV reduces psoriasis, eczema, and dermatitis
- **Systemic inflammation**: Injectable KPV addresses whole-body inflammatory burden
- **Gut-Brain axis**: Reduces neuroinflammation linked to depression and cognitive decline`,
    benefits: [
      'Directly inhibits NF-κB — the master inflammatory pathway',
      'Reduces TNF-α, IL-6, and IL-8 without immune suppression',
      'Proven effective for IBD, Crohn\'s, and ulcerative colitis',
      'Topically effective for psoriasis, eczema, and dermatitis',
      'Penetrates cell membranes — works at nuclear level',
      'Reduces neuroinflammation linked to depression and brain fog',
      'Compatible with BPC-157 for comprehensive gut healing',
      'Oral and injectable bioavailability',
    ],
    protocol: `**Gut Protocol:**
- Dose: 500mcg-2mg orally (capsule or solution)
- Timing: Before meals on empty stomach
- Frequency: 2-3x daily
- Cycle: 4-8 weeks

**Injectable Protocol:**
- 250-500mcg subcutaneous, 1-2x daily
- Highly effective for systemic inflammation

**Stack with BPC-157** for comprehensive gut healing.`,
    synergies: ['bpc-157', 'tb-500', 'ghk-cu', 'selank'],
    seoTitle: 'KPV Peptide | Anti-Inflammatory for Gut, IBD & Skin | BPC-157 Stack Guide',
    deepDiveTitle: 'KPV: The Anti-Inflammatory Tripeptide That Heals the Gut at the Nuclear Level',
    highlights: [
      { title: 'Nuclear Action', body: 'KPV penetrates cell membranes and acts directly at the nuclear level — more potent than surface-level anti-inflammatories.' },
      { title: 'Gut-Specific Power', body: 'Oral KPV reaches the intestinal wall directly — ideal for IBD, Crohn\'s, and leaky gut when combined with BPC-157.' },
      { title: 'No Immune Suppression', body: 'Unlike steroids, KPV selectively reduces harmful inflammation without suppressing immune function or causing immunocompromise.' },
      { title: 'Skin Results', body: 'Topical KPV rapidly reduces redness, scaling, and itching in inflammatory skin conditions — visible results within 2 weeks.' },
    ],
  },
  {
    slug: 'ss-31',
    name: 'SS-31 (Elamipretide)',
    tagline: 'Mitochondrial Repair Peptide',
    price: 89.99,
    category: 'Anti-Aging',
    tags: ['mitochondria', 'anti-aging', 'energy', 'longevity', 'heart', 'cardioprotection'],
    image: 'https://images.unsplash.com/photo-1544991875-5dc1b05f1572?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'SS-31 (Elamipretide) targets and repairs mitochondrial inner membranes — restoring cellular energy production that declines with age and disease.',
    fullDescription: `SS-31 (also known as Elamipretide or MTP-131) is a mitochondria-targeted peptide that concentrates in the inner mitochondrial membrane — the site of ATP production. It's one of the most exciting longevity peptides because it directly addresses mitochondrial dysfunction, which underlies virtually every aging-related disease.

**How It Works**

SS-31 selectively binds to cardiolipin — a unique phospholipid found only in the inner mitochondrial membrane. Cardiolipin integrity is essential for efficient electron transport and ATP synthesis. With age, cardiolipin oxidizes and the mitochondrial structure collapses, leading to reduced energy production and increased reactive oxygen species (ROS).

SS-31 stabilizes cardiolipin, restoring electron transport chain function and dramatically increasing ATP output.

**Applications**

Heart disease, heart failure, and cardiac ischemia are the primary clinical applications — SS-31 has reached Phase II and III clinical trials for heart failure. Anti-aging enthusiasts use it to restore cellular energy and combat age-related mitochondrial decline.`,
    benefits: [
      'Directly targets and repairs the inner mitochondrial membrane',
      'Restores ATP production in aged or damaged cells',
      'Reduces mitochondrial ROS (oxidative stress)',
      'Phase II/III clinical trials for heart failure — strongest evidence base',
      'Improves exercise capacity and physical performance',
      'Protects against ischemia-reperfusion injury',
      'Reduces inflammation through mitochondrial pathway',
      'Reverses age-related mitochondrial structural changes',
    ],
    protocol: `**Standard Protocol:**
- Dose: 1-5mg per day
- Method: Subcutaneous injection
- Frequency: Daily
- Cycle: 8-12 weeks, or ongoing at maintenance dose

**Cardioprotective use:** Clinical trials use 0.05mg/kg infusion, but subcutaneous at 1-2mg daily shows benefit in research contexts.`,
    synergies: ['epithalon', 'ghk-cu', 'mots-c', 'ipamorelin'],
    seoTitle: 'SS-31 Elamipretide | Mitochondrial Repair for Energy & Anti-Aging | BPC-157 Stack',
    deepDiveTitle: 'SS-31: The Mitochondrial Peptide That Restores Cellular Energy and Reverses Aging',
    highlights: [
      { title: 'Inner Membrane Targeting', body: 'SS-31 is one of the few compounds that specifically concentrates in the inner mitochondrial membrane — the most critical site for energy production.' },
      { title: 'Clinical Trial Stage', body: 'SS-31 has advanced to Phase II and III clinical trials for heart failure — extraordinary evidence for a longevity peptide.' },
      { title: 'Cardiolipin Stabilization', body: 'Protects and restores cardiolipin — the phospholipid that anchors the electron transport chain. Cardiolipin degradation is a primary cause of mitochondrial aging.' },
      { title: 'Energy Restoration', body: 'Users report noticeable increases in physical energy and exercise capacity — the direct result of restored ATP output in muscle cells.' },
    ],
  },
  {
    slug: 'mots-c',
    name: 'MOTS-c',
    tagline: 'Metabolic Regulator & Longevity Signal',
    price: 74.99,
    category: 'Body Composition',
    tags: ['metabolism', 'fat loss', 'insulin', 'longevity', 'mitochondria', 'AMPK'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    affiliateUrl: AFFILIATE,
    shortDescription: 'MOTS-c is a mitochondrial-derived peptide that acts as a metabolic master regulator — activating AMPK, improving insulin sensitivity, and fighting age-related obesity.',
    fullDescription: `MOTS-c is encoded in the mitochondrial genome — one of only a handful of peptides with this distinction. It circulates as a hormone, traveling from mitochondria to the nucleus where it regulates hundreds of metabolic genes. It's described as a "mitochondrial hormone" and represents a new category of exercise-mimetic compounds.

**How It Works**

MOTS-c activates AMPK (AMP-activated protein kinase) — the cellular energy sensor that switches cells from fat storage to fat burning mode. It improves insulin sensitivity, reduces adipogenesis, and mimics many of the metabolic benefits of exercise at the cellular level.

Higher MOTS-c levels are associated with longevity across multiple species, and research shows levels decline significantly with age.

**Results**

Users report improved body composition, particularly reduced visceral fat, improved fasting glucose, and increased physical endurance. Studies show exercise raises MOTS-c levels, and exogenous MOTS-c amplifies the metabolic benefits of exercise.`,
    benefits: [
      'Activates AMPK — switches cells to fat-burning mode',
      'Improves insulin sensitivity and glucose regulation',
      'Reduces age-related weight gain and metabolic dysfunction',
      'Exercise mimetic — produces metabolic benefits of physical activity',
      'Mitochondrial longevity signal — higher levels = longer lifespan in studies',
      'Reduces adipogenesis (new fat cell formation)',
      'Improves physical endurance and fatigue resistance',
      'Anti-inflammatory via metabolic pathway',
    ],
    protocol: `**Metabolic Protocol:**
- Dose: 5-10mg per week
- Method: Subcutaneous injection
- Frequency: 2-3 injections per week
- Timing: Pre-exercise for synergistic effect
- Cycle: 8-16 weeks

**Stack with HGH Fragment 176-191** for aggressive fat loss.`,
    synergies: ['hgh-frag-176-191', 'ipamorelin', 'ss-31', 'bpc-157'],
    seoTitle: 'MOTS-c Peptide | Metabolic Regulator for Fat Loss & Longevity | BPC-157 Stack',
    deepDiveTitle: 'MOTS-c: The Mitochondrial Hormone That Makes Your Body Behave Like It\'s 25',
    highlights: [
      { title: 'Mitochondrial Hormone', body: 'MOTS-c is encoded in the mitochondrial genome — a new class of peptide that acts as a systemic metabolic regulator.' },
      { title: 'AMPK Activation', body: 'The same pathway activated by exercise and caloric restriction — MOTS-c flips the metabolic switch from storage to burning mode.' },
      { title: 'Exercise Amplifier', body: 'MOTS-c levels rise with exercise, and exogenous MOTS-c amplifies metabolic training adaptations — making every workout more effective.' },
      { title: 'Longevity Marker', body: 'Higher MOTS-c levels correlate with longer lifespan in animal studies — one of the most exciting longevity-associated peptides discovered.' },
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
