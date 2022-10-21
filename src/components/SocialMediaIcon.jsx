import React from "react";
import { motion } from 'framer-motion';

const SocialMediaIcon = ({ icon, link }) => {
  return (
    <motion.a
      initial={{scale: 0, opacity: 0}}
      animate={{scale: 1, opacity: 1}}
      whileTap={{scale: 0.9}}
      whileHover={{scale: 1.1}}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      href={link}
      className="border-2 border-solid border-accent rounded-full w-9 h-9 ml-2 flex justify-center items-center cursor-pointer"
    >
      {icon}
    </motion.a>
  );
};

export default SocialMediaIcon;
