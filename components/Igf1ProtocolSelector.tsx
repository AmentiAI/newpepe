'use client';

import { useState } from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const goals = [
  { id: 'hypertrophy', label: 'Muscle Hypertrophy', icon: '💪' },
  { id: 'recovery', label: 'Injury Recovery', icon: '🔄' },
  { id: 'plateau', label: 'Break a Plateau', icon: '📈' },
  { id: 'recomp', label: 'Body Recomposition', icon: '⚡' },
];

const experience = [
  { id: 'beginner', label: 'New to Peptides' },
  { id: 'intermediate', label: 'Some Experience' },
  { id: 'advanced', label: 'Experienced User' },
];

const protocols: Record<string, Record<string, {
  dose: string; frequency: string; timing: string; cycle: string; note: string; caution: string | null;
}>> = {
  hypertrophy: {
    beginner: {
      dose: '20mcg per injection',
      frequency: 'Training days only (4–5x/week)',
      timing: '30–60 min post-workout',
      cycle: '4 weeks on, 4 weeks off',
      note: 'Start low to assess tolerance. Monitor blood glucose — have a snack nearby after injection.',
      caution: 'IGF-1 has mild hypoglycemic effects. Do not inject on an empty stomach.',
    },
    intermediate: {
      dose: '30–40mcg per injection',
      frequency: 'Daily, including rest days',
      timing: '30–60 min post-workout; morning on rest days',
      cycle: '4–6 weeks on, 4 weeks off',
      note: 'Stack with CJC-1295/Ipamorelin for enhanced GH axis synergy.',
      caution: 'Monitor for signs of hypoglycemia. Pair with carbohydrate intake around injection.',
    },
    advanced: {
      dose: '40–50mcg per injection',
      frequency: 'Twice daily on training days (post-workout + AM)',
      timing: 'Post-workout + upon waking',
      cycle: '4–6 weeks on, equal time off',
      note: 'Most powerful for experienced users who have optimized training, nutrition, and sleep. Run with CJC-1295/Ipa for full GH axis optimization.',
      caution: 'At 50mcg splits, closely monitor blood glucose. Keep fast-acting carbs on hand.',
    },
  },
  recovery: {
    beginner: {
      dose: '20mcg per injection',
      frequency: 'Daily (including non-training days)',
      timing: 'Morning, fasted',
      cycle: '4–6 weeks',
      note: 'Stack with BPC-157 and TB-500 for comprehensive injury recovery — BPC-157 drives local repair, TB-500 provides systemic healing, IGF-1 LR3 rebuilds muscle fibers.',
      caution: 'Avoid injecting into actively inflamed tissue.',
    },
    intermediate: {
      dose: '30mcg per injection',
      frequency: 'Daily',
      timing: 'Morning, or near injury site (subcutaneous)',
      cycle: '4–8 weeks',
      note: 'IGF-1 LR3 excels for post-injury muscle atrophy — activates satellite cells in the affected muscle directly.',
      caution: null,
    },
    advanced: {
      dose: '40mcg per injection',
      frequency: 'Daily; twice daily for severe atrophy',
      timing: 'AM + post-PT session',
      cycle: '6–8 weeks',
      note: 'Most effective for rebuilding post-surgical or severely atrophied muscle. Combine with TB-500 loading protocol.',
      caution: 'Monitor IGF-1 bloodwork on extended cycles.',
    },
  },
  plateau: {
    beginner: {
      dose: '20–30mcg per injection',
      frequency: 'Training days only',
      timing: 'Post-workout',
      cycle: '4 weeks',
      note: 'Short sharp cycle to break through a sticking point. Evaluate results before extending.',
      caution: null,
    },
    intermediate: {
      dose: '40mcg per injection',
      frequency: 'Daily',
      timing: 'Post-workout on training days; AM on rest days',
      cycle: '4–6 weeks',
      note: 'Pair with a training program change. IGF-1 LR3 activates satellite cells that have been dormant — maximizes response to new training stimuli.',
      caution: null,
    },
    advanced: {
      dose: '50mcg per injection',
      frequency: 'Daily + additional post-workout',
      timing: 'AM + post-workout',
      cycle: '4–6 weeks, then equal break',
      note: 'Highest recommended dose for research purposes. Full satellite cell activation at this dose.',
      caution: 'Blood glucose monitoring recommended. Avoid if any signs of insulin resistance.',
    },
  },
  recomp: {
    beginner: {
      dose: '20mcg per injection',
      frequency: 'Daily',
      timing: 'Post-workout, or AM fasted',
      cycle: '4–6 weeks',
      note: 'Recomp benefit: IGF-1 simultaneously drives muscle protein synthesis while GH (amplified by CJC/Ipa) drives fat oxidation.',
      caution: null,
    },
    intermediate: {
      dose: '30–40mcg per injection',
      frequency: 'Daily',
      timing: 'Post-workout',
      cycle: '6 weeks on, 4 weeks off',
      note: 'Most effective recomp stack: IGF-1 LR3 + CJC-1295/Ipamorelin. Target slight caloric deficit with high protein.',
      caution: null,
    },
    advanced: {
      dose: '40–50mcg per injection',
      frequency: 'Daily, or twice on training days',
      timing: 'Post-workout (+ AM if twice daily)',
      cycle: '6 weeks on, 6 weeks off',
      note: 'Aggressive recomp protocol. Lean bulk (slight surplus) may produce better body composition outcomes than deficit.',
      caution: 'Monitor body composition markers. IGF-1 has anti-catabolic and pro-anabolic effects — adjust calories accordingly.',
    },
  },
};

export default function Igf1ProtocolSelector() {
  const [goal, setGoal] = useState<string>('hypertrophy');
  const [exp, setExp] = useState<string>('intermediate');

  const proto = protocols[goal]?.[exp];

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-white font-black text-lg mb-1">IGF-1 LR3 Protocol Selector</h3>
        <p className="text-slate-400 text-sm">Select your goal and experience level for a tailored research protocol.</p>
      </div>

      <div>
        <p className="text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Goal</p>
        <div className="grid grid-cols-2 gap-2">
          {goals.map((g) => (
            <button
              key={g.id}
              onClick={() => setGoal(g.id)}
              className={`text-sm font-semibold px-3 py-2.5 rounded-xl border transition-all flex items-center gap-2 ${
                goal === g.id
                  ? 'bg-blue-500/15 border-blue-500/30 text-blue-300'
                  : 'bg-dark-800/40 border-slate-700/40 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>{g.icon}</span> {g.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Experience Level</p>
        <div className="flex gap-2">
          {experience.map((e) => (
            <button
              key={e.id}
              onClick={() => setExp(e.id)}
              className={`flex-1 text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
                exp === e.id
                  ? 'bg-blue-500/15 border-blue-500/30 text-blue-300'
                  : 'bg-dark-800/40 border-slate-700/40 text-slate-400 hover:text-slate-200'
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>
      </div>

      {proto && (
        <div className="rounded-xl p-5 bg-blue-500/8 border border-blue-500/20 space-y-3">
          <h4 className="text-blue-300 font-bold text-sm">Recommended Protocol</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Dose', value: proto.dose },
              { label: 'Frequency', value: proto.frequency },
              { label: 'Timing', value: proto.timing },
              { label: 'Cycle Length', value: proto.cycle },
            ].map((row) => (
              <div key={row.label} className="bg-dark-800/40 rounded-lg p-3">
                <p className="text-slate-500 text-xs mb-0.5">{row.label}</p>
                <p className="text-slate-200 text-sm font-semibold">{row.value}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm leading-relaxed">{proto.note}</p>
          </div>
          {proto.caution && (
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-amber-300/80 text-xs leading-relaxed">{proto.caution}</p>
            </div>
          )}
        </div>
      )}

      <p className="text-slate-600 text-xs">For research and educational purposes only. Consult a physician before use.</p>
    </div>
  );
}
