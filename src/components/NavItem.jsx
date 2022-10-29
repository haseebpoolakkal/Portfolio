import React from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { useState } from "react";

const NavItem = ({id, name}) => {
  const initStyle = {
    opacity: 0,
    transform: 'translate(0px, 0px)'
    
  };
  const [pStyle, setPStyle] = useState(initStyle);

  const handleHoverStart = () => {
    setPStyle({
      opacity: 1,
      transform: 'translate(10px, 0px)'
    })
  }

  const handleHoverEnd = () => {
    setPStyle({
      opacity: 0,
    transform: 'translate(0px, 0px)'
    })
  }

  return <Link to={id} smooth={true} duration={1000} className="mx-12 my-5">
    <motion.div 
     whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.9 }}
     transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="w-2 h-14 bg-line rounded cursor-pointer" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>
      <p
       style={pStyle}
      className="text-white pt-4 ms-4">{name}</p>
    </motion.div>
  </Link>;
};

export default NavItem;
