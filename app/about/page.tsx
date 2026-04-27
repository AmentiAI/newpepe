import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Microscope, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';
import { REVIEWER, SITE } from '@/lib/site';
import { breadcrumbLd, articleLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'About BPC-157 Stack | Editorial Team & Medical Reviewer',
  description:
    'Independent peptide research and protocol resource. Medical content reviewed by Prof. Alastair D. Burt, MB ChB MD FRCPath, Newcastle University. Editorial standards, mission, and team.',
  alternates: { canonical: `${SITE.url}/about` },
};

const PUBLISHED = '2026-01-15';
const UPDATED = '2026-04-27';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbLd([
              { name: 'Home', item: SITE.url },
              { name: 'About', item: `${SITE.url}/about` },
            ]),
            articleLd({
              url: `${SITE.url}/about`,
              headline: 'About BPC-157 Stack',
              description:
                'Editorial team, medical reviewer credentials, mission, and standards of the BPC-157 Stack research and protocol resource.',
              datePublished: PUBLISHED,
              dateModified: UPDATED,
              reviewed: false,
              type: 'Article',
            }),
          ]),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">About BPC-157 Stack</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          BPC-157 Stack is an independent educational resource focused on peptide research, protocols,
          and sourcing standards. Every page covering medical or scientific subject matter is reviewed
          by a credentialed clinician-scientist before publication.
        </p>

        <section id="editorial-team" className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-700" /> Editorial Team
          </h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            The BPC-157 Stack editorial team curates protocol guides, dosing references, and FAQ content
            from published peer-reviewed literature, regulatory documents (FDA, WADA), and well-documented
            community practice. Where animal-only or in-vitro evidence is the basis of a claim, we say so
            explicitly. Where a claim depends on extrapolation, we say so. We do not republish anecdote
            as fact.
          </p>
          <p className="text-gray-800 leading-relaxed">
            We are not affiliated with any pharmaceutical company, academic institution, or regulatory
            body. Our recommended supplier is selected on the basis of consistent third-party COA
            verification, US domestic shipping, and community track record — not exclusivity agreements.
          </p>
        </section>

        <section id="alastair-d-burt" className="mb-14 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="h-6 w-6 text-emerald-700" />
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest">
              Medical Reviewer
            </span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">{REVIEWER.name}</h2>
          <p className="text-emerald-800 font-semibold mb-1">{REVIEWER.credentials.join(' · ')}</p>
          <p className="text-gray-700 mb-4">{REVIEWER.jobTitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 text-sm">
            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 mt-0.5 shrink-0 text-emerald-700" />
              <div>
                <p className="font-semibold text-gray-900">Affiliation</p>
                <p className="text-gray-700">{REVIEWER.affiliation}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Microscope className="h-4 w-4 mt-0.5 shrink-0 text-emerald-700" />
              <div>
                <p className="font-semibold text-gray-900">Areas of Expertise</p>
                <p className="text-gray-700">{REVIEWER.expertise.join(', ')}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            Prof. Burt is a hepatopathologist whose research on liver fibrosis, stellate-cell biology,
            and non-alcoholic fatty liver disease has shaped international histological scoring systems
            including the SAF algorithm and the ELF serum fibrosis panel. He is editor of <em>Muir&apos;s
            Textbook of Pathology</em>, co-editor of <em>MacSween&apos;s Pathology of the Liver</em>, and
            former editor-in-chief of <em>Histopathology</em>.
          </p>

          <p className="text-gray-700 text-xs italic mb-4">
            Note on scope: Prof. Burt&apos;s clinical and research expertise is in pathology, with deep
            specialism in hepatobiliary tissue. Reviews on this site focus on tissue-healing, gut, and
            liver-related claims where his expertise applies directly. He does not endorse off-label or
            non-prescription use of any compound discussed on this site, and his review certifies factual
            accuracy and adherence to published evidence — not therapeutic recommendation.
          </p>

          <a
            href={REVIEWER.sameAs[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:underline"
          >
            Verified author profile <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </section>

        <section id="standards" className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Editorial & Review Standards</h2>
          <ul className="space-y-3 text-gray-800 text-base leading-relaxed">
            <li><span className="font-semibold">Sourcing.</span> Every dosing range, mechanism description, and safety claim cites or is traceable to peer-reviewed published research, regulatory documentation, or clearly disclosed community practice.</li>
            <li><span className="font-semibold">Review cadence.</span> Pages covering medical subject matter are reviewed at least every six months and on each substantive content change.</li>
            <li><span className="font-semibold">Corrections.</span> Errors are corrected promptly. The <code className="text-sm">dateModified</code> on each page reflects the most recent substantive update.</li>
            <li><span className="font-semibold">Affiliate independence.</span> Editorial decisions and protocol recommendations are made independently of affiliate relationships. We disclose affiliate links plainly on every outbound supplier link.</li>
            <li><span className="font-semibold">Scope limits.</span> Nothing on this site constitutes medical advice, prescription, or diagnosis. The site is an educational resource for adults capable of independent research and informed decision-making.</li>
          </ul>
          <p className="mt-6 text-sm text-gray-600">
            Read the full <Link href="/editorial-policy" className="text-emerald-700 font-semibold hover:underline">Editorial Policy</Link> and the <Link href="/medical-disclaimer" className="text-emerald-700 font-semibold hover:underline">Medical Disclaimer</Link>.
          </p>
        </section>

        <section className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-black text-gray-900 mb-2">Affiliate Disclosure</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            BPC-157 Stack earns a commission on purchases made via the affiliate link to our recommended
            supplier (Phiogen). The commission does not change the price you pay. The affiliate
            relationship does not influence editorial content, protocol selection, or which compounds we
            cover. If you prefer to source independently, our FAQ explains how to evaluate any supplier
            using the same COA-verification standard we use ourselves.
          </p>
        </section>
      </div>
    </div>
  );
}
