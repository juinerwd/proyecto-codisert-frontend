import { z } from 'zod';

export const registerUserSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastname: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    identification_type: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    identification_number: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    telephone: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    celular: z.string().regex(/^\d{10}$/, "Número de celular incorrecto"),
    email: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    stratum: z.string().regex(/^\d{1}$/, "Número de estrato incorrecto"),
    start_operation: z.date().min(new Date(), "La fecha de inicio de operación no puede ser anterior a la fecha actual"),
    end_operation: z.date().min(new Date(), "La fecha de finalización de operación no puede ser anterior a la fecha actual").optional(),
    department_code: z.string().min(1, "Debes seleccionar un código DANE"),
    department: z.string().min(1, "Debes seleccionar un departamento"),
    municipality_code: z.string().min(1, "Debes seleccionar un código DANE"),
    municipality: z.string().min(1, "Debes seleccionar un municipio"),
    address: z.string().min(2, "Debes ingresar una dirección"),
    contrato: z.object({
        file: z
            .instanceof(File, {message: "Debes ser un archivo válido"})
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["pdf", "jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo pdf, jpg, jpeg o png")
            .optional()
            .refine((file) => file !== undefined, "Debes seleccionar un archivo")
    }).optional(),
    copia_cc: z.object({
        file: z
            .instanceof(File)
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["pdf", "jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo pdf, jpg, jpeg o png"),
    }).optional(),
    copia_ds: z.object({
        file: z
            .instanceof(File)
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["pdf", "jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo pdf, jpg, jpeg o png"),
    }).optional(),
    foto_fp: z.object({
        file: z
            .instanceof(File)
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo jpg, jpeg o png"),
    }).optional(),
    velocidad_internet: z.object({
        file: z
            .instanceof(File)
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo jpg, jpeg o png"),
    }).optional(),
    cpe: z.object({
        file: z
            .instanceof(File)
            .refine((file) => file.size < 1024 * 1024 * 5, "El archivo debe ser menor a 5MB")
            .refine((file) => ["jpg", "jpeg", "png"].includes(file.type), "El archivo debe ser de tipo jpg, jpeg o png"),
    }).optional(),
});

export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
