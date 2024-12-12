import React from 'react'

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
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"

interface Props {
    text: string
    // icon: React.ReactNode
    // children?: React.ReactNode
}

const RegisterAdmin = ({ text }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">{text}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Registrar nuevo administrador</DialogTitle>
                    <DialogDescription>
                        Intruduce los datos del nuevo administrador
                    </DialogDescription>
                </DialogHeader>
                <div className="grid w-full max-h-96 items-center gap-4 overflow-y-auto px-2">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            id="name"
                            placeholder="Nombre"
                            type="text"
                            name="name"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="lastname">Apellidos</Label>
                        <Input
                            id="lastname"
                            placeholder="Apellidos"
                            type="text"
                            name="lastname"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="cc">Tipo de identificación</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccione el tipo de identificación" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Opciones</SelectLabel>
                                    <SelectItem value="apple">Cedula de ciudadania</SelectItem>
                                    <SelectItem value="banana">Tarje de indentidad</SelectItem>
                                    <SelectItem value="blueberry">Pasaporte</SelectItem>
                                    <SelectItem value="grapes">Documento de conducción</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="numberId">Número de identificación</Label>
                        <Input
                            id="numberId"
                            placeholder=""
                            type="number"
                            name="numberId"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="telephone">Teléfono</Label>
                        <Input
                            id="telephone"
                            placeholder=""
                            type="number"
                            name="telephone"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            placeholder="example@example.com"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="telephone">Fecha de iniciode operación</Label>
                        <Input
                            id="telephone"
                            placeholder=""
                            type="number"
                            name="telephone"
                            maxLength={2}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="diretion">Dirección</Label>
                        <Input
                            id="diretion"
                            placeholder="Apellidos"
                            type="text"
                            name="diretion"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Registrar usuario</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default RegisterAdmin