import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";
import TipsAboutMe from "../components/TipsAboutMe";

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
      <div className=" pt-10">
        <HeroPage />
        <TipsAboutMe />
      </div>
    </main>
  );
}
