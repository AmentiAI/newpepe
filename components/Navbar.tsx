'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

const SOURCE_URL = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

const navLinks = [
  { href: '/products', label: 'Peptides' },
  { href: '/stacks', label: 'Stacks' },
  { href: '/healing', label: 'Healing' },
  { href: '/anti-aging', label: 'Anti-Aging' },
  { href: '/body-composition', label: 'Body Comp' },
  { href: '/guide', label: 'Guide' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-neon-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:bg-neon-green/20 transition-colors">
              <Zap className="w-4 h-4 text-neon-green" />
            </div>
            <span className="font-bold text-lg text-white">
              BPC<span className="text-neon-green">157</span>Stack
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-400 hover:text-neon-green transition-colors rounded-md hover:bg-neon-green/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SOURCE_URL}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-sm"
            >
              Get Peptides →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-slate-400 hover:text-neon-green transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-dark-800 border-b border-neon-green/10 px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-slate-400 hover:text-neon-green transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
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
