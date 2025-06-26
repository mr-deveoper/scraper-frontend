export interface Product {
  id: number;
  title: string;
  price: string;
  image_url: string;
  description?: string;
  category?: string;
  rating?: number;
  reviews_count?: number;
  availability?: string;
  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  data: {
    products: Product[];
    count: number;
  };
  message: string;
  success: boolean;
}

export interface ApiError {
  message: string;
  status: number;
} 