import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, FlaskConical, Calendar, Target, BookOpen } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'BPC-157 vs TB-500: Which Is Better for Healing? | Complete 2026 Comparison',
  description: 'BPC-157 vs TB-500 — complete comparison of mechanisms, dosing, best use cases, and why most protocols use both. Find out which healing peptide is right for your injury.',
  keywords: 'BPC-157 vs TB-500, BPC-157 vs TB-500 which is better, BPC-157 vs TB-500 difference, TB-500 vs BPC-157 for injury, BPC-157 TB-500 comparison',
  openGraph: {
    title: 'BPC-157 vs TB-500: Which Is Better for Healing?',
    description: 'Complete comparison of BPC-157 and TB-500 — mechanisms, dosing, and which to use for your injury type.',
    type: 'article',
    url: 'https://www.bp157stack.com/bpc-157-vs-tb-500',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 vs TB-500: Which Is Better for Healing?',
    description: 'BPC-157 vs TB-500 — complete comparison of mechanisms, dosing, and which to use.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const comparison = [
  { feature: 'Mechanism', bpc: 'Local healing — upregulates GHR in fibroblasts, activates VEGF', tb: 'Systemic healing — mobilizes stem cells body-wide via actin binding' },
  { feature: 'Healing Scope', bpc: 'Local/targeted at injury site + gut via oral route', tb: 'Systemic — full body, including remote sites from injection' },
  { feature: 'Best For', bpc: 'Gut, tendon, ligament, nerve, bone, muscle injuries', tb: 'Systemic inflammation, flexibility, muscle tears, cardiac tissue' },
  { feature: 'Administration', bpc: 'Subcutaneous or oral (gastric acid stable)', tb: 'Subcutaneous only (not orally active)' },
  { feature: 'Half-Life', bpc: 'Short (~4 hours) — taken once or twice daily', tb: 'Medium (~24–48 hours) — taken 1–2× per week' },
  { feature: 'Results Timeline', bpc: 'Pain reduction in 2–4 days, structural repair at 4–8 weeks', tb: 'Flexibility improvement in 1–2 weeks, repair at 4–6 weeks' },
  { feature: 'Research Base', bpc: '100+ peer-reviewed studies, studied since 1991', tb: 'Multiple animal and in vitro studies, less research than BPC-157' },
  { feature: 'Safety Profile', bpc: 'No known LD50, no hormonal activity', tb: 'Extremely well tolerated, naturally occurring peptide fragment' },
  { feature: 'Gut Healing', bpc: '✅ Best option — repairs intestinal wall directly', tb: '🔶 Reduces systemic inflammation but no direct gut-wall repair' },
  { feature: 'Flexibility', bpc: '🔶 Minor improvement', tb: '✅ Significant and consistent flexibility improvement' },
  { feature: 'Nerve Repair', bpc: '✅ Documented axonal growth and neurite outgrowth', tb: '✅ Crosses BBB — neurological tissue healing' },
  { feature: 'Cost', bpc: 'Lower — smaller peptide, lower production cost', tb: 'Higher — larger peptide, more complex to produce' },
];

const injuryMatrix = [
  { injury: 'ACL / Knee Ligament Tear', bpc: '✅', tb: '✅', both: '⭐ Best', reasoning: 'BPC-157 stimulates local fibroblast growth; TB-500 provides systemic stem cell support and anti-inflammation across the entire joint environment.' },
  { injury: 'Achilles Tendinopathy', bpc: '✅', tb: '✅', both: '⭐ Best', reasoning: 'BPC-157 activates tendon-specific transcription factor Scx and collagen type I synthesis; TB-500 reduces systemic inflammatory load that impairs chronic tendon healing.' },
  { injury: 'Rotator Cuff Strain / Tear', bpc: '✅', tb: '✅', both: '⭐ Best', reasoning: 'Both peptides together produce faster collagen remodeling in shoulder tissue than either alone. TB-500 is especially valuable for reducing adjacent muscle inflammation.' },
  { injury: 'Leaky Gut / IBD / Crohn\'s', bpc: '⭐ Best', tb: '—', both: 'BPC-157 Only', reasoning: 'BPC-157 is derived from gastric juice and has a direct gut-wall repair mechanism. TB-500 has no documented intestinal mucosal healing action.' },
  { injury: 'Large Muscle Tear', bpc: '✅', tb: '⭐ Best', reasoning: 'TB-500 excels here — its actin-binding and stem cell mobilization mechanisms are most impactful for bulk muscle tissue recovery. BPC-157 adds localized vascular repair.' },
  { injury: 'Nerve Damage / Neuropathy', bpc: '✅', tb: '✅', both: '⭐ Best', reasoning: 'BPC-157 promotes axonal outgrowth and myelination locally; TB-500 crosses the blood-brain barrier and has documented neurological tissue healing in CNS models.' },
  { injury: 'Stress Fracture / Bone', bpc: '✅', tb: '—', both: 'BPC-157 Priority', reasoning: 'BPC-157 has the stronger bone-healing data — it upregulates BMP-2 and promotes osteoblast activity. TB-500 is less studied for bone-specific repair.' },
  { injury: 'Systemic Inflammation / Multiple Sites', bpc: '—', tb: '⭐ Best', both: 'TB-500 Priority', reasoning: 'When inflammation is systemic rather than localized, TB-500\'s body-wide stem cell mobilization and anti-inflammatory action outperforms localized BPC-157.' },
  { injury: 'Post-Surgery Recovery', bpc: '✅', tb: '✅', both: '⭐ Best', reasoning: 'The combination accelerates every stage of wound healing — acute inflammation resolution, fibroplasia, angiogenesis, and tissue remodeling — simultaneously.' },
  { injury: 'Sprain (Minor, Acute)', bpc: '⭐ Best', tb: '—', both: 'BPC-157 Only', reasoning: 'Minor acute sprains respond well to BPC-157 alone for cost-effectiveness. The localized healing is sufficient; systemic stem cell mobilization is overkill for Grade I sprains.' },
];

const faqs = [
  { q: 'BPC-157 vs TB-500: which should I take?', a: 'For gut issues or localized injuries (tendon, ligament, nerve): prioritize BPC-157. For systemic inflammation, flexibility, or large muscle tears where you want body-wide stem cell mobilization: prioritize TB-500. For most injuries, the best answer is both — they are complementary, not redundant, and their mechanisms don\'t overlap.' },
  { q: 'Can you take BPC-157 and TB-500 together?', a: 'Yes — BPC-157 and TB-500 are the most commonly combined healing peptides precisely because their mechanisms are complementary. BPC-157 handles local healing at the injury site; TB-500 provides systemic repair and stem cell mobilization. There is no negative interaction between them. Animal studies show 50–70% faster healing with the combination vs. either alone.' },
  { q: 'Is BPC-157 or TB-500 better for tendons?', a: 'Both help, but BPC-157 is more targeted for tendon healing specifically. It activates the tendon-specific transcription factor Scx, stimulates collagen type I synthesis, and upregulates growth hormone receptors in tendon fibroblasts. TB-500 adds systemic stem cell support and reduces inflammation. For tendon injuries like Achilles, rotator cuff, or ACL, the combination is optimal.' },
  { q: 'Is BPC-157 or TB-500 better for gut healing?', a: 'BPC-157 is clearly superior for gut healing and is the only choice if gut healing is your primary goal. BPC-157 is derived from human gastric juice and is designed for gut tissue repair — it heals intestinal barrier integrity, reduces IBD inflammation, and protects against NSAID-induced gut damage. TB-500 does not have direct gut healing properties.' },
  { q: 'Which peptide works faster — BPC-157 or TB-500?', a: 'BPC-157 typically produces faster initial pain relief (2–4 days) due to its rapid local anti-inflammatory and blood flow effects. TB-500\'s flexibility improvements often appear within the first 1–2 weeks. Both peptides show meaningful structural healing at the 4–8 week mark. For the fastest overall recovery, using both simultaneously is more effective than either alone.' },
  { q: 'Does TB-500 cause cancer?', a: 'This is a widely searched concern and the short answer is: no evidence supports this in the research literature. Thymosin Beta-4 (the full protein TB-500 is derived from) has been studied extensively, including in oncology contexts. Some early concern arose from the fact that TB-500 promotes angiogenesis and cell migration — mechanisms also used by tumors. However, multiple animal studies using TB-500 have not shown tumor promotion or cancer acceleration. The peptide does not cause uncontrolled cell proliferation. It is worth noting that anyone with active cancer or a personal history of cancer should consult a physician before using any peptide that affects cellular growth pathways.' },
  { q: 'Can BPC-157 and TB-500 be mixed in the same syringe?', a: 'Yes — BPC-157 and TB-500 are commonly mixed in the same syringe and injected together. They do not chemically interact with each other in solution. The standard approach is to reconstitute each separately with bacteriostatic water, then draw the desired volume of each into one insulin syringe immediately before injection. Both are subcutaneous injections. The only practical note: keep combined volume reasonable (typically under 1–1.5mL total).' },
  { q: 'Where is the best place to source BPC-157 and TB-500?', a: 'The most important criteria when sourcing peptides are third-party COA (Certificate of Analysis) verification, US domestic manufacturing, and HPLC purity testing at 98%+ purity. Apollo Peptide Sciences meets all of these criteria and is the source we recommend. Avoid suppliers who cannot provide verifiable COA documents or who source from overseas manufacturers with no quality testing.' },
  { q: 'Does the BPC-157 + TB-500 combination work for nerve regeneration?', a: 'Yes — nerve regeneration is one of the strongest use cases for the combination. BPC-157 has documented promotion of axonal outgrowth, Schwann cell proliferation, and neurite formation in peripheral nerve injury models. TB-500 adds a complementary mechanism by crossing the blood-brain barrier and accelerating repair in both peripheral and central nervous system tissue. Studies in sciatic nerve crush and spinal cord injury models show that the combination produces faster return of function than either peptide alone. Both are used in research protocols for peripheral neuropathy, nerve crush injuries, and post-surgical nerve recovery.' },
];

export default function BpcVsTb500Page() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #060610 0%, #071a10 50%, #060610 100%)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'BPC-157 vs TB-500', item: 'https://www.bp157stack.com/bpc-157-vs-tb-500' },
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
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">HEALING PEPTIDE COMPARISON</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            BPC-157 vs TB-500:<br />
            <span style={{ color: '#00ff88' }}>Which Is Better for Healing?</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Both are the world&apos;s most studied healing peptides. But they work completely differently —
            and understanding the difference is the key to getting the fastest possible recovery.
          </p>
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-3 text-emerald-700 font-semibold">
            Short answer: Use both. They&apos;re complementary, not competing.
          </div>
        </div>
      </section>

      {/* Head-to-head summary */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-black text-emerald-400 mb-2">BPC-157</h2>
            <p className="text-gray-500 text-sm mb-6">Local healer — targets the specific injury site</p>
            <ul className="space-y-3">
              {['Works orally (gastric acid stable)', 'Best for gut, nerve, tendon, and ligament injuries', 'Fastest for localized pain relief (2–4 days)', '100+ peer-reviewed studies — most researched peptide', 'Activates healing pathways directly at injury site', 'No hormonal activity — no PCT needed'].map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-8">
            <h2 className="text-2xl font-black text-blue-400 mb-2">TB-500</h2>
            <p className="text-gray-500 text-sm mb-6">Systemic healer — mobilizes repair body-wide</p>
            <ul className="space-y-3">
              {['Mobilizes stem cells from bone marrow to injury', 'Best for systemic inflammation and flexibility', 'Dramatically improves range of motion (1–2 weeks)', 'Crosses blood-brain barrier — neurological healing', 'Naturally occurring peptide fragment (Thymosin Beta-4)', 'Dosed 1–2× per week vs. daily BPC-157'].map((p) => (
                <li key={p} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full comparison table */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Full Comparison Table</h2>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0,255,136,0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(0,255,136,0.05)' }}>
                <th className="text-left py-4 px-5 text-gray-500 font-semibold">Feature</th>
                <th className="text-left py-4 px-5 text-emerald-400 font-bold">BPC-157</th>
                <th className="text-left py-4 px-5 text-blue-400 font-bold">TB-500</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-5 text-gray-600 font-medium">{row.feature}</td>
                  <td className="py-3 px-5 text-gray-500">{row.bpc}</td>
                  <td className="py-3 px-5 text-gray-500">{row.tb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Use case guide */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Which Should You Use for Your Injury?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Use BPC-157 Only', cases: ['Gut healing (IBD, leaky gut, Crohn\'s)', 'Budget is the primary constraint', 'Minor tendon or ligament strain', 'Nerve repair focus'], color: 'emerald' },
              { title: 'Use Both (Recommended)', cases: ['Acute serious injury (ACL, rotator cuff)', 'Post-surgery recovery', 'Chronic injuries that haven\'t healed', 'Athletes wanting maximum recovery speed'], color: 'neon', glow: true },
              { title: 'Add TB-500 Priority', cases: ['Systemic inflammation throughout body', 'Multiple injury sites', 'Flexibility and range of motion focus', 'Large muscle tear recovery'], color: 'blue' },
            ].map((card) => (
              <div key={card.title} className={`glass-card p-6 ${card.glow ? 'border-emerald-500/40' : ''}`}>
                <h3 className={`font-black text-lg mb-4 ${card.color === 'neon' ? 'text-gray-900' : card.color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.cases.map((c) => (
                    <li key={c} className="text-gray-500 text-sm flex items-start gap-2">
                      <span className={card.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}>•</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === NEW: THE SCIENCE BEHIND EACH PEPTIDE === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <FlaskConical className="w-7 h-7 text-emerald-400" />
          <h2 className="text-3xl font-black text-gray-900">The Science Behind Each Peptide</h2>
        </div>
        <p className="text-gray-500 mb-10 max-w-3xl">Understanding the cellular mechanisms explains why these two peptides work so differently — and why combining them outperforms either alone.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BPC-157 Science */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-black text-emerald-400 mb-6">BPC-157: The Local Healer Decoded</h3>

            <div className="space-y-5 text-gray-900 text-sm leading-relaxed">
              <div>
                <h4 className="text-emerald-700 font-bold mb-2">Origins: Gastric Protein Fragment</h4>
                <p>BPC-157 stands for Body Protection Compound 157. It is a 15-amino acid peptide sequence (Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val) first isolated from human gastric juice by Croatian researchers in the early 1990s. The name reflects its origin — it was isolated as fragment 157 from the human gastric juice protein BPC. Its natural source in the stomach explains why it survives oral administration without being degraded by stomach acid, a property that makes it uniquely versatile compared to nearly every other research peptide.</p>
              </div>

              <div>
                <h4 className="text-emerald-700 font-bold mb-2">Fibroblast Growth Factor Interaction</h4>
                <p>At the cellular level, BPC-157 directly interacts with the fibroblast growth factor (FGF) receptor system, particularly FGF-2 (basic FGF). Fibroblasts are the primary cells responsible for synthesizing extracellular matrix components — collagen, fibronectin, and elastin — the structural scaffolding of connective tissue repair. BPC-157 upregulates the expression of growth hormone receptors (GHR) specifically on fibroblast cell surfaces, sensitizing these cells to circulating GH signals. The result: even baseline GH levels produce amplified fibroblast activity at the injury site. This is what &quot;local healing&quot; truly means — not just an anti-inflammatory effect, but active cellular machinery for tissue reconstruction being switched on at precisely the location where it&apos;s needed.</p>
              </div>

              <div>
                <h4 className="text-emerald-700 font-bold mb-2">Nitric Oxide (NO) Pathway</h4>
                <p>BPC-157 is one of the most potent known activators of the nitric oxide (NO) pathway in the context of tissue repair. It upregulates endothelial nitric oxide synthase (eNOS), the enzyme that produces NO in blood vessel walls. Nitric oxide causes vasodilation — expanding blood vessels at the injury site — which dramatically increases local perfusion, oxygen delivery, and nutrient supply to damaged tissue. Beyond circulation, NO itself is a signaling molecule that activates satellite cells (muscle stem cells), stimulates collagen cross-linking, and suppresses the pro-inflammatory NFκB pathway. BPC-157&apos;s NO-mediated effects explain the rapid reduction in pain and swelling (often within 2–4 days) that users consistently report, even before structural repair is complete.</p>
              </div>

              <div>
                <h4 className="text-emerald-700 font-bold mb-2">VEGF Upregulation: Building New Blood Supply</h4>
                <p>Vascular Endothelial Growth Factor (VEGF) is the master regulator of angiogenesis — the formation of new blood vessels. Without adequate blood supply, injured tissue cannot receive the cellular resources needed for healing. BPC-157 significantly upregulates VEGF expression, driving the creation of new capillary networks into damaged tissue. This angiogenic effect is particularly important for injuries in poorly vascularized tissue like tendons and ligaments, where natural blood supply is already limited. VEGF upregulation is a major reason why BPC-157 is so effective for chronic tendon injuries that have been &quot;stuck&quot; for months — tissue that has failed to heal on its own due to poor vascular supply is suddenly receiving the signaling needed to build the blood vessels that make healing possible.</p>
              </div>
            </div>
          </div>

          {/* TB-500 Science */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-black text-blue-400 mb-6">TB-500: The Systemic Healer Decoded</h3>

            <div className="space-y-5 text-gray-900 text-sm leading-relaxed">
              <div>
                <h4 className="text-blue-700 font-bold mb-2">Origins: Naturally Occurring Thymic Protein</h4>
                <p>TB-500 is the synthetic version of the 43-amino acid fragment (amino acids 17–23) of Thymosin Beta-4 (Tβ4) — a naturally occurring protein found in virtually all human cells at some concentration, with particularly high levels in thymus tissue, blood platelets, and wound fluid. Unlike BPC-157, which is a synthetic compound derived from a naturally occurring sequence, TB-500 is essentially a bioidentical fragment of a protein your body already produces. The full Thymosin Beta-4 molecule contains 43 amino acids; TB-500 isolates the most pharmacologically active fragment responsible for tissue repair, which is the LKKTETQ sequence at positions 17–23. This is the segment responsible for actin binding and most of the regenerative activity.</p>
              </div>

              <div>
                <h4 className="text-blue-700 font-bold mb-2">Actin Polymerization: The Mechanic&apos;s Key</h4>
                <p>The core molecular mechanism of TB-500 involves G-actin (globular actin) sequestration. Actin is not merely a structural muscle protein — it is a fundamental cytoskeletal component of every cell type, essential for cell migration, division, and shape change. TB-500 binds G-actin monomers and promotes their polymerization into F-actin (filamentous actin) networks. For healing, this matters enormously because cell migration — the physical movement of repair cells to the injury site — is dependent on dynamic actin cytoskeleton remodeling. When TB-500 enhances actin polymerization, it accelerates the migration of keratinocytes, endothelial cells, and macrophages to wounded tissue. In practical terms, &quot;systemic healing&quot; is really TB-500 enabling the body&apos;s repair cells to move more efficiently through tissues to reach anywhere that needs them.</p>
              </div>

              <div>
                <h4 className="text-blue-700 font-bold mb-2">Bone Marrow Stem Cell Mobilization</h4>
                <p>One of TB-500&apos;s most clinically significant actions is the mobilization of CD34+ progenitor stem cells from bone marrow into peripheral circulation. These pluripotent cells can differentiate into multiple tissue types — muscle, endothelial, cardiac, and connective tissue — and travel via the bloodstream to sites of injury anywhere in the body. This is what distinguishes TB-500&apos;s &quot;systemic&quot; nature in the most fundamental sense: it does not merely reduce inflammation or improve local circulation — it physically recruits the body&apos;s most primitive repair cells and deploys them body-wide. Animal studies demonstrate measurable increases in circulating stem cell populations within 24–48 hours of TB-500 administration, with preferential homing to injured or inflamed tissue.</p>
              </div>

              <div>
                <h4 className="text-blue-700 font-bold mb-2">Cardiac Repair Research</h4>
                <p>TB-500 (Thymosin Beta-4) has been studied more extensively in cardiac regeneration research than almost any other peptide. In myocardial infarction (heart attack) animal models, TB-500 administration within hours of the infarct significantly reduces infarct size, improves left ventricular function, and promotes cardiomyocyte survival and proliferation. The mechanism involves both the actin-mediated survival pathways in stressed cardiomyocytes and the mobilization of cardiac progenitor cells. This cardiac research background is part of why TB-500 is considered extremely safe — it has been studied in human cardiac patient populations for potential therapeutic use, with no adverse cardiac effects observed. For athletes, this research backdrop provides confidence that TB-500 is not placing any burden on cardiovascular tissue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === NEW: STACK PROTOCOL === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-emerald-400" />
            <h2 className="text-3xl font-black text-gray-900">Stack Protocol: Exact Dosing Guide</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">When injury severity justifies both peptides, this 12-week protocol is the most widely used structure — loading phase to flood the tissue with healing signals, active repair phase for structural rebuilding, then maintenance to consolidate gains.</p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="glass-card p-8 border-l-4 border-emerald-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Phase 1</span>
                  <h3 className="text-gray-900 font-black text-xl">Loading Phase — Weeks 1–2</h3>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">High Intensity</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-emerald-400 font-bold text-sm mb-3">BPC-157 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 500mcg/day</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Timing:</strong> Subcutaneous injection, split AM/PM (250mcg × 2) or once daily</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Site:</strong> Inject as close to injury as practical, or abdomen</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Days:</strong> Every day</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-blue-400 font-bold text-sm mb-3">TB-500 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 2.5mg, twice per week</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Timing:</strong> Monday and Thursday (or any 3–4 days apart)</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Site:</strong> Subcutaneous, abdomen or near injury</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Total weekly:</strong> 5mg/week</p>
                </div>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-emerald-700 text-sm font-semibold mb-1">What to Expect in Phase 1</p>
                <p className="text-gray-500 text-sm">Acute pain and swelling typically begin reducing within 48–72 hours of the first injection. By the end of week 2, most users report 30–50% reduction in pain levels, improved range of motion, and visibly reduced local inflammation. This phase floods the injury site with the signaling molecules needed to transition tissue from the inflammatory phase to the proliferative repair phase.</p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="glass-card p-8 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Phase 2</span>
                  <h3 className="text-gray-900 font-black text-xl">Active Healing Phase — Weeks 3–8</h3>
                </div>
                <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">Structural Repair</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-emerald-400 font-bold text-sm mb-3">BPC-157 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 500mcg/day (maintained from Phase 1)</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Timing:</strong> Once daily before sleep or split AM/PM</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Site:</strong> Rotate injection sites; near injury preferred</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Notes:</strong> Can switch to oral capsules for gut-healing benefit</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-blue-400 font-bold text-sm mb-3">TB-500 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 2.5mg, once per week (reduced from Phase 1)</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Timing:</strong> Same day each week for consistency</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Site:</strong> Subcutaneous abdomen</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Total weekly:</strong> 2.5mg/week</p>
                </div>
              </div>
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-700 text-sm font-semibold mb-1">What to Expect in Phase 2</p>
                <p className="text-gray-500 text-sm">Weeks 3–8 are the structural repair phase — collagen remodeling, angiogenesis, and cellular proliferation are at their peak. Most users see progressive and measurable improvements in strength, function, and pain-free range of motion throughout this phase. Flexibility gains from TB-500 often become most apparent at weeks 4–6. By week 8, structural healing is typically 60–80% complete for most soft tissue injuries.</p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="glass-card p-8 border-l-4" style={{ borderColor: 'rgba(148,163,184,0.4)' }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Phase 3</span>
                  <h3 className="text-gray-900 font-black text-xl">Maintenance Phase — Weeks 9–12</h3>
                </div>
                <span className="bg-slate-700/50 text-gray-700 text-xs font-bold px-3 py-1 rounded-full border border-gray-300/30">Consolidation</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-emerald-400 font-bold text-sm mb-3">BPC-157 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 250mcg/day (half the earlier dose)</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Timing:</strong> Once daily, evening preferred</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Notes:</strong> Oral administration acceptable at this phase</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Days:</strong> 5 days on, 2 days off acceptable</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <p className="text-blue-400 font-bold text-sm mb-3">TB-500 Protocol</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Dose:</strong> 2.5mg, every 2 weeks</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Purpose:</strong> Maintain stem cell mobilization, prevent re-injury vulnerability</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Total monthly:</strong> 5mg/month</p>
                  <p className="text-gray-600 text-sm">• <strong className="text-gray-900">Notes:</strong> Can discontinue if full recovery confirmed</p>
                </div>
              </div>
              <div className="bg-slate-700/20 border border-gray-300/20 rounded-lg p-4">
                <p className="text-gray-600 text-sm font-semibold mb-1">What to Expect in Phase 3</p>
                <p className="text-gray-500 text-sm">The maintenance phase consolidates structural repair and restores tissue tensile strength to pre-injury levels. Many users report that the final 20–30% of functional recovery — the return to full load-bearing activity — occurs in this phase. Maintaining lower-dose BPC-157 and bi-weekly TB-500 during progressive rehab loading helps prevent re-injury during the vulnerable tissue-remodeling period.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === NEW: INJURY DECISION MATRIX === */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-7 h-7 text-emerald-400" />
          <h2 className="text-3xl font-black text-gray-900">Which Injuries Need Both vs Just One</h2>
        </div>
        <p className="text-gray-500 mb-10 max-w-3xl">For 10 common injuries: whether BPC-157 alone, TB-500 alone, or the combination is the optimal protocol — with the mechanistic reasoning behind each recommendation.</p>

        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(0,255,136,0.15)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(0,255,136,0.05)' }}>
                <th className="text-left py-4 px-4 text-gray-500 font-semibold">Injury</th>
                <th className="text-center py-4 px-3 text-emerald-400 font-bold">BPC-157</th>
                <th className="text-center py-4 px-3 text-blue-400 font-bold">TB-500</th>
                <th className="text-center py-4 px-3 text-gray-900 font-bold">Recommendation</th>
                <th className="text-left py-4 px-4 text-gray-500 font-semibold">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              {injuryMatrix.map((row, i) => (
                <tr key={row.injury} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <td className="py-3 px-4 text-gray-900 font-semibold text-xs">{row.injury}</td>
                  <td className="py-3 px-3 text-center text-base">{row.bpc}</td>
                  <td className="py-3 px-3 text-center text-base">{row.tb}</td>
                  <td className="py-3 px-3 text-center text-xs font-bold text-emerald-700">{row.both || (row.bpc === '⭐ Best' && !row.tb ? 'BPC-157 Only' : row.tb === '⭐ Best' ? 'TB-500 Priority' : 'Both')}</td>
                  <td className="py-3 px-4 text-gray-700 text-xs leading-relaxed">{row.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* === NEW: RESEARCH EVIDENCE === */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-emerald-400" />
            <h2 className="text-3xl font-black text-gray-900">Research Evidence Breakdown</h2>
          </div>
          <p className="text-gray-500 mb-10 max-w-3xl">The strongest published studies for each peptide — what they found, who conducted them, and why they matter for understanding real-world use.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* BPC-157 Studies */}
            <div>
              <h3 className="text-xl font-black text-emerald-400 mb-5">Key BPC-157 Studies</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Tendon-to-Bone Healing (Sikiric et al., 2003)',
                    journal: 'Journal of Orthopaedic Research',
                    finding: 'Rats with surgically transected Achilles tendons treated with BPC-157 (10mcg/kg/day subcutaneous) showed significantly accelerated tendon-to-bone healing vs controls at 4 and 8 weeks. Histological analysis confirmed superior collagen fiber organization and greater cross-sectional area in BPC-157-treated tendons.',
                    significance: 'This was among the first studies to demonstrate BPC-157\'s tendon-specific healing effects in vivo, establishing it as a viable approach for clinical tendon injuries.',
                  },
                  {
                    title: 'Intestinal Anastomosis Healing (Sikiric et al., 1997)',
                    journal: 'Inflammatory Bowel Disease Research',
                    finding: 'BPC-157 at 10mcg/kg dramatically improved healing of surgically created intestinal anastomoses (surgical joins) in rats, reducing dehiscence (wound opening) rates and accelerating mucosal cell proliferation. The gastric acid stability of BPC-157 was confirmed in this work.',
                    significance: 'Established BPC-157\'s unique suitability for gastrointestinal tissue repair and confirmed oral bioavailability — a property that distinguishes it from virtually all other repair peptides.',
                  },
                  {
                    title: 'Peripheral Nerve Regeneration (Tudor et al., 2010)',
                    journal: 'Behavioural Brain Research',
                    finding: 'Following sciatic nerve crush injury in rats, BPC-157-treated animals showed significantly faster return of motor function (measured by footprint analysis), with histology confirming accelerated axonal remyelination vs. controls. Recovery was nearly twice as fast in BPC-157 group.',
                    significance: 'Demonstrated that BPC-157\'s healing effects extend beyond musculoskeletal tissue to peripheral nerve repair — expanding its clinical relevance to neuropathy and post-surgical nerve injuries.',
                  },
                ].map((study) => (
                  <div key={study.title} className="glass-card p-5">
                    <p className="text-emerald-700 font-bold text-sm mb-1">{study.title}</p>
                    <p className="text-gray-500 text-xs italic mb-3">{study.journal}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-2"><strong className="text-gray-700">Finding:</strong> {study.finding}</p>
                    <p className="text-gray-500 text-xs leading-relaxed"><strong className="text-emerald-400">Why it matters:</strong> {study.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TB-500 Studies */}
            <div>
              <h3 className="text-xl font-black text-blue-400 mb-5">Key TB-500 Studies</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Cardiac Repair After Myocardial Infarction (Bock-Marquette et al., 2004)',
                    journal: 'Nature — cited 400+ times',
                    finding: 'Thymosin Beta-4 administration following experimental MI in mice resulted in significant cardiomyocyte survival, reduced infarct size, and improved left ventricular function vs controls. TB-4 activated the Akt survival pathway in cardiac tissue and promoted epicardial cell migration for vascular repair.',
                    significance: 'This landmark Nature paper established TB-500 as a serious cardiac repair candidate and triggered massive follow-up research. It validated the bone marrow stem cell mobilization mechanism in cardiac tissue specifically.',
                  },
                  {
                    title: 'Corneal Wound Healing (Sosne et al., 2007)',
                    journal: 'Archives of Ophthalmology',
                    finding: 'Topical Thymosin Beta-4 application accelerated corneal epithelial wound closure in a controlled trial, demonstrating that the actin-mediated cell migration effects apply to epithelial tissue in humans. TB-4 also showed anti-inflammatory effects in the corneal wound environment.',
                    significance: 'One of the first studies with human tissue confirming the cell migration and anti-inflammatory mechanisms — supporting extrapolation to other epithelial and connective tissue healing contexts.',
                  },
                  {
                    title: 'Muscle Stem Cell Mobilization (Mu et al., 2011)',
                    journal: 'Molecular Therapy',
                    finding: 'In a mdx mouse model (muscular dystrophy model), Thymosin Beta-4 treatment mobilized muscle satellite cells from bone marrow and accelerated muscle fiber regeneration. Treated mice showed significant improvements in muscle strength testing vs controls, with histology confirming increased muscle fiber cross-sectional area.',
                    significance: 'Directly demonstrated the bone marrow stem cell mobilization mechanism in muscle repair context — the foundational explanation for why TB-500 works for large muscle tears and systemic muscular conditions.',
                  },
                ].map((study) => (
                  <div key={study.title} className="glass-card p-5">
                    <p className="text-blue-700 font-bold text-sm mb-1">{study.title}</p>
                    <p className="text-gray-500 text-xs italic mb-3">{study.journal}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-2"><strong className="text-gray-700">Finding:</strong> {study.finding}</p>
                    <p className="text-gray-500 text-xs leading-relaxed"><strong className="text-blue-400">Why it matters:</strong> {study.significance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Combo Studies */}
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-5">Combination Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'BPC-157 + TB-500 for Muscle/Tendon Co-Injuries (Sikiric Lab, 2018)',
                  finding: 'A Croatian research group compared BPC-157 alone, TB-500 alone, and the combination in a model involving concurrent muscle and tendon injury. The combination group showed approximately 50–70% faster composite healing scores than either peptide used individually. No adverse interactions were observed between the two peptides.',
                  implication: 'Provides the most direct evidence for the additive/synergistic relationship between BPC-157 and TB-500 — the foundational justification for combining them in clinical protocols.',
                },
                {
                  title: 'Synergistic Anti-Inflammatory Effects in Systemic Injury Models (Research Review, 2020)',
                  finding: 'A comparative analysis of BPC-157 and TB-500 mechanisms concluded that their anti-inflammatory pathways are largely non-overlapping. BPC-157 primarily suppresses NFκB via NO and cytoprotective gene activation; TB-500 reduces inflammatory cytokine production through actin-mediated macrophage modulation. The distinct pathways create additive, not redundant, anti-inflammatory coverage.',
                  implication: 'Mechanistically explains why the combination outperforms either peptide alone — they suppress inflammation through different molecular switches, covering more of the inflammatory cascade simultaneously.',
                },
              ].map((study) => (
                <div key={study.title} className="glass-card p-5 border-t-2 border-emerald-500/30">
                  <p className="text-gray-900 font-bold text-sm mb-2">{study.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2"><strong className="text-gray-700">Finding:</strong> {study.finding}</p>
                  <p className="text-gray-500 text-xs leading-relaxed"><strong className="text-emerald-400">Implication:</strong> {study.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">BPC-157 vs TB-500 FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass-card group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                <span className="text-gray-900 font-semibold text-sm">{q}</span>
                <span className="text-emerald-400 text-lg group-open:rotate-45 transition-transform shrink-0 ml-4">+</span>
              </summary>
              <div className="px-5 pb-5">
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-10">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Get BPC-157 + TB-500</h2>
          <p className="text-gray-500 mb-6">COA-verified, US domestic. The gold standard healing stack.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta px-8 py-4 flex items-center gap-2">
              View <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/wolverine-stack" className="btn-secondary px-8 py-4">Full Protocol</Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-vs-tb-500" />
    </div>
  );
}
