import axios from 'axios';

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
export interface ClinicProcedure {
  id: number;
  clinicId?: number;
  name?: string;
  type?: string;
  adjunctive?: string;
  category?: string;
  subCategory?: string;
  price?: number;
  cost?: number;
  margin?: number;
  downtime?: string;
  imageUrl?: string;
  discountPercentage?: number;
  promoteStatus?: string;
  isActive?: boolean;
  bundlePricing?: boolean;
  target?: string;
  aftercare?: string;
  results?: string;
  risks?: string;
  contraindications?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export type HeaderTable = {
  id: string;
  label: string;
  width?: number;
  minWidth?: number;
  align?: Align;
};

export interface ListClinicProceduresParams {
  page?: number;
  limit?: number;
  /** Partial match on procedure name or type */
  name?: string;
  category?: string;
  subCategory?: string;
  isActive?: boolean;
  bundlePricing?: boolean;
  order?: 'asc' | 'desc';
  orderBy?: string;
}

export interface ListClinicProceduresResponse {
  list: ClinicProcedure[];
  total: number;
}

/** Matches `getSales` on clinic-procedures.service (BE) */
export interface ClinicItemSalePerson {
  firstName?: string | null;
  lastName?: string | null;
}

export interface ClinicProcedureSaleMetrics {
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

export interface ClinicProcedureWithSale extends ClinicProcedure {
  sale: ClinicProcedureSaleMetrics;
}

export const getClinicProcedures = async (
  params?: ListClinicProceduresParams
): Promise<ListClinicProceduresResponse> => {
  const { data } = await axios.get<ListClinicProceduresResponse>('/clinic-procedures', { params });
  return data;
};

export const getClinicProceduresWithSales = async (
  params?: ListClinicProceduresParams
): Promise<{ list: ClinicProcedureWithSale[]; total: number }> => {
  const { data } = await axios.get<{ list: ClinicProcedureWithSale[]; total: number }>(
    '/clinic-procedures/sales',
    { params }
  );
  return data;
};

export const getClinicProcedureById = async (id: number): Promise<ClinicProcedure> => {
  const { data } = await axios.get<ClinicProcedure>(`/clinic-procedures/${id}`);
  return data;
};

export const createClinicProcedure = async (
  payload: Partial<Omit<ClinicProcedure, 'id' | 'clinicId'>>
): Promise<ClinicProcedure> => {
  const { data } = await axios.post<ClinicProcedure>('/clinic-procedures', payload);
  return data;
};

export const updateClinicProcedure = async (
  id: number,
  payload: Partial<Omit<ClinicProcedure, 'id' | 'clinicId'>>
): Promise<ClinicProcedure> => {
  const { data } = await axios.patch<ClinicProcedure>(`/clinic-procedures/${id}`, payload);
  return data;
};

export const deleteClinicProcedure = async (id: number): Promise<void> => {
  await axios.delete(`/clinic-procedures/${id}`);
};

export const deleteClinicProceduresBulk = async (
  ids: number[]
): Promise<{ deletedCount: number }> => {
  const { data } = await axios.post<{ deletedCount: number }>('/clinic-procedures/bulk-delete', {
    ids
  });
  return data;
};

export const importClinicProcedures = async (file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await axios.post('/clinic-procedures/import', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return res.data;
};

export const uploadProcedureImage = async (id: number, file: File): Promise<ClinicProcedure> => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await axios.post<ClinicProcedure>(`/clinic-procedures/${id}/image`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};
