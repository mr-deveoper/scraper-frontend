'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            Product Scraper
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover and explore scraped products from various sources with real-time updates and detailed information.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Updates</h3>
            <p className="text-gray-600 leading-relaxed">
              Products are automatically updated every 30 seconds to ensure you have the latest information.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">High-Quality Images</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse products with high-resolution images and detailed visual information.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Information</h3>
            <p className="text-gray-600 leading-relaxed">
              Get comprehensive product details including prices, ratings, reviews, and availability.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-700/90"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-primary-100 mb-8 text-lg max-w-2xl mx-auto">
              Start browsing our collection of scraped products with real-time updates and detailed information.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse Products
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">📦</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">1000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Real-time</div>
            <div className="text-gray-600">Updating</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🖼️</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">High-Res</div>
            <div className="text-gray-600">Images</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Detailed</div>
            <div className="text-gray-600">Analytics</div>
          </div>
        </div>
      </main>
    </div>
  );
} 