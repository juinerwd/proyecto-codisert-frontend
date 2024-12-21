import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { uploadDocumentsSchema, UploadDocumentsSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'

const UserDocuments = () => {
    const form = useForm<UploadDocumentsSchema>({
        resolver: zodResolver(uploadDocumentsSchema),
        defaultValues: {
            documents: [
                {
                    NombreDocumento: 'Copia del Contrato de Prestación de Servicios',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Copia del documento de identidad del Usuario',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Copia de la declaración del suscriptor',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Foto de la fachada del predio del Usuario',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Pantallazo de la prueba de velocidad del internet',
                    file: undefined,
                },
                {
                    NombreDocumento: 'Fotografía del número serial del equipo CPE instalado',
                    file: undefined,
                },
            ],
        }
    });
    
    const { fields } = useFieldArray({
        control: form.control,
        name: 'documents',
    })

    const onSubmit = (data: UploadDocumentsSchema) => {
        console.log("Formulario enviado", data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <div key={field.id} className="my-5">
                        <FormField
                            control={form.control}
                            name={`documents.${index}.file`}
                            render={({ field: { value, ...fieldValues } }) => (
                                <FormItem>
                                    <FormLabel>{field.NombreDocumento}</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...fieldValues}
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                fieldValues.onChange(file);
                                            }}
                                            className='border-gray-500 dark:border-gray-800'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                ))}
                <div className='flex justify-end items-center'>
                    <Button type="submit">Guardar documentos</Button>
                </div>
            </form>
        </Form>
    )
}

export default UserDocuments