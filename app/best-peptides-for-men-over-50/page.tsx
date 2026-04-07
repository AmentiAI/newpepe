import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import MenOver50Protocol from '@/components/MenOver50Protocol';

export const metadata: Metadata = {
  title: 'Best Peptides for Men Over 50: Anti-Aging, Muscle & Vitality (2026)',
  description: 'The best peptides for men over 50 — restore GH levels, rebuild muscle, fight aging, and recover faster. Complete guide to CJC-1295/Ipamorelin, BPC-157, Epithalon, and GHK-Cu for men 50+.',
  keywords: 'peptides for men over 50, best peptides for men over 50, anti-aging peptides men, peptides for testosterone, peptides for muscle over 50, CJC-1295 over 50, BPC-157 over 50, epithalon men',
  openGraph: {
    title: 'Best Peptides for Men Over 50: Complete Guide 2026',
    description: 'Restore GH, rebuild muscle, and fight aging — the best peptide protocols for men 50+.',
    type: 'article',
    url: 'https://bp157stack.com/best-peptides-for-men-over-50',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Peptides for Men Over 50',
    description: 'Anti-aging, muscle, and vitality peptides for men 50+ — complete 2026 guide.',
  },
};

const SOURCE_URL = '/out';

const ageIssues = [
  { issue: 'GH decline', detail: 'Growth hormone drops 14% per decade after 30. By 50, most men have 50–60% less GH than at peak. This drives muscle loss, fat gain, poor sleep, and slower recovery.' },
  { issue: 'Muscle loss (sarcopenia)', detail: 'Men lose 3–8% of lean muscle mass per decade after 30. After 50 this accelerates. Without intervention, the average man loses significant functional strength by 65.' },
  { issue: 'Slower healing', detail: 'Tissue repair slows with age — tendons, joints, and muscles take 2–3× longer to heal after 50. This increases injury frequency and duration.' },
  { issue: 'Cellular aging', detail: 'Telomere shortening, mitochondrial dysfunction, and declining NAD+ levels drive visible and functional aging. These are targetable with specific peptides.' },
  { issue: 'Skin & collagen loss', detail: 'Collagen production drops ~1% per year starting at 25. By 50, cumulative loss is visible — skin thinning, wrinkles, joint cartilage degradation.' },
];

const peptides = [
  {
    name: 'CJC-1295 / Ipamorelin',
    slug: 'cjc1295-ipamorelin',
    priority: '1',
    target: 'GH Restoration',
    color: 'blue',
    why: 'The #1 priority for men over 50. GH levels drop dramatically with age and this decline drives almost every aging symptom: muscle loss, fat gain, poor sleep, slow recovery. CJC-1295/Ipamorelin restores GH pulsatility to levels 8–10× above baseline — without shutting down natural production.',
    results: ['Significantly improved deep sleep within 1–2 weeks', 'Lean muscle recovery and preservation', 'Accelerated fat loss — particularly visceral', 'Faster workout recovery and reduced joint pain'],
    dose: '100–200mcg CJC + 200–300mcg Ipa before bed, 5 nights/week',
  },
  {
    name: 'BPC-157',
    slug: 'bpc-157',
    priority: '2',
    target: 'Joint & Tissue Healing',
    color: 'emerald',
    why: 'By 50, most men have accumulated joint injuries, tendon issues, or chronic inflammation. BPC-157 heals tissue 2–4× faster than normal — tendons, ligaments, gut lining, and joints. One of the most reported benefits among men 50+ is dramatic reduction in chronic joint pain.',
    results: ['Heals chronic tendon/joint injuries', 'Reduces gut inflammation and IBS symptoms', 'Accelerates post-workout recovery', 'Anti-inflammatory system-wide'],
    dose: '250–500mcg/day SC injection or oral',
  },
  {
    name: 'Epithalon',
    slug: 'epithalon',
    priority: '3',
    target: 'Longevity & Telomeres',
    color: 'purple',
    why: 'Epithalon is the only peptide with clinical evidence of telomere lengthening in humans. It also resets the pineal gland — improving melatonin output, circadian rhythm, and sleep architecture. Men 50+ report better sleep, more energy, and improved hormonal rhythm.',
    results: ['Telomere lengthening (DNA-level anti-aging)', 'Improved melatonin production and sleep quality', 'Circadian rhythm reset', 'Reported improvements in energy and mood'],
    dose: '5–10mg SC over 10-day cycle, 2× per year',
  },
  {
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    priority: '4',
    target: 'Skin, Collagen & Gene Expression',
    color: 'amber',
    why: 'GHK-Cu resets gene expression toward a younger state — upregulating over 30 genes associated with tissue repair and downregulating genes associated with inflammation and aging. Visible effects: skin quality, wound healing, hair thinning, and joint cartilage support.',
    results: ['Skin tightening and wrinkle reduction', 'Hair density improvement', 'Collagen synthesis boost', 'Gene expression profile reset'],
    dose: '1–2mg/day SC or topical',
  },
  {
    name: 'NAD+',
    slug: 'nad',
    priority: '5',
    target: 'Mitochondrial & Cognitive Health',
    color: 'blue',
    why: 'NAD+ declines 50% by age 50, driving mitochondrial dysfunction, cognitive decline, and cellular energy deficits. NAD+ peptide supplementation restores cellular energy metabolism, supports DNA repair pathways, and improves cognitive clarity.',
    results: ['Increased cellular energy', 'Improved cognitive clarity and focus', 'DNA repair pathway activation', 'Mitochondrial health restoration'],
    dose: '300–500mg/day (oral or IV equivalent)',
  },
];

const allFaqs = [
  { q: 'What is the best peptide for men over 50?', a: 'For men over 50, the most impactful peptide is CJC-1295/Ipamorelin. GH decline is the primary driver of age-related muscle loss, fat gain, poor sleep, and slow recovery in men — and CJC-1295/Ipamorelin directly restores GH pulsatility. The second-highest priority is BPC-157 for joint/tissue healing and Epithalon for longevity. A protocol combining all three covers the major aging pathways comprehensively.' },
  { q: 'Are peptides safe for men over 50?', a: 'The peptides most used by men over 50 — CJC-1295/Ipamorelin, BPC-157, Epithalon, and GHK-Cu — have good safety profiles in research and widespread anecdotal use. They work through natural signaling pathways (pituitary, cellular repair, gene expression) rather than adding exogenous hormones. Men with history of cancer should consult a physician before using GH-stimulating peptides, as GH promotes cellular growth.' },
  { q: 'Do peptides help testosterone levels in men over 50?', a: 'Healing peptides and GHK-Cu do not directly affect testosterone. CJC-1295/Ipamorelin works on the GH axis, not testosterone. However, improved GH levels, better sleep quality, and reduced body fat (all outcomes of a GH secretagogue protocol) all indirectly support healthier testosterone levels. For direct testosterone support, men over 50 typically need TRT (testosterone replacement therapy) rather than peptides alone.' },
  { q: 'Can I stack multiple peptides at 50+?', a: 'Yes — stacking is common and beneficial. The most popular protocol for men over 50: CJC-1295/Ipamorelin (nightly, 5 days/week) + BPC-157 (morning, daily) + Epithalon (twice-yearly cycle) + NAD+ (daily). These work through entirely different mechanisms and have no negative interactions. Start one peptide at a time over 4–8 weeks to identify any individual responses before adding more.' },
  { q: 'How long before I see results from peptides at 50?', a: 'CJC-1295/Ipamorelin: sleep improvement in 1–2 weeks, body composition changes at 6–8 weeks, peak results at 3–4 months. BPC-157: pain reduction in 1–2 weeks, tissue healing in 4–8 weeks. Epithalon: subjective energy and sleep quality in 1–2 weeks, biological aging markers (telomere length) require months to assess. GHK-Cu: skin quality improvements in 4–8 weeks.' },
  { q: 'Do peptides work as well as TRT for testosterone?', a: 'No — peptides do not replace TRT for testosterone deficiency. Peptides work on the GH axis, cellular repair, and biological aging — not testosterone production. Men with clinically low testosterone (hypogonadism) need TRT for direct testosterone replacement. Where peptides add value for men on TRT is in the areas TRT does not cover: GH restoration (CJC/Ipa), cellular longevity (Epithalon), tissue healing (BPC-157), and collagen/gene expression (GHK-Cu). The best protocol combines TRT (for testosterone) with targeted peptides (for everything else).' },
  { q: 'Are there peptide interactions with blood pressure medications?', a: 'The most commonly used peptides (BPC-157, GHK-Cu, CJC-1295/Ipamorelin, Epithalon) have no established pharmacokinetic interactions with common blood pressure medications (ACE inhibitors, ARBs, beta-blockers, calcium channel blockers). BPC-157 has shown some cardioprotective properties in animal models and may modulate nitric oxide pathways — the clinical significance in humans is not established. If you are on blood pressure medications, start peptides at lower doses and monitor blood pressure in the first 2–4 weeks. GLP-1 peptides (semaglutide, tirzepatide) have a slight blood pressure lowering effect from weight loss, which can compound with antihypertensive medications — dosing may need adjustment as weight decreases.' },
  { q: 'Is it safe to use multiple peptides at the same time?', a: 'Yes — simultaneous use of multiple peptides is common and generally safe because they work through distinct, non-overlapping mechanisms. CJC-1295/Ipamorelin (GH axis) + BPC-157 (tissue healing/angiogenesis) + Epithalon (telomere/pineal) + GHK-Cu (gene expression) have no known negative interactions. The main practical consideration is starting peptides individually — one at a time over 4–8 week intervals — to establish your individual response to each and identify any unusual reactions before adding complexity. Once tolerability is established, all can be run simultaneously. GH secretagogues and GLP-1 peptides can be combined safely (different receptor systems, no interaction).' },
  { q: 'Do the results disappear when you stop peptides?', a: 'It depends on the peptide and the type of result. Structural results — muscle gained, tendons healed, body fat lost — are largely permanent as long as training and protein intake are maintained. You do not lose the muscle added by IGF-1 LR3 simply because you stopped the peptide. Tissue healed by BPC-157 remains healed. However, the ongoing effects of peptide use cease when you stop — the amplified GH pulses from CJC/Ipa stop, the anti-inflammatory environment from BPC-157 resolves, the telomere-lengthening from Epithalon is not an ongoing process. The biological age reversal achieved during a cycle is maintained (the telomeres that were lengthened remain lengthened), but the ongoing protection ceases. This is why periodic cycling — rather than permanent use or complete cessation — is the most popular long-term strategy.' },
];

export default function PeptidesForMenOver50Page() {
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
                { '@type': 'ListItem', position: 3, name: 'Peptides for Men Over 50', item: 'https://bp157stack.com/best-peptides-for-men-over-50' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: allFaqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Best Peptides for Men Over 50: Anti-Aging, Muscle & Vitality Guide',
              description: 'Complete guide to the best peptides for men over 50 — GH restoration, muscle, longevity, and joint healing.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-400 text-sm font-semibold tracking-wide">PEPTIDES FOR MEN 50+ GUIDE 2026</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            Best Peptides for<br />
            <span className="text-blue-400">Men Over 50</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            After 50, GH drops, muscle disappears, healing slows, and recovery suffers.
            Here are the peptides that directly target these changes — and what to expect from each.
          </p>
        </div>
      </section>

      {/* The Male Aging Cascade */}
      <section className="py-16" style={{ background: 'rgba(59,130,246,0.03)', borderTop: '1px solid rgba(59,130,246,0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 mb-6">
            <span className="text-blue-400 text-sm font-semibold">THE SCIENCE OF MALE AGING</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-8">The Male Aging Cascade: What Happens After 50</h2>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Male aging after 50 is not a single process — it is a cascade of interconnected physiological declines that feed into and accelerate each other. Understanding this cascade is essential to understanding why peptide protocols are structured the way they are, targeting multiple pathways simultaneously.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Testosterone and GH Decline: The Hormonal Foundation</h3>
            <p>
              Testosterone declines at approximately 1–2% per year beginning around age 30. By age 50, total testosterone is typically 20–30% lower than peak levels. This decline is gradual enough that most men adapt without noticing dramatic changes — until secondary effects accumulate. More acutely impactful is growth hormone decline: GH drops 14% per decade, meaning by age 50, most men have approximately 50–60% of the GH they had at age 25. This matters enormously because GH is the master regulator of body composition, recovery speed, sleep quality, and metabolic rate.
            </p>
            <p>
              The testosterone and GH axes are interconnected: testosterone supports GH secretion, and adequate GH supports optimal testosterone receptor sensitivity. When both decline together — as they do after 50 — the effect is multiplicative rather than additive. A man with low-normal testosterone and low GH experiences worse body composition outcomes than either deficiency alone would predict.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Sarcopenia: The Muscle Loss Crisis</h3>
            <p>
              Sarcopenia (age-related muscle loss) begins in the 30s at 3–5% per decade but accelerates after 50 to 3–8% per decade — and some studies suggest even faster rates in sedentary men. By age 70, the average man has lost 25–30% of the muscle mass he had at 30. This is not merely cosmetic: muscle mass is the primary determinant of metabolic rate, insulin sensitivity, functional independence, and injury resistance. Sarcopenia drives the vicious cycle where less muscle → lower metabolism → more fat gain → more inflammation → more muscle loss.
            </p>
            <p>
              GH decline is the primary hormonal driver of sarcopenia. GH stimulates IGF-1, which activates muscle protein synthesis and satellite cell function (the mechanism of muscle repair). When GH drops, so does IGF-1, and muscle breakdown progressively outpaces synthesis. This is precisely why GH secretagogues are the highest-priority peptide for men over 50 — they directly address the root hormonal cause of sarcopenia.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">NAD+ Loss and Mitochondrial Dysfunction</h3>
            <p>
              NAD+ (nicotinamide adenine dinucleotide) is a coenzyme involved in hundreds of metabolic reactions — it is the essential substrate for cellular energy production, DNA repair via sirtuins and PARP enzymes, and mitochondrial function. NAD+ levels decline approximately 50% between ages 20 and 60. This decline drives mitochondrial dysfunction (reduced ATP production), impaired DNA repair, and accumulation of senescent cells. The practical consequences are the energy deficit, cognitive cloudiness, and reduced physical capacity that characterize aging.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Telomere Shortening and Cellular Senescence</h3>
            <p>
              Telomeres — the protective caps on chromosomes — shorten with each cell division. By age 50, significant telomere attrition has occurred, and cells with critically short telomeres either stop dividing (senescence) or undergo apoptosis. Senescent cells are particularly damaging because they secrete inflammatory cytokines (the senescence-associated secretory phenotype, SASP) that accelerate aging in surrounding tissue. This is why Epithalon&apos;s telomere-lengthening effect is so significant — it addresses a root mechanism of biological aging, not just a downstream symptom.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Fat Redistribution and the Visceral Fat Problem</h3>
            <p>
              Declining testosterone and GH alter fat distribution in men — shifting fat storage from subcutaneous (under the skin) to visceral (around internal organs) locations. Visceral fat is metabolically active in the worst sense: it secretes adipokines and inflammatory cytokines that worsen insulin resistance, drive systemic inflammation, reduce testosterone production in the testes, and increase cardiovascular risk. This creates another vicious cycle: more visceral fat → lower testosterone → more visceral fat accumulation. GH peptides directly address this: GH is specifically lipolytic toward visceral fat, and restoring GH pulsatility consistently reduces the waist measurement that reflects visceral accumulation.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Cognitive Decline and Neurological Changes</h3>
            <p>
              Cognitive changes after 50 in men are driven by multiple converging factors: declining testosterone (which has neuroprotective roles), declining GH/IGF-1 (which supports neurogenesis and synaptogenesis), NAD+ loss (which impairs neuronal mitochondrial function), and accumulating inflammation (which damages the blood-brain barrier and activates microglia). The subjective experience is the progressive &quot;brain fog,&quot; memory lapses, and reduced cognitive processing speed that men commonly report starting in their 50s. NAD+ restoration and GH peptide protocols both have evidence supporting cognitive improvement in this population.
            </p>

            <h3 className="text-white font-bold text-xl mt-6 mb-3">Sexual Health Changes</h3>
            <p>
              Declining testosterone is the primary driver of sexual health changes in men over 50 — reduced libido, erectile dysfunction, and decreased sexual satisfaction. However, sleep quality, cardiovascular health, nitric oxide production, and psychological factors all contribute. GH peptides improve sleep architecture (poor sleep is one of the strongest suppressors of testosterone), and BPC-157 has been studied for its NO-modulating properties relevant to erectile function. While peptides are not a substitute for TRT or PDE5 inhibitors when hormonal deficiency is the cause, the systemic improvements from a comprehensive peptide protocol support sexual health as part of the overall vitality picture.
            </p>
          </div>
        </div>
      </section>

      {/* Protocol Builder Widget */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-3">Men Over 50 Protocol Builder</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Answer 3 questions to generate a personalized 3-peptide starter protocol with bloodwork recommendations.
          </p>
        </div>
        <MenOver50Protocol />
      </section>

      {/* Why aging matters */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-6">What Changes After 50 (And Why Peptides Help)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ageIssues.map((a) => (
            <div key={a.issue} className="glass-card p-5">
              <h3 className="text-white font-bold mb-2">{a.issue}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRT + Peptides Synergy */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1.5 mb-6">
            <span className="text-blue-400 text-sm font-semibold">FOR MEN ON TRT</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-8">TRT + Peptides: The Synergy Protocol</h2>

          <div className="space-y-5 text-slate-300 leading-relaxed">
            <p>
              Testosterone replacement therapy addresses the testosterone deficiency of male aging, but it leaves multiple other aging pathways completely unaddressed. Men on TRT who add a targeted peptide protocol consistently report significantly better outcomes than TRT alone — and understanding why makes the additions obvious.
            </p>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">CJC-1295 / Ipamorelin: The Missing GH Piece</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                TRT replaces testosterone. It does not address GH decline. By 50, most men have lost 50–60% of their youthful GH levels — and TRT does nothing to restore this. The body composition improvement from TRT alone is often underwhelming because testosterone requires adequate GH/IGF-1 signaling to fully execute its anabolic effects. Adding CJC-1295/Ipamorelin restores the GH axis that TRT cannot touch, producing dramatically better muscle building, fat loss, sleep quality, and recovery than TRT monotherapy. This is increasingly recognized as the standard of care in progressive anti-aging medicine.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">BPC-157: Joint Protection Under TRT Loads</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A common challenge for men on TRT is that increased anabolic drive and training intensity — enabled by higher testosterone — outpaces tendon and ligament adaptation. Connective tissue adapts more slowly than muscle, creating a window where training loads exceed tissue tolerance and injuries accumulate. BPC-157 directly addresses this: it dramatically accelerates tendon and ligament repair, protects against the connective tissue injuries that plague men who train aggressively on TRT, and reduces the chronic joint inflammation that limits training quality. Adding BPC-157 from the start of TRT is increasingly the recommended approach in informed men&apos;s health communities.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">Epithalon: Cellular Longevity Beyond Hormonal Optimization</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                TRT and GH peptides optimize the hormonal environment. Epithalon operates at a more fundamental level — DNA protection via telomere lengthening and cellular senescence reduction. Men on TRT who add Epithalon are addressing the cellular aging that hormonal optimization cannot reach: the accumulated senescent cell burden, the telomere attrition, and the circadian rhythm dysregulation that continue to progress regardless of hormone levels. Twice-yearly Epithalon cycles are the most practical way to address this layer of biological aging.
              </p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <div className="text-amber-400 font-bold text-sm mb-2">Cautions and Interactions for Men on TRT</div>
              <ul className="space-y-1.5 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-amber-400 shrink-0 mt-0.5">•</span> No known pharmacokinetic interactions between peptides and testosterone esters (cypionate, enanthate, propionate)</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 shrink-0 mt-0.5">•</span> GH peptides increase IGF-1 — men with elevated PSA or prostate concerns should discuss with their physician before use</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 shrink-0 mt-0.5">•</span> Monitor hematocrit if using GH peptides alongside TRT — GH can mildly increase red blood cell production</li>
                <li className="flex items-start gap-2"><span className="text-amber-400 shrink-0 mt-0.5">•</span> BPC-157 may interact with estrogen control medications (aromatase inhibitors) at a metabolic level — theoretical concern, not clinically documented</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Men's Anti-Aging Blood Panel */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 mb-6">
          <span className="text-emerald-400 text-sm font-semibold">BIOMARKER GUIDE</span>
        </div>
        <h2 className="text-3xl font-black text-white mb-8">Men&apos;s Anti-Aging Blood Panel</h2>
        <p className="text-slate-400 mb-8">The comprehensive biomarker guide for men over 50 starting a peptide protocol. Get baseline levels before starting, retest at 12 weeks.</p>

        <div className="space-y-4">
          {[
            {
              category: 'Hormonal Axis',
              color: 'blue',
              markers: [
                { name: 'Total Testosterone', normal: '400–900 ng/dL', low: '<350 ng/dL indicates clinical deficiency', peptide: 'CJC/Ipa improves sleep → supports T; direct T requires TRT' },
                { name: 'Free Testosterone', normal: '15–25 pg/mL', low: '<9 pg/mL clinically deficient regardless of total T', peptide: 'Fat loss from GH peptides reduces SHBG → improves free T' },
                { name: 'Estradiol (E2)', normal: '20–50 pg/mL', low: 'Both very low and very high E2 are problematic', peptide: 'Visceral fat reduction (GH peptides) reduces aromatization → may lower E2' },
                { name: 'SHBG', normal: '20–60 nmol/L', low: 'High SHBG binds testosterone, reducing free fraction', peptide: 'GH optimization may modestly reduce SHBG' },
                { name: 'LH / FSH', normal: 'Varies by age', low: 'Low LH/FSH with low T = secondary hypogonadism', peptide: 'GH peptides do not affect LH/FSH — this differentiates GH axis from HPG axis' },
                { name: 'IGF-1', normal: '100–250 ng/mL age 50–60', low: '<80 ng/mL indicates significant GH deficiency', peptide: 'CJC-1295/Ipamorelin increases IGF-1 — track this as primary efficacy marker' },
              ],
            },
            {
              category: 'Inflammation & Cardiovascular',
              color: 'rose',
              markers: [
                { name: 'CRP (high-sensitivity)', normal: '<1.0 mg/L', low: '>3.0 mg/L = high cardiovascular risk', peptide: 'BPC-157 and GHK-Cu reduce systemic inflammation — CRP often improves' },
                { name: 'Homocysteine', normal: '<10 µmol/L', low: '>15 µmol/L = elevated cardiovascular and cognitive risk', peptide: 'Not directly addressed by peptides — requires B vitamin optimization' },
                { name: 'Lipid Panel', normal: 'LDL <100, HDL >50, TG <150', low: 'Elevated TG with low HDL = insulin resistance pattern', peptide: 'GH peptides improve lipid profile via body composition changes' },
              ],
            },
            {
              category: 'Metabolic & Micronutrient',
              color: 'amber',
              markers: [
                { name: 'Cortisol (AM)', normal: '10–20 µg/dL', low: '>25 µg/dL (chronic stress/adrenal issue)', peptide: 'CJC/Ipa improves sleep → reduces HPA axis dysregulation' },
                { name: 'Vitamin D (25-OH)', normal: '50–80 ng/mL optimal', low: '<30 ng/mL = deficiency, supplements required', peptide: 'Not directly addressed — optimize separately with D3+K2' },
                { name: 'Ferritin', normal: '50–150 ng/mL', low: '<30 ng/mL = iron deficiency; >200 = potential overload', peptide: 'Not directly affected — important baseline for energy assessment' },
                { name: 'Thyroid (TSH, Free T3, Free T4)', normal: 'TSH 1.0–2.0 mIU/L optimal', low: 'Subclinical hypothyroidism common in men 50+ and mimics GH deficiency symptoms', peptide: 'Epithalon may improve thyroid axis via pineal-thyroid communication pathway' },
              ],
            },
          ].map((section) => (
            <div key={section.category} className="glass-card p-6">
              <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${section.color === 'blue' ? 'text-blue-400' : section.color === 'rose' ? 'text-rose-400' : 'text-amber-400'}`}>{section.category}</div>
              <div className="space-y-3">
                {section.markers.map((m) => (
                  <div key={m.name} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-start justify-between mb-1">
                      <span className="text-white font-semibold text-sm">{m.name}</span>
                      <span className="text-slate-500 text-xs">{m.normal}</span>
                    </div>
                    <div className="text-slate-500 text-xs mb-1">{m.low}</div>
                    <div className="text-blue-400 text-xs"><span className="font-semibold">Peptide relevance: </span>{m.peptide}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stacking for the Complete Protocol */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1.5 mb-6">
            <span className="text-purple-400 text-sm font-semibold">12-MONTH STRATEGY</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-8">Stacking for the Complete Men&apos;s Protocol</h2>
          <p className="text-slate-400 mb-8">A strategic 12-month plan that cycles peptides for maximum cumulative benefit while managing cost and complexity.</p>

          <div className="space-y-4 mb-8">
            {[
              {
                quarter: 'Q1 (Months 1–3)',
                label: 'Foundation',
                goal: 'Establish GH restoration, begin tissue healing, improve sleep',
                peptides: ['CJC-1295 / Ipamorelin — nightly, 5 days/week', 'BPC-157 — daily (address existing injuries)', 'NAD+ — daily oral'],
                expect: 'Sleep dramatically improves by week 2. Energy noticeably higher by week 4. Body composition changes beginning at weeks 6–8. Joint pain reduction from BPC-157 within 2 weeks.',
                cost: '$180–280/month',
              },
              {
                quarter: 'Q2 (Months 4–6)',
                label: 'Acceleration',
                goal: 'Add gene expression reset and collagen optimization',
                peptides: ['CJC-1295 / Ipamorelin — continue', 'GHK-Cu — add daily injection or topical', 'Epithalon — run one 10-day cycle in month 4', 'BPC-157 — taper to maintenance or target remaining injuries'],
                expect: 'Skin quality noticeably improved by month 5. Body composition continues improving. Sleep now consistently excellent. Energy levels sustained. Epithalon cycle produces additional sleep depth improvement.',
                cost: '$220–350/month',
              },
              {
                quarter: 'Q3 (Months 7–9)',
                label: 'Optimization',
                goal: 'Body composition peak, add IGF-1 LR3 for muscle acceleration (if training)',
                peptides: ['CJC-1295 / Ipamorelin — continue', 'GHK-Cu — continue', 'IGF-1 LR3 — 4-week on/4-week off cycle for training men', 'NAD+ — continue'],
                expect: 'Most significant body composition results. Men who train consistently report this as their peak performance period. Lean mass is measurably higher than baseline. Visceral fat reduced.',
                cost: '$240–400/month (with IGF-1 LR3)',
              },
              {
                quarter: 'Q4 (Months 10–12)',
                label: 'Consolidation',
                goal: 'Consolidate gains, second Epithalon cycle, plan next year',
                peptides: ['CJC-1295 / Ipamorelin — continue or take 4-week break in month 11', 'GHK-Cu — continue', 'Epithalon — second annual 10-day cycle', 'BPC-157 — add back if new injuries'],
                expect: 'Gains from the year consolidated. Second Epithalon cycle provides cumulative telomere benefits. Many men report this as their best subjective health since their 30s. Plan next year\'s protocol.',
                cost: '$200–320/month',
              },
            ].map((q) => (
              <div key={q.quarter} className="glass-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col items-center justify-center shrink-0">
                    <div className="text-purple-400 text-xs font-black">{q.quarter.split(' ')[0]}</div>
                    <div className="text-purple-400 text-xs">{q.quarter.split(' ')[1]}</div>
                  </div>
                  <div>
                    <div className="text-white font-black text-lg">{q.label}</div>
                    <div className="text-slate-400 text-sm">{q.goal}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Active Peptides</div>
                    <ul className="space-y-1">
                      {q.peptides.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">What to Expect</div>
                    <p className="text-slate-400 text-xs leading-relaxed">{q.expect}</p>
                    <div className="mt-2 text-emerald-400 text-xs font-semibold">Est. cost: {q.cost}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-5">
            <div className="text-white font-bold mb-3">12-Month Summary: What to Expect</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { time: '3 months', result: 'Sleep, energy, recovery transformed' },
                { time: '6 months', result: 'Body composition, skin, joint health measurably improved' },
                { time: '9 months', result: 'Peak physique results; best training performance' },
                { time: '12 months', result: 'Comprehensive anti-aging — biological age measurably younger' },
              ].map((item) => (
                <div key={item.time} className="rounded-lg p-3 text-center" style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.15)' }}>
                  <div className="text-purple-400 font-black text-sm">{item.time}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.result}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Peptide recommendations */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-3">Top 5 Peptides for Men Over 50</h2>
          <p className="text-slate-400 mb-10">Ranked by impact on age-related decline. Start with priority 1, add others over time.</p>
          <div className="space-y-6">
            {peptides.map((p) => (
              <div key={p.name} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-black text-lg ${p.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : p.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' : p.color === 'purple' ? 'bg-purple-500/10 text-purple-400' : 'bg-amber-500/10 text-amber-400'}`}>
                    {p.priority}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold tracking-widest mb-1 ${p.color === 'blue' ? 'text-blue-400' : p.color === 'emerald' ? 'text-emerald-400' : p.color === 'purple' ? 'text-purple-400' : 'text-amber-400'}`}>{p.target}</div>
                    <h3 className="text-white font-black text-xl mb-2">{p.name}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.why}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
                      {p.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-slate-400 text-xs">
                          <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-emerald-400" /> {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="bg-slate-800/50 rounded-lg px-3 py-1.5">
                        <span className="text-slate-500 text-xs">Protocol: </span>
                        <span className="text-white text-xs font-semibold">{p.dose}</span>
                      </div>
                      <Link href={`/products/${p.slug}`} className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
                        View {p.name} →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">Peptides for Men 50+ FAQ</h2>
        <div className="space-y-3">
          {allFaqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-blue-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-white mb-3">Start Your Protocol</h2>
          <p className="text-slate-400 mb-6">COA-verified peptides — CJC-1295/Ipamorelin, BPC-157, Epithalon, GHK-Cu, and NAD+.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View All Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/anti-aging" className="btn-secondary px-8 py-4">Anti-Aging Protocols</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/best-peptides-for-men-over-50" />
    </div>
  );
}
