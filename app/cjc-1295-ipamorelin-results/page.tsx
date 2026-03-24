import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'CJC-1295 Ipamorelin Results: Timeline, What to Expect & How to Optimize | 2026',
  description: 'What results can you expect from CJC-1295 Ipamorelin and when? Complete timeline — week-by-week breakdown, fat loss, muscle, sleep improvements, and how to maximize outcomes.',
  keywords: 'CJC-1295 ipamorelin results, CJC-1295 ipamorelin results timeline, how long does CJC-1295 ipamorelin take to work, CJC-1295 ipamorelin before and after, ipamorelin results, CJC-1295 results',
  openGraph: {
    title: 'CJC-1295 Ipamorelin Results: Week-by-Week Timeline',
    description: 'What results to expect from CJC-1295 Ipamorelin and when — complete week-by-week timeline.',
    type: 'article',
    url: 'https://bp157stack.com/cjc-1295-ipamorelin-results',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJC-1295 Ipamorelin Results: Week-by-Week Timeline',
    description: 'When do CJC-1295 Ipamorelin results appear? Complete timeline from week 1 to 6 months.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const timeline = [
  {
    period: 'Week 1–2',
    headline: 'Sleep Quality Improves',
    color: 'blue',
    results: [
      'Deeper, more restful sleep — often within the first 3–5 injections',
      'More vivid dreams (common, harmless — sign of GH activity during sleep)',
      'Waking up more refreshed with sustained energy',
      'Some users notice reduced overnight hunger',
    ],
    note: 'Sleep improvement is the most consistent early result. If you\'re not seeing this by week 2, review your protocol — timing and fasting window are critical.',
  },
  {
    period: 'Week 2–4',
    headline: 'Recovery & Skin Changes',
    color: 'emerald',
    results: [
      'Faster workout recovery — less DOMS (delayed onset muscle soreness)',
      'Improved skin texture and subtle tightening (collagen effect)',
      'Slightly fuller appearance in muscles (intramuscular water/glycogen)',
      'Mild increase in appetite in some users — normal GH side effect',
    ],
    note: 'This is when most users first notice they\'re recovering faster between training sessions.',
  },
  {
    period: 'Week 4–8',
    headline: 'Body Composition Shifts',
    color: 'purple',
    results: [
      'Visible fat loss begins — particularly around abdomen and love handles',
      'Lean muscle preservation during cuts (or lean muscle gain during maintenance/surplus)',
      'Reduced water retention and puffiness',
      'Energy levels notably elevated throughout the day',
    ],
    note: 'Body composition changes are best tracked with body fat measurements, not just scale weight. Muscle gain can offset fat loss on the scale.',
  },
  {
    period: 'Month 3–4',
    headline: 'Peak Composition Changes',
    color: 'emerald',
    results: [
      'Most significant fat loss phase — the cumulative GH effect peaks',
      'Lean muscle noticeably more prominent and defined',
      'Improved insulin sensitivity — better carbohydrate handling',
      'Hair, nail, and skin quality continue improving',
    ],
    note: 'Most users consider month 3 the "inflection point" where results become clearly visible to others.',
  },
  {
    period: 'Month 4–6',
    headline: 'Sustained Optimization',
    color: 'blue',
    results: [
      'Body composition continues improving but at a slower rate',
      'Hormonal optimization — IGF-1 levels elevated sustainably',
      'Joint health improved (GH promotes joint fluid and collagen)',
      'Many users report anti-aging effects: improved skin, reduced wrinkles',
    ],
    note: 'Long-term users often cycle off for 4–6 weeks here, then restart for continued results.',
  },
];

const faqs = [
  { q: 'How long does CJC-1295 Ipamorelin take to work?', a: 'Sleep quality improvement is often the first result, appearing within 3–7 days of starting. Noticeable body composition changes (fat loss, muscle) typically emerge at 6–8 weeks. The most significant fat loss and muscle improvements occur at 3–4 months of consistent use.' },
  { q: 'What results can I expect from CJC-1295 Ipamorelin?', a: 'Typical results over a 3–6 month cycle: significantly improved sleep quality, 5–15% reduction in body fat (depending on diet and training), preservation or modest increase in lean muscle mass, improved workout recovery, enhanced skin quality, and elevated daytime energy. Individual results vary based on diet, training, age, and baseline GH levels.' },
  { q: 'Why does CJC-1295 Ipamorelin improve sleep so quickly?', a: 'The pituitary gland naturally releases most of its daily GH during deep sleep (slow-wave sleep). CJC-1295 + Ipamorelin amplifies this natural nocturnal GH pulse — producing 8–10× more GH than baseline. This enhanced GH pulse deepens sleep architecture and is why improved sleep quality is the earliest and most consistent reported benefit.' },
  { q: 'Does CJC-1295 Ipamorelin actually burn fat?', a: 'Yes — GH is directly lipolytic. It activates hormone-sensitive lipase in adipocytes, mobilizing stored triglycerides for oxidation. The fat-burning effect is most pronounced in visceral (abdominal) fat. At 3–6 months of consistent use, most users show meaningful reductions in body fat percentage, particularly around the midsection, even without changing diet or training.' },
  { q: 'Do I need to cycle CJC-1295 Ipamorelin?', a: 'CJC-1295 Ipamorelin can be run continuously, but most protocols use 5 days on, 2 days off weekly. Some users cycle 3–6 months on, 4–6 weeks off. There is no hard evidence of receptor desensitization at standard doses with pulsatile dosing, but periodic breaks are generally recommended for hormonal health best practices.' },
  { q: 'What is the best time to inject CJC-1295 Ipamorelin?', a: 'Before bed (30–60 minutes before sleep) is optimal. This aligns with the body\'s natural nocturnal GH pulse and maximizes the combined peptide + physiological GH output during deep sleep. You must fast for 2–3 hours before injection — eating, especially carbohydrates, blunts GH release significantly. Some users also add a morning fasted dose for additional benefit.' },
];

export default function CjcIpamoreinResultsPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Body Composition', item: 'https://bp157stack.com/body-composition' },
                { '@type': 'ListItem', position: 3, name: 'CJC-1295 Ipamorelin Results', item: 'https://bp157stack.com/cjc-1295-ipamorelin-results' },
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
              headline: 'CJC-1295 Ipamorelin Results: Week-by-Week Timeline',
              description: 'Complete timeline of CJC-1295 Ipamorelin results — sleep, fat loss, muscle, and body composition changes from week 1 to 6 months.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-wide">CJC-1295 IPAMORELIN RESULTS GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            CJC-1295 Ipamorelin Results:<br />
            <span className="text-blue-400">Complete Timeline</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            What results can you actually expect from CJC-1295 Ipamorelin — and when?
            Here's the complete week-by-week timeline based on the research and widespread user experience.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: 'Week 1', label: 'Sleep improves' },
              { num: 'Week 4', label: 'Recovery faster' },
              { num: 'Week 8', label: 'Fat loss visible' },
              { num: 'Month 3', label: 'Peak body recomp' },
            ].map((s) => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-blue-400">{s.num}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Week-by-Week Results Timeline</h2>
        <p className="text-slate-400 mb-10">Results vary based on dose, diet, training, and individual GH baseline. This reflects typical outcomes at standard protocol doses.</p>
        <div className="space-y-6">
          {timeline.map((t) => (
            <div key={t.period} className="glass-card p-8">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className={`text-xs font-bold tracking-widest mb-1 ${t.color === 'blue' ? 'text-blue-400' : t.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}`}>
                    {t.period}
                  </div>
                  <Clock className={`w-5 h-5 ${t.color === 'blue' ? 'text-blue-400' : t.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-black text-xl mb-4">{t.headline}</h3>
                  <ul className="space-y-2 mb-4">
                    {t.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-slate-300 text-sm">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${t.color === 'blue' ? 'text-blue-400' : t.color === 'purple' ? 'text-purple-400' : 'text-emerald-400'}`} /> {r}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-800/50 border border-white/5 rounded-lg px-4 py-2.5">
                    <p className="text-slate-500 text-xs italic">{t.note}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol reminder */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8 text-center">Protocol That Produces These Results</h2>
          <div className="glass-card p-8 font-mono text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-blue-400 font-bold mb-3">Before Bed (5 nights/week)</p>
                <p className="text-slate-300">• CJC-1295 (no DAC): 100–200mcg SC</p>
                <p className="text-slate-300">• Ipamorelin: 200–300mcg SC</p>
                <p className="text-slate-300">• Both in same syringe</p>
                <p className="text-slate-300">• 30–60 min before sleep</p>
              </div>
              <div>
                <p className="text-emerald-400 font-bold mb-3">Requirements for Results</p>
                <p className="text-slate-300">• Fast 2–3 hours before injection</p>
                <p className="text-slate-300">• Consistent 5 days/week minimum</p>
                <p className="text-slate-300">• 3–6 month minimum cycle for full benefit</p>
                <p className="text-slate-300">• Protein intake ≥ 0.8g/lb bodyweight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">CJC-1295 Ipamorelin FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-blue-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Get CJC-1295 / Ipamorelin</h2>
          <p className="text-slate-400 mb-6">COA-verified, US domestic. The cleanest GH-releasing peptide combination available.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/body-recomp" className="btn-secondary px-8 py-4">Full Body Recomp Stack</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/cjc-1295-ipamorelin-results" />
    </div>
  );
}
