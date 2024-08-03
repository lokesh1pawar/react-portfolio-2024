import React from 'react'
import Navbar from './Navbar';
import WelcomeHome from './WelcomeHome';
import Features from './Features';
import Resume from './resume/Resume';
import Contacts from './Contacts';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Blog from './blog/Blog';
import Testimonial from './Testimonial';
import EmailForm from './EmailForm';

const Home = () => {
  return (
    <>
    <div>

    {/* Nav Section  */}
    <Navbar />

  
    <WelcomeHome/>

   
     <Features/>

   
   <Resume/>

  
    <Testimonial/>

   
    <Blog />

   
     <Contacts/>

{/* <EmailForm/> */}
  
    <Footer/>

   
    <BackToTop/>
 
  </div>
  </>

  )
}

export default Home