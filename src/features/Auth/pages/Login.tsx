import React from 'react'
import { useDispatch } from 'react-redux';

import AuthLayout from '../layouts/AuthLayout'
import { useForm } from '../../../hooks/useForm'
import { startLoginWithEmailAndPassword } from '../../../store/thunks';

import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { Button } from "../../../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import { loginSchema } from '../schemas/loginSchema';

const Login = () => {
    const dispatch = useDispatch();
    const { email, password, errors, onInputChange, handleSubmit } = useForm(loginSchema, {
        email: "",
        password: "",
    });

    const onSubmit = (data: { email: string, password: string }) => {
        console.log("Formulario enviado", data)
        
        dispatch(startLoginWithEmailAndPassword(data))
    }

    return (
        <AuthLayout>
            <Card className="w-[450px] shadow-lg shadow-blue-gray-500 dark:shadow-gray-900">
                <CardHeader className='flex justify-center items-center pb-10'>
                    <CardTitle className='text-3xl font-bold'>Iniciar Sesión</CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Correo electrónico</Label>
                                <Input
                                    id="email"
                                    placeholder="example@example.com"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                />
                                {errors.email && <Label className="text-red-500">{errors.email}</Label>}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    id="password"
                                    placeholder="******"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
                                />
                                {errors.password && <Label className="text-red-500">{errors.password}</Label>}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        {/* <Button variant="outline">Cancel</Button> */}
                        <Button type='submit' className='w-32'>Ingresar</Button>
                    </CardFooter>
                </form>
            </Card>
        </AuthLayout>
    )
}

export default Login