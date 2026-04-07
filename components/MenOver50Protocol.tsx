'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

type Concern = 'energy' | 'muscle' | 'fat' | 'cognitive' | 'joint' | 'sexual' | 'all';
type TLevel = 'low' | 'normal' | 'high-normal' | 'trt';
type Activity = 'sedentary' | 'light' | 'regular' | 'athlete';

interface ProtocolResult {
  peptides: { name: string; dose: string; reason: string }[];
  reasoning: string;
  timeline: string;
  bloodwork: string[];
}

function buildProtocol(concern: Concern, tLevel: TLevel, activity: Activity): ProtocolResult {
  const base = {
    'CJC-1295 / Ipamorelin': { dose: '100–200mcg CJC + 200–300mcg Ipa before bed, 5 nights/week', reason: 'GH restoration — the foundational anti-aging peptide for men over 50. Addresses GH deficiency that drives muscle loss, fat gain, poor sleep, and slow recovery.' },
    'BPC-157': { dose: '500mcg/day SC injection or oral capsule', reason: 'Joint and tissue protection — critical for men with accumulated injuries and accelerating joint degradation.' },
    'Epithalon': { dose: '10mg SC over 10-day cycle, 2× per year', reason: 'Telomere lengthening and circadian rhythm reset — addresses root causes of biological aging at cellular level.' },
    'GHK-Cu': { dose: '1–2mg/day SC injection', reason: 'Gene expression reset — upregulates 30+ repair genes, supports collagen, skin, hair, and anti-inflammatory pathways.' },
    'NAD+': { dose: '500mg oral daily or 250mg IV equivalent', reason: 'Mitochondrial restoration — NAD+ decline is a primary driver of cognitive decline and energy loss in men over 50.' },
    'MOTS-c': { dose: '10mg SC 3× per week', reason: 'AMPK activation — improves insulin sensitivity and metabolic function that declines with age and sedentary lifestyle.' },
    'IGF-1 LR3': { dose: '20–30mcg post-workout, 4-week cycles', reason: 'Direct anabolic signaling — bypasses GH axis for immediate muscle fiber growth. Ideal for men on TRT wanting accelerated muscle.' },
  };

  const bloodworkMap: Record<Concern, string[]> = {
    energy: ['Total testosterone + free testosterone', 'IGF-1', 'Cortisol (AM)', 'Thyroid panel (TSH, Free T3, Free T4)', 'CRP (inflammation)', 'Ferritin (iron stores)', 'Vitamin D'],
    muscle: ['Total testosterone + free testosterone', 'IGF-1', 'SHBG', 'LH / FSH', 'CBC (complete blood count)', 'CMP (comprehensive metabolic panel)'],
    fat: ['Total testosterone', 'Estradiol', 'Insulin + fasting glucose', 'HbA1c', 'Lipid panel', 'Cortisol (AM)', 'IGF-1'],
    cognitive: ['Homocysteine', 'NAD+ (if available)', 'Vitamin D', 'B12', 'Thyroid panel', 'CRP', 'Testosterone'],
    joint: ['CRP (high-sensitivity)', 'ESR', 'Uric acid', 'Vitamin D', 'CBC', 'CMP'],
    sexual: ['Total testosterone + free testosterone', 'Estradiol', 'SHBG', 'LH / FSH', 'Prolactin', 'PSA (prostate)', 'DHT'],
    all: ['Total + free testosterone', 'Estradiol', 'SHBG', 'LH/FSH', 'IGF-1', 'Cortisol', 'CRP', 'Homocysteine', 'Vitamin D', 'Ferritin', 'Thyroid panel (TSH, FT3, FT4)', 'CBC', 'CMP', 'PSA'],
  };

  const peptideSelections: Record<Concern, string[]> = {
    energy: ['CJC-1295 / Ipamorelin', 'Epithalon', 'NAD+'],
    muscle: tLevel === 'trt' ? ['CJC-1295 / Ipamorelin', 'IGF-1 LR3', 'BPC-157'] : ['CJC-1295 / Ipamorelin', 'BPC-157', 'IGF-1 LR3'],
    fat: ['CJC-1295 / Ipamorelin', 'MOTS-c', 'BPC-157'],
    cognitive: ['NAD+', 'Epithalon', 'GHK-Cu'],
    joint: ['BPC-157', 'GHK-Cu', 'CJC-1295 / Ipamorelin'],
    sexual: tLevel === 'low' ? ['CJC-1295 / Ipamorelin', 'BPC-157', 'Epithalon'] : ['CJC-1295 / Ipamorelin', 'Epithalon', 'GHK-Cu'],
    all: ['CJC-1295 / Ipamorelin', 'BPC-157', 'Epithalon'],
  };

  const reasoningMap: Record<Concern, string> = {
    energy: 'Energy decline in men over 50 is primarily driven by GH deficiency and declining NAD+. The GH secretagogue restores the anabolic/metabolic signaling; Epithalon resets circadian rhythm (disrupted sleep is a major energy drain); NAD+ restores cellular ATP production.',
    muscle: tLevel === 'trt'
      ? 'On TRT, your testosterone foundation is covered. The priority is GH restoration (CJC/Ipa), which TRT does not address, plus IGF-1 LR3 for accelerated muscle hypertrophy. BPC-157 protects joints under the increased training loads TRT enables.'
      : 'For muscle preservation, GH restoration is the cornerstone — GH is the anabolic master hormone that testosterone depends on for full effect. IGF-1 LR3 provides direct muscle-building stimulus. BPC-157 ensures joints can handle the required training load.',
    fat: 'Visceral fat accumulation after 50 is driven by declining GH AND declining testosterone. GH restoration via CJC/Ipa directly promotes lipolysis. MOTS-c (AMPK activation) improves the insulin sensitivity that visceral fat impairs. BPC-157 supports gut and metabolic health.',
    cognitive: 'Cognitive decline in men is primarily driven by mitochondrial dysfunction (NAD+ loss), neuroinflammation, and vascular health. NAD+ restores mitochondrial energy in neurons; Epithalon improves sleep architecture (critical for cognitive consolidation); GHK-Cu reduces systemic neuroinflammation.',
    joint: 'BPC-157 is the most powerful joint healing peptide available — it heals tendons, ligaments, and cartilage at a cellular level. GHK-Cu reduces the chronic systemic inflammation that worsens joint degradation. CJC/Ipa restores the GH that supports collagen synthesis.',
    sexual: tLevel === 'low'
      ? 'Low testosterone often underlies sexual health decline in men over 50. Peptides alone cannot fully compensate — TRT should be considered. However, GH restoration supports the hormonal environment that testosterone requires, and Epithalon resets the circadian hormonal rhythm.'
      : 'For normal or high-normal testosterone, sexual health maintenance focuses on circadian hormone optimization (Epithalon), GH restoration (CJC/Ipa which supports the anabolic/libido environment), and cellular anti-aging (GHK-Cu).',
    all: 'The comprehensive starter protocol for men over 50 addresses the three highest-impact pathways simultaneously: GH restoration (CJC/Ipa), tissue healing and joint protection (BPC-157), and cellular longevity (Epithalon). Add NAD+ and GHK-Cu in subsequent cycles.',
  };

  const timelineMap: Record<Activity, string> = {
    sedentary: 'Expect sleep improvement in 1–2 weeks. Energy at weeks 3–4. Body composition changes slow without training — aim to add 2–3 walks/week minimum to activate the GH-driven metabolic response.',
    light: 'Sleep improvement: weeks 1–2. Energy and recovery: weeks 3–4. Body composition changes: months 2–3. Light activity is sufficient to activate GH lipolysis.',
    regular: 'Sleep improvement: week 1. Recovery acceleration: week 2–3. Visible body composition changes: weeks 6–8. Full peak results at 12 weeks. Training amplifies every peptide effect significantly.',
    athlete: 'Fast responders — sleep changes often in days. Recovery improvement week 1–2. Performance gains weeks 3–4. Body composition peak at 8–10 weeks. Stacking with IGF-1 LR3 strongly recommended for competitive athletes.',
  };

  const selectedPeptides = peptideSelections[concern];

  return {
    peptides: selectedPeptides.map((name) => ({
      name,
      dose: base[name as keyof typeof base].dose,
      reason: base[name as keyof typeof base].reason,
    })),
    reasoning: reasoningMap[concern],
    timeline: timelineMap[activity],
    bloodwork: bloodworkMap[concern],
  };
}

const concernOptions: { value: Concern; label: string; emoji: string }[] = [
  { value: 'energy', label: 'Energy & Vitality', emoji: '⚡' },
  { value: 'muscle', label: 'Muscle Loss & Strength', emoji: '💪' },
  { value: 'fat', label: 'Fat Gain', emoji: '🔥' },
  { value: 'cognitive', label: 'Cognitive Decline', emoji: '🧠' },
  { value: 'joint', label: 'Joint Pain & Injury', emoji: '🦴' },
  { value: 'sexual', label: 'Sexual Health', emoji: '❤️' },
  { value: 'all', label: 'All of the Above', emoji: '🎯' },
];

export default function MenOver50Protocol() {
  const [concern, setConcern] = useState<Concern | null>(null);
  const [tLevel, setTLevel] = useState<TLevel | null>(null);
  const [activity, setActivity] = useState<Activity | null>(null);
  const [result, setResult] = useState<ProtocolResult | null>(null);

  const canGenerate = concern && tLevel && activity;

  const handleGenerate = () => {
    if (!concern || !tLevel || !activity) return;
    setResult(buildProtocol(concern, tLevel, activity));
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-white font-black text-xl mb-1">Men Over 50 Protocol Builder</h3>
        <p className="text-slate-400 text-sm">Answer 3 questions to get a personalized 3-peptide starter protocol with bloodwork recommendations.</p>
      </div>

      <div className="space-y-6">
        {/* Concern */}
        <div>
          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Top Concern</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {concernOptions.map((o) => (
              <button
                key={o.value}
                onClick={() => setConcern(o.value)}
                className={`p-3 rounded-xl border text-left transition-all ${concern === o.value ? 'border-blue-500/50 bg-blue-500/8' : 'border-white/8 hover:border-white/20'}`}
              >
                <div className="text-lg mb-1">{o.emoji}</div>
                <div className={`text-xs font-semibold leading-tight ${concern === o.value ? 'text-white' : 'text-slate-400'}`}>{o.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* T Level */}
        <div>
          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Current Testosterone Level</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {([['low', 'Low (<400 ng/dL)'], ['normal', 'Normal (400–700 ng/dL)'], ['high-normal', 'High-Normal (700+ ng/dL)'], ['trt', 'On TRT']] as [TLevel, string][]).map(([v, l]) => (
              <button
                key={v}
                onClick={() => setTLevel(v)}
                className={`p-3 rounded-xl border text-center transition-all ${tLevel === v ? 'border-blue-500/50 bg-blue-500/8' : 'border-white/8 hover:border-white/20'}`}
              >
                <div className={`text-xs font-semibold ${tLevel === v ? 'text-white' : 'text-slate-400'}`}>{l}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div>
          <label className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Activity Level</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {([['sedentary', 'Sedentary', 'Desk job, minimal exercise'], ['light', 'Light Activity', 'Walks, occasional gym'], ['regular', 'Regular Training', '3–4× per week lifting/cardio'], ['athlete', 'Competitive Athlete', 'High-volume training']] as [Activity, string, string][]).map(([v, l, s]) => (
              <button
                key={v}
                onClick={() => setActivity(v)}
                className={`p-3 rounded-xl border text-left transition-all ${activity === v ? 'border-blue-500/50 bg-blue-500/8' : 'border-white/8 hover:border-white/20'}`}
              >
                <div className={`text-xs font-semibold ${activity === v ? 'text-white' : 'text-slate-400'}`}>{l}</div>
                <div className="text-slate-600 text-xs mt-0.5">{s}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={!canGenerate}
        className="btn-cta w-full py-3 text-sm font-bold mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Build My Protocol
      </button>

      {result && (
        <div className="mt-6 space-y-4 border-t border-white/8 pt-6">
          <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-wide mb-3">Your 3-Peptide Starter Protocol</div>
            <div className="space-y-4">
              {result.peptides.map((p, i) => (
                <div key={p.name} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 text-xs font-black mt-0.5">{i + 1}</div>
                  <div>
                    <div className="text-white font-bold text-sm">{p.name}</div>
                    <div className="text-blue-300 text-xs font-mono mt-0.5">{p.dose}</div>
                    <div className="text-slate-400 text-xs mt-1">{p.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Why This Protocol</div>
            <p className="text-slate-300 text-sm leading-relaxed">{result.reasoning}</p>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-1">Timeline Expectation</div>
            <p className="text-slate-300 text-sm">{result.timeline}</p>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-2">Recommended Bloodwork</div>
            <p className="text-slate-400 text-xs mb-2">Get baseline levels before starting. Retest at 12 weeks.</p>
            <div className="flex flex-wrap gap-1.5">
              {result.bloodwork.map((b) => (
                <span key={b} className="text-xs px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">{b}</span>
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-xs text-center">For informational purposes only. Consult a physician before starting any peptide protocol, especially if on TRT or other medications.</p>
        </div>
      )}
    </div>
  );
}
