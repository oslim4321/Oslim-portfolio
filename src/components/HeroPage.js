"use client";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { DownloadIcon, LinkArrow } from "./Icons";
import AnimatedImg from "./AnimatedImg";
import Summary from "./SummaryAboutMe";

const HeroPage = () => {
  const MotionLink = motion(Link);
  return (
    <div className="cont">
      <div className="md:flex items-center justify-between w-full ">
        <div className="w-full md:w-1/2">
          <AnimatedImg
            path={"/images/Work in progress-rafiki.svg"}
            alt={"oslim"}
            className=" "
            direction="-100%"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col self-center ">
          <AnimatedText
            text={
              // "Creating Engaging Digital Experiences with Custom Code and Design"
              "I solve challenges through innovative coding."
            }
            className={
              "!text-3xl md:text-4xl lg:!text-5xl !text-center md:!text-left font-bold capitalize dark:!text-light leading-[30px]"
            }
            undeline={true}
          />
          {/* small text */}
          {/* <AnimatedText */}
          {/* className="font-base my-4 !text-lg !font-medium text-start"
          text="Hello i am sooto selim Explore my latest projects and articles:
          A testament to my passion for turning ideas into web applications" */}
          {/* /> */}

          {/* <motion.p className="font-base my-4 !text-lg !font-medium text-start">
            Hello i am sooto selim Explore my latest projects and articles: A
            testament to my passion for turning ideas into web applications
          </motion.p> */}
          <Summary />
          {/* <motion.div> */}
          <div className="flex items-start mt-6">
            <div
              className="flex items-center justify-center relative bg-[#303841] hover:bg-light hover:border hover:text-dark text-light w-[90%]  roundefd py-3 text-lg font-semibold 
            border-3 border-[#efced9] dark:bg-light dark:text-dark hover:dark:border hover:dark:bg-transparent hover:dark:text-light"
            >
              <MotionLink
                href="resume"
                target="_blank"
                initial={{ x: "100%" }}
                whileInView={{ x: 0 }}
              >
                <div className="flex items-center">
                  View My Resume
                  <div className="w-10">
                    <LinkArrow className="w-10" />
                  </div>
                </div>
              </MotionLink>
            </div>
            <a
              download={true}
              href={"/Sooto Mern stack CV.pdf"}
              className="text-3xl w-[10%] bg-[#a36bb9] h-full flex justify-center items-center z-20 py-6"
            >
              <DownloadIcon className="text-lg mx-2 text-white" />
            </a>
          </div>
          {/* </motion.div> */}
          {/* DOT */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
