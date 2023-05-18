"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center dark:bg-light rounded-full -mt-10">
      <MotionLink href="/">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image
            className=" w-20 md:w-28 rounded-full"
            src="/images/logo_transparent.png"
            alt="logo"
            width={150}
            height={150}
            priority
          />
        </motion.div>
      </MotionLink>
    </div>
  );
};

export default Logo;
