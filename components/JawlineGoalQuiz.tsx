'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

type JawAssessment = 'Weak' | 'Average' | 'Strong';
type PrimaryGoal = 'Definition' | 'Bone Density' | 'Facial Fat' | 'All';
type Timeline = '3 months' | '6 months' | '1 year';

interface Protocol {
  peptides: { name: string; dose: string; why: string; color: string }[];
  expectation: string;
  priority: string;
}

const PROTOCOLS: Record<string, Protocol> = {
  'Weak-Definition-3 months': {
    peptides: [
      { name: 'GHK-Cu', dose: '2mg daily SC', why: 'Fastest collagen scaffolding changes in facial tissue — visibly improves facial structure definition within 8–10 weeks', color: '#34d399' },
      { name: 'IGF-1 LR3', dose: '50mcg daily, 4-week cycle', why: 'Drives growth factor signaling in facial bone tissue — even 3 months shows bone density improvements at the mandibular angle', color: '#60a5fa' },
    ],
    expectation: 'Visible improvement in facial definition, skin tightening around jawline, initial bone density improvements. Realistic but not dramatic at 3 months.',
    priority: 'GHK-Cu is your priority — it delivers the fastest visible changes.',
  },
  'Weak-Bone Density-6 months': {
    peptides: [
      { name: 'IGF-1 LR3', dose: '50–80mcg daily, cycles of 4 weeks on/2 off', why: 'The primary driver of skeletal growth factor signaling — stimulates IGF-1R on osteoblasts, increasing mandibular bone density and remodeling', color: '#60a5fa' },
      { name: 'CJC-1295/Ipamorelin', dose: '100/100mcg before bed nightly', why: 'Amplifies GH axis → systemic IGF-1 → bone remodeling. 6 months of elevated nocturnal GH is meaningful for adult facial bone density', color: '#00ff88' },
    ],
    expectation: 'At 6 months with a bone density focus: measurable improvements in jawline definition, increased gonial angle appearance, denser mandibular structure.',
    priority: 'IGF-1 LR3 is the keystone — CJC/Ipa provides continuous GH support between IGF-1 cycles.',
  },
  'Average-Facial Fat-6 months': {
    peptides: [
      { name: 'CJC-1295/Ipamorelin', dose: '100/100mcg before bed nightly', why: 'GH axis optimization is the primary lever for facial fat distribution — improved GH reduces buccal fat and redistributes facial fat toward more defined contours', color: '#00ff88' },
      { name: 'GHK-Cu', dose: '2mg daily SC', why: 'Tightens the collagen matrix underlying facial skin — as fat redistribution occurs, GHK-Cu ensures the skin redrapes cleanly without sagging', color: '#34d399' },
    ],
    expectation: '6 months of GH optimization shows meaningful facial fat redistribution in most users — sharper jawline appearance, reduced buccal fat, improved facial thirds.',
    priority: 'CJC/Ipa drives the fat redistribution; GHK-Cu captures the definition as it happens.',
  },
  'Strong-All-1 year': {
    peptides: [
      { name: 'IGF-1 LR3', dose: '60mcg daily, 4 wks on / 2 wks off cycling', why: 'For those with already-good structure, IGF-1 maximizes jawline density and angular definition at the architectural level', color: '#60a5fa' },
      { name: 'GHK-Cu', dose: '2–3mg daily SC', why: 'Optimizes facial collagen architecture — at 1 year, the cumulative collagen remodeling effect on facial structure is substantial', color: '#34d399' },
      { name: 'BPC-157', dose: '250mcg near facial ligament insertion points', why: 'Supports ligament and fascia integrity of facial structures — the masseteric ligaments and retaining ligaments define jawline sharpness', color: '#a78bfa' },
    ],
    expectation: '1-year comprehensive protocol for those starting with good structure: maximized jawline sharpness, enhanced bone density and angularity, optimized collagen architecture. The ceiling of non-surgical facial optimization.',
    priority: 'All three peptides are working synergistically — this is the full facial structure protocol.',
  },
};

const getProtocolKey = (jaw: JawAssessment, goal: PrimaryGoal, timeline: Timeline): string => {
  const key = `${jaw}-${goal}-${timeline}`;
  if (PROTOCOLS[key]) return key;
  // Fallback to reasonable defaults
  if (goal === 'All' || goal === 'Definition') return `Weak-Definition-3 months`;
  if (goal === 'Bone Density') return `Weak-Bone Density-6 months`;
  if (goal === 'Facial Fat') return `Average-Facial Fat-6 months`;
  return `Weak-Definition-3 months`;
};

const colorMap: Record<string, { bg: string; border: string }> = {
  '#34d399': { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)' },
  '#60a5fa': { bg: 'rgba(96,165,250,0.08)', border: 'rgba(96,165,250,0.25)' },
  '#00ff88': { bg: 'rgba(0,255,136,0.08)', border: 'rgba(0,255,136,0.25)' },
  '#a78bfa': { bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
};

export default function JawlineGoalQuiz() {
  const [jaw, setJaw] = useState<JawAssessment | null>(null);
  const [goal, setGoal] = useState<PrimaryGoal | null>(null);
  const [timeline, setTimeline] = useState<Timeline | null>(null);
  const [showResult, setShowResult] = useState(false);

  const canSubmit = jaw && goal && timeline;
  const protocolKey = canSubmit ? getProtocolKey(jaw, goal, timeline) : null;
  const protocol = protocolKey ? PROTOCOLS[protocolKey] : null;

  const reset = () => {
    setJaw(null);
    setGoal(null);
    setTimeline(null);
    setShowResult(false);
  };

  if (showResult && protocol) {
    return (
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <div className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>YOUR JAWLINE PROTOCOL</div>
            <h3 className="text-white font-black text-lg">{jaw} Jaw → {goal} → {timeline}</h3>
          </div>
          <button onClick={reset} className="text-slate-400 text-sm hover:text-white border border-slate-700 hover:border-slate-500 px-3 py-1 rounded transition-colors">
            Retake Quiz
          </button>
        </div>

        <div className="space-y-4 mb-6">
          {protocol.peptides.map((p) => {
            const c = colorMap[p.color] || colorMap['#34d399'];
            return (
              <div key={p.name} className="rounded-xl p-5" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="font-black text-base" style={{ color: p.color }}>{p.name}</div>
                  <div className="text-xs font-bold px-2 py-1 rounded-lg text-slate-300" style={{ background: 'rgba(0,0,0,0.3)' }}>{p.dose}</div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{p.why}</p>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.15)' }}>
          <div className="text-xs font-bold tracking-widest mb-2 text-slate-500">EXPECTED OUTCOME — {timeline?.toUpperCase()}</div>
          <p className="text-slate-300 text-sm leading-relaxed">{protocol.expectation}</p>
        </div>

        <div className="flex items-start gap-2 mb-5">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-slate-400 text-sm"><span className="text-white font-semibold">Priority note: </span>{protocol.priority}</p>
        </div>

        <a
          href="/out"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all"
          style={{ background: '#00ff88', color: '#060610' }}
        >
          Shop Recommended Peptides <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-slate-700 text-xs mt-4 border-t border-slate-800 pt-4">
          For research purposes only. Not medical advice. Consult a healthcare provider before use.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <div className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>JAWLINE PROTOCOL QUIZ</div>
        <h3 className="text-white font-black text-xl">Build Your Jawline Protocol</h3>
        <p className="text-slate-400 text-sm mt-1">3 questions. Personalized peptide recommendation.</p>
      </div>

      <div className="space-y-7">
        {/* Q1 */}
        <div>
          <label className="block text-slate-300 text-sm font-semibold mb-3">1. How would you assess your current jaw?</label>
          <div className="grid grid-cols-3 gap-3">
            {(['Weak', 'Average', 'Strong'] as JawAssessment[]).map((opt) => {
              const subs = { Weak: 'Recessed, soft definition', Average: 'Present but not sharp', Strong: 'Good, want to maximize' };
              const isActive = jaw === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setJaw(opt)}
                  className="p-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(96,165,250,0.12)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? '1px solid rgba(96,165,250,0.45)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="font-bold text-sm" style={{ color: isActive ? '#60a5fa' : '#e2e8f0' }}>{opt}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{subs[opt]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Q2 */}
        <div>
          <label className="block text-slate-300 text-sm font-semibold mb-3">2. Primary goal?</label>
          <div className="grid grid-cols-2 gap-3">
            {(['Definition', 'Bone Density', 'Facial Fat', 'All'] as PrimaryGoal[]).map((opt) => {
              const subs = { Definition: 'Sharper, more cut look', 'Bone Density': 'Structural mass / angularity', 'Facial Fat': 'Reduce buccal fat, recomp', All: 'Complete jawline optimization' };
              const isActive = goal === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setGoal(opt)}
                  className="p-4 rounded-xl text-left transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(167,139,250,0.12)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? '1px solid rgba(167,139,250,0.45)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="font-bold text-sm" style={{ color: isActive ? '#a78bfa' : '#e2e8f0' }}>{opt}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{subs[opt]}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Q3 */}
        <div>
          <label className="block text-slate-300 text-sm font-semibold mb-3">3. Commitment timeline?</label>
          <div className="grid grid-cols-3 gap-3">
            {(['3 months', '6 months', '1 year'] as Timeline[]).map((opt) => {
              const isActive = timeline === opt;
              return (
                <button
                  key={opt}
                  onClick={() => setTimeline(opt)}
                  className="p-4 rounded-xl text-center transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(0,255,136,0.12)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? '1px solid rgba(0,255,136,0.45)' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div className="font-black text-base" style={{ color: isActive ? '#00ff88' : '#e2e8f0' }}>{opt}</div>
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => canSubmit && setShowResult(true)}
          disabled={!canSubmit}
          className="w-full py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
          style={{
            background: canSubmit ? '#00ff88' : 'rgba(255,255,255,0.06)',
            color: canSubmit ? '#060610' : '#475569',
            cursor: canSubmit ? 'pointer' : 'not-allowed',
          }}
        >
          Build My Protocol <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
