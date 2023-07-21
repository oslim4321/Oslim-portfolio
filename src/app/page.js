import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";
import TipsAboutMe from "../components/TipsAboutMe";
import ContactForm from "../components/GetInTouch";
import BuildAndPaint from "../components/BuildAndPaint";
import TransitionEffect from "../components/TransitionEffect";
import { Shapes } from "../components/Icons";
import WhatIDo from "../components/WhatIDo";
import FirstHeroPage from "../components/FirstHeroPage";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`${montserrat.className} bg-light w-full min-h-screen tracking-wider`}
      >
        <div className="bg-[#f5f5f5]  dark:bg-dark  dark:text-light overflow-hidden">
          <Shapes className="absolute left-0 top-[50%] md:top-[400%]" />

          {/* <HeroPage /> */}
          <FirstHeroPage />
          <TipsAboutMe />
          {/* <BuildAndPaint /> */}
          <WhatIDo />
          <ContactForm />
        </div>
      </main>
    </>
  );
}
