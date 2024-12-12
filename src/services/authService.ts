import { post } from './api';
import { LoginData } from "@/features/Auth/types";


export const loginWithEmailAndPassword = async ({email, password}:LoginData) => {
    const data = { email, password };
    return post('http://localhost:3000/api/auth/login', data)
}