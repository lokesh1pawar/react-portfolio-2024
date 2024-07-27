import React from 'react'
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export const Card = ({review}) => {
    return (
        <div className='flex flex-col md:relative '>
            <div className='absolute top-[-7rem] z-[10] mx-auto hidden md:block '>
                <img
                    className='aspect-square rounded-full w-[140px] h-[140px] z-25' 
                    src={review.image} alt=''/>
                <div className='w-[140px] h-[140px] bg-gray-900 rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold text-inputtxt tracking-wider text-3xl capitalize'>{review.name}</p>
                <p className='text-inputtxt uppercase text-sm mt-2'>{review.job}</p>
            </div>
            <div className='text-gray-500 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>
            <div className='text-gray-500 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>
        </div>
    )
}

export default Card