import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, FlaskConical, TrendingDown, Scale } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import TirzepatideVsSema from '@/components/TirzepatideVsSema';

export const metadata: Metadata = {
  title: 'Tirzepatide Complete Guide 2026: Dosing, Results & Protocol | BPC-157 Stack',
  description: 'Tirzepatide produces 22.5% average weight loss — the highest of any approved drug. Learn the dual GIP+GLP-1 mechanism, escalation protocol, and how it compares to semaglutide.',
  keywords: 'tirzepatide guide, tirzepatide dosing, tirzepatide vs semaglutide, Mounjaro research peptide, GIP GLP-1 dual agonist, tirzepatide weight loss, tirzepatide protocol',
  openGraph: {
    title: 'Tirzepatide Complete Guide: Dual Mechanism, 22.5% Weight Loss & Protocol',
    description: 'How tirzepatide broke 30 years of weight loss medicine. Dual GIP+GLP-1 mechanism, escalation protocol, and comparison with semaglutide.',
    type: 'article',
    url: 'https://www.bp157stack.com/tirzepatide-complete-guide',
  },
  alternates: {
    canonical: 'https://www.bp157stack.com/tirzepatide-complete-guide',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const stats = [
  { value: '22.5%', label: 'Average weight loss (SURMOUNT-1)', color: 'text-[#00ff88]' },
  { value: '2×', label: 'Receptor targets vs semaglutide', color: 'text-[#00ff88]' },
  { value: '33 lbs', label: 'Loss for a 150lb person', color: 'text-[#00ff88]' },
  { value: '40%', label: 'Patients achieved ≥25% loss', color: 'text-[#00ff88]' },
];

const mechanismSteps = [
  {
    receptor: 'GLP-1 Receptor',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    what: 'Reduces appetite, slows gastric emptying, triggers glucose-dependent insulin release',
    why: 'This is the same mechanism as semaglutide. It reduces how much you eat by acting on hypothalamic hunger centers — but it\'s only half the story with tirzepatide.',
  },
  {
    receptor: 'GIP Receptor',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    what: 'Directly regulates fat storage in adipose tissue, potentiates insulin secretion, preferentially targets visceral fat',
    why: 'GIP receptors sit on fat cells themselves. When tirzepatide activates them, it directly changes how the body\'s fat tissue responds to insulin — pushing fat cells toward fat burning rather than fat storage. Semaglutide doesn\'t touch this.',
  },
];

const escalationProtocol = [
  { week: 'Weeks 1–4', dose: '2.5mg', notes: 'Starting dose. Allow gut adaptation. Most users experience minimal side effects at this stage.' },
  { week: 'Weeks 5–8', dose: '5mg', notes: 'First real therapeutic dose. Appetite suppression becomes noticeable. Weight loss typically begins here.' },
  { week: 'Weeks 9–12', dose: '7.5mg', notes: 'Mid-range dose. Continue only if tolerated well. Some users plateau here permanently.' },
  { week: 'Weeks 13–16', dose: '10mg', notes: 'Higher dose. Stronger appetite suppression. Watch for increased GI sensitivity.' },
  { week: 'Weeks 17–20', dose: '12.5mg', notes: 'Near maximum range. Reserve for those with specific high-loss goals.' },
  { week: 'Week 21+', dose: '15mg', notes: 'Maximum dose (SURMOUNT-1 trial ceiling). Not required for most users — many achieve goals at 10mg.' },
];

const comparison = [
  { metric: 'Weight Loss', sema: '15–17%', tirz: '20–22.5%', reta: '24.2%' },
  { metric: 'Mechanism', sema: 'GLP-1 only', tirz: 'GLP-1 + GIP', reta: 'GLP-1 + GIP + Glucagon' },
  { metric: 'Muscle preservation', sema: 'Moderate', tirz: 'Better', reta: 'Best' },
  { metric: 'Visceral fat reduction', sema: 'Good', tirz: 'Superior', reta: 'Superior+' },
  { metric: 'GI side effects', sema: 'Moderate', tirz: 'Moderate', reta: 'More common' },
  { metric: 'Data maturity', sema: '5+ years', tirz: '3+ years', reta: 'Phase II/III' },
];

const faqs = [
  {
    q: 'What makes tirzepatide better than semaglutide?',
    a: 'The key difference is the GIP receptor. Semaglutide only activates GLP-1 receptors — it works through appetite suppression and slower gastric emptying. Tirzepatide adds GIP activation, which directly acts on adipose tissue and potentiates the insulin signal through a completely different pathway. The SURPASS-2 head-to-head trial confirmed tirzepatide outperformed semaglutide at all three doses (5mg, 10mg, 15mg) on both weight loss and glycemic control.',
  },
  {
    q: 'Do I need to hit 15mg, or can lower doses work?',
    a: 'Most users in the SURMOUNT trials achieved meaningful results at 5–10mg. The 15mg ceiling was the trial maximum — it doesn\'t mean everyone needs it. In practice, many research users find their "sweet spot" somewhere between 7.5mg and 12.5mg where side effects are manageable and weight loss is sustained. The goal is the lowest effective dose, not the highest.',
  },
  {
    q: 'What are the side effects of tirzepatide?',
    a: 'Nausea, mild constipation or diarrhea, and reduced appetite are the most common — especially during the escalation phase. These typically improve significantly once you\'ve been at a stable dose for 4–6 weeks. The key to minimizing GI side effects is slow escalation (don\'t rush to higher doses) and consistent injection timing (same day each week). Severe side effects are uncommon at research doses.',
  },
  {
    q: 'Will I lose muscle on tirzepatide?',
    a: 'Some muscle loss occurs on any significant caloric deficit, regardless of the drug. Tirzepatide\'s GIP mechanism is thought to preserve lean mass better than semaglutide alone — and SURMOUNT data showed a higher ratio of fat:lean mass loss versus older GLP-1 drugs. Adding resistance training and adequate protein (1.6–2g/kg bodyweight) dramatically reduces muscle loss during a tirzepatide protocol.',
  },
  {
    q: 'How long do I need to run tirzepatide?',
    a: 'The SURMOUNT-4 trial showed that stopping tirzepatide led to regain of about two-thirds of lost weight within 18 months — which is similar to all obesity pharmacotherapy when stopped. This suggests long-term or indefinite use for sustained results, or a careful transition to metabolic maintenance (resistance training, high-protein diet, possibly lower-dose continuation) to lock in changes.',
  },
  {
    q: 'What happens if I eat normally on tirzepatide?',
    a: 'The drug reduces your appetite — but it doesn\'t prevent you from eating. Users who eat past the satiety signal see blunted results. The mechanism works best when you let the reduced appetite guide actual intake reduction. Tracking calories during the first month is useful to understand your new lower "set point" for hunger.',
  },
  {
    q: 'Can tirzepatide be stacked with GH peptides for body recomposition?',
    a: 'Yes — and this is becoming a popular advanced protocol. Pairing tirzepatide (for fat loss and metabolic reset) with Ipamorelin/CJC-1295 or Sermorelin (for GH-driven muscle preservation and fat oxidation) creates a powerful body recomposition environment. The GH axis helps protect lean mass while tirzepatide drives the caloric deficit. Always introduce one compound at a time to identify any individual reactions.',
  },
];

export default function TirzepatideCompleteGuide() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Tirzepatide Complete Guide: Dual Mechanism, 22.5% Weight Loss & Protocol',
            description: 'How tirzepatide broke 30 years of weight loss medicine. Dual GIP+GLP-1 mechanism, escalation protocol, comparison to semaglutide.',
            url: 'https://www.bp157stack.com/tirzepatide-complete-guide',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 text-[#00ff88] text-sm font-semibold mb-6">
            <FlaskConical className="w-4 h-4" />
            The Mounjaro Revolution
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            The Drug That Changed{' '}
            <span className="text-[#00ff88]">Weight Loss Medicine</span>
          </h1>
          <p className="text-xl text-gray-900 leading-relaxed max-w-3xl mx-auto mb-8">
            For decades, the medical community told overweight people to "eat less and move more." Then tirzepatide showed up and produced results that 30 years of willpower hadn't. A 150-pound person loses 33 pounds. A 220-pound person loses nearly 50. Not in some theoretical model — in controlled trials, in real patients, with no surgery.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              View Tirzepatide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/semaglutide-vs-tirzepatide-vs-retatrutide" className="btn-secondary">
              Full GLP Comparison
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What That Actually Looks Like */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 border border-[#00ff88]/10">
          <Scale className="w-8 h-8 text-[#00ff88] mb-4" />
          <h2 className="text-2xl font-black text-gray-900 mb-4">22.5% — What That Actually Looks Like</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { start: '150 lbs', lost: '33 lbs', finish: '117 lbs' },
              { start: '200 lbs', lost: '45 lbs', finish: '155 lbs' },
              { start: '250 lbs', lost: '56 lbs', finish: '194 lbs' },
            ].map((ex) => (
              <div key={ex.start} className="bg-slate-900/50 rounded-xl p-5">
                <div className="text-gray-500 text-sm mb-1">Starting weight</div>
                <div className="text-gray-900 font-black text-xl mb-3">{ex.start}</div>
                <div className="text-red-400 font-bold text-base mb-1">− {ex.lost}</div>
                <div className="h-px bg-white/10 my-3" />
                <div className="text-[#00ff88] font-black text-2xl">{ex.finish}</div>
                <div className="text-gray-500 text-xs mt-1">Final weight (avg)</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 leading-relaxed">
            These numbers come from the SURMOUNT-1 trial at the 15mg dose. Individual results vary based on adherence, diet quality, baseline metabolic health, and whether resistance training is included. The trial population was adults with obesity (BMI ≥30) or overweight with at least one weight-related condition.
          </p>
        </div>
      </section>

      {/* Dual Mechanism */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Why Two Receptors Beat One</h2>
        <p className="text-gray-900 leading-relaxed text-lg mb-8">
          The story of tirzepatide is really the story of GIP — the overlooked receptor that changes everything. Pharmaceutical research had focused almost entirely on GLP-1 for decades. GIP was considered a "lesser" incretin with unclear benefits. Then Eli Lilly's researchers combined both and got results nobody expected.
        </p>
        <div className="space-y-4">
          {mechanismSteps.map((m) => (
            <div key={m.receptor} className={`glass-card border p-6 ${m.bg}`}>
              <h3 className={`font-black text-lg mb-2 ${m.color}`}>{m.receptor}</h3>
              <p className="text-gray-900 font-semibold text-sm mb-2">{m.what}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{m.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 glass-card p-6 border border-gray-100">
          <p className="text-gray-900 leading-relaxed">
            The synergy is the key insight. GLP-1 and GIP don't just add their effects — they amplify each other's action. GIP potentiates insulin secretion through a completely different intracellular pathway than GLP-1, which is why the combined effect exceeds what you'd predict by adding each receptor's contribution separately. This is called receptor cross-talk, and it's why the 22.5% figure isn't just "1.5× semaglutide" — it's qualitatively different weight loss.
          </p>
        </div>
      </section>

      {/* Tirzepatide 15mg Product Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/tirzepatide-15mg.png"
              alt="Tirzepatide 15mg research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Research Peptide</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Tirzepatide 15mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The 15mg vial corresponds to the highest dose studied in SURMOUNT-1. At this concentration, most users following a proper escalation protocol reach their therapeutic maintenance dose within 4–5 months. One vial typically covers 1–2 weeks at maintenance doses, depending on where in the escalation protocol you are.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['15mg per vial', 'SURMOUNT-1 max dose', 'Weekly injection', 'Research use'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View Tirzepatide 15mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Escalation Protocol */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">The Escalation Protocol</h2>
        <p className="text-gray-900 leading-relaxed text-lg mb-8">
          Tirzepatide's side effects are real but manageable — and almost entirely dose-dependent. The escalation protocol exists to give your GI tract time to adapt before increasing to the next dose. Skipping steps is the most common mistake, and it leads to unnecessary nausea and early discontinuation. Patience at the lower doses pays off.
        </p>
        <div className="space-y-3">
          {escalationProtocol.map((step, i) => (
            <div key={step.week} className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center text-[#00ff88] font-black text-sm shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <span className="text-gray-900 font-bold">{step.week}</span>
                  <span className="text-[#00ff88] font-black bg-[#00ff88]/10 px-3 py-0.5 rounded-full text-sm">{step.dose}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Comparison */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Tirzepatide vs Semaglutide — Data Comparison</h2>
        <p className="text-gray-500 text-base mb-6">Select a clinical metric to see how the two drugs compare from published head-to-head trial data.</p>
        <TirzepatideVsSema />
      </section>

      {/* Tirzepatide 30mg Product Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-amber-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/tirzepatide-30mg.png"
              alt="Tirzepatide 30mg bulk research vial"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">Extended Supply</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Tirzepatide 30mg — Bulk Supply</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The 30mg vial offers extended supply for those in maintenance phase. At a maintenance dose of 10–12.5mg per week, a 30mg vial covers 2.5–3 weeks of therapy. For longer-term protocols where you've found your stable dose, bulk vials reduce per-mg cost significantly.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['30mg per vial', 'Maintenance phase', 'Lower per-mg cost', '2–3 weeks supply'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-amber-400" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">
              View Tirzepatide 30mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-6">Tirzepatide vs Semaglutide vs Retatrutide</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-500 font-semibold py-3 px-4">Metric</th>
                <th className="text-left text-blue-400 font-semibold py-3 px-4">Semaglutide</th>
                <th className="text-left text-[#00ff88] font-semibold py-3 px-4">Tirzepatide</th>
                <th className="text-left text-purple-400 font-semibold py-3 px-4">Retatrutide</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.metric} className="border-b border-gray-100 hover:bg-white/2">
                  <td className="py-3 px-4 text-gray-500 font-medium">{row.metric}</td>
                  <td className="py-3 px-4 text-blue-700">{row.sema}</td>
                  <td className="py-3 px-4 text-emerald-700 font-semibold">{row.tirz}</td>
                  <td className="py-3 px-4 text-purple-700">{row.reta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card group">
              <summary className="p-6 cursor-pointer flex items-center justify-between gap-4 text-gray-900 font-semibold text-base list-none">
                {faq.q}
                <span className="text-[#00ff88] text-xl font-black shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-900 leading-relaxed text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-10 text-center border border-[#00ff88]/15">
          <TrendingDown className="w-10 h-10 text-[#00ff88] mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to Start the Protocol?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Tirzepatide is available as a research peptide. Start with the 15mg vial and follow the escalation protocol. Most users see measurable weight loss within 4–6 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop Tirzepatide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/retatrutide-complete-guide" className="btn-secondary">
              Explore Retatrutide Next
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/tirzepatide-complete-guide" />
    </main>
  );
}
