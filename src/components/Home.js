import React, { useState, useEffect } from 'react'
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";


const Home = () => {

    const titles = ["Senior Data Scientist.", "Technical Content Creator."];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let typingTimeout;
        const type = () => {
            const currentTitle = titles[currentTitleIndex];
            if (isDeleting) {
                setCurrentText(currentTitle.substring(0, currentText.length - 1));
                setTypingSpeed(30);
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
                    setTypingSpeed(30);
                }
            } else {
                setCurrentText(currentTitle.substring(0, currentText.length + 1));
                setTypingSpeed(30);
                if (currentText === currentTitle) {
                    setIsDeleting(true);
                    setTypingSpeed(1500);
                }
            }
        };

        typingTimeout = setTimeout(type, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [currentText, isDeleting, typingSpeed, currentTitleIndex]);

    return (
        <>
            <div id="home" className="min-h-screen flex bg-bgMain">
                {/* First image box  */}
                <div>
                    <div className='mt-200'>
                        <p className="text-navFontColor font-custom1 font-custom2 let-space ml-16 font-14 uppercase " >
                            Welcome to my world
                        </p>
                    </div>
                    <div className="mt-6 ml-16">
                        <h1 className='text-white text-5xl font-bold  font-custom1 font-custom2'> Hi, I’m <span className='text-redForName'>Gourav Singh Bais</span></h1>
                    </div>
                    <div className="mt-4 ml-16 text-5xl font-custom1 font-custom2">
                        <span className="text-white font-bold">a </span>
                        <span className="text-white font-bold">{currentText}</span>
                    </div>

                    <div className='mt-10 ml-16 opacity-90 font-custom1 font-custom2 '>
                        <p className='text-navFontColor tracking-wide leading-7'>Experienced data scientist skilled in transforming data into actionable insights to <br />solve complex business challenges. I have published more than 125 technical articles <br />and created content for organisations like O’reilly,
                            Neptune, Comet, HitSubscribe,<br /> InfluxDB, Domino Data Lab, etc. I provide software services for building ML solution.<br /> Also, working as an evaluator in GreatLearning.</p>
                    </div>

                        <div>
                            <p className='uppercase font-14 font-custom1 font-custom2 text-navFontColor let-space-social opacity-80 mt-20 ml-32'>Find with me</p>
                            
                            <div className='flex space-x-7 ml-28 mt-6 w-44'>
                            <a href="https://www.linkedin.com/in/gourav-singh-bais/" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500" />
                            </a>

                            <a className='shadow-lg' href="https://twitter.com/GouravSinghBail/" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500" />
                            </a>

                            <a href="https://medium.com/@gouravbais08/" target="_blank" rel="noopener noreferrer">
                            <FaMedium className="text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-slate-400 hover:shadow-lg hover:translate-y-2 ease-in-out transform transition duration-500" />

                            </a>
                            </div>
                           

                        </div>

                </div>

                {/* Second image box  */}
                <div className="mt-40 ml-60">
                    <img className='img-height-home img-box' src="banner-01.png" alt="Gourav image" />
                </div>
            </div>

            {/* divider separator line  */}
            <div className='divider-saprate opacity-90'></div>

        </>



    )
}

export default Home