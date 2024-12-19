import { ColumnDef } from "@tanstack/react-table"
import { BeneficiarioSchema } from '../../schemas/registerUser'
import { AdminData } from "../../types"

import DeleteUser from '../../components/DeleteUser'
import UpdateAdmin from '../../components/UpdateAdmin'

import EditIcon from '../../../../assets/icons/EditIcon'
import DeleteIcon from '../../../../assets/icons/DeleteIcon'

export type Administrator = {
  user: BeneficiarioSchema
}

export const columnsAdmin: ColumnDef<AdminData>[] = [
  {
    accessorKey: "idAdministrador",
    header: "Id",
  },
  {
    accessorKey: "NumeroDocumento",
    header: "Número de identificación",
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
    accessorKey: "Telefono",
    header: "Teléfono",
  },
  {
    accessorKey: "Correo",
    header: "Correo electrónico",
  },
  {
    accessorKey: "Rol.Rol",
    header: "Rol",
  },
  {
    accessorKey: "Estado.Estado",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const admin = row.original

      return (
        <>
          <UpdateAdmin idAdmin={admin.idAdministrador} dataAdmin={admin} icon={<EditIcon />} />
          <DeleteUser
            idUser={admin.idAdministrador}
            icon={<DeleteIcon />}
            title='Eliminar administrador'
            description='¿Está seguro de eliminar a este administrador?'
          />
        </>
      )
    },
  },
]