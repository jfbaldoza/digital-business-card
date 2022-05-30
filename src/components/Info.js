import React from 'react'
import mainPhoto from "../images/main-img.jpg"
import imgMail from "../images/Icon.png"
import imgLinkedIn from "../images/Vector.png"

function Info() {
  return (
    <div className='info-container'>
        <img 
        src={mainPhoto}
        alt="main display"
        className='main-photo'
        />
    <h1>Jan Francis Baldoza</h1>
    <h2>Frontend Developer</h2>
    <p>https://www.onlinejobs.ph/jobseekers/info/863216</p>
    <div className="link-buttons">
        <button className="left-button">        
        < img 
        src={imgMail}
        alt="email logo"
        />
        Email
        </button>
        <button className="right-button">
        < img 
        src={imgLinkedIn}
        alt="LinkedIn logo"
        />
        <a href="https://www.linkedin.com/in/jan-francis-baldoza-898562179/">LinkedIn</a>
        </button>
    </div>
    </div>
  )
}

export default Info