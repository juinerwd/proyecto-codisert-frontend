import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout'
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from "date-fns"

import { cn } from '../../../lib/utils';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card"
// import { useForm } from '../../../hooks/useForm'

import { BeneficiarioSchema, beneficiarioSchema } from '../schemas/registerUser';
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../components/ui/popover"
import { Calendar } from "../../../components/ui/calendar"
import { CalendarIcon } from 'lucide-react';
import SelectComponent from '../components/SelectComponent';
import { useBeneficiaryStore } from '../../../store/beneficiaryStore';
import MessageDialog from '../../../components/dialog-custom';

const CreateUser = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState({
        title: "",
        description: ""
    });
    const { createBeneficiary, loading, error } = useBeneficiaryStore();

    const form = useForm<BeneficiarioSchema>({
        resolver: zodResolver(beneficiarioSchema),
        defaultValues: {
            Nombre: "",
            Apellido: "",
            TipoDocumento_idTipoDocumento: "",
            NumeroDocumento: "",
            Telefono: "",
            Celular: "",
            Correo: "",
            FechaNacimiento: new Date(),
            Sexo_idSexo: "",
            CodigoDaneDpmto: "",
            CodigoDaneMunicipio: "",
            Departamento: "",
            Municipio: "",
            Direccion: "",
            Barrio: "",
            Estrato_idEstrato: "",
            Estado_idEstado: "1",
            FechaInicio: new Date(),
            FechaFin: new Date(),
            Anexo: "",
        }
    });

    const onSubmit:SubmitHandler<BeneficiarioSchema> = async (data) => {
        // console.log("Formulario enviado", data)

        const result = await createBeneficiary(data);
        setDialogMessage({
            title: "Registro exitoso",
            description: `${result?.message}`,
        });
        setIsDialogOpen(true);
    }

    return (
        <DashboardLayout>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className='text-2xl font-bold'>Registrar nuevo usuario</CardTitle>
                    <CardDescription>Intruduce los datos del nuevo usuario</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
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
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <SelectComponent
                                    form={form}
                                    name="TipoDocumento_idTipoDocumento"
                                    formLabel="Tipo de identificación"
                                    options={[
                                        { value: "1", label: "Cédula de Ciudadanía" },
                                        { value: "2", label: "Cédula de Extranjería" },
                                        { value: "3", label: "Pasaporte" },
                                    ]}
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
                                    name="Telefono"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Teléfono</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="tel"
                                                    placeholder="Número de teléfono"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Celular"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Celular</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="tel"
                                                    placeholder="Número de celular"
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
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <FormField
                                    control={form.control}
                                    name="FechaNacimiento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Fecha de nacimiento</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "dd/MM/yyyy")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        captionLayout='dropdown-buttons'
                                                        fromYear={1960}
                                                        toYear={(new Date()).getFullYear()}
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        disabled={(date) =>
                                                            date > new Date() || date < new Date("1900-01-01")
                                                        }
                                                        
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <SelectComponent
                                    form={form}
                                    name="Sexo_idSexo"
                                    formLabel="Sexo"
                                    options={[
                                        { value: "1", label: "Masculino" },
                                        { value: "2", label: "Femenino" },
                                        { value: "3", label: "Otro" },
                                    ]}
                                />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <SelectComponent
                                    form={form}
                                    name="CodigoDaneDpmto"
                                    formLabel="Código DANE Departamento"
                                    options={[
                                        { value: "05", label: "05" },
                                        { value: "08", label: "08" },
                                        { value: "11", label: "11" },
                                        { value: "13", label: "13" },
                                        { value: "15", label: "15" },
                                        { value: "17", label: "17" },
                                        { value: "18", label: "18" },
                                        { value: "19", label: "19" },
                                        { value: "20", label: "20" },
                                        { value: "23", label: "23" },
                                        { value: "25", label: "25" },
                                        { value: "27", label: "27" },
                                        { value: "41", label: "41" },
                                        { value: "44", label: "44" },
                                        { value: "47", label: "47" },
                                        { value: "50", label: "50" },
                                        { value: "52", label: "52" },
                                        { value: "54", label: "54" },
                                        { value: "63", label: "63" },
                                        { value: "66", label: "66" },
                                        { value: "68", label: "68" },
                                        { value: "70", label: "70" },
                                        { value: "73", label: "73" },
                                        { value: "76", label: "76" },
                                        { value: "81", label: "81" },
                                        { value: "85", label: "85" },
                                        { value: "86", label: "86" },
                                        { value: "88", label: "88" },
                                        { value: "91", label: "91" },
                                        { value: "94", label: "94" },
                                        { value: "95", label: "95" },
                                        { value: "97", label: "97" },
                                    ]}
                                />
                                <SelectComponent
                                    form={form}
                                    name="Departamento"
                                    formLabel="Departamento"
                                    options={[
                                        { value: "1", label: "Cauca" },
                                        { value: "2", label: "Valle del Cauca" },
                                        { value: "3", label: "Arauca" },
                                        { value: "4", label: "AMazonas" },
                                    ]}
                                />
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <SelectComponent
                                    form={form}
                                    name="CodigoDaneMunicipio"
                                    formLabel="Código DANE Municipio"
                                    options={[
                                        { value: "001", label: "001" },
                                        { value: "002", label: "002" },
                                        { value: "004", label: "004" },
                                        { value: "021", label: "021" },
                                    ]}
                                />
                                <SelectComponent
                                    form={form}
                                    name="Municipio"
                                    formLabel="Municipio"
                                    options={[
                                        { value: "1", label: "Cali" },
                                        { value: "2", label: "Buenaventura" },
                                        { value: "3", label: "Bolivar" },
                                        { value: "4", label: "Dagua" },
                                    ]}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="Direccion"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dirección</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Dirección"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <FormField
                                    control={form.control}
                                    name="Barrio"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Barrio</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Barrio"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <SelectComponent
                                    form={form}
                                    name="Estrato_idEstrato"
                                    formLabel="Estrato"
                                    options={[
                                        { value: "1", label: "Estrato 1" },
                                        { value: "2", label: "Estrato 2" },
                                        { value: "3", label: "Estrato 3" },
                                        { value: "4", label: "Estrato 4" },
                                        { value: "5", label: "Estrato 5" },
                                        { value: "6", label: "Estrato 6" },
                                    ]}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="FechaInicio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fecha de inicio de operación</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "dd/MM/yyyy")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    captionLayout='dropdown-buttons'
                                                    fromYear={(new Date()).getFullYear()}
                                                    toYear={(new Date()).getFullYear()}
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date > new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Anexo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Anexo</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                placeholder="Anexo"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-end items-center pt-10'>
                                <Button className='w-52' type="submit">
                                    {loading ? 'Guardando...' : 'Registrar usuario'}
                                </Button>
                            </div>
                            {error && <div className='flex justify-center items-center'>
                                <p className="text-red-500">{error}</p>
                            </div>}
                        </form>
                    </Form>
                </CardContent>
            </Card>
            {isDialogOpen && <MessageDialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} {...dialogMessage} />}
        </DashboardLayout>
    )
}

export default CreateUser