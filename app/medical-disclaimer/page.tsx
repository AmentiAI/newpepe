import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import { SITE } from '@/lib/site';
import { breadcrumbLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Medical Disclaimer | BPC-157 Stack',
  description:
    'Educational scope, regulatory status, and limits of medical content on BPC-157 Stack. Peptides are research compounds — not FDA-approved for human therapeutic use unless noted.',
  alternates: { canonical: `${SITE.url}/medical-disclaimer` },
};

const UPDATED = 'April 27, 2026';

export default function MedicalDisclaimerPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: 'Home', item: SITE.url },
              { name: 'Medical Disclaimer', item: `${SITE.url}/medical-disclaimer` },
            ])
          ),
        }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-gray-900 mb-2">Medical Disclaimer</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated {UPDATED}</p>

        <div className="rounded-xl border border-amber-300 bg-amber-50 p-5 mb-10 flex gap-3">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0 text-amber-700" />
          <p className="text-amber-900 leading-relaxed">
            All content on this site is for informational and educational purposes only. Nothing on
            this site constitutes medical advice, a diagnosis, or a prescription. Always consult a
            qualified, licensed healthcare professional before starting, changing, or stopping any
            health regimen.
          </p>
        </div>

        <div className="space-y-8 text-gray-800 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-gray-900">1. Research Compound Status</h2>
            <p>
              The peptides described on this site — including but not limited to BPC-157, TB-500,
              GHK-Cu, Epithalon, CJC-1295, Ipamorelin, Semaglutide, Tirzepatide, and Retatrutide — are
              research compounds. Where individual compounds are FDA-, MHRA-, or EMA-approved for
              specific therapeutic indications (for example, semaglutide for type-2 diabetes and
              chronic weight management), that approval applies only within the labelled indication
              and supervised clinical context. Off-label discussion on this site is not a recommendation
              for use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">2. WADA & Sports Anti-Doping</h2>
            <p>
              Several peptides discussed are listed on the WADA Prohibited List, including BPC-157
              and TB-500 under Section S2 (Peptide Hormones, Growth Factors, Related Substances and
              Mimetics). Use of these substances by athletes subject to WADA-governed anti-doping
              programs may result in sanctions. If you are a tested athlete, do not use these
              compounds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">3. Pregnancy, Breastfeeding & Underage Use</h2>
            <p>
              Peptides discussed on this site should not be used during pregnancy, while attempting to
              conceive, while breastfeeding, or by anyone under 21 years of age, except under the
              direct supervision of a qualified healthcare professional. GLP-1 receptor agonists are
              specifically contraindicated in pregnancy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">4. Drug Interactions & Pre-existing Conditions</h2>
            <p>
              Peptides may interact with prescription medications, especially insulin, oral
              hypoglycemics, anxiolytics, and immunomodulators. If you take any prescription
              medication, have an active malignancy, are immunosuppressed, or have any chronic medical
              condition, consult your prescribing physician before using any peptide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">5. Medical Review Scope</h2>
            <p>
              Pages covering medical or scientific subject matter are reviewed by Prof. Alastair D.
              Burt (BSc MB ChB MD FRCPath), Professor of Precision &amp; Molecular Pathology at Newcastle
              University. The medical review certifies factual accuracy and adherence to published
              evidence; it is not a clinical recommendation, prescription, or therapeutic endorsement
              for any individual reader. The medical reviewer does not have a clinician-patient
              relationship with site visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">6. No Liability</h2>
            <p>
              The operators and contributors of this site assume no liability for the use or misuse of
              any information presented. You alone are responsible for decisions you make about your
              health.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900">7. Emergencies</h2>
            <p>
              If you are experiencing a medical emergency, call your local emergency number
              immediately. Do not rely on this site for emergency information.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
