import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Zap, Shield, Brain, TrendingUp } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import JawlineGoalQuiz from '@/components/JawlineGoalQuiz';

export const metadata: Metadata = {
  title: 'Jawline Peptide Guide: IGF-1, GHK-Cu & BPC-157 for Facial Structure (2026)',
  description: 'The complete looksmaxxing guide to jawline optimization with peptides. IGF-1 LR3, GHK-Cu, BPC-157, and CJC/Ipamorelin — how each improves facial bone structure, collagen, and definition.',
  keywords: 'jawline peptides, looksmaxxing peptides, IGF-1 jawline, GHK-Cu facial structure, BPC-157 face, peptides for jawline, facial bone density peptides',
  openGraph: {
    title: 'Jawline Peptide Guide: The Looksmaxxing Protocol',
    description: 'IGF-1, GHK-Cu, BPC-157, and CJC/Ipa — how each peptide improves facial bone structure, collagen architecture, and jawline definition.',
    type: 'article',
    url: 'https://bp157stack.com/jawline-peptide-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jawline Peptides: The Complete Looksmaxxing Guide',
    description: 'Science-backed guide to using IGF-1, GHK-Cu, BPC-157, and CJC/Ipamorelin for jawline and facial structure optimization.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/jawline-peptide-guide',
  },
};

const SOURCE_URL = '/out';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Jawline Peptide Guide: IGF-1, GHK-Cu & BPC-157 for Facial Structure',
  description: 'The complete looksmaxxing guide to jawline optimization with research peptides.',
  url: 'https://bp157stack.com/jawline-peptide-guide',
  author: { '@type': 'Organization', name: 'BPC-157 Stack' },
  publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
};

const stats = [
  { value: '#1', label: 'looksmaxxing target (jawline)', color: 'text-blue-400' },
  { value: '20+', label: 'years adult bone remodeling continues', color: 'text-emerald-400' },
  { value: '3x', label: 'collagen density with GHK-Cu at 12 weeks', color: 'text-purple-400' },
  { value: '6mo', label: 'meaningful bone density shift timeline', color: 'text-amber-400' },
];

const faqs = [
  {
    q: 'Can peptides actually change your jawline as an adult?',
    a: 'Yes — adult bone is not static. The mandible (jawbone) maintains ongoing remodeling activity throughout adulthood, driven by mechanical loading, growth factor signaling, and hormonal environment. Peptides like IGF-1 LR3 upregulate the same growth factor receptor pathways that drive bone remodeling. The changes are slower than in adolescence, but bone density, gonial angle definition, and ramus height all respond to sustained IGF-1 and GH signaling in adults. Most serious looksmaxxers running IGF-1 protocols report noticeable jawline changes at 6–12 months.',
  },
  {
    q: 'What does GHK-Cu specifically do for the face?',
    a: 'GHK-Cu is a copper tripeptide that activates over 4,000 genes — with particularly strong activity on collagen, elastin, and glycosaminoglycan synthesis. In facial tissue, it increases the density and quality of the collagen matrix that gives structural definition to the jawline, cheekbones, and orbital area. It also drives angiogenesis (new blood vessel formation) and reduces metalloproteinase activity that degrades collagen. Users report visible facial structure sharpening within 8–12 weeks of consistent use.',
  },
  {
    q: 'How does BPC-157 improve facial structure specifically?',
    a: 'BPC-157\'s primary contribution to facial aesthetics is through the facial ligament and fascia system. The masseteric ligaments, retaining ligaments, and fascial layers are what create the sharp, defined appearance of a well-defined jawline — and they are fundamentally connective tissue. BPC-157 upregulates growth hormone receptor expression in ligament fibroblasts and accelerates collagen type I synthesis, improving the integrity and tone of these structural facial supports. Tighter retaining ligaments mean more defined facial contours.',
  },
  {
    q: 'What is the role of the GH axis in facial fat distribution?',
    a: 'Growth hormone is the primary hormone governing facial fat distribution. Low GH (common with aging, poor sleep, and sedentary lifestyle) leads to facial fat accumulation — particularly buccal fat — that obscures jawline definition. CJC-1295/Ipamorelin restores the GH axis, which drives facial lipolysis and remodeling of fat distribution toward a more defined facial phenotype. Most users running CJC/Ipa protocols notice facial fat redistribution within 8–16 weeks.',
  },
  {
    q: 'How long does the jawline peptide protocol take to show results?',
    a: 'Timeline varies by target: GHK-Cu and collagen changes are the fastest — most users see meaningful facial skin and structure tightening within 6–10 weeks. Facial fat redistribution via GH axis optimization typically requires 8–16 weeks of consistent CJC/Ipa use. Bone density and architectural changes are the slowest — bone remodeling cycles are 3–6 months, so meaningful jawline bone changes require 6–12+ months of sustained IGF-1 and GH signaling. The full jaw transformation protocol is a 12-month commitment.',
  },
  {
    q: 'Can I run IGF-1 LR3 and GHK-Cu simultaneously?',
    a: 'Yes — IGF-1 LR3 and GHK-Cu target completely different receptors and pathways. IGF-1 LR3 acts systemically on IGF-1 receptors driving growth factor signaling. GHK-Cu acts locally on copper-dependent enzymatic processes driving collagen synthesis and gene expression. They are highly synergistic: IGF-1 drives the structural bone remodeling while GHK-Cu optimizes the collagen architecture of overlying soft tissue. Running both simultaneously is the recommended approach for comprehensive facial optimization.',
  },
];

export default function JawlinePeptideGuidePage() {
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
            <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/25 rounded-full px-4 py-1.5">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Looksmaxxing Protocol</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-purple-400/10 border border-purple-400/20 rounded-full px-3 py-1.5">
                <span className="text-purple-400 text-xs font-semibold">Facial Structure Guide</span>
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
              <span className="text-white block">Jawline Peptide</span>
              <span className="text-white block">Guide</span>
              <span className="text-blue-400 block mt-2">The Looksmaxxing</span>
              <span style={{ color: '#00ff88' }} className="block">Protocol</span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-4 max-w-2xl">
              The jaw isn&apos;t just about aesthetics — it&apos;s the structural foundation of your entire face.
              And it&apos;s one of the few adult bones that continues to respond to growth signals.
            </p>

            <p className="text-slate-500 leading-relaxed mb-8 max-w-2xl">
              IGF-1 LR3, GHK-Cu, BPC-157, and CJC-1295/Ipamorelin each target a different layer of
              facial structure. Together they form the most comprehensive non-surgical jawline
              optimization protocol currently available.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-8 py-4 flex items-center gap-2 group"
              >
                Shop Jaw Peptides
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/looksmaxxing-peptides" className="btn-secondary text-base px-8 py-4 flex items-center gap-2">
                Full Looksmaxxing Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {['IGF-1 LR3 — Bone Remodeling', 'GHK-Cu — Collagen Architecture', 'BPC-157 — Ligament Integrity', 'CJC/Ipa — GH Axis'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-500">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
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
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHY JAWLINE ──────────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-blue-400">The Foundation</p>
                <h2 className="text-4xl font-black text-white mb-6">
                  Why Jawline Is the{' '}
                  <span className="text-blue-400">#1 Looksmaxxing Target</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The looksmaxxing community has converged on a simple truth: facial attractiveness
                  is primarily determined by facial structure — and the jawline is the dominant
                  structural feature. Strong mandibular definition, clear gonial angle, and a sharp
                  jawline are consistently rated as the highest-leverage physical traits by attraction
                  researchers across cultures.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  What makes the jaw particularly interesting from a peptide standpoint is that it
                  remains responsive to growth factor signaling in adults. Unlike most skeletal
                  structures that become largely static, the mandible maintains active remodeling
                  activity. This is why mewing works — mechanical load changes bone architecture
                  over time. Peptides amplify the same remodeling machinery at the molecular level.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  The protocol isn&apos;t about growing new bone from nothing. It&apos;s about optimizing the
                  growth factor environment to maximize the density, angularity, and definition of the
                  structure you already have — while simultaneously improving the collagen and ligament
                  architecture that creates surface-level definition.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Bone Layer', desc: 'Mandibular density, gonial angle, ramus height — driven by IGF-1 and GH signaling via osteoblast activation', color: 'text-blue-400', bg: 'bg-blue-400/5', border: 'border-blue-400/20' },
                  { title: 'Ligament Layer', desc: 'Masseteric and retaining ligaments — the connective tissue that creates surface definition. BPC-157 is the primary driver', color: 'text-emerald-400', bg: 'bg-emerald-400/5', border: 'border-emerald-400/20' },
                  { title: 'Collagen Matrix', desc: 'The collagen scaffold of facial dermis and subcutaneous tissue — GHK-Cu drives density, hydration, and architecture', color: 'text-purple-400', bg: 'bg-purple-400/5', border: 'border-purple-400/20' },
                  { title: 'Fat Distribution', desc: 'Facial fat volume and distribution — GH axis optimization (CJC/Ipa) drives buccal fat reduction and lipolysis', color: 'text-amber-400', bg: 'bg-amber-400/5', border: 'border-amber-400/20' },
                ].map(({ title, desc, color, bg, border }) => (
                  <div key={title} className={`glass-card p-4 ${bg} border ${border}`}>
                    <div className={`font-black mb-1 ${color}`}>{title}</div>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── IGF-1 SECTION ────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-400/10 border border-blue-400/25 rounded-full px-3 py-1.5 mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Bone Remodeling</span>
                </div>

                <h2 className="text-3xl font-black text-white mb-4">
                  IGF-1 LR3:{' '}
                  <span className="text-blue-400">Bone Density & Remodeling</span>
                </h2>

                <p className="text-slate-400 leading-relaxed mb-4">
                  IGF-1 LR3 is the most potent growth factor signal available in a research peptide.
                  It binds the IGF-1 receptor on osteoblasts — the bone-building cells — and drives a
                  cascade of anabolic signaling that increases bone matrix synthesis, mineral deposition,
                  and ultimately, bone density. In the mandible specifically, sustained IGF-1 signaling
                  over months drives measurable changes in cortical bone thickness and angular definition.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The mechanism isn&apos;t mysterious. Adolescent facial bone development is driven by IGF-1.
                  The reason jaw development accelerates during puberty is the same reason peptide-driven
                  bone remodeling works in adults: IGF-1 receptor activation triggers the same
                  osteoblast/osteoclast remodeling cycle that sculpts facial structure in growth years.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  For jawline use specifically: IGF-1 LR3&apos;s extended half-life (20–30 hours vs. 20 minutes
                  for native IGF-1) means sustained receptor signaling throughout the day. A 4-week cycle
                  at 50–80 mcg daily, cycled with 2-week breaks, provides the growth factor environment
                  needed for meaningful bone remodeling over a 6–12 month horizon.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Dose', value: '50–80 mcg daily SC' },
                    { label: 'Cycle', value: '4 weeks on, 2 off' },
                    { label: 'Timeline', value: '6–12 months for bone changes' },
                    { label: 'Stack With', value: 'GHK-Cu + CJC/Ipa' },
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
                  Shop IGF-1 LR3 <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/igf-1-lr3-1mg.png"
                    alt="IGF-1 LR3 1mg Bone Remodeling Peptide"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GHK-CU SECTION ───────────────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-2xl" />
                  <Image
                    src="https://phiogen.is/images/products/ghk-cu-50mg.png"
                    alt="GHK-Cu 50mg Collagen Peptide"
                    width={220}
                    height={220}
                    className="object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Brain className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest">Collagen Architecture</span>
                </div>

                <h2 className="text-3xl font-black text-white mb-4">
                  GHK-Cu:{' '}
                  <span className="text-emerald-400">Facial Collagen Architecture</span>
                </h2>

                <p className="text-slate-400 leading-relaxed mb-4">
                  GHK-Cu (copper tripeptide) activates over 4,000 genes in human fibroblasts — more
                  gene expression activity than any other known peptide. Its core action in facial tissue
                  is collagen and elastin synthesis: it upregulates collagen I, III, and V production
                  while simultaneously inhibiting the metalloproteinases that degrade existing collagen.
                </p>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The architectural result in the face is significant. Denser collagen under the jawline
                  skin creates a tighter, more defined appearance. The collagen matrix in the dermis and
                  subcutaneous layer is what gives facial features their sharp, angular appearance — soft,
                  degraded collagen means soft, undefined facial features.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  GHK-Cu is the fastest-acting peptide in the jawline protocol. Most users report visible
                  skin tightening and improved facial structure definition within 6–10 weeks. It works
                  continuously alongside the slower bone and ligament changes driven by IGF-1 and BPC-157.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={SOURCE_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-cta inline-flex items-center gap-2 px-6 py-3"
                  >
                    Shop GHK-Cu <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link href="/ghk-cu" className="btn-secondary inline-flex items-center gap-2 px-6 py-3">
                    Full GHK-Cu Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BPC-157 + CJC SECTION ────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="glass-card p-6" style={{ border: '1px solid rgba(167,139,250,0.2)' }}>
                <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/25 rounded-full px-3 py-1.5 mb-4">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-purple-400 text-xs font-semibold uppercase tracking-widest">Ligament Integrity</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  BPC-157: Facial Ligament Integrity
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  The masseteric ligaments, mandibular retaining ligaments, and fascial layers create
                  the sharp, defined surface appearance of a strong jawline. These are fundamentally
                  connective tissue structures — and BPC-157 is the connective tissue peptide.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  BPC-157 upregulates growth hormone receptor expression in ligament fibroblasts and
                  accelerates collagen type I synthesis in ligamentous tissue. The result is tighter,
                  more tonically active facial ligaments that improve surface definition — particularly
                  at the jawline and midface.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Dose', value: '250 mcg SC near jaw' },
                    { label: 'Timing', value: 'Daily or 5x/week' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)' }}>
                      <div className="text-slate-500 text-xs font-semibold mb-1">{label}</div>
                      <div className="text-white font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-purple-400 text-sm font-bold hover:text-white transition-colors flex items-center gap-1">
                  Shop BPC-157 <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="glass-card p-6" style={{ border: '1px solid rgba(0,255,136,0.15)' }}>
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-4" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)' }}>
                  <Zap className="w-3.5 h-3.5" style={{ color: '#00ff88' }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#00ff88' }}>GH Axis Optimization</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  CJC/Ipa: Facial Fat Distribution
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Growth hormone is the master regulator of facial fat distribution. Low GH — common
                  after the mid-20s — leads to buccal fat accumulation and the soft, rounded facial
                  phenotype that obscures jawline definition. CJC-1295/Ipamorelin restores the GH axis.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Elevated nocturnal GH (from pre-sleep CJC/Ipa administration) drives facial lipolysis
                  and redistributes facial fat toward a leaner, more defined appearance over months.
                  This is often the fastest visible change users notice — reduced buccal fat, sharper
                  cheekbone appearance, more defined jawline edges.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Dose', value: '100/100 mcg SC' },
                    { label: 'Timing', value: 'Pre-sleep, fasted' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.12)' }}>
                      <div className="text-slate-500 text-xs font-semibold mb-1">{label}</div>
                      <div className="text-white font-bold text-sm">{value}</div>
                    </div>
                  ))}
                </div>
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="text-sm font-bold hover:text-white transition-colors flex items-center gap-1" style={{ color: '#00ff88' }}>
                  Shop CJC/Ipamorelin <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW BONES RESPOND ────────────────────────────── */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-slate-500">The Science</p>
              <h2 className="text-3xl font-black text-white mb-4">
                How Bones Respond to{' '}
                <span className="text-blue-400">Peptide-Driven Growth Factor Signaling</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Adult bone remodeling is driven by a continuous cycle of osteoclast resorption and osteoblast
                synthesis. Peptides shift this balance toward net bone formation by activating the same
                growth factor receptor pathways that drive skeletal development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  step: '01',
                  title: 'IGF-1 Receptor Activation',
                  body: 'IGF-1 LR3 binds IGF-1R on osteoblasts, activating PI3K/Akt and MAPK/ERK pathways — the core signaling cascades for bone matrix synthesis and mineral deposition.',
                  color: 'text-blue-400',
                  bg: 'bg-blue-400/5',
                  border: 'border-blue-400/20',
                },
                {
                  step: '02',
                  title: 'GH Axis Amplification',
                  body: 'CJC-1295/Ipamorelin elevates systemic IGF-1 via liver secretion, creating a sustained anabolic environment that supports ongoing osteoblast activity in facial bone tissue.',
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-400/5',
                  border: 'border-emerald-400/20',
                },
                {
                  step: '03',
                  title: 'Collagen Matrix Remodeling',
                  body: 'GHK-Cu upregulates collagen I synthesis and activates TGF-β1 signaling, improving the quality of bone matrix and the overlying soft tissue collagen architecture simultaneously.',
                  color: 'text-purple-400',
                  bg: 'bg-purple-400/5',
                  border: 'border-purple-400/20',
                },
              ].map(({ step, title, body, color, bg, border }) => (
                <div key={step} className={`glass-card p-6 ${bg} border ${border}`}>
                  <div className={`text-4xl font-black mb-3 opacity-30 ${color}`}>{step}</div>
                  <h3 className={`font-black text-base mb-3 ${color}`}>{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUIZ ─────────────────────────────────────────── */}
        <section className="py-20 bg-dark-800 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#00ff88' }}>Build Your Stack</p>
              <h2 className="text-3xl font-black text-white mb-3">
                Find Your <span className="text-blue-400">Jawline Protocol</span>
              </h2>
              <p className="text-slate-400">
                3 questions. Personalized peptide recommendations based on your starting point and goals.
              </p>
            </div>
            <JawlineGoalQuiz />
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="py-24 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-slate-500">Common Questions</p>
              <h2 className="text-3xl font-black text-white">
                Jawline Peptide <span className="text-blue-400">FAQ</span>
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
              Start Your <span style={{ color: '#00ff88' }}>Jawline Protocol</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              IGF-1, GHK-Cu, BPC-157, CJC/Ipa — the complete non-surgical facial structure stack.
              The jaw responds to growth signals at any age.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2"
              >
                Shop Jawline Peptides <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/looksmaxxing-peptides" className="btn-secondary text-base px-8 py-4">
                Full Looksmaxxing Guide
              </Link>
            </div>
            <p className="text-slate-600 text-xs mt-2">Affiliate link — commission earned at no additional cost. Not medical advice.</p>
          </div>
        </section>

        <InternalLinks path="/jawline-peptide-guide" title="Related Looksmaxxing Guides" />
      </div>
    </>
  );
}
