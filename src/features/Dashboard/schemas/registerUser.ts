import { z } from 'zod';

const ACCEPTED_FILE_TYPES = ["image/png", "image/jpg", "image/jpeg", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export const beneficiarioSchema = z.object({
    Nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    Apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    TipoDocumento_idTipoDocumento: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    NumeroDocumento: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    FechaNacimiento: z.date({
        required_error: "La fecha de nacimiento no es válida"
    }),
    Telefono: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    Celular: z.string().regex(/^\d{10}$/, "Número de celular incorrecto"),
    Correo: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    FechaInicio: z.date({
        required_error: "La fecha de inicio de operación no es válida"
    }).min(new Date(), "La fecha de inicio de operación no puede ser anterior a la fecha actual"),
    FechaFin: z.date().min(new Date(), "La fecha de finalización de operación no puede ser anterior a la fecha actual").optional(),
    CodigoDaneDpmto: z.string().min(1, "Debes seleccionar un código DANE"),
    Departamento: z.string().min(1, "Debes seleccionar un departamento"),
    CodigoDaneMunicipio: z.string().min(1, "Debes seleccionar un código DANE"),
    Municipio: z.string().min(1, "Debes seleccionar un municipio"),
    Direccion: z.string().min(2, "Debes ingresar una dirección"),
    Barrio: z.string().min(2, "Debes ingresar una dirección"),
    Estrato_idEstrato: z.string().regex(/^\d{1}$/, "Número de estrato incorrecto"),
    Anexo: z.string().min(2, "Debes ingresar una dirección"),
    Estado_idEstado: z.string().min(1, "Debes seleccionar un estado"),
    Sexo_idSexo: z.string().min(1, "Debes seleccionar un sexo"),
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
            ),
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

export const uploadDocumentsSchema = z.object({
    documents: z.array(
        z.object({
            file: z
                .any()
                .superRefine((file, ctx) => {
                    // Validar que sea un archivo
                    if (!(file instanceof File)) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: "No hay archivo seleccionado.",
                        });
                        return;
                    }
                    // Validar tipo de archivo
                    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message:
                                "Tipos de archivos permitidos: PNG, JPG, JPEG, PDF, DOC, DOCX",
                        });
                    }
                    // Validar tamaño de archivo
                    if (file.size > 1024 * 1024 * 5) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: "El archivo debe ser menor a 5MB.",
                        });
                    }
                }),
            NombreDocumento: z
                .string()
                .trim()
                .min(1, 'El nombre del archivo es obligatorio'),
        })
    )
})

export const adminSchema = z.object({
    Nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    Apellido: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
    TipoDocumento_idTipoDocumento: z.string().min(1, "Debes seleccionar un tipo de identificación"),
    NumeroDocumento: z.string().trim().regex(/^\d{6,10}$/, "Número de identificación incorrecto"),
    Correo: z.string().trim().toLowerCase().email("El correo electrónico no es válido"),
    Telefono: z.string().trim().regex(/^\d{6,10}$/, "Número de teléfono incorrecto"),
    Password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    Estado_idEstado: z.string().min(1, "Debes seleccionar un estado"),
    Rol_idRol: z.string().min(1, "Debes seleccionar un rol"),
    Sexo_idSexo: z.string().min(1, "Debes seleccionar un sexo"),
})
export const changePasswordSchema = z.object({
    currentPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    newPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
    confirmNewPassword: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
})


export type AdminSchema = z.infer<typeof adminSchema>;
export type BeneficiarioSchema = z.infer<typeof beneficiarioSchema>;
export type BeneficiaryDocumentSchema = z.infer<typeof beneficiaryDocumentSchema>;
export type UploadDocumentsSchema = z.infer<typeof uploadDocumentsSchema>;
export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
