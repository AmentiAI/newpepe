'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-react';

const severityLevels = [
  {
    grade: 'Mild',
    label: 'Grade 1',
    icon: CheckCircle,
    color: 'text-emerald-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    activeBorder: 'border-emerald-400',
    activeBg: 'bg-emerald-500/20',
    description: 'Micro-tears, tendinopathy, mild strain — pain with activity but not at rest. Tissue integrity intact.',
    protocol: {
      dose: '250mcg/day',
      frequency: 'Once daily, morning',
      duration: '3–5 weeks',
      route: 'Subcutaneous (local, near injury)',
      expected: '2–3 weeks for pain reduction, 4–5 weeks for full tissue recovery',
      notes: 'Oral BPC-157 alone may be sufficient for Grade 1 injuries. If injectable, a single local SC injection near the injury site is recommended. Light eccentric loading can begin in week 2.',
      activities: 'Walking, swimming, light stretching — avoid loaded exercises on the affected tendon.',
    },
  },
  {
    grade: 'Moderate',
    label: 'Grade 2',
    icon: AlertTriangle,
    color: 'text-amber-400',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10',
    activeBorder: 'border-amber-400',
    activeBg: 'bg-amber-500/20',
    description: 'Partial tear (10–90% fiber disruption). Significant pain during and after activity. Noticeable swelling or bruising.',
    protocol: {
      dose: '500mcg/day',
      frequency: 'Split: 250mcg AM + 250mcg PM',
      duration: '6–10 weeks',
      route: 'Local SC injection + optional oral supplementation',
      expected: 'Pain reduction: 1–2 weeks. Functional recovery: 6–8 weeks. Return to sport: 8–10 weeks.',
      notes: 'Grade 2 injuries benefit significantly from the BPC-157 + TB-500 Wolverine Stack. TB-500 adds systemic stem cell mobilization and actin polymerization that accelerates structural repair beyond what BPC-157 alone achieves.',
      activities: 'Rest in week 1–2. Unloaded range of motion in week 3. Gradual bodyweight loading in week 4–6. Progressive resistance from week 7.',
    },
  },
  {
    grade: 'Severe',
    label: 'Grade 3',
    icon: AlertCircle,
    color: 'text-red-400',
    border: 'border-red-500/40',
    bg: 'bg-red-500/10',
    activeBorder: 'border-red-400',
    activeBg: 'bg-red-500/20',
    description: 'Complete or near-complete rupture. Often requires surgical evaluation. Significant functional deficit.',
    protocol: {
      dose: '500–1000mcg/day (split dose)',
      frequency: '250–500mcg AM + 250–500mcg PM',
      duration: '12–16 weeks post-injury or post-surgery',
      route: 'Systemic SC (abdomen) + local SC when tolerated',
      expected: 'BPC-157 accelerates post-surgical healing but cannot replace surgical repair for complete ruptures. Expect 12–16 weeks for functional recovery with BPC-157 vs 6–12 months without.',
      notes: 'Consult an orthopedic surgeon for complete ruptures before self-treating. BPC-157 is most valuable as post-surgical adjuvant therapy. Stack with TB-500 500mcg 2x/week. Consider GH peptides (GHRP-6/CJC-1295) for additional anabolic support.',
      activities: 'Physician-directed rehabilitation protocol. BPC-157 accelerates each rehabilitation phase by 30–50% based on animal data. Do not return to sport without clearance.',
    },
  },
];

export default function InjurySeveritySelector() {
  const [selected, setSelected] = useState<number | null>(null);

  const active = selected !== null ? severityLevels[selected] : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {severityLevels.map((level, i) => {
          const Icon = level.icon;
          const isSelected = selected === i;
          return (
            <button
              key={level.grade}
              onClick={() => setSelected(isSelected ? null : i)}
              className={`glass-card p-5 text-left transition-all duration-200 cursor-pointer border ${
                isSelected
                  ? `${level.activeBorder} ${level.activeBg}`
                  : `${level.border} ${level.bg} hover:opacity-90`
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className={`w-5 h-5 ${level.color}`} />
                <div>
                  <div className={`font-black text-lg ${level.color}`}>{level.grade}</div>
                  <div className="text-slate-500 text-xs">{level.label}</div>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{level.description}</p>
              <div className={`mt-3 text-xs font-semibold ${level.color}`}>
                {isSelected ? 'Selected — see protocol below' : 'Click to see protocol'}
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className={`glass-card p-6 border ${active.activeBorder} ${active.activeBg} transition-all duration-300`}
        >
          <div className={`text-xs font-bold tracking-widest mb-4 ${active.color}`}>
            RECOMMENDED PROTOCOL — {active.grade.toUpperCase()} ({active.label.toUpperCase()})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <p className="text-slate-500 text-xs mb-1">Daily Dose</p>
              <p className={`font-mono font-bold ${active.color}`}>{active.protocol.dose}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-1">Frequency</p>
              <p className="text-white text-sm">{active.protocol.frequency}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-1">Protocol Duration</p>
              <p className="text-white text-sm">{active.protocol.duration}</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs mb-1">Injection Route</p>
              <p className="text-white text-sm">{active.protocol.route}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-slate-500 text-xs mb-1">Expected Timeline</p>
              <p className={`text-sm font-semibold ${active.color}`}>{active.protocol.expected}</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="text-slate-500 text-xs mb-2 font-semibold">PROTOCOL NOTES</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">{active.protocol.notes}</p>
            <p className="text-slate-500 text-xs mb-1 font-semibold">ACTIVITY GUIDANCE</p>
            <p className="text-slate-400 text-sm leading-relaxed">{active.protocol.activities}</p>
          </div>
        </div>
      )}
    </div>
  );
}
