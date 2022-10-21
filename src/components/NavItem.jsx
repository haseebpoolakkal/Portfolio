import React from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

const NavItem = ({id}) => {
  return <Link to={id} smooth={true} duration={1000} className="mx-12 my-5">
    <motion.div 
     whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.9 }}
     transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="w-2 h-14 bg-line rounded cursor-pointer">

    </motion.div>
  </Link>;
};

export default NavItem;
