'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Phase {
  id: number;
  name: string;
  duration: string;
  color: string;
  barColor: string;
  textColor: string;
  borderColor: string;
  peptides: string[];
  goal: string;
  expectedChanges: string[];
  progressPercent: number;
}

const phases: Phase[] = [
  {
    id: 0,
    name: 'Foundation',
    duration: 'Week 1–4',
    color: 'bg-emerald-500/10',
    barColor: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    peptides: ['GHK-Cu (topical, 1mg/day)', 'BPC-157 (250mcg SC, 5x/week)'],
    goal: 'Establish baseline skin health, repair gut-skin axis, activate collagen synthesis pathways.',
    expectedChanges: [
      'Improved skin hydration and barrier function',
      'Reduced redness and skin inflammation',
      'Gut microbiome stabilization (fewer breakouts)',
      'Early angiogenesis in scar tissue areas',
      'Baseline collagen upregulation begins',
    ],
    progressPercent: 25,
  },
  {
    id: 1,
    name: 'Optimization',
    duration: 'Week 5–8',
    color: 'bg-purple-500/10',
    barColor: 'bg-purple-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    peptides: ['GHK-Cu (continue)', 'BPC-157 (continue)', 'SNAP-8 (topical 5–10% serum, AM+PM)'],
    goal: 'Add targeted wrinkle relaxation, establish consistent routines, begin measurable improvements.',
    expectedChanges: [
      'Visible softening of expression lines (forehead, crow\'s feet)',
      'Improved skin firmness from collagen deposition',
      'Pore size reduction visible in photos',
      'Skin texture becoming more uniform',
      'Sleep quality improvements from BPC-157 gut effects',
    ],
    progressPercent: 50,
  },
  {
    id: 2,
    name: 'Advanced',
    duration: 'Week 9–16',
    color: 'bg-blue-500/10',
    barColor: 'bg-blue-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    peptides: [
      'GHK-Cu (continue)',
      'SNAP-8 (continue)',
      'OPTION A — Fat Loss Focus: CJC-1295/Ipamorelin (300mcg/100mcg, 3x/week)',
      'OPTION B — Structural Focus: IGF-1 LR3 (50–80mcg/day, 4 weeks on/4 weeks off)',
      'OPTION C — Longevity Focus: Epithalon (10mg over 10 days, once per quarter)',
    ],
    goal: 'Introduce advanced peptides based on individual goals. GH-axis optimization for body composition and collagen; IGF-1 for structural improvements; Epithalon for cellular aging reversal.',
    expectedChanges: [
      'Measurable reduction in body fat percentage (CJC option)',
      'Improved facial volume and structural appearance (IGF-1 option)',
      'Deeper wrinkle reduction (63% depth reduction range for SNAP-8)',
      'Skin luminosity and glow significantly improved',
      'Hair density and quality improvements (GHK-Cu cumulative effect)',
    ],
    progressPercent: 75,
  },
  {
    id: 3,
    name: 'Maintenance',
    duration: 'Ongoing (Month 5+)',
    color: 'bg-amber-500/10',
    barColor: 'bg-amber-500',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    peptides: [
      'GHK-Cu (3–5x/week topical)',
      'SNAP-8 (AM application only)',
      'BPC-157 (cycle: 8 weeks on, 4 weeks off)',
      'Advanced peptides: quarterly cycles as needed',
    ],
    goal: 'Consolidate and maintain gains. Reduce frequency to maintenance dosing. Reassess goals quarterly and add targeted protocols as needed.',
    expectedChanges: [
      'All gains maintained with reduced peptide investment',
      'Collagen matrix remains upregulated with lower dose GHK-Cu',
      'Skin age reversal maintained and slowly continuing',
      'Body composition maintained or improved with lifestyle',
      'Annual Epithalon cycle for longevity and cellular repair',
    ],
    progressPercent: 100,
  },
];

export default function LooksmaxxingRoadmap() {
  const [activePhase, setActivePhase] = useState<number | null>(0);

  const togglePhase = (id: number) => {
    setActivePhase(prev => (prev === id ? null : id));
  };

  return (
    <div className="rounded-xl bg-dark-800/60 border border-white/10 p-6">
      <h3 className="text-xl font-bold text-white mb-2">Looksmaxxing Peptide Roadmap</h3>
      <p className="text-slate-400 text-sm mb-6">Click each phase to expand the full protocol details.</p>

      {/* Progress bar overview */}
      <div className="flex gap-1 mb-8 h-3 rounded-full overflow-hidden">
        {phases.map(phase => (
          <button
            key={phase.id}
            onClick={() => togglePhase(phase.id)}
            className={`flex-1 transition-all duration-300 ${phase.barColor} ${activePhase === phase.id ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
            aria-label={`Select ${phase.name} phase`}
          />
        ))}
      </div>

      <div className="space-y-3">
        {phases.map(phase => {
          const isOpen = activePhase === phase.id;
          return (
            <div
              key={phase.id}
              className={`rounded-xl border transition-all duration-300 ${phase.borderColor} ${isOpen ? phase.color : 'bg-dark-800/30 border-white/5'}`}
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${phase.barColor} text-white`}>
                    {phase.id + 1}
                  </span>
                  <div>
                    <span className={`font-bold text-base ${isOpen ? phase.textColor : 'text-white'}`}>
                      {phase.name}
                    </span>
                    <span className="text-slate-400 text-sm ml-3">{phase.duration}</span>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className={`w-5 h-5 ${phase.textColor}`} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-5 space-y-4">
                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Protocol Progress</span>
                      <span>{phase.progressPercent}%</span>
                    </div>
                    <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${phase.barColor}`}
                        style={{ width: `${phase.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Peptides */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${phase.textColor}`}>
                      Peptides Used
                    </p>
                    <ul className="space-y-1">
                      {phase.peptides.map((p, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${phase.barColor}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Goal */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${phase.textColor}`}>
                      Phase Goal
                    </p>
                    <p className="text-sm text-slate-300">{phase.goal}</p>
                  </div>

                  {/* Expected Changes */}
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${phase.textColor}`}>
                      Expected Changes
                    </p>
                    <ul className="space-y-1">
                      {phase.expectedChanges.map((c, i) => (
                        <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-xs text-slate-500 mt-4 text-center">
        For research purposes only. Not medical advice. Always consult a healthcare professional.
      </p>
    </div>
  );
}
