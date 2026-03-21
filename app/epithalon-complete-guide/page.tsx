import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Epithalon Complete Guide: Dosing, Benefits & Longevity Protocol (2026)',
  description: 'The complete Epithalon guide — telomere lengthening, anti-aging mechanisms, dosing protocol, cycle length, and results timeline. Everything you need to know about the most powerful longevity peptide.',
  keywords: 'epithalon guide, epithalon dosing, epithalon benefits, epithalon telomere, epithalon protocol, epithalon anti-aging, epithalon cycle, epithalon results, epithalon peptide',
  openGraph: {
    title: 'Epithalon Complete Guide: Dosing, Benefits & Protocol 2026',
    description: 'Complete guide to Epithalon — telomere lengthening, anti-aging, dosing protocol, and results.',
    type: 'article',
    url: 'https://bp157stack.com/epithalon-complete-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epithalon Complete Guide 2026',
    description: 'Everything about Epithalon — telomere lengthening, dosing, protocol, and anti-aging results.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const benefits = [
  {
    title: 'Telomere Lengthening',
    rank: 'Unique benefit',
    desc: 'Epithalon is the only peptide with clinical evidence of telomere lengthening in humans. Telomeres are the protective caps on chromosomes — shorter telomeres correlate with biological aging, disease risk, and reduced lifespan. Epithalon activates telomerase, the enzyme that rebuilds telomeres.',
  },
  {
    title: 'Pineal Gland Restoration',
    rank: 'Core mechanism',
    desc: 'The pineal gland progressively calcifies with age, reducing melatonin production and circadian signaling. Epithalon reactivates pineal function — most users notice dramatically improved sleep quality and more natural sleep-wake rhythm within 1–2 cycles.',
  },
  {
    title: 'Melatonin & Circadian Reset',
    rank: 'First noticeable effect',
    desc: 'Improved melatonin output from a restored pineal gland means better sleep architecture, improved immune function (melatonin is a potent antioxidant), and better hormonal rhythm throughout the day. This is typically the first benefit users report.',
  },
  {
    title: 'Gene Expression Anti-Aging',
    rank: 'Deep anti-aging',
    desc: 'Epithalon modulates expression of genes associated with aging, inflammation, and cellular senescence. It upregulates antioxidant defense systems and downregulates pro-inflammatory and pro-apoptotic genes — a systemic anti-aging effect at the transcription level.',
  },
  {
    title: 'Immune System Enhancement',
    rank: 'Systemic benefit',
    desc: 'Multiple clinical studies (particularly from Russian research — Epithalon is a Russian-developed peptide) show improved immune markers in elderly subjects using Epithalon. T-cell function, NK cell activity, and interferon production all improve.',
  },
  {
    title: 'Reduced Cancer Risk (Research)',
    rank: 'Longevity data',
    desc: 'Long-term animal studies show significantly reduced tumor incidence in Epithalon-treated groups compared to controls. The mechanism involves DNA repair enhancement and reduced oxidative damage accumulation. Human data is limited but promising.',
  },
];

const protocol = [
  {
    name: 'Standard Anti-Aging Cycle',
    dose: '5–10mg total per cycle',
    schedule: '1mg/day for 10 consecutive days',
    frequency: 'Twice per year (e.g., spring and fall)',
    route: 'SC injection (preferred) or intranasal',
    notes: 'The most widely used protocol. 10-day cycle twice yearly aligns with research protocols. Many users report benefits lasting 4–6 months per cycle.',
  },
  {
    name: 'Intensive Longevity Protocol',
    dose: '20–40mg total per cycle',
    schedule: '2mg/day for 10–20 days',
    frequency: 'Once per year or quarterly at lower doses',
    route: 'SC injection',
    notes: 'For users prioritizing maximal anti-aging effects. Based on higher-dose research protocols. Not necessary for most users — standard protocol is effective.',
  },
  {
    name: 'Maintenance Protocol',
    dose: '1–2mg/month',
    schedule: '1–2 injections per month',
    frequency: 'Ongoing (monthly)',
    route: 'SC injection or intranasal',
    notes: 'Lower-maintenance option between major cycles. Less evidence than the standard cycle protocol but some users prefer continuous low-level support.',
  },
];

const faqs = [
  { q: 'What does Epithalon actually do?', a: 'Epithalon is a tetrapeptide (4 amino acids) derived from the pineal gland protein epithalamin. Its primary studied effects: (1) Activates telomerase to lengthen telomeres — the only peptide with human clinical evidence of this effect. (2) Restores pineal gland function, improving melatonin output and circadian rhythm. (3) Modulates gene expression toward a younger biological state. (4) Improves immune function, particularly in aging subjects. (5) Reduces oxidative stress markers system-wide.' },
  { q: 'How do you take Epithalon?', a: 'The most common protocol: inject 1mg subcutaneously once daily for 10 consecutive days. This constitutes one cycle. Run 2 cycles per year (e.g., spring and fall). Each injection is straightforward — reconstitute with bacteriostatic water, draw 1mg into an insulin syringe, inject subcutaneously (abdomen, thigh, or deltoid). Intranasal administration is also used, though injection is considered the gold standard for bioavailability.' },
  { q: 'How long does Epithalon take to work?', a: 'The most immediate effects are sleep-related — many users notice deeper, more vivid sleep within the first 3–5 days of a cycle (pineal/melatonin effect). The telomere lengthening and gene expression changes are not subjectively noticeable in real-time — they are measurable via biological aging tests. Long-term users typically report cumulative improvements in energy, recovery, and overall wellbeing that build over multiple cycles across 1–2 years.' },
  { q: 'Is Epithalon safe?', a: 'Epithalon has an excellent safety record. It has been studied in Russia since the 1980s — with over 35 years of research and clinical use. No significant adverse effects have been reported in animal or human studies even at doses many times the standard protocol. It is non-toxic, non-carcinogenic, and does not suppress natural hormone production. It is one of the safest interventions in the longevity space.' },
  { q: 'Can Epithalon be stacked with other anti-aging peptides?', a: 'Yes — Epithalon stacks well with GHK-Cu (gene expression + collagen), NAD+ (mitochondrial function), and CJC-1295/Ipamorelin (GH optimization). The anti-aging stack protocol commonly used: Epithalon (twice-yearly cycle) + GHK-Cu (daily or ongoing) + NAD+ (daily) + CJC-1295/Ipamorelin (nightly, ongoing). These work through different and complementary mechanisms — no known interactions or contraindications.' },
  { q: 'Does Epithalon really lengthen telomeres?', a: 'Yes — this is supported by peer-reviewed research. A 2003 study (Khavinson et al.) demonstrated telomere lengthening in human cells treated with Epithalon. Additional studies in elderly subjects showed telomere lengthening alongside improvements in immune parameters. This makes Epithalon unique among peptides — most anti-aging compounds slow telomere shortening at best, while Epithalon has evidence of actual reversal.' },
];

export default function EpithalonCompleteGuidePage() {
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
                { '@type': 'ListItem', position: 3, name: 'Epithalon Complete Guide', item: 'https://bp157stack.com/epithalon-complete-guide' },
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
              headline: 'Epithalon Complete Guide: Dosing, Benefits & Longevity Protocol',
              description: 'Complete guide to Epithalon — telomere lengthening, anti-aging mechanisms, dosing protocol, and results timeline.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold tracking-wide">EPITHALON COMPLETE GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Epithalon:<br />
            <span className="text-purple-400">Complete Guide</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            The only peptide with clinical evidence of telomere lengthening. Complete guide to
            Epithalon — what it does, how to use it, and what to expect.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: '35+ yrs', label: 'Clinical research history' },
              { stat: '10 days', label: 'Cycle length' },
              { stat: '2×/year', label: 'Standard frequency' },
              { stat: '1mg/day', label: 'Standard dose' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-purple-400">{s.stat}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Epithalon Benefits: What the Research Shows</h2>
        <p className="text-slate-400 mb-10">Epithalon has one of the longest research histories of any peptide — developed in Russia starting in the 1980s with extensive clinical data.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-purple-400 font-semibold mb-1">{b.rank}</div>
                  <h3 className="text-white font-bold">{b.title}</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-3">Dosing Protocols</h2>
          <p className="text-slate-400 mb-8">Choose based on your goals and commitment level.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {protocol.map((p, i) => (
              <div key={p.name} className={`glass-card p-6 ${i === 0 ? 'border border-purple-500/30' : ''}`}>
                {i === 0 && <div className="text-xs font-bold text-purple-400 tracking-widest mb-2">RECOMMENDED</div>}
                <h3 className="text-white font-black text-lg mb-4">{p.name}</h3>
                <div className="space-y-2 mb-4">
                  <div><span className="text-slate-500 text-xs">Total dose: </span><span className="text-white text-xs font-semibold">{p.dose}</span></div>
                  <div><span className="text-slate-500 text-xs">Schedule: </span><span className="text-white text-xs font-semibold">{p.schedule}</span></div>
                  <div><span className="text-slate-500 text-xs">Frequency: </span><span className="text-white text-xs font-semibold">{p.frequency}</span></div>
                  <div><span className="text-slate-500 text-xs">Route: </span><span className="text-purple-400 text-xs font-semibold">{p.route}</span></div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-8">What to Expect: Results Timeline</h2>
        <div className="space-y-4">
          {[
            { period: 'Days 3–5 (during cycle)', results: 'Sleep quality noticeably improves — deeper sleep, more vivid dreams, waking more refreshed. This is the pineal/melatonin effect.' },
            { period: 'Days 7–10 (cycle completion)', results: 'Energy levels elevated. Many users report improved mood and cognitive clarity. Sleep optimization near-complete.' },
            { period: 'Weeks 2–4 (post-cycle)', results: 'Sustained sleep improvements. Some users report improved skin quality beginning. Subjective sense of wellbeing and vitality.' },
            { period: 'Months 1–6 (cumulative)', results: 'Long-term users report cumulative anti-aging effects over multiple cycles. Biological aging markers (if tested) may show improvement. Best results seen over 2+ years of bi-annual cycling.' },
          ].map((t) => (
            <div key={t.period} className="glass-card p-5 flex gap-5">
              <div className="text-purple-400 font-black text-sm shrink-0 w-40">{t.period}</div>
              <p className="text-slate-300 text-sm leading-relaxed">{t.results}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Epithalon FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-purple-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Get Epithalon</h2>
          <p className="text-slate-400 mb-6">COA-verified Epithalon — the telomere-lengthening longevity peptide. US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              Shop Epithalon <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/epithalon" className="btn-secondary px-8 py-4">Epithalon Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/epithalon-complete-guide" />
    </div>
  );
}
