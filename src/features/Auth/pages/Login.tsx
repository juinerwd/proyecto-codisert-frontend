import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '../../../store/authStore';

import AuthLayout from '../layouts/AuthLayout'

import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import { LoginSchema, loginSchema } from '../schemas/loginSchema';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../components/ui/form';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser, loading, error } = useAuthStore();

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            NumeroDocumento: "",
            Password: "",
        }
    });

    const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
        // console.log("Formulario enviado", data)

        await loginUser(data);
        navigate('/dashboard', { replace: true });
    }  

    return (
        <AuthLayout>
            <Card className="w-[450px] shadow-lg shadow-blue-gray-500 dark:shadow-gray-900 dark:bg-gray-100 rounded-2xl">
                <CardHeader className='flex justify-center items-center pb-10'>
                    <CardTitle className='text-gray-900 text-3xl font-bold'>Iniciar Sesión</CardTitle>
                </CardHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className='space-y-5'>
                            <FormField
                                control={form.control}
                                name="NumeroDocumento"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-900'>Usuario</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="text"
                                                className='text-gray-900'
                                                placeholder="example@example.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="Password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-900'>Contraseña</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                className='text-gray-900'
                                                placeholder="******"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter className="flex flex-col justify-end">
                            <div className='flex justify-end w-full'>
                                <Button type='submit' className='w-52 bg-gray-900 text-gray-100 hover:bg-gray-900 rounded-lg'>
                                    {loading ? 'Cargando...' : 'Iniciar sesión'}
                                </Button>
                            </div>
                            {error && <div className='flex justify-center items-center w-full mt-10'>
                                <p className="text-red-500">{error}</p>
                            </div>}
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </AuthLayout>
    )
}

export default Login