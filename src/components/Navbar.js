import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu open/close

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setHasScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`bg-bgMain p-3.5 fixed w-full z-10 transition duration-300 ease-in-out 
        ${isSticky ? 'top-0' : 'top-[0px]'}
        ${hasScrolled ? 'border-b border-gray-800 drop-shadow-2xl backdrop-blur-md bg-opacity-90' : ''}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <img className="h-16" src="logo.png" alt="Logo" />
        </div>
        {/* Hamburger Menu Button for mobile */}
        {/* <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 7h-14c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm0 5h-14c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1zm0 5h-14c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h18c.552 0 1 .448 1 1s-.448 1-1 1h-18c-.552 0-1-.448-1-1s.448-1 1-1zm18 4h-18c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1zm0 5h-18c-.552 0-1-.448-1-1s.448-1 1-1h18c.552 0 1 .448 1 1s-.448 1-1 1z"
                />
              )}
            </svg>
          </button>
        </div> */}

<div className="block lg:hidden">
      <button
        onClick={toggleMobileMenu}
        className="text-gray-400 hover:text-white focus:outline-none"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMobileMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.364 5.636a1 1 0 00-1.414 0L12 10.586 7.05 5.636a1 1 0 00-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 101.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 5h18c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h18c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h18c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1zm0 4h18c.552 0 1 .448 1 1s-.448 1-1 1H3c-.552 0-1-.448-1-1s.448-1 1-1z"
            />
          )}
        </svg>
      </button>
    </div>
    
        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-8 text-gray-400 uppercase p-4 mr-10 cursor-pointer">
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="home"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Home
            </ScrollLink>
          </li>
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="features"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Features
            </ScrollLink>
          </li>
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="resume"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Resume
            </ScrollLink>
          </li>
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="testimonial"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Testimonial
            </ScrollLink>
          </li>
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="blog"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Blog
            </ScrollLink>
          </li>
          <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
            <ScrollLink
              to="contacts"
              smooth={true}
              duration={300}
              activeClass="text-white"
              className="hover:text-redForHoverNav transition duration-300 ease-in-out"
              spy={true}
            >
              Contacts
            </ScrollLink>
          </li>
        </ul>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[92px] left-0 w-full  bg-bgMain text-gray-400">
            <div className="p-4">
              <ul className="space-y-4">
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Features
                  </ScrollLink>
                </li>
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="resume"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Resume
                  </ScrollLink>
                </li>
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="testimonial"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Testimonial
                  </ScrollLink>
                </li>
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="blog"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Blog
                  </ScrollLink>
                </li>
                <li className="text-sm font-custom1 font-custom2 text-center hover:text-red-500"> {/* Apply hover:text-red-500 class here */}
                  <ScrollLink
                    to="contacts"
                    smooth={true}
                    duration={300}
                    activeClass="text-white"
                    className="hover:text-redForHoverNav transition duration-300 ease-in-out"
                    spy={true}
                    onClick={toggleMobileMenu} // Close mobile menu on click
                  >
                    Contacts
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
