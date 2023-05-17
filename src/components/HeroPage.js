"use client";
import AnimatedText, { singleWord } from "./AnimatedText";
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
              "Creating Engaging Digital Experiences with Custom Code and Design"
            }
            className={
              "!text-3xl md:text-4xl lg:!text-5xl !text-center md:!text-left font-bold capitalize dark:!text-light"
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
          <div
            className="flex items-center justify-center relative bg-[#303841] hover:bg-light hover:border hover:text-dark text-light w-full mt-6 rounded py-3 text-lg font-semibold 
            border-3 border-[#efced9] dark:bg-light dark:text-dark hover:dark:border hover:dark:bg-transparent hover:dark:text-light"
          >
            <MotionLink
              href="resume"
              target="_blank"
              initial={{ x: "100%" }}
              whileInView={{ x: 0 }}
              // whileHover={{
              //   backgroundColor: [
              //     "#121212",
              //     "rgba(131,58,180,1)",
              //     "rgba(253,29,29,1)",
              //     "rgba(252,176,69,1)",
              //     "rgba(131,58,180,1)",
              //     "#121212",
              //   ],
              //   transition: { duration: 1, repeat: Infinity },
              // }}
            >
              <div className="flex items-center">
                View My Resume
                <div className="w-10">
                  <LinkArrow className="w-10" />
                </div>
              </div>
            </MotionLink>
            <Link
              download={true}
              href={"resume"}
              className="absolute right-0 text-3xl bg-[#efced9] h-full flex justify-center items-center z-20 "
            >
              <DownloadIcon className="text-lg mx-2" />
            </Link>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
