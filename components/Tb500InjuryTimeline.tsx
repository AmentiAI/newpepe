'use client';

import { useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const injuries = [
  {
    id: 'muscle-tear',
    label: 'Muscle Tear / Strain',
    weeks: [
      { week: '1–2', milestone: 'Pain and inflammation begin to subside. TB-500 initiates actin-binding cascade.' },
      { week: '3–4', milestone: 'Stem cells mobilized from bone marrow arrive at tear site. Fiber regeneration begins.' },
      { week: '5–8', milestone: 'Structural repair of muscle fibers. Strength and flexibility measurably return.' },
      { week: '8–12', milestone: 'Full functional recovery. Reduced scar tissue vs. natural healing.' },
    ],
    natural: '12–24 weeks',
    tbWeeks: '6–10 weeks',
    color: 'emerald',
  },
  {
    id: 'tendon',
    label: 'Tendon / Ligament',
    weeks: [
      { week: '1–2', milestone: 'Anti-inflammatory signaling reduces local pain and swelling rapidly.' },
      { week: '3–6', milestone: 'Collagen synthesis increases in tendon sheath. Early structural repair visible on imaging.' },
      { week: '6–10', milestone: 'Tensile strength of tendon significantly improved. Stack with BPC-157 for faster results.' },
      { week: '10–14', milestone: 'Near-complete tendon repair with improved elasticity vs. control subjects.' },
    ],
    natural: '24–52 weeks',
    tbWeeks: '10–14 weeks',
    color: 'blue',
  },
  {
    id: 'joint',
    label: 'Joint / Cartilage',
    weeks: [
      { week: '1–3', milestone: 'Synovial inflammation reduced. Joint mobility begins to improve.' },
      { week: '3–6', milestone: 'Cartilage repair markers increase. Early restoration of joint cushioning.' },
      { week: '6–10', milestone: 'Sustained flexibility improvements. Many users report feeling "10 years younger" in affected joints.' },
      { week: '10–16', milestone: 'Ongoing cartilage regeneration. Maintenance doses extend and consolidate gains.' },
    ],
    natural: 'Often permanent damage — limited natural repair',
    tbWeeks: '10–16 weeks (ongoing improvement)',
    color: 'purple',
  },
  {
    id: 'cardiac',
    label: 'Cardiac / Ischemia',
    weeks: [
      { week: '1–2', milestone: 'Cardioprotective signaling initiated. Reduced oxidative stress markers in cardiac tissue.' },
      { week: '2–4', milestone: 'Angiogenesis begins — new capillary formation to oxygen-deprived areas.' },
      { week: '4–8', milestone: 'Cardiac tissue remodeling. Ejection fraction improvements seen in animal studies.' },
      { week: '8–12', milestone: 'Sustained cardiac function improvement. Anti-fibrotic effects reduce scar tissue.' },
    ],
    natural: 'Permanent damage in most ischemia cases',
    tbWeeks: '8–12 weeks (animal data)',
    color: 'rose',
  },
];

const colorClasses: Record<string, { text: string; bg: string; border: string; bar: string }> = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/25', bar: 'bg-emerald-500' },
  blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/25', bar: 'bg-blue-500' },
  purple: { text: 'text-amber-600', bg: 'bg-purple-500/10', border: 'border-amber-400/25', bar: 'bg-purple-500' },
  rose: { text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/25', bar: 'bg-rose-500' },
};

export default function Tb500InjuryTimeline() {
  const [selected, setSelected] = useState(injuries[0]);
  const c = colorClasses[selected.color];

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-gray-900 font-black text-lg mb-1">TB-500 Healing Timeline by Injury Type</h3>
        <p className="text-gray-600 text-sm">Select your injury type to see the research-based healing progression on a TB-500 protocol.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {injuries.map((inj) => (
          <button
            key={inj.id}
            onClick={() => setSelected(inj)}
            className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
              selected.id === inj.id
                ? `${colorClasses[inj.color].bg} ${colorClasses[inj.color].border} ${colorClasses[inj.color].text}`
                : 'bg-gray-50 border-gray-200/40 text-gray-600 hover:text-gray-900'
            }`}
          >
            {inj.label}
          </button>
        ))}
      </div>

      <div className={`rounded-xl p-4 ${c.bg} border ${c.border}`}>
        <div className="flex items-center gap-4 text-sm mb-4">
          <div>
            <p className="text-gray-600 text-xs mb-0.5">Natural Recovery</p>
            <p className="text-gray-800 font-semibold">{selected.natural}</p>
          </div>
          <div className={`w-px h-8 ${c.bar} opacity-30`} />
          <div>
            <p className="text-gray-600 text-xs mb-0.5">TB-500 Protocol</p>
            <p className={`${c.text} font-bold`}>{selected.tbWeeks}</p>
          </div>
        </div>

        <div className="space-y-3">
          {selected.weeks.map((w, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${c.bg} border ${c.border} ${c.text}`}>
                {i + 1}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <Clock className={`w-3.5 h-3.5 ${c.text}`} />
                  <span className={`${c.text} text-xs font-bold`}>Week {w.week}</span>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">{w.milestone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-gray-500 text-xs">
        Timeline estimates based on animal model research. Results vary with dose, severity, and individual factors. Stack TB-500 with BPC-157 for optimal outcomes.
      </p>
    </div>
  );
}
