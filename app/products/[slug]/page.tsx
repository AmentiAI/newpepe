import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, FlaskConical, ChevronLeft } from 'lucide-react';
import { products, getProductBySlug, getRelatedProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Peptide Not Found' };
  return {
    title: product.seoTitle,
    description: product.shortDescription,
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      images: [product.image],
      type: 'website',
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.synergies).slice(0, 3);

  const descLines = product.fullDescription.split('\n').filter(Boolean);

  return (
    <div className="grid-bg min-h-screen pt-24 pb-20">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.shortDescription,
            image: product.image,
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: product.affiliateUrl,
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-neon-green transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-neon-green transition-colors">Peptides</Link>
          <span>/</span>
          <span className="text-slate-300">{product.name}</span>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden neon-border">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            <span className="absolute top-4 left-4 bg-neon-green/10 border border-neon-green/30 text-neon-green text-xs font-bold px-3 py-1.5 rounded-full">
              {product.category}
            </span>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <FlaskConical className="w-5 h-5 text-neon-green" />
              <span className="text-neon-green text-sm font-medium font-mono">{product.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">{product.name}</h1>
            <p className="text-xl text-neon-green font-medium mb-4">{product.tagline}</p>
            <p className="text-slate-400 leading-relaxed mb-6">{product.shortDescription}</p>

            {/* Benefits preview */}
            <ul className="space-y-2 mb-8">
              {product.benefits.slice(0, 4).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-black text-white">${product.price}</span>
              <span className="text-slate-500 text-sm">at Apollo Peptide Sciences</span>
            </div>
            <div className="flex gap-3">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base px-8 py-4 flex items-center gap-2 flex-1 justify-center"
              >
                Buy {product.name} Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-600 text-xs mt-3 text-center">
              COA verified • US domestic shipping • Research purposes only
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Highlights */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">{product.deepDiveTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.highlights.map((h) => (
                  <div key={h.title} className="bg-dark-700/50 rounded-xl p-4 border border-neon-green/10">
                    <h3 className="text-neon-green font-semibold text-sm mb-1">{h.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{h.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Full description */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Full Research Overview</h2>
              <div className="prose-dark space-y-3">
                {descLines.map((line, i) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <h3 key={i} className="text-neon-green font-semibold text-lg mt-4">{line.replace(/\*\*/g, '')}</h3>;
                  }
                  if (line.startsWith('- ')) {
                    return <p key={i} className="text-slate-400 text-sm pl-4 before:content-['→'] before:mr-2 before:text-neon-green">{line.slice(2)}</p>;
                  }
                  return <p key={i} className="text-slate-400 text-sm leading-relaxed">{line}</p>;
                })}
              </div>
            </div>

            {/* All benefits */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Complete Benefits</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-neon-green shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Protocol */}
            <div className="glass-card p-6">
              <h2 className="text-xl font-bold text-white mb-4">Dosing Protocol</h2>
              <div className="bg-dark-700/50 rounded-xl p-4 border border-neon-green/10">
                <div className="prose-dark space-y-2">
                  {product.protocol.split('\n').filter(Boolean).map((line, i) => {
                    if (line.startsWith('**') && line.endsWith(':**')) {
                      return <h3 key={i} className="text-neon-green font-semibold">{line.replace(/\*\*/g, '')}</h3>;
                    }
                    if (line.startsWith('- ')) {
                      return <p key={i} className="text-slate-400 text-sm pl-4">• {line.slice(2)}</p>;
                    }
                    return <p key={i} className="text-slate-400 text-sm">{line}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Buy box */}
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-white font-bold mb-2">Get {product.name}</h3>
              <p className="text-slate-400 text-sm mb-4">
                Source from Apollo Peptide Sciences — COA verified, US domestic, fast shipping.
              </p>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-sm py-3 w-full text-center flex items-center justify-center gap-2 mb-3"
              >
                Buy {product.name} at Apollo <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/stacks" className="btn-secondary text-sm py-3 w-full text-center block">
                See Stack Protocols
              </Link>
              <ul className="mt-4 space-y-2">
                {['Certificate of Analysis (COA)', 'US Domestic Shipping', 'Research Grade Purity', 'Fast Turnaround'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle className="w-3.5 h-3.5 text-neon-green" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Synergy tags */}
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-3 text-sm">Stacks Well With</h3>
              <div className="flex flex-wrap gap-2">
                {product.synergies.map((s) => (
                  <Link
                    key={s}
                    href={`/products/${s}`}
                    className="text-xs bg-dark-700 border border-neon-green/20 text-neon-green px-3 py-1.5 rounded-full hover:border-neon-green/50 transition-colors font-mono"
                  >
                    {s.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Peptides — <span className="text-neon-green">Stack With {product.name}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <div className="text-center">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
              >
                Shop the Full Stack at Apollo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
