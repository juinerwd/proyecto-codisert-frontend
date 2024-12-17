import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import { UserAdmin } from '../types/user'
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
                    set({ error: err.message, loading: false });
                }
            },
            logout: () => {
                set({ userAdmin: null, isAuthenticated: false });
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