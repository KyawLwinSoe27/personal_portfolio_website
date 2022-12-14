import React from 'react';
import "./services.css";

const Services = () => {
  return (
    <div className='service_section'>
        <div className='heading-text'>
            <p>What I will do for you</p>
            <h2 className='service_text'>Services</h2>
        </div>

        <div className='service-card-main'>
          <div className='service-card'>
            <h3>Web Design</h3>
            <div className='line'></div>
            <p>I do UI/UX design for the website that helps 
            website to get a unique look. I can plan, create 
            and code internet sites and web pages. I can choose 
            and create the visual aspects of a website (the best 
              colour, fonts, graphic and layout).</p>
          </div>
          <div className='service-card'>
            <h3>Web Development</h3>
            <div className='line'></div>
            <p>I create and develop the high performance websites.
            I can write and review code for sites. I can also maintain website. 
            I can also troubleshoot problems with performance of user interface.</p>
          </div>
          <div className='service-card'>
            <h3>App Developer</h3>
            <div className='line'></div>
            <p>In Future ...</p>
          </div>

          
        </div>
    
    
    </div>
  )
}

export default Services