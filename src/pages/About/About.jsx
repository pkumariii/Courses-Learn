import React from "react";
import Header from "./Header";
import Mission from "./Mission";
import Teaching from "./Teaching";
import Team from "./Team";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <Mission />
      <Teaching />
      <Team />
    </div>
  );
};

export default About;
