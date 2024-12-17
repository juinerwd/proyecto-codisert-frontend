import { z } from 'zod';

export const beneficiarioSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastname: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    identification_type: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    identification_number: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    telephone: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    celular: z.string().regex(/^\d{10}$/, "Número de celular incorrecto"),
    email: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    stratum: z.string().regex(/^\d{1}$/, "Número de estrato incorrecto"),
    start_operation: z.date({
        required_error: "La fecha de inicio de operación no es válida"
    }).min(new Date(), "La fecha de inicio de operación no puede ser anterior a la fecha actual"),
    end_operation: z.date().min(new Date(), "La fecha de finalización de operación no puede ser anterior a la fecha actual").optional(),
    department_code: z.string().min(1, "Debes seleccionar un código DANE"),
    department: z.string().min(1, "Debes seleccionar un departamento"),
    municipality_code: z.string().min(1, "Debes seleccionar un código DANE"),
    municipality: z.string().min(1, "Debes seleccionar un municipio"),
    address: z.string().min(2, "Debes ingresar una dirección"),
});

export const beneficiaryDocumentSchema = z.object({
    contrato: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    copia_cc: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    copia_ds: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("application/pdf")),
                "El archivo debe ser de tipo pdf"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    foto_fp: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    velocidad_internet: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    cpe: z.object({
        file: z.custom<File | undefined>()
            .refine(
                (file) =>
                    !file || (file instanceof File && file.type.startsWith("image/")),
                "El archivo debe ser de tipo imagen"
            )
            .refine(
                (file) =>
                    !file || file.size < 1024 * 1024 * 5,
                "El archivo debe ser menor a 5MB"
            )
    }),
    info_adicional: z.string().optional(),
})

export const adminSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    lastname: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    identification_type: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    identification_number: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    telephone: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    email: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    role: z.string().min(1, "Debes seleccionar un rol"),
})


export type AdminSchema = z.infer<typeof adminSchema>;
export type BeneficiarioSchema = z.infer<typeof beneficiarioSchema>;
export type BeneficiaryDocumentSchema = z.infer<typeof beneficiaryDocumentSchema>;
