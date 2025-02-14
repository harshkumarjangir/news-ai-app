import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from "motion/react"
import { Button } from '@mantine/core'
import { X, AlignRight, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const hancleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="sticky top-0 z-50 bg-white backdrop-blur-md opacity-80">
            <nav className="h-16">
                <div className="flex justify-between items-center px-5 py-5 font-medium">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="text-2xl font-semibold">NewsAI</motion.h1>

                    {/* DeskTop View*/}
                    <ul className='hidden sm:flex gap-5 text-sm '>
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

                    <div className="hidden sm:flex justify-between items-center space-x-5">
                        <Link to='/login'>
                            <Button className='' variant='default' rightSection={<LogIn size={14} />}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/register'>
                            <Button className='' rightSection={<UserPlus size={14} />}>
                                Register
                            </Button>
                        </Link>
                    </div>

                    <button onClick={hancleOpen} className="sm:hidden">
                        {isOpen ? <X /> : <AlignRight />}
                    </button>
                </div>

                {/* Mobile View */}
                <ul className={`${isOpen ? 'block' : 'hidden'} sm:hidden gap-5 text-md text-center bg-gray-300`}>
                    {
                        ['Home', 'Categories', 'Channel', 'About']
                            .map((item) => (
                                <>
                                    <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }} key={item} className='hover:text-gray-700'>
                                        <NavLink to={`/${item.toLowerCase()}`} className="uppercase block px-4 py-2">
                                            {item}
                                            <hr className='w-1/4 mx-auto border-none h-[1.5px] bg-gray-700 hidden' />
                                        </NavLink>
                                    </motion.li>

                                </>
                            ))
                    }
                    <div className="flex justify-evenly py-2">
                        <Link to='/login'>
                            <Button className='' variant='default' rightSection={<LogIn size={14} />}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/register'>
                            <Button className='' rightSection={<UserPlus size={14} />}>
                                Register
                            </Button>
                        </Link>
                    </div>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar