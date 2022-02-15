import React from "react";
import './../css/Footer.css';

function Footer(){
    return(
        <div className="bottom">
            <div className="co-office">
                <h5>Corporate Office</h5>
                <p>BL 375, Ground Floor, Sector-2, <br/>Salt Lake City, Kolkata-700091<br/>INDIA.</p>
            </div>
            <div className="available">
                <h5>Availabillity</h5>
                <p>Monday - Friday: 10 am - 7 pm (IST)<br/>
                Saturday - Sunday: Closed</p>
            </div>
            <div className="andro">
                <h5>Andromeda Digital</h5>
            </div>
        </div>
    )
}

export default Footer;