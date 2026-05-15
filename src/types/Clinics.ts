import type { FormattedUserSales } from 'services/clinic-users';
import { UserRole } from 'types/user';

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
  role: UserRole;
  isActive: boolean;
  refreshToken?: string;
  refreshTokenExpiredAt?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  /** Present on `GET /clinic-users/me` with dashboard metrics. */
  sales?: FormattedUserSales;
}

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
  clinicUsers?: ClinicUsers[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}
