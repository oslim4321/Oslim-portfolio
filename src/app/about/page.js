import AboutHeroPage from "@/src/components/AboutHeroPage";
import AboutPage from "@/src/components/AboutPage";
import AnimatedText from "@/src/components/AnimatedText";
import Capability from "@/src/components/Capability";
import Skills from "@/src/components/Skills";

const page = () => {
  return (
    <div className=" bg-[rgb(245,245,245)]  dark:bg-dark dark:text-light">
      <div className="dark:bg-slate-900">
        <AnimatedText
          text="Unleashing Creativity!"
          className="my-10 !font-bold text-2xl md:!text-8xl !dark:text-dark"
        />
        <AboutHeroPage />
        <Capability />
      </div>
      {/* skkills */}
      <Skills />
      <div>
        <AboutPage />
      </div>
    </div>
  );
};

export default page;
