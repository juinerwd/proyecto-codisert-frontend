
export interface UserAdmin {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: 'admin_super' | 'admin_lector' | 'admin_registrador';
}

export interface AdminData {
    idAdministrador: number | string,
    Nombre: string,
    Apellido: string,
    TipoDocumento_idTipoDocumento: number | string,
    NumeroDocumento: string,
    Telefono: string,
    Correo: string,
    Estado_idEstado: number | string,
    Rol_idRol: number | string,
    Administrador_idAdministrador: number | string,
    Sexo_idSexo: number | string,
    Rol: {
        Rol: string
    },
    Estado: {
        Estado: string
    },
    TipoDocumento: {
        TipoDocumento: string
    },
    SexoCreado: {
        Sexo: string
    },
    AdministradorCreado: object | null
}

export interface LoginData {
    email: string;
    password: string;
}

export interface BeneficiaryData {
    idBeneficiario: number;
    Nombre: string;
    Apellido: string;
    TipoDocumento: string;
    NumeroDocumento: string;
    Telefono: string;
    Celular: string;
    Correo: string;
    Estrato: string;
    FechaNacimiento: string | Date;
    FechaInicio: string | Date;
    FechaFin: string | Date;
    CodigoDaneDpmto: string;
    CodigoDaneMunicipio: string;
    Departamento: string;
    Municipio: string;
    Direccion: string;
    Barrio: string;
    Anexo: string;
    Estado: string;
    Sexo: string;
    Administrador: {
        idAdministrador: number;
        Nombre: string;
        Apellido: string;
    };
}