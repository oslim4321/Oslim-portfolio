import HeroPage from "../components/HeroPage";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export default function Home() {
  return (
    <main className={`${montserrat.className} bg-light w-full min-h-screen`}>
      {/* <HeroPage /> */}
    </main>
  );
}
