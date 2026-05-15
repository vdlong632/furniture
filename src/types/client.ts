export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female'
}
export interface Client {
  id?: number;
  clinicId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
  gender: string;
  visits: number;
}
