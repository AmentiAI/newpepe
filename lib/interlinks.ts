export interface InterLink {
  path: string;
  anchor: string;
  description: string;
  keywords: string[];
}

// Registry — every linkable page with its keyword set and preferred anchor text.
// The anchor is how OTHER pages will link TO this page.
const registry: InterLink[] = [
  // ── Category pages ────────────────────────────────────────────────────────
  {
    path: '/healing',
    anchor: 'healing peptide protocols',
    description: 'BPC-157 & TB-500 injury recovery guide',
    keywords: [
      'bpc-157', 'tb-500', 'healing', 'injury', 'tendon', 'ligament',
      'gut', 'recovery', 'repair', 'collagen', 'inflammation', 'kpv',
    ],
  },
  {
    path: '/anti-aging',
    anchor: 'anti-aging peptide protocols',
    description: 'Epithalon, GHK-Cu & longevity peptides',
    keywords: [
      'anti-aging', 'longevity', 'epithalon', 'ghk-cu', 'ss-31', 'nad',
      'telomere', 'mitochondria', 'skin', 'aging', 'snap-8', 'gene expression',
    ],
  },
  {
    path: '/body-composition',
    anchor: 'body composition & fat loss peptides',
    description: 'CJC-1295, Ipamorelin & GLP peptides',
    keywords: [
      'body-composition', 'fat loss', 'muscle', 'ipamorelin', 'cjc-1295',
      'igf-1', 'semaglutide', 'tirzepatide', 'retatrutide', 'gh',
      'growth hormone', 'recomp', 'weight loss', 'glp',
    ],
  },
  {
    path: '/guide',
    anchor: 'beginner peptide guide',
    description: 'How to reconstitute, dose & inject peptides',
    keywords: [
      'beginner', 'guide', 'how to', 'dosing', 'reconstitute', 'inject',
      'protocol', 'safety', 'insulin syringe', 'bacteriostatic water', 'cycle',
    ],
  },
  {
    path: '/faq',
    anchor: 'BPC-157 FAQ & common questions',
    description: 'Answers to dosing, safety & stacking questions',
    keywords: [
      'faq', 'questions', 'bpc-157', 'dosing', 'safety', 'oral',
      'injectable', 'stacking', 'beginner', 'protocol', 'healing',
    ],
  },
  {
    path: '/stacks',
    anchor: 'peptide stacking guide',
    description: 'All curated peptide stack protocols',
    keywords: [
      'stack', 'protocol', 'combination', 'healing', 'anti-aging',
      'body-composition', 'cognitive', 'athlete', 'stacking',
    ],
  },

  // ── Stack pages ───────────────────────────────────────────────────────────
  {
    path: '/stacks/ultimate-healing',
    anchor: 'BPC-157 + TB-500 ultimate healing stack',
    description: 'The gold standard injury recovery protocol',
    keywords: [
      'bpc-157', 'tb-500', 'healing', 'injury', 'tendon', 'recovery',
      'stack', 'protocol', 'repair', 'collagen', 'inflammation',
    ],
  },
  {
    path: '/stacks/anti-aging-longevity',
    anchor: 'Epithalon + GHK-Cu longevity stack',
    description: 'Anti-aging protocol for biological age reversal',
    keywords: [
      'epithalon', 'ghk-cu', 'ss-31', 'anti-aging', 'longevity',
      'telomere', 'mitochondria', 'stack', 'aging', 'gene expression',
    ],
  },
  {
    path: '/stacks/body-recomp',
    anchor: 'body recomposition peptide stack',
    description: 'Ipamorelin + CJC-1295 + HGH Frag for fat loss & muscle',
    keywords: [
      'ipamorelin', 'cjc-1295', 'body-composition', 'fat loss', 'muscle',
      'gh', 'growth hormone', 'stack', 'recomp', 'hgh fragment',
    ],
  },
  {
    path: '/stacks/cognitive-stack',
    anchor: 'cognitive enhancement peptide stack',
    description: 'Semax + Selank for focus & anxiety relief',
    keywords: [
      'semax', 'selank', 'cognitive', 'focus', 'anxiety', 'bdnf',
      'nootropic', 'nad', 'mental', 'stack', 'neuroplasticity',
    ],
  },
  {
    path: '/stacks/athlete-performance',
    anchor: 'athlete performance peptide stack',
    description: 'BPC-157 + TB-500 + Ipamorelin for peak athletic output',
    keywords: [
      'bpc-157', 'tb-500', 'ipamorelin', 'cjc-1295', 'athlete',
      'performance', 'recovery', 'healing', 'stack', 'muscle', 'injury',
    ],
  },

  // ── Product pages ─────────────────────────────────────────────────────────
  {
    path: '/products/bpc-157',
    anchor: 'BPC-157 peptide',
    description: 'The #1 healing & tissue repair peptide',
    keywords: [
      'bpc-157', 'healing', 'tendon', 'ligament', 'gut', 'oral',
      'recovery', 'repair', 'inflammation', 'collagen',
    ],
  },
  {
    path: '/products/tb-500',
    anchor: 'TB-500 peptide',
    description: 'Systemic healing & stem cell mobilization',
    keywords: [
      'tb-500', 'healing', 'stem cells', 'systemic', 'flexibility',
      'injury', 'recovery', 'repair', 'inflammation',
    ],
  },
  {
    path: '/products/ghk-cu',
    anchor: 'GHK-Cu copper peptide',
    description: 'Anti-aging gene expression reset & skin repair',
    keywords: [
      'ghk-cu', 'anti-aging', 'skin', 'collagen', 'copper peptide',
      'aging', 'longevity', 'gene expression', 'healing',
    ],
  },
  {
    path: '/products/epithalon',
    anchor: 'Epithalon peptide',
    description: 'Telomere lengthening & longevity',
    keywords: [
      'epithalon', 'anti-aging', 'telomere', 'longevity', 'pineal',
      'aging', 'mortality', 'gene expression',
    ],
  },
  {
    path: '/products/nad',
    anchor: 'NAD+ peptide',
    description: 'Mitochondrial energy, aging & cognitive support',
    keywords: [
      'nad', 'anti-aging', 'mitochondria', 'energy', 'cognitive',
      'longevity', 'aging', 'nootropic',
    ],
  },
  {
    path: '/products/snap-8',
    anchor: 'SNAP-8 wrinkle peptide',
    description: 'Topical anti-aging & expression line reduction',
    keywords: [
      'snap-8', 'anti-aging', 'skin', 'wrinkles', 'aging', 'collagen',
      'topical',
    ],
  },
  {
    path: '/products/cjc1295-ipamorelin',
    anchor: 'CJC-1295 / Ipamorelin blend',
    description: 'GH optimization for body recomp & sleep',
    keywords: [
      'cjc-1295', 'ipamorelin', 'gh', 'growth hormone', 'body-composition',
      'fat loss', 'muscle', 'sleep', 'recomp', 'athlete',
    ],
  },
  {
    path: '/products/igf-1lr3',
    anchor: 'IGF-1 LR3',
    description: 'Muscle growth & body recomposition factor',
    keywords: [
      'igf-1', 'muscle', 'growth', 'body-composition', 'gh',
      'fat loss', 'recomp', 'anabolic',
    ],
  },
  {
    path: '/products/glp-1s-semaglutide',
    anchor: 'semaglutide (GLP-1)',
    description: 'Clinically proven fat loss peptide',
    keywords: [
      'semaglutide', 'glp', 'fat loss', 'weight loss',
      'body-composition', 'appetite',
    ],
  },
  {
    path: '/products/glp-2t-tirzepatide',
    anchor: 'tirzepatide (GLP-2)',
    description: 'Dual GIP/GLP-1 agonist for fat loss & muscle',
    keywords: [
      'tirzepatide', 'glp', 'fat loss', 'weight loss',
      'body-composition', 'muscle', 'appetite',
    ],
  },
  {
    path: '/products/glp-3r-retatrutide',
    anchor: 'retatrutide (GLP-3)',
    description: 'Triple agonist for maximum fat loss',
    keywords: [
      'retatrutide', 'glp', 'fat loss', 'weight loss',
      'body-composition', 'appetite',
    ],
  },
  {
    path: '/products/bacteriostatic-water',
    anchor: 'bacteriostatic water for reconstitution',
    description: 'Required for safe peptide preparation',
    keywords: [
      'bacteriostatic water', 'reconstitute', 'reconstitution',
      'beginner', 'guide', 'protocol', 'how to', 'inject',
    ],
  },

  // ── High-value content pages ──────────────────────────────────────────────
  {
    path: '/wolverine-stack',
    anchor: 'the Wolverine Stack (BPC-157 + TB-500)',
    description: 'The Wolverine Stack complete protocol guide',
    keywords: [
      'bpc-157', 'tb-500', 'wolverine', 'healing', 'injury', 'stack',
      'protocol', 'recovery', 'repair', 'tendon', 'ligament',
    ],
  },
  {
    path: '/bpc-157-vs-tb-500',
    anchor: 'BPC-157 vs TB-500 comparison',
    description: 'Which healing peptide is better and when to use each',
    keywords: [
      'bpc-157', 'tb-500', 'comparison', 'healing', 'injury',
      'vs', 'difference', 'which is better', 'tendon', 'gut',
    ],
  },
  {
    path: '/is-bpc-157-legal',
    anchor: 'is BPC-157 legal?',
    description: 'BPC-157 FDA status, WADA rules, and research chemical law',
    keywords: [
      'bpc-157', 'legal', 'fda', 'wada', 'research chemical',
      'safety', 'banned', 'regulated', 'protocol',
    ],
  },
  {
    path: '/how-to-reconstitute-peptides',
    anchor: 'how to reconstitute peptides',
    description: 'Step-by-step guide with dose reference table',
    keywords: [
      'reconstitute', 'reconstitution', 'bacteriostatic water', 'how to',
      'beginner', 'guide', 'inject', 'protocol', 'insulin syringe', 'dosing',
    ],
  },
  {
    path: '/cjc-1295-ipamorelin-results',
    anchor: 'CJC-1295 Ipamorelin results timeline',
    description: 'Week-by-week results: sleep, fat loss, muscle',
    keywords: [
      'cjc-1295', 'ipamorelin', 'results', 'timeline', 'fat loss',
      'muscle', 'body-composition', 'gh', 'growth hormone', 'sleep', 'recomp',
    ],
  },

  // ── New high-traffic keyword pages ───────────────────────────────────────
  {
    path: '/peptides-for-weight-loss',
    anchor: 'peptides for weight loss',
    description: 'GLP-1 vs GH secretagogue fat loss peptide hub',
    keywords: [
      'semaglutide', 'tirzepatide', 'retatrutide', 'weight loss', 'fat loss',
      'glp', 'body-composition', 'appetite', 'ipamorelin', 'cjc-1295', 'igf-1',
    ],
  },
  {
    path: '/semaglutide-vs-tirzepatide-vs-retatrutide',
    anchor: 'semaglutide vs tirzepatide vs retatrutide comparison',
    description: 'Full GLP-1 peptide head-to-head comparison',
    keywords: [
      'semaglutide', 'tirzepatide', 'retatrutide', 'glp', 'fat loss',
      'weight loss', 'body-composition', 'appetite', 'comparison',
    ],
  },
  {
    path: '/bpc-157-for-gut-health',
    anchor: 'BPC-157 for gut health & leaky gut',
    description: 'BPC-157 oral and injectable gut healing protocol',
    keywords: [
      'bpc-157', 'gut', 'leaky gut', 'ibd', 'ibs', 'healing', 'oral',
      'inflammation', 'gut-brain', 'collagen', 'repair',
    ],
  },
  {
    path: '/peptides-for-women',
    anchor: 'best peptides for women',
    description: 'Fat loss, anti-aging, and healing peptides for women',
    keywords: [
      'ghk-cu', 'semaglutide', 'bpc-157', 'epithalon', 'snap-8',
      'anti-aging', 'fat loss', 'skin', 'healing', 'collagen', 'longevity',
    ],
  },
  {
    path: '/ghk-cu-for-hair-loss',
    anchor: 'GHK-Cu for hair loss & regrowth',
    description: 'Copper peptide hair regrowth mechanisms and protocol',
    keywords: [
      'ghk-cu', 'hair loss', 'anti-aging', 'skin', 'collagen',
      'copper peptide', 'aging', 'gene expression', 'angiogenesis',
    ],
  },
  {
    path: '/bpc-157-for-tendons',
    anchor: 'BPC-157 for tendon & ligament healing',
    description: 'BPC-157 tendon healing protocol by injury type',
    keywords: [
      'bpc-157', 'tendon', 'ligament', 'healing', 'injury',
      'repair', 'collagen', 'inflammation', 'recovery', 'tb-500',
    ],
  },
  {
    path: '/best-peptides-for-men-over-50',
    anchor: 'best peptides for men over 50',
    description: 'GH restoration, muscle, longevity peptides for men 50+',
    keywords: [
      'cjc-1295', 'ipamorelin', 'bpc-157', 'epithalon', 'ghk-cu', 'nad',
      'anti-aging', 'longevity', 'gh', 'growth hormone', 'muscle', 'aging',
    ],
  },
  {
    path: '/bpc-157-for-anxiety',
    anchor: 'BPC-157 for anxiety & depression',
    description: 'BPC-157 gut-brain axis, dopamine, and GABA mechanisms for anxiety',
    keywords: [
      'bpc-157', 'gut', 'healing', 'inflammation', 'gut-brain',
      'oral', 'repair', 'collagen', 'recovery', 'ibs',
    ],
  },
  {
    path: '/bpc-157-oral-vs-injectable',
    anchor: 'BPC-157 oral vs injectable comparison',
    description: 'Which BPC-157 administration route is best for different goals',
    keywords: [
      'bpc-157', 'oral', 'injectable', 'healing', 'gut', 'protocol',
      'dosing', 'beginner', 'reconstitute', 'inject', 'how to',
    ],
  },
  {
    path: '/epithalon-complete-guide',
    anchor: 'Epithalon complete guide',
    description: 'Telomere lengthening, dosing protocol, and longevity research',
    keywords: [
      'epithalon', 'anti-aging', 'telomere', 'longevity', 'pineal',
      'aging', 'gene expression', 'mortality', 'mitochondria', 'nad',
    ],
  },

  // ── Looksmaxxing pages ────────────────────────────────────────────────────
  {
    path: '/looksmaxxing-peptides',
    anchor: 'looksmaxxing peptides guide',
    description: 'Complete guide to peptides for appearance optimization',
    keywords: [
      'looksmaxxing', 'appearance', 'skin', 'collagen', 'ghk-cu', 'snap-8',
      'igf-1', 'bpc-157', 'face', 'beard', 'acne', 'anti-aging', 'protocol',
    ],
  },
  {
    path: '/peptides-for-skin-quality',
    anchor: 'peptides for skin quality & glow',
    description: 'Best peptides for skin texture, firmness, and luminosity',
    keywords: [
      'skin', 'collagen', 'ghk-cu', 'snap-8', 'bpc-157', 'epithalon',
      'appearance', 'anti-aging', 'looksmaxxing', 'texture', 'glow', 'pores',
    ],
  },
  {
    path: '/ghk-cu-skin-protocol',
    anchor: 'GHK-Cu skin protocol',
    description: 'GHK-Cu copper peptide complete skin application guide',
    keywords: [
      'ghk-cu', 'skin', 'collagen', 'anti-aging', 'copper peptide',
      'looksmaxxing', 'appearance', 'topical', 'gene expression', 'aging',
    ],
  },
  {
    path: '/snap-8-anti-wrinkle-peptide',
    anchor: 'SNAP-8 anti-wrinkle peptide guide',
    description: 'SNAP-8 neuropeptide vs Botox — topical anti-wrinkle protocol',
    keywords: [
      'snap-8', 'wrinkles', 'anti-aging', 'skin', 'topical', 'neuropeptide',
      'looksmaxxing', 'appearance', 'expression lines', 'botox',
    ],
  },
  {
    path: '/bpc-157-scar-healing',
    anchor: 'BPC-157 for scar healing & skin repair',
    description: 'BPC-157 scar remodeling protocol by scar type',
    keywords: [
      'bpc-157', 'scars', 'skin', 'healing', 'collagen', 'appearance',
      'looksmaxxing', 'acne scars', 'wound healing', 'repair', 'ghk-cu',
    ],
  },
  {
    path: '/peptides-for-collagen',
    anchor: 'peptides for collagen production',
    description: 'Evidence-ranked guide to collagen-boosting peptides',
    keywords: [
      'collagen', 'ghk-cu', 'igf-1', 'bpc-157', 'skin', 'anti-aging',
      'looksmaxxing', 'appearance', 'synthesis', 'cjc-1295', 'epithalon',
    ],
  },
  {
    path: '/peptides-for-beard-growth',
    anchor: 'peptides for beard growth & density',
    description: 'GHK-Cu, IGF-1 and TB-500 beard growth protocol',
    keywords: [
      'beard', 'hair', 'ghk-cu', 'igf-1', 'looksmaxxing', 'appearance',
      'follicle', 'growth', 'facial hair', 'tb-500', 'bpc-157',
    ],
  },
  {
    path: '/igf-1-looksmaxxing',
    anchor: 'IGF-1 for appearance & looksmaxxing',
    description: 'IGF-1 LR3 appearance effects — collagen, structure, skin',
    keywords: [
      'igf-1', 'looksmaxxing', 'appearance', 'collagen', 'skin', 'muscle',
      'body-composition', 'gh', 'growth hormone', 'cjc-1295', 'facial structure',
    ],
  },
  {
    path: '/peptides-for-acne-skin',
    anchor: 'peptides for acne & problem skin',
    description: 'BPC-157 gut-skin axis and GHK-Cu for acne resolution',
    keywords: [
      'acne', 'skin', 'bpc-157', 'ghk-cu', 'looksmaxxing', 'appearance',
      'gut', 'inflammation', 'healing', 'repair', 'scars',
    ],
  },
  {
    path: '/looksmaxxing-stack',
    anchor: 'the complete looksmaxxing peptide stack',
    description: 'Full appearance optimization stack — 3 tiers by budget',
    keywords: [
      'looksmaxxing', 'stack', 'protocol', 'ghk-cu', 'snap-8', 'igf-1',
      'bpc-157', 'skin', 'beard', 'collagen', 'appearance', 'anti-aging',
    ],
  },
];

/**
 * Returns the top `count` related pages for a given path, ranked by keyword
 * overlap. Ties are broken alphabetically by path so the result is always
 * identical — never random, never changes on reload.
 */
export function getInterlinks(currentPath: string, count = 4): Omit<InterLink, 'keywords'>[] {
  const current = registry.find((p) => p.path === currentPath);
  if (!current) return [];

  return registry
    .filter((p) => p.path !== currentPath)
    .map((p) => ({
      path: p.path,
      anchor: p.anchor,
      description: p.description,
      score: p.keywords.filter((k) => current.keywords.includes(k)).length,
    }))
    .sort((a, b) => b.score - a.score || a.path.localeCompare(b.path))
    .slice(0, count)
    .map(({ score: _score, ...rest }) => rest);
}
