'use client';

import { useState } from 'react';

type View = 'mechanism' | 'results' | 'difference';

const views: { id: View; label: string }[] = [
  { id: 'mechanism', label: 'Dual Mechanism' },
  { id: 'results', label: 'Trial Results' },
  { id: 'difference', label: 'vs Semaglutide Alone' },
];

export default function CagrisemaComparison() {
  const [view, setView] = useState<View>('mechanism');

  return (
    <div className="glass-card p-6 space-y-5">
      <div>
        <h3 className="text-gray-900 font-black text-lg mb-1">Cagrisema: Dual Pathway Weight Loss</h3>
        <p className="text-gray-600 text-sm">
          Cagrisema combines two peptides acting through completely separate appetite pathways — explore the mechanism and outcomes.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {views.map((v) => (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all ${
              view === v.id
                ? 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                : 'bg-gray-50 border-gray-200/40 text-gray-600 hover:text-gray-900'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {view === 'mechanism' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-blue-500/10 border border-blue-500/20">
              <div className="text-blue-400 font-black text-sm mb-2">Semaglutide Component</div>
              <div className="text-gray-600 text-xs leading-relaxed space-y-1.5">
                <p><strong className="text-gray-800">Receptor:</strong> GLP-1 (Glucagon-Like Peptide-1)</p>
                <p><strong className="text-gray-800">Brain effect:</strong> Hypothalamic appetite suppression</p>
                <p><strong className="text-gray-800">Gut effect:</strong> Slows gastric emptying</p>
                <p><strong className="text-gray-800">Metabolic:</strong> Glucose-dependent insulin secretion</p>
              </div>
            </div>
            <div className="rounded-xl p-4 bg-rose-500/10 border border-rose-500/20">
              <div className="text-rose-400 font-black text-sm mb-2">Cagrilintide Component</div>
              <div className="text-gray-600 text-xs leading-relaxed space-y-1.5">
                <p><strong className="text-gray-800">Receptor:</strong> Amylin (IAPP receptor)</p>
                <p><strong className="text-gray-800">Brain effect:</strong> Area postrema satiety signaling</p>
                <p><strong className="text-gray-800">Gut effect:</strong> Independent gastric slowing</p>
                <p><strong className="text-gray-800">Metabolic:</strong> Glucagon suppression</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-200/30">
            <p className="text-gray-800 text-sm font-semibold mb-1">Why Combining Both Works</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Amylin and GLP-1 act through completely different receptors and brain regions — their appetite-suppressing effects are additive, not redundant.
              This is why cagrisema achieves ~25% weight loss vs ~15% for semaglutide alone: two fully independent pathways are engaged simultaneously.
            </p>
          </div>
        </div>
      )}

      {view === 'results' && (
        <div className="space-y-4">
          <div className="space-y-3">
            {[
              { label: 'Cagrisema (REDEFINE)', pct: 25, color: 'rose', note: 'Phase III REDEFINE trial' },
              { label: 'Tirzepatide (SURMOUNT)', pct: 22.5, color: 'emerald', note: 'SURMOUNT-1 at 15mg' },
              { label: 'Semaglutide (STEP)', pct: 16.9, color: 'blue', note: 'STEP-1 at 2.4mg' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-800 font-semibold">{item.label}</span>
                  <span className={`font-bold text-${item.color}-400`}>{item.pct}%</span>
                </div>
                <div className="h-7 bg-slate-800 rounded-xl overflow-hidden">
                  <div
                    className={`h-full bg-${item.color}-500 rounded-xl transition-all duration-700 flex items-center justify-end pr-2`}
                    style={{ width: `${(item.pct / 25) * 100}%` }}
                  >
                    <span className="text-gray-900 text-xs font-bold">{item.pct}%</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-0.5">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'difference' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-gray-50 border border-gray-200/30 text-center">
              <div className="text-blue-400 font-black text-2xl">~15%</div>
              <div className="text-gray-600 text-xs mt-1">Semaglutide 2.4mg/wk<br/>alone</div>
            </div>
            <div className="rounded-xl p-4 bg-rose-500/10 border border-rose-500/20 text-center">
              <div className="text-rose-400 font-black text-2xl">~25%</div>
              <div className="text-gray-600 text-xs mt-1">Cagrisema<br/>(sema + cagrilintide)</div>
            </div>
          </div>
          <div className="rounded-xl p-4 bg-rose-500/8 border border-rose-500/15">
            <p className="text-rose-400 font-bold text-sm mb-1">+67% More Weight Loss</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Adding cagrilintide to semaglutide produces ~67% more weight loss than semaglutide alone — the most dramatic improvement
              achieved by adding a single agent to an existing GLP-1 regimen in clinical trials.
            </p>
          </div>
          <div className="rounded-xl p-4 bg-gray-50 border border-gray-200/30">
            <p className="text-gray-600 text-sm leading-relaxed">
              <strong className="text-gray-800">Key differentiator from tirzepatide/retatrutide:</strong> Those compounds use GIP and glucagon
              receptors. Cagrisema uses the amylin receptor — an entirely different system, meaning patients who don't respond well to GIP-based
              approaches may respond better to the amylin pathway.
            </p>
          </div>
        </div>
      )}

      <p className="text-gray-500 text-xs">REDEFINE Phase III data. Cagrisema is in late-stage clinical development. For research and educational purposes only.</p>
    </div>
  );
}
