import React from "react";
import { SiGmail } from "react-icons/si";
import { MdLocationPin } from "react-icons/md";
import SocialMediaIcon from "./SocialMediaIcon";
import "../App.css";
import { motion } from "framer-motion";
import { SocialMediaList } from "../data/SocialMediaList";

const PersonalDetails = () => {
  const name = "Hi, I am Aseeb P";
  const containerVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVarient = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };
  return (
    <>
      <div className="flex flex-col justify-center w-full px-10 py-2">
        <div>
          <motion.div
            variants={containerVarient}
            initial="hidden"
            animate="show"
            className="flex justify-start w-auto"
          >
            {SocialMediaList.map((item, index) => (
              <motion.div variants={itemVarient} key={index}>
                <SocialMediaIcon icon={item.icon} link={item.link} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-3">
            <h1 className="text-2xl text-white font-bold md:text-3xl">
              {name.split("").map((char, index) => {
                let style = { "animationDelay": 0.5 + index / 10 + "s" };
                return (
                  <span
                    className="name"
                    aria-hidden="true"
                    key={index}
                    style={style}
                  >
                    {char}
                  </span>
                );
              })}
            </h1>
            <motion.h6
              initial={{ opacity: 0, x: -10 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.3 }}
              className="text-1xl py-1 text-white"
            >
              Im a Senior Systems Engineer at Infosys
            </motion.h6>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="my-2"
          >
            <div className="flex items-center">
              <MdLocationPin className="fill-accent" />
              <p className="text-white font-bold ml-2 cursor-default">
                Malappuram, Kerala, India
              </p>
            </div>
            <div className="flex items-center">
              <SiGmail className="fill-accent" />
              <p
                className="text-white font-bold ml-2 cursor-pointer"
                onClick={() =>
                  (window.location = "mailto:haseebpoolakkal@domain.com")
                }
              >
                haseebpoolakkal@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
