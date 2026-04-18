import type { SectionCopy } from './product-sections';

export type StackSectionKey = 'overview' | 'benefits' | 'protocol' | 'peptides';
export type StackCopyMap = Partial<Record<StackSectionKey | 'cta', SectionCopy>>;

export interface Stack {
  id: string;
  name: string;
  tagline: string;
  goal: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  peptides: string[];
  protocol: string;
  description: string;
  benefits: string[];
  seoTitle: string;
  image: string;
  sectionPlan?: StackSectionKey[];
  sectionCopy?: StackCopyMap;
}

const AFFILIATE = 'https://phiogen.is/?ref=PEPS';

export const stacks: Stack[] = [
  {
    id: 'ultimate-healing',
    name: 'Ultimate Healing Stack',
    tagline: 'BPC-157 + TB-500: The Most Powerful Repair Protocol',
    goal: 'Injury Healing & Recovery',
    difficulty: 'Intermediate',
    duration: '8-12 weeks',
    peptides: ['bpc-157', 'tb-500'],
    protocol: `**Week 1-6 (Loading Phase):**
- BPC-157: 500mcg once daily (subcutaneous or oral)
- TB-500: 2mg twice per week (subcutaneous)

**Week 7-12 (Maintenance Phase):**
- BPC-157: 250-500mcg daily
- TB-500: 2mg once per week

**Timing:** BPC-157 can be taken any time. TB-500 can be injected any time of day.
**For acute injuries:** Begin immediately at loading doses for fastest results.`,
    description: `The BPC-157 + TB-500 stack is the most researched and most effective peptide combination for healing. BPC-157 provides targeted local healing — stimulating growth hormone receptors in fibroblasts, improving blood flow, and repairing gut lining. TB-500 provides systemic, body-wide repair — mobilizing stem cells and rebuilding tissue throughout the body.

Together they cover every mechanism of injury repair:
- BPC-157 handles the local, targeted healing
- TB-500 handles the systemic, whole-body repair
- Combined, they reduce recovery time by 50-70% compared to natural healing

This is the gold standard stack for athletes, anyone recovering from surgery, or anyone with chronic injuries that haven't responded to conventional treatment.`,
    benefits: [
      'Heals tendon, ligament, and muscle injuries 2-3x faster',
      'Repairs gut lining and resolves IBD/leaky gut',
      'Reduces chronic inflammation and scar tissue',
      'Mobilizes stem cells to injury sites',
      'Dramatically improves flexibility and range of motion',
      'Zero hormonal side effects',
    ],
    seoTitle: 'BPC-157 + TB-500 Stack | Ultimate Healing Protocol | BPC-157 Stack Guide',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    sectionPlan: ['overview', 'benefits', 'peptides', 'protocol'],
    sectionCopy: {
      overview: { eyebrow: 'The case for this pairing', heading: 'Why BPC-157 + TB-500 Became the Default Injury Stack' },
      benefits: { eyebrow: 'Cycle outcomes', heading: 'What a Full Healing Cycle Actually Changes' },
      protocol: { eyebrow: 'Schedule', heading: 'Loading-to-Maintenance, Week by Week' },
      peptides: { eyebrow: 'The components', heading: 'The Two Peptides Doing the Work' },
      cta: { heading: 'Source Both Peptides and Start This Week' },
    },
  },
  {
    id: 'anti-aging-longevity',
    name: 'Anti-Aging Longevity Protocol',
    tagline: 'Epithalon + GHK-Cu + SS-31: Reverse Biological Age',
    goal: 'Anti-Aging & Longevity',
    difficulty: 'Advanced',
    duration: '12-20 weeks',
    peptides: ['epithalon', 'ghk-cu', 'ss-31'],
    protocol: `**Epithalon (2x per year, 10-20 day cycles):**
- 5-10mg subcutaneous daily for 10-20 consecutive days
- Run in spring and fall

**GHK-Cu (daily):**
- 1-2mg subcutaneous, evening
- 8-12 week cycles

**SS-31 (daily):**
- 1-3mg subcutaneous, morning
- Ongoing at maintenance dose or 8-12 week cycles`,
    description: `The Anti-Aging Longevity Protocol targets the three most fundamental mechanisms of biological aging: telomere shortening (Epithalon), cellular cleanup and gene expression (GHK-Cu), and mitochondrial decline (SS-31).

This three-peptide stack was designed to address aging at the deepest level — not just the symptoms, but the underlying cellular and molecular causes.

**Epithalon** activates telomerase to rebuild telomeres and has shown 28% mortality reduction in 12-year human trials. **GHK-Cu** reverses the expression of 31% of aged genes and stimulates the body's cellular cleanup machinery. **SS-31** repairs the mitochondrial inner membrane and restores ATP production that declines with age.

This is the most comprehensive anti-aging peptide protocol available outside of clinical trials.`,
    benefits: [
      'Telomere lengthening via telomerase activation (Epithalon)',
      'Reverse 31% of aged gene expression (GHK-Cu)',
      'Restore mitochondrial energy production (SS-31)',
      'Dramatically improve skin texture, firmness, and thickness',
      'Normalize sleep and circadian rhythm',
      'Reduce all-cause mortality risk markers',
    ],
    seoTitle: 'Anti-Aging Peptide Stack | Epithalon + GHK-Cu + SS-31 Protocol | BPC-157 Stack',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80',
    sectionPlan: ['overview', 'protocol', 'benefits', 'peptides'],
    sectionCopy: {
      overview: { eyebrow: 'First principles', heading: 'Targeting the Three Roots of Biological Aging' },
      benefits: { eyebrow: 'What users track', heading: 'The Longevity Outcomes Worth Measuring' },
      protocol: { eyebrow: 'Multi-compound rhythm', heading: 'Cycling Epithalon, GHK-Cu, and SS-31 Without Overlap' },
      peptides: { eyebrow: 'Inside the trio', heading: 'The Three Compounds That Make This Stack Work' },
      cta: { heading: 'Start the 20-Week Longevity Program' },
    },
  },
  {
    id: 'body-recomp',
    name: 'Body Recomposition Stack',
    tagline: 'Ipamorelin + CJC-1295 + HGH Frag: Burn Fat, Build Muscle',
    goal: 'Body Composition & Fat Loss',
    difficulty: 'Intermediate',
    duration: '3-6 months',
    peptides: ['cjc1295-ipamorelin', 'igf-1lr3', 'mots-c'],
    protocol: `**Morning (fasted):**
- HGH Fragment 176-191: 250-500mcg subcutaneous

**Pre-Workout (optional):**
- HGH Fragment 176-191: 250mcg subcutaneous

**Before Bed (3+ hour fast):**
- Ipamorelin: 200-300mcg subcutaneous
- CJC-1295 (no DAC): 100-200mcg subcutaneous
- Inject simultaneously

**Cycle:** 3-6 months continuous; reassess and cycle off 4-6 weeks if desired.`,
    description: `The Body Recomposition Stack combines three peptides that attack fat loss and muscle growth through three distinct mechanisms.

**Ipamorelin + CJC-1295** creates synergistic GH release — producing 8-10x more growth hormone than either peptide alone. This nocturnal GH pulse accelerates fat oxidation, preserves and builds lean muscle, and improves recovery from training.

**HGH Fragment 176-191** is the targeted fat-burning component — 12.5x more effective at lipolysis than full HGH, without raising blood sugar. It specifically targets stubborn visceral and subcutaneous fat.

Combined, this stack is the most effective non-hormonal approach to body recomposition available — comparable to low-dose HGH therapy without the costs or risks.`,
    benefits: [
      'Rapid fat loss, especially visceral and abdominal fat',
      'Lean muscle preservation and growth',
      'Dramatically improved sleep quality',
      'Accelerated workout recovery',
      'Improved skin quality and collagen production',
      'No testosterone suppression or hormonal disruption',
    ],
    seoTitle: 'Body Recomp Peptide Stack | Ipamorelin + CJC-1295 + HGH Frag | BPC-157 Stack',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    sectionPlan: ['benefits', 'overview', 'protocol', 'peptides'],
    sectionCopy: {
      overview: { eyebrow: 'Why this combo', heading: 'Why Three Peptides Outperform Solo Recomp Attempts' },
      benefits: { eyebrow: 'The outcome spread', heading: 'Fat Loss, Muscle Retention, and the Signals That Matter' },
      protocol: { eyebrow: 'Daily rhythm', heading: 'Morning, Pre-Workout, and Pre-Bed — the Full Schedule' },
      peptides: { eyebrow: 'Meet the compounds', heading: 'The Three Peptides Powering the Recomp Stack' },
      cta: { heading: 'Pick Up the Full Recomp Stack' },
    },
  },
  {
    id: 'cognitive-stack',
    name: 'Cognitive Enhancement Stack',
    tagline: 'Semax + Selank: Peak Mental Performance',
    goal: 'Cognitive Performance & Mental Health',
    difficulty: 'Beginner',
    duration: 'Ongoing / 10-day cycles',
    peptides: ['nad', 'ghk-cu', 'epithalon'],
    protocol: `**Morning (Semax):**
- 200-400mcg intranasal (or 100-200mcg subcutaneous)
- On empty stomach for best absorption

**As Needed (Selank):**
- 250-500mcg intranasal (or 200mcg subcutaneous)
- Use when anxiety is present or before high-stakes tasks

**Cycle Protocol:**
- 10 days on, 5-7 days off for neuroplastic effects
- Or use as needed without cycling concern (both are non-addictive)`,
    description: `The Semax + Selank cognitive stack is the most popular nootropic peptide combination — developed in Russia and used by researchers, executives, and high-performers seeking a cognitive edge without stimulants or pharmaceuticals.

**Semax** dramatically increases BDNF (brain-derived neurotrophic factor) — the primary driver of neuroplasticity, learning, and memory formation. It enhances dopaminergic signaling for motivation and executive function.

**Selank** eliminates anxiety through GABA modulation while simultaneously improving cognition — the only anxiolytic that improves rather than impairs cognitive performance.

Together, this stack creates a state of calm, focused mental clarity with enhanced memory formation and recall — ideal for demanding cognitive work, creative tasks, or social high-stakes situations.`,
    benefits: [
      'Eliminate anxiety while simultaneously boosting cognition',
      'Dramatically increase BDNF for neuroplasticity',
      'Improve working memory and information processing',
      'Enhance motivation and executive function via dopamine',
      'No addiction potential or withdrawal',
      'Neuroprotective effects for long-term brain health',
    ],
    seoTitle: 'Cognitive Peptide Stack | Semax + Selank for Focus & Anxiety | BPC-157 Stack',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    sectionPlan: ['protocol', 'overview', 'peptides', 'benefits'],
    sectionCopy: {
      overview: { eyebrow: 'Origin story', heading: 'The Russian Nootropic Combo That Broke Mainstream' },
      benefits: { eyebrow: 'Two-week window', heading: 'What Users Notice in the First Two Weeks' },
      protocol: { eyebrow: 'Dose across the day', heading: 'Dosing Semax and Selank Morning to Evening' },
      peptides: { eyebrow: 'Peak-focus components', heading: 'The Peptides Powering Calm, Focused Output' },
      cta: { heading: 'Assemble the Cognitive Stack' },
    },
  },
  {
    id: 'athlete-performance',
    name: 'Athlete Performance Stack',
    tagline: 'BPC-157 + TB-500 + Ipamorelin: Perform, Recover, Dominate',
    goal: 'Athletic Performance & Recovery',
    difficulty: 'Advanced',
    duration: '8-16 weeks',
    peptides: ['bpc-157', 'tb-500', 'cjc1295-ipamorelin'],
    protocol: `**Morning:**
- BPC-157: 250mcg subcutaneous or oral

**Pre-Workout (optional):**
- BPC-157: 250mcg if dealing with specific injury

**Before Bed:**
- Ipamorelin: 200-300mcg subcutaneous
- CJC-1295 (no DAC): 100-200mcg subcutaneous

**Twice Weekly:**
- TB-500: 2mg subcutaneous (loading phase weeks 1-6)
- TB-500: 2mg subcutaneous (maintenance, weekly, weeks 7+)`,
    description: `The Athlete Performance Stack is designed for serious athletes who want to push harder, recover faster, and stay injury-free. It combines the healing and repair properties of BPC-157 and TB-500 with the anabolic and recovery-enhancing effects of Ipamorelin + CJC-1295.

This stack allows athletes to train through minor injuries, recover from hard training sessions faster, and maintain peak performance over longer seasons. Many professional athletes (especially in non-tested sports) use this exact combination.

The GH component (Ipamorelin/CJC-1295) drives overnight muscle repair and recovery, while BPC-157 and TB-500 address any inflammation or tissue damage from training loads.`,
    benefits: [
      'Train through minor injuries without setbacks',
      'Recover from hard sessions 2-3x faster',
      'Build lean muscle while staying injury-free',
      'Maximize overnight recovery via GH optimization',
      'Reduce career-threatening injury risk',
      'Maintain peak performance through full seasons',
    ],
    seoTitle: 'Athlete Performance Peptide Stack | BPC-157 + TB-500 + Ipamorelin | BPC-157 Stack',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80',
    sectionPlan: ['peptides', 'overview', 'benefits', 'protocol'],
    sectionCopy: {
      overview: { eyebrow: 'Locker-room reality', heading: 'Why Pros Quietly Run This Three-Peptide Protocol' },
      benefits: { eyebrow: 'Training output', heading: 'Recovery, Load Tolerance, and Season-Long Availability' },
      protocol: { eyebrow: 'Timing grid', heading: 'Morning, Pre-Workout, Pre-Bed, and the Twice-Weekly Injection' },
      peptides: { eyebrow: 'What is in the kit', heading: 'The Three Compounds Athletes Actually Stack' },
      cta: { heading: 'Source the Athlete Stack' },
    },
  },
];

export function getStackById(id: string): Stack | undefined {
  return stacks.find((s) => s.id === id);
}
