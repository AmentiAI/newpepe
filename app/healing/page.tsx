import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Shield, Zap, Clock, TrendingUp, AlertTriangle, Activity, Microscope, Star } from 'lucide-react';
import { getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 & TB-500 Healing Peptides 2026 | Fastest Injury Recovery Protocols | BPC-157 Stack',
  description: 'BPC-157 and TB-500 are the most studied healing peptides in the world. Complete guide to dosing, protocols, and injury recovery for tendons, ligaments, muscles, gut, and nerves.',
  keywords: 'BPC-157, TB-500, healing peptides, injury recovery, tendon repair, ligament healing, gut healing, KPV anti-inflammatory',
  openGraph: {
    title: 'BPC-157 & TB-500 Healing Peptides | Injury Recovery Protocols',
    description: 'BPC-157 and TB-500 are the most studied healing peptides. Complete guide for tendons, ligaments, gut, and nerve repair.',
    type: 'article',
    url: 'https://bp157stack.com/healing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 & TB-500 Healing Peptides | Injury Recovery Protocols',
    description: 'BPC-157 and TB-500: the most studied healing peptides. Heal injuries 2–4x faster.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

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
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #071a10 50%, #060610 100%)' }}>

      {/* Hero — cinematic */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* Green glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold tracking-wide">HEALING PEPTIDE PROTOCOLS</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
                Heal Injuries<br />
                <span style={{ color: '#00ff88' }}>2–4× Faster</span><br />
                <span className="text-slate-400 text-3xl font-bold">Than Nature Alone</span>
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-8">
                BPC-157 and TB-500 are backed by 30+ years of research and 100+ peer-reviewed studies.
                The most powerful injury recovery protocol available — targeting the actual tissue damage,
                not just the pain.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-base px-8 py-4 flex items-center gap-2">
                  Shop <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
                  View Full Healing Stack
                </Link>
              </div>
            </div>

            {/* Stats column */}
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
                  <div className="text-white text-sm font-semibold mt-1">{stat.label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Injury Type Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-3">
            What Injuries Does BPC-157 Heal?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
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
                    <h3 className="text-white font-bold">{inj.label}</h3>
                    <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      {inj.time}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{inj.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Gold Standard Stack — full detail */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-3 py-1.5 mb-4">
                <Zap className="w-4 h-4" style={{ color: '#00ff88' }} />
                <span className="text-sm font-semibold" style={{ color: '#00ff88' }}>THE GOLD STANDARD COMBO</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4">
                BPC-157 + TB-500:<br />
                <span style={{ color: '#00ff88' }}>Complementary Healing</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                BPC-157 is a local healer — it concentrates at the injury site, upregulates growth factor receptors,
                and drives fibroblast activity to rebuild collagen. TB-500 is a systemic healer — it circulates through
                the entire body, mobilizes bone marrow stem cells, and deposits them at damaged tissue.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
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
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-8">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                  Shop the Stack <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-sm px-6 py-3">
                  Full Protocol Guide
                </Link>
              </div>
            </div>

            {/* Mechanism comparison */}
            <div className="space-y-4">
              <div className="rounded-2xl p-6" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-400 font-black text-sm">BPC</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">BPC-157 Mechanism</div>
                    <div className="text-emerald-400 text-xs">Body Protection Compound</div>
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
                    <li key={m} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-emerald-400">→</span> {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-6" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-black text-sm">TB5</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">TB-500 Mechanism</div>
                    <div className="text-blue-400 text-xs">Thymosin Beta-4 Fragment</div>
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
                    <li key={m} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400">→</span> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BPC-157 vs NSAIDs — Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-3 text-center">
          BPC-157 vs. TB-500 vs. NSAIDs
        </h2>
        <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
          NSAIDs are the default recommendation for injuries. Here&apos;s what the research actually shows when you compare them.
        </p>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0, 255, 136, 0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(0, 255, 136, 0.05)' }}>
                <th className="text-left py-4 px-5 text-slate-400 font-semibold">Feature</th>
                <th className="text-center py-4 px-5 text-emerald-400 font-bold">BPC-157</th>
                <th className="text-center py-4 px-5 text-blue-400 font-bold">TB-500</th>
                <th className="text-center py-4 px-5 text-slate-500 font-bold">NSAIDs</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-slate-300 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-center text-slate-400">{row.bpc}</td>
                  <td className="py-3 px-5 text-center text-slate-400">{row.tb}</td>
                  <td className="py-3 px-5 text-center text-slate-500">{row.nsaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-xs text-center mt-4">*Based on peer-reviewed animal studies.</p>
      </section>

      {/* Protocols — 3 phase cards */}
      <section className="py-16" style={{ background: 'rgba(6, 6, 16, 0.8)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">Healing Peptide Protocols</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Different injury types require different approaches. Use these evidence-based protocols as your starting point.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocols.map((proto) => (
              <div key={proto.name} className="glass-card p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full" />
                <div className="text-xs font-bold text-emerald-400 mb-2 tracking-widest">{proto.phase}</div>
                <h3 className="text-white font-bold text-lg mb-4">{proto.name}</h3>
                <ul className="space-y-3">
                  {proto.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-emerald-400 mt-0.5 shrink-0">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-xs mt-6">Consult a healthcare provider before use.</p>
        </div>
      </section>

      {/* Research Timeline */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 mb-4">
            <Microscope className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-sm">30+ Year Research History</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">The Science of BPC-157</h2>
          <p className="text-slate-400 max-w-xl mx-auto">From gastric juice isolation to the most studied healing peptide in the world.</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />
          <div className="space-y-6 pl-16">
            {researchTimeline.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[41px] w-8 h-8 rounded-full bg-dark-800 border border-emerald-500/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="glass-card p-5">
                  <div className="text-emerald-400 font-black text-lg mb-1">{item.year}</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.event}</p>
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
            <h2 className="text-3xl font-black text-white">Healing Peptides</h2>
            <p className="text-slate-400 mt-1">BPC-157, TB-500, and KPV — the complete healing stack</p>
          </div>
          <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
            className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2 hidden sm:flex">
            Shop All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {healingProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(0, 255, 136, 0.02)', borderTop: '1px solid rgba(0, 255, 136, 0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I use BPC-157 orally or does it need to be injected?',
                a: 'BPC-157 is active both orally and via subcutaneous injection. For gut and systemic conditions, oral use is convenient and effective. For localized injuries (tendon, ligament), subcutaneous injection near the site is more targeted, though oral administration also shows systemic effects.'
              },
              {
                q: 'How long until I see results with BPC-157?',
                a: 'Most users report noticeable improvement in pain and function within 1–2 weeks. Structural tissue healing (tendon/ligament repair) typically shows measurable progress at 4–6 weeks on imaging. Gut healing often occurs fastest — within days to 2 weeks.'
              },
              {
                q: 'Is BPC-157 safe to use long-term?',
                a: 'BPC-157 has no known LD50 (lethal dose) in animal studies — no dose has been found to cause systemic toxicity. Researchers have studied it for over 30 years without identifying meaningful side effects. Standard protocols run 4–8 weeks with optional breaks.'
              },
              {
                q: 'Should I take BPC-157 and TB-500 together?',
                a: 'Yes — they are complementary and synergistic, not redundant. BPC-157 drives local healing at the injury site; TB-500 provides systemic effects and stem cell mobilization. Used together they consistently produce faster and more complete recovery than either alone.'
              },
              {
                q: 'What is KPV and how does it fit into healing protocols?',
                a: 'KPV (Lys-Pro-Val) is a tripeptide fragment of α-MSH with potent anti-inflammatory properties. It is particularly effective for gut inflammation, IBD, and Crohn\'s disease. It can be used alongside BPC-157 as an oral supplement for gut-focused protocols.'
              },
            ].map((faq) => (
              <details key={faq.q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{faq.q}</span>
                  <span className="text-neon-green text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🛡️</div>
              <h2 className="text-3xl font-black text-white mb-4">
                Start Healing Faster Today
              </h2>
              <p className="text-slate-300 text-lg mb-2 max-w-xl mx-auto">
                BPC-157 and TB-500 from Apollo Peptide Sciences — COA verified, US domestic, ships in 24–48 hours.
              </p>
              <p className="text-slate-500 text-sm mb-8">No prescription needed. COA-verified purity. Same-day processing.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  Shop <ArrowRight className="w-5 h-5" />
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
