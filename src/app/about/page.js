import AboutHeroPage from "@/src/components/AboutHeroPage";
import AboutPage from "@/src/components/AboutPage";
import AnimatedText from "@/src/components/AnimatedText";
import Capability from "@/src/components/Capability";
import Skills from "@/src/components/Skills";
import TransitionEffect from "@/src/components/TransitionEffect";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});
const page = () => {
  return (
    <>
      <section>
        <TransitionEffect />

        <div className=" bg-[rgb(245,245,245)]  dark:bg-dark dark:text-light overflow-hidden">
          <div className="dark:bg-sdlate-900">
            {/* <AnimatedText
              text="Unleashing Creativity!"
              className={`my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl`}
            /> */}
            <AboutHeroPage />
            <Capability />
          </div>
          {/* skkills */}
          <div className="mt-20">
            <Skills />
          </div>
          <div className="m">
            <AboutPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
