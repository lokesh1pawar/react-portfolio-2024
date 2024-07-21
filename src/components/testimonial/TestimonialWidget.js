import React, { useState } from 'react'
import Card from './Card'
import {FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export const TestimonialWidget = ({ reviews }) => {

    const[index, setIndex] = useState(0);

    function leftShiftHandler() {

        if(index-1 < 0 ) setIndex(reviews.length -1);
    else setIndex(index-1);
    }
    function rightShiftHandler() {
        if(index+1 >= reviews.length) setIndex(0);
        else setIndex(index+1)
    }

    return (
        <div 
            className='w-[85vw]  bg-bgMain flex flex-col
            justify-center items-center mt-10 p-10 transition-all duration-700
            hover:shadow-xl rounded-md img-box font-custom1 font-custom2'>
            <div>
                <Card review = {reviews[index]}/>
            </div>
            <div className='flex text-3xl mt-10 gap-3 text-navFontColor font-bold text-center justify-center'>
                <button 
                    className='cursor-pointer text-navFontColor hover:text-redForHoverNav duration-300'
                    onClick={leftShiftHandler}
                    >
                    <FaArrowLeft/>
                </button>
                <button 
                    onClick={rightShiftHandler}
                    className='cursor-pointer text-navFontColor hover:text-redForHoverNav ml-5 duration-300'
                    >
                    <FaArrowRight/>
                </button>
            </div>
        </div>
    )
}

export default TestimonialWidget