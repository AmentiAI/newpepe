import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Zap, Shield, TrendingUp,
  FlaskConical, Clock, AlertTriangle, Microscope, Layers,
} from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import BeardGrowthTracker from '@/components/BeardGrowthTracker';

export const metadata: Metadata = {
  title: 'Peptides for Beard Growth: GHK-Cu, IGF-1 LR3, BPC-157 Protocols (2026)',
  description: 'Can peptides improve beard density? GHK-Cu, IGF-1 LR3, TB-500, and BPC-157 for beard follicle health — the biology, the protocols, and realistic timelines. Complete 2026 guide.',
  keywords: 'peptides for beard growth, GHK-Cu beard, IGF-1 beard growth, beard peptides, BPC-157 beard, dermaroller beard peptides, peptides for beard density',
  openGraph: {
    title: 'Peptides for Beard Growth: Complete Protocol Guide 2026',
    description: 'GHK-Cu, IGF-1 LR3, TB-500 and BPC-157 for beard density — biology, protocols, and timelines.',
    type: 'article',
    url: 'https://bp157stack.com/peptides-for-beard-growth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peptides for Beard Growth Guide 2026',
    description: 'Which peptides improve beard density and how to use them correctly.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/peptides-for-beard-growth',
  },
};

const SOURCE_URL = '/out';

const beardPeptides = [
  {
    name: 'GHK-Cu',
    rank: 1,
    mechanism: 'Enlarges follicle size, prolongs anagen phase, improves vascular supply to beard follicles. DHT modulation does NOT negatively affect beard follicles — facial follicles have different receptor profiles from scalp follicles.',
    application: 'Topical serum applied directly to beard area',
    dose: '1–2 mg/mL in carrier serum',
    frequency: 'Daily, ideally with derma roller (0.25–0.5mm)',
    timeline: '8–16 weeks for visible density change',
    color: 'border-amber-500/40',
    badge: 'bg-amber-500/20 text-amber-300',
  },
  {
    name: 'IGF-1 LR3',
    rank: 2,
    mechanism: 'Systemic IGF-1 elevation supports all hair follicle types. IGF-1 is a universal anagen-prolonging growth factor. Prolongs the growth phase of beard follicles documented in growth factor research.',
    application: 'Subcutaneous injection',
    dose: '20–50 mcg/day',
    frequency: 'Daily injection, morning or post-workout',
    timeline: '8–16 weeks for measurable follicle improvement',
    color: 'border-blue-500/40',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  {
    name: 'TB-500 (Thymosin Beta-4)',
    rank: 3,
    mechanism: 'Actin regulation and stem cell mobilization improve follicle cycling. Angiogenesis in the beard area improves blood supply to follicle bulbs. TB-500 has specific effects on hair follicle stem cell recruitment.',
    application: 'Subcutaneous injection',
    dose: '2–5 mg per week (loading), 2 mg every 2 weeks (maintenance)',
    frequency: '2x per week initially, then maintenance dose',
    timeline: '12–20 weeks for follicle cycling improvement',
    color: 'border-purple-500/40',
    badge: 'bg-purple-500/20 text-purple-300',
  },
  {
    name: 'CJC-1295 + Ipamorelin',
    rank: 4,
    mechanism: 'GH pulse → elevated IGF-1 → downstream follicle effects across all follicle types including beard. Best for patchy beard where systemic growth factor elevation is needed.',
    application: 'Subcutaneous injection',
    dose: '200 mcg each before bed',
    frequency: 'Daily or 5 days/week',
    timeline: '12–20 weeks for systemic IGF-1-driven follicle improvement',
    color: 'border-teal-500/40',
    badge: 'bg-teal-500/20 text-teal-300',
  },
  {
    name: 'BPC-157',
    rank: 5,
    mechanism: 'Angiogenesis around beard follicles and anti-inflammatory effect reduces perifollicular inflammation — a key mechanism that stunts beard follicle growth by starving follicles of nutrients.',
    application: 'Oral or subcutaneous injection',
    dose: '250–500 mcg twice daily',
    frequency: 'Daily',
    timeline: '8–12 weeks for reduced inflammation and improved follicle environment',
    color: 'border-emerald-500/40',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
];

const hairPhases = [
  {
    phase: 'Anagen (Growth Phase)',
    duration: '2–6 years for scalp; 2–6 months for beard',
    description: 'Active hair shaft production. The hair matrix cells divide rapidly, pushing the hair upward. GHK-Cu and IGF-1 LR3 both act by prolonging this phase — keeping follicles in growth mode longer.',
    peptideAction: 'GHK-Cu and IGF-1 LR3 prolong anagen duration. Beard follicles cycling in anagen produce longer, thicker, denser hairs.',
    color: 'border-emerald-500/40 bg-emerald-500/5',
  },
  {
    phase: 'Catagen (Transition Phase)',
    duration: '2–3 weeks',
    description: 'The follicle shrinks and hair shaft production stops. A brief transitional state between active growth and rest. Healthy follicles cycle through catagen quickly.',
    peptideAction: 'TB-500 and BPC-157 support healthy catagen by maintaining blood supply through the transition, allowing faster re-entry into anagen.',
    color: 'border-amber-500/40 bg-amber-500/5',
  },
  {
    phase: 'Telogen (Resting Phase)',
    duration: '3–4 months',
    description: 'The follicle rests. The old hair is shed and a new hair begins to form. At any given time, 10–15% of beard follicles are in telogen. A higher percentage indicates a stressed or poorly-nourished follicle population.',
    peptideAction: 'Reducing telogen percentage is the goal. Peptides that improve follicle nutrition (BPC-157 angiogenesis, GHK-Cu vascular improvement) reduce excessive telogen rates.',
    color: 'border-slate-500/40 bg-slate-500/5',
  },
];

const topicalProtocol = [
  {
    step: '1',
    title: 'Prepare GHK-Cu Serum',
    detail: 'Dissolve 30mg GHK-Cu powder into 15mL of a carrier solution (70% distilled water, 20% glycerin, 10% propylene glycol). This yields ~2mg/mL concentration. Store in a dark dropper bottle in the refrigerator.',
  },
  {
    step: '2',
    title: 'Derma Roll the Beard Area',
    detail: 'Using a 0.25mm–0.5mm derma roller, roll across the beard area (cheeks, chin, jaw, upper lip) in a grid pattern — 10 passes horizontally, 10 vertically, 10 diagonally. This creates microchannels that increase GHK-Cu absorption by 400–1000x and triggers a local wound healing response that activates follicle stem cells.',
  },
  {
    step: '3',
    title: 'Apply GHK-Cu Serum',
    detail: 'Immediately after derma rolling (within 5 minutes), apply 6–10 drops of the GHK-Cu serum to the beard area. Massage gently for 60 seconds to distribute evenly. Apply to clean, dry skin — no other products on the area at this time.',
  },
  {
    step: '4',
    title: 'Wait and Moisturize',
    detail: 'Allow the serum to absorb for 15–20 minutes before applying any other products. Then apply a light, non-comedogenic moisturizer. On non-derma roller days, apply GHK-Cu serum directly to clean skin morning and/or evening without rolling.',
  },
  {
    step: '5',
    title: 'Derma Roll Frequency',
    detail: 'Derma roll every 5–7 days (do NOT roll daily — skin needs 5–7 days to heal the microchannels fully). On non-rolling days, apply GHK-Cu serum once or twice daily without rolling. The rolling sessions are the high-absorption events; daily serum application maintains continuous peptide contact.',
  },
];

const realisticExpectations = [
  { expectation: 'Can improve', items: ['Density of existing sparse follicles', 'Vellus-to-terminal follicle conversion in areas with fine, light hair', 'Follicle health and cycling regularity', 'Terminal hair thickness and shaft diameter', 'Reduction of perifollicular inflammation stunting growth'] },
  { expectation: 'Cannot do', items: ['Create follicles where none biologically exist', 'Override genetic limitations on beard pattern (Norwood-type beard genetics)', 'Replace the effects of adequate testosterone / DHT (the primary androgen driver)', 'Produce results equivalent to facial hair transplants for severe cases'] },
];

const faqs = [
  {
    q: 'Does GHK-Cu lower DHT and hurt my beard?',
    a: 'This is the most common concern — and the answer is: no, GHK-Cu does not negatively affect beard growth even though it modulates DHT pathway signaling. Here is why: scalp follicles and facial (beard) follicles have opposite responses to DHT. Scalp follicles are suppressed by DHT (DHT causes miniaturization of scalp follicles in androgenetic alopecia). Beard follicles are stimulated by DHT (DHT drives vellus-to-terminal conversion in the beard area). GHK-Cu\'s modulation of androgen receptor signaling in scalp tissue is a local effect that does not translate to facial follicles — facial follicles have different androgen receptor expression profiles and are not exposed to topical scalp applications. When applying GHK-Cu to the beard area specifically, the mechanism is growth factor stimulation, not DHT interference. The DHT relationship with beard follicles is preserved.',
  },
  {
    q: 'What is the minimum visible timeline for beard improvement with peptides?',
    a: 'Beard hair grows approximately 0.5–1.5 cm per month. Peptide effects on follicle biology (anagen prolongation, follicle enlargement, vellus-to-terminal conversion) begin within weeks, but the visible output of a thicker, denser hair requires the full length of the new hair shaft to grow out. Realistically: 8–12 weeks for the first signs of improved density in responsive areas; 16–24 weeks for clear, measurable improvement in density and patch coverage; 6+ months for the full transformation of a protocol cycle. Taking standardized weekly photos in the same lighting is essential for tracking progress, as beard growth changes are gradual enough to be invisible day-to-day.',
  },
  {
    q: 'Can I apply GHK-Cu and minoxidil to the beard area?',
    a: 'Yes — this combination is used by many practitioners for beard density improvement. Minoxidil (2–5% solution, not the 5% foam which can cause scalp drying) applied to the beard area has independent evidence for beard density improvement, and its mechanism (vasodilation, potassium channel opening, anagen prolongation) is complementary to GHK-Cu\'s mechanism. Apply them at different times: GHK-Cu in the morning, minoxidil in the evening. Allow each to dry completely before applying other products. Important: minoxidil can cause initial shedding of older telogen hairs — this is temporary and is followed by improved density as new anagen hairs grow. GHK-Cu alongside minoxidil helps mitigate the scalp/skin irritation that minoxidil can cause.',
  },
  {
    q: 'How do I know if my patchy beard is from genetics or fixable with peptides?',
    a: 'Patchy beard has several potential causes with very different treatment implications. Genetic pattern (true follicular absence): if an area has absolutely no follicles — no fine vellus hairs, smooth skin texture — peptides cannot create follicles where none exist biologically. Vellus follicle areas (fine, light, almost invisible hairs): these areas have follicles in a vellus state that can potentially convert to terminal with adequate androgen exposure and peptide support. Perifollicular inflammation: areas that used to have beard growth but have thinned or patchy areas may have follicle suppression from inflammation — this is highly responsive to BPC-157 + GHK-Cu protocols. Hormonal deficiency: low testosterone or DHT (check with blood work) directly limits beard follicle activation — peptides help but do not replace addressing hormonal root causes.',
  },
  {
    q: 'Is derma rolling safe on the beard area?',
    a: 'Yes, with proper technique. Use a 0.25–0.5mm roller for the beard area — this depth creates microchannels without reaching deep enough to cause scarring. Roll every 5–7 days to allow proper healing. Do not roll over active acne, infections, or irritated skin. Clean the roller with 70% isopropyl alcohol before and after each use. Apply GHK-Cu immediately after rolling while channels are open. The temporary redness following rolling resolves within 1–3 hours. Most users find beard-area derma rolling less intense than scalp rolling due to the facial skin\'s different thickness and vascularity. The wound healing response triggered by micro-needling is itself a follicle stem cell activator — independent of the peptide absorption benefit.',
  },
  {
    q: 'Do peptides work for men who have never been able to grow a beard?',
    a: 'This depends entirely on the cause. If beard absence is due to genuinely absent follicles (true hereditary alopecia of the beard — rare), peptides cannot help. However, most men who "cannot grow a beard" in their 20s actually have follicles in a vellus state that have not yet terminalized. Beard terminal conversion continues throughout the 20s and even into the early 30s in some men — it is influenced by testosterone, DHT, and age. If you are under 25, natural terminal conversion may still occur. If you have fine, light facial hairs but poor terminal conversion, IGF-1 LR3 + GHK-Cu topical is the best approach. Blood work to assess testosterone and DHT levels is important context — peptides work synergistically with adequate androgens but cannot substitute for hormonal deficiency.',
  },
  {
    q: 'What is the best standalone peptide for beard growth?',
    a: 'For topical approach: GHK-Cu is the best standalone choice due to its follicle enlargement, anagen prolongation, and local growth factor activation — applied directly to the beard area with a derma roller. For systemic approach: IGF-1 LR3 provides the most direct follicle-stimulating signal through IGF-1 receptor activation in follicle dermal papilla cells. For the best results, combine GHK-Cu topical with one systemic peptide (either IGF-1 LR3 or CJC-1295/Ipamorelin). The combination addresses both local follicle biology (GHK-Cu) and systemic growth factor signaling (IGF-1). Budget determines which approach to use — GHK-Cu topical alone is the most cost-effective starting point.',
  },
];

export default function PeptidesForBeardGrowthPage() {
  return (
    <main className="min-h-screen bg-dark-900 text-slate-200">
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-dark-900 to-amber-900/20" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 text-emerald-300 text-sm font-semibold">
            <Zap className="w-4 h-4" />
            Beard Growth &amp; Peptides
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Peptides for{' '}
            <span className="text-neon-green">Beard Growth</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            The biology of beard follicles is fundamentally different from scalp hair. Here is how to use peptides correctly for beard density — with full protocols and realistic timelines.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} rel="nofollow noopener noreferrer" className="btn-cta flex items-center gap-2">
              View Beard Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/ghk-cu-for-hair-loss" className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-xl text-slate-300 hover:border-slate-400 transition-colors">
              GHK-Cu Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Why Beard Density Matters for Looksmaxxing */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">Why Beard Density Matters for Appearance</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-slate-300 leading-relaxed">
              Facial hair is one of the most significant masculinity signals in human appearance research. Studies on facial attractiveness consistently show that full, well-groomed beard coverage correlates with higher perceived dominance, maturity, and social status. More practically for looksmaxxing: a dense beard provides jawline definition, masks jawline asymmetry, and creates the visual illusion of a stronger, more angular facial structure.
            </p>
            <p className="text-slate-300 leading-relaxed">
              For men with patchy or sparse beards, the gap between their genetic ceiling and their current beard density is the opportunity that peptide protocols target. A patchy beard is often not a reflection of absolute follicle absence — it frequently reflects follicles that are in a vellus state (fine, unpigmented, essentially invisible) that have not yet converted to terminal (thick, pigmented, visible) hair. This vellus-to-terminal conversion is driven by androgens (primarily DHT) and growth factors — precisely the pathways that targeted peptides influence.
            </p>
          </div>
        </div>
      </section>

      {/* Hair Growth Biology */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">The Biology of Beard Growth</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-slate-300 leading-relaxed">
              Understanding beard hair biology is essential before designing a peptide protocol — because beard follicles operate differently from scalp follicles in a critical way that affects which peptides to use and how.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Beard follicles begin as vellus follicles — small, minimally pigmented, producing barely visible "peach fuzz" hairs. Terminal conversion is driven primarily by dihydrotestosterone (DHT), which binds to androgen receptors in facial follicle dermal papilla cells and triggers the signaling cascade that enlarges the follicle and switches on pigmented, thick hair production. This is the <em>opposite</em> of scalp hair — scalp follicles in genetically sensitive individuals are miniaturized by DHT (androgenetic alopecia), while the same DHT drives beard terminal conversion.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The three-phase hair cycle (anagen, catagen, telogen) applies to beard hair as it does to all hair. Beard anagen phase is much shorter than scalp hair anagen — beard hair grows for 2–6 months before entering catagen and telogen, which is why beard hair has a natural length limit even without cutting. Peptides that prolong the anagen phase directly extend how long each follicle is actively producing hair — resulting in denser coverage from more follicles being in active growth simultaneously.
            </p>
          </div>

          {/* Hair Phases */}
          <div className="space-y-4">
            {hairPhases.map((phase) => (
              <div key={phase.phase} className={`glass-card p-5 border ${phase.color} space-y-2`}>
                <h3 className="text-slate-100 font-bold">{phase.phase}</h3>
                <p className="text-slate-400 text-xs font-semibold text-amber-300">{phase.duration}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{phase.description}</p>
                <p className="text-emerald-300 text-sm"><span className="text-slate-500">Peptide action: </span>{phase.peptideAction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beard Growth Tracker */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-white">Beard Growth Cycle Visualizer</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Track your beard peptide protocol week by week — see what is happening biologically and what to expect visually.
            </p>
          </div>
          <BeardGrowthTracker />
        </div>
      </section>

      {/* Peptides for Beard */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">Beard Peptides: Ranked &amp; Explained</h2>
          <div className="space-y-5">
            {beardPeptides.map((peptide) => (
              <div key={peptide.name} className={`glass-card p-6 border ${peptide.color} space-y-4`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${peptide.badge}`}>
                      #{peptide.rank}
                    </span>
                    <h3 className="text-slate-100 font-bold text-lg">{peptide.name}</h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${peptide.badge}`}>
                    Beard Peptide
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{peptide.mechanism}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase tracking-wide">Application</span>
                    <p className="text-slate-300 mt-1">{peptide.application}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wide">Dose</span>
                    <p className="text-slate-300 mt-1">{peptide.dose}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wide">Frequency</span>
                    <p className="text-slate-300 mt-1">{peptide.frequency}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 uppercase tracking-wide">Timeline</span>
                    <p className="text-emerald-300 mt-1 font-medium">{peptide.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GHK-Cu and DHT Deep Dive */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">GHK-Cu and DHT: Why It Helps Beard Without Hurting It</h2>
          <div className="glass-card p-8 space-y-5">
            <p className="text-slate-300 leading-relaxed">
              The most frequently asked question about GHK-Cu for beard growth is whether its anti-androgenic effects on scalp follicles will suppress the DHT-driven beard terminal conversion. The answer requires understanding the fundamentally different androgen receptor expression profiles between scalp and facial follicles.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Scalp follicles in androgenetic alopecia are highly sensitive to DHT due to overexpression of androgen receptors and 5α-reductase type II. GHK-Cu modulates androgen receptor sensitivity in scalp dermal papilla cells — a beneficial effect for scalp hair loss. Facial follicles, however, have a completely different receptor configuration: they are activated, not suppressed, by DHT, and their androgen receptor expression is regulated by different genetic factors than scalp follicles.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When GHK-Cu is applied topically to the beard area, it acts through growth factor stimulation (IGF-1, VEGF, FGF) and local anti-inflammatory mechanisms — not through androgen receptor suppression in the facial follicle context. The key finding from research: GHK-Cu's primary mechanism for follicle stimulation is IGF-1 upregulation and angiogenesis, not androgen modulation. These pathways are beard-positive regardless of DHT status.
            </p>
            <div className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-4">
              <p className="text-emerald-300 font-semibold text-sm">Bottom Line</p>
              <p className="text-slate-300 text-sm mt-1">
                GHK-Cu applied to beard area stimulates beard follicle growth through IGF-1 and angiogenesis pathways. It does not suppress beard-area DHT signaling. Users on finasteride (which does reduce DHT systemically) can still use GHK-Cu topically on the beard to compensate for the DHT reduction's impact on beard follicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topical Protocol */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">The Topical Beard Protocol: Step by Step</h2>
          <div className="space-y-4">
            {topicalProtocol.map((step) => (
              <div key={step.step} className="glass-card p-5 flex items-start gap-4">
                <span className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold flex-shrink-0">
                  {step.step}
                </span>
                <div className="space-y-1">
                  <h3 className="text-slate-100 font-bold">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="glass-card p-6">
            <h3 className="text-slate-100 font-bold mb-3">The Dermaroller Synergy</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Micro-needling (derma rolling) is one of the most powerful adjuncts to GHK-Cu application. The mechanism is dual: first, the microchannels created by the needles increase topical absorption of GHK-Cu by an estimated 400–1000x compared to skin without microchannels. Second, the micro-injury itself triggers a wound healing response that independently activates follicle stem cells — the same cells that GHK-Cu targets. Research on micro-needling alone (without any peptide) shows significant hair density improvement, suggesting the mechanical activation is a potent independent signal. Combined with GHK-Cu, the effect is amplified significantly.
            </p>
          </div>
        </div>
      </section>

      {/* Realistic Expectations */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">Realistic Expectations: What Peptides Can and Cannot Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {realisticExpectations.map((section) => (
              <div key={section.expectation} className={`glass-card p-6 space-y-3 border ${section.expectation === 'Can improve' ? 'border-emerald-500/30' : 'border-rose-500/30'}`}>
                <h3 className={`font-bold ${section.expectation === 'Can improve' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {section.expectation}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm text-slate-300 ${section.expectation === 'Can improve' ? '' : 'opacity-70'}`}>
                      <span className={`mt-0.5 flex-shrink-0 ${section.expectation === 'Can improve' ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {section.expectation === 'Can improve' ? <CheckCircle className="w-4 h-4" /> : <span className="text-lg leading-none">×</span>}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Beard Growth FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card p-6 space-y-3">
                <h3 className="text-slate-100 font-bold">{faq.q}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <FlaskConical className="w-12 h-12 text-emerald-400 mx-auto" />
          <h2 className="text-3xl font-bold text-white">Start Your Beard Protocol</h2>
          <p className="text-slate-400">
            GHK-Cu topical + derma roller is the highest-evidence, most accessible starting point. Add IGF-1 LR3 for systemic follicle support.
          </p>
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-200 text-sm">
            <AlertTriangle className="w-4 h-4 inline mr-2" />
            For research purposes only. Consult a qualified physician before use.
          </div>
          <Link
            href={SOURCE_URL}
            rel="nofollow noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            View Recommended Suppliers <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <InternalLinks path="/peptides-for-beard-growth" />
    </main>
  );
}
