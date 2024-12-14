import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminSchema, AdminSchema } from '../schemas/registerUser';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import Tooltip from './TooltipComponent';
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import {
    Form,
    FormItem,
    FormLabel,
    FormField,
    FormMessage,
    FormControl
} from '../../../components/ui/form'
import {
    Select,
    SelectItem,
    SelectLabel,
    SelectValue,
    SelectGroup,
    SelectTrigger,
    SelectContent
} from '../../../components/ui/select'

interface Props {
    // text: string
    icon?: React.ReactNode
    // children?: React.ReactNode
}

const UpdateAdmin = ({ icon }: Props) => {
    const form = useForm<AdminSchema>({
        resolver: zodResolver(adminSchema),
        defaultValues: {
            name: "",
            lastname: "",
            identification_type: "",
            identification_number: "",
            telephone: "",
            email: "",
            role: "",
        }

    });

    const onSubmit = (data: AdminSchema) => {
        console.log("Formulario enviado", data)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='p-0 size-7 w-7 h-7'>
                    <Tooltip text="Editar Beneficiario" icon={icon} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[720px] h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Actualizar Administrador</DialogTitle>
                    <DialogDescription>
                        Intruduce los datos a cambiar del administrador
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='overflow-y-auto space-y-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nombre</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Joe"
                                                className='border-gray-500 dark:border-gray-800'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Apellidos</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Doe"
                                                className='border-gray-500 dark:border-gray-800'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> 
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="identification_type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tipo de identificación</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                                    <SelectValue placeholder="Selecciona una opción" />
                                                </SelectTrigger>
                                                <SelectContent className='border-gray-500 dark:border-gray-800'>
                                                    <SelectGroup>
                                                        <SelectLabel>Selecciona una opción</SelectLabel>
                                                        <SelectItem value="CC">Cédula de Ciudadanía</SelectItem>
                                                        <SelectItem value="TI">Tarje de Indentidad</SelectItem>
                                                        <SelectItem value="CE">Cédula de Extranjería</SelectItem>
                                                        <SelectItem value="PA">Pasaporte</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="identification_number"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Número de identificación</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder=""
                                                className='border-gray-500 dark:border-gray-800'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo electrónico</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="example@example.com"
                                            className='border-gray-500 dark:border-gray-800'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="telephone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Teléfono</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder="Número de teléfono"
                                                className='border-gray-500 dark:border-gray-800'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Rol</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                                    <SelectValue placeholder="Selecciona una opción" />
                                                </SelectTrigger>
                                                <SelectContent className='border-gray-500 dark:border-gray-800'>
                                                    <SelectGroup>
                                                        <SelectLabel>Selecciona una opción</SelectLabel>
                                                        <SelectItem value="admin">Administrador</SelectItem>
                                                        <SelectItem value="AL">Administrador Lector</SelectItem>
                                                        <SelectItem value="AR">Administrador Registrador</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='flex justify-end items-center'>
                            <Button type="submit">Actualizar usuario</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateAdmin