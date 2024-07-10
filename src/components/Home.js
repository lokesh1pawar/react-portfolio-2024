import React from 'react'
import Navbar from './Navbar';
import WelcomeHome from './WelcomeHome';
import Features from './Features';
import Resume from './Resume';
import Contacts from './Contacts';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Blog from './blog/Blog';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <>
    <div>

    {/* Nav Section  */}
    <Navbar />

    {/* Home Section  */}
    <WelcomeHome/>

    {/* Features Section  */}
    <Features/>

    {/* Resume Section  */}
    <Resume/>

    {/* Testimonial Section  */}
    <Testimonial/>

    {/* Blog Section  */}
    <Blog />

    {/* Contact Section  */}
    <Contacts/>

    {/* Footer Section  */}
    <Footer/>

    {/* Back to Top button */}
    <BackToTop/>
 
  </div>
  </>

  )
}

export default Home