'use client';

import { useState } from 'react';
import { CheckCircle, Sparkles, Zap, Shield, TrendingUp, Star, FlaskConical, Save } from 'lucide-react';

type Goal = 'skin-glow' | 'anti-wrinkle' | 'beard' | 'scar' | 'body-comp' | 'longevity';
type BudgetTier = 'starter' | 'complete' | 'advanced';

interface GoalOption {
  value: Goal;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface StackItem {
  name: string;
  dose: string;
  route: string;
  role: string;
  monthlyCost: number;
  priority: 'Core' | 'Targeted' | 'Advanced';
  goals: Goal[];
  tiers: BudgetTier[];
}

const GOALS: GoalOption[] = [
  { value: 'skin-glow', label: 'Skin Quality & Glow', icon: <Sparkles className="w-4 h-4" />, color: 'text-amber-400' },
  { value: 'anti-wrinkle', label: 'Anti-Wrinkle', icon: <Shield className="w-4 h-4" />, color: 'text-purple-400' },
  { value: 'beard', label: 'Beard Growth', icon: <Zap className="w-4 h-4" />, color: 'text-emerald-400' },
  { value: 'scar', label: 'Scar Reduction', icon: <CheckCircle className="w-4 h-4" />, color: 'text-teal-400' },
  { value: 'body-comp', label: 'Body Composition & Jaw', icon: <TrendingUp className="w-4 h-4" />, color: 'text-blue-400' },
  { value: 'longevity', label: 'Anti-Aging / Longevity', icon: <Star className="w-4 h-4" />, color: 'text-violet-400' },
];

const BUDGET_TIERS: { value: BudgetTier; label: string; range: string; desc: string }[] = [
  {
    value: 'starter',
    label: 'Foundation Stack',
    range: '~$100–150/month',
    desc: 'Maximum bang-for-buck. Best for beginners. Addresses skin collagen, gut-skin, and healing.',
  },
  {
    value: 'complete',
    label: 'Complete Appearance Stack',
    range: '~$200–300/month',
    desc: 'Foundation + GH axis optimization + anti-wrinkle neuropeptide. Comprehensive appearance upgrade.',
  },
  {
    value: 'advanced',
    label: 'Advanced Protocol',
    range: '~$400–600/month',
    desc: 'For serious biohackers. Adds direct IGF-1 and telomere protection for cellular aging reversal.',
  },
];

const ALL_STACK_ITEMS: StackItem[] = [
  {
    name: 'GHK-Cu (Topical)',
    dose: '1–2 mg/day in serum',
    route: 'Topical (face/scalp/beard)',
    role: 'Core collagen stimulator. Stimulates Types I, III, IV collagen, resets aged gene expression, reduces inflammation, improves pores and skin texture.',
    monthlyCost: 45,
    priority: 'Core',
    goals: ['skin-glow', 'anti-wrinkle', 'beard', 'scar', 'longevity'],
    tiers: ['starter', 'complete', 'advanced'],
  },
  {
    name: 'BPC-157 (Oral)',
    dose: '250–500 mcg twice daily',
    route: 'Oral (before meals)',
    role: 'Gut-skin axis repair. Reduces systemic inflammation, heals gut barrier, improves skin barrier from the inside out. Essential for acne, scar healing, and gut-driven skin issues.',
    monthlyCost: 55,
    priority: 'Core',
    goals: ['skin-glow', 'scar', 'body-comp'],
    tiers: ['starter', 'complete', 'advanced'],
  },
  {
    name: 'SNAP-8 (Topical)',
    dose: '10% concentration in eye area serum',
    route: 'Topical (expression lines, forehead, crow\'s feet)',
    role: 'Neuropeptide that reduces facial muscle micro-contractions that cause expression lines. Topical Botox alternative — works at the neuromuscular junction.',
    monthlyCost: 35,
    priority: 'Targeted',
    goals: ['anti-wrinkle'],
    tiers: ['complete', 'advanced'],
  },
  {
    name: 'CJC-1295 + Ipamorelin',
    dose: 'CJC: 200 mcg + Ipamorelin: 200 mcg',
    route: 'Subcutaneous injection (before bed)',
    role: 'GH axis optimization. Stimulates natural GH release → elevates IGF-1 → systemic collagen production, body recomposition, improved sleep quality (sleep = critical for GH release).',
    monthlyCost: 85,
    priority: 'Targeted',
    goals: ['anti-wrinkle', 'body-comp', 'longevity', 'skin-glow'],
    tiers: ['complete', 'advanced'],
  },
  {
    name: 'IGF-1 LR3',
    dose: '20–50 mcg/day',
    route: 'Subcutaneous injection (morning or post-workout)',
    role: 'Direct IGF-1 receptor stimulation. Drives collagen synthesis in fibroblasts, supports facial fat volume, improves muscle fullness, and accelerates all wound healing — including scar remodeling.',
    monthlyCost: 120,
    priority: 'Advanced',
    goals: ['skin-glow', 'scar', 'body-comp', 'beard', 'longevity'],
    tiers: ['advanced'],
  },
  {
    name: 'Epithalon',
    dose: '5–10 mg per course (10-day protocol)',
    route: 'Subcutaneous or intravenous (2x per year)',
    role: 'Telomere length protection → skin cell longevity → sustained collagen production capacity over years. Prevents the cellular senescence that causes long-term collagen decline.',
    monthlyCost: 70,
    priority: 'Advanced',
    goals: ['longevity', 'anti-wrinkle', 'skin-glow'],
    tiers: ['advanced'],
  },
];

const PRIORITY_COLORS = {
  Core: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40',
  Targeted: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
  Advanced: 'bg-purple-500/20 text-purple-300 border border-purple-500/40',
};

export default function LooksmaxxingStackBuilder() {
  const [selectedGoals, setSelectedGoals] = useState<Goal[]>([]);
  const [budgetTier, setBudgetTier] = useState<BudgetTier | null>(null);
  const [showStack, setShowStack] = useState(false);

  function toggleGoal(goal: Goal) {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
    setShowStack(false);
  }

  function handleBudget(tier: BudgetTier) {
    setBudgetTier(tier);
    setShowStack(false);
  }

  function buildStack() {
    setShowStack(true);
  }

  function handleSave() {
    alert('Protocol saved! In a full implementation, this would export your protocol to PDF or save to your account.');
  }

  const filteredStack = ALL_STACK_ITEMS.filter((item) => {
    const matchesGoal = selectedGoals.length === 0 || item.goals.some((g) => selectedGoals.includes(g));
    const matchesTier = budgetTier === null || item.tiers.includes(budgetTier);
    return matchesGoal && matchesTier;
  }).sort((a, b) => {
    const order = { Core: 0, Targeted: 1, Advanced: 2 };
    return order[a.priority] - order[b.priority];
  });

  const totalCost = filteredStack.reduce((sum, item) => sum + item.monthlyCost, 0);

  const canBuild = selectedGoals.length > 0 && budgetTier !== null;

  return (
    <div className="glass-card p-6 space-y-6">
      <div className="flex items-center gap-3">
        <FlaskConical className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-bold text-slate-100">Looksmaxxing Stack Builder</h3>
      </div>

      {/* Step 1: Goals */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-xs font-bold">1</span>
          <span className="text-slate-200 font-semibold text-sm">Select Your Goals</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {GOALS.map((goal) => {
            const selected = selectedGoals.includes(goal.value);
            return (
              <button
                key={goal.value}
                onClick={() => toggleGoal(goal.value)}
                className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium text-left transition-all ${
                  selected
                    ? `border-purple-500/50 bg-purple-500/10 ${goal.color}`
                    : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-300'
                }`}
              >
                <span className={selected ? goal.color : 'text-slate-500'}>{goal.icon}</span>
                <span className="leading-tight">{goal.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Budget Tier */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-xs font-bold">2</span>
          <span className="text-slate-200 font-semibold text-sm">Select Budget Tier</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {BUDGET_TIERS.map((tier) => (
            <button
              key={tier.value}
              onClick={() => handleBudget(tier.value)}
              className={`p-4 rounded-xl border text-left transition-all space-y-1 ${
                budgetTier === tier.value
                  ? 'border-purple-500/60 bg-purple-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <p className={`font-semibold text-sm ${budgetTier === tier.value ? 'text-purple-300' : 'text-slate-300'}`}>
                {tier.label}
              </p>
              <p className={`text-xs font-bold ${budgetTier === tier.value ? 'text-amber-300' : 'text-slate-500'}`}>
                {tier.range}
              </p>
              <p className="text-slate-500 text-xs leading-tight">{tier.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Build Button */}
      <button
        onClick={buildStack}
        disabled={!canBuild}
        className="w-full py-3 rounded-xl bg-purple-600/30 border border-purple-500/50 text-purple-200 font-semibold hover:bg-purple-600/40 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        Build My Stack
      </button>

      {/* Step 3: Results */}
      {showStack && filteredStack.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 text-xs font-bold">3</span>
            <span className="text-slate-200 font-semibold text-sm">Your Recommended Stack</span>
          </div>

          <div className="space-y-3">
            {filteredStack.map((item, i) => (
              <div key={item.name} className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-sm font-mono w-5">#{i + 1}</span>
                    <span className="text-slate-100 font-semibold text-sm">{item.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${PRIORITY_COLORS[item.priority]}`}>
                    {item.priority}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500">Dose</span>
                    <p className="text-slate-300">{item.dose}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Route</span>
                    <p className="text-slate-300">{item.route}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.role}</p>
                <div className="flex items-center justify-between pt-1 border-t border-slate-700/50">
                  <span className="text-slate-500 text-xs">Est. monthly cost</span>
                  <span className="text-amber-300 font-semibold text-sm">~${item.monthlyCost}/mo</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total Cost */}
          <div className="flex items-center justify-between bg-purple-500/10 border border-purple-500/30 rounded-xl px-4 py-3">
            <span className="text-slate-300 font-semibold">Total Monthly Estimate</span>
            <span className="text-purple-300 font-bold text-xl">~${totalCost}/mo</span>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full py-2.5 rounded-xl border border-slate-600 text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Save className="w-4 h-4" />
            Save Protocol
          </button>
        </div>
      )}

      <p className="text-slate-500 text-xs text-center">For research purposes only. Consult a qualified physician before use.</p>
    </div>
  );
}
