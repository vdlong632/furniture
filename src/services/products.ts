import axios from 'axios';

// ---- Types ----

export interface ProductRetailer {
  originurl?: string;
  retailer?: string;
  stars?: number;
  reviewCount?: number;
  price?: number;
}

export interface Product {
  id: number;
  clinicId: number;
  name: string;
  brandName: string;
  cost: number;
  price: string;
  imageUrl: string;
  discountPercentage: number;
  category: string;
  subCategory: string;
  promoteStatus: string;
  note: string;
  margin?: number;
  isActive: boolean;
  bundlePricing: boolean;
  ingredients: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface CreateProductPayload {
  upc?: string;
  date?: string;
  imageurl?: string;
  brand?: string;
  product?: string;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  spf?: string;
  size?: string;
  description?: string;
  ingredients?: string;
  merchantItemNumber?: string;
  exclude?: number;
  retailers: ProductRetailer[];
}

export interface UpdateProductPayload {
  upc?: string;
  imageurl?: string;
  brand?: string;
  product?: string;
  cat1?: string;
  cat2?: string;
  cat3?: string;
  spf?: string;
  size?: string;
  description?: string;
  ingredients?: string;
  merchantItemNumber?: string;
  exclude?: number;
  originurl?: string;
  retailer?: string;
  price?: number;
  stars?: number;
  reviewCount?: number;
  retailers?: ProductRetailer[];
}

export interface GetProductsParams {
  page?: number;
  limit?: number;
  word?: string;
  categoryId?: number;
  brand?: string[];
  orderBy?: number;
}

export interface ProductListResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
}

// ---- API calls ----

// GET /products — paginated list
export const getProducts = async (params?: GetProductsParams): Promise<ProductListResponse> => {
  const { data } = await axios.get<ProductListResponse>('/products', { params });
  return data;
};

// GET /products/detail/:id — single product
export const getProductById = async (id: number): Promise<Product> => {
  const { data } = await axios.get<Product>(`/products/detail/${id}`);
  return data;
};

// POST /products — create
export const createProduct = async (payload: CreateProductPayload): Promise<Product[]> => {
  const { data } = await axios.post<Product[]>('/products', payload);
  return data;
};

// PUT /products/:id — update
export const updateProduct = async (
  id: number,
  payload: UpdateProductPayload
): Promise<Product> => {
  const { data } = await axios.put<Product>(`/products/${id}`, payload);
  return data;
};

// DELETE /products/:id — remove
export const deleteProduct = async (id: number): Promise<Product> => {
  const { data } = await axios.delete<Product>(`/products/${id}`);
  return data;
};
