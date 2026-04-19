import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Clock, TrendingUp, AlertTriangle, Activity, Microscope, Star } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';
import InjuryAssessment from '@/components/InjuryAssessment';

export const metadata: Metadata = {
  title: 'BPC-157 & TB-500 Healing Peptides 2026 | Fastest Injury Recovery Protocols | BPC-157 Stack',
  description: 'BPC-157 and TB-500 are the most studied healing peptides in the world. Complete guide to dosing, protocols, and injury recovery for tendons, ligaments, muscles, gut, and nerves.',
  keywords: 'BPC-157, TB-500, healing peptides, injury recovery, tendon repair, ligament healing, gut healing, KPV anti-inflammatory',
  openGraph: {
    title: 'BPC-157 & TB-500 Healing Peptides | Injury Recovery Protocols',
    description: 'BPC-157 and TB-500 are the most studied healing peptides. Complete guide for tendons, ligaments, gut, and nerve repair.',
    type: 'article',
    url: 'https://www.bp157stack.com/healing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 & TB-500 Healing Peptides | Injury Recovery Protocols',
    description: 'BPC-157 and TB-500: the most studied healing peptides. Heal injuries 2–4x faster.',
  },
  alternates: { canonical: 'https://www.bp157stack.com/healing' },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const injuryTypes = [
  { icon: '🦴', label: 'Tendons & Ligaments', time: '4–8 weeks', desc: 'ACL, MCL, rotator cuff, Achilles — BPC-157 directly activates tendon fibroblasts and growth factor receptors at the injury site.' },
  { icon: '💪', label: 'Muscle Tears', time: '2–4 weeks', desc: 'Satellite cell activation and myogenin upregulation dramatically accelerate muscle fiber regeneration vs. natural healing.' },
  { icon: '🫁', label: 'Gut & IBD', time: '1–3 weeks', desc: 'BPC-157 is derived from gastric juice — it restores intestinal wall integrity, heals ulcers, and reverses NSAID damage to the GI tract.' },
  { icon: '🧠', label: 'Nerve Damage', time: '6–12 weeks', desc: 'Promotes axonal growth and neurite outgrowth. One of the only peptides shown to repair nerve damage in controlled animal models.' },
  { icon: '🦷', label: 'Bone & Cartilage', time: '8–12 weeks', desc: 'Upregulates BMP-2 and VEGF expression in bone cells, accelerating callus formation and restoring articular cartilage.' },
  { icon: '👁️', label: 'Corneal & Eye', time: '2–4 weeks', desc: 'Heals corneal damage and nerve fibers in the eye — one of the most surprising and well-documented BPC-157 findings.' },
];

const researchTimeline = [
  { year: '1991', event: 'BPC-157 isolated from human gastric juice — body protective compound identified by Dr. Predrag Sikiric at University of Zagreb' },
  { year: '1993', event: 'First tendon and ligament healing studies published — 2× faster healing vs. controls in rat models' },
  { year: '1997', event: 'Gut healing properties confirmed — BPC-157 heals NSAID-induced gastric ulcers and repairs intestinal fistulas' },
  { year: '2004', event: 'Systemic effects confirmed — single injection heals injury even when administered distal to the site' },
  { year: '2010', event: 'Neurological healing demonstrated — nerve regeneration and spine injury models show dramatic recovery' },
  { year: '2016', event: 'TB-500 combination protocols established — synergistic effects documented across multiple tissue types' },
  { year: '2019', event: '100+ peer-reviewed studies published — BPC-157 remains the most studied peptide with no known LD50' },
  { year: '2023', event: 'Human case reports emerging — informal human data aligns with animal model predictions for all injury types' },
];

const comparisonRows = [
  { feature: 'Mechanism', bpc: 'Growth factor upregulation at injury site', tb: 'Mobilizes stem cells body-wide via actin binding', nsaid: 'COX enzyme inhibition (blocks pain signal only)' },
  { feature: 'Tissue Repair', bpc: '✅ Active tissue regeneration', tb: '✅ Systemic tissue regeneration', nsaid: '❌ No regeneration — only pain relief' },
  { feature: 'Side Effects', bpc: '✅ None identified in 30+ years', tb: '✅ Extremely well tolerated', nsaid: '❌ GI damage, renal, cardiovascular' },
  { feature: 'Gut Health', bpc: '✅ Repairs gut lining directly', tb: '✅ Reduces systemic inflammation', nsaid: '❌ Damages gut lining — the opposite' },
  { feature: 'Timeline', bpc: '2–4x faster than untreated', tb: '2–3x faster than untreated', nsaid: 'No effect on healing speed' },
  { feature: 'Flexibility', bpc: 'Neutral', tb: '✅ Significant improvement', nsaid: 'Neutral or worsening' },
];

const protocols = [
  {
    name: 'Acute Injury (0–72 hrs)',
    color: 'emerald',
    phase: 'Phase 1',
    steps: [
      'BPC-157: 250–500mcg SC or IM twice daily near injury site',
      'TB-500: 5mg loading dose SC twice in first week',
      'KPV: 500mcg 2× daily orally for gut/systemic inflammation',
      'Continue for 2 weeks minimum, 4 weeks optimal',
    ],
  },
  {
    name: 'Chronic / Persistent Injuries',
    color: 'blue',
    phase: 'Phase 2',
    steps: [
      'BPC-157: 250mcg SC once daily at injury site',
      'TB-500: 2.5mg SC 2× per week (maintenance dose)',
      'Run for 4–8 weeks with 2-week break',
      'Can repeat indefinitely — no tolerance buildup',
    ],
  },
  {
    name: 'Pre/Post Surgery Protocol',
    color: 'purple',
    phase: 'Phase 3',
    steps: [
      'Start BPC-157 3 days pre-surgery: 500mcg 2× daily',
      'Resume 48hrs post-surgery with full acute protocol',
      'Add TB-500: 5mg twice in first post-op week',
      'Continue 6–8 weeks for full surgical recovery',
    ],
  },
];

export default function HealingPage() {
  const healingProducts = getProductsByCategory('Healing');

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-50 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600 text-xs font-bold tracking-wide">HEALING PEPTIDE PROTOCOLS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Heal Injuries<br />
                <span style={{ color: '#00ff88' }}>2–4× Faster</span><br />
                <span className="text-gray-700 text-3xl font-bold">Than Nature Alone</span>
              </h1>
              <p className="text-gray-800 text-xl leading-relaxed mb-8">
                BPC-157 and TB-500 are backed by 30+ years of research and 100+ peer-reviewed studies.
                The most powerful injury recovery protocol available — targeting the actual tissue damage,
                not just the pain.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
                  View Full Healing Stack
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '100+', label: 'Peer-Reviewed Studies', sub: 'on BPC-157 alone' },
                { num: '30yr', label: 'Research History', sub: 'since 1991, Univ. Zagreb' },
                { num: 'Zero', label: 'Known LD50', sub: 'no toxic dose identified' },
                { num: '2–4×', label: 'Faster Recovery', sub: 'vs. untreated controls' },
                { num: '6', label: 'Tissue Types', sub: 'muscle, tendon, ligament, gut, nerve, bone' },
                { num: '#1', label: 'Healing Peptide', sub: 'most studied peptide for repair' },
              ].map((stat) => (
                <div key={stat.num} className="glass-card p-4 text-center">
                  <div className="text-2xl font-black" style={{ color: '#00ff88' }}>{stat.num}</div>
                  <div className="text-gray-900 text-sm font-semibold mt-1">{stat.label}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE BODY HEALS — Foundational Science */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <Microscope className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-xs font-bold tracking-wide">FOUNDATIONAL SCIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
            How the Body Heals:<br />
            <span style={{ color: '#00ff88' }}>And Why It&apos;s So Slow</span>
          </h2>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              The human body&apos;s healing capacity is remarkable by most biological standards. But it operates on a timeline measured in months for serious injuries — and years for the complete maturation of repaired tissue. Understanding exactly why healing takes so long is the first step to understanding how BPC-157 and TB-500 shortcut this timeline without compromising the quality of repair.
            </p>

            {/* Phase 1 */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <h3 className="text-red-600 font-black text-lg mb-3">Phase 1: Inflammatory (Days 0–7)</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-3">
                The moment tissue is damaged, a cascade of vascular and cellular events begins. Damaged cells release histamine, prostaglandins, bradykinin, and substance P, causing local vasodilation and increased vascular permeability. Blood flow surges to the injury. Neutrophils arrive within hours to clear cellular debris and bacteria. Macrophages follow, phagocytizing dead tissue and releasing growth factors that recruit the cells needed for the next phase. The hallmarks: pain, swelling, heat, and redness. This phase is necessary — without it, healing cannot begin. But it is also destructive: inflammatory cytokines cause collateral damage to surrounding healthy tissue, and the phase can persist pathologically in chronic injuries where the inflammatory stimulus never fully resolves.
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                <strong className="text-gray-900">How BPC-157 + TB-500 optimize Phase 1:</strong> BPC-157 modulates the inflammatory response without suppressing it — it reduces the duration and intensity of the destructive aspects (via COX and nitric oxide pathway modulation) while preserving the pro-healing signals. TB-500 inhibits NF-κB, the master transcription factor for inflammatory cytokine production, reducing collateral tissue damage without blocking the macrophage activity needed to transition to Phase 2. Neither peptide is immunosuppressive — they are inflammatory modulators, not suppressors.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)' }}>
              <h3 className="text-amber-600 font-black text-lg mb-3">Phase 2: Proliferative (Days 4 – Weeks 6–8)</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-3">
                With the debris cleared, the body shifts into construction mode. Fibroblasts — the collagen-producing cells of connective tissue — migrate into the injury site and begin laying down a collagen scaffold. Early collagen deposition is primarily type III: a looser, weaker matrix that serves as initial structural scaffolding. Simultaneously, new blood vessels are formed through angiogenesis (VEGF-driven) to supply the metabolically active repair tissue with oxygen and nutrients. This is the longest phase and the critical bottleneck for most injuries. The rate of collagen synthesis is limited by: fibroblast numbers, growth factor signaling, vascular supply, and the availability of amino acid building blocks. In tendons and ligaments, vascular supply is particularly limiting — these are inherently hypovascular tissues, which is why Achilles and rotator cuff injuries are notoriously slow to heal.
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                <strong className="text-gray-900">How BPC-157 + TB-500 dominate Phase 2:</strong> BPC-157 is a powerful activator of VEGF — dramatically increasing neovascularization at the injury site and resolving the vascular supply bottleneck that limits tendon and ligament healing. It directly upregulates growth hormone receptors in fibroblasts, amplifying their response to GH and IGF-1 signals. It activates Egr-1, the transcription factor that drives tendon-specific collagen synthesis. TB-500 mobilizes CD34+ stem cell progenitors from bone marrow — flooding the injury site with cells that differentiate into fibroblasts, endothelial cells, and tissue-specific repair cells. Together, they accelerate Phase 2 by 2–3× in animal models — compressing what should take 6–8 weeks into 2–3 weeks.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="rounded-2xl p-6" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <h3 className="text-emerald-600 font-black text-lg mb-3">Phase 3: Remodeling (Months 2–24)</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-3">
                The most underappreciated phase of healing is also the longest. The type III collagen scaffold laid down in Phase 2 must be gradually replaced by type I collagen — the load-bearing form that gives tendons, ligaments, and skin their mechanical strength. This process is driven by mechanical loading signals (which stimulate collagen fiber alignment along stress axes) and by the persistent activity of matrix metalloproteinases (MMPs) that remodel the existing matrix. The bottleneck here is chemical: collagen crosslinking requires lysyl oxidase activity, which requires adequate copper, vitamin C, and zinc — and simply takes time regardless of substrate availability. Even with optimal nutrition, remodeling from type III to mature type I collagen takes 12–24 months in tendons.
              </p>
              <p className="text-gray-800 text-sm leading-relaxed">
                <strong className="text-gray-900">How BPC-157 + TB-500 accelerate Phase 3:</strong> BPC-157 directly stimulates type I collagen synthesis (rather than type III) — when the peptide is present during the proliferative phase, the initial collagen deposition skews toward the load-bearing form, accelerating the transition that would normally take months. TB-500 continues to support MMP activity for extracellular matrix remodeling. The combination effect means that at the 8–12 week mark on this protocol, tissue histology frequently shows characteristics of 6–12 months of natural healing — measurably superior collagen organization, fiber alignment, and mechanical tensile strength.
              </p>
            </div>

            <div className="rounded-2xl p-5 bg-amber-50 border border-amber-200">
              <p className="text-gray-800 text-sm leading-relaxed">
                <strong className="text-gray-900">The collagen crosslinking bottleneck</strong> — the final constraint on healing speed — cannot be fully eliminated by any current intervention. But by accelerating the upstream phases so dramatically, BPC-157 and TB-500 allow the body to enter Phase 3 with a higher-quality collagen matrix to remodel, resulting in faster return of mechanical strength and function even before full crosslinking maturity is achieved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Injury Type Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900 mb-3">What Injuries Does BPC-157 Heal?</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Unlike any other compound, BPC-157 shows activity across virtually every tissue type studied —
            with documented healing effects in controlled animal models.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {injuryTypes.map((inj) => (
            <div key={inj.label} className="glass-card p-6 group hover:border-emerald-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{inj.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900 font-black">{inj.label}</h3>
                    <span className="text-xs bg-gray-100 text-gray-800 border border-gray-200 px-2 py-0.5 rounded-full">
                      {inj.time}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">{inj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Injury Assessment Widget */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-xs font-bold tracking-wide">INJURY ASSESSMENT</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Find Your Recommended Protocol</h2>
          <p className="text-gray-900 max-w-xl mx-auto">
            Answer 4 questions about your injury and get a personalized peptide stack recommendation with doses and timeline.
          </p>
        </div>
        <InjuryAssessment />
      </section>

      {/* The Gold Standard Stack */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 mb-4">
                <Zap className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600">THE GOLD STANDARD COMBO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                BPC-157 + TB-500:<br />
                <span style={{ color: '#00ff88' }}>Complementary Healing</span>
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                BPC-157 is a local healer — it concentrates at the injury site, upregulates growth factor receptors,
                and drives fibroblast activity to rebuild collagen. TB-500 is a systemic healer — it circulates through
                the entire body, mobilizes bone marrow stem cells, and deposits them at damaged tissue.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6">
                Used together, they create a healing environment that is impossible to achieve with either peptide alone.
                Animal studies consistently show 50–70% reduction in recovery time compared to untreated controls.
              </p>
              <div className="space-y-3">
                {[
                  'BPC-157 is systemic even when injected distally — no need for painful local injection',
                  'TB-500 crosses the blood-brain barrier — also heals neurological tissue',
                  'No interaction between the two peptides — purely additive effects',
                  'Both are extremely stable and well-tolerated with no identified side effects',
                  'No PCT required — neither affects the HPGA or hormonal axes',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-8">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                  View the Stack <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-sm px-6 py-3">
                  Full Protocol Guide
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <span className="text-emerald-600 font-black text-sm">BPC</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-black">BPC-157 Mechanism</div>
                    <div className="text-emerald-600 text-xs">Body Protection Compound</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    'Upregulates GHR (growth hormone receptors) in fibroblasts',
                    'Activates VEGF — increases blood flow to injury site',
                    'Stimulates Tendon-specific transcription factor (Scx)',
                    'Accelerates collagen type I synthesis by 300–400%',
                    'Reverses opioid tolerance — bonus for pain management',
                  ].map((m) => (
                    <li key={m} className="text-gray-700 text-base flex items-start gap-2">
                      <span className="text-emerald-600">→</span> {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-black text-sm">TB5</span>
                  </div>
                  <div>
                    <div className="text-gray-900 font-black">TB-500 Mechanism</div>
                    <div className="text-blue-600 text-xs">Thymosin Beta-4 Fragment</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {[
                    'Binds G-actin — regulates cell migration and tissue repair',
                    'Mobilizes CD34+ stem cells from bone marrow to injury sites',
                    'Reduces inflammation via NF-κB inhibition',
                    'Dramatically improves soft tissue flexibility and joint mobility',
                    'Crosses the BBB — simultaneously heals neural tissue',
                  ].map((m) => (
                    <li key={m} className="text-gray-700 text-base flex items-start gap-2">
                      <span className="text-blue-600">→</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">BPC-157 vs. TB-500 vs. NSAIDs</h2>
        <p className="text-gray-700 text-center mb-10 max-w-xl mx-auto">
          NSAIDs are the default recommendation for injuries. Here&apos;s what the research actually shows when you compare them.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-amber-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left py-4 px-5 text-gray-700 font-semibold">Feature</th>
                <th className="text-center py-4 px-5 text-emerald-600 font-bold">BPC-157</th>
                <th className="text-center py-4 px-5 text-blue-600 font-bold">TB-500</th>
                <th className="text-center py-4 px-5 text-gray-500 font-bold">NSAIDs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                  <td className="py-3 px-5 text-gray-800 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-center text-gray-700">{row.bpc}</td>
                  <td className="py-3 px-5 text-center text-gray-700">{row.tb}</td>
                  <td className="py-3 px-5 text-center text-gray-500">{row.nsaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs text-center mt-4">*Based on peer-reviewed animal studies.</p>
      </section>

      {/* Protocols */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Healing Peptide Protocols</h2>
            <p className="text-gray-900 max-w-xl mx-auto">
              Different injury types require different approaches. Use these evidence-based protocols as your starting point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocols.map((proto) => (
              <div key={proto.name} className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 blur-2xl rounded-full" />
                <div className="text-xs font-bold text-emerald-600 mb-2 tracking-widest">{proto.phase}</div>
                <h3 className="text-gray-900 font-black text-lg mb-4">{proto.name}</h3>
                <ul className="space-y-3">
                  {proto.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-600 mt-0.5 shrink-0">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 text-xs mt-6">Consult a healthcare provider before use.</p>
        </div>
      </section>

      {/* HEALING PEPTIDE PROTOCOLS BY SPORT */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-xs font-bold tracking-wide">SPORT-SPECIFIC PROTOCOLS</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Healing Protocols by Sport</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Every sport has its characteristic injury patterns. These sport-specific protocols target the most common presentations with optimized peptide combinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              sport: 'Running',
              icon: '🏃',
              focus: 'Lower Leg Focus',
              injuries: ['Achilles tendinopathy', 'Plantar fasciitis', 'Patellar tendon', 'Tibial stress injuries'],
              protocol: 'BPC-157 500 mcg SC at Achilles/plantar fascia daily. TB-500 2.5 mg 2× weekly. Cycle: 8 weeks. Inject BPC-157 at the zone of maximal tenderness. Begin eccentric heel drops from week 3.',
              color: '#00ff88',
            },
            {
              sport: 'Strength Training',
              icon: '🏋️',
              focus: 'Shoulder & Knee',
              injuries: ['Rotator cuff tears', 'Patellar/quad tendon', 'Biceps tendon', 'AC joint issues'],
              protocol: 'BPC-157 500 mcg SC near supraspinatus or patellar insertion daily. TB-500 2.5 mg 2× weekly for systemic coverage. 8–10 week cycle. Add vitamin C 2g daily for collagen synthesis cofactor.',
              color: '#3b82f6',
            },
            {
              sport: 'Martial Arts',
              icon: '🥋',
              focus: 'Multi-Joint',
              injuries: ['Finger/hand ligaments', 'Ankle sprains', 'Rib injuries', 'Shoulder dislocations'],
              protocol: 'Multi-site protocol: BPC-157 500 mcg SC abdominal for systemic delivery + local injection at primary injury. TB-500 2.5 mg 2× weekly. Oral BPC-157 500 mcg additionally for comprehensive coverage.',
              color: '#f59e0b',
            },
            {
              sport: 'Cycling',
              icon: '🚴',
              focus: 'Knee & Hip',
              injuries: ['IT band syndrome', 'Patellofemoral pain', 'Hip flexor strain', 'Knee cartilage wear'],
              protocol: 'BPC-157 500 mcg SC near lateral knee/hip flexor daily. TB-500 2.5 mg 2× weekly for flexibility — a key benefit for the tight cycling position. Bike fit assessment alongside peptide protocol.',
              color: '#10b981',
            },
            {
              sport: 'Golf & Tennis',
              icon: '🎾',
              focus: 'Elbow & Shoulder',
              injuries: ['Tennis/golfer elbow (epicondylitis)', 'Rotator cuff irritation', 'Wrist tendinopathy', 'Forearm muscle tears'],
              protocol: 'BPC-157 500 mcg SC at the lateral or medial epicondyle (inject at point of maximal tendon tenderness). TB-500 2.5 mg 2× weekly. 6–8 week cycle. Eccentric wrist exercises from week 3 essential.',
              color: '#a855f7',
            },
            {
              sport: 'Swimming',
              icon: '🏊',
              focus: 'Shoulder-Dominant',
              injuries: ['Swimmer\'s shoulder (impingement)', 'Rotator cuff tendinopathy', 'Biceps long head tendon', 'Thoracic outlet issues'],
              protocol: 'BPC-157 500 mcg SC near supraspinatus/biceps long head tendon daily. TB-500 2.5 mg 2× weekly for range-of-motion improvement. Swimming technique correction mandatory alongside peptides — re-injury risk is high without stroke mechanics fix.',
              color: '#06b6d4',
            },
          ].map((sp) => (
            <div key={sp.sport} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{sp.icon}</span>
                <div>
                  <h3 className="text-gray-900 font-black">{sp.sport}</h3>
                  <div className="text-xs font-semibold" style={{ color: sp.color }}>{sp.focus}</div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-gray-500 text-xs font-bold tracking-widest mb-1">COMMON INJURIES</div>
                <div className="flex flex-wrap gap-1">
                  {sp.injuries.map((inj) => (
                    <span key={inj} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-800 border border-gray-200">
                      {inj}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-xs font-bold tracking-widest mb-1">PROTOCOL</div>
                <p className="text-gray-700 text-xs leading-relaxed">{sp.protocol}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NUTRITION FOR HEALING */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-600 text-xs font-bold tracking-wide">COMPANION GUIDE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Nutrition for<br />
            <span style={{ color: '#00ff88' }}>Accelerated Healing</span>
          </h2>
          <p className="text-gray-900 mb-8 max-w-2xl">
            Peptides accelerate the signaling that drives healing — but the raw material for building new tissue must come from your diet. These nutritional requirements are non-negotiable if you want maximum results from your protocol.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Protein */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-xl">💪</div>
                <div>
                  <h3 className="text-gray-900 font-black">Protein: Minimum 1.6g/kg/day</h3>
                  <div className="text-emerald-600 text-xs">The fundamental substrate for tissue repair</div>
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                BPC-157 dramatically increases the rate of collagen synthesis and fibroblast activity — but collagen is made of amino acids, particularly glycine, proline, and hydroxyproline. If dietary protein is inadequate, the peptide-driven signaling has no substrate to work with. For active healing, target 1.6–2.2g/kg of bodyweight per day. Spread across 4–5 meals to maximize muscle protein synthesis throughout the day.
              </p>
              <div className="space-y-1">
                <div className="text-gray-500 text-xs font-bold tracking-widest">TOP SOURCES</div>
                {['Chicken, turkey, lean beef — complete amino acid profiles', 'Collagen peptides (15g/day) — direct glycine/proline substrate for tendon repair', 'Eggs — glycine-rich and high bioavailability', 'Greek yogurt, cottage cheese — casein for overnight repair'].map((s) => (
                  <div key={s} className="text-gray-700 text-xs flex items-start gap-1.5">
                    <span className="text-emerald-600 mt-0.5">•</span>{s}
                  </div>
                ))}
              </div>
            </div>

            {/* Key micronutrients */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-xl">⚗️</div>
                <div>
                  <h3 className="text-gray-900 font-black">Critical Healing Micronutrients</h3>
                  <div className="text-amber-600 text-xs">Cofactors for collagen synthesis and tissue repair</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Vitamin C — 1–2g/day', desc: 'Required for hydroxylation of proline to hydroxyproline — a rate-limiting step in collagen synthesis. Without adequate vitamin C, even optimal peptide signaling cannot produce mature collagen.' },
                  { name: 'Zinc — 25–30mg/day', desc: 'Cofactor for over 300 enzymes involved in wound healing, including matrix metalloproteinases that remodel scar tissue.' },
                  { name: 'Magnesium — 400mg/day', desc: 'Required for ATP production, protein synthesis, and muscle relaxation. Deficiency significantly impairs healing and sleep quality.' },
                  { name: 'Copper — 2–4mg/day', desc: 'Essential for lysyl oxidase — the enzyme responsible for collagen crosslinking in the remodeling phase.' },
                ].map((n) => (
                  <div key={n.name}>
                    <div className="text-gray-900 text-sm font-bold">{n.name}</div>
                    <div className="text-gray-700 text-xs leading-relaxed">{n.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Foods that inhibit healing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl p-6" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <h3 className="text-red-600 font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Foods That Inhibit Healing
              </h3>
              <div className="space-y-2">
                {[
                  { item: 'Alcohol', reason: 'Directly impairs collagen synthesis, disrupts sleep architecture (the primary anabolic window), and depletes zinc and magnesium' },
                  { item: 'Excessive linoleic acid (seed oils)', reason: 'Promotes the arachidonic acid cascade and chronic inflammatory signaling — works against BPC-157\'s inflammatory modulation' },
                  { item: 'Ultra-processed foods', reason: 'High advanced glycation end-products (AGEs) crosslink collagen in dysfunctional ways and promote senescent cell accumulation' },
                  { item: 'High-sugar diet', reason: 'Hyperglycemia impairs fibroblast function and reduces growth factor receptor sensitivity — the opposite of what BPC-157 is trying to achieve' },
                ].map((f) => (
                  <div key={f.item}>
                    <div className="text-gray-900 text-sm font-bold">{f.item}</div>
                    <div className="text-gray-700 text-xs leading-relaxed">{f.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <h3 className="text-emerald-600 font-bold mb-3">Timing Protein Around Peptide Doses</h3>
              <div className="space-y-3">
                {[
                  { time: 'Morning (with BPC-157 injection)', action: '30–40g protein within 30 minutes — activates mTOR signaling alongside BPC-157\'s growth factor upregulation for synergistic effect' },
                  { time: 'Post-training', action: '30–40g protein + collagen peptides (15g) with vitamin C (500mg) — the most critical anabolic window for injury repair' },
                  { time: 'Pre-sleep', action: '30–40g casein protein — sustained overnight amino acid delivery to match the GH pulsatility of deep sleep, which TB-500 and BPC-157 may synergize with' },
                ].map((t) => (
                  <div key={t.time}>
                    <div className="text-gray-900 text-sm font-bold">{t.time}</div>
                    <div className="text-gray-700 text-xs leading-relaxed">{t.action}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Timeline */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-4">
            <Microscope className="w-4 h-4 text-gray-700" />
            <span className="text-gray-700 text-sm">30+ Year Research History</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">The Science of BPC-157</h2>
          <p className="text-gray-900 max-w-xl mx-auto">From gastric juice isolation to the most studied healing peptide in the world.</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />
          <div className="space-y-6 pl-16">
            {researchTimeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-white border border-emerald-200 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                </div>
                <div className="glass-card p-5">
                  <div className="text-emerald-600 font-black text-lg mb-1">{item.year}</div>
                  <p className="text-gray-800 text-sm leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Healing Peptides</h2>
            <p className="text-gray-700 mt-1">BPC-157, TB-500, and KPV — the complete healing stack</p>
          </div>
          <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
            className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2 hidden sm:flex">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I use BPC-157 orally or does it need to be injected?',
                a: 'BPC-157 is active both orally and via subcutaneous injection. For gut and systemic conditions, oral use is convenient and effective. For localized injuries (tendon, ligament), subcutaneous injection near the site is more targeted, though oral administration also shows systemic effects.',
              },
              {
                q: 'How long until I see results with BPC-157?',
                a: 'Most users report noticeable improvement in pain and function within 1–2 weeks. Structural tissue healing (tendon/ligament repair) typically shows measurable progress at 4–6 weeks on imaging. Gut healing often occurs fastest — within days to 2 weeks.',
              },
              {
                q: 'Is BPC-157 safe to use long-term?',
                a: 'BPC-157 has no known LD50 (lethal dose) in animal studies — no dose has been found to cause systemic toxicity. Researchers have studied it for over 30 years without identifying meaningful side effects. Standard protocols run 4–8 weeks with optional breaks.',
              },
              {
                q: 'Should I take BPC-157 and TB-500 together?',
                a: 'Yes — they are complementary and synergistic, not redundant. BPC-157 drives local healing at the injury site; TB-500 provides systemic effects and stem cell mobilization. Used together they consistently produce faster and more complete recovery than either alone.',
              },
              {
                q: 'What is KPV and how does it fit into healing protocols?',
                a: "KPV (Lys-Pro-Val) is a tripeptide fragment of α-MSH with potent anti-inflammatory properties. It is particularly effective for gut inflammation, IBD, and Crohn's disease. It can be used alongside BPC-157 as an oral supplement for gut-focused protocols.",
              },
              {
                q: 'Can I use ice or heat therapy alongside BPC-157?',
                a: 'Yes, with important nuances. Cold (ice) therapy reduces acute inflammation and swelling — which aligns well with BPC-157\'s anti-inflammatory mechanisms in the first 72 hours. After the acute phase, heat therapy promotes vasodilation and increases local blood flow, complementing BPC-157\'s VEGF-driven neovascularization. The important exception: prolonged ice application (cryotherapy longer than 20 minutes) has been shown to impair macrophage activity and slow the transition to the proliferative healing phase. Use ice conservatively in the first 48 hours, then transition to heat from day 3 onward.',
              },
              {
                q: 'Do NSAIDs interfere with BPC-157?',
                a: 'Yes — this is an important consideration. NSAIDs (ibuprofen, naproxen, aspirin) work by inhibiting COX-1 and COX-2 enzymes, reducing prostaglandin synthesis. BPC-157 modulates some of the same prostaglandin pathways as part of its anti-inflammatory activity. More significantly, COX enzymes are involved in the downstream signaling that BPC-157 leverages for tissue repair — and NSAID-mediated COX inhibition has been shown in several studies to blunt BPC-157\'s healing response. Additionally, NSAIDs are known to independently impair bone healing, tendon healing, and gut integrity — the opposite of what BPC-157 is doing. If you are on this stack or any BPC-157 protocol, minimize or eliminate NSAID use. If pain management is necessary, acetaminophen (paracetamol) does not share these interactions.',
              },
              {
                q: 'What bloodwork should I monitor during a healing protocol?',
                a: 'BPC-157 and TB-500 have no known effects on the hormonal axes, liver enzymes, or kidney function at standard research doses. However, for comprehensive monitoring during extended protocols, useful baseline and follow-up markers include: CRP (C-reactive protein) as an inflammation marker — should decrease over time on the protocol; IGF-1 if running extended protocols, as BPC-157\'s growth hormone receptor upregulation may subtly increase IGF-1 in some users; complete blood count (CBC) to establish baseline; and a basic metabolic panel for kidney and liver function. For users over 50 or with pre-existing conditions, quarterly bloodwork during extended protocols is a reasonable precaution. There are no specific markers that indicate BPC-157 or TB-500 toxicity — the primary purpose of monitoring is baseline health assessment rather than peptide-specific safety surveillance.',
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group border-l-2 border-amber-400">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900 font-semibold text-sm">{faq.q}</span>
                  <span className="text-amber-600 text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-700 text-base leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🛡️</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Start Healing Faster Today</h2>
              <p className="text-gray-800 text-lg mb-2 max-w-xl mx-auto">
                BPC-157 and TB-500 from our recommended supplier — COA verified, US domestic, ships in 24–48 hours.
              </p>
              <p className="text-gray-600 text-sm mb-8">No prescription needed. COA-verified purity. Same-day processing.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
                  View Full Protocol
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/healing" />
    </div>
  );
}
