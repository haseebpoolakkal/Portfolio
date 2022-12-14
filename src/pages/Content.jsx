import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Works";

const Content = () => {
  return (
    <>
      <div id="about" className="md:h-screen md:flex md:justify-center md:items-center">
        <About />
      </div>
      <div id="services" className="md:h-screen md:flex md:justify-center md:items-center">
        <Services />
      </div>
      <div id="works" className="md:h-screen md:flex md:justify-center md:items-center">
        <Works />
      </div>
      <div id="skills" className="md:min-h-screen md:flex md:justify-center md:items-center">
        <Skills />
      </div>
    </>
  );
};

export default Content;
