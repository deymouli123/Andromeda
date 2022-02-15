import React from "react";
import Digital from "./../img/Digital.png";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//   } from './Navbar';
import { NavLink } from 'react-router-dom';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
import './../css/Header.css';
// import {LinkedIn} from '@material-ui/icons';
// import green from "@material-ui/core/colors/green";

function Header() {
    return (
        <div className="head">
            <div className="top">
                <div className="left" style={{marginLeft:"8px"}}>
                    <p>Company Email will be here</p>
                </div>
                <div className="logo" >
                    <img src={Digital} alt="Digital" style={{ width: "300px", height: "120px" }} />
                </div>
                <div className="social" >
                    <a href="#"><LinkedInIcon className="icon" /></a>
                    <a href="#"><FacebookRoundedIcon className="icon" /></a>
                    <a href="#"><InstagramIcon className="icon" /></a>
                </div>
            </div>
            <div className="navbar">
            
    
                
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/service">Our Services</NavLink>
                    <NavLink to="/ourteams">Our Teams</NavLink>
                    <NavLink to="/testimonials">Testimonials</NavLink>
                    <NavLink to="/contactus">Contact Us</NavLink>
                
               


            </div>
        </div>
    )
}

export default Header;