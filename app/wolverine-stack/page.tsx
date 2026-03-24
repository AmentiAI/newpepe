import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Clock } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'The Wolverine Stack: BPC-157 + TB-500 | Ultimate Healing Peptide Protocol 2026',
  description: 'The Wolverine Stack combines BPC-157 and TB-500 for the fastest possible injury recovery. Complete dosing protocol, timeline, and FAQ for the most popular healing peptide combination.',
  keywords: 'wolverine stack, wolverine stack peptides, BPC-157 TB-500 wolverine, wolverine stack protocol, BPC-157 TB-500 dosage, healing peptide stack, wolverine peptide',
  openGraph: {
    title: 'The Wolverine Stack: BPC-157 + TB-500 Ultimate Healing Protocol',
    description: 'BPC-157 + TB-500: heal injuries 2–4× faster. Complete dosing guide for the most researched healing peptide combination.',
    type: 'article',
    url: 'https://bp157stack.com/wolverine-stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wolverine Stack: BPC-157 + TB-500 | Ultimate Healing Protocol',
    description: 'The most researched healing peptide combination. Heal injuries 2–4× faster.',
  },
};

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const protocol = [
  { phase: 'Loading (Weeks 1–6)', steps: ['BPC-157: 500mcg subcutaneous or oral, once daily', 'TB-500: 2.5mg subcutaneous, twice per week', 'Inject BPC-157 near injury site or abdomen', 'TB-500 in abdomen or thigh — systemic, location less critical'] },
  { phase: 'Maintenance (Weeks 7–12)', steps: ['BPC-157: 250–500mcg once daily', 'TB-500: 2mg subcutaneous, once per week', 'Continue until full recovery', 'Can extend indefinitely — no tolerance buildup identified'] },
  { phase: 'Acute Injury (First 72 Hours)', steps: ['BPC-157: 500mcg twice daily (morning + evening)', 'TB-500: 5mg single loading dose in week 1', 'Begin immediately after injury for fastest response', 'Maintain loading protocol for minimum 4 weeks'] },
];

const faqs = [
  { q: 'Why is it called the Wolverine Stack?', a: 'The nickname comes from the Marvel character Wolverine\'s iconic rapid healing ability. BPC-157 and TB-500 together produce healing timelines that researchers describe as dramatically faster than natural recovery — tendons, ligaments, and muscle tissue healing in weeks rather than months. The name was popularized in biohacking communities and spread as clinical anecdotes from athletes and researchers accumulated.' },
  { q: 'Does the Wolverine Stack actually work?', a: 'BPC-157 and TB-500 individually are among the most studied healing peptides in existence, with 100+ peer-reviewed papers on BPC-157 alone. The combination has been studied in multiple animal models showing 50–70% reduction in healing time versus untreated controls. Human anecdotal data from athletes, biohackers, and researchers broadly aligns with animal model predictions. Both peptides have an exceptional safety profile with no known LD50.' },
  { q: 'Can I take BPC-157 and TB-500 in the same syringe?', a: 'Yes — BPC-157 and TB-500 can be combined in the same syringe and injected together. They do not interact chemically and are purely additive in their effects. Draw BPC-157 first, then TB-500 into the same insulin syringe, and inject subcutaneously. This is convenient when both are dosed at the same time.' },
  { q: 'How long does the Wolverine Stack take to work?', a: 'Pain reduction and early healing signs typically appear within 2–4 days. Noticeable structural healing (reduced swelling, improved range of motion) is usually apparent at 2–3 weeks. Significant tendon and ligament repair is measurable at 4–8 weeks. Gut healing responds fastest — often within 5–14 days of starting.' },
  { q: 'Is the Wolverine Stack safe?', a: 'Both BPC-157 and TB-500 have outstanding safety profiles. BPC-157 has no known LD50 in animal studies and no hormonal activity. TB-500 is a fragment of a naturally occurring peptide found in virtually all human tissue. Neither affects the HPGA (hormonal axis), so no PCT is needed. No significant adverse effects have been documented at standard research doses for either peptide.' },
  { q: 'What injuries is the Wolverine Stack best for?', a: 'The stack is most widely used for tendon and ligament injuries (ACL, rotator cuff, Achilles, plantar fasciitis), muscle tears, post-surgical recovery, chronic joint pain, and gut healing (IBD, leaky gut). BPC-157 also shows documented effects on nerve repair and bone healing.' },
];

export default function WolverineStackPage() {
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
                { '@type': 'ListItem', position: 2, name: 'The Wolverine Stack', item: 'https://bp157stack.com/wolverine-stack' },
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
              headline: 'The Wolverine Stack: BPC-157 + TB-500 Ultimate Healing Protocol',
              description: 'Complete guide to the Wolverine Stack — BPC-157 and TB-500 combined for maximum injury healing speed.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
              publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
              about: 'Peptide healing protocols',
              keywords: 'wolverine stack, BPC-157, TB-500, healing peptides',
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">THE WOLVERINE STACK</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157 + TB-500:<br />
            <span style={{ color: '#00ff88' }}>Heal Like Wolverine</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            The Wolverine Stack — BPC-157 and TB-500 combined — is the most researched healing peptide protocol in the world.
            Backed by 100+ peer-reviewed studies and decades of animal research showing 50–70% reduction in recovery time.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View the Stack <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
              Full Protocol Guide
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: '50–70%', label: 'Faster healing vs. untreated' },
              { num: '100+', label: 'Peer-reviewed BPC-157 studies' },
              { num: '30yr', label: 'Research history' },
              { num: 'Zero', label: 'Known LD50 for either peptide' },
            ].map((s) => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black" style={{ color: '#00ff88' }}>{s.num}</div>
                <div className="text-slate-400 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">Why BPC-157 + TB-500 Work Together</h2>
        <p className="text-slate-400 mb-10 max-w-2xl">
          They target completely different healing mechanisms — and together cover every pathway of injury repair.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <h3 className="text-emerald-400 font-black text-xl mb-4">BPC-157 — Local Healer</h3>
            <ul className="space-y-2">
              {['Upregulates growth hormone receptors in fibroblasts', 'Activates VEGF — increases blood flow to injury', 'Accelerates collagen type I synthesis 300–400%', 'Gastric acid stable — works orally for gut healing', 'Heals nerve, bone, muscle, tendon, gut, and eye tissue'].map((m) => (
                <li key={m} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h3 className="text-blue-400 font-black text-xl mb-4">TB-500 — Systemic Healer</h3>
            <ul className="space-y-2">
              {['Mobilizes CD34+ stem cells from bone marrow to injury sites', 'Binds G-actin to regulate cell migration body-wide', 'Reduces inflammation systemically via NF-κB inhibition', 'Dramatically improves flexibility and range of motion', 'Crosses the blood-brain barrier — heals neural tissue'].map((m) => (
                <li key={m} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3 text-center">Wolverine Stack Protocol</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
            Three phases depending on your injury stage. Use the loading phase for any new or acute injury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocol.map((p, i) => (
              <div key={p.phase} className="glass-card p-6">
                <div className="text-emerald-400 text-xs font-bold tracking-widest mb-2">PHASE {i + 1}</div>
                <h3 className="text-white font-bold mb-4">{p.phase}</h3>
                <ul className="space-y-2">
                  {p.steps.map((s) => (
                    <li key={s} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs text-center mt-6">Consult a healthcare provider before use.</p>
        </div>
      </section>

      {/* Healing timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Healing Timeline</h2>
        <div className="space-y-4">
          {[
            { time: 'Days 1–4', title: 'Pain Reduction Begins', desc: 'BPC-157\'s anti-inflammatory and growth factor upregulation starts immediately. Most users report reduced pain and swelling within the first 2–4 days.' },
            { time: 'Week 1–2', title: 'Stem Cell Mobilization', desc: 'TB-500 begins mobilizing CD34+ stem cells from bone marrow to the injury site. Flexibility improvements are often the first TB-500 effect reported.' },
            { time: 'Weeks 2–4', title: 'Visible Structural Progress', desc: 'Swelling decreases significantly. Range of motion improves. Early collagen synthesis begins rebuilding damaged connective tissue. Gut healing (if applicable) is often complete by this point.' },
            { time: 'Weeks 4–8', title: 'Significant Tissue Repair', desc: 'The loading phase produces the most dramatic structural healing. Tendon and ligament continuity restores. Athletes often return to light training during this window.' },
            { time: 'Weeks 8–12', title: 'Full Recovery / Maintenance', desc: 'Complete healing for most acute injuries. Maintenance dosing continues to consolidate structural repair. Chronic injuries may require a second loading cycle.' },
          ].map((t) => (
            <div key={t.time} className="glass-card p-5 flex gap-6 items-start">
              <div className="shrink-0">
                <div className="text-emerald-400 font-black text-sm">{t.time}</div>
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">{t.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(0,255,136,0.02)', borderTop: '1px solid rgba(0,255,136,0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Wolverine Stack FAQ</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-3xl font-black text-white mb-4">Get the Wolverine Stack</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                BPC-157 and TB-500 from our recommended supplier — COA verified, US domestic, ships in 24–48 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
                  Full Protocol Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/wolverine-stack" />
    </div>
  );
}
