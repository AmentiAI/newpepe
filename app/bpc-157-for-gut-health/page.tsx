import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GutSymptomChecker from '@/components/GutSymptomChecker';

export const metadata: Metadata = {
  title: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol (2026)',
  description: 'BPC-157 is one of the most studied peptides for gut healing. Complete guide to using BPC-157 for leaky gut, IBD, Crohn\'s, IBS, and gastric ulcers — oral vs injectable, dosing protocol, and results timeline.',
  keywords: 'BPC-157 gut health, BPC-157 leaky gut, BPC-157 IBD, BPC-157 IBS, BPC-157 stomach, BPC-157 oral, BPC-157 intestinal healing, peptide gut health, BPC-157 for digestion, BPC-157 Crohn\'s',
  openGraph: {
    title: 'BPC-157 for Gut Health: Complete Protocol Guide',
    description: 'BPC-157 oral vs injectable for leaky gut, IBD, IBS — dosing, timeline, and results.',
    type: 'article',
    url: 'https://www.bp157stack.com/bpc-157-for-gut-health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol',
    description: 'Complete guide to BPC-157 for gut healing — oral vs injectable, dosing, and results.',
  },
  alternates: { canonical: 'https://www.bp157stack.com/bpc-157-for-gut-health' },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const benefits = [
  { title: 'Intestinal Wall Repair', desc: 'BPC-157 upregulates tight junction proteins (occludin, claudin) that seal gaps in the intestinal wall — directly addressing the mechanism of leaky gut syndrome.' },
  { title: 'Anti-Inflammatory Action', desc: 'Suppresses pro-inflammatory cytokines (TNF-α, IL-6) throughout the gut. This is the primary mechanism of benefit in IBD, Crohn\'s, and colitis.' },
  { title: 'Mucosal Protection & Repair', desc: 'Accelerates healing of gastric and intestinal mucosa. Animal models show complete ulcer healing in 1–2 weeks versus partial healing in controls.' },
  { title: 'Angiogenesis in Gut Tissue', desc: 'Stimulates new blood vessel formation in damaged gut tissue — improving oxygen and nutrient delivery to areas that are chronically inflamed and poorly perfused.' },
  { title: 'Gut-Brain Axis Modulation', desc: 'BPC-157 modulates the vagus nerve and gut-brain signaling, which explains the secondary benefits many users report: reduced anxiety, better mood, and improved cognitive clarity.' },
  { title: 'H. pylori & Ulcer Healing', desc: 'Direct protective effects on gastric epithelium. Research shows significant reduction in ulcer area and acceleration of complete mucosal repair.' },
];

const protocol = [
  { title: 'Oral (Capsule/Liquid)', dose: '250–500mcg daily', timing: 'Morning, fasted', notes: 'Best route for gut conditions. Peptide acts locally throughout the GI tract as it passes through. Most convenient method.' },
  { title: 'Subcutaneous Injection', dose: '250–500mcg/day', timing: 'Morning or split AM/PM', notes: 'Produces systemic + local gut effects. Best if you also have systemic inflammation or joint issues alongside gut problems.' },
  { title: 'Oral + Injection Stack', dose: '250mcg oral + 250mcg SC', timing: 'Oral AM, inject PM', notes: 'Advanced protocol for severe IBD or Crohn\'s. Covers both local mucosal and systemic inflammatory pathways simultaneously.' },
];

const faqs = [
  { q: 'Does BPC-157 actually heal leaky gut?', a: 'Multiple animal studies show BPC-157 directly restores intestinal barrier function by upregulating tight junction proteins (occludin, claudin-1) that seal the gut wall. It also reduces the inflammatory signaling that drives ongoing barrier disruption. Human clinical trials are limited, but anecdotal reports from leaky gut protocols are consistently positive — many users report significant symptom reduction in 2–4 weeks of oral BPC-157.' },
  { q: 'Should I take BPC-157 orally or inject it for gut health?', a: 'For gut-specific conditions (leaky gut, IBD, IBS, gastric ulcers): oral administration is preferred. When taken orally, BPC-157 acts topically throughout the entire GI tract as it passes through — directly treating the tissue that needs it. Injectable BPC-157 produces systemic effects but has less direct contact with gut tissue. Many protocols use both: oral for local gut action + injections for systemic anti-inflammatory effect.' },
  { q: 'How long does BPC-157 take to heal the gut?', a: 'Most users report noticeable improvement in gut symptoms (bloating, urgency, cramping) within 1–2 weeks of starting oral BPC-157. Significant healing (barrier repair, reduced inflammation markers) typically takes 4–8 weeks of consistent use. For chronic conditions like Crohn\'s or long-standing leaky gut, 3–6 month protocols are common before reassessing.' },
  { q: 'Is BPC-157 safe for long-term gut use?', a: 'BPC-157 has an excellent safety profile in animal models even at high doses — no toxicity, no carcinogenicity, no organ stress markers. Human clinical experience (primarily through research use) similarly shows very few adverse effects. It does not suppress stomach acid or alter gut microbiome composition, making it safer for long-term use than PPIs or antibiotics for gut management.' },
  { q: 'Can BPC-157 help with Crohn\'s disease?', a: 'BPC-157 has shown significant anti-inflammatory and intestinal healing effects in Crohn\'s-relevant animal models, including reduction of TNF-α and IL-6 — the primary cytokines driving Crohn\'s pathology. Anecdotally, many Crohn\'s patients report meaningful symptom reduction on BPC-157 protocols. It should be considered adjunctive to, not a replacement for, prescribed Crohn\'s medications without physician oversight.' },
  { q: 'How does BPC-157 interact with gut dysbiosis?', a: 'Gut dysbiosis — an imbalance in microbial populations — and gut inflammation exist in a self-reinforcing cycle: dysbiosis drives mucosal inflammation, and inflammation creates an environment that further disrupts microbial balance. BPC-157 breaks this cycle from the inflammation side. By reducing pro-inflammatory cytokines (TNF-α, IL-6) and restoring tight junction integrity, BPC-157 creates a more hospitable environment for commensal bacteria to re-establish. It does not directly act as a prebiotic or probiotic — it does not feed beneficial bacteria or introduce new strains. Instead, it removes the inflammatory barrier that prevents healthy microbiome restoration. For best results with dysbiosis, combine BPC-157 with targeted probiotic supplementation (Lactobacillus and Bifidobacterium strains) and prebiotic fiber foods.' },
  { q: 'Can BPC-157 help with food intolerances?', a: 'Many food intolerances — particularly non-IgE-mediated sensitivities to gluten, dairy, FODMAPs, and other foods — are driven or exacerbated by intestinal hyperpermeability (leaky gut). When the intestinal barrier is compromised, partially digested food proteins pass into the bloodstream, triggering immune reactions that manifest as food sensitivity symptoms. By restoring tight junction integrity, BPC-157 can meaningfully reduce the immune exposure that drives acquired food sensitivities. Many users report that food sensitivities they had for years diminish or resolve after 4–8 weeks of oral BPC-157. Celiac disease (autoimmune, genetic) and true food allergies (IgE-mediated) are different mechanisms and would not be expected to resolve with BPC-157 alone.' },
  { q: 'How does BPC-157 affect the enteric nervous system?', a: 'The enteric nervous system (ENS) — sometimes called "the second brain" — is an extensive network of roughly 500 million neurons embedded in the gut wall that controls motility, secretion, and local immune responses autonomously. BPC-157 has multiple documented effects on the ENS and gut neurotransmission: it modulates nitric oxide (NO) production in the gut wall (affecting smooth muscle relaxation and motility), influences serotonin signaling in enterochromaffin cells (gut serotonin cells), and reduces neuroinflammation through its anti-TNF effects. This ENS modulation may explain the gut motility improvements many users report — reduced spastic cramping in IBS-C and IBS-D — beyond simple barrier repair. BPC-157 also enhances vagal tone, the dominant ENS-to-brain signaling pathway, which creates downstream effects on mood, cognitive clarity, and stress response.' },
];

const comparisonData = [
  {
    treatment: 'BPC-157',
    mechanism: 'Tight junction upregulation, anti-inflammatory, mucosal repair, VEGF',
    gutBarrier: 'Direct — primary effect',
    sideEffects: 'Minimal (injection site soreness)',
    dependency: 'None',
    cost: '$80–150/month',
    timeline: '2–8 weeks',
    color: 'text-emerald-400',
  },
  {
    treatment: 'PPIs (Omeprazole etc.)',
    mechanism: 'Proton pump inhibition — reduces stomach acid',
    gutBarrier: 'Indirect — only mucosal protection via reduced acid',
    sideEffects: 'Microbiome disruption, nutrient malabsorption, rebound hypersecretion',
    dependency: 'High — rebound acid on cessation',
    cost: '$10–30/month',
    timeline: '1–2 weeks (symptom relief only)',
    color: 'text-amber-400',
  },
  {
    treatment: 'Antibiotics',
    mechanism: 'Kill pathogenic bacteria (and commensal bacteria)',
    gutBarrier: 'Can worsen barrier long-term via dysbiosis',
    sideEffects: 'Significant dysbiosis, C. diff risk, resistance',
    dependency: 'Low (acute courses)',
    cost: '$10–50/course',
    timeline: '7–14 days (for targeted pathogens)',
    color: 'text-red-400',
  },
  {
    treatment: 'Probiotics',
    mechanism: 'Introduce beneficial bacteria to compete with pathogens',
    gutBarrier: 'Indirect — microbiome modulation may support barrier',
    sideEffects: 'Generally minimal; bloating initially',
    dependency: 'None',
    cost: '$20–60/month',
    timeline: '4–12 weeks',
    color: 'text-blue-400',
  },
  {
    treatment: 'L-Glutamine',
    mechanism: 'Primary fuel for enterocytes — supports epithelial repair',
    gutBarrier: 'Direct — supports tight junction assembly',
    sideEffects: 'Minimal at standard doses',
    dependency: 'None',
    cost: '$15–30/month',
    timeline: '4–8 weeks',
    color: 'text-indigo-400',
  },
];

const dietProtocol = {
  firstTwoWeeks: {
    title: 'Weeks 1–2: Elimination & Repair Phase',
    description: 'During the first two weeks of BPC-157 gut healing, the priority is removing inflammatory inputs and maximizing the peptide\'s repair environment.',
    eat: [
      'Bone broth (daily — provides glycine, proline, hydroxyproline for mucosal repair)',
      'Well-cooked vegetables (steamed/roasted — reduces fermentation load)',
      'White rice and oats (easy-to-digest starches)',
      'Lean proteins: chicken, turkey, white fish (cooked simply)',
      'Fermented foods if tolerated: kefir, yogurt, kimchi (small amounts)',
      'Ginger and turmeric (anti-inflammatory cofactors)',
      'Cooked leafy greens (spinach, kale — high in glutamine precursors)',
    ],
    avoid: [
      'Gluten-containing foods (bread, pasta, wheat products)',
      'Alcohol — directly disrupts tight junctions',
      'Industrial seed oils (soybean, canola, sunflower)',
      'Processed and ultra-processed foods',
      'Raw cruciferous vegetables (cabbage, broccoli — high fermentation load)',
      'High-FODMAP foods if you have IBS-pattern symptoms',
      'NSAIDs (ibuprofen, aspirin) — directly damage gastric mucosa',
    ],
  },
  reintroductionPhase: {
    title: 'Weeks 3–6: Reintroduction Phase',
    description: 'As BPC-157 repairs the barrier, introduce higher-fiber and more diverse foods gradually — each reintroduction tests tolerance.',
    introduce: [
      'Cooked legumes (lentils, chickpeas — high prebiotic fiber, introduce slowly)',
      'Raw salads and vegetables (as tolerance improves)',
      'Whole grains: quinoa, brown rice, oats',
      'Diverse fermented foods: kombucha, miso, sauerkraut',
      'Higher-fat foods: avocado, olive oil (if tolerated)',
      'Nuts and seeds (introduce one variety at a time)',
    ],
  },
  permanentAvoid: [
    'Ultra-processed foods with emulsifiers (carrageenan, polysorbate-80 — directly damage gut barrier)',
    'Artificial sweeteners (sorbitol, sucralose — alter microbiome composition)',
    'Chronic NSAID use (PPI-dependent individuals should discuss alternatives with physician)',
    'Alcohol in excess (dose-dependent gut barrier disruption)',
    'Gluten — if confirmed sensitivity or celiac disease',
  ],
  supplements: [
    { name: 'L-Glutamine', dose: '5g/day', notes: 'Primary enterocyte fuel. Directly synergistic with BPC-157 for tight junction repair.' },
    { name: 'Zinc Carnosine', dose: '75mg/day', notes: 'Clinically validated for gastric and intestinal mucosal protection. Pairs well with BPC-157 for H. pylori and ulcer healing.' },
    { name: 'Digestive Enzymes', dose: 'With main meals', notes: 'Reduces undigested protein load reaching compromised gut sections. Lessens immune activation from food particles.' },
    { name: 'Collagen Peptides', dose: '10–15g/day', notes: 'Provides glycine and hydroxyproline — structural amino acids used in mucosal layer synthesis.' },
    { name: 'Soil-Based Probiotics', dose: 'Per product', notes: 'Bacillus coagulans, Saccharomyces boulardii — more resilient strains that survive gastric transit and support microbiome diversity.' },
  ],
};

const microbiomeSection = {
  intro: `The gut microbiome — the community of approximately 100 trillion microorganisms residing in the gastrointestinal tract — is not merely a passenger in gut health. It is an active participant that profoundly influences intestinal barrier integrity, immune regulation, and inflammatory tone. The relationship between gut microbiome composition and conditions like IBD, leaky gut, and IBS is bidirectional and self-reinforcing: dysbiosis (microbial imbalance) drives inflammation, and inflammation drives further dysbiosis.`,
  microbiomedisease: `In inflammatory bowel conditions, characteristic microbiome shifts have been consistently documented. IBD patients show reduced diversity overall, with dramatic decreases in Faecalibacterium prausnitzii — a butyrate-producing bacterium that serves as a primary energy source for colonocytes and actively suppresses intestinal inflammation through its metabolite profile. They also show increases in pro-inflammatory species like Escherichia coli and Ruminococcus gnavus that produce lipopolysaccharides (LPS) — bacterial toxins that activate TLR4 receptors and drive TNF-α and IL-6 production throughout the gut wall. This dysbiosis-inflammation cycle is the core mechanism underlying why IBD is so difficult to treat once established.`,
  bpcMicrobiome: `BPC-157 does not act as a probiotic — it does not introduce new bacterial strains or directly feed beneficial organisms. However, its anti-inflammatory and barrier-repair effects create the gut environment in which microbiome restoration becomes possible. By suppressing TNF-α and IL-6, BPC-157 reduces the inflammatory milieu that selectively favors pro-inflammatory gram-negative bacteria. By restoring tight junction integrity, it reduces the bacterial translocation (bacteria crossing the gut wall into systemic circulation) that amplifies immune activation and perpetuates the dysbiosis cycle. In essence, BPC-157 converts the gut from an environment hostile to commensal bacteria into one permissive for their recovery.`,
  synergisticFoods: [
    {
      category: 'Fermented Foods',
      examples: 'Kefir, yogurt, kimchi, sauerkraut, miso, kombucha',
      mechanism: 'Introduce live Lactobacillus and Bifidobacterium strains directly. Particularly powerful when the gut environment has been restored by BPC-157\'s anti-inflammatory action — bacteria encounter a hospitable rather than hostile environment.',
    },
    {
      category: 'Bone Broth & Collagen',
      examples: 'Slow-simmered bone broth (12–24 hours), collagen peptide supplements',
      mechanism: 'Provides glycine, proline, and hydroxyproline — the amino acid building blocks of the mucosal collagen layer. BPC-157 upregulates the cellular machinery for tissue repair; collagen provides the raw materials.',
    },
    {
      category: 'Prebiotic Fiber Foods',
      examples: 'Jerusalem artichokes, garlic, onions, asparagus, green bananas, oats',
      mechanism: 'Fermentable fibers feed butyrate-producing bacteria (Faecalibacterium, Bifidobacterium). Butyrate is the primary energy source for colonocytes and has direct anti-inflammatory effects in the colon — synergistic with BPC-157\'s mucosal repair.',
    },
    {
      category: 'Polyphenol-Rich Foods',
      examples: 'Berries, dark chocolate, green tea, olive oil, pomegranate',
      mechanism: 'Polyphenols are selectively metabolized by beneficial microbiome species and act as prebiotics for commensal bacteria while inhibiting the growth of pro-inflammatory strains.',
    },
  ],
  avoidDuring: [
    'Alcohol — directly disrupts tight junctions and alters microbiome composition within hours of ingestion',
    'Artificial sweeteners (aspartame, sucralose, saccharin) — alter microbiome composition and reduce beneficial species',
    'Emulsifiers in processed foods (carrageenan, lecithin, polysorbate-80) — directly disrupt mucus layer integrity',
    'Industrial seed oils in excess (omega-6 load drives intestinal inflammation)',
    'Low-fiber processed diets — starve the prebiotic-dependent butyrate producers',
  ],
};

export default function Bpc157GutHealthPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Healing', item: 'https://www.bp157stack.com/healing' },
                { '@type': 'ListItem', position: 3, name: 'BPC-157 for Gut Health', item: 'https://www.bp157stack.com/bpc-157-for-gut-health' },
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
              headline: 'BPC-157 for Gut Health: Leaky Gut, IBD & IBS Protocol',
              description: 'Complete guide to BPC-157 for gut healing — oral vs injectable, dosing protocol, and results timeline.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">BPC-157 GUT HEALING GUIDE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            BPC-157 for<br />
            <span className="text-emerald-400">Gut Health</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
            BPC-157 is the most powerful gut-healing peptide available. Here's the complete protocol
            for leaky gut, IBD, IBS, gastric ulcers, and Crohn's — including oral vs injectable routes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: 'Oral', label: 'Best route for gut' },
              { stat: '250mcg', label: 'Starting daily dose' },
              { stat: '2–4 wks', label: 'First results' },
              { stat: '3–6 mo', label: 'Full healing cycle' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-emerald-400">{s.stat}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">How BPC-157 Heals the Gut</h2>
        <p className="text-gray-500 mb-10">BPC-157 is a 15-amino acid peptide isolated from gastric juice protein. The "BPC" stands for Body Protection Compound — originally discovered for its protective role in the GI tract.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card p-6">
              <CheckCircle className="w-5 h-5 text-emerald-400 mb-3" />
              <h3 className="text-gray-900 font-bold mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gut Symptom Checker */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Gut Symptom Protocol Finder</h2>
          <p className="text-gray-500 mb-8">
            Not sure whether you need oral BPC-157, injectable, or a combination? Check your symptoms below and get a personalized protocol recommendation with estimated timeline.
          </p>
          <GutSymptomChecker />
        </div>
      </section>

      {/* Protocol */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Gut Healing Protocol Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {protocol.map((p, i) => (
              <div key={p.title} className="glass-card p-6">
                <div className="text-xs font-bold text-emerald-400 tracking-widest mb-1">OPTION {i + 1}</div>
                <h3 className="text-gray-900 font-black text-lg mb-3">{p.title}</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">Dose:</span><span className="text-gray-900">{p.dose}</span></div>
                  <div className="flex gap-2"><span className="text-gray-500 shrink-0">Timing:</span><span className="text-gray-900">{p.timing}</span></div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{p.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-gray-900 mb-8">BPC-157 by Gut Condition</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Condition</th>
                <th className="text-left py-3 px-4 text-emerald-400 font-bold">Best Route</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Dose</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Leaky Gut', 'Oral', '250–500mcg/day', '4–8 weeks'],
                ['IBS', 'Oral', '250mcg/day', '2–6 weeks'],
                ['IBD / Crohn\'s', 'Oral + Injectable', '250mcg oral + 250mcg SC', '6–12 weeks'],
                ['Gastric Ulcer', 'Oral', '500mcg/day', '2–4 weeks'],
                ['Colitis', 'Oral or Injectable', '250–500mcg/day', '4–8 weeks'],
                ['GERD/Reflux', 'Oral', '250mcg/day', '2–4 weeks'],
              ].map(([cond, route, dose, time], i) => (
                <tr key={cond} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{cond}</td>
                  <td className="py-3 px-4 text-emerald-400">{route}</td>
                  <td className="py-3 px-4 text-gray-600 font-mono">{dose}</td>
                  <td className="py-3 px-4 text-gray-500">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BPC-157 vs Other Gut Treatments */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">BPC-157 vs. Other Gut Treatments</h2>
          <p className="text-gray-500 mb-10">
            How BPC-157 compares to the most commonly used gut interventions across mechanism, actual barrier repair, side effects, and realistic timelines.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-xs">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Treatment</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Mechanism</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Gut Barrier Repair</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Side Effects</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Dependency</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Cost/Mo</th>
                  <th className="text-left py-3 px-3 text-gray-500 font-semibold">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.treatment} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className={`py-3 px-3 font-bold ${row.color}`}>{row.treatment}</td>
                    <td className="py-3 px-3 text-gray-600">{row.mechanism}</td>
                    <td className="py-3 px-3 text-gray-600">{row.gutBarrier}</td>
                    <td className="py-3 px-3 text-gray-500">{row.sideEffects}</td>
                    <td className="py-3 px-3 text-gray-500">{row.dependency}</td>
                    <td className="py-3 px-3 text-gray-600">{row.cost}</td>
                    <td className="py-3 px-3 text-gray-500">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Gut Microbiome & BPC-157 */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Gut Microbiome &amp; BPC-157</h2>
        <p className="text-gray-500 mb-10 text-lg">How BPC-157's anti-inflammatory effects create the environment for microbiome recovery — and the foods that amplify results.</p>

        <div className="space-y-6">
          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-emerald-400 mb-4">The Microbiome-Inflammation Cycle</h3>
            <div className="space-y-4 text-gray-900 text-sm leading-relaxed">
              <p>{microbiomeSection.intro}</p>
              <p>{microbiomeSection.microbiomedisease}</p>
              <p>{microbiomeSection.bpcMicrobiome}</p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-xl font-black text-emerald-400 mb-6">Foods That Synergize With BPC-157 Gut Healing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {microbiomeSection.synergisticFoods.map((food) => (
                <div key={food.category} className="bg-white/3 rounded-xl p-5 border border-white/8">
                  <h4 className="text-gray-900 font-bold mb-1">{food.category}</h4>
                  <p className="text-emerald-400 text-xs mb-2">{food.examples}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{food.mechanism}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-black text-gray-900 mb-4">Foods &amp; Habits to Avoid During Protocol</h3>
            <ul className="space-y-2">
              {microbiomeSection.avoidDuring.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                  <span className="text-red-400 shrink-0 mt-0.5">✕</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Diet Protocol */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Diet Protocol During BPC-157 Gut Healing</h2>
          <p className="text-gray-500 mb-10">
            What you eat during a BPC-157 gut healing protocol significantly amplifies or undermines results. This phase-by-phase diet framework is calibrated to the biological stages of gut repair.
          </p>

          <div className="space-y-6">
            {/* Week 1-2 */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-emerald-400 mb-2">{dietProtocol.firstTwoWeeks.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{dietProtocol.firstTwoWeeks.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold tracking-widest text-emerald-400 mb-3">EAT FREELY</p>
                  <ul className="space-y-2">
                    {dietProtocol.firstTwoWeeks.eat.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-red-400 mb-3">AVOID</p>
                  <ul className="space-y-2">
                    {dietProtocol.firstTwoWeeks.avoid.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                        <span className="text-red-400 shrink-0 mt-0.5">✕</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Reintroduction */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-emerald-400 mb-2">{dietProtocol.reintroductionPhase.title}</h3>
              <p className="text-gray-500 text-sm mb-5">{dietProtocol.reintroductionPhase.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dietProtocol.reintroductionPhase.introduce.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Permanent avoid */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-black text-gray-900 mb-4">Foods to Permanently Minimize</h3>
              <ul className="space-y-2">
                {dietProtocol.permanentAvoid.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <span className="text-red-400 shrink-0 mt-0.5">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Supplement stack */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-black text-gray-900 mb-5">Supplements That Stack Well With BPC-157</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dietProtocol.supplements.map((s) => (
                  <div key={s.name} className="bg-white/3 rounded-xl p-4 border border-white/8">
                    <p className="text-emerald-400 font-bold text-sm mb-1">{s.name}</p>
                    <p className="text-gray-900 text-xs font-mono mb-2">{s.dose}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">BPC-157 Gut Health FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-emerald-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Get BPC-157 for Gut Healing</h2>
          <p className="text-gray-500 mb-6">COA-verified BPC-157 — available in injectable and oral/capsule form. US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/bpc-157" className="btn-secondary px-8 py-4">BPC-157 Product Page</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-for-gut-health" />
    </div>
  );
}
