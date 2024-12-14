
import DashboardLayout from '../layouts/DashboardLayout'

import StatusComponent from '../components/StatusComponent'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"



import EditIcon from '../../../assets/icons/EditIcon'
import DeleteIcon from '../../../assets/icons/DeleteIcon'
import UpdateUser from '../components/UpdateUser'
import DeleteUser from '../components/DeleteUser'

const Beneficiario = () => {
    return (
        <DashboardLayout>
            <div className="relative shadow-md sm:rounded-lg">
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar usuarios" />
                    </div>
                </div>
                <Table>
                    <TableCaption>Lista de usuarios registrados</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Nombre</TableHead>
                            <TableHead>Posición</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Acción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Joe Doe</TableCell>
                            <TableCell>Beneficiario</TableCell>
                            <TableCell><StatusComponent status={true} /></TableCell>
                            <TableCell className="text-right space-x-2">
                                <UpdateUser icon={<EditIcon />} />
                                <DeleteUser
                                    icon={<DeleteIcon />}
                                    title='Eliminar Beneficiario'
                                    description='¿Está seguro de eliminar a este Beneficiario?'
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Joe Doe</TableCell>
                            <TableCell>Beneficiario</TableCell>
                            <TableCell><StatusComponent status={true} /></TableCell>
                            <TableCell className="text-right space-x-2">
                                <UpdateUser icon={<EditIcon />} />
                                <DeleteUser
                                    icon={<DeleteIcon />}
                                    title='Eliminar Beneficiario'
                                    description='¿Está seguro de eliminar a este Beneficiario?'
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Joe Doe</TableCell>
                            <TableCell>Beneficiario</TableCell>
                            <TableCell><StatusComponent status={false} /></TableCell>
                            <TableCell className="text-right space-x-2">
                                <UpdateUser icon={<EditIcon />} />
                                <DeleteUser
                                    icon={<DeleteIcon />}
                                    title='Eliminar Beneficiario'
                                    description='¿Está seguro de eliminar a este Beneficiario?'
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </div>
        </DashboardLayout>
    )
}

export default Beneficiario