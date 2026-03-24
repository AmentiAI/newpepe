import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Is BPC-157 Legal? FDA Status, WADA Rules & Research Chemical Laws 2026',
  description: 'Is BPC-157 legal to buy? Complete guide to BPC-157 FDA status, WADA banned list status, and research chemical laws. What you need to know before purchasing.',
  keywords: 'is BPC-157 legal, BPC-157 legal status, BPC-157 FDA ban, BPC-157 WADA, is BPC-157 banned, BPC-157 research chemical, are peptides legal, BPC-157 legal to buy',
  openGraph: {
    title: 'Is BPC-157 Legal? FDA Status & Research Chemical Laws 2026',
    description: 'Complete guide to BPC-157 legal status — FDA, WADA, and research chemical laws explained.',
    type: 'article',
    url: 'https://bp157stack.com/is-bpc-157-legal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is BPC-157 Legal? FDA Status & Research Chemical Laws 2026',
    description: 'Complete guide to BPC-157 legal status — FDA, WADA, and research chemical laws.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const faqs = [
  { q: 'Is BPC-157 legal in the United States?', a: 'BPC-157 is legal to purchase, possess, and use in the United States as a research chemical. It is not a controlled substance under DEA scheduling. The FDA has included BPC-157 on a list of bulk drug substances that cannot be compounded for patient use by licensed pharmacies — but this restriction affects pharmacies and prescribers, not individuals purchasing research chemicals. As a research chemical, BPC-157 is legally sold and purchased in the US.' },
  { q: 'Is BPC-157 banned by WADA?', a: 'BPC-157 is listed on the WADA Prohibited List under Section S2 (Peptide Hormones, Growth Factors, Related Substances and Mimetics). It is prohibited in-competition and out-of-competition for athletes in WADA-governed sports. Athletes subject to anti-doping testing should not use BPC-157. Non-tested recreational users are not affected by WADA rules.' },
  { q: 'What did the FDA do to BPC-157?', a: 'In 2022, the FDA included BPC-157 on its list of bulk drug substances that present "demonstrable difficulties for compounding" and substances that "may present significant safety risks." This means FDA-regulated compounding pharmacies cannot make BPC-157 for patients. This does not make BPC-157 a controlled substance or make individual purchase illegal — it specifically regulates pharmaceutical compounding.' },
  { q: 'Can I buy BPC-157 online legally?', a: 'Yes — BPC-157 is legally sold online in the United States as a research chemical. Reputable suppliers sell it with certificates of analysis (COA) for research purposes. The research chemical designation means it is sold for laboratory and research use, not for human consumption. This is the legal framework under which peptide suppliers currently operate.' },
  { q: 'Is BPC-157 legal in Canada, UK, Australia?', a: 'Canada: BPC-157 is not a scheduled substance and can be purchased as a research chemical, though regulatory status can vary. UK: Not listed as a controlled substance; legal as a research chemical. Australia: Listed on the Therapeutic Goods Administration (TGA) schedule; purchase for research purposes falls in a grey area — check current local regulations. Always verify with current local laws before purchasing.' },
  { q: 'Is BPC-157 a steroid?', a: 'No — BPC-157 is a peptide, not a steroid. Steroids are lipid-based compounds that interact with steroid hormone receptors. BPC-157 is a 15-amino acid peptide chain with no hormonal activity whatsoever. It does not affect testosterone, estrogen, cortisol, or any other steroid hormone. No PCT (post-cycle therapy) is needed after using BPC-157.' },
];

export default function IsBpc157LegalPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Is BPC-157 Legal?', item: 'https://bp157stack.com/is-bpc-157-legal' },
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
              headline: 'Is BPC-157 Legal? FDA Status, WADA Rules & Research Chemical Laws',
              description: 'Complete guide to BPC-157 legal status including FDA regulatory actions, WADA anti-doping rules, and research chemical purchase laws.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide">LEGAL & REGULATORY GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Is BPC-157 Legal?<br />
            <span style={{ color: '#00ff88' }}>The Complete 2026 Answer</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8">
            BPC-157's legal status is nuanced — and the answer depends on who you are and how you're using it.
            Here's a clear breakdown of FDA status, WADA rules, and research chemical law.
          </p>
          {/* Quick answer box */}
          <div className="glass-card p-6 border-emerald-500/30 mb-8">
            <h2 className="text-white font-bold text-lg mb-4">Quick Answer Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Legal to buy in the US?', answer: '✅ Yes', sub: 'As a research chemical' },
                { label: 'FDA approved for patients?', answer: '❌ No', sub: 'Cannot be compounded by pharmacies' },
                { label: 'WADA banned for athletes?', answer: '⚠️ Yes', sub: 'In-competition & out-of-competition' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-xl font-bold text-white">{item.answer}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-white mb-4">FDA Status: What Actually Happened</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            In 2022, the FDA added BPC-157 to its list of bulk drug substances under 503A compounding regulations — specifically the list of substances that "may present significant safety risks" when used in compounded drugs.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">What this means:</strong> Licensed compounding pharmacies that fill prescriptions cannot legally make BPC-157 for patients. This is a restriction on pharmaceutical compounding, not on the substance itself.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong className="text-white">What this does NOT mean:</strong> BPC-157 is not a controlled substance (it's not scheduled by the DEA). Individual purchase of BPC-157 as a research chemical remains legal in the United States. The FDA action specifically targets the prescription compounding pathway — not research chemical sales.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
            <p className="text-amber-300 text-sm">
              <strong>Note:</strong> FDA regulatory status can change. This reflects the current situation as of early 2026. Always verify current status before purchasing.
            </p>
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-white mb-4">WADA Status: Athletes Must Know This</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            BPC-157 is listed on the WADA (World Anti-Doping Agency) Prohibited List under Section S2 — Peptide Hormones, Growth Factors, Related Substances, and Mimetics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <div className="text-red-400 font-bold mb-2">Prohibited for WADA Athletes</div>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• Prohibited in-competition</li>
                <li>• Prohibited out-of-competition</li>
                <li>• Applies to all WADA-governed sports</li>
                <li>• Olympic, professional, and many amateur sports</li>
              </ul>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <div className="text-emerald-400 font-bold mb-2">Not Affected by WADA Rules</div>
              <ul className="space-y-1 text-slate-400 text-sm">
                <li>• Recreational athletes (untested)</li>
                <li>• Non-professional users</li>
                <li>• Sports without anti-doping programs</li>
                <li>• General public research use</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            If you compete in any sport with anti-doping testing, assume BPC-157 is prohibited and act accordingly.
          </p>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-white mb-4">Research Chemical Status: How People Legally Buy BPC-157</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            BPC-157 is sold legally throughout the US as a research chemical — a designation for chemical compounds sold for laboratory and research purposes. Reputable suppliers operate under this framework, providing certificates of analysis (COA) confirming purity and identity.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Research chemicals are not subject to the same regulatory framework as pharmaceutical drugs. They are legal to purchase and possess, though they are marketed for research purposes rather than human consumption.
          </p>
          <div className="flex gap-3 mt-4">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
              View COA-Verified BPC-157 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Legal FAQ</h2>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="glass-card p-6 text-center">
          <p className="text-slate-500 text-xs leading-relaxed">
            This page is for informational purposes only and does not constitute legal advice. Regulatory status can change. Verify current regulations in your jurisdiction before purchasing or using any research chemical.
          </p>
        </div>
      </div>

      <InternalLinks path="/is-bpc-157-legal" />
    </div>
  );
}
