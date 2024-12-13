import { z } from "zod";

export const registerSchema = z.object({
  patient: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must not exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    contactNumber: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number must not exceed 15 digits"),
    address: z
      .string()
      .min(5, "Address must be at least 5 characters long")
      .optional(),
  }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must not exceed 20 characters"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
