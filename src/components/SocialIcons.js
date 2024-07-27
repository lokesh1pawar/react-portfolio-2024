import React from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className=''>
          <p className='uppercase font-14 font-custom1 font-custom2 text-navFontColor let-space-social opacity-80  ml-32'>Find with me</p>

                <div className='flex space-x-7 ml-28 mt-6 w-44'>
                  <div className='img-box-white  hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>
                  <a href="https://www.linkedin.com/in/gourav-singh-bais/" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md " />
                    </a>
                     </div>
              <div className='img-box-white  hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>

                 <a className='shadow-lg' href="https://twitter.com/GouravSinghBail/" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md" />
                     </a>
                     </div>

                  <div className='img-box-white  hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>

                     <a href="https://medium.com/@gouravbais08/" target="_blank" rel="noopener noreferrer">
                     <FaMedium className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md" />
                     </a>
                   </div>
               </div>
           </div>
  )
}

export default SocialIcons