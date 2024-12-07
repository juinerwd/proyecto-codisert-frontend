import React, { useState } from 'react';

// Interfaz para el estado del formulario
interface UseFormProps<T> {
    initialValues: T;
  }


export const useForm = <T extends Record<string, any>>({ initialValues }: UseFormProps<T>) => {
  
    const [ formState, setFormState ] = useState<T>( initialValues );

    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}