import React, { useState } from "react";
import SkillCard from "./SkillCard";
import adobe from "../assets/icons/adobe-xd.svg";
import androidStudio from "../assets/icons/android-studio.svg";
import angular from "../assets/icons/angular.svg";
import aws from "../assets/icons/aws.svg";
import azure from "../assets/icons/azure.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import css from "../assets/icons/css.svg";
import digitalOcean from "../assets/icons/digital-ocean.svg";
import docker from "../assets/icons/docker.svg";
import dart from "../assets/icons/dart.svg";
import figma from "../assets/icons/figma.svg";
import firebase from "../assets/icons/firebase.svg";
import flutter from "../assets/icons/flutter.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import gitlab from "../assets/icons/gitlab.svg";
import google from "../assets/icons/google-cloud.svg";
import html from "../assets/icons/html.svg";
import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import jenkins from "../assets/icons/jenkins.svg";
import jupyter from "../assets/icons/jupyter.svg";
import mongodb from "../assets/icons/mongodb.svg";
import mysql from "../assets/icons/mysql.svg";
import nginx from "../assets/icons/nginx.svg";
import nodejs from "../assets/icons/nodejs.svg";
import npm from "../assets/icons/npm.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import redhat from "../assets/icons/redhat.svg";
import redis from "../assets/icons/redis.svg";
import spring from "../assets/icons/spring.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import linux from "../assets/icons/tux.svg";
import typescript from "../assets/icons/typescript.svg";
import ubuntu from "../assets/icons/ubuntu.svg";
import vim from "../assets/icons/vim.svg";
import vue from "../assets/icons/vue.svg";
import bash from "../assets/icons/bash.svg";
import express from "../assets/icons/express.png";
import { motion } from "framer-motion";
import useCheckMobile from "../hooks/useCheckMobile";

const Skills = () => {
  const [isHidden, setHidden] = useState(true);
  const handleHidden = () => setHidden(!isHidden);

  const isMobile = useCheckMobile();
  const scrollAnim = !isMobile
    ? {
        start: {
          y: 100,
          opacity: 0,
        },
        loaded: {
          y: 0,
          opacity: 1,
        },
        duration: {
          duration: 0.8,
        },
        dispaly: {
          once: true,
          amount: 0.8,
        },
      }
    : {
        start: {},
        loaded: {},
        duration: {},
        dispaly: {},
      };

  return (
    <motion.div
      variants={scrollAnim}
      initial="start"
      whileInView="loaded"
      transition="duration"
      viewport="display"
    >
      <h3 className="text-2xl text-white text-center mt-16 md:mt-0">
        What I Can Do!
      </h3>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <SkillCard image={java} name="Java" />
          <SkillCard image={javascript} name="Javascript" />
          <SkillCard image={typescript} name="Typescript" />
          <SkillCard image={dart} name="Dart" />
          <SkillCard image={python} name="Python" />
          <SkillCard image={flutter} name="Flutter" />
          <SkillCard image={angular} name="Angular" />
          <SkillCard image={react} name="React" />
          <SkillCard image={nodejs} name="Node.JS" />
          <SkillCard image={vue} name="Vue.JS" />
          <SkillCard image={spring} name="Spring Boot" />
          <SkillCard image={androidStudio} name="Android Studio" />
        </div>
      </div>

      <div className={isHidden ? "hidden" : "flex justify-center"}>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <SkillCard image={bootstrap} name="Bootstrap" />
          <SkillCard image={css} name="CSS" />
          <SkillCard image={html} name="HTML" />
          <SkillCard image={tailwindcss} name="Tailwind CSS" />
          <SkillCard image={firebase} name="Firebase" />
          <SkillCard image={digitalOcean} name="Digital Ocean" />
          <SkillCard image={aws} name="AWS" />
          <SkillCard image={azure} name="Azure" />
          <SkillCard image={google} name="Google Cloud Platform" />
          <SkillCard image={mongodb} name="MongoDB" />
          <SkillCard image={mysql} name="MySQL" />
          <SkillCard image={redis} name="Redis" />
          <SkillCard image={jenkins} name="Jenkins" />
          <SkillCard image={docker} name="Docker" />
          <SkillCard image={jupyter} name="Jupyter" />
          <SkillCard image={git} name="Git" />
          <SkillCard image={github} name="GitHub" />
          <SkillCard image={gitlab} name="GitLab" />
          <SkillCard image={nginx} name="NGINX" />
          <SkillCard image={vim} name="Vim" />
          <SkillCard image={bash} name="Bash" />
          <SkillCard image={express} name="Express" />
          <SkillCard image={adobe} name="Adobe XD" />
          <SkillCard image={figma} name="Figma" />
          <SkillCard image={linux} name="Linux" />
          <SkillCard image={npm} name="NPM" />
          <SkillCard image={redhat} name="Redhat" />
          <SkillCard image={ubuntu} name="Ubuntu" />
        </div>
      </div>
      <p
        onClick={handleHidden}
        className="text-slate-300 text-center text-xs cursor-pointer my-5"
      >
        {isHidden ? "----  Show more  ----" : "----  Show less  ----"}
      </p>
    </motion.div>
  );
};

export default Skills;
