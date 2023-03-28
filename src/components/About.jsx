import React from "react";
import { motion } from "framer-motion";
import useCheckMobile from "../hooks/useCheckMobile";
import { calculateYearsBetweenDates } from "../services/date.service";

const About = () => {
  const joiningDate = new Date("2021-03-03");
  const experience = calculateYearsBetweenDates(joiningDate, new Date());
  const isMobile = useCheckMobile();
  const scrollAnim = !isMobile
    ? {
        start: {
          y: 100,
          opacity: 0,
        },
        loaded: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        },
        duration: {
          duration: 0.8,
        },
        dispaly: {
          once: true,
          amount: 0.8,
        },
      }
    : {
        start: {},
        loaded: {},
        duration: {},
        dispaly: {},
      };
  return (
    <motion.div
      className="flex flex-col justify-center w-full px-10 md:w-[60%]"
      variants={scrollAnim}
      initial="start"
      whileInView="loaded"
      transition="duration"
      viewport="display"
    >
      <h3 className="text-2xl text-white text-left mt-8 md:mt-0">About Me!</h3>
      <div className="flex justify-center items-center">
        <p className="text-left text-slate-300 mt-8">
          My name is Aseeb P, and I have been working as a Senior Systems
          Engineer at Infosys for the last {experience} years. During this time, I have
          worked on a wide range of projects involving web application
          development, mobile application development, backend development,
          system integration, CICD deployments and managing servers. I have also
          worked with clients from India and abroad on various projects. I am
          highly experienced in designing and developing complex applications in
          Java, Javascript, Dart. My main focus has been on building robust
          solutions that are scalable, reliable and maintainable over a long
          period of time.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
