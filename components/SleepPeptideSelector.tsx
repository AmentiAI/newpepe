'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, Moon, Clock, Zap, Sun } from 'lucide-react';

type SleepProblem = 'cant-fall-asleep' | 'wake-at-night' | 'no-deep-sleep' | 'early-waking';

interface Recommendation {
  peptide: string;
  dose: string;
  timing: string;
  why: string;
  color: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
}

const RECOMMENDATIONS: Record<SleepProblem, Recommendation> = {
  'cant-fall-asleep': {
    peptide: 'DSIP (Delta Sleep Inducing Peptide)',
    dose: '200–400 mcg subcutaneous',
    timing: '30–60 minutes before bed',
    why: 'DSIP was literally isolated from rabbit brain tissue during natural sleep induction. It reduces sleep latency by modulating the HPA axis stress response — lowering cortisol and facilitating the brain\'s transition from wakefulness to slow-wave sleep. Users report falling asleep 2–3x faster within the first week.',
    color: 'rgba(139,92,246,0.08)',
    borderColor: 'rgba(139,92,246,0.3)',
    textColor: '#a78bfa',
    accentColor: '#8b5cf6',
  },
  'wake-at-night': {
    peptide: 'Epithalon + DSIP Combo',
    dose: 'Epithalon 5mg + DSIP 200 mcg',
    timing: 'Both administered 45 minutes before sleep',
    why: 'Night waking is usually a cortisol/melatonin rhythm issue — your pineal gland isn\'t producing enough melatonin to sustain deep sleep architecture through the night. Epithalon restores pineal function at the root cause level, while DSIP manages the acute HPA response. Together they\'re the most potent sleep continuity combination available.',
    color: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.3)',
    textColor: '#60a5fa',
    accentColor: '#3b82f6',
  },
  'no-deep-sleep': {
    peptide: 'CJC-1295 / Ipamorelin Blend',
    dose: '100 mcg CJC + 100 mcg Ipamorelin',
    timing: 'Immediately before bed on empty stomach',
    why: 'Deep slow-wave sleep (SWS) is when 70% of your daily growth hormone pulse fires. CJC-1295 amplifies the magnitude of that pulse while Ipamorelin acts as a selective GH secretagogue that supercharges depth of SWS. Users report measurable improvements in sleep tracker deep sleep scores within 2 weeks. You don\'t just sleep longer — you sleep harder.',
    color: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.3)',
    textColor: '#34d399',
    accentColor: '#10b981',
  },
  'early-waking': {
    peptide: 'Epithalon (Solo Protocol)',
    dose: '5–10 mg subcutaneous',
    timing: '45–60 minutes before your target sleep time',
    why: 'Early morning waking (3–5 AM) is the classic signature of a degraded circadian melatonin rhythm — your pineal gland is simply not releasing enough melatonin in the early morning hours to maintain sleep. Epithalon directly restores pineal gland sensitivity and endogenous melatonin production. Unlike exogenous melatonin, it fixes the underlying machinery rather than bypassing it.',
    color: 'rgba(251,191,36,0.08)',
    borderColor: 'rgba(251,191,36,0.3)',
    textColor: '#fbbf24',
    accentColor: '#f59e0b',
  },
};

const PROBLEMS: { id: SleepProblem; label: string; icon: React.ReactNode; sub: string }[] = [
  { id: 'cant-fall-asleep', label: "Can't Fall Asleep", icon: <Moon className="w-5 h-5" />, sub: 'Racing mind, high latency' },
  { id: 'wake-at-night', label: 'Wake Up at Night', icon: <Clock className="w-5 h-5" />, sub: 'Fragmented, interrupted sleep' },
  { id: 'no-deep-sleep', label: 'No Deep Sleep', icon: <Zap className="w-5 h-5" />, sub: 'Light sleep, feel unrested' },
  { id: 'early-waking', label: 'Early Morning Waking', icon: <Sun className="w-5 h-5" />, sub: 'Wake at 3–5 AM, can\'t return' },
];

export default function SleepPeptideSelector() {
  const [selected, setSelected] = useState<SleepProblem | null>(null);

  const rec = selected ? RECOMMENDATIONS[selected] : null;

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <p className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>SLEEP PROBLEM IDENTIFIER</p>
        <h3 className="text-gray-900 font-black text-xl">What&apos;s Your Sleep Problem?</h3>
        <p className="text-gray-600 text-sm mt-1">Select your primary sleep issue to get a targeted peptide recommendation.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {PROBLEMS.map(({ id, label, icon, sub }) => {
          const isActive = selected === id;
          return (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className="p-4 rounded-xl text-left transition-all duration-200 flex items-start gap-3"
              style={{
                background: isActive ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.04)',
                border: isActive ? '1px solid rgba(0,255,136,0.45)' : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span style={{ color: isActive ? '#00ff88' : '#64748b' }}>{icon}</span>
              <div>
                <div className="font-bold text-sm" style={{ color: isActive ? '#00ff88' : '#e2e8f0' }}>{label}</div>
                <div className="text-xs text-gray-600 mt-0.5">{sub}</div>
              </div>
            </button>
          );
        })}
      </div>

      {rec && (
        <div
          className="rounded-2xl p-6 transition-all duration-300"
          style={{ background: rec.color, border: `1px solid ${rec.borderColor}` }}
        >
          <div className="text-xs font-bold tracking-widest mb-1" style={{ color: rec.textColor }}>RECOMMENDED PROTOCOL</div>
          <h4 className="text-gray-900 font-black text-lg mb-4">{rec.peptide}</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="rounded-xl p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div className="text-xs font-bold tracking-widest mb-1 text-gray-600">DOSE</div>
              <div className="text-gray-900 font-semibold text-sm">{rec.dose}</div>
            </div>
            <div className="rounded-xl p-3" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div className="text-xs font-bold tracking-widest mb-1 text-gray-600">TIMING</div>
              <div className="text-gray-900 font-semibold text-sm">{rec.timing}</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest mb-2 text-gray-600">WHY THIS WORKS</div>
            <p className="text-gray-800 text-sm leading-relaxed">{rec.why}</p>
          </div>

          <a
            href="/out"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-all"
            style={{ background: rec.accentColor, color: '#000' }}
          >
            Shop {rec.peptide.split(' ')[0]} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {!rec && (
        <div className="text-center py-4 text-gray-500 text-sm">
          Select a sleep problem above to see your personalized recommendation.
        </div>
      )}

      <p className="text-gray-700 text-xs mt-4 border-t border-slate-800 pt-4">
        For research purposes only. Not medical advice. Consult a healthcare provider before use.
      </p>
    </div>
  );
}
