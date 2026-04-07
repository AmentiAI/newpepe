'use client';

import { useState } from 'react';

type Zone = 'forehead' | 'glabella' | 'crowsfeet' | 'smilelines' | 'neck' | null;
type Severity = 1 | 2 | 3;

interface ZoneData {
  id: Zone;
  label: string;
  wrinkleType: string;
  description: string;
  top: string;
  left: string;
  w: string;
  h: string;
}

interface Recommendation {
  concentration: '5%' | '7.5%' | '10%';
  technique: string;
  weeksToResult: string;
  note: string | null;
  combineWith: string | null;
}

const zones: ZoneData[] = [
  {
    id: 'forehead',
    label: 'Forehead',
    wrinkleType: 'Horizontal Expression Lines',
    description: 'Dynamic wrinkles caused by frontalis muscle contraction. Appear when raising eyebrows. SNAP-8 reduces frontalis contraction strength, relaxing these lines.',
    top: '10%',
    left: '25%',
    w: '50%',
    h: '18%',
  },
  {
    id: 'glabella',
    label: 'Frown Lines',
    wrinkleType: 'Glabellar Lines (11 lines)',
    description: 'Vertical lines between the brows caused by corrugator supercilii and procerus muscles. Often called "the 11s." High-priority zone for SNAP-8 — these muscles are strong and overactive in many people.',
    top: '30%',
    left: '35%',
    w: '30%',
    h: '14%',
  },
  {
    id: 'crowsfeet',
    label: "Crow's Feet",
    wrinkleType: 'Periorbital Dynamic Wrinkles',
    description: 'Radiating lines from outer corners of eyes caused by orbicularis oculi contraction with squinting and smiling. Thin skin makes this zone one of the earliest areas to develop visible wrinkles.',
    top: '36%',
    left: '10%',
    w: '22%',
    h: '14%',
  },
  {
    id: 'smilelines',
    label: 'Smile Lines',
    wrinkleType: 'Nasolabial + Perioral Wrinkles',
    description: 'Lines from nose to mouth corners (nasolabial folds) plus perioral "lipstick lines" from orbicularis oris contraction. SNAP-8 relaxes these muscles while GHK-Cu collagen fills the fold area.',
    top: '57%',
    left: '20%',
    w: '60%',
    h: '20%',
  },
  {
    id: 'neck',
    label: 'Neck',
    wrinkleType: 'Platysmal Bands + Horizontal Lines',
    description: 'Platysmal bands are vertical cords from platysma muscle contraction. Horizontal neck lines from skin laxity. Combination of SNAP-8 for platysmal relaxation and GHK-Cu injectable for systemic collagen.',
    top: '82%',
    left: '25%',
    w: '50%',
    h: '14%',
  },
];

const recommendations: Record<NonNullable<Zone>, Record<Severity, Recommendation>> = {
  forehead: {
    1: {
      concentration: '5%',
      technique: 'Apply with fingertip using light upward strokes. Cover entire forehead from hairline to brow. AM and PM application.',
      weeksToResult: '4–6 weeks for initial softening; 10–12 weeks for measurable depth reduction',
      note: null,
      combineWith: 'GHK-Cu 0.5mg topical to rebuild collagen between lines',
    },
    2: {
      concentration: '7.5%',
      technique: 'Two-finger application covering full forehead. Apply AM and PM. Can layer: SNAP-8 first, GHK-Cu after 5 minutes.',
      weeksToResult: '3–4 weeks initial softening; 8–10 weeks significant improvement',
      note: null,
      combineWith: 'GHK-Cu 1mg topical PM for accelerated collagen rebuild',
    },
    3: {
      concentration: '10%',
      technique: 'Full-finger application to entire forehead. Layer AM and PM. Focus extra product on deepest lines.',
      weeksToResult: '2–3 weeks initial improvement; 8 weeks significant reduction; 12 weeks maximum effect',
      note: 'For deep static forehead lines, combine with GHK-Cu injectable (0.5mg/day SC) for systemic collagen support.',
      combineWith: 'GHK-Cu injectable 0.5–1mg/day SC + topical GHK-Cu 1–2mg PM',
    },
  },
  glabella: {
    1: {
      concentration: '5%',
      technique: 'Apply to glabella (between brows) using ring finger in downward pressing motion. Apply while relaxing the area — not while frowning.',
      weeksToResult: '5–6 weeks first signs; 10–12 weeks measurable reduction',
      note: null,
      combineWith: 'GHK-Cu 0.5mg applied to glabella area',
    },
    2: {
      concentration: '7.5%',
      technique: 'Apply with ring finger to glabella and brow area. Gentle pressing — not rubbing — encourages penetration into the corrugator area.',
      weeksToResult: '4–5 weeks softening; 8–10 weeks notable depth reduction',
      note: null,
      combineWith: 'GHK-Cu 1mg targeted to glabella zone for collagen rebuild',
    },
    3: {
      concentration: '10%',
      technique: 'Apply 10% SNAP-8 twice daily to glabella, brow, and forehead junction. Use pressing application with ring finger.',
      weeksToResult: '3–4 weeks initial change; 8–10 weeks significant reduction',
      note: 'Deep glabellar lines often require both SNAP-8 for muscle relaxation AND GHK-Cu injectable for structural collagen fill. Consider combining with GHK-Cu injectable for static lines.',
      combineWith: 'GHK-Cu injectable 0.5–1mg/day SC + 1–2mg topical to glabella',
    },
  },
  crowsfeet: {
    1: {
      concentration: '5%',
      technique: 'Apply with ring finger in gentle radial pattern from outer eye corner. Avoid the eye surface. Apply before moisturizer, AM and PM.',
      weeksToResult: '3–4 weeks first improvements (thin skin responds faster); 8–10 weeks full reduction',
      note: null,
      combineWith: 'GHK-Cu 0.5mg to periorbital area (avoid eye contact)',
    },
    2: {
      concentration: '7.5%',
      technique: 'Careful ring finger application lateral to eye only. Do not approach the inner eyelid. Apply AM and PM.',
      weeksToResult: '3–4 weeks softening visible; 8 weeks significant improvement',
      note: null,
      combineWith: 'GHK-Cu 1mg to crow\'s feet zone',
    },
    3: {
      concentration: '10%',
      technique: 'Apply 10% SNAP-8 laterally to eye corner only. Very thin skin here — lower concentration is safer. Consider 7.5% as upper limit for eye area.',
      weeksToResult: '2–3 weeks initial effect; 6–8 weeks measurable depth reduction',
      note: 'For deep static crow\'s feet: GHK-Cu injectable provides collagen fill from within. Topical SNAP-8 alone may be insufficient for very deep lines.',
      combineWith: 'GHK-Cu injectable for systemic collagen + 1mg GHK-Cu topical to periorbital area',
    },
  },
  smilelines: {
    1: {
      concentration: '5%',
      technique: 'Apply from nose toward mouth corners following the nasolabial groove. Apply AM and PM. For perioral lines, apply around mouth using fingertip in small circular motions.',
      weeksToResult: '5–7 weeks for initial softening; 12 weeks for measurable nasolabial improvement',
      note: null,
      combineWith: 'GHK-Cu 1mg topical to smile line zone',
    },
    2: {
      concentration: '7.5%',
      technique: 'Nasolabial fold: apply directly into the fold line and surrounding tissue. Perioral: apply to upper and lower lips and surrounding skin.',
      weeksToResult: '4–6 weeks softening; 10–12 weeks notable reduction',
      note: null,
      combineWith: 'GHK-Cu 1–2mg topical AM + PM for collagen volume fill',
    },
    3: {
      concentration: '10%',
      technique: 'Apply SNAP-8 to entire lower face including nasolabial folds, mouth corners, and perioral area. Consider twice-daily plus additional PM GHK-Cu layer.',
      weeksToResult: '4–5 weeks initial improvement; 10–12 weeks significant effect',
      note: 'Deep nasolabial folds are partly structural (collagen/fat loss) not just muscular — GHK-Cu injectable provides systemic collagen support for volume restoration that SNAP-8 alone cannot achieve.',
      combineWith: 'GHK-Cu injectable 1mg/day SC + 2mg topical PM + consider CJC-1295/Ipamorelin for broader collagen production',
    },
  },
  neck: {
    1: {
      concentration: '5%',
      technique: 'Apply to full neck with upward strokes. Focus on horizontal line zones. For platysmal bands, apply directly over the vertical cords.',
      weeksToResult: '6–8 weeks initial improvement; 12–16 weeks for measurable change (neck skin is thicker)',
      note: null,
      combineWith: 'GHK-Cu 1mg topical to neck and décolletage',
    },
    2: {
      concentration: '7.5%',
      technique: 'Apply AM and PM to full neck. Upward strokes from collarbone to jawline. Can combine with neck massage to improve product penetration.',
      weeksToResult: '5–6 weeks first changes; 10–12 weeks meaningful improvement',
      note: null,
      combineWith: 'GHK-Cu 1–2mg topical neck AM + PM',
    },
    3: {
      concentration: '10%',
      technique: 'Full neck application twice daily. Consider extending protocol to décolletage. Upward strokes, gentle pressure.',
      weeksToResult: '4–6 weeks initial response; 12–16 weeks for full effect',
      note: 'Deep neck lines and prominent platysmal bands benefit greatly from GHK-Cu injectable (systemic collagen support for the neck area). SNAP-8 alone has limited effect on structural neck laxity.',
      combineWith: 'GHK-Cu injectable 1mg/day SC + 2mg topical neck + consider CJC-1295/Ipamorelin',
    },
  },
};

const severityLabels: Record<Severity, { label: string; color: string; bg: string }> = {
  1: { label: 'Mild', color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  2: { label: 'Moderate', color: 'text-amber-400', bg: 'bg-amber-500/20' },
  3: { label: 'Severe', color: 'text-rose-400', bg: 'bg-rose-500/20' },
};

export default function WrinkleTargetSelector() {
  const [selectedZone, setSelectedZone] = useState<Zone>(null);
  const [severity, setSeverity] = useState<Severity>(2);

  const zoneData = zones.find(z => z.id === selectedZone);
  const rec = selectedZone ? recommendations[selectedZone][severity] : null;

  return (
    <div className="rounded-xl bg-dark-800/60 border border-white/10 overflow-hidden">
      <div className="p-5 border-b border-white/10">
        <h3 className="text-xl font-bold text-white mb-1">Wrinkle Zone Selector</h3>
        <p className="text-slate-400 text-sm">Click a zone on the face diagram to get a targeted SNAP-8 protocol.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* Face Diagram */}
        <div className="p-6 flex flex-col items-center">
          <div className="relative w-48 h-72 mx-auto">
            {/* Face outline */}
            <svg viewBox="0 0 200 300" className="absolute inset-0 w-full h-full" fill="none">
              {/* Head shape */}
              <ellipse cx="100" cy="130" rx="72" ry="90" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              {/* Neck */}
              <rect x="80" y="208" width="40" height="50" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              {/* Eyes */}
              <ellipse cx="72" cy="115" rx="15" ry="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              <ellipse cx="128" cy="115" rx="15" ry="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
              {/* Nose */}
              <path d="M95 125 Q100 145 105 125" stroke="#475569" strokeWidth="1.5" fill="none" />
              {/* Mouth */}
              <path d="M82 165 Q100 175 118 165" stroke="#475569" strokeWidth="1.5" fill="none" />
              {/* Eyebrows */}
              <path d="M58 103 Q72 96 86 103" stroke="#475569" strokeWidth="2" fill="none" />
              <path d="M114 103 Q128 96 142 103" stroke="#475569" strokeWidth="2" fill="none" />
            </svg>

            {/* Clickable zones */}
            {zones.map((zone) => (
              <button
                key={zone.id}
                onClick={() => setSelectedZone(prev => prev === zone.id ? null : zone.id)}
                className={`absolute rounded transition-all duration-200 flex items-center justify-center text-xs font-semibold ${
                  selectedZone === zone.id
                    ? 'bg-indigo-500/50 border-2 border-indigo-400 text-white'
                    : 'bg-white/5 border border-white/20 text-slate-400 hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-white'
                }`}
                style={{ top: zone.top, left: zone.left, width: zone.w, height: zone.h }}
                aria-label={`Select ${zone.label} zone`}
              >
                <span className="truncate px-1" style={{ fontSize: '0.6rem' }}>{zone.label}</span>
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            Click any highlighted zone to see the targeted protocol
          </p>

          {/* Severity Selector */}
          {selectedZone && (
            <div className="mt-5 w-full">
              <p className="text-xs text-slate-400 mb-2 text-center">Severity Assessment</p>
              <div className="flex gap-2">
                {([1, 2, 3] as Severity[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeverity(s)}
                    className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${
                      severity === s
                        ? `${severityLabels[s].bg} ${severityLabels[s].color} border-current`
                        : 'bg-dark-700/40 text-slate-500 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {severityLabels[s].label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Protocol Output */}
        <div className="p-6">
          {!selectedZone ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="text-4xl mb-4">👆</div>
              <p className="text-slate-400 text-sm">Select a zone on the face diagram to see your personalized SNAP-8 protocol and application technique.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">{zoneData?.label}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${severityLabels[severity].bg} ${severityLabels[severity].color}`}>
                    {severityLabels[severity].label}
                  </span>
                </div>
                <p className="text-xs text-indigo-400 mb-2">{zoneData?.wrinkleType}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{zoneData?.description}</p>
              </div>

              {rec && (
                <>
                  <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4">
                    <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2">Recommended Concentration</p>
                    <p className="text-2xl font-bold text-white">{rec.concentration}</p>
                    <p className="text-xs text-slate-400 mt-1">SNAP-8 in serum/gel base</p>
                  </div>

                  <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Application Technique</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{rec.technique}</p>
                  </div>

                  <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Expected Timeline</p>
                    <p className="text-xs text-slate-300">{rec.weeksToResult}</p>
                  </div>

                  {rec.combineWith && (
                    <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4">
                      <p className="text-xs text-emerald-400 uppercase tracking-wider mb-2">Combine With</p>
                      <p className="text-xs text-slate-300">{rec.combineWith}</p>
                    </div>
                  )}

                  {rec.note && (
                    <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                      <p className="text-xs text-amber-400 uppercase tracking-wider mb-2">⚠ Note for Severe Lines</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{rec.note}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="px-5 pb-4">
        <p className="text-xs text-slate-600 text-center">
          For research purposes only. Not medical advice.
        </p>
      </div>
    </div>
  );
}
