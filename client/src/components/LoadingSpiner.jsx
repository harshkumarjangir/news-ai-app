import React from 'react'
import { Loader } from '@mantine/core';

const LoadingSpiner = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Loader size={32} color='black' />
        </div>
    )
}

export default LoadingSpiner