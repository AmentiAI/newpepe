'use client';

import { useState } from 'react';
import { CheckCircle2, Circle, PartyPopper } from 'lucide-react';

const ITEMS = [
  { id: 'peptide-vial', label: 'Lyophilized peptide vial', note: 'Confirm it is still in lyophilized (powder) form' },
  { id: 'bac-water', label: 'Bacteriostatic water vial', note: 'BAC water only — not regular sterile water or saline' },
  { id: 'insulin-syringes', label: 'Insulin syringes (29–31g)', note: '1mL capacity, 29–31 gauge needle' },
  { id: 'alcohol-swabs', label: 'Alcohol swabs', note: 'At least 4 swabs — one per vial top, one per injection site' },
  { id: 'sharps-container', label: 'Sharps container', note: 'Never dispose of needles in regular trash' },
  { id: 'cold-storage', label: 'Cold storage space confirmed', note: 'Refrigerator (2–8°C) cleared and ready' },
  { id: 'sterile-gloves', label: 'Sterile gloves', note: 'Optional but recommended for first-timers' },
  { id: 'good-lighting', label: 'Good lighting', note: 'You need to see the syringe markings clearly' },
  { id: 'timer-notes', label: 'Timer / notes app ready', note: 'Log reconstitution date, amount of water used, dose' },
  { id: 'label-maker', label: 'Label or permanent marker', note: 'Label vials with date and concentration after mixing' },
];

export default function EquipmentChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const allDone = checked.size === ITEMS.length;
  const progress = Math.round((checked.size / ITEMS.length) * 100);

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-900 font-black text-lg">Equipment Checklist</h3>
        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.2)' }}>
          {checked.size}/{ITEMS.length}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-5">Check off each item before you begin. Having everything ready prevents mid-procedure mistakes.</p>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: allDone ? '#00ff88' : 'rgba(0,255,136,0.6)' }}
        />
      </div>

      <div className="space-y-2">
        {ITEMS.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full text-left flex items-start gap-3 p-4 rounded-xl transition-all ${
                isChecked ? 'opacity-100' : 'opacity-80 hover:opacity-100'
              }`}
              style={{
                background: isChecked ? 'rgba(0,255,136,0.06)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${isChecked ? 'rgba(0,255,136,0.2)' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {isChecked ? (
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#00ff88' }} />
              ) : (
                <Circle className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
              )}
              <div>
                <span className={`text-sm font-semibold ${isChecked ? 'text-neon-green line-through decoration-neon-green/40' : 'text-gray-900'}`}>
                  {item.label}
                </span>
                <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{item.note}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* All done state */}
      {allDone && (
        <div className="mt-6 rounded-2xl p-5 text-center" style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.3)' }}>
          <PartyPopper className="w-8 h-8 mx-auto mb-2" style={{ color: '#00ff88' }} />
          <p className="text-gray-900 font-black text-lg mb-1">You are ready to reconstitute!</p>
          <p className="text-gray-600 text-sm">All equipment accounted for. Proceed with the step-by-step guide below.</p>
        </div>
      )}
    </div>
  );
}
