'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';

type BodyRegion = 'Upper body' | 'Lower body' | 'Spine' | 'Gut/Internal' | 'Multiple areas';
type InjuryKind = 'Tendon' | 'Ligament' | 'Muscle' | 'Joint' | 'Gut' | 'Bone fracture' | 'Post-surgery' | 'Other';
type Duration = '<2 weeks' | '2-8 weeks' | '2-6 months' | 'Chronic 6+ months';
type Severity = 'Mild discomfort' | 'Moderate pain' | 'Severe/cannot train';

interface RecommendationOutput {
  stack: string;
  stackColor: string;
  bpc157: string;
  tb500: string | null;
  additionalPeptides: string[];
  timeline: string;
  injectionRoute: string;
  notes: string[];
}

function getRecommendation(
  region: BodyRegion,
  kind: InjuryKind,
  duration: Duration,
  severity: Severity
): RecommendationOutput {
  const isChronic = duration === 'Chronic 6+ months' || duration === '2-6 months';
  const isGut = kind === 'Gut' || region === 'Gut/Internal';
  const isMultiple = region === 'Multiple areas';
  const isSevere = severity === 'Severe/cannot train';
  const isPostSurgery = kind === 'Post-surgery';
  const isSpine = region === 'Spine';

  // Gut-only: BPC-157 alone orally
  if (isGut && !isSevere) {
    return {
      stack: 'BPC-157 Oral Protocol',
      stackColor: '#10b981',
      bpc157: `${isChronic ? '500' : '250'} mcg orally, twice daily — morning and evening on empty stomach`,
      tb500: null,
      additionalPeptides: ['KPV 500 mcg orally 2× daily for acute IBD flares', 'BPC-157 injectable 250 mcg SC abdomen for additional systemic effect'],
      timeline: '1–3 weeks for acute gut healing; 4–6 weeks for chronic IBD',
      injectionRoute: 'Oral capsule or sublingual liquid — no injection needed for gut conditions',
      notes: [
        'BPC-157 is stable in gastric acid and active in the GI tract — oral route is primary for gut healing',
        'Take 30 minutes before eating for best mucosal contact',
        'KPV (Lys-Pro-Val) is a potent companion for IBD — can be taken with BPC-157 in the same dose',
        isChronic ? 'Chronic gut issues: run 8-week cycle, then reassess. Many users benefit from ongoing low-dose maintenance' : 'Acute gut healing: expect noticeable improvement within 5–10 days',
      ],
    };
  }

  // Post-surgery: always full stack
  if (isPostSurgery || (isSevere && !isGut)) {
    return {
      stack: 'Full Healing Stack — BPC-157 + TB-500',
      stackColor: '#00ff88',
      bpc157: '500 mcg SC twice daily — near surgical site or injury, morning + evening',
      tb500: '5 mg SC twice in week 1 (loading), then 2.5 mg twice weekly for 8–10 weeks',
      additionalPeptides: [
        'KPV 500 mcg orally 2× daily (systemic inflammation control)',
        'Collagen peptides 15g/day (structural building block for repair)',
      ],
      timeline: isPostSurgery
        ? '8–12 weeks post-op — 40–50% faster than standard recovery'
        : isChronic
        ? '10–14 weeks for chronic severe injury — second cycle may be needed'
        : '6–10 weeks for acute severe injury',
      injectionRoute: isPostSurgery
        ? 'Start 3 days pre-surgery; resume 48hrs post-op. Inject near wound site or perioperatively'
        : 'Local SC injection near injury site; TB-500 in abdomen or thigh (systemic)',
      notes: [
        'Full loading protocol: BPC-157 twice daily is the critical window for the first 4 weeks',
        'TB-500 5mg loading dose in week 1 maximizes bone marrow stem cell mobilization',
        isPostSurgery ? 'Pre-surgical loading reduces post-op inflammation and speeds initial wound closure' : '',
        'Protein intake minimum 2g/kg/day — peptides accelerate synthesis but require substrate',
        isChronic ? 'Chronic injuries may need two full cycles with a 2-week break between' : 'Acute severe injuries respond well — expect 50–70% faster recovery vs. untreated',
        isSpine ? 'Paraspinal injection sites: 1–2 cm lateral to spinous processes at affected level' : '',
      ].filter(Boolean),
    };
  }

  // Multiple areas: systemic-focused BPC-157 + TB-500
  if (isMultiple) {
    return {
      stack: 'BPC-157 + TB-500 Systemic Protocol',
      stackColor: '#00ff88',
      bpc157: `${isChronic ? '500' : '250'} mcg SC once daily — abdominal injection for systemic delivery to all sites`,
      tb500: `${isChronic || isSevere ? '2.5' : '2'} mg SC twice per week`,
      additionalPeptides: ['BPC-157 oral 500 mcg additionally for comprehensive systemic coverage'],
      timeline: isChronic ? '8–12 weeks across all sites' : '5–8 weeks for multi-site healing',
      injectionRoute: 'BPC-157: abdominal SC for systemic effect (proven distal healing). TB-500: abdomen or thigh',
      notes: [
        'Abdominal BPC-157 injection shown in studies to heal distal injuries — works for multiple sites simultaneously',
        'TB-500 systemic stem cell mobilization is the MVP for multi-site injury — one dose reaches every site',
        'Prioritize local injection at your most functionally limiting injury; use abdominal route for all others',
        'Oral BPC-157 additionally provides another systemic delivery route',
      ],
    };
  }

  // Spine with severe/chronic: special protocol
  if (isSpine && (isChronic || isSevere)) {
    return {
      stack: 'Spine & Neural Recovery — BPC-157 + TB-500',
      stackColor: '#00ff88',
      bpc157: '500 mcg SC once daily — paraspinal injection at level of injury',
      tb500: '2.5 mg SC twice per week (crosses blood-brain barrier — addresses neural component)',
      additionalPeptides: ['TB-500 is especially important here for its BBB-penetrating neural repair activity'],
      timeline: '8–12 weeks for disc/nerve pain reduction; structural changes slower',
      injectionRoute: 'BPC-157: paraspinal (1–2 cm lateral to affected spinous process). TB-500: abdomen for systemic coverage',
      notes: [
        'BPC-157 upregulates VEGF in avascular disc tissue — a key mechanism for disc healing',
        'TB-500 penetrates the blood-brain barrier and demonstrates neural repair in spinal injury models',
        'Neurological symptoms (tingling, numbness) often improve before structural disc changes on imaging',
        isChronic ? 'Chronic disc conditions benefit from long-term maintenance after initial loading cycle' : '',
        'Avoid surgical deferral for motor deficits — peptides adjunctive, not replacement for urgent decompression',
      ].filter(Boolean),
    };
  }

  // Chronic injuries: BPC-157 + TB-500 maintenance-focused
  if (isChronic) {
    return {
      stack: 'BPC-157 + TB-500 — Chronic Repair Protocol',
      stackColor: '#00ff88',
      bpc157: '500 mcg SC once daily near injury site',
      tb500: '2.5 mg SC twice per week',
      additionalPeptides: ['Second cycle recommended after 2-week break if incomplete resolution'],
      timeline: '8–12 weeks for chronic injury (duration matches time since injury)',
      injectionRoute: 'Local SC injection within 2–3 cm of injury; TB-500 abdomen or thigh',
      notes: [
        'Chronic injuries have established fibrosis and scar tissue — peptides remodel as well as rebuild',
        'BPC-157 activates growth hormone receptors even in chronic scar tissue — it is never too late',
        'TB-500 breaks down fibrotic adhesions while mobilizing stem cells to the chronic injury site',
        isChronic && duration === 'Chronic 6+ months' ? 'For injuries older than 6 months: expect slower response — two cycles (with break) often needed for full effect' : '',
      ].filter(Boolean),
    };
  }

  // Default: acute mild-moderate local injury — BPC-157 alone or with TB-500
  const needsTb500 = severity === 'Moderate pain' || kind === 'Tendon' || kind === 'Ligament';
  return {
    stack: needsTb500 ? 'BPC-157 + TB-500 — Standard Healing Stack' : 'BPC-157 Protocol',
    stackColor: needsTb500 ? '#00ff88' : '#10b981',
    bpc157: `${severity === 'Moderate pain' ? '500' : '250'} mcg SC once daily near injury site`,
    tb500: needsTb500 ? '2 mg SC twice per week' : null,
    additionalPeptides: [],
    timeline: severity === 'Moderate pain' ? '4–6 weeks to functional recovery' : '2–4 weeks for mild acute injury',
    injectionRoute: 'Subcutaneous injection within 2–3 cm of injury site',
    notes: [
      'Acute mild injuries respond fast — BPC-157 typically produces noticeable improvement within 3–7 days',
      needsTb500 ? 'TB-500 added for tendon/ligament: its actin-binding and stem cell mobilization directly targets connective tissue' : 'BPC-157 alone is sufficient for mild muscle and bone injuries with short duration',
      'Continue for full cycle even if feeling better — structural repair lags symptom resolution by 2–4 weeks',
    ],
  };
}

const STEPS = ['Body Region', 'Injury Type', 'Duration', 'Severity'];

export default function InjuryAssessment() {
  const [step, setStep] = useState(0);
  const [region, setRegion] = useState<BodyRegion | ''>('');
  const [kind, setKind] = useState<InjuryKind | ''>('');
  const [duration, setDuration] = useState<Duration | ''>('');
  const [severity, setSeverity] = useState<Severity | ''>('');
  const [showResult, setShowResult] = useState(false);

  const result =
    region && kind && duration && severity
      ? getRecommendation(region as BodyRegion, kind as InjuryKind, duration as Duration, severity as Severity)
      : null;

  const reset = () => {
    setStep(0);
    setRegion('');
    setKind('');
    setDuration('');
    setSeverity('');
    setShowResult(false);
  };

  const bodyRegions: BodyRegion[] = ['Upper body', 'Lower body', 'Spine', 'Gut/Internal', 'Multiple areas'];
  const injuryKinds: InjuryKind[] = ['Tendon', 'Ligament', 'Muscle', 'Joint', 'Gut', 'Bone fracture', 'Post-surgery', 'Other'];
  const durations: Duration[] = ['<2 weeks', '2-8 weeks', '2-6 months', 'Chronic 6+ months'];
  const severities: Severity[] = ['Mild discomfort', 'Moderate pain', 'Severe/cannot train'];

  const handleNext = () => {
    const stepValues = [region, kind, duration, severity];
    if (stepValues[step]) {
      if (step < 3) setStep(step + 1);
      else setShowResult(true);
    }
  };

  if (showResult && result) {
    return (
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div>
            <div className="text-xs font-bold tracking-widest mb-1" style={{ color: result.stackColor }}>RECOMMENDED PROTOCOL</div>
            <h4 className="text-gray-900 font-black text-lg">{result.stack}</h4>
          </div>
          <button onClick={reset} className="flex items-center gap-1.5 text-gray-600 text-sm hover:text-gray-900 transition-colors">
            <RotateCcw className="w-3.5 h-3.5" /> Reassess
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="text-emerald-400 text-xs font-bold tracking-widest mb-1">BPC-157</div>
            <div className="text-gray-900 text-sm font-semibold">{result.bpc157}</div>
          </div>
          {result.tb500 && (
            <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="text-blue-400 text-xs font-bold tracking-widest mb-1">TB-500</div>
              <div className="text-gray-900 text-sm font-semibold">{result.tb500}</div>
            </div>
          )}
          <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div className="text-amber-400 text-xs font-bold tracking-widest mb-1">EXPECTED TIMELINE</div>
            <div className="text-gray-900 text-sm font-semibold">{result.timeline}</div>
          </div>
          <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <div className="text-purple-400 text-xs font-bold tracking-widest mb-1">INJECTION ROUTE</div>
            <div className="text-gray-900 text-sm font-semibold">{result.injectionRoute}</div>
          </div>
        </div>

        {result.additionalPeptides.length > 0 && (
          <div className="mb-4 rounded-xl p-4" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
            <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#00ff88' }}>OPTIONAL ADDITIONS</div>
            <ul className="space-y-1">
              {result.additionalPeptides.map((add, i) => (
                <li key={i} className="text-gray-800 text-sm flex items-start gap-2">
                  <span style={{ color: '#00ff88' }} className="mt-0.5 shrink-0">+</span>{add}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <div className="text-gray-600 text-xs font-bold tracking-widest mb-3">PROTOCOL NOTES</div>
          <ul className="space-y-2">
            {result.notes.map((note, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800 text-sm">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{note}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-500 text-xs border-t border-slate-800 pt-3 mt-4">
          For research purposes only. Consult a qualified healthcare provider before use.
        </p>
      </div>
    );
  }

  const currentOptions: { label: string; value: string }[] = step === 0
    ? bodyRegions.map((r) => ({ label: r, value: r }))
    : step === 1
    ? injuryKinds.map((k) => ({ label: k, value: k }))
    : step === 2
    ? durations.map((d) => ({ label: d, value: d }))
    : severities.map((s) => ({ label: s, value: s }));

  const currentValue = [region, kind, duration, severity][step];
  const setters = [
    (v: string) => setRegion(v as BodyRegion),
    (v: string) => setKind(v as InjuryKind),
    (v: string) => setDuration(v as Duration),
    (v: string) => setSeverity(v as Severity),
  ];

  return (
    <div className="glass-card p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}>
          <span style={{ color: '#00ff88' }} className="text-sm font-black">IA</span>
        </div>
        <div>
          <h3 className="text-gray-900 font-black text-lg">Injury Assessment Tool</h3>
          <p className="text-gray-600 text-xs">Answer 4 questions to get your recommended peptide protocol</p>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-1 mb-6">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-1 flex-1">
            <div
              className="h-1 rounded-full flex-1 transition-all"
              style={{ background: i <= step ? '#00ff88' : 'rgba(255,255,255,0.08)' }}
            />
            {i < STEPS.length - 1 && <div className="w-1 h-1 rounded-full" style={{ background: i < step ? '#00ff88' : 'rgba(255,255,255,0.08)' }} />}
          </div>
        ))}
      </div>

      <div className="mb-2">
        <div className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>STEP {step + 1} OF 4</div>
        <div className="text-gray-900 font-bold text-base mb-4">{['Where is your injury?', 'What type of injury?', 'How long have you had it?', 'What is the severity?'][step]}</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
        {currentOptions.map((opt) => {
          const isSelected = currentValue === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setters[step](opt.value)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
              style={{
                background: isSelected ? 'rgba(0,255,136,0.12)' : 'rgba(255,255,255,0.04)',
                border: isSelected ? '1px solid rgba(0,255,136,0.5)' : '1px solid rgba(255,255,255,0.08)',
                color: isSelected ? '#00ff88' : '#94a3b8',
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:text-gray-900 transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!currentValue}
          className="flex-1 py-2.5 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
          style={{
            background: currentValue ? '#00ff88' : 'rgba(255,255,255,0.06)',
            color: currentValue ? '#060610' : '#475569',
            cursor: currentValue ? 'pointer' : 'not-allowed',
          }}
        >
          {step < 3 ? 'Next' : 'Get My Protocol'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
