import AnimatedText from "@/src/components/AnimatedText";
import Skills from "@/src/components/Skills";
import Image from "next/image";

const page = () => {
  // throw new Error("error fuck");
  return (
    <div className=" bg-[#f5f5f5]">
      <div className="cont">
        <div className="h-screen">
          <AnimatedText text="Passion Fuels Purpose!" />

          <div className="flex items-start justify-between w-full py-10d">
            <div className="w-1/2 flex flex-col self-cdenter">
              <AnimatedText
                text={"about"}
                className="!text-5xl !text-left font-bold capitalize"
              />

              {/* small text */}
              <AnimatedText
                className="font-base my-4 !text-lg !font-medium text-start"
                text="Explore my latest projects and articles: A testament to my passion
            for turning ideas into web applications"
              />
              {/* </motion.div> */}
            </div>
            <div className="w-1/2">
              {/* <HeroPageAnimatedLeft /> */}
              <Image
                src="/images/dt3f_y2ce_230125-removebg-preview.png"
                alt="oslim"
                width={"700"}
                height={"700"}
                className="w-[70%]"
              />
            </div>
          </div>
        </div>
        {/* skkills */}
        <Skills />
      </div>
    </div>
  );
};

export default page;
