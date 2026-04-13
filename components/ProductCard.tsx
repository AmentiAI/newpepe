'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, Tag } from 'lucide-react';
import type { Product } from '@/lib/products';
import { sale } from '@/lib/products';
import ProductImage from '@/components/ProductImage';

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
  const router = useRouter();
  const colorClass = categoryColors[product.category] ?? 'text-amber-700 bg-amber-50 border-amber-200';

  return (
    <div
      onClick={() => router.push(`/products/${product.slug}`)}
      className="glass-card overflow-hidden group hover:border-amber-300 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-50 shrink-0">
        <ProductImage
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full border ${colorClass}`}>
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
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
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col leading-tight">
            <span className="text-gray-900 font-black text-xl">${sale(product.price)}</span>
            <span className="text-gray-400 text-xs line-through">${product.price}</span>
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-cta text-xs px-4 py-2.5 flex items-center gap-1"
          >
            Buy Now <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
