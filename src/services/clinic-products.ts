import axios from 'axios';
import { Product } from 'services/products';

export enum STATUS {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  ACTIVE_BUNDLE = 'Active/Bundle'
}
export enum PROMOTED_STATUS {
  NONE = '',
  CLINIC_PROMOTED = 'Clinic Promoted',
  BRAND_PROMOTED = 'Brand Promoted'
}
export interface ClinicProduct {
  id: number;
  name: string;
  brandName: string;
  category: string;
  subCategory: string;
  price: number;
  cost: number;
  margin?: number;
  discountPercentage: number;
  imageUrl: string;
  promoteStatus: string;
  isActive: boolean;
  bundlePricing: boolean;
  note: string;
  ingredients: string;
}

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type HeaderTable = {
  id: string;
  label: string;
  width?: number;
  minWidth?: number;
  align?: Align;
};

export interface ListClinicProductsParams {
  page?: number;
  limit?: number;
  /** Partial match on product name or brand name */
  name?: string;
  category?: string;
  subCategory?: string;
  isActive?: boolean;
  bundlePricing?: boolean;
  order?: 'asc' | 'desc';
  orderBy?: string;
}

export interface ListClinicProductsResponse {
  list: ClinicProduct[];
  total: number;
  page: number;
  limit: number;
}

/** Matches `getSales` on clinic-products.service (BE) */
export interface ClinicItemSalePerson {
  firstName?: string | null;
  lastName?: string | null;
}

export interface ClinicProductSaleMetrics {
  recommendedLast30Days: number;
  recommendedThisYear: number;
  purchasedLast30Days: number;
  purchasedThisYear: number;
  conversionLast30Days: number;
  conversionYTD: number;
  topProviderLast30Days: ClinicItemSalePerson | null;
  topProviderThisYear: ClinicItemSalePerson | null;
  topAdvisorLast30Days: ClinicItemSalePerson | null;
  topAdvisorThisYear: ClinicItemSalePerson | null;
}

export interface ClinicProductWithSale extends Product {
  sale: ClinicProductSaleMetrics;
}

export const getClinicProducts = async (
  params?: ListClinicProductsParams
): Promise<ListClinicProductsResponse> => {
  const { data } = await axios.get<ListClinicProductsResponse>('/clinic-products', { params });
  return data;
};

export const getClinicProductsWithSales = async (
  params?: ListClinicProductsParams
): Promise<{ list: ClinicProductWithSale[]; total: number }> => {
  const { data } = await axios.get<{ list: ClinicProductWithSale[]; total: number }>(
    '/clinic-products/sales',
    { params }
  );
  return data;
};

export const getClinicProductById = async (id: number): Promise<Product> => {
  const { data } = await axios.get<Product>(`/clinic-products/${id}`);
  return data;
};

export const createClinicProduct = async (payload: Partial<Product>): Promise<Product> => {
  const { data } = await axios.post<Product>('/clinic-products', payload);
  return data;
};

export const updateClinicProduct = async (
  id: number,
  payload: Partial<Product>
): Promise<Product> => {
  const { data } = await axios.patch<Product>(`/clinic-products/${id}`, payload);
  return data;
};

export const deleteClinicProduct = async (id: number): Promise<void> => {
  await axios.delete(`/clinic-products/${id}`);
};

export const deleteClinicProductsBulk = async (
  ids: number[]
): Promise<{ deletedCount: number }> => {
  const { data } = await axios.post<{ deletedCount: number }>('/clinic-products/bulk-delete', {
    ids
  });
  return data;
};

export const importClinicProducts = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post('/clinic-products/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return res.data;
};
