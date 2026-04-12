'use client';

import { useState } from 'react';

const receptors = [
  {
    id: 'glp1',
    name: 'GLP-1 Receptor',
    badge: 'Satiety',
    color: 'blue',
    effects: [
      { label: 'Appetite Suppression', detail: 'Acts on hypothalamic GLP-1 receptors to reduce hunger signals and extend satiety between meals.' },
      { label: 'Gastric Emptying', detail: 'Slows gastric emptying, extending the satiety signal from meals and improving post-meal glucose control.' },
      { label: 'Insulin Secretion', detail: 'Glucose-dependent insulin stimulation — only triggers insulin release when blood glucose is elevated, minimizing hypoglycemia risk.' },
    ],
    trialNote: 'Shared mechanism with semaglutide. Contributes ~15% weight loss on its own.',
    icon: '🧠',
  },
  {
    id: 'gip',
    name: 'GIP Receptor',
    badge: 'Metabolic',
    color: 'purple',
    effects: [
      { label: 'Adipose Tissue Regulation', detail: 'GIP receptors in fat tissue directly regulate fat storage — a mechanism entirely absent from GLP-1-only compounds.' },
      { label: 'Insulin Potentiation', detail: 'Synergistically potentiates GLP-1\'s insulin secretion effect for superior glycemic control.' },
      { label: 'Visceral Fat Priority', detail: 'Preferential reduction of visceral fat — the metabolically dangerous fat surrounding abdominal organs.' },
    ],
    trialNote: 'Adding GIP to GLP-1 pushed weight loss from ~15% (sema) to ~22.5% (tirz) in SURMOUNT.',
    icon: '⚗️',
  },
  {
    id: 'glucagon',
    name: 'Glucagon Receptor',
    badge: 'Fat Burning',
    color: 'amber',
    effects: [
      { label: 'Hepatic Fat Oxidation', detail: 'Glucagon receptor activation drives the liver to burn fat directly — reducing liver fat and raising overall fat oxidation.' },
      { label: 'Basal Metabolic Rate', detail: 'Raises resting energy expenditure — you burn more calories at rest. The key driver of retatrutide\'s superior weight loss.' },
      { label: 'Lipolysis', detail: 'Promotes fat cell breakdown (lipolysis) in adipose tissue, freeing fatty acids for fuel.' },
    ],
    trialNote: 'The glucagon arm is the key differentiator. Without it, retatrutide would perform like tirzepatide.',
    icon: '🔥',
  },
];

const colorClass: Record<string, { text: string; bg: string; border: string; badge: string }> = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25', badge: 'bg-blue-500/20 text-blue-300' },
  purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/25', badge: 'bg-purple-500/20 text-purple-300' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/25', badge: 'bg-amber-500/20 text-amber-300' },
};

export default function RetatrutideTripleMechanism() {
  const [active, setActive] = useState('glp1');
  const receptor = receptors.find((r) => r.id === active)!;
  const c = colorClass[receptor.color];

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-white font-black text-lg mb-1">Retatrutide: Triple Receptor Mechanism Explorer</h3>
        <p className="text-slate-400 text-sm">
          Retatrutide activates three receptors simultaneously. Select each to understand its unique contribution to the 24% weight loss result.
        </p>
      </div>

      {/* Receptor selector */}
      <div className="grid grid-cols-3 gap-2">
        {receptors.map((r) => {
          const cc = colorClass[r.color];
          const isActive = active === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`p-3 rounded-xl border transition-all text-center ${
                isActive ? `${cc.bg} ${cc.border} ${cc.text}` : 'bg-dark-800/40 border-slate-700/40 text-slate-400'
              }`}
            >
              <div className="text-xl mb-1">{r.icon}</div>
              <div className="text-xs font-bold leading-tight">{r.name}</div>
              <div className={`text-xs mt-1 px-2 py-0.5 rounded-full inline-block ${isActive ? cc.badge : 'bg-slate-700/30 text-slate-500'}`}>
                {r.badge}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className={`rounded-xl p-5 ${c.bg} border ${c.border} space-y-3`}>
        <h4 className={`${c.text} font-bold text-base`}>{receptor.name} — What It Does</h4>
        {receptor.effects.map((effect) => (
          <div key={effect.label} className="space-y-1">
            <p className="text-slate-200 text-sm font-semibold">{effect.label}</p>
            <p className="text-slate-400 text-sm leading-relaxed">{effect.detail}</p>
          </div>
        ))}
        <div className={`rounded-lg p-3 border ${c.border} bg-dark-800/30 mt-2`}>
          <p className={`${c.text} text-xs font-semibold mb-0.5`}>Clinical Context</p>
          <p className="text-slate-400 text-xs leading-relaxed">{receptor.trialNote}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-xl p-4 bg-dark-800/30 border border-slate-700/30">
        <div className="flex items-center gap-4 text-center">
          <div className="flex-1">
            <div className="text-blue-400 font-black text-lg">15%</div>
            <div className="text-slate-500 text-xs">Semaglutide<br/>(GLP-1 only)</div>
          </div>
          <div className="text-slate-600 text-sm font-bold">→</div>
          <div className="flex-1">
            <div className="text-purple-400 font-black text-lg">22.5%</div>
            <div className="text-slate-500 text-xs">Tirzepatide<br/>(GLP-1 + GIP)</div>
          </div>
          <div className="text-slate-600 text-sm font-bold">→</div>
          <div className="flex-1">
            <div className="text-amber-400 font-black text-lg">24.2%</div>
            <div className="text-slate-500 text-xs">Retatrutide<br/>(GLP-1 + GIP + Glucagon)</div>
          </div>
        </div>
      </div>

      <p className="text-slate-600 text-xs">Phase II data. Phase III ongoing. For research and educational purposes only.</p>
    </div>
  );
}
