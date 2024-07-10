import React, { useState, useEffect } from 'react'
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
        <>
            <div id="home" className="min-h-screen flex bg-bgMain">
                {/* First image box  */}
                <div className='w-[65%]'>
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
                        <span className="text-white font-bold ">{currentText}</span>
                    </div>

                    <div className='mt-10 ml-16 opacity-90 font-custom1 font-custom2 '>
                        <p className='text-navFontColor tracking-wide leading-7'>Experienced data scientist skilled in transforming data into actionable insights to <br />solve complex business challenges. I have published more than 125 technical articles <br className='' />and created content for organisations like O’reilly,
                            Neptune, Comet, HitSubscribe,<br className='' /> InfluxDB, Domino Data Lab, etc. I provide software services for building ML solution.<br className='' /> Also, working as an evaluator in GreatLearning.</p>
                    </div>

                    {/* Find with me Social Icons */}
                    <SocialIcons/>
                </div>

                {/* Second image box  */}
                <div className="mt-40">
                    <img className='img-height-home img-box img-box-white ' src="banner-01.png" alt="Gourav image" />
                </div>
            </div>
            {/* divider separator line  */}
            <div className='divider-saprate opacity-90'></div>
        </>
    )
}

export default WelcomeHome