import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";
import TipsAboutMe from "../components/TipsAboutMe";
import ContactForm from "../components/GetInTouch";
import BuildAndPaint from "../components/BuildAndPaint";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});
export default function Home() {
  return (
    <main
      className={`${montserrat.className} bg-light w-full min-h-screen tracking-wider`}
    >
      <div className="bg-[#f5f5f5]  dark:bg-dark  dark:text-light pt-10">
        <HeroPage />
        <TipsAboutMe />
        <BuildAndPaint />
        <ContactForm />
      </div>
    </main>
  );
}
