'use client';

import { useState } from 'react';

type Goal = 'fine-lines' | 'deep-wrinkles' | 'sagging' | 'all-over' | 'scar';

const goals: { id: Goal; label: string; icon: string }[] = [
  { id: 'fine-lines', label: 'Fine Lines', icon: '〰️' },
  { id: 'deep-wrinkles', label: 'Deep Wrinkles', icon: '📏' },
  { id: 'sagging', label: 'Sagging', icon: '⬇️' },
  { id: 'all-over', label: 'All-Over Firmness', icon: '✨' },
  { id: 'scar', label: 'Scar Healing', icon: '🔬' },
];

const protocols: Record<Goal, {
  headline: string;
  description: string;
  topical: { product: string; application: string; why: string }[];
  injectable: { product: string; dose: string; why: string }[];
  timeline: string;
}> = {
  'fine-lines': {
    headline: 'Expression Line Prevention & Softening',
    description: 'Fine lines form from repeated muscle contractions over collagen that has partially thinned. The fix requires both relaxing the contraction (SNAP-8) and rebuilding the collagen architecture beneath.',
    topical: [
      { product: 'SNAP-8 topical', application: '2× daily, eye & forehead area', why: 'Inhibits catecholamine release at neuromuscular junction — reduces the micro-contractions that form expression lines' },
      { product: 'GHK-Cu serum', application: '1× daily, full face', why: 'Stimulates collagen I and III synthesis in the dermis — rebuilds the structural base beneath fine lines' },
    ],
    injectable: [
      { product: 'GHK-Cu', dose: '1–2mg SC daily', why: 'Systemic collagen signal that topical alone can\'t match — critical for moderate-to-significant fine lines' },
    ],
    timeline: '6–10 weeks for visible softening of established fine lines',
  },
  'deep-wrinkles': {
    headline: 'Deep Wrinkle Structural Repair',
    description: 'Deep wrinkles represent significant collagen loss and dermal thinning. Surface topicals help, but the real work happens with injectables that can signal collagen synthesis from inside.',
    topical: [
      { product: 'GHK-Cu topical', application: '2× daily, wrinkle areas', why: 'Upregulates TGF-beta signaling — drives new collagen matrix formation in the dermis' },
      { product: 'SNAP-8 topical', application: '1× daily', why: 'Prevents further deepening from expression — maintains the gains from injectable work' },
    ],
    injectable: [
      { product: 'GHK-Cu', dose: '2mg SC daily', why: 'The most potent collagen I, III, IV synthesizer available — necessary for structural deep wrinkle repair' },
      { product: 'BPC-157', dose: '250mcg 2×/day', why: 'Supports angiogenesis in skin tissue — critical for delivering nutrients to rebuild the dermis' },
    ],
    timeline: '12–16 weeks for meaningful reduction in deep wrinkle depth',
  },
  sagging: {
    headline: 'Skin Laxity & Elastin Restoration',
    description: 'Sagging skin reflects loss of both collagen (structure) and elastin (recoil). The peptide strategy here focuses on rebuilding both, plus improving the vascular supply that collagen production depends on.',
    topical: [
      { product: 'GHK-Cu topical', application: '2× daily, affected areas', why: 'Promotes elastin synthesis alongside collagen — restores the recoil property that makes skin snap back' },
    ],
    injectable: [
      { product: 'GHK-Cu', dose: '2mg SC daily', why: 'Systemic elastin + collagen signaling — addresses the structural deficit driving sagging from the inside' },
      { product: 'BPC-157', dose: '250mcg 2×/day', why: 'Angiogenesis support — sagging skin is often poorly vascularized; improved blood flow accelerates repair' },
    ],
    timeline: '16–20 weeks — sagging requires long-term collagen remodeling',
  },
  'all-over': {
    headline: 'Full-Face & Body Firmness Protocol',
    description: 'For comprehensive skin quality improvement across multiple zones, the all-over protocol combines topical application with systemic injectable support and IGF-1 axis optimization.',
    topical: [
      { product: 'GHK-Cu serum', application: '2× daily, full face + neck', why: 'Resets 31% of aged genes in skin tissue — comprehensive epigenetic skin rejuvenation' },
      { product: 'SNAP-8 topical', application: '1× daily, expression zones', why: 'Prevention layer — stops new lines from forming while injectable work repairs existing ones' },
    ],
    injectable: [
      { product: 'GHK-Cu', dose: '2mg SC daily', why: 'Foundation of the all-over protocol — the broadest collagen and elastin signal available' },
      { product: 'BPC-157', dose: '250mcg 2×/day', why: 'Supports the IGF-1 receptor signaling that drives skin cell proliferation and dermal density' },
    ],
    timeline: '10–14 weeks for noticeable whole-face improvement',
  },
  scar: {
    headline: 'Scar Remodeling & Skin Repair',
    description: 'Scar tissue is laid down in disorganized collagen patterns. The peptide goal is to encourage the remodeling process — breaking down excessive cross-linking and stimulating organized Type III collagen synthesis.',
    topical: [
      { product: 'GHK-Cu topical', application: '3× daily, directly on scar', why: 'Drives MMP production that breaks down disorganized scar collagen while stimulating new organized collagen' },
      { product: 'BPC-157 topical (if available)', application: '2× daily', why: 'Accelerates wound healing pathways and angiogenesis at the scar site' },
    ],
    injectable: [
      { product: 'BPC-157', dose: '250mcg 2×/day SC', why: 'The most studied peptide for scar healing — promotes organized tissue regeneration and blood vessel formation' },
      { product: 'GHK-Cu', dose: '2mg SC daily', why: 'Systemic anti-fibrotic signal — reduces the excessive cross-linking in hypertrophic scars' },
    ],
    timeline: '8–20 weeks depending on scar age and type',
  },
};

const colorClass = {
  button: {
    active: 'bg-purple-500/15 border-purple-500/30 text-purple-200',
    inactive: 'bg-slate-800/40 border-slate-700/30 text-slate-400 hover:text-slate-200 hover:border-slate-600',
  },
};

export default function SkinFirmnessGoalSelector() {
  const [selected, setSelected] = useState<Goal>('all-over');
  const protocol = protocols[selected];

  return (
    <div className="glass-card p-6 space-y-6">
      <div>
        <h3 className="text-white font-black text-lg mb-1">Skin Firmness Protocol Selector</h3>
        <p className="text-slate-400 text-sm">Select your primary skin concern for a personalized topical + injectable protocol.</p>
      </div>

      {/* Goal buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {goals.map((g) => (
          <button
            key={g.id}
            onClick={() => setSelected(g.id)}
            className={`p-3 rounded-xl border text-center transition-all text-sm font-semibold ${
              selected === g.id ? colorClass.button.active : colorClass.button.inactive
            }`}
          >
            <div className="text-xl mb-1">{g.icon}</div>
            <div className="leading-tight text-xs">{g.label}</div>
          </button>
        ))}
      </div>

      {/* Protocol detail */}
      <div className="bg-purple-500/8 border border-purple-500/20 rounded-xl p-5 space-y-5">
        <div>
          <h4 className="text-purple-200 font-black text-base mb-1">{protocol.headline}</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{protocol.description}</p>
        </div>

        {/* Topical protocol */}
        <div>
          <p className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">Topical Protocol</p>
          <div className="space-y-2">
            {protocol.topical.map((t) => (
              <div key={t.product} className="bg-slate-900/40 rounded-lg p-3">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <span className="text-rose-300 font-bold text-sm">{t.product}</span>
                  <span className="text-slate-400 text-xs bg-slate-800 rounded-full px-3 py-0.5">{t.application}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{t.why}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Injectable protocol */}
        <div>
          <p className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2">Injectable Protocol</p>
          <div className="space-y-2">
            {protocol.injectable.map((inj) => (
              <div key={inj.product} className="bg-slate-900/40 rounded-lg p-3">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <span className="text-purple-300 font-bold text-sm">{inj.product}</span>
                  <span className="text-slate-400 text-xs bg-slate-800 rounded-full px-3 py-0.5">{inj.dose}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{inj.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/40 rounded-lg p-3">
          <p className="text-purple-400 text-xs font-bold mb-1">Expected Timeline</p>
          <p className="text-slate-300 text-xs">{protocol.timeline}</p>
        </div>
      </div>

      <p className="text-slate-600 text-xs">Research peptides only. Individual results vary. Topical application refers to cosmetic-grade formulations.</p>
    </div>
  );
}
