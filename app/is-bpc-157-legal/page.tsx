import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import InternalLinks from '@/components/InternalLinks';

export const metadata: Metadata = {
  title: 'Is BPC-157 Legal? FDA Status, WADA Rules & Research Chemical Laws 2026',
  description: 'Is BPC-157 legal to buy? Complete guide to BPC-157 FDA status, WADA banned list status, and research chemical laws. What you need to know before purchasing.',
  keywords: 'is BPC-157 legal, BPC-157 legal status, BPC-157 FDA ban, BPC-157 WADA, is BPC-157 banned, BPC-157 research chemical, are peptides legal, BPC-157 legal to buy',
  openGraph: {
    title: 'Is BPC-157 Legal? FDA Status & Research Chemical Laws 2026',
    description: 'Complete guide to BPC-157 legal status — FDA, WADA, and research chemical laws explained.',
    type: 'article',
    url: 'https://bp157stack.com/is-bpc-157-legal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is BPC-157 Legal? FDA Status & Research Chemical Laws 2026',
    description: 'Complete guide to BPC-157 legal status — FDA, WADA, and research chemical laws.',
  },
};

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

const countryData = [
  {
    country: 'USA',
    flag: '🇺🇸',
    legalStatus: 'Legal (Research Chemical)',
    purchaseLegal: 'Yes',
    importLegal: 'Generally Yes',
    statusColor: 'text-emerald-400',
    notes: 'Not a controlled substance. FDA compounding restriction (2022) affects pharmacies only, not individual research chemical purchases.',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    legalStatus: 'Legal (Grey Area)',
    purchaseLegal: 'Yes',
    importLegal: 'Small quantities generally permitted',
    statusColor: 'text-yellow-400',
    notes: 'Not a scheduled substance under CDSA. Health Canada regulates drugs but BPC-157 is not listed as a controlled drug. Personal import in small quantities generally tolerated.',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    legalStatus: 'Legal (Research Use)',
    purchaseLegal: 'Yes',
    importLegal: 'Yes (research quantities)',
    statusColor: 'text-emerald-400',
    notes: 'Not listed under the Misuse of Drugs Act. Not a prescription-only medicine under UK law. Sold legally as a research chemical. Post-Brexit, UK operates independently of EU regulations.',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    legalStatus: 'Restricted',
    purchaseLegal: 'Prescription Only',
    importLegal: 'Restricted',
    statusColor: 'text-red-400',
    notes: 'TGA schedules peptides more aggressively than most countries. BPC-157 falls under scheduling that typically requires a prescription. Import without TGA permit is restricted. Verify current TGA schedule before purchasing.',
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    legalStatus: 'Legal (Research Use)',
    purchaseLegal: 'Yes',
    importLegal: 'EU rules apply',
    statusColor: 'text-emerald-400',
    notes: 'Not listed as a controlled substance under BtMG (Betäubungsmittelgesetz). Sold as a research chemical. No specific peptide import restrictions for personal research quantities.',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    legalStatus: 'Grey Area',
    purchaseLegal: 'Technically yes for research',
    importLegal: 'Personal amounts generally OK',
    statusColor: 'text-yellow-400',
    notes: 'France has stricter enforcement of the research chemical designation than some EU neighbors. Not on the controlled substances list but ANSM may regulate on case-by-case basis.',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    legalStatus: 'Legal (Research Chemical)',
    purchaseLegal: 'Yes',
    importLegal: 'Yes',
    statusColor: 'text-emerald-400',
    notes: 'One of the most permissive EU regulatory environments for research chemicals. Not a scheduled substance. Several EU-based peptide suppliers operate from the Netherlands.',
  },
  {
    country: 'New Zealand',
    flag: '🇳🇿',
    legalStatus: 'Restricted',
    purchaseLegal: 'Prescription Only',
    importLegal: 'Restricted — permit may be required',
    statusColor: 'text-red-400',
    notes: 'Medsafe (NZ Medicines and Medical Devices Safety Authority) regulates peptides strictly. Similar to Australia, purchase typically requires a prescription. Check current Medsafe classification.',
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    legalStatus: 'Grey Area',
    purchaseLegal: 'Technically permitted for research',
    importLegal: 'Strictly regulated',
    statusColor: 'text-yellow-400',
    notes: 'Japan has strict drug import regulations. Pharmaceutical import for personal use is heavily restricted. Research chemical imports exist in a grey area — verify with customs before importing.',
  },
  {
    country: 'Mexico',
    flag: '🇲🇽',
    legalStatus: 'Legal',
    purchaseLegal: 'Yes',
    importLegal: 'Yes',
    statusColor: 'text-emerald-400',
    notes: 'Relatively permissive pharmaceutical environment. Not a controlled substance under COFEPRIS scheduling. Many peptides are available without prescription.',
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    legalStatus: 'Grey Area',
    purchaseLegal: 'For research — yes',
    importLegal: 'ANVISA regulated — complex',
    statusColor: 'text-yellow-400',
    notes: 'ANVISA regulates drug imports strictly. Research chemical designation provides limited protection. Import may require registration. Domestic purchase for research is less regulated.',
  },
  {
    country: 'Ireland',
    flag: '🇮🇪',
    legalStatus: 'Legal (Research Use)',
    purchaseLegal: 'Yes',
    importLegal: 'Yes (EU research quantities)',
    statusColor: 'text-emerald-400',
    notes: 'Not listed as a controlled substance under Irish Misuse of Drugs regulations. EU single market allows research chemical transit. Similar to UK pre-Brexit framework.',
  },
  {
    country: 'Sweden',
    flag: '🇸🇪',
    legalStatus: 'Grey Area',
    purchaseLegal: 'Technically permitted',
    importLegal: 'Low quantities generally OK',
    statusColor: 'text-yellow-400',
    notes: 'Sweden has historically been more proactive about scheduling novel substances. Not currently scheduled but Läkemedelsverket monitors research chemicals. Verify current status.',
  },
  {
    country: 'Switzerland',
    flag: '🇨🇭',
    legalStatus: 'Legal (Research Use)',
    purchaseLegal: 'Yes',
    importLegal: 'Yes (small quantities)',
    statusColor: 'text-emerald-400',
    notes: 'Not an EU member — independent pharmaceutical regulations. Swissmedic does not currently schedule BPC-157. Research chemical purchases are permitted. Switzerland has a strong biotech research culture.',
  },
  {
    country: 'Singapore',
    flag: '🇸🇬',
    legalStatus: 'Restricted',
    purchaseLegal: 'HSA prescription required',
    importLegal: 'Heavily restricted',
    statusColor: 'text-red-400',
    notes: 'Singapore\'s HSA (Health Sciences Authority) has strict drug import and possession laws. Peptides generally require HSA approval. Do not attempt to import without verifying current HSA classification — penalties are severe.',
  },
];

const regulatoryTimeline = [
  {
    year: '1991',
    title: 'BPC-157 Isolated and Named',
    detail: 'Researchers at the University of Zagreb (Croatia) isolate a stable 15-amino acid fragment from gastric juice and name it Body Protection Compound 157 (BPC-157). Initial research focuses on its unexpected gastric healing properties.',
    type: 'discovery',
  },
  {
    year: '1993–2000',
    title: 'Early Animal Research Era',
    detail: 'First wave of peer-reviewed studies in rodent models demonstrates BPC-157\'s effects on gastric ulcer healing, tendon repair, and systemic tissue protection. No regulatory attention — the compound is purely a research curiosity.',
    type: 'research',
  },
  {
    year: '2001–2010',
    title: 'Mechanism Research Expands',
    detail: 'Research expands to show BPC-157\'s effects on the nitric oxide system, growth hormone receptor interactions, and wound healing. Still not clinically developed. The compound remains in academic research without pharmaceutical company backing.',
    type: 'research',
  },
  {
    year: '2011–2015',
    title: 'Biohacking Community Adoption',
    detail: 'BPC-157 enters online biohacking forums. Early adopters begin sourcing it as a research chemical. The peptide supplement industry begins selling it alongside other research-grade peptides. No regulatory action.',
    type: 'community',
  },
  {
    year: '2016–2019',
    title: 'Compounding Pharmacy Use Grows',
    detail: 'Licensed US compounding pharmacies begin preparing BPC-157 for prescribing physicians — primarily sports medicine and integrative medicine practitioners. This represents a major expansion from research chemical into a clinical setting. Estimated thousands of patients prescribed compounded BPC-157.',
    type: 'clinical',
  },
  {
    year: '2019',
    title: 'WADA Adds BPC-157 to Prohibited List',
    detail: 'The World Anti-Doping Agency (WADA) adds BPC-157 to the Prohibited List under Section S2 (Peptide Hormones, Growth Factors, Related Substances). Effective January 1, 2020. First major regulatory classification of BPC-157 — specifically targeting elite athletes.',
    type: 'regulatory',
  },
  {
    year: '2022',
    title: 'FDA Compounding Action',
    detail: 'The FDA adds BPC-157 to the list of bulk drug substances that "may present significant safety risks" under 503A compounding regulations. Licensed compounding pharmacies are no longer permitted to prepare BPC-157 for patients. This effectively removes the clinical pathway for US patients. Research chemical sales are unaffected.',
    type: 'regulatory',
  },
  {
    year: '2023',
    title: 'Research Chemical Market Normalizes',
    detail: 'Post-FDA action, the research chemical market for BPC-157 continues without interruption. Suppliers pivot fully to research-use-only labeling. Quality and testing standards improve in the market as established suppliers differentiate through COA transparency. Some former compounding pharmacy customers transition to research chemical sources.',
    type: 'market',
  },
  {
    year: '2024',
    title: 'Continued Academic Research',
    detail: 'Research into BPC-157 continues globally — particularly in Croatia, South Korea, and US academic institutions. New studies explore applications in traumatic brain injury, Parkinson\'s disease models, and systemic inflammation. No active FDA enforcement actions against research chemical sellers.',
    type: 'research',
  },
  {
    year: '2025',
    title: 'Peptide Regulatory Landscape Evolves',
    detail: 'Regulatory pressure increases on the broader research chemical peptide market in the US. Some suppliers reduce offerings. Established suppliers with robust COA programs and compliance infrastructure maintain operations. The gap between high-quality and low-quality suppliers widens.',
    type: 'regulatory',
  },
  {
    year: '2026',
    title: 'Current Status',
    detail: 'BPC-157 remains legally purchasable as a research chemical in the United States. The compounding pharmacy pathway remains closed. WADA prohibition remains in effect for tested athletes. Regulatory landscape stable but subject to change — FDA has signaled ongoing interest in the research chemical peptide market.',
    type: 'current',
  },
];

const faqs = [
  { q: 'Is BPC-157 legal in the United States?', a: 'BPC-157 is legal to purchase, possess, and use in the United States as a research chemical. It is not a controlled substance under DEA scheduling. The FDA has included BPC-157 on a list of bulk drug substances that cannot be compounded for patient use by licensed pharmacies — but this restriction affects pharmacies and prescribers, not individuals purchasing research chemicals. As a research chemical, BPC-157 is legally sold and purchased in the US.' },
  { q: 'Is BPC-157 banned by WADA?', a: 'BPC-157 is listed on the WADA Prohibited List under Section S2 (Peptide Hormones, Growth Factors, Related Substances and Mimetics). It is prohibited in-competition and out-of-competition for athletes in WADA-governed sports. Athletes subject to anti-doping testing should not use BPC-157. Non-tested recreational users are not affected by WADA rules.' },
  { q: 'What did the FDA do to BPC-157?', a: 'In 2022, the FDA included BPC-157 on its list of bulk drug substances that present "demonstrable difficulties for compounding" and substances that "may present significant safety risks." This means FDA-regulated compounding pharmacies cannot make BPC-157 for patients. This does not make BPC-157 a controlled substance or make individual purchase illegal — it specifically regulates pharmaceutical compounding.' },
  { q: 'Can I buy BPC-157 online legally?', a: 'Yes — BPC-157 is legally sold online in the United States as a research chemical. Reputable suppliers sell it with certificates of analysis (COA) for research purposes. The research chemical designation means it is sold for laboratory and research use, not for human consumption. This is the legal framework under which peptide suppliers currently operate.' },
  { q: 'Is BPC-157 legal in Canada, UK, Australia?', a: 'Canada: BPC-157 is not a scheduled substance and can be purchased as a research chemical, though regulatory status can vary. UK: Not listed as a controlled substance; legal as a research chemical. Australia: Listed on the Therapeutic Goods Administration (TGA) schedule; purchase for research purposes falls in a grey area — check current local regulations. Always verify with current local laws before purchasing.' },
  { q: 'Is BPC-157 a steroid?', a: 'No — BPC-157 is a peptide, not a steroid. Steroids are lipid-based compounds that interact with steroid hormone receptors. BPC-157 is a 15-amino acid peptide chain with no hormonal activity whatsoever. It does not affect testosterone, estrogen, cortisol, or any other steroid hormone. No PCT (post-cycle therapy) is needed after using BPC-157.' },
  { q: 'Can military personnel or law enforcement use BPC-157?', a: 'The answer depends on the specific branch and jurisdiction. US military personnel are subject to Department of Defense drug testing and supplement regulations — the DoD Prohibited Dietary Supplement Ingredients list does not currently include BPC-157, but the rules around unapproved drugs and supplements are strict. Military personnel should consult their unit\'s medical officer before using any research chemical. Law enforcement drug testing varies by agency — most standard law enforcement drug screens test for narcotics, amphetamines, opioids, THC, and similar substances. BPC-157 would not appear on standard law enforcement drug panels. However, some specialized federal agencies have broader supplement policies. Always verify your specific agency\'s policies before use.' },
  { q: 'Does BPC-157 show up on standard drug tests?', a: 'No — BPC-157 does not appear on standard 5-panel, 10-panel, or even expanded workplace and military drug tests. These tests screen for specific controlled substances: THC, cocaine, amphetamines, opioids, benzodiazepines, and similar drugs. BPC-157 is a peptide with entirely different pharmacology and is not included in any standard drug screening panel. The only test that would detect BPC-157 is a specific WADA-style peptide targeted analysis — which is only used in competitive sports anti-doping programs, not in workplace, military, or legal drug testing.' },
  { q: 'What happens if customs stops a BPC-157 package?', a: 'The outcome depends on the destination country. In the US: customs may flag peptides arriving from overseas, particularly if packaged or labeled in a way suggesting pharmaceutical use. Research chemicals are generally permitted, but customs agents have discretion. The package may be seized, held, or released depending on the officer\'s assessment. In practice, small personal-use quantities of research chemicals are frequently cleared. The risk is higher when importing from certain countries, in commercial quantities, or with labeling suggesting human use. In Australia, NZ, and Singapore: the risk of customs seizure is significantly higher due to stricter domestic regulations. If customs stops your package in these jurisdictions, you may receive a letter requiring justification or documentation. In most US cases with small quantities: packages are either released or seized without legal consequence to the recipient. However, importing commercial quantities or substances across borders with stricter regulations creates legal risk that personal-use amounts in the US generally do not.' },
  { q: 'Does TB-500 (thymosin beta-4) have the same legal status as BPC-157?', a: 'TB-500 (a synthetic fragment of thymosin beta-4) has a very similar legal status to BPC-157 in the United States: not a controlled substance, legally sold as a research chemical, WADA-prohibited for tested athletes (Section S2), and not permitted in FDA-regulated compounding. Like BPC-157, TB-500 was popular in compounding pharmacies before the FDA compounding restrictions tightened on the broader peptide category. The two are often purchased together and used in combination ("BPC/TB stack") for injury healing. In most countries, TB-500 follows the same regulatory framework as BPC-157 — though always verify your specific jurisdiction\'s current rules, as peptide regulation is evolving.' },
];

export default function IsBpc157LegalPage() {
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
                { '@type': 'ListItem', position: 2, name: 'Is BPC-157 Legal?', item: 'https://bp157stack.com/is-bpc-157-legal' },
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
              headline: 'Is BPC-157 Legal? FDA Status, WADA Rules & Research Chemical Laws',
              description: 'Complete guide to BPC-157 legal status including FDA regulatory actions, WADA anti-doping rules, and research chemical purchase laws.',
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://bp157stack.com' },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-32 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-wide">LEGAL & REGULATORY GUIDE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Is BPC-157 Legal?<br />
            <span style={{ color: '#00ff88' }}>The Complete 2026 Answer</span>
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed mb-8">
            BPC-157's legal status is nuanced — and the answer depends on who you are and how you're using it.
            Here's a clear breakdown of FDA status, WADA rules, and research chemical law.
          </p>
          {/* Quick answer box */}
          <div className="glass-card p-6 border-emerald-500/30 mb-8">
            <h2 className="text-gray-900 font-bold text-lg mb-4">Quick Answer Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Legal to buy in the US?', answer: '✅ Yes', sub: 'As a research chemical' },
                { label: 'FDA approved for patients?', answer: '❌ No', sub: 'Cannot be compounded by pharmacies' },
                { label: 'WADA banned for athletes?', answer: '⚠️ Yes', sub: 'In-competition & out-of-competition' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-xl font-bold text-gray-900">{item.answer}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">FDA Status: What Actually Happened</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In 2022, the FDA added BPC-157 to its list of bulk drug substances under 503A compounding regulations — specifically the list of substances that "may present significant safety risks" when used in compounded drugs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong className="text-gray-900">What this means:</strong> Licensed compounding pharmacies that fill prescriptions cannot legally make BPC-157 for patients. This is a restriction on pharmaceutical compounding, not on the substance itself.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong className="text-gray-900">What this does NOT mean:</strong> BPC-157 is not a controlled substance (it's not scheduled by the DEA). Individual purchase of BPC-157 as a research chemical remains legal in the United States. The FDA action specifically targets the prescription compounding pathway — not research chemical sales.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-4">
            <p className="text-amber-300 text-sm">
              <strong>Note:</strong> FDA regulatory status can change. This reflects the current situation as of early 2026. Always verify current status before purchasing.
            </p>
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">WADA Status: Athletes Must Know This</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BPC-157 is listed on the WADA (World Anti-Doping Agency) Prohibited List under Section S2 — Peptide Hormones, Growth Factors, Related Substances, and Mimetics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
              <div className="text-red-400 font-bold mb-2">Prohibited for WADA Athletes</div>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li>• Prohibited in-competition</li>
                <li>• Prohibited out-of-competition</li>
                <li>• Applies to all WADA-governed sports</li>
                <li>• Olympic, professional, and many amateur sports</li>
              </ul>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
              <div className="text-emerald-400 font-bold mb-2">Not Affected by WADA Rules</div>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li>• Recreational athletes (untested)</li>
                <li>• Non-professional users</li>
                <li>• Sports without anti-doping programs</li>
                <li>• General public research use</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            If you compete in any sport with anti-doping testing, assume BPC-157 is prohibited and act accordingly.
          </p>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Research Chemical Status: How People Legally Buy BPC-157</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            BPC-157 is sold legally throughout the US as a research chemical — a designation for chemical compounds sold for laboratory and research purposes. Reputable suppliers operate under this framework, providing certificates of analysis (COA) confirming purity and identity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Research chemicals are not subject to the same regulatory framework as pharmaceutical drugs. They are legal to purchase and possess, though they are marketed for research purposes rather than human consumption.
          </p>
          <div className="flex gap-3 mt-4">
            <a href={SOURCE_URL} target="_blank" rel="nofollow noopener noreferrer"
              className="btn-cta text-sm px-6 py-3 flex items-center gap-2">
              View COA-Verified BPC-157 <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

      {/* Country-by-Country Table */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Country-by-Country Legal Status</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">BPC-157 legal status across 15+ countries as of 2026. Always verify with current local regulations before purchasing — this table is informational only.</p>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm min-w-[750px]">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Country</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Legal Status</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Purchase Legal</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Import Legal</th>
                  <th className="text-left py-3 px-4 text-gray-500 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((row, i) => (
                  <tr key={row.country} style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{row.flag}</span>
                        <span className="text-gray-900 font-semibold">{row.country}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-bold ${row.statusColor}`}>{row.legalStatus}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{row.purchaseLegal}</td>
                    <td className="py-3 px-4 text-gray-600 text-xs">{row.importLegal}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs max-w-[280px] leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Legal / Research Chemical</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" /> Grey Area — verify locally</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-400 inline-block" /> Restricted / Prescription required</div>
          </div>
          <p className="text-gray-500 text-xs mt-3">Information current as of early 2026. Regulatory status can change without notice. This is not legal advice — consult a local attorney or regulatory specialist for binding guidance.</p>
        </div>
      </section>

      {/* Regulatory Timeline */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-gray-900 mb-3">Timeline of BPC-157 Regulatory History</h2>
        <p className="text-gray-500 mb-10 max-w-2xl">From its 1991 discovery to the current 2026 regulatory landscape — the complete history of how BPC-157 went from academic curiosity to research chemical.</p>
        <div className="relative">
          <div className="absolute left-[19px] top-6 bottom-6 w-px bg-white/10 hidden sm:block" />
          <div className="space-y-5">
            {regulatoryTimeline.map((event) => {
              const typeStyles: Record<string, string> = {
                discovery: 'border-purple-500/50 bg-purple-500/5',
                research: 'border-blue-500/40 bg-blue-500/5',
                community: 'border-amber-500/40 bg-amber-500/5',
                clinical: 'border-emerald-500/40 bg-emerald-500/5',
                regulatory: 'border-red-500/40 bg-red-500/5',
                market: 'border-slate-500/40 bg-slate-500/5',
                current: 'border-neon-green/40',
              };
              const yearColors: Record<string, string> = {
                discovery: 'text-purple-400',
                research: 'text-blue-400',
                community: 'text-amber-400',
                clinical: 'text-emerald-400',
                regulatory: 'text-red-400',
                market: 'text-gray-500',
                current: 'text-neon-green',
              };
              return (
                <div key={event.year} className="relative flex gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-[#060610] flex items-center justify-center z-10">
                      <div className={`w-2 h-2 rounded-full ${event.type === 'current' ? 'bg-emerald-400' : event.type === 'regulatory' ? 'bg-red-400' : 'bg-white/30'}`} />
                    </div>
                  </div>
                  <div className={`glass-card p-4 flex-1 border-l-2 ${typeStyles[event.type] || 'border-white/10'}`}>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-gray-900 font-bold text-sm">{event.title}</h3>
                      <span className={`text-xs font-black shrink-0 ${yearColors[event.type]}`}>{event.year}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{event.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What 'Research Chemical' Actually Means */}
      <section className="py-12" style={{ background: 'rgba(6,6,16,0.8)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-3">What "Research Chemical" Actually Means</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">The legal framework under which BPC-157 is sold — explained clearly, without jargon.</p>

          <div className="space-y-5">
            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3">The Origin of the Research Chemical Framework</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The "research chemical" designation emerged in the 1980s and 1990s from the scientific supply industry. Chemical suppliers that sold reagents, solvents, and compounds to academic laboratories and pharmaceutical companies operated under a framework where compounds were sold for laboratory research purposes — not for consumer use.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                This framework was entirely legitimate in its origin: universities, biotech companies, and research institutions need access to a wide range of chemical compounds that are not regulated as consumer products. The Controlled Substances Act covers specific scheduled compounds; everything else is in a legal space that is regulated differently — as research supply rather than consumer product.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3">How Suppliers Legally Operate</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Peptide research chemical suppliers operate by labeling products clearly as "for research use only — not for human consumption." This designation is legally significant: it places the product outside the FDA's consumer drug regulation framework and into the research supply framework. Suppliers are not making drug claims, not providing medical advice, and not marketing to patients.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reputable suppliers provide Certificates of Analysis (COA) from third-party laboratories confirming the identity, purity, and concentration of their compounds. This is standard practice in legitimate research supply — academic purchasers require COA documentation to verify they are working with what they believe they are working with.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3">What COAs Prove and What They Don't</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                  <div className="text-emerald-400 text-xs font-bold uppercase mb-2">What a COA confirms</div>
                  <ul className="space-y-1.5 text-gray-500 text-xs">
                    <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" /> The compound is what it claims to be (identity)</li>
                    <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" /> Purity percentage (HPLC or mass spec analysis)</li>
                    <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" /> Absence of specific contaminants tested for</li>
                    <li className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" /> The batch date and testing methodology</li>
                  </ul>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <div className="text-red-400 text-xs font-bold uppercase mb-2">What a COA doesn't confirm</div>
                  <ul className="space-y-1.5 text-gray-500 text-xs">
                    <li>• Human safety in clinical use</li>
                    <li>• Sterility (separate testing required for injectables)</li>
                    <li>• Long-term storage stability</li>
                    <li>• Efficacy for any specific application</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-900 font-bold mb-3">Grey Market vs. Black Market: The Critical Distinction</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                The research chemical peptide market operates in a legal grey area — not a black market. This distinction matters significantly. A black market involves substances that are explicitly illegal to possess or sell (like DEA-scheduled controlled substances). Buying or selling those compounds creates genuine criminal liability.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                A grey market operates in the space between clearly legal and clearly illegal — where the law does not explicitly prohibit the activity but does not fully sanction it either. Research chemicals occupy this space: they are not controlled substances (legal to possess), but they are technically sold with a "not for human consumption" designation that is often at odds with how buyers use them.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The practical legal risk of purchasing BPC-157 as a research chemical in the US is very low compared to purchasing actual controlled substances. No individual in the United States has been prosecuted for purchasing BPC-157 as a research chemical for personal research use as of 2026. The regulatory risk is primarily on the supplier side, not the purchaser side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Athletes Section */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1 mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
          <span className="text-red-400 text-xs font-bold tracking-widest uppercase">Athletes: Critical Information</span>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-3">If You're an Athlete: What You Need to Know</h2>
        <p className="text-gray-500 mb-8 max-w-2xl">WADA rules apply to a much wider range of athletes than most people realize — and the consequences are severe.</p>

        <div className="space-y-5">
          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold mb-4">Which Governing Bodies Follow WADA?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="text-red-400 text-xs font-bold uppercase mb-3">WADA Rules Apply — BPC-157 Prohibited</div>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {[
                    'International Olympic Committee (IOC) — all Olympic sports',
                    'World Athletics (track & field)',
                    'UCI (professional cycling)',
                    'FIFA (international football/soccer — but not NFL)',
                    'USADA-governed US Olympic sports',
                    'UFC and most major MMA organizations',
                    'MLB through joint drug agreement (independent policy)',
                    'NCAA (college sports in USA)',
                    'Professional tennis (ATP/WTA)',
                    'Most national anti-doping programs globally',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-emerald-400 text-xs font-bold uppercase mb-3">WADA Rules Generally Do NOT Apply</div>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {[
                    'Recreational athletes with no testing program',
                    'Masters/veterans amateur competition (most)',
                    'Powerlifting federations not affiliated with IPF (many local feds)',
                    'Local and regional amateur sports leagues',
                    'CrossFit (except WODAPALOOZA and sanctioned events)',
                    'Most gym competitions and natural bodybuilding shows vary',
                    'Non-competitive recreational fitness users',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-gray-900 font-bold mb-4">How WADA Testing Works</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              WADA testing uses targeted analytical methods — for peptides under S2, this means immunoassay screening followed by liquid chromatography-mass spectrometry (LC-MS/MS) confirmation. These are highly sensitive techniques capable of detecting nanogram-per-milliliter concentrations.
            </p>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-4">
              <div className="text-amber-400 text-xs font-bold uppercase mb-2">BPC-157 Detection Window (Estimated)</div>
              <p className="text-gray-600 text-sm">
                No formally validated detection window for BPC-157 exists in published anti-doping literature as of 2026. Given its short plasma half-life (estimated 1–4 hours), direct detection in blood or urine within 24–72 hours of use is the likely window. However, WADA methods may also target metabolites with longer detection windows. The safest assumption for a tested athlete: treat BPC-157 as if it could be detected for 5–7 days after last use, pending formal validation data.
              </p>
            </div>
            <div className="bg-white/3 border border-white/10 rounded-xl p-4">
              <div className="text-gray-900 text-xs font-bold uppercase mb-2">TUE (Therapeutic Use Exemption) — Is It Possible?</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Therapeutic Use Exemption (TUE) allows athletes with documented medical conditions to use prohibited substances prescribed by physicians. For BPC-157 specifically: TUE approval is extremely unlikely in the current environment because (1) BPC-157 is not FDA-approved or legally prescribable in the US/most countries, (2) WADA has been explicit about peptide growth factors as performance enhancers, and (3) TUEs typically require an approved drug with no reasonable alternative. Do not plan to rely on a TUE for BPC-157.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 border border-red-500/20">
            <h3 className="text-gray-900 font-bold mb-3">What to Do If You Test Positive</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              A WADA anti-doping violation for BPC-157 would be classified as a violation of Section S2 — Peptide Hormones, Growth Factors, Related Substances and Mimetics. Standard consequences include a 4-year ban (first violation) in most sports, though panels can reduce penalties based on no-significant-fault arguments.
            </p>
            <ol className="space-y-2 text-gray-500 text-sm">
              <li className="flex gap-3"><span className="text-red-400 font-bold shrink-0">1.</span>Request the B-sample analysis immediately — do not waive this right.</li>
              <li className="flex gap-3"><span className="text-red-400 font-bold shrink-0">2.</span>Retain a sports law attorney who specializes in anti-doping cases before making any statement.</li>
              <li className="flex gap-3"><span className="text-red-400 font-bold shrink-0">3.</span>Document everything: what you used, when, the source, and any medical justification.</li>
              <li className="flex gap-3"><span className="text-red-400 font-bold shrink-0">4.</span>No-fault or reduced sanction arguments require establishing contamination or unknowing use — consult your attorney on applicable grounds.</li>
            </ol>
            <p className="text-gray-500 text-xs mt-4">The best strategy for tested athletes is simple: do not use BPC-157. The healing benefits — while real — do not justify the career consequences of an anti-doping violation.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-gray-900 mb-10 text-center">Legal FAQ</h2>
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="glass-card p-6 text-center">
          <p className="text-gray-500 text-xs leading-relaxed">
            This page is for informational purposes only and does not constitute legal advice. Regulatory status can change. Verify current regulations in your jurisdiction before purchasing or using any research chemical.
          </p>
        </div>
      </div>

      <InternalLinks path="/is-bpc-157-legal" />
    </div>
  );
}
