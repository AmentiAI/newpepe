'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function DosageCalculator() {
  const [vialMg, setVialMg] = useState<number>(5);
  const [waterMl, setWaterMl] = useState<number>(1);
  const [desiredDose, setDesiredDose] = useState<number>(250);

  const concentration = vialMg > 0 && waterMl > 0 ? (vialMg * 1000) / waterMl : 0;
  const volumeMl = concentration > 0 ? desiredDose / concentration : 0;
  const iu = volumeMl * 100;

  const isValid = vialMg > 0 && waterMl > 0 && desiredDose > 0;

  return (
    <div className="glass-card p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
          <Calculator className="w-4 h-4 text-neon-green" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Interactive Dosage Calculator</h2>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Enter your vial size, how much bacteriostatic water you add, and your desired dose to calculate exactly how much to draw.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* Vial Size */}
        <div>
          <label className="block text-xs font-semibold text-neon-green mb-2 uppercase tracking-wide">
            Vial Size (mg)
          </label>
          <input
            type="number"
            min={0.1}
            step={0.5}
            value={vialMg}
            onChange={(e) => setVialMg(parseFloat(e.target.value) || 0)}
            className="w-full bg-gray-50 border border-neon-green/20 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
            placeholder="5"
          />
          <p className="text-gray-500 text-xs mt-1">Common: 2mg, 5mg, 10mg</p>
        </div>

        {/* Bacteriostatic Water */}
        <div>
          <label className="block text-xs font-semibold text-neon-green mb-2 uppercase tracking-wide">
            Bacteriostatic Water (mL)
          </label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            value={waterMl}
            onChange={(e) => setWaterMl(parseFloat(e.target.value) || 0)}
            className="w-full bg-gray-50 border border-neon-green/20 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
            placeholder="1"
          />
          <p className="text-gray-500 text-xs mt-1">Common: 1mL, 2mL, 3mL</p>
        </div>

        {/* Desired Dose */}
        <div>
          <label className="block text-xs font-semibold text-neon-green mb-2 uppercase tracking-wide">
            Desired Dose (mcg)
          </label>
          <input
            type="number"
            min={1}
            step={25}
            value={desiredDose}
            onChange={(e) => setDesiredDose(parseFloat(e.target.value) || 0)}
            className="w-full bg-gray-50 border border-neon-green/20 rounded-lg px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-neon-green/60 focus:ring-1 focus:ring-neon-green/30 transition-colors"
            placeholder="250"
          />
          <p className="text-gray-500 text-xs mt-1">Common: 250mcg, 500mcg</p>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gray-50 rounded-xl border border-neon-green/10 p-5">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-4">Calculated Results</p>
        {isValid ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-gray-600 text-xs mb-1">Concentration</p>
              <p className="text-2xl font-black text-neon-green">{concentration.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
              <p className="text-gray-600 text-xs">mcg / mL</p>
            </div>
            <div className="text-center border-x border-neon-green/10">
              <p className="text-gray-600 text-xs mb-1">Volume to Draw</p>
              <p className="text-2xl font-black text-gray-900">{volumeMl.toFixed(3)}</p>
              <p className="text-gray-600 text-xs">mL</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-xs mb-1">IU on 1mL Syringe</p>
              <p className="text-2xl font-black text-gray-900">{iu.toFixed(1)}</p>
              <p className="text-gray-600 text-xs">IU mark</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-sm text-center py-2">Enter valid values above to see results.</p>
        )}
      </div>

      {isValid && (
        <div className="mt-4 bg-neon-green/5 border border-neon-green/15 rounded-lg px-4 py-3">
          <p className="text-gray-800 text-xs leading-relaxed">
            <span className="text-neon-green font-semibold">Summary: </span>
            With a {vialMg}mg vial reconstituted in {waterMl}mL of bacteriostatic water, each mL contains{' '}
            <span className="text-gray-900 font-semibold">{concentration.toLocaleString('en-US', { maximumFractionDigits: 0 })}mcg</span>.
            To inject {desiredDose}mcg, draw{' '}
            <span className="text-gray-900 font-semibold">{volumeMl.toFixed(3)}mL</span> — pull the plunger to the{' '}
            <span className="text-gray-900 font-semibold">{iu.toFixed(1)} IU</span> mark on a standard 1mL insulin syringe.
          </p>
        </div>
      )}

      <p className="text-gray-500 text-xs mt-4">
        Always use bacteriostatic water (not sterile water) for multi-use vials. Refrigerate after reconstitution. Use within 28-30 days.
      </p>
    </div>
  );
}
