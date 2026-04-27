import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { breadcrumbLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Privacy Policy | BPC-157 Stack',
  description:
    'How BPC-157 Stack handles visitor data, analytics, cookies, affiliate tracking, and third-party services. Last updated April 2026.',
  alternates: { canonical: `${SITE.url}/privacy` },
};

const UPDATED = 'April 27, 2026';

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', item: SITE.url },
              { name: 'Privacy Policy', item: `${SITE.url}/privacy` },
            ])
          ),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-bp">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated {UPDATED}</p>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <p>
            BPC-157 Stack (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the site&rdquo;) operates the
            website at {SITE.url}. This Privacy Policy explains what information we collect, how we use
            it, and your choices regarding that information.
          </p>

          <section>
            <h2 className="text-xl font-black text-gray-900">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Server logs.</strong> Standard request data (IP address, user-agent, referrer, timestamp, requested URL) is logged by our hosting provider for security, abuse prevention, and operational diagnostics.</li>
              <li><strong>Analytics.</strong> We may use privacy-respecting analytics to understand aggregate traffic patterns. Where used, analytics is configured to anonymize IP addresses and not to collect personal identifiers.</li>
              <li><strong>Affiliate clicks.</strong> When you click an affiliate link to our recommended supplier, an outbound reference parameter is passed so the supplier can attribute the referral. We do not receive your name, address, payment information, or order contents.</li>
              <li><strong>Chat widget.</strong> If you submit a question to the on-site AI chat assistant, the question text is sent to our chat backend for the sole purpose of generating a response. We do not link chat queries to identities and we do not sell or share chat content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. Cookies & Local Storage</h2>
            <p>
              We use the minimum cookies required to operate the site. We do not run third-party
              advertising networks or behavioral retargeting cookies on bp157stack.com. Your browser
              settings can be used to block or clear cookies at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Third-Party Services</h2>
            <p>
              We use the following third-party services. Each has its own privacy practices:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vercel — site hosting and edge delivery</li>
              <li>Phiogen — affiliate supplier (clicks only; no purchase data shared with us)</li>
              <li>An OpenAI-compatible chat backend for the on-site assistant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To deliver the site and improve its content and reliability</li>
              <li>To detect, prevent, and respond to abuse, fraud, or security incidents</li>
              <li>To track aggregate, anonymized affiliate-link performance</li>
            </ul>
            <p>We do not sell personal information. We do not run targeted advertising.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Data Retention</h2>
            <p>
              Server logs are retained for a limited operational period and then rotated. Analytics
              data is aggregated and retained in anonymized form. Chat queries are retained only as
              long as needed to deliver and improve the chat service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction (including GDPR and CCPA where applicable), you may have
              the right to access, correct, delete, or restrict processing of personal information we
              hold about you. Because the site does not require account creation and does not collect
              direct identifiers, in most cases we hold no personally identifying data tied to you. To
              exercise a right or ask a privacy question, contact us via the editorial contact below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Children</h2>
            <p>
              The site is intended for adults aged 21 and over. We do not knowingly collect information
              from children. If you believe a child has interacted with the site, contact us and we
              will delete any associated records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
              at the top of this page reflects the most recent substantive change.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">9. Contact</h2>
            <p>
              Editorial contact: <a className="text-emerald-700 font-semibold" href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
              For supplier or order inquiries, please contact <Link href="/contact" className="text-emerald-700 font-semibold">our recommended supplier directly</Link>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
