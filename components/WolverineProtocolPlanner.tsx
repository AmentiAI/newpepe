'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

type InjuryType =
  | 'Tendon'
  | 'Ligament'
  | 'Muscle Tear'
  | 'Joint'
  | 'Post-Surgery'
  | 'Spine/Disc'
  | 'Multiple/Full Body';

type Severity = 'Mild' | 'Moderate' | 'Severe';

interface Protocol {
  bpc157Dose: string;
  tb500Dose: string;
  cycleLength: string;
  schedule: string;
  timeline: string;
  notes: string[];
}

const PROTOCOLS: Record<InjuryType, Record<Severity, Protocol>> = {
  'Tendon': {
    Mild: {
      bpc157Dose: '250 mcg SC once daily near tendon',
      tb500Dose: '2 mg SC twice per week',
      cycleLength: '6 weeks',
      schedule: 'BPC-157 every morning; TB-500 Monday + Thursday',
      timeline: '3–5 weeks to functional recovery',
      notes: [
        'Inject BPC-157 subcutaneously within 2–3 cm of the tendon insertion point',
        'Mild tendinopathy responds fastest — most users report 70%+ pain reduction by week 3',
        'Add 10 min daily eccentric loading exercises to accelerate tendon remodeling',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC once daily near tendon',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '8 weeks',
      schedule: 'BPC-157 morning; TB-500 Monday + Thursday; reassess at week 4',
      timeline: '5–8 weeks to return to sport',
      notes: [
        'Use loading protocol (500 mcg 2× daily) for first 7 days in moderate injuries',
        'Moderate tendon tears benefit greatly from local injection near the site of maximal tenderness',
        'Avoid high-load eccentric exercises until week 3 when pain reduces',
        'Consider adding collagen peptides (15g daily) to provide structural building blocks',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily (morning + evening)',
      tb500Dose: '5 mg SC twice in week 1, then 2.5 mg 2× weekly',
      cycleLength: '10–12 weeks',
      schedule: 'BPC-157 morning + evening; TB-500 large loading in week 1, then M+Th',
      timeline: '8–12 weeks — comparable to 4–6 month natural timeline',
      notes: [
        'Severe tendon tears (>50% disruption) require the full loading + maintenance protocol',
        'TB-500 loading dose in week 1 mobilizes maximum stem cell response to the injury site',
        'Imaging (ultrasound) at week 6 can confirm structural healing progress',
        'Do not return to full loading until pain-free range of motion is restored',
        'A second 6-week cycle may be warranted for complete tears — rest 2 weeks between cycles',
      ],
    },
  },
  'Ligament': {
    Mild: {
      bpc157Dose: '250 mcg SC once daily near joint',
      tb500Dose: '2 mg SC twice per week',
      cycleLength: '6 weeks',
      schedule: 'BPC-157 morning injection near joint capsule; TB-500 twice weekly',
      timeline: '3–5 weeks to full function',
      notes: [
        'Grade I sprains respond extremely well — BPC-157 typically resolves symptoms fully',
        'Proprioceptive training alongside peptide use prevents re-injury',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC once daily near joint',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '8 weeks',
      schedule: 'BPC-157 near joint daily; TB-500 Monday + Thursday; add KPV 500 mcg orally for inflammation control',
      timeline: '5–8 weeks (Grade II ligament)',
      notes: [
        'Grade II MCL/LCL tears: inject BPC-157 directly lateral or medial to the joint line',
        'Proprioception and balance work from week 2 onward accelerates neuromuscular recovery',
        'KPV oral (500 mcg 2× daily) can be added for systemic inflammation reduction',
        'ACL partial tears may require up to 10 weeks for full sport return',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily',
      tb500Dose: '5 mg SC loading in week 1, then 2.5 mg twice weekly',
      cycleLength: '12 weeks',
      schedule: 'BPC-157 morning + evening; TB-500 loading week 1 then M+Th maintenance',
      timeline: '10–14 weeks for Grade III — may not fully replace surgical reconstruction for complete ACL',
      notes: [
        'Complete Grade III ruptures: peptides strongly support healing but cannot replace surgical consultation',
        'Post-surgical use highly recommended — start 3 days pre-op, resume 48 hrs post-op',
        'TB-500 systemic stem cell mobilization is critical for ligament remodeling at this severity',
        'Physical therapy from week 4 mandatory to prevent scar tissue stiffness',
      ],
    },
  },
  'Muscle Tear': {
    Mild: {
      bpc157Dose: '250 mcg SC near tear, once daily',
      tb500Dose: '2 mg SC twice per week',
      cycleLength: '4 weeks',
      schedule: 'BPC-157 injection near muscle belly daily; TB-500 twice weekly',
      timeline: '2–3 weeks to full training',
      notes: [
        'Muscle strains (Grade I) heal fastest with peptides — often back to training in 10–14 days',
        'Active recovery (light movement, stretching) from day 2 accelerates satellite cell activation',
        'BPC-157 upregulates myogenin — the key transcription factor for muscle fiber regeneration',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC near tear, once daily',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '6 weeks',
      schedule: 'BPC-157 near tear daily; TB-500 Monday + Thursday; protein intake minimum 2g/kg/day',
      timeline: '3–5 weeks for Grade II partial tear',
      notes: [
        'Grade II tears: inject BPC-157 at the most tender region of the muscle belly',
        'Increase protein to minimum 2g/kg/day — peptides accelerate synthesis but require amino acid substrate',
        'BPC-157 + satellite cell activation means faster fiber rebuilding than any other known approach',
        'Avoid heavy eccentric loading until week 3 when structural integrity is restored',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily near tear',
      tb500Dose: '5 mg SC loading week 1, then 2.5 mg 2× weekly',
      cycleLength: '8–10 weeks',
      schedule: 'BPC-157 morning + evening; TB-500 heavy load week 1, maintenance from week 2',
      timeline: '6–10 weeks for complete Grade III tear',
      notes: [
        'Complete muscle ruptures may require surgical consultation before starting peptide protocol',
        'TB-500 is particularly powerful here — it directly activates satellite cells and myoblast migration',
        'Early active mobility (not strength) prevents excessive fibrotic scar tissue formation',
        'Ultrasound imaging at week 4 recommended to confirm architectural healing before return to sport',
        'Add creatine (5g daily) to support satellite cell expansion alongside peptide use',
      ],
    },
  },
  'Joint': {
    Mild: {
      bpc157Dose: '250 mcg SC near joint, once daily',
      tb500Dose: '2 mg SC twice per week',
      cycleLength: '6 weeks',
      schedule: 'BPC-157 periarticular injection daily; TB-500 twice weekly; can run continuously',
      timeline: '3–5 weeks for early osteoarthritis / mild joint inflammation',
      notes: [
        'BPC-157 shows strong activity on cartilage — upregulates BMP-2 and VEGF in chondrocytes',
        'TB-500 flexibility improvement is often the first noticed effect in joint conditions',
        'Low-impact movement (cycling, swimming) from day 1 improves synovial fluid distribution',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC near joint, once daily',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '8 weeks',
      schedule: 'BPC-157 periarticular daily; TB-500 M+Th; consider adding BPC-157 oral 500 mcg for systemic support',
      timeline: '5–8 weeks for moderate OA / cartilage loss',
      notes: [
        'BPC-157 should be injected as close to the joint capsule as safely possible without entering joint space',
        'Dual route (SC + oral) BPC-157 may provide superior benefit for chronic joint conditions',
        'TB-500 is uniquely beneficial here — its anti-inflammatory + stem cell effects work synergistically on cartilage',
        'Glucosamine and collagen supplementation provide substrate for cartilage rebuilding alongside peptides',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily periarticular',
      tb500Dose: '5 mg SC loading week 1, then 2.5 mg 2× weekly',
      cycleLength: '12 weeks + ongoing maintenance',
      schedule: 'Full loading protocol; may require indefinite maintenance 1× weekly TB-500 + daily BPC-157',
      timeline: '8–12 weeks for measurable improvement; ongoing protocol for advanced OA',
      notes: [
        'Advanced osteoarthritis cannot be fully reversed — peptides manage progression and improve function',
        'Long-term maintenance protocol (BPC-157 daily + TB-500 weekly) is the most effective approach',
        'SS-31 addition (1–2 mg 2–3× weekly) targets mitochondrial dysfunction in chondrocytes',
        'Viscosupplementation (hyaluronic acid injections) can be combined with peptide use',
        'Avoid cortisone injections — they accelerate cartilage degradation and blunt BPC-157 response',
      ],
    },
  },
  'Post-Surgery': {
    Mild: {
      bpc157Dose: '500 mcg SC once daily starting 48hrs post-op',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '6 weeks post-op',
      schedule: 'Begin BPC-157 48hrs post-surgery; TB-500 twice weekly from post-op day 3',
      timeline: '30–40% faster than standard surgical recovery protocols',
      notes: [
        'Minor procedures (arthroscopy, debridement): full loading protocol from 48hrs post-op',
        'Pre-surgical dosing (500 mcg BPC-157 2× daily for 3 days pre-op) shown to reduce surgical trauma',
        'BPC-157 dramatically reduces post-surgical adhesion formation',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC twice daily',
      tb500Dose: '5 mg SC twice in week 1, then 2.5 mg twice weekly',
      cycleLength: '8 weeks post-op',
      schedule: 'Pre-surgical 3-day loading; resume 48hrs post-op; full protocol for 8 weeks',
      timeline: '40–50% faster recovery vs. standard protocols',
      notes: [
        'Major joint surgeries (ACL, rotator cuff repair): start pre-surgical loading protocol',
        'BPC-157 reduces scarring, adhesions, and improves tissue quality at repair site',
        'TB-500 stem cell mobilization is critical in the first 72 hours of post-op window',
        'Coordinate with your surgeon — peptides do not interfere with sutures or implants',
        'Vitamin C (2g daily) is a key cofactor for collagen synthesis accelerated by BPC-157',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily',
      tb500Dose: '5 mg SC twice in week 1, then 2.5 mg 2× weekly for 10 weeks',
      cycleLength: '12 weeks comprehensive',
      schedule: 'Pre-surgical loading × 3 days; immediate resume 48hrs post-op; 12-week full protocol',
      timeline: 'Significant reduction from typical 6–12 month timelines for major surgeries',
      notes: [
        'Major reconstructions (ACL, spinal fusion, hip replacement): maximum protocol indicated',
        'BPC-157 twice daily for first 4 weeks is the most important window — do not reduce early',
        'TB-500 continues mobilizing repair cells for 10–12 weeks post-op',
        'Physical therapy + peptides is superior to either alone — do not skip rehab',
        'Surgical team should be informed about peptide use — there are no known interactions with anesthesia or standard surgical medications',
        'Second loading cycle at week 10–12 may be warranted for complex reconstructions',
      ],
    },
  },
  'Spine/Disc': {
    Mild: {
      bpc157Dose: '250–500 mcg SC once daily (paraspinal or abdomen)',
      tb500Dose: '2 mg SC twice per week',
      cycleLength: '8 weeks',
      schedule: 'BPC-157 paraspinal injection daily (or abdominal if paraspinal uncomfortable); TB-500 twice weekly',
      timeline: '4–6 weeks for disc bulge / mild compression',
      notes: [
        'BPC-157 cannot undo structural disc herniation but dramatically reduces neuroinflammation and disc-related pain',
        'Paraspinal injection sites (1–2 cm lateral to spinous processes) maximize local delivery',
        'BPC-157 shows strong nerve healing activity — reduces radiculopathy symptoms',
        'Combine with McKenzie protocol exercises for optimal disc centralization',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC once daily (paraspinal)',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '10 weeks',
      schedule: 'BPC-157 paraspinal daily; TB-500 M+Th; neurological symptoms often improve first',
      timeline: '6–10 weeks for moderate disc herniation with radiculopathy',
      notes: [
        'Herniated discs with nerve compression: TB-500 BBB penetration means it simultaneously addresses the neural component',
        'BPC-157\'s VEGF upregulation improves blood supply to the avascular disc — a key bottleneck in natural healing',
        'Avoid surgical consultation deferral — peptides are adjunctive, not a replacement for imaging-confirmed severe compression',
        'Anti-gravity exercise (pool walking, inversion therapy) takes load off disc while peptides work',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily (paraspinal)',
      tb500Dose: '5 mg SC loading week 1, then 2.5 mg 2× weekly',
      cycleLength: '12 weeks minimum',
      schedule: 'Maximum protocol; paraspinal BPC-157 twice daily; TB-500 loading then maintenance',
      timeline: '8–14 weeks for symptom management; structural disc repair is partial at best',
      notes: [
        'Severe disc herniation with motor deficits: surgical consultation is mandatory — peptides are adjunctive',
        'Post-surgical use (laminectomy, discectomy, fusion): standard post-surgical protocol applies',
        'BPC-157 is neuroprotective — prevents secondary nerve damage even if primary compression remains',
        'TB-500 crosses the blood-brain barrier and is documented to repair spinal cord injury in animal models',
        'Maintain paraspinal injection sites at L4/L5, L5/S1 levels or at the area of maximum tenderness',
        'Expect pain reduction before structural improvement — functional gains lead structural gains by weeks',
      ],
    },
  },
  'Multiple/Full Body': {
    Mild: {
      bpc157Dose: '500 mcg SC once daily (abdomen — systemic delivery)',
      tb500Dose: '2.5 mg SC twice per week',
      cycleLength: '6 weeks',
      schedule: 'BPC-157 abdominal injection for systemic effect; TB-500 twice weekly; BPC-157 oral 500 mcg additional for systemic boost',
      timeline: '4–6 weeks for multi-site mild issues',
      notes: [
        'For multiple injury sites: abdominal SC injection delivers BPC-157 systemically to all sites simultaneously',
        'BPC-157 is shown to exert effects even when injected far from the injury site (distal injection studies)',
        'Prioritize the most functionally limiting injury for local injection; use abdominal route for others',
      ],
    },
    Moderate: {
      bpc157Dose: '500 mcg SC once daily (rotate injection sites)',
      tb500Dose: '2.5 mg SC twice per week + additional 2.5 mg if needed',
      cycleLength: '8–10 weeks',
      schedule: 'Rotate BPC-157 between injury sites daily; TB-500 systemic twice weekly covers all; consider oral BPC-157 additionally',
      timeline: '6–10 weeks for comprehensive multi-site repair',
      notes: [
        'Rotation strategy: alternate local injection sites daily to maximize direct tissue exposure',
        'TB-500\'s systemic stem cell mobilization is the MVP for multi-site injury — one dose works everywhere',
        'Oral BPC-157 (500 mcg morning) plus injectable (500 mcg at main injury) doubles coverage',
        'Identify the most severe/functionally important injury and concentrate loading protocol there',
        'Rest and sleep quality are amplified in importance when healing multiple sites simultaneously',
      ],
    },
    Severe: {
      bpc157Dose: '500 mcg SC twice daily (rotate sites) + 500 mcg oral daily',
      tb500Dose: '5 mg SC loading week 1, then 2.5 mg twice weekly for 10 weeks',
      cycleLength: '12 weeks comprehensive',
      schedule: 'Maximum multi-route protocol; injectable + oral BPC-157; TB-500 heavy loading; reassess at week 6',
      timeline: '10–14 weeks for comprehensive full-body severe injury repair',
      notes: [
        'Full body severe protocol: maximum doses through multiple routes simultaneously',
        'Injectable + oral BPC-157 combination delivers local + systemic effects across all sites',
        'TB-500 5mg loading in week 1 is critical — mobilizes maximum bone marrow stem cell release',
        'Nutritional support is essential: minimum 2g/kg protein, 2g vitamin C, zinc 30mg, magnesium 400mg daily',
        'Sleep 8–9 hrs minimum — GH pulsatility during deep sleep is the primary anabolic driver alongside peptides',
        'A mid-cycle reassessment at week 6 allows dose adjustment based on which sites have responded',
        'Do not attempt to train through severe injuries even with peptides — the stack accelerates healing, not pain tolerance',
      ],
    },
  },
};

export default function WolverineProtocolPlanner() {
  const [injuryType, setInjuryType] = useState<InjuryType | ''>('');
  const [severity, setSeverity] = useState<Severity | ''>('');
  const [showResult, setShowResult] = useState(false);

  const protocol =
    injuryType && severity
      ? PROTOCOLS[injuryType as InjuryType][severity as Severity]
      : null;

  const handleGenerate = () => {
    if (injuryType && severity) setShowResult(true);
  };

  const handleReset = () => {
    setInjuryType('');
    setSeverity('');
    setShowResult(false);
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}>
          <span style={{ color: '#00ff88' }} className="text-lg font-black">W</span>
        </div>
        <div>
          <h3 className="text-white font-black text-lg">Wolverine Protocol Planner</h3>
          <p className="text-slate-400 text-xs">Select your injury type and severity to generate a custom protocol</p>
        </div>
      </div>

      {!showResult ? (
        <div className="space-y-6">
          {/* Injury Type */}
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-3">Step 1: Injury Type</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {(['Tendon', 'Ligament', 'Muscle Tear', 'Joint', 'Post-Surgery', 'Spine/Disc', 'Multiple/Full Body'] as InjuryType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setInjuryType(type)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all text-left"
                  style={{
                    background: injuryType === type ? 'rgba(0,255,136,0.15)' : 'rgba(255,255,255,0.04)',
                    border: injuryType === type ? '1px solid rgba(0,255,136,0.5)' : '1px solid rgba(255,255,255,0.08)',
                    color: injuryType === type ? '#00ff88' : '#94a3b8',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Severity */}
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-3">Step 2: Injury Severity</label>
            <div className="grid grid-cols-3 gap-3">
              {(['Mild', 'Moderate', 'Severe'] as Severity[]).map((sev) => {
                const colors = {
                  Mild: { active: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.5)', text: '#34d399', sub: 'Minor pain, can function' },
                  Moderate: { active: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.5)', text: '#fbbf24', sub: 'Significant limitation' },
                  Severe: { active: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.5)', text: '#f87171', sub: 'Cannot train / structural' },
                };
                const c = colors[sev];
                const isActive = severity === sev;
                return (
                  <button
                    key={sev}
                    onClick={() => setSeverity(sev)}
                    className="p-3 rounded-lg text-left transition-all"
                    style={{
                      background: isActive ? c.active : 'rgba(255,255,255,0.04)',
                      border: isActive ? `1px solid ${c.border}` : '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="font-bold text-sm" style={{ color: isActive ? c.text : '#94a3b8' }}>{sev}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{c.sub}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!injuryType || !severity}
            className="w-full py-3 px-6 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all"
            style={{
              background: injuryType && severity ? '#00ff88' : 'rgba(255,255,255,0.06)',
              color: injuryType && severity ? '#060610' : '#475569',
              cursor: injuryType && severity ? 'pointer' : 'not-allowed',
            }}
          >
            Generate My Protocol <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : protocol ? (
        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>CUSTOM WOLVERINE PROTOCOL</div>
              <h4 className="text-white font-black text-lg">{injuryType} — {severity}</h4>
            </div>
            <button onClick={handleReset} className="text-slate-400 text-sm hover:text-white transition-colors px-3 py-1 rounded border border-slate-700 hover:border-slate-500">
              Start Over
            </button>
          </div>

          {/* Doses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="text-emerald-400 text-xs font-bold tracking-widest mb-1">BPC-157 DOSE</div>
              <div className="text-white font-bold text-sm">{protocol.bpc157Dose}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div className="text-blue-400 text-xs font-bold tracking-widest mb-1">TB-500 DOSE</div>
              <div className="text-white font-bold text-sm">{protocol.tb500Dose}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)' }}>
              <div className="text-purple-400 text-xs font-bold tracking-widest mb-1">CYCLE LENGTH</div>
              <div className="text-white font-bold text-sm">{protocol.cycleLength}</div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <div className="text-amber-400 text-xs font-bold tracking-widest mb-1">EXPECTED TIMELINE</div>
              <div className="text-white font-bold text-sm">{protocol.timeline}</div>
            </div>
          </div>

          {/* Schedule */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
            <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#00ff88' }}>INJECTION SCHEDULE</div>
            <p className="text-slate-300 text-sm leading-relaxed">{protocol.schedule}</p>
          </div>

          {/* Notes */}
          <div>
            <div className="text-slate-400 text-xs font-bold tracking-widest mb-3">PROTOCOL NOTES</div>
            <ul className="space-y-2">
              {protocol.notes.map((note, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-slate-600 text-xs border-t border-slate-800 pt-3">
            For research purposes only. Consult a healthcare provider before use. Individual results vary.
          </p>
        </div>
      ) : null}
    </div>
  );
}
