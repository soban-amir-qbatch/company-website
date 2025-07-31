import {z} from 'zod';

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  name: z.string(),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string(),
  address: z.string(),
  phone: z.string().trim(),
  website: z.url("Invalid URL").optional(),
  zipCode: z.string(),
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})
.refine(data => data.phone.length === 12 && data.phone[4]==='-' && !data.phone.includes(' '), {
  message: "Invalid phone number",
  path: ["phone"],
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
