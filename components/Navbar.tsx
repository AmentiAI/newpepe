'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import SearchModal from '@/components/SearchModal';

const SOURCE_URL = '/out';

const navLinks = [
  { href: '/products', label: 'Peptides' },
  { href: '/stacks', label: 'Stacks' },
  { href: '/healing', label: 'Healing' },
  { href: '/anti-aging', label: 'Anti-Aging' },
  { href: '/body-composition', label: 'Body Comp' },
  { href: '/guide', label: 'Guide' },
  { href: '/faq', label: 'FAQ' },
];

const topProducts = [
  { href: '/bpc-157', label: 'BPC-157' },
  { href: '/tb-500', label: 'TB-500' },
  { href: '/ghk-cu', label: 'GHK-Cu' },
  { href: '/epithalon', label: 'Epithalon' },
  { href: '/ipamorelin', label: 'Ipamorelin / CJC' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <span className="font-bold text-lg text-gray-900">
              BPC<span className="text-amber-500">157</span>Stack
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors rounded-md hover:bg-amber-50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <SearchModal />
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-sm"
            >
              Get Peptides →
            </a>
          </div>

          {/* Mobile: search icon + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <SearchModal />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-gray-500 hover:text-amber-600 transition-colors"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-gray-600 hover:text-amber-600 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}

            {/* Top Products quick-links */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest px-3 mb-2">Top Peptides</p>
              {topProducts.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-gray-500 hover:text-amber-600 transition-colors rounded-md flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-sm text-center mt-3"
            >
              Get Peptides →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
