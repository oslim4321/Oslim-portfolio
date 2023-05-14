"use client";
import AnimatedText, { singleWord } from "./AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkArrow } from "./Icons";
import AnimatedImg from "./AnimatedImg";
import Summary from "./SummaryAboutMe";

const HeroPage = () => {
  const MotionLink = motion(Link);
  return (
    <div className="cont">
      <div className="flex items-center justify-between w-full py-10d">
        <div className="w-1/2">
          <AnimatedImg
            path={"/images/Work in progress-rafiki.svg"}
            alt={"oslim"}
            className=" "
            direction="-100%"
          />
        </div>
        <div className="w-1/2 flex flex-col self-center">
          <AnimatedText
            text={
              "Creating Engaging Digital Experiences with Custom Code and Design"
            }
            className={
              "!text-5xl !text-left font-bold capitalize dark:!text-light"
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
          <MotionLink
            href="resume"
            target="_blank"
            className="flex items-center justify-center bg-[#303841] hover:bg-light hover:border hover:text-dark text-light w-full mt-6 rounded py-3 text-lg font-semibold 
            border-3 border-[#efced9] dark:bg-light dark:text-dark hover:dark:border hover:dark:bg-transparent hover:dark:text-light"
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
            View My Resume
            <div className="w-10">
              <LinkArrow className="w-10" />
            </div>
          </MotionLink>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
