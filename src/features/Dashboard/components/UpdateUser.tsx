import { useForm } from '../../../hooks/useForm'
import { Button } from "../../../components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
// import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"
// import Tooltip from '../components/TooltipComponent'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"

import { RegisterUserSchema, registerUserSchema } from '../schemas/registerUser';
import InputComponent from '../../../components/InputComponent'

interface Props {
    text: string
    icon?: React.ReactNode
    // children?: React.ReactNode
}


const UpdateUser = ({ text, icon }: Props) => {

    const { formState, errors, onInputChange, handleSubmit } = useForm(registerUserSchema, {
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
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='p-0'>
                    {icon ? <span>{icon}</span> : <span className="text-xl">{text}</span>}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[720px]">
                <DialogHeader>
                    <DialogTitle>Registrar nuevo usuario</DialogTitle>
                    <DialogDescription>
                        Intruduce los datos del nuevo usuario
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* grid grid-cols-1 md:grid-cols-2 w-full max-h-96 items-center gap-4 overflow-y-auto px-2 */}
                    <div className="w-full max-h-96 overflow-y-auto overflow-x-hidden px-2">
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <InputComponent
                                id="name"
                                name="name"
                                type="text"
                                label="Nombre"
                                value={formState.name}
                                placeholder="Joe"
                                onChange={onInputChange}
                            />
                            <InputComponent
                                id="lastname"
                                name="lastname"
                                type="text"
                                label="Apellidos"
                                value={formState.lastname}
                                placeholder="Doe"
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label>Tipo de identificación</Label>
                                <Select name='identification_type'>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione el tipo de identificación" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Opciones</SelectLabel>
                                            <SelectItem value="cc">Cédula de Ciudadanía</SelectItem>
                                            <SelectItem value="ti">Tarje de Indentidad</SelectItem>
                                            <SelectItem value="ce">Cédula de Extranjería</SelectItem>
                                            <SelectItem value="pa">Pasaporte</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                            <InputComponent
                                id="email"
                                name="email"
                                type="email"
                                label="Correo electrónico"
                                value={formState.email}
                                placeholder="example@example.com"
                                onChange={onInputChange}
                            />
                        </div>
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
                            />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label htmlFor="cc">Código DANE Departamento
                                </Label>
                                <Select name='department_code'>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione el código DANE" />
                                    </SelectTrigger>
                                    <SelectContent className='max-h-[300px]'>
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
                                            <SelectItem value="99">99</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mt-2">
                                <Label htmlFor="cc">Departamento</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione el departamento" />
                                    </SelectTrigger>
                                    <SelectContent className='max-h-[300px]'>
                                        <SelectGroup>
                                            <SelectLabel>Opciones</SelectLabel>
                                            <SelectItem value="apple">Cauca</SelectItem>
                                            <SelectItem value="banana">Valle del Cauca</SelectItem>
                                            <SelectItem value="blueberry">Pasaporte</SelectItem>
                                            <SelectItem value="grapes">Documento de conducción</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className="mt-2">
                                <Label htmlFor="cc">Código DANE Municipio
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione el código DANE" />
                                    </SelectTrigger>
                                    <SelectContent className='max-h-[300px]'>
                                        <SelectGroup>
                                            <SelectLabel>Opciones</SelectLabel>
                                            <SelectItem value="001">001</SelectItem>
                                            <SelectItem value="002">002</SelectItem>
                                            <SelectItem value="004">004</SelectItem>
                                            <SelectItem value="021">021</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mt-2">
                                <Label htmlFor="cc">Municipio</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Seleccione el municipio" />
                                    </SelectTrigger>
                                    <SelectContent className='max-h-[300px]'>
                                        <SelectGroup>
                                            <SelectLabel>Opciones</SelectLabel>
                                            <SelectItem value="apple">Cali</SelectItem>
                                            <SelectItem value="banana">Buenaventura</SelectItem>
                                            <SelectItem value="grapes">Bolivar</SelectItem>
                                            <SelectItem value="blueberry">Dagua</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                        />

                        <InputComponent
                            id="contrato"
                            name="contrato"
                            type="file"
                            label="Copia del Contrato de Prestación de Servicios"
                            onChange={onInputChange}
                        />
                        <InputComponent
                            id="copia_cc"
                            name="copia_cc"
                            type="file"
                            label="Copia del documento de identidad del Usuario"
                            onChange={onInputChange}
                        />
                        <InputComponent
                            id="copia_ds"
                            name="copia_ds"
                            type="file"
                            label="Copia de la declaración del suscriptor"
                            onChange={onInputChange}
                        />
                        <InputComponent
                            id="foto_fp"
                            name="foto_fp"
                            type="file"
                            label="Foto de la fachada del predio del Usuario"
                            onChange={onInputChange}
                        />
                        <InputComponent
                            id="velocidad_internet"
                            name="velocidad_internet"
                            type="file"
                            label="Pantallazo de la prueba de velocidad del internet"
                            onChange={onInputChange}
                        />
                        <InputComponent
                            id="cpe"
                            name="cpe"
                            type="file"
                            label="Fotografía del número serial del equipo CPE instalado"
                            onChange={onInputChange}
                        />
                        <div className='mt-2'>
                            <Label htmlFor="info_adicional">Información adicional</Label>
                            <Textarea
                                id="info_adicional"
                                name="info_adicional"
                                placeholder="Información adicional"
                                className='border-gray-500 dark:border-gray-800'
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Registrar usuario</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >

    )
}

export default UpdateUser