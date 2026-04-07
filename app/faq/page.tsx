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

const SOURCE_URL = '/out';

const faqs = [
  {
    id: 'basics',
    category: 'BPC-157 Basics',
    items: [
      { q: 'What is BPC-157?', a: 'BPC-157 (Body Protection Compound 157) is a 15-amino acid peptide derived from a protein found in human gastric juice. It has been studied extensively in animal and cell models for its remarkable tissue-healing properties, including tendon, ligament, muscle, gut, and nerve repair.' },
      { q: 'Is BPC-157 safe?', a: 'BPC-157 has an exceptional safety profile. It has no known LD50 (lethal dose) in animal studies — meaning no dose has been found to cause death. It has no hormonal activity and does not suppress natural hormone production. No significant adverse effects have been reported at standard doses.' },
      { q: 'Can BPC-157 be taken orally?', a: 'Yes — BPC-157 is unique among peptides in that it is gastric acid stable and maintains systemic effectiveness when taken orally. Most peptides are destroyed in the digestive tract. BPC-157 can be taken as a capsule or dissolved in water for oral use, making it accessible for those who prefer not to inject.' },
      { q: 'How long does BPC-157 take to work?', a: 'Most users report pain reduction and early healing signs within 2-4 days. Structural tendon/ligament healing takes 4-8 weeks. Gut healing typically occurs within 1-3 weeks. Results depend on injury severity, dose, and protocol consistency.' },
      { q: 'Is BPC-157 a hormone or steroid?', a: 'No. BPC-157 is neither a hormone nor a steroid. It is a peptide — a short chain of amino acids. It has no androgenic, estrogenic, or anabolic steroid activity. It does not show up on standard sports drug tests and does not affect the HPGA (hypothalamic-pituitary-gonadal axis). This makes it significantly safer than hormonal compounds and suitable for long-term use without the concerns associated with hormonal therapies.' },
    ],
  },
  {
    id: 'dosing',
    category: 'Dosing & Protocol',
    items: [
      { q: 'What is the standard BPC-157 dose?', a: 'Standard research dose: 250-500mcg per day. For injection: once or twice daily subcutaneous. For oral: once daily on an empty stomach. For acute injuries, higher doses (500mcg twice daily) during the loading phase.' },
      { q: 'How do I reconstitute peptides?', a: 'Add bacteriostatic water to the lyophilized (dry) peptide powder using a sterile syringe. Standard reconstitution: 1mL bacteriostatic water per 5mg vial = 5,000mcg/mL concentration. For a 250mcg dose, draw 50μL (0.05mL) = 5IU on a standard 1mL insulin syringe.' },
      { q: 'What syringe should I use?', a: 'Use insulin syringes with 29-31 gauge needles for subcutaneous injections. These are very small and nearly painless. They are available at pharmacies. Do not reuse syringes.' },
      { q: 'How long should I run BPC-157?', a: 'For injury healing: 4-12 weeks depending on severity. For gut healing: 4-8 weeks. For maintenance/prevention: indefinite at lower doses. BPC-157 does not cause receptor desensitization, so extended use is considered safe.' },
      { q: 'Should BPC-157 be injected near the injury site?', a: 'For injury healing, local subcutaneous injection near the injury site is more potent than distal injection, though both approaches produce results. Inject 2-3cm away from the injury subcutaneously — not directly into a tendon or ligament. For gut healing or systemic effects, any subcutaneous site (abdomen, thigh) works equally well. Oral dosing is as effective as distal injection for gut-related applications.' },
    ],
  },
  {
    id: 'stacking',
    category: 'Stacking',
    items: [
      { q: 'What is the best stack with BPC-157?', a: 'BPC-157 + TB-500 is the gold standard healing stack. BPC-157 provides targeted local healing while TB-500 adds systemic repair and stem cell mobilization. Together they reduce healing time by 50-70% compared to natural recovery.' },
      { q: 'Can I stack BPC-157 with growth hormone peptides?', a: 'Yes — BPC-157 stacks well with Ipamorelin + CJC-1295. The GH peptides accelerate anabolic repair while BPC-157 addresses inflammation and tissue-specific healing. This is a popular stack for athletes and bodybuilders.' },
      { q: 'Should I use Ipamorelin alone or with CJC-1295?', a: 'Always use Ipamorelin with CJC-1295 (no DAC) for maximum GH output. Ipamorelin alone produces a moderate GH pulse; combined with CJC-1295, the effect is 8-10x amplified due to synergistic receptor activation. This is the gold standard combination.' },
      { q: 'Can I run multiple peptide stacks simultaneously?', a: 'Yes, with some planning. Most peptides target different receptors and pathways, so simultaneous use is generally fine. A common advanced protocol: BPC-157 + TB-500 for healing, CJC-1295 + Ipamorelin at bedtime for GH pulse, and GHK-Cu topically for skin/collagen. Keep stacks to 3-4 peptides maximum until you understand how each affects you individually. Start single, then layer.' },
      { q: 'What is the best stack for body recomposition?', a: 'For fat loss and lean muscle gain simultaneously, the most effective stack is: Semaglutide or Tirzepatide (GLP-1 agonist) for appetite regulation and metabolic improvement + CJC-1295/Ipamorelin for GH-driven fat oxidation and muscle preservation + BPC-157 for recovery and joint protection during training. This stack targets three distinct mechanisms: appetite/insulin signaling, GH secretion, and tissue repair.' },
    ],
  },
  {
    id: 'sourcing',
    category: 'Sourcing & Quality',
    items: [
      { q: 'Where should I source peptides?', a: 'We recommend sourcing exclusively from COA-verified suppliers. Look for suppliers that provide full certificates of analysis (COA) for every batch and ship US domestically. Never use sources that don\'t provide COAs.' },
      { q: 'What is a certificate of analysis (COA)?', a: 'A COA is a third-party lab test confirming the purity, identity, and concentration of a peptide. It should show 98%+ purity and match the label claims. Always request a COA and verify it before use.' },
      { q: 'Why is source quality so important?', a: 'Low-quality peptides may contain impurities, incorrect amino acid sequences, or bacterial contamination. This can cause injection site reactions, ineffective results, or in rare cases, serious health issues. COA-verified peptides from trusted suppliers eliminate this risk.' },
      { q: 'What is the difference between research-grade and pharmaceutical-grade peptides?', a: 'Research-grade peptides are produced for laboratory and research purposes. They are not FDA-approved as drugs, but quality suppliers produce them to pharmaceutical-grade standards with HPLC purity testing, mass spectrometry confirmation, and sterility testing. Pharmaceutical-grade means FDA-approved for human use — very few peptides have this status. Research-grade from a reputable, COA-verified vendor is what experienced users seek.' },
      { q: 'How do I verify a peptide COA is legitimate?', a: 'A legitimate COA should show the testing lab name and contact (usually a third-party lab, not the seller\'s own lab), HPLC chromatography showing the purity percentage (look for 98%+), mass spectrometry data confirming correct molecular weight, the lot number matching your vial, and a date. Red flags: COAs with no lab contact info, COAs that look like the same document for every product, or purity claims with no supporting data.' },
    ],
  },
  {
    id: 'applications',
    category: 'Specific Applications',
    items: [
      { q: 'Does BPC-157 work for gut issues?', a: 'Yes — gut healing is one of BPC-157\'s strongest documented effects. It repairs intestinal barrier integrity (leaky gut), reduces inflammation in IBD and Crohn\'s-like conditions, and protects against NSAID-induced gut damage. Oral administration delivers BPC-157 directly to the intestinal lining.' },
      { q: 'Can BPC-157 heal tendons?', a: 'Yes — tendon healing is the most widely studied application. BPC-157 upregulates growth hormone receptors in tendon fibroblasts, stimulates collagen production, and improves blood vessel formation in tendon tissue. Studies show significant tendon repair in 4-6 weeks at standard doses.' },
      { q: 'What peptides are best for anti-aging?', a: 'The most evidence-backed anti-aging stack is Epithalon + GHK-Cu + SS-31. Epithalon extends telomeres (28% mortality reduction in human trials), GHK-Cu reverses 31% of aged gene expression, and SS-31 repairs mitochondrial function. Run as annual cycles for long-term longevity benefits.' },
      { q: 'Can peptides help with neurological recovery?', a: 'Several peptides have documented neuroprotective and neuroregenerative effects. BPC-157 has shown nerve repair in crush and transection injury models. Selank and Semax both enhance BDNF (brain-derived neurotrophic factor) and are used for cognitive enhancement and anxiety reduction. Dihexa is among the most potent BDNF-enhancing compounds studied, showing significant neurogenesis in animal models. Always research current literature for any neurological application.' },
      { q: 'Which peptides are best for skin and collagen?', a: 'GHK-Cu (copper peptide) is the gold standard for skin rejuvenation. It stimulates collagen and elastin synthesis, activates over 4,000 genes involved in skin repair, and reverses up to 31% of age-related gene expression changes. Apply topically 1-2x daily or use systemically at 1-2mg 3x weekly. Pair with BPC-157 for post-procedure healing, and Epithalon for systemic anti-aging benefits.' },
    ],
  },
  {
    id: 'side-effects',
    category: 'Side Effects & Safety',
    items: [
      { q: 'What are the most common side effects of BPC-157?', a: 'BPC-157 is remarkably well-tolerated. The most commonly reported effects are mild injection site redness or swelling (transient, resolves within hours), occasional nausea when taken orally on a full stomach, and mild fatigue in the first few days as the body responds to accelerated healing. Serious adverse effects are not reported at standard research doses. It has no hormonal side effects, no liver toxicity, and no cardiovascular burden.' },
      { q: 'Can BPC-157 cause cancer or tumor growth?', a: 'This concern arises because BPC-157 promotes angiogenesis (blood vessel formation). However, the research does not support a tumor-promoting effect — in fact, several studies show BPC-157 has anti-tumor effects in certain cancer models. It does not stimulate cell proliferation in a non-specific way. That said, if you have an active malignancy or are in cancer treatment, consult an oncologist before using any peptide that affects angiogenesis.' },
      { q: 'Are there peptides I should avoid stacking?', a: 'Most peptides are safe to combine, but a few interactions are worth noting. Avoid stacking two GLP-1 agonists simultaneously (e.g., Semaglutide + Tirzepatide). Be cautious stacking multiple growth hormone secretagogues at high doses, as excessive GH pulsing can increase IGF-1 beyond normal ranges. GHRH analogues like CJC-1295 should be cycled off periodically. Also be aware that some peptides (like Melanotan-II) have significant systemic effects that amplify when combined with other vasoactive peptides.' },
      { q: 'What are the risks of improperly reconstituted peptides?', a: 'Improper reconstitution is one of the most common sources of adverse reactions. Using tap water or distilled water instead of bacteriostatic water can introduce bacteria into multi-use vials. Using too little water creates dangerously concentrated solutions where dosing errors become amplified. Reconstituting with hot water can denature (destroy) the peptide. Always use bacteriostatic water, a clean environment, alcohol-swab the vial tops, and store reconstituted peptides in the refrigerator.' },
      { q: 'Can peptides interact with medications?', a: 'Most peptides have minimal drug-interaction profiles due to their receptor specificity and rapid enzymatic degradation. However, some considerations exist: GLP-1 agonists (Semaglutide) can potentiate the effect of insulin and oral hypoglycemics — diabetics should monitor blood glucose closely. Selank and Semax may affect anxiolytic medication effects. BPC-157 may reduce the gastric damage caused by NSAIDs, potentially allowing higher NSAID tolerance than is safe. Always disclose peptide use to your prescribing physician.' },
    ],
  },
  {
    id: 'women',
    category: 'Peptides for Women',
    items: [
      { q: 'Are peptides safe for women to use?', a: 'Yes. Most research peptides — BPC-157, TB-500, GHK-Cu, Epithalon, Selank, CJC-1295/Ipamorelin — have the same safety and efficacy profile in women as in men. They are non-hormonal and do not affect estrogen, progesterone, or androgen levels. Women tend to respond similarly to men at the same weight-adjusted doses. Start at the lower end of dosing ranges and assess response before increasing.' },
      { q: 'What are the best peptides for women specifically?', a: 'Women particularly benefit from: GHK-Cu for skin, hair, and collagen (anti-aging and post-partum skin recovery), BPC-157 for connective tissue and joint health (women have higher ACL and tendon injury rates), Epithalon for menopause-related hormonal aging (telomere extension supports endocrine resilience), Semaglutide for weight management (highly effective in women with PCOS or metabolic syndrome), and Selank for anxiety and stress regulation, which disproportionately affects women.' },
      { q: 'Can women use GH peptides like CJC-1295/Ipamorelin?', a: 'Yes. Women produce GH in a pulsatile pattern similar to men, though typically with higher basal GH levels. CJC-1295 + Ipamorelin amplifies the natural GH pulse without disrupting baseline levels. Women using this stack report improved body composition, better sleep quality, faster recovery, and improved skin quality. Dose conservatively (100-200mcg Ipamorelin per pulse) and inject before bed to align with the natural overnight GH release.' },
      { q: 'Should women use peptides differently during their menstrual cycle?', a: 'No strict protocol changes are required, but some women report heightened sensitivity to peptide effects during the luteal phase (post-ovulation). This may be due to progesterone\'s interaction with various receptors. Some women prefer to reduce GH secretagogue doses slightly in the week before menstruation. BPC-157 and GHK-Cu can be used continuously without cycle consideration. If using GLP-1 agonists, monitor appetite changes as hunger varies significantly across the cycle.' },
      { q: 'Are peptides safe during pregnancy or breastfeeding?', a: 'No peptides should be used during pregnancy or breastfeeding unless under direct physician supervision. While BPC-157 actually has studies showing protective effects on fetal development in some animal models, the lack of human safety data means the precautionary principle applies. GLP-1 agonists are specifically contraindicated during pregnancy. Discontinue all peptide use when trying to conceive and resume only after consulting a healthcare provider post-delivery.' },
    ],
  },
  {
    id: 'cycling',
    category: 'Cycling & Long-Term Use',
    items: [
      { q: 'Do peptides require cycling (on/off periods)?', a: 'It depends on the peptide. BPC-157 and GHK-Cu do not downregulate their receptors and can be used continuously without tolerance developing. Growth hormone secretagogues (CJC-1295, Ipamorelin, GHRP-2) should be cycled — typical protocol: 12 weeks on, 4-6 weeks off. Epithalon is used in short annual cycles (10-20 days twice yearly). Semaglutide is typically used continuously for weight management or in defined cycles for specific goals.' },
      { q: 'What happens if I stop peptides — does the healing reverse?', a: 'No. Healing that has already occurred is permanent structural change. If BPC-157 repaired a tendon, that repair does not reverse when you stop. The same applies to gut barrier repair, nerve regeneration, and collagen remodeling. Where you lose benefit on cessation is in the ongoing anti-inflammatory and protective signaling — so if you stop while still injured, healing slows back to its natural rate. Finish your protocol before stopping.' },
      { q: 'Can I use peptides long-term without health risks?', a: 'Most non-hormonal peptides (BPC-157, GHK-Cu, Epithalon, Selank) have excellent long-term safety profiles with no documented accumulation toxicity, organ stress, or endocrine disruption. GH secretagogues should not be used continuously for more than 12 weeks at a time, as persistently elevated GH/IGF-1 could theoretically increase insulin resistance or promote soft tissue growth. GLP-1 agonists have long-term safety data from diabetic populations showing cardiovascular and renal benefits with extended use.' },
      { q: 'How do I plan a year-round peptide protocol?', a: 'A practical annual framework: Q1 — BPC-157 + TB-500 healing cycle if needed, CJC-1295/Ipamorelin 12-week cycle. Q2 — Maintenance/off-cycle, GHK-Cu topical ongoing. Q3 — Second GH secretagogue cycle, Semaglutide if body composition is a goal. Q4 — Epithalon 10-day cycle (annually), begin planning Q1 targets. Keep a log of peptides used, doses, and subjective outcomes to refine your protocol year over year.' },
      { q: 'At what point should someone consider a break from all peptides?', a: 'A structured 4-6 week complete peptide holiday once or twice per year is a reasonable practice, especially for heavy stackers. Signs that a break may be beneficial: blunted response to previously effective peptides, injection site fatigue, persistent low-grade nausea, or difficulty sleeping on GH peptides. Use the break period to reassess goals, get baseline bloodwork, and plan the next protocol. BPC-157 can be resumed as-needed for acute injuries even during a general break.' },
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
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Peptide <span className="gradient-text">FAQ</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Answers to the most common questions about BPC-157 and peptides — across {allFaqItems.length} detailed entries.
          </p>
        </div>

        {/* Quick Jump Navigation */}
        <div className="glass-card p-5 mb-12">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Quick Jump</p>
          <div className="flex flex-wrap gap-2">
            {faqs.map(({ id, category }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-xs px-3 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green hover:bg-neon-green/20 transition-colors"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQs by category */}
        <div className="space-y-12">
          {faqs.map(({ id, category, items }) => (
            <div key={category} id={id}>
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

        {/* Still Have Questions */}
        <div className="mt-14 mb-8 glass-card p-8">
          <h2 className="text-xl font-bold text-white mb-2">Still Have Questions?</h2>
          <p className="text-slate-400 text-sm mb-6">
            Dive deeper with our comprehensive guides and resources below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/guide"
              className="flex flex-col gap-1 bg-dark-700/50 rounded-xl p-4 border border-neon-green/10 hover:border-neon-green/30 transition-colors group"
            >
              <span className="text-neon-green text-sm font-semibold group-hover:underline">Beginner Guide</span>
              <span className="text-slate-500 text-xs">Step-by-step instructions for reconstitution, dosing, and injecting peptides safely.</span>
            </Link>
            <Link
              href="/products"
              className="flex flex-col gap-1 bg-dark-700/50 rounded-xl p-4 border border-neon-green/10 hover:border-neon-green/30 transition-colors group"
            >
              <span className="text-neon-green text-sm font-semibold group-hover:underline">Product Directory</span>
              <span className="text-slate-500 text-xs">Browse individual peptide profiles with dosing, applications, and cycle guides.</span>
            </Link>
            <Link
              href="/stacks"
              className="flex flex-col gap-1 bg-dark-700/50 rounded-xl p-4 border border-neon-green/10 hover:border-neon-green/30 transition-colors group"
            >
              <span className="text-neon-green text-sm font-semibold group-hover:underline">Stack Protocols</span>
              <span className="text-slate-500 text-xs">Pre-built stacks for healing, anti-aging, GH optimization, and body recomposition.</span>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4 p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Start?</h2>
          <p className="text-slate-400 mb-6">Get COA-verified peptides from the most trusted source.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/guide" className="btn-secondary text-base px-8 py-4">Read Beginner Guide</Link>
          </div>
        </div>
      </div>

      <InternalLinks path="/faq" />
    </div>
  );
}
