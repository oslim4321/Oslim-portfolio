"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HireMe = () => {
  return (
    <>
      <div className="fixed right-0 bottom-10 z-50 cursor-pointer m-5">
        <Link
          href="mailto:adewaleselim6@gmail.com"
          onClick={(e) => e.preventDefault()}
        >
          {/* <div className="w-24 h-24 rounded-full border-4 border-[#EFCED9] flex justify-center items-center"> */}
          <motion.div
            className="w-24 h-24 border-4 border-[#EFCED9] rounded-full flex justify-center items-center dark:text-white"
            initial={{ y: 0 }}
            animate={{ y: [-20, 0] }}
            whileTap={{ scale: 0.8 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            HIRE ME
          </motion.div>
          {/* </div> */}
        </Link>{" "}
      </div>
    </>
  );
};

export default HireMe;
