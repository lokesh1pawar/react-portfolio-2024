import React, { useState } from 'react';
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [msg, setMsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_kyiq9fp';
        const tempId = 'template_i7k4mve';
        const publicKey = 'qEU0bei341ByuvM0o';

        const tempParams = {
            from_name: name,
            from_email: email,
            to_name: 'Machine Learning Hub',
            phone: phone,
            subject: subject,
            message: msg,
        };

        // send email using EmailJs 
        emailjs.send(serviceId, tempId, tempParams, publicKey)
            .then((response) => {
                console.log('Email send successfully', response);
                alert('Email send successfully');
                setName('');
                setPhone('');
                setEmail('');
                setSubject('');
                setMsg('');
            })
            .catch((error) => {
                console.error('Error sending email', error);
            });
    };

    return (
        <>
            <div id="contacts" className="min-h-screen bg-bgMain text-navFontColor font-custom1 font-custom2 mt-2">
                <p className='uppercase text-redFeature let-space-features items-center justify-center flex mt-2'>Contact</p>
                <h2 className='items-center justify-center flex text-4xl sm:text-5xl md:text-6xl font-bold mt-4'>Contact With Me</h2>

                {/* Contact Section  */}
                <div className='flex flex-col lg:flex-row items-center justify-center mt-14'>
                    
                    {/* Left Contact Section  */}
                    <div className='border-for-box img-box img-box-white h-auto w-full lg:w-[28rem] p-8 m-4'>
                        <div className='overflow-hidden'>
                            <img className='h-[239px] transform transition duration-500 hover:scale-110' src="contact1.png" alt="Contact image" />
                        </div>

                        <h4 className='text-[22px] sm:text-[26px] md:text-[29px] leading-10 mb-3 font-bold mt-7 '>Gourav Singh Bais</h4>
                        <span className='tracking-wide text-navHoverUl text-base '>Senior Data Scientist & Technical Content Creator</span>
                        <p className='text-lg text-navHoverUl mt-5 font-normal leading-7 '>I am available for freelance work. Connect with me via Twitter, LinkedIn and call.</p>

                        {/* Phone & email     */}
                        <div className='leading-8 mt-4'>
                            <span className='text-navHoverUl'>Phone: 
                                <a className='text-navFontColor hover:text-redForHoverNav ease-in-out duration-300' href="tel:+917869878010">  +91 7869878010 &nbsp;&nbsp;</a>
                            </span> <br/>
                            <span className='text-navHoverUl'>Email: 
                                <a className='text-navFontColor hover:text-redForHoverNav ease-in-out duration-300' href="mailto:gouravbais08@gmail.com">  gouravbais08@gmail.com</a> 
                            </span>
                        </div>
                        
                        {/* Social Icons  */}
                        <div>
                            <p className='uppercase text-navFontColor let-space-social opacity-80 mt-10'>Find with me</p>
                            <div className='flex space-x-6 mt-6 w-full justify-center md:justify-start xs'>
                                <div className='img-box-white hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>
                                    <a href="https://www.linkedin.com/in/gourav-singh-bais/" target="_blank" rel="noopener noreferrer">
                                        <FiLinkedin className="text-4xl sm:text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-redForHoverNav ease-in-out duration-300" />
                                    </a>
                                </div>
                                <div className='img-box-white hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>
                                    <a className='shadow-lg' href="https://twitter.com/GouravSinghBail/" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter className="text-4xl sm:text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-redForHoverNav ease-in-out duration-300" />
                                    </a>
                                </div>
                                <div className='img-box-white hover:text-slate-400 hover:shadow-lg hover:-translate-y-2 ease-in-out transform transition duration-500'>
                                    <a href="https://medium.com/@gouravbais08/" target="_blank" rel="noopener noreferrer">
                                        <FaMedium className="text-4xl sm:text-5xl text-navFontColor border border-navFontColor box-full p-2 shadow-md hover:text-redForHoverNav ease-in-out duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Contact Section */}
                    <div className='border-for-box img-box img-box-white h-auto lg:h-[45rem] w-full lg:w-[817px] p-8 m-4'>
                        <div className='flex flex-col w-full'>
                        <form onSubmit={sendEmail} className="flex flex-col w-full space-y-4">
                        <label htmlFor="name" className="uppercase text-inputtxt font-medium text-xs let-space-features mb-3">Your Name</label>
                            <input type="text" 
                                   id="name" 
                                   className="bg-inputBg border border-inputBg rounded px-3 py-2 mb-5 h-12"
                                   value={name} 
                                   onChange={(e) => setName(e.target.value)} />

                            <label htmlFor="phone" className="uppercase text-inputtxt font-medium text-xs let-space-features mb-3">Phone Number</label>
                            <input type="tel"
                                   id="phone" 
                                   className="bg-inputBg border border-inputBg rounded px-3 py-2 mb-5 h-12" 
                                   value={phone} 
                                   onChange={(e) => setPhone(e.target.value)}/>

                            <label htmlFor="email" className="uppercase text-inputtxt font-medium text-xs let-space-features mb-3">Email</label>
                            <input type="email" 
                                   id="email" 
                                   className="bg-inputBg border border-inputBg rounded px-3 py-2 mb-5 h-12" 
                                   value={email} 
                                   onChange={(e) => setEmail(e.target.value)}/>

                            <label htmlFor="subject" className="uppercase text-inputtxt font-medium text-xs let-space-features mb-3">Subject</label>
                            <input type="text" 
                                   id="subject" 
                                   className="bg-inputBg border border-inputBg rounded px-3 py-2 mb-5 h-12" 
                                   value={subject}
                                   onChange={(e) => setSubject(e.target.value)}/>

                            <label htmlFor="message" className="uppercase text-inputtxt font-medium text-xs let-space-features mb-3">Your Message</label>
                            <textarea id="message"
                                      value={msg}
                                      onChange={(e) => setMsg(e.target.value)}
                                      className="border bg-inputBg border-inputBg rounded px-3 py-2 h-24 mb-5"></textarea>

                            <input type="submit"
                                   id="submit" 
                                   className="bg-submitBtn img-box mt-5 h-14 border border-inputBg rounded px-3 py-2 mb-4 hover:-translate-y-2 ease-in-out transform transition duration-450 cursor-pointer" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;
