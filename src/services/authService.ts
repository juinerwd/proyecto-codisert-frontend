import { post } from './api';


export const loginWithEmailAndPassword = async (email:string, password:string) => {
    const data = { email, password };
    return post('http://localhost:3000/api/auth/login', data)
}