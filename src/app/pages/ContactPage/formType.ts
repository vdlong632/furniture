import z from 'zod';

export const FormContactSchema = z.object({
  name: z.string().min(1, 'Your Name is required'),
  email: z.string().min(1, 'Email is required'),
  subject: z.string().optional(),
  messager: z.string().optional()
});

export type TypeContactForm = z.infer<typeof FormContactSchema>;
