import './mycontact.css';
import phoneIcon from '../../assets/phone-solid-full.svg';
import emailIcon from '../../assets/envelope-solid-full.svg';
import addressIcon from '../../assets/location-dot-solid-full.svg';



function MyContact() {
    return (
        <div className="ContactBorder">

            <div className="ContactPadding">

                <div className="FillupForm">
                    <p>Name</p>
                    <input className='NameIn' type="text" placeholder="Enter Name" />

                        <div className='Email-Phone-box'>
                            <div className='Email'>
                                <p>Email</p>
                                <input className='EmailIn' type="email" placeholder="Enter Email" />
                            </div>

                            <div className='Phone'>
                                <p>Phone Number</p>
                                <input className='PhoneIn' type="tel" placeholder="Enter Phone Number" />
                            </div>
                        </div>
                    
                    <p>Message</p>
                    <textarea className='TextAreaIn' placeholder="Enter Message"></textarea>
                    <button className='SubmitButton'>Submit</button>
                </div>
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