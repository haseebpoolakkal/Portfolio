import React from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

const NavItem = ({ id, name }) => {
  const animation = useAnimation();

  const handleHoverStart = () => {
    animation.start({
      x: 15,
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
      x: -100,
      opacity: 0,
      scale: 0.8,
    });
  };

  return (
    <Link to={id} smooth={true} duration={1000} className="mx-12 my-5 flex">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="w-2 h-14 bg-line rounded cursor-pointer"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      ></motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={animation}
        className="text-white pt-4 -z-10"
      >
        {name}
      </motion.p>
    </Link>
  );
};

export default NavItem;
