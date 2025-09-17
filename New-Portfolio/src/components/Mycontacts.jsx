import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import phoneIcon from '../assets/phone-solid-full.svg';
import emailIcon from '../assets/envelope-solid-full.svg';
import addressIcon from '../assets/location-dot-solid-full.svg';

function Mycontacts(){
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_32rzqof',
            'template_d21kue8',
            form.current,
            'a16_--3tlXqVcoq_N'
        )
        .then(
            () => {
                alert("Message sent!");
                form.current.reset(); // Clear the form after successful submit
            },
            () => {
                alert("Failed to send message.");
            }
        );
    };
    return(
        <div id='Contact' className="lg:w-screen lg:h-screen
                                     flex lg:flex-row flex-col
                                     bg-gradient-to-b from-indigo-990  to-teal-950
                                     text-white">
            <div id="ContactPadding" className='flex lg:flex-1 items-center justify-center
                                                w-screen h-screen'>
                <form ref={form} id="FillupForm" onSubmit={sendEmail} className='lg:w-2xl w-8/10 
                                                                                 font-libertinus-sans text-lg font-medium'>
                    <p className=' my-3'>Name</p>
                    <input id='NameIn' className='w-full h-10  rounded-md bg-gray-700 pl-3' type="text" name="user_name" placeholder="Enter Name" required />

                    <div id='Email-Phone-box' className='flex flex-row'>
                        <div id='Email' className='flex flex-1 flex-col mr-2'>
                            <p className='b my-3'>Email</p>
                            <input id='EmailIn' className='w-full h-10  rounded-md bg-gray-700 pl-3' type="email" name="user_email" placeholder="Enter Email" required />
                        </div>

                        <div id='Phone' className=' flex flex-1 flex-col'>
                            <p className=' my-3'>Phone Number</p>
                            <input id='PhoneIn' className='w-full h-10 b rounded-md bg-gray-700 pl-3' type="tel" name="user_phone" placeholder="Enter Phone Number" required />
                        </div>
                    </div>
                    <p className=' my-3'>Message</p>
                    <textarea id='TextAreaIn' className='w-full h-60  rounded-md bg-gray-700 pl-3 pt-1' name="message" placeholder="Enter Message" required></textarea>
                    <button id='SubmitButton' className='w-20 rounded-3 bg-teal-300 hover:bg-teal-500 hover:text-teal-200 text-teal-900 font-semibold font-roboto my-3' type="submit">Submit</button>
                </form>
            </div>
            <div id='ContactDetails' className='lg:flex lg:flex-1 lg:items-center content-center justify-center w-screen h-screen'>
                <div id='ContactDetailsBox' className='lg:w-2xl'>
                    <header id='ContactUsBox' className='lg:flex lg:flex-row 
                                                         justify-center text-center
                                                         text-7xl font-mozilla-headline-bold
                                                         my-4'>
                        <h className=''>Contact&nbsp;</h>
                        <h id='h1white' className='text-teal-300'>Us</h> 
                    </header>
                    <p id='forquestion' className='lg:w-9/10 w-9/10 justify-self-center font-mozilla-headline-extralight text-center text-xl lg:justify-self-center'>
                    For questions, job offers, technical assistance or collaboration opportunities 
                    via the contact information provided.
                    </p>
                    <div id='ContactInfo' className='lg:w-9/10 w-9/10 justify-self-center'>
                        <div id='PhoneIcon' className='flex flex-row my-10'>
                            <div id='phoneIconContainer' className='w-15 h-15 rounded-full mr-5 flex items-center justify-center bg-teal-300'>
                                <img src={phoneIcon} alt="phoneIcon" className='w-10 h-10'/>
                            </div>
                            <p className='flex items-center m-0  text-2xl font-mozilla-headline '>+63 956 8369 352</p>
                        </div>
                        <div id='EmailIcon' className='flex flex-row items-center my-10'>
                            <div id='emailIconContainer' className='w-15 h-15 rounded-full mr-5
                                                                    justify-items-center content-center 
                                                                    bg-teal-300 '>
                                <img src={emailIcon} alt="emailIcon" className='w-10 h-10'/>
                            </div>
                            <p id='Email' className='flex items-center m-0  text-2xl font-mozilla-headline '> Christianpitao07@gmail.com</p>
                        </div>
                        <div id='AddressIcon' className='flex flex-row items-center my-10 '>
                            <div id='addressIconContainer' className='w-15 h-15 rounded-full mr-5
                                                                      justify-items-center content-center 
                                                                      bg-teal-300 '>
                                <img src={addressIcon} alt="addressIcon" className='w-10 h-10'/>
                            </div>
                            <p id='Address' className='flex items-center m-0 
                                                       w-8/10
                                                       text-2xl font-mozilla-headline text-start 
                                                       '>3552+5RR Ramonita County Homes, Darasa, Tanauan, Batangas, Phillipines</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mycontacts;