import axios from 'axios';
import { ClientAnalysis } from 'services/client-analysis';

export interface ClinicClient {
  id: number;
  clinicId: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  photoUrl?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  visits?: number;
  purchasedProductsTotal?: number;
  purchasedProductsYTD?: number;
  completedProceduresTotal?: number;
  completedProceduresYTD?: number;
  clientAnalysis?: ClientAnalysis[];
}

export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface CreateClinicClientPayload {
  photoUrl?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  birthday?: string;
  forceCreate?: boolean;
}

// Create a new clinic client
export const createClinicClient = async (payload: CreateClinicClientPayload) => {
  const { data } = await axios.post<ClinicClient>('/clinic-clients', payload);
  return data;
};

// Get list of clinic clients
export const getClinicClients = async (params?: {
  page?: number;
  limit?: number;
  /** Search: one field, or e.g. "Jane Doe" → firstName + lastName (BE query: `name`) */
  name?: string;
  /** When true, only clients with at least one analysis */
  hasAnalysis?: boolean;
}) => {
  const { data } = await axios.get<{
    list: ClinicClient[];
    total: number;
    countLast30Days: number;
    countYTD: number;
  }>('/clinic-clients', {
    params
  });
  return data;
};

// Get a single clinic client by ID
export const getClinicClientById = async (id: number, params?: any) => {
  const { data } = await axios.get<ClinicClient>(`/clinic-clients/${id}`, { params });
  return data;
};

// Update a clinic client
export const updateClinicClient = async (id: number, payload: CreateClinicClientPayload) => {
  const { data } = await axios.patch<ClinicClient>(`/clinic-clients/${id}`, payload);
  return data;
};

export const uploadClinicClientPhoto = async (id: number, file: File): Promise<ClinicClient> => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await axios.post<ClinicClient>(`/clinic-clients/${id}/photo`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return data;
};

export const deleteClinicClientPhoto = async (id: number): Promise<ClinicClient> => {
  const { data } = await axios.delete<ClinicClient>(`/clinic-clients/${id}/photo`);
  return data;
};

// Delete a clinic client (soft delete)
export const deleteClinicClient = async (id: number) => {
  const { data } = await axios.delete(`/clinic-clients/${id}`);
  return data;
};

export type ExportClinicClientsParams = {
  name?: string;
  phone?: string;
  email?: string;
};
export const exportClinicClientsXlsx = async (params?: ExportClinicClientsParams) => {
  const response = await axios.get('/clinic-clients/export', {
    params,
    responseType: 'blob'
  });
  const blob = response.data;
  const fileName = `clients_${Date.now()}.xlsx`;
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(objectUrl);
  link.remove();
};

export type ClinicUserBrief = {
  id: number;
  firstName?: string;
  lastName?: string;
};

export type PurchasedProductRecord = {
  id: number | string;
  clientId: number | string;
  productId: number | string;
  providerId?: number | string | null;
  advisorId?: number | string | null;
  date: string;
  product: { name: string; imageUrl?: string; price?: number; discountPercentage?: number };
  provider?: ClinicUserBrief | null;
  advisor?: ClinicUserBrief | null;
};

export type CompletedProcedureRecord = {
  id: number | string;
  clientId: number | string;
  procedureId: number | string;
  providerId?: number | string | null;
  advisorId?: number | string | null;
  date: string;
  procedure: { name: string; imageUrl?: string; price?: number; discountPercentage?: number };
  provider?: ClinicUserBrief | null;
  advisor?: ClinicUserBrief | null;
};

export const getPurchasedProducts = async (
  clientId: number,
  params: { page: number; limit: number }
) => {
  const { data } = await axios.get<{ list: PurchasedProductRecord[]; total: number }>(
    `/clinic-clients/${clientId}/purchased-products`,
    { params }
  );
  return data;
};

export const getCompletedProcedures = async (
  clientId: number,
  params: { page: number; limit: number }
) => {
  const { data } = await axios.get<{ list: CompletedProcedureRecord[]; total: number }>(
    `/clinic-clients/${clientId}/completed-procedures`,
    { params }
  );
  return data;
};

export type CreatePurchasedProductPayload = {
  productId: number;
  date: string;
  providerId?: number;
  advisorId?: number;
};

export type UpdatePurchasedProductPayload = {
  productId?: number;
  date?: string;
  providerId?: number;
  advisorId?: number;
};

export const addPurchasedProduct = async (
  clientId: number,
  payload: CreatePurchasedProductPayload
) => {
  const { data } = await axios.post<PurchasedProductRecord>(
    `/clinic-clients/${clientId}/purchased-products`,
    payload
  );
  return data;
};

export const updatePurchasedProduct = async (
  clientId: number,
  recordId: number,
  payload: UpdatePurchasedProductPayload
) => {
  const { data } = await axios.patch<PurchasedProductRecord>(
    `/clinic-clients/${clientId}/purchased-products/${recordId}`,
    payload
  );
  return data;
};

export const removePurchasedProduct = async (clientId: number, recordId: number) => {
  const { data } = await axios.delete(`/clinic-clients/${clientId}/purchased-products/${recordId}`);
  return data;
};

export type CreateCompletedProcedurePayload = {
  procedureId: number;
  date: string;
  providerId?: number;
  advisorId?: number;
};

export type UpdateCompletedProcedurePayload = {
  procedureId?: number;
  date?: string;
  providerId?: number;
  advisorId?: number;
};

export const addCompletedProcedure = async (
  clientId: number,
  payload: CreateCompletedProcedurePayload
) => {
  const { data } = await axios.post<CompletedProcedureRecord>(
    `/clinic-clients/${clientId}/completed-procedures`,
    payload
  );
  return data;
};

export const updateCompletedProcedure = async (
  clientId: number,
  recordId: number,
  payload: UpdateCompletedProcedurePayload
) => {
  const { data } = await axios.patch<CompletedProcedureRecord>(
    `/clinic-clients/${clientId}/completed-procedures/${recordId}`,
    payload
  );
  return data;
};

export const removeCompletedProcedure = async (clientId: number, recordId: number) => {
  const { data } = await axios.delete(
    `/clinic-clients/${clientId}/completed-procedures/${recordId}`
  );
  return data;
};
