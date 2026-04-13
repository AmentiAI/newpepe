import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Moon, Brain, Zap, Shield, Clock } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import SleepPeptideSelector from '@/components/SleepPeptideSelector';

export const metadata: Metadata = {
  title: 'Peptides for Sleep: DSIP, Epithalon & CJC/Ipamorelin Sleep Protocol (2026)',
  description: 'The science-backed guide to sleep peptides. DSIP, Epithalon, CJC-1295/Ipamorelin and GHRP-6 — how each optimizes deep sleep, nocturnal GH pulse, and anti-aging recovery.',
  keywords: 'peptides for sleep, DSIP peptide, Epithalon sleep, CJC Ipamorelin sleep, GHRP-6 deep sleep, sleep optimization peptides',
  openGraph: {
    title: 'Peptides for Sleep: The Deep Sleep Optimization Protocol',
    description: 'DSIP, Epithalon, CJC/Ipamorelin and GHRP-6 — the complete peptide sleep stack. Restore your nocturnal GH pulse and deep sleep architecture.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-sleep',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Sleep: Deep Sleep Optimization Guide',
    description: 'The complete guide to DSIP, Epithalon, and GH secretagogues for sleep depth and recovery.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-sleep',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Peptides for Sleep: DSIP, Epithalon & CJC/Ipamorelin Sleep Protocol',
  description: 'Science-backed guide to sleep peptides including DSIP, Epithalon, and CJC-1295/Ipamorelin for deep sleep optimization.',
  url: 'https://bp157stack.com/peptides-for-sleep',
  author: { '@type': 'Organization', name: 'BPC-157 Stack' },
  publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
};

const stats = [
  { value: '70%', label: 'of GH released during deep sleep', color: 'text-emerald-400' },
  { value: '50%', label: 'faster aging from poor sleep', color: 'text-blue-400' },
  { value: '1974', label: 'year DSIP was discovered', color: 'text-purple-400' },
  { value: '4x', label: 'recovery rate in optimized deep sleep', color: 'text-amber-400' },
];

const peptideProfiles = [
  {
    name: 'DSIP',
    full: 'Delta Sleep Inducing Peptide',
    icon: Moon,
    color: 'purple',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-400/10',
    borderClass: 'border-purple-400/20',
    dose: '200–400 mcg subcutaneous, 30–60 min pre-sleep',
    mechanism: 'Modulates HPA axis to reduce cortisol and facilitate slow-wave sleep initiation',
    bestFor: 'Sleep onset latency — racing mind, difficulty falling asleep',
  },
  {
    name: 'Epithalon',
    full: 'Tetrapeptide Pineal Restorer',
    icon: Brain,
    color: 'blue',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-400/10',
    borderClass: 'border-blue-400/20',
    dose: '5–10 mg subcutaneous, 45 min before bed',
    mechanism: 'Restores pineal gland melatonin production — fixes circadian rhythm at the source',
    bestFor: 'Night waking, early morning waking, degraded circadian rhythm',
  },
  {
    name: 'CJC-1295/Ipa',
    full: 'CJC-1295 + Ipamorelin Blend',
    icon: Zap,
    color: 'emerald',
    colorClass: 'text-emerald-400',
    bgClass: 'bg-emerald-400/10',
    borderClass: 'border-emerald-400/20',
    dose: '100/100 mcg subcutaneous, immediately before bed on empty stomach',
    mechanism: 'Amplifies the nocturnal GH pulse during slow-wave sleep — deeper SWS, more GH',
    bestFor: 'Shallow sleep, poor recovery, low nocturnal GH output',
  },
  {
    name: 'GHRP-6',
    full: 'Growth Hormone Releasing Peptide-6',
    icon: Shield,
    color: 'amber',
    colorClass: 'text-amber-400',
    bgClass: 'bg-amber-400/10',
    borderClass: 'border-amber-400/20',
    dose: '100–200 mcg subcutaneous, 30 min before sleep',
    mechanism: 'Acts on ghrelin receptors to drive slow-wave sleep depth and GH secretion',
    bestFor: 'Deep SWS enhancement, muscle recovery, next-day energy',
  },
];

const faqs = [
  {
    q: 'What is DSIP and how does it improve sleep?',
    a: 'DSIP (Delta Sleep Inducing Peptide) is a nonapeptide first isolated from rabbit brain tissue in 1974 during the natural onset of sleep. It works by modulating the hypothalamic-pituitary-adrenal (HPA) axis — reducing cortisol secretion and lowering central arousal to facilitate the transition into slow-wave sleep. It reduces sleep latency (the time to fall asleep) and increases the proportion of restorative deep sleep. Most users notice results within the first 3–5 nights.',
  },
  {
    q: 'How does Epithalon restore sleep quality?',
    a: 'Epithalon is a synthetic tetrapeptide that restores pineal gland function — specifically, it normalizes the pineal gland\'s sensitivity and melatonin output, which degrades with age. Unlike supplementing melatonin directly, Epithalon fixes the underlying machinery. Most people over 35 have meaningfully degraded pineal function; Epithalon literally rejuvenates this gland over a 10–20 day cycle, resulting in dramatically improved sleep continuity and circadian rhythm stability.',
  },
  {
    q: 'Why take CJC-1295/Ipamorelin before bed specifically?',
    a: 'Because your largest natural growth hormone pulse of the day fires during the first deep sleep cycle — typically 60–90 minutes after falling asleep. Taking CJC-1295/Ipamorelin immediately before bed (on an empty stomach) means the GH secretagogues are active right when your pituitary is primed to pulse. This amplifies the nocturnal GH release by 3–5x, which directly increases slow-wave sleep depth AND accelerates all the tissue repair and anti-aging processes that GH drives overnight.',
  },
  {
    q: 'Can I stack DSIP and Epithalon together?',
    a: 'Yes — this is actually one of the most popular sleep peptide combinations. DSIP handles the acute sleep onset and HPA modulation, while Epithalon works at the deeper level of restoring circadian machinery. They act via different mechanisms and there is no known interaction between them. A typical stack: DSIP 200 mcg + Epithalon 5 mg taken together 45–60 minutes before bed. This combination addresses both sleep onset and sleep architecture simultaneously.',
  },
  {
    q: 'How long before I notice results from sleep peptides?',
    a: 'DSIP typically shows effects within the first 1–3 nights — users report noticeably faster sleep onset and deeper rest. CJC/Ipamorelin effects on sleep depth usually manifest within 5–10 days. Epithalon\'s circadian restoration is more gradual — most users notice meaningful improvement in sleep continuity by week 2, with the full effect appearing after completing a 10–20 day cycle. The longer-term circadian reset from Epithalon is cumulative across cycles.',
  },
  {
    q: 'What is GHRP-6 and how is it different from Ipamorelin for sleep?',
    a: 'Both GHRP-6 and Ipamorelin are GH secretagogues, but GHRP-6 has a stronger acute GH pulse effect — it\'s essentially more potent but with a key side effect: significant ghrelin activation that causes hunger (the "GHRP-6 hunger spike"). For sleep use, this can actually be useful since going to sleep slightly hungry after GHRP-6 administration is associated with deeper SWS. Ipamorelin is cleaner and more selective — preferred for long-term use. GHRP-6 is preferred by some for occasional maximum-depth sleep recovery sessions.',
  },
  {
    q: 'Are sleep peptides safe? Any side effects?',
    a: 'The sleep peptides covered here — DSIP, Epithalon, CJC-1295, Ipamorelin — have extensive research histories and favorable safety profiles. DSIP has been studied in humans since the 1970s. Epithalon has a 40-year research history from Dr. Khavinson\'s lab with no significant adverse events documented. The GH secretagogues can cause transient water retention or slight groggy feeling the morning after at higher doses. These are research peptides — not approved for human use by the FDA — and should be used under professional guidance.',
  },
];

export default function PeptidesForSleepPage() {
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
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Sleep Optimization</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-blue-400/10 border border-blue-400/20 rounded-full px-3 py-1.5">
                <span className="text-blue-400 text-xs font-semibold">4 Peptide Protocols</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
              <span className="text-white block">Peptides for</span>
              <span className="text-white block">Deep Sleep</span>
              <span className="block mt-2" style={{ color: '#00ff88' }}>Optimization</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
              Most people are trying to fix their sleep with supplements that cost $30.
              The answer might be $60 away. DSIP, Epithalon, and CJC/Ipamorelin address
              the actual biology of sleep — not just the symptoms.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8 max-w-2xl">
              Sleep is not passive recovery. It is the single most anabolic, neuroprotective,
              and anti-aging window in every 24-hour cycle. 70% of your daily growth hormone
              fires during deep sleep. Peptides let you maximize every second of it.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
              >
                Shop Sleep Peptides
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/epithalon" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                Epithalon Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {['DSIP — Named For Sleep', 'Epithalon — Pineal Restoration', 'CJC/Ipa — Nocturnal GH', 'GHRP-6 — Deep SWS'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ────────────────────────────────────── */}
        <div className="bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ value, label, color }) => (
                <div key={label} className="text-center">
                  <div className={`text-4xl font-black mb-1 ${color}`}>{value}</div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY SLEEP MATTERS ────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>The Foundation</p>
                <h2 className="text-4xl font-black text-white mb-6">
                  Sleep Is the{' '}
                  <span className="text-purple-400">#1 Recovery</span>{' '}
                  and Anti-Aging Factor
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Every optimization protocol you run — whether it&apos;s peptides, training, nutrition, or
                  supplementation — lives or dies based on the quality of your sleep. Poor sleep doesn&apos;t
                  just make you feel bad. It accelerates biological aging by up to 50%, blunts growth
                  hormone release, elevates cortisol, degrades cognitive function, and dismantles the
                  anabolic environment that every other intervention requires.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The mainstream answer to poor sleep is melatonin and magnesium. Those aren&apos;t wrong —
                  they&apos;re just operating at the wrong level. Melatonin supplements your deficiency.
                  Sleep peptides restore the systems that create that deficiency in the first place.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  DSIP, Epithalon, CJC-1295/Ipamorelin, and GHRP-6 each target a different bottleneck
                  in sleep quality. Used correctly, they transform not just how you sleep — but how you
                  recover, age, and perform.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'GH Release', value: '70% fires during deep sleep', color: 'text-emerald-400', bar: 'bg-emerald-400', pct: '70%' },
                  { label: 'Testosterone', value: 'Peaks during REM sleep', color: 'text-blue-400', bar: 'bg-blue-400', pct: '85%' },
                  { label: 'Cortisol Clearance', value: 'Reduced 60% during SWS', color: 'text-purple-400', bar: 'bg-purple-400', pct: '60%' },
                  { label: 'Neural Repair', value: '90% of glymphatic clearance occurs during sleep', color: 'text-amber-400', bar: 'bg-amber-400', pct: '90%' },
                ].map(({ label, value, color, bar, pct }) => (
                  <div key={label} className="glass-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 text-sm font-semibold">{label}</span>
                      <span className={`text-xs font-bold ${color}`}>{pct}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
                      <div className={`${bar} h-1.5 rounded-full`} style={{ width: pct }} />
                    </div>
                    <p className="text-slate-500 text-xs">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DSIP SECTION ─────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/dsip-delta-sleep-inducing-peptide-10mg.png"
                    alt="DSIP Delta Sleep Inducing Peptide 10mg"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Moon className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">The Sleep Peptide</span>
                </div>

                <h2 className="text-3xl font-black text-white mb-4">
                  DSIP — The Peptide{' '}
                  <span className="text-purple-400">Literally Named For Sleep</span>
                </h2>

                <p className="text-slate-400 leading-relaxed mb-4">
                  In 1974, Swiss researchers isolated a nonapeptide from rabbit brain tissue during
                  induced sleep and named it Delta Sleep Inducing Peptide. The name is not marketing —
                  it describes the exact mechanism of action. DSIP is the brain&apos;s own sleep signal.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  It works primarily on the HPA axis — reducing CRH and cortisol secretion while
                  facilitating the neurological transition from wakefulness to slow-wave sleep. The
                  result is dramatically reduced sleep latency (you fall asleep faster) and meaningfully
                  increased proportion of restorative SWS.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Unlike sedative drugs or melatonin, DSIP doesn&apos;t force sleep. It creates the
                  neurological conditions for sleep — the same conditions your own brain produces
                  naturally in youth, before stress, age, and lifestyle degraded the system.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Dose', value: '200–400 mcg SC' },
                    { label: 'Timing', value: '30–60 min pre-sleep' },
                    { label: 'Cycle', value: '5 nights on, 2 off' },
                    { label: 'Onset', value: '1–3 nights' },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass-card p-3">
                      <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-white font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={SOURCE_URL}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="btn-cta inline-flex items-center gap-2 px-6 py-3"
                >
                  Shop DSIP <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EPITHALON SECTION ────────────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Brain className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Pineal Restoration</span>
                </div>

                <h2 className="text-3xl font-black text-white mb-4">
                  Epithalon:{' '}
                  <span className="text-blue-400">Restoring Your Pineal Gland</span>
                </h2>

                <p className="text-slate-400 leading-relaxed mb-4">
                  Your pineal gland is the master clock of your circadian rhythm. It produces melatonin
                  in response to darkness, orchestrating the cascade of hormonal events that govern sleep
                  architecture. By your 40s, pineal function has degraded significantly — melatonin output
                  is a fraction of what it was at 20. This is why sleep quality deteriorates with age.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Epithalon doesn&apos;t just add melatonin to the system. It repairs and restores the
                  pineal gland&apos;s capacity to produce melatonin endogenously. After a 10–20 day Epithalon
                  cycle, the pineal gland&apos;s sensitivity normalizes — your body starts making the melatonin
                  it was supposed to make all along.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  The clinical results are striking: improved sleep onset, sustained deep sleep, better
                  morning cortisol rhythm, and the general sense that your body has returned to a younger
                  circadian state. Two cycles per year — spring and fall — is the standard longevity protocol.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SOURCE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-cta inline-flex items-center gap-2 px-6 py-3"
                  >
                    Shop Epithalon <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link href="/epithalon" className="btn-secondary inline-flex items-center gap-2 px-6 py-3">
                    Full Epithalon Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/epitalon-50mg.png"
                    alt="Epithalon 50mg Pineal Restoration Peptide"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CJC/IPA SECTION ──────────────────────────────── */}
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
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Nocturnal GH Pulse</span>
                </div>

                <h2 className="text-3xl font-black text-white mb-4">
                  CJC-1295/Ipamorelin:{' '}
                  <span className="text-emerald-400">Amplifying Your Nightly GH Pulse</span>
                </h2>

                <p className="text-slate-400 leading-relaxed mb-4">
                  The largest growth hormone pulse of your entire day occurs during the first deep sleep
                  cycle — approximately 60–90 minutes after falling asleep. This isn&apos;t a side effect
                  of sleep. It&apos;s the entire point of sleep, from an anabolic and anti-aging perspective.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  CJC-1295 is a GHRH analog that amplifies the magnitude of this pulse. Ipamorelin is
                  a selective GH secretagogue that deepens the slow-wave sleep during which this pulse
                  occurs. Together, they create a compounding effect: deeper sleep that produces more
                  GH, which then further improves sleep quality in the cycles that follow.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  The protocol is precise: inject on an empty stomach immediately before sleep. Food —
                  particularly carbohydrates and insulin — blunts GH release. Fasting state plus
                  CJC/Ipamorelin is the maximum GH pulse state possible without pharmaceutical GH.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'CJC Dose', value: '100 mcg SC' },
                    { label: 'Ipa Dose', value: '100 mcg SC' },
                    { label: 'Timing', value: 'Right before bed, fasted' },
                    { label: 'Cycle', value: '5 days on, 2 off' },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass-card p-3">
                      <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">{label}</div>
                      <div className="text-white font-bold text-sm">{value}</div>
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

        {/* ── GHRP-6 SECTION ───────────────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-amber-400">Deep SWS Enhancement</p>
              <h2 className="text-3xl font-black text-white mb-4">
                GHRP-6: The{' '}
                <span className="text-amber-400">Deep Sleep Depth</span>{' '}
                Peptide
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                GHRP-6 acts on ghrelin receptors in the hypothalamus — the same system that governs
                hunger, metabolic rate, and deep sleep architecture. While Ipamorelin is the refined
                modern choice, GHRP-6 is the OG sleep-depth peptide with decades of research supporting
                its ability to increase slow-wave sleep duration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Ghrelin Receptor Agonism',
                  body: 'GHRP-6 acts as a potent ghrelin receptor agonist in the hypothalamus. Ghrelin signaling is directly tied to SWS depth — activating these receptors drives the brain into deeper delta-wave sleep stages.',
                  color: 'text-amber-400',
                  border: 'border-amber-400/20',
                  bg: 'bg-amber-400/5',
                },
                {
                  title: 'Maximum GH Pulse',
                  body: 'Among injectable GH secretagogues, GHRP-6 produces one of the most potent single-dose GH pulses available. Combined with deep sleep, this creates the ideal anabolic recovery window.',
                  color: 'text-amber-400',
                  border: 'border-amber-400/20',
                  bg: 'bg-amber-400/5',
                },
                {
                  title: 'Dose & Protocol',
                  body: '100–200 mcg subcutaneous, 30 minutes before sleep on empty stomach. Expect the hunger spike — this is normal and part of the mechanism. 5 on / 2 off cycling protocol.',
                  color: 'text-amber-400',
                  border: 'border-amber-400/20',
                  bg: 'bg-amber-400/5',
                },
              ].map(({ title, body, color, border, bg }) => (
                <div key={title} className={`glass-card p-6 ${bg} border ${border}`}>
                  <h3 className={`font-black text-base mb-3 ${color}`}>{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE SELECTOR ─────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>Find Your Protocol</p>
              <h2 className="text-3xl font-black text-white mb-3">
                What&apos;s Your <span className="text-purple-400">Sleep Problem?</span>
              </h2>
              <p className="text-slate-400">
                Select your primary sleep issue and get a targeted peptide recommendation.
              </p>
            </div>
            <SleepPeptideSelector />
          </div>
        </section>

        {/* ── PEPTIDE OVERVIEW GRID ────────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">
                The Sleep Peptide <span className="text-emerald-400">Comparison</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {peptideProfiles.map(({ name, full, icon: Icon, colorClass, bgClass, borderClass, dose, mechanism, bestFor }) => (
                <div key={name} className={`glass-card p-6 border ${borderClass}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${bgClass} ${borderClass}`}>
                      <Icon className={`w-5 h-5 ${colorClass}`} />
                    </div>
                    <div>
                      <div className={`font-black text-lg ${colorClass}`}>{name}</div>
                      <div className="text-slate-500 text-xs">{full}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-slate-500 font-semibold">Dose: </span><span className="text-slate-300">{dose}</span></div>
                    <div><span className="text-slate-500 font-semibold">Mechanism: </span><span className="text-slate-300">{mechanism}</span></div>
                    <div><span className="text-slate-500 font-semibold">Best for: </span><span className="text-slate-300">{bestFor}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPLETE STACK ───────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>The Full Protocol</p>
              <h2 className="text-3xl font-black text-white mb-4">
                The Complete Sleep Peptide <span className="text-emerald-400">Stack</span>
              </h2>
            </div>

            <div className="glass-card p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-xl p-5" style={{ background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.2)' }}>
                  <div className="text-purple-400 text-xs font-bold tracking-widest mb-2">STARTER — SLEEP ONSET</div>
                  <div className="text-white font-black mb-3">DSIP Solo</div>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• DSIP 200–300 mcg SC</li>
                    <li>• 30 min before bed</li>
                    <li>• 5 nights on, 2 off</li>
                    <li>• Best for: high latency, racing mind</li>
                  </ul>
                </div>

                <div className="rounded-xl p-5" style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <div className="text-emerald-400 text-xs font-bold tracking-widest mb-2">INTERMEDIATE — RECOVERY</div>
                  <div className="text-white font-black mb-3">CJC/Ipa + Epithalon</div>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• CJC 100 mcg + Ipa 100 mcg SC</li>
                    <li>• Epithalon 5 mg SC (cycle phase)</li>
                    <li>• Both 45 min before bed</li>
                    <li>• Best for: deep sleep + recovery</li>
                  </ul>
                </div>

                <div className="rounded-xl p-5" style={{ background: 'rgba(0,255,136,0.07)', border: '1px solid rgba(0,255,136,0.2)' }}>
                  <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#00ff88' }}>ADVANCED — FULL PROTOCOL</div>
                  <div className="text-white font-black mb-3">Full Sleep Stack</div>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• DSIP 200 mcg + Epithalon 5 mg</li>
                    <li>• CJC/Ipa 100/100 mcg</li>
                    <li>• All 45–60 min pre-sleep</li>
                    <li>• Best for: maximum optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2"
              >
                Shop All Sleep Peptides <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-slate-500">Common Questions</p>
              <h2 className="text-3xl font-black text-white">
                Sleep Peptide <span className="text-purple-400">FAQ</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="glass-card group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-white font-semibold text-sm pr-4">{q}</span>
                    <span className="text-slate-500 text-xl shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              Start Your <span style={{ color: '#00ff88' }}>Sleep Protocol</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              DSIP, Epithalon, CJC/Ipamorelin — the complete sleep peptide toolkit.
              The most anabolic window of your day deserves the best tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2"
              >
                Shop Sleep Peptides <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/epithalon-complete-guide" className="btn-secondary text-base px-8 py-4">
                Epithalon Deep Dive
              </Link>
            </div>
            <p className="text-slate-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
          </div>
        </section>

        <InternalLinks path="/peptides-for-sleep" title="Related Sleep & Recovery Guides" />
      </div>
    </>
  );
}
