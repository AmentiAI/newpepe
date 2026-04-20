// Variant consolidation: dosage/format variants that should 301 to a single
// parent product URL to eliminate duplicate-content signals.
//
// Each entry maps an absorbed (deprecated) product slug → the canonical parent
// slug. The variant data still exists in lib/products.ts so we don't lose
// price/affiliate-URL information, but the page itself is no longer reachable
// — it 301s to the parent. The parent product page is responsible for
// surfacing the size/format options via affiliate links.
//
// Why this matters for indexing:
//   - Google labels two pages with >40% shared 6-grams as "Duplicate, submitted
//     URL not selected as canonical" and refuses to index the secondary URL.
//   - With ~40 size-variant URLs all sharing the parent compound's content,
//     this kills crawl budget and prevents the parent from ranking.
//   - Consolidating to one URL per compound concentrates link equity, makes
//     the parent unambiguously the canonical, and frees crawl budget for
//     genuinely different products.

export const ABSORBED_SLUGS: Record<string, string> = {
  // BPC-157 family
  'bpc-157-5mg': 'bpc-157',
  'bpc-157-20mg': 'bpc-157',
  'bpc-157-30mg': 'bpc-157',
  'pentadecapeptide-bpc': 'bpc-157',
  'bpc-157-capsules-1000mcg': 'bpc-157-capsules',

  // BPC-157/TB-500 blend
  'bpc-157-tb-500-blend-10mg': 'bpc-157-tb-500-blend-20mg',
  'bpc-157-tb-500-blend-5mg': 'bpc-157-tb-500-blend-20mg',

  // TB-500
  'tb-500-5mg': 'tb-500',
  'tb-500-20mg': 'tb-500',

  // GHK-Cu
  'ghk-cu-50mg': 'ghk-cu',
  'ghk-cu-100mg': 'ghk-cu',

  // Epithalon
  'epitalon-10mg': 'epithalon',
  'epithalon-50mg': 'epithalon',

  // NAD
  'nad-100mg': 'nad',
  'nad-250mg': 'nad',
  'nad-500mg': 'nad',
  'nad-1000mg': 'nad',

  // Semaglutide (GLP-1 S)
  'glp-1s-semaglutide-5mg': 'glp-1s-semaglutide',
  'glp-1s-semaglutide-15mg': 'glp-1s-semaglutide',
  'semaglutide-3mg': 'glp-1s-semaglutide',
  'semaglutide-30mg': 'glp-1s-semaglutide',

  // Tirzepatide (GLP-2 T)
  'glp-2t-tirzepatide-30mg': 'glp-2t-tirzepatide',
  'glp-2t-tirzepatide-60mg': 'glp-2t-tirzepatide',

  // Retatrutide (GLP-3 R)
  'glp-3r-retatrutide-15mg': 'glp-3r-retatrutide',
  'glp-3r-retatrutide-30mg': 'glp-3r-retatrutide',
  'glp-3r-retatrutide-60mg': 'glp-3r-retatrutide',

  // SNAP-8
  'snap-8-50mg': 'snap-8',

  // AOD-9604
  'aod9604-5mg': 'aod9604-2mg',
  'aod9604-10mg': 'aod9604-2mg',

  // Adipotide
  'adipotide-10mg': 'adipotide-5mg',

  // BAM-15
  'bam-15-50ml': 'bam-15-30ml',

  // L-Carnitine
  'l-carnitine-600mg': 'l-carnitine-400mg',

  // Glutathione
  'glutathione-600mg': 'glutathione-200mg',
  'glutathione-1500mg': 'glutathione-200mg',

  // 5-Amino-1MQ
  '5-amino-1mq-5mg': '5-amino-1mq-50mg',

  // SLU-PP-332
  'slu-pp-332-120caps': 'slu-pp-332-30caps',
  'slu-pp-332-1mg-caps': 'slu-pp-332-30caps',
  'slu-pp-332-5mg-liquid': 'slu-pp-332-liquid',

  // Tesofensine
  'tesofensine-tablets': 'tesofensine-capsules',

  // CJC-1295 No-DAC
  'cjc-1295-nodac-5mg': 'cjc-1295-nodac-10mg',

  // CJC-1295 + Ipamorelin (blend)
  'ipa-cjc-15mg': 'cjc1295-ipamorelin',
  'cjc-1295-ipamorelin-15mg': 'cjc1295-ipamorelin',

  // Kisspeptin
  'kisspeptin-10mg': 'kisspeptin-5mg',

  // Sermorelin
  'sermorelin-15mg': 'sermorelin',

  // Tesamorelin
  'tesamorelin-10mg': 'tesamorelin',
  'tesamorelin-5mg': 'tesamorelin',

  // GHRP-2
  'ghrp-2-5mg': 'ghrp-2',

  // PT-141
  'pt-141-5mg': 'pt-141',

  // Selank
  'selank-10mg': 'selank',

  // Semax
  'semax-30mg': 'semax',

  // Ipamorelin (10mg parent already exists; no variants to absorb here)

  // IGF-1 LR3
  'igf-1-lr3-100mcg': 'igf-1lr3',

  // Bacteriostatic water
  'bacteriostatic-water-30ml': 'bacteriostatic-water',
};

export const ABSORBED_SET = new Set(Object.keys(ABSORBED_SLUGS));

export function isAbsorbed(slug: string): boolean {
  return ABSORBED_SET.has(slug);
}

export function canonicalSlugFor(slug: string): string {
  return ABSORBED_SLUGS[slug] ?? slug;
}
