"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatIDo = () => {
  let WhatIdDo = [
    {
      heading: "I Develop & Design Website",
      img: "",
      descrip:
        "I am a professional web developer with over 4 years of freelance experience. ",
      language: ["html", "css", "js"],
    },
    {
      heading: "I Paint, Sometimes",
      img: "",
      descrip:
        "I am a painter and cartoonist with a passion for using my art to tell stories ",
      language: ["html", "css", "js"],
    },
    {
      heading: "I Paint,  Sometimes",
      img: "",
      descrip:
        "I am a painter and cartoonist with a passion for using my art to tell stories.",
      language: ["html", "css", "js"],
    },
  ];
  return (
    <div>
      {/* <!-- component --> */}
      <section className="text-gray-600 body-font dark:bg-gray-900 cont">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-">
                ME
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {WhatIdDo.map((skil, i) => (
              <div className="xl:w-1/3 md:w-1/2 p-4 py-10" key={i}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <motion.h1
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl text-center md:text-left font-bold tracking-widest mb-4 text-[#e49db5]"
                  >
                    {skil.heading}
                  </motion.h1>
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6"
                    src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                    alt="Image Size 720x400"
                  />
                  {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2> */}
                  <p className="leading-relaxed text-base text-dark dark:text-light">
                    {skil.descrip.slice(0, 70)}
                  </p>
                  <p className="leading-relaxed text-base">
                    {skil.language.map((language, i) => (
                      <span
                        className="inline-block px-2 py-1 mr-2 mb-2 text-sm font-medium leading-none bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full"
                        key={i}
                      >
                        {language}
                      </span>
                    ))}
                  </p>
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
