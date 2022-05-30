  import React from 'react'
import twitterIcon from "../images/Twitter.png"
import facebookIcon from "../images/Facebook.png"
import instagramIcon from "../images/Instagram.png"
import GitHubIcon from "../images/GitHub.png"

function Footer() {
  return (
    <div className='icon-links'>
        <img 
        src={twitterIcon}
        alt="Twitter"
        className='icon-images'
        />

        <img 
        src={facebookIcon}
        alt="Facevook"
        className='icon-images'
        />

        <img 
        src={instagramIcon}
        alt="Instagram"
        className='icon-images'
        />

        <img 
        src={GitHubIcon}
        alt="GitHub"
        className='icon-images'
        />

    </div>
  )
}

export default Footer