'use client';

import { useState } from 'react';

type WeekData = {
  weekRange: string;
  weeks: [number, number];
  sleep: string;
  bodyComp: string;
  energy: string;
  recovery: string;
  skinHair: string;
  milestone: string;
  color: string;
};

const weekData: WeekData[] = [
  {
    weekRange: 'Weeks 1–2',
    weeks: [1, 2],
    sleep: 'Noticeably deeper sleep within 3–5 injections. More vivid dreams (a sign of GH activity during REM). Most users report waking more refreshed and less groggy.',
    bodyComp: 'No visible body composition changes yet. GH levels are rising but tissue-level changes take time to accumulate. Scale weight unchanged.',
    energy: 'Subtle improvement in daytime alertness beginning by the end of week 2, primarily driven by improved sleep architecture.',
    recovery: 'Minimal change in workout recovery at this stage. Some users report slightly less DOMS by the end of week 2.',
    skinHair: 'No noticeable change yet. Collagen synthesis is just beginning to respond to elevated GH/IGF-1.',
    milestone: 'Sleep quality improvement is the key early signal. If you\'re not sleeping better by day 7–10, revisit your protocol timing and fasting window.',
    color: 'blue',
  },
  {
    weekRange: 'Weeks 3–4',
    weeks: [3, 4],
    sleep: 'Sleep quality is consistently improved. Many users report they no longer need an alarm — they wake naturally feeling rested.',
    bodyComp: 'Subtle muscle fullness — muscles may appear slightly more pumped due to improved glycogen storage and intramuscular fluid. Scale weight unchanged or up slightly.',
    energy: 'Energy levels noticeably elevated throughout the day. Many users report they need less caffeine and feel less energy crashes in the afternoon.',
    recovery: 'Faster recovery between training sessions is now clearly apparent. DOMS shorter in duration. Can typically handle higher training volume without overtraining symptoms.',
    skinHair: 'Very early skin texture improvement — pores may appear slightly tighter. Some users notice nails growing faster.',
    milestone: 'This is the week most users first notice they\'re genuinely recovering faster. Training volume can start to increase moderately.',
    color: 'emerald',
  },
  {
    weekRange: 'Weeks 5–8',
    weeks: [5, 8],
    sleep: 'Sleep quality is now consistently excellent. The majority of users report this is the best sleep of their adult life during this phase.',
    bodyComp: 'Visible fat loss begins — particularly around the midsection. Body weight on scale may increase or hold while body fat drops, due to concurrent muscle preservation. Body fat measurements are more meaningful than scale weight here.',
    energy: 'Sustained, consistent energy throughout the day. Some users describe this as feeling like they\'re 10 years younger in terms of vitality and motivation.',
    recovery: 'Recovery is dramatically faster. Most users can train 5–6 days per week without overtraining symptoms. Joint discomfort often improves (GH promotes synovial fluid and cartilage collagen).',
    skinHair: 'Skin tightening and improved texture becoming noticeable to others. Hair may become slightly thicker or faster-growing for some users.',
    milestone: 'The "inflection point" for many users. Body composition changes are now visible in the mirror, not just on measurements.',
    color: 'purple',
  },
  {
    weekRange: 'Weeks 9–12',
    weeks: [9, 12],
    sleep: 'Sleep optimization is sustained. Users who cycle off here often report their sleep quality beginning to decline within 2–3 weeks as GH normalizes.',
    bodyComp: 'Fat loss accelerating — the cumulative GH-driven lipolytic effect is at or near peak. Most significant body composition changes visible. Lean muscle becomes more prominent and defined.',
    energy: 'Peak energy levels. Many users report optimal mental clarity, motivation, and physical performance during this window.',
    recovery: 'Near-complete workout recovery between sessions. Soft-tissue injuries may heal faster if present. Joint health markedly improved.',
    skinHair: 'Skin quality, elasticity, and tone clearly improved. Some users notice reduced fine lines. Hair quality improvements (thickness, shine) more pronounced.',
    milestone: 'Most users consider month 3 the peak window of the initial cycle. This is when results become clearly visible to others without prompting.',
    color: 'emerald',
  },
  {
    weekRange: 'Weeks 13–16',
    weeks: [13, 16],
    sleep: 'Sleep benefits fully sustained. Users running a 5-on/2-off protocol maintain consistent results through this phase.',
    bodyComp: 'Continued body composition improvement, though rate of change slows vs peak phase. IGF-1 levels are elevated sustainably. Some users choose to cycle off here for 4–6 weeks before restarting.',
    energy: 'Energy levels remain elevated. Hormonal optimization from sustained IGF-1 elevation contributes to overall well-being.',
    recovery: 'Consistently superior recovery maintained. This phase is ideal for athletes pushing peak training volume.',
    skinHair: 'Anti-aging effects on skin and hair are now well-established. Collagen synthesis improvements are structural and accumulate over time.',
    milestone: 'Long-term users often cycle off for 4–6 weeks at this point and note that results are substantially retained — especially body composition and skin changes.',
    color: 'blue',
  },
];

function getWeekPhase(week: number): number {
  if (week <= 2) return 0;
  if (week <= 4) return 1;
  if (week <= 8) return 2;
  if (week <= 12) return 3;
  return 4;
}

const colorMap: Record<string, { text: string; bg: string; border: string; bar: string }> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    bar: 'bg-blue-500',
  },
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    bar: 'bg-emerald-500',
  },
  purple: {
    text: 'text-amber-600',
    bg: 'bg-purple-500/10',
    border: 'border-amber-400/30',
    bar: 'bg-purple-500',
  },
};

export default function GhResultsTracker() {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const phaseIndex = getWeekPhase(selectedWeek);
  const phase = weekData[phaseIndex];
  const colors = colorMap[phase.color];
  const progressPercent = Math.round((selectedWeek / 16) * 100);

  const categories = [
    { label: 'Sleep Quality', icon: '🌙', value: phase.sleep },
    { label: 'Body Composition', icon: '💪', value: phase.bodyComp },
    { label: 'Energy Levels', icon: '⚡', value: phase.energy },
    { label: 'Recovery Speed', icon: '🔄', value: phase.recovery },
    { label: 'Skin & Hair', icon: '✨', value: phase.skinHair },
  ];

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-black text-gray-900 mb-1">Interactive Results Tracker</h3>
        <p className="text-gray-600 text-sm">Select your current week to see what changes to expect.</p>
      </div>

      {/* Week Selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 text-xs">Week 1</span>
          <span className={`font-black text-lg ${colors.text}`}>Week {selectedWeek}</span>
          <span className="text-gray-600 text-xs">Week 16</span>
        </div>
        <input
          type="range"
          min={1}
          max={16}
          step={1}
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(Number(e.target.value))}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer"
          style={{ accentColor: phase.color === 'blue' ? '#60a5fa' : phase.color === 'purple' ? '#a78bfa' : '#34d399' }}
        />

        {/* Week buttons */}
        <div className="flex gap-1 mt-3 flex-wrap">
          {Array.from({ length: 16 }, (_, i) => i + 1).map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeek(w)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                selectedWeek === w
                  ? `${colors.bg} ${colors.text} border ${colors.border}`
                  : 'bg-slate-800/50 text-gray-600 hover:text-gray-800'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 text-xs font-semibold uppercase tracking-wide">16-Week Cycle Progress</span>
          <span className={`text-xs font-bold ${colors.text}`}>{progressPercent}% complete</span>
        </div>
        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${colors.bar}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          {weekData.map((wd) => (
            <span
              key={wd.weekRange}
              className={`text-xs ${phaseIndex === weekData.indexOf(wd) ? colors.text : 'text-gray-500'}`}
            >
              {wd.weekRange.replace('Weeks ', 'Wk ')}
            </span>
          ))}
        </div>
      </div>

      {/* Current Phase Badge */}
      <div className={`${colors.bg} border ${colors.border} rounded-xl px-4 py-3 mb-6`}>
        <p className={`text-xs font-bold tracking-widest uppercase ${colors.text} mb-0.5`}>Current Phase</p>
        <p className="text-gray-900 font-black">{phase.weekRange}</p>
      </div>

      {/* Category Results */}
      <div className="space-y-4">
        {categories.map((cat) => (
          <div key={cat.label} className="bg-slate-800/40 border border-gray-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-base">{cat.icon}</span>
              <span className={`text-sm font-bold ${colors.text}`}>{cat.label}</span>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed">{cat.value}</p>
          </div>
        ))}
      </div>

      {/* Milestone Note */}
      <div className="mt-5 bg-slate-900/60 border border-gray-200 rounded-xl p-4">
        <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-1">Protocol Insight</p>
        <p className="text-gray-600 text-sm leading-relaxed italic">{phase.milestone}</p>
      </div>

      <p className="text-gray-500 text-xs mt-4 text-center">Results vary by individual. Based on standard CJC-1295 (no DAC) 100–200mcg + Ipamorelin 200–300mcg protocol, 5 nights/week before bed.</p>
    </div>
  );
}
