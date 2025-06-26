interface ProductMetaProps {
  category?: string | undefined;
  rating?: number | undefined;
  reviewsCount?: number | undefined;
  availability?: string | undefined;
}

export function ProductMeta({ category, rating, reviewsCount, availability }: ProductMetaProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {category && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">Category</div>
          <div className="text-gray-900">{category}</div>
        </div>
      )}
      {rating && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">Rating</div>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-900 ml-1">{rating}</span>
          </div>
        </div>
      )}
      {reviewsCount && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">Reviews</div>
          <div className="text-gray-900">{reviewsCount} reviews</div>
        </div>
      )}
      {availability && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-500 mb-1">Availability</div>
          <div className="text-gray-900">{availability}</div>
        </div>
      )}
    </div>
  );
} 