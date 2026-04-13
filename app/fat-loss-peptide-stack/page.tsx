import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, FlaskConical, TrendingDown, Layers, DollarSign } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GlpWeightLossCalculator from '@/components/GlpWeightLossCalculator';

export const metadata: Metadata = {
  title: 'The Ultimate Fat Loss Peptide Stack 2026: GLP-1, GH Peptides & Budget Tiers | BPC-157 Stack',
  description: 'The complete layered fat loss peptide stack: GLP-1 agonists, GH secretagogues, direct fat burners, and metabolic repair. Budget tiers from $100–$400/month.',
  keywords: 'fat loss peptide stack, best peptides for fat loss, GLP-1 stack, ipamorelin fat loss, CJC-1295 fat loss, AOD-9604, peptide weight loss protocol, fat loss stack tiers',
  openGraph: {
    title: 'Ultimate Fat Loss Peptide Stack: 4 Layers, 3 Budget Tiers',
    description: 'Fat loss peptides work by changing your hormonal environment 24 hours a day — not by burning fat during your workout. The full layered protocol explained.',
    type: 'article',
    url: 'https://bp157stack.com/fat-loss-peptide-stack',
  },
  alternates: {
    canonical: 'https://bp157stack.com/fat-loss-peptide-stack',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const stats = [
  { value: '4', label: 'Distinct fat loss mechanisms', color: 'text-[#00ff88]' },
  { value: '24/7', label: 'Hormonal environment shift', color: 'text-[#00ff88]' },
  { value: '$100', label: 'Entry-level monthly cost', color: 'text-[#00ff88]' },
  { value: '3×', label: 'More pathways than diet alone', color: 'text-[#00ff88]' },
];

const layers = [
  {
    number: '01',
    title: 'Layer 1 — GLP-1 Agonists',
    subtitle: 'Appetite & Metabolic Reset',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    mechanism: 'GLP-1 agonists (semaglutide, tirzepatide, retatrutide) don\'t burn fat directly. They change the hormonal environment — suppressing appetite, improving insulin sensitivity, and in tirzepatide/retatrutide\'s case, directly affecting adipose tissue metabolism. This is Layer 1 because it creates the caloric deficit that makes everything else work.',
    peptides: ['Semaglutide (GLP-1 single)', 'Tirzepatide (GLP-1 + GIP)', 'Retatrutide (GLP-1 + GIP + Glucagon)'],
    keyBenefit: 'Creates 15–24% body weight reduction — the foundational layer of any serious fat loss protocol.',
  },
  {
    number: '02',
    title: 'Layer 2 — GH Secretagogues',
    subtitle: 'Fat Oxidation & Lean Mass Preservation',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    mechanism: 'Growth hormone is the body\'s natural fat oxidation driver. It mobilizes fatty acids from adipose tissue for fuel and preserves lean muscle during caloric deficits. GH peptides (CJC-1295, Ipamorelin, Sermorelin) stimulate the pituitary to release GH in a physiological pulse pattern — amplifying the fat oxidation that happens while you sleep.',
    peptides: ['CJC-1295 + Ipamorelin (synergistic GH stack)', 'Sermorelin (GHRH analogue)', 'Ipamorelin standalone (lowest side effects)'],
    keyBenefit: 'Shifts the fat:muscle loss ratio dramatically. Expect 70–80% of lost weight to be fat rather than the typical 60–70% on diet alone.',
  },
  {
    number: '03',
    title: 'Layer 3 — Direct Fat Burners',
    subtitle: 'Targeted Lipolysis & Metabolic Enhancement',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    mechanism: 'AOD-9604 is a fragment of the GH molecule specifically associated with fat metabolism — it activates beta-3 adrenergic receptors in fat tissue, directly driving lipolysis without the growth-promoting effects of full GH. 5-Amino-1MQ (not a peptide, but often stacked here) is an NNMT inhibitor that prevents fat cells from storing energy efficiently. These compounds attack the fat cell itself.',
    peptides: ['AOD-9604 (GH fragment for fat cells)', '5-Amino-1MQ (NNMT inhibition)', 'Tesamorelin (visceral fat specific)'],
    keyBenefit: 'Addresses fat cells directly — especially useful for stubborn areas (visceral, subcutaneous abdominal) that respond poorly to caloric restriction alone.',
  },
  {
    number: '04',
    title: 'Layer 4 — Metabolic Repair',
    subtitle: 'Systemic Support & Insulin Sensitivity',
    color: 'text-[#00ff88]',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    mechanism: 'BPC-157\'s role in fat loss is often underappreciated. It improves gut motility and nutrient absorption, supports hepatic function (the liver is the primary fat-burning organ), upregulates GH and insulin receptors, and reduces the systemic inflammation that blunts metabolic rate. Think of it as the maintenance layer — keeping the metabolic machinery working efficiently.',
    peptides: ['BPC-157 (metabolic repair + GH receptor upregulation)', 'TB-500 (systemic healing)', 'NAD+ (mitochondrial energy efficiency)'],
    keyBenefit: 'Prevents the metabolic slowdown that typically accompanies extended fat loss protocols. Keeps your engine running clean.',
  },
];

const budgetTiers = [
  {
    tier: 'Starter',
    monthly: '$100/mo',
    color: 'text-gray-600',
    bg: 'bg-slate-800/50 border-slate-700/30',
    stack: [
      { peptide: 'Semaglutide', dose: '0.5mg/week SC', note: 'Core GLP-1 appetite suppression' },
      { peptide: 'BPC-157', dose: '250mcg 2×/day', note: 'Metabolic repair layer' },
    ],
    expectedLoss: '8–15% body weight over 6 months',
    notes: 'Best for: First-time peptide users. Establishes the GLP-1 foundation without complexity.',
  },
  {
    tier: 'Intermediate',
    monthly: '$200/mo',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    stack: [
      { peptide: 'Tirzepatide', dose: '5–10mg/week SC', note: 'Dual GIP+GLP-1 core' },
      { peptide: 'Ipamorelin', dose: '200mcg 3×/day', note: 'GH pulsing for fat oxidation' },
      { peptide: 'BPC-157', dose: '250mcg 2×/day', note: 'Metabolic base layer' },
    ],
    expectedLoss: '15–22% body weight over 6 months',
    notes: 'Best for: Serious fat loss goals. The GH peptide layer dramatically improves body composition vs GLP-1 alone.',
  },
  {
    tier: 'Advanced',
    monthly: '$400/mo',
    color: 'text-[#00ff88]',
    bg: 'bg-emerald-500/15 border-[#00ff88]/25',
    stack: [
      { peptide: 'Retatrutide', dose: '6–10mg/week SC', note: 'Triple agonist — maximum metabolic impact' },
      { peptide: 'CJC-1295 + Ipamorelin', dose: '1mg/200mcg nightly', note: 'Synergistic GH stack for fat oxidation' },
      { peptide: 'AOD-9604', dose: '300mcg 2×/day', note: 'Direct adipocyte lipolysis' },
      { peptide: 'BPC-157 + NAD+', dose: 'Protocol doses', note: 'Full metabolic support layer' },
    ],
    expectedLoss: '20–28% body weight over 6 months',
    notes: 'Best for: Experienced users with serious body recomposition goals. All four layers active simultaneously.',
  },
];

const faqs = [
  {
    q: 'Why don\'t fat loss peptides work the way people expect?',
    a: 'Most people expect a fat loss drug to directly burn fat — like a furnace. Peptides work differently. GLP-1 agonists change your appetite and insulin signaling environment. GH peptides shift your overnight metabolism toward fat oxidation. BPC-157 optimizes the metabolic machinery itself. The fat loss is real and often dramatic, but it happens through hormonal systems operating 24 hours a day — not through a single direct mechanism like thermogenesis from a stimulant.',
  },
  {
    q: 'Can I run all four layers at once?',
    a: 'Yes, and that\'s what the Advanced tier does. But it\'s not recommended to start with all four layers simultaneously. Add one layer at a time over 4–6 weeks so you can identify what works for you and catch any adverse reactions. Most people start with Layer 1 (GLP-1) alone, add Layer 2 (GH peptides) after establishing tolerance, then consider layers 3 and 4 based on goals and budget.',
  },
  {
    q: 'Do I lose muscle on a fat loss peptide stack?',
    a: 'Much less than you would on diet-only restriction. GH peptides (Layer 2) are specifically muscle-protective during caloric deficits. GIP receptor agonism in tirzepatide appears to preserve lean mass better than GLP-1 alone. Add resistance training and adequate protein (1.6–2g/kg/day) on top of this stack and muscle loss becomes very minimal — some users achieve true recomposition (fat loss + muscle gain simultaneously).',
  },
  {
    q: 'What\'s the best single peptide to start with for fat loss?',
    a: 'Semaglutide for its proven track record and manageable side effects, or tirzepatide if you want stronger results and are comfortable with a slightly higher side effect profile. Both are better starting points than jumping straight to retatrutide, which has less long-term data. Get comfortable with the GLP-1 mechanism first — then escalate.',
  },
  {
    q: 'How long should I run a fat loss peptide stack?',
    a: 'GLP-1 agonists work best with long-term use — stopping leads to weight regain (SURMOUNT-4 showed ~2/3 of lost weight returns within 18 months off drug). GH peptides can be cycled — 12 weeks on, 4 weeks off is common. AOD-9604 can be run continuously. BPC-157 is often run in 8–12 week cycles with breaks, though some use it year-round at lower doses. Design your stack with the understanding that GLP-1 is the long-term commitment.',
  },
  {
    q: 'Does exercise still matter when using fat loss peptides?',
    a: 'Yes — and it matters more strategically. Peptides change your hormonal environment; exercise determines how you spend that environment. Resistance training preserves lean mass during the fat loss. HIIT amplifies GH release, synergizing with Layer 2 peptides. Zone-2 cardio enhances mitochondrial density, improving how efficiently your body burns fat. You won\'t counteract the peptides by not exercising — but you\'ll leave significant results on the table.',
  },
];

export default function FatLossPeptideStack() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'The Ultimate Fat Loss Peptide Stack: 4 Layers, 3 Budget Tiers',
            description: 'The complete layered fat loss peptide stack — GLP-1 agonists, GH secretagogues, direct fat burners, and metabolic repair. Budget tiers from $100–$400/month.',
            url: 'https://bp157stack.com/fat-loss-peptide-stack',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/20 bg-[#00ff88]/5 text-[#00ff88] text-sm font-semibold mb-6">
            <Layers className="w-4 h-4" />
            The Layered Fat Loss Protocol
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Your Hormonal Environment{' '}
            <span className="text-[#00ff88]">24 Hours a Day</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Fat loss peptides don't work the way you think. It's not about burning fat during your workout — it's about changing the hormonal environment your body operates in 24 hours a day. GLP-1 agonists reshape your appetite hormones. GH peptides shift your overnight metabolism. Together, they produce fat loss that isolated caloric restriction never could.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop Fat Loss Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/semaglutide-vs-tirzepatide-vs-retatrutide" className="btn-secondary">
              Compare GLP Peptides
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

      {/* The 4 Layers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">The Four-Layer Fat Loss System</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-10">
          Each layer targets a different part of the fat loss equation. Layer 1 creates the caloric deficit. Layer 2 optimizes what you lose. Layer 3 attacks the fat cells directly. Layer 4 keeps the entire metabolic system running efficiently. You can run just Layer 1 and get excellent results — or stack all four for the most comprehensive fat loss protocol available.
        </p>
        <div className="space-y-6">
          {layers.map((layer) => (
            <div key={layer.number} className={`glass-card border p-7 ${layer.bg}`}>
              <div className="flex items-start gap-5">
                <div className={`text-4xl font-black shrink-0 ${layer.color} opacity-30`}>{layer.number}</div>
                <div className="flex-1">
                  <h3 className={`font-black text-xl mb-1 ${layer.color}`}>{layer.title}</h3>
                  <p className="text-gray-500 text-sm font-semibold mb-3">{layer.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{layer.mechanism}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {layer.peptides.map((p) => (
                      <span key={p} className="text-xs bg-slate-900/50 border border-gray-200 rounded-full px-3 py-1 text-gray-600">{p}</span>
                    ))}
                  </div>
                  <div className={`text-xs font-semibold ${layer.color}`}>Key benefit: {layer.keyBenefit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Estimate Your Expected Results</h2>
        <p className="text-gray-500 text-base mb-6">Calculate projected weight loss based on your GLP-1 choice, weight, and timeline.</p>
        <GlpWeightLossCalculator />
      </section>

      {/* Semaglutide product */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-blue-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/semaglutide-6mg.png"
              alt="Semaglutide 6mg GLP-1 research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Layer 1 — Entry Point</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Semaglutide 6mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">The most established GLP-1 agonist. 15% average weight loss, 5+ years of safety data, and the easiest side-effect profile of the three GLP compounds. The ideal starting point for the fat loss stack — establish the GLP-1 foundation before considering tirzepatide or retatrutide.</p>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">View Semaglutide 6mg <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Tirzepatide product */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/tirzepatide-15mg.png"
              alt="Tirzepatide 15mg dual agonist research peptide"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Layer 1 — Advanced</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Tirzepatide 15mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">The dual GIP+GLP-1 powerhouse. 22.5% average weight loss in SURMOUNT-1, superior visceral fat reduction, and better body composition than semaglutide. The workhorse of the intermediate and advanced stacks.</p>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">View Tirzepatide 15mg <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Ipamorelin product */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-purple-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/ipamorelin-10mg.png"
              alt="Ipamorelin 10mg GH secretagogue"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Layer 2 — GH Secretagogue</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">Ipamorelin 10mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">The cleanest GH secretagogue for the fat loss stack. Stimulates GH release without cortisol or prolactin elevation — purely selective GH pulsing for overnight fat oxidation and lean mass preservation. Often stacked with CJC-1295 for synergistic GH amplification.</p>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">View Ipamorelin <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Budget Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Budget Tiers</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-8">
          You don't need the full advanced stack to see dramatic results. The starter tier is highly effective for most users. The key is consistency — a simple stack run for 6 months will outperform a complex stack abandoned after 6 weeks.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {budgetTiers.map((tier) => (
            <div key={tier.tier} className={`glass-card border p-6 ${tier.bg}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-black text-xl ${tier.color}`}>{tier.tier}</h3>
                <div className={`text-2xl font-black ${tier.color}`}>{tier.monthly}</div>
              </div>
              <div className="space-y-2 mb-4">
                {tier.stack.map((s) => (
                  <div key={s.peptide} className="bg-slate-900/40 rounded-lg p-3">
                    <div className="text-gray-900 font-semibold text-sm">{s.peptide}</div>
                    <div className="text-gray-500 text-xs">{s.dose} — {s.note}</div>
                  </div>
                ))}
              </div>
              <div className={`text-xs font-bold mb-1 ${tier.color}`}>Expected outcome</div>
              <div className="text-gray-600 text-sm mb-3">{tier.expectedLoss}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{tier.notes}</div>
            </div>
          ))}
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
          <TrendingDown className="w-10 h-10 text-[#00ff88] mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Build Your Fat Loss Stack</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Start with Layer 1. Add GH peptides when you're ready. The full four-layer stack is the most powerful fat loss protocol available outside a clinical trial.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop All Fat Loss Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/tirzepatide-complete-guide" className="btn-secondary">
              Tirzepatide Complete Guide
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/fat-loss-peptide-stack" />
    </main>
  );
}
