// import Tooltip from "./TooltipComponent"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../components/ui/alert-dialog"
import { Button } from "../../../components/ui/button"
import { useAdminStore } from "../../../store/adminStore";

interface Props {
    idUser: number | string;
    icon?: React.ReactNode
    title: string
    description: string
    // children?: React.ReactNode
}

const DeleteUser = ({  idUser, icon, title, description }: Props) => {
    const { deleteAdmin } = useAdminStore();

    const handleDeleteAdmin = (id: number | string) => {
        deleteAdmin(id);
    }
    
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="p-0 size-7 w-7 h-7">
                    {icon}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => handleDeleteAdmin(idUser)}
                    >Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteUser;
