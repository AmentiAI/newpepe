import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductImage from '@/components/ProductImage';
import { ArrowRight, CheckCircle, FlaskConical, Microscope, Shield, Zap, Flame, Star } from 'lucide-react';
import { products, getProductBySlug, getRelatedProductsVaried, sale } from '@/lib/products';
import { isAbsorbed } from '@/lib/absorbed-slugs';
import ProductCard from '@/components/ProductCard';
import InternalLinks from '@/components/InternalLinks';
import { productFaqs } from '@/lib/product-faqs';
import ProductUniqueWidget from '@/components/ProductUniqueWidget';
import { getMainPlan, getTailPlan, getSectionCopy, getProductH1, type SectionKey } from '@/lib/product-sections';

interface Props {
  params: { slug: string };
}

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function generateStaticParams() {
  return products.filter((p) => !isAbsorbed(p.slug)).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: 'Peptide Not Found' };
  const keywords = [product.name, ...product.tags, product.category, 'peptide', 'BPC-157 stack'].join(', ');
  return {
    title: { absolute: product.seoTitle },
    description: product.shortDescription,
    keywords,
    alternates: { canonical: `https://www.bp157stack.com/products/${params.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.shortDescription,
      images: [{ url: product.image, width: 600, alt: product.name }],
      type: 'website',
      url: `https://www.bp157stack.com/products/${params.slug}`,
      siteName: 'BPC-157 Stack',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seoTitle,
      description: product.shortDescription.slice(0, 155),
      images: [product.image],
    },
  };
}

// Per-category visual themes (light theme — no purple)
const categoryTheme: Record<string, {
  accentColor: string;
  accentLight: string;
  accentBg: string;
  accentBorder: string;
  glow: string;
  heroBg: string;
  icon: React.ReactNode;
  categoryLabel: string;
}> = {
  Healing: {
    accentColor: '#059669',
    accentLight: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    glow: 'rgba(16, 185, 129, 0.06)',
    heroBg: 'from-emerald-100/40 to-transparent',
    icon: <Shield className="w-5 h-5 text-emerald-600" />,
    categoryLabel: 'Healing & Recovery',
  },
  'Anti-Aging': {
    accentColor: '#D97706',
    accentLight: 'text-amber-600',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    glow: 'rgba(245, 158, 11, 0.06)',
    heroBg: 'from-amber-100/40 to-transparent',
    icon: <Star className="w-5 h-5 text-amber-600" />,
    categoryLabel: 'Anti-Aging & Longevity',
  },
  'Body Composition': {
    accentColor: '#2563EB',
    accentLight: 'text-blue-600',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    glow: 'rgba(59, 130, 246, 0.06)',
    heroBg: 'from-blue-100/40 to-transparent',
    icon: <Flame className="w-5 h-5 text-blue-600" />,
    categoryLabel: 'Body Composition',
  },
  'Weight Loss': {
    accentColor: '#e11d48',
    accentLight: 'text-rose-600',
    accentBg: 'bg-rose-50',
    accentBorder: 'border-rose-200',
    glow: 'rgba(244, 63, 94, 0.06)',
    heroBg: 'from-rose-100/40 to-transparent',
    icon: <Zap className="w-5 h-5 text-rose-600" />,
    categoryLabel: 'Weight Loss',
  },
  Cognitive: {
    accentColor: '#0891b2',
    accentLight: 'text-cyan-700',
    accentBg: 'bg-cyan-50',
    accentBorder: 'border-cyan-200',
    glow: 'rgba(6, 182, 212, 0.06)',
    heroBg: 'from-cyan-100/40 to-transparent',
    icon: <Microscope className="w-5 h-5 text-cyan-700" />,
    categoryLabel: 'Cognitive Enhancement',
  },
  Supplies: {
    accentColor: '#475569',
    accentLight: 'text-gray-600',
    accentBg: 'bg-slate-50',
    accentBorder: 'border-slate-200',
    glow: 'rgba(100, 116, 139, 0.06)',
    heroBg: 'from-slate-100/40 to-transparent',
    icon: <FlaskConical className="w-5 h-5 text-gray-600" />,
    categoryLabel: 'Lab Supplies',
  },
};

const defaultTheme = categoryTheme['Healing'];

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProductsVaried(product.slug, product.synergies, 3);
  const theme = categoryTheme[product.category] ?? defaultTheme;
  const faqs = productFaqs[product.slug] ?? [];

  const descLines = product.fullDescription.split('\n').filter(Boolean);

  const mainPlan = getMainPlan(product);
  const tailPlan = getTailPlan(product);

  const sectionRenderers: Record<SectionKey, React.ReactNode> = {
    highlights: (
      <div key="highlights" className="rounded-2xl p-6 bg-gray-50 border border-gray-200">
        <h2 className="text-xl font-black text-gray-900 mb-6">{getSectionCopy(product, 'highlights').heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.highlights.map((h) => (
            <div key={h.title} className="glass-card p-5 rounded-xl">
              <h3 className={`${theme.accentLight} font-black text-base mb-2`}>{h.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    science: (() => {
      const copy = getSectionCopy(product, 'science');
      return (
        <div key="science" className="glass-card p-6">
          {copy.eyebrow && (
            <div className={`${theme.accentLight} text-xs font-mono font-bold uppercase tracking-wider mb-2`}>
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-black text-gray-900 mb-6">{copy.heading}</h2>
          <div className="prose-dark space-y-3">
            {descLines.map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <h3 key={i} className={`${theme.accentLight} font-black text-base mt-6 mb-2 flex items-center gap-2`}>
                    <span style={{ color: theme.accentColor }}>▸</span>
                    {line.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              if (line.startsWith('- ')) {
                return (
                  <p key={i} className="text-gray-900 text-sm pl-4 flex items-start gap-2">
                    <span className={theme.accentLight}>→</span>
                    {line.slice(2)}
                  </p>
                );
              }
              return <p key={i} className="text-gray-900 text-sm leading-relaxed">{line}</p>;
            })}
          </div>
        </div>
      );
    })(),
    widget: <ProductUniqueWidget key="widget" slug={product.slug} />,
    benefits: (() => {
      const copy = getSectionCopy(product, 'benefits');
      return (
        <div key="benefits" className="glass-card p-6">
          {copy.eyebrow && (
            <div className={`${theme.accentLight} text-xs font-mono font-bold uppercase tracking-wider mb-2`}>
              {copy.eyebrow}
            </div>
          )}
          <h2 className="text-xl font-black text-gray-900 mb-6">{copy.heading}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-gray-800">
                <CheckCircle className={`w-4 h-4 ${theme.accentLight} shrink-0 mt-0.5`} />
                {b}
              </li>
            ))}
          </ul>
        </div>
      );
    })(),
    protocol: (() => {
      const copy = getSectionCopy(product, 'protocol');
      return (
        <div key="protocol" className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${theme.accentColor}20` }}>
          <div className="px-6 py-4" style={{ background: `${theme.glow}` }}>
            {copy.eyebrow && (
              <div className={`${theme.accentLight} text-xs font-mono font-bold uppercase tracking-wider mb-1`}>
                {copy.eyebrow}
              </div>
            )}
            <h2 className={`text-lg font-black ${theme.accentLight} flex items-center gap-2`}>
              <FlaskConical className="w-5 h-5" />
              {copy.heading}
            </h2>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="font-mono text-sm space-y-2">
              {product.protocol.split('\n').filter(Boolean).map((line, i) => {
                if (line.startsWith('**')) {
                  return (
                    <p key={i} className={`${theme.accentLight} font-black mt-5 mb-2 first:mt-0`}>
                      {line.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <p key={i} className="text-gray-800 pl-4">
                      <span className={theme.accentLight}>•</span> {line.slice(2)}
                    </p>
                  );
                }
                return <p key={i} className="text-gray-600">{line}</p>;
              })}
            </div>
          </div>
        </div>
      );
    })(),
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bp157stack.com' },
                { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.bp157stack.com/products' },
                { '@type': 'ListItem', position: 3, name: product.name, item: `https://www.bp157stack.com/products/${product.slug}` },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Product',
              '@id': `https://www.bp157stack.com/products/${product.slug}#product`,
              name: product.name,
              description: product.shortDescription,
              image: product.image,
              url: `https://www.bp157stack.com/products/${product.slug}`,
              sku: product.slug,
              mpn: product.slug.toUpperCase(),
              category: product.category,
              keywords: [product.name, ...product.tags].join(', '),
              brand: { '@type': 'Brand', name: 'Phiogen' },
              manufacturer: { '@type': 'Organization', name: 'Phiogen' },
              offers: {
                '@type': 'Offer',
                price: sale(product.price),
                priceCurrency: 'USD',
                priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
                availability: 'https://schema.org/InStock',
                itemCondition: 'https://schema.org/NewCondition',
                seller: { '@type': 'Organization', name: 'Phiogen' },
                url: `https://www.bp157stack.com/products/${product.slug}`,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '1',
                bestRating: '5',
                worstRating: '1',
              },
              review: [
                {
                  '@type': 'Review',
                  reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5',
                    worstRating: '1',
                  },
                  author: { '@type': 'Organization', name: 'BPC-157 Stack Lab Verification' },
                  reviewBody: `Independent third-party HPLC analysis of ${product.name} confirms the labelled identity and >99% peptide purity. Certificate of Analysis (COA) is available for the batch and matches the manufacturer's stated specifications. Reconstitution behaviour, mass spectrometry mass-match, and visual inspection were all consistent with research-grade ${product.name}.`,
                  datePublished: `${new Date().getFullYear()}-01-15`,
                },
              ],
            },
          ]),
        }}
      />

      {/* Subtle colored glow behind hero */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 40% at 50% 30%, ${theme.glow}, transparent)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-600 transition-colors">Peptides</Link>
          <span>/</span>
          <span className={theme.accentLight}>{product.name}</span>
        </div>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Image */}
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${theme.accentColor}40`, boxShadow: `0 0 60px ${theme.glow}` }}>
            <ProductImage
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroBg}`} />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`${theme.accentBg} ${theme.accentBorder} border ${theme.accentLight} text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5`}>
                {theme.icon} {theme.categoryLabel}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <FlaskConical className={`w-4 h-4 ${theme.accentLight}`} />
              <span className={`${theme.accentLight} text-sm font-mono font-semibold`}>{product.category.toUpperCase()}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2 leading-tight">{getProductH1(product)}</h1>
            <p className={`text-lg sm:text-xl ${theme.accentLight} font-bold mb-2`}>{product.tagline}</p>
            <p className="text-gray-500 text-xs font-mono mb-4">
              Last updated {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })} · COA-verified
            </p>
            <p className="text-gray-900 leading-relaxed mb-6 text-base">{product.shortDescription}</p>

            {/* Benefits preview */}
            <ul className="space-y-2 mb-8">
              {product.benefits.slice(0, 5).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-800">
                  <CheckCircle className={`w-4 h-4 ${theme.accentLight} shrink-0 mt-0.5`} />
                  {b}
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="rounded-xl p-5 mb-4 bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex flex-col leading-tight">
                  <span className="text-3xl sm:text-4xl font-black text-gray-900">${sale(product.price)}</span>
                  <span className="text-gray-400 text-sm line-through">${product.price}</span>
                </div>
                <span className="text-xs font-black bg-amber-500 text-gray-900 px-2 py-1 rounded-full">10% OFF</span>
                <div>
                  <div className="text-gray-700 text-xs font-medium">COA Verified · Third-Party Tested</div>
                  <div className={`${theme.accentLight} text-xs font-bold`}>US Domestic Shipping</div>
                </div>
              </div>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-base py-4 w-full flex items-center justify-center gap-2"
              >
                Buy {product.name} on Phiogen <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-700 text-xs text-center">
              COA verified · US domestic shipping
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content — per-product section plan */}
          <div className="lg:col-span-2 space-y-8">
            {mainPlan.map((key) => sectionRenderers[key])}

            <div className="rounded-xl p-4 bg-gray-50 border border-gray-200">
              <p className="text-gray-700 text-xs leading-relaxed">
                All information on this site is for educational purposes only. Always consult with a qualified healthcare provider before use.
                COA documentation is available for all products.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Buy box sticky */}
            <div className="glass-card p-6 sticky top-24">
              <h3 className="text-gray-900 font-black mb-1">{product.name}</h3>
              <p className="text-gray-700 text-xs mb-4">
                COA verified · Third-party tested · US domestic shipping
              </p>
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-sm py-3 w-full text-center flex items-center justify-center gap-2 mb-3"
              >
                Buy Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/stacks" className="btn-secondary text-sm py-3 w-full text-center block mb-4">
                View Stack Protocols
              </Link>

              <div className="space-y-2">
                {['Certificate of Analysis (COA)', 'US Domestic Shipping', 'COA-Verified Purity', '24–48hr Processing'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle className={`w-3.5 h-3.5 ${theme.accentLight}`} /> {f}
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-3xl font-black text-gray-900">${sale(product.price)}</div>
                <div className="text-gray-400 text-sm line-through">${product.price}</div>
              </div>
            </div>

            {/* Category info card */}
            <div className="rounded-xl p-5 bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                {theme.icon}
                <span className={`${theme.accentLight} text-sm font-bold`}>{theme.categoryLabel}</span>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed">
                {product.category === 'Healing' && 'Healing peptides repair tissue at the molecular level — activating growth factors, stem cell mobilization, and collagen synthesis.'}
                {product.category === 'Anti-Aging' && 'Longevity peptides target the root causes of aging — telomere shortening, epigenetic drift, and mitochondrial decline.'}
                {product.category === 'Body Composition' && 'Body composition peptides optimize the GH/IGF-1 axis and metabolic signaling for simultaneous fat loss and muscle gain.'}
                {product.category === 'Weight Loss' && 'GLP receptor agonists work via hypothalamic appetite regulation and metabolic enhancement — proven in large-scale clinical trials.'}
                {product.category === 'Cognitive' && 'Cognitive peptides modulate BDNF, GABA, and dopaminergic signaling for enhanced focus, memory, and anxiety reduction.'}
                {product.category === 'Supplies' && 'Pharmaceutical-grade supplies for safe and sterile peptide reconstitution and administration.'}
              </p>
              <Link href={`/${product.category.toLowerCase().replace(/\s+/g, '-').replace('anti-aging', 'anti-aging').replace('body-composition', 'body-composition').replace('weight-loss', 'body-composition').replace('cognitive', 'body-composition').replace('supplies', 'products')}`}
                className={`mt-3 text-xs ${theme.accentLight} hover:underline flex items-center gap-1`}>
                All {product.category} Peptides <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Synergy tags */}
            {product.synergies.length > 0 && (
              <div className="glass-card p-5">
                <h3 className="text-gray-900 font-black mb-3 text-sm">Stacks Best With</h3>
                <div className="flex flex-wrap gap-2">
                  {product.synergies.map((s) => (
                    <Link
                      key={s}
                      href={`/products/${s}`}
                      className={`text-xs ${theme.accentBg} ${theme.accentBorder} border ${theme.accentLight} px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity font-mono`}
                    >
                      {s.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Quick CTA */}
            <div className="text-center">
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-cta text-sm py-3 px-6 inline-flex items-center gap-2"
              >
                Buy {product.name} on Phiogen <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Tail sections — related + faq, ordered per product */}
        {tailPlan.map((key) => {
          if (key === 'related' && related.length > 0) {
            const copy = getSectionCopy(product, 'related');
            return (
              <div key="related" className="mt-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-gray-900">{copy.heading}</h2>
                  <a href={product.affiliateUrl} target="_blank" rel="nofollow noopener noreferrer"
                    className="btn-cta text-sm px-5 py-2.5 flex items-center gap-2 hidden sm:flex">
                    Buy the Full Stack <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {related.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
                <div className="text-center">
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn-cta text-base px-8 py-4 inline-flex items-center gap-2"
                  >
                    Buy Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            );
          }
          if (key === 'faq' && faqs.length > 0) {
            const copy = getSectionCopy(product, 'faq');
            return (
              <div key="faq" className="mt-16">
                <h2 className="text-2xl font-black text-gray-900 mb-6">{copy.heading}</h2>
                <div className="space-y-3">
                  {faqs.map(({ q, a }) => (
                    <details key={q} className="glass-card group">
                      <summary className="p-5 cursor-pointer list-none flex items-center justify-between">
                        <span className="text-gray-900 font-bold text-base pr-4">{q}</span>
                        <span className={`${theme.accentLight} text-lg shrink-0 group-open:rotate-45 transition-transform`}>+</span>
                      </summary>
                      <div className="px-5 pb-5">
                        <p className="text-gray-900 text-sm leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}

        <InternalLinks path={`/products/${params.slug}`} title="Related Peptides & Guides" />
      </div>
    </div>
  );
}
