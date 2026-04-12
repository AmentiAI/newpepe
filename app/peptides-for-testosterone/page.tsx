import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Brain, FlaskConical, Activity } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import TestosteroneSupportSelector from '@/components/TestosteroneSupportSelector';

export const metadata: Metadata = {
  title: 'Peptides for Testosterone 2026: Kisspeptin, Gonadorelin & Axis Support | BPC-157 Stack',
  description: 'Peptides that work with your hormonal axis — not against it. Kisspeptin, Gonadorelin, Sermorelin, and BPC-157 for natural testosterone support, PCT recovery, and male hormonal optimization.',
  keywords: 'peptides for testosterone, kisspeptin testosterone, gonadorelin LH, sermorelin testosterone, BPC-157 Leydig cells, testosterone support peptides, post-cycle peptides, natural testosterone boost',
  openGraph: {
    title: 'Peptides for Testosterone: Kisspeptin, Gonadorelin & Natural Axis Support',
    description: 'TRT shuts down your natural production. These peptides work the other way — helping your body make testosterone itself.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-testosterone',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-testosterone',
  },
};

const SOURCE_URL = '/out';

const stats = [
  { value: '1%', label: 'Annual testosterone decline after 30', color: 'text-[#00ff88]' },
  { value: '40%', label: 'Men 45+ with clinically low T', color: 'text-[#00ff88]' },
  { value: '100%', label: 'HPTA suppression from exogenous T', color: 'text-amber-400' },
  { value: '0%', label: 'HPTA suppression from these peptides', color: 'text-[#00ff88]' },
];

const hormoneAxis = [
  {
    gland: 'Hypothalamus',
    signal: 'GnRH pulse',
    peptide: 'Kisspeptin-10',
    role: 'Kisspeptin neurons in the hypothalamus are the master regulators of GnRH release. When kisspeptin fires, GnRH fires. No kisspeptin signal, no downstream testosterone cascade. Kisspeptin-10 is a peptide fragment that directly activates these neurons — restarting the signaling cascade from the very top.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    gland: 'Pituitary',
    signal: 'LH / FSH release',
    peptide: 'Gonadorelin',
    role: 'Gonadorelin is synthetic GnRH — it acts directly on the pituitary to trigger LH and FSH release. LH is the signal that tells the Leydig cells in the testes to produce testosterone. Pulsed gonadorelin administration mimics the natural GnRH pulse pattern, maintaining pituitary sensitivity and testicular function.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    gland: 'Testes',
    signal: 'Testosterone synthesis',
    peptide: 'BPC-157',
    role: 'Leydig cells convert cholesterol to testosterone when stimulated by LH. BPC-157 supports Leydig cell health through its angiogenic and cytoprotective effects, and appears to upregulate androgen receptor expression — meaning you get more signal from the testosterone you do produce. It also addresses the inflammatory environment that can suppress testicular function.',
    color: 'text-[#00ff88]',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
];

const ghTestoConnection = [
  { point: 'GH stimulates IGF-1 production in the liver', detail: 'IGF-1 directly supports Leydig cell function and testosterone synthesis' },
  { point: 'GH enhances fat oxidation', detail: 'Lower body fat percentage correlates strongly with higher natural testosterone' },
  { point: 'Sermorelin improves sleep architecture', detail: 'The largest natural GH and testosterone pulse occurs during slow-wave sleep' },
  { point: 'GH-IGF-1 axis supports androgen receptor expression', detail: 'More receptors = more testosterone bioavailability from the same level' },
];

const faqs = [
  {
    q: 'Why not just use testosterone replacement therapy instead?',
    a: 'TRT works — sometimes very effectively. But it permanently suppresses your body\'s own production by signaling the hypothalamus to shut down GnRH, which shuts down LH, which shuts down testicular testosterone synthesis. Most men on TRT experience testicular atrophy and lose fertility. These peptides work in the opposite direction: they stimulate the natural production pathway. For men who want to optimize their axis without committing to exogenous hormones indefinitely, peptides offer a genuinely different approach.',
  },
  {
    q: 'Will kisspeptin actually raise my testosterone?',
    a: 'Kisspeptin\'s role in testosterone production is well-established in research. Exogenous kisspeptin administration has been shown to raise LH levels acutely in men and women, which in turn elevates testosterone. The effect is strongest when the HPTA is intact but under-signaling — which is exactly the situation most men with "low-normal" T find themselves in. It\'s not a replacement for TRT if you have primary hypogonadism, but for men with a functional axis that\'s simply under-performing, kisspeptin can meaningfully move the needle.',
  },
  {
    q: 'Can I use these peptides during a post-cycle recovery?',
    a: 'Yes — and this is one of the clearest use cases. After an anabolic steroid cycle, the HPTA is suppressed at every level: GnRH pulses are blunted, LH/FSH release is diminished, and the testes have atrophied from disuse. Gonadorelin + Kisspeptin together address this from two angles simultaneously — stimulating the pituitary directly (gonadorelin) while also restarting the hypothalamic signaling that tells the pituitary what to do (kisspeptin). Many users report faster recovery compared to SERMs alone.',
  },
  {
    q: 'Is gonadorelin the same as HCG?',
    a: 'No — they work at different points in the axis. HCG mimics LH directly and acts on the testes. Gonadorelin mimics GnRH and acts on the pituitary, causing it to release its own LH and FSH. The advantage of gonadorelin is that it maintains pituitary function and the entire signaling cascade, rather than bypassing it. HCG can maintain testicular size but doesn\'t prevent pituitary desensitization. For complete HPTA preservation during a TRT alternative protocol, gonadorelin is preferable.',
  },
  {
    q: 'How long until I see results from testosterone-support peptides?',
    a: 'The timeline varies significantly by protocol and starting point. For Post-cycle support, meaningful recovery is typically seen within 4–8 weeks. For men with chronically low-T symptoms, 8–12 weeks is more realistic as the axis slowly comes back online. Optimization protocols in men with normal T tend to show subtler but real changes in 6–10 weeks — better energy, improved libido quality, better recovery from training. Bloodwork at baseline and at week 12 is the only reliable way to verify what\'s happening.',
  },
  {
    q: 'Does BPC-157 directly affect testosterone?',
    a: 'Not directly in the way gonadorelin or kisspeptin do. BPC-157\'s role in testosterone support is indirect but meaningful. It upregulates androgen receptor expression — essentially giving your cells more "antennas" for the testosterone signal. It also supports Leydig cell health via angiogenesis (improved blood flow) and cytoprotection. And its systemic anti-inflammatory effects matter: chronic inflammation suppresses the hypothalamic-pituitary-gonadal axis. Reducing inflammation can meaningfully improve the axis\'s signaling efficiency.',
  },
];

export default function PeptidesForTestosterone() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Peptides for Testosterone: Kisspeptin, Gonadorelin & Natural Axis Support',
            description: 'Peptides that support the male hormonal axis without suppressing natural production. Kisspeptin, Gonadorelin, Sermorelin, and BPC-157.',
            url: 'https://bp157stack.com/peptides-for-testosterone',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm font-semibold mb-6">
            <Activity className="w-4 h-4" />
            Male Hormonal Axis Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Peptides That Work{' '}
            <span className="text-[#00ff88]">With Your Axis</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Testosterone replacement shuts down your natural production. These peptides work the other way — they remind your body how to make testosterone itself. Kisspeptin triggers the hypothalamic signal. Gonadorelin stimulates LH release from the pituitary. BPC-157 supports the Leydig cells that do the actual synthesis. This is hormonal optimization without hormonal dependency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              View Testosterone Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/best-peptides-for-men-over-50" className="btn-secondary">
              Men Over 50 Protocol
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-slate-400 text-sm leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Hormonal Axis Explained */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">The Testosterone Production Chain</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          Testosterone doesn't just come from the testes in isolation. It's the end product of a cascade that starts in the brain — and there are peptide-based interventions at every step. Understanding the chain explains why these peptides are so much more nuanced than just injecting T.
        </p>
        <div className="space-y-5">
          {hormoneAxis.map((node, i) => (
            <div key={node.gland} className={`glass-card border p-6 ${node.bg}`}>
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-900/50 flex items-center justify-center text-slate-400 font-black text-sm border border-white/10">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h3 className={`font-black text-lg ${node.color}`}>{node.gland}</h3>
                    <span className="text-slate-400 text-sm">→ {node.signal}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${node.bg}`}>{node.peptide}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{node.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol Selector Component */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-3">Which Protocol Fits Your Situation?</h2>
        <p className="text-slate-400 text-base mb-6">Select your situation for a personalized peptide recommendation with dosing and timeline.</p>
        <TestosteroneSupportSelector />
      </section>

      {/* Kisspeptin Product */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-amber-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/kisspeptin-10-10mg.png"
              alt="Kisspeptin-10 10mg research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Hypothalamic Trigger</div>
            <h3 className="text-white text-2xl font-black mb-3">Kisspeptin-10</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Kisspeptin-10 is a 10-amino-acid fragment of the kisspeptin peptide family. It activates GPR54 receptors on hypothalamic neurons, triggering GnRH pulses — the very first step in testosterone production. Research shows it can acutely raise LH and testosterone when administered subcutaneously in pulsed fashion.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['10mg per vial', 'SC injectable', '25–50mcg per dose', 'HPTA upstream trigger'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View Kisspeptin-10 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gonadorelin Product */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-blue-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/gonadorelin-acetate.png"
              alt="Gonadorelin acetate research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">LH Pulse Regulator</div>
            <h3 className="text-white text-2xl font-black mb-3">Gonadorelin</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Gonadorelin is synthetic GnRH — identical to the hormone your hypothalamus secretes. It acts directly on the pituitary to trigger LH and FSH release. Used in PCT protocols and as a TRT companion to maintain testicular function, gonadorelin pulsed 2–3 times weekly prevents the testicular atrophy that typically accompanies TRT.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['Synthetic GnRH', '100–200mcg per dose', 'Pituitary stimulation', 'PCT & TRT companion'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">
              View Gonadorelin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sermorelin & GH-T Relationship */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">The GH–Testosterone Connection</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          Most men think of growth hormone as something separate from testosterone — a muscle-building tool for another conversation. But the GH-IGF-1 axis and the HPT axis are deeply interconnected. Optimizing GH through peptides like Sermorelin has real downstream effects on testosterone biology.
        </p>
        <div className="glass-card p-6 space-y-4">
          {ghTestoConnection.map((item) => (
            <div key={item.point} className="flex items-start gap-4 p-4 bg-slate-900/40 rounded-xl">
              <CheckCircle className="w-5 h-5 text-[#00ff88] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm">{item.point}</p>
                <p className="text-slate-400 text-sm mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sermorelin Product */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/sermorelin-10mg.png"
              alt="Sermorelin 10mg GHRH peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">GH Axis Support</div>
            <h3 className="text-white text-2xl font-black mb-3">Sermorelin 10mg</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              Sermorelin is a GHRH analogue — it stimulates the pituitary to release GH in a physiological pulse pattern, rather than the supraphysiological blast of direct GH injection. Administered nightly (the GH-rich sleep window), it enhances the body's natural GH architecture. Over 8–12 weeks, this translates to better body composition, improved recovery, and meaningful downstream support for the testosterone axis.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['200mcg nightly dose', 'Pre-sleep SC injection', 'GH pulse enhancement', 'Non-suppressive'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View Sermorelin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-6">Who These Peptides Are For</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: 'Men Seeing Natural Decline',
              description: 'T declining 1%/year after 30 is real. If you\'re noticing fatigue, reduced libido, slower recovery — but your bloodwork is "low normal" and doctors won\'t prescribe TRT — peptide support can move the needle without committing to exogenous hormones.',
              icon: '📉',
              color: 'border-amber-500/20',
            },
            {
              title: 'Post-Cycle Recovery',
              description: 'After suppressive anabolic cycles, the HPTA needs a reboot. Gonadorelin + Kisspeptin together restart the signaling cascade from both the hypothalamic (kisspeptin) and pituitary (gonadorelin) levels, accelerating recovery versus SERMs alone.',
              icon: '🔄',
              color: 'border-blue-500/20',
            },
            {
              title: 'TRT Users Preserving Function',
              description: 'Men on TRT can use gonadorelin to maintain testicular function and fertility. Pulsed gonadorelin 2–3× weekly prevents atrophy while allowing the primary TRT benefits to continue — a nuanced approach increasingly used in progressive mens health clinics.',
              icon: '⚖️',
              color: 'border-[#00ff88]/20',
            },
          ].map((card) => (
            <div key={card.title} className={`glass-card border p-6 ${card.color}`}>
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-white font-bold text-base mb-3">{card.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card group">
              <summary className="p-6 cursor-pointer flex items-center justify-between gap-4 text-white font-semibold text-base list-none">
                {faq.q}
                <span className="text-[#00ff88] text-xl font-black shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-slate-300 leading-relaxed text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-10 text-center border border-[#00ff88]/15">
          <h2 className="text-3xl font-black text-white mb-4">Support Your Natural Testosterone Production</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Kisspeptin, Gonadorelin, and Sermorelin are available as research peptides. Start with the protocol selector above to find the right approach for your situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop Testosterone Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/best-peptides-for-men-over-50" className="btn-secondary">
              Men Over 50 Full Protocol
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/peptides-for-testosterone" />
    </main>
  );
}
