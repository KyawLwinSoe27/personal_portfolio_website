import React from 'react';
import "./contact.css"

const Contact = () => {
    let phoneNumber = '09972059450';
    let email = 'kyawlwinsoe812@gmail.com';
    let address = 'Yangon / Myanmar';
    return (
        <div className='contact_page'>
            <div className='heading-text'>
                <h2 className='service_text'>Get In Touch</h2>
                <div className='contact-info'>
                    <p>Phone: {phoneNumber}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                </div>
            </div>

            <form>
                <div className='form-items'>
                    <div className='form-item'>
                        <input type='text' className='form-item-list' placeholder='Name'/>
                        <input type='email' className='form-item-list' placeholder='Email'/>
                        <input type='number' className='form-item-list' placeholder='Phone Number'/>
                    </div>
                    <div className='form-textarea'>
                        <textarea type='text' rows='9' cols='40' placeholder='Your Message ...'></textarea>
                    </div>
                </div>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Contact