import React from "react";
import ServiceCard from "./ServiceCard";
import {
  BiCodeAlt,
  BiMobileAlt,
  BiServer,
  BiCloud,
  BiData,
} from "react-icons/bi";
import {
  FaAngular,
  FaReact,
  FaVuejs,
  FaAndroid,
  FaJava,
  FaNodeJs,
  FaAws,
  FaDigitalOcean,
  FaFigma,
} from "react-icons/fa";
import {
  SiFlutter,
  SiSpringboot,
  SiMicrosoftazure,
  SiGooglecloud,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiMaterialdesign,
  SiAdobexd,
} from "react-icons/si";
import { motion } from "framer-motion";
import useCheckMobile from "../hooks/useCheckMobile";

const Services = () => {
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
      <h3 className="text-2xl text-white text-center mt-8 md:mt-0">
        What I Provide!
      </h3>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          <ServiceCard
            icon={<BiCodeAlt className="fill-accent" size={28} />}
            title="Web Development"
            techs={[
              <FaAngular className="fill-accent" size={14} />,
              <FaReact className="fill-accent" size={14} />,
              <FaVuejs className="fill-accent" size={14} />,
            ]}
          />
          <ServiceCard
            icon={<BiMobileAlt className="fill-accent" size={28} />}
            title="Mobile Development"
            techs={[
              <FaAndroid className="fill-accent" size={14} />,
              <SiFlutter className="fill-accent" size={14} />,
            ]}
          />
          <ServiceCard
            icon={<BiServer className="fill-accent" size={28} />}
            title="Backend Development"
            techs={[
              <FaJava className="fill-accent" size={14} />,
              <SiSpringboot className="fill-accent" size={14} />,
              <FaNodeJs className="fill-accent" size={14} />,
            ]}
          />
          <ServiceCard
            icon={<BiCloud className="fill-accent" size={28} />}
            title="Cloud"
            techs={[
              <FaAws className="fill-accent" size={14} />,
              <FaDigitalOcean className="fill-accent" size={14} />,
              <SiMicrosoftazure className="fill-accent" size={14} />,
              <SiGooglecloud className="fill-accent" size={14} />,
            ]}
          />
          <ServiceCard
            icon={<BiData className="fill-accent" size={28} />}
            title="Database"
            techs={[
              <SiMysql className="fill-accent" size={14} />,
              <SiMongodb className="fill-accent" size={14} />,
              <SiRedis className="fill-accent" size={14} />,
            ]}
          />
          <ServiceCard
            icon={<SiMaterialdesign className="fill-accent" size={28} />}
            title="Design"
            techs={[
              <FaFigma className="fill-accent" size={14} />,
              <SiAdobexd className="fill-accent" size={14} />,
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
