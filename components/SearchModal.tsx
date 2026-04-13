'use client';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowRight, Command } from 'lucide-react';
import { products } from '@/lib/products';

const categoryColor: Record<string, string> = {
  Healing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Anti-Aging': 'bg-amber-50 text-amber-700 border-amber-200',
  'Body Composition': 'bg-blue-50 text-blue-700 border-blue-200',
  'Weight Loss': 'bg-rose-50 text-rose-700 border-rose-200',
  Cognitive: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Supplies: 'bg-gray-100 text-gray-600 border-gray-200',
};

const POPULAR = ['bpc-157', 'tb-500', 'ghk-cu', 'epithalon', 'glp-1s-semaglutide', 'glp-2t-tirzepatide'];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Cmd+K / Ctrl+K to open
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setActiveIndex(0);
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.filter(p => POPULAR.includes(p.slug));
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.shortDescription.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query]);

  const navigate = (slug: string) => {
    router.push(`/products/${slug}`);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      navigate(results[activeIndex].slug);
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`) as HTMLElement;
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300 transition-all text-sm text-gray-500 group"
        aria-label="Search peptides"
      >
        <Search className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors" />
        <span className="hidden sm:inline text-gray-400 group-hover:text-gray-600 transition-colors">Search peptides…</span>
        <span className="hidden sm:flex items-center gap-0.5 ml-1 text-xs text-gray-300 border border-gray-200 rounded px-1 py-0.5">
          <Command className="w-2.5 h-2.5" />K
        </span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

          {/* Panel */}
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Search input row */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
              <Search className="w-5 h-5 text-amber-500 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => { setQuery(e.target.value); setActiveIndex(0); }}
                onKeyDown={handleKeyDown}
                placeholder="Search peptides, goals, or conditions…"
                className="flex-1 text-gray-900 text-base placeholder-gray-400 outline-none bg-transparent font-medium"
              />
              {query && (
                <button onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
              <button onClick={() => setOpen(false)}
                className="text-xs text-gray-400 border border-gray-200 rounded px-2 py-1 hover:bg-gray-50 transition-colors">
                Esc
              </button>
            </div>

            {/* Results list */}
            <div ref={listRef} className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <p className="text-gray-500 text-base mb-1">No peptides found for <span className="font-bold text-gray-700">&ldquo;{query}&rdquo;</span></p>
                  <p className="text-gray-400 text-sm">Try a condition (e.g. "tendons", "fat loss", "anxiety")</p>
                </div>
              ) : (
                <>
                  <div className="px-4 pt-3 pb-1">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {query ? `${results.length} result${results.length !== 1 ? 's' : ''}` : 'Popular'}
                    </p>
                  </div>
                  {results.map((p, i) => (
                    <button
                      key={p.slug}
                      data-index={i}
                      onClick={() => navigate(p.slug)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-colors ${
                        i === activeIndex ? 'bg-amber-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0 overflow-hidden relative">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain p-1.5"
                          sizes="56px"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-gray-900 font-black text-base truncate">{p.name}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border shrink-0 ${categoryColor[p.category] ?? 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                            {p.category}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm truncate">{p.tagline}</p>
                        <div className="flex gap-1 mt-1 flex-wrap">
                          {p.tags.slice(0, 3).map(t => (
                            <span key={t} className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Price + arrow */}
                      <div className="shrink-0 flex flex-col items-end gap-1">
                        <span className="text-amber-600 font-black text-lg">${p.price}</span>
                        <ArrowRight className={`w-4 h-4 transition-colors ${i === activeIndex ? 'text-amber-500' : 'text-gray-300'}`} />
                      </div>
                    </button>
                  ))}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><kbd className="bg-white border border-gray-200 rounded px-1">↑↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="bg-white border border-gray-200 rounded px-1">↵</kbd> select</span>
                <span className="flex items-center gap-1"><kbd className="bg-white border border-gray-200 rounded px-1">Esc</kbd> close</span>
              </div>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="text-xs text-amber-600 font-bold hover:text-amber-700 flex items-center gap-1"
              >
                Browse all {products.length} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
