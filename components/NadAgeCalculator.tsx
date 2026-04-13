'use client';

import { useState, useMemo } from 'react';
import { Zap } from 'lucide-react';

const systems = [
  { label: 'Mitochondrial Energy (ATP)', fullAt20: 100, declineRate: 1.1, color: 'amber', impact: 'Physical energy, endurance, exercise performance' },
  { label: 'DNA Repair (PARP activity)', fullAt20: 100, declineRate: 1.05, color: 'rose', impact: 'Genomic stability, cancer prevention, cellular longevity' },
  { label: 'Sirtuin Activity (Longevity)', fullAt20: 100, declineRate: 1.08, color: 'purple', impact: 'Epigenetic regulation, inflammation, metabolic health' },
  { label: 'Metabolic Efficiency', fullAt20: 100, declineRate: 0.9, color: 'blue', impact: 'Insulin sensitivity, fat burning, nutrient utilization' },
  { label: 'Cognitive / Dopamine Pathways', fullAt20: 100, declineRate: 0.85, color: 'cyan', impact: 'Focus, motivation, mood, memory formation' },
];

const colorClass: Record<string, { bar: string; text: string; bg: string }> = {
  amber: { bar: 'bg-amber-500', text: 'text-amber-400', bg: 'bg-amber-500/10' },
  rose: { bar: 'bg-rose-500', text: 'text-rose-400', bg: 'bg-rose-500/10' },
  purple: { bar: 'bg-purple-500', text: 'text-amber-600', bg: 'bg-purple-500/10' },
  blue: { bar: 'bg-blue-500', text: 'text-blue-400', bg: 'bg-blue-500/10' },
  cyan: { bar: 'bg-cyan-500', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
};

function calcNadLevel(age: number): number {
  // NAD+ declines ~50% from age 20 to 50 — roughly 1.65%/year compounding
  const yearsFrom20 = Math.max(0, age - 20);
  return Math.max(20, Math.round(100 * Math.pow(0.9835, yearsFrom20)));
}

function systemLevel(nadPct: number, rate: number): number {
  // System function scales with NAD+ but not linearly — some are more sensitive
  return Math.max(10, Math.round(nadPct * rate));
}

export default function NadAgeCalculator() {
  const [age, setAge] = useState<number>(40);
  const [ageInput, setAgeInput] = useState<string>('40');

  const nadLevel = useMemo(() => calcNadLevel(age), [age]);
  const afterSupp = Math.min(100, nadLevel + Math.round((100 - nadLevel) * 0.75));

  const handleAgeChange = (val: string) => {
    setAgeInput(val);
    const n = parseInt(val, 10);
    if (!isNaN(n) && n >= 20 && n <= 80) setAge(n);
  };

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-gray-900 font-black text-lg mb-1">NAD+ Decline & System Impact Calculator</h3>
        <p className="text-gray-600 text-sm">
          Enter your age to see your estimated NAD+ level and the downstream impact on key biological systems.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="text-gray-600 text-xs mb-1.5 block font-semibold">Your Age</label>
          <input
            type="number"
            min={20}
            max={80}
            value={ageInput}
            onChange={(e) => handleAgeChange(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber-500/60"
          />
        </div>
        <div className="flex-1 rounded-xl p-4 bg-amber-500/10 border border-amber-500/20 text-center">
          <div className="text-3xl font-black text-amber-400">{nadLevel}%</div>
          <div className="text-gray-600 text-xs mt-1">Estimated NAD+ Level</div>
          <div className="text-gray-600 text-xs">(vs age 20 baseline)</div>
        </div>
      </div>

      <div className="space-y-3">
        {systems.map((sys) => {
          const level = Math.min(100, systemLevel(nadLevel, sys.declineRate));
          const afterLevel = Math.min(100, systemLevel(afterSupp, sys.declineRate));
          const c = colorClass[sys.color];
          return (
            <div key={sys.label}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-800 text-xs font-semibold">{sys.label}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs ${c.text} font-bold`}>{level}%</span>
                  <span className="text-gray-500 text-xs">→</span>
                  <span className="text-emerald-400 text-xs font-bold">{afterLevel}%</span>
                </div>
              </div>
              <div className="relative h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 opacity-30 ${c.bar}`}
                  style={{ width: `${afterLevel}%` }} />
                <div className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${c.bar}`}
                  style={{ width: `${level}%` }} />
              </div>
              <p className="text-gray-600 text-xs mt-1">{sys.impact}</p>
            </div>
          );
        })}
      </div>

      <div className="rounded-lg p-3 bg-emerald-500/8 border border-emerald-500/20 flex items-start gap-2">
        <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-gray-800 text-xs leading-relaxed">
          NAD+ supplementation can restore levels by ~75% of the deficit. Light bars above show estimated post-supplementation levels.
          Actual results vary based on dose, formulation, and individual metabolism.
        </p>
      </div>

      <p className="text-gray-500 text-xs">Estimates based on published NAD+ age-decline data. For educational purposes only.</p>
    </div>
  );
}
