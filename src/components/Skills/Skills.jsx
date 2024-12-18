import React from "react";
import "./Skills.css";
import laptoplogo from "../../assets/laptop-mobile.png";

const Skills = () => {
  return (
    <div>
      <button className="skillsButton"> Tests</button>
      <div className="skillSet">
        <h1> My Skill Set </h1>
        <p> A well-rounded developer with expertise in front-end, back-end, and cloud technologies. I excel in creating efficient, scalable, and user-friendly solutions while continuously expanding my technical knowledge.</p>
      </div>
      <div className="twoColumns">
        <div className="textSection">
          <img src={laptoplogo} className="imgLaptopMobile" /> <h1 className="headerFrontEnd">Frontend</h1>
          <br></br>
          <br></br>
          <p>I specialize in and have experience with the following frontend skills: JavaScript, Python, Java, C++, React.js, Vite, Three.js, and PHP.
        </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={laptoplogo} className="imgLaptopMobile" /> <h1>Backend</h1>
          <br></br>
          <br></br>
          <p>I have a diverse background in backend integrations, including Django, Node.js, Express.js, ASP.NET Core, and .NET Framework.</p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img src={laptoplogo} className="imgLaptopMobile" />{" "}
          <h1>Databases</h1>
          <br></br>
          <br></br>
          <p>Managing databases and integrating them with the frontend is a critical skill. I have experience with various databases, including MySQL, PostgreSQL, NoSQL, SQLite, and MongoDB.</p>
        </div>
        <div className="skillsImageSection">
            <p>test</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
