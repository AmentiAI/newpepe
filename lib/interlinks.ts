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
