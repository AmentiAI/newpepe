import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 for Tendons & Ligaments: Healing Protocol & Timeline (2026)',
  description: 'BPC-157 is the most effective peptide for tendon and ligament healing. Complete protocol for Achilles tendon, rotator cuff, patellar tendon, and ligament injuries — dosing, injection site, and results timeline.',
  keywords: 'BPC-157 tendons, BPC-157 tendon repair, BPC-157 for tendon healing, BPC-157 ligament, BPC-157 Achilles tendon, BPC-157 rotator cuff, BPC-157 tendon protocol, peptide tendon healing',
  openGraph: {
    title: 'BPC-157 for Tendons & Ligaments: Complete Healing Protocol',
    description: 'BPC-157 tendon and ligament healing — dosing, injection sites, and results timeline.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-for-tendons',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Tendons: Healing Protocol & Timeline',
    description: 'Complete BPC-157 protocol for tendon and ligament repair.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const injuries = [
  { injury: 'Achilles Tendon', dose: '250–500mcg/day', site: 'Local SC near Achilles', timeline: '4–8 weeks', notes: 'Most researched BPC-157 tendon application. Inject subcutaneously near (not into) the tendon. Local + systemic protocol for severe tears.' },
  { injury: 'Patellar Tendon', dose: '250–500mcg/day', site: 'Local SC around knee', timeline: '4–8 weeks', notes: 'Patellar tendinopathy responds very well. Inject around the knee joint, not directly into the tendon. Add TB-500 for systemic support.' },
  { injury: 'Rotator Cuff', dose: '500mcg/day', site: 'Local SC shoulder + systemic', timeline: '6–12 weeks', notes: 'Partial tears respond better than full ruptures. Stack with TB-500 for systemic collagen synthesis. Local injection near the shoulder.' },
  { injury: 'Plantar Fasciitis', dose: '250–500mcg/day', site: 'Local SC heel/arch', timeline: '3–6 weeks', notes: 'Excellent results reported. Inject near the plantar fascia insertion point. Combine with oral BPC-157 for additional anti-inflammatory effect.' },
  { injury: 'MCL/LCL Ligament', dose: '500mcg/day', site: 'Local SC knee + systemic', timeline: '6–10 weeks', notes: 'Grade 1–2 tears respond well. Grade 3 (complete ruptures) may still benefit post-surgery. BPC-157 accelerates ligament fibroblast proliferation.' },
  { injury: 'Tennis Elbow (Epicondylitis)', dose: '250–500mcg/day', site: 'Local SC elbow', timeline: '3–6 weeks', notes: 'Lateral epicondylitis responds quickly to local BPC-157. Often resolves in 4 weeks with daily protocol when steroid injections have failed.' },
];

const timeline = [
  { week: 'Week 1–2', events: ['Inflammation visibly reduced', 'Pain on movement decreases', 'Improved range of motion', 'Sleep improves (less pain interruption)'] },
  { week: 'Week 2–4', events: ['Collagen remodeling begins', 'Tissue tensile strength increasing', 'Can begin gentle loaded stretching', 'Pain at rest often resolves'] },
  { week: 'Week 4–8', events: ['Significant structural repair', 'Return to low-impact training', 'Palpable tissue quality improvement', 'Pain with loading substantially reduced'] },
  { week: 'Week 8–12', events: ['Near-complete functional recovery for mild–moderate injuries', 'Begin progressive loading protocol', 'Add eccentric exercises for tendon conditioning', 'Maintain lower dose BPC-157 (250mcg) during return to sport'] },
];

const faqs = [
  { q: 'How does BPC-157 heal tendons?', a: 'BPC-157 accelerates tendon healing through four main mechanisms: (1) Upregulates tendon fibroblast growth factor — the cells that produce collagen in tendons multiply faster. (2) Stimulates VEGF (vascular endothelial growth factor) — new blood vessels form in the tendon, dramatically improving healing oxygen/nutrient delivery to avascular tendon tissue. (3) Activates the FAK-paxillin pathway — this promotes proper tendon fiber alignment during healing. (4) Reduces local inflammation and prevents scar tissue formation that weakens healed tendons.' },
  { q: 'Should I inject BPC-157 near the tendon or systemically?', a: 'For tendon injuries: local injection near the injury site is preferred and produces faster results than systemic injection alone. You do NOT inject directly into the tendon — that would be dangerous. Instead, inject subcutaneously into the skin near (within 1–2cm of) the injured tendon. Some protocols use both local + systemic (in the abdomen) simultaneously for maximum coverage. Oral BPC-157 can supplement for systemic anti-inflammatory effect.' },
  { q: 'Is BPC-157 better than TB-500 for tendons?', a: 'BPC-157 and TB-500 are complementary for tendon healing and most protocols use both together. BPC-157 acts primarily on local tissue repair — accelerating fibroblast activity, angiogenesis, and inflammation control at the injury site. TB-500 (Thymosin Beta-4) acts systemically — mobilizing stem cells, promoting actin polymerization for tissue remodeling, and reducing systemic inflammation. The BPC-157 + TB-500 "Wolverine Stack" is the gold standard tendon healing protocol.' },
  { q: 'How long does BPC-157 take to heal a tendon?', a: 'Timeline depends on injury severity: Mild tendinopathy or partial tears: significant improvement in 2–4 weeks, often near-full resolution by 6–8 weeks. Moderate injuries (grade 2 tears): 6–10 weeks for functional recovery. Severe injuries or post-surgical: BPC-157 accelerates but cannot replace surgical repair for grade 3 tears. Animal data shows 2–4× faster tendon healing compared to controls with BPC-157 treatment.' },
  { q: 'Can I train while using BPC-157 for tendon healing?', a: 'Light movement and stretching are generally recommended — immobilization slows tendon healing. During weeks 1–4: avoid loaded exercises on the injured tendon, focus on unloaded range of motion. During weeks 4–8: introduce bodyweight loading, eccentric exercises. After week 8: progressive loading return to sport. BPC-157 significantly accelerates this timeline but does not bypass the biological remodeling stages — rushing back too fast risks re-injury.' },
];

export default function Bpc157TendonsPage() {
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
                { '@type': 'ListItem', position: 3, name: 'BPC-157 for Tendons', item: 'https://bp157stack.com/bpc-157-for-tendons' },
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
              headline: 'BPC-157 for Tendons & Ligaments: Healing Protocol & Timeline',
              description: 'Complete protocol for BPC-157 tendon and ligament healing — dosing, injection sites, and results timeline.',
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
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-wide">BPC-157 TENDON HEALING GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157 for<br />
            <span className="text-blue-400">Tendons & Ligaments</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            BPC-157 is the most powerful peptide for tendon and ligament repair.
            Complete protocol for every major tendon injury — injection site, dosing, and recovery timeline.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: 'Local SC', label: 'Best injection route' },
              { stat: '500mcg', label: 'Daily dose' },
              { stat: '1–2 wks', label: 'Pain reduction' },
              { stat: '6–12 wks', label: 'Full repair cycle' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-blue-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Injury table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Protocol by Injury Type</h2>
        <p className="text-slate-400 mb-8">Dosing, injection site, and expected timeline for the most common tendon and ligament injuries.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Injury</th>
                <th className="text-left py-3 px-4 text-blue-400 font-bold">Dose</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Injection Site</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {injuries.map(({ injury, dose, site, timeline: t }, i) => (
                <tr key={injury} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-4 text-white font-semibold">{injury}</td>
                  <td className="py-3 px-4 text-blue-400 font-mono">{dose}</td>
                  <td className="py-3 px-4 text-slate-300">{site}</td>
                  <td className="py-3 px-4 text-slate-400">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Injury notes */}
      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {injuries.map((inj) => (
            <div key={inj.injury} className="glass-card p-5">
              <h3 className="text-white font-bold mb-2">{inj.injury}</h3>
              <p className="text-slate-400 text-sm">{inj.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Recovery Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t) => (
              <div key={t.week} className="glass-card p-5">
                <div className="text-blue-400 font-black text-sm mb-3">{t.week}</div>
                <ul className="space-y-2">
                  {t.events.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-slate-300 text-xs">
                      <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-blue-400" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wolverine stack callout */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <h2 className="text-xl font-black text-white mb-3">For Severe Injuries: Add TB-500</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            The BPC-157 + TB-500 "Wolverine Stack" is the gold standard for serious tendon and ligament injuries.
            TB-500 adds systemic stem cell mobilization and actin polymerization that accelerates structural repair —
            covering what BPC-157 alone cannot reach.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/wolverine-stack" className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2">Wolverine Stack Protocol <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-sm px-5 py-2.5">Ultimate Healing Stack</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 Tendon Healing FAQ</h2>
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
          <h2 className="text-2xl font-black text-white mb-3">Get BPC-157 for Tendon Healing</h2>
          <p className="text-slate-400 mb-6">COA-verified BPC-157 — the most potent tendon repair peptide available.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="nofollow sponsored noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/tb-500" className="btn-secondary px-8 py-4">Add TB-500</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-for-tendons" />
    </div>
  );
}
