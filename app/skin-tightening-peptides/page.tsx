import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Zap, Sparkles, FlaskConical, Layers } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';
import SkinFirmnessGoalSelector from '@/components/SkinFirmnessGoalSelector';

export const metadata: Metadata = {
  title: 'Skin Tightening Peptides 2026: GHK-Cu, SNAP-8 & Collagen Rebuilding | BPC-157 Stack',
  description: 'GHK-Cu synthesizes collagen I, III, IV. SNAP-8 prevents expression lines. BPC-157 repairs skin architecture. The complete peptide protocol for skin firmness and anti-aging.',
  keywords: 'skin tightening peptides, GHK-Cu collagen, SNAP-8 wrinkles, BPC-157 skin healing, peptides for skin firmness, collagen peptide protocol, anti-aging skin peptides, injectable GHK-Cu',
  openGraph: {
    title: 'Skin Tightening Peptides: GHK-Cu, SNAP-8 & Collagen Rebuilding Protocol',
    description: 'The skincare industry sells you hope. Peptides sell you collagen fibers — actual structural proteins that change the architecture of your skin.',
    type: 'article',
    url: 'https://www.bp157stack.com/skin-tightening-peptides',
  },
  alternates: {
    canonical: 'https://www.bp157stack.com/skin-tightening-peptides',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const stats = [
  { value: '63%', label: 'Wrinkle depth reduction (SNAP-8 trial)', color: 'text-[#00ff88]' },
  { value: '31%', label: 'Aged genes reset by GHK-Cu', color: 'text-[#00ff88]' },
  { value: '1%', label: 'Annual collagen loss after 25', color: 'text-rose-400' },
  { value: '4,000+', label: 'Genes modulated by GHK-Cu', color: 'text-[#00ff88]' },
];

const whySkinLosesFirmness = [
  {
    factor: 'Collagen Cross-Linking',
    icon: '🔗',
    detail: 'As collagen fibers age, they form abnormal cross-links that make them stiff and brittle rather than flexible and strong. New collagen synthesis can\'t keep pace with this degradation — the net result is thinner, less resilient skin.',
  },
  {
    factor: 'Elastin Loss',
    icon: '🪢',
    detail: 'Elastin is the protein that makes skin snap back. Production drops dramatically after your 20s. Unlike collagen, lost elastin is very difficult to replace — which is why early intervention with elastin-stimulating peptides like GHK-Cu is more effective than late intervention.',
  },
  {
    factor: 'Fibroblast Senescence',
    icon: '🔬',
    detail: 'Fibroblasts are the cells that produce collagen and elastin. With age, they become senescent — they stop dividing and producing structural proteins but remain metabolically active, secreting inflammatory molecules (the "senescence-associated secretory phenotype"). Peptides like GHK-Cu can partially override this senescent state.',
  },
  {
    factor: 'Reduced Vascularization',
    icon: '🩸',
    detail: 'Skin requires constant blood flow to deliver nutrients for collagen synthesis. Capillary density in the dermis decreases with age — reducing the raw materials available for repair. BPC-157\'s angiogenic effects address this directly.',
  },
];

const ghkCuMechanisms = [
  { type: 'Collagen I', description: 'The primary structural collagen — the main component of the dermis that provides tensile strength and thickness.' },
  { type: 'Collagen III', description: 'The "young" collagen — more elastic and flexible than Type I. High in fetal tissue and healthy young skin. GHK-Cu reverses the Type I/III ratio shift that occurs with aging.' },
  { type: 'Collagen IV', description: 'The basement membrane collagen — crucial for dermal-epidermal adhesion and skin barrier function.' },
  { type: 'Elastin', description: 'The recoil protein. GHK-Cu upregulates both elastin synthesis and the enzymes that correctly organize elastin fibers in the extracellular matrix.' },
  { type: 'TIMP-2', description: 'Tissue inhibitor of metalloproteinases — prevents the MMP enzymes from breaking down newly synthesized collagen before it can integrate.' },
];

const topicalVsInjectable = [
  {
    route: 'Topical',
    pros: ['Convenient daily application', 'No needle required', 'Direct delivery to epidermis/dermis', 'Lower cost entry point'],
    cons: ['Limited penetration to deep dermis', 'Concentration constraints in formulation', 'Less systemic benefit'],
    bestFor: 'Fine lines, surface texture, daily maintenance protocol',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
  },
  {
    route: 'Injectable',
    pros: ['Full systemic delivery', 'Deep dermal penetration', 'Higher therapeutic concentrations', 'Drives collagen synthesis from within'],
    cons: ['Requires reconstitution', 'Daily subcutaneous injection', 'Higher cost'],
    bestFor: 'Deep wrinkles, sagging, serious structural repair, anti-aging stack',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
];

const faqs = [
  {
    q: 'Is GHK-Cu better topically or as an injectable?',
    a: 'Both have merit, but they work at different depths. Topical GHK-Cu penetrates into the upper dermis and is excellent for surface-level improvements — texture, fine lines, overall brightness. Injectable GHK-Cu (subcutaneous) delivers the peptide systemically at therapeutic concentrations, driving deeper structural changes including basement membrane collagen synthesis. For serious skin firmness goals — especially if you\'re dealing with sagging or deep wrinkles — the injectable route is significantly more impactful. The ideal protocol uses both: injectable for systemic effect, topical for direct dermal application.',
  },
  {
    q: 'How does SNAP-8 compare to Botox?',
    a: 'SNAP-8 (acetyl octapeptide-3) works by a similar but milder mechanism to Botox — both reduce the muscle contraction that forms expression lines. Botox paralyzes the muscle by blocking acetylcholine release entirely. SNAP-8 works by partially competing with the SNARE protein complex involved in neurotransmitter release, reducing (not eliminating) the muscle contraction. The effect is subtler than Botox and requires regular application to maintain, but it preserves more natural facial movement and pairs with collagen-building peptides to address both prevention and structural repair simultaneously.',
  },
  {
    q: 'How long does it take to see results from GHK-Cu injectable?',
    a: 'Most users report noticeable changes in skin texture and firmness at 6–10 weeks of daily subcutaneous GHK-Cu. Deeper structural improvements — visible reduction in wrinkle depth, improved skin laxity — typically appear in the 10–16 week range and continue to improve with ongoing use. GHK-Cu works by upregulating your body\'s own collagen synthesis machinery, not by adding collagen directly, so the results build over time rather than appearing immediately.',
  },
  {
    q: 'Can BPC-157 be used on the skin?',
    a: 'Yes — BPC-157 has documented wound healing and skin repair effects. When applied topically (or injected near a damaged area), it dramatically accelerates tissue healing through multiple mechanisms: angiogenesis (new blood vessel formation), fibroblast migration to the wound site, and upregulation of growth hormone receptors locally. It\'s particularly useful for scars, acne healing, and skin repair after procedures. Some advanced protocols use BPC-157 injectable alongside topical application in post-procedure recovery.',
  },
  {
    q: 'What\'s the difference between GHK-Cu 100mg and smaller vials?',
    a: 'GHK-Cu 100mg vials are a bulk/extended-supply format. At a typical daily dose of 2mg SC, a 100mg vial provides approximately 50 days of supply — roughly 7 weeks. For anyone running a serious skin protocol that requires 12–16 weeks of consistent use, the 100mg format is significantly more cost-effective per milligram than smaller vials. The larger format also reduces the frequency of reconstitution and handling.',
  },
  {
    q: 'Is the IGF-1 axis relevant for skin rejuvenation?',
    a: 'Very much so. IGF-1 (insulin-like growth factor 1) directly stimulates fibroblast proliferation — more fibroblasts means more capacity for collagen and elastin production. GH peptides (Sermorelin, Ipamorelin) that raise the GH-IGF-1 axis have real skin rejuvenation effects alongside their body composition benefits. Many serious anti-aging protocol users combine GHK-Cu with a GH secretagogue precisely to maximize fibroblast activity.',
  },
];

export default function SkinTighteningPeptides() {
  return (
    <main className="min-h-screen grid-bg">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Skin Tightening Peptides: GHK-Cu, SNAP-8 & Collagen Rebuilding Protocol',
            description: 'GHK-Cu synthesizes collagen I, III, IV. SNAP-8 prevents expression lines. BPC-157 repairs skin architecture. The complete peptide protocol for skin firmness.',
            url: 'https://www.bp157stack.com/skin-tightening-peptides',
            author: { '@type': 'Organization', name: 'BPC-157 Stack' },
          }),
        }}
      />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Collagen Rebuilding Protocol
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Actual Collagen Fibers,{' '}
            <span className="text-[#00ff88]">Not Just Hope</span>
          </h1>
          <p className="text-xl text-gray-900 leading-relaxed max-w-3xl mx-auto mb-8">
            The skincare industry sells you hope. Peptides sell you collagen fibers — actual structural proteins that change the architecture of your skin. GHK-Cu triggers your fibroblasts to synthesize collagen I, III, and IV. SNAP-8 prevents the muscle contractions that form expression lines. BPC-157 drives angiogenesis in the dermis, restoring the vascular supply that collagen production depends on.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              View Skin Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/ghk-cu-skin-protocol" className="btn-secondary">
              GHK-Cu Full Protocol
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 text-center">
              <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <div className="text-gray-500 text-sm leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Skin Loses Firmness */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Why Skin Loses Its Firmness</h2>
        <p className="text-gray-900 leading-relaxed text-lg mb-10">
          Skin aging isn't mysterious — it's a set of specific, addressable biological processes. Understanding the mechanisms tells you exactly which peptides to deploy and why.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {whySkinLosesFirmness.map((item) => (
            <div key={item.factor} className="glass-card p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-gray-900 font-bold text-base">{item.factor}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GHK-Cu Mechanisms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-4">What GHK-Cu Actually Synthesizes</h2>
        <p className="text-gray-900 leading-relaxed text-lg mb-8">
          GHK-Cu (copper peptide) is the most extensively researched peptide in skin biology. Its key mechanism is direct upregulation of collagen synthesis enzymes in dermal fibroblasts — across multiple collagen subtypes, not just one. Here's what it actually builds.
        </p>
        <div className="glass-card p-6">
          <div className="space-y-4">
            {ghkCuMechanisms.map((m) => (
              <div key={m.type} className="flex items-start gap-4 p-4 bg-slate-900/40 rounded-xl">
                <div className="shrink-0 w-24">
                  <span className="text-[#00ff88] font-black text-sm">{m.type}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Selector */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Find Your Personalized Protocol</h2>
        <p className="text-gray-500 text-base mb-6">Select your primary skin concern for a tailored topical + injectable protocol recommendation.</p>
        <SkinFirmnessGoalSelector />
      </section>

      {/* GHK-Cu Product */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-[#00ff88]/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/ghk-cu-100mg.png"
              alt="GHK-Cu 100mg copper peptide injectable"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-[#00ff88] text-xs font-bold uppercase tracking-widest mb-2">Core Skin Peptide</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">GHK-Cu 100mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              The 100mg vial provides approximately 50 days of supply at 2mg/day — the standard anti-aging skin dose. GHK-Cu modulates over 4,000 genes, resets 31% of aged gene expression patterns, and directly stimulates collagen I, III, and IV synthesis. Injectable delivery achieves systemic distribution that topical formulations cannot match for serious structural skin repair.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['100mg per vial', '~50 days at 2mg/day', 'Collagen I, III, IV synthesis', '4,000+ genes modulated'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#00ff88]" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-cta inline-flex">
              View GHK-Cu 100mg <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SNAP-8 Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row gap-8 items-center border border-rose-500/15">
          <div className="shrink-0">
            <Image
              src="https://phiogen.is/images/products/snap-8-10mg.png"
              alt="SNAP-8 anti-wrinkle peptide 10mg"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2">Expression Line Prevention</div>
            <h3 className="text-gray-900 text-2xl font-black mb-3">SNAP-8 10mg</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              SNAP-8 (acetyl octapeptide-3) is the topical peptide equivalent of Botox's mechanism — without the injection and with a subtler, more natural result. It competes with the SNARE protein complex, partially inhibiting the neuromuscular signal that causes expression muscle contractions. Clinical data shows up to 63% reduction in wrinkle depth in the eye/forehead area with twice-daily application.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {['63% wrinkle depth reduction', 'Topical application', 'Expression line prevention', 'SNARE protein competitor'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-rose-400" /> {f}
                </span>
              ))}
            </div>
            <Link href={SOURCE_URL} className="btn-secondary inline-flex">
              View SNAP-8 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BPC-157 for skin */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 border border-[#00ff88]/10">
          <div className="flex items-start gap-5">
            <FlaskConical className="w-8 h-8 text-[#00ff88] shrink-0 mt-1" />
            <div>
              <h3 className="text-gray-900 text-2xl font-black mb-3">BPC-157: The Skin Repair Peptide</h3>
              <p className="text-gray-900 leading-relaxed text-base mb-4">
                BPC-157 is primarily known for its role in tendon and gut healing — but its skin repair effects are equally impressive. The key mechanism for skin is angiogenesis: BPC-157 drives new blood vessel formation in damaged or aging tissue. This is critical because collagen synthesis is an energy-intensive process that requires constant nutrient delivery. Aging skin is often poorly vascularized — and improving blood flow to the dermis dramatically accelerates every other repair process.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Angiogenesis', detail: 'New capillary formation in the dermis — restores the nutrient supply for collagen synthesis' },
                  { title: 'Fibroblast Migration', detail: 'Recruits collagen-producing cells to sites of damage or repair' },
                  { title: 'GH Receptor Upregulation', detail: 'Makes skin cells more responsive to IGF-1 signals for proliferation and repair' },
                ].map((item) => (
                  <div key={item.title} className="bg-emerald-500/8 border border-emerald-500/15 rounded-xl p-4">
                    <h4 className="text-[#00ff88] font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topical vs Injectable */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-6">Topical vs Injectable — Which Should You Use?</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {topicalVsInjectable.map((route) => (
            <div key={route.route} className={`glass-card border p-6 ${route.bg}`}>
              <h3 className={`font-black text-xl mb-4 ${route.color}`}>{route.route}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">Advantages</p>
                  {route.pros.map((p) => (
                    <div key={p} className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className={`w-4 h-4 shrink-0 ${route.color}`} />
                      <span className="text-gray-600 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-2">Limitations</p>
                  {route.cons.map((c) => (
                    <p key={c} className="text-gray-500 text-sm mb-1">• {c}</p>
                  ))}
                </div>
                <div className="bg-slate-900/40 rounded-lg p-3">
                  <p className="text-gray-500 text-xs font-bold mb-1">Best for</p>
                  <p className="text-gray-600 text-sm">{route.bestFor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="glass-card group">
              <summary className="p-6 cursor-pointer flex items-center justify-between gap-4 text-gray-900 font-semibold text-base list-none">
                {faq.q}
                <span className="text-[#00ff88] text-xl font-black shrink-0 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-gray-900 leading-relaxed text-base">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-10 text-center border border-[#00ff88]/15">
          <Sparkles className="w-10 h-10 text-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Start Rebuilding Your Skin Architecture</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            GHK-Cu, SNAP-8, and BPC-157 are available as research peptides. Start with the protocol selector above to find the right approach for your skin goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={SOURCE_URL} className="btn-cta">
              Shop Skin Peptides <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/ghk-cu-skin-protocol" className="btn-secondary">
              Full GHK-Cu Protocol
            </Link>
          </div>
        </div>
      </section>

      <InternalLinks path="/skin-tightening-peptides" />
    </main>
  );
}
