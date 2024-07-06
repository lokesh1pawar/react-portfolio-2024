import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0); // not working , that's why i used "fixed" in nav-Class 
        setHasScrolled(window.scrollY > 80);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll); 
    }, []); 


  return (
    // <nav className="bg-bgMain fixed p-4  w-full z-10 ">
    <nav
      className={`bg-bgMain p-3.5 fixed w-full z-10 transition duration-300 ease-in-out ${
        isSticky ? 'top-0' : 'top-[0px]' 
      } ${hasScrolled ? 'border-b border-gray-800 drop-shadow-2xl backdrop-blur-md bg-opacity-90' : ''}`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <div className="text-white text-2xl ">
        <img
            className="h-16"  
            src="logo.png" 
            alt="Logo"
          />
          {/* <ScrollLink to="home" smooth={true} duration={500}>
            Gaurav
          </ScrollLink> */}
        </div>
        <ul className="flex space-x-8 text-gray-400 uppercase p-4 mr-10 cursor-pointer
         hover:text-navHoverUl duration-200 ease-in-out">
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink 
            to="home" 
            smooth={true} 
            duration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Home
            </ScrollLink>
          </li>
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink 
            to="features" 
            smooth={true} 
            duration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Features
            </ScrollLink>
          </li>
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink to="resume" 
            smooth={true} 
            duration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Resume
            </ScrollLink>
          </li>
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink to="testimonial" 
            smooth={true} 
            duration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Testimonial
            </ScrollLink>
          </li>
          {/* {<li className='text-sm font-custom1 font-custom2'>
            <ScrollLink to="clients" smooth={true} duration={500} activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Clients
            </ScrollLink>
          </li>} */}
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink to="blog" 
            smooth={true} 
            duration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Blog
            </ScrollLink>
          </li>
          <li className='text-sm font-custom1 font-custom2'>
            <ScrollLink to="contacts" 
            smooth={true} d
            uration={500} 
            activeClass="text-white transition duration-300 ease-in-out"
            className="hover:text-redForHoverNav transition duration-300 ease-in-out"
            spy={true}>
              Contacts
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
