import React from 'react';
import "./hero.css";
import CV from "../../assets/cv.pdf";
import Me from "../../assets/me.jpeg";

const Hero = () => {
    return (
        <div className='hero_section'>
            <div className='hero_text'>
                <div className='name_group'>
                    <div>
                        <h2>Hi! I AM</h2>
                        <div className='job'>Web Developer</div>
                    </div>
                    <h1>Kyaw Lwin Soe</h1>
                </div>
                <div className='info-group'>
                    <p>
                    A Web Developer and UI/UX Designer. 
                    I hope my 2 years experience of research and visual design 
                    can be helpful for your project.
                    </p>
                </div>
                <div className='button-group'>
                    <a className='cv' href={CV} download>Download CV</a>
                    <a className=''>Projects</a>
                </div>
            </div>
            <div className='hero_img'>
                <img src={Me}></img>
            </div>
        </div>
    )
}

export default Hero