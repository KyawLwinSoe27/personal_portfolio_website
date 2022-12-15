import React from 'react';
import "./about.css";
import AboutMe from '../../assets/me-about.png';

const About = () => {
    return (
        <div className='about_section' id='about'>
            <div className='heading-text'>
                <p>So, Who Am I?</p>
                <h2 className='service_text'>About Me</h2>
            </div>

            <div className='about_page'>
                <div className='about-img'>
                    <img src={AboutMe}></img>
                </div>
                <div className='about-text'>
                    <h4>I’m a Web Developer , UI/UX Designer from Yangon.</h4>
                    <p>I enjoy taking complex problems and taking them into 
                    simple and beautiful interface designs. I love logic and 
                    structure of coding and always strive to write elegant and 
                    efficient code, whether it be HTML,CSS,JS,PHP or SQL.</p>
                
                </div>
            </div>


        </div>
    )
}

export default About