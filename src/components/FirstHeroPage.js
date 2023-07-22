"use client";
import { merriweather } from "@/lib/utilty/Font";
import React from "react";
import AnimatedImg from "./AnimatedImg";
import Link from "next/link";
import { motion } from "framer-motion";
import { handleClickHireMe } from "./HireMe";

const FirstHeroPage = () => {
  return (
    <div>
      <div className="m:h-[100vh] dark:bg-dark bg-light">
        <div className="cont flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-5 md:gap-y-0">
          {/* left */}
          <div className="flex flex-col gap-5 md:w-[40%]">
            <p className="text-[48px] font-normal font-[400] text-[#efced9] text-shadow">
              Hi, i’m
            </p>

            <h1
              className={` !font-bold !text-3xl md:!text-3xl lg:!text-6xl !leading-10 z-10 ${merriweather.className}`}
            >
              <span className={`${merriweather.className} font-extrabold`}>
                <span className="text-[#a772bf]">S</span>ooto{" "}
                <span className="text-[#a772bf]">S</span>elim
              </span>
            </h1>
            <p className="text-black text-[27px]  font-normal dark:text-light">
              Pro Software Engineer
            </p>
            <p>
              {/* Explore my latest projects and articles: A testament to my passion
              for turning ideas into web applications. */}
              Ninja Coder 🥋 | Crafting Pixel Perfection 🎨 | Taming Code
              Monsters 🐱‍💻 | Turning Ideas into Reality 💡 | Making the Web
              Awesome! 🌐
            </p>
            <div className="flex flex-dwrap gap-x-5 lg:w-[70%] transition duration-75 ease-in-out ">
              <Link href="/project" className="w-[40%] md:w-[60%]">
                <button
                  className="w-full h-[60px] rounded-[80px] text-white bg-[#a772bf] hover:bg-[#efced9] transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-110  uppercase"
                >
                  Portfolio
                </button>
              </Link>
              <button
                onClick={handleClickHireMe}
                className="w-[40%] md:w-[60%] h-[60px] rounded-[80px]  border border-[#a772bf] text-[#a772bf] hover:bg-[#efced9] transition duration-500 ease-in-out transform 
                       hover:-translate-y-1 hover:scale-110 uppercase "
              >
                Hire ME
              </button>
            </div>
          </div>
          {/* right */}
          <div>
            <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] flex-shrindk-0 rounded-full bg-[#efced9] border-10 border-[#caaad9] ">
              <AnimatedImg
                path="/CollinDesign/2s.png"
                alt="oslim"
                className="shadow-lg rounded-fulld"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeroPage;
