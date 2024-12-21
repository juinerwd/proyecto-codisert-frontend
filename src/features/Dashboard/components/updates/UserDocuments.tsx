import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { uploadDocumentsSchema, UploadDocumentsSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { useDocumentStore } from '../../../../store/documentStore';
import MessageDialog from '../../../../components/dialog-custom';

interface Props {
    idUser: string | number;
}

const UserDocuments = ({ idUser }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
        const [dialogMessage, setDialogMessage] = useState({
            title: "",
            description: ""
        });
    const { saveDocument } = useDocumentStore();
    const form = useForm<UploadDocumentsSchema>({
        resolver: zodResolver(uploadDocumentsSchema),
        defaultValues: {
            documents: [
                {
                    TipoDocumento: 'Copia del Contrato de Prestación de Servicios',
                    NombreDocumento: 'contrato',
                    file: undefined,
                },
                {
                    TipoDocumento: 'Copia del documento de identidad del Usuario',
                    NombreDocumento: 'dni',
                    file: undefined,
                },
                {
                    TipoDocumento: 'Copia de la declaración del suscriptor',
                    NombreDocumento: 'declaracion',
                    file: undefined,
                },
                {
                    TipoDocumento: 'Foto de la fachada del predio del Usuario',
                    NombreDocumento: 'fachada',
                    file: undefined,
                },
                {
                    TipoDocumento: 'Pantallazo de la prueba de velocidad del internet',
                    NombreDocumento: 'test',
                    file: undefined,
                },
                {
                    TipoDocumento: 'Fotografía del número serial del equipo CPE instalado',
                    NombreDocumento: 'serial',
                    file: undefined,
                },
            ],
        }
    });

    const { fields } = useFieldArray({
        control: form.control,
        name: 'documents',
    })

    const onSubmit = async(data: UploadDocumentsSchema) => {
        const formData = new FormData();
        data.documents.forEach(d => {
            if (d.file) {
                formData.append(d.NombreDocumento, d.file);
            }
           
            if (d.TipoDocumento) {
                formData.append(d.NombreDocumento + '_TipoDocumento', d.TipoDocumento);
            }
        });

        await saveDocument(idUser, formData);
        setDialogMessage({
            title: "Dacumentos guardados",
            description: "Los documentos han sido guardados correctamente",
        });
        setIsDialogOpen(true);
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                        <div key={field.id} className="my-5">
                            <FormField
                                control={form.control}
                                name={`documents.${index}.file`}
                                render={({ field: { value, ...fieldValues } }) => (
                                    <FormItem>
                                        <FormLabel>{field.TipoDocumento}</FormLabel>
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
            {isDialogOpen && <MessageDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} {...dialogMessage} />}
        </>
    )
}

export default UserDocuments