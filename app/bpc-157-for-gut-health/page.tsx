import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol (2026)',
  description: 'BPC-157 is one of the most studied peptides for gut healing. Complete guide to using BPC-157 for leaky gut, IBD, Crohn\'s, IBS, and gastric ulcers — oral vs injectable, dosing protocol, and results timeline.',
  keywords: 'BPC-157 gut health, BPC-157 leaky gut, BPC-157 IBD, BPC-157 IBS, BPC-157 stomach, BPC-157 oral, BPC-157 intestinal healing, peptide gut health, BPC-157 for digestion, BPC-157 Crohn\'s',
  openGraph: {
    title: 'BPC-157 for Gut Health: Complete Protocol Guide',
    description: 'BPC-157 oral vs injectable for leaky gut, IBD, IBS — dosing, timeline, and results.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-for-gut-health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol',
    description: 'Complete guide to BPC-157 for gut healing — oral vs injectable, dosing, and results.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const benefits = [
  { title: 'Intestinal Wall Repair', desc: 'BPC-157 upregulates tight junction proteins (occludin, claudin) that seal gaps in the intestinal wall — directly addressing the mechanism of leaky gut syndrome.' },
  { title: 'Anti-Inflammatory Action', desc: 'Suppresses pro-inflammatory cytokines (TNF-α, IL-6) throughout the gut. This is the primary mechanism of benefit in IBD, Crohn\'s, and colitis.' },
  { title: 'Mucosal Protection & Repair', desc: 'Accelerates healing of gastric and intestinal mucosa. Animal models show complete ulcer healing in 1–2 weeks versus partial healing in controls.' },
  { title: 'Angiogenesis in Gut Tissue', desc: 'Stimulates new blood vessel formation in damaged gut tissue — improving oxygen and nutrient delivery to areas that are chronically inflamed and poorly perfused.' },
  { title: 'Gut-Brain Axis Modulation', desc: 'BPC-157 modulates the vagus nerve and gut-brain signaling, which explains the secondary benefits many users report: reduced anxiety, better mood, and improved cognitive clarity.' },
  { title: 'H. pylori & Ulcer Healing', desc: 'Direct protective effects on gastric epithelium. Research shows significant reduction in ulcer area and acceleration of complete mucosal repair.' },
];

const protocol = [
  { title: 'Oral (Capsule/Liquid)', dose: '250–500mcg daily', timing: 'Morning, fasted', notes: 'Best route for gut conditions. Peptide acts locally throughout the GI tract as it passes through. Most convenient method.' },
  { title: 'Subcutaneous Injection', dose: '250–500mcg/day', timing: 'Morning or split AM/PM', notes: 'Produces systemic + local gut effects. Best if you also have systemic inflammation or joint issues alongside gut problems.' },
  { title: 'Oral + Injection Stack', dose: '250mcg oral + 250mcg SC', timing: 'Oral AM, inject PM', notes: 'Advanced protocol for severe IBD or Crohn\'s. Covers both local mucosal and systemic inflammatory pathways simultaneously.' },
];

const faqs = [
  { q: 'Does BPC-157 actually heal leaky gut?', a: 'Multiple animal studies show BPC-157 directly restores intestinal barrier function by upregulating tight junction proteins (occludin, claudin-1) that seal the gut wall. It also reduces the inflammatory signaling that drives ongoing barrier disruption. Human clinical trials are limited, but anecdotal reports from leaky gut protocols are consistently positive — many users report significant symptom reduction in 2–4 weeks of oral BPC-157.' },
  { q: 'Should I take BPC-157 orally or inject it for gut health?', a: 'For gut-specific conditions (leaky gut, IBD, IBS, gastric ulcers): oral administration is preferred. When taken orally, BPC-157 acts topically throughout the entire GI tract as it passes through — directly treating the tissue that needs it. Injectable BPC-157 produces systemic effects but has less direct contact with gut tissue. Many protocols use both: oral for local gut action + injections for systemic anti-inflammatory effect.' },
  { q: 'How long does BPC-157 take to heal the gut?', a: 'Most users report noticeable improvement in gut symptoms (bloating, urgency, cramping) within 1–2 weeks of starting oral BPC-157. Significant healing (barrier repair, reduced inflammation markers) typically takes 4–8 weeks of consistent use. For chronic conditions like Crohn\'s or long-standing leaky gut, 3–6 month protocols are common before reassessing.' },
  { q: 'Is BPC-157 safe for long-term gut use?', a: 'BPC-157 has an excellent safety profile in animal models even at high doses — no toxicity, no carcinogenicity, no organ stress markers. Human clinical experience (primarily through research use) similarly shows very few adverse effects. It does not suppress stomach acid or alter gut microbiome composition, making it safer for long-term use than PPIs or antibiotics for gut management.' },
  { q: 'Can BPC-157 help with Crohn\'s disease?', a: 'BPC-157 has shown significant anti-inflammatory and intestinal healing effects in Crohn\'s-relevant animal models, including reduction of TNF-α and IL-6 — the primary cytokines driving Crohn\'s pathology. Anecdotally, many Crohn\'s patients report meaningful symptom reduction on BPC-157 protocols. It should be considered adjunctive to, not a replacement for, prescribed Crohn\'s medications without physician oversight.' },
];

export default function Bpc157GutHealthPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Healing', item: 'https://bp157stack.com/healing' },
                { '@type': 'ListItem', position: 3, name: 'BPC-157 for Gut Health', item: 'https://bp157stack.com/bpc-157-for-gut-health' },
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
              headline: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol',
              description: 'Complete guide to BPC-157 for gut healing — oral vs injectable, dosing protocol, and results timeline.',
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
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">BPC-157 GUT HEALING GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157 for<br />
            <span className="text-emerald-400">Gut Health</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            BPC-157 is the most powerful gut-healing peptide available. Here's the complete protocol
            for leaky gut, IBD, IBS, gastric ulcers, and Crohn's — including oral vs injectable routes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: 'Oral', label: 'Best route for gut' },
              { stat: '250mcg', label: 'Starting daily dose' },
              { stat: '2–4 wks', label: 'First results' },
              { stat: '3–6 mo', label: 'Full healing cycle' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-emerald-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">How BPC-157 Heals the Gut</h2>
        <p className="text-slate-400 mb-10">BPC-157 is a 15-amino acid peptide isolated from gastric juice protein. The "BPC" stands for Body Protection Compound — originally discovered for its protective role in the GI tract.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card p-6">
              <CheckCircle className="w-5 h-5 text-emerald-400 mb-3" />
              <h3 className="text-white font-bold mb-2">{b.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Gut Healing Protocol Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {protocol.map((p, i) => (
              <div key={p.title} className="glass-card p-6">
                <div className="text-xs font-bold text-emerald-400 tracking-widest mb-1">OPTION {i + 1}</div>
                <h3 className="text-white font-black text-lg mb-3">{p.title}</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex gap-2"><span className="text-slate-500 shrink-0">Dose:</span><span className="text-white">{p.dose}</span></div>
                  <div className="flex gap-2"><span className="text-slate-500 shrink-0">Timing:</span><span className="text-white">{p.timing}</span></div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-8">BPC-157 by Gut Condition</h2>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Condition</th>
                <th className="text-left py-3 px-4 text-emerald-400 font-bold">Best Route</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Dose</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Leaky Gut', 'Oral', '250–500mcg/day', '4–8 weeks'],
                ['IBS', 'Oral', '250mcg/day', '2–6 weeks'],
                ['IBD / Crohn\'s', 'Oral + Injectable', '250mcg oral + 250mcg SC', '6–12 weeks'],
                ['Gastric Ulcer', 'Oral', '500mcg/day', '2–4 weeks'],
                ['Colitis', 'Oral or Injectable', '250–500mcg/day', '4–8 weeks'],
                ['GERD/Reflux', 'Oral', '250mcg/day', '2–4 weeks'],
              ].map(([cond, route, dose, time], i) => (
                <tr key={cond} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-4 text-white font-semibold">{cond}</td>
                  <td className="py-3 px-4 text-emerald-400">{route}</td>
                  <td className="py-3 px-4 text-slate-300 font-mono">{dose}</td>
                  <td className="py-3 px-4 text-slate-400">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 Gut Health FAQ</h2>
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
          <h2 className="text-2xl font-black text-white mb-3">Get BPC-157 for Gut Healing</h2>
          <p className="text-slate-400 mb-6">COA-verified BPC-157 — available in injectable and oral/capsule form. US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/bpc-157" className="btn-secondary px-8 py-4">BPC-157 Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-for-gut-health" />
    </div>
  );
}
