"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import LiIcons from "./LiIcons";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

import AnimatedText from "./AnimatedText";

export const experienceData = [
  {
    title: "Instructor",
    duration: "01/January/2020 - PRESENT",
    company: "SQI College of ICT, Ibadan, Nigeria",
    description: [
      "Taught courses in frontend web development, including JavaScript, HTML, CSS, and related technologies.",
      "Developed and updated course materials, including lesson plans, presentations, and assignments, to keep pace with industry trends and best practices.",
      "Facilitated hands-on coding projects and group exercises to help students build practical skills and apply theoretical concepts.",
      "Pursued professional development opportunities in frontend web development and teaching methodologies.",
    ],
    href: "https://edu.sqi.ng/",
  },
  {
    title: "Frontend Developer",
    duration: "06/2024 - 09/2024",
    company: "TRIVOH",
    description: [
      "Developed and maintained a video call conference platform, focusing on user experience and real-time communication.",
      "Collaborated with the development team to implement core features like video conferencing, user authentication, and chat functionality.",
      "Worked with modern frontend technologies to optimize performance and cross-browser compatibility.",
    ],
  },

  {
    title: "Full Stack Developer",
    duration: "01/October/2023 - 2024",
    company: "Mentorshub, Estonia Remote",
    description: [
      "Develop and maintain responsive and user-friendly web applications using Next.js and NestJS.",
      "Collaborate with cross-functional teams to design and implement both frontend and backend features.",
      "Optimize website performance and ensure compatibility across various browsers and devices.",
      "Build scalable backend systems with NestJS for handling APIs and server-side logic.",
    ],
    href: "https://mentorshub.io/",
  },
  {
    title: "Freelance MERN Stack Developer",
    duration: "09/September/2021 - PRESENT",
    company: "Oslim's Technologies - Freelance",
    description: [
      "Collaborated with clients to understand project requirements and delivered customized solutions using Next.js and MERN stack technologies.",
      "Designed and implemented responsive and user-friendly interfaces using React, Redux, and Tailwind CSS.",
      "Built scalable backend systems using Node.js, Express.js, and MongoDB.",
      "Implemented automated testing and deployment strategies to ensure code quality and reliability.",
      "Worked in a remote team, ensuring timely delivery of high-quality solutions.",
    ],
  },
];

export const educationData = [
  {
    id: 1,
    title: "Education",
    year: "2024 / present",
    institution: "NOUN University",
    degree: "B.Sc. Computer Science",
    description:
      "Acquired advanced skills in problem-solving, critical thinking, and collaborative team environments.",
  },
  {
    id: 2,
    title: "Education",
    year: "2022 / 2023",
    institution: "SQI College of ICT, Ibadan",
    degree: "B.Sc. Software Engineering",
    description:
      "Developed a strong foundation in programming languages, software design, and development methodologies, with a focus on real-world application.",
  },
  {
    id: 3,
    title: "Education",
    year: "2019 / 2021",
    institution: "Gateway Polytechnic",
    degree: "Diploma in Mass Communication",
    description:
      "Developed strong skills in communication, media studies, and critical thinking, applying theoretical knowledge to real-world scenarios.",
  },
];

const Experience = () => {
  const ref = useRef();
  const liRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="py-10 cont dark:text-light">
      <AnimatedText
        text={"Experience"}
        className="my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl"
      />

      <div className="my-3 relative" ref={ref}>
        <motion.div
          className="absolute left-0 md:left-8 top-0 w-[4px] h-full origin-top bg-dark dark:bg-light/70"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>

        {experienceData.map((expe, i) => (
          <motion.div
            className="flex justify-center items-center flex-col m-6 relative"
            key={i}
          >
            <LiIcons reference={liRef} />
            <motion.div
              ref={liRef}
              className="p-6 glassBgNoShadow rounded shadow-md md:w-[70%] flex justify-center items-center flex-col"
              whileTap={{ scale: 0.8 }}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {expe.href ? (
                <Link target="_blank" href={expe.href}>
                  <h3 className="text-xl font-semibold mb-2">{expe.company}</h3>
                </Link>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-2">{expe.company}</h3>
                </div>
              )}
              <p className="text-gray-600 dark:text-light/70">
                {expe.title} | {expe.duration}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const ref = useRef();
  const liRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="py-10 cont dark:text-light">
      <AnimatedText
        text={"Education"}
        className="my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl"
      />

      <motion.div ref={ref} className="my-3 relative">
        <motion.div
          className="absolute left-0 md:left-8 top-0 w-[4px] h-full origin-top bg-dark dark:bg-light/70"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>

        {educationData.map((edu, i) => (
          <motion.div
            className="flex justify-center items-center flex-col m-6 relative"
            key={i}
          >
            <LiIcons reference={liRef} />
            <motion.div
              ref={liRef}
              className="p-6 glassBgNoShadow rounded shadow-md md:w-[70%] flex justify-center items-center flex-col"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-light/70">
                {edu.degree} | {edu.year}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const AboutPage = () => {
  const [mode] = UseThemesSwitcher();

  return (
    <div className="twoBgColor dark:bg-gradient-to-r from-gray-900 via-transparent to-gray-700 relative md:py-40">
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
