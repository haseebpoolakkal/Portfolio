import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <h4 className="text-white text-center text-sm">
      Designed and build by Aseeb P | {year}
    </h4>
  );
};

export default Footer;
