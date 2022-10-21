import React, { useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll } from 'framer-motion';

const NavItem = ({id}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  return <Link to={id} smooth={true} duration={1000} className="mx-12 my-5">
    <motion.div 
     whileHover={{ scale: 1.2 }}
     whileTap={{ scale: 0.9 }}
     transition={{ type: "spring", stiffness: 200, damping: 10 }}
    className="w-2 h-14 bg-line rounded cursor-pointer">
      <motion.div className="w-2 h-14 bg-accent rounded cursor-pointer bottom-0" style={{scaleY: scrollYProgress}}></motion.div>
    </motion.div>
  </Link>;
};

export default NavItem;
