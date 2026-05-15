import axios from 'axios';
import type { ClinicUsers } from 'types/Clinics';
import { UserRole } from 'types/user';

// --- Types ---

export interface LoginDto {
  email: string;
  password?: string;
}

export interface ClinicLoginVerifyDto {
  otp: string;
}

export interface VerifyPinCodeDto {
  pin: string;
  tempToken: string;
}

export interface TokenDto {
  access_token: string;
  refresh_token: string;
  hasChangedPassword: boolean;
}

export interface ForgotPasswordDto {
  email: string;
  phoneNumber: string;
}

export interface LoginVerifyDto {
  otp: string;
  email: string;
}

export interface ResendDto {
  userId: number;
}

export const loginClinic = async (payload: LoginDto) => {
  const { data } = await axios.post<{ tempToken?: string; role: UserRole }>(
    '/clinics/login',
    payload
  );
  return data;
};

export const verifyClinicOtp = async (payload: ClinicLoginVerifyDto) => {
  const { data } = await axios.post<TokenDto>('/clinics/login/verify', payload);
  return data;
};
export const verifyClinicPinCode = async ({
  pin,
  tempToken
}: {
  pin: string;
  tempToken: string;
}) => {
  const { data } = await axios.post<TokenDto>('/clinics/pin-code/verify', {
    pin,
    tempToken
  });
  return data;
};

export const refreshToken = async (token: string) => {
  const { data } = await axios.post<TokenDto>(
    '/clinics/refresh-token',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return data;
};

export const forgotPassword = async (email: string) => {
  const { data } = await axios.post('/clinics/forgot-password', { email });
  return data;
};
export const verifyForgotPasswordOtp = async (payload: ClinicLoginVerifyDto) => {
  const { data } = await axios.post<TokenDto>('/clinics/forgot-password/verify', payload);
  return data;
};
export const changePassword = async (payload: { password: string }) => {
  const { data } = await axios.post('/clinics/change-password', payload);
  return data;
};
export const resetPassword = async (payload: { password: string; otp: string }) => {
  const { data } = await axios.post('/clinics/forgot-password/set-password', payload);
  return data;
};

export const getInfoUser = async () => {
  const { data } = await axios.get<ClinicUsers>('/clinic-users/me');
  return data;
};
