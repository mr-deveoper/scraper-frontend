import { useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: string;
  image_url: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 30000); // Refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Scraped Products</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-green-600 font-medium mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
