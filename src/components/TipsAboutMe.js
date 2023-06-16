"use client";
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImg from "./AnimatedImg";
import { motion } from "framer-motion";
import YearOfExperiance from "@/lib/YearOfExperiance";

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
      <div className="bg-[#efced9] ">
        <AnimatedText
          text="Introduction and Expertise"
          className={`!text-5xl font-bold capitalize !dark:text-dark !font-sans`}
        />
        <div className=" cont grid grid-cols-12 place-items-center">
          <div className="col-span-12 md:col-span-6">
            <p className="text-center dark:text-dark">
              {/* Passionate Web Developer with a knack for crafting innovative and
              user-friendly digital experiences. With a strong foundation in
              HTML, CSS, and JavaScript, I specialize in building responsive and
              interactive websites. My goal is to combine my technical skills
              and creative mindset to develop intuitive and visually captivating
              web solutions. Through continuous learning and staying up-to-date
              with industry trends, I strive to deliver high-quality code and
              exceed client expectations. Let's bring your ideas to life and
              create meaningful online experiences together. */}
              I am a Junior Web Developer with <YearOfExperiance />+ years of
              experience in the MERN (MongoDB, Express.js, React, Node.js) stack
              and the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack. I
              specialize in frontend development and have a strong understanding
              of backend technologies. Currently, I am working as a Frontend
              Developer Instructor at{" "}
              <span className="bg-[#a671be] px-2 py-1 rounded-md text-white animated-border dark:text-dark">
                SQI College of ICT
              </span>
              , where I impart my knowledge and expertise to aspiring
              developers. I am passionate about creating well-designed,
              responsive, and user-friendly websites and applications. I enjoy
              working with diverse teams and I am always eager to learn and take
              on new challenges. With my skills and dedication, I am confident
              that I can make a valuable contribution to your organization.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* <Image
              src={"/images/cartoonTable.jpg"}
              width={"700"}
              height={"700"}
              className="w-full "
            /> */}
            <AnimatedImg
              path={"/images/cartoonTable.jpg"}
              alt="coding table"
              className=""
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
