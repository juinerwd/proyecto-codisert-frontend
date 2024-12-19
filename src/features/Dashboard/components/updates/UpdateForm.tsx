import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns';

import { CalendarIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

import { BeneficiarioSchema, beneficiarioSchema } from '../../schemas/registerUser';
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../components/ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../../components/ui/select'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../../components/ui/popover"
import { Calendar } from "../../../../components/ui/calendar"
import { BeneficiaryData } from '../../types';
import { useBeneficiaryStore } from '../../../../store/beneficiaryStore';

interface Props {
    idUser: string | number;
    beneficiaryData: BeneficiaryData;
}

const UpdateForm = ({ idUser, beneficiaryData }: Props) => {
    const { updateBeneficiary } = useBeneficiaryStore();

    const form = useForm<BeneficiarioSchema>({
        resolver: zodResolver(beneficiarioSchema),
        defaultValues: {
            Nombre: beneficiaryData.Nombre,
            Apellido: beneficiaryData.Apellido,
            TipoDocumento_idTipoDocumento: `${beneficiaryData.TipoDocumento}`,
            NumeroDocumento: beneficiaryData.NumeroDocumento,
            Telefono: beneficiaryData.Telefono,
            Celular: beneficiaryData.Celular,
            Correo: beneficiaryData.Correo,
            FechaInicio: new Date(beneficiaryData.FechaInicio),
            FechaFin: new Date(beneficiaryData.FechaFin),
            CodigoDaneDpmto: beneficiaryData.CodigoDaneDpmto,
            Departamento: beneficiaryData.Departamento,
            CodigoDaneMunicipio: beneficiaryData.CodigoDaneMunicipio,
            Municipio: beneficiaryData.Municipio,
            Direccion: beneficiaryData.Direccion,
            Barrio: beneficiaryData.Barrio,
            Anexo: beneficiaryData.Anexo,
            Estado_idEstado: `${beneficiaryData.Estado}`,
            Estrato_idEstrato: `${beneficiaryData.Estrato}`,
            Sexo_idSexo: `${beneficiaryData.Sexo}`,
            Password: "T10F8DA0",

        }
    });

    const onSubmit = (data: BeneficiarioSchema) => {
        console.log("Formulario enviado", data)

        updateBeneficiary(idUser, data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='overflow-y-auto space-y-5'>
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
                        name="Celular"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Celular</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="tel"
                                        placeholder="Número de celular"
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
                        name="Estrato_idEstrato"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estrato</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        placeholder=""
                                        className='border-gray-500 dark:border-gray-800'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                                    "w-full pl-3 text-left font-normal border-gray-500 dark:border-gray-800",
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
                                    <PopoverContent className="w-auto p-0 border-gray-500 dark:border-gray-800" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <FormField
                        control={form.control}
                        name="CodigoDaneDpmto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Código DANE Departamento</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
                                                <SelectItem value="05">05</SelectItem>
                                                <SelectItem value="08">08</SelectItem>
                                                <SelectItem value="11">11</SelectItem>
                                                <SelectItem value="13">13</SelectItem>
                                                <SelectItem value="15">15</SelectItem>
                                                <SelectItem value="17">17</SelectItem>
                                                <SelectItem value="18">18</SelectItem>
                                                <SelectItem value="19">19</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="23">23</SelectItem>
                                                <SelectItem value="25">25</SelectItem>
                                                <SelectItem value="27">27</SelectItem>
                                                <SelectItem value="41">41</SelectItem>
                                                <SelectItem value="44">44</SelectItem>
                                                <SelectItem value="47">47</SelectItem>
                                                <SelectItem value="50">50</SelectItem>
                                                <SelectItem value="52">52</SelectItem>
                                                <SelectItem value="54">54</SelectItem>
                                                <SelectItem value="63">63</SelectItem>
                                                <SelectItem value="66">66</SelectItem>
                                                <SelectItem value="68">68</SelectItem>
                                                <SelectItem value="70">70</SelectItem>
                                                <SelectItem value="73">73</SelectItem>
                                                <SelectItem value="76">76</SelectItem>
                                                <SelectItem value="81">81</SelectItem>
                                                <SelectItem value="85">85</SelectItem>
                                                <SelectItem value="86">86</SelectItem>
                                                <SelectItem value="88">88</SelectItem>
                                                <SelectItem value="91">91</SelectItem>
                                                <SelectItem value="94">94</SelectItem>
                                                <SelectItem value="95">95</SelectItem>
                                                <SelectItem value="97">97</SelectItem>
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
                        name="Departamento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Departamento</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
                                                <SelectItem value="apple">Cauca</SelectItem>
                                                <SelectItem value="banana">Valle del Cauca</SelectItem>
                                                <SelectItem value="blueberry">Pasaporte</SelectItem>
                                                <SelectItem value="grapes">Documento de conducción</SelectItem>
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
                        name="CodigoDaneMunicipio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Código DANE Municipio</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
                                                <SelectItem value="001">001</SelectItem>
                                                <SelectItem value="002">002</SelectItem>
                                                <SelectItem value="004">004</SelectItem>
                                                <SelectItem value="021">021</SelectItem>
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
                        name="Municipio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Municipio</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
                                                <SelectItem value="cali">Cali</SelectItem>
                                                <SelectItem value="buenaventura">Buenaventura</SelectItem>
                                                <SelectItem value="bolivar">Bolivar</SelectItem>
                                                <SelectItem value="dagua">Dagua</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
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
                                    className='border-gray-500 dark:border-gray-800'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                                    className='border-gray-500 dark:border-gray-800'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <FormField
                        control={form.control}
                        name="Sexo_idSexo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genero</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
                                                <SelectItem value="1">Masculina</SelectItem>
                                                <SelectItem value="2">Femenifo</SelectItem>
                                                <SelectItem value="3">Otros</SelectItem>
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
                        name="Estado_idEstado"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger className='border-gray-500 dark:border-gray-800'>
                                            <SelectValue placeholder="Selecciona una opción" />
                                        </SelectTrigger>
                                        <SelectContent className='border-gray-500 dark:border-gray-800'>
                                            <SelectGroup>
                                                <SelectLabel>Opciones</SelectLabel>
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
                </div>
                <div className='flex justify-end items-center'>
                    <Button type="submit">Actualizar usuario</Button>
                </div>
            </form>
        </Form>
    )
}

export default UpdateForm