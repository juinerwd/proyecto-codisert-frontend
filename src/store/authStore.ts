import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import { UserAdmin } from '../features/Dashboard/types';
import { post } from '../services/api';
import { LoginSchema } from '@/features/Auth/schemas/loginSchema';

interface AuthState {
    userAdmin: UserAdmin | null; // Guarda los datos del usuario autenticado
    isAuthenticated: boolean;
    loading: boolean;
    error: string;
    loginUser: (data: LoginSchema) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            userAdmin: null,
            isAuthenticated: false,
            loading: false,
            error: '',
            loginUser: async (data) => {
                set({ loading: true, error: '' });
                try {
                    const resp = await post('auth/login', data);
                    set({ userAdmin: resp.user, isAuthenticated: true, loading: false });

                } catch (err: any) {
                    console.log("Error al iniciar sesión", err);
                    
                    set({ isAuthenticated: false, loading: false, error: "Error al iniciar sesión. Por favor, inténtalo de nuevo. \nSi el problema persiste, contacte al administrador" });
                }
            },
            logout: async () => {
                await post('auth/logout', {});
                localStorage.removeItem('user-storage');
                localStorage.removeItem('admin-storage');
                localStorage.removeItem('beneficiary-storage');
                window.location.href = "/";
            },
        }),
        {
            name: 'user-storage', // Nombre clave en localStorage
            storage: {
                getItem: (key) => {
                    const storedValue = localStorage.getItem(key);
                    return storedValue ? JSON.parse(storedValue) : null; // Parsea el valor
                },
                setItem: (key, value) => {
                    localStorage.setItem(key, JSON.stringify(value)); // Guarda como string
                },
                removeItem: (key) => {
                    localStorage.removeItem(key);
                },
            }
        } as PersistOptions<AuthState, AuthState>
    )
)