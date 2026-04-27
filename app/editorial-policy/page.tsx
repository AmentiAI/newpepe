import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { breadcrumbLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Editorial Policy | BPC-157 Stack',
  description:
    'How BPC-157 Stack sources, fact-checks, reviews, and updates protocol guides and medical content. Includes correction policy and conflict-of-interest disclosure.',
  alternates: { canonical: `${SITE.url}/editorial-policy` },
};

const UPDATED = 'April 27, 2026';

export default function EditorialPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', item: SITE.url },
              { name: 'Editorial Policy', item: `${SITE.url}/editorial-policy` },
            ])
          ),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Editorial Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900">Sourcing Hierarchy</h2>
            <p>
              We rank sources in the following order when constructing protocol guides, dosing ranges,
              and safety claims:
            </p>
            <ol className="list-decimal pl-6 space-y-1 mt-3">
              <li>Peer-reviewed human clinical trials (RCTs, controlled cohort studies)</li>
              <li>Peer-reviewed animal and in-vitro mechanistic studies</li>
              <li>Regulatory documentation (FDA bulk substances list, WADA Prohibited List, EMA, MHRA)</li>
              <li>Authoritative reference works (e.g., academic textbooks, monographs)</li>
              <li>Well-documented community practice — labelled as such, never presented as primary evidence</li>
            </ol>
            <p className="mt-3">
              Where evidence is animal-only or in-vitro only, we say so. Where a claim depends on
              extrapolation, we say so. Where human clinical data is absent, we say so.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Medical Review Process</h2>
            <p>
              Pages covering medical or scientific subject matter are reviewed by{' '}
              <Link href="/about#alastair-d-burt" className="text-emerald-700 font-semibold">
                Prof. Alastair D. Burt
              </Link>{' '}
              (BSc MB ChB MD FRCPath, Newcastle University) prior to publication and on each
              substantive content change. The medical reviewer&apos;s scope is hepatopathology,
              tissue-healing biology, and adherence to published evidence. The review certifies factual
              accuracy and consistency with the cited literature; it is not therapeutic endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Update & Review Cadence</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Medical and regulatory pages: reviewed at minimum every 6 months</li>
              <li>Protocol pages: reviewed when new peer-reviewed literature meaningfully changes recommendations</li>
              <li>Comparison guides: reviewed when any compared compound changes regulatory status</li>
              <li>Every page&apos;s <code className="text-sm">dateModified</code> reflects the most recent substantive update</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Fact-Checking</h2>
            <p>
              Each numerical claim (dose, half-life, study finding, mortality reduction, percentage)
              is traced to a primary source before publication. Where a primary source cannot be
              verified, the claim is removed or rewritten with explicit hedging. We do not republish
              second-hand percentages or stats that we cannot trace.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Corrections Policy</h2>
            <p>
              When we discover an error, we correct it as soon as practical. Substantive corrections
              are noted in a brief change log at the bottom of the affected page when warranted. We do
              not silently overwrite content that materially changes a recommendation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Conflicts of Interest</h2>
            <p>
              BPC-157 Stack participates in an affiliate referral program with Phiogen, our recommended
              supplier. The affiliate relationship is disclosed plainly on each outbound supplier link
              and on the <Link href="/about" className="text-emerald-700 font-semibold">About</Link> and{' '}
              <Link href="/terms" className="text-emerald-700 font-semibold">Terms</Link> pages. No
              other commercial relationships influence editorial content.
            </p>
            <p>
              The medical reviewer&apos;s relationship with the site is disclosed on the About page.
              The reviewer does not receive a percentage of affiliate revenue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Use of AI Tools</h2>
            <p>
              We use AI-assisted drafting tools to accelerate research synthesis and structural
              writing. All drafts are edited by human contributors and, where they cover medical or
              scientific subject matter, reviewed by the credentialed medical reviewer prior to
              publication. We do not publish unedited model output. The on-site chat assistant is a
              separate tool that operates within the same factual scope as the editorial content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">Reader Feedback</h2>
            <p>
              We welcome corrections, evidence-based critique, and source suggestions at{' '}
              <a className="text-emerald-700 font-semibold" href={`mailto:${SITE.contactEmail}`}>
                {SITE.contactEmail}
              </a>
              . We respond to substantive editorial feedback even when we disagree.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
