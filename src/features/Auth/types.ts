export interface LoginData {
    email: string;
    password: string;
}

export const types = {
    CHECKING_CREDENTIALS: 'CHECKING_CREDENTIALS',
    LOGIN: '[AUTH] LOGIN',
    LOGOUT: '[AUTH] LOGOUT',
}
