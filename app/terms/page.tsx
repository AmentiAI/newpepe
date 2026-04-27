import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { breadcrumbLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Terms of Use | BPC-157 Stack',
  description:
    'Terms governing your use of BPC-157 Stack — educational scope, no medical advice, intellectual property, affiliate disclosure, and limitations of liability.',
  alternates: { canonical: `${SITE.url}/terms` },
};

const UPDATED = 'April 27, 2026';

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', item: SITE.url },
              { name: 'Terms of Use', item: `${SITE.url}/terms` },
            ])
          ),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of BPC-157 Stack at
            {' '}{SITE.url} (&ldquo;the site&rdquo;). By accessing the site you agree to these Terms.
            If you do not agree, do not use the site.
          </p>

          <section>
            <h2 className="text-xl font-black text-gray-900">1. Educational Scope — No Medical Advice</h2>
            <p>
              All content on the site is for informational and educational purposes only. Nothing on the
              site is medical advice, a diagnosis, or a prescription. Peptides discussed are research
              compounds and are not approved by the FDA, MHRA, EMA, or comparable regulators for human
              therapeutic use unless explicitly noted. You must consult a qualified, licensed healthcare
              professional before using any peptide. See the{' '}
              <Link href="/medical-disclaimer" className="text-emerald-700 font-semibold">Medical Disclaimer</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. Eligibility</h2>
            <p>
              The site is intended for adults aged 21 and over. By using the site you represent that
              you meet that age requirement and that you are legally able to enter into binding
              agreements in your jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Intellectual Property</h2>
            <p>
              All content on the site — including text, graphics, logos, JSON-LD schema, and software —
              is owned by BPC-157 Stack or its licensors and is protected by copyright, trademark, and
              other applicable laws. You may view and share content with attribution and a link back.
              You may not republish, modify, or commercialize the content without prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. Affiliate Disclosure</h2>
            <p>
              The site participates in an affiliate referral program with Phiogen. We earn a commission
              on qualifying purchases made through outbound supplier links. The commission does not
              change the price you pay. Affiliate relationships do not influence editorial content. See
              the <Link href="/about" className="text-emerald-700 font-semibold">About</Link> page for
              full disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Third-Party Links</h2>
            <p>
              The site links to third-party websites we do not control. We are not responsible for the
              content, practices, or policies of those sites. Your interactions with third parties are
              between you and them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. Disclaimers</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty
              of any kind, express or implied, including merchantability, fitness for a particular
              purpose, or non-infringement. We do not warrant that the site will be uninterrupted,
              error-free, or free of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BPC-157 Stack and its operators are not liable
              for any indirect, incidental, special, consequential, or punitive damages, or for any
              loss of profits, data, or use, arising out of or in connection with your use of the site
              or any peptide or product discussed on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">8. Indemnity</h2>
            <p>
              You agree to indemnify and hold harmless BPC-157 Stack and its operators from any claim
              arising from your use of the site, your violation of these Terms, or your use of any
              substance discussed on the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which the site operator is
              established, without regard to conflict-of-law principles. Disputes shall be resolved in
              the competent courts of that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">10. Changes</h2>
            <p>
              We may update these Terms from time to time. Material changes will be reflected in the
              &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the site after
              changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">11. Contact</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a className="text-emerald-700 font-semibold" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
