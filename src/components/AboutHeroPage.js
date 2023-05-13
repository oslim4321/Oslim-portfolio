"use client";
import React from "react";
import AnimatedImg from "@/src/components/AnimatedImg";

const AboutHeroPage = () => {
  return (
    <div className="flex items-center justify-between w-full py-10d">
      <div className="w-1/2 flex flex-col self-cdenter">
        {/* <AnimatedText
                text={"about"}
                className="!text-5xl !text-left font-bold capitalize"
              /> */}
        <h3 className="!text-xl !text-left font-bold uppercase">BIOGRAPHY</h3>

        {/* small text */}

        <p className="font-base my-4 !text-lg !font-medium !text-justify ">
          Hey there, I'm Oslim, a web developer with a knack for crafting unique
          and captivating digital experiences. With 2 years of hands-on
          experience in the field, I'm constantly exploring innovative ways to
          bring my clients' visions to life. To me, design extends beyond mere
          aesthetics. It's about finding practical solutions and creating
          seamless, delightful user experiences. I firmly believe that every
          website has the potential to be an impactful tool that solves
          real-world problems. Be it a website, a mobile app, or any other
          digital product, I approach each project with a dedication to
          excellence and a user-centered mindset. I thrive on the challenge of
          transforming ideas into functional and visually appealing websites.
          I'm excited to apply my skills and passion to your next project. Let's
          collaborate and build a website that truly stands out.
        </p>
        {/* </motion.div> */}
      </div>
      <div className="w-1/2">
        {/* <HeroPageAnimatedLeft /> */}
        <div className="bord">
          {/* <Image
                  src="/images/my-toon-picture-removebg-preview.png"
                  alt="oslim"
                  width={"700"}
                  height={"700"}
                  className="w-[70%]"
                /> */}
          <AnimatedImg
            path={"/images/mobile_small.png"}
            alt="oslim"
            className="!w-[60%] "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroPage;
