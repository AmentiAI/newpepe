import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Clock, Microscope, Users, BookOpen } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import WolverineProtocolPlanner from '@/components/WolverineProtocolPlanner';

export const metadata: Metadata = {
  title: 'The Wolverine Stack: BPC-157 + TB-500 | Ultimate Healing Peptide Protocol 2026',
  description: 'The Wolverine Stack combines BPC-157 and TB-500 for the fastest possible injury recovery. Complete dosing protocol, timeline, and FAQ for the most popular healing peptide combination.',
  keywords: 'wolverine stack, wolverine stack peptides, BPC-157 TB-500 wolverine, wolverine stack protocol, BPC-157 TB-500 dosage, healing peptide stack, wolverine peptide',
  openGraph: {
    title: 'The Wolverine Stack: BPC-157 + TB-500 Ultimate Healing Protocol',
    description: 'BPC-157 + TB-500: heal injuries 2–4× faster. Complete dosing guide for the most researched healing peptide combination.',
    type: 'article',
    url: 'https://bp157stack.com/wolverine-stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wolverine Stack: BPC-157 + TB-500 | Ultimate Healing Protocol',
    description: 'The most researched healing peptide combination. Heal injuries 2–4× faster.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const protocol = [
  { phase: 'Loading (Weeks 1–6)', steps: ['BPC-157: 500mcg subcutaneous or oral, once daily', 'TB-500: 2.5mg subcutaneous, twice per week', 'Inject BPC-157 near injury site or abdomen', 'TB-500 in abdomen or thigh — systemic, location less critical'] },
  { phase: 'Maintenance (Weeks 7–12)', steps: ['BPC-157: 250–500mcg once daily', 'TB-500: 2mg subcutaneous, once per week', 'Continue until full recovery', 'Can extend indefinitely — no tolerance buildup identified'] },
  { phase: 'Acute Injury (First 72 Hours)', steps: ['BPC-157: 500mcg twice daily (morning + evening)', 'TB-500: 5mg single loading dose in week 1', 'Begin immediately after injury for fastest response', 'Maintain loading protocol for minimum 4 weeks'] },
];

const faqs = [
  {
    q: 'Why is it called the Wolverine Stack?',
    a: "The nickname comes from the Marvel character Wolverine's iconic rapid healing ability. BPC-157 and TB-500 together produce healing timelines that researchers describe as dramatically faster than natural recovery — tendons, ligaments, and muscle tissue healing in weeks rather than months. The name was popularized in biohacking communities and spread as clinical anecdotes from athletes and researchers accumulated.",
  },
  {
    q: 'Does the Wolverine Stack actually work?',
    a: 'BPC-157 and TB-500 individually are among the most studied healing peptides in existence, with 100+ peer-reviewed papers on BPC-157 alone. The combination has been studied in multiple animal models showing 50–70% reduction in healing time versus untreated controls. Human anecdotal data from athletes, biohackers, and researchers broadly aligns with animal model predictions. Both peptides have an exceptional safety profile with no known LD50.',
  },
  {
    q: 'Can I take BPC-157 and TB-500 in the same syringe?',
    a: 'Yes — BPC-157 and TB-500 can be combined in the same syringe and injected together. They do not interact chemically and are purely additive in their effects. Draw BPC-157 first, then TB-500 into the same insulin syringe, and inject subcutaneously. This is convenient when both are dosed at the same time.',
  },
  {
    q: 'How long does the Wolverine Stack take to work?',
    a: 'Pain reduction and early healing signs typically appear within 2–4 days. Noticeable structural healing (reduced swelling, improved range of motion) is usually apparent at 2–3 weeks. Significant tendon and ligament repair is measurable at 4–8 weeks. Gut healing responds fastest — often within 5–14 days of starting.',
  },
  {
    q: 'Is the Wolverine Stack safe?',
    a: 'Both BPC-157 and TB-500 have outstanding safety profiles. BPC-157 has no known LD50 (lethal dose) in animal studies and no hormonal activity. TB-500 is a fragment of a naturally occurring peptide found in virtually all human tissue. Neither affects the HPGA (hormonal axis), so no PCT is needed. No significant adverse effects have been documented at standard research doses for either peptide.',
  },
  {
    q: 'What injuries is the Wolverine Stack best for?',
    a: 'The stack is most widely used for tendon and ligament injuries (ACL, rotator cuff, Achilles, plantar fasciitis), muscle tears, post-surgical recovery, chronic joint pain, and gut healing (IBD, leaky gut). BPC-157 also shows documented effects on nerve repair and bone healing.',
  },
  {
    q: 'Does the Wolverine Stack work for chronic injuries as well as acute ones?',
    a: 'Yes — but the timeline and protocol differ significantly. Acute injuries (less than 4–6 weeks old) respond most dramatically and quickly, often showing 50–70% improvement within a single 6–8 week cycle. Chronic injuries (6+ months old) have established fibrosis and scar tissue that requires remodeling, not just regeneration. BPC-157 activates growth hormone receptors even in fibrotic tissue, and TB-500 helps break down adhesions while recruiting fresh stem cells to the site. Chronic injuries typically require two full cycles (with a 2-week break between), and progress is more gradual — but the research consistently shows that neither peptide has a therapeutic ceiling based on injury age.',
  },
  {
    q: 'Can the Wolverine Stack heal a herniated disc?',
    a: 'This is one of the most common questions and deserves a careful answer. Disc herniation involves two separate problems: the structural disc bulge itself, and the neuroinflammation and nerve compression that causes the pain and neurological symptoms. BPC-157 cannot mechanically push a herniated disc back into position, but it powerfully addresses both the disc tissue repair (via VEGF upregulation in the avascular disc) and the neuroinflammatory cascade that drives radiculopathy. TB-500 penetrates the blood-brain barrier and is documented to repair neural tissue in spinal cord injury models. Many users report significant — sometimes complete — resolution of disc pain and radiculopathy, particularly for bulging discs without severe nerve compression. Severe herniations with motor deficits require surgical evaluation alongside peptide use.',
  },
  {
    q: 'Is the Wolverine Stack safe to use while on other medications?',
    a: 'BPC-157 and TB-500 have no identified pharmacological interactions in the research literature. They do not affect cytochrome P450 enzymes (the primary drug metabolism pathway), do not bind to hormonal receptors, and do not affect blood coagulation. The most important clinical consideration is with NSAIDs: NSAIDs have been shown to blunt BPC-157\'s healing activity by inhibiting the same prostaglandin pathways that BPC-157 partially leverages. Using NSAIDs concurrently reduces efficacy. Corticosteroids (prednisone, cortisone injections) similarly suppress the inflammatory signaling that BPC-157 modulates. Always inform your physician about peptide use if you are on prescription medications, as individual pharmacology varies.',
  },
  {
    q: 'Does the Wolverine Stack work for older adults (60+)?',
    a: 'Yes — the research is actually particularly encouraging for older adults. The healing mechanisms targeted by BPC-157 and TB-500 become more impaired with age, which means the relative benefit is often greater in older users. BPC-157 upregulates growth hormone receptors that become less responsive with age. TB-500 mobilizes CD34+ stem cells from bone marrow — a pool that naturally declines with age, making the mobilization signal even more valuable. Clinical anecdote from the biohacking community consistently shows older users experiencing meaningful healing responses. Some practitioners increase doses modestly for users over 60 (BPC-157 to 500–750 mcg, TB-500 to 3 mg 2× weekly) to compensate for reduced receptor sensitivity, though standard doses remain effective for most.',
  },
];

export default function WolverineStackPage() {
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
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'The Wolverine Stack', item: 'https://bp157stack.com/wolverine-stack' },
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
              headline: 'The Wolverine Stack: BPC-157 + TB-500 Ultimate Healing Protocol',
              description: 'Complete guide to the Wolverine Stack — BPC-157 and TB-500 combined for maximum injury healing speed.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
              publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
              about: 'Peptide healing protocols',
              keywords: 'wolverine stack, BPC-157, TB-500, healing peptides',
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">THE WOLVERINE STACK</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            BPC-157 + TB-500:<br />
            <span style={{ color: '#00ff88' }}>Heal Like Wolverine</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-3xl">
            The Wolverine Stack — BPC-157 and TB-500 combined — is the most researched healing peptide protocol in the world.
            Backed by 100+ peer-reviewed studies and decades of animal research showing 50–70% reduction in recovery time.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-base px-8 py-4 flex items-center gap-2">
              View the Stack <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
              Full Protocol Guide
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: '50–70%', label: 'Faster healing vs. untreated' },
              { num: '100+', label: 'Peer-reviewed BPC-157 studies' },
              { num: '30yr', label: 'Research history' },
              { num: 'Zero', label: 'Known LD50 for either peptide' },
            ].map((s) => (
              <div key={s.num} className="glass-card p-4 text-center">
                <div className="text-2xl font-black" style={{ color: '#00ff88' }}>{s.num}</div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-3">Why BPC-157 + TB-500 Work Together</h2>
        <p className="text-gray-500 mb-10 max-w-2xl">
          They target completely different healing mechanisms — and together cover every pathway of injury repair.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <h3 className="text-emerald-400 font-black text-xl mb-4">BPC-157 — Local Healer</h3>
            <ul className="space-y-2">
              {['Upregulates growth hormone receptors in fibroblasts', 'Activates VEGF — increases blood flow to injury', 'Accelerates collagen type I synthesis 300–400%', 'Gastric acid stable — works orally for gut healing', 'Heals nerve, bone, muscle, tendon, gut, and eye tissue'].map((m) => (
                <li key={m} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <h3 className="text-blue-400 font-black text-xl mb-4">TB-500 — Systemic Healer</h3>
            <ul className="space-y-2">
              {['Mobilizes CD34+ stem cells from bone marrow to injury sites', 'Binds G-actin to regulate cell migration body-wide', 'Reduces inflammation systemically via NF-κB inhibition', 'Dramatically improves flexibility and range of motion', 'Crosses the blood-brain barrier — heals neural tissue'].map((m) => (
                <li key={m} className="flex items-start gap-2 text-gray-600 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHY WOLVERINE — Full Science Section */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">THE REGENERATION SCIENCE</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Why Wolverine? The Science of<br />
            <span style={{ color: '#00ff88' }}>Accelerated Regeneration</span>
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p>
              In the Marvel universe, James Howlett — the mutant known as Wolverine — possesses a superpower that most people would choose above flight, strength, or telepathy: the ability to heal from virtually any wound in minutes. Slashed by blades, riddled with bullets, burned to bone — within seconds, Wolverine&apos;s tissue knits back together, scarless and functional. The name &quot;Wolverine Stack&quot; was not coined by a marketing department. It emerged organically from the biohacking and research peptide community in the early 2010s as anecdotal reports began accumulating of athletes, post-surgical patients, and researchers using BPC-157 and TB-500 together and experiencing healing timelines that seemed to defy conventional medicine&apos;s expectations.
            </p>
            <p>
              The name resonates because it captures something real. When a 45-year-old CrossFit athlete tears his rotator cuff and is told by an orthopedic surgeon that he faces 9–12 months of recovery with physical therapy and possible surgical intervention — and then returns to full overhead pressing in 10 weeks — the Wolverine comparison feels apt. When a marathon runner with a grade II Achilles tear goes from non-weight-bearing to easy jogging in three weeks, the mythology becomes a useful shorthand. The stack does not give you adamantium claws or regenerate lost limbs. But in the domain of soft tissue injury — tendons, ligaments, muscles, joint cartilage — it produces healing velocities that consistently surprise both users and the clinicians who follow their progress.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8">What &quot;2–4x Faster Healing&quot; Actually Means in Tissue Terms</h3>
            <p>
              When researchers report that BPC-157 and TB-500 accelerate healing by 50–70% compared to untreated controls, it is worth understanding what is actually being measured. The body&apos;s standard healing response has three discrete phases, each with identifiable biochemical and structural hallmarks. The inflammatory phase (days 1–5 naturally) involves vasodilation, immune cell recruitment, and the clearing of cellular debris — a necessary but destructive process. The proliferative phase (weeks 1–6) involves fibroblast infiltration, collagen deposition, and neovascularization — the building of replacement tissue. The remodeling phase (months 2–12+) involves the slow reorganization of disorganized type III collagen into load-bearing type I collagen, and the maturation of the vascular network.
            </p>
            <p>
              The &quot;2–4x faster&quot; claim refers primarily to the acceleration of the proliferative phase and the compression of the remodeling phase. In controlled tendon repair studies, BPC-157-treated tendons show histological characteristics at week 4 that untreated tendons don&apos;t achieve until week 12–16. This isn&apos;t pain masking or symptom suppression — it is measurable structural change: higher collagen density, better fiber alignment, greater mechanical tensile strength, and superior vascularization. TB-500&apos;s contribution is to flood the injury site with CD34+ progenitor cells from bone marrow that would not naturally arrive in such numbers, providing the cellular raw material for accelerated repair.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8">The 1991 Discovery: BPC-157 from Gastric Juice</h3>
            <p>
              The story of BPC-157 begins in the gastric mucosa. In 1991, Dr. Predrag Sikiric and his team at the University of Zagreb School of Medicine were investigating the extraordinary self-healing capacity of the gastrointestinal tract. The gut lining is one of the most hostile environments in the body — bathed in hydrochloric acid, pepsin, bile acids, and proteolytic enzymes that would destroy most tissues. Yet the gastric mucosa repairs itself from injury within hours. Something in the stomach&apos;s own chemistry was providing rapid cytoprotection and regeneration that the rest of the body lacked.
            </p>
            <p>
              The Sikiric group isolated a family of peptides from human gastric juice — the body protective compounds, or BPCs. BPC-157, a 15-amino acid peptide (sequence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val), proved to be the most potent and stable of these compounds. Critically, unlike most peptides, BPC-157 is stable in gastric acid — a property that likely evolved precisely because it needs to function in the acid environment of the stomach. This stability later proved important for oral dosing protocols.
            </p>
            <p>
              Early animal experiments produced remarkable results. BPC-157 healed gastric ulcers, repaired intestinal fistulas, and reversed NSAID-induced gut damage at doses that were physiologically plausible. Then researchers tried something unexpected: they gave BPC-157 to rats with surgically created tendon transections. The tendons healed measurably faster. Then muscle tears. Then ligament injuries. Then bone fractures. Then nerve injuries. Then corneal damage. The pattern was consistent: across tissue types, across injury mechanisms, and across species, BPC-157 accelerated healing in ways that no existing drug category could explain.
            </p>

            <h3 className="text-gray-900 font-black text-xl mt-8">TB-500: From Thymus Glands to Global Athletics</h3>
            <p>
              TB-500 has a parallel but entirely independent origin story. Thymosin Beta-4 (TB4) is a 43-amino acid peptide first isolated from thymus gland tissue in the 1960s by Allan Goldstein at the National Cancer Institute. The thymus — the small organ behind the sternum responsible for T-cell maturation — produces thymosin peptides as part of immune regulation. But Thymosin Beta-4 turned out to do something far more interesting than immune modulation: it is the primary intracellular G-actin sequestering protein in virtually every mammalian cell.
            </p>
            <p>
              Actin is the scaffolding protein of cell structure and movement. When cells need to migrate — as they do during wound healing, tissue repair, and immune response — they reorganize their actin cytoskeleton. Thymosin Beta-4&apos;s binding and release of G-actin monomers is the molecular governor of this process. In tissue repair contexts, TB4 (and its active fragment TB-500) promotes cell migration, accelerates wound closure, reduces inflammation via NF-κB inhibition, and mobilizes CD34+ progenitor cells from bone marrow to sites of tissue damage. TB-500 is a synthetic fragment of TB4 (residues 17–23: Ac-LKKTETQ) that retains most of TB4&apos;s healing activity in a smaller, more bioavailable molecule.
            </p>
            <p>
              The two peptides were discovered in entirely different research contexts — one from the gut, one from immune organs — by teams with no connection to each other. Yet they proved to be almost perfectly complementary. BPC-157 is a potent local healer with strong effects at the injury site: it drives fibroblast proliferation, upregulates growth hormone receptors, activates VEGF-mediated neovascularization, and directly stimulates the transcription factors that produce collagen. TB-500 operates systemically: it reaches every injured tissue in the body, mobilizes the stem cell populations needed to repair them, and modulates inflammation at a body-wide level. The two mechanisms combined cover the full spectrum of the healing cascade from initial cellular response through structural remodeling — which is precisely why their combination produces the synergistic &quot;1+1=3&quot; effect that has made the Wolverine Stack the most discussed healing peptide combination in the research community.
            </p>
          </div>
        </div>
      </section>

      {/* Protocol Planner Widget */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">PROTOCOL PLANNER</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Build Your Custom Protocol</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Select your injury type and severity to get a custom Wolverine Stack protocol with specific doses, cycle length, and expert notes.
          </p>
        </div>
        <WolverineProtocolPlanner />
      </section>

      {/* Standard Protocol */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Wolverine Stack Protocol</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Three phases depending on your injury stage. Use the loading phase for any new or acute injury.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {protocol.map((p, i) => (
              <div key={p.phase} className="glass-card p-6">
                <div className="text-emerald-400 text-xs font-bold tracking-widest mb-2">PHASE {i + 1}</div>
                <h3 className="text-gray-900 font-bold mb-4">{p.phase}</h3>
                <ul className="space-y-2">
                  {p.steps.map((s) => (
                    <li key={s} className="text-gray-500 text-sm flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-xs text-center mt-6">Consult a healthcare provider before use.</p>
        </div>
      </section>

      {/* Healing timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Healing Timeline</h2>
        <div className="space-y-4">
          {[
            { time: 'Days 1–4', title: 'Pain Reduction Begins', desc: "BPC-157's anti-inflammatory and growth factor upregulation starts immediately. Most users report reduced pain and swelling within the first 2–4 days." },
            { time: 'Week 1–2', title: 'Stem Cell Mobilization', desc: 'TB-500 begins mobilizing CD34+ stem cells from bone marrow to the injury site. Flexibility improvements are often the first TB-500 effect reported.' },
            { time: 'Weeks 2–4', title: 'Visible Structural Progress', desc: 'Swelling decreases significantly. Range of motion improves. Early collagen synthesis begins rebuilding damaged connective tissue. Gut healing (if applicable) is often complete by this point.' },
            { time: 'Weeks 4–8', title: 'Significant Tissue Repair', desc: 'The loading phase produces the most dramatic structural healing. Tendon and ligament continuity restores. Athletes often return to light training during this window.' },
            { time: 'Weeks 8–12', title: 'Full Recovery / Maintenance', desc: 'Complete healing for most acute injuries. Maintenance dosing continues to consolidate structural repair. Chronic injuries may require a second loading cycle.' },
          ].map((t) => (
            <div key={t.time} className="glass-card p-5 flex gap-6 items-start">
              <div className="shrink-0">
                <div className="text-emerald-400 font-black text-sm">{t.time}</div>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold mb-1">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEEK-BY-WEEK HEALING JOURNAL */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">HEALING JOURNAL</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Week-by-Week:<br />
            <span style={{ color: '#00ff88' }}>What to Expect</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            A realistic, honest log of the Wolverine Stack experience — framed as a healing journal. Based on the most common patterns reported by athletes and researchers across injury types.
          </p>

          <div className="space-y-4">
            {[
              {
                period: 'Week 1, Days 1–3',
                title: 'First Injections — The Foundation',
                color: '#00ff88',
                content: "You've drawn up your first BPC-157 injection — 500 mcg in bacteriostatic water, using a 29g insulin syringe, subcutaneously near the injury site. The injection itself is barely noticeable: a small pinch, nothing more. TB-500 goes in the same day (or next morning) — this one you'll feel slightly more, a faint pressure as the larger volume disperses. Within the first 24–48 hours, don't expect dramatic changes. BPC-157's mechanisms take days to build. What you may notice: a very subtle reduction in the constant background ache that injury creates, and perhaps slightly less stiffness upon waking. This is real — it is not placebo. The VEGF upregulation has already begun increasing blood flow to the injury site.",
              },
              {
                period: 'Week 1, Days 4–7',
                title: 'Early Pain Signal Changes',
                color: '#00ff88',
                content: "By day 4–5, most users report a noticeably different quality to the pain. It has typically shifted from sharp and constant to more intermittent and duller. This is the anti-inflammatory cascade beginning to take hold. TB-500's NF-κB inhibition is reducing the systemic inflammatory signaling. BPC-157 is simultaneously upregulating growth hormone receptors in the fibroblasts nearest the injury, priming them for accelerated collagen production. Some users report improved sleep quality this week — the pain disruption that was fragmenting their sleep begins to recede. Note: Do not mistake early pain reduction for healing completion. The structural repair has barely started.",
              },
              {
                period: 'Week 2',
                title: 'Stem Cells Arrive — Flexibility Changes',
                color: '#10b981',
                content: "TB-500's most characteristic early effect typically appears in week 2: a meaningful improvement in flexibility and range of motion. Users with shoulder injuries report being able to reach further. Achilles and hamstring issues show increased ease of stretching. This is not collagen rebuilding — it is the TB-500 actin-binding activity improving cell mobility and reducing the mechanical stiffness of the peri-injury tissue. The CD34+ stem cells mobilized from bone marrow in week 1 are beginning to arrive at the injury site and differentiate into the appropriate repair cell lineage. Swelling, if present, should be noticeably reduced by end of week 2.",
              },
              {
                period: 'Week 3–4',
                title: 'The Structural Shift Begins',
                color: '#10b981',
                content: "This is often when users have their first moment of genuine optimism. The injury that was functionally limiting — preventing you from squatting, lifting overhead, running, sleeping — begins to feel qualitatively different. Not just less painful, but structurally more stable. Tendons feel less like fraying rope and more like cable. Joint movements that produced clicking or catching sensations often smooth out. This corresponds to the beginning of meaningful type III collagen deposition — the body's initial scaffold for new tissue. Type III is not the final product (that comes later, in the form of stronger type I collagen), but its accumulation means the architecture of repair is underway.",
              },
              {
                period: 'Week 5–6',
                title: 'End of Loading Phase — Assessment Window',
                color: '#f59e0b',
                content: "At week 6, you reach the end of the primary loading phase. This is the right time to assess: Has the injury responded? Most acute injuries will show 60–80% improvement by this point. Tendons and ligaments will feel substantially stronger and less painful. If your injury was primarily inflammatory (joint inflammation, gut issues, nerve pain), you may be fully resolved. If you are healing from a significant structural tear, you are not done — but you should be able to see clear directional improvement. Continue to the maintenance phase. Chronic injuries that have not shown significant improvement by week 6 may require an injection site adjustment (ensure you are injecting close enough to the injury) or a dose increase.",
              },
              {
                period: 'Week 7–8',
                title: 'Maintenance Phase — Deeper Repair',
                color: '#f59e0b',
                content: "Switching to maintenance dosing (BPC-157 250–500 mcg once daily, TB-500 2 mg once weekly) allows the structural repair to continue consolidating. The type III collagen scaffold laid down in weeks 3–6 is now being remodeled into load-bearing type I collagen — a process that cannot be rushed, even by peptides. What you can do: begin light progressive loading of the healing tissue. This is essential — mechanical loading stimulates proper collagen fiber alignment along stress lines. Without it, collagen can deposit in random orientations that are weaker than organized repair. Light resistance training, eccentric loading, or sport-specific movement begins here.",
              },
              {
                period: 'Week 9–10',
                title: 'Return to Function',
                color: '#a855f7',
                content: "For most acute injuries, week 9–10 represents the return-to-sport window. The structural repair is sufficiently advanced for progressive loading. Pain should be minimal or absent at rest and manageable with activity. What has been rebuilt is not yet as strong as fully mature tissue — newly laid collagen requires 6–12 more months to complete full maturation even with peptide support. However, the functional tissue quality at this point typically exceeds what would be present at 6 months of natural healing. Begin progressive return to full intensity: 50% training load in week 9, 75% in week 10, full training in weeks 11–12 if pain-free.",
              },
              {
                period: 'Week 11–12',
                title: 'Cycle Completion and Reflection',
                color: '#a855f7',
                content: "At 12 weeks, you have completed the full Wolverine Stack cycle. Evaluate: full range of motion restored? Pain at rest absent? Pain with activity minimal and non-limiting? If yes to all three, you can cease the protocol or drop to occasional maintenance (BPC-157 250 mcg 3× weekly, TB-500 once weekly) for 4–6 more weeks to consolidate. For chronic injuries or complex cases (post-surgical, multi-site, older adults), a second cycle after a 2-week break is often warranted. For the majority of acute injuries treated aggressively with the full loading protocol, 12 weeks will produce outcomes that would not have been achievable for 9–18 months without intervention.",
              },
            ].map((entry) => (
              <div key={entry.period} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 min-w-[120px]">
                    <div className="text-xs font-bold tracking-widest mb-1" style={{ color: entry.color }}>{entry.period}</div>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold mb-2">{entry.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{entry.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RESEARCH BEHIND THE STACK */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
          <Microscope className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 text-sm font-semibold tracking-wide">THE RESEARCH</span>
        </div>
        <h2 className="text-4xl font-black text-gray-900 mb-10">
          The Research Behind<br />
          <span style={{ color: '#00ff88' }}>The Stack</span>
        </h2>

        <div className="space-y-8">
          {/* BPC-157 Tendon Studies */}
          <div>
            <h3 className="text-emerald-400 font-black text-xl mb-4">BPC-157: Tendon Repair Studies</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'BPC-157 Accelerates Achilles Tendon Healing in Rats — Sikiric et al., 2003',
                  content: 'Surgically transected Achilles tendons in rat models were treated with intralesional BPC-157 (10 mcg/kg) for 14 days. Histological analysis showed significantly better collagen organization, higher fibroblast density, and greater mechanical tensile strength in treated tendons at both 2-week and 4-week timepoints. The treated group demonstrated collagen alignment and tissue architecture comparable to natural tendons — findings not present in control animals at the same timepoints. Conclusion: BPC-157 exerts direct pro-healing effects on damaged tendon tissue, accelerating structural restoration through fibroblast recruitment and collagen synthesis pathways.',
                },
                {
                  title: 'Medial Collateral Ligament Repair Enhancement — Pevec et al., 2010',
                  content: 'Rat MCL transection models received BPC-157 (10 mcg/kg SC daily) beginning 24 hours post-injury. At 14 days, treated animals showed significantly improved ligament continuity, reduced scar tissue formation, and measurably superior ligament tensile strength versus untreated controls. Gene expression analysis revealed upregulation of early growth response protein (Egr-1) — the transcription factor that governs tendon and ligament-specific gene expression — providing a mechanistic explanation for BPC-157\'s connective tissue specificity. This study was among the first to identify BPC-157\'s effect on Egr-1 as a primary driver of tendon and ligament healing.',
                },
                {
                  title: 'Quadriceps Tendon Repair and Functional Recovery — Cerovecki et al., 2010',
                  content: 'A detailed functional analysis of quadriceps tendon healing in rats showed that BPC-157 treatment not only accelerated structural healing but also improved functional outcomes. Animals treated with BPC-157 demonstrated significantly better motor performance on rotarod testing (a measure of limb strength and coordination) at 2 and 4 weeks post-injury. This functional improvement correlated with histological findings of better tendon architecture and, importantly, showed that BPC-157 healed the tendon-to-bone junction (enthesis) — one of the most challenging zones of repair in orthopedic medicine due to its gradient of tissue properties.',
                },
              ].map((study) => (
                <div key={study.title} className="glass-card p-5">
                  <h4 className="text-gray-900 font-bold text-sm mb-2">{study.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{study.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TB-500 Actin/Wound Healing Studies */}
          <div>
            <h3 className="text-blue-400 font-black text-xl mb-4">TB-500: Actin-Binding and Wound Healing Studies</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Thymosin Beta-4 Promotes Dermal Healing via Actin Regulation — Malinda et al., 1999',
                  content: 'This foundational study demonstrated that Thymosin Beta-4 (the parent molecule of TB-500) accelerates full-thickness dermal wound closure in mouse models by a factor of 4× versus controls. Mechanistic analysis revealed that TB4 promoted keratinocyte migration and vascular endothelial cell migration — both actin-dependent processes — and that the wound-healing effect was abolished when TB4\'s actin-binding domain (the LKKTETQ sequence, which is the TB-500 fragment) was removed. This study established TB4\'s G-actin sequestration as the primary mechanism of wound healing activity and confirmed that the TB-500 fragment is sufficient for the full therapeutic effect.',
                },
                {
                  title: 'TB4 Mobilizes CD34+ Progenitor Cells — Bock-Marquette et al., 2004',
                  content: 'Cardiac ischemia models in mice demonstrated that Thymosin Beta-4 mobilizes CD34+ progenitor cells from bone marrow to sites of tissue damage and promotes their differentiation into endothelial and cardiac cells. Treated animals showed significantly reduced infarct size and improved cardiac function. The significance for musculoskeletal healing: the same stem cell mobilization mechanism applies to all injured tissue types. This study established the systemic stem cell recruitment pathway as TB4\'s key mechanism for healing tissue that is distal from the injection site — explaining why systemic TB-500 injection heals injuries throughout the body simultaneously.',
                },
                {
                  title: 'TB-500 Reduces Inflammation via NF-κB Inhibition in Tendon Cells — Chang et al., 2011',
                  content: 'Tenocyte (tendon cell) cultures treated with Thymosin Beta-4 showed marked reduction in NF-κB pathway activation — the master transcription factor that drives inflammatory cytokine production (IL-6, TNF-α, IL-1β). This anti-inflammatory effect operated independently of the actin-binding mechanism, identifying TB4/TB-500 as a dual-mechanism anti-inflammatory: both through direct cellular signaling and through the improved tissue quality that reduces ongoing inflammatory stimulus. In vivo animal models confirmed that systemically administered TB-500 reduced peritendinous inflammation by 60–70% compared to controls, with no suppression of the pro-healing aspects of the inflammatory response — a key advantage over NSAIDs and corticosteroids.',
                },
              ].map((study) => (
                <div key={study.title} className="glass-card p-5">
                  <h4 className="text-gray-900 font-bold text-sm mb-2">{study.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{study.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Synergy explanation */}
          <div className="rounded-2xl p-8" style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.15)' }}>
            <h3 className="text-gray-900 font-black text-xl mb-4" style={{ color: '#00ff88' }}>Why 1 + 1 = 3: The Synergistic Healing Principle</h3>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                The combination of BPC-157 and TB-500 produces healing outcomes that consistently exceed what either peptide achieves independently. This is not additive — it is synergistic. Understanding why requires understanding the bottlenecks in healing.
              </p>
              <p>
                <strong className="text-gray-900">BPC-157 alone</strong> is a powerful local healer but requires adequate blood supply and cellular raw material to build new tissue. In avascular tissues like tendons and cartilage, or in areas of severe damage where the vascular network is destroyed, BPC-157&apos;s local fibroblast activation is limited by what the surrounding tissue can supply.
              </p>
              <p>
                <strong className="text-gray-900">TB-500 alone</strong> is an excellent systemic mobilizer — it brings stem cells to the injury and reduces inflammation body-wide — but it has relatively weaker direct collagen synthesis activation compared to BPC-157. The stem cells it recruits need a pro-healing local environment and growth factor signals to optimally differentiate.
              </p>
              <p>
                <strong className="text-gray-900">Together:</strong> BPC-157&apos;s VEGF upregulation creates the vascular network that TB-500&apos;s stem cells need to travel to and survive in. TB-500&apos;s stem cell mobilization provides the cellular raw material that BPC-157&apos;s growth factor signaling needs to build maximum tissue volume. BPC-157&apos;s Egr-1 upregulation provides the differentiation signal that the arriving CD34+ cells need to become tendon fibroblasts rather than generic scar tissue. The result is a healing environment where every biological process required for rapid tissue regeneration is optimized simultaneously — which is why the combination consistently produces 50–70% faster healing in animal models, versus 30–40% for either peptide alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATHLETE CASE STUDY PROFILES */}
      <section className="py-16" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">ATHLETE PROFILES</span>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Case Study Profiles:<br />
            <span style={{ color: '#00ff88' }}>Real Injuries, Real Protocols</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            The following profiles are composite illustrations based on the most common athlete injury presentations and their responses to the Wolverine Stack protocol.
          </p>

          <div className="space-y-6">
            {[
              {
                profile: 'Recreational Runner, 38F',
                injury: 'Achilles Tendinopathy (Chronic, 7 months)',
                background: "Seven months of escalating Achilles pain had reduced a previously 50-mile-per-week runner to zero running. Multiple physiotherapy courses, two PRP injections, and one cortisone shot had produced temporary relief followed by regression. MRI confirmed mid-substance tendinopathy with partial disruption of collagen architecture — a chronic, degenerative presentation.",
                protocol: 'BPC-157: 500 mcg SC near Achilles daily for 8 weeks, then 250 mcg maintenance. TB-500: 2.5 mg SC twice weekly for 8 weeks, then weekly.',
                timeline: [
                  { week: '1–2', result: 'Morning stiffness reduced by roughly 40%. First session of pain-free heel raises in months.' },
                  { week: '3–4', result: 'Light jogging on grass introduced — 10-minute runs with minimal discomfort. TB-500 range-of-motion improvements notable.' },
                  { week: '6', result: 'Running 20 minutes continuous, 3× weekly. Tenderness on palpation markedly reduced.' },
                  { week: '8', result: 'Achilles loading fully tolerated. 35-mile week completed without tendon aggravation.' },
                  { week: '12', result: 'Full return to previous training volume. Follow-up ultrasound showed significantly improved tendon homogeneity vs. pre-protocol imaging.' },
                ],
                outcome: 'Complete return to sport in 12 weeks from a 7-month chronic tendinopathy that had not responded to conventional interventions. Second loading cycle at week 14 used preventively during high-mileage ramp-up.',
                color: '#00ff88',
              },
              {
                profile: 'CrossFit Athlete, 45M',
                injury: 'Partial Rotator Cuff Tear (Supraspinatus, Grade II)',
                background: "An MRI confirmed a 40% thickness partial tear of the supraspinatus following a heavy overhead pressing incident. Orthopedic recommendation: 3–4 months of physiotherapy with possible surgical consultation at 6 months if unresolved. Pain with any pressing movement above shoulder height, significant sleep disruption from night pain.",
                protocol: 'BPC-157: 500 mcg SC twice daily near supraspinatus insertion (AC joint region) for first 4 weeks, then once daily. TB-500: 5 mg SC twice in week 1 (loading), then 2.5 mg twice weekly.',
                timeline: [
                  { week: '1', result: 'Night pain improved within 5 days — full nights sleep returning by day 6.' },
                  { week: '2–3', result: 'Shoulder ROM measurably improved. Light band work and internal/external rotation exercises introduced.' },
                  { week: '4', result: 'First pain-free pressing movement: 45-degree incline dumbbell at 30% of previous working weight.' },
                  { week: '6–7', result: 'Overhead pressing with light barbell (50% previous weight). Full ROM restored.' },
                  { week: '10', result: 'Back to 85% of previous overhead working weights with no pain during or after.' },
                  { week: '12', result: 'Full CrossFit programming resumed. Overhead squat, clean and jerk, and wall balls fully pain-free.' },
                ],
                outcome: 'Full return to competitive CrossFit in 12 weeks. Follow-up MRI at 14 weeks showed significant improvement in tear thickness — radiologist noted near-complete restoration of supraspinatus continuity.',
                color: '#3b82f6',
              },
              {
                profile: 'Soccer Player, 28M',
                injury: 'MCL Sprain, Grade II (Acute, 3 days old at protocol start)',
                background: "Contact injury during competitive match produced acute medial knee pain and moderate instability on valgus stress testing. MRI confirmed partial MCL tear with surrounding edema but intact ACL. Orthopedic recommendation: 6–8 weeks non-contact training, 10–12 weeks return to play.",
                protocol: 'BPC-157: 500 mcg SC near medial joint line twice daily for 2 weeks, then once daily. TB-500: 5 mg SC day 2 post-injury, repeated day 7, then 2.5 mg twice weekly.',
                timeline: [
                  { week: '1', result: 'Crutches discarded by day 5. Weight-bearing walking comfortable. Knee effusion resolved.' },
                  { week: '2', result: 'Light cycling and swimming introduced. Valgus stress test shows markedly improved stability.' },
                  { week: '3', result: 'Jogging on straight lines. No limp. ROM fully restored.' },
                  { week: '4', result: 'Return to non-contact training. Cutting and change of direction at 60% intensity.' },
                  { week: '5', result: 'Full training resumed — all drills including tackling positions.' },
                  { week: '7', result: 'Return to competitive match play. No re-injury events through season.' },
                ],
                outcome: 'Return to competitive play in 7 weeks against a 10–12 week conventional timeline. Importantly, no recurrence of MCL issues despite return to high-intensity competitive soccer.',
                color: '#10b981',
              },
              {
                profile: 'Competitive Weightlifter, 52M',
                injury: 'Chronic Lower Back Pain, L4/L5 Disc Bulge + Facet Arthropathy (18 months)',
                background: "Eighteen months of escalating lower back pain with occasional left leg radiculopathy (L5 distribution). MRI showed L4/L5 disc bulge with moderate facet joint degeneration — a mixed disc and articular presentation. Multiple epidural steroid injections provided 4–8 weeks of relief before regression. Unable to deadlift or squat above 50% of previous working weights.",
                protocol: 'BPC-157: 500 mcg SC paraspinal (bilateral, L4 level) once daily. TB-500: 2.5 mg SC twice weekly — specifically chosen for BBB penetration and neural anti-inflammatory effects. 12-week protocol, second cycle planned.',
                timeline: [
                  { week: '1–2', result: 'No dramatic change — chronic disc presentations respond more slowly. Sleep quality improving. Morning stiffness duration reduced.' },
                  { week: '3–4', result: 'Radiculopathy symptoms (leg tingling) noticeably reduced. First sessions of pain-free Romanian deadlifts at 40% of 1RM.' },
                  { week: '5–6', result: 'Lower back pain at rest reduced by approximately 60%. Squatting to parallel returned with no radiculopathy.' },
                  { week: '8', result: 'Deadlifting at 70% of previous 1RM. Paraspinal muscle tension noticeably reduced on palpation.' },
                  { week: '10', result: 'Back to full training programming. No radiculopathy during or after training.' },
                  { week: '14 (Second Cycle)', result: 'Deadlift 1RM approached previous numbers. Resting back pain reduced to occasional mild discomfort rather than constant moderate pain.' },
                ],
                outcome: 'Significant functional restoration from a chronic, multi-structure lower back presentation. Not a cure — disc degeneration and facet arthropathy persist on imaging — but functional capacity and pain levels dramatically improved. Ongoing low-dose maintenance (BPC-157 250 mcg 3× weekly) planned indefinitely.',
                color: '#f59e0b',
              },
            ].map((cs) => (
              <div key={cs.profile} className="glass-card p-6 md:p-8">
                <div className="flex items-start gap-4 flex-wrap mb-4">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-widest" style={{ background: `${cs.color}15`, color: cs.color }}>
                    {cs.profile}
                  </div>
                  <div className="text-gray-500 text-sm">{cs.injury}</div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cs.background}</p>
                <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.1)' }}>
                  <div className="text-xs font-bold tracking-widest mb-1" style={{ color: '#00ff88' }}>PROTOCOL USED</div>
                  <p className="text-gray-600 text-sm">{cs.protocol}</p>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold tracking-widest text-gray-500 mb-3">WEEK-BY-WEEK RESULTS</div>
                  <div className="space-y-2">
                    {cs.timeline.map((t) => (
                      <div key={t.week} className="flex items-start gap-3 text-sm">
                        <span className="font-bold shrink-0 w-16" style={{ color: cs.color }}>Week {t.week}:</span>
                        <span className="text-gray-500">{t.result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl p-4" style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}20` }}>
                  <div className="text-xs font-bold tracking-widest mb-1" style={{ color: cs.color }}>OUTCOME</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ background: 'rgba(0,255,136,0.02)', borderTop: '1px solid rgba(0,255,136,0.08)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Wolverine Stack FAQ</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            <div className="relative">
              <h2 className="text-3xl font-black text-gray-900 mb-4">Get the Wolverine Stack</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                BPC-157 and TB-500 from our recommended supplier — COA verified, US domestic, ships in 24–48 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
                  className="btn-cta text-base px-10 py-4 inline-flex items-center gap-2">
                  View <ArrowRight className="w-5 h-5" />
                </a>
                <Link href="/stacks/ultimate-healing" className="btn-secondary text-base px-8 py-4">
                  Full Protocol Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks path="/wolverine-stack" />
    </div>
  );
}
