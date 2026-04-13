'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, Tag } from 'lucide-react';
import type { Product } from '@/lib/products';
import { sale } from '@/lib/products';
import ProductImage from '@/components/ProductImage';

const categoryColor: Record<string, string> = {
  Healing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Anti-Aging': 'bg-amber-50 text-amber-700 border-amber-200',
  'Body Composition': 'bg-blue-50 text-blue-700 border-blue-200',
  'Weight Loss': 'bg-rose-50 text-rose-700 border-rose-200',
  Cognitive: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Supplies: 'bg-gray-100 text-gray-800 border-gray-200',
};

export default function ProductCatalogCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.slug}`)}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-amber-300 hover:shadow-md transition-all duration-200 group flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 bg-gray-50 overflow-hidden flex-shrink-0">
        <ProductImage
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-gray-900 font-black text-lg leading-tight mb-1 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-amber-600 text-sm font-bold mb-2 leading-tight">{product.tagline}</p>
        <p className="text-gray-900 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map(tag => (
            <span key={tag} className="flex items-center gap-0.5 text-xs text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
              <Tag className="w-2.5 h-2.5" />{tag}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div className="flex flex-col leading-tight">
            <span className="text-gray-900 font-black text-xl">${sale(product.price)}</span>
            <span className="text-gray-400 text-xs line-through">${product.price}</span>
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-bold px-3 py-2 rounded-lg bg-amber-500 text-gray-900 hover:bg-amber-600 transition-colors flex items-center gap-1"
          >
            Buy Now <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
