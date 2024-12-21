
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import { Button } from "../../../components/ui/button"
// import Tooltip from './TooltipComponent';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import UpdateForm from "./updates/UpdateForm";
import UserDocuments from "./updates/UserDocuments";
import { BeneficiaryData } from "../types";

interface Props {
    idUser: string | number;
    beneficiaryData: BeneficiaryData;
    // text: string
    icon?: React.ReactNode
    // children?: React.ReactNode
}

const UpdateUser = ({ idUser, beneficiaryData, icon }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='p-0 size-7 w-7 h-7'>
                    {icon}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[820px] h-[95vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Actualizar Información del Beneficiario</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="data-user" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="data-user">Datos del usuario</TabsTrigger>
                        <TabsTrigger value="document-user">Documentos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="data-user" className="">
                        <Card>
                            <CardHeader>
                                <CardTitle>Actualizar usuario</CardTitle>
                                <CardDescription>
                                    Intruduce los datos a cambiar del usuario
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <UpdateForm idUser={idUser} beneficiaryData={beneficiaryData} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="document-user">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Documentos del usuario</CardTitle>
                                <CardDescription>
                                    Actualiza o agrega los documentos del usuario
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <UserDocuments idUser={idUser} />
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog >

    )
}

export default UpdateUser