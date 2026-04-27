const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://phiogen.is https://cdn.shopify.com https://images.unsplash.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://phiogen.is",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

// Variant consolidation: absorbed slug → canonical parent slug.
// MUST stay in sync with lib/absorbed-slugs.ts (used by sitemap, catalog,
// generateStaticParams). 301-redirect kills the duplicate, concentrates
// signal on the parent URL.
const ABSORBED_SLUGS = {
  'bpc-157-5mg': 'bpc-157',
  'bpc-157-20mg': 'bpc-157',
  'bpc-157-30mg': 'bpc-157',
  'pentadecapeptide-bpc': 'bpc-157',
  'bpc-157-capsules-1000mcg': 'bpc-157-capsules',
  'bpc-157-tb-500-blend-10mg': 'bpc-157-tb-500-blend-20mg',
  'bpc-157-tb-500-blend-5mg': 'bpc-157-tb-500-blend-20mg',
  'tb-500-5mg': 'tb-500',
  'tb-500-20mg': 'tb-500',
  'ghk-cu-50mg': 'ghk-cu',
  'ghk-cu-100mg': 'ghk-cu',
  'epitalon-10mg': 'epithalon',
  'epithalon-50mg': 'epithalon',
  'nad-100mg': 'nad',
  'nad-250mg': 'nad',
  'nad-500mg': 'nad',
  'nad-1000mg': 'nad',
  'glp-1s-semaglutide-5mg': 'glp-1s-semaglutide',
  'glp-1s-semaglutide-15mg': 'glp-1s-semaglutide',
  'semaglutide-3mg': 'glp-1s-semaglutide',
  'semaglutide-30mg': 'glp-1s-semaglutide',
  'glp-2t-tirzepatide-30mg': 'glp-2t-tirzepatide',
  'glp-2t-tirzepatide-60mg': 'glp-2t-tirzepatide',
  'glp-3r-retatrutide-15mg': 'glp-3r-retatrutide',
  'glp-3r-retatrutide-30mg': 'glp-3r-retatrutide',
  'glp-3r-retatrutide-60mg': 'glp-3r-retatrutide',
  'snap-8-50mg': 'snap-8',
  'aod9604-5mg': 'aod9604-2mg',
  'aod9604-10mg': 'aod9604-2mg',
  'adipotide-10mg': 'adipotide-5mg',
  'bam-15-50ml': 'bam-15-30ml',
  'l-carnitine-600mg': 'l-carnitine-400mg',
  'glutathione-600mg': 'glutathione-200mg',
  'glutathione-1500mg': 'glutathione-200mg',
  '5-amino-1mq-5mg': '5-amino-1mq-50mg',
  'slu-pp-332-120caps': 'slu-pp-332-30caps',
  'slu-pp-332-1mg-caps': 'slu-pp-332-30caps',
  'slu-pp-332-5mg-liquid': 'slu-pp-332-liquid',
  'tesofensine-tablets': 'tesofensine-capsules',
  'cjc-1295-nodac-5mg': 'cjc-1295-nodac-10mg',
  'ipa-cjc-15mg': 'cjc1295-ipamorelin',
  'cjc-1295-ipamorelin-15mg': 'cjc1295-ipamorelin',
  'kisspeptin-10mg': 'kisspeptin-5mg',
  'sermorelin-15mg': 'sermorelin',
  'tesamorelin-10mg': 'tesamorelin',
  'tesamorelin-5mg': 'tesamorelin',
  'ghrp-2-5mg': 'ghrp-2',
  'pt-141-5mg': 'pt-141',
  'selank-10mg': 'selank',
  'semax-30mg': 'semax',
  'igf-1-lr3-100mcg': 'igf-1lr3',
  'bacteriostatic-water-30ml': 'bacteriostatic-water',
};

const variantRedirects = Object.entries(ABSORBED_SLUGS).map(([from, to]) => ({
  source: `/products/${from}`,
  destination: `/products/${to}`,
  permanent: true,
}));

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'phiogen.is' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bp157stack.com' }],
        destination: 'https://www.bp157stack.com/:path*',
        permanent: true,
      },
      ...variantRedirects,
    ];
  },
};

export default nextConfig;
