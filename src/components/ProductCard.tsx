'use client';

import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Product Image */}
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-image.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Price Badge */}
        {product.price && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {product.price}
          </div>
        )}
        
        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
            <span>⭐</span>
            <span>{product.rating}</span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            {product.category && (
              <span className="bg-gray-100 px-2 py-1 rounded-full">
                {product.category}
              </span>
            )}
            {product.reviews_count && (
              <span className="flex items-center space-x-1">
                <span>💬</span>
                <span>{product.reviews_count}</span>
              </span>
            )}
          </div>
          
          {product.availability && (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              product.availability.toLowerCase().includes('in stock') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {product.availability}
            </span>
          )}
        </div>

        {/* Last Updated */}
        <div className="text-xs text-gray-400 pt-2 border-t border-gray-100">
          Updated: {new Date(product.updated_at).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
} 