import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const Login = () => {

    const LoginSchema = z.object({
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This has to be a valid email."),
        password: z.string().min(4, { message: "Password has to be filled." })
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(LoginSchema)
    })

    console.log(register("email"));
    console.log(errors);



    const [isEyePass, setIsEyePass] = useState(false)

    const hancleEyePass = () => {
        setIsEyePass(!isEyePass)
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 px-2'>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full sm:w-96 rounded-2xl p-6 shadow-md bg-white">
                <h1 className='text-center text-2xl font-bold mb-4'>Welcome back to NewsAI!</h1>
                <p className='text-gray-700 mb-4'>Enter your details below.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex justify-center items-center gap-2 relative">
                        <Mail size={30} className='text-gray-700 absolute left-2' />
                        <input type="email" id="email" name="email" {...register("email")} placeholder='Enter Email...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <p className='text-red-600'>{errors.email?.message}</p>
                    <div className="flex justify-center items-center gap-2 relative">
                        <Lock size={30} className='text-gray-700 absolute left-2' />
                        <div onClick={hancleEyePass} className="absolute right-2">
                            {isEyePass ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyePass ? 'text' : 'password'} id="password" name="password" {...register("password")} placeholder='Enter Password...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <p className='text-red-600'>{errors.password?.message}</p>


                    <Button fullWidth type='submit'>Login</Button>

                    <div className="flex justify-between items-center">
                        <span className='h-[1px] bg-indigo-500 w-2/4'></span>
                        <span className='mx-[12px]'>Or</span>
                        <span className='h-[1px] bg-indigo-500 w-2/4'></span>
                    </div>

                    <Button fullWidth variant='default' >Sign In with Google</Button>

                    <p className='text-center text-gray-700'>Don't have an account? {' '}
                        <Link to="/register" className='text-blue-600 ml-0.5 underline font-medium'>
                            Register
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    )
}

export default Login