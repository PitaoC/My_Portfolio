import './mycontact.css';


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
                            <h1>Contact</h1>
                            <h1>Us</h1> 
                        </header>
                        <p>For questions, job offers, technical assistance or collaboration opportunities 
                           via the contact information provided.</p>
                    </div>
                    
                </div>
            
        </div>
    );
}

export default MyContact;