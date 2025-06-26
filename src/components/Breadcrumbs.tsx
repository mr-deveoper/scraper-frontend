import { useRouter } from 'next/navigation';

interface BreadcrumbsProps {
  productTitle: string;
}

export function Breadcrumbs({ productTitle }: BreadcrumbsProps) {
  const router = useRouter();
  return (
    <nav className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <button
            onClick={() => router.push('/')}
            className="hover:text-gray-700 transition-colors"
          >
            Home
          </button>
        </li>
        <li>/</li>
        <li>
          <button
            onClick={() => router.push('/products')}
            className="hover:text-gray-700 transition-colors"
          >
            Products
          </button>
        </li>
        <li>/</li>
        <li className="text-gray-900 font-medium">{productTitle}</li>
      </ol>
    </nav>
  );
} 