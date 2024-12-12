
import { checkingCredentials, login, logout } from "../features/Auth/authSlice"
import { loginWithEmailAndPassword } from "../services/authService";
import { AppDispatch } from "./store";

import { LoginData } from "@/features/Auth/types";

export const checkingAuthentication = () => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startLoginWithEmailAndPassword = ({ email, password }:LoginData) => {
    return async (dispatch:AppDispatch) => {
        dispatch(checkingCredentials())

        const response = await loginWithEmailAndPassword({email, password})
        console.log(response)

        if (response.status !== 'ok') return dispatch(logout(response.data))

        
        dispatch(login(response.data))

    }
}