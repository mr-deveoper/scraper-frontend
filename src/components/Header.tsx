'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  totalProducts?: number;
  lastUpdated?: string | null;
}

export function Header({ totalProducts, lastUpdated }: HeaderProps) {
  const pathname = usePathname();

  const formatLastUpdated = (dateString?: string) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Product Scraper
              </span>
            </Link>

            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' 
                    ? 'text-primary-600' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-sm font-medium transition-colors ${
                  pathname.includes('/products') 
                    ? 'text-primary-600' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Status Information */}
          {totalProducts !== undefined && (
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-full">
                <span className="text-primary-600">📦</span>
                <span className="font-medium text-gray-700">{totalProducts} products</span>
              </div>
              {lastUpdated && (
                <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                  <span className="text-green-600">🕒</span>
                  <span className="text-green-700">Updated {formatLastUpdated(lastUpdated)}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
} 