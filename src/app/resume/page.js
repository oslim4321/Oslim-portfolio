import TransitionEffect from "@/src/components/TransitionEffect";
import Resume from "./Resume";

export const metadata = {
  title: "Resume",
  description:
    "Download Sooto Selim's professional resume. View detailed information about my Full Stack Development experience, skills, education, and career achievements. 4+ years of expertise in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Sooto Selim Resume",
    "Full Stack Developer CV",
    "Web Developer Resume",
    "React Developer CV",
    "Professional Resume Download",
    "Developer Experience",
    "Programming Skills Resume",
    "Nigeria Developer CV",
    "JavaScript Developer Resume",
  ],
  openGraph: {
    title: "Resume - Sooto Selim Full Stack Developer",
    description:
      "Download my professional resume showcasing 4+ years of Full Stack Development experience and expertise in modern web technologies.",
    images: [
      {
        url: "/images/MyLogo.png",
        width: 1200,
        height: 630,
        alt: "Sooto Selim Professional Resume",
      },
    ],
  },
  twitter: {
    title: "Resume - Sooto Selim Full Stack Developer",
    description:
      "Download my professional resume showcasing Full Stack Development experience and expertise.",
  },
  alternates: {
    canonical: "/resume",
  },
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      {/* <DarkLightAnimation /> */}
      {/* 
      <secton className="w-full h-screen flex justify-center items-center bg-gray-100 mt-5">
        <iframe
          src="/International CV.pdf"
          className="w-full h-full"
          width="100%"
          height="1000px"
        ></iframe>
      </secton> */}
      <Resume />
      {/* <Cv /> */}
    </>
  );
};

export default page;
