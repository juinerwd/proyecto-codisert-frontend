// import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout'
// import { startLoginWithEmailAndPassword } from '../../../store/thunks';

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
    // const dispatch = useDispatch();

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data: LoginSchema) => {
        console.log("Formulario enviado", data)

        // dispatch(startLoginWithEmailAndPassword(data))
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-900'>Correo electrónico</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
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
                                name="password"
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
                        <CardFooter className="flex justify-end">
                            {/* <Button variant="outline">Cancel</Button> */}
                            <Button type='submit' className='w-32 bg-gray-900 text-gray-100 hover:bg-gray-900'>
                                <Link to="/dashboard">Ingresar</Link>
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </AuthLayout>
    )
}

export default Login