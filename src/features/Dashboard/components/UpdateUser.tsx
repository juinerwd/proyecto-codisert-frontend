import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns';

import { CalendarIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

import { BeneficiarioSchema, beneficiarioSchema } from '../schemas/registerUser';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
import { Textarea } from "../../../components/ui/textarea"
import { Input } from "../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../components/ui/popover"
import { Calendar } from "../../../components/ui/calendar"
import Tooltip from './TooltipComponent';

interface Props {
    // text: string
    icon?: React.ReactNode
    // children?: React.ReactNode
}

const UpdateUser = ({ icon }: Props) => {
    const form = useForm<BeneficiarioSchema>({
        resolver: zodResolver(beneficiarioSchema),
        defaultValues: {
            name: "",
            lastname: "",
            identification_type: "",
            identification_number: "",
            telephone: "",
            celular: "",
            email: "",
            stratum: "1",
            start_operation: new Date(),
            department_code: "",
            department: "",
            municipality_code: "",
            municipality: "",
            address: "",
            contrato: undefined,
            copia_cc: undefined,
            copia_ds: undefined,
            foto_fp: undefined,
            velocidad_internet: undefined,
            cpe: undefined,
            info_adicional: "",
        }
    });

    const onSubmit = (data: BeneficiarioSchema) => {
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
                    <DialogTitle>Actualizar usuario</DialogTitle>
                    <DialogDescription>
                        Intruduce los datos a cambiar del usuario
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
                                name="celular"
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
                                name="stratum"
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
                                name="start_operation"
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
                                name="department_code"
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
                                name="department"
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
                                name="municipality_code"
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
                                name="municipality"
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
                            name="address"
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
                            <Button type="submit">Actualizar usuario</Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog >

    )
}

export default UpdateUser