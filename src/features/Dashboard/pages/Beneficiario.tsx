import { useEffect } from 'react'

import DashboardLayout from '../layouts/DashboardLayout'

import { columnsBeneficiary } from '../components/columns-table/columnsBeneficiary'

import { DataTable } from '../../../components/data-table'
import { Label } from '../../../components/ui/label'
import { useBeneficiaryStore } from '../../../store/beneficiaryStore'


const Beneficiario = () => {
    const { userBeneficiary, loading, error, getBeneficiaries } = useBeneficiaryStore()

    useEffect(() => {
        getBeneficiaries();
    }, [getBeneficiaries]);

    return (
        <DashboardLayout>
            <div className="relative shadow-md sm:rounded-lg">
                {(loading || error) && <div className='flex justify-center'>
                    {loading && <Label className='text-sm font-bold'>
                        Cargando beneficiarios...
                    </Label>}
                    {error && <Label className='text-sm font-bold text-red-500'>
                        {error}
                    </Label>}
                </div>}

                <DataTable columns={columnsBeneficiary} data={userBeneficiary || []} />
            </div>
        </DashboardLayout>
    )
}

export default Beneficiario