'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

type Goal = 'skin' | 'weight' | 'energy' | 'healing' | 'gut';
type AgeRange = '20s' | '30s' | '40s' | '50plus';

interface PeptideRec {
  name: string;
  dose: string;
  note: string;
}

interface GuideResult {
  peptides: PeptideRec[];
  rationale: string;
  safetyNotes: string[];
  monitor: string[];
}

const recommendations: Record<Goal, Record<AgeRange, GuideResult>> = {
  skin: {
    '20s': {
      peptides: [
        { name: 'GHK-Cu (topical)', dose: 'Apply 1–2× daily to face/neck', note: 'Best preventative anti-aging peptide — starts rebuilding collagen baseline early' },
        { name: 'BPC-157', dose: '250mcg/day SC (optional)', note: 'Systemic collagen support and gut health improvement reflects positively on skin' },
      ],
      rationale: 'In your 20s, the goal is prevention and optimization. Topical GHK-Cu stimulates collagen production proactively, before significant loss begins. No hormonal considerations at this age.',
      safetyNotes: ['GHK-Cu is non-hormonal — completely safe for reproductive-age women', 'No interaction with oral contraceptives', 'Can be combined safely with retinol skincare'],
      monitor: ['Skin texture and tone (photos monthly)', 'Any topical irritation (rare)'],
    },
    '30s': {
      peptides: [
        { name: 'GHK-Cu (topical + injection)', dose: 'Topical daily + 1mg SC 3×/week', note: 'Dual application maximizes collagen synthesis as natural production starts declining' },
        { name: 'SNAP-8 (topical)', dose: 'Apply to expression lines daily', note: 'Targets dynamic wrinkles — Botox-like mechanism without injections' },
      ],
      rationale: 'Collagen production begins declining noticeably in the 30s. Upgrading to combined topical + subcutaneous GHK-Cu delivers systemic and local effects. SNAP-8 addresses expression lines forming around eyes and forehead.',
      safetyNotes: ['Safe with all forms of hormonal contraception', 'SNAP-8 topical has zero systemic absorption', 'GHK-Cu injection well-tolerated — occasional mild bruising at injection site'],
      monitor: ['Collagen density (skin plumpness)', 'Expression line depth', 'Hair thickness (GHK-Cu also supports scalp health)'],
    },
    '40s': {
      peptides: [
        { name: 'GHK-Cu', dose: '1–2mg/day SC injection', note: 'Primary anti-aging peptide — gene expression reset toward younger profile is most impactful at this stage' },
        { name: 'Epithalon', dose: '5–10mg per 10-day cycle, 2× yearly', note: 'Telomere lengthening and circadian reset — addresses root causes of visible aging at cellular level' },
      ],
      rationale: 'The 40s bring accelerated skin aging alongside perimenopause hormonal shifts. Epithalon addresses circadian dysfunction (poor sleep worsens skin aging) while GHK-Cu provides direct collagen stimulus.',
      safetyNotes: ['Epithalon safe during perimenopause — no estrogen/progesterone interaction', 'Both peptides non-hormonal', 'Check with physician if on hormone replacement therapy'],
      monitor: ['Sleep quality (Epithalon effect)', 'Skin elasticity and hydration', 'Energy levels and circadian rhythm normalization'],
    },
    '50plus': {
      peptides: [
        { name: 'GHK-Cu', dose: '2mg/day SC injection', note: 'Most important anti-aging peptide post-menopause when estrogen-driven collagen support drops sharply' },
        { name: 'Epithalon', dose: '10mg per 10-day cycle, 2–3× yearly', note: 'Telomere protection and hormonal circadian reset critical post-menopause' },
        { name: 'BPC-157', dose: '500mcg/day SC', note: 'Supports joint collagen (cartilage), gut health, and systemic repair that becomes critical after 50' },
      ],
      rationale: 'Post-menopausal skin aging accelerates as estrogen (which drives collagen production) drops sharply. GHK-Cu partially compensates by directly stimulating collagen synthesis independent of estrogen. This is the most comprehensive stack for this demographic.',
      safetyNotes: ['All three peptides are non-estrogenic — no interference with post-menopausal hormone status', 'Safe alongside HRT if prescribed', 'No known drug interactions with common post-menopausal medications'],
      monitor: ['Skin thickness and elasticity (improves over months)', 'Joint pain and mobility', 'Sleep quality'],
    },
  },
  weight: {
    '20s': {
      peptides: [
        { name: 'Semaglutide (GLP-1)', dose: '0.25mg/wk → titrate to 1mg/wk', note: 'Most effective fat loss peptide — clinical trials show 15% body weight reduction' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg/100mcg nightly', note: 'Protects lean muscle during GLP-1 caloric deficit — prevents the "skinny fat" outcome' },
      ],
      rationale: 'Young women tolerate GLP-1 peptides very well. Titrating slowly minimizes nausea. The GH secretagogue addition is critical to prevent lean muscle loss during the aggressive caloric deficit GLP-1s create.',
      safetyNotes: ['Semaglutide not recommended during pregnancy — use reliable contraception', 'GLP-1 peptides may reduce oral contraceptive absorption during nausea phase — use backup contraception', 'Start at lowest dose and titrate slowly'],
      monitor: ['Weight and body composition monthly', 'Lean mass (DEXA scan ideal)', 'GI side effects (nausea, constipation)'],
    },
    '30s': {
      peptides: [
        { name: 'Tirzepatide (GIP/GLP-1)', dose: '2.5mg/wk → titrate to 10mg/wk', note: 'Dual agonist outperforms semaglutide by ~7% additional weight loss — ideal for stubborn post-pregnancy fat' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg/100mcg nightly', note: 'Sleep improvement and muscle preservation — particularly valuable for busy mothers with disrupted sleep' },
      ],
      rationale: 'The 30s often bring post-pregnancy weight and hormonal body composition shifts. Tirzepatide addresses the metabolic component while the GH stack improves sleep (often disrupted with young children) and body composition.',
      safetyNotes: ['Not for use while breastfeeding', 'Allow 12 weeks after stopping breastfeeding before starting GLP-1s', 'Thyroid function should be monitored — GLP-1s have rare associations with thyroid changes'],
      monitor: ['Thyroid function (TSH) at baseline and 6 months', 'Lean mass preservation', 'Menstrual cycle regularity'],
    },
    '40s': {
      peptides: [
        { name: 'Tirzepatide', dose: '2.5mg/wk → titrate to 10–15mg/wk', note: 'Most powerful for the perimenopause-related visceral fat that is particularly resistant to diet' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100–200mcg nightly', note: 'GH restoration addresses the age-related GH decline that drives fat gain in perimenopause' },
        { name: 'MOTS-c', dose: '10mg SC 3× weekly', note: 'AMPK activation improves insulin sensitivity that declines in perimenopause' },
      ],
      rationale: 'Perimenopausal fat redistribution (particularly visceral abdominal fat) is driven by declining estrogen AND declining GH. This three-pronged approach addresses all mechanisms simultaneously.',
      safetyNotes: ['All three peptides safe during perimenopause', 'MOTS-c improves insulin sensitivity — monitor if on blood sugar medications', 'CJC/Ipamorelin helps with perimenopausal sleep disturbance as a secondary benefit'],
      monitor: ['Visceral fat reduction (waist measurement)', 'Blood glucose and insulin sensitivity', 'Sleep quality'],
    },
    '50plus': {
      peptides: [
        { name: 'Tirzepatide', dose: '2.5mg/wk → titrate cautiously to 7.5–10mg', note: 'Post-menopausal metabolic rate drops significantly — GLP-1 caloric restriction is the primary fat loss lever' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg nightly (lower dose)', note: 'GH restoration critical post-menopause — most women have very low GH at this stage' },
      ],
      rationale: 'Post-menopause, metabolic rate drops and fat redistribution to visceral areas accelerates. Titrate tirzepatide conservatively due to increased sensitivity. GH peptide restores the anabolic and lipolytic signaling that estrogen partially provided.',
      safetyNotes: ['Slower titration recommended post-menopause (nausea more common)', 'Safe with most osteoporosis medications', 'Consult physician if on hormone replacement therapy'],
      monitor: ['Bone density (GLP-1 weight loss can affect bone density — ensure adequate calcium/D3)', 'Lean mass (DEXA)', 'Blood pressure'],
    },
  },
  energy: {
    '20s': {
      peptides: [
        { name: 'BPC-157', dose: '250–500mcg/day SC', note: 'Primary peptide for 20s energy issues — often driven by gut dysfunction, inflammation, or anxiety' },
        { name: 'GHK-Cu', dose: '1mg SC 3×/week', note: 'Gene expression reset improves mitochondrial function and cellular energy production' },
      ],
      rationale: 'Energy issues in 20s women are usually driven by gut dysfunction, chronic stress, or early metabolic issues. BPC-157 addresses the gut-brain axis and inflammation that drain energy.',
      safetyNotes: ['BPC-157 has no hormonal activity', 'Safe for women with PCOS', 'No interaction with birth control'],
      monitor: ['Energy levels and fatigue patterns', 'Sleep quality', 'Gut symptoms'],
    },
    '30s': {
      peptides: [
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg/100mcg nightly', note: 'Sleep quality improvement has the most dramatic effect on daytime energy — within 1–2 weeks' },
        { name: 'BPC-157', dose: '250–500mcg/day', note: 'Addresses adrenal and gut health components of low energy' },
      ],
      rationale: 'Women in their 30s often have energy issues driven by poor sleep quality (even if sleep quantity is adequate). CJC-1295/Ipamorelin transforms sleep architecture within weeks.',
      safetyNotes: ['Not for use during pregnancy or breastfeeding', 'Safe with most medications', 'GH secretagogues improve sleep — take exactly 30–60 minutes before bed'],
      monitor: ['Sleep quality (use sleep tracker)', 'Daytime energy and alertness', 'Exercise recovery'],
    },
    '40s': {
      peptides: [
        { name: 'Epithalon', dose: '5–10mg per 10-day cycle, 2× yearly', note: 'Circadian rhythm reset is the core driver of energy restoration in perimenopause' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100–200mcg nightly', note: 'GH restoration addresses the hormonal energy decline unique to the 40s' },
        { name: 'NAD+', dose: '300–500mg oral daily', note: 'Mitochondrial fuel — NAD+ declines parallel GH decline and contribute significantly to energy loss' },
      ],
      rationale: 'The 40s energy crash is multifactorial: declining GH, circadian dysregulation (perimenopausal sleep disruption), and mitochondrial decline. This stack addresses all three pathways.',
      safetyNotes: ['NAD+ safe for most women — very well tolerated', 'Epithalon should not be used more than 3× per year', 'CJC/Ipa should be used on non-training days too for maximum sleep benefit'],
      monitor: ['Sleep architecture quality', 'Daytime energy patterns', 'Exercise performance and recovery speed'],
    },
    '50plus': {
      peptides: [
        { name: 'Epithalon', dose: '10mg per 10-day cycle, 2–3× yearly', note: 'Most impactful for post-menopausal circadian dysregulation and energy' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg nightly', note: 'Critical for restoring the GH that partially drove energy in younger years' },
        { name: 'NAD+', dose: '500mg oral daily or 250mg IV equivalent', note: 'Mitochondrial restoration — most pronounced effects in 50s and beyond' },
      ],
      rationale: 'Post-menopausal energy decline is deep and multifactorial. Epithalon resets the aging pineal gland; NAD+ restores cellular ATP production; GH peptide rebuilds the anabolic environment that supported vitality.',
      safetyNotes: ['All three peptides safe post-menopause', 'Safe alongside common post-menopausal medications', 'IV NAD+ should be done at a clinic — oral NAD+ is a safe alternative'],
      monitor: ['Subjective energy and mood', 'Sleep duration and quality', 'Cognitive clarity'],
    },
  },
  healing: {
    '20s': {
      peptides: [
        { name: 'BPC-157', dose: '250–500mcg/day SC (or oral for gut)', note: 'Gold standard for healing at any age — heals tendons, gut, joints 2–4× faster' },
      ],
      rationale: 'For injury healing in young women, BPC-157 is the singular recommendation. No complex stacking needed — it works powerfully alone.',
      safetyNotes: ['No hormonal effects — completely safe', 'Oral BPC-157 preferred for gut injuries; SC injection preferred for musculoskeletal injuries', 'Safe alongside NSAIDs though peptide may reduce reliance on them'],
      monitor: ['Pain levels (expect reduction within 1–2 weeks)', 'Range of motion', 'Swelling and inflammation'],
    },
    '30s': {
      peptides: [
        { name: 'BPC-157', dose: '500mcg/day SC injection at or near injury site', note: 'Primary healing agent — also addresses postpartum tissue recovery excellently' },
        { name: 'GHK-Cu', dose: '1mg SC 3×/week', note: 'Accelerates wound healing and tissue remodeling alongside BPC-157' },
      ],
      rationale: 'Women in their 30s with injuries — particularly post-partum pelvic floor, C-section recovery (after full closure), or sports injuries — benefit significantly from BPC-157 + GHK-Cu stacking.',
      safetyNotes: ['Not for use during pregnancy', 'Post-partum use of BPC-157: wait for incisions to fully close', 'GHK-Cu injection site: choose away from healing wound'],
      monitor: ['Healing progress at injury site', 'Pain reduction timeline', 'Any signs of excessive scarring (GHK-Cu can help with this)'],
    },
    '40s': {
      peptides: [
        { name: 'BPC-157', dose: '500mcg/day SC', note: 'Chronically elevated inflammation in 40s responds very well to BPC-157 systemic anti-inflammatory effect' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg/100mcg nightly', note: 'GH is the master healing hormone — restoring it dramatically accelerates tissue repair at any age' },
      ],
      rationale: 'Healing slows significantly in the 40s. Adding GH secretagogue to BPC-157 addresses this — GH is the master anabolic/repair hormone, and restoring it accelerates the healing that BPC-157 initiates.',
      safetyNotes: ['Excellent safety profile for both peptides in perimenopausal women', 'BPC-157 particularly helpful for joint inflammation that worsens in perimenopause', 'No interaction with common anti-inflammatories'],
      monitor: ['Healing rate (compare to past injuries)', 'Chronic joint pain levels', 'Overall inflammation markers (CRP if available)'],
    },
    '50plus': {
      peptides: [
        { name: 'BPC-157', dose: '500mcg/day SC', note: 'Anti-inflammatory and healing — most impactful for the joint and tendon degeneration common post-menopause' },
        { name: 'GHK-Cu', dose: '2mg/day SC', note: 'Cartilage and connective tissue support — critical for the joint health that estrogen previously supported' },
        { name: 'CJC-1295 / Ipamorelin', dose: '100mcg nightly', note: 'GH restoration supports the tissue repair that hormonal decline has impaired' },
      ],
      rationale: 'Post-menopausal women often experience a surge in joint issues, tendon problems, and slow healing. The drop in estrogen removes its anti-inflammatory and collagen-supporting properties. This stack partially compensates.',
      safetyNotes: ['All three safe post-menopause and alongside HRT', 'BPC-157 may reduce reliance on NSAIDs — discuss with prescriber', 'Monitor bone density — BPC-157 supports but does not replace osteoporosis treatment'],
      monitor: ['Joint pain and mobility', 'Healing timeline after injuries', 'Bone density (DEXA annually)'],
    },
  },
  gut: {
    '20s': {
      peptides: [
        { name: 'BPC-157 (oral)', dose: '500mcg oral on empty stomach, twice daily', note: 'Heals leaky gut, reduces IBS symptoms, and supports the gut-brain axis — oral route ideal for gut-specific goals' },
      ],
      rationale: 'Gut health issues in young women (IBS, leaky gut, IBD) respond remarkably to oral BPC-157. It heals the gut lining directly and reduces systemic inflammation.',
      safetyNotes: ['Oral BPC-157 has no hormonal effects', 'Safe with most gut medications', 'May reduce reliance on PPIs or antacids over time'],
      monitor: ['Digestive symptoms (bloating, pain, regularity)', 'Energy levels (gut healing improves energy)', 'Food sensitivities (often reduce as gut heals)'],
    },
    '30s': {
      peptides: [
        { name: 'BPC-157 (oral)', dose: '500mcg oral twice daily', note: 'Primary gut healing agent' },
        { name: 'GHK-Cu', dose: '1mg SC 3×/week', note: 'Systemic anti-inflammatory and tissue repair — improves intestinal wall integrity alongside BPC-157' },
      ],
      rationale: 'Gut issues in the 30s are often compounded by stress (cortisol drives gut permeability) and potential postpartum gut changes. Adding GHK-Cu provides systemic tissue repair support.',
      safetyNotes: ['Not for use during pregnancy or breastfeeding', 'Safe with probiotics and gut health supplements', 'Monitor if on immunosuppressants (BPC-157 has immune-modulating properties)'],
      monitor: ['Gut symptom diary', 'Energy and mood (gut-brain axis improvement)', 'Skin (gut healing often reflects positively on skin)'],
    },
    '40s': {
      peptides: [
        { name: 'BPC-157', dose: '500mcg/day oral for gut, or SC for systemic effect', note: 'Addresses the increase in gut permeability and inflammation common in perimenopause' },
        { name: 'MOTS-c', dose: '5–10mg SC 2–3×/week', note: 'AMPK activation improves gut microbiome health and metabolic parameters that worsen in perimenopause' },
      ],
      rationale: 'Perimenopausal hormonal shifts significantly affect gut microbiome and intestinal permeability. This combination addresses the metabolic and healing dimensions of this gut dysregulation.',
      safetyNotes: ['MOTS-c dosing should start low (5mg) and increase gradually', 'Monitor blood glucose if diabetic or pre-diabetic (MOTS-c improves insulin sensitivity)', 'BPC-157 safe during perimenopause'],
      monitor: ['Gut symptoms', 'Blood glucose trends', 'Body composition (MOTS-c improves metabolic health broadly)'],
    },
    '50plus': {
      peptides: [
        { name: 'BPC-157', dose: '500mcg/day (oral or SC)', note: 'Gut healing and systemic anti-inflammation become increasingly important post-menopause' },
        { name: 'GHK-Cu', dose: '1–2mg/day SC', note: 'Anti-aging gene expression reset benefits gut epithelial cells and reduces systemic inflammation' },
      ],
      rationale: 'Post-menopausal gut health often deteriorates — increased intestinal permeability, changed microbiome composition, and reduced mucosal immunity. BPC-157 directly targets gut lining integrity.',
      safetyNotes: ['Both peptides safe post-menopause', 'Safe alongside common post-menopausal medications', 'BPC-157 may interact with NSAID metabolism — discuss with prescriber'],
      monitor: ['Digestive comfort and regularity', 'Systemic inflammation (CRP, ESR)', 'Energy and mood'],
    },
  },
};

const goalOptions: { value: Goal; label: string; emoji: string }[] = [
  { value: 'skin', label: 'Skin / Anti-Aging', emoji: '✨' },
  { value: 'weight', label: 'Weight Management', emoji: '⚖️' },
  { value: 'energy', label: 'Energy & Hormones', emoji: '⚡' },
  { value: 'healing', label: 'Healing an Injury', emoji: '🩹' },
  { value: 'gut', label: 'Gut Health', emoji: '🌿' },
];

const ageOptions: { value: AgeRange; label: string }[] = [
  { value: '20s', label: '20s (20–29)' },
  { value: '30s', label: '30s (30–39)' },
  { value: '40s', label: '40s (40–49)' },
  { value: '50plus', label: '50s+ (50 and over)' },
];

export default function WomensPeptideGuide() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [age, setAge] = useState<AgeRange | null>(null);

  const result = goal && age ? recommendations[goal][age] : null;

  return (
    <div className="glass-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-white font-black text-xl mb-1">Women's Peptide Safety Guide</h3>
        <p className="text-slate-400 text-sm">Select your primary goal and age range for personalized recommendations with women-specific dosing and safety notes.</p>
      </div>

      <div className="mb-5">
        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Primary Goal</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {goalOptions.map((o) => (
            <button
              key={o.value}
              onClick={() => setGoal(o.value)}
              className={`p-3 rounded-xl border text-left transition-all ${goal === o.value ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/8 hover:border-white/20'}`}
            >
              <div className="text-xl mb-1">{o.emoji}</div>
              <div className={`text-xs font-semibold ${goal === o.value ? 'text-white' : 'text-slate-400'}`}>{o.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wide mb-3">Age Range</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ageOptions.map((o) => (
            <button
              key={o.value}
              onClick={() => setAge(o.value)}
              className={`p-3 rounded-xl border text-center transition-all ${age === o.value ? 'border-purple-500/50 bg-purple-500/10' : 'border-white/8 hover:border-white/20'}`}
            >
              <div className={`text-sm font-semibold ${age === o.value ? 'text-white' : 'text-slate-400'}`}>{o.label}</div>
            </button>
          ))}
        </div>
      </div>

      {result ? (
        <div className="space-y-4 border-t border-white/8 pt-6">
          <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <div className="text-purple-400 text-xs font-bold uppercase tracking-wide mb-3">Recommended Peptides</div>
            <div className="space-y-3">
              {result.peptides.map((p) => (
                <div key={p.name} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                  <div>
                    <div className="text-white font-semibold text-sm">{p.name}</div>
                    <div className="text-slate-400 text-xs">{p.dose}</div>
                    <div className="text-slate-500 text-xs mt-0.5 italic">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-2">Why This Protocol</div>
            <p className="text-slate-300 text-sm leading-relaxed">{result.rationale}</p>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wide mb-2">Safety Notes</div>
            <ul className="space-y-1.5">
              {result.safetyNotes.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
            <div className="text-blue-400 text-xs font-bold uppercase tracking-wide mb-2">What to Monitor</div>
            <ul className="space-y-1">
              {result.monitor.map((m) => (
                <li key={m} className="text-slate-300 text-sm">• {m}</li>
              ))}
            </ul>
          </div>

          <p className="text-slate-600 text-xs text-center">For informational purposes only. Not medical advice. Consult a healthcare provider before starting any peptide protocol.</p>
        </div>
      ) : (
        <div className="rounded-xl p-6 text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-slate-500 text-sm">Select your goal and age range above to see personalized recommendations.</p>
        </div>
      )}
    </div>
  );
}
