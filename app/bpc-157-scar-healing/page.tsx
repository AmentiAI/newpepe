import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, FlaskConical, Zap } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import ScarTypeProtocol from '@/components/ScarTypeProtocol';

export const metadata: Metadata = {
  title: 'BPC-157 for Scar Healing: Mechanism, Scar Types & Protocol Guide (2026)',
  description: 'How BPC-157 remodels scar tissue — angiogenesis, fibroblast activation, TGF-β regulation, and the gut-skin axis. Complete protocol guide for acne scars, surgical scars, keloids, stretch marks, and burns.',
  keywords: 'BPC-157 scar healing, BPC-157 scar tissue, BPC-157 acne scars, BPC-157 surgical scar, BPC-157 keloid, BPC-157 stretch marks, peptide scar treatment, BPC-157 skin repair',
  openGraph: {
    title: 'BPC-157 for Scar Healing: Complete Protocol Guide 2026',
    description: 'BPC-157 scar remodeling via angiogenesis, fibroblast activation, and TGF-β regulation. Protocols for every scar type.',
    type: 'article',
    url: 'https://bp157stack.com/bpc-157-scar-healing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPC-157 for Scar Healing — Complete 2026 Guide',
    description: 'Angiogenesis, collagen remodeling, TGF-β regulation — how BPC-157 heals every scar type.',
  },
  alternates: {
    canonical: 'https://bp157stack.com/bpc-157-scar-healing',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const mechanisms = [
  {
    name: 'Angiogenesis',
    icon: '🩸',
    color: 'text-red-400',
    border: 'border-red-500/30',
    desc: 'BPC-157 stimulates new blood vessel formation (angiogenesis) in wound and scar tissue via upregulation of VEGF (vascular endothelial growth factor) and VEGF receptor expression. Scar tissue is notoriously avascular — this is why scars appear pale, heal poorly, and remain stiff. BPC-157\'s angiogenesis in scar tissue restores the blood supply essential for collagen remodeling, pigmentation normalization, and tissue flexibility.',
    significance: 'Without adequate blood supply, collagen remodeling cannot occur. Angiogenesis is the prerequisite for all other BPC-157 scar healing effects.',
  },
  {
    name: 'Fibroblast Activation & Collagen Remodeling',
    icon: '🔄',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    desc: 'BPC-157 activates dermal fibroblasts — the cells responsible for collagen production and tissue architecture. Critically, BPC-157 promotes the transition from type III collagen (the disorganized, weaker emergency collagen produced during initial wound healing) to type I collagen (the organized, strong collagen of mature healthy skin). This remodeling from type III to type I is the biological process that reduces scar visibility and improves scar flexibility.',
    significance: 'Type III collagen dominance in scars = visible, raised, textured scars. Type I dominance = flat, skin-colored, flexible scars. BPC-157 drives this transition.',
  },
  {
    name: 'TGF-β Regulation',
    icon: '⚖️',
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    desc: 'TGF-β1 (transforming growth factor beta-1) is the primary driver of scar formation. It signals fibroblasts to produce collagen rapidly and continuously — useful for early wound healing but pathological when overactive, producing hypertrophic scars and keloids. BPC-157 normalizes TGF-β1 signaling: it allows sufficient TGF-β1 for initial healing while preventing the chronic overactivation that produces raised, permanent scars.',
    significance: 'This is the mechanism behind BPC-157\'s keloid and hypertrophic scar prevention. Getting TGF-β1 right at the time of injury determines whether a wound becomes a normal scar or a keloid.',
  },
  {
    name: 'Nitric Oxide Synthesis',
    icon: '⚡',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    desc: 'BPC-157 modulates nitric oxide (NO) signaling pathways. NO is a critical mediator of wound healing vasodilation, anti-inflammatory signaling, and collagen synthesis regulation. BPC-157\'s interaction with the NO-cGMP pathway contributes to its angiogenesis, anti-inflammatory, and healing effects in scar tissue — and explains some of its rapid local effects when injected near injury sites.',
    significance: 'NO pathway modulation allows BPC-157 to address both the vascular and inflammatory components of scar formation simultaneously.',
  },
  {
    name: 'Anti-Inflammatory Cytokine Regulation',
    icon: '🛡️',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    desc: 'BPC-157 reduces pro-inflammatory cytokines (TNF-α, IL-1β, IL-6) in healing tissue. Chronic inflammation is the primary driver of hypertrophic scar formation — the longer tissue remains inflamed after injury, the more excessive collagen deposition occurs. BPC-157\'s anti-inflammatory action shortens the inflammatory phase of healing and reduces the inflammatory stimulus for excessive scar formation.',
    significance: 'Reducing chronic wound inflammation shortens the scar-forming window and produces cosmetically superior healing outcomes with flatter, less red scars.',
  },
];

const scarTypes = [
  {
    type: 'Acne Scars (Atrophic)',
    color: 'border-rose-500/30',
    bg: 'bg-rose-500/5',
    textColor: 'text-rose-400',
    mechanism: 'Atrophic acne scars (pitted, ice-pick, rolling, boxcar types) result from insufficient collagen deposition during healing of active acne lesions. BPC-157 stimulates collagen fill from below — fibroblast activation drives new collagen deposition into the atrophic deficit.',
    gutSkinAxis: 'Active acne producing ongoing new scars is often driven by gut dysbiosis. BPC-157\'s gut-healing mechanism addresses the root cause: heal the gut → reduce systemic inflammation → reduce active acne → prevent new scar formation.',
    bestRoute: 'Systemic SC (to address gut-skin axis for active acne) + topical GHK-Cu on existing scars',
    timeline: '3–4 months for initial visible improvement; 6 months for significant fill of atrophic areas',
  },
  {
    type: 'Surgical Scars',
    color: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    textColor: 'text-blue-400',
    mechanism: 'Surgical incisions heal as linear scars. BPC-157 pre- and post-surgery dramatically improves scar quality: TGF-β normalization reduces hypertrophic scar formation; angiogenesis improves healing blood supply; type I collagen dominance from the start produces flat, narrow scars.',
    gutSkinAxis: 'Less relevant for surgical scars specifically — the primary mechanisms are local healing quality and TGF-β regulation.',
    bestRoute: 'SC systemic starting before surgery if possible; continue for 6–8 weeks post-procedure. Inject near scar site for additional local benefit.',
    timeline: '6–8 weeks significantly improved healing; 3–4 months for scar maturation with excellent cosmetics',
  },
  {
    type: 'Keloid / Hypertrophic Scars',
    color: 'border-amber-500/30',
    bg: 'bg-amber-500/5',
    textColor: 'text-amber-400',
    mechanism: 'Keloids are driven by TGF-β1 overactivation — causing fibroblasts to continuously deposit collagen long after the wound is healed. BPC-157\'s TGF-β normalization is the primary relevant mechanism. Started at time of injury, BPC-157 can prevent keloid formation in predisposed individuals. Applied to established keloids, intralesional injection can gradually reduce size and symptoms.',
    gutSkinAxis: 'Systemic inflammation from gut dysbiosis increases TGF-β1 activity globally — treating gut health reduces keloid-forming tendency.',
    bestRoute: 'Prevention: SC systemic immediately after wounding. Treatment of established keloids: intralesional injection directly into the keloid.',
    timeline: 'Prevention: immediate; keloid reduction: 6–12+ months',
  },
  {
    type: 'Stretch Marks (Striae)',
    color: 'border-emerald-500/30',
    bg: 'bg-emerald-500/5',
    textColor: 'text-emerald-400',
    mechanism: 'Stretch marks are dermal tears caused by rapid skin expansion beyond elastin capacity. BPC-157 drives angiogenesis in avascular stretch mark tissue (improving color) and collagen synthesis to partially fill the dermal deficit (improving texture). Red/purple stretch marks (fresh) respond better than white/silver (old).',
    gutSkinAxis: 'GHK-Cu topical applied to stretch marks is the key combination — GHK-Cu\'s collagen synthesis targets the dermal tear structure while BPC-157 drives angiogenesis.',
    bestRoute: 'Systemic SC + GHK-Cu 2mg topical applied directly to stretch mark areas twice daily',
    timeline: '3–6 months for color normalization; 6–12 months for texture improvement',
  },
  {
    type: 'Burn Scars',
    color: 'border-orange-500/30',
    bg: 'bg-orange-500/5',
    textColor: 'text-orange-400',
    mechanism: 'Burns cause extensive dermal damage with poor angiogenic response. BPC-157\'s angiogenesis mechanism is well-studied in burn models — it accelerates epithelialization, improves wound bed blood supply, and reduces the hypertrophic scar formation common in deep burns. TB-500 (Thymosin Beta-4) is often combined for its complementary mechanisms in burn healing.',
    gutSkinAxis: 'Less relevant for burns specifically — local and systemic healing quality are primary concerns.',
    bestRoute: 'Systemic SC + TB-500 combination for burn tissue; topical GHK-Cu once wound is fully epithelialized',
    timeline: 'Acute phase: faster epithelialization; chronic phase: 6–12 months for scar improvement',
  },
];

const gutSkinAxis = [
  {
    title: 'Leaky Gut → Systemic Inflammation',
    desc: 'Intestinal hyperpermeability allows bacterial LPS and other inflammatory molecules into systemic circulation. These drive chronic low-grade inflammation that activates mast cells in skin, triggers excessive TGF-β signaling, and increases the severity of inflammatory skin conditions including acne.',
    icon: '1',
  },
  {
    title: 'BPC-157 Heals the Gut',
    desc: 'BPC-157 repairs tight junction proteins in the intestinal epithelium, reduces intestinal inflammation (including colitis and IBS-type conditions), and normalizes gut motility. This is BPC-157\'s most extensively studied non-scar mechanism — its gastroprotective effects are the foundation of decades of research.',
    icon: '2',
  },
  {
    title: 'Reduced Systemic Inflammation',
    desc: 'As gut barrier integrity is restored, systemic LPS translocation decreases. Circulating inflammatory markers (CRP, IL-6, TNF-α) fall. This systemic anti-inflammatory shift reduces the inflammatory stimulus driving active acne lesion formation.',
    icon: '3',
  },
  {
    title: 'Fewer Active Lesions → Fewer Scars',
    desc: 'Fewer active acne lesions means fewer opportunities for atrophic scar formation. The gut-skin axis intervention is thus both a direct skin quality improvement and a scar prevention strategy. BPC-157\'s dual action — gut healing + local scar remodeling — makes it uniquely suited to acne scar management.',
    icon: '4',
  },
];

const faqs = [
  {
    q: 'Can BPC-157 fill in deep pitted acne scars?',
    a: 'BPC-157 drives collagen fill in atrophic acne scars via fibroblast activation — but the degree of filling depends on scar depth, scar age, and protocol intensity. Fresh atrophic scars (under 6 months old) respond best. Old, deep ice-pick scars show more limited response and may require combination with professional treatments (microneedling, subcision, laser) for complete resolution. Realistic expectation: 30–60% improvement in scar depth over 6–9 months of consistent protocol. GHK-Cu topical applied directly to scar sites amplifies the collagen fill effect significantly.',
  },
  {
    q: 'Should I inject BPC-157 directly into the scar or systemically?',
    a: 'Both routes have different roles. Systemic SC injection addresses the gut-skin axis (critical for acne-related scarring), provides body-wide healing support, and is simpler to administer. Local injection adjacent to the scar delivers BPC-157 directly to the scar tissue for targeted angiogenesis and fibroblast activation. For maximum effect on scars: systemic SC for gut-skin axis and systemic healing support + local injection near significant scar sites for direct tissue remodeling. For beginners: start with systemic SC only — it provides significant benefit without the complexity of local injection.',
  },
  {
    q: 'How long does BPC-157 scar treatment take?',
    a: 'Scar remodeling is a biological process limited by the rate of collagen turnover and angiogenesis. Fresh wounds (started within 72 hours): meaningfully improved cosmetic outcome at 6–8 weeks. Active acne scar prevention with gut-skin axis treatment: 4–8 weeks for reduced active acne; 3–4 months for initial scar fill improvement. Old established scars: 4–6 months for first visible change; 9–12 months for maximum results. Patience is essential — BPC-157 accelerates the healing process but cannot skip biological time constraints.',
  },
  {
    q: 'What dose should I use for scar healing?',
    a: 'Standard scar healing protocol: 250–500mcg BPC-157 SC daily (or 5 days on / 2 days off) for systemic effects. For local injection near a scar: dilute 200–300mcg in bacteriostatic water and inject adjacent to (not into) the scar surface using a 29–31 gauge insulin syringe. Local injection frequency: 2–3x/week maximum — avoid over-traumatizing scar tissue. BPC-157 is generally well-tolerated, and the standard 250–500mcg systemic dose has a strong safety profile across extensive animal studies.',
  },
  {
    q: 'Can I use BPC-157 before surgery to prevent scarring?',
    a: 'Pre-surgical BPC-157 is one of the most strategically sound uses. Starting 1–2 weeks before elective surgery and continuing for 6–8 weeks post-surgery allows BPC-157 to: establish anti-inflammatory baseline, pre-load TGF-β regulation mechanisms, and begin angiogenesis support as soon as the wound occurs. Multiple animal studies show significantly improved scar quality when BPC-157 is started before wounding. Always inform your surgeon and anesthesiologist about any supplements being used pre-operatively.',
  },
  {
    q: 'Is BPC-157 effective for old scars from years ago?',
    a: 'Yes, but expectations should be calibrated appropriately. Old scars (1+ years) have established fibrotic architecture with poor vascularity. BPC-157 can still produce meaningful improvements — particularly angiogenesis (improving color normalization and flexibility) and gradual collagen remodeling (improving texture). However, complete resolution of old scars is not achievable with any non-surgical peptide protocol. Expect 25–50% improvement over a sustained 9–12 month protocol. For old scars, local injection near the scar provides more targeted effect than systemic alone.',
  },
];

export default function Bpc157ScarHealingPage() {
  return (
    <main className="bg-white min-h-screen text-gray-700">
      {/* Hero */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">
              BPC-157 Scar Science
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              BPC-157 for Scar Healing:{' '}
              <span className="text-emerald-700">Mechanisms, Types & Protocols</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BPC-157 is the most mechanistically complete peptide for scar tissue remodeling. It drives angiogenesis in avascular scar tissue, activates fibroblasts for type III→type I collagen remodeling, normalizes TGF-β to prevent hypertrophic scarring, and repairs the gut-skin axis that drives inflammatory acne. This guide covers every scar type, the relevant mechanisms, and complete protocols.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Source BPC-157 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Mechanisms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">BPC-157 Scar Mechanisms: 5 Pathways</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            BPC-157 does not work through a single mechanism — it addresses scar tissue via five distinct biological pathways, making it uniquely comprehensive for scar remodeling.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mechanisms.map((m) => (
              <div key={m.name} className={`rounded-xl border bg-gray-50 p-5 ${m.border}`}>
                <div className="text-3xl mb-3">{m.icon}</div>
                <h3 className={`font-bold mb-2 ${m.color}`}>{m.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{m.desc}</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Clinical Significance</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scar Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">BPC-157 by Scar Type</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            Different scar types have different underlying pathologies. BPC-157 addresses each via different primary mechanisms.
          </p>
          <div className="space-y-5">
            {scarTypes.map((st) => (
              <div key={st.type} className={`rounded-xl border p-6 ${st.bg} ${st.color}`}>
                <h3 className={`text-xl font-bold mb-4 ${st.textColor}`}>{st.type}</h3>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Primary Mechanism</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{st.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Gut-Skin Axis / Combination</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{st.gutSkinAxis}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Best Route</p>
                    <p className="text-sm text-gray-600">{st.bestRoute}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Timeline</p>
                    <p className="text-sm text-gray-600">{st.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scar Protocol Selector */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Personalized Scar Protocol</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                The optimal BPC-157 protocol depends on your scar type and age. Select your scar profile below for injection method, dose, frequency, expected duration, and combination peptides.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Tailored injection route for your scar type',
                  'Exact dosing based on scar age and severity',
                  'Color-coded treatment difficulty rating',
                  'Combination peptide recommendations',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <ScarTypeProtocol />
          </div>
        </div>
      </section>

      {/* Gut-Skin Axis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Gut-Skin Axis: Why BPC-157 Works for Acne Scars Systemically</h2>
          <p className="text-gray-500 mb-10 max-w-2xl">
            For acne scars specifically, BPC-157&apos;s gut-healing mechanism is as important as its direct skin effects. This four-step cascade explains why.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gutSkinAxis.map((step) => (
              <div key={step.title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-3xl font-black text-emerald-400 mb-3">{step.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local vs Systemic */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Local vs Systemic Injection: Decision Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-emerald-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-gray-900">Systemic SC Injection</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Abdominal subcutaneous injection, standard BPC-157 protocol.</p>
              <div className="space-y-2 mb-4">
                {[
                  'Best for gut-skin axis repair (acne root cause)',
                  'Addresses body-wide healing and inflammation',
                  'Simpler to administer — single injection site',
                  'Appropriate starting point for all users',
                  'Can address multiple scar sites simultaneously',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">Best for: acne scars, gut-skin axis issues, beginners, multiple scar sites</p>
            </div>
            <div className="bg-gray-50 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-gray-900">Local Injection (Adjacent to Scar)</h3>
              </div>
              <p className="text-sm text-gray-500 mb-4">Subcutaneous injection immediately adjacent to (not into) the scar tissue.</p>
              <div className="space-y-2 mb-4">
                {[
                  'Delivers BPC-157 directly to target scar tissue',
                  'Faster local angiogenesis and fibroblast activation',
                  'More effective for old or large structural scars',
                  'Higher technical skill required',
                  'Best combined with systemic for comprehensive effect',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500">Best for: surgical scars, keloids, isolated large scars, old fibrotic scars</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <FlaskConical className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-900/30 to-dark-800 border border-emerald-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your BPC-157 Scar Protocol</h2>
            <p className="text-gray-500 mb-6 max-w-xl mx-auto">
              Research-grade BPC-157 and GHK-Cu for comprehensive scar tissue remodeling. Begin with systemic SC injection and add topical GHK-Cu to the scar surface.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2"
            >
              Source BPC-157 & GHK-Cu <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-600 mt-4">
              For research purposes only. Not medical advice. Consult a healthcare professional.
            </p>
          </div>
        </div>
      </section>

      <InternalLinks path="/bpc-157-scar-healing" />
    </main>
  );
}
