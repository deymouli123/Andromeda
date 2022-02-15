import React from 'react';
import TestBack from './../img/TestBack.jpg';
import './../css/Testimonials.css';
import Test1 from './../img/Test1.jpg';
import Test2 from './../img/Test2.jpg';
import Test3 from './../img/Test3.jpg';

function Testimonials() {
    return (
        <div>
            <h2>Our Happy Clients</h2>
            <div className='body'>
                <div className='img'>
                        <img src={TestBack} alt="TestBack" style={{
                                borderRadius: "10px", border: "0px",
                                width: "1326px", height: "680px", 
                                backdropFilter:"blur(8px)"
                            }}/>
                </div>
                
                <div>
                    <img src={Test1} alt="Test1" id='Test1' style={{
                         borderRadius: "10px"

                        
                    }}/>
                    <div className='body1'>
                        <p style={{paddingBottom:"5px"}}>Really Great Work! Thanks a lot.<br/><br/><br/></p>
                        <p style={{paddingTop:"50px"}}>Sumit Sanyal<br/><br/><br/></p>
                        <p style={{paddingTop:"92px"}}>Project: AI Chat Bot</p>
                    </div>
                    
                </div>
                <div>
                    <img src={Test2} alt="Test2" id='Test2' style={{
                        backdropFilter: "blur(8px)", borderRadius: "10px",
                        
                        
                    }}/>
                    <div className='body2'>
                        <p style={{paddingTop:"50px"}}>A video testimony should be here</p>
                    </div>
                    
                </div>
                <div>
                    <img src={Test3} alt="Test3" id='Test3' style={{
                        backdropFilter: "blur(8px)", borderRadius: "10px",
                        
                        
                    }}/>
                    <div className='body3'>
                        <p>“These guy’s did an outstanding job! The job was completed in two days & 
                        trouble shoot most of the problems with you until they find a solution! Highly recomended hiring this team. 
                        I look forward to work with them again!”</p>
                        <h4>Soumik Sarkar</h4>
                        <h4 style={{paddingTop: "40px"}}>Project: Built a bot/Script</h4>
                    </div>
                    
                </div>
            </div>
            <button id='btn'>Write a Testimony</button>
        </div>
    )
}
export default Testimonials;