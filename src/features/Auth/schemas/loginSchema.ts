import { z } from 'zod';

export const loginSchema = z.object({
    NumeroDocumento: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    Password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});


export type LoginSchema = z.infer<typeof loginSchema>;