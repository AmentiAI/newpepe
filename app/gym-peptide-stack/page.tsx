import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Dumbbell } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import GymGoalPeptideMatch from '@/components/GymGoalPeptideMatch';

export const metadata: Metadata = {
  title: 'The Complete Gym Peptide Stack: CJC/Ipa, BPC-157, IGF-1 & Tirzepatide (2026)',
  description: 'The definitive gym peptide stack guide. Pre-workout GH timing, post-workout BPC-157/TB-500 recovery, IGF-1 for muscle, and fat loss with Tirzepatide. 3 tiers: Starter, Intermediate, Advanced.',
  keywords: 'gym peptide stack, CJC Ipamorelin workout, BPC-157 recovery, IGF-1 muscle building, Tirzepatide fat loss, peptides for gym, bodybuilding peptides',
  openGraph: {
    title: 'The Complete Gym Peptide Stack (2026)',
    description: 'Pre-workout GH optimization, post-workout repair, muscle building, and fat loss — the complete peptide stack for serious gym-goers.',
    type: 'article',
    url: 'https://bp157stack.com/gym-peptide-stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Gym Peptide Stack',
    description: 'CJC/Ipa, BPC-157, TB-500, IGF-1, Tirzepatide — the full gym protocol.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/gym-peptide-stack',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Gym Peptide Stack: CJC/Ipa, BPC-157, IGF-1 & Tirzepatide',
  description: 'The definitive gym peptide stack guide for serious athletes and gym-goers.',
  url: 'https://bp157stack.com/gym-peptide-stack',
  author: { '@type': 'Organization', name: 'BPC-157 Stack' },
  publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
};

const stats = [
  { value: '3–5x', label: 'GH pulse amplification with CJC/Ipa', color: 'text-emerald-400' },
  { value: '2–3x', label: 'faster injury recovery with BPC-157', color: 'text-blue-400' },
  { value: '20%', label: 'avg body weight loss with Tirzepatide', color: 'text-amber-400' },
  { value: '~$100', label: 'starter stack monthly cost', color: 'text-purple-400' },
];

const faqs = [
  {
    q: 'What is the best pre-workout timing for CJC-1295/Ipamorelin?',
    a: 'CJC-1295/Ipamorelin has two optimal timing windows. For pre-workout use, inject 45–60 minutes before training on an empty stomach — this drives a GH pulse that improves performance, energy, and training capacity during the session. For maximum GH amplification, the pre-sleep protocol (immediately before bed, fasted) targets the nocturnal GH pulse which is the primary anti-aging and muscle-building window. Many users run CJC/Ipa pre-sleep daily and add a pre-workout injection on training days for a dual-pulse protocol.',
  },
  {
    q: 'How should BPC-157 and TB-500 be used for gym recovery?',
    a: 'BPC-157 is most effective when injected near the area of acute soreness or injury — subcutaneous injection within 2–3 cm of the affected tendon, muscle, or joint. For general gym recovery (no specific injury), abdominal subcutaneous injection provides systemic distribution. TB-500 is always injected subcutaneously for systemic delivery — it acts via stem cell mobilization that reaches all injury sites simultaneously. The classic gym recovery protocol: BPC-157 250–500 mcg daily near the primary training site + TB-500 2.5 mg twice per week for systemic coverage.',
  },
  {
    q: 'What does IGF-1 LR3 actually do for muscle building?',
    a: 'IGF-1 LR3 is the most potent legal muscle-building peptide available. It binds IGF-1 receptors on muscle satellite cells (the stem cells of muscle tissue), driving both hyperplasia (new muscle fiber formation) and hypertrophy (existing fiber growth). Unlike exogenous IGF-1, the LR3 variant has a 20–30 hour half-life and a reduced affinity for IGF-binding proteins — meaning more free, active IGF-1 reaching muscle tissue. A 4-week cycle at 50–80 mcg daily produces lean mass gains that are difficult to achieve any other way without pharmaceutical anabolics.',
  },
  {
    q: 'Can I stack Tirzepatide with GH secretagogues for fat loss?',
    a: 'Yes — Tirzepatide and CJC/Ipamorelin work via completely different mechanisms and are highly complementary. Tirzepatide reduces appetite and improves insulin sensitivity via GIP/GLP-1 receptor agonism. CJC/Ipa elevates growth hormone, which directly inhibits fat storage and drives lipolysis. Together they create a powerful dual-mechanism fat loss environment: less energy in (Tirzepatide) plus more fat mobilization (GH axis optimization). The combination produces significantly better body composition outcomes than either alone.',
  },
  {
    q: 'Do I need to cycle off gym peptides?',
    a: 'It depends on the peptide. BPC-157 and TB-500 can be run continuously or cycled as needed — they do not downregulate their own receptors. CJC-1295/Ipamorelin is typically cycled 5 days on / 2 off to prevent pituitary desensitization, or run continuously at lower doses. IGF-1 LR3 should be cycled more strictly — 4 weeks on, 2 weeks off minimum — as sustained IGF-1 receptor stimulation can desensitize receptors and has theoretical implications for cellular proliferation. Tirzepatide is designed for continuous use.',
  },
  {
    q: 'How does the Starter Gym Stack compare to the Advanced Stack?',
    a: 'The Starter Stack (CJC/Ipamorelin + BPC-157) focuses on the two highest-leverage interventions: GH axis optimization and recovery acceleration. For most gym-goers, these alone produce dramatic improvements in recovery speed, body composition, and training capacity. The Intermediate Stack adds IGF-1 LR3 for direct muscle-building signaling. The Advanced Stack layers in Tirzepatide for fat loss and optimizes the GH timing protocol with a dual-pulse approach. Each tier builds on the previous — start with the Starter Stack and add layers as you learn how your body responds.',
  },
  {
    q: 'When should I inject peptides on training days vs. rest days?',
    a: 'Training days: Pre-workout CJC/Ipa 45–60 min before training (fasted). BPC-157 near training site post-workout. Pre-sleep CJC/Ipa right before bed. Rest days: Pre-sleep CJC/Ipa only (one injection). BPC-157 maintenance dose for recovery. TB-500 twice per week regardless of training schedule. IGF-1 LR3: inject on training days within 30 minutes of training for best muscle uptake, but daily injection during the cycle is also effective.',
  },
];

const tiers = [
  {
    tier: 'Starter',
    level: '01',
    subtitle: 'The Essential Foundation',
    tagline: 'Highest ROI. Every gym-goer should run this.',
    peptides: [
      { name: 'CJC-1295/Ipamorelin', role: 'Nocturnal GH pulse amplification', dose: '100/100 mcg SC pre-sleep' },
      { name: 'BPC-157', role: 'Training recovery & injury prevention', dose: '250 mcg SC near primary training site' },
    ],
    cost: '~$80–100/month',
    color: 'text-emerald-400',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.25)',
    hex: '#10b981',
  },
  {
    tier: 'Intermediate',
    level: '02',
    subtitle: 'Add Muscle Building',
    tagline: 'For those who want to push lean mass further.',
    peptides: [
      { name: 'CJC-1295/Ipamorelin', role: 'Nocturnal GH optimization (base)', dose: '100/100 mcg SC pre-sleep' },
      { name: 'BPC-157 + TB-500', role: 'Full recovery stack', dose: '500 mcg BPC + 2.5 mg TB twice weekly' },
      { name: 'IGF-1 LR3', role: 'Direct muscle building signal', dose: '50–80 mcg SC, 4 weeks on/2 off' },
    ],
    cost: '~$150–180/month',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.25)',
    hex: '#3b82f6',
  },
  {
    tier: 'Advanced',
    level: '03',
    subtitle: 'Full Body Recomp Protocol',
    tagline: 'Simultaneous fat loss, muscle gain, and performance optimization.',
    peptides: [
      { name: 'CJC-1295/Ipamorelin', role: 'Dual GH pulse (pre-workout + pre-sleep)', dose: '100/100 mcg SC 2× daily on training days' },
      { name: 'BPC-157 + TB-500', role: 'Elite recovery stack', dose: 'Full loading protocol' },
      { name: 'IGF-1 LR3', role: 'Muscle building + fat partitioning', dose: '60–80 mcg daily, cycled' },
      { name: 'Tirzepatide', role: 'Fat loss + insulin optimization', dose: '2.5–5 mg weekly SC' },
    ],
    cost: '~$220–280/month',
    color: 'text-amber-400',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.25)',
    hex: '#f59e0b',
  },
];

export default function GymPeptideStackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="overflow-hidden">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[85vh] flex items-center pt-20 bg-dark-900 grid-bg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Gym Protocol</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-400/10 border border-blue-400/20 rounded-full px-3 py-1.5">
                <span className="text-blue-400 text-xs font-semibold">3 Tiers</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
              <span className="text-gray-900 block">The Complete</span>
              <span className="text-gray-900 block">Gym Peptide</span>
              <span style={{ color: '#00ff88' }} className="block mt-2">Stack</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-4 max-w-2xl">
              Every serious gym-goer already takes creatine, protein powder, and pre-workout.
              Peptides are simply the next layer — the one that actually changes your physiology
              instead of just giving you a pump.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-2xl">
              CJC-1295/Ipamorelin for the GH axis. BPC-157 and TB-500 for recovery that never falls
              behind your training. IGF-1 for real muscle signaling. Tirzepatide for the fat loss layer.
              Three tiers — pick yours.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
              >
                Shop Gym Peptides
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/body-composition" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                Body Comp Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {['Pre-Workout GH Timing', 'BPC-157 Recovery', 'IGF-1 Muscle Signal', 'Tirzepatide Fat Loss'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────── */}
        <div className="bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label, color }) => (
                <div key={label} className="text-center">
                  <div className={`text-4xl font-black mb-1 ${color}`}>{value}</div>
                  <div className="text-gray-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY PEPTIDES FOR GYM ─────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>The Case</p>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  The Next Layer{' '}
                  <span className="text-emerald-400">After Creatine</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Creatine works by increasing phosphocreatine in muscle. Protein powder provides
                  amino acid substrate. Pre-workout gives you caffeine and pump. These are tools —
                  and they&apos;re good tools. But none of them change the underlying physiology that
                  determines how much muscle you can build, how fast you recover, and how your body
                  partitions nutrients.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Peptides operate at a different level. CJC-1295/Ipamorelin restores the GH axis
                  to youthful output — affecting body composition, recovery rate, sleep quality,
                  and training capacity simultaneously. BPC-157 accelerates the repair of the
                  micro-damage that training creates, allowing you to train harder more frequently.
                  IGF-1 LR3 directly signals muscle satellite cells to proliferate.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  These aren&apos;t stimulants or ergogenic aids. They are signals — biological
                  instructions that tell your body to build more, repair faster, and maintain
                  a more favorable metabolic environment. The foundation doesn&apos;t change.
                  The ceiling does.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: 'GH Axis', body: 'CJC/Ipa amplifies the GH pulse by 3–5x, shifting body composition toward lean mass and away from fat storage', color: 'text-emerald-400', bg: 'bg-emerald-400/5', border: 'border-emerald-400/20' },
                  { icon: Shield, title: 'Recovery', body: 'BPC-157 + TB-500 cuts recovery time in half — the real ceiling for elite gym performance', color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/20' },
                  { icon: TrendingUp, title: 'Muscle Signal', body: 'IGF-1 LR3 directly activates satellite cells — the same mechanism driving pubescent muscle development', color: 'text-purple-400', bg: 'bg-purple-400/5', border: 'border-purple-400/20' },
                  { icon: Dumbbell, title: 'Fat Loss', body: 'Tirzepatide + GH optimization = simultaneous fat loss and lean mass preservation. The recomp protocol', color: 'text-amber-400', bg: 'bg-amber-400/5', border: 'border-amber-400/20' },
                ].map(({ icon: Icon, title, body, color, bg, border }) => (
                  <div key={title} className={`glass-card p-5 ${bg} border ${border}`}>
                    <Icon className={`w-5 h-5 mb-3 ${color}`} />
                    <div className={`font-black text-sm mb-2 ${color}`}>{title}</div>
                    <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CJC/IPA PRE-WORKOUT ──────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/ipamorelin-cjc-1295-blend-cjc-1295-5mg-ipa-5mg.png"
                    alt="CJC-1295 Ipamorelin Blend 5mg+5mg"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Pre-Workout Peptide</span>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  CJC-1295/Ipamorelin:{' '}
                  <span className="text-emerald-400">GH Pulse Timing</span>
                </h2>

                <p className="text-gray-500 leading-relaxed mb-4">
                  The GH axis is the master anabolic and lipolytic system. Training is a GH releaser —
                  but modern life (stress, poor sleep, metabolic dysfunction) means most gym-goers
                  are getting a fraction of the GH pulse they should. CJC-1295/Ipamorelin restores
                  this output to youthful levels.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Pre-workout use is simple: inject 45–60 minutes before training, fasted.
                  The GH pulse will be active during your training session, improving energy
                  substrate utilization (more fat burning), reducing fatigue, and priming
                  the anabolic response to the workout stimulus.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Pre-sleep use is equally important: your largest natural GH pulse fires during
                  the first deep sleep cycle. CJC/Ipa pre-sleep amplifies this 3–5x, driving
                  overnight protein synthesis and body recomposition while you sleep.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Pre-Workout', value: '100/100 mcg, 45 min before, fasted' },
                    { label: 'Pre-Sleep', value: '100/100 mcg, right before bed' },
                    { label: 'Cycle', value: '5 days on, 2 off' },
                    { label: 'Best Result', value: 'Run both windows on training days' },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass-card p-3">
                      <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-gray-900 font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3"
                >
                  Shop CJC/Ipamorelin <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BPC-157 + TB-500 RECOVERY ────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Recovery Stack</span>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  BPC-157 + TB-500:{' '}
                  <span className="text-blue-400">The Wolverine Stack</span>
                </h2>

                <p className="text-gray-500 leading-relaxed mb-4">
                  The real ceiling for elite gym performance isn&apos;t motivation, training volume, or
                  even nutrition. It&apos;s recovery. Every serious athlete eventually hits the wall where
                  the training they need to do exceeds their body&apos;s ability to repair between sessions.
                  This is where BPC-157 and TB-500 change the equation entirely.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  BPC-157 accelerates healing of tendons, ligaments, muscles, and joints by 2–3x via
                  GH receptor upregulation and VEGF-driven angiogenesis. It&apos;s the reactive tool —
                  inject near wherever is sore, stiff, or injured. TB-500 works systemically,
                  mobilizing stem cells throughout the body simultaneously.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Together they allow training frequencies and volumes that would accumulate
                  injury in a non-peptide user. The recovery bottleneck simply stops being
                  a bottleneck.
                </p>

                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3"
                >
                  Shop BPC-157 + TB-500 <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/bpc-157-tb-500-blend-bpc-157-10mg-tb-500-10mg.png"
                    alt="BPC-157 TB-500 Blend 10mg+10mg Recovery Stack"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IGF-1 + TIRZEPATIDE ──────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* IGF-1 */}
              <div className="glass-card p-6" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-3 py-1.5 mb-3">
                      <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Muscle Building</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">IGF-1 LR3</h3>
                  </div>
                  <div className="relative shrink-0">
                    <Image
                      src="https://phiogen.is/images/products/igf-1-lr3-1mg.png"
                      alt="IGF-1 LR3 1mg"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  IGF-1 LR3 directly activates satellite cells — the precursor cells that become new
                  muscle fibers. It&apos;s the closest legal analog to the pubescent IGF-1 environment
                  that drives rapid adolescent muscle development. Four-week cycles at 50–80 mcg daily
                  produce lean mass gains that are qualitatively different from anything training alone achieves.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Dose', value: '50–80 mcg SC daily' },
                    { label: 'Cycle', value: '4 weeks on, 2 off' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
                      <div className="text-gray-500 text-xs font-semibold mb-1">{label}</div>
                      <div className="text-gray-900 font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 text-sm font-bold hover:text-gray-900 transition-colors flex items-center gap-1">
                  Shop IGF-1 LR3 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Tirzepatide */}
              <div className="glass-card p-6" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/25 rounded-full px-3 py-1.5 mb-3">
                      <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Fat Loss Layer</span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">Tirzepatide</h3>
                  </div>
                  <div className="relative shrink-0">
                    <Image
                      src="https://phiogen.is/images/products/tirzepatide-15mg.png"
                      alt="Tirzepatide 15mg Fat Loss Peptide"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Tirzepatide is the clinical gold standard for fat loss — dual GIP/GLP-1 agonism
                  that produces 20%+ body weight reduction in trials. For gym-goers, it&apos;s the fat
                  loss layer that no amount of cardio can fully replicate. Stack with CJC/Ipa for
                  lean-mass-sparing fat loss that reshapes body composition at the highest level.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Dose', value: '2.5 mg weekly SC' },
                    { label: 'Titrate Up', value: '2.5 mg increments monthly' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)' }}>
                      <div className="text-gray-500 text-xs font-semibold mb-1">{label}</div>
                      <div className="text-gray-900 font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 text-sm font-bold hover:text-gray-900 transition-colors flex items-center gap-1">
                  Shop Tirzepatide <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 TIERS ──────────────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>Choose Your Level</p>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                3 Tiers of the{' '}
                <span style={{ color: '#00ff88' }}>Gym Peptide Stack</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Start where you are. Every tier builds on the previous. Most users see the biggest
                return starting with Tier 1 before adding complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {tiers.map(({ tier, level, subtitle, tagline, peptides, cost, color, bg, border, hex }) => (
                <div
                  key={tier}
                  className="glass-card p-6 flex flex-col"
                  style={{ border: `1px solid ${border}` }}
                >
                  <div className="mb-4">
                    <div className={`text-5xl font-black opacity-20 mb-1 ${color}`}>{level}</div>
                    <div className={`font-black text-xl ${color}`}>{tier} Stack</div>
                    <div className="text-gray-500 text-sm">{subtitle}</div>
                  </div>

                  <p className="text-gray-500 text-xs italic mb-4 leading-relaxed">&quot;{tagline}&quot;</p>

                  <div className="space-y-3 flex-1 mb-5">
                    {peptides.map((p) => (
                      <div key={p.name} className="rounded-lg p-3" style={{ background: `${bg}`, border: `1px solid ${border}` }}>
                        <div className="font-bold text-sm text-gray-900">{p.name}</div>
                        <div className="text-gray-500 text-xs">{p.role}</div>
                        <div className="text-gray-500 text-xs mt-1 font-mono">{p.dose}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs font-bold">{cost}</span>
                    <a
                      href={SOURCE_URL}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-all hover:opacity-90"
                      style={{ background: hex, color: '#000' }}
                    >
                      Shop <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GOAL MATCHER ─────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>Find Your Stack</p>
              <h2 className="text-3xl font-black text-gray-900 mb-3">
                Match Peptides to{' '}
                <span className="text-emerald-400">Your Gym Goal</span>
              </h2>
              <p className="text-gray-500">
                Select your primary goal to see the optimal peptide combination with dosing, timeline, and cost.
              </p>
            </div>
            <GymGoalPeptideMatch />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-500">Common Questions</p>
              <h2 className="text-3xl font-black text-gray-900">
                Gym Peptide <span className="text-emerald-400">FAQ</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="glass-card group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-gray-900 font-semibold text-sm pr-4">{q}</span>
                    <span className="text-gray-500 text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Build Your <span style={{ color: '#00ff88' }}>Gym Stack</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Start with CJC/Ipa and BPC-157. Add IGF-1. Layer in Tirzepatide. The physiology
              changes — and so do the results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2"
              >
                Shop All Gym Peptides <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/body-composition" className="btn-secondary text-base px-8 py-4">
                Body Comp Guide
              </Link>
            </div>
            <p className="text-gray-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
          </div>
        </section>

        <InternalLinks path="/gym-peptide-stack" title="Related Performance & Recovery Guides" />
      </div>
    </>
  );
}
