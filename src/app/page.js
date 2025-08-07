import { Montserrat } from "next/font/google";
import FirstHeroPage from "../components/FirstHeroPage";
import ContactForm from "../components/GetInTouch";
import TipsAboutMe from "../components/TipsAboutMe";
import TransitionEffect from "../components/TransitionEffect";
import WhatIDo from "../components/WhatIDo";

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});

export const metadata = {
  title: "Home",
  description:
    "Welcome to Sooto Selim's portfolio. Discover innovative web solutions crafted by a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies. 4+ years of professional experience delivering exceptional digital experiences.",
  keywords: [
    "Full Stack Developer",
    "Web Development Portfolio",
    "React Developer Nigeria",
    "Next.js Projects",
    "JavaScript Expert",
    "Frontend Development",
    "Backend Development",
    "Web Designer Portfolio",
    "Professional Developer Nigeria",
  ],
  openGraph: {
    title: "Sooto Selim - Full Stack Developer Portfolio",
    description:
      "Discover innovative web solutions crafted by a passionate Full Stack Developer with 4+ years of experience in React, Next.js, and Node.js.",
    images: [
      {
        url: "/images/MyLogo.png",
        width: 1200,
        height: 630,
        alt: "Sooto Selim Portfolio Homepage",
      },
    ],
  },
  twitter: {
    title: "Sooto Selim - Full Stack Developer Portfolio",
    description:
      "Discover innovative web solutions crafted by a passionate Full Stack Developer with 4+ years of experience.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`${montserrat.className} bg-light w-full min-h-screen tracking-wider`}
      >
        <div className="bg-[#f5f5f5]  dark:bg-dark  dark:text-light overflow-hidden">
          {/* <Shapes className="absolute left-0 top-[50%] lg:top-[400%]" /> */}

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
