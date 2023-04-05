import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading= "ABOUT" text= " I am a friendly Fullstack software developer"/>
      <Footer />
    </div>
  );
};

export default About;
