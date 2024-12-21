'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Card, CardContent } from "../../../components/ui/card"
import Tooltip from "./TooltipComponent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { User, Mail, Phone, Smartphone, MapPin, Briefcase, Calendar, Heart, Flag, Contact, Building, Clock, Info } from 'lucide-react'
import { BeneficiaryData } from "../types"
import { format } from "date-fns"

interface UserInfoModalProps {
    user: BeneficiaryData;
}

export function UserInfoModal({ user }: UserInfoModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='p-0 size-7 w-7 h-7'>
                    <Tooltip text="Ver Información Completa" icon={<Info />} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Información Detallada del Usuario</DialogTitle>
                </DialogHeader>

                {/* <div className="flex items-center justify-center">
                    <Avatar className="h-24 w-24">
                        {/* <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                        <AvatarFallback>{user.Nombre[0]}{user.Apellido[0]}</AvatarFallback>
                    </Avatar>
                </div> */}

                <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="personal">Personal</TabsTrigger>
                        <TabsTrigger value="contact">Contacto</TabsTrigger>
                        <TabsTrigger value="documents">Documentos</TabsTrigger>
                    </TabsList>

                    <TabsContent value="personal">
                        <Card>
                            <CardContent className="space-y-4 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Tipo de Documento</p>
                                        <p className="text-sm text-muted-foreground">{user.TipoDocumento.nombre}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Número de Documento</p>
                                        <p className="text-sm text-muted-foreground">{user.NumeroDocumento}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Nombres</p>
                                        <p className="text-sm text-muted-foreground">{user.Nombre}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Apellidos</p>
                                        <p className="text-sm text-muted-foreground">{user.Apellido}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Fecha de Nacimiento</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{format(new Date(user.FechaNacimiento), "dd/MM/yyyy")}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Género</p>
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{user.Sexo.nombre}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Estado Civil</p>
                                        <div className="flex items-center gap-2">
                                            <Heart className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.civilStatus}</p> */}
                                            <p className="text-sm text-muted-foreground">No especificado</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Nacionalidad</p>
                                        <div className="flex items-center gap-2">
                                            <Flag className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.nationality}</p> */}
                                            <p className="text-sm text-muted-foreground">No especificado</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="contact">
                        <Card>
                            <CardContent className="space-y-4 p-4">
                                <div className="grid gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Email Corporativo</p>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Email Personal</p>
                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{user.Correo}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Teléfono Fijo</p>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{user.Telefono}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Teléfono Celular</p>
                                        <div className="flex items-center gap-2">
                                            <Smartphone className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">{user.Celular}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">Contacto de Emergencia</p>
                                    <div className="grid gap-2">
                                        <div className="flex items-center gap-2">
                                            <Contact className="h-4 w-4 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">
                                                {/* {user.emergencyContact.name} ({user.emergencyContact.relationship}) */}
                                                <p className="text-sm text-muted-foreground">Ninguno</p>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.emergencyContact.phone}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">Dirección</p>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm text-muted-foreground">
                                            {/* {user.address.street}, {user.address.city}, {user.address.state}, {user.address.country} {user.address.zipCode} */}
                                            <p className="text-sm text-muted-foreground">{user.Direccion}</p>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="documents">
                        <Card>
                            <CardContent className="space-y-4 p-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">ID Empleado</p>
                                        {/* <p className="text-sm text-muted-foreground">{user.employeeId}</p> */}
                                        <p className="text-sm text-muted-foreground">Ninguno</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Cargo</p>
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.role}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Departamento</p>
                                        <div className="flex items-center gap-2">
                                            <Building className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.department}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Supervisor</p>
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.supervisor}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Fecha de Inicio</p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.startDate}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Tipo de Contrato</p>
                                        <div className="flex items-center gap-2">
                                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                                            {/* <p className="text-sm text-muted-foreground">{user.contractType}</p> */}
                                            <p className="text-sm text-muted-foreground">Ninguno</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Horario de Trabajo</p>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        {/* <p className="text-sm text-muted-foreground">{user.workSchedule}</p> */}
                                        <p className="text-sm text-muted-foreground">Ninguno</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )
}