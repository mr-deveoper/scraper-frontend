interface ProductFooterProps {
  updatedAt: string;
  id: number;
}

export function ProductFooter({ updatedAt, id }: ProductFooterProps) {
  return (
    <div className="border-t border-gray-200 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-gray-500 mb-1">Last Updated</div>
          <div className="text-gray-900">{new Date(updatedAt).toLocaleDateString()}</div>
        </div>
        <div className="text-sm text-gray-500">
          ID: {id}
        </div>
      </div>
    </div>
  );
} 