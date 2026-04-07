import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import BpcRouteRecommender from '@/components/BpcRouteRecommender';

export const metadata: Metadata = {
  title: 'BPC-157 Oral vs Injectable: Which Route Is Better? (2026)',
  description: 'BPC-157 oral vs injectable — complete comparison of bioavailability, effectiveness, cost, and which administration route is best for your specific goals. The definitive guide for 2026.',
  keywords: 'BPC-157 oral vs injectable, BPC-157 oral, BPC-157 injectable, BPC-157 capsules vs injection, how to take BPC-157, BPC-157 bioavailability, BPC-157 subcutaneous vs oral',
  openGraph: {
    title: 'BPC-157 Oral vs Injectable: Which Is Better?',
    description: 'Complete comparison of oral vs injectable BPC-157 — bioavailability, effectiveness, and which to choose.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-oral-vs-injectable',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 Oral vs Injectable: Full Comparison',
    description: 'Which BPC-157 administration route is best? Complete 2026 guide.',
  },
};

const SOURCE_URL = '/out';

const comparison = {
  oral: {
    label: 'Oral (Capsule / Liquid)',
    pros: [
      'Directly treats the GI tract from mouth to colon',
      'No needles — easiest administration',
      'Best for gut health, IBD, IBS, leaky gut',
      'No reconstitution or sterile preparation',
      'Discreet and convenient for daily use',
    ],
    cons: [
      'Lower systemic bioavailability than injection',
      'Less effective for systemic tissue repair (tendons, muscle)',
      'Higher dose may be needed for non-gut goals',
      'Capsule quality varies between suppliers',
    ],
    bestFor: ['Leaky gut, IBD, IBS, GERD', 'Gastric ulcer healing', 'Gut-brain anxiety connection', 'Beginners who want to avoid injections', 'General daily wellness protocol'],
  },
  injectable: {
    label: 'Injectable (Subcutaneous)',
    pros: [
      'Highest systemic bioavailability',
      'Fastest onset for systemic effects',
      'Best for tendon, ligament, muscle, joint healing',
      'Precise dose control',
      'Local injection allows targeting specific injury sites',
    ],
    cons: [
      'Requires needles, syringes, reconstitution',
      'More preparation and sterile technique required',
      'Mild discomfort from injection',
      'Less effective at local gut tissue vs oral route',
    ],
    bestFor: ['Tendon and ligament injuries', 'Joint healing', 'Systemic anti-inflammatory', 'Faster healing timelines', 'Users comfortable with injection protocol'],
  },
};

const scenarios = [
  { goal: 'Leaky gut / IBD / IBS', winner: 'Oral', reason: 'Direct contact with intestinal tissue throughout the GI tract' },
  { goal: 'Tendon / ligament healing', winner: 'Injectable (local)', reason: 'Systemic delivery + local injection near injury site' },
  { goal: 'Anxiety / gut-brain axis', winner: 'Oral', reason: 'Gut healing is the primary mechanism for mood benefits' },
  { goal: 'Joint pain / arthritis', winner: 'Injectable (local)', reason: 'Direct delivery to affected joint area' },
  { goal: 'Post-surgical recovery', winner: 'Both (combined)', reason: 'Systemic + local healing coverage' },
  { goal: 'General wellness', winner: 'Oral', reason: 'Easiest long-term compliance, good systemic distribution' },
  { goal: 'Muscle recovery', winner: 'Injectable', reason: 'Better systemic muscle tissue access' },
  { goal: 'Gastric ulcer', winner: 'Oral', reason: 'Direct coating of gastric mucosa during passage' },
];

const costData = [
  {
    route: 'Oral (500mcg/day)',
    perDose: '$0.50–1.50',
    monthly: '$15–45',
    perMcg: '$0.001–0.003',
    bestROI: 'Gut healing, anxiety, daily wellness',
    notes: 'Capsule form has no prep time. Liquid form from reconstituted powder is cheapest per mcg.',
  },
  {
    route: 'Injectable 5mg vial (250mcg/day)',
    perDose: '$1.00–2.50',
    monthly: '$30–75',
    perMcg: '$0.002–0.005',
    bestROI: 'Tendon/joint repair, fast recovery',
    notes: '5mg vial yields ~20 doses at 250mcg. Bacteriostatic water and syringes add ~$0.15/dose.',
  },
  {
    route: 'Injectable 10mg vial (250mcg/day)',
    perDose: '$0.75–1.50',
    monthly: '$22–45',
    perMcg: '$0.001–0.003',
    bestROI: 'Best value for regular injectable users',
    notes: 'Larger vials reduce per-dose cost by 30–40%. Must be used within 4–6 weeks once reconstituted.',
  },
  {
    route: 'Combined (250mcg oral + 250mcg SC)',
    perDose: '$1.50–3.50',
    monthly: '$45–105',
    perMcg: '$0.002–0.004',
    bestROI: 'Post-surgery, complex multi-system healing',
    notes: 'Covers both GI and systemic healing simultaneously. Most comprehensive but highest monthly cost.',
  },
];

const faqs = [
  { q: 'Is oral BPC-157 as effective as injectable?', a: 'For gut-specific conditions: oral BPC-157 is actually superior to injectable, because it passes directly through the GI tract and contacts the tissue being treated. For systemic applications (tendon healing, joint repair, muscle recovery): injectable BPC-157 has higher systemic bioavailability and is more effective. The "best" route depends entirely on what you\'re treating — there is no universal winner.' },
  { q: 'What is the bioavailability of oral BPC-157?', a: 'BPC-157 has unusual stability in the GI tract compared to most peptides (which are broken down by digestive enzymes). Research suggests meaningful oral bioavailability, though the exact percentage varies by study and individual. The key insight: unlike most injectable peptides, BPC-157 is specifically resistant to gastric acid and enzyme degradation — this is why oral administration is viable.' },
  { q: 'What dose of oral BPC-157 should I take?', a: 'For oral BPC-157: 250–500mcg per day is standard. Some protocols use 500mcg for gut healing, split into two 250mcg doses (AM and PM). Because oral bioavailability is lower than injection for systemic effects, some users increase to 500–1000mcg/day for systemic goals via oral route — though this increases cost.' },
  { q: 'Can I take BPC-157 orally and inject it at the same time?', a: 'Yes — this is a recognized protocol, especially for combined gut and systemic healing goals. A common split: 250mcg oral in the morning (for gut coverage) + 250mcg subcutaneous injection in the evening (for systemic/tissue healing). This covers both local GI tissue and systemic repair pathways simultaneously without doubling the total dose.' },
  { q: 'How do I take BPC-157 orally?', a: 'BPC-157 can be taken orally as: (1) pre-made capsules from a reputable supplier, (2) dissolved in sterile water and drunk — reconstituted BPC-157 can be taken orally just like an injection but swallowed instead. It can also be held sublingually for 30 seconds before swallowing for potentially faster absorption. Take on an empty stomach for best results.' },
  { q: 'Can I mix BPC-157 with other peptides in the same syringe?', a: 'Mixing peptides in the same syringe is common in experienced biohacking communities, but requires caution. BPC-157 is commonly mixed with TB-500 (thymosin beta-4) — a popular combination known as the "BPC/TB stack" used for injury healing. Both are stable in the same reconstitution solution. However, mixing with peptides that have very different pH requirements or that are chemically reactive can cause degradation. Always research compatibility before mixing. Never mix with peptides that require acid or base reconstitution unless the final solution pH is verified. When in doubt, separate injections 30–60 minutes apart are the safest approach.' },
  { q: 'How do I travel with reconstituted BPC-157?', a: 'Reconstituted BPC-157 (lyophilized powder dissolved in bacteriostatic water) must stay refrigerated during travel — it degrades faster at room temperature. For short trips (1–3 days): keep in a small insulated cooler bag with ice packs. For flights: pack in checked luggage with ice packs (TSA allows gel ice packs if frozen solid). Alternatively, travel with lyophilized (unconstituted) powder, which is stable at room temperature for months, and reconstitute at your destination using sterile water from a pharmacy. If traveling internationally with peptides, research the destination country\'s import regulations — most countries treat peptides similarly to the US but some have stricter rules.' },
  { q: 'Does BPC-157 lose potency when swallowed?', a: 'This is a central question about BPC-157 and the answer is: no, not significantly — unlike most peptides. Most injectable peptides are completely destroyed by gastric acid and digestive enzymes, which is why oral administration of peptides like HGH is ineffective. BPC-157 is specifically resistant to gastric acid degradation and enzymatic digestion, which is one of its unique properties. Research demonstrating BPC-157\'s GI healing effects via oral administration confirms that meaningful amounts survive transit through the stomach and small intestine. The oral route does result in lower systemic blood concentrations compared to injection, but for gut-targeted effects, this \'limitation\' is actually an advantage — the peptide stays in contact with GI tissue throughout the full passage.' },
];

export default function Bpc157OralVsInjectablePage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #060c1c 50%, #060610 100%)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'BPC-157', item: 'https://bp157stack.com/products/bpc-157' },
                { '@type': 'ListItem', position: 3, name: 'BPC-157 Oral vs Injectable', item: 'https://bp157stack.com/bpc-157-oral-vs-injectable' },
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
              '@type': 'Article',
              headline: 'BPC-157 Oral vs Injectable: Which Administration Route Is Better?',
              description: 'Complete comparison of oral vs injectable BPC-157 — bioavailability, effectiveness, and which to choose for different goals.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">BPC-157 ADMINISTRATION GUIDE</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6">
            BPC-157: Oral<br />
            <span className="text-emerald-400">vs Injectable</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-3xl">
            The route you choose matters — but not in the way most people think.
            Here's when oral wins, when injectable wins, and when to use both.
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="glass-card p-4 text-center border-t-2 border-blue-500">
              <div className="text-sm font-black text-blue-400">Oral</div>
              <div className="text-slate-400 text-xs mt-1">Best for gut</div>
            </div>
            <div className="glass-card p-4 text-center border-t-2 border-emerald-500">
              <div className="text-sm font-black text-emerald-400">Injectable</div>
              <div className="text-slate-400 text-xs mt-1">Best for systemic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Route Recommender */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 mb-4">
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Interactive Tool</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Which Route is Right for You?</h2>
          <p className="text-slate-400 max-w-2xl">Not sure whether to go oral or injectable? Answer 4 questions to get a personalized recommendation with a sample protocol.</p>
        </div>
        <BpcRouteRecommender />
      </section>

      {/* Side by side */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10">Oral vs Injectable: Complete Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[comparison.oral, comparison.injectable].map((route, i) => (
            <div key={route.label} className={`glass-card p-6 border-t-2 ${i === 0 ? 'border-blue-500' : 'border-emerald-500'}`}>
              <h3 className={`font-black text-xl mb-5 ${i === 0 ? 'text-blue-400' : 'text-emerald-400'}`}>{route.label}</h3>
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Advantages</p>
                <ul className="space-y-1.5">
                  {route.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Limitations</p>
                <ul className="space-y-1.5">
                  {route.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-slate-400 text-sm">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400/60" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Best for</p>
                <ul className="space-y-1">
                  {route.bestFor.map((b) => (
                    <li key={b} className="text-slate-400 text-xs">• {b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bioavailability Deep Dive */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-3">Bioavailability Deep Dive</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">Why most peptides can't be taken orally — and what makes BPC-157 uniquely different.</p>

          <div className="space-y-6 text-slate-300 leading-relaxed">
            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">What Bioavailability Means for Peptides</h3>
              <p className="text-sm mb-3">
                Bioavailability refers to the fraction of an administered substance that reaches systemic circulation and is available to exert biological effects. For a drug administered intravenously, bioavailability is 100% by definition — it enters the bloodstream directly. For oral administration, bioavailability can range from near 0% (most peptides) to 90%+ (small molecules like aspirin).
              </p>
              <p className="text-sm mb-3">
                Peptides face a specific gastrointestinal barrier problem. The stomach environment is highly acidic (pH 1.5–3.5) and loaded with proteolytic enzymes — pepsin, trypsin, chymotrypsin, and others — whose entire biological purpose is to break down peptide bonds. This is how dietary protein is digested into amino acids. Injectable therapeutic peptides like insulin, GLP-1 agonists, and HGH are completely inactivated if swallowed — the same enzymatic machinery that digests your chicken breast will degrade them.
              </p>
              <p className="text-sm">
                This is why virtually all pharmaceutical peptide drugs require injection. Oral peptide delivery remains one of the major unsolved challenges in drug development. Billions of dollars have been spent trying to develop orally bioavailable versions of peptides that currently require injection — with very limited success.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">What Makes BPC-157 Unique</h3>
              <p className="text-sm mb-3">
                BPC-157 (Body Protection Compound 157) is named for the fact that it was originally isolated from gastric juice — the very environment that destroys most peptides. This is the fundamental reason BPC-157 is orally viable: it was designed by evolution to survive the stomach.
              </p>
              <p className="text-sm mb-3">
                Research has demonstrated that BPC-157 shows remarkable resistance to both gastric acid and the major digestive proteases (pepsin, trypsin, chymotrypsin). Its 15-amino acid sequence contains structural features that confer resistance to enzymatic cleavage at the peptide bonds that these enzymes typically target. Unlike insulin (51 amino acids) or HGH (191 amino acids), BPC-157's short length and specific sequence make it structurally resistant to full proteolytic degradation before a therapeutically meaningful fraction reaches the intestinal epithelium.
              </p>
              <p className="text-sm">
                Furthermore, BPC-157's therapeutic effects on gut tissue don't require systemic absorption at all — direct luminal contact with intestinal mucosa activates local healing cascades at the site of contact. This means oral BPC-157's efficacy for gut applications is fundamentally different in mechanism from its injectable systemic effects.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">Research on Oral BPC-157 Absorption</h3>
              <p className="text-sm mb-3">
                Several animal studies have demonstrated BPC-157's efficacy when administered orally, including in drinking water (where concentrations are extremely low), suggesting that the peptide retains activity through the full GI transit. Studies on gastric ulcer healing, inflammatory bowel disease models, and intestinal anastomosis healing all show positive outcomes with oral administration.
              </p>
              <p className="text-sm mb-3">
                The precise oral bioavailability percentage for systemic absorption in humans has not been formally published in peer-reviewed literature as of 2026 — this remains a gap in the research. However, the demonstrated systemic effects of oral BPC-157 in animal models (including effects on wound healing remote from the GI tract, CNS effects, and systemic anti-inflammatory activity) confirm that some fraction achieves systemic circulation.
              </p>
              <p className="text-sm">
                Practical implication: for gut-targeted applications, oral bioavailability of systemic fraction is irrelevant — local tissue contact is the mechanism. For systemic applications, oral dosing is estimated to require 2–4x higher dose than injectable to achieve equivalent systemic concentrations, though the exact ratio is not validated in human pharmacokinetic studies.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-white font-bold text-lg mb-3">Plasma Half-Life Comparison</h3>
              <div className="overflow-x-auto rounded-xl border border-white/10 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Route</th>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Tmax (peak)</th>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Plasma half-life</th>
                      <th className="text-left py-2 px-4 text-slate-400 font-semibold">Duration of action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['IV injection', '~5 min', '~1–2 hours (estimated)', 'Short — research use only'],
                      ['Subcutaneous injection', '30–60 min', '~1–4 hours (estimated)', 'Once or twice daily dosing'],
                      ['Oral / sublingual', '45–90 min', 'Likely similar, local tissue longer', 'Once daily for GI effects'],
                      ['Intranasal', '15–30 min', 'Similar to SC, CNS distribution faster', 'Once or twice daily'],
                    ].map(([route, tmax, half, dur], i) => (
                      <tr key={route} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                        <td className="py-2 px-4 text-white font-medium text-xs">{route}</td>
                        <td className="py-2 px-4 text-emerald-400 text-xs font-semibold">{tmax}</td>
                        <td className="py-2 px-4 text-slate-300 text-xs">{half}</td>
                        <td className="py-2 px-4 text-slate-400 text-xs">{dur}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-xs">Note: Human pharmacokinetic data for BPC-157 is limited. Estimates based on animal studies and clinical extrapolation. The short plasma half-life is why consistent daily dosing is important — BPC-157's healing effects are mediated through receptor activation that initiates cascades lasting beyond the peptide's own presence in plasma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sublingual and Intranasal */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-3">Sublingual and Intranasal Routes</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">Two lesser-known but legitimate BPC-157 administration methods — each with specific advantages for different goals.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-t-2 border-purple-500">
            <h3 className="text-purple-400 font-black text-lg mb-4">Sublingual (Under the Tongue)</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Sublingual administration involves holding reconstituted BPC-157 solution under the tongue for 60–90 seconds before swallowing. The sublingual mucosa has rich vascularity and thin epithelium, allowing some peptide absorption directly into the bloodstream — bypassing first-pass metabolism in the gut.
            </p>
            <div className="space-y-3">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3">
                <div className="text-purple-400 text-xs font-bold uppercase mb-1">Advantages over oral swallowing</div>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li>• Faster onset than standard oral (direct vascular absorption)</li>
                  <li>• Bypasses some gastric acid exposure</li>
                  <li>• Potentially higher systemic fraction than swallowing alone</li>
                  <li>• No needles required</li>
                </ul>
              </div>
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Protocol</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  250–500mcg dissolved in 0.5–1mL sterile water. Hold under tongue for 60–90 seconds, then swallow the remainder. Take fasted for best absorption. Anecdotally rated as providing faster effects than swallowed capsules.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 border-t-2 border-pink-500">
            <h3 className="text-pink-400 font-black text-lg mb-4">Intranasal (For CNS / Brain Benefits)</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Intranasal BPC-157 is an emerging route specifically targeting CNS delivery. The olfactory epithelium in the nasal cavity provides a direct anatomical pathway to the brain via the olfactory nerve — bypassing the blood-brain barrier. This is why intranasal delivery is used for CNS drugs (naloxone, ketamine, desmopressin).
            </p>
            <div className="space-y-3">
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-3">
                <div className="text-pink-400 text-xs font-bold uppercase mb-1">Best use cases</div>
                <ul className="space-y-1 text-slate-400 text-xs">
                  <li>• Anxiety, depression, and mood regulation</li>
                  <li>• Traumatic brain injury recovery</li>
                  <li>• CNS inflammation and neuroinflammation</li>
                  <li>• Concussion protocol</li>
                </ul>
              </div>
              <div>
                <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">Protocol</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  100–250mcg per nostril in 0.1–0.2mL sterile water, using a nasal atomizer. Tilt head back slightly. 1–2 doses per day. Dose is lower than oral because nasal-to-brain delivery is more direct. Use pharmaceutical-grade atomizer (not a repurposed spray bottle) for proper droplet size.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-5 mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: 'Sublingual', bio: 'Medium-high', onset: '15–30 min', best: 'Needle-free systemic' },
              { label: 'Oral (swallow)', bio: 'Medium (gut local)', onset: '45–90 min', best: 'GI tract healing' },
              { label: 'Intranasal', bio: 'Medium + CNS direct', onset: '10–20 min', best: 'Brain / CNS effects' },
              { label: 'Subcutaneous', bio: 'High systemic', onset: '30–60 min', best: 'Tissue repair' },
            ].map((r) => (
              <div key={r.label} className="bg-white/3 rounded-xl p-3">
                <div className="text-white font-bold text-sm mb-2">{r.label}</div>
                <div className="text-slate-500 text-[10px] uppercase">Bioavailability</div>
                <div className="text-emerald-400 text-xs font-semibold mb-1">{r.bio}</div>
                <div className="text-slate-500 text-[10px] uppercase">Onset</div>
                <div className="text-slate-300 text-xs font-semibold mb-1">{r.onset}</div>
                <div className="text-slate-500 text-[10px] uppercase">Best for</div>
                <div className="text-slate-400 text-xs">{r.best}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white mb-8">Which Route for Your Goal?</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Goal</th>
                  <th className="text-left py-3 px-4 text-emerald-400 font-bold">Recommended Route</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map(({ goal, winner, reason }, i) => (
                  <tr key={goal} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4 text-white font-semibold">{goal}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${winner === 'Oral' ? 'bg-blue-500/10 text-blue-400' : winner.includes('local') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'}`}>{winner}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-white mb-3">Cost Comparison Over Time</h2>
        <p className="text-slate-400 mb-8 max-w-2xl">Real per-dose and monthly cost breakdowns for each route — so you can make an informed decision based on your budget and goals.</p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Route / Format</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Per Dose</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Monthly Cost</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Cost per mcg</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Best ROI For</th>
                <th className="text-left py-3 px-4 text-slate-400 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {costData.map((row, i) => (
                <tr key={row.route} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                  <td className="py-3 px-4 text-white font-semibold text-sm">{row.route}</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold text-sm">{row.perDose}</td>
                  <td className="py-3 px-4 text-slate-300 font-semibold text-sm">{row.monthly}</td>
                  <td className="py-3 px-4 text-slate-400 text-xs">{row.perMcg}</td>
                  <td className="py-3 px-4 text-slate-300 text-xs">{row.bestROI}</td>
                  <td className="py-3 px-4 text-slate-500 text-xs max-w-[200px]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-xs mt-4">Prices based on research-grade BPC-157 pricing ranges as of 2026. Injectable costs include bacteriostatic water and syringe overhead (~$0.10–0.20/injection). Oral capsule pricing varies widely by supplier — always verify COA before purchasing.</p>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10 text-center">BPC-157 Oral vs Injectable FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{q}</span>
                <span className="text-emerald-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-white mb-3">Get BPC-157</h2>
          <p className="text-slate-400 mb-6">Injectable (lyophilized) and oral BPC-157 — COA-verified, US domestic.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View BPC-157 <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/how-to-reconstitute-peptides" className="btn-secondary px-8 py-4">Reconstitution Guide</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-oral-vs-injectable" />
    </div>
  );
}
