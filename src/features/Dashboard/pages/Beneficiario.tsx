import React from 'react'
import DashboardLayout from '../layouts/DashboardLayout'

import Tooltop from '../components/Tooltop'
import TableHeader from '../components/TableHeader'
import StatusComponent from '../components/StatusComponent'


import EditIcon from '../../../assets/icons/EditIcon'
import DeleteIcon from '../../../assets/icons/DeleteIcon'

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
                    <div className="flex items-center">
                        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" className="inline-flex items-center text-gray-100 bg-blue-600 border border-gray-300 focus:outline-none hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-md px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">Registrar usuario</button>
                    </div>
                </div>
                <table className="w-full h-auto overflow-x-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-100 uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <TableHeader>Nombre</TableHeader>
                            <TableHeader>Posición</TableHeader>
                            <TableHeader>Estado</TableHeader>
                            <TableHeader>Acción</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="/images/foto-perfil.webp" alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Bonnie Green</div>
                                    <div className="font-normal text-gray-500">example@example.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Beneficiario
                            </td>
                            <td className="px-6 py-4">
                                <StatusComponent status={true} />
                            </td>
                            <td className="px-6 py-4">
                                <Tooltop id='tooltip-edit-1' text="Editar Beneficiario" icon={<EditIcon />} />
                                <Tooltop id='tooltip-delete-1' text="Eliminar Beneficiario" icon={<DeleteIcon />} />
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="/images/foto-perfil.webp" alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Jese Leos</div>
                                    <div className="font-normal text-gray-500">example@example.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Aministrador
                            </td>
                            <td className="px-6 py-4">
                                <StatusComponent status={true} />
                            </td>
                            <td className="px-6 py-4">
                                <Tooltop id='tooltip-edit-2' text="Editar Beneficiario" icon={<EditIcon />} />
                                <Tooltop id='tooltip-delete-2' text="Eliminar Beneficiario" icon={<DeleteIcon />} />
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src="/images/foto-perfil.webp" alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">Thomas Lean</div>
                                    <div className="font-normal text-gray-500">example@example.com</div>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                Beneficiario
                            </td>
                            <td className="px-6 py-4">
                                <StatusComponent status={false} />
                            </td>
                            <td className="px-6 py-4">
                                <Tooltop id='tooltip-edit-3' text="Editar Beneficiario" icon={<EditIcon />} />
                                <Tooltop id='tooltip-delete-3' text="Eliminar Beneficiario" icon={<DeleteIcon />} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    )
}

export default Beneficiario