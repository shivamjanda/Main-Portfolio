import React from "react";
import { useState } from "react";
import "./About.css";
import JavaLogo from "../../assets/javalogo.png";
import JsLogo from "../../assets/jslogo.png";
import PythonLogo from "../../assets/pythonlogo.png";
import CPlusPlusLogo from "../../assets/cpluspluslogo.png";
import PHPLogo from "../../assets/phplogo.png";
import ReactLogo from "../../assets/reactlogo.png";
import ThreeJSLogo from "../../assets/threejslogo.png";
import NodeJSLogo from "../../assets/nodejslogo.png";
import DjangoLogo from "../../assets/djangologo.png";
import MongoDBLogo from "../../assets/mongodblogo.png";
import MySQLLogo from "../../assets/mysqllogo.png";
import PostgreSQLLogo from "../../assets/postgresqllogo.png";
import SQLLiteLogo from "../../assets/sqllitelogo.png";

const About = () => {
  return (
    <div>
      <div className="containerAbout">
        <h1>About Me</h1>

        <p>
          {" "}
          I am a third-year Computer Programming student at Durham College, with
          plans to transfer to Ontario Tech University to pursue a degree in
          Computer Science. My passion for coding and technology started early
          in life, and I have always enjoyed exploring computer-related
          activities. I am particularly interested in diverse areas within the
          tech industry, including video game development, web programming,
          cloud engineering, and artificial intelligence. As a dedicated and
          hardworking individual who finds genuine joy in this field, I am eager
          to grow professionally and expand my expertise across various
          disciplines in software development and computer science.
        </p>
      </div>

      <div class="logos">
        <div class="logos-slide">
          <img src={JavaLogo} />
          <img src={JsLogo} />
          <img src={PythonLogo} />
          <img src={CPlusPlusLogo} />
          <img src={PHPLogo} />
          <img src={ReactLogo} />
          <img src={ThreeJSLogo} />
          <img src={NodeJSLogo} />
          <img src={DjangoLogo} />
          <img src={MongoDBLogo} />
          <img src={MySQLLogo} />
          <img src={PostgreSQLLogo} />
          <img src={SQLLiteLogo} />
        </div>

        <div class="logos-slide">
          <img src={JavaLogo} />
          <img src={JsLogo} />
          <img src={PythonLogo} />
          <img src={CPlusPlusLogo} />
          <img src={PHPLogo} />
          <img src={ReactLogo} />
          <img src={ThreeJSLogo} />
          <img src={NodeJSLogo} />
          <img src={DjangoLogo} />
          <img src={MongoDBLogo} />
          <img src={MySQLLogo} />
          <img src={PostgreSQLLogo} />
          <img src={SQLLiteLogo} />
        </div>
      </div>
    </div>
  );
};

export default About;
