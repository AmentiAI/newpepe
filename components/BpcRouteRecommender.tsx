'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const questions = [
  {
    id: 'goal',
    text: 'What is your primary goal with BPC-157?',
    options: [
      { label: 'Gut healing (IBS, IBD, leaky gut, GERD)', value: 'gut' },
      { label: 'Tendon or ligament repair', value: 'tendon' },
      { label: 'Joint pain or arthritis', value: 'joint' },
      { label: 'Anxiety or mood (gut-brain axis)', value: 'anxiety' },
      { label: 'General wellness and recovery', value: 'wellness' },
      { label: 'Post-surgery or injury recovery', value: 'surgery' },
    ],
  },
  {
    id: 'needles',
    text: 'How comfortable are you with self-injection?',
    options: [
      { label: 'Very comfortable — I inject regularly', value: 'comfortable' },
      { label: 'I can learn — willing to try', value: 'willing' },
      { label: 'Prefer to avoid needles entirely', value: 'avoid' },
    ],
  },
  {
    id: 'budget',
    text: 'How does cost factor into your decision?',
    options: [
      { label: 'Price is a significant consideration', value: 'sensitive' },
      { label: 'Cost is not a major factor', value: 'flexible' },
    ],
  },
  {
    id: 'timeline',
    text: 'What is more important to you?',
    options: [
      { label: 'Fastest possible results', value: 'speed' },
      { label: 'Convenience and long-term compliance', value: 'convenience' },
    ],
  },
];

type Answers = Record<string, string>;

interface RouteResult {
  route: string;
  badge: string;
  tagline: string;
  explanation: string;
  protocol: string;
  dose: string;
  frequency: string;
  color: string;
  borderColor: string;
}

function getRecommendation(answers: Answers): RouteResult {
  const { goal, needles, budget, timeline } = answers;

  const gutGoal = goal === 'gut' || goal === 'anxiety';
  const systemicGoal = goal === 'tendon' || goal === 'joint' || goal === 'surgery';
  const avoidNeedles = needles === 'avoid';
  const wantSpeed = timeline === 'speed';

  // Both routes — post-surgery or budget-flexible speed-seekers
  if (goal === 'surgery' && needles !== 'avoid') {
    return {
      route: 'Both Routes Combined',
      badge: 'ORAL + INJECTABLE',
      tagline: 'Maximum coverage for complex recovery',
      explanation: 'Post-surgical recovery benefits from both local GI protection (oral) and systemic tissue repair acceleration (injectable). Using both routes simultaneously ensures you get direct gut mucosal support while maximizing systemic healing. This is the most comprehensive protocol and is well-tolerated when doses are split between routes.',
      protocol: 'Take 250mcg oral in the morning (gut protection and systemic base load), and 250mcg subcutaneous injection in the evening (systemic tissue healing and anti-inflammatory coverage). Total daily dose: 500mcg split across both routes.',
      dose: '250mcg oral + 250mcg SC injectable',
      frequency: 'Oral: AM daily | Injectable: PM daily',
      color: 'text-purple-400',
      borderColor: 'border-purple-500',
    };
  }

  // Oral — gut goals, or needle-avoidant, or convenience-focused
  if (gutGoal || avoidNeedles || (budget === 'sensitive' && !wantSpeed)) {
    return {
      route: 'Oral BPC-157',
      badge: 'ORAL',
      tagline: gutGoal ? 'Direct GI tract contact — ideal for your goal' : 'Best fit for your preference profile',
      explanation: gutGoal
        ? 'For gut healing and gut-brain axis benefits, oral BPC-157 is actually superior to injectable. It travels the entire length of the GI tract, contacting the stomach lining, small intestine, and colon directly. This direct tissue contact is the mechanism — not systemic absorption — which means oral delivery is the optimal route for your specific goal.'
        : 'Given your preference to avoid needles and/or prioritize long-term compliance, oral BPC-157 is the right choice. The best protocol is the one you actually stick to. Oral BPC-157 has good systemic bioavailability despite being in capsule form — BPC-157 is uniquely resistant to gastric acid and digestive enzymes unlike most peptides.',
      protocol: 'Take on an empty stomach for best absorption. Hold the dissolved liquid (or open capsule dissolved in water) sublingually for 30 seconds before swallowing to get some additional mucosal absorption. Consistency over 8–12 weeks is more important than perfect dosing.',
      dose: '250–500mcg per day',
      frequency: 'Once daily (AM, fasted) or split 250mcg AM/PM',
      color: 'text-blue-400',
      borderColor: 'border-blue-500',
    };
  }

  // Injectable — systemic goals, comfortable with needles, speed priority
  return {
    route: 'Injectable BPC-157',
    badge: 'INJECTABLE',
    tagline: 'Highest systemic bioavailability for your goal',
    explanation: 'For tendon, ligament, joint, and muscle repair, injectable BPC-157 delivers the highest systemic bioavailability and fastest onset. Subcutaneous injection near the injury site adds the benefit of local tissue concentration — meaning more BPC-157 reaches the damaged tissue directly. This is the most effective route for structural repair goals.',
    protocol: 'Subcutaneous injection into the abdomen or near the injury site. Reconstitute lyophilized powder with bacteriostatic water. Use 29–31 gauge insulin syringes for minimal discomfort. Rotate injection sites daily. Inject either fasted or with meals — does not significantly affect injectable bioavailability.',
    dose: '250–500mcg per day SC',
    frequency: 'Once daily, 5–7 days per week',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500',
  };
}

export default function BpcRouteRecommender() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<RouteResult | null>(null);

  const currentQ = questions[step];
  const totalSteps = questions.length;

  function handleAnswer(value: string) {
    const updated = { ...answers, [currentQ.id]: value };
    setAnswers(updated);
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setResult(getRecommendation(updated));
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
          <h3 className="text-white font-black text-xl">BPC-157 Route Recommender</h3>
          <p className="text-slate-400 text-sm mt-1">4 questions — get your personalized administration route</p>
        </div>
        {(step > 0 || result) && (
          <button onClick={reset} className="text-slate-500 hover:text-slate-300 flex items-center gap-1 text-xs transition-colors">
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {!result ? (
        <>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Question {step + 1} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all duration-500"
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
                className="w-full text-left px-5 py-3.5 rounded-xl border border-white/10 bg-white/3 hover:bg-emerald-400/10 hover:border-emerald-400/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-5">
          {/* Result badge */}
          <div className={`flex items-start gap-4`}>
            <div className={`border ${result.borderColor} bg-white/3 rounded-xl px-4 py-3 text-center shrink-0`}>
              <div className={`${result.color} text-xs font-bold tracking-widest`}>{result.badge}</div>
            </div>
            <div>
              <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Recommended Route</div>
              <h4 className={`font-black text-xl ${result.color}`}>{result.route}</h4>
              <p className="text-slate-400 text-sm mt-1">{result.tagline}</p>
            </div>
          </div>

          {/* Explanation */}
          <p className="text-slate-300 text-sm leading-relaxed">{result.explanation}</p>

          {/* Protocol */}
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
            <div className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">Sample Protocol</div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="text-slate-500 text-xs mb-1">Dose</div>
                <div className="text-white text-sm font-semibold">{result.dose}</div>
              </div>
              <div>
                <div className="text-slate-500 text-xs mb-1">Frequency</div>
                <div className="text-white text-sm font-semibold">{result.frequency}</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{result.protocol}</p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta px-6 py-3 text-sm flex items-center gap-2"
            >
              Get BPC-157 <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={reset} className="btn-secondary px-6 py-3 text-sm flex items-center gap-2">
              <RotateCcw className="w-4 h-4" /> Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
