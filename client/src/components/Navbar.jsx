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
        <div className="sticky top-0 z-50 bg-white backdrop-blur-md bg-opacity-80">
            <nav className="h-16">
                <div className="flex justify-between items-center px-5 py-5 font-medium">
                    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className="text-2xl font-semibold">NewsAI</motion.h1>

                    {/* DeskTop View*/}
                    <ul className='hidden md:flex gap-5 text-sm '>
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

                    <div className="hidden md:flex justify-between items-center space-x-5">
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

                    <button onClick={hancleOpen} className="md:hidden">
                        {isOpen ? <X /> : <AlignRight />}
                    </button>
                </div>

                {/* Mobile View */}
                {/* <motion.ul initial={{ opacity: 0, scale: 0 , y: -100 }} animate={{ opacity: 1, scale: 1 , y: 0 }} transition={{ duration: 1.5 }} className={`${isOpen ? 'block' : 'hidden'} md:hidden gap-5 text-md text-center bg-white`}>
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
                </motion.ul> */}

                {isOpen && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className='bg-white p-4 mx-4 shadow-md rounded-md'>
                    <ul className='md:hidden flex flex-col items-center gap-y-5 text-md'>
                        {
                            ['Home', 'Categories', 'Channel', 'About']
                                .map((item) => (
                                    <>
                                        <motion.li whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }} key={item} className='hover:text-gray-700'>
                                            <NavLink to={`/${item.toLowerCase()}`} className="uppercase">
                                                {item}
                                                <hr className='w-full border-none h-[1.5px] bg-gray-700 hidden' />
                                            </NavLink>
                                        </motion.li>

                                    </>
                                ))
                        }
                    </ul>
                    <div className="md:hidden flex  flex-col gap-2 p-2">
                        <Link to='/login'>
                            <Button className='' fullWidth variant='default' rightSection={<LogIn size={14} />}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/register'>
                            <Button className='' fullWidth rightSection={<UserPlus size={14} />}>
                                Register
                            </Button>
                        </Link>
                    </div>
                </motion.div>}

            </nav>
        </div>
    )
}

export default Navbar