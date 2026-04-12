import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Layers, ChevronRight, Star, Zap, Shield, BookOpen, Users } from 'lucide-react';
import { stacks } from '@/lib/stacks';
import InternalLinks from '@/components/InternalLinks';
import StackQuiz from '@/components/StackQuiz';

export const metadata: Metadata = {
  title: 'Peptide Stack Protocols | BPC-157, Anti-Aging & Body Recomp Stacks | BPC-157 Stack',
  description: 'Proven peptide stack protocols designed for maximum results. Healing, anti-aging, body recomposition, cognitive, and athlete performance stacks with complete dosing guides.',
  keywords: 'peptide stacks, BPC-157 stack, healing peptide stack, anti-aging protocol, body recomposition peptides, cognitive peptide stack',
  openGraph: {
    title: 'Peptide Stack Protocols | BPC-157, Anti-Aging & Body Recomp Stacks',
    description: 'Proven peptide stack protocols for healing, anti-aging, body recomposition, cognitive performance, and athletics.',
    type: 'website',
    url: 'https://bp157stack.com/stacks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptide Stack Protocols | BPC-157, Anti-Aging & Body Recomp Stacks',
    description: 'Proven peptide stack protocols for healing, anti-aging, body recomposition, and cognitive performance.',
  },
};

const SOURCE_URL = '/out';

const stackMeta: Record<string, { emoji: string; color: string; borderColor: string; glowColor: string; category: string; highlight: string; difficulty: string; weeklyInjections: string; firstResults: string; bestFor: string; notFor: string; cycleLength: string }> = {
  'ultimate-healing': {
    emoji: '🛡️',
    color: 'emerald',
    borderColor: 'border-emerald-200',
    glowColor: 'rgba(16, 185, 129, 0.08)',
    category: 'Healing & Recovery',
    highlight: '50–70% faster recovery',
    difficulty: 'Beginner',
    weeklyInjections: '7–14',
    firstResults: '1–2 weeks',
    bestFor: 'Post-surgical recovery, sports injuries, chronic tendon/ligament issues',
    notFor: 'Users with no active injury or recovery goal',
    cycleLength: '4–12 weeks',
  },
  'anti-aging-longevity': {
    emoji: '⏳',
    color: 'purple',
    borderColor: 'border-blue-200',
    glowColor: 'rgba(168, 85, 247, 0.08)',
    category: 'Anti-Aging & Longevity',
    highlight: '28% mortality reduction',
    difficulty: 'Intermediate',
    weeklyInjections: '7–14',
    firstResults: '1–4 weeks (sleep); 3–6 months (anti-aging markers)',
    bestFor: 'Adults 40+ focused on biological age reversal and longevity',
    notFor: 'Short-term thinkers expecting rapid visible changes',
    cycleLength: '10-day cycles × 2/year + ongoing components',
  },
  'body-recomp': {
    emoji: '🔥',
    color: 'blue',
    borderColor: 'border-blue-200',
    glowColor: 'rgba(59, 130, 246, 0.08)',
    category: 'Body Composition',
    highlight: '8–10× GH amplification',
    difficulty: 'Intermediate',
    weeklyInjections: '14',
    firstResults: '4–6 weeks',
    bestFor: 'Athletes and active users wanting fat loss with muscle retention',
    notFor: 'Sedentary users — this stack amplifies results from training, not a replacement',
    cycleLength: '8–16 weeks',
  },
  'cognitive-stack': {
    emoji: '🧠',
    color: 'cyan',
    borderColor: 'border-cyan-200',
    glowColor: 'rgba(6, 182, 212, 0.08)',
    category: 'Cognitive Enhancement',
    highlight: 'BDNF + NAD+ neural optimization',
    difficulty: 'Intermediate',
    weeklyInjections: '3–7',
    firstResults: '1–3 days (Semax); 1–3 weeks (cumulative)',
    bestFor: 'Knowledge workers, high-performers, individuals with brain fog or anxiety',
    notFor: 'Users on SSRIs or MAOIs without medical supervision',
    cycleLength: '4–8 weeks on, 2–4 weeks off',
  },
  'athlete-performance': {
    emoji: '⚡',
    color: 'amber',
    borderColor: 'border-amber-200',
    glowColor: 'rgba(245, 158, 11, 0.08)',
    category: 'Athletic Performance',
    highlight: '2–3× faster recovery',
    difficulty: 'Advanced',
    weeklyInjections: '14–21',
    firstResults: '1–2 weeks (recovery speed)',
    bestFor: 'Competitive athletes, CrossFit, endurance sports, strength training',
    notFor: 'Beginners new to peptides — start with healing stack first',
    cycleLength: '8–16 weeks',
  },
};

const colorClasses: Record<string, { badge: string; text: string; bg: string; dot: string }> = {
  emerald: { badge: 'text-emerald-600 border-emerald-200 bg-emerald-50', text: 'text-emerald-600', bg: 'bg-emerald-50', dot: 'bg-emerald-600' },
  purple: { badge: 'text-blue-600 border-blue-200 bg-blue-50', text: 'text-blue-600', bg: 'bg-blue-50', dot: 'bg-blue-600' },
  blue: { badge: 'text-blue-600 border-blue-200 bg-blue-50', text: 'text-blue-600', bg: 'bg-blue-50', dot: 'bg-blue-600' },
  cyan: { badge: 'text-cyan-600 border-cyan-200 bg-cyan-50', text: 'text-cyan-600', bg: 'bg-cyan-50', dot: 'bg-cyan-600' },
  amber: { badge: 'text-amber-600 border-amber-200 bg-amber-50', text: 'text-amber-600', bg: 'bg-amber-50', dot: 'bg-amber-600' },
};

const difficultyStyle: Record<string, string> = {
  Beginner: 'text-emerald-600 border-emerald-200 bg-emerald-50',
  Intermediate: 'text-amber-600 border-amber-200 bg-amber-50',
  Advanced: 'text-red-600 border-red-200 bg-red-50',
};

const howItWorksSteps = [
  { num: '01', title: 'Choose Your Goal', desc: 'Healing, anti-aging, body recomp, cognitive, or athletic performance — pick the protocol that matches your primary objective.' },
  { num: '02', title: 'Source the Peptides', desc: 'Use a COA-verified, third-party tested vendor with US domestic shipping for every compound in your stack.' },
  { num: '03', title: 'Follow the Protocol', desc: 'Each stack comes with exact dosing, timing, and cycle length. No guessing — just follow the research-backed protocol.' },
  { num: '04', title: 'Track and Optimize', desc: 'Results compound over 4–12 weeks. Track biomarkers, adjust doses, and stack complementary protocols as goals evolve.' },
];

const stackFaqs = [
  {
    q: 'Can I mix multiple peptides into the same syringe?',
    a: 'Many peptides can be mixed in the same syringe if they are compatible. BPC-157 and TB-500 are commonly combined in one injection. CJC-1295 and Ipamorelin are almost always injected together. However, do not mix peptides that have very different reconstitution requirements or pH sensitivities. Check peptide-specific guidance before combining, and always use freshly drawn amounts — do not pre-mix and store combined syringes.',
  },
  {
    q: 'Do stacks work for complete beginners or should I start with a single peptide?',
    a: 'Most beginners can start with a well-designed stack — the Ultimate Healing Stack (BPC-157 + TB-500) is actually the most beginner-friendly approach because both peptides are well-tolerated, the dosing is straightforward, and results are typically clear and measurable. The one exception: start with a single peptide first if you have no injection experience or significant anxiety about the protocol. Running BPC-157 solo for 2 weeks builds confidence before adding TB-500.',
  },
  {
    q: 'How do I transition between stacks — for example, moving from healing to anti-aging?',
    a: 'Transition timing depends on your goal completion. For healing stacks: transition when the injury is 80–90% resolved, typically at 8–12 weeks. You can overlap — add anti-aging compounds in the final 2 weeks of your healing cycle. GHK-Cu (in the anti-aging stack) also supports tissue healing, making it a natural bridge. There is generally no washout period required between most peptide stacks — they work through different mechanisms with no cross-tolerance or accumulation issues.',
  },
  {
    q: 'Do I need all the peptides in a stack, or can I start with fewer?',
    a: 'You can absolutely start with fewer compounds and add over time. The recommended entry point for each stack: Healing — start with BPC-157 alone, add TB-500 in week 2. Anti-Aging — start with Epithalon cycle, add GHK-Cu in month 2. Body Recomp — start with CJC-1295 + Ipamorelin (they are essentially one compound functionally), add BPC-157 in week 3. Starting lean and adding compounds allows you to attribute effects and manage costs.',
  },
  {
    q: 'What blood work should I get before starting a peptide stack?',
    a: 'Baseline blood work is highly recommended before starting any stack, especially for anti-aging or body composition protocols. Minimum panel: CBC (complete blood count), CMP (comprehensive metabolic panel), fasting glucose + insulin, and for body recomp or anti-aging: IGF-1, testosterone, LH/FSH, thyroid panel. This baseline lets you measure actual changes and catch any unexpected responses. Retest at 8–12 weeks into the protocol for meaningful comparison data.',
  },
  {
    q: 'How do I know if my stack is working?',
    a: 'Track both subjective and objective markers. Subjective: sleep quality, energy levels, recovery speed, mood, pain levels (for healing). Objective: blood work before and after, body composition measurements (for recomp), strength or performance metrics (for athletic). Most stacks show clear subjective signals within 2–4 weeks. Anti-aging stacks are the exception — the meaningful changes (telomere length, biological age markers) require 3–6 months and specific testing to confirm.',
  },
  {
    q: 'What should I do if I experience side effects from a stack?',
    a: 'First, identify whether the effect is expected or unexpected. Common expected effects: water retention with GH peptides (usually resolves in week 2), vivid dreams with Epithalon (the pineal effect — normal), minor injection site redness (normal if mild). If experiencing unexpected effects: stop the most recently added compound first to identify the cause. If symptoms persist, stop the entire stack and consult a physician. Peptides have excellent safety profiles, but individual responses vary. Do not add multiple new compounds simultaneously — this makes troubleshooting impossible.',
  },
  {
    q: 'Do stacks work better than single peptides — is stacking always worth it?',
    a: 'Stacks are worth it when your goal is complex or involves multiple biological systems. For a simple acute injury: BPC-157 alone may be sufficient. For comprehensive healing of a serious injury: the BPC-157 + TB-500 stack outperforms either alone because they address different repair mechanisms. For anti-aging: a multi-compound stack dramatically outperforms any single longevity peptide because aging is multi-factorial. The rule of thumb: use a single peptide for a single, focused goal. Use a stack when your goal involves multiple systems or when you want the fastest, most complete results.',
  },
];

export default function StacksPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-50 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold tracking-wide text-amber-600">EXPERT-DESIGNED PEPTIDE STACKS</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black text-gray-900 leading-tight mb-6">
            Peptide<br />
            <span className="text-amber-600">Stack Protocols</span>
          </h1>
          <p className="text-gray-800 text-xl leading-relaxed mb-4 max-w-3xl mx-auto">
            Five evidence-based peptide stacks for every goal. Each protocol is based on peer-reviewed research
            with complete dosing guides, timing protocols, and expected outcomes.
          </p>
          <p className="text-gray-600 text-base mb-10 max-w-2xl mx-auto">
            Every stack is available from our recommended supplier — COA verified, US domestic, ships 24–48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
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

      {/* ── STACK COMPARISON MATRIX ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <Layers className="w-6 h-6 text-amber-600" />
          <h2 className="text-3xl font-black text-gray-900">Stack Comparison Matrix</h2>
        </div>
        <p className="text-gray-700 mb-8 max-w-3xl">Compare all five stacks side-by-side across every relevant dimension to find the right fit for your goals, experience level, and commitment.</p>

        <div className="overflow-x-auto rounded-2xl border border-amber-200">
          <table className="w-full text-xs min-w-[900px]">
            <thead>
              <tr className="bg-amber-50">
                <th className="text-left py-4 px-4 text-gray-700 font-semibold w-36">Stack</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">Primary Goal</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">Difficulty</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">Cycle</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">Injections/wk</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">First Results</th>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">Best For</th>
                <th className="text-left py-4 px-4 text-red-600 font-semibold">Not For</th>
              </tr>
            </thead>
            <tbody>
              {stacks.map((stack, i) => {
                const meta = stackMeta[stack.id];
                const cols = colorClasses[meta?.color || 'emerald'];
                return (
                  <tr key={stack.id} style={{ borderTop: '1px solid rgba(0,0,0,0.06)', background: i % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent' }}>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{meta?.emoji}</span>
                        <Link href={`/stacks/${stack.id}`} className={`font-bold ${cols.text} hover:underline leading-tight`}>{stack.name}</Link>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-800">{stack.goal}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold border ${difficultyStyle[stack.difficulty]}`}>{stack.difficulty}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-700 whitespace-nowrap">{meta?.cycleLength || stack.duration}</td>
                    <td className="py-4 px-4 text-gray-800 font-mono">{meta?.weeklyInjections || '7'}</td>
                    <td className="py-4 px-4 text-gray-800">{meta?.firstResults || '1–2 weeks'}</td>
                    <td className="py-4 px-4 text-gray-700 max-w-[160px]">{meta?.bestFor}</td>
                    <td className="py-4 px-4 text-red-500 max-w-[160px]">{meta?.notFor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stacks Grid */}
      <section id="stacks" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">All Stack Protocols</h2>
        <p className="text-gray-700 mb-10">Full detail on each protocol — benefits, peptides, and how to get started.</p>
        <div className="space-y-8">
          {stacks.map((stack, index) => {
            const meta = stackMeta[stack.id];
            const cols = colorClasses[meta?.color || 'emerald'];

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
                      <span className="text-xs text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {stack.duration}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cols.badge}`}>
                        {meta?.highlight}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black text-gray-900 mb-2">{stack.name}</h2>
                    <p className={`${cols.text} font-semibold mb-4`}>{stack.tagline}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {stack.description.split('\n')[0]}
                    </p>

                    {/* Benefits list — first 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {stack.benefits.slice(0, 4).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-sm text-gray-800">
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
                          className={`text-xs font-mono bg-gray-100 text-gray-800 border border-gray-200 px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity`}
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
                      <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                        className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
                        View This Stack <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right — protocol snapshot */}
                  <div className="p-6 md:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Protocol Snapshot</div>

                    {/* Quick stats */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Goal</div>
                        <div className={`text-sm font-semibold ${cols.text}`}>{stack.goal}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Duration</div>
                        <div className="text-sm text-gray-900">{stack.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Difficulty</div>
                        <div className="text-sm text-gray-900">{stack.difficulty}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Peptides in Stack</div>
                        <div className="text-sm text-gray-900">{stack.peptides.length} compounds</div>
                      </div>
                    </div>

                    {/* Benefits preview */}
                    <div className="space-y-2 mb-6">
                      {stack.benefits.slice(4).map((b) => (
                        <div key={b} className="flex items-start gap-2 text-xs text-gray-700">
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

      {/* ── STACK QUIZ WIDGET ── */}
      <section className="py-16 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-amber-600" />
              <h2 className="text-3xl font-black text-gray-900">Not Sure Which Stack?</h2>
            </div>
            <p className="text-gray-700 max-w-xl mx-auto">Answer 5 questions about your goals, experience, and commitment — and get a personalized stack recommendation with estimated cost and next steps.</p>
          </div>
          <StackQuiz />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">How Peptide Stacking Works</h2>
            <p className="text-gray-700 max-w-xl mx-auto">
              Peptide stacking is the practice of combining compounds that work on complementary mechanisms —
              producing results that are greater than the sum of individual peptides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {howItWorksSteps.map((step) => (
              <div key={step.num} className="glass-card p-6 text-center">
                <div className="text-4xl font-black mb-3 text-amber-200">{step.num}</div>
                <h3 className="text-gray-900 font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO BUILD YOUR OWN STACK ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-6 h-6 text-amber-600" />
          <h2 className="text-3xl font-black text-gray-900">How to Build Your Own Stack</h2>
        </div>
        <p className="text-gray-700 mb-10 max-w-3xl">The principles behind the pre-built stacks — so you can design intelligently for your specific situation.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-600">→</span> Synergistic vs. Redundant Peptides
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-3">The key to effective stacking is choosing peptides that work on different — but complementary — mechanisms. BPC-157 (local tissue repair) + TB-500 (systemic actin remodeling) are synergistic. Adding a third healing peptide that works identically to one of them would be redundant, not additive. Ask: does each compound in my stack do something the others cannot?</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-600">→</span> Loading and Maintenance Phases
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">Some protocols benefit from a loading phase — higher doses for the first 2 weeks to rapidly establish the target effect, followed by a maintenance dose for the cycle duration. GH peptides (CJC/Ipamorelin) typically do not use a loading phase, while healing protocols sometimes front-load BPC-157 at twice-daily dosing for the first 2 weeks, then drop to once daily. Know your peptide's pharmacodynamics before designing a loading phase.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-600">→</span> Cycling Principles
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">Most peptides do not require mandatory cycling (they do not cause receptor downregulation or suppression), but cycling prevents tolerance and allows cost-effective use. Standard approach: 8–12 weeks on, 4 weeks off for continuous-use peptides. Pulse protocols (5 days on, 2 days off) can extend the effective window of GH peptides. Epithalon and similar short-cycle peptides are designed for infrequent, intense cycling rather than continuous use.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-600">→</span> Combinations to Avoid
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-3">There are very few genuinely antagonistic peptide combinations — peptides generally do not interfere with each other's mechanisms. The caution zones: (1) Multiple GH-releasing compounds simultaneously can overstimulate the axis — stick to one GHRH (CJC-1295) + one GHRP (Ipamorelin) approach, not two GHRHs together. (2) Cognitive peptides with strong anxiolytic effects (Selank) may blunt the stimulatory effects of others — track carefully. (3) When stacking 4+ compounds, add one at a time to identify causes of any effects.</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3 flex items-center gap-2">
                <span className="text-amber-600">→</span> Cost Optimization Strategies
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Prioritize by impact', detail: 'Add the highest-impact compound first and add others as budget allows — do not compromise dose for variety' },
                  { label: 'Larger vials', detail: 'Cost per mg drops significantly with 10mg vials vs 2mg vials for the same peptide' },
                  { label: 'Cycle timing', detail: 'Run expensive compounds during the most critical phase, not indefinitely' },
                  { label: 'Front-load important periods', detail: 'Concentrate your most expensive stack during high-demand periods (intense training blocks, post-surgery)' },
                ].map((item) => (
                  <li key={item.label} className="text-sm">
                    <span className="text-amber-600 font-semibold">{item.label}:</span>
                    <span className="text-gray-700 ml-2 text-xs">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK OF THE MONTH: WOLVERINE ── */}
      <section className="py-16 bg-emerald-50 border-t border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-emerald-600" />
            <div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Stack of the Month</div>
              <h2 className="text-3xl font-black text-gray-900">The Wolverine Stack</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main description */}
            <div className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6 border border-emerald-200">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">What Makes the Wolverine Stack Different</div>
                <p className="text-gray-800 text-base leading-relaxed mb-4">The Wolverine Stack — BPC-157 + TB-500 — earns its name from the fictional character's supernatural healing ability. It represents the most complete tissue repair protocol available, combining two peptides with entirely different but perfectly complementary mechanisms. BPC-157 works at the local injury site, recruiting repair factors and regenerating vasculature. TB-500 drives systemic repair through actin regulation and stem cell migration. Together, they cover everything from tendon microtears to muscle belly injuries to ligament damage.</p>
                <p className="text-gray-800 text-base leading-relaxed">What sets this month's spotlight on it: the growing volume of anecdotal evidence from athletes recovering from previously "career-threatening" injuries. Injuries that orthopaedic surgeons have projected 6–12 month recovery timelines have resolved in 6–10 weeks on this protocol. The research base behind both peptides is extensive — over 200 studies on BPC-157 alone — making this the most evidence-backed healing stack available.</p>
              </div>

              <div className="glass-card p-6">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">Who It Is For</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Post-surgical rehabilitation',
                    'ACL, rotator cuff, or Achilles injuries',
                    'Chronic tendinopathy (years-long)',
                    'Stress fractures and bone density repair',
                    'Overuse injuries from high-volume training',
                    'Gut lining repair and IBD management',
                    'Anyone whose injury has "plateaued" with standard PT',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="text-emerald-600 shrink-0 mt-0.5">→</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">The Protocol</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { compound: 'BPC-157', dose: '250–500mcg', timing: 'Twice daily (AM + PM)', route: 'SC injection near injury site', duration: '4–12 weeks' },
                    { compound: 'TB-500', dose: '2.5–5mg/week', timing: 'Once weekly (or split BIW)', route: 'SC injection (any site)', duration: '4–12 weeks' },
                  ].map((item) => (
                    <div key={item.compound} className="rounded-xl p-4 bg-emerald-50 border border-emerald-200">
                      <div className="text-gray-900 font-black mb-2">{item.compound}</div>
                      <div className="space-y-1">
                        {Object.entries(item).filter(([k]) => k !== 'compound').map(([k, v]) => (
                          <div key={k} className="text-xs">
                            <span className="text-gray-500 capitalize">{k}: </span>
                            <span className="text-gray-800">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Success story + CTA */}
            <div className="space-y-5">
              <div className="glass-card p-6 border border-emerald-200">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" /> Community Result
                </div>
                <div className="text-gray-500 text-xs mb-3 italic">(Composite of reported experiences — individual results vary)</div>
                <p className="text-gray-800 text-base leading-relaxed mb-3">"Partial Achilles tear — was told 4–6 months of non-weight-bearing recovery. Started BPC-157 + TB-500 at week 3 post-injury. By week 8 I was jogging. By week 12 I was back to full training. The physio couldn't believe the imaging at the 3-month mark."</p>
                <p className="text-gray-800 text-base leading-relaxed">"Chronic shoulder (rotator cuff) that had been limiting me for 2 years despite surgery and PT. One 8-week cycle and the pain dropped by 80%. Range of motion fully restored. Second cycle completed it."</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">These are anecdotal accounts. Peptides are research compounds. Consult a physician before use.</div>
                </div>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="text-2xl mb-3">🛡️</div>
                <h3 className="text-gray-900 font-black text-xl mb-2">Ready to Start?</h3>
                <p className="text-gray-700 text-base mb-5">Get COA-verified BPC-157 and TB-500 from our recommended supplier.</p>
                <div className="space-y-3">
                  <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                    className="w-full btn-cta text-sm py-3 flex items-center justify-center gap-2">
                    View the Wolverine Stack <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link href="/stacks/ultimate-healing" className="w-full btn-secondary text-sm py-3 flex items-center justify-center gap-2">
                    Full Protocol Guide <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Stack? Deep content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">
              Why Peptide Stacks Outperform<br />
              <span className="text-amber-600">Single Peptides</span>
            </h2>
            <div className="space-y-5">
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-600">→</span> Complementary Mechanisms
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Most biological goals involve multiple interacting systems. A healing peptide that works locally (BPC-157)
                  combined with one that works systemically (TB-500) covers more ground than either alone — both are necessary
                  for complete recovery.
                </p>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-600">→</span> Synergistic Effects
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Some combinations produce synergistic rather than merely additive effects. CJC-1295 + Ipamorelin
                  together produce 8–10× more GH than either alone — because they target two different receptors in the
                  same GH release pathway.
                </p>
              </div>
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-bold mb-2 flex items-center gap-2">
                  <span className="text-emerald-600">→</span> Multi-Level Targeting
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Aging, fat loss, and healing all involve cascades of molecular events. Targeting multiple steps
                  in the cascade — rather than just one — produces faster and more complete results with better
                  long-term maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Which stack is right for you */}
          <div className="glass-card p-8">
            <h3 className="text-gray-900 font-black text-xl mb-6">Which Stack Is Right for You?</h3>
            <div className="space-y-4">
              {[
                { goal: 'I have an injury that won\'t heal', stack: 'Ultimate Healing Stack', slug: 'ultimate-healing', icon: '🛡️', color: 'emerald' },
                { goal: 'I want to slow or reverse aging', stack: 'Anti-Aging Longevity Protocol', slug: 'anti-aging-longevity', icon: '⏳', color: 'purple' },
                { goal: 'I want to lose fat and build muscle', stack: 'Body Recomposition Stack', slug: 'body-recomp', icon: '🔥', color: 'blue' },
                { goal: 'I want better focus and less anxiety', stack: 'Cognitive Enhancement Stack', slug: 'cognitive-stack', icon: '🧠', color: 'cyan' },
                { goal: 'I\'m an athlete pushing limits', stack: 'Athlete Performance Stack', slug: 'athlete-performance', icon: '⚡', color: 'amber' },
              ].map((item) => {
                const cols = colorClasses[item.color];
                return (
                  <Link key={item.slug} href={`/stacks/${item.slug}`}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 transition-colors group">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-700 text-xs mb-0.5">&quot;{item.goal}&quot;</div>
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

      {/* ── STACK FAQ ── */}
      <section className="py-16 bg-gray-100 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-amber-600" />
            <h2 className="text-3xl font-black text-gray-900">Frequently Asked Stack Questions</h2>
          </div>
          <p className="text-gray-700 mb-10">The most important questions before starting a peptide stack protocol — answered directly.</p>
          <div className="space-y-3">
            {stackFaqs.map(({ q, a }) => (
              <details key={q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900 font-semibold text-sm">{q}</span>
                  <span className="text-amber-600 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-gray-700 text-base leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🔬', title: 'COA Verified', sub: 'Certificate of analysis on every batch' },
              { icon: '🇺🇸', title: 'US Domestic', sub: 'Ships from US, arrives in 2–3 days' },
              { icon: '📋', title: '100+ Studies', sub: 'Every protocol backed by clinical studies' },
              { icon: '⚡', title: 'Fast Processing', sub: 'Orders processed same day' },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-gray-900 font-bold text-sm">{item.title}</div>
                <div className="text-gray-600 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent" />
            <div className="relative">
              <div className="text-5xl mb-6">🧬</div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Build Your Peptide Stack Today
              </h2>
              <p className="text-gray-800 text-lg mb-2 max-w-xl mx-auto">
                All peptides across every stack available from our recommended supplier —
                the most trusted peptide supplier.
              </p>
              <p className="text-gray-600 text-sm mb-8">COA verified · US domestic · 24–48hr shipping</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/products" className="btn-secondary text-base px-8 py-4">
                  Browse All Peptides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/stacks" />
    </div>
  );
}
