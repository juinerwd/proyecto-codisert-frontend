import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../Dashboard/types';

interface AuthState {
    status: 'not-authenticated' | 'authenticated' | 'checking';
    isLoggedIn: boolean;
    user: User | null; // Aquí se tipa `user` como `User | null`
}

// interface LoginPayload {
//     id: string;
//     name: string;
//     email: string;
//     // Añade las propiedades necesarias para el login
// }

const initialState: AuthState = {
    status: 'not-authenticated',
    isLoggedIn: false,
    user: null,
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action:PayloadAction<User>) => {
            state.status = 'authenticated'
            state.user = action.payload
        },
        logout: (state) => {
            state.status = 'not-authenticated'
            state.user = null
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
    },
})

export const { login, logout, checkingCredentials } = authSlice.actions