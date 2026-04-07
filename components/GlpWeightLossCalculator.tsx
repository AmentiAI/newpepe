'use client';

import { useState } from 'react';

type Peptide = 'semaglutide' | 'tirzepatide' | 'retatrutide';
type Timeline = 3 | 6 | 12;
type Unit = 'lbs' | 'kg';

const peptideData: Record<Peptide, { name: string; color: string; minPct: number; maxPct: number; costNote: string; mechanism: string }> = {
  semaglutide: {
    name: 'Semaglutide',
    color: 'blue',
    minPct: 0.07,
    maxPct: 0.15,
    costNote: 'Research peptide: ~$80–150/month at typical doses',
    mechanism: 'GLP-1 receptor agonist',
  },
  tirzepatide: {
    name: 'Tirzepatide',
    color: 'emerald',
    minPct: 0.12,
    maxPct: 0.20,
    costNote: 'Research peptide: ~$150–250/month at typical doses',
    mechanism: 'Dual GIP + GLP-1 agonist',
  },
  retatrutide: {
    name: 'Retatrutide',
    color: 'purple',
    minPct: 0.15,
    maxPct: 0.24,
    costNote: 'Research peptide: ~$200–350/month at typical doses',
    mechanism: 'Triple GIP + GLP-1 + Glucagon agonist',
  },
};

const timelineScaling: Record<Timeline, { minScale: number; maxScale: number; label: string }> = {
  3: { minScale: 0.35, maxScale: 0.50, label: '3 months' },
  6: { minScale: 0.60, maxScale: 0.80, label: '6 months' },
  12: { minScale: 0.90, maxScale: 1.00, label: '12 months' },
};

const colorMap: Record<string, { text: string; bg: string; border: string; bar: string; ring: string }> = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', bar: 'bg-blue-500', ring: 'ring-blue-500/50' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', bar: 'bg-emerald-500', ring: 'ring-emerald-500/50' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30', bar: 'bg-purple-500', ring: 'ring-purple-500/50' },
};

function roundTo(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export default function GlpWeightLossCalculator() {
  const [weight, setWeight] = useState<string>('200');
  const [unit, setUnit] = useState<Unit>('lbs');
  const [peptide, setPeptide] = useState<Peptide>('semaglutide');
  const [timeline, setTimeline] = useState<Timeline>(6);
  const [calculated, setCalculated] = useState(false);

  const weightNum = parseFloat(weight) || 0;
  const weightInLbs = unit === 'lbs' ? weightNum : weightNum * 2.20462;

  const peptideInfo = peptideData[peptide];
  const timelineInfo = timelineScaling[timeline];
  const colors = colorMap[peptideInfo.color];

  const minLossLbs = roundTo(weightInLbs * peptideInfo.minPct * timelineInfo.minScale, 1);
  const maxLossLbs = roundTo(weightInLbs * peptideInfo.maxPct * timelineInfo.maxScale, 1);
  const minFinalLbs = roundTo(weightInLbs - maxLossLbs, 1);
  const maxFinalLbs = roundTo(weightInLbs - minLossLbs, 1);

  const toDisplay = (lbs: number) => unit === 'lbs' ? `${lbs} lbs` : `${roundTo(lbs / 2.20462, 1)} kg`;
  const minLossDisplay = toDisplay(minLossLbs);
  const maxLossDisplay = toDisplay(maxLossLbs);
  const minFinalDisplay = toDisplay(minFinalLbs);
  const maxFinalDisplay = toDisplay(maxFinalLbs);

  const lossMinPct = Math.round(minLossLbs / weightInLbs * 100);
  const lossMaxPct = Math.round(maxLossLbs / weightInLbs * 100);
  const barWidth = Math.min(Math.round((lossMinPct + lossMaxPct) / 2 / 30 * 100), 100);

  const handleCalculate = () => {
    if (weightNum > 0) setCalculated(true);
  };

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-black text-white mb-1">GLP-1 Weight Loss Calculator</h3>
        <p className="text-slate-400 text-sm">Estimate your expected weight loss range based on clinical trial data for each peptide.</p>
      </div>

      <div className="space-y-5 mb-6">
        {/* Weight Input */}
        <div>
          <label className="text-slate-300 text-sm font-semibold mb-2 block">Current Weight</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={weight}
              onChange={(e) => { setWeight(e.target.value); setCalculated(false); }}
              min={50}
              max={800}
              className="flex-1 bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
              placeholder="Enter weight"
            />
            <div className="flex rounded-xl overflow-hidden border border-white/10">
              {(['lbs', 'kg'] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => { setUnit(u); setCalculated(false); }}
                  className={`px-4 py-3 text-sm font-semibold transition-colors ${
                    unit === u ? 'bg-slate-600 text-white' : 'bg-slate-800/60 text-slate-400 hover:text-white'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Peptide Choice */}
        <div>
          <label className="text-slate-300 text-sm font-semibold mb-2 block">Peptide Choice</label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.entries(peptideData) as [Peptide, typeof peptideData.semaglutide][]).map(([key, info]) => {
              const c = colorMap[info.color];
              return (
                <button
                  key={key}
                  onClick={() => { setPeptide(key); setCalculated(false); }}
                  className={`rounded-xl p-3 text-xs font-bold border transition-all text-center ${
                    peptide === key
                      ? `${c.bg} ${c.border} ${c.text} ring-1 ${c.ring}`
                      : 'bg-slate-800/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="font-black mb-0.5">{info.name}</div>
                  <div className="text-xs opacity-70 font-normal">{info.mechanism.split(' ')[0]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <label className="text-slate-300 text-sm font-semibold mb-2 block">Timeline</label>
          <div className="grid grid-cols-3 gap-2">
            {([3, 6, 12] as Timeline[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTimeline(t); setCalculated(false); }}
                className={`rounded-xl py-3 text-sm font-bold border transition-all ${
                  timeline === t
                    ? `${colors.bg} ${colors.border} ${colors.text}`
                    : 'bg-slate-800/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {t} months
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={weightNum <= 0}
          className={`w-full py-4 rounded-xl font-black text-sm transition-all ${
            weightNum > 0
              ? `${colors.bg} ${colors.border} border ${colors.text} hover:opacity-90`
              : 'bg-slate-800/40 border border-white/5 text-slate-600 cursor-not-allowed'
          }`}
        >
          Calculate Expected Results
        </button>
      </div>

      {/* Results */}
      {calculated && weightNum > 0 && (
        <div className={`${colors.bg} border ${colors.border} rounded-2xl p-6 space-y-4`}>
          <div>
            <p className={`text-xs font-bold tracking-widest uppercase ${colors.text} mb-2`}>
              {peptideInfo.name} — {timelineInfo.label}
            </p>
            <p className="text-xs text-slate-500 mb-4 italic">{peptideInfo.mechanism}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-xl p-4 text-center">
              <p className="text-slate-400 text-xs mb-1">Expected Weight Loss</p>
              <p className={`text-2xl font-black ${colors.text}`}>{minLossDisplay}</p>
              <p className="text-slate-500 text-xs">to</p>
              <p className={`text-2xl font-black ${colors.text}`}>{maxLossDisplay}</p>
              <p className="text-slate-500 text-xs mt-1">({lossMinPct}–{lossMaxPct}% of body weight)</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 text-center">
              <p className="text-slate-400 text-xs mb-1">Projected Final Weight</p>
              <p className={`text-2xl font-black ${colors.text}`}>{minFinalDisplay}</p>
              <p className="text-slate-500 text-xs">to</p>
              <p className={`text-2xl font-black ${colors.text}`}>{maxFinalDisplay}</p>
              <p className="text-slate-500 text-xs mt-1">after {timelineInfo.label}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Progress indicator</span>
              <span>{lossMinPct}–{lossMaxPct}% body weight</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${colors.bar}`}
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-900/40 rounded-xl p-3">
            <p className="text-slate-400 text-xs font-semibold mb-1">Estimated Cost</p>
            <p className="text-slate-300 text-xs">{peptideInfo.costNote}</p>
          </div>

          <div className="border border-yellow-500/20 bg-yellow-500/5 rounded-xl p-3">
            <p className="text-yellow-400 text-xs font-bold mb-1">Important Disclaimer</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              These estimates are based on clinical trial averages and will vary significantly based on diet, exercise, starting metabolic rate, adherence to protocol, and individual response. Results shown represent what was observed in controlled clinical settings at optimal doses — not guaranteed outcomes. Always consult a healthcare professional before starting any peptide protocol.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
