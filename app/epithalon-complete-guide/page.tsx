import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Moon, Brain, Dna, Activity } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import EpithalonCyclePlanner from '@/components/EpithalonCyclePlanner';

export const metadata: Metadata = {
  title: 'Epithalon Complete Guide: Dosing, Benefits & Longevity Protocol (2026)',
  description: 'The complete Epithalon guide — telomere lengthening, anti-aging mechanisms, dosing protocol, cycle length, and results timeline. Everything you need to know about the most powerful longevity peptide.',
  keywords: 'epithalon guide, epithalon dosing, epithalon benefits, epithalon telomere, epithalon protocol, epithalon anti-aging, epithalon cycle, epithalon results, epithalon peptide',
  openGraph: {
    title: 'Epithalon Complete Guide: Dosing, Benefits & Protocol 2026',
    description: 'Complete guide to Epithalon — telomere lengthening, anti-aging, dosing protocol, and results.',
    type: 'article',
    url: 'https://www.bp157stack.com/epithalon-complete-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Epithalon Complete Guide 2026',
    description: 'Everything about Epithalon — telomere lengthening, dosing, protocol, and anti-aging results.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

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
  { q: 'Can Epithalon be taken indefinitely — is there a maximum cycle limit?', a: 'There is no established maximum cycle limit in the clinical literature. The longest human research protocols ran for 10 years (Khavinson et al.) with continued benefit and no adverse effects observed. Most practitioners recommend the standard twice-yearly cycling approach rather than continuous use, primarily to mirror the research protocols with the strongest evidence. Whether indefinite monthly maintenance dosing provides additional benefit over standard cycling is an open question — the available data favors cycling.' },
  { q: 'Do younger people (under 40) benefit from Epithalon?', a: 'Yes, but the nature of the benefit shifts with age. In younger users, the most immediate and reliable benefits are circadian rhythm optimization and sleep quality improvement (pineal/melatonin mechanism), which operates regardless of age. Telomere lengthening effects are most pronounced in individuals with shorter telomeres — typically older populations. Younger users benefit from establishing a protective anti-aging foundation and the sleep/recovery optimization, though the dramatic reversal effects seen in elderly study populations may not be as immediately apparent.' },
  { q: 'What is the difference between Epithalon and Epitalon?', a: '"Epithalon" and "Epitalon" refer to the exact same tetrapeptide (Ala-Glu-Asp-Gly). The name difference is purely a transliteration variation — "Epitalon" comes from the Russian transliteration of the original name (Эпиталон), while "Epithalon" is an anglicized version more commonly used in Western markets. Both refer to the same molecule, same research, and same product. When purchasing, confirm the amino acid sequence (Ala-Glu-Asp-Gly) and look for certificate of analysis verification regardless of which spelling the vendor uses.' },
  { q: 'Does Epithalon affect cancer risk — positive or negative?', a: 'The available evidence leans strongly toward cancer risk reduction, not increase. Animal studies consistently show reduced tumor incidence (30–50% in some studies) in Epithalon-treated groups, attributed to DNA repair enhancement, reduced oxidative damage, and improved immune surveillance (NK cell activity is particularly relevant for tumor clearance). The telomerase activation mechanism has raised theoretical questions — since cancer cells also activate telomerase — but the clinical and animal evidence does not support increased cancer risk at physiological doses. Khavinson\'s extended studies show no carcinogenic signal.' },
];

const longevityComparison = [
  {
    compound: 'Epithalon',
    mechanism: 'Telomerase activation via pineal gland / gene expression modulation',
    telomereEffect: 'Direct telomere lengthening — measured in human studies',
    humanEvidence: 'Clinical studies (Khavinson et al.) — 35+ years of data',
    cycleLength: '10 days, 2× per year',
    accessibility: 'Research peptide — injection required',
    cost: '$60–$120/cycle',
    verdict: 'Strongest direct telomere evidence',
    highlight: true,
  },
  {
    compound: 'Resveratrol',
    mechanism: 'Sirtuin (SIRT1) activation — NAD+ pathway support',
    telomereEffect: 'Indirect — may slow shortening via oxidative stress reduction',
    humanEvidence: 'Mixed human trials — many benefits not replicated at oral doses',
    cycleLength: 'Daily supplement',
    accessibility: 'Oral supplement — easy',
    cost: '$20–$50/month',
    verdict: 'Weak direct telomere effect',
    highlight: false,
  },
  {
    compound: 'NMN / NAD+',
    mechanism: 'NAD+ precursor — mitochondrial function and sirtuin activation',
    telomereEffect: 'Indirect — preserves telomeres via improved DNA repair',
    humanEvidence: 'Growing human evidence — strong for mitochondrial function',
    cycleLength: 'Daily supplement',
    accessibility: 'Oral supplement — easy',
    cost: '$40–$100/month',
    verdict: 'Mitochondria-focused, not telomere-direct',
    highlight: false,
  },
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Anti-Aging', item: 'https://www.bp157stack.com/anti-aging' },
                { '@type': 'ListItem', position: 3, name: 'Epithalon Complete Guide', item: 'https://www.bp157stack.com/epithalon-complete-guide' },
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
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold tracking-wide">EPITHALON COMPLETE GUIDE 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Epithalon:<br />
            <span className="text-purple-400">Complete Guide</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
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
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Epithalon Benefits: What the Research Shows</h2>
        <p className="text-gray-500 mb-10">Epithalon has one of the longest research histories of any peptide — developed in Russia starting in the 1980s with extensive clinical data.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-purple-400 font-semibold mb-1">{b.rank}</div>
                  <h3 className="text-gray-900 font-bold">{b.title}</h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── KHAVINSON RESEARCH SECTION ── */}
      <section className="py-16" style={{ background: 'rgba(168,85,247,0.03)', borderTop: '1px solid rgba(168,85,247,0.08)', borderBottom: '1px solid rgba(168,85,247,0.08)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Dna className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-black text-gray-900">The Khavinson Research: 30 Years of Epithalon Data</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">Vladimir Khavinson's institute produced the foundational science behind Epithalon. Here is the trajectory of that research and why it matters.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div className="glass-card p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">The Origin: Epithalamin</div>
                <p className="text-gray-600 text-sm leading-relaxed">In the late 1970s, Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology began studying bovine pineal gland extract — a complex mixture called Epithalamin. Early animal studies showed remarkable anti-aging effects: extended lifespan, reduced tumor incidence, improved hormonal regulation. Khavinson's team identified that the active fraction was a tetrapeptide — Ala-Glu-Asp-Gly — which they synthesized and named Epithalon.</p>
              </div>

              <div className="glass-card p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">Animal to Human: The Progression</div>
                <p className="text-gray-600 text-sm leading-relaxed">Initial studies in rats and mice demonstrated statistically significant lifespan extensions of 20–30% in treated groups. Tumor incidence fell by 40–50% in carcinogen-exposed animals. Immune parameters (NK cells, T-cell counts) showed restoration toward younger-animal baselines. These results, replicated across multiple mammalian species, justified the transition to human clinical trials in the 1990s.</p>
              </div>

              <div className="glass-card p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">The Telomerase Discovery</div>
                <p className="text-gray-600 text-sm leading-relaxed">The mechanistic breakthrough came in 2003 when Khavinson et al. published evidence that Epithalon activates telomerase — the enzyme responsible for rebuilding telomere sequences. Human somatic cells (which normally do not express telomerase) showed detectable telomerase activity after Epithalon treatment. Telomere length was measurably increased. This was the first peptide demonstrated to achieve this effect in human cells.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="glass-card p-6" style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">Landmark Study: 28% Mortality Reduction</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">The most cited piece of Epithalon evidence comes from a 10-year longitudinal study in elderly patients (aged 60–74 at enrollment). The Epithalon group showed a 28% reduction in mortality versus the control group over the follow-up period. Biological aging markers — telomere length, immune panel, hormonal profiles — were all more favorable in the Epithalon group. This is extraordinary data for any anti-aging intervention.</p>
                <div className="rounded-xl p-4 text-center" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
                  <div className="text-3xl font-black text-purple-400 mb-1">28%</div>
                  <div className="text-gray-500 text-xs">Mortality reduction over 10 years<br />vs. control group (Khavinson et al.)</div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-3">Why This Research Matters</div>
                <ul className="space-y-2.5">
                  {[
                    'Epithalon has the longest continuous human safety record of any longevity peptide — 35+ years',
                    'Multiple independent research groups have replicated the core telomerase activation finding',
                    'The 10-year mortality study is rare in longevity research — most interventions lack this data',
                    'Research was conducted in actual elderly populations, not cell cultures or model organisms alone',
                    'No serious adverse effects have been reported in any published study across 35 years',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-purple-400 shrink-0 mt-0.5">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CYCLE PLANNER WIDGET ── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <Activity className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-black text-gray-900">Epithalon Cycle Planner</h2>
        </div>
        <p className="text-gray-500 mb-8">Input your age and primary goal to receive a personalized Epithalon protocol — including dose, cycle frequency, optimal injection timing, biomarkers to track, and realistic expectations.</p>
        <EpithalonCyclePlanner />
      </section>

      {/* ── CIRCADIAN RHYTHM / PINEAL SECTION ── */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.9)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Moon className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-black text-gray-900">What Epithalon Does to Your Circadian Rhythm</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">The pineal-circadian connection is deeper than most people realize. Epithalon's effects on sleep are not a side benefit — they are a window into the anti-aging mechanism itself.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <Moon className="w-4 h-4 text-purple-400" />
                  Melatonin Beyond Sleep
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">Melatonin is widely understood as a sleep hormone but is actually one of the most potent endogenous antioxidants. It crosses the blood-brain barrier, penetrates mitochondria directly, and neutralizes reactive oxygen species in locations that other antioxidants cannot reach. It also modulates immune function, regulates tumor suppressor genes, and coordinates hormonal rhythms throughout the body. The pineal gland's melatonin output is not just about sleep timing — it is an anti-aging signal broadcast system-wide every night.</p>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Telomere Health and Circadian Rhythm: The Link
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">Circadian disruption (shift work, irregular sleep) is now established as a risk factor for accelerated biological aging. The mechanism involves DNA damage repair — which peaks during sleep — and oxidative stress accumulation from impaired melatonin antioxidant activity. Shorter telomeres are consistently found in populations with chronic sleep disruption. Restoring circadian rhythm via the pineal axis is not just about feeling rested — it directly supports telomere maintenance.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  The Pineal Gland Decline with Age
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">The pineal gland begins calcifying in adolescence and this process accelerates significantly after age 40. By age 60, melatonin output is often less than 25% of youthful levels. The consequences compound: worse sleep quality leads to less nighttime repair, which leads to more oxidative damage, which leads to faster telomere attrition, which feeds back into accelerated aging. The pineal is a keystone organ — its decline cascades throughout the biological aging process.</p>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-purple-400" />
                  Practical Implications
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: 'Sleep quality', detail: 'Deeper, more consolidated sleep within first cycle — reported by most users in days 3–5' },
                    { label: 'Jet lag recovery', detail: 'Faster circadian re-entrainment — some users specifically run cycles around transmeridian travel' },
                    { label: 'Seasonal mood', detail: 'Improved mood and energy stability through season changes, particularly winter' },
                    { label: 'Hormonal rhythm', detail: 'Downstream normalization of cortisol curve, GH release timing, and testosterone rhythm' },
                  ].map((item) => (
                    <li key={item.label} className="text-xs">
                      <span className="text-purple-400 font-semibold">{item.label}:</span>
                      <span className="text-gray-500 ml-1">{item.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EPITHALON vs RESVERATROL vs NMN COMPARISON ── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <Dna className="w-6 h-6 text-purple-400" />
          <h2 className="text-3xl font-black text-gray-900">Epithalon vs. Resveratrol vs. NMN: Telomere Comparison</h2>
        </div>
        <p className="text-gray-500 mb-3 max-w-3xl">How does Epithalon compare to the most popular longevity supplements? The key differentiator is the directness of the telomere evidence.</p>
        <p className="text-gray-500 text-sm mb-8">Resveratrol and NMN are excellent compounds with their own evidence base — but neither has demonstrated direct telomere lengthening in humans. Epithalon has.</p>

        <div className="overflow-x-auto rounded-2xl mb-8" style={{ border: '1px solid rgba(168,85,247,0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(168,85,247,0.06)' }}>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Compound</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Mechanism</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Telomere Effect</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Human Evidence</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Est. Cost</th>
                <th className="text-left py-3 px-4 text-purple-400 font-bold">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {longevityComparison.map((row, i) => (
                <tr
                  key={row.compound}
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    background: row.highlight ? 'rgba(168,85,247,0.05)' : i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                  }}
                >
                  <td className="py-3 px-4">
                    <span className={`font-bold ${row.highlight ? 'text-purple-700' : 'text-gray-900'}`}>{row.compound}</span>
                    {row.highlight && <span className="ml-2 text-xs text-purple-400 font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(168,85,247,0.15)' }}>★ Best</span>}
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-xs max-w-[180px]">{row.mechanism}</td>
                  <td className="py-3 px-4 text-xs">
                    <span className={row.highlight ? 'text-purple-700 font-semibold' : 'text-gray-500'}>{row.telomereEffect}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-500 text-xs">{row.humanEvidence}</td>
                  <td className="py-3 px-4 text-gray-700 text-xs font-mono">{row.cost}</td>
                  <td className="py-3 px-4 text-xs font-semibold">
                    <span className={row.highlight ? 'text-purple-400' : 'text-gray-500'}>{row.verdict}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-card p-6" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
          <p className="text-gray-600 text-sm leading-relaxed">
            <strong className="text-purple-400">The key insight:</strong> Resveratrol and NMN work upstream (sirtuin activation, NAD+ restoration) and may indirectly support telomere maintenance, but neither has human evidence of direct telomere lengthening. Epithalon directly activates telomerase — the enzyme that extends telomeres — and this has been demonstrated in human cells and elderly human subjects. These compounds are not mutually exclusive — stacking Epithalon with NAD+ precursors addresses both telomere length and mitochondrial function simultaneously.
          </p>
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Dosing Protocols</h2>
          <p className="text-gray-500 mb-8">Choose based on your goals and commitment level.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {protocol.map((p, i) => (
              <div key={p.name} className={`glass-card p-6 ${i === 0 ? 'border border-purple-500/30' : ''}`}>
                {i === 0 && <div className="text-xs font-bold text-purple-400 tracking-widest mb-2">RECOMMENDED</div>}
                <h3 className="text-gray-900 font-black text-lg mb-4">{p.name}</h3>
                <div className="space-y-2 mb-4">
                  <div><span className="text-gray-500 text-xs">Total dose: </span><span className="text-gray-900 text-xs font-semibold">{p.dose}</span></div>
                  <div><span className="text-gray-500 text-xs">Schedule: </span><span className="text-gray-900 text-xs font-semibold">{p.schedule}</span></div>
                  <div><span className="text-gray-500 text-xs">Frequency: </span><span className="text-gray-900 text-xs font-semibold">{p.frequency}</span></div>
                  <div><span className="text-gray-500 text-xs">Route: </span><span className="text-purple-400 text-xs font-semibold">{p.route}</span></div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-gray-900 mb-8">What to Expect: Results Timeline</h2>
        <div className="space-y-4">
          {[
            { period: 'Days 3–5 (during cycle)', results: 'Sleep quality noticeably improves — deeper sleep, more vivid dreams, waking more refreshed. This is the pineal/melatonin effect.' },
            { period: 'Days 7–10 (cycle completion)', results: 'Energy levels elevated. Many users report improved mood and cognitive clarity. Sleep optimization near-complete.' },
            { period: 'Weeks 2–4 (post-cycle)', results: 'Sustained sleep improvements. Some users report improved skin quality beginning. Subjective sense of wellbeing and vitality.' },
            { period: 'Months 1–6 (cumulative)', results: 'Long-term users report cumulative anti-aging effects over multiple cycles. Biological aging markers (if tested) may show improvement. Best results seen over 2+ years of bi-annual cycling.' },
          ].map((t) => (
            <div key={t.period} className="glass-card p-5 flex gap-5">
              <div className="text-purple-400 font-black text-sm shrink-0 w-40">{t.period}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{t.results}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STACKING EPITHALON ── */}
      <section className="py-16" style={{ background: 'rgba(168,85,247,0.03)', borderTop: '1px solid rgba(168,85,247,0.08)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-black text-gray-900">Stacking Epithalon: The Anti-Aging Synergy Protocol</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">Epithalon works through three mechanisms simultaneously — telomere, circadian, and gene expression. Each stacking partner addresses a distinct aging pathway, creating a multi-front anti-aging protocol used in Russian longevity clinics.</p>

          <div className="space-y-5 mb-10">
            {[
              {
                combo: 'Epithalon + GHK-Cu',
                label: 'Cellular + Structural Anti-Aging',
                mechanism: 'Epithalon addresses telomere length and gene expression at the cellular level. GHK-Cu (copper peptide) independently modulates over 4,000 genes — increasing collagen synthesis, antioxidant defense, tissue repair, and anti-inflammatory signaling. Together, they work from the ground up (telomere maintenance) and top down (structural tissue quality). This is the most commonly paired combination in longevity protocols.',
                color: 'rgba(168,85,247,0.08)',
                border: 'rgba(168,85,247,0.2)',
                tag: 'Most recommended pairing',
              },
              {
                combo: 'Epithalon + NAD+',
                label: 'Telomere + Mitochondria',
                mechanism: 'Epithalon extends telomeres; declining NAD+ is the other primary driver of cellular aging. NAD+ supplementation (NMN, NR) restores mitochondrial efficiency, sirtuin activity, and DNA repair enzyme function. The two compounds are mechanistically complementary — addressing the two most validated aging biomarkers simultaneously. Neither interferes with the other\'s mechanism.',
                color: 'rgba(59,130,246,0.06)',
                border: 'rgba(59,130,246,0.15)',
                tag: 'Dual-target approach',
              },
              {
                combo: 'Epithalon + CJC-1295 / Ipamorelin',
                label: 'Longevity + Hormone Restoration',
                mechanism: 'Growth hormone secretion declines ~14% per decade after age 30. CJC-1295 + Ipamorelin restores GH pulsatility toward youthful levels, driving IGF-1 increase, improved body composition, enhanced sleep architecture, and cellular repair signaling. Combined with Epithalon, you address both the hormonal aging axis (GH/IGF-1 decline) and the cellular aging axis (telomere shortening) — the approach used in Russian anti-aging clinics for comprehensive longevity protocols.',
                color: 'rgba(16,185,129,0.06)',
                border: 'rgba(16,185,129,0.15)',
                tag: 'Full hormone + longevity stack',
              },
            ].map((item) => (
              <div key={item.combo} className="glass-card p-6" style={{ background: item.color, border: `1px solid ${item.border}` }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{item.label}</span>
                    <h3 className="text-gray-900 font-black text-lg">{item.combo}</h3>
                  </div>
                  <span className="text-xs font-semibold text-purple-400 px-3 py-1 rounded-full shrink-0 whitespace-nowrap" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.mechanism}</p>
              </div>
            ))}
          </div>

          {/* Full protocol box */}
          <div className="glass-card p-6" style={{ border: '1px solid rgba(168,85,247,0.3)' }}>
            <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Full Longevity Stack Protocol</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { compound: 'Epithalon', schedule: '1mg/day for 10 days × 2/year', role: 'Telomere lengthening + circadian reset' },
                { compound: 'GHK-Cu', schedule: '2–3mg SC daily or 5 days/week', role: 'Gene expression + collagen + tissue quality' },
                { compound: 'NAD+ / NMN', schedule: '500mg oral daily', role: 'Mitochondrial function + sirtuin activation' },
                { compound: 'CJC-1295 + Ipamorelin', schedule: '100mcg each, nightly injection', role: 'GH restoration + body composition + sleep' },
              ].map((item) => (
                <div key={item.compound} className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.12)' }}>
                  <div className="text-gray-900 font-black text-sm mb-1">{item.compound}</div>
                  <div className="text-gray-500 text-xs mb-1 font-mono">{item.schedule}</div>
                  <div className="text-purple-700 text-xs">{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Epithalon FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-purple-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Get Epithalon</h2>
          <p className="text-gray-500 mb-6">COA-verified Epithalon — the telomere-lengthening longevity peptide. US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View Epithalon <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/epithalon" className="btn-secondary px-8 py-4">Epithalon Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/epithalon-complete-guide" />
    </div>
  );
}
