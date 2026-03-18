import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Layers, Shield, Sparkles, TrendingUp, Brain, Activity, ChevronRight, Star, Zap } from 'lucide-react';
import { stacks } from '@/lib/stacks';

export const metadata: Metadata = {
  title: 'Peptide Stack Protocols | BPC-157, Anti-Aging & Body Recomp Stacks | BPC-157 Stack',
  description: 'Proven peptide stack protocols designed for maximum results. Healing, anti-aging, body recomposition, cognitive, and athlete performance stacks with complete dosing guides.',
  keywords: 'peptide stacks, BPC-157 stack, healing peptide stack, anti-aging protocol, body recomposition peptides, cognitive peptide stack',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const stackMeta: Record<string, { emoji: string; color: string; borderColor: string; glowColor: string; category: string; highlight: string }> = {
  'ultimate-healing': {
    emoji: '🛡️',
    color: 'emerald',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    category: 'Healing & Recovery',
    highlight: '50–70% faster recovery',
  },
  'anti-aging-longevity': {
    emoji: '⏳',
    color: 'purple',
    borderColor: 'border-purple-500/30',
    glowColor: 'rgba(168, 85, 247, 0.08)',
    category: 'Anti-Aging & Longevity',
    highlight: '28% mortality reduction',
  },
  'body-recomp': {
    emoji: '🔥',
    color: 'blue',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    category: 'Body Composition',
    highlight: '8–10× GH amplification',
  },
  'cognitive-stack': {
    emoji: '🧠',
    color: 'cyan',
    borderColor: 'border-cyan-500/30',
    glowColor: 'rgba(6, 182, 212, 0.08)',
    category: 'Cognitive Enhancement',
    highlight: 'BDNF + NAD+ neural optimization',
  },
  'athlete-performance': {
    emoji: '⚡',
    color: 'amber',
    borderColor: 'border-amber-500/30',
    glowColor: 'rgba(245, 158, 11, 0.08)',
    category: 'Athletic Performance',
    highlight: '2–3× faster recovery',
  },
};

const colorClasses: Record<string, { badge: string; text: string; bg: string; dot: string }> = {
  emerald: { badge: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10', text: 'text-emerald-400', bg: 'bg-emerald-400/10', dot: 'bg-emerald-400' },
  purple: { badge: 'text-purple-400 border-purple-400/30 bg-purple-400/10', text: 'text-purple-400', bg: 'bg-purple-400/10', dot: 'bg-purple-400' },
  blue: { badge: 'text-blue-400 border-blue-400/30 bg-blue-400/10', text: 'text-blue-400', bg: 'bg-blue-400/10', dot: 'bg-blue-400' },
  cyan: { badge: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10', text: 'text-cyan-400', bg: 'bg-cyan-400/10', dot: 'bg-cyan-400' },
  amber: { badge: 'text-amber-400 border-amber-400/30 bg-amber-400/10', text: 'text-amber-400', bg: 'bg-amber-400/10', dot: 'bg-amber-400' },
};

const difficultyStyle: Record<string, string> = {
  Beginner: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  Intermediate: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  Advanced: 'text-red-400 border-red-400/30 bg-red-400/10',
};

const howItWorksSteps = [
  { num: '01', title: 'Choose Your Goal', desc: 'Healing, anti-aging, body recomp, cognitive, or athletic performance — pick the protocol that matches your primary objective.' },
  { num: '02', title: 'Order the Peptides', desc: 'All peptides in every stack are available at Apollo Peptide Sciences — COA verified, US domestic, fast shipping.' },
  { num: '03', title: 'Follow the Protocol', desc: 'Each stack comes with exact dosing, timing, and cycle length. No guessing — just follow the research-backed protocol.' },
  { num: '04', title: 'Track and Optimize', desc: 'Results compound over 4–12 weeks. Track biomarkers, adjust doses, and stack complementary protocols as goals evolve.' },
];

export default function StacksPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #080614 50%, #060610 100%)' }}>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-neon-green/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4" style={{ color: '#00ff88' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: '#00ff88' }}>EXPERT-DESIGNED PEPTIDE STACKS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
            Peptide<br />
            <span style={{ color: '#00ff88' }}>Stack Protocols</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            Five evidence-based peptide stacks for every goal. Each protocol is based on peer-reviewed research
            with complete dosing guides, timing protocols, and expected outcomes.
          </p>
          <p className="text-slate-500 text-base mb-10 max-w-2xl mx-auto">
            Every stack is available at Apollo Peptide Sciences — COA verified, US domestic, ships 24–48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
              className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2">
              Shop All Peptides at Apollo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#stacks" className="btn-secondary text-base px-8 py-4">
              Browse All Stacks ↓
            </a>
          </div>

          {/* Stack count badges */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-16 max-w-3xl mx-auto">
            {stacks.map((stack) => {
              const meta = stackMeta[stack.id];
              const cols = colorClasses[meta?.color || 'emerald'];
              return (
                <Link key={stack.id} href={`/stacks/${stack.id}`}
                  className={`glass-card p-3 text-center text-xs font-medium transition-colors hover:${meta?.borderColor} group`}>
                  <div className="text-2xl mb-1">{meta?.emoji}</div>
                  <div className={`${cols.text} text-xs font-semibold leading-tight`}>{meta?.category}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stacks Grid */}
      <section id="stacks" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {stacks.map((stack, index) => {
            const meta = stackMeta[stack.id];
            const cols = colorClasses[meta?.color || 'emerald'];
            const isEven = index % 2 === 0;

            return (
              <div
                key={stack.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: meta?.glowColor,
                  border: `1px solid ${meta?.glowColor?.replace('0.08', '0.2')}`,
                }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0`}>
                  {/* Left — main info */}
                  <div className="lg:col-span-2 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-4xl">{meta?.emoji}</span>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${difficultyStyle[stack.difficulty]}`}>
                        {stack.difficulty}
                      </span>
                      <span className="text-xs text-slate-500 border border-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {stack.duration}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cols.badge}`}>
                        {meta?.highlight}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-white mb-2">{stack.name}</h2>
                    <p className={`${cols.text} font-semibold mb-4`}>{stack.tagline}</p>
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {stack.description.split('\n')[0]}
                    </p>

                    {/* Benefits list — first 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {stack.benefits.slice(0, 4).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className={`${cols.text} shrink-0 mt-0.5`}>→</span>
                          {b}
                        </div>
                      ))}
                    </div>

                    {/* Peptide chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {stack.peptides.map((p) => (
                        <Link
                          key={p}
                          href={`/products/${p}`}
                          className={`text-xs font-mono bg-dark-800 border ${meta?.borderColor} ${cols.text} px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity`}
                        >
                          {p.toUpperCase()}
                        </Link>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex gap-3 flex-wrap">
                      <Link href={`/stacks/${stack.id}`}
                        className="btn-secondary text-sm px-6 py-3 flex items-center gap-2">
                        Full Protocol Guide <ChevronRight className="w-4 h-4" />
                      </Link>
                      <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                        className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                        Shop This Stack <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right — protocol snapshot */}
                  <div className="p-6 md:p-8 border-t lg:border-t-0 lg:border-l" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Protocol Snapshot</div>

                    {/* Quick stats */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Goal</div>
                        <div className={`text-sm font-semibold ${cols.text}`}>{stack.goal}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Duration</div>
                        <div className="text-sm text-white">{stack.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Difficulty</div>
                        <div className="text-sm text-white">{stack.difficulty}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-1">Peptides in Stack</div>
                        <div className="text-sm text-white">{stack.peptides.length} compounds</div>
                      </div>
                    </div>

                    {/* Benefits preview */}
                    <div className="space-y-2 mb-6">
                      {stack.benefits.slice(4).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className={`${cols.dot} w-1 h-1 rounded-full mt-1.5 shrink-0`} style={{ display: 'inline-block' }} />
                          {b}
                        </div>
                      ))}
                    </div>

                    <Link href={`/stacks/${stack.id}`}
                      className={`w-full text-center block text-sm font-semibold py-3 rounded-xl transition-colors ${cols.bg} ${cols.text} border ${meta?.borderColor} hover:opacity-80`}>
                      View Full Protocol →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ background: 'rgba(0, 255, 136, 0.02)', borderTop: '1px solid rgba(0, 255, 136, 0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">How Peptide Stacking Works</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Peptide stacking is the practice of combining compounds that work on complementary mechanisms —
              producing results that are greater than the sum of individual peptides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {howItWorksSteps.map((step) => (
              <div key={step.num} className="glass-card p-6 text-center">
                <div className="text-4xl font-black mb-3" style={{ color: 'rgba(0, 255, 136, 0.2)' }}>{step.num}</div>
                <h3 className="text-white font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stack? Deep content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-white mb-6">
              Why Peptide Stacks Outperform<br />
              <span style={{ color: '#00ff88' }}>Single Peptides</span>
            </h2>
            <div className="space-y-5">
              <div className="glass-card p-5">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-400">→</span> Complementary Mechanisms
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Most biological goals involve multiple interacting systems. A healing peptide that works locally (BPC-157)
                  combined with one that works systemically (TB-500) covers more ground than either alone — both are necessary
                  for complete recovery.
                </p>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-400">→</span> Synergistic Effects
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Some combinations produce synergistic rather than merely additive effects. CJC-1295 + Ipamorelin
                  together produce 8–10× more GH than either alone — because they target two different receptors in the
                  same GH release pathway.
                </p>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-400">→</span> Multi-Level Targeting
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Aging, fat loss, and healing all involve cascades of molecular events. Targeting multiple steps
                  in the cascade — rather than just one — produces faster and more complete results with better
                  long-term maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Which stack is right for you */}
          <div className="glass-card p-8">
            <h3 className="text-white font-bold text-xl mb-6">Which Stack Is Right for You?</h3>
            <div className="space-y-4">
              {[
                {
                  goal: 'I have an injury that won\'t heal',
                  stack: 'Ultimate Healing Stack',
                  slug: 'ultimate-healing',
                  icon: '🛡️',
                  color: 'emerald',
                },
                {
                  goal: 'I want to slow or reverse aging',
                  stack: 'Anti-Aging Longevity Protocol',
                  slug: 'anti-aging-longevity',
                  icon: '⏳',
                  color: 'purple',
                },
                {
                  goal: 'I want to lose fat and build muscle',
                  stack: 'Body Recomposition Stack',
                  slug: 'body-recomp',
                  icon: '🔥',
                  color: 'blue',
                },
                {
                  goal: 'I want better focus and less anxiety',
                  stack: 'Cognitive Enhancement Stack',
                  slug: 'cognitive-stack',
                  icon: '🧠',
                  color: 'cyan',
                },
                {
                  goal: 'I\'m an athlete pushing limits',
                  stack: 'Athlete Performance Stack',
                  slug: 'athlete-performance',
                  icon: '⚡',
                  color: 'amber',
                },
              ].map((item) => {
                const cols = colorClasses[item.color];
                return (
                  <Link key={item.slug} href={`/stacks/${item.slug}`}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-slate-400 text-xs mb-0.5">&quot;{item.goal}&quot;</div>
                      <div className={`text-sm font-semibold ${cols.text} group-hover:underline`}>→ {item.stack}</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${cols.text} shrink-0`} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🔬', title: 'Research Grade', sub: 'COA verified purity on every batch' },
              { icon: '🇺🇸', title: 'US Domestic', sub: 'Ships from US, arrives in 2–3 days' },
              { icon: '📋', title: '100+ Studies', sub: 'Every protocol backed by published research' },
              { icon: '⚡', title: 'Fast Processing', sub: 'Orders processed same day' },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-bold text-sm">{item.title}</div>
                <div className="text-slate-500 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/3 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🧬</div>
              <h2 className="text-3xl font-black text-white mb-4">
                Build Your Peptide Stack Today
              </h2>
              <p className="text-slate-300 text-lg mb-2 max-w-xl mx-auto">
                All peptides across every stack available at Apollo Peptide Sciences —
                the most trusted research peptide supplier.
              </p>
              <p className="text-slate-500 text-sm mb-8">COA verified · US domestic · 24–48hr shipping · Research grade</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={AFFILIATE} target="_blank" rel="noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  Shop at Apollo Peptide Sciences <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/products" className="btn-secondary text-base px-8 py-4">
                  Browse All Peptides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
