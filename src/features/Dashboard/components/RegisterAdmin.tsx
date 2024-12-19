
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAdminStore } from '../../../store/adminStore';

import { Button } from "../../../components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import { Input } from "../../../components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import { adminSchema, AdminSchema } from '../schemas/registerUser'


const RegisterAdmin = () => {
    const { createAdmin, loading, error } = useAdminStore();

    const form = useForm<AdminSchema>({
        resolver: zodResolver(adminSchema),
        defaultValues: {
            Nombre: "",
            Apellido: "",
            TipoDocumento_idTipoDocumento: "",
            NumeroDocumento: "",
            Correo: "",
            Telefono: "",
            Password: "T10F8DA0",
            Estado_idEstado: "1",
            Rol_idRol: "2",
            Sexo_idSexo: "1",
        }

    });

    const onSubmitRegister: SubmitHandler<AdminSchema> = async (data) => {
        // sconsole.log("Formulario enviado", data)
        await createAdmin(data);

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Registrar admin</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[720px] h-[90vh]">
                <DialogHeader>
                    <DialogTitle>Registrar nuevo administrador</DialogTitle>
                    <DialogDescription>
                        Intruduce los datos del nuevo administrador
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitRegister)} className='overflow-y-auto space-y-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="Nombre"
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
                                name="Apellido"
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
                                name="TipoDocumento_idTipoDocumento"
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
                                                        <SelectItem value="1">Cédula de Ciudadanía</SelectItem>
                                                        <SelectItem value="2">Cédula de Extranjería</SelectItem>
                                                        <SelectItem value="3">Pasaporte</SelectItem>
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
                                name="NumeroDocumento"
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
                            name="Correo"
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
                                name="Telefono"
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
                                name="Sexo_idSexo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Genero</FormLabel>
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
                                                        <SelectItem value="1">Masculino</SelectItem>
                                                        <SelectItem value="2">Femenino</SelectItem>
                                                        <SelectItem value="3">Otro</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <FormField
                                control={form.control}
                                name="Estado_idEstado"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Estado</FormLabel>
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
                                                        <SelectItem value="1">Activo</SelectItem>
                                                        <SelectItem value="2">Inactivo</SelectItem>
                                                        <SelectItem value="3">Operativo</SelectItem>
                                                        <SelectItem value="4">Suspendido</SelectItem>
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
                                name="Rol_idRol"
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
                                                        <SelectItem value="1">Super Administrador</SelectItem>
                                                        <SelectItem value="2">Administrador Registrador</SelectItem>
                                                        <SelectItem value="3">Administrador Lector</SelectItem>
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
                            <Button type='submit'>
                                {loading ? 'Guardando...' : 'Crear administrador'}
                            </Button>
                        </div>
                        {error && <div className='flex justify-center items-center'>
                            <p className="text-red-500">{error}</p>
                        </div>}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default RegisterAdmin