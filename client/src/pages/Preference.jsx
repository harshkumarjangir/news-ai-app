import React, { useState } from 'react'
import { Button } from '@mantine/core'
import {CircleCheckBig} from 'lucide-react'
import { motion } from 'motion/react';

const Preference = () => {

    const [selectedCategory, setelectedCategory] = useState([])

    const categories = [
        'Technology',
        'Sports',
        'Health',
        'Entertainment',
        'Business',
        'Politics',
    ];

    // console.log(categories);

    const toggleCategory = (category) => {
        setelectedCategory(
            selectedCategory.includes(category)
                ? selectedCategory.filter((c) => c !== category)
                : [...selectedCategory, category]
        )
    }

    // console.log(selectedCategory);
    


    return (
        <div className='h-screen bg-gray-100 flex flex-col justify-center items-center gap-10'>
            <div className="">
                <h1 className='text-gray-800 font-bold text-3xl md:text-4xl tracking-wide'>Select your Interests</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {
                    categories.map((category, index) => (
                        <motion.div key={index} whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration: .3}} onClick={()=> toggleCategory(category)} className={`flex justify-center items-center gap-2 text-center px-5 py-3 shadow-md rounded-lg ${selectedCategory.includes(category) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                            {selectedCategory.includes(category) && <CircleCheckBig/>}
                            {category}
                        </motion.div>
                    ))
                }
            </div>
            <Button>Save Preference</Button>
        </div>
    )
}

export default Preference


// technology, sports, politics, entertainment, health, business;

// [] => sports => toggleFunction => setFunction => [sports] => filter => [] => [sports]