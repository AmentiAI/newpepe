'use client';

import { useState } from 'react';

type Metric = 'weight' | 'hba1c' | 'visceral' | 'cardio';

const metrics: { id: Metric; label: string; unit: string }[] = [
  { id: 'weight', label: 'Body Weight Reduction', unit: '% avg' },
  { id: 'hba1c', label: 'HbA1c Reduction', unit: '% points' },
  { id: 'visceral', label: 'Visceral Fat Reduction', unit: 'relative' },
  { id: 'cardio', label: 'Cardiovascular Benefit', unit: 'relative' },
];

const data: Record<Metric, { sema: number; tirz: number; semaLabel: string; tirzLabel: string; source: string }> = {
  weight: {
    sema: 15,
    tirz: 22.5,
    semaLabel: '~15% (STEP trials)',
    tirzLabel: '22.5% (SURMOUNT-1)',
    source: 'SURPASS-2 head-to-head: tirzepatide outperformed semaglutide at all three doses (5mg, 10mg, 15mg).',
  },
  hba1c: {
    sema: 1.8,
    tirz: 2.5,
    semaLabel: '~1.8% pts (SUSTAIN)',
    tirzLabel: '~2.5% pts (SURPASS)',
    source: 'SURPASS-2: tirzepatide reduced HbA1c significantly more than semaglutide 1mg at every dose.',
  },
  visceral: {
    sema: 65,
    tirz: 100,
    semaLabel: 'Significant reduction',
    tirzLabel: 'Superior reduction (GIP effect)',
    source: 'GIP receptor agonism in tirzepatide has preferential effects on visceral adipose tissue — metabolically dangerous fat surrounding organs.',
  },
  cardio: {
    sema: 80,
    tirz: 100,
    semaLabel: '20% CV event reduction (SELECT)',
    tirzLabel: 'Emerging superiority (SURMOUNT-5)',
    source: 'SELECT trial confirmed semaglutide\'s CV benefit. Tirzepatide\'s SURMOUNT-5 data suggests equal or superior cardioprotection.',
  },
};

export default function TirzepatideVsSema() {
  const [metric, setMetric] = useState<Metric>('weight');
  const d = data[metric];
  const semaWidth = (d.sema / Math.max(d.sema, d.tirz)) * 100;
  const tirzWidth = (d.tirz / Math.max(d.sema, d.tirz)) * 100;

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-white font-black text-lg mb-1">Tirzepatide vs Semaglutide — Head-to-Head Data</h3>
        <p className="text-slate-400 text-sm">Select a clinical metric to compare outcomes from published trial data.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {metrics.map((m) => (
          <button
            key={m.id}
            onClick={() => setMetric(m.id)}
            className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
              metric === m.id
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                : 'bg-dark-800/40 border-slate-700/40 text-slate-400 hover:text-slate-200'
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {/* Semaglutide bar */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-blue-400 text-sm font-bold">Semaglutide (GLP-1 S)</span>
            <span className="text-blue-400 text-sm font-bold">{d.semaLabel}</span>
          </div>
          <div className="h-8 bg-slate-800 rounded-xl overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-xl flex items-center justify-end pr-3 transition-all duration-700"
              style={{ width: `${semaWidth}%` }}
            >
              <span className="text-white text-xs font-bold">{d.semaLabel}</span>
            </div>
          </div>
        </div>

        {/* Tirzepatide bar */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-emerald-400 text-sm font-bold">Tirzepatide (GLP-2 T)</span>
            <span className="text-emerald-400 text-sm font-bold">{d.tirzLabel}</span>
          </div>
          <div className="h-8 bg-slate-800 rounded-xl overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-xl flex items-center justify-end pr-3 transition-all duration-700"
              style={{ width: `${tirzWidth}%` }}
            >
              <span className="text-white text-xs font-bold">{d.tirzLabel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl p-4 bg-emerald-500/8 border border-emerald-500/20">
        <p className="text-slate-300 text-sm leading-relaxed">{d.source}</p>
      </div>

      <div className="rounded-xl p-4 bg-dark-800/40 border border-slate-700/30">
        <p className="text-slate-400 text-xs leading-relaxed">
          <strong className="text-slate-300">Why tirzepatide outperforms:</strong> Dual GIP + GLP-1 receptor agonism produces synergistic effects
          that neither receptor can achieve alone. GIP receptor activation directly impacts adipose tissue and potentiates insulin secretion
          through a different mechanism than GLP-1, explaining the superior clinical outcomes.
        </p>
      </div>

      <p className="text-slate-600 text-xs">Data sourced from STEP, SUSTAIN, SURPASS, and SURMOUNT clinical trial programs. For educational purposes.</p>
    </div>
  );
}
