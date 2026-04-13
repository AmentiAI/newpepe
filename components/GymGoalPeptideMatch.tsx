'use client';

import { useState } from 'react';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

type GymGoal = 'Fat Loss' | 'Muscle Building' | 'Recovery' | 'Performance' | 'Body Recomp';

interface PeptideRec {
  name: string;
  why: string;
  dose: string;
}

interface GoalMatch {
  peptides: PeptideRec[];
  timeline: string;
  costEstimate: string;
  tagline: string;
  color: string;
  bg: string;
  border: string;
  accentHex: string;
}

const MATCHES: Record<GymGoal, GoalMatch> = {
  'Fat Loss': {
    tagline: 'Optimize the GH axis. Stack with GLP-1 for maximum fat loss.',
    peptides: [
      { name: 'CJC-1295/Ipamorelin', dose: '100/100 mcg pre-sleep', why: 'Restores nocturnal GH pulse — the primary fat-mobilizing signal. Elevated GH directly inhibits fat storage and drives lipolysis, especially visceral and stubborn fat' },
      { name: 'Tirzepatide', dose: '2.5–5 mg weekly SC', why: 'Dual GIP/GLP-1 agonist — clinically proven to reduce body weight by 15–22%. When combined with training and GH optimization, the fat loss is rapid and lean-mass-sparing' },
    ],
    timeline: '8–16 weeks for significant fat loss (10–20 lbs)',
    costEstimate: '$80–160/month',
    color: 'text-amber-400',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.25)',
    accentHex: '#f59e0b',
  },
  'Muscle Building': {
    tagline: 'Drive the IGF-1/GH axis to its ceiling. Add creatine and eat at surplus.',
    peptides: [
      { name: 'IGF-1 LR3', dose: '50–80 mcg daily, 4-week cycles', why: 'Directly activates IGF-1R on muscle satellite cells — drives hyperplasia (new fibers) and hypertrophy. The most potent muscle building peptide available' },
      { name: 'CJC-1295/Ipamorelin', dose: '100/100 mcg pre-sleep nightly', why: 'Amplifies the nocturnal GH pulse, elevating systemic IGF-1 and accelerating overnight muscle protein synthesis. Maintains anabolic environment between IGF-1 cycles' },
    ],
    timeline: '12–24 weeks for meaningful lean mass gain',
    costEstimate: '$120–200/month',
    color: 'text-blue-400',
    bg: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.25)',
    accentHex: '#3b82f6',
  },
  'Recovery': {
    tagline: 'Heal faster. Train more. BPC-157 + TB-500 is the gold standard.',
    peptides: [
      { name: 'BPC-157', dose: '250–500 mcg SC daily near injury site', why: 'The premier recovery peptide. Upregulates GH receptors in injured tissue, drives angiogenesis, accelerates tendon, ligament, and muscle repair by 2–3x vs natural timeline' },
      { name: 'TB-500', dose: '2.5 mg SC twice per week', why: 'Systemically mobilizes stem cells to injury sites, promotes anti-inflammatory signaling, and drives muscle fiber reconstruction. Combined with BPC-157 = the Wolverine stack' },
    ],
    timeline: '3–6 weeks for acute injury; ongoing for chronic recovery optimization',
    costEstimate: '$70–120/month',
    color: 'text-emerald-400',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.25)',
    accentHex: '#10b981',
  },
  'Performance': {
    tagline: 'Pre-workout GH pulse + overnight recovery = consistent performance ceiling.',
    peptides: [
      { name: 'Ipamorelin', dose: '100–200 mcg pre-workout (45 min before, fasted)', why: 'Pre-workout GH secretagogue — drives a clean GH pulse without cortisol elevation. Improves power output, endurance, and training capacity. No ghrelin hunger spike like GHRP-6' },
      { name: 'BPC-157 + TB-500 Blend', dose: '250 mcg BPC-157 + 1 mg TB-500 daily', why: 'Prevents and heals the micro-damage from high-frequency training — the bottleneck for athletes is accumulation of unresolved micro-injury. This blend keeps the slate clean' },
    ],
    timeline: '2–4 weeks to notice performance improvements; ongoing for elite maintenance',
    costEstimate: '$90–150/month',
    color: 'text-purple-400',
    bg: 'rgba(168,85,247,0.06)',
    border: 'rgba(168,85,247,0.25)',
    accentHex: '#a855f7',
  },
  'Body Recomp': {
    tagline: 'Lose fat and build muscle simultaneously. The hardest goal made achievable.',
    peptides: [
      { name: 'CJC-1295/Ipamorelin', dose: '100/100 mcg pre-sleep', why: 'The GH axis is the lever for recomp: elevated GH simultaneously drives lipolysis and protein synthesis. Running CJC/Ipa creates the hormonal environment where fat loss and muscle gain occur at once' },
      { name: 'IGF-1 LR3', dose: '40–60 mcg daily, cycled', why: 'IGF-1 is muscle-anabolic even in a caloric deficit — it preserves lean mass during fat loss and drives new fiber synthesis. The recomp window with IGF-1 is significantly wider than with training alone' },
      { name: 'BPC-157', dose: '250 mcg SC daily', why: 'Recomp requires training intensity and volume that create significant recovery demand. BPC-157 keeps connective tissue healthy during the high-frequency training that recomp demands' },
    ],
    timeline: '16–24 weeks for true recomp results',
    costEstimate: '$150–230/month',
    color: 'text-rose-400',
    bg: 'rgba(244,63,94,0.06)',
    border: 'rgba(244,63,94,0.25)',
    accentHex: '#f43f5e',
  },
};

const GOALS: { id: GymGoal; icon: string; sub: string }[] = [
  { id: 'Fat Loss', icon: '🔥', sub: 'Lean out, stay strong' },
  { id: 'Muscle Building', icon: '💪', sub: 'Add quality mass' },
  { id: 'Recovery', icon: '⚡', sub: 'Heal faster, train more' },
  { id: 'Performance', icon: '🏆', sub: 'Strength & endurance' },
  { id: 'Body Recomp', icon: '⚖️', sub: 'Lose fat + build muscle' },
];

export default function GymGoalPeptideMatch() {
  const [selected, setSelected] = useState<GymGoal | null>(null);

  const match = selected ? MATCHES[selected] : null;

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>PEPTIDE GOAL MATCHER</p>
        <h3 className="text-gray-900 font-black text-xl">Match Peptides to Your Gym Goal</h3>
        <p className="text-gray-600 text-sm mt-1">Select your primary goal to see the optimal peptide stack.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {GOALS.map(({ id, icon, sub }) => {
          const isActive = selected === id;
          const c = MATCHES[id];
          return (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className="p-3 rounded-xl text-center transition-all duration-200"
              style={{
                background: isActive ? c.bg : 'rgba(255,255,255,0.04)',
                border: isActive ? `1px solid ${c.border}` : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div className="font-bold text-xs" style={{ color: isActive ? c.accentHex : '#e2e8f0' }}>{id}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{sub}</div>
            </button>
          );
        })}
      </div>

      {match && selected && (
        <div
          className="rounded-2xl p-6 transition-all duration-300"
          style={{ background: match.bg, border: `1px solid ${match.border}` }}
        >
          <div className="text-xs font-bold tracking-widest mb-1" style={{ color: match.accentHex }}>
            {selected.toUpperCase()} PROTOCOL
          </div>
          <p className="text-gray-800 text-sm italic mb-5">&quot;{match.tagline}&quot;</p>

          <div className="space-y-4 mb-5">
            {match.peptides.map((p, i) => (
              <div key={p.name} className="rounded-xl p-4" style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                  <div className="font-black text-sm" style={{ color: match.accentHex }}>
                    {i + 1}. {p.name}
                  </div>
                  <div className="text-xs text-gray-600 font-semibold bg-black/30 px-2 py-1 rounded-lg">{p.dose}</div>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">{p.why}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="rounded-xl p-3 flex items-center gap-2" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <Clock className="w-4 h-4 shrink-0" style={{ color: match.accentHex }} />
              <div>
                <div className="text-xs text-gray-600 font-semibold">Timeline</div>
                <div className="text-gray-900 text-xs font-bold">{match.timeline}</div>
              </div>
            </div>
            <div className="rounded-xl p-3 flex items-center gap-2" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <DollarSign className="w-4 h-4 shrink-0" style={{ color: match.accentHex }} />
              <div>
                <div className="text-xs text-gray-600 font-semibold">Est. Cost</div>
                <div className="text-gray-900 text-xs font-bold">{match.costEstimate}</div>
              </div>
            </div>
          </div>

          <a
            href="/out"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm transition-all"
            style={{ background: match.accentHex, color: match.accentHex === '#f59e0b' || match.accentHex === '#10b981' ? '#000' : '#fff' }}
          >
            Shop {selected} Stack <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {!match && (
        <div className="text-center py-4 text-gray-500 text-sm">
          Select your primary gym goal above to see your personalized peptide match.
        </div>
      )}

      <p className="text-gray-700 text-xs mt-4 border-t border-slate-800 pt-4">
        For research purposes only. Not medical advice. Consult a healthcare provider before use.
      </p>
    </div>
  );
}
