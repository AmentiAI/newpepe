import type { Product } from './products';

export type SectionKey = 'highlights' | 'science' | 'widget' | 'benefits' | 'protocol';
export type TailKey = 'related' | 'faq';

export interface SectionCopy {
  eyebrow?: string;
  heading: string;
  intro?: string;
}

export type SectionCopyMap = Partial<Record<SectionKey | TailKey, SectionCopy>>;

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const MAIN_PLANS: SectionKey[][] = [
  ['highlights', 'science', 'widget', 'benefits', 'protocol'],
  ['science', 'highlights', 'benefits', 'widget', 'protocol'],
  ['protocol', 'science', 'benefits', 'highlights', 'widget'],
  ['benefits', 'protocol', 'science', 'widget', 'highlights'],
  ['widget', 'highlights', 'protocol', 'science', 'benefits'],
  ['science', 'benefits', 'highlights', 'protocol', 'widget'],
  ['highlights', 'protocol', 'benefits', 'science', 'widget'],
  ['benefits', 'highlights', 'widget', 'science', 'protocol'],
  ['science', 'widget', 'highlights', 'benefits', 'protocol'],
  ['protocol', 'highlights', 'widget', 'benefits', 'science'],
  ['widget', 'benefits', 'science', 'highlights', 'protocol'],
  ['highlights', 'benefits', 'protocol', 'widget', 'science'],
];

const TAIL_PLANS: TailKey[][] = [
  ['related', 'faq'],
  ['faq', 'related'],
];

const scienceHeadings: Array<(p: Product) => string> = [
  (p) => `How ${p.name} Works at the Molecular Level`,
  (p) => `Mechanism of Action: ${p.name}`,
  (p) => `The Biology Behind ${p.name}`,
  (p) => `What the Research Says About ${p.name}`,
  (p) => `Pathways Activated by ${p.name}`,
  (p) => `Inside the ${p.name} Research File`,
  (p) => `${p.name}: The Science, Distilled`,
  (p) => `Peer-Reviewed Evidence for ${p.name}`,
  (p) => `Clinical Signal Behind ${p.name}`,
  (p) => `${p.name} in the Literature`,
  (p) => `Decoding ${p.name}`,
  (p) => `Why ${p.name} Does What It Does`,
];

const scienceEyebrows = [
  'Published research',
  'Mechanism breakdown',
  'Under the hood',
  'What the studies show',
  'Molecular biology',
  'From the lab',
  'Evidence review',
  'Deep science',
];

const benefitsHeadings: Array<(p: Product) => string> = [
  (p) => `The Full Effect Profile of ${p.name}`,
  (p) => `Every Outcome ${p.name} Delivers`,
  (p) => `What to Expect From ${p.name}`,
  (p) => `${p.name}: Catalog of Effects`,
  (p) => `The Total ${p.name} Benefit List`,
  (p) => `Results ${p.name} Users Report`,
  (p) => `${p.name} Outcomes, Summarized`,
  (p) => `Physiological Effects of ${p.name}`,
  (p) => `Everything ${p.name} Can Do For You`,
  (p) => `The ${p.name} Results Matrix`,
  (p) => `Downstream Effects of ${p.name}`,
  (p) => `Why People Run ${p.name}`,
];

const benefitsEyebrows = [
  'Full effect list',
  'Outcome catalog',
  'Result spectrum',
  'Beyond the hero claim',
  'Everything in the box',
  'Total benefit map',
  'What you actually get',
  'User-reported results',
];

const protocolHeadings: Array<(p: Product) => string> = [
  (p) => `Running a ${p.name} Cycle`,
  (p) => `${p.name}: Dosing, Timing, Cycle Length`,
  (p) => `The ${p.name} Administration Guide`,
  (p) => `How to Structure a ${p.name} Protocol`,
  (p) => `${p.name} Dose Schedule`,
  (p) => `Your ${p.name} Blueprint`,
  (p) => `Reconstituting and Dosing ${p.name}`,
  (p) => `${p.name}: Week-by-Week Protocol`,
  (p) => `Putting ${p.name} Into Practice`,
  (p) => `The Practical ${p.name} Guide`,
  (p) => `Cycling ${p.name} Safely`,
  (p) => `${p.name}: From Vial to Results`,
];

const protocolEyebrows = [
  'Dose schedule',
  'Administration guide',
  'Week-by-week',
  'Cycle structure',
  'Practical application',
  'From vial to results',
  'Timing and dose',
  'Running the protocol',
];

const relatedHeadings: Array<(p: Product) => string> = [
  (p) => `Pair ${p.name} With These`,
  (p) => `Build a Stack Around ${p.name}`,
  (p) => `${p.name}: Best Partner Peptides`,
  (p) => `What Goes Well With ${p.name}`,
  (p) => `Expand Beyond ${p.name}`,
  (p) => `Amplify ${p.name} With These`,
  (p) => `${p.name} Synergies`,
  (p) => `The ${p.name} Complement Set`,
  (p) => `Complete Your ${p.name} Rotation`,
  (p) => `Stack-Builders for ${p.name}`,
];

const faqHeadings: Array<(p: Product) => string> = [
  (p) => `Questions People Ask About ${p.name}`,
  (p) => `${p.name}: Answered`,
  (p) => `What Buyers Want to Know About ${p.name}`,
  (p) => `${p.name} — Frequently Asked`,
  (p) => `Clearing Up ${p.name}`,
  (p) => `${p.name} FAQ`,
  (p) => `Common ${p.name} Concerns, Answered`,
  (p) => `The ${p.name} Clarifier`,
  (p) => `What Readers Ask About ${p.name}`,
  (p) => `${p.name}: The Honest Q&A`,
];

function pick<T>(pool: T[], seed: string): T {
  return pool[hash(seed) % pool.length];
}

// Page-shape classifier — different physical-product types deserve
// different H1 framing and lead sections. Avoids the "name-swap trap" where
// a 5mg vial and a 30mg vial use identical H1 just with the size swapped.
export type PageShape =
  | 'capsule'   // oral capsule format
  | 'nasal'     // nasal spray
  | 'liquid'    // pre-mixed liquid
  | 'blend'     // multi-peptide blend in one vial
  | 'solvent'   // bacteriostatic water and similar reconstitution supplies
  | 'glp'       // GLP-1/2/3 weight-loss agonists (their own buying intent)
  | 'sarm'      // SARMs sub-category
  | 'syringe'   // injection supplies
  | 'standard'; // default lyophilized peptide vial

export function inferPageShape(p: Product): PageShape {
  const slug = p.slug.toLowerCase();
  const cat = p.category;
  const tags = (p.tags || []).map((t) => t.toLowerCase());

  if (slug.includes('capsules') || slug.includes('-caps')) return 'capsule';
  if (slug.includes('nasal')) return 'nasal';
  if (slug.includes('blend') || slug.includes('-cagri') || slug.includes('cjc-ghrp') || tags.includes('blend')) return 'blend';
  if (slug.includes('liquid')) return 'liquid';
  if (slug.includes('water') || slug.includes('syringe') || cat === 'Supplies') {
    if (slug.includes('syringe')) return 'syringe';
    if (slug.includes('water')) return 'solvent';
    return 'standard';
  }
  if (cat === 'Weight Loss' || tags.includes('glp-1') || tags.includes('glp-2') || tags.includes('glp-3') || tags.includes('semaglutide') || tags.includes('tirzepatide') || tags.includes('retatrutide')) return 'glp';
  if (slug.startsWith('mk-') || slug.startsWith('lgd-') || slug.startsWith('rad-') || slug.startsWith('yk-') || slug.startsWith('sr') || slug.includes('cardarine') || slug.includes('ostarine') || slug.includes('stenabolic')) return 'sarm';
  return 'standard';
}

const H1_FORMULAS: Record<PageShape, (name: string) => string> = {
  capsule:  (n) => `Buy ${n} Capsules — Oral Format, COA Verified`,
  nasal:    (n) => `Buy ${n} Nasal Spray — COA Verified`,
  liquid:   (n) => `Buy ${n} Liquid — Pre-Mixed, Ready to Dose`,
  blend:    (n) => `Buy ${n} Blend — Multi-Peptide Vial`,
  solvent:  (n) => `Buy ${n} — Sterile Reconstitution Solvent`,
  glp:      (n) => `Buy ${n} Online — GLP Weight-Loss Peptide`,
  sarm:     (n) => `Buy ${n} — Research SARM, COA Verified`,
  syringe:  (n) => `Buy ${n} — Injection Supplies, US Domestic`,
  standard: (n) => `Buy ${n} Online — COA Verified Research Peptide`,
};

export function getProductH1(p: Product): string {
  const shape = inferPageShape(p);
  return H1_FORMULAS[shape](p.name);
}

export function getMainPlan(product: Product): SectionKey[] {
  return product.sectionPlan ?? MAIN_PLANS[hash(product.slug + ':main') % MAIN_PLANS.length];
}

export function getTailPlan(product: Product): TailKey[] {
  return product.tailPlan ?? TAIL_PLANS[hash(product.slug + ':tail') % TAIL_PLANS.length];
}

export function getSectionCopy(product: Product, key: SectionKey | TailKey): SectionCopy {
  const override = product.sectionCopy?.[key];
  if (override) return override;

  switch (key) {
    case 'highlights':
      return { heading: product.deepDiveTitle };
    case 'science':
      return {
        eyebrow: pick(scienceEyebrows, product.slug + ':science-eb'),
        heading: pick(scienceHeadings, product.slug + ':science')(product),
      };
    case 'benefits':
      return {
        eyebrow: pick(benefitsEyebrows, product.slug + ':benefits-eb'),
        heading: pick(benefitsHeadings, product.slug + ':benefits')(product),
      };
    case 'protocol':
      return {
        eyebrow: pick(protocolEyebrows, product.slug + ':protocol-eb'),
        heading: pick(protocolHeadings, product.slug + ':protocol')(product),
      };
    case 'related':
      return { heading: pick(relatedHeadings, product.slug + ':related')(product) };
    case 'faq':
      return { heading: pick(faqHeadings, product.slug + ':faq')(product) };
    case 'widget':
      return { heading: '' };
  }
}
