'use client';

import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Award, ArrowUpDown } from 'lucide-react';

interface CollagenType {
  label: string;
  color: string;
}

interface PeptideEntry {
  rank: number;
  name: string;
  collagenTypes: CollagenType[];
  evidence: number;
  mechanism: string;
  timeline: string;
  dose: string;
  route: string;
  cycle: string;
  costEffectiveness: number;
  speedScore: number;
  bestEvidence?: boolean;
}

const PEPTIDES: PeptideEntry[] = [
  {
    rank: 1,
    name: 'GHK-Cu',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
      { label: 'Type III', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
      { label: 'Type IV', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30' },
    ],
    evidence: 5,
    mechanism: 'Activates 30+ growth factors, resets aged gene expression, stimulates fibroblasts to produce collagen I, III, and IV simultaneously',
    timeline: '4–8 weeks (skin texture), 8–16 weeks (structural collagen)',
    dose: '1–2 mg/day',
    route: 'Topical (serum) or subcutaneous injection',
    cycle: 'Continuous or 12 weeks on / 4 weeks off',
    costEffectiveness: 5,
    speedScore: 4,
    bestEvidence: true,
  },
  {
    rank: 2,
    name: 'BPC-157',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
      { label: 'Type III', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
    ],
    evidence: 4,
    mechanism: 'Drives angiogenesis → fibroblast activation → collagen synthesis. Works locally and systemically via VEGF/PDGF pathways',
    timeline: '4–8 weeks systemic, faster for localized injury sites',
    dose: '250–500 mcg/day',
    route: 'Oral, subcutaneous, or intramuscular',
    cycle: '8–12 weeks on / 4 weeks off',
    costEffectiveness: 5,
    speedScore: 4,
    bestEvidence: false,
  },
  {
    rank: 3,
    name: 'IGF-1 LR3',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
      { label: 'Type III', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
    ],
    evidence: 4,
    mechanism: 'Directly stimulates fibroblast collagen synthesis via IGF-1 receptor signaling; increases growth factor activity throughout the body',
    timeline: '6–10 weeks for measurable collagen output increase',
    dose: '20–50 mcg/day',
    route: 'Subcutaneous injection',
    cycle: '4–6 weeks on / 4 weeks off',
    costEffectiveness: 3,
    speedScore: 4,
    bestEvidence: false,
  },
  {
    rank: 4,
    name: 'CJC-1295 / Ipamorelin',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
      { label: 'Type II', color: 'bg-green-500/20 text-green-300 border border-green-500/30' },
      { label: 'Type III', color: 'bg-purple-500/20 text-purple-300 border border-purple-500/30' },
    ],
    evidence: 4,
    mechanism: 'GH pulse stimulation → systemic IGF-1 elevation → widespread collagen synthesis throughout skin, joints, and connective tissue',
    timeline: '8–12 weeks for noticeable skin quality change',
    dose: 'CJC: 100–300 mcg + Ipamorelin: 100–300 mcg',
    route: 'Subcutaneous injection (before bed)',
    cycle: '3 months on / 1 month off',
    costEffectiveness: 3,
    speedScore: 3,
    bestEvidence: false,
  },
  {
    rank: 5,
    name: 'Epithalon',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
      { label: 'Type IV', color: 'bg-blue-500/20 text-blue-300 border border-blue-500/30' },
    ],
    evidence: 3,
    mechanism: 'Telomere protection → skin cell longevity → sustained collagen production capacity; prevents cellular senescence in fibroblasts',
    timeline: '3–6 months for longevity-level skin improvements',
    dose: '5–10 mg per cycle (total)',
    route: 'Subcutaneous or intravenous',
    cycle: '10-day course, 2x per year',
    costEffectiveness: 4,
    speedScore: 2,
    bestEvidence: false,
  },
  {
    rank: 6,
    name: 'SNAP-8',
    collagenTypes: [
      { label: 'Type I', color: 'bg-amber-500/20 text-amber-300 border border-amber-500/30' },
    ],
    evidence: 3,
    mechanism: 'Blocks neuromuscular signals that cause repetitive facial muscle contractions; indirectly preserves collagen by reducing mechanical breakdown in expression lines',
    timeline: '4–8 weeks (relaxation of expression lines)',
    dose: '10% concentration in topical serum',
    route: 'Topical only',
    cycle: 'Continuous daily application',
    costEffectiveness: 4,
    speedScore: 3,
    bestEvidence: false,
  },
];

type SortKey = 'rank' | 'evidence' | 'speedScore' | 'costEffectiveness';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'rank', label: 'Best Evidence' },
  { key: 'speedScore', label: 'Speed' },
  { key: 'costEffectiveness', label: 'Cost-Effectiveness' },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= count ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`}
        />
      ))}
    </span>
  );
}

export default function CollagenBoostRanking() {
  const [selectedPeptide, setSelectedPeptide] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>('rank');

  const sorted = [...PEPTIDES].sort((a, b) => {
    if (sortBy === 'rank') return a.rank - b.rank;
    if (sortBy === 'evidence') return b.evidence - a.evidence;
    if (sortBy === 'speedScore') return b.speedScore - a.speedScore;
    if (sortBy === 'costEffectiveness') return b.costEffectiveness - a.costEffectiveness;
    return 0;
  });

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold text-slate-100">Collagen-Boosting Peptide Rankings</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                sortBy === opt.key
                  ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50'
                  : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {sorted.map((peptide) => {
          const isOpen = selectedPeptide === peptide.name;
          return (
            <div key={peptide.name} className="border border-slate-700/50 rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedPeptide(isOpen ? null : peptide.name)}
                className="w-full text-left p-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-sm font-bold flex-shrink-0">
                    {peptide.rank}
                  </span>
                  <span className="font-semibold text-slate-100 min-w-[110px]">{peptide.name}</span>

                  {peptide.bestEvidence && (
                    <span className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs px-2 py-0.5 rounded-full font-semibold">
                      <Award className="w-3 h-3" />
                      Best Evidence
                    </span>
                  )}

                  <div className="flex gap-1 flex-wrap">
                    {peptide.collagenTypes.map((ct) => (
                      <span key={ct.label} className={`text-xs px-2 py-0.5 rounded-full ${ct.color}`}>
                        {ct.label}
                      </span>
                    ))}
                  </div>

                  <div className="ml-auto flex items-center gap-3">
                    <StarRating count={peptide.evidence} />
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mt-2 ml-10">{peptide.mechanism}</p>
              </button>

              {isOpen && (
                <div className="border-t border-slate-700/50 bg-slate-900/50 p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400 text-xs uppercase tracking-wide">Dose</span>
                    <p className="text-slate-200 mt-1">{peptide.dose}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs uppercase tracking-wide">Route</span>
                    <p className="text-slate-200 mt-1">{peptide.route}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs uppercase tracking-wide">Cycle</span>
                    <p className="text-slate-200 mt-1">{peptide.cycle}</p>
                  </div>
                  <div className="sm:col-span-3">
                    <span className="text-slate-400 text-xs uppercase tracking-wide">Expected Timeline</span>
                    <p className="text-amber-300 mt-1 font-medium">{peptide.timeline}</p>
                  </div>
                  <div className="sm:col-span-3 flex gap-4">
                    <div className="flex-1">
                      <span className="text-slate-400 text-xs uppercase tracking-wide">Speed</span>
                      <div className="mt-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${(peptide.speedScore / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-slate-400 text-xs uppercase tracking-wide">Cost-Effectiveness</span>
                      <div className="mt-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${(peptide.costEffectiveness / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-slate-500 text-xs text-center pt-2">
        Click any peptide row to expand dosing details. For research purposes only.
      </p>
    </div>
  );
}
