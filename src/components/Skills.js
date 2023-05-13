"use client";

import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => (
  <motion.div
    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light px-6 py-3  cursor-pointer absolute"
    whileHover={{ scale: 1.09 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y }}
    transition={{ duration: 1.5 }}
  >
    {name}
  </motion.div>
);
const Skills = () => {
  return (
    <div className="cont">
      <h2 className=" font-bold text-8xl my-32 w-full text-center ">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8  cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="5vw" y="-10vw" />
        <Skill name="CSS" x="20vw" y="-2vw" />
        <Skill name="javaScript" x="10vw" y="2vw" />
        <Skill name="ReactJs" x="20vw" y="12vw" />
        <Skill name="NextJs" x="0vw" y="15vw" />
        <Skill name="AstroJS" x="-15vw" y="5vw" />
        <Skill name="GatsbyJs" x="14vw" y="-20vw" />
        <Skill name="Tailwind Css" x="10vw" y="20vw" />
        <Skill name="Bootstrap Css" x="-10vw" y="-20vw" />
        <Skill name="Tailwind Css" x="40vw" y="0vw" />
        <Skill name="Typescript" x="-40vw" y="2vw" />
        <Skill name="Node.Js" x="10vw" y="20vw" />
        <Skill name="express.Js" x="-25vw" y="-22vw" />
        <Skill name="PHP" x="-30vw" y="-10vw" />
        <Skill name="Laravel" x="-10vw" y="-8vw" />
        <Skill name="Git" x="-10vw" y="20vw" />
        <Skill name="GitHub" x="-30vw" y="15vw" />
      </div>
    </div>
  );
};

export default Skills;
