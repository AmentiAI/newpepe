import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

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

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const steps = [
  { num: '01', title: 'Choose Your Goal', desc: 'Identify what you\'re targeting — injury healing, anti-aging, body composition, or cognitive enhancement. Your goal determines your stack.' },
  { num: '02', title: 'Source Quality Peptides', desc: 'Use only COA-verified, US domestic peptides from a trusted supplier. Apollo Peptide Sciences provides full certificates of analysis.' },
  { num: '03', title: 'Reconstitute Correctly', desc: 'Add bacteriostatic water to lyophilized powder using a sterile syringe. Standard: 1mL water per 5mg vial = 5,000mcg/mL.' },
  { num: '04', title: 'Dose & Inject', desc: 'Use an insulin syringe (29-31 gauge). Pinch skin, insert at 45°, inject slowly. Rotate injection sites. Most peptides: subcutaneous.' },
  { num: '05', title: 'Track & Adjust', desc: 'Log your doses, symptoms, and results. Adjust based on response after 2-4 weeks. Most people see initial results within 1-2 weeks.' },
  { num: '06', title: 'Cycle Responsibly', desc: 'Most peptides: 8-12 weeks on, 4-6 weeks off. Some (BPC-157, Selank) can be used as-needed. Epithalon: 2x yearly.' },
];

export default function GuidePage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
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
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-medium">Complete Beginner Guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How to Use <span className="gradient-text">Peptides</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know to start using BPC-157 and peptides safely and effectively.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mb-10">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-400 font-semibold text-sm mb-1">Important Notice</p>
            <p className="text-slate-400 text-sm">
              This content is for educational purposes only. Consult a licensed healthcare provider before using any peptide.
            </p>
          </div>
        </div>

        {/* 6 Steps */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-white">Getting Started in 6 Steps</h2>
          {steps.map((step) => (
            <div key={step.num} className="glass-card p-6 flex gap-5">
              <div className="text-2xl font-black text-neon-green/30 font-mono w-12 shrink-0">{step.num}</div>
              <div>
                <h3 className="text-white font-bold mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reconstitution guide */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Reconstitution Calculator</h2>
          <p className="text-slate-400 text-sm mb-4">Use this formula to calculate your dose per injection:</p>
          <div className="bg-dark-700/50 rounded-xl p-4 font-mono text-sm border border-neon-green/10 mb-4">
            <p className="text-neon-green mb-2"># Standard reconstitution:</p>
            <p className="text-slate-300">Vial size: 5mg (5,000mcg)</p>
            <p className="text-slate-300">Water added: 1mL bacteriostatic water</p>
            <p className="text-slate-300">Concentration: 5,000mcg/mL = 5mcg/μL</p>
            <br />
            <p className="text-neon-green mb-2"># For 250mcg dose:</p>
            <p className="text-slate-300">250mcg ÷ 5mcg/μL = 50μL = 0.05mL</p>
            <p className="text-slate-300">On 1mL insulin syringe: pull to the 5IU mark</p>
          </div>
          <p className="text-slate-500 text-xs">Always use bacteriostatic water (not sterile water) for multi-use vials. Refrigerate after reconstitution. Use within 30 days.</p>
        </div>

        {/* Storage */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Storage & Handling</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Lyophilized (dry) powder', value: 'Room temperature, or refrigerate for longevity. Avoid moisture.' },
              { label: 'Reconstituted (mixed)', value: 'Refrigerate at 2-8°C. Use within 28-30 days.' },
              { label: 'Syringes', value: 'Use insulin syringes (29-31 gauge). Do not reuse.' },
              { label: 'Bacteriostatic water', value: 'Use for all reconstitutions. Available at pharmacies.' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-dark-700/50 rounded-lg p-3 border border-neon-green/10">
                <p className="text-neon-green text-xs font-semibold mb-1">{label}</p>
                <p className="text-slate-400 text-xs">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buy CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start?</h2>
          <p className="text-slate-400 mb-6">Get your peptides from Apollo Peptide Sciences — COA verified, US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks" className="btn-secondary text-base px-8 py-4">Browse Stacks</Link>
          </div>
        </div>
      </div>

      <InternalLinks path="/guide" />
    </div>
  );
}
