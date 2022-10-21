import React from "react";
import WorkCard from "./WorkCard";
import fliebae from "../assets/icons/fliebae.png";
import forU from "../assets/icons/4u.png";
import kanniyadath from "../assets/icons/kanniyadath.jpg";
import phoenix from "../assets/icons/phoenix.png";
import {
  SiFlutter,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaNodeJs,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaJava,
  FaAndroid,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useCheckMobile from "../hooks/useCheckMobile";

const Works = () => {
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
            duration: 0.8
          }
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
      variants={scrollAnim}
      initial="start"
      whileInView="loaded"
      transition="duration"
      viewport="display"
    >
      <h3 className="text-2xl text-white text-center mt-16 md:mt-0">
        What I Did!
      </h3>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          <WorkCard
            icon={fliebae}
            title="Fliebae"
            body="Food delivery application with restaurant and dish searching and payment integeration."
            techs={[
              <SiFlutter className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
          <WorkCard
            icon={fliebae}
            title="Fliebae Server"
            body="Server appilcation for Fliebae website, mobile application and admin console."
            techs={[
              <IoLogoJavascript className="fill-accent" size={14} />,
              <FaNodeJs className="fill-accent" size={14} />,
              <SiMongodb className="fill-accent" size={14} />,
              <SiRedis className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
          <WorkCard
            icon={fliebae}
            title="Fliebae Admin Console"
            body="Admin console for Fliebae to register restaurants, dishes, delivery boys and to orchestrate orders."
            techs={[
              <SiTypescript className="fill-accent" size={14} />,
              <FaAngular className="fill-accent" size={14} />,
              <FaHtml5 className="fill-accent" size={14} />,
              <FaCss3 className="fill-accent" size={14} />,
              <FaBootstrap className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
          <WorkCard
            icon={forU}
            title="4U Building Wares"
            body="An android application to track electricians and plumbers purchase benifits for electrial retail shop."
            techs={[
              <FaJava className="fill-accent" size={14} />,
              <FaAndroid className="fill-accent" size={14} />,
              <SiFirebase className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
          <WorkCard
            icon={kanniyadath}
            title="Kanniyadath Jwellers"
            body="An android application to track employees insentive based on their sales and to track attendance."
            techs={[
              <FaJava className="fill-accent" size={14} />,
              <FaAndroid className="fill-accent" size={14} />,
              <SiFirebase className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
          <WorkCard
            icon={phoenix}
            title="Phoenix Hospital"
            body="Android and IOS application to search available doctors and schedule an appointments."
            techs={[
              <SiFlutter className="fill-accent" size={14} />,
              <FaAndroid className="fill-accent" size={14} />,
              <FaNodeJs className="fill-accent" size={14} />,
              <SiMongodb className="fill-accent" size={14} />,
              <FaGithub className="fill-accent" size={14} />,
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
