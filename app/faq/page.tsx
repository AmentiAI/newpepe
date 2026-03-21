import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 FAQ 2026 | Common Questions About Peptides & Protocols | BPC-157 Stack',
  description: 'Answers to the most common BPC-157 questions — dosing, safety, stacking, oral vs injectable, sourcing, and more. Expert peptide FAQs.',
  keywords: 'BPC-157 FAQ, peptide questions, BPC-157 dosing, is BPC-157 safe, BPC-157 oral, peptide reconstitution, TB-500 stack, peptide sourcing, COA peptides',
  openGraph: {
    title: 'BPC-157 FAQ | Common Peptide Questions Answered',
    description: 'Answers to the most common BPC-157 questions — dosing, safety, stacking, oral vs injectable, sourcing, and more.',
    type: 'website',
    url: 'https://bp157stack.com/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 FAQ | Common Peptide Questions Answered',
    description: 'Answers to the most common BPC-157 questions — dosing, safety, stacking, oral vs injectable.',
  },
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const faqs = [
  {
    category: 'BPC-157 Basics',
    items: [
      { q: 'What is BPC-157?', a: 'BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from a protein found in human gastric juice. It has been studied extensively in animal and cell models for its remarkable tissue-healing properties, including tendon, ligament, muscle, gut, and nerve repair.' },
      { q: 'Is BPC-157 safe?', a: 'BPC-157 has an exceptional safety profile. It has no known LD50 (lethal dose) in animal studies — meaning no dose has been found to cause death. It has no hormonal activity and does not suppress natural hormone production. No significant adverse effects have been reported at standard doses.' },
      { q: 'Can BPC-157 be taken orally?', a: 'Yes — BPC-157 is unique among peptides in that it is gastric acid stable and maintains systemic effectiveness when taken orally. Most peptides are destroyed in the digestive tract. BPC-157 can be taken as a capsule or dissolved in water for oral use, making it accessible for those who prefer not to inject.' },
      { q: 'How long does BPC-157 take to work?', a: 'Most users report pain reduction and early healing signs within 2-4 days. Structural tendon/ligament healing takes 4-8 weeks. Gut healing typically occurs within 1-3 weeks. Results depend on injury severity, dose, and protocol consistency.' },
    ],
  },
  {
    category: 'Dosing & Protocol',
    items: [
      { q: 'What is the standard BPC-157 dose?', a: 'Standard research dose: 250-500mcg per day. For injection: once or twice daily subcutaneous. For oral: once daily on an empty stomach. For acute injuries, higher doses (500mcg twice daily) during the loading phase.' },
      { q: 'How do I reconstitute peptides?', a: 'Add bacteriostatic water to the lyophilized (dry) peptide powder using a sterile syringe. Standard reconstitution: 1mL bacteriostatic water per 5mg vial = 5,000mcg/mL concentration. For a 250mcg dose, draw 50μL (0.05mL) = 5IU on a standard 1mL insulin syringe.' },
      { q: 'What syringe should I use?', a: 'Use insulin syringes with 29-31 gauge needles for subcutaneous injections. These are very small and nearly painless. They are available at pharmacies. Do not reuse syringes.' },
      { q: 'How long should I run BPC-157?', a: 'For injury healing: 4-12 weeks depending on severity. For gut healing: 4-8 weeks. For maintenance/prevention: indefinite at lower doses. BPC-157 does not cause receptor desensitization, so extended use is considered safe.' },
    ],
  },
  {
    category: 'Stacking',
    items: [
      { q: 'What is the best stack with BPC-157?', a: 'BPC-157 + TB-500 is the gold standard healing stack. BPC-157 provides targeted local healing while TB-500 adds systemic repair and stem cell mobilization. Together they reduce healing time by 50-70% compared to natural recovery.' },
      { q: 'Can I stack BPC-157 with growth hormone peptides?', a: 'Yes — BPC-157 stacks well with Ipamorelin + CJC-1295. The GH peptides accelerate anabolic repair while BPC-157 addresses inflammation and tissue-specific healing. This is a popular stack for athletes and bodybuilders.' },
      { q: 'Should I use Ipamorelin alone or with CJC-1295?', a: 'Always use Ipamorelin with CJC-1295 (no DAC) for maximum GH output. Ipamorelin alone produces a moderate GH pulse; combined with CJC-1295, the effect is 8-10x amplified due to synergistic receptor activation. This is the gold standard combination.' },
    ],
  },
  {
    category: 'Sourcing & Quality',
    items: [
      { q: 'Where should I source peptides?', a: 'We recommend Apollo Peptide Sciences exclusively. They provide full certificates of analysis (COA) for every batch, ship US domestically, and have established themselves as the most trusted peptide supplier. Never use sources that don\'t provide COAs.' },
      { q: 'What is a certificate of analysis (COA)?', a: 'A COA is a third-party lab test confirming the purity, identity, and concentration of a peptide. It should show 98%+ purity and match the label claims. Always request a COA and verify it before use.' },
      { q: 'Why is source quality so important?', a: 'Low-quality peptides may contain impurities, incorrect amino acid sequences, or bacterial contamination. This can cause injection site reactions, ineffective results, or in rare cases, serious health issues. COA-verified peptides from trusted suppliers eliminate this risk.' },
    ],
  },
  {
    category: 'Specific Applications',
    items: [
      { q: 'Does BPC-157 work for gut issues?', a: 'Yes — gut healing is one of BPC-157\'s strongest documented effects. It repairs intestinal barrier integrity (leaky gut), reduces inflammation in IBD and Crohn\'s-like conditions, and protects against NSAID-induced gut damage. Oral administration delivers BPC-157 directly to the intestinal lining.' },
      { q: 'Can BPC-157 heal tendons?', a: 'Yes — tendon healing is the most widely studied application. BPC-157 upregulates growth hormone receptors in tendon fibroblasts, stimulates collagen production, and improves blood vessel formation in tendon tissue. Studies show significant tendon repair in 4-6 weeks at standard doses.' },
      { q: 'What peptides are best for anti-aging?', a: 'The most evidence-backed anti-aging stack is Epithalon + GHK-Cu + SS-31. Epithalon extends telomeres (28% mortality reduction in human trials), GHK-Cu reverses 31% of aged gene expression, and SS-31 repairs mitochondrial function. Run as annual cycles for long-term longevity benefits.' },
    ],
  },
];

const allFaqItems = faqs.flatMap((g) => g.items);

export default function FAQPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: allFaqItems.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Peptide <span className="gradient-text">FAQ</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Answers to the most common questions about BPC-157 and peptides.
          </p>
        </div>

        {/* FAQs by category */}
        <div className="space-y-10">
          {faqs.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-lg font-bold text-neon-green mb-4 flex items-center gap-2">
                <span className="w-2 h-4 bg-neon-green rounded-full" /> {category}
              </h2>
              <div className="space-y-3">
                {items.map(({ q, a }) => (
                  <div key={q} className="glass-card p-6">
                    <h3 className="text-white font-semibold mb-2">{q}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start?</h2>
          <p className="text-slate-400 mb-6">Get COA-verified peptides from the most trusted source.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={AFFILIATE} target="_blank" rel="noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              Shop <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/guide" className="btn-secondary text-base px-8 py-4">Read Beginner Guide</Link>
          </div>
        </div>
      </div>

      <InternalLinks path="/faq" />
    </div>
  );
}
