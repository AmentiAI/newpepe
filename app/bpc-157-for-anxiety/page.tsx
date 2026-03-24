import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 for Anxiety & Depression: What the Research Shows (2026)',
  description: 'BPC-157 has multiple mechanisms that reduce anxiety and depression — gut-brain axis repair, dopamine modulation, and GABA activity. Complete guide to BPC-157 for anxiety with dosing protocol.',
  keywords: 'BPC-157 anxiety, BPC-157 depression, BPC-157 for anxiety, BPC-157 mental health, BPC-157 dopamine, BPC-157 gut brain axis, peptide for anxiety, BPC-157 mood',
  openGraph: {
    title: 'BPC-157 for Anxiety: What the Research Shows',
    description: 'How BPC-157 reduces anxiety and depression — mechanisms, dosing, and results.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-for-anxiety',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Anxiety & Depression',
    description: 'BPC-157 gut-brain, dopamine, and GABA mechanisms for anxiety reduction.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const mechanisms = [
  {
    title: 'Gut-Brain Axis Repair',
    desc: 'The gut-brain axis is the primary pathway through which gut inflammation drives anxiety and depression. BPC-157 heals the intestinal wall and reduces gut inflammation — directly improving gut-to-brain signaling. Many users report anxiety reduction as a secondary benefit while using BPC-157 for gut healing.',
  },
  {
    title: 'Dopamine System Modulation',
    desc: 'BPC-157 modulates dopaminergic signaling — it has been shown to counteract dopamine system depletion (relevant to anhedonia and depression) and reduce hyperactivity in dopamine pathways (relevant to anxiety and agitation). It acts as a modulator rather than a direct agonist or antagonist.',
  },
  {
    title: 'GABA-A Receptor Activity',
    desc: 'Research shows BPC-157 has GABA-A receptor modulatory activity — the same receptor class targeted by benzodiazepines. This contributes to anxiolytic (anxiety-reducing) effects without the dependency risk or cognitive impairment of benzo drugs.',
  },
  {
    title: 'Vagus Nerve Activation',
    desc: 'BPC-157 activates the vagus nerve — the primary communication pathway between gut and brain. Vagal tone is strongly associated with reduced anxiety and improved emotional regulation. Improving vagal signaling through gut repair is a key indirect mechanism.',
  },
  {
    title: 'HPA Axis Normalization',
    desc: 'The HPA (hypothalamic-pituitary-adrenal) axis governs cortisol and stress responses. BPC-157 has been shown to normalize HPA dysregulation in animal models — particularly in stress-induced or trauma-induced anxiety states.',
  },
  {
    title: 'Serotonin System Support',
    desc: 'Roughly 90% of serotonin is produced in the gut. By repairing gut integrity and reducing intestinal inflammation, BPC-157 supports the gut\'s serotonin production environment — relevant to both mood stabilization and anxiety reduction.',
  },
];

const protocol = {
  dose: '250–500mcg per day',
  routes: [
    { name: 'Oral (capsule/liquid)', notes: 'Best for gut-brain axis approach. Directly treats the GI system that drives gut-brain signaling. Most convenient.' },
    { name: 'Subcutaneous injection', notes: 'Produces systemic effects plus CNS modulation. Faster onset of systemic effects than oral.' },
    { name: 'Combination', notes: '250mcg oral AM + 250mcg SC PM for maximum coverage of both gut-local and systemic pathways.' },
  ],
  timing: 'Morning (oral) or split AM/PM. Some users prefer morning dosing to avoid sleep interference (though BPC-157 rarely disrupts sleep).',
  duration: '4–12 weeks for anxiety/mood benefits. Often noticeable within 1–2 weeks.',
};

const faqs = [
  { q: 'Can BPC-157 reduce anxiety?', a: 'Multiple animal studies demonstrate anxiolytic effects from BPC-157 — including reduced anxiety behavior in forced-swim, open-field, and elevated plus-maze tests. The mechanisms include GABA-A receptor modulation, dopamine system normalization, vagus nerve activation, and HPA axis regulation. Human anecdotal reports are consistently positive for anxiety reduction, particularly among users who also have gut issues (gut-brain axis connection).' },
  { q: 'How does BPC-157 affect depression?', a: 'BPC-157 counteracts dopaminergic deficiency states that underlie depression (anhedonia, motivational deficit). It also supports serotonin production pathways through gut healing. Animal studies show BPC-157 reverses depression-like behavior in models of both stress-induced and drug-induced depression. It is not a direct serotonin reuptake inhibitor — it works through different and more fundamental mechanisms.' },
  { q: 'Is oral or injectable BPC-157 better for anxiety?', a: 'For anxiety with a gut-brain component (which is the majority of anxiety cases): oral BPC-157 is often preferred as it directly treats the gut and maximally impacts the gut-brain axis. For anxiety without obvious gut symptoms: subcutaneous injection may produce faster central nervous system effects. Many protocols use both routes simultaneously for comprehensive coverage.' },
  { q: 'How long does BPC-157 take to reduce anxiety?', a: 'Users typically report initial anxiety reduction within 1–2 weeks of starting BPC-157. This often correlates with reduced gut inflammation (the gut-brain signal improves as gut healing begins). Maximum anxiety reduction typically occurs over 4–8 weeks as gut barrier integrity and neurological signaling normalize. Some users report noticing effects within days — particularly the calming/GABA-mediated effects.' },
  { q: 'Can BPC-157 be used with antidepressants or anxiolytics?', a: 'BPC-157 does not have known negative interactions with SSRIs, SNRIs, or benzodiazepines. Its mechanisms are different enough from these drug classes that combination is generally considered low-risk. However, given the lack of formal pharmacokinetic studies, anyone on psychiatric medications should discuss peptide use with their prescribing physician. BPC-157 should not be used as a replacement for prescribed mental health medications without physician guidance.' },
];

export default function Bpc157AnxietyPage() {
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
                { '@type': 'ListItem', position: 3, name: 'BPC-157 for Anxiety', item: 'https://bp157stack.com/bpc-157-for-anxiety' },
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
              headline: 'BPC-157 for Anxiety & Depression: What the Research Shows',
              description: 'How BPC-157 reduces anxiety and depression — gut-brain axis, dopamine, GABA mechanisms and dosing protocol.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-semibold tracking-wide">BPC-157 ANXIETY & MOOD GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157 for<br />
            <span className="text-indigo-400">Anxiety & Depression</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            BPC-157 has six distinct mechanisms that reduce anxiety and improve mood — from gut-brain axis repair
            to GABA modulation and dopamine normalization.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: '6', label: 'Anxiety mechanisms' },
              { stat: 'Oral', label: 'Best route for gut-brain' },
              { stat: '1–2 wks', label: 'First effects' },
              { stat: 'No tolerance', label: 'vs benzodiazepines' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-indigo-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanisms */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">How BPC-157 Reduces Anxiety</h2>
        <p className="text-slate-400 mb-10">BPC-157 acts on anxiety through multiple independent pathways — not a single mechanism drug.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {mechanisms.map((m) => (
            <div key={m.title} className="glass-card p-6">
              <CheckCircle className="w-5 h-5 text-indigo-400 mb-3" />
              <h3 className="text-white font-bold mb-2">{m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Protocol for Anxiety & Mood</h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <p className="text-indigo-400 font-bold mb-3">Daily Dose</p>
                <p className="text-white font-mono text-lg">{protocol.dose}</p>
                <p className="text-slate-400 text-sm mt-2">Split into 1–2 doses depending on route</p>
              </div>
              <div>
                <p className="text-indigo-400 font-bold mb-3">Timing</p>
                <p className="text-white text-sm">{protocol.timing}</p>
              </div>
            </div>
            <div>
              <p className="text-slate-400 font-semibold text-sm mb-3">Administration Routes</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {protocol.routes.map((r) => (
                  <div key={r.name} className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-white font-semibold text-sm mb-2">{r.name}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{r.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important disclaimer box */}
      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
          <p className="text-amber-300 font-semibold text-sm mb-1">Important Note</p>
          <p className="text-slate-400 text-sm">BPC-157 is a research peptide, not an approved treatment for anxiety or depression. This content is educational. Do not discontinue prescribed mental health medications without guidance from a physician.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 Anxiety FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-indigo-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <p className="text-slate-400 mb-6">COA-verified BPC-157 — oral and injectable. US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/bpc-157" className="btn-secondary px-8 py-4">BPC-157 Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-for-anxiety" />
    </div>
  );
}
