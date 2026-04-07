'use client';

import { useState, useMemo } from 'react';
import { AlertTriangle, CheckCircle, Calculator } from 'lucide-react';

const VIAL_SIZES = [2, 5, 10] as const;
type VialSize = typeof VIAL_SIZES[number];

export default function ReconstitutionCalculator() {
  const [vialSize, setVialSize] = useState<VialSize>(5);
  const [waterMl, setWaterMl] = useState<number>(1);
  const [desiredDose, setDesiredDose] = useState<number>(250);
  const [waterInput, setWaterInput] = useState<string>('1');
  const [doseInput, setDoseInput] = useState<string>('250');

  const calc = useMemo(() => {
    const vialMcg = vialSize * 1000;
    const concentrationPerMl = waterMl > 0 ? vialMcg / waterMl : 0;
    const volumePerDose = concentrationPerMl > 0 ? desiredDose / concentrationPerMl : 0;
    const iuPerDose = volumePerDose * 100; // 100 IU = 1 mL
    const dosesPerVial = desiredDose > 0 ? vialMcg / desiredDose : 0;
    const daysSupply = dosesPerVial; // assumes once-daily dosing
    const isHighConc = concentrationPerMl > 10000;
    return { concentrationPerMl, volumePerDose, iuPerDose, dosesPerVial, daysSupply, isHighConc };
  }, [vialSize, waterMl, desiredDose]);

  const handleWaterChange = (val: string) => {
    setWaterInput(val);
    const n = parseFloat(val);
    if (!isNaN(n) && n >= 0.5 && n <= 3) setWaterMl(n);
  };

  const handleDoseChange = (val: string) => {
    setDoseInput(val);
    const n = parseFloat(val);
    if (!isNaN(n) && n > 0) setDesiredDose(n);
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}>
          <Calculator className="w-5 h-5" style={{ color: '#00ff88' }} />
        </div>
        <div>
          <h3 className="text-white font-black text-lg">Reconstitution Calculator</h3>
          <p className="text-slate-500 text-xs">Instantly calculate concentration, dose volume, and syringe markings</p>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {/* Vial Size */}
        <div>
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
            Vial Size
          </label>
          <div className="flex gap-2">
            {VIAL_SIZES.map((size) => (
              <button
                key={size}
                onClick={() => setVialSize(size)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all border ${
                  vialSize === size
                    ? 'border-neon-green/50 text-neon-green'
                    : 'border-white/10 text-slate-400 hover:border-white/20'
                }`}
                style={vialSize === size ? { background: 'rgba(0,255,136,0.1)' } : { background: 'rgba(255,255,255,0.03)' }}
              >
                {size}mg
              </button>
            ))}
          </div>
        </div>

        {/* BAC Water */}
        <div>
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
            BAC Water to Add
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min={0.5}
              max={3}
              step={0.25}
              value={waterMl}
              onChange={(e) => { setWaterMl(parseFloat(e.target.value)); setWaterInput(e.target.value); }}
              className="w-full accent-green-400"
            />
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={waterInput}
                onChange={(e) => handleWaterChange(e.target.value)}
                min={0.5}
                max={3}
                step={0.25}
                className="w-full rounded-lg px-3 py-2 text-sm text-white font-mono"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <span className="text-slate-400 text-sm font-semibold shrink-0">mL</span>
            </div>
          </div>
        </div>

        {/* Desired Dose */}
        <div>
          <label className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">
            Desired Dose
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={doseInput}
              onChange={(e) => handleDoseChange(e.target.value)}
              min={1}
              max={vialSize * 1000}
              step={50}
              placeholder="e.g. 250"
              className="w-full rounded-lg px-3 py-2.5 text-sm text-white font-mono"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <span className="text-slate-400 text-sm font-semibold shrink-0">mcg</span>
          </div>
          <p className="text-slate-600 text-xs mt-1">Common: 250mcg, 500mcg, 1000mcg</p>
        </div>
      </div>

      {/* High concentration warning */}
      {calc.isHighConc && (
        <div className="flex gap-3 bg-amber-500/10 border border-amber-500/25 rounded-xl p-4 mb-5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-amber-300 text-xs leading-relaxed">
            <strong>High concentration warning:</strong> At {calc.concentrationPerMl.toLocaleString()}mcg/mL, each IU unit on your syringe represents a significant dose. Consider adding more BAC water for easier and safer dosing accuracy.
          </p>
        </div>
      )}

      {/* Results */}
      <div className="rounded-2xl p-5" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)' }}>
        <div className="text-xs font-bold text-neon-green uppercase tracking-widest mb-4">Results</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {
              label: 'Concentration',
              value: calc.concentrationPerMl > 0 ? `${calc.concentrationPerMl.toLocaleString(undefined, { maximumFractionDigits: 0 })} mcg/mL` : '—',
              sub: `${vialSize}mg in ${waterMl}mL`,
            },
            {
              label: 'Volume per Dose',
              value: calc.volumePerDose > 0 ? `${(calc.volumePerDose * 1000).toFixed(2)} μL` : '—',
              sub: `${desiredDose}mcg dose`,
            },
            {
              label: 'Insulin Syringe',
              value: calc.iuPerDose > 0 ? `${calc.iuPerDose.toFixed(2)} IU` : '—',
              sub: 'Draw to this mark',
            },
            {
              label: 'Doses per Vial',
              value: calc.dosesPerVial > 0 ? `${Math.floor(calc.dosesPerVial)} doses` : '—',
              sub: `${vialSize}mg ÷ ${desiredDose}mcg`,
            },
            {
              label: 'Days Supply',
              value: calc.daysSupply > 0 ? `${Math.floor(calc.daysSupply)} days` : '—',
              sub: 'At 1 dose/day',
            },
          ].map((r) => (
            <div key={r.label} className="text-center">
              <div className="text-slate-500 text-xs mb-1">{r.label}</div>
              <div className="text-white font-black text-sm leading-tight mb-1">{r.value}</div>
              <div className="text-slate-600 text-xs">{r.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read IU mark */}
      <div className="mt-4 flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-slate-500 text-xs leading-relaxed">
          <strong className="text-slate-400">How to read IU:</strong> On a standard 1mL insulin syringe, 100 IU = 1mL. Draw to the IU mark shown above. Example: 10 IU = 0.1mL = 100μL.
        </p>
      </div>
    </div>
  );
}
