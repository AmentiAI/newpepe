'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

type Option = { value: string; label: string };

interface Question {
  id: string;
  question: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: 'goal',
    question: 'What is your primary goal?',
    options: [
      { value: 'healing', label: 'Healing an injury or chronic pain' },
      { value: 'antiaging', label: 'Anti-aging and longevity' },
      { value: 'bodycomp', label: 'Body composition (fat loss + muscle)' },
      { value: 'cognitive', label: 'Cognitive enhancement and focus' },
      { value: 'athletic', label: 'Athletic performance and recovery' },
    ],
  },
  {
    id: 'experience',
    question: 'How experienced are you with peptides?',
    options: [
      { value: 'never', label: 'Never used peptides before' },
      { value: 'some', label: 'Used 1–2 peptides before' },
      { value: 'experienced', label: 'Experienced — multiple cycles completed' },
    ],
  },
  {
    id: 'injections',
    question: 'How many injections per week can you commit to?',
    options: [
      { value: 'low', label: '1–2 injections per week' },
      { value: 'mid', label: '3–5 injections per week' },
      { value: 'daily', label: 'Daily injections — I am committed' },
    ],
  },
  {
    id: 'budget',
    question: 'What is your monthly peptide budget?',
    options: [
      { value: 'low', label: 'Under $100/month' },
      { value: 'mid', label: '$100–$200/month' },
      { value: 'high', label: '$200+/month' },
    ],
  },
  {
    id: 'timeline',
    question: 'How long can you commit to a protocol?',
    options: [
      { value: 'short', label: '4–6 weeks to see results' },
      { value: 'mid', label: '8–12 weeks — I am patient' },
      { value: 'long', label: '6+ months — long-term investment' },
    ],
  },
];

interface StackResult {
  slug: string;
  name: string;
  tagline: string;
  emoji: string;
  color: string;
  textColor: string;
  borderColor: string;
  estimatedCost: string;
  why: string;
}

function getRecommendation(answers: Record<string, string>): StackResult {
  const { goal, experience, injections, budget, timeline } = answers;

  // Scoring map — primary goal drives the stack
  if (goal === 'healing') {
    return {
      slug: 'ultimate-healing',
      name: 'Ultimate Healing Stack',
      tagline: 'BPC-157 + TB-500 — the gold standard for tissue repair',
      emoji: '🛡️',
      color: 'emerald',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      estimatedCost: experience === 'never' ? '$80–$140/month' : '$120–$180/month',
      why: 'Your healing goal aligns directly with this stack. BPC-157 works locally at injury sites while TB-500 drives systemic tissue repair — a combination with the strongest research backing for recovery.',
    };
  }

  if (goal === 'antiaging') {
    return {
      slug: 'anti-aging-longevity',
      name: 'Anti-Aging Longevity Protocol',
      tagline: 'Epithalon + GHK-Cu + CJC/Ipamorelin — the longevity trifecta',
      emoji: '⏳',
      color: 'purple',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      estimatedCost: timeline === 'long' ? '$150–$250/month' : '$100–$180/month',
      why: 'The anti-aging protocol matches your longevity goals. Epithalon (telomere lengthening), GHK-Cu (gene expression), and CJC/Ipamorelin (GH restoration) address three distinct aging pathways simultaneously.',
    };
  }

  if (goal === 'bodycomp') {
    return {
      slug: 'body-recomp',
      name: 'Body Recomposition Stack',
      tagline: 'CJC-1295 + Ipamorelin + BPC-157 — lean mass and fat loss',
      emoji: '🔥',
      color: 'blue',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      estimatedCost: injections === 'daily' ? '$130–$200/month' : '$100–$160/month',
      why: 'This stack is engineered for your body composition goals. The CJC-1295 + Ipamorelin combination amplifies GH 8–10× beyond baseline, driving fat oxidation and muscle retention.',
    };
  }

  if (goal === 'cognitive') {
    return {
      slug: 'cognitive-stack',
      name: 'Cognitive Enhancement Stack',
      tagline: 'Semax + Selank + Dihexa — focus, memory, and anxiety balance',
      emoji: '🧠',
      color: 'cyan',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      estimatedCost: '$90–$150/month',
      why: 'The cognitive stack directly targets your focus and performance goals. Semax raises BDNF for neuroplasticity, Selank modulates anxiety, and Dihexa provides the strongest neurogenic peptide evidence available.',
    };
  }

  // athletic or default
  return {
    slug: 'athlete-performance',
    name: 'Athlete Performance Stack',
    tagline: 'BPC-157 + TB-500 + CJC/Ipamorelin — peak performance and recovery',
    emoji: '⚡',
    color: 'amber',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    estimatedCost: budget === 'high' ? '$160–$220/month' : '$120–$180/month',
    why: 'The athlete stack matches your performance goals. Faster recovery between training sessions, injury prevention, and GH-driven adaptation — used by serious athletes to extend their competitive window.',
  };
}

export default function StackQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<StackResult | null>(null);

  const question = QUESTIONS[currentQ];
  const isLast = currentQ === QUESTIONS.length - 1;
  const progress = ((currentQ) / QUESTIONS.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    if (isLast) {
      setResult(getRecommendation(newAnswers));
    } else {
      setCurrentQ((p) => p + 1);
    }
  };

  const reset = () => {
    setCurrentQ(0);
    setAnswers({});
    setResult(null);
  };

  const colorMap: Record<string, string> = {
    emerald: 'rgba(16,185,129,0.1)',
    purple: 'rgba(168,85,247,0.1)',
    blue: 'rgba(59,130,246,0.1)',
    cyan: 'rgba(6,182,212,0.1)',
    amber: 'rgba(245,158,11,0.1)',
  };

  const borderMap: Record<string, string> = {
    emerald: 'rgba(16,185,129,0.25)',
    purple: 'rgba(168,85,247,0.25)',
    blue: 'rgba(59,130,246,0.25)',
    cyan: 'rgba(6,182,212,0.25)',
    amber: 'rgba(245,158,11,0.25)',
  };

  if (result) {
    return (
      <div className="glass-card p-6 md:p-8">
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{result.emoji}</div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: colorMap[result.color], border: `1px solid ${borderMap[result.color]}` }}>
            <CheckCircle className={`w-3 h-3 ${result.textColor}`} />
            <span className={result.textColor}>Your Recommended Stack</span>
          </div>
          <h3 className="text-gray-900 font-black text-2xl mb-1">{result.name}</h3>
          <p className={`${result.textColor} text-sm font-semibold mb-4`}>{result.tagline}</p>
        </div>

        <div className="rounded-xl p-4 mb-5"
          style={{ background: colorMap[result.color], border: `1px solid ${borderMap[result.color]}` }}>
          <p className={`${result.textColor} text-xs font-bold uppercase tracking-wide mb-2`}>Why this stack for you</p>
          <p className="text-gray-800 text-sm leading-relaxed">{result.why}</p>
        </div>

        <div className="flex items-center justify-between mb-6 px-1">
          <div>
            <div className="text-xs text-gray-600 mb-0.5">Estimated monthly cost</div>
            <div className="text-gray-900 font-bold text-sm">{result.estimatedCost}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-600 mb-0.5">Answers given</div>
            <div className="text-gray-900 font-bold text-sm">{Object.keys(answers).length}/{QUESTIONS.length}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/stacks/${result.slug}`}
            className="flex-1 text-center py-3.5 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2"
            style={{ background: colorMap[result.color], border: `1px solid ${borderMap[result.color]}`, color: 'white' }}
          >
            View Full Protocol <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex-1 btn-cta text-sm py-3.5 text-center flex items-center justify-center gap-2"
          >
            Get the Peptides <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button onClick={reset} className="w-full mt-3 text-gray-600 text-xs hover:text-gray-600 py-2 transition-colors">
          Start over — retake quiz
        </button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-900 font-black text-lg">Stack Finder Quiz</h3>
        <span className="text-xs text-gray-600">Question {currentQ + 1} of {QUESTIONS.length}</span>
      </div>
      <p className="text-gray-600 text-sm mb-5">Answer 5 quick questions to find your ideal peptide stack.</p>

      {/* Progress */}
      <div className="w-full h-1.5 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: 'rgba(0,255,136,0.7)' }}
        />
      </div>

      <p className="text-gray-900 font-bold text-base mb-5">{question.question}</p>

      <div className="space-y-2.5">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleAnswer(opt.value)}
            className="w-full text-left px-5 py-4 rounded-xl text-sm font-semibold text-gray-800 transition-all hover:text-gray-900 border border-gray-200 hover:border-neon-green/30"
            style={{ background: 'rgba(255,255,255,0.03)' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,136,0.05)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            <span className="text-neon-green mr-3">→</span>
            {opt.label}
          </button>
        ))}
      </div>

      {currentQ > 0 && (
        <button
          onClick={() => setCurrentQ((p) => p - 1)}
          className="mt-4 flex items-center gap-1.5 text-gray-600 hover:text-gray-600 text-xs transition-colors"
        >
          <ChevronLeft className="w-3 h-3" /> Back to previous question
        </button>
      )}
    </div>
  );
}
