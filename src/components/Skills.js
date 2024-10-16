"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Image from "next/image";

// const playfairDispla = Playfair_Display({
//   weight: "400",
//   subsets: ["latin"],
// });
//  py-1.5 px-1.5
//      md:px-3 md:py-3 lg:px-6

const Skill = ({ text, name, x, y }) => (
  <motion.div
    className="flex items-center flex-col capitalize justify-center bg-transparent font-semibold text-dark bg-rslate-700 dark:text-light md:text-light cursor-pointer absolute"
    whileHover={{ scale: 1.09 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
    whileTap={{ scale: 2 }}
  >
    {/* {name} */}
    <div className=" w-10 h-10 lg:w-14 lg:h-14 dark:bg-white rounded-full flex items-center justify-center">
      <Image
        src={name}
        width="300"
        height={"400"}
        className="w-10 md:w-[80%] rounded-full"
      />
    </div>
    <p className="text-black dark:text-white text-xm hidden md:block">
      {text || ""}
    </p>
  </motion.div>
);
//  bg-circularLight dark:bg-circularDark

const Skills = () => {
  return (
    <>
      {/* <h2
        className={` font-bold text-3xl md:text-5xl lg:text-6xl xl:text-8xl my-10 md:my-32 w-full text-center ${merriweather.className} `}
      >
        Skills
      </h2> */}
      <AnimatedText
        text={"Skills"}
        className={`my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl `}
      />
      <div className="cont dadrk:bg-dadrk ">
        <div
          className="w-full h-[50vh] sm:h-[50vh] lg:h-[80vh] xl:h-screen relative flex items-center justify-center rounded-full
         bg-circularLightSm dark:bg-circularDarkSm  
         md:bg-circularLightMd dark:md:circularDarkMd
         lg:bg-circularLightLg dark:lg:circularDarkLg
         xl:bg-circularLight dark:xl:circularDark
         "
        >
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8  cursor-pointer dark:bg-light dark:text-dark max-w-[50%]"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill
            text={"html"}
            name="/language/icons8-html.svg"
            x="5vw"
            y="-10vw"
          />
          <Skill
            text={"css"}
            name="/language/icons8-css.svg"
            x="20vw"
            y="-2vw"
          />
          <Skill
            text={"javascript"}
            name="/language/logo-javascript.svg"
            x="10vw"
            y="2vw"
          />
          <Skill
            text={"react"}
            name="/language/icons8-react.svg"
            x="20vw"
            y="12vw"
          />
          <Skill
            text={"nextjs"}
            name="/language/nextjs-icon-svgrepo-com.svg"
            x="0vw"
            y="15vw"
          />
          <Skill
            text={"astrojs"}
            name="/language/astro-svgrepo-com.svg"
            x="-15vw"
            y="5vw"
          />
          <Skill
            text={"gatby"}
            name="/language/icons8-gatsbyjs.svg"
            x="14vw"
            y="-20vw"
          />
          <Skill
            text={"firebase"}
            name="/language/icons8-firebase.svg"
            x="30vw"
            y="-10vw"
          />
          <Skill
            text={"bootstrap"}
            name="language/icons8-bootstrap.svg"
            x="-10vw"
            y="-20vw"
          />
          <Skill
            text={"tailwindCss"}
            name="/language/icons8-tailwind-css.svg"
            x="40vw"
            y="0vw"
          />
          <Skill
            text={"Sanity.io"}
            name="/language/sanity.svg"
            x="40vw"
            y="10vw"
          />
          <Skill
            text={"typescript"}
            name="/language/icons8-typescript.svg"
            x="-40vw"
            y="2vw"
          />
          <Skill
            text={"nodejs"}
            name="/language/icons8-node-js.svg"
            x="10vw"
            y="20vw"
          />
          <Skill
            text={"expressjs"}
            name="/language/icons8-express-js.svg"
            x="-25vw"
            y="-18vw"
          />
          <Skill
            text={"php"}
            name="/language/php-svgrepo-com.svg"
            x="-28vw"
            y="-10vw"
          />
          <Skill
            text={"laravel"}
            name="/language/laravel-svgrepo-com.svg"
            x="-10vw"
            y="-8vw"
          />
          <Skill
            text={"git"}
            name="/language/git-svgrepo-com.svg"
            x="-10vw"
            y="20vw"
          />
          <Skill
            text={"github"}
            name="/language/github-142-svgrepo-com.svg"
            x="-30vw"
            y="15vw"
          />

          <Skill
            text={"angular"}
            name="/language/angular-icon.svg"
            x="-20vw"
            y="25vw"
          />
          <Skill
            text={"framer motion"}
            name="/language/framer-motion-icon.svg"
            x="-35vw"
            y="18vw"
          />
          <Skill
            text={"Zustand"}
            name="/language/zustand.svg"
            x="-15vw"
            y="18vw"
          />

          <Skill
            text={"ShadCn"}
            name="/language/shadcn.png"
            x="-1vw"
            y="22vw"
          />
          <Skill
            text={"React Hook Form"}
            name="/language/react-hook-form-logo-only.png"
            x="1vw"
            y="8vw"
          />
        </div>
      </div>
    </>
  );
};

export default Skills;
