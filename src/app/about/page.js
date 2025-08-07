import AboutHeroPage from "@/src/components/AboutHeroPage";
import AboutPage from "@/src/components/AboutPage";
import Capability from "@/src/components/Capability";
import Skills from "@/src/components/Skills";
import TransitionEffect from "@/src/components/TransitionEffect";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});

export const metadata = {
  title: "About",
  description:
    "Learn more about Sooto Selim, a dedicated Full Stack Developer with 4+ years of experience in web development. Discover my journey, skills, expertise in React, Next.js, Node.js, and passion for creating exceptional digital experiences.",
  keywords: [
    "About Sooto Selim",
    "Full Stack Developer Biography",
    "Web Developer Experience",
    "React Expert Nigeria",
    "JavaScript Developer Skills",
    "Professional Background",
    "Web Development Journey",
    "Programming Skills",
    "Tech Stack Expertise",
  ],
  openGraph: {
    title: "About Sooto Selim - Full Stack Developer",
    description:
      "Learn more about Sooto Selim, a dedicated Full Stack Developer with 4+ years of experience in web development and passion for creating exceptional digital experiences.",
    images: [
      {
        url: "/images/my-toon-picture-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "About Sooto Selim - Full Stack Developer",
      },
    ],
  },
  twitter: {
    title: "About Sooto Selim - Full Stack Developer",
    description:
      "Learn more about my journey as a Full Stack Developer with 4+ years of experience in web development.",
  },
  alternates: {
    canonical: "/about",
  },
};

const page = () => {
  return (
    <>
      <section>
        <TransitionEffect />

        <div className=" bg-[rgb(245,245,245)]  dark:bg-dark dark:text-light overflow-hidden">
          <div className="dark:bg-sdlate-900">
            {/* <AnimatedText
              text="Unleashing Creativity!"
              className={`my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl`}
            /> */}
            <AboutHeroPage />
            <Capability />
          </div>
          {/* skkills */}
          <div className="mt-20">
            <Skills />
          </div>
          <div className="m">
            <AboutPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
