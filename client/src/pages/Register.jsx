import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Mail, Eye, EyeOff, User, LockKeyhole } from 'lucide-react';
import { Button, Loader } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { SignUp } from '../redux/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch()

    const { loading } = useSelector((state) => state.auth)

    const { register, handleSubmit } = useForm()

    const [isEyePass, setIsEyePass] = useState(false)

    const handleEyePass = () => {
        setIsEyePass(!isEyePass)
    }

    console.log(loading)
    const onSubmit = (data) => {
        console.log(data);
        dispatch(SignUp(data))
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 px-2'>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full sm:w-96 rounded-2xl p-6 shadow-md bg-white">
                <h1 className='text-center text-2xl font-bold mb-4'>Create an NewsAI Account!</h1>
                <p className='text-gray-700 mb-4'>Enter your details below.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex justify-center items-center gap-2 relative">
                        <User size={30} className='text-gray-700 absolute left-2' />
                        <input type="text" id="name" name="name" {...register("name")} placeholder='Enter Full Name...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex justify-center items-center gap-2 relative">
                        <Mail size={30} className='text-gray-700 absolute left-2' />
                        <input type="email" id="email" name="email" {...register("email")} placeholder='Enter Email...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex justify-center items-center gap-2 relative">
                        <LockKeyhole size={30} className='text-gray-700 absolute left-2' />
                        <div onClick={handleEyePass} className="absolute right-2">
                            {isEyePass ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyePass ? 'text' : 'password'} id="password" name="password" {...register("password")} placeholder='Enter Password...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex justify-center items-center gap-2 relative">
                        <LockKeyhole size={30} className='text-gray-700 absolute left-2' />
                        <div onClick={handleEyePass} className="absolute right-2">
                            {isEyePass ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyePass ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" {...register("confirmPassword")} placeholder='Enter Confirm Password...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>

                    {/* <Button fullWidth type='submit'>Register</Button> */}
                    <Button fullWidth type='submit'>{loading ? <Loader size={16} color='white' /> : "Sign Up"}</Button>

                    <div className="flex justify-between items-center">
                        <span className='h-[1px] bg-indigo-500 w-2/4'></span>
                        <span className='mx-[12px]'>Or</span>
                        <span className='h-[1px] bg-indigo-500 w-2/4'></span>
                    </div>

                    <Button fullWidth variant='default' >Sign up with Google</Button>

                    <p className='text-center text-gray-700'>Have an account? {' '}
                        <Link to="/Login" className='text-blue-500 underline font-medium'>
                            Login
                        </Link>
                    </p>

                </form>
            </motion.div>
        </div>
    )
}

export default Register