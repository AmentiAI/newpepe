import Link from 'next/link';
import { Zap, ExternalLink } from 'lucide-react';

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
                <Zap className="w-4 h-4 text-amber-500" />
              </div>
              <span className="font-bold text-lg text-gray-900">
                BPC<span className="text-amber-500">157</span>Stack
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              The most comprehensive BPC-157 and peptide protocol resource.
              Science-backed stacks for healing, performance, and longevity.
            </p>
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-sm inline-flex items-center gap-2"
            >
              View <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Peptides */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Peptides</h3>
            <ul className="space-y-2">
              {[
                { label: 'BPC-157', slug: 'bpc-157' },
                { label: 'TB-500', slug: 'tb-500' },
                { label: 'CJC-1295 + Ipamorelin', slug: 'cjc1295-ipamorelin' },
                { label: 'GHK-Cu', slug: 'ghk-cu' },
                { label: 'Epithalon', slug: 'epithalon' },
                { label: 'NAD+', slug: 'nad' },
                { label: 'Semaglutide', slug: 'glp-1s-semaglutide' },
                { label: 'Tirzepatide', slug: 'glp-2t-tirzepatide' },
              ].map(({ label, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/products/${slug}`}
                    className="text-gray-500 hover:text-amber-600 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stacks & Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Stacks & Guides</h3>
            <ul className="space-y-2">
              {[
                { label: 'Healing Stack', href: '/stacks/ultimate-healing' },
                { label: 'Anti-Aging Protocol', href: '/stacks/anti-aging-longevity' },
                { label: 'Body Recomp', href: '/stacks/body-recomp' },
                { label: 'Cognitive Stack', href: '/stacks/cognitive-stack' },
                { label: 'Athlete Stack', href: '/stacks/athlete-performance' },
                { label: 'Full Guide', href: '/guide' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-500 hover:text-amber-600 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs text-center md:text-left">
              © 2025 BPC-157 Stack. All rights reserved.
              Not medical advice. Consult a physician before use.
            </p>
            <p className="text-gray-400 text-xs">
              For research purposes only. Not medical advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
