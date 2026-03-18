import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, TrendingUp, Brain, FlaskConical, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { products } from '@/lib/products';
import { stacks } from '@/lib/stacks';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'BPC-157 Stack | #1 Peptide Protocols for Healing, Performance & Longevity',
  description: 'Discover the most effective BPC-157 stacks and peptide protocols. Science-backed guides for injury healing, body recomposition, anti-aging, and cognitive enhancement.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const marqueeItems = [
  'BPC-157 — Ultimate Healer', 'TB-500 — Systemic Repair', 'GHK-Cu — Anti-Aging',
  'Epithalon — Telomere Extension', 'Ipamorelin — Clean GH Release', 'Selank — Anti-Anxiety',
  'Semax — Cognitive Enhancement', 'SS-31 — Mitochondrial Repair', 'MOTS-c — Metabolic Reset',
];

const features = [
  { icon: Shield, title: 'Injury Healing', desc: 'BPC-157 + TB-500 stacks heal tendons, ligaments, gut, and muscle in half the time.', href: '/healing', color: 'text-emerald-400' },
  { icon: TrendingUp, title: 'Body Composition', desc: 'Ipamorelin + CJC-1295 + HGH Frag for lean muscle, fat loss, and sleep optimization.', href: '/body-composition', color: 'text-blue-400' },
  { icon: Zap, title: 'Anti-Aging', desc: 'Epithalon + GHK-Cu + SS-31 for telomere extension, gene reset, and mitochondrial repair.', href: '/anti-aging', color: 'text-purple-400' },
  { icon: Brain, title: 'Cognitive Edge', desc: 'Semax + Selank for anxiety elimination, BDNF boost, and peak mental performance.', href: '/stacks/cognitive-stack', color: 'text-amber-400' },
];

const faqs = [
  { q: 'What is BPC-157 and why is it so popular?', a: 'BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from human gastric juice. It\'s the most researched healing peptide — proven to accelerate tendon, ligament, muscle, and gut repair with an exceptional safety profile. It has no known LD50 in animal studies.' },
  { q: 'Do I need to inject peptides?', a: 'Not always. BPC-157 is one of the few peptides that maintains effectiveness when taken orally — making it accessible without injections. Most other peptides are more effective via subcutaneous injection, which is painless with an insulin needle.' },
  { q: 'What\'s the best BPC-157 stack for healing?', a: 'BPC-157 + TB-500 is the gold standard healing stack. BPC-157 handles local, targeted repair while TB-500 provides systemic body-wide healing. Together they reduce recovery time by 50-70%.' },
  { q: 'Are peptides safe?', a: 'Research peptides have excellent safety profiles when used at research doses. BPC-157 specifically has no known LD50 and no hormonal activity. Always source from a reputable supplier like Apollo Peptide Sciences and consult a healthcare provider.' },
  { q: 'How long before I see results from BPC-157?', a: 'Most users report pain reduction and initial healing within 2-4 days. Measurable structural healing of tendons/ligaments occurs within 4-8 weeks. Gut healing typically takes 1-3 weeks.' },
];

const testimonials = [
  { text: 'BPC-157 + TB-500 healed a torn Achilles that my doctor said would take 9 months. I was training again in 8 weeks.', name: 'Marcus R.', role: 'Competitive CrossFitter' },
  { text: 'Ipamorelin changed my sleep quality overnight. I\'m recovering from workouts in half the time. The body recomp is real.', name: 'James K.', role: 'Bodybuilder' },
  { text: 'GHK-Cu + Epithalon made me look 5 years younger in 3 months. Skin density, energy, sleep — everything improved.', name: 'Sarah M.', role: 'Anti-Aging Enthusiast' },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const featuredStacks = stacks.slice(0, 3);

  return (
    <div className="grid-bg">
      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
              <FlaskConical className="w-4 h-4 text-neon-green" />
              <span className="text-neon-green text-sm font-medium">#1 BPC-157 Protocol Resource</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 text-white">
              Heal Faster.<br />
              <span className="gradient-text">Age Slower.</span><br />
              Perform Better.
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Science-backed BPC-157 stacks and peptide protocols curated by experts.
              Whether you&apos;re healing an injury, optimizing body composition, or fighting aging —
              we have the exact protocol.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={AFFILIATE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base px-8 py-4 flex items-center gap-2"
              >
                Shop Apollo Peptides <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/stacks" className="btn-secondary text-base px-8 py-4">
                View All Stacks
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              {['35+ Research Peptides', 'COA Verified', 'US Domestic Shipping', 'Expert Protocols'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-neon-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== MARQUEE ======================== */}
      <div className="bg-dark-800 border-y border-neon-green/10 py-4 overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-neon-green text-sm font-mono font-medium shrink-0 flex items-center gap-3">
              <Zap className="w-3 h-3" /> {item}
            </span>
          ))}
        </div>
      </div>

      {/* ======================== GOAL SELECTOR ======================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            What Are You <span className="gradient-text">Optimizing?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose your goal and we&apos;ll show you the exact peptide stack.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc, href, color }) => (
            <Link key={title} href={href} className="glass-card p-6 group cursor-pointer block">
              <Icon className={`w-8 h-8 ${color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
              <span className="text-neon-green text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                See Protocol <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ======================== STACKS ======================== */}
      <section className="bg-dark-800 border-y border-neon-green/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                Top <span className="gradient-text">Peptide Stacks</span>
              </h2>
              <p className="text-slate-400">Proven combinations for maximum results.</p>
            </div>
            <Link href="/stacks" className="btn-secondary text-sm hidden sm:block">
              All Stacks →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {featuredStacks.map((stack) => (
              <div key={stack.id} className="glass-card p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                    stack.difficulty === 'Beginner' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' :
                    stack.difficulty === 'Intermediate' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
                    'text-red-400 border-red-400/30 bg-red-400/10'
                  }`}>
                    {stack.difficulty}
                  </span>
                  <span className="text-slate-500 text-xs">{stack.duration}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-neon-green transition-colors">
                  {stack.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{stack.tagline}</p>
                <div className="flex flex-wrap gap-1 mb-5">
                  {stack.peptides.map((p) => (
                    <span key={p} className="text-xs bg-dark-700 text-slate-300 px-2 py-0.5 rounded">
                      {p.toUpperCase()}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href={`/stacks/${stack.id}`} className="btn-secondary text-xs px-3 py-2 flex-1 text-center">
                    View Protocol
                  </Link>
                  <a
                    href={AFFILIATE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-xs px-3 py-2"
                  >
                    Shop →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Get All Stack Peptides at Apollo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ======================== PRODUCTS ======================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Featured <span className="gradient-text">Peptides</span>
            </h2>
            <p className="text-slate-400">The most effective research peptides, fully documented.</p>
          </div>
          <Link href="/products" className="btn-secondary text-sm hidden sm:block">
            All Peptides →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/products" className="btn-secondary text-base px-8 py-4 mr-4">
            View All Peptides
          </Link>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Shop at Apollo Peptides <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="bg-dark-800 border-y border-neon-green/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Real <span className="gradient-text">Results</span>
            </h2>
            <p className="text-slate-400">What users are experiencing with these protocols.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== FAQ ======================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="btn-secondary text-sm px-6 py-3">
            View All FAQs
          </Link>
        </div>
      </section>

      {/* ======================== FINAL CTA ======================== */}
      <section className="relative overflow-hidden py-24 bg-dark-800 border-t border-neon-green/10">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-blue-500/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Ready to <span className="gradient-text">Start Healing?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Get your peptides from Apollo Peptide Sciences — COA-verified, US domestic, and shipped fast.
            Use our protocols. See results in weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta text-lg px-10 py-5 flex items-center gap-2"
            >
              Shop Apollo Peptides Now <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/guide" className="btn-secondary text-lg px-10 py-5">
              Read the Full Guide
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-6">
            Research purposes only. Not medical advice.
          </p>
        </div>
      </section>
    </div>
  );
}
