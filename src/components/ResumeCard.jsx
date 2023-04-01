import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const ResumeCard = () => {
  const animation = useAnimation();
  const handleHoverStart = () => {
    animation.start({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.5,
      },
    });
  };

  const handleHoverEnd = () => {
    animation.start({
      x: 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        delay: 0.3,
      },
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="p-3 m-5 md:m-16 border-2 border-accent rounded-full"
        >
          <a
            href={process.env.REACT_APP_RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaAddressCard className="fill-white text-2xl" />
          </a>
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={animation}
        className="text-white md:mr-32 md:mb-20 bottom-0 right-0 pointer-events-none absolute"
      >
        Resume
      </motion.p>
    </>
  );
};

export default ResumeCard;
