interface ProductInfoProps {
  title: string;
  description?: string | undefined;
  price?: string | undefined;
}

export function ProductInfo({ title, description, price }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-lg text-gray-600">{description || 'No description available'}</p>
      </div>
      {price && (
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-primary-600">{price}</span>
          </div>
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Product Details</h3>
      </div>
    </div>
  );
} 