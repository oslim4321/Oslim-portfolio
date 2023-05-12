import AnimatedText from "@/src/components/AnimatedText";
import Skills from "@/src/components/Skills";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const page = () => {
  // throw new Error("error fuck");
  return (
    <div className=" bg-[#f5f5f5]">
      <div className="cont">
        <div className="h-screen">
          <AnimatedText text="Passion Fuels Purpose!" />
        </div>
        {/* skkills */}
        <Skills />
      </div>
    </div>
  );
};

export default page;
