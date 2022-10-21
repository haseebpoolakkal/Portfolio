import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ image, name }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        className="bg-primary rounded px-5 py-4 m-2 w-32 drop-shadow-md"
      >
        <div className="flex justify-center items-center">
          <img src={image} alt="/" className="w-10 h-10" />
        </div>
        <h3 className="text-white text-xs mt-3 text-center">{name}</h3>
      </motion.div>
    </>
  );
};

export default SkillCard;
