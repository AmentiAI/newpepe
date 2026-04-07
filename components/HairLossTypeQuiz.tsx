'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

const SOURCE_URL = '/out';

const questions = [
  {
    id: 'pattern',
    text: 'Where / how is your hair thinning?',
    options: [
      { label: 'Crown and temples thinning', value: 'crown_temples' },
      { label: 'Overall diffuse thinning everywhere', value: 'diffuse' },
      { label: 'Patchy bald spots', value: 'patchy' },
      { label: 'Hairline recession only', value: 'hairline' },
      { label: 'Generalized heavy shedding', value: 'shedding' },
    ],
  },
  {
    id: 'onset',
    text: 'What age did you first notice hair loss?',
    options: [
      { label: 'Teens or 20s', value: 'young' },
      { label: '30s', value: 'thirties' },
      { label: '40s or older', value: 'older' },
    ],
  },
  {
    id: 'family',
    text: 'Family history of hair loss?',
    options: [
      { label: "Yes — father's side", value: 'father' },
      { label: "Yes — mother's side", value: 'mother' },
      { label: 'Both sides', value: 'both' },
      { label: 'No family history', value: 'none' },
    ],
  },
  {
    id: 'symptoms',
    text: 'Any other symptoms alongside the hair loss?',
    options: [
      { label: 'Itchy or inflamed scalp', value: 'inflamed' },
      { label: 'Hormonal issues (thyroid, PCOS, etc.)', value: 'hormonal' },
      { label: 'Recent significant stress or illness', value: 'stress' },
      { label: 'None of the above', value: 'none' },
    ],
  },
  {
    id: 'treatments',
    text: 'Current hair loss treatments?',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Minoxidil', value: 'minoxidil' },
      { label: 'Finasteride / Dutasteride', value: 'finasteride' },
      { label: 'Both minoxidil + finasteride', value: 'both' },
      { label: 'Other', value: 'other' },
    ],
  },
];

type Answers = Record<string, string>;

interface Result {
  type: string;
  badge: string;
  confidence: string;
  description: string;
  protocol: string;
  combine: string;
  color: string;
}

function getResult(answers: Answers): Result {
  const { pattern, family, symptoms, onset, treatments } = answers;

  // Alopecia Areata
  if (pattern === 'patchy') {
    return {
      type: 'Alopecia Areata (AA)',
      badge: 'AA',
      confidence: 'High likelihood',
      description: 'Patchy, well-defined bald spots are the hallmark of alopecia areata — an autoimmune condition where the immune system attacks hair follicles. Follicles are not destroyed, just dormant, meaning full regrowth is possible.',
      protocol: 'GHK-Cu topical (2mg/mL) applied directly to patches twice daily. GHK-Cu\'s anti-inflammatory and immune-modulating actions are directly relevant to AA pathophysiology. Combine with scalp massage to increase blood flow to dormant follicles.',
      combine: 'Consider combining with low-level laser therapy (LLLT) for synergistic immune modulation. Minoxidil can also be layered over GHK-Cu applications. Discuss immunotherapy options (anthralin, topical immunotherapy) with a dermatologist for severe cases.',
      color: 'text-purple-400',
    };
  }

  // Telogen Effluvium
  if (pattern === 'shedding' || symptoms === 'stress' || symptoms === 'hormonal') {
    return {
      type: 'Telogen Effluvium (TE)',
      badge: 'TE',
      confidence: 'Moderate–high likelihood',
      description: 'Diffuse shedding triggered by a physiological stress event — illness, surgery, major stress, hormonal shift, nutritional deficiency. The hair follicle cycle gets disrupted, pushing many follicles into shedding phase simultaneously. Usually self-resolving but GHK-Cu accelerates recovery.',
      protocol: 'GHK-Cu topical (1–2mg/mL) daily across the entire scalp — not just one area. Focus on GHK-Cu\'s ability to push follicles back into the growth (anagen) phase. Consider 4–6 months of consistent use. Address the underlying trigger (stress, nutrition, hormones) simultaneously.',
      combine: 'Pair with biotin (5mg/day), zinc, and iron optimization. Minoxidil can accelerate anagen re-entry. If hormonal (thyroid, PCOS), address the root cause — GHK-Cu alone will not fully reverse TE if the hormonal driver is active.',
      color: 'text-blue-400',
    };
  }

  // Diffuse Unpatterned Alopecia (DUPA)
  if (pattern === 'diffuse' && (family === 'none' || family === 'mother') && onset === 'older') {
    return {
      type: 'Diffuse Unpatterned Alopecia (DUPA)',
      badge: 'DUPA',
      confidence: 'Moderate likelihood',
      description: 'DUPA is a poorly understood form of hair loss with diffuse thinning across the entire scalp — including the back and sides (unlike typical AGA which spares donor areas). It has partial androgenetic components but doesn\'t follow the standard Norwood pattern. It responds less predictably to standard AGA treatments.',
      protocol: 'GHK-Cu topical (2mg/mL) across the entire scalp twice daily. Emphasize GHK-Cu\'s follicle stem cell reactivation and gene-regulatory mechanisms. Consistent long-term use (6–12 months) is required to assess response. Take baseline photos and monthly measurements.',
      combine: 'Combine with low-dose minoxidil. Finasteride has limited efficacy in true DUPA but may help if there is a partial androgenetic component. Consider systemic GHK-Cu (0.5mg SC) for enhanced systemic anti-inflammatory coverage.',
      color: 'text-orange-400',
    };
  }

  // Default: Androgenetic Alopecia (AGA) — most common
  const treatmentNote = treatments === 'none'
    ? 'You are not currently on any treatment — adding GHK-Cu is a strong first or standalone step.'
    : treatments === 'minoxidil'
    ? 'You are already on minoxidil — adding GHK-Cu is highly synergistic and addresses mechanisms minoxidil does not.'
    : treatments === 'finasteride'
    ? 'You are already on finasteride — adding GHK-Cu provides local DHT pathway modulation at the follicle level that finasteride doesn\'t directly address.'
    : treatments === 'both'
    ? 'You are on the standard Big 3 protocol. Adding GHK-Cu makes this the most comprehensive non-surgical regimen available.'
    : 'You are on other treatments — GHK-Cu is complementary to most hair loss interventions.';

  return {
    type: 'Androgenetic Alopecia (AGA)',
    badge: 'AGA',
    confidence: 'High likelihood',
    description: 'Androgenetic alopecia (male or female pattern baldness) is the most common form of hair loss, driven by genetic follicle sensitivity to DHT. It follows predictable patterns (Norwood scale for men, Ludwig scale for women). GHK-Cu is particularly well-suited to AGA because it directly addresses follicle miniaturization and DHT pathway sensitivity at the follicle level.',
    protocol: `GHK-Cu topical (1–2mg/mL) applied to affected areas daily — crown, temples, and/or hairline depending on your pattern. Apply to a clean, dry scalp and massage for 60 seconds to aid absorption. ${treatmentNote}`,
    combine: 'The optimal AGA stack is GHK-Cu + minoxidil + finasteride (the "Big 3 + GHK-Cu"). Each works via different mechanisms: GHK-Cu handles follicle biology and local DHT modulation; minoxidil increases blood flow and prolongs anagen; finasteride reduces systemic DHT. Adding low-level laser therapy (LLLT) as a fourth element is the current gold standard non-surgical protocol.',
    color: 'text-amber-400',
  };
}

export default function HairLossTypeQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);

  const currentQ = questions[step];
  const totalSteps = questions.length;

  function handleAnswer(value: string) {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setResult(getResult(updated));
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <div className="glass-card p-6 sm:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-black text-xl">Hair Loss Type Assessment</h3>
          <p className="text-slate-400 text-sm mt-1">5 quick questions — get your hair loss type + GHK-Cu protocol</p>
        </div>
        {(step > 0 || result) && (
          <button onClick={reset} className="text-slate-500 hover:text-slate-300 flex items-center gap-1 text-xs transition-colors">
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {!result ? (
        <>
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Question {step + 1} of {totalSteps}</span>
              <span>{Math.round(((step) / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <p className="text-white font-semibold text-lg mb-5">{currentQ.text}</p>
          <div className="space-y-2.5">
            {currentQ.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className="w-full text-left px-5 py-3.5 rounded-xl border border-white/10 bg-white/3 hover:bg-amber-400/10 hover:border-amber-400/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-5">
          {/* Result header */}
          <div className="flex items-start gap-4">
            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl px-4 py-3 text-center shrink-0">
              <div className="text-amber-400 text-xs font-bold tracking-widest">{result.badge}</div>
            </div>
            <div>
              <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">{result.confidence}</div>
              <h4 className={`font-black text-xl ${result.color}`}>{result.type}</h4>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed">{result.description}</p>

          {/* Protocol */}
          <div className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4">
            <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Recommended GHK-Cu Protocol</div>
            <p className="text-slate-300 text-sm leading-relaxed">{result.protocol}</p>
          </div>

          {/* Combine */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
            <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">What to Combine With</div>
            <p className="text-slate-300 text-sm leading-relaxed">{result.combine}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta px-6 py-3 text-sm flex items-center gap-2"
            >
              Get GHK-Cu for {result.badge} <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={reset} className="btn-secondary px-6 py-3 text-sm flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
