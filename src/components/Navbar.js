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
  TwitterIcon,
} from "./Icons";
import HireMe from "./HireMe";
import { Example } from "./NavDesktopToggle/Popup";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="w-full py-8">
        <div className="max-w-[90%] mx-auto font-medium flex items-center justify-between py-4">
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
              whileTap={{ scale: 0.9 }}
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
            <motion.a
              href={"/"}
              className="w-6 ml-3"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <MoonIcon />
            </motion.a>
            <span>{/* <MenuToggle /> */}</span>
            {/* <div className="bg-red-400 z-50">
              <Example />
            </div> */}
          </nav>

          <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div>
        </div>
        {/* <HireMe /> */}
      </div>
    </>
  );
};

export default Navbar;
