import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import type { Product } from '@/lib/products';

interface Props {
  product: Product;
}

const categoryColors: Record<string, string> = {
  Healing: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'Anti-Aging': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  'Body Composition': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Cognitive: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
};

export default function ProductCard({ product }: Props) {
  const colorClass = categoryColors[product.category] ?? 'text-neon-green bg-neon-green/10 border-neon-green/20';

  return (
    <div className="glass-card overflow-hidden group hover:border-neon-green/30 transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-dark-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent pointer-events-none" />
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full border ${colorClass}`}>
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-neon-green transition-colors">
          {product.name}
        </h3>
        <p className="text-neon-green text-sm font-medium mb-2">{product.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 bg-dark-700 px-2 py-0.5 rounded-full">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-lg">${product.price}</span>
          <div className="flex gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="btn-secondary text-xs px-3 py-2"
            >
              Learn More
            </Link>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-cta text-xs px-3 py-2 flex items-center gap-1"
            >
              Check Price <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
