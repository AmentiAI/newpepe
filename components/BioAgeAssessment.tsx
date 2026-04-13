'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  label: string;
  low: string;
  high: string;
  category: 'energy' | 'structural' | 'cognitive' | 'hormonal' | 'vitality';
}

const QUESTIONS: Question[] = [
  { id: 1, label: 'Sleep Quality', low: 'Terrible — fragmented, unrefreshing', high: 'Excellent — deep, restorative', category: 'vitality' },
  { id: 2, label: 'Energy Levels Throughout Day', low: 'Chronically fatigued, crashes', high: 'Sustained energy, no crashes', category: 'energy' },
  { id: 3, label: 'Recovery from Exercise', low: 'Days to recover, always sore', high: 'Recover overnight, ready next day', category: 'structural' },
  { id: 4, label: 'Skin Texture and Tone', low: 'Dull, loose, pronounced lines', high: 'Firm, even tone, minimal lines', category: 'structural' },
  { id: 5, label: 'Joint Pain & Stiffness', low: 'Constant pain, morning stiffness', high: 'Pain-free, full range of motion', category: 'structural' },
  { id: 6, label: 'Cognitive Clarity & Memory', low: 'Brain fog, poor recall', high: 'Sharp focus, excellent memory', category: 'cognitive' },
  { id: 7, label: 'Libido & Hormonal Function', low: 'Severely diminished', high: 'Optimal and consistent', category: 'hormonal' },
  { id: 8, label: 'Digestive Health', low: 'Bloating, irregular, discomfort', high: 'Perfect digestion, no issues', category: 'vitality' },
  { id: 9, label: 'Stress Resilience', low: 'Overwhelmed by minor stressors', high: 'Calm under pressure, quick recovery', category: 'cognitive' },
  { id: 10, label: 'Overall Vitality', low: 'Feel significantly older than age', high: 'Feel younger and vibrant', category: 'vitality' },
];

const SCORE_LABELS = ['0 — Poor', '1 — Below avg', '2 — Average', '3 — Good', '4 — Excellent'];

interface RecommendationResult {
  biologicalAgeGap: string;
  gapDescription: string;
  gapColor: string;
  primaryPeptide: string;
  primaryReason: string;
  fullStack: { peptide: string; role: string }[];
  weakAreas: string[];
  urgency: string;
}

function calculateResult(scores: Record<number, number>, age: number): RecommendationResult {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = QUESTIONS.length * 4; // 40

  // Category averages
  const categoryScores: Record<string, number[]> = {};
  QUESTIONS.forEach((q) => {
    if (!categoryScores[q.category]) categoryScores[q.category] = [];
    categoryScores[q.category].push(scores[q.id] ?? 0);
  });
  const categoryAvg: Record<string, number> = {};
  Object.entries(categoryScores).forEach(([cat, vals]) => {
    categoryAvg[cat] = vals.reduce((a, b) => a + b, 0) / vals.length;
  });

  // Identify weakest areas
  const weakAreas: string[] = [];
  QUESTIONS.forEach((q) => {
    if ((scores[q.id] ?? 0) <= 1) weakAreas.push(q.label);
  });

  // Biological age gap calculation
  const percentageScore = total / maxScore;
  let gap: number;
  let gapDescription: string;
  let gapColor: string;
  let urgency: string;

  if (percentageScore >= 0.85) {
    gap = Math.max(0, Math.floor((age - 30) * 0.1));
    gapDescription = 'Your biological markers are closely aligned with or better than your chronological age.';
    gapColor = '#00ff88';
    urgency = 'Preventive — optimize and maintain your current biological age advantage';
  } else if (percentageScore >= 0.65) {
    gap = Math.floor((age - 25) * 0.15) + 2;
    gapDescription = 'Moderate biological age gap — some hallmarks accelerating faster than ideal.';
    gapColor = '#fbbf24';
    urgency = 'Moderate — now is the optimal time to start reversing accumulating biological age';
  } else if (percentageScore >= 0.40) {
    gap = Math.floor((age - 20) * 0.25) + 5;
    gapDescription = 'Significant biological age gap — multiple aging pathways showing acceleration.';
    gapColor = '#f97316';
    urgency = 'High priority — biological aging is outpacing chronological age significantly';
  } else {
    gap = Math.floor((age - 15) * 0.35) + 8;
    gapDescription = 'Marked biological age gap — comprehensive longevity protocol strongly indicated.';
    gapColor = '#ef4444';
    urgency = 'Urgent — comprehensive multi-target longevity protocol needed now';
  }

  // Primary peptide based on weakest category
  const weakestCat = Object.entries(categoryAvg).sort((a, b) => a[1] - b[1])[0][0];
  let primaryPeptide: string;
  let primaryReason: string;

  if (weakestCat === 'energy') {
    primaryPeptide = 'NAD+ + SS-31';
    primaryReason = 'Energy and exercise recovery deficits point to mitochondrial dysfunction — NAD+ and SS-31 directly restore the cellular energy machinery.';
  } else if (weakestCat === 'structural') {
    primaryPeptide = 'GHK-Cu + BPC-157';
    primaryReason = 'Skin, joint, and structural recovery deficits indicate collagen decline and epigenetic drift — GHK-Cu resets 31% of aged genes while BPC-157 drives active tissue repair.';
  } else if (weakestCat === 'cognitive') {
    primaryPeptide = 'Epithalon + NAD+';
    primaryReason = 'Cognitive and stress resilience deficits correlate with telomere shortening and NAD+ depletion — Epithalon activates telomerase while NAD+ directly powers the sirtuin longevity pathways.';
  } else if (weakestCat === 'hormonal') {
    primaryPeptide = 'Epithalon + CJC-1295/Ipamorelin';
    primaryReason = 'Hormonal deficits indicate endocrine aging — Epithalon supports neuroendocrine regulation while CJC-1295/Ipamorelin stimulates natural GH pulsatility for hormonal restoration.';
  } else {
    primaryPeptide = 'Epithalon';
    primaryReason = 'Overall vitality, sleep, and digestive deficits indicate broad aging acceleration — Epithalon\'s telomerase activation and neuroendocrine regulation is the foundational intervention.';
  }

  const fullStack: { peptide: string; role: string }[] = [
    { peptide: 'Epithalon', role: '10-day cycle × 2/year — telomere extension, neuroendocrine reset' },
    { peptide: 'GHK-Cu', role: '2mg/day ongoing SC — epigenetic gene reset, collagen synthesis' },
    { peptide: 'SS-31', role: '1–2mg, 2–3× weekly — mitochondrial membrane repair' },
    { peptide: 'NAD+', role: '250–500mg daily or IV — sirtuin activation, DNA repair' },
    ...(categoryAvg.hormonal < 2 ? [{ peptide: 'CJC-1295/Ipamorelin', role: '100/100 mcg SC nightly — GH pulse restoration' }] : []),
    ...(categoryAvg.structural < 2 ? [{ peptide: 'SNAP-8', role: 'Topical 2× daily — wrinkle depth reduction, dermal collagen' }] : []),
  ];

  return {
    biologicalAgeGap: `+${gap} years`,
    gapDescription,
    gapColor,
    primaryPeptide,
    primaryReason,
    fullStack,
    weakAreas: weakAreas.slice(0, 4),
    urgency,
  };
}

export default function BioAgeAssessment() {
  const [scores, setScores] = useState<Record<number, number>>({});
  const [age, setAge] = useState<number>(40);
  const [showResult, setShowResult] = useState(false);
  const [step, setStep] = useState<'age' | 'questions' | 'done'>('age');

  const allAnswered = QUESTIONS.every((q) => scores[q.id] !== undefined);
  const result = allAnswered ? calculateResult(scores, age) : null;

  const reset = () => {
    setScores({});
    setAge(40);
    setShowResult(false);
    setStep('age');
  };

  const completedCount = Object.keys(scores).length;

  if (step === 'done' && result) {
    return (
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div>
            <div className="text-xs font-bold tracking-widest mb-1 text-purple-400">BIOLOGICAL AGE ASSESSMENT</div>
            <h4 className="text-gray-900 font-black text-xl">Your Results</h4>
          </div>
          <button onClick={reset} className="flex items-center gap-1.5 text-gray-600 text-sm hover:text-gray-900 transition-colors">
            <RotateCcw className="w-3.5 h-3.5" /> Retake
          </button>
        </div>

        {/* Score card */}
        <div className="rounded-2xl p-6 mb-5 text-center" style={{ background: `${result.gapColor}08`, border: `1px solid ${result.gapColor}30` }}>
          <div className="text-gray-600 text-sm mb-1">Estimated Biological Age Gap</div>
          <div className="text-5xl font-black mb-2" style={{ color: result.gapColor }}>{result.biologicalAgeGap}</div>
          <div className="text-gray-800 text-sm max-w-md mx-auto">{result.gapDescription}</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ background: `${result.gapColor}15`, color: result.gapColor }}>
            {result.urgency}
          </div>
        </div>

        {/* Primary recommendation */}
        <div className="rounded-xl p-5 mb-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)' }}>
          <div className="text-purple-400 text-xs font-bold tracking-widest mb-2">START WITH</div>
          <div className="text-gray-900 font-black text-lg mb-2">{result.primaryPeptide}</div>
          <p className="text-gray-800 text-sm leading-relaxed">{result.primaryReason}</p>
        </div>

        {/* Weak areas */}
        {result.weakAreas.length > 0 && (
          <div className="mb-4">
            <div className="text-gray-600 text-xs font-bold tracking-widest mb-2">AREAS NEEDING MOST ATTENTION</div>
            <div className="flex flex-wrap gap-2">
              {result.weakAreas.map((area) => (
                <span key={area} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Full stack */}
        <div>
          <div className="text-gray-600 text-xs font-bold tracking-widest mb-3">RECOMMENDED FULL PROTOCOL</div>
          <div className="space-y-2">
            {result.fullStack.map((item, i) => (
              <div key={item.peptide} className="flex items-start gap-3 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-purple-400 font-black text-xs">{i + 1}</span>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">{item.peptide}</div>
                  <div className="text-gray-600 text-xs mt-0.5">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-xs border-t border-slate-800 pt-3 mt-4">
          This assessment is educational only and does not constitute medical advice. Consult a qualified physician before starting any peptide protocol.
        </p>
      </div>
    );
  }

  if (step === 'questions') {
    return (
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-xs font-bold tracking-widest text-purple-400 mb-1">BIOLOGICAL AGE ASSESSMENT</div>
            <h3 className="text-gray-900 font-black text-lg">Rate Your Current State</h3>
          </div>
          <div className="text-gray-600 text-sm">{completedCount}/{QUESTIONS.length}</div>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full mb-6 overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${(completedCount / QUESTIONS.length) * 100}%`, background: '#a855f7' }} />
        </div>

        <div className="space-y-6">
          {QUESTIONS.map((q) => (
            <div key={q.id}>
              <div className="flex items-start justify-between mb-2">
                <label className="text-gray-900 font-semibold text-sm">{q.id}. {q.label}</label>
                {scores[q.id] !== undefined && (
                  <span className="text-purple-400 text-xs font-bold">{scores[q.id]}/4</span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((val) => (
                  <button
                    key={val}
                    onClick={() => setScores((prev) => ({ ...prev, [q.id]: val }))}
                    className="flex-1 py-2.5 rounded-lg text-sm font-bold transition-all"
                    style={{
                      background: scores[q.id] === val ? 'rgba(168,85,247,0.2)' : 'rgba(255,255,255,0.04)',
                      border: scores[q.id] === val ? '1px solid rgba(168,85,247,0.6)' : '1px solid rgba(255,255,255,0.06)',
                      color: scores[q.id] === val ? '#a855f7' : '#64748b',
                    }}
                    title={SCORE_LABELS[val]}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-gray-500 text-xs">{q.low}</span>
                <span className="text-gray-500 text-xs">{q.high}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => { if (allAnswered) setStep('done'); }}
          disabled={!allAnswered}
          className="w-full mt-6 py-3 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
          style={{
            background: allAnswered ? '#a855f7' : 'rgba(255,255,255,0.06)',
            color: allAnswered ? '#fff' : '#475569',
            cursor: allAnswered ? 'pointer' : 'not-allowed',
          }}
        >
          Calculate My Biological Age Gap <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // Age entry step
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)' }}>
          <span className="text-purple-400 text-sm font-black">BA</span>
        </div>
        <div>
          <h3 className="text-gray-900 font-black text-lg">Biological Age Assessment</h3>
          <p className="text-gray-600 text-xs">10 questions to estimate your biological age gap and recommend a protocol</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-900 font-semibold text-sm mb-3">What is your chronological age?</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={20}
            max={80}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="flex-1 accent-purple-500"
          />
          <div className="w-16 text-center py-2 rounded-lg font-black text-purple-400" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)' }}>
            {age}
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-gray-500 text-xs">20</span>
          <span className="text-gray-500 text-xs">80</span>
        </div>
      </div>

      <div className="mb-6 p-4 rounded-xl" style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.12)' }}>
        <p className="text-gray-800 text-sm leading-relaxed">
          You&apos;ll rate 10 aspects of your current health and vitality on a 0–4 scale.
          The assessment estimates your biological age gap and identifies which aging hallmarks
          are most relevant for your peptide protocol.
        </p>
      </div>

      <button
        onClick={() => setStep('questions')}
        className="w-full py-3 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
        style={{ background: '#a855f7', color: '#fff' }}
      >
        Start Assessment <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
