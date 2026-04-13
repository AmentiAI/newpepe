'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';

type AcneLocation = 'forehead' | 'nose' | 'chin-jaw' | 'cheeks' | 'back-chest' | 'all-over';
type AcneType = 'whiteheads' | 'blackheads' | 'cysts' | 'hormonal' | 'pih';
type GutStatus = 'frequent' | 'occasional' | 'no';

interface Protocol {
  primaryPeptide: string;
  primaryDose: string;
  primaryFrequency: string;
  secondaryPeptide: string;
  secondaryDose: string;
  optionalAddOns: string[];
  lifestyle: string[];
  timeline: string;
  summary: string;
}

function buildProtocol(locations: AcneLocation[], acneType: AcneType, gutStatus: GutStatus): Protocol {
  const isCystic = acneType === 'cysts';
  const isHormonal = acneType === 'hormonal' || locations.includes('chin-jaw');
  const hasPih = acneType === 'pih';
  const hasGutIssues = gutStatus === 'frequent' || gutStatus === 'occasional';
  const isBodyAcne = locations.includes('back-chest');

  let primaryDose = '250 mcg';
  let primaryFrequency = 'twice daily';

  if (isCystic || (hasGutIssues && gutStatus === 'frequent')) {
    primaryDose = '500 mcg';
    primaryFrequency = 'twice daily (oral, 30 min before meals)';
  }

  const optionalAddOns: string[] = [];
  const lifestyle: string[] = [];

  if (isHormonal) {
    optionalAddOns.push('Zinc (30 mg/day) — 5α-reductase inhibition reduces DHT-driven sebum');
    optionalAddOns.push('Saw Palmetto (320 mg/day) — mild anti-androgen, reduces hormonal sebum overproduction');
  }

  if (hasGutIssues) {
    optionalAddOns.push('Probiotic (Lactobacillus rhamnosus GG) — restores microbiome synergistically with BPC-157 gut healing');
    lifestyle.push('Elimination diet trial (dairy and gluten for 4 weeks) — identify gut triggers');
  }

  if (hasPih || isCystic) {
    optionalAddOns.push('Niacinamide 10% topical — inhibits melanin transfer, reduces PIH alongside GHK-Cu');
  }

  if (isBodyAcne) {
    optionalAddOns.push('BPC-157 injection (SC) — for body acne, systemic anti-inflammatory works faster than oral');
  }

  lifestyle.push('Avoid high-glycemic foods — glucose spikes increase IGF-1 → sebum production');
  lifestyle.push('Omega-3 (2–3g EPA/DHA/day) — reduces arachidonic acid cascade that drives inflammatory acne');
  lifestyle.push('Derma roller (0.25mm) on GHK-Cu areas — increases absorption 400x for faster PIH resolution');

  let timeline = 'Active acne: 4–6 weeks with BPC-157 oral. PIH: 3–5 months with GHK-Cu. Scar remodeling: 6–12 months.';
  if (isCystic) {
    timeline = 'Cystic inflammation: 3–5 weeks for lesion reduction. Full cyst cycle normalization: 2–3 months.';
  }

  let summary = 'Your acne profile points to a gut-skin axis imbalance combined with a compromised skin barrier. BPC-157 oral addresses systemic inflammation from the gut outward, while GHK-Cu topical rebuilds your skin barrier, closes pores, and addresses post-inflammatory marks.';

  if (isHormonal && !hasGutIssues) {
    summary = 'Your hormonal pattern (chin/jaw predominance, cyclical timing) indicates androgen-driven sebum overproduction. BPC-157 reduces the systemic inflammatory response that makes hormonal acne worse, while GHK-Cu topically tightens pores and reduces PIH from past lesions.';
  }
  if (isCystic) {
    summary = 'Cystic/nodular acne requires the strongest systemic anti-inflammatory approach. BPC-157 at higher doses dramatically reduces the IL-1β and TNF-α cytokine cascade that drives cystic inflammation. If you\'re on isotretinoin, BPC-157 oral protects your gut lining from Accutane\'s well-documented gastrointestinal damage.';
  }

  return {
    primaryPeptide: 'BPC-157 (Oral)',
    primaryDose,
    primaryFrequency,
    secondaryPeptide: 'GHK-Cu (Topical Serum)',
    secondaryDose: '1–2 mg/mL concentration applied to affected areas',
    optionalAddOns,
    lifestyle,
    timeline,
    summary,
  };
}

const LOCATION_OPTIONS: { value: AcneLocation; label: string }[] = [
  { value: 'forehead', label: 'Forehead' },
  { value: 'nose', label: 'Nose / T-Zone' },
  { value: 'chin-jaw', label: 'Chin / Jaw' },
  { value: 'cheeks', label: 'Cheeks' },
  { value: 'back-chest', label: 'Back / Chest' },
  { value: 'all-over', label: 'All Over' },
];

const ACNE_TYPE_OPTIONS: { value: AcneType; label: string; desc: string }[] = [
  { value: 'whiteheads', label: 'Whiteheads / Milia', desc: 'Closed comedones, small bumps' },
  { value: 'blackheads', label: 'Blackheads', desc: 'Open comedones, visible pores' },
  { value: 'cysts', label: 'Cysts / Nodules', desc: 'Deep, painful, large lesions' },
  { value: 'hormonal', label: 'Hormonal (Cyclical)', desc: 'Flares at predictable times' },
  { value: 'pih', label: 'Post-Inflammatory Marks', desc: 'Red / dark spots after acne heals' },
];

const GUT_OPTIONS: { value: GutStatus; label: string }[] = [
  { value: 'frequent', label: 'Yes — frequently (bloating, IBS, etc.)' },
  { value: 'occasional', label: 'Occasionally (mild or situational)' },
  { value: 'no', label: 'No gut issues' },
];

export default function AcneTriggerAssessment() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [locations, setLocations] = useState<AcneLocation[]>([]);
  const [acneType, setAcneType] = useState<AcneType | null>(null);
  const [gutStatus, setGutStatus] = useState<GutStatus | null>(null);

  function toggleLocation(loc: AcneLocation) {
    setLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  }

  function reset() {
    setStep(1);
    setLocations([]);
    setAcneType(null);
    setGutStatus(null);
  }

  const protocol = step === 4 && acneType && gutStatus
    ? buildProtocol(locations, acneType, gutStatus)
    : null;

  const progressPct = ((step - 1) / 3) * 100;

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Acne Protocol Assessment</h3>
        {step > 1 && (
          <button onClick={reset} className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm transition-colors">
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-600">
          <span>Step {step} of {step < 4 ? '3' : '3'}</span>
          <span>{step < 4 ? `${Math.round(progressPct)}% complete` : 'Complete'}</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 to-emerald-500 transition-all duration-500"
            style={{ width: step === 4 ? '100%' : `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <p className="text-gray-800 font-medium">Where does your acne appear most? <span className="text-gray-600 text-sm font-normal">(select all that apply)</span></p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {LOCATION_OPTIONS.map((opt) => {
              const selected = locations.includes(opt.value);
              return (
                <button
                  key={opt.value}
                  onClick={() => toggleLocation(opt.value)}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all text-left ${
                    selected
                      ? 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {selected && <CheckCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />}
                  {opt.label}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={locations.length === 0}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-500/30 transition-colors"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="space-y-4">
          <p className="text-gray-800 font-medium">What type of acne do you primarily get?</p>
          <div className="space-y-2">
            {ACNE_TYPE_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setAcneType(opt.value); setStep(3); }}
                className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                  acneType === opt.value
                    ? 'border-rose-500/50 bg-rose-500/10 text-rose-300'
                    : 'border-gray-200 text-gray-800 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div>
                  <span className="font-medium">{opt.label}</span>
                  <p className="text-gray-600 text-xs mt-0.5">{opt.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="space-y-4">
          <p className="text-gray-800 font-medium">Do you have gut issues? (bloating, IBS, irregular digestion)</p>
          <div className="space-y-2">
            {GUT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setGutStatus(opt.value); setStep(4); }}
                className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                  gutStatus === opt.value
                    ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
                    : 'border-gray-200 text-gray-800 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{opt.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4 — Results */}
      {step === 4 && protocol && (
        <div className="space-y-5">
          <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-4">
            <p className="text-emerald-300 text-sm leading-relaxed">{protocol.summary}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 border border-gray-200/50 rounded-xl p-4 space-y-2">
              <span className="text-xs text-gray-600 uppercase tracking-wide">Primary Peptide</span>
              <p className="text-gray-900 font-semibold">{protocol.primaryPeptide}</p>
              <p className="text-rose-300 text-sm">{protocol.primaryDose} — {protocol.primaryFrequency}</p>
            </div>
            <div className="bg-slate-800/60 border border-gray-200/50 rounded-xl p-4 space-y-2">
              <span className="text-xs text-gray-600 uppercase tracking-wide">Secondary Peptide</span>
              <p className="text-gray-900 font-semibold">{protocol.secondaryPeptide}</p>
              <p className="text-purple-300 text-sm">{protocol.secondaryDose}</p>
            </div>
          </div>

          {protocol.optionalAddOns.length > 0 && (
            <div>
              <span className="text-xs text-gray-600 uppercase tracking-wide">Optional Add-Ons</span>
              <ul className="mt-2 space-y-1">
                {protocol.optionalAddOns.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-800 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <span className="text-xs text-gray-600 uppercase tracking-wide">Lifestyle Interventions</span>
            <ul className="mt-2 space-y-1">
              {protocol.lifestyle.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-800 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-4">
            <span className="text-xs text-amber-400 uppercase tracking-wide font-semibold">Expected Timeline</span>
            <p className="text-gray-800 text-sm mt-1">{protocol.timeline}</p>
          </div>

          <button onClick={reset} className="w-full py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm hover:border-gray-300 hover:text-gray-800 transition-colors flex items-center justify-center gap-2">
            <RotateCcw className="w-3.5 h-3.5" /> Start Over
          </button>
        </div>
      )}

      <p className="text-gray-600 text-xs text-center">For research purposes only. Consult a qualified physician before use.</p>
    </div>
  );
}
