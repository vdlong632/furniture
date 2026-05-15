import { z } from 'zod';

export const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;

export const RequiredField = 'This field is required';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, RequiredField)
    .refine((val) => emailRegex.test(val), {
      message: 'Email invalid'
    }),
  password: z
    .string()
    .min(1, RequiredField)
    .refine((val) => val === '' || val.length >= 8, 'Password must be at least 8 characters')
});

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, 'Password is required')
      .refine((val) => val === '' || val.length >= 8, 'Password must be at least 8 characters'),
    newPassword: z
      .string()
      .min(1, 'New Password is required')
      .refine((val) => val === '' || val.length >= 8, 'Password must be at least 8 characters'),
    confirmNewPassword: z.string().min(1, 'Confirm New Password is required')
  })
  .refine((data) => data.newPassword !== data.currentPassword, {
    message: 'The new password cannot be the same as the current password.',
    path: ['newPassword']
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords do not match. Please retype both fields.',
    path: ['confirmNewPassword']
  });

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, RequiredField)
    .refine((val) => val === '' || emailRegex.test(val), 'Email invalid')
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, RequiredField)
      .refine((val) => val === '' || val.length >= 8, 'Password must be at least 8 characters')
      .refine((val) => val === '' || val.length <= 16, 'Password must be at most 16 characters')
      .refine(
        (val) => val === '' || /[A-Z]/.test(val),
        'Must contain at least one uppercase letter'
      )
      .refine(
        (val) => val === '' || /[a-z]/.test(val),
        'Must contain at least one lowercase letter'
      )
      .refine((val) => val === '' || /[0-9]/.test(val), 'Must contain at least one number')
      .refine(
        (val) => val === '' || /[!@#$%^&*(),.?":{}|<>]/.test(val),
        'Must contain at least one special character'
      )
      .refine((val) => val === '' || /^\S*$/.test(val), 'Password must not contain spaces'),
    confirmPassword: z.string().min(1, 'Confirm password is required')
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
  });

export const FormAddUserSchema = z
  .object({
    isEdit: z.boolean().optional(),
    email: z
      .string()
      .min(1, RequiredField)
      .refine((val) => val === '' || emailRegex.test(val), 'Email invalid'),
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    username: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    location: z.string().optional(),
    bio: z.string().optional(),
    phone: z.string().optional()
  })
  .superRefine((data, ctx) => {
    if (!data.isEdit) {
      if (!data.password || data.password.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: !data.password ? RequiredField : 'Password must be at least 8 characters',
          path: ['password']
        });
      }
    }
  });
