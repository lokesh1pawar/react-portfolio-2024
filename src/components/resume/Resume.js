import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './resume.css';
import { LuGraduationCap } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";


const Resume = () => {
  return (
    <>
    <div id="resume" className="min-h-screen bg-bgMain font-custom1 font-custom2">
    <p className='uppercase text-redFeature let-space-features items-center justify-center flex mt-20'>5+ Years of Experience</p>
    <h2 className='items-cente text-navFontColor justify-center flex mt-20 text-6xl font-bold mt-4'>My Resume</h2>

      {/* Tabs Section  */}
      <Tabs className={`text-white mt-4 p-14`}>
    <TabList className={`justify-center flex cursor-pointer text-navFontColor space-x-24 font-medium text-lg`}>
      
      <Tab className={` hover:text-redForHoverNav bg-bgMain duration-300 shadow-gray-900 shadow-md img-box-white w-[170px] p-4 text-center tracking-wider	flex rounded-sm`}> <LuGraduationCap className='text-2xl mr-2'/> Education</Tab>
      <Tab className={` hover:text-redForHoverNav bg-bgMain duration-300 shadow-gray-900 shadow-md img-box-white w-[170px] p-4 text-center tracking-wider flex rounded-sm`}> <GoBriefcase className='text-2xl mr-2'/> Experience</Tab>
    </TabList>

    {/* Tab Content Section  */}
    <TabPanel>
    <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B K Birla Institute of Engineering & Technology
                </h3>
                <span className="qualification__subtitle">
                  computer science and engineering - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2016 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
    </TabPanel>

    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
    
      </>
      
  )
}

export default Resume