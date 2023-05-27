"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfairDispla = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const Skill = ({ name, x, y }) => (
  <motion.div
    className="flex items-center capitalize justify-center rounded-full font-semibold text-dark sm:bg-dark dark:text-light md:text-light py-1.5 px-1.5
     md:px-6 md:py-3  cursor-pointer absolute text-sm md:text-lg bg-transparent sm:text-light sm:dark:bg-transparent sm:text-sm
     md:dark:bg-light dark:md:text-dark
     
     "
    whileHover={{ scale: 1.09 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    whileTap={{ scale: 2 }}
  >
    {name}
  </motion.div>
);
//  bg-circularLight dark:bg-circularDark

const Skills = () => {
  return (
    <>
      <h2
        className={` font-bold text-3xl md:text-5xl lg:text-6xl xl:text-8xl my-10 md:my-32 w-full text-center ${playfairDispla.className} `}
      >
        Skills
      </h2>
      <div className="cont dark:bg-dark">
        <div
          className="w-full h-[50vh] sm:h-[50vh] lg:h-[80vh] xl:h-screen relative flex items-center justify-center rounded-full
         bg-circularLightSm dark:bg-circularDarkSm  
         md:bg-circularLightMd dark:md:circularDarkMd
         lg:bg-circularLightLg dark:lg:circularDarkLg
         xl:bg-circularLight dark:xl:circularDark
         "
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8  cursor-pointer dark:bg-light dark:text-dark"
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
          <Skill name="firebase" x="30vw" y="-10vw" />
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
    </>
  );
};

export default Skills;
