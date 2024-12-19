import { ColumnDef } from "@tanstack/react-table"
import { BeneficiarioSchema } from '../../schemas/registerUser'
import { BeneficiaryData } from "../../types"

import DeleteUser from '../../components/DeleteUser'

import EditIcon from '../../../../assets/icons/EditIcon'
import DeleteIcon from '../../../../assets/icons/DeleteIcon'
import UpdateUser from "../UpdateUser"

export type Beneficiary = {
  user: BeneficiarioSchema
}

export const columnsBeneficiary: ColumnDef<BeneficiaryData>[] = [
  {
    accessorKey: "idBeneficiario",
    header: "Id",
  },
  {
    accessorKey: "NumeroDocumento",
    header: "Número de documento",
  },
  {
    accessorKey: "Nombre",
    header: "Nombre",
  },
  {
    accessorKey: "Apellido",
    header: "Apellido",
  },
  {
    accessorKey: "Correo",
    header: "Email",
  },
  {
    accessorKey: "Estado",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const beneficiary = row.original

      return (
        <>
          <UpdateUser idUser={beneficiary.idBeneficiario} beneficiaryData={beneficiary}  icon={<EditIcon />} />
          <DeleteUser
            idUser={beneficiary.idBeneficiario}
            icon={<DeleteIcon />}
            title='Eliminar Beneficiario'
            description='¿Está seguro de eliminar a este Beneficiario?'
          />
        </>
      )
    },
  },
]