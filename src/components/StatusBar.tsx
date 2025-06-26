interface StatusBarProps {
  totalProducts: number;
  lastUpdated?: string | null;
  loading: boolean;
}

export function StatusBar({ totalProducts, lastUpdated, loading }: StatusBarProps) {
  return (
    <div className="bg-white rounded-xl p-4 mb-8 shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-primary-600 text-lg">📦</span>
          <span className="font-medium text-gray-700">{totalProducts} products</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-600 text-lg">🕒</span>
          <span className="text-gray-700">{lastUpdated ? `Updated ${formatLastUpdated(lastUpdated)}` : 'No update info'}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {loading ? (
          <>
            <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse inline-block"></span>
            <span className="text-yellow-700 font-medium">Refreshing...</span>
          </>
        ) : (
          <>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
            <span className="text-green-700 font-medium">Live</span>
          </>
        )}
      </div>
    </div>
  );
}

function formatLastUpdated(dateString?: string | null) {
  if (!dateString) return null;
  const date = new Date(dateString);
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  if (diffInMinutes < 1) return 'just now';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return date.toLocaleDateString();
} 