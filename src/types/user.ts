export enum UserRole {
  CLINIC_ADMIN = 'CLINIC_ADMIN',
  CLINIC_PROVIDER = 'CLINIC_PROVIDER',
  CLINIC_ADVISOR = 'CLINIC_ADVISOR',
  CLINIC_STAFF = 'CLINIC_STAFF'
}

export type User = {
  id: number;
  role: UserRole;
  phone: string;
  email: string;
  password: string;
  birthday: string;
  firstname: string;
  lastname: string;
  username: string;
  address: string;
  city: string;
  location: string;
  bio: string;
  createdAt: string;
};
