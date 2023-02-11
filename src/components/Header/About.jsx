import React,{ useState, useEffect } from 'react'
import logoImage from '../../assets/logo.png';
import './About.css';

const About = () => {

  return (
    <div className='about-container'>
      <div className="left-column">
        <h1>About Us</h1>
        <p>
                    This a Website were You will see the hospital of 
                    the town tagged on the Map . This will help you 
                    locate the exact location of the Hospital which you 
                    are exactly looking for without any noise . We are 
                    only focusing on hospital tagging on map so it will
                    overall cut the all the noises which we usually see on 
                    other maps website and it will save the time which will
                    indirectly/directly save the time of the patient and 
                    eventually it will save the life of the Patient. 

        </p>
      </div>
      <div className="right-column">
          <img src={logoImage} alt="" />
      </div>

    </div>
  )
}

export default About