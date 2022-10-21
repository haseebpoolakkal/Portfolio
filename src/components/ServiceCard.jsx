import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, techs }) => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-primary w-[45vw] sm:w-60 rounded px-7 py-4 m-2 drop-shadow-md"
      >
        <div>{icon}</div>
        <h5 className="text-white font-bold mt-2">{title}</h5>
        <div className="flex mt-5 items-center">
          {techs.map((item, index) => (
            <div key={index} className="mr-2">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ServiceCard;
