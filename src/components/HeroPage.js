"use client";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { motion } from "framer-motion";
import { LinkArrow } from "./Icons";

const HeroPage = () => {
  const MotionLink = motion(Link);
  return (
    //   className="h-[100vh] bg-[#c8e2df]"
    <div>
      {/* <img src="/images/IMG_20230329_110911_269.jpg" width="'300'" alt="" /> */}

      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image
            src="/Images/youtube_profile_image.png"
            alt="oslim"
            width={"300"}
            height={"300"}
            className="w-full"
          />
        </div>
        <div className="w-1/2 flex flex-col self-center">
          <AnimatedText
            text={
              "Creating Engaging Digital Experiences with Custom Code and Design"
            }
            className="text-5xl text-left"
          />

          <p className="font-base my-4 font-medium">
            Explore my latest projects and articles: A testament to my passion
            for turning ideas into web applications
          </p>
          {/* <motion.div> */}
          <MotionLink
            href="resume"
            target="_blank"
            className="flex items-center justify-center bg-dark text-light w-1/2 rounded py-3 text-lg font-semibold hover:bg-light"
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
            <LinkArrow className="w-6" />
          </MotionLink>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
