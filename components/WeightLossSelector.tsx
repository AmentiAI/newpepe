'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

type PrimaryGoal = 'max-fat' | 'preserve-muscle' | 'gradual' | 'recomp';
type Experience = 'beginner' | 'some' | 'advanced';
type NeedleAversion = 'fine' | 'prefer-avoid' | 'no-needles';
type HowMuch = 'under-20' | '20-50' | '50-plus';

interface Recommendation {
  peptides: string[];
  reasoning: string;
  protocol: string;
  timeline: string;
  warning?: string;
}

function getRecommendation(
  goal: PrimaryGoal,
  exp: Experience,
  needles: NeedleAversion,
  amount: HowMuch
): Recommendation {
  // No-needle override
  if (needles === 'no-needles') {
    return {
      peptides: ['BPC-157 (oral capsules)', 'MOTS-c (oral, lower bioavailability)'],
      reasoning: 'Oral BPC-157 is the only research peptide with meaningful efficacy via oral route. It primarily supports gut health and metabolic function rather than direct fat loss. For significant weight loss without injections, lifestyle modification remains the primary tool.',
      protocol: 'BPC-157 oral: 500mcg twice daily on empty stomach. Results are subtle — primary benefit is gut healing and reduced inflammation, not direct fat loss.',
      timeline: '4–8 weeks for gut/inflammation benefits. Weight loss will be limited without injectable GLP-1 or GH peptides.',
      warning: 'The most effective weight loss peptides (GLP-1s, GH secretagogues) require subcutaneous injection. Oral-only options have significantly limited fat-loss efficacy.',
    };
  }

  // Max fat loss + large amount to lose
  if (goal === 'max-fat' && amount === '50-plus') {
    return {
      peptides: ['Tirzepatide (dual GIP/GLP-1)', 'CJC-1295 / Ipamorelin (muscle preservation)'],
      reasoning: 'With 50+ lbs to lose, the dual-agonist tirzepatide is the most powerful GLP-1 option available — producing 22% body weight loss in SURMOUNT-1 trials. Adding CJC-1295/Ipamorelin protects lean mass during the aggressive deficit.',
      protocol: 'Tirzepatide: start 2.5mg/wk, titrate by 2.5mg every 4 weeks to 10–15mg/wk. CJC-1295/Ipamorelin: 100mcg/100mcg nightly before bed, 5 days/week.',
      timeline: 'Significant hunger reduction: weeks 2–4. Visible fat loss: weeks 6–10. Substantial body transformation: 6–12 months. Goal weight achievable in 12–18 months at adherence.',
    };
  }

  if (goal === 'max-fat' && amount === '20-50') {
    return {
      peptides: ['Semaglutide (GLP-1)', 'CJC-1295 / Ipamorelin (optional, muscle protection)'],
      reasoning: 'Semaglutide is the established gold standard for 20–50 lb weight loss goals — clinically proven 15% body weight reduction. The GH peptide addition is strongly recommended to prevent the lean mass loss common with GLP-1 monotherapy.',
      protocol: exp === 'beginner'
        ? 'Semaglutide: start 0.25mg/wk for 4 weeks, then 0.5mg/wk. Titrate slowly to minimize GI side effects. Add CJC/Ipa at week 4 if tolerating well.'
        : 'Semaglutide: 0.25mg → 0.5mg → 1mg → 2mg/wk (4-week increments). CJC-1295/Ipamorelin nightly from week 1.',
      timeline: 'Appetite suppression: week 1–2. Visible loss: week 6–8. Goal achievement: 6–10 months.',
    };
  }

  if (goal === 'preserve-muscle') {
    return {
      peptides: ['CJC-1295 / Ipamorelin', 'IGF-1 LR3 (4-week cycles)', 'Semaglutide (low dose, optional)'],
      reasoning: 'Muscle preservation during fat loss is the GH secretagogue\'s specialty. CJC-1295/Ipamorelin amplifies natural GH 8–10×, keeping the anabolic environment active even during caloric deficit. IGF-1 LR3 in 4-week cycles adds direct anti-catabolic signaling.',
      protocol: 'CJC-1295/Ipamorelin: 100mcg/100mcg nightly. IGF-1 LR3: 20–30mcg post-workout for 4-week cycles. Semaglutide (optional): 0.25–0.5mg/wk to assist with appetite.',
      timeline: 'Muscle fullness and strength: weeks 2–4. Body recomposition visible: weeks 6–8. Full 12-week cycle recommended.',
    };
  }

  if (goal === 'gradual') {
    return {
      peptides: ['CJC-1295 / Ipamorelin', 'MOTS-c (metabolic support)'],
      reasoning: 'For gradual, sustainable loss, the GH secretagogue stack is ideal — it improves body composition gradually, dramatically improves sleep, and raises energy without the GI side effects of GLP-1s. MOTS-c boosts insulin sensitivity for metabolic optimization.',
      protocol: 'CJC-1295/Ipamorelin: 100mcg/100mcg nightly before bed. MOTS-c: 5–10mg SC 2–3× per week.',
      timeline: 'Sleep improvement: weeks 1–2. Energy increase: weeks 2–3. Body composition changes: months 2–4.',
    };
  }

  // Recomp
  return {
    peptides: ['CJC-1295 / Ipamorelin', 'IGF-1 LR3', exp === 'advanced' ? 'MOTS-c (metabolic optimization)' : 'BPC-157 (recovery support)'],
    reasoning: 'The classic recomposition stack — build muscle and lose fat simultaneously. GH peptide drives the catabolic (fat loss) and anabolic (muscle gain) processes simultaneously by mimicking youthful GH pulsatility.',
    protocol: 'CJC-1295/Ipamorelin: 100mcg/100mcg nightly. IGF-1 LR3: 20–40mcg post-workout (4 weeks on, 4 weeks off). Train 4× week with progressive overload.',
    timeline: 'Body recomp requires patience — visible results at 6–8 weeks, substantial change at 12 weeks. Most dramatic results in the 3–6 month window.',
  };
}

const goalOptions: { value: PrimaryGoal; label: string; sub: string }[] = [
  { value: 'max-fat', label: 'Maximum Fat Loss', sub: 'Lose weight as fast as possible' },
  { value: 'preserve-muscle', label: 'Preserve Muscle + Lose Fat', sub: 'Look athletic, not just lighter' },
  { value: 'gradual', label: 'Gradual Sustainable Loss', sub: 'Slow and steady, minimal side effects' },
  { value: 'recomp', label: 'Lose Fat + Build Muscle', sub: 'Body recomposition simultaneously' },
];

export default function WeightLossSelector() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<PrimaryGoal>('max-fat');
  const [exp, setExp] = useState<Experience>('beginner');
  const [needles, setNeedles] = useState<NeedleAversion>('fine');
  const [amount, setAmount] = useState<HowMuch>('20-50');
  const [result, setResult] = useState<Recommendation | null>(null);

  const handleFinish = () => {
    setResult(getRecommendation(goal, exp, needles, amount));
    setStep(4);
  };

  const steps = [
    {
      title: 'Primary Goal',
      content: (
        <div className="space-y-2">
          {goalOptions.map((o) => (
            <label key={o.value} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${goal === o.value ? 'border-rose-500/50 bg-rose-500/8' : 'border-gray-200 hover:border-gray-200'}`}>
              <input type="radio" name="goal" value={o.value} checked={goal === o.value} onChange={() => setGoal(o.value)} className="accent-rose-500 mt-0.5" />
              <div>
                <div className={`text-sm font-semibold ${goal === o.value ? 'text-gray-900' : 'text-gray-800'}`}>{o.label}</div>
                <div className="text-gray-600 text-xs">{o.sub}</div>
              </div>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: 'Peptide Experience',
      content: (
        <div className="space-y-2">
          {([['beginner', 'Complete Beginner', 'Never used peptides before'], ['some', 'Some Experience', 'Used 1–2 peptides before'], ['advanced', 'Advanced User', 'Multiple cycles, comfortable with protocols']] as [Experience, string, string][]).map(([v, l, s]) => (
            <label key={v} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${exp === v ? 'border-rose-500/50 bg-rose-500/8' : 'border-gray-200 hover:border-gray-200'}`}>
              <input type="radio" name="exp" value={v} checked={exp === v} onChange={() => setExp(v)} className="accent-rose-500 mt-0.5" />
              <div>
                <div className={`text-sm font-semibold ${exp === v ? 'text-gray-900' : 'text-gray-800'}`}>{l}</div>
                <div className="text-gray-600 text-xs">{s}</div>
              </div>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: 'Injection Comfort',
      content: (
        <div className="space-y-2">
          {([['fine', 'No Problem with Injections', 'Comfortable with subcutaneous injections'], ['prefer-avoid', 'Prefer to Avoid Needles', 'Will inject if necessary, but prefer alternatives'], ['no-needles', 'Absolutely No Needles', 'Oral or topical only']] as [NeedleAversion, string, string][]).map(([v, l, s]) => (
            <label key={v} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${needles === v ? 'border-rose-500/50 bg-rose-500/8' : 'border-gray-200 hover:border-gray-200'}`}>
              <input type="radio" name="needles" value={v} checked={needles === v} onChange={() => setNeedles(v)} className="accent-rose-500 mt-0.5" />
              <div>
                <div className={`text-sm font-semibold ${needles === v ? 'text-gray-900' : 'text-gray-800'}`}>{l}</div>
                <div className="text-gray-600 text-xs">{s}</div>
              </div>
            </label>
          ))}
        </div>
      ),
    },
    {
      title: 'How Much to Lose',
      content: (
        <div className="space-y-2">
          {([['under-20', 'Less than 20 lbs', 'Mild recomposition goal'], ['20-50', '20–50 lbs', 'Significant weight loss goal'], ['50-plus', '50+ lbs', 'Major transformation goal']] as [HowMuch, string, string][]).map(([v, l, s]) => (
            <label key={v} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${amount === v ? 'border-rose-500/50 bg-rose-500/8' : 'border-gray-200 hover:border-gray-200'}`}>
              <input type="radio" name="amount" value={v} checked={amount === v} onChange={() => setAmount(v)} className="accent-rose-500 mt-0.5" />
              <div>
                <div className={`text-sm font-semibold ${amount === v ? 'text-gray-900' : 'text-gray-800'}`}>{l}</div>
                <div className="text-gray-600 text-xs">{s}</div>
              </div>
            </label>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-gray-900 font-black text-xl mb-1">Weight Loss Peptide Selector</h3>
        <p className="text-gray-600 text-sm">Answer 4 questions to get your personalized peptide recommendation.</p>
        {step < 4 && (
          <div className="flex gap-1.5 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-all ${i <= step ? 'bg-rose-500' : 'bg-white/10'}`} />
            ))}
          </div>
        )}
      </div>

      {step < 4 ? (
        <>
          <div className="mb-2">
            <span className="text-rose-400 text-xs font-bold uppercase tracking-wide">Step {step + 1} of 4</span>
            <h4 className="text-gray-900 font-bold text-lg mt-1">{steps[step].title}</h4>
          </div>
          <div className="mb-6">{steps[step].content}</div>
          <div className="flex gap-3">
            {step > 0 && (
              <button onClick={() => setStep(step - 1)} className="btn-secondary flex-1 py-3 text-sm">Back</button>
            )}
            {step < 3 ? (
              <button onClick={() => setStep(step + 1)} className="btn-cta flex-1 py-3 text-sm flex items-center justify-center gap-2">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button onClick={handleFinish} className="btn-cta flex-1 py-3 text-sm font-bold">
                Get My Recommendation
              </button>
            )}
          </div>
        </>
      ) : result ? (
        <div className="space-y-4">
          <div className="rounded-xl p-4" style={{ background: 'rgba(244,63,94,0.06)', border: '1px solid rgba(244,63,94,0.2)' }}>
            <div className="text-rose-400 text-xs font-bold uppercase tracking-wide mb-3">Recommended Peptides</div>
            <ul className="space-y-2">
              {result.peptides.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-900">
                  <CheckCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {result.warning && (
            <div className="rounded-xl p-4" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wide mb-1">Important Note</div>
              <p className="text-amber-200 text-sm">{result.warning}</p>
            </div>
          )}

          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-gray-600 text-xs font-bold uppercase tracking-wide mb-2">Why This Protocol</div>
            <p className="text-gray-800 text-sm leading-relaxed">{result.reasoning}</p>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-wide mb-2">Sample Protocol</div>
            <p className="text-gray-800 text-sm leading-relaxed">{result.protocol}</p>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-1">Expected Timeline</div>
            <p className="text-gray-800 text-sm">{result.timeline}</p>
          </div>

          <button onClick={() => { setStep(0); setResult(null); }} className="w-full py-2.5 text-sm text-gray-600 border border-gray-200 rounded-xl hover:border-gray-200 hover:text-gray-900 transition-colors">
            Start Over
          </button>
          <p className="text-gray-500 text-xs text-center">For informational purposes only. Not medical advice.</p>
        </div>
      ) : null}
    </div>
  );
}
