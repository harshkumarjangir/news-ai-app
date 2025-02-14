import React, { useState } from 'react'
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

const Register = () => {

    const [isEyePass, setIsEyePass] = useState(false)

    const hancleEyePass = () => {
        setIsEyePass(!isEyePass)
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-fit rounded-2xl p-6 shadow-md bg-white">
                <h1 className='text-center text-2xl font-bold mb-4'>Welcome to NewsAI!</h1>
                <form action="" className="space-y-6">
                    <div className="flex justify-center items-center gap-2 relative">
                        <User size={30} className='text-gray-700 absolute left-2' />
                        <input type="text" id="username" name="username" placeholder='Enter Username...' className="block w-full px-3 pl-14 py-2 focus:outline-none border-b border-indigo-500 sm:text-sm" />
                    </div>
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

                    <p className='flex'>Have an account?
                        <Link to="/Login" className='text-blue-600 ml-0.5 underline'>
                            <p className='font-bold'>Login</p>
                        </Link>
                    </p>

                    <Button fullWidth>Register</Button>
                </form>
            </motion.div>
        </div>
    )
}

export default Register