'use client';

import { useState } from 'react';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';

const symptoms = [
  { id: 'bloating', label: 'Bloating / Distension', category: 'barrier', weight: 1 },
  { id: 'cramping', label: 'Abdominal Cramping', category: 'barrier', weight: 2 },
  { id: 'urgency', label: 'Bowel Urgency / Accidents', category: 'ibd', weight: 3 },
  { id: 'reflux', label: 'Acid Reflux / GERD', category: 'mucosal', weight: 2 },
  { id: 'constipation', label: 'Chronic Constipation', category: 'motility', weight: 1 },
  { id: 'diarrhea', label: 'Chronic Diarrhea', category: 'ibd', weight: 2 },
  { id: 'brainfog', label: 'Brain Fog (after eating)', category: 'gutbrain', weight: 3 },
  { id: 'foodsens', label: 'Multiple Food Sensitivities', category: 'leakygut', weight: 3 },
];

function getRecommendation(checked: Set<string>) {
  const count = checked.size;
  const hasIBD = checked.has('urgency') || checked.has('diarrhea');
  const hasLeakyGut = checked.has('foodsens') || checked.has('brainfog');
  const hasMucosal = checked.has('reflux');
  const hasBarrier = checked.has('bloating') || checked.has('cramping');

  if (count === 0) return null;

  let route = 'Oral BPC-157';
  let dose = '250mcg/day';
  let timeline = '4–6 weeks';
  let rationale = '';
  let stack = '';

  if (count >= 5 || (hasIBD && hasLeakyGut)) {
    route = 'Oral + Injectable Combination';
    dose = '250mcg oral AM + 250mcg SC PM';
    timeline = '8–12 weeks';
    rationale =
      'Your symptom profile indicates widespread gut dysfunction — multiple systems affected. The combination protocol covers both local mucosal repair (oral) and systemic inflammatory suppression (injectable) simultaneously.';
    stack = 'Consider adding: L-Glutamine (5g/day), Zinc Carnosine (75mg/day), Digestive Enzymes with meals.';
  } else if (hasIBD && count >= 3) {
    route = 'Oral + Injectable';
    dose = '250mcg oral + 250mcg SC (500mcg total/day)';
    timeline = '6–10 weeks';
    rationale =
      'IBD-pattern symptoms (urgency, diarrhea) combined with other gut issues suggest active mucosal inflammation. Oral BPC-157 provides direct mucosal contact while injectable BPC-157 suppresses systemic inflammatory cytokines.';
    stack = 'Consider stacking with: Zinc Carnosine 75mg/day for mucosal protection.';
  } else if (hasLeakyGut && !hasIBD) {
    route = 'Oral BPC-157 (primary)';
    dose = '250–500mcg/day oral';
    timeline = '6–8 weeks';
    rationale =
      'Your symptoms (brain fog after eating, multiple food sensitivities) strongly suggest leaky gut / intestinal permeability. Oral BPC-157 is ideal — it passes through the gut directly contacting and healing the compromised epithelial barrier.';
    stack = 'Synergistic additions: L-Glutamine 5g/day, bone broth, fermented foods.';
  } else if (hasMucosal && count <= 2) {
    route = 'Oral BPC-157';
    dose = '500mcg/day oral, fasted';
    timeline = '2–4 weeks';
    rationale =
      'Mucosal/reflux-pattern symptoms respond rapidly to high-dose oral BPC-157. Taking fasted maximizes mucosal contact time and upregulates gastric protection signaling before the first meal.';
    stack = '';
  } else {
    route = 'Oral BPC-157';
    dose = '250mcg/day oral';
    timeline = '4–6 weeks';
    rationale =
      'Your symptom profile suggests mild-to-moderate gut dysfunction. Start with oral BPC-157 which is the most direct intervention for gut tissue and barrier function.';
    stack = 'Supportive additions: digestive enzymes, L-Glutamine if bloating/cramping is prominent.';
  }

  return { route, dose, timeline, rationale, stack, count };
}

export default function GutSymptomChecker() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [showResult, setShowResult] = useState(false);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setShowResult(false);
  };

  const recommendation = getRecommendation(checked);

  return (
    <div className="space-y-5">
      <p className="text-gray-600 text-sm">Select all symptoms you regularly experience:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {symptoms.map((s) => {
          const isChecked = checked.has(s.id);
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-150 ${
                isChecked
                  ? 'border-emerald-500/60 bg-emerald-500/15 text-gray-900'
                  : 'border-gray-200 bg-white/3 text-gray-600 hover:border-gray-200'
              }`}
            >
              {isChecked ? (
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-gray-500 shrink-0" />
              )}
              <span className="text-sm font-medium">{s.label}</span>
            </button>
          );
        })}
      </div>

      {checked.size > 0 && (
        <button
          onClick={() => setShowResult(true)}
          className="btn-cta px-6 py-3 text-sm flex items-center gap-2"
        >
          Get My Protocol Recommendation <ArrowRight className="w-4 h-4" />
        </button>
      )}

      {showResult && recommendation && (
        <div className="glass-card p-6 border border-emerald-500/30 bg-emerald-500/5">
          <div className="text-xs font-bold tracking-widest text-emerald-400 mb-4">
            YOUR RECOMMENDED PROTOCOL ({recommendation.count} SYMPTOM{recommendation.count > 1 ? 'S' : ''} SELECTED)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            <div>
              <p className="text-gray-600 text-xs mb-1">Recommended Route</p>
              <p className="text-emerald-400 font-bold text-sm">{recommendation.route}</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs mb-1">Daily Dose</p>
              <p className="text-gray-900 font-mono text-sm">{recommendation.dose}</p>
            </div>
            <div>
              <p className="text-gray-600 text-xs mb-1">Estimated Timeline</p>
              <p className="text-gray-900 text-sm">{recommendation.timeline}</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4 space-y-3">
            <div>
              <p className="text-gray-600 text-xs font-semibold mb-1">WHY THIS PROTOCOL</p>
              <p className="text-gray-800 text-sm leading-relaxed">{recommendation.rationale}</p>
            </div>
            {recommendation.stack && (
              <div>
                <p className="text-gray-600 text-xs font-semibold mb-1">SYNERGISTIC ADDITIONS</p>
                <p className="text-gray-600 text-sm leading-relaxed">{recommendation.stack}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
