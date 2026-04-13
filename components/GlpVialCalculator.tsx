'use client';

import { useState, useMemo } from 'react';
import { CheckCircle } from 'lucide-react';

export interface GlpVialConfig {
  compound: 'semaglutide' | 'tirzepatide' | 'retatrutide';
  vialMg: number;
  mode: 'starter' | 'escalation' | 'maintenance';
  /** default mL of bac water to add */
  defaultWater: number;
}

const compoundInfo = {
  semaglutide: {
    label: 'Semaglutide',
    color: 'blue',
    startDose: 0.25,
    escalation: [0.25, 0.5, 1, 2],
    unit: 'mg',
  },
  tirzepatide: {
    label: 'Tirzepatide',
    color: 'emerald',
    startDose: 2.5,
    escalation: [2.5, 5, 7.5, 10, 12.5, 15],
    unit: 'mg',
  },
  retatrutide: {
    label: 'Retatrutide',
    color: 'amber',
    startDose: 2,
    escalation: [2, 4, 8, 12],
    unit: 'mg',
  },
};

const colorClass: Record<string, { text: string; bg: string; border: string; btn: string }> = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', btn: 'bg-blue-500/15 border-blue-500/30 text-blue-300' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', btn: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', btn: 'bg-amber-500/15 border-amber-500/30 text-amber-300' },
};

export default function GlpVialCalculator({ compound, vialMg, defaultWater }: GlpVialConfig) {
  const info = compoundInfo[compound];
  const c = colorClass[info.color];

  const [water, setWater] = useState<number>(defaultWater);
  const [waterInput, setWaterInput] = useState<string>(String(defaultWater));
  const [dose, setDose] = useState<number>(info.startDose);

  const concentration = useMemo(() => (water > 0 ? vialMg / water : 0), [water, vialMg]);
  const mlPerDose = useMemo(() => (concentration > 0 ? dose / concentration : 0), [dose, concentration]);
  const iuPerDose = useMemo(() => mlPerDose * 100, [mlPerDose]);
  const weeksSupply = useMemo(() => (dose > 0 ? Math.floor(vialMg / dose) : 0), [vialMg, dose]);

  const handleWater = (val: string) => {
    setWaterInput(val);
    const n = parseFloat(val);
    if (!isNaN(n) && n > 0) setWater(n);
  };

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-gray-900 font-black text-lg mb-1">
          {info.label} {vialMg}mg — Dose & Supply Calculator
        </h3>
        <p className="text-gray-600 text-sm">
          Calculate your exact draw volume, injection amount (in IU/units), and how many weeks this vial will last.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Bacteriostatic Water Added (mL)</label>
          <input
            type="number"
            min={0.5}
            step={0.5}
            value={waterInput}
            onChange={(e) => handleWater(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-slate-500"
          />
        </div>
        <div>
          <label className="text-gray-600 text-xs font-semibold mb-1.5 block">Weekly Dose ({info.unit})</label>
          <select
            value={dose}
            onChange={(e) => setDose(parseFloat(e.target.value))}
            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-slate-500"
          >
            {info.escalation.map((d) => (
              <option key={d} value={d}>{d}{info.unit}/week</option>
            ))}
          </select>
        </div>
      </div>

      <div className={`rounded-xl p-5 ${c.bg} border ${c.border}`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className={`text-2xl font-black ${c.text}`}>{concentration.toFixed(1)}</div>
            <div className="text-gray-600 text-xs mt-1">{info.unit}/mL<br/>Concentration</div>
          </div>
          <div>
            <div className={`text-2xl font-black ${c.text}`}>{mlPerDose.toFixed(3)}</div>
            <div className="text-gray-600 text-xs mt-1">mL<br/>Per Dose</div>
          </div>
          <div>
            <div className={`text-2xl font-black ${c.text}`}>{iuPerDose.toFixed(1)}</div>
            <div className="text-gray-600 text-xs mt-1">IU / Units<br/>On Syringe</div>
          </div>
          <div>
            <div className={`text-2xl font-black ${c.text}`}>{weeksSupply}</div>
            <div className="text-gray-600 text-xs mt-1">Weeks<br/>Supply</div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {[
          'Inject water slowly against the glass wall of the peptide vial — never directly onto the powder.',
          'Gently swirl to dissolve — never shake. Shaking degrades peptide structure.',
          'Refrigerate after reconstitution. Use within 28 days.',
          'Use a standard 1mL insulin syringe (100 IU markings) for precise dosing.',
        ].map((tip, i) => (
          <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
            <CheckCircle className={`w-3.5 h-3.5 ${c.text} shrink-0 mt-0.5`} />
            {tip}
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-xs">For research and educational purposes only. Always consult a qualified healthcare provider.</p>
    </div>
  );
}
