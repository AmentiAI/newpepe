import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Best Peptides for Men Over 50: Anti-Aging, Muscle & Vitality (2026)',
  description: 'The best peptides for men over 50 — restore GH levels, rebuild muscle, fight aging, and recover faster. Complete guide to CJC-1295/Ipamorelin, BPC-157, Epithalon, and GHK-Cu for men 50+.',
  keywords: 'peptides for men over 50, best peptides for men over 50, anti-aging peptides men, peptides for testosterone, peptides for muscle over 50, CJC-1295 over 50, BPC-157 over 50, epithalon men',
  openGraph: {
    title: 'Best Peptides for Men Over 50: Complete Guide 2026',
    description: 'Restore GH, rebuild muscle, and fight aging — the best peptide protocols for men 50+.',
    type: 'article',
    url: 'https://bp157stack.com/best-peptides-for-men-over-50',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Men Over 50',
    description: 'Anti-aging, muscle, and vitality peptides for men 50+ — complete 2026 guide.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const ageIssues = [
  { issue: 'GH decline', detail: 'Growth hormone drops 14% per decade after 30. By 50, most men have 50–60% less GH than at peak. This drives muscle loss, fat gain, poor sleep, and slower recovery.' },
  { issue: 'Muscle loss (sarcopenia)', detail: 'Men lose 3–8% of lean muscle mass per decade after 30. After 50 this accelerates. Without intervention, the average man loses significant functional strength by 65.' },
  { issue: 'Slower healing', detail: 'Tissue repair slows with age — tendons, joints, and muscles take 2–3× longer to heal after 50. This increases injury frequency and duration.' },
  { issue: 'Cellular aging', detail: 'Telomere shortening, mitochondrial dysfunction, and declining NAD+ levels drive visible and functional aging. These are targetable with specific peptides.' },
  { issue: 'Skin & collagen loss', detail: 'Collagen production drops ~1% per year starting at 25. By 50, cumulative loss is visible — skin thinning, wrinkles, joint cartilage degradation.' },
];

const peptides = [
  {
    name: 'CJC-1295 / Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    priority: '1',
    target: 'GH Restoration',
    color: 'blue',
    why: 'The #1 priority for men over 50. GH levels drop dramatically with age and this decline drives almost every aging symptom: muscle loss, fat gain, poor sleep, slow recovery. CJC-1295/Ipamorelin restores GH pulsatility to levels 8–10× above baseline — without shutting down natural production.',
    results: ['Significantly improved deep sleep within 1–2 weeks', 'Lean muscle recovery and preservation', 'Accelerated fat loss — particularly visceral', 'Faster workout recovery and reduced joint pain'],
    dose: '100–200mcg CJC + 200–300mcg Ipa before bed, 5 nights/week',
  },
  {
    name: 'BPC-157',
    slug: 'bpc-157',
    priority: '2',
    target: 'Joint & Tissue Healing',
    color: 'emerald',
    why: 'By 50, most men have accumulated joint injuries, tendon issues, or chronic inflammation. BPC-157 heals tissue 2–4× faster than normal — tendons, ligaments, gut lining, and joints. One of the most reported benefits among men 50+ is dramatic reduction in chronic joint pain.',
    results: ['Heals chronic tendon/joint injuries', 'Reduces gut inflammation and IBS symptoms', 'Accelerates post-workout recovery', 'Anti-inflammatory system-wide'],
    dose: '250–500mcg/day SC injection or oral',
  },
  {
    name: 'Epithalon',
    slug: 'epithalon',
    priority: '3',
    target: 'Longevity & Telomeres',
    color: 'purple',
    why: 'Epithalon is the only peptide with clinical evidence of telomere lengthening in humans. It also resets the pineal gland — improving melatonin output, circadian rhythm, and sleep architecture. Men 50+ report better sleep, more energy, and improved hormonal rhythm.',
    results: ['Telomere lengthening (DNA-level anti-aging)', 'Improved melatonin production and sleep quality', 'Circadian rhythm reset', 'Reported improvements in energy and mood'],
    dose: '5–10mg SC over 10-day cycle, 2× per year',
  },
  {
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    priority: '4',
    target: 'Skin, Collagen & Gene Expression',
    color: 'amber',
    why: 'GHK-Cu resets gene expression toward a younger state — upregulating over 30 genes associated with tissue repair and downregulating genes associated with inflammation and aging. Visible effects: skin quality, wound healing, hair thinning, and joint cartilage support.',
    results: ['Skin tightening and wrinkle reduction', 'Hair density improvement', 'Collagen synthesis boost', 'Gene expression profile reset'],
    dose: '1–2mg/day SC or topical',
  },
  {
    name: 'NAD+',
    slug: 'nad',
    priority: '5',
    target: 'Mitochondrial & Cognitive Health',
    color: 'blue',
    why: 'NAD+ declines 50% by age 50, driving mitochondrial dysfunction, cognitive decline, and cellular energy deficits. NAD+ peptide supplementation restores cellular energy metabolism, supports DNA repair pathways, and improves cognitive clarity.',
    results: ['Increased cellular energy', 'Improved cognitive clarity and focus', 'DNA repair pathway activation', 'Mitochondrial health restoration'],
    dose: '300–500mg/day (oral or IV equivalent)',
  },
];

const faqs = [
  { q: 'What is the best peptide for men over 50?', a: 'For men over 50, the most impactful peptide is CJC-1295/Ipamorelin. GH decline is the primary driver of age-related muscle loss, fat gain, poor sleep, and slow recovery in men — and CJC-1295/Ipamorelin directly restores GH pulsatility. The second-highest priority is BPC-157 for joint/tissue healing and Epithalon for longevity. A protocol combining all three covers the major aging pathways comprehensively.' },
  { q: 'Are peptides safe for men over 50?', a: 'The peptides most used by men over 50 — CJC-1295/Ipamorelin, BPC-157, Epithalon, and GHK-Cu — have good safety profiles in research and widespread anecdotal use. They work through natural signaling pathways (pituitary, cellular repair, gene expression) rather than adding exogenous hormones. Men with history of cancer should consult a physician before using GH-stimulating peptides, as GH promotes cellular growth.' },
  { q: 'Do peptides help testosterone levels in men over 50?', a: 'Healing peptides and GHK-Cu do not directly affect testosterone. CJC-1295/Ipamorelin works on the GH axis, not testosterone. However, improved GH levels, better sleep quality, and reduced body fat (all outcomes of a GH secretagogue protocol) all indirectly support healthier testosterone levels. For direct testosterone support, men over 50 typically need TRT (testosterone replacement therapy) rather than peptides alone.' },
  { q: 'Can I stack multiple peptides at 50+?', a: 'Yes — stacking is common and beneficial. The most popular protocol for men over 50: CJC-1295/Ipamorelin (nightly, 5 days/week) + BPC-157 (morning, daily) + Epithalon (twice-yearly cycle) + NAD+ (daily). These work through entirely different mechanisms and have no negative interactions. Start one peptide at a time over 4–8 weeks to identify any individual responses before adding more.' },
  { q: 'How long before I see results from peptides at 50?', a: 'CJC-1295/Ipamorelin: sleep improvement in 1–2 weeks, body composition changes at 6–8 weeks, peak results at 3–4 months. BPC-157: pain reduction in 1–2 weeks, tissue healing in 4–8 weeks. Epithalon: subjective energy and sleep quality in 1–2 weeks, biological aging markers (telomere length) require months to assess. GHK-Cu: skin quality improvements in 4–8 weeks.' },
];

export default function PeptidesForMenOver50Page() {
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
                { '@type': 'ListItem', position: 3, name: 'Peptides for Men Over 50', item: 'https://bp157stack.com/best-peptides-for-men-over-50' },
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
              headline: 'Best Peptides for Men Over 50: Anti-Aging, Muscle & Vitality Guide',
              description: 'Complete guide to the best peptides for men over 50 — GH restoration, muscle, longevity, and joint healing.',
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
            <span className="text-blue-400 text-sm font-semibold tracking-wide">PEPTIDES FOR MEN 50+ GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Best Peptides for<br />
            <span className="text-blue-400">Men Over 50</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            After 50, GH drops, muscle disappears, healing slows, and recovery suffers.
            Here are the peptides that directly target these changes — and what to expect from each.
          </p>
        </div>
      </section>

      {/* Why aging matters */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-6">What Changes After 50 (And Why Peptides Help)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ageIssues.map((a) => (
            <div key={a.issue} className="glass-card p-5">
              <h3 className="text-white font-bold mb-2">{a.issue}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Peptide recommendations */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Top 5 Peptides for Men Over 50</h2>
          <p className="text-slate-400 mb-10">Ranked by impact on age-related decline. Start with priority 1, add others over time.</p>
          <div className="space-y-6">
            {peptides.map((p) => (
              <div key={p.name} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-lg ${p.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : p.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : p.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {p.priority}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold tracking-widest mb-1 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'emerald' ? 'text-emerald-400' : p.color === 'purple' ? 'text-purple-400' : 'text-amber-400'}`}>{p.target}</div>
                    <h3 className="text-white font-black text-xl mb-2">{p.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.why}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-slate-400 text-xs">
                          <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-emerald-400" /> {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="bg-slate-800/50 rounded-lg px-3 py-1.5">
                        <span className="text-slate-500 text-xs">Protocol: </span>
                        <span className="text-white text-xs font-semibold">{p.dose}</span>
                      </div>
                      <Link href={`/products/${p.slug}`} className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                        View {p.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Peptides for Men 50+ FAQ</h2>
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
          <h2 className="text-2xl font-black text-white mb-3">Start Your Protocol</h2>
          <p className="text-slate-400 mb-6">COA-verified peptides — CJC-1295/Ipamorelin, BPC-157, Epithalon, GHK-Cu, and NAD+.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop All Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/anti-aging" className="btn-secondary px-8 py-4">Anti-Aging Protocols</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/best-peptides-for-men-over-50" />
    </div>
  );
}
