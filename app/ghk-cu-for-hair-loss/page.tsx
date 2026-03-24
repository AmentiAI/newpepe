import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'GHK-Cu for Hair Loss: Does Copper Peptide Actually Regrow Hair? (2026)',
  description: 'GHK-Cu copper peptide for hair loss — what the research shows, how it works, topical vs injection protocol, and realistic results timeline. The complete guide for 2026.',
  keywords: 'GHK-Cu hair loss, copper peptide hair loss, GHK-Cu hair growth, GHK-Cu for hair regrowth, copper peptide hair regrowth, GHK-Cu topical hair, peptide hair loss treatment',
  openGraph: {
    title: 'GHK-Cu for Hair Loss: Complete Guide 2026',
    description: 'Does GHK-Cu copper peptide regrow hair? Research, protocol, and realistic results.',
    type: 'article',
    url: 'https://bp157stack.com/ghk-cu-for-hair-loss',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GHK-Cu for Hair Loss: Does It Work?',
    description: 'Complete guide to GHK-Cu copper peptide for hair regrowth — research, protocol, and results.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const mechanisms = [
  { title: 'Follicle Stem Cell Activation', desc: 'GHK-Cu reactivates dormant hair follicle stem cells that have stopped cycling. This is the core mechanism for hair regrowth — getting miniaturized follicles cycling again.' },
  { title: 'DHT Blocker (Indirect)', desc: 'GHK-Cu modulates the androgen receptor signaling pathways in scalp tissue, reducing follicular sensitivity to DHT — the primary driver of androgenetic alopecia.' },
  { title: 'Angiogenesis at the Follicle', desc: 'Stimulates new blood vessel formation around hair follicles, improving nutrient and oxygen delivery to follicles that have been miniaturizing due to poor circulation.' },
  { title: 'Collagen & Scalp Matrix', desc: 'Stimulates collagen synthesis in the scalp dermis. A healthier scalp matrix (proper thickness, hydration, blood supply) supports larger, stronger follicle anchoring.' },
  { title: 'Gene Expression Reset', desc: 'GHK-Cu is a known gene regulator — it upregulates genes associated with follicle cycling and downregulates genes associated with inflammation and follicle senescence.' },
  { title: 'Anti-Inflammatory Effect', desc: 'Scalp inflammation is a key driver of hair loss in many conditions (androgenetic alopecia, alopecia areata). GHK-Cu reduces scalp TNF-α and interleukin activity.' },
];

const protocols = [
  {
    type: 'Topical (Scalp Application)',
    dose: '1–2mg dissolved in carrier solution or serum',
    frequency: 'Daily application to affected areas',
    best: 'Most convenient. Best for androgenetic alopecia and early-stage thinning. Apply to clean, dry scalp. Can be mixed with minoxidil for synergistic effect.',
    result: 'Results: 2–4 months for miniaturization reversal, 4–6 months for visible regrowth',
  },
  {
    type: 'Subcutaneous Injection',
    dose: '0.5–1mg/day SC',
    frequency: 'Daily or 5 days/week',
    best: 'Systemic anti-aging and skin benefits alongside hair effects. More expensive and complex. Preferred for users already using GHK-Cu for systemic anti-aging.',
    result: 'Results: systemic benefits faster, hair effects similar to topical timeline',
  },
  {
    type: 'Combination: Topical + Minoxidil',
    dose: 'GHK-Cu serum (topical) + minoxidil 5%',
    frequency: 'GHK-Cu AM, minoxidil PM (or same time)',
    best: 'Most studied combination. GHK-Cu addresses follicle biology; minoxidil increases blood flow. Complementary mechanisms with better results than either alone.',
    result: 'Results: 3–4 months for initial density improvement',
  },
];

const faqs = [
  { q: 'Does GHK-Cu copper peptide actually work for hair loss?', a: 'Research is promising — GHK-Cu has multiple demonstrated mechanisms for hair growth: follicle stem cell activation, angiogenesis at the follicle, DHT pathway modulation, and scalp inflammation reduction. Studies show follicle size increase and improved cycling. Anecdotally, users report consistent results — particularly for androgenetic alopecia and early thinning. It is not as potent as minoxidil or finasteride for severe AGA, but it can be combined with them.' },
  { q: 'How do I apply GHK-Cu for hair loss?', a: 'Dissolve GHK-Cu powder in a carrier (distilled water, propylene glycol, or a serum base) and apply directly to the scalp using a dropper or applicator. Part the hair and apply to the areas of thinning. Massage gently for 60 seconds to improve absorption. Apply to a clean, dry scalp — ideally after washing. Daily application produces the best results. Many users mix GHK-Cu into their existing serum or minoxidil solution.' },
  { q: 'How long does GHK-Cu take to regrow hair?', a: 'Hair growth is slow by nature. With GHK-Cu: expect to see reduced shedding and scalp inflammation improvement in the first 4–8 weeks. Miniaturization reversal (thicker, healthier follicles) typically becomes measurable at 2–4 months. Visible hair density improvement from newly regrown hairs: 4–6 months minimum. This is consistent with the biological timeline for the hair growth cycle — GHK-Cu is not a rapid regrowth drug.' },
  { q: 'Can GHK-Cu be combined with finasteride or minoxidil?', a: 'Yes — GHK-Cu has complementary mechanisms to both. With minoxidil: GHK-Cu improves follicle biology and reduces scalp inflammation while minoxidil increases blood flow and prolongs anagen phase. This is an excellent combination. With finasteride: GHK-Cu provides a non-systemic DHT pathway modulation at the follicle level while finasteride blocks systemic DHT conversion. Stacking all three (GHK-Cu + minoxidil + finasteride) is the most comprehensive non-surgical hair protocol available.' },
  { q: 'Is GHK-Cu safe for the scalp?', a: 'GHK-Cu has an excellent safety profile — topically and systemically. It is endogenous (naturally produced in the body), non-carcinogenic, and non-toxic even at high concentrations in animal models. Topically, very few users report irritation (typically from carrier ingredients rather than GHK-Cu itself). It is safe for long-term daily use. No systemic side effects from topical application have been identified.' },
];

export default function GhkCuHairLossPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Anti-Aging', item: 'https://bp157stack.com/anti-aging' },
                { '@type': 'ListItem', position: 3, name: 'GHK-Cu for Hair Loss', item: 'https://bp157stack.com/ghk-cu-for-hair-loss' },
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
              headline: 'GHK-Cu for Hair Loss: Does Copper Peptide Actually Regrow Hair?',
              description: 'Complete guide to GHK-Cu for hair regrowth — mechanisms, protocol, and realistic results timeline.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-sm font-semibold tracking-wide">GHK-CU HAIR LOSS GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            GHK-Cu for<br />
            <span className="text-amber-400">Hair Loss</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            GHK-Cu (copper peptide) has multiple proven mechanisms for hair regrowth.
            Here's what the research shows, the complete protocol, and what results to realistically expect.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: '6', label: 'Regrowth mechanisms' },
              { stat: 'Daily', label: 'Application frequency' },
              { stat: '2–4 mo', label: 'First visible results' },
              { stat: 'No sides', label: 'Safety profile' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-amber-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanisms */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Why GHK-Cu Works for Hair</h2>
        <p className="text-slate-400 mb-10">GHK-Cu doesn't work through a single pathway — it hits hair follicle biology at 6 different levels simultaneously.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mechanisms.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <CheckCircle className="w-5 h-5 text-amber-400 mb-3" />
              <h3 className="text-white font-bold mb-2">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocols */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Application Protocols</h2>
          <div className="space-y-5">
            {protocols.map((p, i) => (
              <div key={p.type} className="glass-card p-6">
                <div className="text-xs font-bold text-amber-400 tracking-widest mb-1">PROTOCOL {i + 1}</div>
                <h3 className="text-white font-black text-lg mb-4">{p.type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div><p className="text-slate-500 text-xs mb-1">Dose</p><p className="text-white text-sm font-semibold">{p.dose}</p></div>
                  <div><p className="text-slate-500 text-xs mb-1">Frequency</p><p className="text-white text-sm font-semibold">{p.frequency}</p></div>
                  <div><p className="text-slate-500 text-xs mb-1">Expected Results</p><p className="text-amber-400 text-xs font-semibold">{p.result}</p></div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">GHK-Cu Hair Loss FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-amber-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Get GHK-Cu Copper Peptide</h2>
          <p className="text-slate-400 mb-6">COA-verified GHK-Cu — for topical hair application and systemic anti-aging.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View GHK-Cu <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/ghk-cu" className="btn-secondary px-8 py-4">GHK-Cu Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/ghk-cu-for-hair-loss" />
    </div>
  );
}
