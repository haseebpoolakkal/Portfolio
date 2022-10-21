import React from "react";
import PersonalDetails from "../components/PersonalDetails";
import profile from "../assets/images/profile.jpg";
import SideNav from "../components/SideNav";
import { motion } from 'framer-motion';
const Header = () => {
  return (
      <div className="w-full md:h-screen md:pt-0 flex flex-col justify-between items-center z-10">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="fixed hidden md:block left-0 bottom-1">
            <SideNav />
          </div>
          <PersonalDetails />
          <div className="flex justify-center">
            <motion.img
              initial={{x: 50, opacity: 0.5}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.8}}
              src={profile}
              alt="/"
              className="w-[40vh] mx-5 md:w-[50vh] md:my-0 rounded-md"
            />
          </div>
        </div>
      </div>
  );
};

export default Header;
