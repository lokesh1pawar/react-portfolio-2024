import React from 'react';
import TestimonialWidget from './testimonial/TestimonialWidget';
import reviews from '../review/Data';

const Testimonial = () => {
  return (
    <>
     {/* divider separator line  */}
     <div className='divider-saprate-footer opacity-90 mt-14'></div>
     
 <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-bgMain font-custom1 font-custom2'>
      <div className='text-center'>
      <p className='uppercase text-redFeature let-space-features items-center justify-center flex'>What Clients Say</p>
      <h2 className='items-center justify-center text-navFontColor flex text-4xl font-bold mt-4 mb-6'>Testimonial </h2>
        {/* <h1 className='text-4xl font-bold'>Testimonials</h1> */}
        <div className='bg-viol et-400 h-[4px] w-1/5 mt-1 mx-auto'></div>
        <TestimonialWidget reviews={reviews}/>
      </div>
    </div>


    {/* <div id="testimonial" className="min-h-screen flex items-center justify-center ">
    <h1 className="text-4xl font-bold text-white">Testimonial Section</h1>
  </div> */}
   {/* divider separator line  */}
   <div className='divider-saprate opacity-90'></div>
    </>
  )
}

export default Testimonial