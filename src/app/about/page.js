import AnimatedText from "@/src/components/AnimatedText";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const page = () => {
  // throw new Error("error fuck");
  return (
    <div className="bg-[#efced9]">
      <AnimatedText text="Passion Fuels Purpose!" />
    </div>
  );
};

export default page;
