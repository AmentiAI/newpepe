import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 Oral vs Injectable: Which Route Is Better? (2026)',
  description: 'BPC-157 oral vs injectable — complete comparison of bioavailability, effectiveness, cost, and which administration route is best for your specific goals. The definitive guide for 2026.',
  keywords: 'BPC-157 oral vs injectable, BPC-157 oral, BPC-157 injectable, BPC-157 capsules vs injection, how to take BPC-157, BPC-157 bioavailability, BPC-157 subcutaneous vs oral',
  openGraph: {
    title: 'BPC-157 Oral vs Injectable: Which Is Better?',
    description: 'Complete comparison of oral vs injectable BPC-157 — bioavailability, effectiveness, and which to choose.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-oral-vs-injectable',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 Oral vs Injectable: Full Comparison',
    description: 'Which BPC-157 administration route is best? Complete 2026 guide.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const comparison = {
  oral: {
    label: 'Oral (Capsule / Liquid)',
    pros: [
      'Directly treats the GI tract from mouth to colon',
      'No needles — easiest administration',
      'Best for gut health, IBD, IBS, leaky gut',
      'No reconstitution or sterile preparation',
      'Discreet and convenient for daily use',
    ],
    cons: [
      'Lower systemic bioavailability than injection',
      'Less effective for systemic tissue repair (tendons, muscle)',
      'Higher dose may be needed for non-gut goals',
      'Capsule quality varies between suppliers',
    ],
    bestFor: ['Leaky gut, IBD, IBS, GERD', 'Gastric ulcer healing', 'Gut-brain anxiety connection', 'Beginners who want to avoid injections', 'General daily wellness protocol'],
  },
  injectable: {
    label: 'Injectable (Subcutaneous)',
    pros: [
      'Highest systemic bioavailability',
      'Fastest onset for systemic effects',
      'Best for tendon, ligament, muscle, joint healing',
      'Precise dose control',
      'Local injection allows targeting specific injury sites',
    ],
    cons: [
      'Requires needles, syringes, reconstitution',
      'More preparation and sterile technique required',
      'Mild discomfort from injection',
      'Less effective at local gut tissue vs oral route',
    ],
    bestFor: ['Tendon and ligament injuries', 'Joint healing', 'Systemic anti-inflammatory', 'Faster healing timelines', 'Users comfortable with injection protocol'],
  },
};

const scenarios = [
  { goal: 'Leaky gut / IBD / IBS', winner: 'Oral', reason: 'Direct contact with intestinal tissue throughout the GI tract' },
  { goal: 'Tendon / ligament healing', winner: 'Injectable (local)', reason: 'Systemic delivery + local injection near injury site' },
  { goal: 'Anxiety / gut-brain axis', winner: 'Oral', reason: 'Gut healing is the primary mechanism for mood benefits' },
  { goal: 'Joint pain / arthritis', winner: 'Injectable (local)', reason: 'Direct delivery to affected joint area' },
  { goal: 'Post-surgical recovery', winner: 'Both (combined)', reason: 'Systemic + local healing coverage' },
  { goal: 'General wellness', winner: 'Oral', reason: 'Easiest long-term compliance, good systemic distribution' },
  { goal: 'Muscle recovery', winner: 'Injectable', reason: 'Better systemic muscle tissue access' },
  { goal: 'Gastric ulcer', winner: 'Oral', reason: 'Direct coating of gastric mucosa during passage' },
];

const faqs = [
  { q: 'Is oral BPC-157 as effective as injectable?', a: 'For gut-specific conditions: oral BPC-157 is actually superior to injectable, because it passes directly through the GI tract and contacts the tissue being treated. For systemic applications (tendon healing, joint repair, muscle recovery): injectable BPC-157 has higher systemic bioavailability and is more effective. The "best" route depends entirely on what you\'re treating — there is no universal winner.' },
  { q: 'What is the bioavailability of oral BPC-157?', a: 'BPC-157 has unusual stability in the GI tract compared to most peptides (which are broken down by digestive enzymes). Research suggests meaningful oral bioavailability, though the exact percentage varies by study and individual. The key insight: unlike most injectable peptides, BPC-157 is specifically resistant to gastric acid and enzyme degradation — this is why oral administration is viable.' },
  { q: 'What dose of oral BPC-157 should I take?', a: 'For oral BPC-157: 250–500mcg per day is standard. Some protocols use 500mcg for gut healing, split into two 250mcg doses (AM and PM). Because oral bioavailability is lower than injection for systemic effects, some users increase to 500–1000mcg/day for systemic goals via oral route — though this increases cost.' },
  { q: 'Can I take BPC-157 orally and inject it at the same time?', a: 'Yes — this is a recognized protocol, especially for combined gut and systemic healing goals. A common split: 250mcg oral in the morning (for gut coverage) + 250mcg subcutaneous injection in the evening (for systemic/tissue healing). This covers both local GI tissue and systemic repair pathways simultaneously without doubling the total dose.' },
  { q: 'How do I take BPC-157 orally?', a: 'BPC-157 can be taken orally as: (1) pre-made capsules from a reputable supplier, (2) dissolved in sterile water and drunk — reconstituted BPC-157 can be taken orally just like an injection but swallowed instead. It can also be held sublingually for 30 seconds before swallowing for potentially faster absorption. Take on an empty stomach for best results.' },
];

export default function Bpc157OralVsInjectablePage() {
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
                { '@type': 'ListItem', position: 2, name: 'BPC-157', item: 'https://bp157stack.com/products/bpc-157' },
                { '@type': 'ListItem', position: 3, name: 'BPC-157 Oral vs Injectable', item: 'https://bp157stack.com/bpc-157-oral-vs-injectable' },
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
              headline: 'BPC-157 Oral vs Injectable: Which Administration Route Is Better?',
              description: 'Complete comparison of oral vs injectable BPC-157 — bioavailability, effectiveness, and which to choose for different goals.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">BPC-157 ADMINISTRATION GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157: Oral<br />
            <span className="text-emerald-400">vs Injectable</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            The route you choose matters — but not in the way most people think.
            Here's when oral wins, when injectable wins, and when to use both.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="glass-card p-4 text-center border-t-2 border-blue-500">
              <div className="text-sm font-black text-blue-400">Oral</div>
              <div className="text-slate-400 text-xs mt-1">Best for gut</div>
            </div>
            <div className="glass-card p-4 text-center border-t-2 border-emerald-500">
              <div className="text-sm font-black text-emerald-400">Injectable</div>
              <div className="text-slate-400 text-xs mt-1">Best for systemic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Side by side */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10">Oral vs Injectable: Complete Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[comparison.oral, comparison.injectable].map((route, i) => (
            <div key={route.label} className={`glass-card p-6 border-t-2 ${i === 0 ? 'border-blue-500' : 'border-emerald-500'}`}>
              <h3 className={`font-black text-xl mb-5 ${i === 0 ? 'text-blue-400' : 'text-emerald-400'}`}>{route.label}</h3>
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Advantages</p>
                <ul className="space-y-1.5">
                  {route.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Limitations</p>
                <ul className="space-y-1.5">
                  {route.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-slate-400 text-sm">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400/60" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Best for</p>
                <ul className="space-y-1">
                  {route.bestFor.map((b) => (
                    <li key={b} className="text-slate-400 text-xs">• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Which Route for Your Goal?</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Goal</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-bold">Recommended Route</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map(({ goal, winner, reason }, i) => (
                  <tr key={goal} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4 text-white font-semibold">{goal}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${winner === 'Oral' ? 'bg-blue-500/10 text-blue-400' : winner.includes('local') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'}`}>{winner}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 Oral vs Injectable FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-emerald-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Get BPC-157</h2>
          <p className="text-slate-400 mb-6">Injectable (lyophilized) and oral BPC-157 — COA-verified, US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/how-to-reconstitute-peptides" className="btn-secondary px-8 py-4">Reconstitution Guide</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-oral-vs-injectable" />
    </div>
  );
}
