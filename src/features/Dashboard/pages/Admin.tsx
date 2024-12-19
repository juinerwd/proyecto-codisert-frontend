import { useEffect } from 'react'

import DashboardLayout from '../layouts/DashboardLayout'

import RegisterAdmin from '../components/RegisterAdmin'

import { useAdminStore } from '../../../store/adminStore'
import { DataTable } from '../../../components/data-table'
import { columnsAdmin } from '../components/columns-table/columnsAdmin'
import { Label } from '../../../components/ui/label'


const Admin = () => {
    const { userAdmin, loading, error, getAdmins } = useAdminStore()

    useEffect(() => {
        getAdmins();
    }, [getAdmins]);

    // if (loading) return <p>Cargando usuarios...</p>;
    // if (error) return <p className='text-red-500'>Error al cargar usuarios</p>;

    return (
        <DashboardLayout>
            <div className="relative shadow-md sm:rounded-lg">
                {(loading || error) && <div className='flex justify-center'>
                    {loading && <Label className='text-sm font-bold'>
                        Cargando administradores...
                    </Label>}
                    {error && <Label className='text-sm font-bold text-red-500'>
                        {error}
                    </Label>}
                </div>}

                <DataTable columns={columnsAdmin} data={userAdmin || []}>
                    <RegisterAdmin />
                </DataTable>
            </div>
        </DashboardLayout>
    )
}

export default Admin