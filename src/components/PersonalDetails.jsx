import React from "react";
import { SiGmail } from "react-icons/si";
import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import SocialMediaIcon from "./SocialMediaIcon";
import '../App.css';

const PersonalDetails = () => {
  const name = "Hi, I am Aseeb P";
  return (
    <>
      <div className="flex flex-col justify-center w-full px-10 py-2">
        <div>
          <div className="flex justify-start w-auto">
            <SocialMediaIcon
              icon={<FaGithub className="fill-white" />}
              link="https://github.com/haseebpoolakkal"
            />
            <SocialMediaIcon
              icon={<FaStackOverflow className="fill-white" />}
              link="https://stackoverflow.com/users/11217615/aseeb"
            />
            <SocialMediaIcon
              icon={<FaLinkedinIn className="fill-white" />}
              link="https://www.linkedin.com/in/aseeb-p-5baa65171"
            />
            <SocialMediaIcon
              icon={<FaInstagram className="fill-white" />}
              link="https://www.instagram.com/a53eb/"
            />
            <SocialMediaIcon
              icon={<FiTwitter className="fill-white" />}
              link="https://twitter.com/haseebpoolakkal"
            />
            <SocialMediaIcon
              icon={<FaWhatsapp className="fill-white" />}
              link="https://wa.me/918606459264"
            />
          </div>
          <div className="mt-3">
            <h1 className="text-2xl text-white font-bold md:text-3xl">
              {name.split("").map((char, index) => {
                let style = { "animation-delay": 0.5 + index / 10 + "s" };
                return (
                  <span className="name" aria-hidden="true" key={index} style={style}>
                    {char}
                  </span>
                );
              })}
            </h1>
            {/* <h1 className="text-2xl text-white font-bold md:text-3xl">
              Hi, I am Aseeb P
            </h1> */}
            <h6 className="text-1xl py-1 text-white">
              Im a Senior Systems Engineer at Infosys
            </h6>
          </div>
          <div className="my-2">
            <div className="flex items-center">
              <MdLocationPin className="fill-accent" />
              <p className="text-white font-bold ml-2 cursor-default">
                Malappuram, Kerala, India
              </p>
            </div>
            <div className="flex items-center">
              <SiGmail className="fill-accent" />
              <p
                className="text-white font-bold ml-2 cursor-pointer"
                onClick={() =>
                  (window.location = "mailto:haseebpoolakkal@domain.com")
                }
              >
                haseebpoolakkal@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
