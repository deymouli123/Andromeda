import React from 'react';
import Home_back from './../img/Home_back.jpg';
import './../css/Home.css';

function Home() {
    return (
        <div className='homePage' style={{ border: "2px solid red" }}>
            <div className='background'>
                <div className='img'>
                    <img src={Home_back} alt="Home_back" style={{
                        borderRadius: "10px", border: "0px",
                        borderRadius: "5px",  width: "1326px", 
                        height: "680px", backdropFilter:"blur(8px)"
                    }} />


                    <div className='upper'>
                        <br /><br />
                        <br /><br />
                        <p>Get your digital issues shorted today!</p>
                    </div>
                    <div className='middle'>
                        <h2>We help Organizations or an <br />
                            Individual to be Digital </h2>
                    </div>
                    <div className='lower'>
                        <p>We provide every element needed by an <br />individual or an organization to keep their <br />
                            digital presence alive.</p>
                    </div>
                    <button id='btn'>Let's talk</button>

                </div>
            </div>
        </div>
    )
}

export default Home;