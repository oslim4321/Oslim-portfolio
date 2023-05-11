"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <MotionLink href="/">
        <motion.img
          className=" w-16 rounded-full"
          src="/images/oslimLogo.jpeg"
          alt="logo"
          whileHover={{ scale: 1.1 }}
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
