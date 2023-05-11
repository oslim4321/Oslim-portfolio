"use client";
import AnimatedText, { singleWord } from "./AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkArrow } from "./Icons";
import { PopUp } from "./PopUp";
import HeroPageAnimatedLeft from "./HeroPageAnimatedLeft";

const HeroPage = () => {
  const MotionLink = motion(Link);
  return (
    <div>
      <div className="flex items-center justify-between w-full py-20">
        <div className="w-1/2">
          {/* <Image
            src="/Images/IMG_20230329_110911_269.jpg"
            alt="oslim"
            width={"300"}
            height={"300"}
            className="w-[60%]"
          /> */}
          <HeroPageAnimatedLeft />
        </div>
        <div className="w-1/2 flex flex-col self-center">
          <AnimatedText
            text={
              "Creating Engaging Digital Experiences with Custom Code and Design"
            }
            className="!text-5xl !text-left font-bold capitalize"
          />

          {/* <p className="font-base my-4 font-medium">
            Explore my latest projects and articles: A testament to my passion
            for turning ideas into web applications
          </p> */}
          {/* small text */}
          <AnimatedText
            className="font-base my-4 !text-lg !font-medium text-start"
            text="Explore my latest projects and articles: A testament to my passion
            for turning ideas into web applications"
          />
          {/* <motion.div> */}
          <MotionLink
            href="resume"
            target="_blank"
            className="flex items-center justify-center bg-[#303841] text-light w-1/2 rounded py-3 text-lg font-semibold hover:bg-light"
            variants={singleWord}
            initial="initial"
            animate="animate"
            whileHover={{
              backgroundColor: [
                "#121212",
                "rgba(131,58,180,1)",
                "rgba(253,29,29,1)",
                "rgba(252,176,69,1)",
                "rgba(131,58,180,1)",
                "#121212",
              ],
              transition: { duration: 1, repeat: Infinity },
            }}
          >
            View My Resume
            <div className="w-10">
              <LinkArrow className="w-10" />
            </div>
          </MotionLink>
          {/* </motion.div> */}
        </div>
      </div>
      <PopUp />
    </div>
  );
};

export default HeroPage;
