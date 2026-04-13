import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, ExternalLink, BookOpen, HelpCircle, Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Resources | BPC-157 Stack — Peptide Protocol Questions',
  description: 'Get help with BPC-157 dosing, peptide stacking, reconstitution, and sourcing. Browse popular resources, common Q&A, and learn about this site.',
  keywords: 'BPC-157 help, peptide questions, contact peptide guide, peptide protocol resource, BPC-157 stacking guide, reconstitution help',
  openGraph: {
    title: 'Contact & Resources | BPC-157 Stack',
    description: 'Get help with BPC-157, peptide protocols, stacking, and sourcing. Comprehensive resources and Q&A.',
    type: 'website',
    url: 'https://bp157stack.com/contact',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const topicCards = [
  { label: 'BPC-157 Dosing', href: '/faq#dosing', desc: 'Dose ranges, timing, and injection protocols for BPC-157.' },
  { label: 'Stacking Guide', href: '/stacks', desc: 'Pre-built peptide stacks for healing, GH, anti-aging, and more.' },
  { label: 'Reconstitution Help', href: '/guide', desc: 'Step-by-step calculator and reference for mixing peptides.' },
  { label: 'Legal Questions', href: '/faq#sourcing', desc: 'Research-use status, COA requirements, and sourcing guidance.' },
  { label: 'Anti-Aging Peptides', href: '/faq#applications', desc: 'Epithalon, GHK-Cu, SS-31 — protocols and cycle guides.' },
  { label: 'Weight Loss Peptides', href: '/products', desc: 'Semaglutide, Tirzepatide, and GLP-1 protocol resources.' },
];

const popularResources = [
  { label: 'Beginner Guide', href: '/guide', desc: 'Complete step-by-step guide to starting peptides safely.' },
  { label: 'Full FAQ', href: '/faq', desc: '35+ questions across 8 categories — dosing, safety, stacking, and more.' },
  { label: 'Peptide Products', href: '/products', desc: 'Individual peptide profiles with dosing and application notes.' },
  { label: 'Stack Protocols', href: '/stacks', desc: 'Curated stacks for healing, body recomposition, and longevity.' },
  { label: 'BPC-157 Basics', href: '/faq#basics', desc: 'What BPC-157 is, how it works, and who it is for.' },
  { label: 'Dosing Calculator', href: '/guide#calculator', desc: 'Interactive calculator for peptide dose and syringe volumes.' },
  { label: 'Side Effects & Safety', href: '/faq#side-effects', desc: 'What to expect, what to avoid, and drug interaction notes.' },
  { label: 'Peptides for Women', href: '/faq#women', desc: 'Gender-specific guidance on dosing and peptide selection.' },
];

const mostAskedQuestions = [
  {
    q: 'How quickly does the supplier ship after ordering?',
    a: 'Our recommended supplier ships US domestic orders within 1-3 business days. Most customers receive their order within 3-5 business days total. All orders are shipped discreetly. International shipping timelines vary by destination. For specific shipping status questions, contact the supplier directly through the product page.',
  },
  {
    q: 'What is the best time of day to inject peptides?',
    a: 'Timing depends on the peptide. Growth hormone secretagogues (CJC-1295 + Ipamorelin) are most effective when injected 30-60 minutes before sleep, aligning with the body\'s natural overnight GH release. BPC-157 has no timing dependency and can be injected morning or evening — consistency matters more than exact timing. GLP-1 agonists like Semaglutide are typically weekly injections with no strict time-of-day requirement. Avoid injecting GH peptides within 2 hours of eating, as elevated insulin blunts GH release.',
  },
  {
    q: 'Do I need to refrigerate my peptides before I open them?',
    a: 'Lyophilized (freeze-dried) peptides in sealed, unconstituted vials are stable at room temperature for weeks to months if kept away from heat and moisture. Refrigerating them extends their shelf life significantly — up to 12-24 months. Once you reconstitute a vial by adding bacteriostatic water, it must be refrigerated immediately and used within 28-30 days. Never freeze a reconstituted vial.',
  },
  {
    q: 'Can I order peptides if I am outside the United States?',
    a: 'Our recommended supplier ships domestically within the US. International availability varies by country. Research peptides occupy a legal gray area in many jurisdictions — they are generally legal to purchase for research purposes but may be regulated or restricted as pharmaceuticals in some countries. Check your local customs regulations before ordering internationally. Many countries in Europe, Canada, and Australia have active research peptide communities with domestic suppliers.',
  },
  {
    q: 'How do I know how much to trust the information on this site?',
    a: 'Every protocol and claim on this site is cross-referenced against published animal and cell study research. We cite mechanisms, not anecdotes. We acknowledge where human clinical trial data is limited. This site does not sell peptides directly and has no incentive to overstate effects. Our affiliate relationship with the recommended supplier is disclosed. If you find a claim that seems extraordinary, the FAQ and guide sections explain the underlying research basis — and we always recommend consulting a healthcare provider before acting on any protocol.',
  },
];

export default function ContactPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Help &amp; <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Find answers to your peptide questions, browse popular guides, or get in touch directly. Everything you need is below.
          </p>
        </div>

        {/* What Are You Looking For */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-2">What Are You Looking For?</h2>
          <p className="text-slate-400 text-sm mb-6">Jump directly to the most common topics.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topicCards.map(({ label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="glass-card p-5 flex flex-col gap-2 hover:border-neon-green/30 border border-transparent transition-colors group"
              >
                <span className="text-neon-green font-semibold text-sm group-hover:underline">{label}</span>
                <span className="text-slate-500 text-xs leading-relaxed">{desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Resources Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-bold text-white">Popular Resources</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">The most visited pages on this site, in one place.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularResources.map(({ label, href, desc }) => (
              <Link
                key={label}
                href={href}
                className="flex items-start gap-3 bg-dark-700/40 rounded-xl p-4 border border-neon-green/10 hover:border-neon-green/25 transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-neon-green transition-colors">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Most Asked Questions */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-neon-green" />
            <h2 className="text-xl font-bold text-white">Most Asked Questions</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">
            Practical questions about ordering, timing, and using this resource — not covered in the main FAQ.
          </p>
          <div className="space-y-4">
            {mostAskedQuestions.map(({ q, a }) => (
              <div key={q} className="glass-card p-6">
                <h3 className="text-white font-semibold mb-3 flex items-start gap-2">
                  <span className="text-neon-green font-black shrink-0">Q.</span>
                  {q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-5">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Options */}
        <div className="glass-card p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-5 h-5 text-neon-green" />
            <h2 className="text-white font-bold text-xl">Contact Options</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-dark-700/50 rounded-xl p-5 border border-neon-green/10">
              <p className="text-neon-green text-sm font-semibold mb-1">AI Chat Assistant (Instant)</p>
              <p className="text-slate-400 text-sm">
                Use the chat widget in the bottom right corner for instant answers to protocol, dosing, and stacking questions. The assistant is trained on BPC-157 and peptide research and can provide personalized protocol suggestions.
              </p>
            </div>
            <div className="bg-dark-700/50 rounded-xl p-5 border border-neon-green/10">
              <p className="text-neon-green text-sm font-semibold mb-1">Purchase, Shipping &amp; Product Questions</p>
              <p className="text-slate-400 text-sm mb-3">
                For questions about ordering, shipping status, or specific products, visit our recommended supplier directly. They handle all order fulfillment and customer service for purchases.
              </p>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neon-green text-sm font-semibold hover:underline"
              >
                Visit Supplier <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="bg-dark-700/50 rounded-xl p-5 border border-neon-green/10">
              <p className="text-neon-green text-sm font-semibold mb-1">Content &amp; Editorial Questions</p>
              <p className="text-slate-400 text-sm">
                For content corrections, protocol feedback, or editorial inquiries about this site, use the AI chat widget or browse the FAQ. We review all feedback and update content regularly to reflect current research.
              </p>
            </div>
          </div>
        </div>

        {/* About This Site */}
        <div className="glass-card p-8 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-5 h-5 text-neon-green" />
            <h2 className="text-white font-bold text-xl">About This Site</h2>
          </div>

          <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
            <div>
              <h3 className="text-white font-semibold mb-2">What Is BPC-157 Stack?</h3>
              <p>
                BPC-157 Stack is an independent educational resource dedicated to peptide research, protocols, and application. The site covers BPC-157, TB-500, growth hormone secretagogues, anti-aging peptides, GLP-1 agonists, and related compounds. Our goal is to consolidate the most reliable, research-grounded information available on peptide use — presented in a clear, accessible format for anyone exploring this space for the first time or looking to refine an existing protocol.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Who Is This Site For?</h3>
              <p>
                This site is designed for adults interested in peptide research — including athletes seeking accelerated recovery, individuals managing chronic injuries, biohackers pursuing longevity and anti-aging protocols, and anyone curious about the science behind these compounds. The content assumes adult readers capable of independent research and decision-making. We do not market to minors and do not recommend peptide use for those under 21.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Editorial Standards</h3>
              <p>
                All protocols, dosing ranges, and mechanism descriptions are based on published animal and in vitro research, peer-reviewed literature, and well-documented community experience. We distinguish clearly between what is supported by controlled studies and what is extrapolated from community use. We do not publish anecdote-only claims as fact. Where human clinical data is absent, we say so explicitly. Pages are reviewed and updated on a rolling basis as new research emerges.
              </p>
              <p className="mt-2">
                We are not affiliated with any academic institution, pharmaceutical company, or regulatory body. Our recommended supplier is chosen based on consistent COA verification, domestic shipping, and community reputation — not exclusivity agreements or advertising. Our affiliate relationship is disclosed transparently on all outbound supplier links.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Affiliate Disclosure</h3>
              <p>
                This site earns a commission when visitors purchase through the affiliate link to our recommended supplier. This does not affect the price you pay. The affiliate relationship does not influence our editorial content — we would recommend COA-verified sourcing regardless of whether any affiliate program existed. If you prefer to source independently, our FAQ covers how to evaluate any supplier using COA verification standards.
              </p>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-amber-400 font-semibold mb-2">Medical Disclaimer</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    All content on this site is for informational and educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment. Peptides discussed on this site are research compounds and are not FDA-approved for human therapeutic use. Always consult a qualified and licensed healthcare professional before starting any peptide protocol, especially if you have a pre-existing medical condition, are taking prescription medications, are pregnant or breastfeeding, or are under the age of 21. The authors and operators of this site assume no liability for the use or misuse of information presented here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start Your Protocol?</h2>
          <p className="text-slate-400 mb-6">COA-verified peptides from the most trusted US domestic supplier.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2"
            >
              View Peptides <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/faq" className="btn-secondary text-base px-8 py-4">Browse FAQ</Link>
            <Link href="/guide" className="btn-secondary text-base px-8 py-4">Beginner Guide</Link>
          </div>
        </div>

      </div>
    </div>
  );
}
