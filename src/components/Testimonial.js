import React from 'react';
import TestimonialWidget from './testimonial/TestimonialWidget';
import reviews from '../review/Data';

const Testimonial = () => {
  return (
    <>
      {/* Divider separator line */}
      <div className='divider-saprate-footer opacity-90 mt-14'></div>
      
      <div id='testimonial' className='flex flex-col justify-center items-center  font-custom1 font-custom2 lg:mt-12 md:mt-12'>
        <div className='text-center'>
          <p className='uppercase text-redFeature let-space-features items-center justify-center flex'>What Clients Say</p>
          <h2 className='items-center justify-center text-navFontColor flex text-4xl font-bold mt-4 mb-6'>Testimonial</h2>
          <TestimonialWidget reviews={reviews}/>
        </div>
      </div>

      {/* Divider separator line */}
      <div className='divider-saprate opacity-90'></div>
    </>
  )
}

export default Testimonial;
