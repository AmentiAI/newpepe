'use client';

import { useState } from 'react';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';

const symptoms = [
  { id: 'racing', label: 'Racing / Intrusive Thoughts', mechanisms: ['GABA-A', 'HPA Axis'], gutBrain: false },
  { id: 'gut', label: 'Gut Issues (bloating, IBS, nausea)', mechanisms: ['Gut-Brain Axis', 'Serotonin System'], gutBrain: true },
  { id: 'sleep', label: 'Sleep Problems / Insomnia', mechanisms: ['HPA Axis', 'Dopamine'], gutBrain: false },
  { id: 'mood', label: 'Low Mood / Anhedonia', mechanisms: ['Dopamine System', 'Serotonin System'], gutBrain: true },
  { id: 'irritability', label: 'Irritability / Short Fuse', mechanisms: ['HPA Axis', 'Dopamine System'], gutBrain: false },
  { id: 'brainfog', label: 'Brain Fog / Poor Clarity', mechanisms: ['Gut-Brain Axis', 'Serotonin System'], gutBrain: true },
  { id: 'panic', label: 'Panic Attacks', mechanisms: ['GABA-A', 'HPA Axis', 'Vagus Nerve'], gutBrain: false },
  { id: 'social', label: 'Social Anxiety / Avoidance', mechanisms: ['GABA-A', 'Dopamine System'], gutBrain: false },
  { id: 'fatigue', label: 'Chronic Fatigue', mechanisms: ['HPA Axis', 'Serotonin System', 'Gut-Brain Axis'], gutBrain: true },
  { id: 'concentration', label: 'Poor Concentration / Focus', mechanisms: ['Dopamine System', 'Gut-Brain Axis'], gutBrain: true },
];

const allMechanisms = [
  { name: 'Gut-Brain Axis', color: 'text-emerald-400', desc: 'Repairs intestinal barrier — reduces gut-derived neuroinflammation and restores vagal tone. Most impactful mechanism for mood/anxiety.' },
  { name: 'Dopamine System', color: 'text-blue-400', desc: 'Modulates dopamine receptor sensitivity — addresses anhedonia, motivational deficit, and reward pathway dysregulation.' },
  { name: 'GABA-A', color: 'text-indigo-400', desc: 'GABA-A receptor modulation provides anxiolytic effect similar in mechanism to benzodiazepines, without dependency risk.' },
  { name: 'Vagus Nerve', color: 'text-purple-400', desc: 'Activates parasympathetic (rest/digest) tone — directly reduces sympathetic nervous system hyperactivity driving anxiety.' },
  { name: 'HPA Axis', color: 'text-amber-400', desc: 'Normalizes cortisol and stress response dysregulation — particularly effective for trauma-related and chronic-stress anxiety.' },
  { name: 'Serotonin System', color: 'text-pink-400', desc: 'Supports serotonin production environment via gut healing (90% of serotonin is produced in the gut).' },
];

export default function AnxietyProfileWidget() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [showResult, setShowResult] = useState(false);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setShowResult(false);
  };

  const selectedSymptoms = symptoms.filter((s) => checked.has(s.id));
  const gutBrainCount = selectedSymptoms.filter((s) => s.gutBrain).length;
  const totalCount = selectedSymptoms.length;

  const relevantMechanisms = new Set<string>();
  selectedSymptoms.forEach((s) => s.mechanisms.forEach((m) => relevantMechanisms.add(m)));

  const preferOral = gutBrainCount >= totalCount / 2;

  const getProtocol = () => {
    if (totalCount === 0) return null;
    if (totalCount >= 6) {
      return {
        route: 'Oral + Injectable Combination',
        dose: '250mcg oral AM + 250mcg SC PM',
        rationale: 'Severe / widespread symptom profile. Combination maximizes both gut-local and systemic CNS effects simultaneously.',
        timeline: '4–8 weeks for significant improvement',
      };
    }
    if (gutBrainCount >= 2) {
      return {
        route: 'Oral BPC-157 (primary)',
        dose: '250–500mcg/day oral, fasted',
        rationale: 'Multiple gut-brain symptoms — oral route directly treats the gut-brain axis source, maximizing impact on mood and anxiety via intestinal healing.',
        timeline: '2–6 weeks for first effects',
      };
    }
    return {
      route: 'Subcutaneous Injection',
      dose: '250–500mcg/day SC (abdomen)',
      rationale: 'Non-gut-predominant anxiety profile — subcutaneous injection provides faster systemic CNS modulation through GABA-A, HPA, and dopamine pathways.',
      timeline: '1–4 weeks for initial effects',
    };
  };

  const protocol = getProtocol();

  return (
    <div className="space-y-5">
      <p className="text-gray-600 text-sm">Select all symptoms you regularly experience to see which of BPC-157's mechanisms are most relevant to you:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {symptoms.map((s) => {
          const isChecked = checked.has(s.id);
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-150 ${
                isChecked
                  ? 'border-indigo-500/60 bg-indigo-500/15 text-gray-900'
                  : 'border-gray-200 bg-white/3 text-gray-600 hover:border-gray-200'
              }`}
            >
              {isChecked ? (
                <CheckSquare className="w-5 h-5 text-indigo-400 shrink-0" />
              ) : (
                <Square className="w-5 h-5 text-gray-500 shrink-0" />
              )}
              <div>
                <span className="text-sm font-medium block">{s.label}</span>
                {isChecked && (
                  <span className="text-xs text-indigo-400 mt-0.5 block">
                    {s.mechanisms.join(' + ')}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {checked.size > 0 && (
        <button
          onClick={() => setShowResult(true)}
          className="btn-cta px-6 py-3 text-sm flex items-center gap-2"
        >
          Analyze My Profile <ArrowRight className="w-4 h-4" />
        </button>
      )}

      {showResult && protocol && (
        <div className="space-y-4">
          {/* Mechanism relevance */}
          <div className="glass-card p-6 border border-indigo-500/30">
            <p className="text-xs font-bold tracking-widest text-indigo-400 mb-4">
              MOST RELEVANT BPC-157 MECHANISMS FOR YOUR PROFILE
            </p>
            <div className="space-y-3">
              {allMechanisms.map((m) => {
                const isRelevant = relevantMechanisms.has(m.name);
                return (
                  <div
                    key={m.name}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                      isRelevant ? 'bg-white/5 border border-gray-200' : 'opacity-30'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${isRelevant ? 'bg-current ' + m.color : 'bg-slate-700'}`} />
                    <div>
                      <span className={`text-sm font-bold ${isRelevant ? m.color : 'text-gray-500'}`}>
                        {m.name}
                        {isRelevant && <span className="text-xs font-normal text-gray-600 ml-2">— active in your profile</span>}
                      </span>
                      {isRelevant && <p className="text-gray-600 text-xs leading-relaxed mt-1">{m.desc}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Protocol recommendation */}
          <div className="glass-card p-6 border border-indigo-500/40 bg-indigo-500/5">
            <p className="text-xs font-bold tracking-widest text-indigo-400 mb-4">
              RECOMMENDED PROTOCOL — {totalCount} SYMPTOM{totalCount > 1 ? 'S' : ''} ANALYZED
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-600 text-xs mb-1">Recommended Route</p>
                <p className="text-indigo-400 font-bold text-sm">{protocol.route}</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">Dose</p>
                <p className="text-gray-900 font-mono text-sm">{protocol.dose}</p>
              </div>
              <div>
                <p className="text-gray-600 text-xs mb-1">Timeline</p>
                <p className="text-gray-900 text-sm">{protocol.timeline}</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600 text-xs font-semibold mb-1">WHY THIS PROTOCOL</p>
              <p className="text-gray-800 text-sm leading-relaxed">{protocol.rationale}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
