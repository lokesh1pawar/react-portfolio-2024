import React from 'react'

const Features = () => {
    return (
        <>
        <div id="features" className="min-h-screen bg-bgMain text-navFontColor font-custom1 font-custom2 ">
            {/* <h1 className="text-4xl font-bold text-white">Features Section</h1> */}
            <span className='uppercase text-redFeature let-space-features font-14 font-medium margin-left-70'>Features</span>
            <h2 className='text-navFontColor text-6xl font-bold mt-4 ml-16'>What I Do</h2>

            {/* Six box sections */}
            <div className="w-full flex flex-wrap justify-around mt-16">
                {/* First Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md ">
                <div className='hover:-translate-y-4  transform transition duration-300'>
                    <div className=" text-redFeature mt-8 mr-48">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95">Technical Content Writing</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Elevate your technical content to new heights with my meticulously researched and flawlessly articulated writing services – where complexity meets clarity effortlessly!
                    </p>
                </div>
                </div>
                {/* Second Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md">
                <div className='hover:-translate-y-4  transform transition duration-300'>
                 <div className=" text-redFeature mt-8 mr-48">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95 mr-[108px]">Editing Services</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Transform your writing into polished perfection with my professional editing expertise – because every story deserves to be told impeccably!
                    </p>
                </div>
                </div>
                {/* Third Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md">
                <div className='hover:-translate-y-4  transform transition duration-300'>
                <div className=" text-redFeature mt-8 mr-48">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tv"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95 mr-[95px]">ML Development</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Embark on your journey to AI mastery with my comprehensive guidance in building ML projects – turning concepts into reality, one algorithm at a time!
                    </p>
                </div>
                </div>
                {/* Fourth Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md">
                <div className='hover:-translate-y-4  transform transition duration-300'>
                <div className=" text-redFeature mt-8 mr-48">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95 mr-[80px]">SEO Optimisation</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Embark on your journey to AI mastery with our comprehensive guidance in building ML projects – turning concepts into reality, one algorithm at a time!
                    </p>
                </div>
                </div>
                {/* Fifth Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md">
                <div className='hover:-translate-y-4  transform transition duration-300'>
                <div className=" text-redFeature mt-8 mr-48">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95 mr-[131px]">UX Designing</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Craft unforgettable digital experiences with my UX design expertise – where every click, swipe, and interaction is thoughtfully curated for maximum impact!
                    </p>
                </div>
                </div>
                {/* Sixth Box  */}
                <div className=" flex flex-col items-center mb-8 border-for-box img-box img-box-white height-338 w-96 2xl:w-[400px] rounded-md">
                    <div className='hover:-translate-y-4  transform transition duration-300'>
                    <div className=" text-redFeature mt-8 mr-48">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    </div>
                    <h4 className="text-2xl font-medium mt-8 text-navFontColor opacity-95 mr-[38px]">Mentor and Evaluator</h4>
                    <p className="text-base w-[300px] mt-4 opacity-95">
                        Elevate your machine learning journey with my tailored mentoring and evaluation support – because success in the ML space is not just about algorithms, it's about mentorship!r
                    </p>
                    </div>
                </div>
            </div>
        </div>
            {/* divider separator line  */}
            <div className='divider-saprate opacity-90'></div>
       </>
    )
}

export default Features