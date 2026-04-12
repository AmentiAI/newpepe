import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Brain, FlaskConical, Battery, Dna } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import NadAgeCalculator from '@/components/NadAgeCalculator';

export const metadata: Metadata = {
  title: 'NAD+ Complete Guide 2026: Dosing, Stacking & Anti-Aging Science | BPC-157 Stack',
  description: 'NAD+ declines 50% by age 50. Learn how injectable and IV NAD+ activates sirtuins, powers PARP DNA repair, and stacks with anti-aging peptides for maximum longevity.',
  keywords: 'NAD+ guide, NAD+ injectable, NAD+ IV therapy, sirtuins, PARP DNA repair, NAD+ anti-aging, NMN vs NAD, NAD+ dosing protocol, longevity peptides',
  openGraph: {
    title: 'NAD+ Complete Guide: Injectable vs IV, Sirtuins & Anti-Aging Stacks',
    description: 'Your NAD+ drops 50% by age 50. Discover how to reverse cellular aging with injectable NAD+ and the science behind why it works.',
    type: 'article',
    url: 'https://bp157stack.com/nad-complete-guide',
  },
  alternates: {
    canonical: 'https://bp157stack.com/nad-complete-guide',
  },
};

const SOURCE_URL = '/out';

const stats = [
  { value: '50%', label: 'NAD+ decline by age 50', color: 'text-[#00ff88]' },
  { value: '11×', label: 'More effective than NMN (IV route)', color: 'text-[#00ff88]' },
  { value: '4,000+', label: 'Enzymatic reactions require NAD+', color: 'text-[#00ff88]' },
  { value: '7', label: 'Sirtuin longevity proteins activated', color: 'text-[#00ff88]' },
];

const mechanisms = [
  {
    icon: <Dna className="w-5 h-5" />,
    title: 'Sirtuin Activation (SIRT1–7)',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    detail: 'Sirtuins are the longevity proteins that caloric restriction activates — the biological reason fasting extends lifespan in almost every organism studied. They require NAD+ as a cofactor. No NAD+, no sirtuin activity. Replenishing NAD+ directly turns the sirtuin switch back on.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'PARP DNA Repair Enzymes',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    detail: 'PARP1 is the enzyme your cells use to detect and repair DNA strand breaks. It consumes NAD+ at a ferocious rate — a single DNA damage event can deplete local NAD+ pools by 80%. Aging cells accumulate more DNA damage and burn through NAD+ faster, creating a vicious cycle.',
  },
  {
    icon: <Battery className="w-5 h-5" />,
    title: 'Mitochondrial Energy Production',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    detail: 'NAD+ is the critical electron carrier in the mitochondrial electron transport chain. NADH shuttles electrons from glucose and fat oxidation to complexes I–IV, driving ATP synthesis. Declining NAD+ means declining energy — the cellular equivalent of running a power plant on half its fuel.',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'CD38 and the NAD+ Sink',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    detail: 'CD38 is an enzyme that consumes NAD+ and rises dramatically with age and inflammation. It\'s thought to be the primary driver of age-related NAD+ decline — not reduced production, but dramatically increased consumption. Targeting CD38 (with apigenin, for instance) is one strategy to preserve NAD+ alongside direct supplementation.',
  },
];

const routeComparison = [
  {
    route: 'IV Infusion',
    bioavailability: '100%',
    onset: '0–30 min',
    duration: '4–7 days elevation',
    cost: '$$$',
    notes: 'Clinical setting typically required. The gold standard for acute NAD+ repletion. Can cause flushing, chest pressure, and GI discomfort at high infusion rates.',
    recommended: true,
  },
  {
    route: 'Subcutaneous Injection',
    bioavailability: '~85–90%',
    onset: '1–2 hours',
    duration: '2–4 days elevation',
    cost: '$$',
    notes: 'Home-injectable. Slower onset than IV but avoids infusion side effects. Research peptide suppliers provide NAD+ at 500mg and 1000mg vial concentrations.',
    recommended: true,
  },
  {
    route: 'NMN / NR Oral',
    bioavailability: '20–40% (estimated)',
    onset: '2–6 hours',
    duration: '1–2 days',
    cost: '$',
    notes: 'Convenient but requires gut conversion. NMN → NR → NAD+. Much of the oral dose is metabolized before reaching target tissues. Useful for maintenance between injectable cycles.',
    recommended: false,
  },
  {
    route: 'IV Slow Drip (NAD+ 1000mg)',
    bioavailability: '100%',
    onset: '0 min',
    duration: '7–10 days elevation',
    cost: '$$$$',
    notes: 'High-dose drip over 2–4 hours. Used in addiction medicine and aggressive anti-aging protocols. Requires medical supervision due to cardiovascular load.',
    recommended: false,
  },
];

const stackProtocol = [
  { peptide: 'NAD+ 500mg', dose: '500mg SC daily', timing: 'Morning', role: 'Core energy and sirtuin activation', color: 'text-[#00ff88]' },
  { peptide: 'Epithalon', dose: '5mg SC daily', timing: 'Evening', role: 'Telomerase activation — run 10-day cycles 2× per year', color: 'text-amber-400' },
  { peptide: 'GHK-Cu', dose: '2mg SC daily', timing: 'Evening', role: 'Gene expression reset + collagen', color: 'text-blue-400' },
  { peptide: 'BPC-157', dose: '250mcg SC 2×/day', timing: 'AM/PM', role: 'Systemic repair + mitochondrial support', color: 'text-purple-400' },
  { peptide: 'Sermorelin', dose: '200mcg SC', timing: 'Pre-sleep', role: 'GH pulse for metabolic + cellular repair', color: 'text-rose-400' },
];

const faqs = [
  {
    q: 'Is injectable NAD+ better than NMN or NR supplements?',
    a: 'For acute repletion and verified bioavailability, yes — significantly. NMN and NR must be absorbed orally, converted through enzymatic steps, and much is lost in transit. Injectable NAD+ bypasses all of that and delivers the molecule directly to circulation. That said, NMN/NR capsules have a role in daily maintenance between injectable cycles due to convenience and cost.',
  },
  {
    q: 'What does NAD+ actually feel like when it\'s working?',
    a: 'Most people report a noticeable energy shift within 1–3 days of starting injectable NAD+. Not the jittery stimulant feeling of caffeine — more like a clean, sustained elevation in mental clarity and physical endurance. Some users also report improved sleep quality, which makes sense given SIRT3\'s role in mitochondrial biogenesis during sleep.',
  },
  {
    q: 'How do I dose NAD+ as a research peptide?',
    a: '500mg subcutaneous injection daily is the most common research protocol. Some users split to 250mg twice daily to smooth out the curve. For the first two weeks, starting at 250mg/day to assess tolerance is wise. The 1000mg vial is used by those doing higher-dose cycles or IV protocols under clinical supervision.',
  },
  {
    q: 'Why does IV NAD+ sometimes cause discomfort?',
    a: 'When NAD+ is infused too quickly, it overwhelms the body\'s conversion enzymes and transiently activates TRPA1 receptors — causing flushing, chest tightness, and a "wired" feeling. This is why IV NAD+ is delivered over 2–4 hours, not as a rapid push. Subcutaneous injection avoids this issue almost entirely because the absorption rate is naturally slower.',
  },
  {
    q: 'Should I cycle NAD+ or take it continuously?',
    a: 'Continuous low-dose (250–500mg/day SC) is generally preferred over cycling for anti-aging purposes. Unlike hormones or GH secretagogues, there\'s no receptor downregulation concern with NAD+. The body simply uses it as a substrate. That said, some protocols use higher-dose IV "loading" cycles quarterly followed by daily SC maintenance.',
  },
  {
    q: 'Can NAD+ protect against cancer?',
    a: 'This is nuanced territory. NAD+ supports PARP-mediated DNA repair, which prevents mutagenic damage — a protective mechanism. However, cancer cells also use NAD+ voraciously for their own energy needs, which has led some researchers to caution about high-dose supplementation in people with active cancers. In healthy individuals focused on prevention, the DNA repair benefit likely outweighs theoretical concerns. This is an area of active research.',
  },
  {
    q: 'What is the David Sinclair NAD+ protocol?',
    a: 'Sinclair (Harvard Medical School) has publicly discussed taking NMN daily, typically 1g orally, alongside resveratrol and metformin. He\'s been vocal that his own NAD+ levels — measured via blood test — have risen substantially on this protocol. His key argument: restoring NAD+ doesn\'t "add" to aging systems, it restores communication within cells that has gone quiet. Injectable NAD+ achieves this more directly than his oral NMN approach.',
  },
];

export default function NadCompleteGuide() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'NAD+ Complete Guide: Injectable vs IV, Sirtuins & Anti-Aging Stacks',
            description: 'NAD+ declines 50% by age 50. Learn how injectable NAD+ activates sirtuins, powers PARP DNA repair, and stacks with peptides for longevity.',
            url: 'https://bp157stack.com/nad-complete-guide',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 text-[#00ff88] text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Complete NAD+ Research Guide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Your NAD+ Is Half What It{' '}
            <span className="text-[#00ff88]">Used to Be</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            By age 50, your NAD+ levels are roughly half what they were at 20. That single fact explains a staggering amount of what we call "getting old" — the fatigue, the slower recovery, the cognitive fog, the cellular decay. David Sinclair called NAD+ "the closest thing to a fountain of youth we've discovered." That's a big claim from a Harvard scientist who's usually very careful with his words.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              View NAD+ Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/anti-aging" className="btn-secondary">
              Full Anti-Aging Stack
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-slate-400 text-sm leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What NAD+ Actually Does */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">What NAD+ Actually Does at the Cellular Level</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-10">
          Before we talk about dosing or delivery routes, it's worth understanding why NAD+ occupies such a central position in aging biology. This isn't a vitamin that plugs a minor gap. NAD+ is a fundamental currency of cellular energy and information — involved in over 500 enzymatic reactions in the human body.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {mechanisms.map((m) => (
            <div key={m.title} className={`glass-card border p-6 ${m.bg}`}>
              <div className={`flex items-center gap-3 mb-3 ${m.color}`}>
                {m.icon}
                <h3 className="font-bold text-base">{m.title}</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAD+ Age Calculator */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-white mb-3">How Much NAD+ Have You Lost?</h2>
        <p className="text-slate-400 text-base mb-6">Use the calculator below to see your estimated NAD+ level at your current age and the downstream biological impact.</p>
        <NadAgeCalculator />
      </section>

      {/* NAD+ 500mg Product Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/nad-500mg.png"
              alt="NAD+ 500mg injectable research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Research Peptide</div>
            <h3 className="text-white text-2xl font-black mb-3">NAD+ 500mg — The Starting Point</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              The 500mg vial is the standard entry dose for injectable NAD+ research. Reconstituted and administered subcutaneously, it provides a direct systemic boost that bypasses the absorption limitations of oral precursors like NMN. Most protocols run 500mg daily for 4–8 weeks before dialing back to a maintenance frequency.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['500mg per vial', 'SC injectable', 'No gut conversion', 'Ships as research peptide'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View NAD+ 500mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* IV vs Injectable vs Oral */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">IV vs Injectable vs Oral NAD+</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          Not all NAD+ delivery is equal. The route of administration dramatically affects how much NAD+ actually reaches your tissues, how quickly levels rise, and how long the elevation lasts. The body's NAD+ repletion isn't just about giving it more — it's about getting it past the absorption bottleneck.
        </p>
        <div className="space-y-4">
          {routeComparison.map((r) => (
            <div key={r.route} className={`glass-card p-6 border ${r.recommended ? 'border-[#00ff88]/20' : 'border-white/5'}`}>
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div>
                  <h3 className="text-white font-bold text-lg">{r.route}</h3>
                  {r.recommended && (
                    <span className="text-[#00ff88] text-xs font-semibold">Recommended for research use</span>
                  )}
                </div>
                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-[#00ff88] font-black">{r.bioavailability}</div>
                    <div className="text-slate-500 text-xs">Bioavailability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-amber-400 font-black">{r.onset}</div>
                    <div className="text-slate-500 text-xs">Onset</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-black">{r.cost}</div>
                    <div className="text-slate-500 text-xs">Cost</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{r.notes}</p>
              <div className="mt-2 text-xs text-slate-500">Duration of NAD+ elevation: {r.duration}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NAD+ 1000mg Product Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-amber-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/nad-1000mg.png"
              alt="NAD+ 1000mg high-dose injectable"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">High-Dose Protocol</div>
            <h3 className="text-white text-2xl font-black mb-3">NAD+ 1000mg — For Aggressive Repletion</h3>
            <p className="text-slate-300 text-base leading-relaxed mb-4">
              The 1000mg vial is used in loading protocols and by those with advanced anti-aging goals. A single 1000mg injection or slow IV drip can elevate whole-blood NAD+ levels for 7–10 days — making weekly dosing a viable schedule for maintenance after an initial loading phase. Popular in longevity clinic protocols where comprehensive bloodwork guides frequency.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['1000mg per vial', 'Loading phase use', 'Weekly maintenance viable', 'Longevity clinic standard'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">
              View NAD+ 1000mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stacking NAD+ with Other Peptides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-white mb-4">The NAD+ Anti-Aging Stack</h2>
        <p className="text-slate-300 leading-relaxed text-lg mb-8">
          NAD+ is powerful on its own, but it reaches its full potential when combined with peptides that address the other hallmarks of aging simultaneously. Think of it as restoring the electrical grid (NAD+/mitochondria), rewriting the damaged code (Epithalon/telomeres), retraining the maintenance crews (GHK-Cu/gene expression), and repairing the infrastructure (BPC-157).
        </p>
        <div className="glass-card p-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-slate-400 font-semibold py-3 pr-4">Peptide</th>
                <th className="text-left text-slate-400 font-semibold py-3 pr-4">Dose</th>
                <th className="text-left text-slate-400 font-semibold py-3 pr-4">Timing</th>
                <th className="text-left text-slate-400 font-semibold py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {stackProtocol.map((s) => (
                <tr key={s.peptide} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className={`py-4 pr-4 font-bold ${s.color}`}>{s.peptide}</td>
                  <td className="py-4 pr-4 text-slate-300">{s.dose}</td>
                  <td className="py-4 pr-4 text-slate-400">{s.timing}</td>
                  <td className="py-4 text-slate-400 leading-snug">{s.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-sm mt-4">
          This is an aggressive longevity protocol. Most beginners start with NAD+ alone for 4–6 weeks before layering additional compounds. All research peptide use is for informational purposes.
        </p>
      </section>

      {/* Why Injectable Over Oral */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 border border-[#00ff88]/10">
          <div className="flex items-start gap-4">
            <FlaskConical className="w-8 h-8 text-[#00ff88] shrink-0 mt-1" />
            <div>
              <h3 className="text-white text-xl font-black mb-3">The Oral Supplement Problem</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                The NMN and NR supplement market is worth billions. And while oral NAD+ precursors do work — they do raise blood NAD+ levels — the ceiling is much lower than injectable. Here's why: NAD+ itself is too large to survive gut transit intact. So you're supplementing with precursors (NMN, NR) that must be enzymatically converted, first in the gut, then in various tissues. Each conversion step means losses. Injectable NAD+ skips all of that. You're delivering the actual molecule. For people who are already NAD+-depleted (basically everyone over 35), the injectable route provides faster, more complete, and more verifiable repletion.
              </p>
            </div>
          </div>
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
          <h2 className="text-3xl font-black text-white mb-4">Start Restoring Your NAD+ Levels</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Injectable NAD+ is available as a research peptide. Whether you start with 500mg daily or go straight to the 1000mg high-dose protocol depends on your goals and baseline.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop NAD+ Research Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/anti-aging" className="btn-secondary">
              Full Anti-Aging Guide
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/nad-complete-guide" />
    </main>
  );
}
