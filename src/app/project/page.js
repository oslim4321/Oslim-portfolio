import TransitionEffect from "@/src/components/TransitionEffect";
import ProjectParent from "./ProjectParent";
// import { db } from "@/lib/utilty/firebase";
// import { collection, getDocs, query, where } from "firebase/firestore";
import { fetchItemsByCategory } from "@/lib/QueryFirebase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
  description:
    "Explore Sooto Selim's portfolio of web development projects. Featuring responsive websites, web applications, e-commerce solutions, and innovative digital experiences built with React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Web Development Projects",
    "Portfolio Projects",
    "React Projects",
    "Next.js Applications",
    "Full Stack Projects",
    "E-commerce Websites",
    "Responsive Web Design",
    "JavaScript Applications",
    "Client Work Portfolio",
    "Web Development Showcase",
  ],
  openGraph: {
    title: "Projects - Sooto Selim Portfolio",
    description:
      "Explore my portfolio of web development projects featuring responsive websites, web applications, and innovative digital experiences.",
    images: [
      {
        url: "/images/Sqi Ecommerce Home page.png",
        width: 1200,
        height: 630,
        alt: "Sooto Selim Web Development Projects",
      },
    ],
  },
  twitter: {
    title: "Projects - Sooto Selim Portfolio",
    description:
      "Explore my portfolio of web development projects featuring responsive websites and web applications.",
  },
  alternates: {
    canonical: "/project",
  },
};

const page = async () => {
  // const data = await getData();
  const data = await fetchItemsByCategory("client-work");

  const styleOverflow = {
    overflow: "hidden",
  };
  return (
    <>
      <TransitionEffect />
      <section>
        <div style={styleOverflow}>
          <ProjectParent data={data} />
        </div>
      </section>
    </>
  );
};

export default page;
