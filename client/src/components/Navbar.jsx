import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "motion/react"
import {Button} from '@mantine/core'

const Navbar = () => {
    return (
        <div className="bg-[rgba(0,0,0,0.09)] shadow-md">
            <nav className="h-16">
                <div className="flex justify-between items-center px-5 py-5 font-medium">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="text-2xl font-semibold">NewsAI</motion.h1>

                    <ul className="hidden sm:flex gap-5 text-sm ">
                        {
                            ['Home', 'Categories', 'Channel', 'About']
                                .map((item) => (
                                    <>
                                        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }} key={item} className='hover:text-gray-700'>
                                            <NavLink to={`/${item.toLowerCase()}`} className="uppercase">
                                                {item}
                                                <hr className='w-3/4 border-none h-[1.5px] bg-gray-700 hidden' />
                                            </NavLink>
                                        </motion.li>

                                    </>
                                ))
                        }
                    </ul>

                    {/* <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                        <NavLink to='/home' className='flex flex-col items-center gap-1'>
                            <p className='uppercase'>Home</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                    </ul> */}

                    <div className="">
                        <button className=''>Login</button>
                        <button className=''>Register</button>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar