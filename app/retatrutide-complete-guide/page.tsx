import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, FlaskConical, TrendingDown, Flame } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import RetatrutideTripleMechanism from '@/components/RetatrutideTripleMechanism';

export const metadata: Metadata = {
  title: 'Retatrutide Complete Guide 2026: Triple Receptor, 24% Weight Loss & Protocol | BPC-157 Stack',
  description: 'Retatrutide hits GLP-1, GIP, AND glucagon receptors — the first triple agonist. Phase II data shows 24.2% weight loss with no plateau at 48 weeks. Full mechanism, protocol, and comparison guide.',
  keywords: 'retatrutide guide, retatrutide dosing, retatrutide vs tirzepatide, triple agonist peptide, GLP-1 GIP glucagon agonist, retatrutide weight loss, retatrutide phase 3, best fat loss peptide 2026',
  openGraph: {
    title: 'Retatrutide Complete Guide: Triple Receptor Mechanism & 24% Weight Loss',
    description: 'What happens when scientists don\'t stop at two receptors. Retatrutide\'s triple agonist mechanism and Phase II 24% weight loss data explained.',
    type: 'article',
    url: 'https://bp157stack.com/retatrutide-complete-guide',
  },
  alternates: {
    canonical: 'https://bp157stack.com/retatrutide-complete-guide',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const stats = [
  { value: '24.2%', label: 'Average weight loss (Phase II, 48 weeks)', color: 'text-[#00ff88]' },
  { value: '3', label: 'Receptors activated simultaneously', color: 'text-[#00ff88]' },
  { value: '0', label: 'Weight loss plateau at 48 weeks', color: 'text-[#00ff88]' },
  { value: '58 lbs', label: 'Average loss for 240lb person', color: 'text-[#00ff88]' },
];

const evolution = [
  {
    drug: 'Semaglutide',
    year: '2017',
    receptors: 'GLP-1',
    loss: '~15%',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    breakthrough: 'First GLP-1 agonist to demonstrate significant weight loss in non-diabetics. Changed how medicine thought about obesity as a treatable condition.',
  },
  {
    drug: 'Tirzepatide',
    year: '2022',
    receptors: 'GLP-1 + GIP',
    loss: '~22.5%',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    breakthrough: 'Adding GIP receptor agonism produced synergistic fat loss that exceeded predictions. The SURPASS-2 trial showed superiority over semaglutide at every dose tested.',
  },
  {
    drug: 'Retatrutide',
    year: '2024–2026',
    receptors: 'GLP-1 + GIP + Glucagon',
    loss: '~24%',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    breakthrough: 'The glucagon receptor is the metabolic rate dial. Adding glucagon agonism raises basal energy expenditure — you burn more calories at rest. The trial showed no plateau at 48 weeks, which had never been seen before.',
  },
];

const glucagonExplained = [
  {
    effect: 'Hepatic Fat Oxidation',
    icon: '🔥',
    detail: 'Glucagon receptor activation drives the liver to oxidize fat directly. This is why glucagon was historically dismissed — it raises blood glucose by driving hepatic glycogenolysis. But in the context of GLP-1 coactivation, the blood glucose elevation is suppressed while the fat oxidation effect remains, giving you all the metabolic upside without the hyperglycemia.',
  },
  {
    effect: 'Basal Metabolic Rate Elevation',
    icon: '⚡',
    detail: 'This is the key differentiator from tirzepatide. Glucagon receptor activation raises resting energy expenditure — your BMR goes up even without exercise. In the Phase II trial, this effect appeared to compound over time rather than plateau, explaining why weight loss continued straight through week 48.',
  },
  {
    effect: 'Thermogenesis in Brown Fat',
    icon: '🌡️',
    detail: 'Glucagon receptors on brown adipose tissue (BAT) drive thermogenesis — heat generation from fat burning. Brown fat activation is one of the most sought-after mechanisms in metabolic medicine. Retatrutide appears to activate this pathway in ways that semaglutide and tirzepatide do not.',
  },
];

const phaseIIData = [
  { metric: 'Duration', value: '48 weeks' },
  { metric: 'Participants', value: '338 adults (non-diabetic, BMI ≥27)' },
  { metric: 'Primary endpoint', value: 'Percent change in body weight' },
  { metric: 'Max dose tested', value: '12mg weekly SC' },
  { metric: 'Average weight loss at max dose', value: '24.2%' },
  { metric: 'Plateau observed?', value: 'No — trajectory still downward at week 48' },
  { metric: 'Phase III status', value: 'Ongoing (TRIUMPH program)' },
];

const fullComparison = [
  { label: 'Mechanism', sema: 'GLP-1', tirz: 'GLP-1 + GIP', reta: 'GLP-1 + GIP + Glucagon' },
  { label: 'Avg weight loss', sema: '~15%', tirz: '~22.5%', reta: '~24.2%' },
  { label: 'Plateau', sema: 'Yes (~20 weeks)', tirz: 'Yes (~24 weeks)', reta: 'Not observed at 48w' },
  { label: 'BMR elevation', sema: 'Minimal', tirz: 'Moderate', reta: 'Significant' },
  { label: 'Liver fat reduction', sema: 'Good', tirz: 'Better', reta: 'Best' },
  { label: 'Data maturity', sema: '5+ years', tirz: '3 years', reta: 'Phase II complete' },
  { label: 'Approval status', sema: 'FDA approved', tirz: 'FDA approved', reta: 'Phase III ongoing' },
];

const faqs = [
  {
    q: 'How is retatrutide different from tirzepatide?',
    a: 'The key addition is the glucagon receptor. Tirzepatide hits GLP-1 and GIP — and that gets you to ~22.5% weight loss. Retatrutide adds glucagon receptor agonism on top, which raises basal metabolic rate directly. You\'re not just eating less (GLP-1) and managing fat storage differently (GIP) — you\'re also running hotter metabolically (glucagon). In the Phase II trial, this translated to an additional ~2% weight loss beyond tirzepatide, with the crucial observation that weight loss hadn\'t plateaued at 48 weeks.',
  },
  {
    q: 'Why does the glucagon receptor raise metabolic rate?',
    a: 'Glucagon is classically thought of as a glucose-raising hormone — the opposite of insulin. But glucagon also directly stimulates fatty acid oxidation in the liver and activates thermogenic processes in brown adipose tissue. When given alongside GLP-1 agonism, the glucose-raising effect is blunted (GLP-1 also triggers insulin and suppresses glucagon), but the fat oxidation and thermogenic effects remain. The result is elevated resting energy expenditure — you burn more calories just existing.',
  },
  {
    q: 'Is retatrutide approved by the FDA?',
    a: 'Not yet, as of early 2026. Phase II data was published in 2023, and the TRIUMPH Phase III program is ongoing. Eli Lilly has indicated a regulatory submission timeline, but approval is likely 2027–2028 at the earliest if trials succeed. Retatrutide is currently available as a research peptide through suppliers serving the research community.',
  },
  {
    q: 'What are the side effects of retatrutide?',
    a: 'The Phase II trial reported similar side effect profiles to tirzepatide and semaglutide — primarily GI: nausea, vomiting, diarrhea, and constipation. The glucagon component can cause additional nausea at higher doses. Importantly, the trial used a slow dose escalation protocol, which significantly reduced discontinuation rates. The side effect burden appears manageable with proper titration — similar to tirzepatide.',
  },
  {
    q: 'How do I dose retatrutide as a research peptide?',
    a: 'The Phase II trial escalated from 1mg/week to a maximum of 12mg/week over 24 weeks. Research users typically follow a similar slow escalation: starting at 0.5–1mg/week, increasing by 1mg every 4 weeks until the target dose or side effect threshold is reached. Most research protocols land between 6–10mg/week as the maintenance target. Slower escalation is always better — GI adaptation takes time.',
  },
  {
    q: 'Will retatrutide outperform tirzepatide for everyone?',
    a: 'Not necessarily. The average improvement in the trial was ~2% additional weight loss. But individual responses to the glucagon component vary — some users will see dramatically better results with the metabolic rate elevation, while others may find the added GI burden isn\'t worth the marginal gain over tirzepatide. The "no plateau" finding at 48 weeks is the most compelling reason to consider retatrutide for very long-term protocols where tirzepatide\'s plateau may otherwise stop progress.',
  },
  {
    q: 'What\'s the Phase III TRIUMPH trial testing?',
    a: 'The TRIUMPH program includes multiple Phase III trials testing retatrutide in various populations — adults with obesity without diabetes, adults with type 2 diabetes, and cardiovascular outcomes. These trials will determine whether the Phase II results hold up at scale, what the long-term safety profile looks like, and whether the FDA will approve it for weight management. Results from the larger trials are expected between 2025 and 2027.',
  },
];

export default function RetatrutideCompleteGuide() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Retatrutide Complete Guide: Triple Receptor Mechanism & 24% Weight Loss',
            description: 'Retatrutide is the first triple GLP-1+GIP+Glucagon agonist. Phase II shows 24.2% weight loss with no plateau at 48 weeks.',
            url: 'https://bp157stack.com/retatrutide-complete-guide',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-sm font-semibold mb-6">
            <Flame className="w-4 h-4" />
            The Triple Agonist
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            What If We Didn't{' '}
            <span className="text-[#00ff88]">Stop at Two Receptors?</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Retatrutide is what happens when scientists ask: what if we didn't stop at two receptors? Semaglutide hit one. Tirzepatide hit two. Retatrutide hits three — GLP-1, GIP, and glucagon — and the results are something the weight loss field had never seen before: 24.2% weight loss with no plateau at 48 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              View Retatrutide <ArrowRight className="w-4 h-4" />
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

      {/* Evolution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">The GLP Evolution: One Receptor at a Time</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          Each generation of GLP-based therapy added a receptor and dramatically expanded results. Retatrutide is the logical third step — and each addition has delivered non-linear gains.
        </p>
        <div className="space-y-5">
          {evolution.map((drug, i) => (
            <div key={drug.drug} className={`glass-card border p-6 ${drug.bg}`}>
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-8 h-8 rounded-full bg-slate-900/60 flex items-center justify-center font-black text-sm border border-gray-200 ${drug.color}`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className={`font-black text-xl ${drug.color}`}>{drug.drug}</h3>
                    <span className="text-gray-500 text-sm">({drug.year})</span>
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${drug.bg}`}>{drug.receptors}</span>
                    <span className={`text-sm font-black ${drug.color}`}>{drug.loss} loss</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{drug.breakthrough}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Triple Mechanism Interactive */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Explore the Triple Receptor Mechanism</h2>
        <p className="text-gray-500 text-base mb-6">Click each receptor to understand what it contributes to the 24% weight loss result.</p>
        <RetatrutideTripleMechanism />
      </section>

      {/* The Glucagon Receptor */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Why the Glucagon Receptor Changes Everything</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          Adding GIP to GLP-1 pushed weight loss from 15% to 22.5%. Adding glucagon pushed it to 24.2% — but the more important finding was no plateau. Here's what the glucagon receptor actually does in the retatrutide context.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {glucagonExplained.map((item) => (
            <div key={item.effect} className="glass-card p-6 border border-amber-500/15">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-amber-400 font-bold text-base mb-3">{item.effect}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Retatrutide Product Image */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/retatrutide-10mg.png"
              alt="Retatrutide 10mg research peptide triple agonist"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Triple Agonist Research Peptide</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Retatrutide 10mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Retatrutide is available as a research peptide at 10mg per vial. At typical weekly doses of 6–10mg, a 10mg vial provides 1–2 weeks of supply depending on your protocol stage. The slow escalation protocol is critical — beginning at 1–2mg/week and increasing gradually to minimize GI side effects.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['10mg per vial', 'Triple receptor agonist', 'Weekly SC injection', 'Phase II validated dose range'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View Retatrutide 10mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Phase II Data Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-6">Phase II Trial Data at a Glance</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {phaseIIData.map((row, i) => (
                <tr key={row.metric} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white/1' : ''}`}>
                  <td className="py-4 px-6 text-gray-500 font-medium w-1/2">{row.metric}</td>
                  <td className="py-4 px-6 text-gray-900 font-semibold">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-sm mt-4">Source: Jastreboff et al., NEJM 2023. Phase II dose-ranging trial of retatrutide in adults with obesity.</p>
      </section>

      {/* Semaglutide Comparison Product */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-blue-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/semaglutide-6mg.png"
              alt="Semaglutide 6mg research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">GLP-1 Single Agonist</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Semaglutide 6mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The original GLP-1 agonist and still the most studied. For those starting a GLP-1 protocol, semaglutide provides proven results with the most established safety record. Once you've experienced the GLP-1 mechanism, upgrading to tirzepatide or retatrutide for greater efficacy is a logical next step.
            </p>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">
              View Semaglutide 6mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-6">Semaglutide vs Tirzepatide vs Retatrutide</h2>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-500 font-semibold py-3 px-4">Metric</th>
                <th className="text-left text-blue-400 font-semibold py-3 px-4">Semaglutide</th>
                <th className="text-left text-purple-400 font-semibold py-3 px-4">Tirzepatide</th>
                <th className="text-left text-amber-400 font-semibold py-3 px-4">Retatrutide</th>
              </tr>
            </thead>
            <tbody>
              {fullComparison.map((row) => (
                <tr key={row.label} className="border-b border-gray-100 hover:bg-white/2">
                  <td className="py-3 px-4 text-gray-500 font-medium">{row.label}</td>
                  <td className="py-3 px-4 text-blue-700">{row.sema}</td>
                  <td className="py-3 px-4 text-purple-700">{row.tirz}</td>
                  <td className="py-3 px-4 text-amber-700 font-semibold">{row.reta}</td>
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
              <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-10 text-center border border-[#00ff88]/15">
          <Flame className="w-10 h-10 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">The Most Powerful Weight Loss Peptide Available</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Retatrutide is the frontier of GLP-based fat loss research. Available now as a research peptide for those who want results that even tirzepatide can't fully deliver.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop Retatrutide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tirzepatide-complete-guide" className="btn-secondary">
              Start With Tirzepatide
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/retatrutide-complete-guide" />
    </main>
  );
}
