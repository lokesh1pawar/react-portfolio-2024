import React, { useState, useEffect } from 'react';
import SocialIcons from "./SocialIcons";

const WelcomeHome = () => {
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
        <div id="home" className="min-h-screen flex flex-col bg-bgMain mt-[92px]">
            {/* Content Box */}
            <div className='w-full p-8 lg:p-16 flex flex-col lg:flex-row'>

                <div className="lg:w-1/2 lg:pr-10">
                    <p className="text-navFontColor font-custom1 font-custom2 let-space text-left font-14 uppercase">
                        Welcome to my world
                    </p>
                    <h1 className='text-white text-5xl lg:text-7xl font-bold font-custom1 font-custom2 mt-4 lg:mt-[92px] text-left'>
                        Hi, I’m <span className='text-redForName'>Gourav Singh Bais</span>
                    </h1>
                    <div className="mt-4 text-3xl lg:text-5xl font-custom1 font-custom2 text-left">
                        <span className="text-white font-bold">a </span>
                        <span className="text-white font-bold ">{currentText}</span>
                    </div>
                    <div className='mt-6 lg:mt-10 opacity-90 font-custom1 font-custom2 text-left'>
                        <p className='text-navFontColor tracking-wide leading-7'>
                            Experienced data scientist skilled in transforming data into actionable insights to
                            <br className='lg:hidden' /> solve complex business challenges. I have published more than 125 technical articles
                            <br className='lg:hidden' /> and created content for organisations like O’reilly,
                            Neptune, Comet, HitSubscribe,
                            <br className='lg:hidden' /> InfluxDB, Domino Data Lab, etc. I provide software services for building ML solution.
                            <br className='lg:hidden' /> Also, working as an evaluator in GreatLearning.
                        </p>
                    </div>
                </div>
                {/* Image Box */}
                <div className="lg:w-1/2 flex justify-center items-flex-start mt-6 lg:mt-0 align-flex-start">
                    <img className='img-height-home img-box img-box-white' src="gourav.png" alt="Gourav image" />
                </div>

            </div>
            {/* Find with me Social Icons */}
            <div className="flex justify-center lg:justify-start mt-6">
                <SocialIcons />
            </div>

            {/* Divider separator line */}
            <div className='divider-saprate opacity-90'></div>
        </div>
    );
};

export default WelcomeHome;
