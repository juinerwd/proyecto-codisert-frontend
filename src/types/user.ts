export interface UserBeneficiary {
    name: string;
    lastname: string;
    identification_type: string;
    identification_number: number;
    telephone: number;
    celular: number;
    email: string;
    stratum: number;
    start_operation: Date;
    end_operation?: Date;
    department_code: string;
    department: string;
    municipality_code: string;
    municipality: string;
    address: string;
}

export interface UserAuth {
    document: number;
    password: string;
}

export interface UserAdmin {
    id: number;
    name: string;
    lastname: string;
    email: string;
    role: 'admin_super' | 'admin_lector' | 'admin_registrador';
}