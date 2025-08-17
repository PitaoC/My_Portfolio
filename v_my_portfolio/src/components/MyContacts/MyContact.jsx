import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './mycontact.css';
import phoneIcon from '../../assets/phone-solid-full.svg';
import emailIcon from '../../assets/envelope-solid-full.svg';
import addressIcon from '../../assets/location-dot-solid-full.svg';

function MyContact() {
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

    return (
        <div className="ContactBorder">

            <div className="ContactPadding">
                <form ref={form} className="FillupForm" onSubmit={sendEmail}>
                    <p>Name</p>
                    <input className='NameIn' type="text" name="user_name" placeholder="Enter Name" required />

                    <div className='Email-Phone-box'>
                        <div className='Email'>
                            <p>Email</p>
                            <input className='EmailIn' type="email" name="user_email" placeholder="Enter Email" required />
                        </div>

                        <div className='Phone'>
                            <p>Phone Number</p>
                            <input className='PhoneIn' type="tel" name="user_phone" placeholder="Enter Phone Number" required />
                        </div>
                    </div>
                    <p>Message</p>
                    <textarea className='TextAreaIn' name="message" placeholder="Enter Message" required></textarea>
                    <button className='SubmitButton' type="submit">Submit</button>
                </form>
            </div>
                <div className='ContactDetails'>
                    <div className='ContactDetailsBox'>
                        <header className='ContactUsBox'>
                            <h1>Contact&nbsp;</h1>
                            <h1 className='h1white'>Us</h1> 
                        </header>
                        <p className='forquestion'>For questions, job offers, technical assistance or collaboration opportunities 
                           via the contact information provided.</p>
                        <div className='ContactInfo'>
                            <div className='PhoneIcon'>
                                <div className='phoneIconContainer'>
                                    <img src={phoneIcon} alt="phoneIcon" />
                                </div>
                                <p>+63 956 8369 352</p>
                            </div>
                            <div className='EmailIcon'>
                                <div className='emailIconContainer'>
                                    <img src={emailIcon} alt="emailIcon" />
                                </div>
                                <p className='Email'> Christianpitao07@gmail.com</p>
                            </div>
                            <div className='AddressIcon'>
                                <div className='addressIconContainer'>
                                    <img src={addressIcon} alt="addressIcon" />
                                </div>
                                <p className='Address'>3552+5RR Ramonita County Homes, Darasa, Tanauan, Batangas, Phillipines</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
        </div>
    );
}

export default MyContact;