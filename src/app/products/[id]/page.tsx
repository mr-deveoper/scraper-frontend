'use client';

import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useProducts } from '@/hooks/useProducts';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductImage } from '@/components/ProductImage';
import { ProductInfo } from '@/components/ProductInfo';
import { ProductMeta } from '@/components/ProductMeta';
import { ProductFooter } from '@/components/ProductFooter';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { products, loading, error } = useProducts();

  const productId = parseInt(params.id as string);
  const product = products.find(p => p.id === productId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <ErrorMessage message={error} />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => router.push('/products')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs productTitle={product.title} />
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <ProductImage imageUrl={product.image_url} title={product.title} />
            </div>
            <div className="space-y-6">
              <ProductInfo title={product.title} description={product.description} price={product.price} />
              <ProductMeta
                category={product.category}
                rating={product.rating}
                reviewsCount={product.reviews_count}
                availability={product.availability}
              />
              <ProductFooter updatedAt={product.updated_at} id={product.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 