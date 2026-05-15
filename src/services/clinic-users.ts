import axios from 'axios';
import { ParamsBaseGet } from 'types/common';

// --- Types ---
/** Matches `getFormattedUserSales` from clinic-users.service (BE) */
export interface FormattedUserSales {
  intakes30Days: string;
  intakesYTD: number;
  skincareRecommendation30Days: string;
  skincareRecommendationYTD: number;
  skincareRevenue30Days: string;
  skincareRevenueYTD: number;
  skincareConversionRate30Days: number;
  skincareConversionRateYTD: number;
  treatmentRecommendation30Days: string;
  treatmentRecommendationYTD: number;
  treatmentRevenue30Days: string;
  treatmentRevenueYTD: number;
  treatmentConversionRate30Days: number;
  treatmentConversionRateYTD: number;
}

export interface ClinicUsers {
  id: number;
  clinicId: number;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  hashPassword?: string;
  photoUrl?: string;
  nurseId?: string;
  role: 'CLINIC_STAFF' | 'CLINIC_ADMIN' | 'CLINIC_PROVIDER' | 'CLINIC_ADVISOR';
  isActive: boolean;
  refreshToken?: string;
  refreshTokenExpiredAt?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface ClinicUserWithSales extends ClinicUsers {
  sales: FormattedUserSales;
}

export interface CreateClinicUserDto {
  email: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  role: string; // 'CLINIC_STAFF' | 'CLINIC_ADMIN'
  phone?: string;
  isActive?: boolean;
}

export interface UpdateClinicUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  phone?: string;
  isActive?: boolean;
  password?: string;
}

// --- Services ---

// Get Clinic Users (Clinic Admin)
export const getClinicUsers = async (params: ParamsBaseGet) => {
  const { data } = await axios.get<{ list: ClinicUsers[]; total: number }>('/clinic-users', {
    params
  });
  return data;
};

// Get Clinic User By Id (Clinic Admin)
export const getClinicUserById = async (id: number) => {
  const { data } = await axios.get<ClinicUsers>(`/clinic-users/${id}`);
  return data;
};

// Create Clinic User (Clinic Admin)
export const createClinicUser = async (payload: CreateClinicUserDto) => {
  const { data } = await axios.post<ClinicUsers>('/clinic-users', payload);
  return data;
};

// Import Clinic Users (Clinic Admin)
export const importClinicUsers = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await axios.post('/clinic-users/import', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

// Update Clinic User (Clinic Admin)
export const updateClinicUser = async (id: number, payload: UpdateClinicUserDto) => {
  const { data } = await axios.patch<ClinicUsers>(`/clinic-users/${id}`, payload);
  return data;
};

// Delete Clinic User (Clinic Admin)
export const deleteClinicUser = async (id: number) => {
  const { data } = await axios.delete(`/clinic-users/${id}`);
  return data;
};

// Get Clinic Providers
export const getClinicProviders = async (params?: ParamsBaseGet) => {
  const { data } = await axios.get<{ list: ClinicUsers[]; total: number }>(
    '/clinic-users/providers',
    {
      params
    }
  );
  return data;
};

// Get Clinic Advisors
export const getClinicAdvisors = async (params?: ParamsBaseGet) => {
  const { data } = await axios.get<{ list: ClinicUsers[]; total: number }>(
    '/clinic-users/advisors',
    {
      params
    }
  );
  return data;
};

// Get Clinic Users Summary
export const getClinicUsersSummary = async () => {
  const { data } = await axios.get<{ totalAdvisors: number; totalProviders: number }>(
    '/clinic-users/summary'
  );
  return data;
};

/** Users with per-user sales metrics (Admin / Staff only on BE) */
export const getClinicUsersWithSales = async (params: ParamsBaseGet) => {
  const { data } = await axios.get<{ list: ClinicUserWithSales[]; total: number }>(
    '/clinic-users/sales',
    { params }
  );
  return data;
};

/** XLSX export — matches `GET /clinic-users/sales/export` */
export const exportClinicUsersSalesXlsx = async () => {
  const response = await axios.get('/clinic-users/sales/export', {
    responseType: 'blob'
  });
  const blob = response.data;
  const fileName = `sales_${new Date().toISOString().split('T')[0]}.xlsx`;
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(objectUrl);
  link.remove();
};

/** Matches `getAlerts` in clinic-users.service (BE) — client analyses for current provider. */
export interface IntakeAlertAnalysis {
  id: number | string;
  createdAt: string;
  client: {
    id: number | string;
    firstName?: string | null;
    lastName?: string | null;
    birthday?: string | null;
  };
}

export interface ClinicUserAlertsResponse {
  alerts: IntakeAlertAnalysis[];
  activeIntakes: IntakeAlertAnalysis[];
}

export const getClinicUserAlerts = async () => {
  const { data } = await axios.get<ClinicUserAlertsResponse>('/clinic-users/alerts');
  return data;
};
