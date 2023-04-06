import React from "react";
import "./WorkCardStyles.css";
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";
import WorkCardData from "./WorkCardData";
import WorkCard from "./WorkCard";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> Projects </h1>
      <div className="project-container"></div>
    </div>
  );
};

export default Work;
