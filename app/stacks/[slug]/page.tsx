import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, ChevronLeft } from 'lucide-react';
import { stacks, getStackById, type StackSectionKey } from '@/lib/stacks';
import { getRelatedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';

const DEFAULT_STACK_PLAN: StackSectionKey[] = ['overview', 'benefits', 'protocol', 'peptides'];
const FALLBACK_STACK_COPY: Record<StackSectionKey | 'cta', { eyebrow?: string; heading: string }> = {
  overview: { heading: 'About This Protocol' },
  benefits: { heading: 'What the Stack Delivers' },
  protocol: { heading: 'The Exact Schedule' },
  peptides: { heading: 'Peptides in the Kit' },
  cta: { heading: 'Ready to Start This Protocol?' },
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return stacks.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stack = getStackById(params.slug);
  if (!stack) return { title: 'Stack Not Found' };
  const keywords = [stack.name, ...stack.peptides, stack.goal, 'peptide stack', 'peptide protocol', 'BPC-157 stack'].join(', ');
  return {
    title: stack.seoTitle,
    description: stack.tagline,
    keywords,
    openGraph: {
      title: stack.seoTitle,
      description: stack.tagline,
      type: 'article',
      url: `https://www.bp157stack.com/stacks/${params.slug}`,
      images: [{ url: stack.image, width: 600, alt: stack.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: stack.seoTitle,
      description: stack.tagline,
      images: [stack.image],
    },
    alternates: { canonical: `https://www.bp157stack.com/stacks/${params.slug}` },
  };
}

const SOURCE_URL = 'https://phiogen.is/?ref=PEPS';

export default function StackPage({ params }: Props) {
  const stack = getStackById(params.slug);
  if (!stack) notFound();

  const peptideProducts = getRelatedProducts(stack.peptides);

  const plan = stack.sectionPlan ?? DEFAULT_STACK_PLAN;
  const copyFor = (key: StackSectionKey | 'cta') =>
    stack.sectionCopy?.[key] ?? FALLBACK_STACK_COPY[key];

  const sectionRenderers: Record<StackSectionKey, React.ReactNode> = {
    overview: (() => {
      const copy = copyFor('overview');
      return (
        <div key="overview" className="glass-card p-6">
          {copy.eyebrow && (
            <div className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-4">{copy.heading}</h2>
          <div className="space-y-3">
            {stack.description.split('\n').filter(Boolean).map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={i} className="text-emerald-700 font-semibold">{line.replace(/\*\*/g, '')}</h3>;
              }
              return <p key={i} className="text-gray-500 text-sm leading-relaxed">{line}</p>;
            })}
          </div>
        </div>
      );
    })(),
    benefits: (() => {
      const copy = copyFor('benefits');
      return (
        <div key="benefits" className="glass-card p-6">
          {copy.eyebrow && (
            <div className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-4">{copy.heading}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stack.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      );
    })(),
    protocol: (() => {
      const copy = copyFor('protocol');
      return (
        <div key="protocol" className="glass-card p-6">
          {copy.eyebrow && (
            <div className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-4">{copy.heading}</h2>
          <div className="bg-dark-700/50 rounded-xl p-5 border border-neon-green/10 font-mono text-sm">
            {stack.protocol.split('\n').filter(Boolean).map((line, i) => {
              if (line.startsWith('**')) {
                return (
                  <p key={i} className="text-emerald-700 font-bold mt-4 mb-1 first:mt-0">
                    {line.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (line.startsWith('- ')) {
                return <p key={i} className="text-gray-600 pl-4">• {line.slice(2)}</p>;
              }
              return <p key={i} className="text-gray-500">{line}</p>;
            })}
          </div>
        </div>
      );
    })(),
    peptides: peptideProducts.length > 0 ? (() => {
      const copy = copyFor('peptides');
      return (
        <div key="peptides">
          {copy.eyebrow && (
            <div className="text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-bold text-gray-900 mb-4">{copy.heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {peptideProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      );
    })() : null,
  };

  const ctaCopy = copyFor('cta');

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Stacks', item: 'https://www.bp157stack.com/stacks' },
                { '@type': 'ListItem', position: 3, name: stack.name, item: `https://www.bp157stack.com/stacks/${stack.id}` },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: stack.name,
              description: stack.tagline,
              image: stack.image,
              author: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' },
              publisher: { '@type': 'Organization', name: 'BPC-157 Stack', url: 'https://www.bp157stack.com' },
              about: stack.goal,
              keywords: [stack.name, ...stack.peptides, stack.goal].join(', '),
            },
          ]),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/stacks" className="hover:text-emerald-700">Stacks</Link>
          <span>/</span>
          <span className="text-gray-600">{stack.name}</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
              stack.difficulty === 'Beginner' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' :
              stack.difficulty === 'Intermediate' ? 'text-amber-400 border-amber-400/30 bg-amber-400/10' :
              'text-red-400 border-red-400/30 bg-red-400/10'
            }`}>
              {stack.difficulty}
            </span>
            <span className="text-xs text-gray-500 border border-slate-700 px-3 py-1.5 rounded-full flex items-center gap-1">
              <Clock className="w-3 h-3" /> {stack.duration}
            </span>
            <span className="text-xs text-neon-blue border border-neon-blue/30 bg-neon-blue/10 px-3 py-1.5 rounded-full text-neon-cyan">
              {stack.goal}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">{stack.name}</h1>
          <p className="text-xl text-emerald-700 font-medium mb-4">{stack.tagline}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main — per-stack section plan */}
          <div className="lg:col-span-2 space-y-6">
            {plan.map((key) => sectionRenderers[key])}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-gray-900 font-bold mb-2">Get This Stack</h3>
              <p className="text-gray-500 text-sm mb-4">
                All peptides in the {stack.name} are available from our recommended supplier.
              </p>
              <a
                href={SOURCE_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-sm py-3 w-full text-center flex items-center justify-center gap-2 mb-3"
              >
                View <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/stacks" className="btn-secondary text-sm py-3 w-full text-center block mb-4">
                ← View All Stacks
              </Link>

              <div className="border-t border-neon-green/10 pt-4">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">Stack Peptides</p>
                <div className="flex flex-wrap gap-2">
                  {stack.peptides.map((p) => (
                    <Link
                      key={p}
                      href={`/products/${p}`}
                      className="text-xs font-mono bg-dark-700 border border-neon-green/20 text-emerald-700 px-2 py-1 rounded hover:border-neon-green/50 transition-colors"
                    >
                      {p.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <InternalLinks path={`/stacks/${params.slug}`} title="Related Protocols" />

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-10 glass-card">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{ctaCopy.heading}</h2>
          <p className="text-gray-500 mb-6">
            Source all peptides for the {stack.name} from our recommended supplier — the most trusted, COA-verified source.
          </p>
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
          >
            View <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
