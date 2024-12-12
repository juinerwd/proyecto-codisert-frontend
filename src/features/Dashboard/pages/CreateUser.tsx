import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../components/ui/card"
import { useForm } from '../../../hooks/useForm'
import { RegisterUserSchema, registerUserSchema } from '../schemas/registerUser';
import { Button } from "../../../components/ui/button"
import InputComponent from '../../../components/InputComponent'
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
import { FileInput } from 'lucide-react';

const CreateUser = () => {

    const { formState, errors, onInputChange, handleSubmit } = useForm(registerUserSchema, {
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
        address: "",
        contrato: undefined,
        copia_cc: undefined,
        copia_ds: undefined,
        foto_fp: undefined,
        velocidad_internet: undefined,
        cpe: undefined,
    });

    const onSubmit = (data: RegisterUserSchema) => {
        console.log("Formulario enviado", data)
    }

    const validateErrors = (errors) => {
        if (errors !== undefined && errors !== null) {
            return errors;
        }
        return "";
    }

    return (
        <DashboardLayout>
            <Card className="w-full max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle className='text-2xl font-bold'>Registrar nuevo usuario</CardTitle>
                    <CardDescription>Intruduce los datos del nuevo usuario</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputComponent
                                id="name"
                                name="name"
                                type="text"
                                label="Nombre"
                                value={formState.name}
                                placeholder="Joe"
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.name)}`}
                            />
                            <InputComponent
                                id="lastname"
                                name="lastname"
                                type="text"
                                label="Apellidos"
                                value={formState.lastname}
                                placeholder="Doe"
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.lastname)}`}
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label htmlFor="identification_type">Tipo de identificación</Label>
                                <select
                                    id="identification_type"
                                    name="identification_type"
                                    onChange={onInputChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#030711] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-800">
                                    <option selected>Selecciona una opción</option>
                                    <option value="US">Cédula de Ciudadanía</option>
                                    <option value="CA">Tarje de Indentidad</option>
                                    <option value="FR">Cédula de Extranjería</option>
                                    <option value="DE">Pasaporte</option>
                                </select>
                                {errors.identification_type && <Label className="text-red-500">{errors.identification_type}</Label>}
                            </div>
                            <InputComponent
                                id="identification_number"
                                name="identification_number"
                                type="text"
                                label="Número de identificación"
                                value={formState.identification_number}
                                placeholder=""
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.identification_number)}`}
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputComponent
                                id="telephone"
                                name="telephone"
                                type="text"
                                label="Teléfono"
                                value={formState.telephone}
                                placeholder="Número de teléfono"
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.telephone)}`}
                            />
                            <InputComponent
                                id="celular"
                                name="celular"
                                type="text"
                                label="Celular"
                                value={formState.celular}
                                placeholder="Número de celular"
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.celular)}`}
                            />
                        </div>
                        <InputComponent
                            id="email"
                            name="email"
                            type="email"
                            label="Correo electrónico"
                            value={formState.email}
                            placeholder="example@example.com"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.email)}`}
                        />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputComponent
                                id="stratum"
                                name="stratum"
                                type="text"
                                label="Estrato"
                                placeholder=""
                                value={formState.stratum}
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.stratum)}`}
                            />
                            <InputComponent
                                id="start_operation"
                                name="start_operation"
                                type="date"
                                label="Fecha de inicio de operación"
                                placeholder=""
                                onChange={onInputChange}
                                errors={`${validateErrors(errors.start_operation)}`}
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label htmlFor="department_code">Código DANE Departamento</Label>
                                <select
                                    id="department_code"
                                    name="department_code"
                                    onChange={onInputChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#030711] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-800">
                                    <option selected>Selecciona una opción</option>
                                    <option value="05">05</option>
                                    <option value="08">08</option>
                                    <option value="11">11</option>
                                    <option value="13">13</option>
                                    <option value="15">15</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="23">23</option>
                                    <option value="25">25</option>
                                    <option value="27">27</option>
                                    <option value="41">41</option>
                                    <option value="44">44</option>
                                    <option value="47">47</option>
                                    <option value="50">50</option>
                                    <option value="52">52</option>
                                    <option value="54">54</option>
                                    <option value="63">63</option>
                                    <option value="66">66</option>
                                    <option value="68">68</option>
                                    <option value="70">70</option>
                                    <option value="73">73</option>
                                    <option value="76">76</option>
                                    <option value="81">81</option>
                                    <option value="85">85</option>
                                    <option value="86">86</option>
                                    <option value="88">88</option>
                                    <option value="91">91</option>
                                    <option value="94">94</option>
                                    <option value="95">95</option>
                                    <option value="97">97</option>
                                </select>
                                {errors.department_code && <Label className="text-red-500">{errors.department_code}</Label>}
                            </div>
                            <div className="mt-2">
                                <Label htmlFor="department">Departamento</Label>
                                <select
                                    id="department"
                                    name="department"
                                    onChange={onInputChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#030711] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-800">
                                    <option selected>Selecciona una opción</option>
                                    <option value="apple">Cauca</option>
                                    <option value="banana">Valle del Cauca</option>
                                    <option value="blueberry">Pasaporte</option>
                                    <option value="grapes">Documento de conducción</option>
                                </select>
                                {errors.department && <Label className="text-red-500">{errors.department}</Label>}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label htmlFor="municipality_code">Código DANE Municipio</Label>
                                <select
                                    id="municipality_code"
                                    name="municipality_code"
                                    onChange={onInputChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#030711] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-800">
                                    <option selected>Selecciona una opción</option>
                                    <option value="001">001</option>
                                    <option value="002">002</option>
                                    <option value="004">004</option>
                                    <option value="021">021</option>
                                </select>
                                {errors.municipality_code && <Label className="text-red-500">{errors.municipality_code}</Label>}
                            </div>
                            <div className="mt-2">
                                <Label htmlFor="cc">Municipio</Label>
                                <select
                                    id="municipality"
                                    name="municipality"
                                    onChange={onInputChange}
                                    className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#030711] dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-800">
                                    <option selected>Selecciona una opción</option>
                                    <option value="apple">Cali</option>
                                    <option value="banana">Buenaventura</option>
                                    <option value="grapes">Bolivar</option>
                                    <option value="blueberry">Dagua</option>
                                </select>
                                {errors.municipality && <Label className="text-red-500">{errors.municipality}</Label>}
                            </div>
                        </div>
                        <InputComponent
                            id="address"
                            name="address"
                            type="text"
                            label="Dirección"
                            value={formState.address}
                            placeholder="Dirección"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.address)}`}
                        />

                        <InputComponent
                            id="contrato"
                            name="contrato"
                            type="file"
                            label="Copia del Contrato de Prestación de Servicios"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.contrato)}`}
                        />
                        <InputComponent
                            id="copia_cc"
                            name="copia_cc"
                            type="file"
                            label="Copia del documento de identidad del Usuario"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.copia_cc)}`}
                        />
                        <InputComponent
                            id="copia_ds"
                            name="copia_ds"
                            type="file"
                            label="Copia de la declaración del suscriptor"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.copia_ds)}`}
                        />
                        <InputComponent
                            id="foto_fp"
                            name="foto_fp"
                            type="file"
                            label="Foto de la fachada del predio del Usuario"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.foto_fp)}`}
                        />
                        <InputComponent
                            id="velocidad_internet"
                            name="velocidad_internet"
                            type="file"
                            label="Pantallazo de la prueba de velocidad del internet"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.velocidad_internet)}`}
                        />
                        <InputComponent
                            id="cpe"
                            name="cpe"
                            type="file"
                            label="Fotografía del número serial del equipo CPE instalado"
                            onChange={onInputChange}
                            errors={`${validateErrors(errors.cpe)}`}
                        />
                        <div className='mt-2'>
                            <Label htmlFor="info_adicional">Información adicional</Label>
                            <Textarea
                                id="info_adicional"
                                name="info_adicional"
                                placeholder="Información adicional"
                                onChange={onInputChange}
                                className='border-gray-500 dark:border-gray-800'
                            />
                        </div>

                        <div className='flex justify-end items-center mt-10'>
                            <Button className='w-52' type="submit">Registrar usuario</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </DashboardLayout>
    )
}

export default CreateUser