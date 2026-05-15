import axios from 'axios';

// --- Types ---
export interface Clinics {
  id: number;
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  website?: string;
  fiscalYearStartDate?: string;
  logoUrl?: string;
  coverUrl?: string;
  qrCodeUrl?: string;
  pinCode?: string;
  defaultPassword?: string;
  quoteDuration?: number;
  discountPercentage?: number;
  discountAmount?: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface CreateClinicDto {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  isActive?: boolean;
}

export interface UpdateClinicDto {
  name?: string;
  email?: string;
  website?: string;
  phone?: string;
  logoUrl?: string;
  coverUrl?: string;
  qrCodeUrl?: string;
  fiscalYearStartDate?: string | null;
  defaultPassword?: string;
  quoteDuration?: number;
  discountPercentage?: number;
  discountAmount?: number;
  pinCode?: string;
  address?: string;
  isActive?: boolean;
}

// --- Services ---

// Get My Clinic (Clinic Admin/User)
export const getMyClinic = async () => {
  const { data } = await axios.get<Clinics>('/clinics/my-clinic');
  return data;
};

// Update My Clinic (Clinic Admin)
export const updateMyClinic = async (payload: UpdateClinicDto) => {
  const { data } = await axios.patch<Clinics>('/clinics/my-clinic', payload);
  return data;
};

export const uploadClinicFiles = async (payload: { logo?: File; cover?: File; qr?: File }) => {
  const formData = new FormData();
  if (payload.logo) formData.append('logo', payload.logo);
  if (payload.cover) formData.append('cover', payload.cover);
  if (payload.qr) formData.append('qr', payload.qr);

  const { data } = await axios.post<Clinics>('/clinics/my-clinic/files', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

/** `GET /clinics/dashboard` — clinic-scoped KPIs + YTD sales chart */
export type ClinicDashboardMetric = {
  value30Days: number;
  growth: number;
  valueYTD: number;
};

export type ClinicDashboardClients = {
  value30Days: number;
  growth: number;
  valueYTD: number;
  total: number;
};

export type ClinicDashboardSalesChartRow = {
  month: string;
  products: number;
  procedures: number;
};

export type ClinicDashboardData = {
  totalRevenue: ClinicDashboardMetric;
  totalProductsSold: ClinicDashboardMetric;
  totalProductsRevenue: ClinicDashboardMetric;
  totalClients: ClinicDashboardClients;
  totalProceduresSold: ClinicDashboardMetric;
  totalProceduresRevenue: ClinicDashboardMetric;
  salesChart: ClinicDashboardSalesChartRow[];
};

export const getClinicDashboard = async () => {
  const { data } = await axios.get<ClinicDashboardData>('/clinics/dashboard');
  return data;
};

// Admin (Super Admin?) Endpoints - possibly not used by Clinic App but good to have
export const getClinics = async (params?: any) => {
  const { data } = await axios.get<Clinics[]>('/clinics', { params });
  return data;
};

export const getClinicById = async (id: number) => {
  const { data } = await axios.get<Clinics>(`/clinics/${id}`);
  return data;
};

export const createClinic = async (payload: CreateClinicDto) => {
  const { data } = await axios.post<Clinics>('/clinics', payload);
  return data;
};

export const updateClinic = async (id: number, payload: UpdateClinicDto) => {
  const { data } = await axios.patch<Clinics>(`/clinics/${id}`, payload);
  return data;
};

export const deleteClinic = async (id: number) => {
  const { data } = await axios.delete(`/clinics/${id}`);
  return data;
};
