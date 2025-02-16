import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Login = () => {

    const [isEyePass, setIsEyePass] = useState(false)

    const hancleEyePass = () => {
        setIsEyePass(!isEyePass)
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100 px-2'>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full sm:w-96 rounded-2xl p-6 shadow-md bg-white">
                <h1 className='text-center text-2xl font-bold mb-4'>Welcome back to NewsAI!</h1>
                <form action="" className="space-y-6">
                    <div className="flex justify-center items-center gap-2 relative">
                        <Mail size={30} className='text-gray-700 absolute left-2' />
                        <input type="email" id="email" name="email" placeholder='Enter Email...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="flex justify-center items-center gap-2 relative">
                        <Lock size={30} className='text-gray-700 absolute left-2' />
                        <div onClick={hancleEyePass} className="absolute right-2">
                            {isEyePass ? <Eye /> : <EyeOff />}
                        </div>
                        <input type={isEyePass ? 'text' : 'password'} id="password" name="password" placeholder='Enter Password...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>

                    <p className='flex'>Don't have an account?
                        <Link to="/register" className='text-blue-600 ml-0.5 underline'>
                            <p className="font-bold">Register</p>
                        </Link>
                    </p>

                    <Button fullWidth>Login</Button>
                </form>
            </motion.div>
        </div>
    )
}

export default Login