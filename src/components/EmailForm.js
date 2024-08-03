import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [msg, setmsg] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_qpemxcq';
        const tempId = 'template_rv25ukh';
        const publicKey = '-5yvt0n1Ki0_qlGwH';

        const tempParams = {
            from_name: name,
            from_email: email,
            to_name: 'Machine LH',
            message: msg,
        };

        // send email using EmailJs 
        emailjs.send(serviceId, tempId, tempParams, publicKey)
            .then((response) => {
                console.log('Email send successfully', response);
                setname('');
                setemail('');
                setmsg('');

            })
            .catch((error) => {
                console.error('Error sending email', error);
            });
    };

    return (
        <form onSubmit={sendEmail} className='flex justify-center'>
            <label>Name</label>

            <input type="text" name="user_name" value={name}
                onChange={(e) => setname(e.target.value)} />

            <label>Email</label>
            <input type="email" name="user_email" value={email}
                onChange={(e) => setemail(e.target.value)} />
            <label>Message</label>

            <textarea 
            name="message"
             value={msg}
             onChange={(e) => setmsg(e.target.value)}
              />
            <button className='bg-white' type="submit">send</button>
        </form>
    );
}

export default EmailForm