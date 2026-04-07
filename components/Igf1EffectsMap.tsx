'use client';

import { useState } from 'react';
import { Layers, Droplets, Dumbbell, Zap, Bone, HeartPulse, Activity } from 'lucide-react';

interface AreaDetail {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  relevance: number;
  howItWorks: string;
  mechanism: string;
  timeline: string;
  dosageNote: string;
  synergisticPeptides: string[];
}

const AREAS: AreaDetail[] = [
  {
    id: 'collagen',
    label: 'Skin Collagen',
    icon: <Layers className="w-5 h-5" />,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    relevance: 95,
    howItWorks: 'IGF-1 LR3 directly activates IGF-1 receptors on fibroblasts — the cells responsible for collagen production. This drives upregulation of Type I and Type III collagen synthesis, resulting in firmer, thicker, and more youthful-looking skin.',
    mechanism: 'IGF-1R → PI3K/Akt signaling → increased fibroblast proliferation and procollagen I/III gene expression → measurable collagen density improvement',
    timeline: '6–10 weeks for measurable collagen output increase; 12–16 weeks for visible skin firmness improvement',
    dosageNote: '20–50 mcg/day (appearance protocol). Higher doses add body composition benefits but appearance benefits plateau around 50 mcg.',
    synergisticPeptides: ['GHK-Cu', 'BPC-157', 'CJC-1295/Ipamorelin'],
  },
  {
    id: 'facial-fat',
    label: 'Facial Fat Volume',
    icon: <Droplets className="w-5 h-5" />,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/40',
    relevance: 88,
    howItWorks: 'Facial aging involves progressive loss of fat compartment volume — the "deflated" look. IGF-1 supports fat cell health and reduces the catabolic loss of subcutaneous fat in the face, helping preserve youthful facial volume. At appearance doses, this is subtle but measurable over months.',
    mechanism: 'IGF-1 activates PI3K/Akt pathway in adipocytes → reduces apoptosis in facial fat cells → better preservation of compartment volume in malar fat pad and buccal regions',
    timeline: '3–6 months for facial volume preservation benefit; most noticeable in people with caloric restriction or aging-related facial gauntness',
    dosageNote: '20–40 mcg/day maintains facial fat compartment integrity. This is not a "fat gain" effect — it prevents pathological catabolic loss.',
    synergisticPeptides: ['CJC-1295/Ipamorelin', 'GH peptides'],
  },
  {
    id: 'muscle',
    label: 'Muscle Volume',
    icon: <Dumbbell className="w-5 h-5" />,
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
    relevance: 82,
    howItWorks: 'Improved protein synthesis from IGF-1 LR3 leads to better muscle fullness even at subpharmacological doses. For facial appearance, this means better development of masseter, temporalis, and neck musculature — contributing to a more defined, angular facial structure.',
    mechanism: 'IGF-1R → mTOR pathway → increased muscle protein synthesis → satellite cell activation → hypertrophy of muscle tissue systemically including facial/jaw musculature',
    timeline: '4–8 weeks for improved protein synthesis markers; 8–12 weeks for measurable changes in body composition',
    dosageNote: '40–100 mcg/day for body composition effects. Appearance doses (20–50 mcg) provide mild anabolic support that enhances training adaptations.',
    synergisticPeptides: ['BPC-157', 'TB-500', 'CJC-1295/Ipamorelin'],
  },
  {
    id: 'hair',
    label: 'Hair Follicles',
    icon: <Zap className="w-5 h-5" />,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/40',
    relevance: 78,
    howItWorks: 'IGF-1 is a universal growth factor for hair follicles across the scalp, beard, eyebrows, and body. Unlike DHT-dependent mechanisms, IGF-1\'s effect on follicles is hormonal-context-independent — it prolongs the anagen phase in both androgen-sensitive and androgen-independent follicles.',
    mechanism: 'IGF-1R in dermal papilla cells → upregulation of anagen-promoting genes (VEGF, FGF-7) → prolonged growth phase and follicle enlargement → increased hair shaft diameter and density',
    timeline: '8–16 weeks for measurable anagen prolongation and follicle improvement; 4–6 months for visible hair density changes',
    dosageNote: 'Systemic dosing at 20–50 mcg/day provides follicle benefits throughout the body. No specific topical IGF-1 product is established; topical GHK-Cu is preferred for targeted follicle work.',
    synergisticPeptides: ['GHK-Cu', 'BPC-157', 'TB-500'],
  },
  {
    id: 'bone',
    label: 'Bone Structure',
    icon: <Bone className="w-5 h-5" />,
    color: 'text-violet-400',
    borderColor: 'border-violet-500/40',
    relevance: 70,
    howItWorks: 'Facial bone density and structure is a primary determinant of long-term facial appearance. As IGF-1 declines with age, bone mineral density decreases, causing the subtle facial skeleton shrinkage that contributes to hollow cheeks, reduced jaw prominence, and orbital changes. IGF-1 LR3 supports osteoblast activity and bone mineral density maintenance.',
    mechanism: 'IGF-1R on osteoblasts → increased osteoblast proliferation and activity → enhanced bone matrix formation → preservation of facial bone structure and density over time',
    timeline: 'Bone remodeling is slow — 6–18 months for measurable bone density changes. This is a long-term longevity benefit rather than short-term appearance change.',
    dosageNote: 'Bone density benefits require consistent use at 20–50 mcg/day over 6+ months. Acromegaly-type jaw growth does NOT occur at these research appearance doses.',
    synergisticPeptides: ['Epithalon', 'CJC-1295/Ipamorelin', 'Vitamin D3 + K2'],
  },
  {
    id: 'wound',
    label: 'Wound Healing',
    icon: <HeartPulse className="w-5 h-5" />,
    color: 'text-teal-400',
    borderColor: 'border-teal-500/40',
    relevance: 85,
    howItWorks: 'IGF-1 is one of the primary growth factors in wound healing — it is secreted by platelets and macrophages at wound sites. Elevated systemic IGF-1 from LR3 improves healing speed and scar quality. For appearance, this means acne scarring, surgical scars, and any skin damage heals with less visible scarring.',
    mechanism: 'IGF-1 in wound environment → keratinocyte migration and proliferation → fibroblast collagen deposition → angiogenesis → faster wound closure and improved scar remodeling',
    timeline: 'Active wound healing improvement: 2–4 weeks. Scar quality improvement vs baseline: 4–8 weeks.',
    dosageNote: '20–50 mcg/day systemically accelerates all healing processes. For targeted post-procedure recovery (after microneedling, laser, etc.), timing injections around procedures maximizes benefit.',
    synergisticPeptides: ['BPC-157', 'GHK-Cu', 'TB-500'],
  },
  {
    id: 'hormone',
    label: 'Hormone Axis',
    icon: <Activity className="w-5 h-5" />,
    color: 'text-cyan-300',
    borderColor: 'border-cyan-400/40',
    relevance: 75,
    howItWorks: 'IGF-1 LR3 interacts with the GH/IGF-1 axis — the central hormonal system governing tissue growth, repair, and metabolism. Elevated IGF-1 from LR3 provides direct receptor stimulation independent of GH, creating a complementary effect alongside GH secretagogues (CJC-1295/Ipamorelin) that stimulate your own GH production.',
    mechanism: 'IGF-1 LR3 bypasses IGF-1 binding proteins (IGFBP) that limit natural IGF-1 activity → direct receptor activation → downstream anabolic and repair effects with 20+ hour half-life vs natural IGF-1\'s 15-minute half-life',
    timeline: 'Immediate receptor activation; sustained effects for 20+ hours post-injection; axis optimization requires 4–8 weeks of consistent use',
    dosageNote: 'IGF-1 LR3 vs GH secretagogues: LR3 is direct, faster, and more potent per mcg. GH secretagogues are safer for long-term use as they preserve the natural GH pulse. Both can be combined at lower doses for a comprehensive approach.',
    synergisticPeptides: ['CJC-1295/Ipamorelin', 'Ibutamoren (MK-677)', 'Epithalon'],
  },
];

export default function Igf1EffectsMap() {
  const [selectedArea, setSelectedArea] = useState<string>('collagen');

  const selected = AREAS.find((a) => a.id === selectedArea) ?? AREAS[0];

  return (
    <div className="glass-card p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-100">IGF-1 LR3 Appearance Effects Map</h3>
      <p className="text-slate-400 text-sm">Select an area to explore how IGF-1 LR3 affects it.</p>

      {/* Area Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {AREAS.map((area) => (
          <button
            key={area.id}
            onClick={() => setSelectedArea(area.id)}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all text-sm font-medium ${
              selectedArea === area.id
                ? `${area.borderColor} bg-cyan-500/10 ${area.color}`
                : 'border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-slate-300'
            }`}
          >
            <span className={selectedArea === area.id ? area.color : 'text-slate-500'}>{area.icon}</span>
            <span className="text-center text-xs leading-tight">{area.label}</span>
          </button>
        ))}
      </div>

      {/* Relevance Bar */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Relevance to Appearance</span>
          <span className={`font-bold ${selected.color}`}>{selected.relevance}%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 transition-all duration-500"
            style={{ width: `${selected.relevance}%` }}
          />
        </div>
      </div>

      {/* Detail Panel */}
      <div className={`border rounded-xl p-5 space-y-4 ${selected.borderColor} bg-slate-900/50`}>
        <div className="flex items-center gap-2">
          <span className={selected.color}>{selected.icon}</span>
          <h4 className={`text-base font-bold ${selected.color}`}>{selected.label}</h4>
        </div>

        <div>
          <span className="text-slate-500 text-xs uppercase tracking-wide">How IGF-1 LR3 Affects This Area</span>
          <p className="text-slate-200 text-sm mt-1 leading-relaxed">{selected.howItWorks}</p>
        </div>

        <div>
          <span className="text-slate-500 text-xs uppercase tracking-wide">Specific Mechanism</span>
          <p className="text-slate-400 text-sm mt-1 font-mono text-xs leading-relaxed">{selected.mechanism}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">Timeline</span>
            <p className={`text-sm mt-1 font-medium ${selected.color}`}>{selected.timeline}</p>
          </div>
          <div>
            <span className="text-slate-500 text-xs uppercase tracking-wide">Dosage Note</span>
            <p className="text-slate-300 text-sm mt-1">{selected.dosageNote}</p>
          </div>
        </div>

        <div>
          <span className="text-slate-500 text-xs uppercase tracking-wide">Best Paired With</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected.synergisticPeptides.map((p) => (
              <span key={p} className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-500 text-xs text-center">For research purposes only. Consult a qualified physician before use.</p>
    </div>
  );
}
