"use client";
import { merriweather } from "@/lib/utilty/Font";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import Link from "next/link";
import { motion } from "framer-motion";

const FirstHeroPage = () => {
  return (
    <div>
      <div className="m:h-[100vh] dark:bg-dark bg-light">
        <div className="cont md:flex justify-between items-center border border-b-2">
          {/* left */}
          <div className="flex flex-col gap-5 md:w-[40%]">
            {/* <p className="text-[48px] font-normal font-[400] text-[#efced9]">
              Hi, i’m
            </p> */}
            <motion.p
              className="text-[48px] font-normal font-[400]"
              style={{
                background: "linear-gradient(90deg, #efced9, #efced9)",
                WebkitBackgroundClip: "text", // Required for background gradient to work in some browsers
                color: "transparent", // Hide the original text, only show the gradient
                display: "inline-block", // Prevents the gradient from taking full width
              }}
              animate={{
                backgroundPosition: ["100% 0%", "0% 100%"], // Animate the background position to create the gradient effect
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            >
              Hi, i’m
            </motion.p>

            <h1
              className={` !font-bold !text-3xl md:!text-3xl lg:!text-6xl !leading-10 z-10 ${merriweather.className}`}
            >
              <span className={`${merriweather.className} font-extrabold`}>
                {" "}
                <span className="text-[#a772bf">Oslim</span> Selim
              </span>
            </h1>
            <p className="text-black text-[27px]  font-normal">
              Pro Software Engineer
            </p>
            <p>
              Explore my latest projects and articles: A testament to my passion
              for turning ideas into web applications.
            </p>
            <div className="flex gap-x-5 w-[70%] transition duration-75 ease-in-out ">
              <Link href="/project" className="w-[40%]">
                <button
                  className="w-full h-[60px] rounded-[80px] text-white bg-[#a772bf] hover:bg-[#efced9] transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-110 "
                >
                  Portfolio
                </button>
              </Link>
              <button
                className="w-[40%] h-[60px] rounded-[80px]  border border-[#a772bf] text-[#a772bf] hover:bg-[#efced9] transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-110 uppercase"
              >
                Hire ME
              </button>
            </div>
          </div>
          {/* right */}
          <div>
            <div className="w-[500px] h-[500px] flex-shrink-0 rounded-full bg-[#efced9] border border-[10px] border-[#caaad9]">
              <AnimatedImg path="/CollinDesign/2s.png" alt="oslim" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeroPage;
