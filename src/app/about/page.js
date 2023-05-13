import AboutHeroPage from "@/src/components/AboutHeroPage";
import AnimatedText from "@/src/components/AnimatedText";
import Skills from "@/src/components/Skills";

const page = () => {
  return (
    <div className=" bg-[#f5f5f5]">
      <div className="cont">
        <div className="h-screen">
          <AnimatedText
            text="Unleashing Creativity!"
            className="my-10 !font-bold !text-4xl"
          />

          <AboutHeroPage />
        </div>
        {/* skkills */}
        <Skills />
      </div>
    </div>
  );
};

export default page;
