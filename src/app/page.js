import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";
import TipsAboutMe from "../components/TipsAboutMe";
import ContactForm from "../components/GetInTouch";
import BuildAndPaint from "../components/BuildAndPaint";
import TransitionEffect from "../components/TransitionEffect";

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
        <div className="bg-[#f5f5f5]  dark:bg-dark  dark:text-light pt-10 overflow-hidden">
          <HeroPage />
          <TipsAboutMe />
          <BuildAndPaint />
          <ContactForm />
        </div>
      </main>
    </>
  );
}
