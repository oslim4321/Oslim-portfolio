"use client";
import Link from "next/link";
import React from "react";
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
  console.log(mode);
  return (
    <>
      <div className="w-full py-8  dark:text-light border-b-[1px] border-transparent dark:border-light">
        <div className="cont font-medium flex items-center justify-between py-4">
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
              className={`w-6 ml-3 rounded-full ${
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
