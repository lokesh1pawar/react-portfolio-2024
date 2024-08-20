import React from 'react'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './resume.css';

const Resume = () => {
  return (
    <>
    <div id="resume" className=" bg-bgMain font-custom1 font-custom2 mb-24">
    <p className='uppercase text-redFeature let-space-features items-center justify-center flex mt-20'>5+ Years of Experience</p>
    <h2 className='items-cente text-navFontColor justify-center flex mt-20 text-6xl font-bold mt-4'>My Resume</h2>
    
      <div className='justify-center flex mt-12'>
      <a
        href="Gourav_Singh_Bais_Resume_2024.pdf"
        download
        className=" hover:text-redForHoverNav bg-white duration-300 shadow-gray-900 shadow-md text-black img-box-white w-[230px] p-4 text-center tracking-wider rounded-lg font-medium text-lg hover:-translate-y-2 "
      >
        Download Resume
      </a>
      </div>

    </div>
    
      </>
      
  )
}

export default Resume