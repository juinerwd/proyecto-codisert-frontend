import React, { useState } from 'react';
import { z } from 'zod';

// Interfaz para el estado del formulario
// interface UseFormProps<T> {

//     initialValues: T;
//   }


export const useForm = <T extends z.ZodObject<any>>(schema: T, initialValues: z.infer<T>) => {
  
    const [ formState, setFormState ] = useState<z.infer<T>>( initialValues );
    const [ errors, setErrors ] = useState<Record<keyof z.infer<T>, string | null>>(
        {} as Record<keyof z.infer<T>, string | null>
    );

    const onInputChange = ({ target }:
        React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = target;

        if (
            target.name === 'contrato' || 
            target.name === 'copia_cc' || 
            target.name === 'copia_ds' || 
            target.name === 'foto_fp' || 
            target.name === 'velocidad_internet' || 
            target.name === 'cpe'
        ) {
            const file = files?.[0] || null;
            setFormState((prev) => ({ ...prev, [name]: file}));
        } else {
            setFormState((prev) => ({ ...prev, [name]: value }));
        }


        if (schema.shape[name as keyof z.infer<T>]) { 
            try {
                schema.shape[name as keyof z.infer<T>].parse(value);
                setErrors((prev) => ({ ...prev, [name]: null }));
            } catch (err) {
                if (err instanceof z.ZodError) {
                    setErrors((prev) => ({ ...prev, [name]: err.errors[0]?.message || null}));
                }
            }
        }
    };

    const handleSubmit = (callback: (data: z.infer<T>) => void) => (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const parsedData = schema.parse(formState);
            callback(parsedData);
        } catch (err) {
            if (err instanceof z.ZodError) {
                const fieldErrors: Record<keyof T, string | null> = {} as Record<keyof T, string | null>;
                err.errors.forEach(({ path, message }) => {
                    const key = path[0] as keyof z.infer<T>;
                    fieldErrors[key] = message;
                });
                setErrors(fieldErrors);
            }
        }
    }

    const onResetForm = () => {
        setFormState( initialValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        handleSubmit,
        errors,
        onResetForm,
    }
}