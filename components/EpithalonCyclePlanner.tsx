'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, Syringe, Target, TrendingUp } from 'lucide-react';

const GOALS = [
  { id: 'telomere', label: 'Telomere lengthening', icon: '🧬' },
  { id: 'sleep', label: 'Melatonin / sleep reset', icon: '🌙' },
  { id: 'immune', label: 'Immune enhancement', icon: '🛡️' },
  { id: 'full', label: 'Full anti-aging protocol', icon: '⏳' },
] as const;

type GoalId = typeof GOALS[number]['id'];

interface Plan {
  cyclesPerYear: number;
  dosePerDay: string;
  cycleLength: string;
  bestTime: string;
  biomarkers: string[];
  year1: string;
  year3: string;
  notes: string;
}

function getPlan(age: number, goal: GoalId): Plan {
  const isYoung = age < 40;
  const isMid = age >= 40 && age < 60;
  const isSenior = age >= 60;

  const basePlans: Record<GoalId, Plan> = {
    telomere: {
      cyclesPerYear: isSenior ? 3 : isMid ? 2 : 2,
      dosePerDay: isSenior ? '1–2mg' : '1mg',
      cycleLength: '10 consecutive days',
      bestTime: 'Evening — 30–60 minutes before sleep (supports melatonin rhythm)',
      biomarkers: ['Telomere length (TruDiagnostic or similar)', 'Biological age (epigenetic clock)', 'NK cell count', 'Oxidative stress markers (8-OHdG)'],
      year1: isSenior
        ? 'Measurable telomere stabilization. Significant sleep improvement. Immune panel improvements likely visible.'
        : 'Sleep quality enhancement. Subtle energy and recovery improvements. Baseline for future comparison.',
      year3: isSenior
        ? 'Clinical studies show 15–28% improvement in biological aging markers. Telomere lengthening measurable via repeat testing.'
        : 'Cumulative telomere preservation. Multiple cycles establishing long-term anti-aging foundation.',
      notes: 'Telomere lengthening is a long-game protocol. The Khavinson 10-year study shows compounding benefits — commit to at least 3 years for maximum effect.',
    },
    sleep: {
      cyclesPerYear: 2,
      dosePerDay: '1mg',
      cycleLength: '10 consecutive days',
      bestTime: 'Evening — 1 hour before intended sleep time for maximum pineal effect',
      biomarkers: ['Serum melatonin (saliva test)', 'Sleep tracker data (HRV, deep sleep %)', 'Cortisol AM/PM curve', 'Circadian rhythm assessment'],
      year1: 'Most users report sleep improvement within 3–5 days of first cycle. Deeper sleep, more vivid dreams, easier morning waking. Benefits often persist 3–6 months post-cycle.',
      year3: 'Sustained circadian rhythm improvement. Seasonal mood stability. Cumulative pineal function restoration with each cycle.',
      notes: 'Sleep reset is the fastest-acting Epithalon benefit. Run cycles in spring and fall when circadian disruption is highest.',
    },
    immune: {
      cyclesPerYear: isSenior ? 3 : 2,
      dosePerDay: isSenior ? '1–2mg' : '1mg',
      cycleLength: '10–14 days',
      bestTime: 'Morning — immune function optimization aligns with morning cortisol peak',
      biomarkers: ['Complete blood count (CBC)', 'NK cell activity', 'T-cell subsets (CD4/CD8)', 'Interferon-gamma', 'Inflammatory markers (CRP, IL-6)'],
      year1: 'Improved resistance to seasonal illness. T-cell and NK cell function improvements measurable at 3–6 months in clinical data. Faster recovery when illness does occur.',
      year3: 'Cumulative immune resilience. Studies in elderly subjects show sustained NK cell elevation and reduced infection frequency across multi-year protocols.',
      notes: `Russian clinical data is especially strong for immune outcomes in subjects ${isSenior ? 'your age group' : 'over 60'}. If immune function is your primary goal, consider stacking with GHK-Cu.`,
    },
    full: {
      cyclesPerYear: isSenior ? 3 : isMid ? 2 : 2,
      dosePerDay: isSenior ? '2mg' : '1–2mg',
      cycleLength: '10–20 days',
      bestTime: 'Evening — aligns with natural melatonin curve for comprehensive circadian + telomere synergy',
      biomarkers: ['Biological age (epigenetic clock — run annually)', 'Telomere length', 'Full hormone panel (IGF-1, DHEA, testosterone)', 'Inflammatory markers', 'NK cell count', 'Fasting glucose + insulin sensitivity'],
      year1: 'Sleep quality: immediate (days 3–5). Energy and recovery: weeks 2–8. Anti-aging markers: begin tracking at month 6 for first cycle comparison data.',
      year3: isYoung
        ? 'Establishing anti-aging foundation. Biological age preservation against chronological age. Compounding benefits across cycles.'
        : 'Khavinson study data projects 20–28% mortality risk reduction over 10+ years. Measurable biological age reversal possible — especially combined with GHK-Cu + NAD+.',
      notes: 'The full protocol combines standard Epithalon cycling with complementary interventions. Stack with GHK-Cu (collagen + gene expression), NAD+ (mitochondria), and CJC-1295/Ipamorelin (GH optimization) for maximum effect.',
    },
  };

  return basePlans[goal];
}

export default function EpithalonCyclePlanner() {
  const [age, setAge] = useState<number>(45);
  const [ageInput, setAgeInput] = useState<string>('45');
  const [goal, setGoal] = useState<GoalId>('full');
  const [showResults, setShowResults] = useState(false);

  const plan = getPlan(age, goal);

  const handleAgeChange = (val: string) => {
    setAgeInput(val);
    const n = parseInt(val, 10);
    if (!isNaN(n) && n >= 30 && n <= 80) setAge(n);
  };

  return (
    <div className="glass-card p-6 md:p-8" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.3)' }}>
          <Calendar className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <h3 className="text-gray-900 font-black text-lg">Epithalon Cycle Planner</h3>
          <p className="text-gray-600 text-xs">Personalized protocol based on your age and goals</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-6">Enter your details to receive a tailored Epithalon protocol recommendation.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {/* Age input */}
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">Your Age</label>
          <div className="space-y-2">
            <input
              type="range"
              min={30}
              max={80}
              value={age}
              onChange={(e) => { setAge(parseInt(e.target.value)); setAgeInput(e.target.value); setShowResults(false); }}
              className="w-full accent-amber-500"
            />
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={ageInput}
                onChange={(e) => { handleAgeChange(e.target.value); setShowResults(false); }}
                min={30}
                max={80}
                className="w-24 rounded-lg px-3 py-2 text-sm text-gray-900 font-mono"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              <span className="text-gray-600 text-sm">years old</span>
            </div>
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-gray-600 text-xs font-semibold uppercase tracking-wide mb-2">Primary Goal</label>
          <div className="grid grid-cols-2 gap-2">
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => { setGoal(g.id); setShowResults(false); }}
                className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all border flex items-center gap-2 ${
                  goal === g.id
                    ? 'border-amber-400/40 text-amber-600'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
                style={goal === g.id ? { background: 'rgba(168,85,247,0.1)' } : { background: 'rgba(255,255,255,0.03)' }}
              >
                <span>{g.icon}</span>
                <span className="leading-tight">{g.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowResults(true)}
        className="w-full py-3.5 rounded-xl text-sm font-black tracking-wide flex items-center justify-center gap-2 transition-all hover:opacity-90"
        style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(139,92,246,0.8))', color: '#fff' }}
      >
        Generate My Protocol <ArrowRight className="w-4 h-4" />
      </button>

      {showResults && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl p-1 text-center text-xs font-bold tracking-widest text-amber-600 uppercase" style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
            Protocol for {age}-year-old · {GOALS.find(g => g.id === goal)?.label}
          </div>

          {/* Core protocol */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: <Calendar className="w-4 h-4" />, label: 'Cycles/Year', value: `${plan.cyclesPerYear}×` },
              { icon: <Syringe className="w-4 h-4" />, label: 'Daily Dose', value: plan.dosePerDay },
              { icon: <Target className="w-4 h-4" />, label: 'Cycle Length', value: plan.cycleLength },
              { icon: <TrendingUp className="w-4 h-4" />, label: 'Inject Time', value: plan.bestTime.split('—')[0].trim() },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-3 text-center" style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.15)' }}>
                <div className="text-amber-600 flex justify-center mb-1">{item.icon}</div>
                <div className="text-xs text-gray-600 mb-1">{item.label}</div>
                <div className="text-gray-900 font-black text-xs">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Best time note */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Best Injection Time</div>
            <p className="text-gray-800 text-sm">{plan.bestTime}</p>
          </div>

          {/* Biomarkers */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-3">Biomarkers to Track</div>
            <div className="space-y-1.5">
              {plan.biomarkers.map((b) => (
                <div key={b} className="flex items-start gap-2 text-xs text-gray-800">
                  <span className="text-amber-600 shrink-0 mt-0.5">→</span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">1-Year Expectations</div>
              <p className="text-gray-800 text-xs leading-relaxed">{plan.year1}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mb-2">3-Year Expectations</div>
              <p className="text-gray-800 text-xs leading-relaxed">{plan.year3}</p>
            </div>
          </div>

          {/* Notes */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.07)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <p className="text-amber-600 text-xs leading-relaxed"><strong>Protocol Note:</strong> {plan.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
