'use client';

import { useState } from 'react';

type Situation = 'lowt' | 'pct' | 'optimize' | 'trt-alt';

const situations: { id: Situation; label: string; icon: string }[] = [
  { id: 'lowt', label: 'Low T Symptoms', icon: '📉' },
  { id: 'pct', label: 'Post-Cycle Support', icon: '🔄' },
  { id: 'optimize', label: 'Optimization', icon: '⚡' },
  { id: 'trt-alt', label: 'TRT Alternative', icon: '🎯' },
];

const protocols: Record<Situation, {
  headline: string;
  description: string;
  peptides: { name: string; dose: string; frequency: string; role: string }[];
  timeline: string;
  expectations: string;
}> = {
  lowt: {
    headline: 'Restoring Natural Production',
    description: 'For men with low-T symptoms (fatigue, low libido, brain fog) but intact HPTA. The goal is to stimulate your axis rather than replace what it\'s not making.',
    peptides: [
      { name: 'Kisspeptin-10', dose: '25–50mcg', frequency: '2× daily SC', role: 'Triggers GnRH pulses — the upstream signal that starts testosterone production' },
      { name: 'Gonadorelin', dose: '100mcg', frequency: '2× weekly SC', role: 'Direct LH stimulus — tells the testes to produce testosterone' },
      { name: 'BPC-157', dose: '250mcg', frequency: '2× daily SC', role: 'Systemic repair including Leydig cell support and androgen receptor upregulation' },
    ],
    timeline: '8–12 weeks for measurable improvement',
    expectations: 'Expect gradual improvement in energy, libido, and morning erections over 4–8 weeks. Lab work at baseline and week 12 is strongly recommended.',
  },
  pct: {
    headline: 'Post-Cycle HPTA Recovery',
    description: 'After a suppressive cycle, the goal is to restart LH/FSH signaling and restore natural testosterone production as quickly as possible.',
    peptides: [
      { name: 'Gonadorelin', dose: '100–200mcg', frequency: 'Daily for 4 weeks, then EOD', role: 'Replaces exogenous LH to stimulate testicular function during suppression recovery' },
      { name: 'Kisspeptin-10', dose: '50mcg', frequency: '2× daily SC', role: 'Stimulates hypothalamic GnRH — the master signal suppressed by anabolic cycles' },
      { name: 'Sermorelin', dose: '200mcg', frequency: 'Nightly SC', role: 'GH axis support during recovery — preserves lean mass while T normalizes' },
    ],
    timeline: '4–8 weeks for significant recovery',
    expectations: 'Gonadorelin + Kisspeptin together accelerate HPTA recovery compared to either alone. Track morning testosterone levels. Most users see meaningful recovery by week 6.',
  },
  optimize: {
    headline: 'Peak Natural Testosterone',
    description: 'For men with normal-range testosterone who want to push to the top of the natural range and optimize the entire hormonal axis.',
    peptides: [
      { name: 'Sermorelin', dose: '200mcg', frequency: 'Nightly SC', role: 'GH pulse enhancement — elevated GH synergistically supports testosterone and body composition' },
      { name: 'Kisspeptin-10', dose: '25mcg', frequency: 'Pulsed 2× daily', role: 'Fine-tunes the amplitude of natural LH pulses for higher testosterone peaks' },
      { name: 'BPC-157', dose: '250mcg', frequency: 'Daily SC', role: 'Androgen receptor sensitization — gets more signal from the testosterone you already produce' },
    ],
    timeline: '6–10 weeks to notice changes',
    expectations: 'Less dramatic than PCT or Low-T protocols, but noticeable. Expect improved training performance, recovery speed, and libido quality. Optimize sleep and resistance training alongside for best results.',
  },
  'trt-alt': {
    headline: 'Working Without Replacement',
    description: 'For men who want to avoid exogenous testosterone — maintaining the natural axis with peptide support rather than shutting it down with TRT.',
    peptides: [
      { name: 'Gonadorelin', dose: '150mcg', frequency: '3× weekly SC', role: 'Sustained LH support — the core of the TRT-alternative approach' },
      { name: 'Kisspeptin-10', dose: '50mcg', frequency: '2× daily SC', role: 'Upstream hypothalamic signal to keep the full axis engaged' },
      { name: 'Sermorelin', dose: '200mcg', frequency: 'Nightly SC', role: 'GH axis for body composition — addresses the low-GH component of age-related decline' },
    ],
    timeline: '12–16 weeks for full effect',
    expectations: 'Won\'t produce TRT-level testosterone elevation, but preserves fertility, avoids testicular atrophy, and keeps the full axis functional. Best for men with borderline-low T who aren\'t ready for TRT.',
  },
};

const colorClass = {
  button: {
    active: 'bg-amber-500/15 border-amber-500/30 text-amber-300',
    inactive: 'bg-slate-800/40 border-gray-200/30 text-gray-600 hover:text-gray-900 hover:border-gray-300',
  },
};

export default function TestosteroneSupportSelector() {
  const [selected, setSelected] = useState<Situation>('lowt');
  const protocol = protocols[selected];

  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-gray-900 font-black text-lg mb-1">Testosterone Support Protocol Selector</h3>
        <p className="text-gray-600 text-sm">Select your situation to see the recommended peptide approach, dosing, and expected timeline.</p>
      </div>

      {/* Situation buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {situations.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`p-3 rounded-xl border text-center transition-all text-sm font-semibold ${
              selected === s.id ? colorClass.button.active : colorClass.button.inactive
            }`}
          >
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="leading-tight text-xs">{s.label}</div>
          </button>
        ))}
      </div>

      {/* Protocol detail */}
      <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-5 space-y-4">
        <div>
          <h4 className="text-amber-300 font-black text-base mb-1">{protocol.headline}</h4>
          <p className="text-gray-800 text-sm leading-relaxed">{protocol.description}</p>
        </div>

        <div className="space-y-3">
          {protocol.peptides.map((p) => (
            <div key={p.name} className="bg-slate-900/40 rounded-lg p-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="text-amber-300 font-bold text-sm">{p.name}</span>
                <span className="text-gray-600 text-xs bg-slate-800 rounded-full px-3 py-1">{p.dose} — {p.frequency}</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{p.role}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-slate-900/40 rounded-lg p-3">
            <p className="text-amber-400 text-xs font-bold mb-1">Timeline</p>
            <p className="text-gray-800 text-xs">{protocol.timeline}</p>
          </div>
          <div className="bg-slate-900/40 rounded-lg p-3">
            <p className="text-amber-400 text-xs font-bold mb-1">What to Expect</p>
            <p className="text-gray-800 text-xs leading-relaxed">{protocol.expectations}</p>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-xs">Research peptides only. Always confirm hormonal status with bloodwork before and after any peptide protocol.</p>
    </div>
  );
}
