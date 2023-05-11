import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";

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
      <div className="max-w-[90%] mx-auto pt-10">
        <HeroPage />
      </div>
    </main>
  );
}
