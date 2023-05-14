"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import HireMe from "./HireMe";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
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
  const handleClick = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full py-8  dark:text-light border-b-[1px] border-transparent dark:border-light">
        <div className="cont font-medium flex items-center justify-between py-4 relative">
          {/* toggle */}
          <button
            className="flex flex-col justify-center items-center lg:hidden "
            onClick={handleClick}
          >
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                isOpen ? "-rotate-45 -translate-y-1" : " translate-y-0.5"
              } `}
            ></span>
          </button>

          {/* first nav */}
          <div className="w-full justify-between items-center hidden lg:flex">
            <nav>
              <CustomLink href="/" title="Home" className="mx-2" />
              <CustomLink href="/about" title="About" className="mx-2" />
              <CustomLink href="/project" title="Project" className="mx-2" />
              <CustomLink href="/resume" title="Resume" className="mx-2" />
            </nav>

            <nav className="flex justify-center items-center flex-wrap">
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.8 }}
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <DribbbleIcon />
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
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                className={`w-6 ml-3 rounde ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                } `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </div>

          {/* secondd nav */}
          <div
            className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2
           bg-dark/90 dark:bg-light/90 backdrop-blur-md py-32 lg:hidden "
          >
            <nav>
              <CustomLink href="/" title="Home" className="mx-2" />
              <CustomLink href="/about" title="About" className="mx-2" />
              <CustomLink href="/project" title="Project" className="mx-2" />
              <CustomLink href="/resume" title="Resume" className="mx-2" />
            </nav>

            <nav className="flex justify-center items-center flex-wrap">
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.8 }}
              >
                <TwitterIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href={"/"}
                className="w-6 mx-3"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <DribbbleIcon />
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
                onClick={() => setmode(mode === "light" ? "dark" : "light")}
                className={`w-6 ml-3 rounde ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                } `}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </div>

          <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div>
        </div>
        <HireMe />
      </div>
    </>
  );
};

export default Navbar;
