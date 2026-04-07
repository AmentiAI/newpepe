'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const SOURCE_URL = '/out';

type TabId = 'topical' | 'injectable' | 'combination';

interface WeeklyEntry {
  period: string;
  title: string;
  changes: string[];
}

interface Protocol {
  label: string;
  dose: string;
  frequency: string;
  method: string;
  bestFor: string;
  expectedResults: string;
  timeline: WeeklyEntry[];
}

const protocols: Record<TabId, Protocol> = {
  topical: {
    label: 'Topical',
    dose: 'Variable (see concentration slider below)',
    frequency: 'Once or twice daily',
    method: 'Dissolve GHK-Cu powder in carrier (distilled water, aloe vera gel, or PG/water mix). Apply with fingertips or dropper to face, neck, and décolletage on clean, dry skin.',
    bestFor: 'Skin texture, collagen density, luminosity, pore reduction, anti-aging maintenance. Most convenient entry point — no injection required.',
    expectedResults: '4–8 weeks for initial texture and hydration improvements; 8–12 weeks for measurable collagen remodeling; 12–16 weeks for full structural skin improvement.',
    timeline: [
      {
        period: 'Weeks 1–2',
        title: 'Hydration & Barrier',
        changes: [
          'Skin hydration increases within days — GHK-Cu activates HA production',
          'Barrier function begins improving',
          'Mild tingling/warmth possible — normal response to copper peptide',
          'No visible structural changes yet',
        ],
      },
      {
        period: 'Weeks 3–4',
        title: 'Early Texture Changes',
        changes: [
          'Surface texture begins improving (proteasome clearing damaged proteins)',
          'Luminosity increase — angiogenesis improving dermis blood vessel density',
          'Pore appearance begins reducing subtly',
          'Skin feels consistently softer',
        ],
      },
      {
        period: 'Weeks 5–8',
        title: 'Collagen Upregulation Visible',
        changes: [
          'Visible firmness improvement as collagen I/III density increases',
          'Pore reduction measurable in macro photography',
          'Fine lines softening (collagen filling the dermis beneath)',
          'Skin tone evening — PIH from old breakouts fading',
        ],
      },
      {
        period: 'Weeks 9–12',
        title: 'Full Topical Effect',
        changes: [
          'Maximum collagen remodeling for topical route at this point',
          'Comprehensive texture, tone, and firmness improvements stable',
          'Maintain at 3–5x/week for continued collagen upregulation',
          'Consider adding injectable for deeper systemic effects',
        ],
      },
    ],
  },
  injectable: {
    label: 'Injectable',
    dose: '0.5–2mg/day subcutaneous',
    frequency: 'Daily (5–7 days/week); some protocols use 3x/week maintenance',
    method: 'Reconstitute in bacteriostatic water. Subcutaneous injection into abdomen or thigh. Evening injection aligns with overnight skin repair cycle — growth hormone peaks at night, and GHK-Cu\'s collagen upregulation effects are amplified by GH signaling.',
    bestFor: 'Systemic gene expression reset (the 31% aged gene reversal), hair follicle activation, systemic anti-aging, users who want maximum effect or are already comfortable with SC injection for other peptides.',
    expectedResults: 'Systemic effects begin earlier than topical; full collagen and gene reset effects at 8–12 weeks. Hair and nail quality improvements at 6–10 weeks.',
    timeline: [
      {
        period: 'Weeks 1–2',
        title: 'Systemic Adaptation',
        changes: [
          'Systemic gene expression modulation begins immediately at first injection',
          'Sleep quality may improve (GHK-Cu modulates circadian rhythm genes)',
          'Some users notice wound healing acceleration even in this early window',
          'Skin appears slightly more "healthy" — microcirculation improving',
        ],
      },
      {
        period: 'Weeks 3–4',
        title: 'Full Systemic Effect',
        changes: [
          'Gene expression reset fully underway — multiple tissue types benefiting',
          'Skin collagen synthesis elevated systemically',
          'Hair follicle stimulation beginning (systemic route activates all follicles, not just topical sites)',
          'Energy and recovery improvements reported by many users at this stage',
        ],
      },
      {
        period: 'Weeks 5–8',
        title: 'Visible Structural Changes',
        changes: [
          'Significant skin firmness improvement — injectable delivers higher bioavailability than topical',
          'Hair density improvements visible in areas of thinning',
          'Scar tissue remodeling accelerating',
          'Collagen I/III ratio shifting toward more structural type I collagen',
        ],
      },
      {
        period: 'Weeks 9–12',
        title: 'Full Injectable Protocol Effect',
        changes: [
          'Maximum gene expression reset achieved at consistent daily dosing',
          'Skin biological age markers measurably reduced',
          'Hair regrowth in thinning areas visible',
          'Maintenance phase begins: can reduce to 3–5x/week at same dose',
        ],
      },
    ],
  },
  combination: {
    label: 'Combination',
    dose: 'Injectable: 0.5–1mg SC/day + Topical: 0.5–1mg/application',
    frequency: 'Injectable: daily (evening). Topical: AM application to face, neck, décolletage.',
    method: 'Divide GHK-Cu use: injectable for systemic gene reset and hair effects; topical for direct skin surface delivery and local collagen upregulation. Evening SC injection + AM topical application provides 24-hour coverage of multiple delivery routes.',
    bestFor: 'Maximum anti-aging results. Ideal for: users 40+ targeting significant age reversal, those with both hair and skin goals, users already experienced with injectable peptides.',
    expectedResults: 'Fastest and most comprehensive results of all three routes. Systemic + local collagen upregulation produces synergistic effect greater than either route alone.',
    timeline: [
      {
        period: 'Weeks 1–2',
        title: 'Dual-Route Initiation',
        changes: [
          'Topical: immediate hydration and barrier improvement',
          'Injectable: systemic gene modulation begins',
          'Combined effect on dermis: both local and systemic collagen upregulation active',
          'Document baseline carefully — changes will be significant',
        ],
      },
      {
        period: 'Weeks 3–4',
        title: 'Compounding Effects',
        changes: [
          'Visible texture improvement ahead of single-route timeline',
          'Luminosity increase driven by angiogenesis (both routes stimulate this)',
          'Systemic effects from injectable enhancing topical penetration results',
          'Hair follicle activation ongoing (primarily from systemic injectable route)',
        ],
      },
      {
        period: 'Weeks 5–8',
        title: 'Significant Age Reversal',
        changes: [
          'Comprehensive collagen matrix remodeling — measurable firmness, texture, pore changes',
          'Hair density improvements visible',
          'Skin biological markers (e.g., collagen density on skin biopsy) significantly improved',
          'Many users describe "10 years younger" skin appearance comments from others',
        ],
      },
      {
        period: 'Weeks 9–12',
        title: 'Full Combination Effect',
        changes: [
          'Maximum anti-aging results achieved',
          'Transition to maintenance: reduce injectable to 3x/week, maintain topical daily',
          'Consider adding SNAP-8 topical for additive wrinkle relaxation',
          'Quarterly Epithalon cycle recommended for cellular longevity support',
        ],
      },
    ],
  },
};

const tabs: { id: TabId; label: string }[] = [
  { id: 'topical', label: 'Topical' },
  { id: 'injectable', label: 'Injectable' },
  { id: 'combination', label: 'Combination' },
];

const concentrationDescriptions = [
  { level: 0.5, label: '0.5%', desc: 'Maintenance / sensitive skin intro', strength: 33 },
  { level: 1, label: '1.0%', desc: 'Standard anti-aging dose', strength: 66 },
  { level: 2, label: '2.0%', desc: 'Intensive / accelerated protocol', strength: 100 },
];

export default function GhkCuProtocolGuide() {
  const [activeTab, setActiveTab] = useState<TabId>('topical');
  const [concentration, setConcentration] = useState(1);

  const protocol = protocols[activeTab];

  const concentrationInfo = concentrationDescriptions.reduce((prev, curr) =>
    Math.abs(curr.level - concentration) < Math.abs(prev.level - concentration) ? curr : prev
  );

  return (
    <div className="rounded-xl bg-dark-800/60 border border-white/10 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-purple-900/30 text-purple-300 border-b-2 border-purple-500'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-6">
        {/* Topical: Concentration slider */}
        {activeTab === 'topical' && (
          <div className="bg-dark-700/50 border border-white/5 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white">Concentration</span>
              <span className="text-purple-400 font-bold text-lg">{concentration.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={2}
              step={0.5}
              value={concentration}
              onChange={(e) => setConcentration(Number(e.target.value))}
              className="w-full accent-purple-500 mb-3"
            />
            <div className="flex justify-between text-xs text-slate-500 mb-4">
              <span>0.5%</span>
              <span>1.0%</span>
              <span>2.0%</span>
            </div>

            {/* Strength indicator */}
            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Strength Indicator</span>
                <span className="text-purple-400">{concentrationInfo.label} — {concentrationInfo.desc}</span>
              </div>
              <div className="h-3 bg-dark-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-800 to-purple-400 rounded-full transition-all duration-500"
                  style={{ width: `${concentrationInfo.strength}%` }}
                />
              </div>
              <div className="text-xs text-slate-500 mt-2">
                {concentration === 0.5 && 'Good for: sensitive skin, first-time GHK-Cu users, or long-term maintenance after loading phase'}
                {concentration === 1 && 'Good for: standard anti-aging protocol, most skin types, daily use without saturation'}
                {concentration === 2 && 'Good for: accelerated protocols, experienced users, intensive scar or aging reversal courses (8–12 weeks then reduce)'}
              </div>
            </div>
          </div>
        )}

        {/* Protocol Card */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Dose</p>
            <p className="text-sm text-slate-200">{protocol.dose}</p>
          </div>
          <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Frequency</p>
            <p className="text-sm text-slate-200">{protocol.frequency}</p>
          </div>
          <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4 sm:col-span-2">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Application Method</p>
            <p className="text-sm text-slate-300 leading-relaxed">{protocol.method}</p>
          </div>
          <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Best For</p>
            <p className="text-sm text-slate-300">{protocol.bestFor}</p>
          </div>
          <div className="bg-dark-700/40 border border-white/5 rounded-xl p-4">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Expected Results</p>
            <p className="text-sm text-slate-300">{protocol.expectedResults}</p>
          </div>
        </div>

        {/* Week-by-week Timeline */}
        <div>
          <p className="text-sm font-semibold text-purple-300 mb-4">Week-by-Week Timeline</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {protocol.timeline.map((entry) => (
              <div key={entry.period} className="bg-dark-700/40 border border-purple-500/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full px-2 py-0.5 font-semibold">
                    {entry.period}
                  </span>
                  <span className="text-sm font-medium text-white">{entry.title}</span>
                </div>
                <ul className="space-y-1">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <a
          href={SOURCE_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="btn-cta inline-flex items-center gap-2 w-full justify-center"
        >
          Source GHK-Cu <ArrowRight className="w-4 h-4" />
        </a>

        <p className="text-xs text-slate-600 text-center">
          For research purposes only. Not medical advice.
        </p>
      </div>
    </div>
  );
}
