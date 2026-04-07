import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, TrendingUp, FlaskConical, Zap, Layers } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GhResultsTracker from '@/components/GhResultsTracker';

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

const SOURCE_URL = '/out';

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
  { q: 'Does CJC-1295 Ipamorelin work for people over 60?', a: 'Yes — in fact, older users often see the most dramatic subjective improvements because their baseline GH levels are significantly lower than younger adults. GH declines roughly 15% per decade after age 25. By 60, most people are producing 50–60% less GH than at their peak. CJC-1295/Ipamorelin\'s effect of amplifying pituitary GH pulses is proportionally more impactful when baseline GH is depleted. Clinical studies on GHRH analogs in adults over 60 consistently show improvements in body composition, bone density, and sleep architecture. The protocol is the same for older users, though starting at the lower end of the dosing range (100mcg CJC-1295 / 200mcg Ipamorelin) and monitoring for any glucose-related changes is advisable.' },
  { q: 'Does CJC-1295 Ipamorelin cause water retention?', a: 'Mild, temporary water retention is common in the first 2–4 weeks and is a well-documented side effect of elevated GH levels. GH promotes water and sodium retention in the short term, which can add 1–3 lbs on the scale and cause a slightly "puffy" look. This typically resolves on its own by weeks 4–6 as the body adapts. Unlike anabolic steroids, this water retention is not estrogenic. If water retention is bothersome, increasing water intake (counterintuitively, this helps flush excess sodium), reducing sodium intake, and ensuring you\'re not overdosing (start at 100mcg CJC / 200mcg Ipa) will help. By month 2, most users report the opposite — reduced water retention and improved definition.' },
  { q: 'What is the ideal body fat percentage before starting CJC-1295/Ipamorelin?', a: 'There is no mandatory body fat threshold, but starting at 15–20% body fat or below produces the most visible body composition results. At higher body fat levels, GH secretion can be blunted (higher insulin levels suppress GH release), and GH receptor sensitivity in adipose tissue may be reduced. That said, people at higher body fat percentages can and do use CJC/Ipamorelin effectively — particularly for sleep, recovery, and anti-aging benefits. If fat loss is the primary goal and current body fat is above 25%, pairing CJC/Ipamorelin with a caloric deficit and potentially a GLP-1 peptide may produce faster overall results than CJC/Ipamorelin alone.' },
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
            Here&apos;s the complete week-by-week timeline based on the research and widespread user experience.
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

      {/* === NEW: HOW THEY WORK TOGETHER === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <FlaskConical className="w-7 h-7 text-blue-400" />
          <h2 className="text-3xl font-black text-white">How CJC-1295 and Ipamorelin Work Together</h2>
        </div>
        <p className="text-slate-400 mb-10 max-w-3xl">These two peptides are so frequently combined because they act on the same axis — growth hormone release — but through entirely different receptors. Understanding the mechanisms explains why the combination produces 8–10x more GH than either alone.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* CJC-1295 */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-blue-400 mb-6">CJC-1295: The GHRH Analog</h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <div>
                <h4 className="text-blue-300 font-bold mb-2">What GHRH Does Naturally</h4>
                <p>Growth Hormone Releasing Hormone (GHRH) is produced by the hypothalamus and travels to the anterior pituitary gland, where it binds GHRH receptors and triggers the synthesis and release of GH into circulation. The problem with natural GHRH: it has a half-life of approximately 30 minutes in blood due to rapid degradation by the enzyme dipeptidyl peptidase IV (DPP-IV).</p>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-2">The Half-Life Advantage</h4>
                <p>CJC-1295 (no DAC — Drug Affinity Complex) is a modified GHRH analog engineered to be DPP-IV resistant, extending its half-life to approximately 30 minutes in vivo — matching the window of GH pulsatile release more precisely. This is the version recommended for most protocols because it produces clean, pulsatile GH release rather than continuous elevation.</p>
                <p className="mt-2">CJC-1295 with DAC extends the half-life to 7–8 days by covalently binding albumin — but this creates continuous, non-pulsatile GH elevation, which is undesirable. Pulsatile GH release is how the body normally operates and is necessary to prevent receptor desensitization and maintain sensitivity of downstream IGF-1 pathways.</p>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-2">Receptor Saturation: Why Timing Matters</h4>
                <p>GHRH receptors on pituitary somatotroph cells can become transiently saturated after a dose. This is why spacing doses (5 nights on, 2 off) and avoiding back-to-back dosing within the same day (unless using the morning + night split with at least 8–10 hours between) maintains pituitary sensitivity and prevents diminishing returns over time.</p>
              </div>
            </div>
          </div>

          {/* Ipamorelin */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-emerald-400 mb-6">Ipamorelin: The Cleanest GHS</h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <div>
                <h4 className="text-emerald-300 font-bold mb-2">Ghrelin Mimetic Mechanism</h4>
                <p>Ipamorelin belongs to the Growth Hormone Secretagogue (GHS) class — it mimics ghrelin, a gut-derived hormone that acts on GHSR-1a receptors (ghrelin receptors) on pituitary somatotrophs. This is an entirely different receptor pathway from GHRH. Ghrelin normally triggers GH pulses through hunger signaling; Ipamorelin activates this same pathway without causing meaningful hunger stimulation at standard doses.</p>
              </div>
              <div>
                <h4 className="text-emerald-300 font-bold mb-2">Selectivity: Why Ipamorelin is Uniquely Clean</h4>
                <p>The critical advantage of Ipamorelin over older GHS agents (like GHRP-2 and GHRP-6) is its remarkable selectivity for GH release only. GHRP-2 and GHRP-6 significantly elevate cortisol and prolactin alongside GH — unwanted hormonal side effects. Ipamorelin was specifically engineered to activate GHSR-1a with minimal cortisol or prolactin stimulation, giving it the best side-effect profile in the GHS class by a wide margin.</p>
              </div>
              <div>
                <h4 className="text-emerald-300 font-bold mb-2">GH Pulse Magnitude</h4>
                <p>Ipamorelin alone produces roughly 2–3x baseline GH output when dosed at 200–300mcg. The pulse is sharp and short-lived (30–45 minutes), mimicking natural GH pulsatility. This is beneficial for maintaining receptor sensitivity and avoiding the side effects associated with chronically elevated GH (water retention, insulin resistance, acromegaly-like symptoms).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Synergy Explanation */}
        <div className="glass-card p-8 border-t-4 border-blue-500/50">
          <h3 className="text-xl font-black text-white mb-4">The Synergy: Why 1 + 1 = 8–10x</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed">
            <div>
              <p className="mb-3">When CJC-1295 (GHRH analog) and Ipamorelin (ghrelin mimetic) are injected together, they activate two completely distinct receptor pathways on the same pituitary somatotroph cell simultaneously. These pathways converge at a common intracellular point — cyclic AMP (cAMP) and protein kinase A — to trigger GH vesicle exocytosis.</p>
              <p>The combined signaling produces a GH pulse that is 8–10 times higher than resting GH output — significantly greater than either peptide could achieve alone. CJC-1295 alone produces approximately 2–3x GH amplification. Ipamorelin alone produces 2–3x. Together, the result is not 4–6x but 8–10x, demonstrating genuine synergy beyond simple addition.</p>
            </div>
            <div>
              <div className="bg-slate-800/50 rounded-xl p-5 h-full">
                <p className="text-blue-400 font-bold text-sm mb-3">GH Output Comparison</p>
                {[
                  { label: 'Baseline (no peptides)', value: '1x', width: '10%', color: 'bg-slate-600' },
                  { label: 'CJC-1295 alone', value: '2–3x', width: '25%', color: 'bg-blue-500' },
                  { label: 'Ipamorelin alone', value: '2–3x', width: '25%', color: 'bg-emerald-500' },
                  { label: 'CJC + Ipamorelin together', value: '8–10x', width: '85%', color: 'bg-gradient-to-r from-blue-500 to-emerald-400' },
                ].map((bar) => (
                  <div key={bar.label} className="mb-3">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{bar.label}</span><span className="font-bold text-white">{bar.value}</span>
                    </div>
                    <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bar.color}`} style={{ width: bar.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === NEW: GH PULSE TIMING === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-7 h-7 text-blue-400" />
            <h2 className="text-3xl font-black text-white">Optimizing GH Pulse Timing</h2>
          </div>
          <p className="text-slate-400 mb-10 max-w-3xl">Growth hormone is not secreted continuously — it is released in discrete pulses, with the largest occurring during deep sleep. The science of GH pulsatility determines everything about when, how often, and under what conditions you inject.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="glass-card p-6">
              <h3 className="text-blue-400 font-black text-lg mb-4">Why Inject Before Sleep</h3>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>The pituitary gland produces approximately 70–80% of its daily GH output during slow-wave (deep) sleep, specifically in the first 1–2 hours after sleep onset. This pulse is the most physiologically significant GH event of the day — it drives the majority of tissue repair, fat mobilization, and IGF-1 production that occurs overnight.</p>
                <p>Injecting CJC-1295/Ipamorelin 30–60 minutes before sleep amplifies this already-large nocturnal pulse. Instead of replacing the natural GH signal, the peptides stack on top of it, producing the 8–10x output described above precisely when the body&apos;s natural GH axis is already at its peak activity. This is superior to injecting at other times because you are amplifying the body&apos;s largest natural GH event rather than creating a smaller artificial pulse during an otherwise low-GH window.</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-blue-400 font-black text-lg mb-4">Fasting Window: Why Carbs Kill GH</h3>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>Glucose and insulin are the two most potent suppressors of GH release. When blood glucose rises after eating — particularly after carbohydrate consumption — insulin spikes, and insulin directly suppresses GHRH signaling at the pituitary level. A carbohydrate-rich meal eaten 1–2 hours before a CJC/Ipamorelin injection can blunt the GH pulse by 50–80%.</p>
                <p>The required fasting window is a minimum of 2 hours before injection, with 3 hours preferred. Protein and fat are less suppressive than carbohydrates but still have some impact. The ideal scenario is no food for 2–3 hours before the injection, with the last meal being protein-dominant. This is why the pre-bed injection protocol requires eating dinner at least 2–3 hours before sleep.</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-blue-400 font-black text-lg mb-4">Once Daily vs Twice Daily</h3>
              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p><strong className="text-white">Once daily (before bed):</strong> The standard protocol for most users. Maximizes the nocturnal GH pulse, is easiest to maintain consistently, and produces excellent results at 100–200mcg CJC / 200–300mcg Ipamorelin. Recommended for beginners and anyone prioritizing sleep quality and body composition changes.</p>
                <p><strong className="text-white">Twice daily (morning + night):</strong> An advanced approach that adds a morning fasted dose. The morning dose must be taken on an empty stomach — at least 30–60 minutes before eating breakfast. This creates a second, additional GH pulse during the day without interfering with the nocturnal pulse. Results are faster for body composition but the added complexity makes compliance harder. Typical morning dose is 100mcg CJC / 200mcg Ipamorelin (slightly lower than the bedtime dose).</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-blue-400 font-black text-lg mb-4">Morning vs Night: Head-to-Head</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ background: 'rgba(96,165,250,0.08)' }}>
                      <th className="text-left py-2 px-3 text-slate-400">Factor</th>
                      <th className="text-center py-2 px-3 text-blue-400">Night Only</th>
                      <th className="text-center py-2 px-3 text-emerald-400">AM + PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['GH amplification', '8–10x nocturnal', '8–10x + 3–5x AM'],
                      ['Sleep benefit', 'Maximum', 'Maximum'],
                      ['Fat loss speed', 'Good', 'Faster'],
                      ['Muscle gain', 'Good', 'Faster'],
                      ['Compliance', 'Easy', 'Harder'],
                      ['Cost', '$', '$$'],
                      ['Best for', 'Most users', 'Advanced'],
                    ].map(([f, night, am], i) => (
                      <tr key={f} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                        <td className="py-2 px-3 text-slate-400 font-medium">{f}</td>
                        <td className="py-2 px-3 text-center text-slate-300">{night}</td>
                        <td className="py-2 px-3 text-center text-slate-300">{am}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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

      {/* === NEW: INTERACTIVE RESULTS TRACKER === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-white mb-3">Your Personal Results Tracker</h2>
            <p className="text-slate-400 max-w-2xl">Select your current week in the cycle to see exactly what changes you should be experiencing — and what the next phase looks like.</p>
          </div>
          <GhResultsTracker />
        </div>
      </section>

      {/* === NEW: CJC vs HGH COMPARISON === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-4">CJC-1295/Ipamorelin vs HGH: Real-World Comparison</h2>
        <p className="text-slate-400 mb-8 max-w-3xl">Direct-inject HGH and GH-releasing peptides are frequently compared. Here is how they genuinely differ across every relevant dimension.</p>

        <div className="overflow-x-auto rounded-2xl border border-white/10 mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(96,165,250,0.05)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Factor</th>
                <th className="text-center py-4 px-5 text-blue-400 font-bold">CJC-1295/Ipamorelin</th>
                <th className="text-center py-4 px-5 text-emerald-400 font-bold">Direct HGH</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Cost per month', '~$80–200 (peptides)', '~$500–1,500+ (pharmaceutical)'],
                ['Injection frequency', '5–7x/week (small SC)', '5–7x/week (SC or IM)'],
                ['GH output pattern', 'Pulsatile — mimics natural', 'Supraphysiological — continuous'],
                ['GH output magnitude', '8–10x baseline', 'Depends on dose; highly variable'],
                ['Side effect risk', 'Low — pituitary still controls', 'Higher — bypasses feedback loops'],
                ['Blood glucose effects', 'Minimal at standard doses', 'Can cause insulin resistance'],
                ['IGF-1 changes', 'Moderate, sustained increase', 'Large, dose-dependent increase'],
                ['Hair/organ growth risk', 'Very low — pituitary regulated', 'Higher at high doses (acromegaly risk)'],
                ['Pituitary health', 'Pituitary remains active', 'Pituitary may downregulate over time'],
                ['Legality (research)', 'Research peptide status', 'Prescription-only pharmaceutical'],
                ['Shut-down risk', 'None — enhances natural axis', 'Possible pituitary suppression'],
                ['Best for', 'Optimization, body comp, anti-aging', 'Clinical GH deficiency, bodybuilding'],
              ].map(([factor, cjc, hgh], i) => (
                <tr key={factor} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-slate-300 font-medium">{factor}</td>
                  <td className="py-3 px-5 text-center text-slate-400">{cjc}</td>
                  <td className="py-3 px-5 text-center text-slate-400">{hgh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-white font-black text-lg mb-3">The Bottom Line on CJC vs HGH</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-3">
            For the vast majority of users — those optimizing body composition, recovery, and anti-aging without clinical GH deficiency — CJC-1295/Ipamorelin is the superior choice on nearly every metric except raw GH output magnitude. It works with the body&apos;s own pituitary regulation, maintains natural feedback loops, carries substantially lower side-effect risk, costs 5–10x less, and produces results that are comparable to low-to-moderate dose HGH for body composition purposes.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Direct HGH becomes the rational choice only in cases of clinically diagnosed GH deficiency (where the pituitary cannot respond adequately to GHRH/ghrelin signals), for users who have already optimized GH secretagogue response and need greater GH output, or for competitive bodybuilders targeting the highest possible GH levels regardless of side-effect trade-offs.
          </p>
        </div>
      </section>

      {/* === NEW: STACKING SECTION === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-7 h-7 text-blue-400" />
            <h2 className="text-3xl font-black text-white">Stacking CJC/Ipamorelin with Other Peptides</h2>
          </div>
          <p className="text-slate-400 mb-10 max-w-3xl">CJC-1295/Ipamorelin is one of the most versatile base peptides — it pairs effectively with healing peptides, anti-aging compounds, and fat-loss agents. Here are the four most evidence-supported stacking protocols.</p>

          <div className="space-y-5">
            {[
              {
                stack: 'CJC/Ipamorelin + BPC-157',
                goal: 'Body Composition + Enhanced Healing',
                color: 'emerald',
                description: 'The most popular dual-purpose stack. CJC/Ipamorelin drives the GH axis for fat loss, muscle preservation, and sleep optimization. BPC-157 adds direct tissue repair, gut healing, and localized angiogenesis. The two mechanisms are completely non-overlapping — there are no negative interactions, no shared pathways that could interfere, and no contraindications.',
                protocol: 'CJC-1295 100–200mcg + Ipamorelin 200–300mcg before bed (5 nights/week). BPC-157 250–500mcg subcutaneous daily (near injury site or abdomen). Both can be run concurrently indefinitely.',
                expectedOutcomes: 'Body recomposition (fat loss + muscle preservation), faster recovery from training, improved gut health, better sleep, reduced injury risk. Particularly popular with athletes who train hard and need both performance optimization and injury resilience.',
              },
              {
                stack: 'CJC/Ipamorelin + Epithalon',
                goal: 'Anti-Aging Amplifier Stack',
                color: 'purple',
                description: 'Epithalon (Epitalon) is a synthetic tetrapeptide that activates telomerase — the enzyme responsible for maintaining telomere length. Telomere shortening is one of the primary mechanisms of cellular aging. Combined with CJC/Ipamorelin&apos;s GH axis optimization, this stack targets aging from two distinct biological directions simultaneously: hormonal optimization and cellular senescence prevention.',
                protocol: 'CJC-1295/Ipamorelin daily before bed as standard protocol. Epithalon: 5–10mg/day for 10–20 day courses, 2–3 times per year. Epithalon is typically run in short bursts rather than continuously. Both can be run concurrently during Epithalon courses.',
                expectedOutcomes: 'Enhanced anti-aging effects beyond either alone, improved sleep quality (Epithalon has direct sleep architecture benefits), improved skin and cellular health, synergistic IGF-1 and regenerative hormone optimization. Popular in longevity-focused protocols.',
              },
              {
                stack: 'CJC/Ipamorelin + Semaglutide/GLP-1',
                goal: 'Ultimate Body Recomposition Stack',
                color: 'blue',
                description: 'This is arguably the most powerful body recomposition protocol currently available. GLP-1 peptides (semaglutide, tirzepatide, or retatrutide) create aggressive fat loss through appetite suppression and metabolic rate changes. Their primary weakness is lean mass loss risk. CJC/Ipamorelin directly counteracts this by maintaining elevated GH/IGF-1 levels that preserve and build lean muscle even in a caloric deficit.',
                protocol: 'GLP-1 peptide per standard titration schedule (e.g., semaglutide starting at 0.25mg/week). CJC-1295/Ipamorelin before bed, 5 nights/week as standard protocol. Ensure protein intake is at minimum 1g/lb lean body mass. Resistance training 3–4x/week is highly recommended.',
                expectedOutcomes: 'Simultaneous fat loss and muscle preservation (true body recomposition rather than weight loss). The GLP-1 handles the fat loss; the GH peptides ensure the weight lost is predominantly fat, not muscle. This stack is increasingly the preferred protocol for metabolic optimization.',
              },
            ].map((stack) => (
              <div key={stack.stack} className={`glass-card p-7 border-l-4 ${stack.color === 'emerald' ? 'border-emerald-500' : stack.color === 'purple' ? 'border-purple-500' : 'border-blue-500'}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white font-black text-xl">{stack.stack}</h3>
                    <span className={`text-xs font-bold ${stack.color === 'emerald' ? 'text-emerald-400' : stack.color === 'purple' ? 'text-purple-400' : 'text-blue-400'}`}>{stack.goal}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{stack.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/40 rounded-xl p-4">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Protocol</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{stack.protocol}</p>
                  </div>
                  <div className="bg-slate-800/40 rounded-xl p-4">
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Expected Outcomes</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{stack.expectedOutcomes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
