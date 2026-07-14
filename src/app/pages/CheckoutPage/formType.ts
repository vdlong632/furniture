import { emailRegex, phoneRegex, zipRegex } from 'utils/validate';
import z from 'zod';

export const FormBillingSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  companyName: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  street: z.string().min(1, 'Street is required'),
  town: z.string().min(1, 'Town is required'),
  province: z.string().min(1, 'Provine is required'),
  zipCode: z
    .string()
    .min(1, 'ZIP code is required')
    .refine((value) => zipRegex.test(value), 'Invalid zip code'),
  phone: z
    .string()
    .min(1, 'Phone Number is required')
    .refine((value) => phoneRegex.test(value), 'Invalid phone number'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((value) => emailRegex.test(value), 'Invalid email address'),
  additional: z.string().optional(),
  orderOption: z.string().min(1, 'Order Option required')
});

export type TypeBillingForm = z.infer<typeof FormBillingSchema>;
