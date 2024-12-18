import React from "react";
import "./Hero.css";
import ProfilePicture from "../../assets/profilepicture.PNG";

const Hero = () => {
  return (
    <div className="container">
      <div className="nameSection">
        <h1 className="fade-down">Hi, Im Shivam Janda</h1>
        <p class>Full Stack Software Developer</p>
      </div>
      <div className="imageSection">
        <img src={ProfilePicture} alt="logo"/>
        
      </div>
    </div>
  );
};

export default Hero;
