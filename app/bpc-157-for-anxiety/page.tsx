import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import AnxietyProfileWidget from '@/components/AnxietyProfileWidget';

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

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

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

const anxietyComparisonData = [
  {
    treatment: 'BPC-157',
    mechanism: 'Gut-brain axis repair, GABA-A modulation, dopamine normalization, HPA axis regulation',
    onset: '1–4 weeks',
    dependency: 'None',
    sideEffects: 'Minimal (injection site soreness)',
    gutEffects: 'Strongly positive — heals gut barrier',
    cognitiveEffects: 'Positive — reduces brain fog, improves clarity',
    color: 'text-indigo-400',
  },
  {
    treatment: 'SSRIs',
    mechanism: 'Serotonin reuptake inhibition — increases synaptic serotonin',
    onset: '4–6 weeks',
    dependency: 'Moderate — discontinuation syndrome common',
    sideEffects: 'Sexual dysfunction, weight gain, emotional blunting, initial anxiety spike',
    gutEffects: 'Mixed — GI side effects common; nausea, diarrhea in 20–30% of users',
    cognitiveEffects: 'Mixed — emotional blunting in some; cognitive fog reported',
    color: 'text-amber-400',
  },
  {
    treatment: 'Benzodiazepines',
    mechanism: 'Direct GABA-A positive allosteric modulation',
    onset: '30–60 minutes (acute)',
    dependency: 'Very high — physical dependence within weeks',
    sideEffects: 'Cognitive impairment, memory problems, sedation, rebound anxiety',
    gutEffects: 'Neutral (does not address gut)',
    cognitiveEffects: 'Negative — significant cognitive impairment, memory disruption',
    color: 'text-red-400',
  },
  {
    treatment: 'Buspirone',
    mechanism: '5-HT1A partial agonist + D2 antagonism',
    onset: '2–4 weeks',
    dependency: 'Low',
    sideEffects: 'Dizziness, headache, nausea initially',
    gutEffects: 'Neutral',
    cognitiveEffects: 'Generally neutral; some reports of mild clarity improvement',
    color: 'text-blue-400',
  },
  {
    treatment: 'CBT',
    mechanism: 'Cognitive restructuring, exposure therapy, behavioral activation',
    onset: '6–12 weeks',
    dependency: 'None',
    sideEffects: 'Temporary anxiety increase during exposure work',
    gutEffects: 'Neutral (does not address gut)',
    cognitiveEffects: 'Positive — builds long-term cognitive regulation skills',
    color: 'text-emerald-400',
  },
];

const stackingSection = {
  intro: 'BPC-157 for anxiety becomes significantly more powerful when combined with complementary peptides and lifestyle strategies that address overlapping mechanisms. Below is the evidence-informed stacking framework.',
  peptideStacks: [
    {
      name: 'BPC-157 + Selank',
      description: 'Selank is a synthetic analogue of the naturally occurring immunomodulatory peptide tuftsin. It acts as a potent anxiolytic through GABA modulation and enkephalin metabolism, with additional nootropic effects on memory and cognitive function. Unlike benzodiazepines, Selank does not produce tolerance, withdrawal, or cognitive impairment.',
      synergy: 'BPC-157 repairs the gut-brain axis (bottom-up approach to anxiety) while Selank provides direct central anxiolytic and nootropic effects (top-down). Together they address anxiety from opposite ends of the gut-brain feedback loop.',
      protocol: 'BPC-157 250–500mcg/day (oral or SC) + Selank 250–500mcg intranasal, 1–2x daily. Many users cycle Selank 5 days on / 2 days off to maintain sensitivity.',
    },
    {
      name: 'BPC-157 + Semax',
      description: 'Semax is an ACTH(4-7)PGP analogue with strong nootropic and neuroprotective properties. It increases BDNF (brain-derived neurotrophic factor) expression, enhances dopaminergic and serotonergic signaling, and improves cognitive performance under stress.',
      synergy: 'BPC-157\'s gut-brain repair and neurotransmitter modulation combine with Semax\'s direct BDNF upregulation and cognitive enhancement for a comprehensive mood + cognition stack. Particularly effective for anxiety with prominent brain fog, anhedonia, or motivational deficit components.',
      protocol: 'BPC-157 250–500mcg/day (oral preferred for gut-brain) + Semax 100–600mcg intranasal AM. Semax is best taken in the morning due to stimulating effects.',
    },
  ],
  lifestyleSynergies: [
    {
      name: 'Cold Exposure (Cold Shower / Cold Plunge)',
      mechanism: 'Cold exposure acutely activates the sympathetic nervous system followed by a strong parasympathetic rebound — directly increasing vagal tone. This is mechanistically complementary to BPC-157\'s vagus nerve activation. Repeated cold exposure also upregulates norepinephrine 300–500% above baseline, improving mood and emotional resilience. Protocol: 2–3 minutes cold water (10–15°C) daily, immediately after BPC-157 dose for maximum synergy.',
    },
    {
      name: 'Exercise Timing',
      mechanism: 'Aerobic exercise (30+ minutes, moderate intensity) upregulates BDNF, normalizes HPA axis reactivity, and reduces baseline cortisol — all mechanistically synergistic with BPC-157. Timing matters: morning exercise amplifies the cortisol awakening response in a healthy direction (brief morning cortisol spike followed by rapid normalization) while BPC-157 moderates chronic HPA dysregulation. Resistance training supports dopamine receptor density.',
    },
    {
      name: 'Sleep Optimization',
      mechanism: 'BPC-157\'s gut-brain and HPA normalization effects are significantly amplified by sleep quality. Slow-wave sleep is the primary window for gut mucosal repair (growth hormone is highest during SWS). Prioritize: consistent sleep timing, dark/cool sleep environment, no blue light exposure within 2 hours of bed, and consider glycine 3g before bed (supports gut repair via enterocyte fuel + sleep architecture improvement).',
    },
    {
      name: 'Nasal Breathing Practice',
      mechanism: 'Nasal breathing activates the parasympathetic nervous system and directly stimulates the olfactory-vagal pathway. Daily nasal breathing practice (box breathing, 4-7-8, or simple diaphragmatic nasal breathing for 10 minutes) increases baseline vagal tone — directly synergistic with BPC-157\'s vagus nerve activation and HPA normalization effects.',
    },
  ],
};

const gutBrainAxisContent = {
  intro: `The gut-brain axis is not a metaphor — it is a complex, bidirectional communication highway connecting the enteric nervous system (ENS) of the gut to the central nervous system (CNS) of the brain. It is the most underappreciated mechanism in anxiety biology, and the most compelling reason why a peptide originally discovered in gastric juice protein can produce meaningful anxiolytic effects.`,

  whatIsIt: `The gut-brain axis encompasses three parallel communication pathways: (1) The vagus nerve — a direct neural cable running from the brainstem to the gut, transmitting signals in both directions (80% of vagal fibers carry signals FROM the gut TO the brain, not the other way around as commonly assumed). (2) The enteric nervous system — 500 million neurons in the gut wall that operate semi-independently, generating neurotransmitters and signaling molecules that influence CNS function. (3) The immune-inflammatory pathway — gut-derived inflammatory cytokines (TNF-α, IL-6, IL-1β) that cross the blood-brain barrier or activate microglial cells, producing neuroinflammation that is behaviorally indistinguishable from anxiety and depression.`,

  vagusNerve: `The vagus nerve is the anatomical backbone of the gut-brain axis and deserves particular attention. Its role in anxiety is not simply that it transmits calming signals — it is that the majority of gut-to-brain communication travels through it. When gut inflammation disrupts vagal signaling quality (as it does in IBD, leaky gut, and dysbiosis), the brain receives a continuously degraded, inflammation-contaminated signal. This creates a neurochemical environment indistinguishable from chronic stress: elevated cortisol, reduced GABA activity, dopamine system dysregulation.

BPC-157 has documented vagus nerve activation effects. In animal studies, BPC-157 administration improved vagal nerve conduction and restored the gut-to-brain signaling disrupted by experimental gut inflammation. Vagal tone normalization produces downstream effects on: heart rate variability (HRV — a clinical marker of anxiety and resilience), cortisol secretion rhythm, GABA-A receptor sensitivity, and serotonin availability.`,

  gutInflammationBrain: `The mechanism connecting gut inflammation to neuroinflammation is more direct than most people realize. Lipopolysaccharide (LPS) — a component of gram-negative bacterial cell walls that leaks through a compromised gut barrier — is one of the most potent activators of neuroinflammation known. When LPS enters systemic circulation through a leaky gut, it activates TLR4 receptors throughout the body, including on brain microglia — the resident immune cells of the central nervous system. Activated microglia produce pro-inflammatory cytokines within the brain itself, creating a neuroinflammatory state that produces behavioral symptoms including anxiety, depression, cognitive impairment, and fatigue.

This is why many anxiety sufferers also have gut problems — the gut is not separate from the brain anxiety equation; it is often the upstream source. BPC-157's ability to seal the gut barrier and reduce LPS translocation may be the most clinically impactful upstream anxiety intervention available — more fundamental than any drug that acts on neurotransmitter symptoms downstream.`,

  serotoninStory: `The serotonin story is perhaps the most striking illustration of the gut-brain axis. Approximately 90–95% of the body's total serotonin is synthesized and stored in enterochromaffin cells of the gut — not in the brain. Gut serotonin regulates motility, secretion, and importantly, vagal afferent signaling to the brain. Gut inflammation does not merely correlate with lower serotonin availability — it directly disrupts the enterochromaffin cell environment that produces it. SSRIs address serotonin depletion downstream (by preventing reuptake of whatever serotonin remains). BPC-157 addresses serotonin production upstream, by restoring the gut environment in which serotonin synthesis actually occurs.`,

  bpcResearch: `Animal research specifically examining BPC-157's gut-brain axis effects has shown: reversal of experimentally-induced anxiety behavior in rat models of gut inflammation, restoration of vagal signaling parameters disrupted by colitis models, improvement in dopaminergic signaling metrics that were degraded by gut-inflammation-induced neuroinflammation, and normalization of the HPA axis stress response in models combining gut and psychological stressors. Human clinical data is limited, but anecdotally, the gut-brain-anxiety connection is supported by the consistent pattern of users reporting mood and anxiety improvements while using BPC-157 primarily for gut conditions.`,
};

const faqs = [
  { q: 'Can BPC-157 reduce anxiety?', a: 'Multiple animal studies demonstrate anxiolytic effects from BPC-157 — including reduced anxiety behavior in forced-swim, open-field, and elevated plus-maze tests. The mechanisms include GABA-A receptor modulation, dopamine system normalization, vagus nerve activation, and HPA axis regulation. Human anecdotal reports are consistently positive for anxiety reduction, particularly among users who also have gut issues (gut-brain axis connection).' },
  { q: 'How does BPC-157 affect depression?', a: 'BPC-157 counteracts dopaminergic deficiency states that underlie depression (anhedonia, motivational deficit). It also supports serotonin production pathways through gut healing. Animal studies show BPC-157 reverses depression-like behavior in models of both stress-induced and drug-induced depression. It is not a direct serotonin reuptake inhibitor — it works through different and more fundamental mechanisms.' },
  { q: 'Is oral or injectable BPC-157 better for anxiety?', a: 'For anxiety with a gut-brain component (which is the majority of anxiety cases): oral BPC-157 is often preferred as it directly treats the gut and maximally impacts the gut-brain axis. For anxiety without obvious gut symptoms: subcutaneous injection may produce faster central nervous system effects. Many protocols use both routes simultaneously for comprehensive coverage.' },
  { q: 'How long does BPC-157 take to reduce anxiety?', a: 'Users typically report initial anxiety reduction within 1–2 weeks of starting BPC-157. This often correlates with reduced gut inflammation (the gut-brain signal improves as gut healing begins). Maximum anxiety reduction typically occurs over 4–8 weeks as gut barrier integrity and neurological signaling normalize. Some users report noticing effects within days — particularly the calming/GABA-mediated effects.' },
  { q: 'Can BPC-157 be used with antidepressants or anxiolytics?', a: 'BPC-157 does not have known negative interactions with SSRIs, SNRIs, or benzodiazepines. Its mechanisms are different enough from these drug classes that combination is generally considered low-risk. However, given the lack of formal pharmacokinetic studies, anyone on psychiatric medications should discuss peptide use with their prescribing physician. BPC-157 should not be used as a replacement for prescribed mental health medications without physician guidance.' },
  { q: 'Can BPC-157 help with PTSD?', a: 'PTSD involves HPA axis dysregulation, limbic system hyperreactivity, and often significant gut-brain axis disruption (trauma survivors have markedly higher rates of IBS and gut disorders). BPC-157\'s documented HPA axis normalization effects are directly relevant — animal models of trauma-induced stress show BPC-157 reduces cortisol dysregulation and normalizes the exaggerated stress response characteristic of PTSD-like states. The GABA-A receptor modulation may also reduce hyperarousal and intrusive symptomatology. While BPC-157 is not a PTSD treatment and should not replace therapy, its mechanisms are particularly well-matched to PTSD pathophysiology. Some users with PTSD report meaningful reductions in hyperarousal and sleep disturbance on BPC-157 protocols.' },
  { q: 'Does BPC-157 help with social anxiety specifically?', a: 'Social anxiety involves a specific pattern of dopaminergic dysregulation (reduced dopamine reward signaling in social contexts) combined with heightened amygdala reactivity and HPA axis hyperresponsiveness to social evaluation stimuli. BPC-157 addresses two of these three mechanisms directly: it modulates dopamine receptor sensitivity and normalizes HPA axis reactivity. The GABA-A modulatory effects may also reduce the acute physiological anxiety response (heart racing, sweating, voice tremor) that social anxiety sufferers experience. Anecdotally, users with social anxiety often report feeling more socially relaxed within 2–4 weeks of BPC-157 — most commonly attributed to reduced baseline physiological anxiety rather than changes in cognition or social skill.' },
  { q: 'Can BPC-157 help with OCD-related symptoms?', a: 'OCD is primarily understood as a disorder of serotonin-dopamine dysregulation in cortico-striato-thalamo-cortical (CSTC) circuits. BPC-157\'s dopamine system modulation is relevant — dopamine hyperactivity in the striatum is implicated in the compulsive component of OCD, and BPC-157 has shown bidirectional dopamine normalization effects (reducing hyperactivity as well as correcting hypoactivity). The gut-brain axis connection is also clinically relevant: OCD has higher-than-expected comorbidity with gut disorders, and several case reports document OCD symptom improvement following gut microbiome interventions. BPC-157 is not a proven OCD treatment, but its dopamine-normalizing and gut-brain-repairing effects target relevant pathophysiology. Results would be expected to be most pronounced in OCD patients with comorbid gut symptoms.' },
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

      {/* Anxiety Profile Widget */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Your Anxiety Profile</h2>
          <p className="text-slate-400 mb-8">
            Not all anxiety is the same. Identify which of BPC-157's six mechanisms are most relevant to your symptom pattern — and whether oral or injectable is the better match for you.
          </p>
          <AnxietyProfileWidget />
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12">
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

      {/* Comparison Table */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">BPC-157 vs. Conventional Anxiety Treatments</h2>
          <p className="text-slate-400 mb-10">
            A direct comparison of BPC-157 against the most commonly prescribed anxiety interventions — across mechanism, dependency risk, gut effects, and cognitive impact.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Treatment</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Mechanism</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Onset</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Dependency</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Side Effects</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Gut Effects</th>
                  <th className="text-left py-3 px-3 text-slate-400 font-semibold">Cognitive Effects</th>
                </tr>
              </thead>
              <tbody>
                {anxietyComparisonData.map((row, i) => (
                  <tr key={row.treatment} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className={`py-3 px-3 font-bold ${row.color}`}>{row.treatment}</td>
                    <td className="py-3 px-3 text-slate-300">{row.mechanism}</td>
                    <td className="py-3 px-3 text-slate-300">{row.onset}</td>
                    <td className="py-3 px-3 text-slate-400">{row.dependency}</td>
                    <td className="py-3 px-3 text-slate-400">{row.sideEffects}</td>
                    <td className="py-3 px-3 text-slate-400">{row.gutEffects}</td>
                    <td className="py-3 px-3 text-slate-400">{row.cognitiveEffects}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gut-Brain Axis Deep Dive */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3">The Gut-Brain Axis: A Deep Dive</h2>
        <p className="text-slate-400 mb-10 text-lg">
          Why fixing the gut is the most upstream anxiety intervention available — and how BPC-157 leverages this pathway.
        </p>

        <div className="space-y-6">
          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-indigo-400 mb-4">What the Gut-Brain Axis Actually Is</h3>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>{gutBrainAxisContent.intro}</p>
              <p>{gutBrainAxisContent.whatIsIt}</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-indigo-400 mb-4">The Vagus Nerve: Your Anxiety Control Line</h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{gutBrainAxisContent.vagusNerve}</p>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-indigo-400 mb-4">How Gut Inflammation Creates Neuroinflammation</h3>
            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{gutBrainAxisContent.gutInflammationBrain}</p>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-indigo-400 mb-4">The Serotonin Production Story</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{gutBrainAxisContent.serotoninStory}</p>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-indigo-400 mb-4">BPC-157 Research in Gut-Brain Signaling</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{gutBrainAxisContent.bpcResearch}</p>
          </div>
        </div>
      </section>

      {/* Stacking for Anxiety */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Stacking BPC-157 for Anxiety</h2>
          <p className="text-slate-400 mb-10">
            {stackingSection.intro}
          </p>

          <div className="space-y-6">
            {/* Peptide stacks */}
            <div className="space-y-5">
              {stackingSection.peptideStacks.map((stack) => (
                <div key={stack.name} className="glass-card p-8">
                  <h3 className="text-xl font-black text-indigo-400 mb-4">{stack.name}</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 mb-2">WHAT IT IS</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{stack.description}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 mb-2">SYNERGY</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{stack.synergy}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-slate-500 mb-2">PROTOCOL</p>
                      <p className="text-indigo-300 text-sm leading-relaxed">{stack.protocol}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lifestyle synergies */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-white mb-6">Lifestyle Synergies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {stackingSection.lifestyleSynergies.map((ls) => (
                  <div key={ls.name} className="bg-white/3 rounded-xl p-5 border border-white/8">
                    <h4 className="text-indigo-400 font-bold mb-3">{ls.name}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{ls.mechanism}</p>
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
