import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Tag } from 'lucide-react';
import type { Product } from '@/lib/products';

interface Props {
  product: Product;
}

const categoryColors: Record<string, string> = {
  Healing: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  'Anti-Aging': 'text-blue-700 bg-blue-50 border-blue-200',
  'Body Composition': 'text-blue-700 bg-blue-50 border-blue-200',
  Cognitive: 'text-amber-700 bg-amber-50 border-amber-200',
};

export default function ProductCard({ product }: Props) {
  const colorClass = categoryColors[product.category] ?? 'text-amber-700 bg-amber-50 border-amber-200';

  return (
    <div className="glass-card overflow-hidden group hover:border-amber-300 transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full border ${colorClass}`}>
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-gray-900 font-black text-xl mb-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-amber-600 text-sm font-bold mb-2">{product.tagline}</p>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
              <Tag className="w-3 h-3" /> {tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-black text-xl">${product.price}</span>
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
