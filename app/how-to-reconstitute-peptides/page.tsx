import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Thermometer, FlaskConical, ClipboardList, Info } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import ReconstitutionCalculator from '@/components/ReconstitutionCalculator';
import EquipmentChecklist from '@/components/EquipmentChecklist';

export const metadata: Metadata = {
  title: 'How to Reconstitute Peptides: Step-by-Step Guide 2026 | BPC-157 Stack',
  description: 'Complete step-by-step guide to reconstituting BPC-157 and other peptides. How much bacteriostatic water to add, how to calculate doses, storage instructions, and common mistakes to avoid.',
  keywords: 'how to reconstitute peptides, how to reconstitute BPC-157, bacteriostatic water peptides, peptide reconstitution guide, how to mix BPC-157, peptide dosage calculator, reconstitute BPC-157 step by step',
  openGraph: {
    title: 'How to Reconstitute Peptides: Complete Step-by-Step Guide',
    description: 'How to reconstitute BPC-157 and other peptides — bacteriostatic water amounts, dose calculations, and storage.',
    type: 'article',
    url: 'https://bp157stack.com/how-to-reconstitute-peptides',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reconstitute Peptides: Step-by-Step Guide',
    description: 'Complete guide to mixing and dosing BPC-157 and other peptides safely.',
  },
};

const SOURCE_URL = '/out';

const steps = [
  {
    num: '01',
    title: 'Gather Your Supplies',
    desc: 'You need: lyophilized peptide vial, bacteriostatic water vial, alcohol swabs, and insulin syringes (29–31 gauge, 1mL). Everything must be sterile. Never reuse syringes.',
    tip: 'Bacteriostatic water (BAC water) is required — not regular sterile water, not saline. BAC water stays sterile for 28 days after opening.',
  },
  {
    num: '02',
    title: 'Wipe All Vial Tops',
    desc: 'Swab the rubber stopper on both the peptide vial and the bacteriostatic water vial with a fresh alcohol swab. Allow to air dry for 30 seconds. This prevents contamination.',
    tip: 'Use a new swab for each vial. Do not touch the rubber stopper with your fingers after swabbing.',
  },
  {
    num: '03',
    title: 'Draw the Bacteriostatic Water',
    desc: 'Draw the amount of BAC water you need into a fresh insulin syringe. For a standard 5mg peptide vial, draw 1mL (100 units on a 1mL syringe). See the dosage table below for other amounts.',
    tip: 'More water = lower concentration per unit. Less water = higher concentration. Standard is 1mL per 5mg vial.',
  },
  {
    num: '04',
    title: 'Inject Water Into the Peptide Vial',
    desc: 'Insert the syringe through the rubber stopper at an angle. Slowly inject the water down the inside wall of the vial — never directly onto the peptide powder. The powder will dissolve gradually.',
    tip: 'Never spray water directly onto the powder — this can damage the peptide structure. Let it run down the glass wall gently.',
  },
  {
    num: '05',
    title: 'Dissolve — Do Not Shake',
    desc: 'Gently swirl the vial in a circular motion until the powder fully dissolves into a clear solution. This typically takes 30–60 seconds. The solution should be clear and colorless.',
    tip: 'Never shake the vial vigorously — this can denature the peptide. Gentle swirling or rolling between your palms is correct.',
  },
  {
    num: '06',
    title: 'Label and Store',
    desc: 'Write the reconstitution date on the vial. Store in the refrigerator at 2–8°C. Use within 30 days. For longer storage, freeze at -20°C — the peptide will last 6+ months frozen.',
    tip: 'Keep away from direct light. Do not leave reconstituted peptides at room temperature for extended periods.',
  },
];

const detailedSteps = [
  {
    num: '01',
    title: 'Gather All Supplies',
    why: 'Having everything within arm\'s reach before you start prevents mid-procedure scrambling that leads to contamination.',
    detail: 'Lay out on a clean surface: lyophilized peptide vial, bacteriostatic water vial, at least 3 insulin syringes (29–31g, 1mL), 4 alcohol swabs, sharps container, labels, and your notes. Ensure your refrigerator space is confirmed clear.',
  },
  {
    num: '02',
    title: 'Wash Hands Thoroughly',
    why: 'The single most common cause of contaminated reconstitutions is hand contamination transferred to vials or syringes.',
    detail: 'Wash hands for a minimum of 20 seconds with soap and water, focusing on fingertips, between fingers, and under nails. Dry with a clean paper towel. If using gloves, put them on now after drying.',
  },
  {
    num: '03',
    title: 'Wipe Vial Tops With Alcohol Swab',
    why: 'Environmental bacteria settle on all surfaces including vial tops. The rubber stopper is porous enough to allow surface contaminants through if not cleaned.',
    detail: 'Use a fresh alcohol swab for each vial. Swipe once across the top in a single direction — do not rub back and forth. The single-swipe technique prevents recontaminating the cleaned area. Allow to air dry completely (30 seconds) before piercing.',
  },
  {
    num: '04',
    title: 'Draw Air Into Syringe Equal to Water Amount',
    why: 'Drawing air into the syringe first creates positive pressure in the BAC water vial, making it easier to draw the exact amount of water without fighting vacuum.',
    detail: 'Pull the plunger back to draw air equal to the volume of water you plan to transfer (e.g., 1mL of air if transferring 1mL of BAC water). This step is optional but simplifies precise drawing.',
  },
  {
    num: '05',
    title: 'Inject Air Into the BAC Water Vial',
    why: 'Injecting air first equalizes pressure in the vial, making drawing the water smooth and accurate.',
    detail: 'Insert the needle through the cleaned rubber stopper at a slight angle to minimize coring. Push the plunger to inject the air. Keep the needle tip submerged below the liquid level before drawing.',
  },
  {
    num: '06',
    title: 'Draw the Calculated Water Amount',
    why: 'Precision here determines your final concentration — even a 0.2mL difference changes your dosing math.',
    detail: 'Invert the BAC water vial and draw the exact amount needed. Go slowly — aspirating too fast causes bubbles. If you get bubbles, tap the syringe gently and push small air bubbles back into the vial, then re-draw to the correct mark.',
  },
  {
    num: '07',
    title: 'Insert Needle Into Peptide Vial at Angle',
    why: 'Entering at an angle reduces coring of the rubber stopper — tiny rubber particles that can contaminate your solution.',
    detail: 'Pierce the cleaned peptide vial stopper at a 45-degree angle, bevel up. Insert just far enough that the needle tip clears the stopper and is inside the vial. Do not insert all the way through to the glass.',
  },
  {
    num: '08',
    title: 'Slowly Release Water Down the Inside Wall',
    why: 'Direct injection onto the peptide powder can mechanically disrupt peptide structure. Running water down the glass wall is gentler.',
    detail: 'Tilt the vial slightly so the needle tip points toward the inside glass wall. Push the plunger very slowly, allowing water to run down the wall and pool below the powder. This is the most critical technique step — take your time.',
  },
  {
    num: '09',
    title: 'Do NOT Shake — Gently Swirl Until Dissolved',
    why: 'Vigorous shaking causes foaming and can denature (unfold and deactivate) the peptide. Gentle swirling provides enough energy to dissolve without damage.',
    detail: 'Remove the syringe and stopper it or discard. Hold the vial between two fingers and rotate in gentle circles — do not invert repeatedly or shake. Most peptides dissolve in 30–120 seconds. If after 3 minutes there is still undissolved powder, let it sit for 5 minutes at room temperature or place briefly between palms to warm slightly (for TB-500 specifically).',
  },
  {
    num: '10',
    title: 'Label Vial With Date and Concentration',
    why: 'Unlabeled vials become a guessing game. Incorrect concentration assumptions lead to over- or under-dosing.',
    detail: 'Write on the label: peptide name, vial size (e.g., 5mg), BAC water added (e.g., 1mL), resulting concentration (e.g., 5,000mcg/mL), and the reconstitution date. Store in refrigerator immediately. Do not leave at room temperature.',
  },
];

const doseTable = [
  { water: '0.5mL', vialSize: '2mg', conc: '4,000mcg/mL', dose250: '6.25μL (0.6 IU)', dose500: '12.5μL (1.25 IU)' },
  { water: '1mL', vialSize: '2mg', conc: '2,000mcg/mL', dose250: '12.5μL (1.25 IU)', dose500: '25μL (2.5 IU)' },
  { water: '1mL', vialSize: '5mg', conc: '5,000mcg/mL', dose250: '50μL (5 IU)', dose500: '100μL (10 IU)' },
  { water: '2mL', vialSize: '5mg', conc: '2,500mcg/mL', dose250: '100μL (10 IU)', dose500: '200μL (20 IU)' },
  { water: '1mL', vialSize: '10mg', conc: '10,000mcg/mL', dose250: '25μL (2.5 IU)', dose500: '50μL (5 IU)' },
  { water: '2mL', vialSize: '10mg', conc: '5,000mcg/mL', dose250: '50μL (5 IU)', dose500: '100μL (10 IU)' },
];

const peptideNotes = [
  {
    peptide: 'BPC-157',
    dissolve: 'Very easy',
    color: 'Clear / colorless',
    timing: 'Dissolves in 30–60 sec',
    notes: 'One of the easiest peptides to reconstitute. Dissolves almost immediately with gentle swirling. No warming needed.',
    special: 'None — standard protocol',
  },
  {
    peptide: 'TB-500',
    dissolve: 'Moderate',
    color: 'Clear / slight tint acceptable',
    timing: '2–5 minutes',
    notes: 'May require gentle warming — hold vial between palms for 1–2 minutes if powder is not dissolving. Do not use heat sources.',
    special: 'Warming may help dissolution',
  },
  {
    peptide: 'CJC-1295',
    dissolve: 'Easy',
    color: 'Clear / colorless',
    timing: '30–90 seconds',
    notes: 'Standard reconstitution. Follows the typical protocol without any special handling requirements.',
    special: 'None — standard protocol',
  },
  {
    peptide: 'Epithalon',
    dissolve: 'Easy',
    color: 'Clear / colorless',
    timing: '30–60 seconds',
    notes: 'Very small vial size (typically 10mg). Use smaller water volume (0.5–1mL) to keep concentration workable for 1mg/day dosing.',
    special: 'Small vial — use less water',
  },
  {
    peptide: 'GHK-Cu',
    dissolve: 'Easy',
    color: 'Light blue / pale blue-green',
    timing: '30–60 seconds',
    notes: 'The blue-green color is normal and expected — it comes from the copper ion chelation. Do not mistake this for contamination.',
    special: 'Blue color is normal and correct',
  },
  {
    peptide: 'Semaglutide / Tirzepatide',
    dissolve: 'N/A',
    color: 'Clear',
    timing: 'Pre-mixed available',
    notes: 'Special pre-mixed formulations are available from quality suppliers, bypassing reconstitution entirely. If reconstituting from powder, use bacteriostatic water only — never sterile saline.',
    special: 'Pre-mixed options available',
  },
];

const faqs = [
  { q: 'How much bacteriostatic water do I add to BPC-157?', a: 'The most common approach: add 1mL of bacteriostatic water to a 5mg BPC-157 vial. This creates a concentration of 5,000mcg/mL. For a 250mcg dose, draw 50μL (5 IU on a 1mL insulin syringe). For a 500mcg dose, draw 100μL (10 IU). You can use more water for a lower concentration if you prefer smaller volumes.' },
  { q: 'Can I use regular sterile water instead of bacteriostatic water?', a: 'Technically you can use regular sterile water, but only if you use the entire vial in a single session — regular sterile water has no preservative and will allow bacterial growth once opened. Bacteriostatic water (0.9% benzyl alcohol) maintains sterility for 28 days and is the correct choice for any multi-dose peptide vial.' },
  { q: 'How long does reconstituted BPC-157 last in the fridge?', a: 'Reconstituted BPC-157 stored in bacteriostatic water lasts 30 days at refrigerator temperature (2–8°C). For storage beyond 30 days, freeze the vial at -20°C where it will last 6+ months. Avoid repeated freeze-thaw cycles — if you need long-term storage, aliquot into smaller vials before freezing.' },
  { q: 'What does IU mean on an insulin syringe?', a: 'IU (International Units) is the measurement scale on insulin syringes. On a standard 1mL insulin syringe, 100 IU = 1mL = 1,000μL. So 1 IU = 10μL. If you reconstitute 5mg in 1mL (5,000mcg/mL), drawing to the "5 IU" mark gives you 50μL = 250mcg of peptide.' },
  { q: 'How do I know if my peptide dissolved correctly?', a: 'Correctly reconstituted peptide will be a clear, colorless (or very slightly yellow-tinted) liquid with no visible particles. Cloudiness or particles may indicate contamination, incorrect water type, or a damaged peptide. If the solution looks cloudy or discolored, do not use it.' },
  { q: 'Can I reconstitute with sterile water instead of BAC water?', a: 'Only if the entire vial will be used in one sitting — regular sterile water contains no preservative (benzyl alcohol) and will allow microbial growth once opened. For any multi-dose protocol (which is nearly every peptide protocol), bacteriostatic water is mandatory. The 0.9% benzyl alcohol in BAC water suppresses bacterial growth for 28 days.' },
  { q: 'How do I split a large vial across multiple doses safely?', a: 'Once reconstituted, leave the solution in the original vial and draw individual doses with fresh insulin syringes each time. Never pre-draw multiple syringes and store them. Each time you pierce the vial, wipe the stopper with a fresh alcohol swab first. Use within 28–30 days of reconstitution and track the date on your label.' },
  { q: 'Do reconstituted peptides lose potency over 28 days in the refrigerator?', a: 'There is gradual potency degradation over time, but it is modest within a properly stored vial in BAC water at 2–8°C. Studies suggest most peptides retain 90%+ potency at 28 days under ideal refrigeration conditions. Factors that accelerate degradation: temperature fluctuations, light exposure, and repeated freeze-thaw cycles. For maximum potency, plan cycles so vials are used within 3 weeks of reconstitution.' },
  { q: 'How do I safely dispose of used syringes?', a: 'Always use a puncture-resistant sharps container. Never place needles in regular trash, recycling, or flush them. Once your sharps container is full (do not overfill — stop at the fill line), seal it. Most pharmacies accept sharps containers for proper disposal. Many local governments have sharps mail-back programs. Some areas have designated sharps drop-off sites. Never recap used needles — this is the leading cause of needlestick injuries.' },
];

export default function HowToReconstitutePage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Reconstitute Peptides: Step-by-Step Guide',
              description: 'Complete guide to reconstituting BPC-157 and other lyophilized peptides with bacteriostatic water.',
              step: detailedSteps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.title,
                text: s.detail,
              })),
              supply: [
                { '@type': 'HowToSupply', name: 'Lyophilized peptide vial' },
                { '@type': 'HowToSupply', name: 'Bacteriostatic water' },
                { '@type': 'HowToSupply', name: 'Insulin syringes (29–31 gauge)' },
                { '@type': 'HowToSupply', name: 'Alcohol swabs' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(({ q, a }) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Guide', item: 'https://bp157stack.com/guide' },
                { '@type': 'ListItem', position: 3, name: 'How to Reconstitute Peptides', item: 'https://bp157stack.com/how-to-reconstitute-peptides' },
              ],
            },
          ]),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <span className="text-neon-green text-sm font-medium">Step-by-Step Reconstitution Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How to Reconstitute <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A complete guide to mixing BPC-157, TB-500, and other peptides with bacteriostatic water — including exact amounts, dose calculations, and storage.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-12 flex gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-300 font-semibold text-sm mb-1">Before You Begin</p>
            <p className="text-slate-400 text-sm">Only use bacteriostatic water — not tap water, saline, or regular sterile water for multi-dose vials. Work in a clean environment. Never reuse syringes.</p>
          </div>
        </div>

        {/* ── EQUIPMENT CHECKLIST ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-black text-white">Equipment Checklist</h2>
          </div>
          <EquipmentChecklist />
        </div>

        {/* ── RECONSTITUTION CALCULATOR ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-black text-white">Reconstitution Calculator</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">Enter your vial size, how much bacteriostatic water you plan to add, and your desired dose — the calculator gives you exact syringe markings instantly.</p>
          <ReconstitutionCalculator />
        </div>

        {/* Original 6 steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Quick-Reference Steps</h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.num} className="glass-card p-6">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-black text-lg" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
                      <p className="text-emerald-300 text-xs"><strong>Tip:</strong> {step.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DETAILED 10-STEP VIDEO-STYLE GUIDE ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl font-black text-white">Complete 10-Step Reconstitution Protocol</h2>
          </div>
          <p className="text-slate-400 text-sm mb-8">The full detail behind every step — including the <em>why</em> and common pitfalls at each stage.</p>
          <div className="space-y-5">
            {detailedSteps.map((step) => (
              <div key={step.num} className="glass-card p-6 border-l-2" style={{ borderLeftColor: 'rgba(0,255,136,0.4)' }}>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-black text-sm" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.25)' }}>
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base mb-1">{step.title}</h3>
                    <div className="flex items-start gap-1.5 mb-2">
                      <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <p className="text-slate-500 text-xs italic">{step.why}</p>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dose reference table */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Peptide Dose Reference Table</h2>
          <p className="text-slate-400 text-sm mb-6">How much to draw from a 1mL insulin syringe for 250mcg or 500mcg doses at different concentrations.</p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0,255,136,0.15)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(0,255,136,0.05)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">BAC Water</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Vial Size</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-bold">Concentration</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">250mcg dose</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">500mcg dose</th>
                </tr>
              </thead>
              <tbody>
                {doseTable.map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4 text-slate-300">{row.water}</td>
                    <td className="py-3 px-4 text-slate-300">{row.vialSize}</td>
                    <td className="py-3 px-4 text-emerald-400 font-mono font-semibold">{row.conc}</td>
                    <td className="py-3 px-4 text-slate-400 font-mono">{row.dose250}</td>
                    <td className="py-3 px-4 text-slate-400 font-mono">{row.dose500}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-xs mt-3">IU = units on a 1mL insulin syringe (100 IU = 1mL). μL = microliters.</p>
        </div>

        {/* ── PEPTIDE-SPECIFIC NOTES TABLE ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <FlaskConical className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-black text-white">Peptide-Specific Reconstitution Notes</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">Each peptide has quirks. Here is what to expect when reconstituting the most common peptides.</p>
          <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0,255,136,0.12)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(0,255,136,0.04)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold whitespace-nowrap">Peptide</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold whitespace-nowrap">Dissolves</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold whitespace-nowrap">Normal Color</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold whitespace-nowrap">Time</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-bold whitespace-nowrap">Special Notes</th>
                </tr>
              </thead>
              <tbody>
                {peptideNotes.map((row, i) => (
                  <tr key={row.peptide} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4 text-white font-semibold whitespace-nowrap">{row.peptide}</td>
                    <td className="py-3 px-4 text-slate-300 whitespace-nowrap">{row.dissolve}</td>
                    <td className="py-3 px-4 text-slate-300 whitespace-nowrap">{row.color}</td>
                    <td className="py-3 px-4 text-slate-400 font-mono whitespace-nowrap text-xs">{row.timing}</td>
                    <td className="py-3 px-4 text-emerald-300 text-xs leading-relaxed">{row.special}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── STORAGE TROUBLESHOOTING ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <Thermometer className="w-6 h-6 text-neon-green" />
            <h2 className="text-2xl font-black text-white">Storage Troubleshooting</h2>
          </div>
          <p className="text-slate-400 text-sm mb-8">What to do when something looks wrong with your reconstituted peptide — and how to tell normal from problematic.</p>
          <div className="space-y-4">
            {[
              {
                title: 'Cloudy or Milky Solution',
                status: 'Potentially Problematic',
                statusColor: 'text-amber-400',
                statusBg: 'rgba(245,158,11,0.08)',
                statusBorder: 'rgba(245,158,11,0.2)',
                detail: 'Cloudiness can indicate: (1) bacterial contamination — discard immediately, (2) peptide precipitation due to pH or temperature shock, (3) incomplete dissolution — try gentle warming. If the solution was clear when first reconstituted and turned cloudy during storage, contamination is the most likely cause. When in doubt, discard.',
              },
              {
                title: 'Unusual Color Changes',
                status: 'Context-Dependent',
                statusColor: 'text-blue-400',
                statusBg: 'rgba(59,130,246,0.08)',
                statusBorder: 'rgba(59,130,246,0.2)',
                detail: 'Normal: GHK-Cu is naturally blue-green due to the copper ion — this is expected. Slight yellow tint in some peptides is acceptable. Abnormal: brown or orange discoloration in peptides that should be clear, or any solution that darkens significantly over time in the refrigerator. Oxidative degradation can cause color changes in certain peptide sequences.',
              },
              {
                title: 'How to Tell if a Peptide Has Degraded',
                status: 'Watch for These Signs',
                statusColor: 'text-neon-green',
                statusBg: 'rgba(0,255,136,0.04)',
                statusBorder: 'rgba(0,255,136,0.15)',
                detail: 'Signs of degradation: visible particulate matter that does not dissolve, significant discoloration, unusual smell (peptides should be essentially odorless), reduced effectiveness (anecdotal but a real signal). Peptides degrade faster when: exposed to heat (above 8°C for extended periods), exposed to UV light, stored in non-BAC water, or repeatedly frozen and thawed.',
              },
              {
                title: 'Accidentally Froze Reconstituted Peptide',
                status: 'Usually Recoverable',
                statusColor: 'text-emerald-400',
                statusBg: 'rgba(16,185,129,0.06)',
                statusBorder: 'rgba(16,185,129,0.2)',
                detail: 'A single freeze-thaw cycle is unlikely to destroy the peptide — most peptides tolerate one accidental freeze reasonably well. Thaw slowly in the refrigerator (not at room temperature). Do not refreeze again — use it within a few days. The main risk is ice crystal formation disrupting the peptide structure, but the BAC water preservative remains effective after thawing.',
              },
              {
                title: 'Temperature Fluctuation Tolerance',
                status: 'Know the Limits',
                statusColor: 'text-slate-400',
                statusBg: 'rgba(255,255,255,0.03)',
                statusBorder: 'rgba(255,255,255,0.08)',
                detail: 'Reconstituted peptides are relatively stable between 2–8°C but sensitive to extremes. Brief excursions to room temperature (20–22°C) during dose drawing are fine. Avoid: leaving vials out for more than 30 minutes, refrigerator door shelves where temperature fluctuates with door opening, areas near heating vents or direct sunlight. Maximum tolerable temperature for short periods: approximately 25°C. Above this, degradation accelerates significantly.',
              },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white font-bold">{item.title}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full shrink-0 ${item.statusColor}`}
                    style={{ background: item.statusBg, border: `1px solid ${item.statusBorder}` }}>
                    {item.status}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-6">Reconstitution FAQ</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="glass-card group">
                <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{q}</span>
                  <span className="text-neon-green text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Get COA-Verified Peptides & Supplies</h2>
          <p className="text-slate-400 mb-6">BPC-157, TB-500, bacteriostatic water, and insulin syringes — everything you need.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/guide" className="btn-secondary text-base px-8 py-4">Full Beginner Guide</Link>
          </div>
        </div>
      </div>

      <InternalLinks path="/how-to-reconstitute-peptides" />
    </div>
  );
}
