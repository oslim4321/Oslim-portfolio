import AboutHeroPage from "@/src/components/AboutHeroPage";
import AnimatedText from "@/src/components/AnimatedText";
import Capability from "@/src/components/Capability";
import AboutPage from "@/src/components/Experience";
import Skills from "@/src/components/Skills";

const page = () => {
  return (
    <div className=" bg-[#f5f5f5]">
      <div className="cont">
        <div className="">
          <AnimatedText
            text="Unleashing Creativity!"
            className="my-10 !font-bold !text-4xl"
          />

          <AboutHeroPage />
          <Capability />
        </div>
        {/* skkills */}
        <Skills />
        <AboutPage />
      </div>
    </div>
  );
};

export default page;
