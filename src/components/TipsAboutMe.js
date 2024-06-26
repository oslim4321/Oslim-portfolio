"use client";
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImg from "./AnimatedImg";
import { motion } from "framer-motion";
import { merriweather } from "@/lib/utilty/Font";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";
import Link from "next/link";

const TipsAboutMe = () => {
  return (
    <div className="relative overflow-">
      <motion.svg
        initial={{ y: "100%", x: "-100%" }}
        whileInView={{ y: 0, x: 0 }}
        transition={{
          y: { duration: 1, yoyo: Infinity },
          x: { duration: 1, yoyo: Infinity },
        }}
        // initial={{ y: "100%" }}
        // whileInView={{ y: 0 }}
        // transition={{ staggerChildren: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=" -mb-14"
      >
        <path
          fill="#efced9"
          fillOpacity="1"
          d="M0,128L40,112C80,96,160,64,240,69.3C320,75,400,117,480,117.3C560,117,640,75,720,69.3C800,64,880,96,960,133.3C1040,171,1120,213,1200,224C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </motion.svg>
      <div className="bg-[#efced9] mt-10">
        <div className=" cont grid grid-cols-12 place-items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="text-center md:text-start dark:text-dark md:w-[80%]">
              {/* <AnimatedText
                text="Introduction and Expertise"
                className={`my-10 !font-bold !text-3xl md:!text-5xl !leading-10`}
              /> */}
              <h1
                className={`my-10 !font-bold !text-3xl md:!text-3xl lg:!text-6xl !leading-10 z-10 ${merriweather.className}`}
              >
                <span>
                  {" "}
                  Introduction <br /> and Expertise
                </span>
              </h1>
              {/*             
              <p>
                I am a Junior Web Developer with <YearOfExperiance />+ years of
                experience in the MERN (MongoDB, Express.js, React, Node.js)
                stack and the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack,
                and also a PHP Laravel developer. I specialize in frontend
                development and have a strong understanding of backend
                technologies.
              </p>
              <p>
                Currently, I am working as a Frontend Developer Instructor at
                SQI College of ICT, where I impart my knowledge and expertise to
                aspiring developers. I am passionate about creating
                well-designed, responsive, and user-friendly websites and
                applications.
              </p>
              <p>
                I enjoy working with diverse teams and I am always eager to
                learn and take on new challenges. With my skills and dedication,
                I am confident that I can make a valuable contribution to your
                organization.
              </p> */}
              <p className="text-lg text-slate-600 ">
                Experienced Web Developer with 4+ years in MERN, MEVN, and PHP
                Laravel. Strong frontend skills. Passionate about creating
                user-friendly websites. Collaborative team player. Ready for new
                challenges.
              </p>
              <div className="flex justify-center md:justify-start ">
                <Link
                  href="/resume"
                  className="b animate-bounce my-5 h-16 w-64 flex justify-center items-center"
                >
                  <div className="i h-16 w-64 bg-gradient-to-br from-[#a772bf]  to-[#a772bf] items-center rounded-xl shadow-2xl  cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                  <div className="text-center text-white font-semibold z-10 pointer-events-none flex justify-content items-center">
                    View CV!
                  </div>
                </Link>
                {/* dowmload button */}
        

                <div></div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* <Image
              src={"/images/cartoonTable.jpg"}
              width={"700"}
              height={"700"}
              className="w-full "
            /> */}
            <AnimatedImg
              path={"/CollinDesign/3ss.png"}
              alt="coding table"
              className="w-full md:!w-[80%]"
              direction="100%"
            />
          </div>

          {/* <div
            // className="flex justify-ceenter items-center"
            style={{
              backgroundImage: `url("/images/cartoonTable.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default TipsAboutMe;
