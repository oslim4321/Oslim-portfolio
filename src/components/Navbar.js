"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  Facebook,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  Whatsapp,
} from "./Icons";
import HireMe from "./HireMe";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";
import { DarkLightAnimation } from "./TransitionEffect";
import Curtain from "./Curtain";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${className} relative group hover:text-[#efced9] `}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
         dark:bg-light
      ${pathname === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setmode] = UseThemesSwitcher();
  const [isOpen, setisOpen] = useState(false);
  const [showCurtain, setshowCurtain] = useState("black");
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  function toggleDarkLightMode() {
    setmode(mode === "light" ? "dark" : "light");
    setshowCurtain(mode);
  }
  return (
    <div className="relative">
      <Curtain showCurtain={showCurtain} mode={mode} />
      <div className="w-full bg-light dark:bg-dark h-[120px]"></div>
      <div className="w-full py-8  dark:text-light border-b-[1px] border-transparent dark:border-light fixed top-0 left-0 right-0 z-50 glassBg">
        <div className="cont font-medium flex items-center justify-between py-4 relative">
          {/* toggle */}
          {/* toggle */}
          <button
            className="flex flex-col justify-center items-center lg:hiddenn absolute right-0 z-50 lg:hidden"
            onClick={handleClick}
          >
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>

          {/* Desktop nav */}
          <div className="w-full justify-between items-center hidden lg:flex">
            <nav className="flex justify-center items-center flex-wrap DeskNav">
              <motion.a
                href={"https://twitter.com/selim_adewale"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.8 }}
              >
                <TwitterIcon className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
              </motion.a>
              <motion.a
                href={"https://github.com/oslim4321"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
              </motion.a>
              <motion.a
                href={"https://m.facebook.com/selim.sooto"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
              </motion.a>
              <motion.a
                href={"https://wa.me/07087121696"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Whatsapp className="text-[#fab0c8] text-lg hover:text-black dark:hover:text-light" />
              </motion.a>
              {/* <motion.a
              href={"/"}
              className="w-6 ml-3"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MoonIcon />
            </motion.a> */}
              <button
                onClick={toggleDarkLightMode}
                className={` w-6 ml-3 rounded-full  dark:bg-light bg-dark ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                } `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark text-lg"} />
                ) : (
                  <MoonIcon className={"fill-dark text-lg"} />
                )}
              </button>
            </nav>
            <nav>
              <CustomLink href="/" title="Home" className="mx-2" />
              <CustomLink href="/about" title="About" className="mx-2" />
              <CustomLink href="/project" title="Project" className="mx-2" />
              {/* <CustomLink href="/resume" title="Resume" className="mx-2" /> */}
            </nav>
          </div>
          <div className="absolute left-[50%] top-[50%] translate-x-[-50%]">
            <Logo />
          </div>
          {/* <ShowIcon /> */}
        </div>
        {/* Mobile nav */}
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className={`min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2
           bg-dark/90 dark:bg-light/90 dark:text-dark/90 backdrop-blur-md py-32 lg:hidden px-2 `}
        >
          <nav
            className="flex flex-col justify-center items-center text-light/75"
            onClick={() => setisOpen(false)}
          >
            <CustomLink
              href="/"
              title="Home"
              className="m-2 dark:text-dark/90"
            />
            <CustomLink
              href="/about"
              title="About"
              className="m-2 dark:text-dark/90"
            />
            <CustomLink
              href="/project"
              title="Project"
              className="m-2 dark:text-dark/90"
            />
            {/* <CustomLink
              href="/resume"
              title="Resume"
              className="m-2 dark:text-dark/90"
            /> */}
          </nav>
          <div className="w-[100%] h-[1px] my-2 bg-white dark:bg-black"></div>
          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              href={"https://twitter.com/selim_adewale"}
              className="w- mx-3  w-6"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <TwitterIcon className={"text-light dark:text-dark"} />
            </motion.a>
            <motion.a
              href={"https://github.com/oslim4321"}
              className="w-6 mx-3 bg-light dark:bg-dark dark:text-light rounded-full"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href={"https://wa.me/07087121696"}
              className="w- mx-3  w-6"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Whatsapp className={"text-light dark:text-dark"} />
            </motion.a>
            <motion.a
              href={"https://m.facebook.com/selim.sooto"}
              className="w- mx-3  w-6"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook className={"text-light dark:text-dark"} />
            </motion.a>

            <button
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
              className="rounded-full bg-light dark:bg-dark dark:text-light"
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Navbar;

// hounorabl maroof from lalupon
