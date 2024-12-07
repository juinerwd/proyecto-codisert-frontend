import React from 'react'
import { useDispatch } from 'react-redux';

import AuthLayout from '../layouts/AuthLayout'
import { useForm } from '../../../hooks/useForm'
import { startLoginWithEmailAndPassword } from '../../../store/thunks';

interface LoginForm {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm<LoginForm>({
        initialValues: {
            email: "",
            password: "",
          },
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({email, password})

        dispatch(startLoginWithEmailAndPassword({ email, password }))
    }

    return (
        <AuthLayout>
            <h1 className="text-2xl font-bold text-center mb-10">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Iniciar Sesión
                </button>
            </form>
            {/* <p className="text-center text-sm text-gray-500 mt-4">
                ¿No tienes una cuenta?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    Regístrate
                </a>
            </p> */}
        </AuthLayout>
    )
}

export default Login