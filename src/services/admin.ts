import axios from 'axios';
import { ParamsBaseGet } from 'types/common';
import * as qs from 'qs';

export const adminGetUser = async (params: Partial<ParamsBaseGet & { keyword: string }>) => {
  const query = qs.stringify({
    ...params
  });
  const { data } = await axios.get(`/admin/users?${query}`);
  return data;
};

export type PayloadCreateUSer = {
  name: string;
  email: string;
  role: string;
  clientIds?: number[];
  restrictions?: {
    reports: boolean;
    documentation: boolean;
    validation: boolean;
  };
};
export const adminCreateUser = (payload: PayloadCreateUSer) => axios.post('/admin/users', payload);
export const adminUpdateUser = (id: number, payload: PayloadCreateUSer) =>
  axios.put(`/admin/users/${id}`, payload);

export const adminDeleteUser = (id: number) => axios.delete(`/admin/users/${id}`);

export const createProfilePic = async (userId: number, formData: FormData) => {
  const resUrlRecord = await axios.post(`/storages/users/${userId}`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return resUrlRecord.data.url;
};

export const deletePicProfile = (photoId: number) => axios.delete(`/storages/users/${photoId}`);

export const adminBlockUser = (id: number) => axios.put(`/admin/users/${id}/lock`);

/**
 * Get dropdown values for the form
 */
export const getOptions = async () => {
  const { data } = await axios.get('/system/dropdown-values');
  return data;
};
