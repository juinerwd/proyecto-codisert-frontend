import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { beneficiaryDocumentSchema, BeneficiaryDocumentSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Textarea } from "../../../../components/ui/textarea"
import { Input } from "../../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'

const UserDocuments = () => {

    const form = useForm<BeneficiaryDocumentSchema>({
        resolver: zodResolver(beneficiaryDocumentSchema),
        defaultValues: {
            contrato: undefined,
            copia_cc: undefined,
            copia_ds: undefined,
            foto_fp: undefined,
            velocidad_internet: undefined,
            cpe: undefined,
            info_adicional: "",
        }
    });

    const onSubmit = (data: BeneficiaryDocumentSchema) => {
        console.log("Formulario enviado", data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='overflow-y-auto space-y-5'>
                <FormField
                    control={form.control}
                    name="contrato"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Copia del Contrato de Prestación de Servicios</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='application/pdf'
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
                <FormField
                    control={form.control}
                    name="copia_cc"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Copia del documento de identidad del Usuario</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='application/pdf'
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
                <FormField
                    control={form.control}
                    name="copia_ds"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Copia de la declaración del suscriptor</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='application/pdf'
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
                <FormField
                    control={form.control}
                    name="foto_fp"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Foto de la fachada del predio del Usuario</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='image/*'
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
                <FormField
                    control={form.control}
                    name="velocidad_internet"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Pantallazo de la prueba de velocidad del internet</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='image/*'
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
                <FormField
                    control={form.control}
                    name="cpe"
                    render={({ field: { value, ...fieldValues } }) => (
                        <FormItem>
                            <FormLabel>Fotografía del número serial del equipo CPE instalado</FormLabel>
                            <FormControl>
                                <Input
                                    {...fieldValues}
                                    type="file"
                                    accept='image/*'
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
                <FormField
                    control={form.control}
                    name="info_adicional"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Información adicional</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Información adicional"
                                    className='border-gray-500 dark:border-gray-800'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex justify-end items-center'>
                    <Button type="submit">Guardar documentos</Button>
                </div>
            </form>
        </Form>
    )
}

export default UserDocuments