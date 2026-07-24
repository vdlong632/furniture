import axios from 'axios';

export interface ProductColor {
  name: string;
  code: string;
  stock: number;
}

export interface ProductSize {
  name: string;
  code: string;
  priceAdjustment: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviewsCount: number;
  isNew: boolean;
  isFeatured: boolean;
  stock: number;
  material: string;
  dimensions: string;
  weight: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  description: string;
  features: string[];
  sku: string;
  tags: string[];
  relatedIds: number[];
}

export interface cartItem extends Product {
  quantity: number;
}

// export interface ListProductParams {
//   page?: number;
//   limit?: number;
// }

// export interface ListProductResponse {
//   list: Product[];
//   total: number;
// }

// export const getProduct = async (params?: ListProductParams): Promise<ListProductResponse> => {
//   const { data } = await axios.get<ListProductResponse>('http://localhost:3001/api/products', {
//     params
//   });
//   return data;
// };

export const getProduct = async () => {
  const { data } = await axios.get('http://localhost:3001/api/products');
  return data;
};

export const getProductDetail = async (slug: string) => {
  const { data } = await axios.get(`http://localhost:3001/api/products/slug/${slug}`);
  return data;
};
