import React from "react";
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p> HI, <span></span>I am a freelancer</p>
        <h1>  Software Developer </h1>
        <div>
          <Link to="/project" className="btn">
            {" "}
            projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
