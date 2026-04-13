'use client';

import { useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

type ScarType = 'acne' | 'surgical' | 'keloid' | 'stretch' | 'burn' | null;
type ScarAge = 'recent' | 'established' | 'old' | null;

interface Protocol {
  headline: string;
  injectionMethod: string;
  dose: string;
  frequency: string;
  expectedDuration: string;
  comboPeptides: string[];
  difficulty: 'easy' | 'moderate' | 'hard';
  notes: string;
  mechanismFocus: string;
}

const protocols: Record<NonNullable<ScarType>, Record<NonNullable<ScarAge>, Protocol>> = {
  acne: {
    recent: {
      headline: 'Fresh Acne Scar Protocol',
      injectionMethod: 'Subcutaneous (abdominal or thigh) — systemic route to address active acne and gut-skin axis simultaneously',
      dose: '250–500mcg BPC-157',
      frequency: 'Daily or 5x/week SC',
      expectedDuration: '4–8 weeks for initial scar formation prevention; 3–4 months for early atrophic scar filling',
      comboPeptides: ['GHK-Cu 1mg topical (to healed lesion sites)', 'TB-500 (optional, 2.5mg 2x/week for larger areas)'],
      difficulty: 'easy',
      notes: 'Starting BPC-157 before scars fully form is the most effective strategy. Active acne lesions treated with BPC-157 heal with reduced scar depth. GHK-Cu topical applied to healing (not active inflamed) lesions improves cosmetic outcome.',
      mechanismFocus: 'Gut-skin axis repair → reduces active breakouts creating new scars. Angiogenesis and anti-inflammatory effects improve healing quality of current lesions.',
    },
    established: {
      headline: 'Established Acne Scar Protocol',
      injectionMethod: 'Dual route: SC systemic (gut-skin axis) + local intradermal near scar sites',
      dose: 'Systemic: 250–500mcg SC | Local: 100–200mcg diluted, injected adjacent to scar clusters',
      frequency: 'Systemic 5x/week; local 2x/week near scar sites',
      expectedDuration: '3–5 months for measurable scar improvement; 6 months for optimal cosmetic result',
      comboPeptides: ['GHK-Cu 1–2mg topical on scars AM + PM', 'TB-500 2.5mg 2x/week (if large scar area)', 'Epithalon (optional, quarterly cycle for cellular skin renewal)'],
      difficulty: 'moderate',
      notes: 'Established atrophic acne scars require both systemic (addressing ongoing inflammation) and local (direct tissue remodeling) approaches for best results. GHK-Cu topical on scar surface synergizes with BPC-157\'s angiogenesis from below.',
      mechanismFocus: 'Fibroblast activation for collagen fill of atrophic pits. Angiogenesis improves blood supply to scar tissue. Type III → Type I collagen remodeling improves texture.',
    },
    old: {
      headline: 'Old Acne Scar Protocol',
      injectionMethod: 'Local injection directly into or adjacent to scar tissue — systemic route has diminished effect on old fibrotic scars',
      dose: '200–300mcg BPC-157 in diluted form, injected adjacent to each scar cluster',
      frequency: '2–3x/week local; optional systemic 250mcg 3x/week as support',
      expectedDuration: '4–6 months for first visible improvement; 9–12 months for maximum remodeling of old scars',
      comboPeptides: ['GHK-Cu 2mg topical concentrated application to scar surface', 'TB-500 2.5mg 2x/week for broad coverage', 'CJC-1295/Ipamorelin (optional, for systemic collagen support)'],
      difficulty: 'hard',
      notes: 'Old acne scars have established fibrotic structure with poor blood supply. Local injection delivers BPC-157 directly to the avascular scar tissue. Results require patience — 6+ months minimum. Combination with microneedling (professionally performed) can enhance peptide delivery into old scars.',
      mechanismFocus: 'Local angiogenesis creates new blood vessels in avascular scar. Fibroblast activation begins collagen remodeling. Old scars respond slower but do respond to sufficient intervention.',
    },
  },
  surgical: {
    recent: {
      headline: 'Fresh Surgical Scar Protocol',
      injectionMethod: 'SC systemic (near incision site if possible) — start within 24–72 hours post-surgery ideally',
      dose: '500mcg BPC-157 SC',
      frequency: 'Daily during active healing phase (first 4–6 weeks post-surgery)',
      expectedDuration: '4–6 weeks for significantly improved healing quality; 3–4 months for scar maturation with improved cosmetics',
      comboPeptides: ['GHK-Cu 1mg topical — apply once wound is closed (not to open wound)', 'TB-500 2.5mg 2x/week for systemic healing support'],
      difficulty: 'easy',
      notes: 'Starting BPC-157 before or immediately after surgery produces the most dramatic cosmetic improvement. Research in animal models shows significantly reduced scar formation and faster healing. GHK-Cu topical should only be applied once the wound is closed and sutures are removed — not to open wounds.',
      mechanismFocus: 'Early angiogenesis ensures proper wound oxygen supply. Anti-inflammatory regulation of TGF-β reduces hypertrophic scar tendency. Organized type I collagen deposition from start produces flatter, better-matched scars.',
    },
    established: {
      headline: 'Established Surgical Scar Protocol',
      injectionMethod: 'Local injection adjacent to scar + systemic SC',
      dose: 'Local: 200–300mcg adjacent to scar line | Systemic: 250mcg SC',
      frequency: 'Local 2x/week; systemic 3–5x/week',
      expectedDuration: '3–4 months for visible softening and color normalization; 6 months for significant improvement',
      comboPeptides: ['GHK-Cu 1–2mg topical along scar line AM + PM', 'Silicone sheets combined with topical GHK-Cu (silicone improves GHK-Cu penetration)'],
      difficulty: 'moderate',
      notes: 'Established surgical scars (3–12 months old) are still in the remodeling phase — BPC-157 and GHK-Cu can redirect collagen remodeling toward a more cosmetically favorable outcome. Local injection directly adjacent to the scar line is more effective than systemic alone at this stage.',
      mechanismFocus: 'Collagen remodeling from type III to type I. Scar tissue vascularization improvement (reduces redness). Anti-inflammatory to reduce ongoing TGF-β driven scar thickening.',
    },
    old: {
      headline: 'Old Surgical Scar Protocol',
      injectionMethod: 'Local subcutaneous along entire scar length — systemic provides limited benefit for mature fibrous scars',
      dose: '200–300mcg BPC-157 in diluted form, injected in multiple points along scar',
      frequency: '2x/week local injection protocol',
      expectedDuration: '6–9 months for visible improvements; may not fully resolve thick mature scars',
      comboPeptides: ['GHK-Cu 2mg topical concentrated — apply with massage to improve penetration', 'TB-500 2.5mg 2x/week for large scar areas', 'CJC-1295/Ipamorelin for systemic collagen support'],
      difficulty: 'hard',
      notes: 'Mature surgical scars (1+ years) have limited vascularity and established fibrotic organization. Local injection targets the scar directly. Results are real but slower than fresh scar treatment. Professional treatments (laser, microneedling) can be combined with BPC-157 protocol for enhanced results.',
      mechanismFocus: 'Introducing angiogenesis into avascular mature scar. Gradually remodeling the rigid type I collagen matrix. Long-term collagen quality improvement.',
    },
  },
  keloid: {
    recent: {
      headline: 'Fresh Keloid Prevention Protocol',
      injectionMethod: 'SC systemic — addressing TGF-β excess before keloid fully establishes',
      dose: '500mcg BPC-157 SC daily',
      frequency: 'Daily during first 8 weeks post-wound or surgery',
      expectedDuration: '8–12 weeks prevention window; start immediately after wound for best results',
      comboPeptides: ['GHK-Cu 1mg topical once wound is closed', 'TB-500 2.5mg 2x/week to help organize collagen properly from start'],
      difficulty: 'moderate',
      notes: 'Keloid-prone individuals (personal or family history) should start BPC-157 immediately after any wound or surgery. BPC-157 reduces TGF-β1 overactivity — the primary driver of excessive collagen deposition in keloids. This is a preventative protocol — once keloids are established, treatment is much more difficult.',
      mechanismFocus: 'TGF-β1 normalization prevents excessive collagen deposition. Proper angiogenesis ensures organized healing. Early type I collagen dominance prevents chaotic type III keloid matrix.',
    },
    established: {
      headline: 'Established Keloid Protocol',
      injectionMethod: 'Local intralesional injection directly into keloid + systemic SC',
      dose: 'Intralesional: 200–300mcg BPC-157 directly into keloid | Systemic: 250–500mcg SC',
      frequency: 'Intralesional 1–2x/week (not more — allow inflammation to settle); systemic 5x/week',
      expectedDuration: '6–12 months for meaningful size/texture reduction; keloids are among the most treatment-resistant scar types',
      comboPeptides: ['GHK-Cu 1mg topical on keloid surface', 'TB-500 2.5mg 2x/week for anti-inflammatory systemic support'],
      difficulty: 'hard',
      notes: 'Established keloids are challenging to treat with any modality. BPC-157 intralesional injection addresses TGF-β excess directly within the keloid. Combine with medical treatment if available (corticosteroid injection, silicone sheeting). BPC-157 is not a standalone cure for large keloids — it is a supportive protocol that can produce measurable improvement over months.',
      mechanismFocus: 'TGF-β suppression reduces further keloid growth. Intralesional angiogenesis may reduce keloid density over time. Anti-inflammatory reduces the ongoing stimulus for keloid expansion.',
    },
    old: {
      headline: 'Old Keloid Protocol',
      injectionMethod: 'Intralesional injection protocol with systemic SC support',
      dose: 'Intralesional: 200–300mcg in multiple injection points throughout keloid',
      frequency: '1x/week intralesional (keloids are sensitive — avoid over-traumatization); systemic 3–5x/week',
      expectedDuration: '12+ months for meaningful improvement of old established keloids',
      comboPeptides: ['GHK-Cu topical for surface texture improvement', 'TB-500 for broader anti-inflammatory support'],
      difficulty: 'hard',
      notes: 'Old keloids have a firm, organized structure and established abnormal vasculature. This is the most challenging scar type to treat. Medical consultation strongly recommended alongside peptide protocols. BPC-157 can contribute to improvement over 12+ months but should be combined with professional treatments for best outcomes.',
      mechanismFocus: 'Long-term TGF-β modulation to halt further growth. Gradual collagen reorganization within keloid body. Anti-inflammatory to reduce pruritus (itching) as early functional benefit.',
    },
  },
  stretch: {
    recent: {
      headline: 'Fresh Stretch Mark Protocol',
      injectionMethod: 'SC systemic — stretch marks are caused by dermal tearing; systemic collagen support is primary intervention',
      dose: '250–500mcg BPC-157 SC',
      frequency: 'Daily during active stretch mark formation phase',
      expectedDuration: '6–12 weeks for prevention of progression; 3–4 months for new stretch mark improvement',
      comboPeptides: ['GHK-Cu 1–2mg topical directly on stretch mark areas AM + PM', 'CJC-1295/Ipamorelin for broad collagen production support'],
      difficulty: 'easy',
      notes: 'Fresh (red/purple) stretch marks represent active dermal tearing and inflammation — this is the optimal treatment window. Systemic BPC-157 drives angiogenesis and collagen production throughout the body including stretch mark areas. Topical GHK-Cu penetrates the compromised skin barrier better in fresh stretch marks than old ones.',
      mechanismFocus: 'Collagen I and III synthesis in dermis of stretch mark area. Angiogenesis restores blood supply to stretch mark tissue. Anti-inflammatory reduces the ongoing inflammatory stretch phase.',
    },
    established: {
      headline: 'Established Stretch Mark Protocol',
      injectionMethod: 'Systemic SC primary; local SC injection adjacent to stretch marks for direct delivery',
      dose: 'Systemic: 500mcg SC | Local: 200mcg adjacent to worst areas',
      frequency: 'Systemic 5x/week; local 2x/week to target areas',
      expectedDuration: '4–6 months for visible improvement; 9–12 months for optimal results',
      comboPeptides: ['GHK-Cu 2mg topical to all stretch mark areas AM + PM', 'TB-500 2.5mg 2x/week for large coverage areas (thighs, abdomen)', 'CJC-1295/Ipamorelin for GH-driven collagen production'],
      difficulty: 'moderate',
      notes: 'Established silver/white stretch marks represent fully healed dermal tears with permanent collagen disruption. Improvement is possible but requires sustained high-intensity protocols. GHK-Cu topical is particularly important — its collagen synthesis and angiogenesis effects improve the dermal architecture visible through the stretched skin.',
      mechanismFocus: 'Dermal collagen density improvement improves stretch mark texture and color. Angiogenesis improves pigmentation normalization. Sustained collagen synthesis gradually fills the dermal deficit.',
    },
    old: {
      headline: 'Old Stretch Mark Protocol',
      injectionMethod: 'Systemic SC + high-concentration topical — older marks require sustained intervention',
      dose: 'Systemic: 500mcg SC | GHK-Cu 2mg topical',
      frequency: 'Systemic 5x/week; topical twice daily',
      expectedDuration: '9–12+ months for meaningful improvement of old stretch marks; expect 30–50% improvement not full resolution',
      comboPeptides: ['GHK-Cu 2mg topical concentrated twice daily', 'TB-500 2.5mg 2x/week', 'CJC-1295/Ipamorelin ongoing for collagen support'],
      difficulty: 'hard',
      notes: 'Very old stretch marks (1+ years, fully white/silver) have a fully established dermal scar structure. Improvement is possible — skin texture, color normalization, and reduced visual contrast — but complete resolution is unlikely with any non-surgical intervention. Set expectations accordingly: meaningful improvement, not perfection.',
      mechanismFocus: 'Long-term dermal collagen rebuilding. Gradual angiogenesis normalizing skin color. Cumulative GHK-Cu effects produce visible texture improvement over months.',
    },
  },
  burn: {
    recent: {
      headline: 'Fresh Burn Scar Protocol',
      injectionMethod: 'SC systemic — BPC-157 burn research is primarily systemic route; start as soon as medically appropriate',
      dose: '500mcg BPC-157 SC',
      frequency: 'Daily during acute healing phase',
      expectedDuration: '6–12 weeks for significantly improved healing quality vs untreated; ongoing for scar cosmetics',
      comboPeptides: ['TB-500 2.5mg 2x/week (well-studied for burn tissue repair)', 'GHK-Cu topical once wound is closed and epithelialized'],
      difficulty: 'moderate',
      notes: 'BPC-157 has demonstrated significant benefits in burn wound animal models — faster epithelialization, improved angiogenesis, and reduced inflammation. Do NOT apply anything to open burn wounds — wait until wound is closed. Consult medical care for significant burns before starting any peptide protocol. BPC-157 is a supportive adjunct to, not a replacement for, proper burn wound medical management.',
      mechanismFocus: 'Angiogenesis accelerates epithelialization in burn wound. Anti-inflammatory cytokine regulation reduces excessive inflammation. TB-500 Tβ4 sequence specifically studied for burn wound healing.',
    },
    established: {
      headline: 'Established Burn Scar Protocol',
      injectionMethod: 'Systemic SC + local injection adjacent to hypertrophic scar areas if present',
      dose: 'Systemic: 500mcg SC | Local: 200–300mcg adjacent to scar',
      frequency: 'Systemic 5x/week; local 2x/week',
      expectedDuration: '4–6 months for measurable scar improvement; 9–12 months for optimal cosmetic result',
      comboPeptides: ['GHK-Cu 1–2mg topical on scar surface', 'TB-500 2.5mg 2x/week', 'Epithalon quarterly cycle for cellular repair'],
      difficulty: 'moderate',
      notes: 'Burn scars often have a hypertrophic component (raised, red) due to excessive TGF-β activity during healing. BPC-157 addresses TGF-β normalization (same mechanism as keloid prevention). Combine with silicone sheeting and pressure garments as medical standard of care.',
      mechanismFocus: 'TGF-β modulation to normalize excessive scar tissue. Collagen remodeling from type III toward type I. Angiogenesis normalization reduces scar redness.',
    },
    old: {
      headline: 'Old Burn Scar Protocol',
      injectionMethod: 'Local injection into or adjacent to burn scar + systemic SC support',
      dose: 'Local: 200–300mcg adjacent to scar tissue | Systemic: 250–500mcg SC',
      frequency: 'Local 2x/week; systemic 3–5x/week',
      expectedDuration: '9–12+ months for meaningful improvement; old burn scars are among the most permanent scar types',
      comboPeptides: ['GHK-Cu 2mg topical concentrated', 'TB-500 2.5mg 2x/week', 'CJC-1295/Ipamorelin for broad collagen and tissue support'],
      difficulty: 'hard',
      notes: 'Old burn scars with established contracture or pigmentation changes are among the most resistant to treatment. Peptide protocols can produce meaningful improvements in texture, flexibility, and color normalization over a 12-month sustained protocol. For extensive or contracture-causing scars, surgical or laser treatment combined with peptides offers better outcomes than peptides alone.',
      mechanismFocus: 'Long-term scar tissue vascularization improvement. Gradual collagen remodeling. Skin flexibility improvement as type I collagen quality improves.',
    },
  },
};

const scarTypes = [
  { value: 'acne' as ScarType, label: 'Acne Scars', emoji: '🔴', desc: 'Pitted atrophic scars from acne' },
  { value: 'surgical' as ScarType, label: 'Surgical Scar', emoji: '🔪', desc: 'Post-incision surgical scars' },
  { value: 'keloid' as ScarType, label: 'Keloid / Raised', emoji: '📈', desc: 'Raised, hypertrophic or keloid' },
  { value: 'stretch' as ScarType, label: 'Stretch Marks', emoji: '↔️', desc: 'Striae from rapid stretching' },
  { value: 'burn' as ScarType, label: 'Burn Scar', emoji: '🔥', desc: 'Burns and heat damage scars' },
];

const scarAges = [
  { value: 'recent' as ScarAge, label: 'Recent', sub: '< 3 months', color: 'border-emerald-500/40 text-emerald-400' },
  { value: 'established' as ScarAge, label: 'Established', sub: '3–12 months', color: 'border-amber-500/40 text-amber-400' },
  { value: 'old' as ScarAge, label: 'Old', sub: '1+ years', color: 'border-rose-500/40 text-rose-400' },
];

const difficultyConfig = {
  easy: { label: 'Favorable', color: 'text-emerald-400', bg: 'bg-emerald-500/20', bar: 'bg-emerald-500', width: '33%' },
  moderate: { label: 'Moderate', color: 'text-amber-400', bg: 'bg-amber-500/20', bar: 'bg-amber-500', width: '66%' },
  hard: { label: 'Challenging', color: 'text-rose-400', bg: 'bg-rose-500/20', bar: 'bg-rose-500', width: '100%' },
};

export default function ScarTypeProtocol() {
  const [step, setStep] = useState(1);
  const [scarType, setScarType] = useState<ScarType>(null);
  const [scarAge, setScarAge] = useState<ScarAge>(null);

  const protocol = scarType && scarAge ? protocols[scarType][scarAge] : null;
  const diff = protocol ? difficultyConfig[protocol.difficulty] : null;

  const reset = () => {
    setStep(1);
    setScarType(null);
    setScarAge(null);
  };

  return (
    <div className="rounded-xl bg-gray-50 border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Scar Protocol Selector</h3>
          <p className="text-gray-600 text-sm">Select scar type and age for your personalized BPC-157 protocol</p>
        </div>
        {step > 1 && (
          <button onClick={reset} className="text-gray-600 hover:text-gray-800 flex items-center gap-1 text-sm">
            <RotateCcw className="w-4 h-4" /> Restart
          </button>
        )}
      </div>

      {/* Progress */}
      <div className="flex gap-1 px-5 pt-5">
        {[1, 2, 3].map(s => (
          <div key={s} className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${s <= step ? 'bg-emerald-500' : 'bg-white'}`} />
        ))}
      </div>

      <div className="p-5 space-y-5">
        {/* Step 1: Scar Type */}
        {step === 1 && (
          <div>
            <p className="text-gray-900 font-semibold mb-4">Step 1: Select your scar type</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scarTypes.map(st => (
                <button
                  key={st.value}
                  onClick={() => { setScarType(st.value); setStep(2); }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-left"
                >
                  <span className="text-2xl">{st.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{st.label}</div>
                    <div className="text-xs text-gray-600">{st.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Scar Age */}
        {step === 2 && (
          <div>
            <p className="text-gray-600 text-sm mb-1">
              Scar type: <span className="text-emerald-400">{scarTypes.find(s => s.value === scarType)?.label}</span>
            </p>
            <p className="text-gray-900 font-semibold mb-4">Step 2: How old is the scar?</p>
            <div className="flex flex-col gap-3">
              {scarAges.map(sa => (
                <button
                  key={sa.value}
                  onClick={() => { setScarAge(sa.value); setStep(3); }}
                  className={`flex items-center justify-between p-4 rounded-xl border bg-gray-50 hover:bg-gray-50 transition-all ${sa.color}`}
                >
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{sa.label}</div>
                    <div className="text-xs text-gray-600">{sa.sub}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Protocol */}
        {step === 3 && protocol && diff && (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-600 mb-1">Your personalized protocol:</p>
              <h4 className="text-lg font-bold text-gray-900">{protocol.headline}</h4>
            </div>

            {/* Treatment Difficulty */}
            <div className={`rounded-xl border p-4 ${diff.bg} border-current/20`}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">Treatment Difficulty</p>
                <span className={`text-sm font-bold ${diff.color}`}>{diff.label}</span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${diff.bar}`} style={{ width: diff.width }} />
              </div>
            </div>

            {/* Mechanism Focus */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Mechanism Focus</p>
              <p className="text-sm text-gray-800">{protocol.mechanismFocus}</p>
            </div>

            {/* Protocol Details Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Injection Method</p>
                <p className="text-sm text-gray-800">{protocol.injectionMethod}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Dose</p>
                <p className="text-sm text-gray-800">{protocol.dose}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Frequency</p>
                <p className="text-sm text-gray-800">{protocol.frequency}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Expected Duration</p>
                <p className="text-sm text-gray-800">{protocol.expectedDuration}</p>
              </div>
            </div>

            {/* Combo Peptides */}
            <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4">
              <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">Combination Peptides</p>
              <ul className="space-y-1">
                {protocol.comboPeptides.map((p) => (
                  <li key={p} className="text-sm text-gray-800 flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 text-xs">+</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div className="bg-amber-900/20 border border-amber-500/20 rounded-xl p-4">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">Protocol Notes</p>
              <p className="text-sm text-gray-800 leading-relaxed">{protocol.notes}</p>
            </div>

            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2 w-full justify-center"
            >
              Source BPC-157 & GHK-Cu <ArrowRight className="w-4 h-4" />
            </a>

            <button onClick={reset} className="w-full text-gray-600 hover:text-gray-800 text-sm flex items-center justify-center gap-1 py-1">
              <RotateCcw className="w-4 h-4" /> Start Over
            </button>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center">
          For research purposes only. Not medical advice. Consult a healthcare professional.
        </p>
      </div>
    </div>
  );
}
