"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { merriweather } from "@/lib/utilty/Font";
import { Img } from "./AnimatedImg";

const WhatIDo = () => {
  const WhatIdDo = [
    {
      heading: "I Develop Website",
      img: [
        "/images/minis homepage.png",
        "/images/Sqi Ecommerce Home page.png",
        "/images/TimeShopy.png",
      ],
      descrip:
        "Create captivating websites that cater to your specific requirements. Specializing in visually striking and user-friendly designs.",
      url: "project",
      language: ["Node js", "React", "laravel", "..."],
    },
    {
      heading: "I Paint, Sometimes",
      img: [
        "/images/cartonPaint.jpg",
        "/images/cartonPaint2.jpg",
        "/images/cartonPaint3.jpg",
      ],
      descrip:
        "Unleash my creativity through the power of painting. Bringing stories to life with my passion for art and cartooning. ",
      url: "coming-soon",
      language: ["Adobe", "Autodesk", "illustrator", "..."],
    },
    {
      heading: "Aspiring UI/UX",
      img: [
        "/images/ui ux 01.png",
        "/images/ui ux 2.jpg",
        "/images/ui ux 3.jpg",
      ],
      descrip:
        "Aspiring to become a professional Ui/UX designer in the near future, showcasing a strong drive and ambition for pursuing a career in the field of user interface and user experience design.",
      url: "coming-soon",
      language: ["Figma", "Adobe XD", "Sketch"],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const imgLength = WhatIdDo[prevIndex].img.length;
        return prevIndex === imgLength - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* <!-- component --> */}
      <section className="text-gray-600 body-font dark:bg-gray-900 cont">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1
                className={`sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-dark dark:text-slate-200 ${merriweather.className}`}
              >
                What I DO
              </h1>
              <div className="h-1 w-20 bg-[#a772bf] rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {WhatIdDo.map((skil, i) => (
              <div className="xl:w-1/3 md:w-1/2 p-4 py-10" key={i}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl whitedspace-nowrap text-center md:text-left font-bold tracking-widest mb-4 text-[#e49db5]"
                  >
                    {skil.heading}
                  </motion.h1>
                  {/* <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    // exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                  >
                    <Image
                      width="500"
                      height="500"
                      src={skil.img[activeIndex]}
                      alt="Image Size 720x400"
                      className="h-[90%] object-cover"
                    />
                  </motion.div> */}
                  <div className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6">
                    <Img
                      path={skil.img[0]}
                      alt="Image Size 720x400"
                      className="h-[90%] object-cover"
                    />
                  </div>
                  <p className="leading-relaxed text-basfe text-dark dark:text-light text-sm">
                    {skil.descrip.slice(0, 80)}
                  </p>
                  <p className="leading-relaxed text-base my-2">
                    {skil.language.map((language, i) => (
                      <span
                        className="inline-block px-2 py-1 mr-2 mb-2 text-sm font-medium leading-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full"
                        key={i}
                      >
                        {language}
                      </span>
                    ))}
                  </p>
                  <Link href={skil.url || "/"}>
                    <motion.button
                      className="bg-[#efced9] text-dark dark:text-white my-2 hover:bg-[#a96dbf] py-2 px-4 rounded w-full dark:bg-gray-700 dark:hover:bg-gray-800"
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      View Portfolio
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIDo;
