"use client";
import AnimatedImg from "@/src/components/AnimatedImg";
// import { Poppins, Raleway } from "next/font/google";
import AnimatedText from "./AnimatedText";

// const raleway = Raleway({
//   weight: ["400", "600"],
//   subsets: ["latin"],
//   // variable: "--font-montserrat",
// });
const AboutHeroPage = () => {
  return (
    <div className="grid w-full grid-cols-12 overflow-hidden cont place-items-center md:gap-x-10 py-10d">
      <div className="col-span-12 md:col-span-6 ">
        <AnimatedText
          text="Unleashing Creativity!"
          className={`my-10 !font-bold !text-5xl dark:!text-light md:!text-6xl lg:!text-7xl xl:!text-8xl`}
          paddin={true}
        />
        {/* <h3 className="!text-xl !text-left font-bold uppercase">BIOGRAPHY</h3>

        <p
          className={`font-base my-4 md:text-lg !font-medium !text-justify ${raleway.className}`}
        >
          Hey there, I'm Sooto Selim, a web developer with a knack for crafting
          unique and captivating digital experiences. With 2 years of hands-on
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
        </p> */}
        {/* </motion.div> */}
      </div>
      <div className="col-span-12 md:col-span-4">
        {/* <HeroPageAnimatedLeft /> */}
        <div className="flex items-end justify-end bord">
          {/* <Image
                  src="/images/my-toon-picture-removebg-preview.png"
                  alt="oslim"
                  width={"700"}
                  height={"700"}
                  className="w-[70%]"
                  prio
                /> */}
          <AnimatedImg
            path={"/MyPic/Cut 3.png"}
            alt="oslim"
            className="!w-full md:!w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroPage;
