import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Best Peptides for Women 2026: Fat Loss, Anti-Aging, Healing & Hormones',
  description: 'The best peptides for women — from GLP-1 fat loss peptides to GHK-Cu anti-aging and BPC-157 healing. Complete guide to dosing, safety, and which peptides work best for women\'s goals.',
  keywords: 'peptides for women, best peptides for women, peptides for women weight loss, peptides for women anti-aging, peptides for female athletes, semaglutide women, BPC-157 women, GHK-Cu women',
  openGraph: {
    title: 'Best Peptides for Women 2026: Complete Guide',
    description: 'Fat loss, anti-aging, healing — the best peptides for women with dosing and safety guide.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-women',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Women 2026',
    description: 'Complete guide to peptides for women — fat loss, anti-aging, healing, and hormones.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const peptides = [
  {
    name: 'BPC-157',
    slug: 'bpc-157',
    goal: 'Healing & Gut Health',
    color: 'emerald',
    rank: '#1 for healing',
    whyWomen: 'BPC-157 heals everything — tendons, gut lining, joints — without hormonal interference. Women respond identically to men. No androgenic effects whatsoever. Particularly popular for gut healing, injury recovery, and post-surgical recovery.',
    dose: '250–500mcg/day',
    route: 'Oral or SC injection',
    benefits: ['Heals leaky gut and IBS', 'Tendon and ligament repair', 'Reduces inflammation', 'No hormonal effects'],
  },
  {
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    goal: 'Skin & Anti-Aging',
    color: 'purple',
    rank: '#1 for skin',
    whyWomen: 'GHK-Cu is the most popular anti-aging peptide among women. It resets gene expression, stimulates collagen synthesis, tightens skin, and reduces wrinkles — all without hormonal activity. Used topically and via injection.',
    dose: '1–2mg/day (injection) or topical',
    route: 'SC injection or topical serum',
    benefits: ['Collagen production boost', 'Wrinkle reduction', 'Skin tightening & repair', 'Hair growth stimulation'],
  },
  {
    name: 'Semaglutide',
    slug: 'glp-1s-semaglutide',
    goal: 'Fat Loss',
    color: 'blue',
    rank: '#1 for fat loss',
    whyWomen: 'GLP-1 peptides are the #1 weight loss intervention for women. Clinical trials show 15–17% body weight reduction with semaglutide — results equivalent in women and men. Particularly effective for stubborn hormonal fat and reducing appetite without willpower.',
    dose: '0.25mg/wk → up to 2.4mg/wk',
    route: 'SC injection (weekly)',
    benefits: ['15–17% body weight reduction', 'Appetite suppression', 'Metabolic health improvement', 'Reduces visceral fat'],
  },
  {
    name: 'Epithalon',
    slug: 'epithalon',
    goal: 'Longevity & Hormones',
    color: 'amber',
    rank: '#1 for longevity',
    whyWomen: 'Epithalon lengthens telomeres and resets the pineal gland — which regulates circadian rhythm and hormone cascades. Women report improved sleep, better melatonin production, and anecdotal improvements in perimenopausal symptoms. Safe, no steroid activity.',
    dose: '5–10mg per cycle',
    route: 'SC injection (10-day cycle)',
    benefits: ['Telomere lengthening', 'Improved sleep quality', 'Circadian rhythm reset', 'Anti-aging gene expression'],
  },
  {
    name: 'CJC-1295 / Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    goal: 'Body Composition & Sleep',
    color: 'blue',
    rank: '#1 for recomp',
    whyWomen: 'GH secretagogues are popular among women for body recomposition — increasing lean muscle, reducing fat, and dramatically improving sleep quality. Unlike synthetic HGH, CJC-1295/Ipamorelin works through natural pituitary signaling. No virilization risk.',
    dose: '100–200mcg CJC + 200–300mcg Ipa',
    route: 'SC injection (before bed)',
    benefits: ['Improved sleep architecture', 'Lean muscle preservation', 'Fat loss acceleration', 'Skin and hair quality'],
  },
  {
    name: 'SNAP-8',
    slug: 'snap-8',
    goal: 'Topical Anti-Aging',
    color: 'purple',
    rank: 'Best topical peptide',
    whyWomen: 'SNAP-8 is a topical peptide that reduces expression lines and wrinkles by relaxing facial muscles — the same mechanism as Botox but without injections. Applied directly to skin. No systemic effects. Popular in skincare routines alongside GHK-Cu.',
    dose: 'Topical cream/serum (as directed)',
    route: 'Topical application',
    benefits: ['Reduces expression lines', 'Non-invasive wrinkle treatment', 'Works alongside GHK-Cu', 'No systemic side effects'],
  },
];

const faqs = [
  { q: 'Are peptides safe for women?', a: 'Most research peptides used in the community are very safe for women — including BPC-157, GHK-Cu, epithalon, and CJC-1295/Ipamorelin. These peptides have no androgenic (masculinizing) effects. GLP-1 peptides (semaglutide, tirzepatide) have clinical trial data in large female populations confirming safety. As with any intervention, women who are pregnant or breastfeeding should avoid peptide use.' },
  { q: 'Can women use BPC-157 safely?', a: 'Yes. BPC-157 has no hormonal activity and no sex-specific effects. Women and men respond identically to BPC-157 for healing applications. There are no androgenic effects, no estrogen effects, and no menstrual cycle disruption reported. It is one of the safest peptides in the research chemical space.' },
  { q: 'What peptide is best for women\'s fat loss?', a: 'For maximum fat loss: semaglutide, tirzepatide, or retatrutide (GLP class). Clinical trial data shows 15–26% body weight reduction depending on the agent. For body recomposition (fat loss + muscle preservation simultaneously), CJC-1295/Ipamorelin stacked with a GLP peptide is highly effective. Tirzepatide is the current gold standard for fat loss with muscle preservation.' },
  { q: 'What peptides are best for women\'s skin?', a: 'GHK-Cu is the #1 anti-aging peptide for skin. It stimulates collagen production, tightens skin texture, and resets gene expression toward a younger profile. SNAP-8 applied topically reduces expression lines. Combined with adequate hydration and UV protection, these two peptides produce the most significant cosmetic anti-aging results available without medical procedures.' },
  { q: 'Do peptides affect women\'s hormones?', a: 'Healing peptides (BPC-157), anti-aging peptides (GHK-Cu, epithalon, SNAP-8), and GLP-1 peptides do not contain or mimic sex hormones and will not significantly alter estrogen or progesterone levels. GH secretagogues (CJC-1295/Ipamorelin) increase growth hormone — GH is present and beneficial in both sexes. Epithalon may improve melatonin and circadian hormone regulation through the pineal gland, which some women find beneficial peri-menopausally.' },
];

export default function PeptidesForWomenPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #060c1c 50%, #060610 100%)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Peptides for Women', item: 'https://bp157stack.com/peptides-for-women' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Best Peptides for Women 2026: Fat Loss, Anti-Aging, Healing & Hormones',
              description: 'Complete guide to the best peptides for women — fat loss, anti-aging, skin, healing, and safety.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-purple-400 text-sm font-semibold tracking-wide">PEPTIDES FOR WOMEN GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Best Peptides<br />
            <span className="text-purple-400">for Women</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            Fat loss. Anti-aging. Healing. Skin quality. Here are the peptides that actually work for women's goals —
            with full dosing protocols and safety information.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'For fat loss', stat: 'GLP-1 peptides' },
              { label: 'For skin/anti-aging', stat: 'GHK-Cu' },
              { label: 'For healing', stat: 'BPC-157' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <div className="text-sm font-black text-purple-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peptide cards */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">The 6 Best Peptides for Women</h2>
        <p className="text-slate-400 mb-10">Ranked by goal — all have no androgenic effects and are safe for female use.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {peptides.map((p) => (
            <div key={p.name} className="glass-card p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className={`text-xs font-bold tracking-widest mb-1 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'emerald' ? 'text-emerald-400' : p.color === 'purple' ? 'text-purple-400' : 'text-amber-400'}`}>{p.goal}</div>
                  <h3 className="text-white font-black text-xl">{p.name}</h3>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${p.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : p.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : p.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-amber-500/10 text-amber-400'}`}>{p.rank}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.whyWomen}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Dose</p>
                  <p className="text-white text-xs font-semibold">{p.dose}</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3">
                  <p className="text-slate-500 text-xs mb-1">Route</p>
                  <p className="text-white text-xs font-semibold">{p.route}</p>
                </div>
              </div>
              <ul className="space-y-1 mb-4">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-slate-400 text-xs">
                    <CheckCircle className="w-3 h-3 shrink-0 text-emerald-400" /> {b}
                  </li>
                ))}
              </ul>
              <Link href={`/products/${p.slug}`} className="block text-center text-xs font-semibold py-2 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-colors">
                View {p.name} details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Peptides for Women FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-purple-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-white mb-3">Shop Peptides</h2>
          <p className="text-slate-400 mb-6">COA-verified. US domestic. All peptides listed above available now.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop All Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/anti-aging" className="btn-secondary px-8 py-4">Anti-Aging Protocols</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/peptides-for-women" />
    </div>
  );
}
