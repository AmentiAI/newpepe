import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, RotateCcw, XCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import DosageCalculator from '@/components/DosageCalculator';

export const metadata: Metadata = {
  title: 'Complete BPC-157 Guide 2026 | How to Use Peptides Safely | BPC-157 Stack',
  description: 'The definitive beginner guide to BPC-157 and peptides. Learn how to reconstitute, dose, inject, and stack peptides safely for maximum results.',
  keywords: 'BPC-157 beginner guide, how to use peptides, peptide reconstitution, peptide dosing, how to inject BPC-157, bacteriostatic water, peptide protocol, insulin syringe peptides',
  openGraph: {
    title: 'Complete BPC-157 Beginner Guide | How to Use Peptides Safely',
    description: 'Learn how to reconstitute, dose, inject, and stack peptides safely. The definitive beginner guide.',
    type: 'article',
    url: 'https://bp157stack.com/guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete BPC-157 Beginner Guide | How to Use Peptides Safely',
    description: 'Learn how to reconstitute, dose, inject, and stack peptides safely for maximum results.',
  },
};

const SOURCE_URL = '/out';

const steps = [
  { num: '01', title: 'Choose Your Goal', desc: 'Identify what you\'re targeting — injury healing, anti-aging, body composition, or cognitive enhancement. Your goal determines your stack.' },
  { num: '02', title: 'Source Quality Peptides', desc: 'Use only COA-verified, US domestic peptides from a trusted supplier. Always verify that full certificates of analysis are provided.' },
  { num: '03', title: 'Reconstitute Correctly', desc: 'Add bacteriostatic water to lyophilized powder using a sterile syringe. Standard: 1mL water per 5mg vial = 5,000mcg/mL.' },
  { num: '04', title: 'Dose & Inject', desc: 'Use an insulin syringe (29-31 gauge). Pinch skin, insert at 45°, inject slowly. Rotate injection sites. Most peptides: subcutaneous.' },
  { num: '05', title: 'Track & Adjust', desc: 'Log your doses, symptoms, and results. Adjust based on response after 2-4 weeks. Most people see initial results within 1-2 weeks.' },
  { num: '06', title: 'Cycle Responsibly', desc: 'Most peptides: 8-12 weeks on, 4-6 weeks off. Some (BPC-157, Selank) can be used as-needed. Epithalon: 2x yearly.' },
];

const injectionSites = [
  {
    site: 'Abdomen',
    ideal: true,
    notes: 'The abdomen (2 inches around the navel) is the most popular subcutaneous injection site. Fat is plentiful, absorption is consistent, and it is easy to self-administer. Avoid injecting within 2 inches of the navel itself. Rotate within a 2-inch grid — never inject the same spot twice in a row.',
  },
  {
    site: 'Thigh (Outer)',
    ideal: true,
    notes: 'The outer thigh (lateral quadriceps area) is the second most common site. Use the middle third of the outer thigh. This site has slower absorption than the abdomen, making it useful for peptides where a slower release is preferred. Easier to reach than the glute area. Rotate left and right thigh on alternating days.',
  },
  {
    site: 'Glutes (Upper Outer)',
    ideal: false,
    notes: 'The upper outer quadrant of the gluteal muscle can be used for subcutaneous or intramuscular injections. Subcutaneous injections here are less common due to difficulty of self-administration. Useful for longer-acting compounds. Harder to reach solo — only practical with a partner or mirror. Ensure you stay in the upper outer quadrant to avoid the sciatic nerve.',
  },
  {
    site: 'Deltoid (Upper Arm)',
    ideal: false,
    notes: 'The lateral deltoid (outer upper arm) can be used for subcutaneous injections when other sites are overused or irritated. The subcutaneous fat layer here is thinner, so use shorter needles (0.5 inch / 12mm). Not recommended as a primary site due to limited fat tissue and increased soreness. Reserve as a rotation option when other sites need rest.',
  },
];

const beginnerMistakes = [
  {
    mistake: 'Reusing Syringes',
    detail: 'Used needles become dull and jagged at a microscopic level after one use, causing unnecessary pain and tissue damage. They also carry contamination risk. Insulin syringes are inexpensive — use a fresh one every injection.',
  },
  {
    mistake: 'Using the Wrong Water',
    detail: 'Tap water, distilled water, and sterile saline are not bacteriostatic and will allow bacteria to grow in your vial after the first draw. Always use bacteriostatic water (0.9% benzyl alcohol) for multi-use peptide vials. This is non-negotiable.',
  },
  {
    mistake: 'Storing at Wrong Temperature',
    detail: 'Lyophilized (dry) peptides are stable at room temperature for weeks but degrade faster with heat or moisture. Reconstituted peptides must be refrigerated at 2-8°C and used within 28-30 days. Never freeze a reconstituted peptide — ice crystals shear the amino acid chains.',
  },
  {
    mistake: 'Skipping Alcohol Swabs',
    detail: 'Always swab the rubber top of your vial with a 70% isopropyl alcohol pad before every draw. Let it air-dry for 10 seconds before inserting the needle. This prevents introducing surface bacteria into your sterile vial. Do the same for your injection site skin.',
  },
  {
    mistake: 'Injecting Too Fast',
    detail: 'Rapidly pushing the plunger creates a pressure jet under the skin that causes a burning sensation and uneven distribution. Inject slowly and steadily over 5-10 seconds. After the full dose is injected, hold the needle in place for 3-5 seconds before withdrawing to prevent backflow.',
  },
  {
    mistake: 'Not Tracking Doses or Results',
    detail: 'Without a log, it is impossible to know whether a peptide is working, whether you are dosing consistently, or when to cycle off. Keep a simple spreadsheet or notes app entry: date, peptide, dose, injection site, and any subjective notes. Review every 2 weeks and adjust accordingly.',
  },
];

const cyclingTable = [
  { peptide: 'BPC-157', cycle: '4-12 weeks (injury)', rest: 'None required / as-needed', notes: 'Non-hormonal; no receptor downregulation. Acute injury: 8-12 weeks. Maintenance: indefinite at 250mcg/day.' },
  { peptide: 'TB-500', cycle: '4-6 weeks loading', rest: '2-4 weeks', notes: 'Loading phase: 2-4mg twice weekly. Maintenance: 2mg monthly. Stack with BPC-157 for synergistic healing.' },
  { peptide: 'CJC-1295 / Ipamorelin', cycle: '8-12 weeks', rest: '4-6 weeks', notes: 'Inject before bed for natural GH pulse alignment. 100-300mcg Ipamorelin + 100-300mcg CJC-1295 (no DAC) per dose.' },
  { peptide: 'Epithalon', cycle: '10-20 days (twice yearly)', rest: '~6 months between cycles', notes: 'Telomerase activator. 5-10mg per day for 10-20 days. Run in spring and fall. No daily ongoing use needed.' },
  { peptide: 'GHK-Cu', cycle: 'Continuous or 12-week cycles', rest: 'Optional 4 weeks off between cycles', notes: 'Topical: daily. Systemic: 1-2mg 3x weekly. No downregulation documented; well tolerated long-term.' },
  { peptide: 'Semaglutide', cycle: 'Continuous (weight management)', rest: 'Defined goals may use 12-week cycles', notes: 'Start 0.25mg/week, titrate slowly. GI side effects diminish with proper titration. Continuous use common for metabolic management.' },
];

export default function GuidePage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Use Peptides Safely: Complete Beginner Guide',
            description: 'The definitive beginner guide to BPC-157 and peptides. Learn how to reconstitute, dose, inject, and stack peptides safely for maximum results.',
            step: steps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.desc,
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-amber-600 text-sm font-medium">Complete Beginner Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            How to Use <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Everything you need to know to start using BPC-157 and peptides safely and effectively.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-600 font-semibold text-sm mb-1">Important Notice</p>
            <p className="text-gray-700 text-sm">
              This content is for educational purposes only. Consult a licensed healthcare provider before using any peptide.
            </p>
          </div>
        </div>

        {/* 6 Steps */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900">Getting Started in 6 Steps</h2>
          {steps.map((step) => (
            <div key={step.num} className="glass-card p-6 flex gap-5">
              <div className="text-2xl font-black text-amber-600/30 font-mono w-12 shrink-0">{step.num}</div>
              <div>
                <h3 className="text-gray-900 font-black mb-1">{step.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Dosage Calculator — client component */}
        <DosageCalculator />

        {/* Static reconstitution reference */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Reconstitution Reference</h2>
          <p className="text-gray-700 text-sm mb-4">Use this formula to calculate your dose per injection:</p>
          <div className="bg-gray-100 rounded-xl p-4 font-mono text-sm border border-amber-200 mb-4">
            <p className="text-amber-600 mb-2"># Standard reconstitution:</p>
            <p className="text-gray-800">Vial size: 5mg (5,000mcg)</p>
            <p className="text-gray-800">Water added: 1mL bacteriostatic water</p>
            <p className="text-gray-800">Concentration: 5,000mcg/mL = 5mcg/μL</p>
            <br />
            <p className="text-amber-600 mb-2"># For 250mcg dose:</p>
            <p className="text-gray-800">250mcg ÷ 5mcg/μL = 50μL = 0.05mL</p>
            <p className="text-gray-800">On 1mL insulin syringe: pull to the 5IU mark</p>
          </div>
          <p className="text-gray-600 text-xs">Always use bacteriostatic water (not sterile water) for multi-use vials. Refrigerate after reconstitution. Use within 30 days.</p>
        </div>

        {/* Storage */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Storage & Handling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Lyophilized (dry) powder', value: 'Room temperature, or refrigerate for longevity. Avoid moisture.' },
              { label: 'Reconstituted (mixed)', value: 'Refrigerate at 2-8°C. Use within 28-30 days.' },
              { label: 'Syringes', value: 'Use insulin syringes (29-31 gauge). Do not reuse.' },
              { label: 'Bacteriostatic water', value: 'Use for all reconstitutions. Available at pharmacies.' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-100 rounded-lg p-3 border border-amber-200">
                <p className="text-amber-600 text-xs font-bold mb-1">{label}</p>
                <p className="text-gray-700 text-xs">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Injection Site Rotation Guide */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <RotateCcw className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-gray-900">Injection Site Rotation Guide</h2>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            Rotating injection sites prevents lipohypertrophy (scar tissue build-up), maintains consistent absorption, and reduces soreness. Never inject the same exact spot two days in a row.
          </p>
          <div className="space-y-4">
            {injectionSites.map(({ site, ideal, notes }) => (
              <div key={site} className="bg-gray-100 rounded-xl p-5 border border-amber-200">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-gray-900 font-semibold">{site}</h3>
                  {ideal ? (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600">Recommended Primary</span>
                  ) : (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-500">Secondary / Rotation</span>
                  )}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{notes}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
            <p className="text-gray-700 text-xs leading-relaxed">
              <span className="text-amber-600 font-semibold">Rotation tip: </span>
              Map your abdomen into a 3x3 grid (9 zones). Rotate through zones 1-9, then start over. This allows each zone 8 days of rest between injections, virtually eliminating site-related tissue changes.
            </p>
          </div>
        </div>

        {/* Common Beginner Mistakes */}
        <div className="glass-card p-8 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-gray-900">Common Beginner Mistakes</h2>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            Avoiding these six mistakes is more important than any other optimization. Most failed protocols come down to one of these errors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {beginnerMistakes.map(({ mistake, detail }) => (
              <div key={mistake} className="bg-gray-100 rounded-xl p-5 border border-red-200">
                <div className="flex items-start gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <h3 className="text-gray-900 font-semibold text-sm">{mistake}</h3>
                </div>
                <p className="text-gray-700 text-xs leading-relaxed pl-6">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Peptide Cycling Reference Table */}
        <div className="glass-card p-8 mb-8 overflow-x-auto">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-xl font-bold text-gray-900">Peptide Cycling Reference Table</h2>
          </div>
          <p className="text-gray-700 text-sm mb-6">
            Standard cycling protocols for the most commonly used peptides. Always start at the lower end of ranges and adjust based on individual response.
          </p>
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-amber-200">
                <th className="text-left text-amber-600 text-xs font-bold uppercase tracking-wide pb-3 pr-4">Peptide</th>
                <th className="text-left text-amber-600 text-xs font-bold uppercase tracking-wide pb-3 pr-4">Cycle Length</th>
                <th className="text-left text-amber-600 text-xs font-bold uppercase tracking-wide pb-3 pr-4">Rest Period</th>
                <th className="text-left text-amber-600 text-xs font-bold uppercase tracking-wide pb-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-50">
              {cyclingTable.map(({ peptide, cycle, rest, notes }) => (
                <tr key={peptide} className="hover:bg-amber-50 transition-colors">
                  <td className="py-3 pr-4 text-gray-900 font-semibold whitespace-nowrap">{peptide}</td>
                  <td className="py-3 pr-4 text-gray-800 whitespace-nowrap">{cycle}</td>
                  <td className="py-3 pr-4 text-gray-700 whitespace-nowrap">{rest}</td>
                  <td className="py-3 text-gray-600 text-xs leading-relaxed">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 text-xs mt-4">
            This table reflects general community protocols. Individual response varies. Consult a healthcare provider for personalized guidance.
          </p>
        </div>

        {/* Buy CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start?</h2>
          <p className="text-gray-700 mb-6">Get your peptides from our recommended supplier — COA verified, US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks" className="btn-secondary text-base px-8 py-4">Browse Stacks</Link>
          </div>
        </div>
      </div>

      <InternalLinks path="/guide" />
    </div>
  );
}
