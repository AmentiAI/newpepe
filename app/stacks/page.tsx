import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Layers } from 'lucide-react';
import { stacks } from '@/lib/stacks';

export const metadata: Metadata = {
  title: 'BPC-157 Peptide Stacks | Complete Protocol Combinations | BPC-157 Stack',
  description: 'Proven peptide stack protocols for every goal: injury healing, anti-aging, body recomposition, cognitive enhancement. Full dosing guides included.',
};

const AFFILIATE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e';

export default function StacksPage() {
  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/20 rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-medium">Proven Stack Protocols</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Peptide <span className="gradient-text">Stack Protocols</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Expert-designed peptide combinations for maximum results. Every stack includes full dosing protocols and timing guides.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Shop All Stack Peptides <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Stacks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stacks.map((stack) => (
            <div key={stack.id} className="glass-card p-8 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3">
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${
                    stack.difficulty === 'Beginner' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' :
                    stack.difficulty === 'Intermediate' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
                    'text-red-400 border-red-400/30 bg-red-400/10'
                  }`}>
                    {stack.difficulty}
                  </span>
                  <span className="text-xs text-slate-500 border border-slate-700 px-2 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {stack.duration}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                {stack.name}
              </h2>
              <p className="text-neon-green font-medium text-sm mb-3">{stack.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {stack.description.slice(0, 200)}...
              </p>

              {/* Peptides */}
              <div className="flex flex-wrap gap-2 mb-5">
                {stack.peptides.map((p) => (
                  <Link
                    key={p}
                    href={`/products/${p}`}
                    className="text-xs font-mono bg-dark-700 border border-neon-green/20 text-neon-green px-3 py-1.5 rounded-full hover:border-neon-green/50 transition-colors"
                  >
                    {p.toUpperCase()}
                  </Link>
                ))}
              </div>

              {/* Benefits */}
              <ul className="space-y-1.5 mb-6">
                {stack.benefits.slice(0, 3).map((b) => (
                  <li key={b} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-neon-green shrink-0">→</span> {b}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Link
                  href={`/stacks/${stack.id}`}
                  className="btn-secondary text-sm px-4 py-2.5 flex-1 text-center"
                >
                  Full Protocol
                </Link>
                <a
                  href={AFFILIATE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta text-sm px-4 py-2.5 flex items-center gap-1"
                >
                  Shop Stack <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-white mb-3">Build Your Stack Today</h2>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            All peptides in every stack are available at Apollo Peptide Sciences — the most trusted research peptide source.
          </p>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            Shop at Apollo Peptide Sciences <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
