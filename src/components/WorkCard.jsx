import React from "react";
import { motion } from 'framer-motion';

const WorkCard = ({ icon, title, body, techs }) => {
  return (
    <>
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="bg-primary w-[45vw] sm:w-60 rounded px-7 py-4 m-2 drop-shadow-md">
        <div className="grid content-between">
          <div className="flex flex-col justify-between">
            <img src={icon} alt="/" className="w-8 h-8"></img>
            <h5 className="text-white font-bold mt-2">{title}</h5>
            <p className="text-sm text-slate-200 mt-2">{body}</p>
          </div>
          <div>
            <div className="flex mt-5 items-center">
              {techs.map((item, index) => (
                <div key={index} className="mr-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkCard;
