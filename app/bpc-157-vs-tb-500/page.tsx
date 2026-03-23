import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 vs TB-500: Which Is Better for Healing? | Complete 2026 Comparison',
  description: 'BPC-157 vs TB-500 — complete comparison of mechanisms, dosing, best use cases, and why most protocols use both. Find out which healing peptide is right for your injury.',
  keywords: 'BPC-157 vs TB-500, BPC-157 vs TB-500 which is better, BPC-157 vs TB-500 difference, TB-500 vs BPC-157 for injury, BPC-157 TB-500 comparison',
  openGraph: {
    title: 'BPC-157 vs TB-500: Which Is Better for Healing?',
    description: 'Complete comparison of BPC-157 and TB-500 — mechanisms, dosing, and which to use for your injury type.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-vs-tb-500',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 vs TB-500: Which Is Better for Healing?',
    description: 'BPC-157 vs TB-500 — complete comparison of mechanisms, dosing, and which to use.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const comparison = [
  { feature: 'Mechanism', bpc: 'Local healing — upregulates GHR in fibroblasts, activates VEGF', tb: 'Systemic healing — mobilizes stem cells body-wide via actin binding' },
  { feature: 'Healing Scope', bpc: 'Local/targeted at injury site + gut via oral route', tb: 'Systemic — full body, including remote sites from injection' },
  { feature: 'Best For', bpc: 'Gut, tendon, ligament, nerve, bone, muscle injuries', tb: 'Systemic inflammation, flexibility, muscle tears, cardiac tissue' },
  { feature: 'Administration', bpc: 'Subcutaneous or oral (gastric acid stable)', tb: 'Subcutaneous only (not orally active)' },
  { feature: 'Half-Life', bpc: 'Short (~4 hours) — taken once or twice daily', tb: 'Medium (~24–48 hours) — taken 1–2× per week' },
  { feature: 'Results Timeline', bpc: 'Pain reduction in 2–4 days, structural repair at 4–8 weeks', tb: 'Flexibility improvement in 1–2 weeks, repair at 4–6 weeks' },
  { feature: 'Research Base', bpc: '100+ peer-reviewed studies, studied since 1991', tb: 'Multiple animal and in vitro studies, less research than BPC-157' },
  { feature: 'Safety Profile', bpc: 'No known LD50, no hormonal activity', tb: 'Extremely well tolerated, naturally occurring peptide fragment' },
  { feature: 'Gut Healing', bpc: '✅ Best option — repairs intestinal wall directly', tb: '🔶 Reduces systemic inflammation but no direct gut-wall repair' },
  { feature: 'Flexibility', bpc: '🔶 Minor improvement', tb: '✅ Significant and consistent flexibility improvement' },
  { feature: 'Nerve Repair', bpc: '✅ Documented axonal growth and neurite outgrowth', tb: '✅ Crosses BBB — neurological tissue healing' },
  { feature: 'Cost', bpc: 'Lower — smaller peptide, lower production cost', tb: 'Higher — larger peptide, more complex to produce' },
];

const faqs = [
  { q: 'BPC-157 vs TB-500: which should I take?', a: 'For gut issues or localized injuries (tendon, ligament, nerve): prioritize BPC-157. For systemic inflammation, flexibility, or large muscle tears where you want body-wide stem cell mobilization: prioritize TB-500. For most injuries, the best answer is both — they are complementary, not redundant, and their mechanisms don\'t overlap.' },
  { q: 'Can you take BPC-157 and TB-500 together?', a: 'Yes — BPC-157 and TB-500 are the most commonly combined healing peptides precisely because their mechanisms are complementary. BPC-157 handles local healing at the injury site; TB-500 provides systemic repair and stem cell mobilization. There is no negative interaction between them. Animal studies show 50–70% faster healing with the combination vs. either alone.' },
  { q: 'Is BPC-157 or TB-500 better for tendons?', a: 'Both help, but BPC-157 is more targeted for tendon healing specifically. It activates the tendon-specific transcription factor Scx, stimulates collagen type I synthesis, and upregulates growth hormone receptors in tendon fibroblasts. TB-500 adds systemic stem cell support and reduces inflammation. For tendon injuries like Achilles, rotator cuff, or ACL, the combination is optimal.' },
  { q: 'Is BPC-157 or TB-500 better for gut healing?', a: 'BPC-157 is clearly superior for gut healing and is the only choice if gut healing is your primary goal. BPC-157 is derived from human gastric juice and is designed for gut tissue repair — it heals intestinal barrier integrity, reduces IBD inflammation, and protects against NSAID-induced gut damage. TB-500 does not have direct gut healing properties.' },
  { q: 'Which peptide works faster — BPC-157 or TB-500?', a: 'BPC-157 typically produces faster initial pain relief (2–4 days) due to its rapid local anti-inflammatory and blood flow effects. TB-500\'s flexibility improvements often appear within the first 1–2 weeks. Both peptides show meaningful structural healing at the 4–8 week mark. For the fastest overall recovery, using both simultaneously is more effective than either alone.' },
];

export default function BpcVsTb500Page() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #071a10 50%, #060610 100%)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'BPC-157 vs TB-500', item: 'https://bp157stack.com/bpc-157-vs-tb-500' },
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
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">HEALING PEPTIDE COMPARISON</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157 vs TB-500:<br />
            <span style={{ color: '#00ff88' }}>Which Is Better for Healing?</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Both are the world's most studied healing peptides. But they work completely differently —
            and understanding the difference is the key to getting the fastest possible recovery.
          </p>
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-3 text-emerald-300 font-semibold">
            Short answer: Use both. They're complementary, not competing.
          </div>
        </div>
      </section>

      {/* Head-to-head summary */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-black text-emerald-400 mb-2">BPC-157</h2>
            <p className="text-slate-400 text-sm mb-6">Local healer — targets the specific injury site</p>
            <ul className="space-y-3">
              {['Works orally (gastric acid stable)', 'Best for gut, nerve, tendon, and ligament injuries', 'Fastest for localized pain relief (2–4 days)', '100+ peer-reviewed studies — most researched peptide', 'Activates healing pathways directly at injury site', 'No hormonal activity — no PCT needed'].map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-black text-blue-400 mb-2">TB-500</h2>
            <p className="text-slate-400 text-sm mb-6">Systemic healer — mobilizes repair body-wide</p>
            <ul className="space-y-3">
              {['Mobilizes stem cells from bone marrow to injury', 'Best for systemic inflammation and flexibility', 'Dramatically improves range of motion (1–2 weeks)', 'Crosses blood-brain barrier — neurological healing', 'Naturally occurring peptide fragment (Thymosin Beta-4)', 'Dosed 1–2× per week vs. daily BPC-157'].map((p) => (
                <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-8 text-center">Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0,255,136,0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(0,255,136,0.05)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Feature</th>
                <th className="text-left py-4 px-5 text-emerald-400 font-bold">BPC-157</th>
                <th className="text-left py-4 px-5 text-blue-400 font-bold">TB-500</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-slate-300 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-slate-400">{row.bpc}</td>
                  <td className="py-3 px-5 text-slate-400">{row.tb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Use case guide */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-8 text-center">Which Should You Use for Your Injury?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Use BPC-157 Only', cases: ['Gut healing (IBD, leaky gut, Crohn\'s)', 'Budget is the primary constraint', 'Minor tendon or ligament strain', 'Nerve repair focus'], color: 'emerald' },
              { title: 'Use Both (Recommended)', cases: ['Acute serious injury (ACL, rotator cuff)', 'Post-surgery recovery', 'Chronic injuries that haven\'t healed', 'Athletes wanting maximum recovery speed'], color: 'neon', glow: true },
              { title: 'Add TB-500 Priority', cases: ['Systemic inflammation throughout body', 'Multiple injury sites', 'Flexibility and range of motion focus', 'Large muscle tear recovery'], color: 'blue' },
            ].map((card) => (
              <div key={card.title} className={`glass-card p-6 ${card.glow ? 'border-emerald-500/40' : ''}`}>
                <h3 className={`font-black text-lg mb-4 ${card.color === 'neon' ? 'text-white' : card.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.cases.map((c) => (
                    <li key={c} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className={card.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}>•</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 vs TB-500 FAQ</h2>
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
          <h2 className="text-2xl font-black text-white mb-3">Get BPC-157 + TB-500</h2>
          <p className="text-slate-400 mb-6">COA-verified, US domestic. The gold standard healing stack.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/wolverine-stack" className="btn-secondary px-8 py-4">Full Protocol</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-vs-tb-500" />
    </div>
  );
}
