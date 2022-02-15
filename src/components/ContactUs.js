import React from 'react';
import './../css/ContactUs.css';
import Header from './Header.js';

const ContactUs=()=> {
    return (
        <div>
            <Header/>
            <h1 style="text-align: center;">Contact Us</h1>
            <div className="class">
                <div className="left" >
                    <h3>Get Connected...</h3>
                    <p>if u have any issues bringing<br/> yourself or your workspace<br/> online,we definetly have a<br/> solution for
                        you.</p>
                    <h2>Don't wait</h2>
                    <p>We will revert back to you<br/> within 24 hours</p>
                    <p>Week-off:Saturday & Sunday</p>
                </div>
                <div className="right">
                    <input className="user-input" type="text" name="" placeholder="Full Name" required/><br/>
                    <input className="user-input" type="email" name="" placeholder="Your Email" required/><br/>
                    <input className="user-input" type="text" name="" placeholder="Your Topic" required/><br/>
                    <textarea name="" id="txt" rows="5" placeholder="Your Message" required></textarea>
                    <button className="btn">Submit</button>
                </div>
            </div>

        </div>
    )
}
export default ContactUs;