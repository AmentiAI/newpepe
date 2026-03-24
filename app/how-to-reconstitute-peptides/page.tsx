import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

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

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

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

const doseTable = [
  { water: '0.5mL', vialSize: '2mg', conc: '4,000mcg/mL', dose250: '6.25μL (0.6 IU)', dose500: '12.5μL (1.25 IU)' },
  { water: '1mL', vialSize: '2mg', conc: '2,000mcg/mL', dose250: '12.5μL (1.25 IU)', dose500: '25μL (2.5 IU)' },
  { water: '1mL', vialSize: '5mg', conc: '5,000mcg/mL', dose250: '50μL (5 IU)', dose500: '100μL (10 IU)' },
  { water: '2mL', vialSize: '5mg', conc: '2,500mcg/mL', dose250: '100μL (10 IU)', dose500: '200μL (20 IU)' },
  { water: '1mL', vialSize: '10mg', conc: '10,000mcg/mL', dose250: '25μL (2.5 IU)', dose500: '50μL (5 IU)' },
  { water: '2mL', vialSize: '10mg', conc: '5,000mcg/mL', dose250: '50μL (5 IU)', dose500: '100μL (10 IU)' },
];

const faqs = [
  { q: 'How much bacteriostatic water do I add to BPC-157?', a: 'The most common approach: add 1mL of bacteriostatic water to a 5mg BPC-157 vial. This creates a concentration of 5,000mcg/mL. For a 250mcg dose, draw 50μL (5 IU on a 1mL insulin syringe). For a 500mcg dose, draw 100μL (10 IU). You can use more water for a lower concentration if you prefer smaller volumes.' },
  { q: 'Can I use regular sterile water instead of bacteriostatic water?', a: 'Technically you can use regular sterile water, but only if you use the entire vial in a single session — regular sterile water has no preservative and will allow bacterial growth once opened. Bacteriostatic water (0.9% benzyl alcohol) maintains sterility for 28 days and is the correct choice for any multi-dose peptide vial.' },
  { q: 'How long does reconstituted BPC-157 last in the fridge?', a: 'Reconstituted BPC-157 stored in bacteriostatic water lasts 30 days at refrigerator temperature (2–8°C). For storage beyond 30 days, freeze the vial at -20°C where it will last 6+ months. Avoid repeated freeze-thaw cycles — if you need long-term storage, aliquot into smaller vials before freezing.' },
  { q: 'What does IU mean on an insulin syringe?', a: 'IU (International Units) is the measurement scale on insulin syringes. On a standard 1mL insulin syringe, 100 IU = 1mL = 1,000μL. So 1 IU = 10μL. If you reconstitute 5mg in 1mL (5,000mcg/mL), drawing to the "5 IU" mark gives you 50μL = 250mcg of peptide.' },
  { q: 'How do I know if my peptide dissolved correctly?', a: 'Correctly reconstituted peptide will be a clear, colorless (or very slightly yellow-tinted) liquid with no visible particles. Cloudiness or particles may indicate contamination, incorrect water type, or a damaged peptide. If the solution looks cloudy or discolored, do not use it.' },
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
              step: steps.map((s, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: s.title,
                text: s.desc,
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

        {/* Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, i) => (
            <div key={step.num} className="glass-card p-6">
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-black text-lg" style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}>
                  {step.num}
                </div>
                <div className="flex-1">
                  <h2 className="text-white font-bold text-lg mb-2">{step.title}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-3">{step.desc}</p>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
                    <p className="text-emerald-300 text-xs"><strong>Tip:</strong> {step.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
