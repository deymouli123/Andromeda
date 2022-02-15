import React from 'react';
import './../css/OurTeams.css';
import DebadipBandyopadhyay from "./../img/DebadipBandyopadhyay.jpeg";
import KunalShankar from "./../img/KunalShankar.jpeg";
import SandipShaha from "./../img/SandipShaha.jpeg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function OurTeams() {
    return (
        <div>
            <h2>Our Teams</h2>
            <div className='left'>
                <img src={DebadipBandyopadhyay} alt="DebadipBandyopadhyay" style={{ borderRadius: "10px", marginTop: "30px" }} />
                <div className='bio1'>
                    <p>Debadip Bandyopadhyay</p>
                    <p><LinkedInIcon className='icon'/>Founder</p>
                </div>

            </div>
            <div className='middle'>
                <img src={KunalShankar} alt="KunalShankar" id='mid' />
            </div>
            <div className='bio2'>
                <p>Kunal Shankar</p>
                <p><LinkedInIcon className='icon'/>Co-Founder</p>
            </div>

            <div className='right'>
                <img src={SandipShaha} alt="SandipShaha" style={{ borderRadius: "10px", float: "right", display: "inline-block" }} />
            </div>
            <div className='bio3'>
                <p>Sandip Shaha</p>
                <p><LinkedInIcon className='icon'/>Founder</p>
            </div>

            <div className='para' >
                <p>We are not limited to founder & co-founder we have a team of 25+. We excel at every aspect of online<br />
                    marketing and bring a result-oriented digital plan for you. We believe in customer satisfaction and<br />
                    quality delivery in every project we take.</p>
            </div>
            <button id='btn'>Let's talk</button>
        </div>
    )
}

export default OurTeams;