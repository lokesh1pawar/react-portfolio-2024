import React from 'react';
import TestimonialWidget from './testimonial/TestimonialWidget';
import reviews from '../review/Data';

const Testimonial = () => {
  return (
    <>
      {/* Divider separator line */}
      <div className='divider-saprate-footer opacity-90 mt-14'></div>
      
      <div id='testimonial' className='flex flex-col justify-center items-center  font-custom1 font-custom2'>
        <div className='text-center'>
          <p className='uppercase text-redFeature let-space-features items-center justify-center flex'>What Clients Say</p>
          <h2 className='items-center justify-center text-navFontColor flex text-4xl font-bold mt-4 mb-6'>Testimonial</h2>
          <div className='bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
          <TestimonialWidget reviews={reviews}/>
        </div>
      </div>

      {/* Divider separator line */}
      <div className='divider-saprate opacity-90'></div>
    </>
  )
}

export default Testimonial;
