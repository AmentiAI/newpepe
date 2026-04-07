'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

type Goal = 'aggressive' | 'lean-bulk' | 'cut';

interface Results {
  fatLoss: string;
  muscleGain: string;
  stack: string[];
  protein: string;
  timeline: string;
  notes: string;
}

function calculateResults(weight: number, bf: number, goal: Goal): Results {
  const leanMass = weight * (1 - bf / 100);

  const stackMap: Record<Goal, string[]> = {
    aggressive: ['CJC-1295 / Ipamorelin (100mcg/100mcg nightly)', 'Semaglutide 0.25mg/wk → titrate', 'MOTS-c 10mg 3× week (AMPK activation)'],
    'lean-bulk': ['CJC-1295 / Ipamorelin (100mcg/100mcg nightly)', 'IGF-1 LR3 20–40mcg post-workout', 'BPC-157 250mcg/day (joint protection)'],
    cut: ['CJC-1295 / Ipamorelin (100mcg/100mcg nightly)', 'MOTS-c 10mg 3× week', 'IGF-1 LR3 20mcg (anti-catabolic, 4-week cycles)'],
  };

  const fatLossMap: Record<Goal, string> = {
    aggressive: '3–6 lbs fat/month',
    'lean-bulk': '0.5–2 lbs fat/month',
    cut: '2–4 lbs fat/month',
  };

  const muscleGainMap: Record<Goal, string> = {
    aggressive: '0.5–1.5 lbs lean mass/month',
    'lean-bulk': '1.5–3 lbs lean mass/month',
    cut: '0–1 lb lean mass/month (preservation focus)',
  };

  const proteinMap: Record<Goal, string> = {
    aggressive: `${Math.round(leanMass * 1.1)}–${Math.round(leanMass * 1.3)}g protein/day (1.1–1.3g per lb lean mass)`,
    'lean-bulk': `${Math.round(leanMass * 1.2)}–${Math.round(leanMass * 1.5)}g protein/day (1.2–1.5g per lb lean mass)`,
    cut: `${Math.round(leanMass * 1.3)}–${Math.round(leanMass * 1.6)}g protein/day (1.3–1.6g per lb lean mass — elevated during deficit)`,
  };

  const timelineMap: Record<Goal, string> = {
    aggressive: `At ${weight} lbs / ${bf}% BF: expect visible recomposition at 6–8 weeks. Target: ~${Math.round(bf - 3)}–${Math.round(bf - 5)}% BF in 12 weeks.`,
    'lean-bulk': `At ${weight} lbs / ${bf}% BF: lean mass gains visible at 4–6 weeks. Peak anabolic window weeks 5–10. 12-week cycle recommended.`,
    cut: `At ${weight} lbs / ${bf}% BF: fat loss accelerates after week 3. Target 1–2% BF reduction per month while preserving ~${Math.round(leanMass)} lbs lean mass.`,
  };

  const notesMap: Record<Goal, string> = {
    aggressive: 'Aggressive recomp works best at 20–30% BF. The GLP-1 creates the caloric deficit; the GH peptide protects lean mass and adds anabolic signaling.',
    'lean-bulk': 'Lean bulk is optimal below 15% BF. Eat at a slight caloric surplus (+200–300 kcal/day). IGF-1 LR3 produces hyperplastic muscle growth unavailable from training alone.',
    cut: 'Muscle-preserving cut: keep deficit moderate (300–500 kcal/day). The MOTS-c + CJC stack maintains metabolic rate and prevents adaptive thermogenesis.',
  };

  return {
    fatLoss: fatLossMap[goal],
    muscleGain: muscleGainMap[goal],
    stack: stackMap[goal],
    protein: proteinMap[goal],
    timeline: timelineMap[goal],
    notes: notesMap[goal],
  };
}

export default function BodyRecompCalculator() {
  const [weight, setWeight] = useState('');
  const [bf, setBf] = useState('');
  const [goal, setGoal] = useState<Goal>('aggressive');
  const [results, setResults] = useState<Results | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const b = parseFloat(bf);
    if (!w || !b || w < 80 || w > 500 || b < 5 || b > 60) return;
    setResults(calculateResults(w, b, goal));
  };

  const goalLabels: Record<Goal, string> = {
    aggressive: 'Aggressive Recomp (lose fat + gain muscle simultaneously)',
    'lean-bulk': 'Lean Bulk (maximize muscle, minimize fat gain)',
    cut: 'Cut with Muscle Preservation (deficit + protect lean mass)',
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-white font-black text-xl mb-1">Body Recomp Goal Calculator</h3>
        <p className="text-slate-400 text-sm">Enter your stats to get a personalized peptide protocol and realistic timeline.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Current Weight (lbs)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 185"
            className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Estimated Body Fat %</label>
          <input
            type="number"
            value={bf}
            onChange={(e) => setBf(e.target.value)}
            placeholder="e.g. 22"
            className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Primary Goal</label>
        <div className="space-y-2">
          {(Object.keys(goalLabels) as Goal[]).map((g) => (
            <label key={g} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${goal === g ? 'border-blue-500/50 bg-blue-500/8' : 'border-white/8 hover:border-white/20'}`}>
              <input type="radio" name="goal" value={g} checked={goal === g} onChange={() => setGoal(g)} className="accent-blue-500" />
              <span className={`text-sm ${goal === g ? 'text-white font-semibold' : 'text-slate-400'}`}>{goalLabels[g]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={handleCalculate}
        disabled={!weight || !bf}
        className="btn-cta w-full py-3 text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Calculate My Protocol
      </button>

      {results && (
        <div className="mt-6 space-y-4 border-t border-white/8 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="text-blue-400 text-xs font-bold uppercase tracking-wide mb-1">Expected Fat Loss</div>
              <div className="text-white font-black text-lg">{results.fatLoss}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-1">Expected Muscle Gain</div>
              <div className="text-white font-black text-lg">{results.muscleGain}</div>
            </div>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Recommended Peptide Stack</div>
            <ul className="space-y-2">
              {results.stack.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-1">Protein Intake Target</div>
            <div className="text-white text-sm">{results.protein}</div>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <div className="text-purple-400 text-xs font-bold uppercase tracking-wide mb-1">Timeline Estimate</div>
            <div className="text-white text-sm">{results.timeline}</div>
          </div>

          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-slate-500 text-xs leading-relaxed">{results.notes}</p>
          </div>

          <p className="text-slate-600 text-xs">Estimates based on typical 12-week protocol outcomes. Individual results vary based on training, nutrition adherence, and baseline hormone levels. This is informational, not medical advice.</p>
        </div>
      )}
    </div>
  );
}
