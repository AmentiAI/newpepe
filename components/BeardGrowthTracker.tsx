'use client';

import { useState } from 'react';
import { Play, RotateCcw, FastForward } from 'lucide-react';

interface PhaseInfo {
  week: number;
  phase: 'anagen' | 'catagen' | 'telogen' | 'early-anagen';
  follicleHealth: number;
  phaseName: string;
  phaseDetail: string;
  changes: string;
  expectedVisual: string;
}

const WEEK_DATA: PhaseInfo[] = [
  { week: 0, phase: 'telogen', follicleHealth: 20, phaseName: 'Telogen (Resting)', phaseDetail: 'Most beard follicles are in a resting state. Protocol begins.', changes: 'GHK-Cu begins binding to follicle receptors. Angiogenesis signals initiated.', expectedVisual: 'No visible change. Baseline density.' },
  { week: 1, phase: 'telogen', follicleHealth: 28, phaseName: 'Telogen → Activation', phaseDetail: 'Blood vessel formation begins around follicle bulbs. Stem cell signals increase.', changes: 'Perifollicular inflammation starts to decrease. Nutrient delivery improving.', expectedVisual: 'Possible slight reduction in shedding.' },
  { week: 2, phase: 'early-anagen', follicleHealth: 36, phaseName: 'Early Anagen Entry', phaseDetail: 'Follicles begin re-entering growth phase. IGF-1 signaling peaks in follicle matrix.', changes: 'Dermal papilla cells become activated. Hair matrix cells begin dividing.', expectedVisual: 'Very subtle — some follicles may feel fuller.' },
  { week: 3, phase: 'early-anagen', follicleHealth: 44, phaseName: 'Anagen Initiation', phaseDetail: 'Active hair shaft production begins in reactivated follicles. Angiogenesis well established.', changes: 'Blood supply to follicle bulbs significantly improved. Collagen matrix strengthening.', expectedVisual: 'Early new growth may be visible in previously bare patches.' },
  { week: 4, phase: 'anagen', follicleHealth: 52, phaseName: 'Active Anagen', phaseDetail: 'Full anagen phase. Hair matrix cells dividing rapidly. Follicle enlargement underway.', changes: 'Terminal hair conversion from vellus follicles. Follicle diameter increasing.', expectedVisual: 'New fine hairs emerging. 10–20% density improvement possible.' },
  { week: 6, phase: 'anagen', follicleHealth: 60, phaseName: 'Sustained Anagen', phaseDetail: 'GHK-Cu and BPC-157 are prolonging the anagen phase beyond normal duration.', changes: 'Existing hairs growing faster. Follicle bulb enlargement measurable.', expectedVisual: 'Visible density increase in responsive areas. Hairs thickening.' },
  { week: 8, phase: 'anagen', follicleHealth: 68, phaseName: 'Peak Anagen Activity', phaseDetail: 'Follicle health score significantly elevated. Vellus-to-terminal conversion underway.', changes: 'Collagen surrounding follicle anchoring improves. Sebaceous gland optimization.', expectedVisual: 'Noticeable improvement in previously patchy areas. Density 20–35% improved.' },
  { week: 10, phase: 'anagen', follicleHealth: 74, phaseName: 'Anagen Consolidation', phaseDetail: 'Newly converted terminal follicles entering stable cycling pattern.', changes: 'Microbiome of beard skin stabilizing. Reduced inflammation markers.', expectedVisual: 'Most users see clear improvement. Patches filling in.' },
  { week: 12, phase: 'anagen', follicleHealth: 80, phaseName: 'Significant Anagen', phaseDetail: 'Three full months of protocol. Hair growth cycle comprehensively improved.', changes: 'IGF-1 levels (from CJC-1295/Ipamorelin if used) sustaining follicle anagen.', expectedVisual: 'Significant visible change for most users. 30–50% density improvement.' },
  { week: 16, phase: 'anagen', follicleHealth: 87, phaseName: 'Extended Anagen', phaseDetail: 'Anagen phase prolongation from peptide protocol extends hair growth significantly.', changes: 'Follicle anchoring structures (collagen VII/XVII) fully remodeled.', expectedVisual: 'Strong density improvement. Terminal hair coverage of formerly patchy areas.' },
  { week: 20, phase: 'catagen', follicleHealth: 91, phaseName: 'Catagen (Transition)', phaseDetail: 'Some follicles entering natural transition phase. This is normal cycling — protocol continues.', changes: 'Healthy catagen is brief (2–3 weeks). Better follicle health = faster anagen re-entry.', expectedVisual: 'Possible slight temporary plateau. Density maintained.' },
  { week: 24, phase: 'anagen', follicleHealth: 96, phaseName: 'New Anagen Cycle', phaseDetail: 'Six months. Full beard growth cycle completed. Protocol benefits fully expressed.', changes: 'Follicles now cycling at optimal health. Structural improvements permanent if maintained.', expectedVisual: 'Maximum results. 50–80% density improvement from baseline for most users.' },
];

const PHASE_COLORS = {
  anagen: { bg: 'bg-emerald-500', border: 'border-emerald-400', text: 'text-emerald-400', ring: 'ring-emerald-400' },
  'early-anagen': { bg: 'bg-teal-500', border: 'border-teal-400', text: 'text-teal-400', ring: 'ring-teal-400' },
  catagen: { bg: 'bg-amber-500', border: 'border-amber-400', text: 'text-amber-400', ring: 'ring-amber-400' },
  telogen: { bg: 'bg-slate-500', border: 'border-slate-400', text: 'text-gray-600', ring: 'ring-slate-400' },
};

const WEEK_OPTIONS = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24];

function getDataForWeek(week: number): PhaseInfo {
  const exact = WEEK_DATA.find((d) => d.week === week);
  if (exact) return exact;
  const prev = [...WEEK_DATA].reverse().find((d) => d.week <= week);
  return prev ?? WEEK_DATA[0];
}

export default function BeardGrowthTracker() {
  const [weekIndex, setWeekIndex] = useState(0);
  const currentWeek = WEEK_OPTIONS[weekIndex];
  const data = getDataForWeek(currentWeek);
  const phaseColors = PHASE_COLORS[data.phase];

  function handleSlider(e: React.ChangeEvent<HTMLInputElement>) {
    setWeekIndex(Number(e.target.value));
  }

  function reset() {
    setWeekIndex(0);
  }

  function jumpTo12() {
    setWeekIndex(WEEK_OPTIONS.indexOf(12));
  }

  const healthPct = data.follicleHealth;

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-900">Beard Growth Cycle Tracker</h3>
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 border border-gray-200 rounded-lg text-gray-800 text-sm hover:border-gray-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Start Over
          </button>
          <button
            onClick={jumpTo12}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-300 text-sm hover:bg-emerald-500/30 transition-colors"
          >
            <FastForward className="w-3.5 h-3.5" /> Week 12
          </button>
        </div>
      </div>

      {/* Hair Growth Cycle Diagram */}
      <div className="flex items-center justify-center gap-2 py-2">
        {(['anagen', 'catagen', 'telogen'] as const).map((phase, i) => {
          const isActive = data.phase === phase || (data.phase === 'early-anagen' && phase === 'anagen');
          const labels = { anagen: 'Anagen\n(Growth)', catagen: 'Catagen\n(Transition)', telogen: 'Telogen\n(Rest)' };
          const colors = PHASE_COLORS[phase];
          return (
            <div key={phase} className="flex items-center">
              <div
                className={`w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center transition-all ${
                  isActive
                    ? `${colors.bg}/30 ${colors.border} ring-2 ${colors.ring}/30 scale-110`
                    : 'bg-slate-800/50 border-gray-300'
                }`}
              >
                <span className={`text-xs font-bold text-center leading-tight ${isActive ? colors.text : 'text-gray-600'}`}>
                  {phase === 'anagen' ? 'Anagen' : phase === 'catagen' ? 'Catagen' : 'Telogen'}
                </span>
                <span className={`text-[10px] text-center leading-tight mt-0.5 ${isActive ? colors.text : 'text-gray-500'}`}>
                  {phase === 'anagen' ? '(Growth)' : phase === 'catagen' ? '(Transition)' : '(Rest)'}
                </span>
              </div>
              {i < 2 && (
                <div className="flex items-center mx-1">
                  <div className="w-6 h-px bg-slate-600" />
                  <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-slate-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Week Slider */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Week 0</span>
          <span className={`font-semibold text-sm ${phaseColors.text}`}>Week {currentWeek}</span>
          <span>Week 24</span>
        </div>
        <input
          type="range"
          min={0}
          max={WEEK_OPTIONS.length - 1}
          value={weekIndex}
          onChange={handleSlider}
          className="w-full accent-emerald-500"
        />
        <div className="flex justify-between text-[10px] text-gray-500">
          {WEEK_OPTIONS.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </div>

      {/* Follicle Health Score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 font-medium">Follicle Health Score</span>
          <span className={`text-2xl font-bold ${phaseColors.text}`}>{healthPct}</span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${phaseColors.bg}`}
            style={{ width: `${healthPct}%` }}
          />
        </div>
      </div>

      {/* Phase Detail */}
      <div className={`border rounded-lg p-4 space-y-3 ${phaseColors.border} bg-slate-900/50`}>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${PHASE_COLORS[data.phase].bg}/20 ${PHASE_COLORS[data.phase].text} border ${PHASE_COLORS[data.phase].border}`}>
            {data.phaseName}
          </span>
        </div>
        <p className="text-gray-800 text-sm">{data.phaseDetail}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <span className="text-gray-600 text-xs uppercase tracking-wide">Biological Changes</span>
            <p className="text-gray-800 text-sm mt-1">{data.changes}</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs uppercase tracking-wide">Expected Visual Change</span>
            <p className={`text-sm mt-1 font-medium ${phaseColors.text}`}>{data.expectedVisual}</p>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-xs text-center">For research purposes only. Individual results vary based on follicle baseline and genetics.</p>
    </div>
  );
}
