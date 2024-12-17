import DashboardLayout from '../layouts/DashboardLayout'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from "date-fns"

import { cn } from '../../../lib/utils';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card"
// import { useForm } from '../../../hooks/useForm'

import { BeneficiarioSchema, beneficiarioSchema } from '../schemas/registerUser';
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../../components/ui/popover"
import { Calendar } from "../../../components/ui/calendar"
import { CalendarIcon } from 'lucide-react';

const CreateUser = () => {

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
            stratum: "",
            start_operation: new Date(),
            department_code: "",
            department: "",
            municipality_code: "",
            municipality: "",
            address: ""
        }
    });

    const onSubmit = (data: BeneficiarioSchema) => {
        console.log("Formulario enviado", data)
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
                                    name="name"
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
                                    name="lastname"
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
                                <FormField
                                    control={form.control}
                                    name="identification_type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tipo de identificación</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecciona una opción" />
                                                    </SelectTrigger>
                                                    <SelectContent>
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
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-end items-center pt-10'>
                                <Button className='w-52' type="submit">Registrar usuario</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </DashboardLayout>
    )
}

export default CreateUser