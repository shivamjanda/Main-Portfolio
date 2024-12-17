import React from 'react'
import './Hero.css'
import ProfilePicture from '../../assets/profilepicture.PNG'
import { SocialIcon } from 'react-social-icons'


const Hero = () => {


  return (

    <div className="container">
    <div className="nameSection">
        <h1>Hi, Im Shivam Janda</h1>
        <SocialIcon url="https://www.linkedin.com/in/shivam-janda/" />

    </div>
    <div className="imageSection">
    <img src={ProfilePicture} alt="logo" />
    </div>
    </div>
  )
}

export default Hero