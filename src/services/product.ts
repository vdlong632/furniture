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

export const getProduct = async () => {
  const { data } = await axios.get<Product[]>('/data/products.json');
  return data;
};

export const getProductDetail = async (slug: string) => {
  const products = await getProduct();
  return products.find((product) => product.slug === slug) ?? null;
};
