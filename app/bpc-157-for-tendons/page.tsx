import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, AlertTriangle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import InjurySeveritySelector from '@/components/InjurySeveritySelector';

export const metadata: Metadata = {
  title: 'BPC-157 for Tendons & Ligaments: Healing Protocol & Timeline (2026)',
  description: 'BPC-157 is the most effective peptide for tendon and ligament healing. Complete protocol for Achilles tendon, rotator cuff, patellar tendon, and ligament injuries — dosing, injection site, and results timeline.',
  keywords: 'BPC-157 tendons, BPC-157 tendon repair, BPC-157 for tendon healing, BPC-157 ligament, BPC-157 Achilles tendon, BPC-157 rotator cuff, BPC-157 tendon protocol, peptide tendon healing',
  openGraph: {
    title: 'BPC-157 for Tendons & Ligaments: Complete Healing Protocol',
    description: 'BPC-157 tendon and ligament healing — dosing, injection sites, and results timeline.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-for-tendons',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Tendons: Healing Protocol & Timeline',
    description: 'Complete BPC-157 protocol for tendon and ligament repair.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const injuries = [
  { injury: 'Achilles Tendon', dose: '250–500mcg/day', site: 'Local SC near Achilles', timeline: '4–8 weeks', notes: 'Most researched BPC-157 tendon application. Inject subcutaneously near (not into) the tendon. Local + systemic protocol for severe tears.' },
  { injury: 'Patellar Tendon', dose: '250–500mcg/day', site: 'Local SC around knee', timeline: '4–8 weeks', notes: 'Patellar tendinopathy responds very well. Inject around the knee joint, not directly into the tendon. Add TB-500 for systemic support.' },
  { injury: 'Rotator Cuff', dose: '500mcg/day', site: 'Local SC shoulder + systemic', timeline: '6–12 weeks', notes: 'Partial tears respond better than full ruptures. Stack with TB-500 for systemic collagen synthesis. Local injection near the shoulder.' },
  { injury: 'Plantar Fasciitis', dose: '250–500mcg/day', site: 'Local SC heel/arch', timeline: '3–6 weeks', notes: 'Excellent results reported. Inject near the plantar fascia insertion point. Combine with oral BPC-157 for additional anti-inflammatory effect.' },
  { injury: 'MCL/LCL Ligament', dose: '500mcg/day', site: 'Local SC knee + systemic', timeline: '6–10 weeks', notes: 'Grade 1–2 tears respond well. Grade 3 (complete ruptures) may still benefit post-surgery. BPC-157 accelerates ligament fibroblast proliferation.' },
  { injury: 'Tennis Elbow (Epicondylitis)', dose: '250–500mcg/day', site: 'Local SC elbow', timeline: '3–6 weeks', notes: 'Lateral epicondylitis responds quickly to local BPC-157. Often resolves in 4 weeks with daily protocol when steroid injections have failed.' },
];

const timeline = [
  { week: 'Week 1–2', events: ['Inflammation visibly reduced', 'Pain on movement decreases', 'Improved range of motion', 'Sleep improves (less pain interruption)'] },
  { week: 'Week 2–4', events: ['Collagen remodeling begins', 'Tissue tensile strength increasing', 'Can begin gentle loaded stretching', 'Pain at rest often resolves'] },
  { week: 'Week 4–8', events: ['Significant structural repair', 'Return to low-impact training', 'Palpable tissue quality improvement', 'Pain with loading substantially reduced'] },
  { week: 'Week 8–12', events: ['Near-complete functional recovery for mild–moderate injuries', 'Begin progressive loading protocol', 'Add eccentric exercises for tendon conditioning', 'Maintain lower dose BPC-157 (250mcg) during return to sport'] },
];

const returnToTraining = [
  {
    phase: 'Phase 1',
    weeks: 'Weeks 1–2',
    goal: 'Protect & Reduce Inflammation',
    allowed: ['Walking on flat surfaces', 'Unloaded range-of-motion exercises', 'Pool walking (zero impact)', 'Gentle isometric contractions', 'Upper body training (if lower limb injury)'],
    avoid: ['Any loaded exercise on injured tendon', 'Running or jumping', 'Heavy stretching', 'Deep squats or lunges', 'Impact sports'],
    bpc: '500mcg/day — peak anti-inflammatory phase',
  },
  {
    phase: 'Phase 2',
    weeks: 'Weeks 3–4',
    goal: 'Restore Range of Motion & Light Loading',
    allowed: ['Bodyweight squats (partial range)', 'Standing calf raises (bodyweight)', 'Resistance band exercises', 'Cycling (low resistance)', 'Swimming laps'],
    avoid: ['Running', 'Plyometrics', 'Heavy barbell loading', 'Single-leg loading at high intensity'],
    bpc: '500mcg/day — collagen remodeling in progress',
  },
  {
    phase: 'Phase 3',
    weeks: 'Weeks 5–8',
    goal: 'Progressive Tendon Loading',
    allowed: ['Eccentric heel drops (Achilles protocol)', 'Loaded step-downs (patellar)', 'Light barbell work (60% 1RM)', 'Slow jogging on soft surfaces', 'Rotator cuff cable work (shoulder)'],
    avoid: ['Sprinting', 'Heavy plyometrics', 'Maximal loading', 'Return to full sport'],
    bpc: '250–500mcg/day — maintenance/continued repair',
  },
  {
    phase: 'Phase 4',
    weeks: 'Weeks 9–12',
    goal: 'Return to Full Activity',
    allowed: ['Progressive sport-specific training', 'Running at moderate pace', 'Strength work at 80–90% 1RM', 'Sport drills at controlled intensity', 'Full bodyweight plyometrics'],
    avoid: ['Maximal sprinting in week 9', 'Ignoring pain signals', 'Skipping warm-up/cool-down'],
    bpc: '250mcg/day or taper off — structural repair near complete',
  },
];

const injuryDeepDives = [
  {
    name: 'Achilles Tendon',
    mechanism: 'The Achilles is a convergence point of the gastrocnemius and soleus muscles. Injury typically occurs through sudden eccentric loading — a rapid deceleration, aggressive push-off, or repetitive micro-trauma from running on hard surfaces. The Achilles is particularly vulnerable because it bears 6–8x bodyweight during running, yet has a zone of relative avascularity approximately 2–6cm above the calcaneal insertion. This "watershed zone" receives minimal blood supply, making natural healing agonizingly slow.',
    whyBpc: 'BPC-157 was specifically studied in Achilles tendon transection models and showed dramatically accelerated healing versus controls. The VEGF upregulation is critical here — BPC-157 stimulates new capillary formation directly in the avascular zone that normally heals so poorly. Research shows BPC-157 treated tendons demonstrate superior fiber alignment, greater tensile strength, and faster time to functional loading than untreated tendons.',
    injectionNotes: 'Inject subcutaneously into the skin over or immediately adjacent to the Achilles — both medial and lateral sides are appropriate. Aim within 1–2cm of the palpable tendon. Use a 27–29 gauge insulin syringe. Do not inject directly into the tendon substance. Some practitioners use two injection points (proximal and distal to the watershed zone) for more comprehensive coverage.',
    timeline: 'Mild tendinopathy: pain reduction in 5–10 days, functional recovery in 3–5 weeks. Partial tears: meaningful recovery in 6–8 weeks. Full competitive return: 10–12 weeks with consistent protocol.',
  },
  {
    name: 'Rotator Cuff',
    mechanism: 'Rotator cuff tears occur in the supraspinatus (most common), infraspinatus, teres minor, or subscapularis tendons. The mechanism is typically either acute trauma (fall on outstretched arm, overhead catching injury) or chronic impingement/overuse. The supraspinatus passes through the subacromial space — a narrow canal between the humeral head and the acromion. Repetitive overhead loading compresses and frays this tendon over time. Like the Achilles, the critical zone of the supraspinatus has poor vascularization, concentrating injury risk and slowing repair.',
    whyBpc: 'Rotator cuff partial tears respond significantly better to BPC-157 than complete ruptures. For partial tears, BPC-157\'s fibroblast proliferation and collagen synthesis effects can produce near-complete structural restoration. BPC-157 also modulates the local inflammatory environment — critical in the shoulder where chronic bursitis and impingement create ongoing inflammation that prevents healing. Animal models show BPC-157 reduces subscapular hemorrhage and accelerates histological healing after rotator cuff injury.',
    injectionNotes: 'For rotator cuff injuries, a two-site protocol is effective: (1) Local: inject subcutaneously over the posterior shoulder near the supraspinatus insertion. (2) Systemic: inject in the abdomen for whole-body BPC-157 distribution. Avoid injecting directly into the subacromial bursa (this is a medical procedure requiring imaging guidance). The local + systemic combination provides the most comprehensive coverage.',
    timeline: 'Partial tears with consistent BPC-157 + TB-500 protocol: functional improvement by week 4–6, near-complete recovery by week 10–12. Full ruptures requiring surgery: BPC-157 used post-operatively reduces recovery by an estimated 40–50% based on animal healing data.',
  },
  {
    name: 'Patellar Tendon',
    mechanism: 'Patellar tendinopathy ("jumper\'s knee") results from repetitive loading at the patellar tendon insertion — the forces generated during jumping, landing, and rapid changes of direction exceed the tendon\'s capacity for repair. The tendon fails to fully recover between training sessions, leading to collagen disorganization, neovascularization of poor-quality vessels, and progressive structural failure. Acute patellar tendon rupture can occur with sudden quadriceps contraction against a fixed foot.',
    whyBpc: 'BPC-157 addresses two key problems in patellar tendinopathy: (1) It promotes high-quality collagen fiber organization through FAK-paxillin pathway activation — the disorganized collagen of tendinopathy is replaced with properly aligned fibers that restore tensile strength. (2) It eliminates the pathological neovascularization that paradoxically worsens tendinopathy by bringing substance P (pain signaling nerve fibers) into the tendon alongside poor-quality vessels. BPC-157 stimulates functional rather than pathological vessel growth.',
    injectionNotes: 'For patellar tendinopathy: inject subcutaneously on the medial and lateral aspects of the patella, and directly over the patellar tendon insertion at the tibial tuberosity. Three injection points cover the most common pain locations. For proximal patellar pole involvement, inject subcutaneously at the superior patellar margin.',
    timeline: 'Chronic tendinopathy (6+ months): significant improvement in 4–6 weeks, functional recovery in 8–10 weeks. Acute injury: pain reduction in 1–2 weeks, return to sport in 4–8 weeks depending on severity.',
  },
  {
    name: 'Tennis Elbow (Lateral Epicondylitis)',
    mechanism: 'Tennis elbow is a misnomer — only 5% of cases occur in tennis players. The true mechanism is repetitive wrist extension loading (typing, gripping, tool use) causing micro-tears at the extensor carpi radialis brevis (ECRB) insertion on the lateral epicondyle. Chronically, the tendon undergoes angiofibroblastic degeneration — a process of failed healing where normal collagen is replaced with poorly organized matrix. This is why steroid injections fail long-term: they reduce inflammation temporarily but worsen the underlying degenerative process.',
    whyBpc: 'BPC-157 is particularly effective for lateral epicondylitis because it directly reverses angiofibroblastic degeneration — the actual pathological process — rather than just suppressing inflammation. BPC-157\'s fibroblast growth factor upregulation promotes proper collagen synthesis to replace the degenerated matrix. Animal studies show complete tendon regeneration in BPC-157 treated epicondylitis models. Clinically, users often report resolution after 3–4 weeks when corticosteroid injections provided only temporary relief.',
    injectionNotes: 'Inject subcutaneously directly over the lateral epicondyle and slightly anterior to it (over the ECRB tendon origin). A 1cm circle of subcutaneous injection around the most painful point is effective. Some protocols use two injections — one directly at the epicondyle and one 1cm distal into the extensor tendon. 27–29 gauge syringe, 1–1.5cm depth into subcutaneous tissue only.',
    timeline: 'Acute tennis elbow (< 3 months): significant improvement in 2–3 weeks, resolution by 4–6 weeks. Chronic cases (> 6 months): meaningful improvement in 4–5 weeks, full recovery in 8–10 weeks. BPC-157 is notably effective here where other treatments have failed.',
  },
];

const faqs = [
  { q: 'How does BPC-157 heal tendons?', a: 'BPC-157 accelerates tendon healing through four main mechanisms: (1) Upregulates tendon fibroblast growth factor — the cells that produce collagen in tendons multiply faster. (2) Stimulates VEGF (vascular endothelial growth factor) — new blood vessels form in the tendon, dramatically improving healing oxygen/nutrient delivery to avascular tendon tissue. (3) Activates the FAK-paxillin pathway — this promotes proper tendon fiber alignment during healing. (4) Reduces local inflammation and prevents scar tissue formation that weakens healed tendons.' },
  { q: 'Should I inject BPC-157 near the tendon or systemically?', a: 'For tendon injuries: local injection near the injury site is preferred and produces faster results than systemic injection alone. You do NOT inject directly into the tendon — that would be dangerous. Instead, inject subcutaneously into the skin near (within 1–2cm of) the injured tendon. Some protocols use both local + systemic (in the abdomen) simultaneously for maximum coverage. Oral BPC-157 can supplement for systemic anti-inflammatory effect.' },
  { q: 'Is BPC-157 better than TB-500 for tendons?', a: 'BPC-157 and TB-500 are complementary for tendon healing and most protocols use both together. BPC-157 acts primarily on local tissue repair — accelerating fibroblast activity, angiogenesis, and inflammation control at the injury site. TB-500 (Thymosin Beta-4) acts systemically — mobilizing stem cells, promoting actin polymerization for tissue remodeling, and reducing systemic inflammation. The BPC-157 + TB-500 "Wolverine Stack" is the gold standard tendon healing protocol.' },
  { q: 'How long does BPC-157 take to heal a tendon?', a: 'Timeline depends on injury severity: Mild tendinopathy or partial tears: significant improvement in 2–4 weeks, often near-full resolution by 6–8 weeks. Moderate injuries (grade 2 tears): 6–10 weeks for functional recovery. Severe injuries or post-surgical: BPC-157 accelerates but cannot replace surgical repair for grade 3 tears. Animal data shows 2–4× faster tendon healing compared to controls with BPC-157 treatment.' },
  { q: 'Can I train while using BPC-157 for tendon healing?', a: 'Light movement and stretching are generally recommended — immobilization slows tendon healing. During weeks 1–4: avoid loaded exercises on the injured tendon, focus on unloaded range of motion. During weeks 4–8: introduce bodyweight loading, eccentric exercises. After week 8: progressive loading return to sport. BPC-157 significantly accelerates this timeline but does not bypass the biological remodeling stages — rushing back too fast risks re-injury.' },
  { q: 'Can BPC-157 heal a completely torn tendon?', a: 'For complete (Grade 3) ruptures — like a full Achilles tendon or rotator cuff tear — BPC-157 alone is unlikely to restore full structural integrity and surgical repair is typically required. That said, BPC-157 is extremely valuable as a post-surgical adjuvant: it accelerates post-operative healing, reduces scar tissue formation, and dramatically shortens rehabilitation timelines. Animal studies on complete tendon transection consistently show BPC-157 treated subjects achieving tensile strength values 40–60% higher than untreated surgical controls at the same time point. For partial tears (Grade 2) with > 50% fiber integrity, BPC-157 alone can produce functional recovery without surgery in most cases.' },
  { q: 'Does physical therapy help or hurt when using BPC-157?', a: 'Physical therapy and BPC-157 are strongly synergistic — not competing interventions. BPC-157 accelerates the biological repair process while physical therapy ensures the regenerating tissue is mechanically stressed in ways that produce organized, strong collagen alignment. Tendons respond to load — the Wolff\'s Law equivalent for soft tissue is that collagen fibers orient along lines of mechanical stress. If you do BPC-157 without any loading, you may get faster healing but with suboptimal fiber organization. If you load without BPC-157, healing is slower and more inflammatory. Together, BPC-157 provides the raw biological material and PT provides the architectural blueprint. The return-to-training protocol phases above represent best practice for combining both.' },
  { q: 'What should I do if the injection site is sore after BPC-157?', a: 'Mild injection site soreness is normal and usually resolves within 24–48 hours — this is a mechanical response to the injection itself, not the peptide. To minimize soreness: (1) Ensure proper reconstitution and use bacteriostatic water, not plain sterile water — pH matters. (2) Inject slowly, over 10–15 seconds, rather than pushing the plunger fast. (3) Use 27–29 gauge insulin needles — smaller gauge = less tissue disruption. (4) Rotate injection sites — do not inject the same spot every day. (5) Warm the solution to body temperature before injecting. If you experience redness, swelling, or increasing (not decreasing) pain beyond 48 hours, discontinue and assess for infection (rare but possible with any injectable).' },
];

export default function Bpc157TendonsPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Healing', item: 'https://bp157stack.com/healing' },
                { '@type': 'ListItem', position: 3, name: 'BPC-157 for Tendons', item: 'https://bp157stack.com/bpc-157-for-tendons' },
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
              headline: 'BPC-157 for Tendons & Ligaments: Healing Protocol & Timeline',
              description: 'Complete protocol for BPC-157 tendon and ligament healing — dosing, injection sites, and results timeline.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold tracking-wide">BPC-157 TENDON HEALING GUIDE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            BPC-157 for<br />
            <span className="text-blue-400">Tendons & Ligaments</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
            BPC-157 is the most powerful peptide for tendon and ligament repair.
            Complete protocol for every major tendon injury — injection site, dosing, and recovery timeline.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { stat: 'Local SC', label: 'Best injection route' },
              { stat: '500mcg', label: 'Daily dose' },
              { stat: '1–2 wks', label: 'Pain reduction' },
              { stat: '6–12 wks', label: 'Full repair cycle' },
            ].map((s) => (
              <div key={s.stat} className="glass-card p-4 text-center">
                <div className="text-lg font-black text-blue-400">{s.stat}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Injury Severity Selector */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">What Is Your Injury Severity?</h2>
        <p className="text-gray-500 mb-8">
          Select your injury grade to get a customized BPC-157 protocol — dose, frequency, and expected healing timeline tailored to your severity level.
        </p>
        <InjurySeveritySelector />
      </section>

      {/* Injury table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Protocol by Injury Type</h2>
        <p className="text-gray-500 mb-8">Dosing, injection site, and expected timeline for the most common tendon and ligament injuries.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Injury</th>
                <th className="text-left py-3 px-4 text-blue-400 font-bold">Dose</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Injection Site</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold">Timeline</th>
              </tr>
            </thead>
            <tbody>
              {injuries.map(({ injury, dose, site, timeline: t }, i) => (
                <tr key={injury} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-4 text-gray-900 font-semibold">{injury}</td>
                  <td className="py-3 px-4 text-blue-400 font-mono">{dose}</td>
                  <td className="py-3 px-4 text-gray-600">{site}</td>
                  <td className="py-3 px-4 text-gray-500">{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Injury notes */}
      <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {injuries.map((inj) => (
            <div key={inj.injury} className="glass-card p-5">
              <h3 className="text-gray-900 font-bold mb-2">{inj.injury}</h3>
              <p className="text-gray-500 text-sm">{inj.notes}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Science of Tendon Repair */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">The Science of Tendon Repair</h2>
          <p className="text-gray-500 mb-10 text-lg">Why tendons heal slowly — and how BPC-157 overcomes every major barrier to recovery.</p>

          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-blue-400 mb-4">What Tendons Are Made Of</h3>
              <div className="prose-content space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Tendons are dense connective tissue structures composed primarily of collagen — the structural protein that gives them their remarkable tensile strength. The dominant collagen in healthy tendons is <strong className="text-gray-900">Type I collagen</strong>, accounting for roughly 65–80% of dry tendon mass. Type I collagen forms long, parallel fiber bundles called fascicles, organized hierarchically: individual tropocollagen molecules assemble into microfibrils, microfibrils into fibrils, fibrils into fiber bundles, and fiber bundles into fascicles. This hierarchical organization is what gives a healthy tendon the ability to transmit forces of 6–10 times bodyweight without failure.
                </p>
                <p>
                  <strong className="text-gray-900">Type III collagen</strong> plays a critical but often misunderstood role in tendon biology. In healthy, mature tendons, Type III collagen is present in small amounts (10–15%) primarily at the epitenon (outer sheath) and in the endotenon between fascicles. However, during acute injury and early healing, Type III collagen synthesis dramatically increases. Type III fibers are thinner, less organized, and significantly weaker than Type I — they are the body's "rapid response" collagen. The scar tissue that forms during healing is largely Type III collagen, which is why healed tendons are frequently weaker and more prone to re-injury than native tissue.
                </p>
                <p>
                  Beyond collagen, tendons contain specialized cells called <strong className="text-gray-900">tenocytes</strong> (tendon fibroblasts) embedded in an extracellular matrix of proteoglycans (decorin, biglycan, aggrecan) that regulate collagen fiber spacing and water binding, elastic fibers that contribute to tendon resilience, and a network of glycoproteins that mediate cell-matrix communication. The entire structure is wrapped in a vascularized outer sheath (peritenon/epitenon) that provides the tendon's primary blood supply.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-blue-400 mb-4">Why Tendons Heal So Slowly: The Vascularization Problem</h3>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  The central challenge in tendon healing is blood supply — or the profound lack of it. Tendons are among the least vascularized tissues in the human body. While muscle tissue has a capillary density of approximately 300–400 capillaries per mm², tendon midsubstance has a capillary density of roughly <strong className="text-gray-900">20–30 capillaries per mm²</strong> — a 10–15x difference. Certain regions, like the "critical zone" of the Achilles tendon 2–6cm above its calcaneal insertion, are essentially avascular — relying on diffusion from synovial fluid rather than direct blood supply.
                </p>
                <p>
                  This matters because blood supply is the delivery mechanism for everything healing requires: oxygen, glucose, amino acids (the building blocks of new collagen), growth factors, immune cells that clear debris, and the fibroblasts that synthesize new matrix. In a poorly vascularized tendon, all of these processes are rate-limited. The collagen synthesis machinery simply cannot run at full speed when it is oxygen and nutrient deprived.
                </p>
                <p>
                  The healing process itself unfolds in three phases: <strong className="text-gray-900">inflammatory phase</strong> (days 1–7), <strong className="text-gray-900">proliferative phase</strong> (weeks 1–8), and <strong className="text-gray-900">remodeling phase</strong> (weeks 6 through 12+ months). In muscles, this entire cycle completes in 3–6 weeks. In tendons, the remodeling phase — during which disorganized Type III scar collagen is gradually replaced with organized Type I collagen — takes 6–12 months in conventional healing. This is why tendon injuries sideline athletes for entire seasons while muscle injuries resolve in weeks.
                </p>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-black text-blue-400 mb-4">How BPC-157 Overcomes These Barriers</h3>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  BPC-157's extraordinary effectiveness for tendon repair comes from its ability to directly address every major barrier to tendon healing simultaneously. It does not act through a single pathway — it is a multi-mechanism intervention that acts at the cellular, vascular, and molecular levels concurrently.
                </p>
                <p>
                  <strong className="text-gray-900">VEGF Upregulation and Angiogenesis:</strong> BPC-157 is one of the most potent stimulators of VEGF (Vascular Endothelial Growth Factor) known in peptide pharmacology. VEGF is the primary signal that triggers new blood vessel formation (angiogenesis). In multiple animal models — including the Achilles tendon transection model that most closely replicates human tendon rupture — BPC-157 treatment produced significantly greater vascular density in the healing tendon compared to untreated controls. Essentially, BPC-157 forces the body to build new blood vessels into the very avascular zones that normally prevent rapid healing. This directly addresses the fundamental vascularization problem.
                </p>
                <p>
                  <strong className="text-gray-900">Fibroblast Proliferation and Migration:</strong> BPC-157 dramatically upregulates tendon fibroblast (tenocyte) activity. Fibroblasts are the cells that synthesize new collagen. BPC-157 treatment increases both fibroblast proliferation (more cells) and migration (cells moving to the injury site faster), and — critically — promotes fibroblast production of <strong className="text-gray-900">Type I collagen</strong> rather than Type III. This means the healing tissue has a better collagen composition from the start, reducing the amount of slow remodeling work required.
                </p>
                <p>
                  <strong className="text-gray-900">The FAK-Paxillin Pathway:</strong> One of BPC-157's most mechanistically unique effects is activation of the focal adhesion kinase (FAK) — paxillin signaling pathway. This pathway governs how cells orient and migrate in response to mechanical and chemical gradients. In the context of tendon healing, FAK-paxillin activation promotes proper spatial organization of newly synthesized collagen fibers — they align along the tendon's long axis (parallel), rather than forming the disorganized, cross-linked scar matrix that characterizes conventional healing. The result is a healed tendon with biomechanical properties far closer to native tissue than without BPC-157 treatment. This is not merely faster healing — it is structurally superior healing.
                </p>
                <p>
                  <strong className="text-gray-900">Healing Rate Comparison:</strong> Integrating across published animal studies, BPC-157 treated tendons consistently demonstrate: collagen synthesis beginning 30–50% earlier than untreated controls, tensile strength at 4 weeks that equals or exceeds untreated tendons at 8–12 weeks, significantly better histological fiber organization scores at all time points, and near-complete functional recovery at 4–6 weeks in models where untreated controls take 10–14 weeks. In the most compelling studies, BPC-157 treated tendons show histological features of mature, organized repair tissue at timepoints where control tendons are still in the predominantly Type III / inflammatory phase of repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Recovery Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((t) => (
              <div key={t.week} className="glass-card p-5">
                <div className="text-blue-400 font-black text-sm mb-3">{t.week}</div>
                <ul className="space-y-2">
                  {t.events.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-gray-600 text-xs">
                      <CheckCircle className="w-3 h-3 shrink-0 mt-0.5 text-blue-400" /> {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return to Training Protocol */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Return to Training Protocol</h2>
        <p className="text-gray-500 mb-10">
          A phase-by-phase framework for returning to full activity while using BPC-157. Each phase is calibrated to the biological remodeling stage — pushing too fast risks re-injury; the goal is progressive loading that signals organized collagen deposition.
        </p>
        <div className="space-y-5">
          {returnToTraining.map((phase, i) => (
            <div key={phase.phase} className="glass-card p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-blue-400 font-black text-lg">{phase.phase}</span>
                <span className="text-gray-500 text-sm">{phase.weeks}</span>
                <span className="ml-auto text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 rounded-full px-3 py-1">{phase.goal}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                <div>
                  <p className="text-emerald-400 text-xs font-bold tracking-widest mb-2">ACTIVITIES ALLOWED</p>
                  <ul className="space-y-1.5">
                    {phase.allowed.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-gray-600 text-xs">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-red-400 text-xs font-bold tracking-widest mb-2">AVOID</p>
                  <ul className="space-y-1.5">
                    {phase.avoid.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-gray-500 text-xs">
                        <span className="text-red-400 shrink-0 mt-0.5">✕</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <p className="text-gray-500 text-xs"><span className="text-blue-400 font-semibold">BPC-157 during this phase:</span> {phase.bpc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Injuries */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Common Tendon Injuries: Deep Dive</h2>
          <p className="text-gray-500 mb-10">
            Injury mechanism, why BPC-157 is specifically effective, injection technique details, and realistic timelines — for each major injury type.
          </p>
          <div className="space-y-8">
            {injuryDeepDives.map((inj) => (
              <div key={inj.name} className="glass-card p-8">
                <h3 className="text-xl font-black text-blue-400 mb-6">{inj.name}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">INJURY MECHANISM</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{inj.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">WHY BPC-157 WORKS HERE</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{inj.whyBpc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">INJECTION TECHNIQUE</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{inj.injectionNotes}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-gray-500 mb-2">REAL-WORLD TIMELINE</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{inj.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wolverine stack callout */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <h2 className="text-xl font-black text-gray-900 mb-3">For Severe Injuries: Add TB-500</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            The BPC-157 + TB-500 "Wolverine Stack" is the gold standard for serious tendon and ligament injuries.
            TB-500 adds systemic stem cell mobilization and actin polymerization that accelerates structural repair —
            covering what BPC-157 alone cannot reach.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/wolverine-stack" className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2">Wolverine Stack Protocol <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-sm px-5 py-2.5">Ultimate Healing Stack</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">BPC-157 Tendon Healing FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-blue-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
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
          <h2 className="text-2xl font-black text-gray-900 mb-3">Get BPC-157 for Tendon Healing</h2>
          <p className="text-gray-500 mb-6">COA-verified BPC-157 — the most potent tendon repair peptide available.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/products/tb-500" className="btn-secondary px-8 py-4">Add TB-500</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-for-tendons" />
    </div>
  );
}
