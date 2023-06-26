"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LiIcons from "./LiIcons";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";
import { Electric } from "./Icons";
import { merriweather } from "@/lib/utilty/Font";
import AnimatedText from "./AnimatedText";

export const experienceData = [
  {
    title: "Instructor",
    duration: "01/January/2020 - PRESENT",
    company: "SQI College of ICT, Ibadan, Nigeria",
    description: [
      "Taught courses in frontend web development, including JavaScript, HTML, CSS, and related technologies",
      "Developed and updated course materials, including lesson plans, presentations, and assignments, to keep pace with industry trends and best practices",
      "Facilitated hands-on coding projects and group exercises to help students build practical skills and apply theoretical concepts",
      "Pursued professional development opportunities in frontend web development and teaching methodologies, including attending conferences and workshops and completing online courses and certifications.",
    ],
    href: "https://edu.sqi.ng/",
  },
  {
    title: "Freelance MERN Stack Developer",
    duration: "09/September/2021 - MONTH 20XX",
    company: "Mern stack",
    description: [
      "Worked with clients to understand project requirements and deliver customized solutions using Next.js and MERN stack technologies",
      "Designed and implemented responsive and user-friendly interfaces using HTML, CSS, and JavaScript frameworks such as React and Redux",
      "Built scalable and efficient backend systems using Node.js, Express.js, MongoDB, and other related technologies",
      "Implemented automated testing and deployment strategies to ensure code quality and reliability",
      "Collaborated with other developers and project stakeholders to ensure timely delivery of high-quality work",
    ],
  },
];
export const educationData = [
  {
    id: 1,
    title: "Education",
    year: "2017 / 2021",
    institution: "University of Ibadan",
    degree: "(B.Sc.) degree: Computer Science",
    description:
      "As a recent graduate with a Bachelor of Science (B.Sc.) degree in Computer Science from the esteemed University of Ibadan, I am a highly motivated individual with a keen attention to detail. Throughout my educational journey, I have honed advanced skills in written and verbal communication, critical thinking, and problem-solving. These skills have proven invaluable in my successful completion of various academic projects and internships. I thrive in collaborative team environments and excel at adapting to dynamic situations and meeting deadlines. I am enthusiastic about utilizing my expertise and experience to pursue fresh opportunities and make a positive impact in the field of computer science.",
  },
  {
    id: 2,
    title: "Education",
    year: "2015 / 2017",
    institution: "Gateway Polytechnic",
    degree: "Diploma: Computer Science",
    description:
      " As a recent graduate of Gateway Polytechnic with a diploma in Computer Science, I am a highly motivated and detail-oriented individual with a passion for learning and applying new knowledge. Throughout my studies, I have developed strong skills in written and verbal communication, critical thinking, and problem-solving, which I have successfully applied in various academic projects and internships. I am adept at working collaboratively with diverse teams and individuals, and I thrive in adapting to changing situations and meeting deadlines. As I embark on the next phase of my academic and professional journey, I am excited to leverage my skills and experience to pursue new opportunities and make a positive impact in the field of computer science.",
  },
  {
    id: 3,
    title: "Education",
    year: "2019 / 2020",
    institution: "SQI College of ICT, Ibadan.",
    degree: "(B.Sc.) degree: Software Engineering",
    description:
      "As a software engineering student at SQI College of ICT, I am a dedicated and detail-oriented individual with a strong interest in software development and emerging technologies. Through my coursework and projects, I have gained a solid foundation in programming languages, software design, and development methodologies, as well as experience working in collaborative team environments. I am eager to continue building my skills and knowledge in software engineering and to apply them to real-world challenges and opportunities.",
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
    <section className=" py-10 cont dark:text-light">
      {/* <h2
        className={` font-bold  text-3xl md:text-8xl  my-32 text-light w-full text-center dark:text-light ${merriweather.className}`}
      >
        Experience
      </h2> */}
      <AnimatedText
        text={"Experience"}
        className={`my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl `}
      />

      <div className="my-3 relative" ref={ref}>
        {/* left line scrolling start */}
        <motion.div
          className="absolute left-0 md:left-8 top-0 w-[4px] h-full origin-top bg-dark dark:bg-light/70"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        {/* left line scrolling end */}

        {experienceData.map((expe, i) => (
          <motion.div
            className="flex justify-center items-center flex-col m-6 relative"
            key={i}
          >
            <LiIcons reference={liRef} />
            <motion.div
              ref={liRef}
              className="p-6 glassBg rounded shadow-md md:w-[70%] flex justify-center items-center flex-col"
              // whileHover={{ scale: 1.05 }}
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
              {/* <div className="text-gray-800 mt-4 dark:text-light/90">
                {expe.description.map((item, index) => (
                  <p className="my-4">
                    ({index + 1}) <span key={index}>{item}</span>
                  </p>
                ))}
              </div> */}
            </motion.div>
            {/* Add more experience items as needed */}
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
      {/* <h2
        className={` font-bold  text-3xl md:text-8xl  my-32 text-light w-full text-center dark:text-light font-bold ${merriweather.className}`}
      >
        Education
      </h2> */}
      <AnimatedText
        text={"Education"}
        className={`my-10 !font-bold !text-3xl dark:!text-light sm:!text-4xl md:!text-5xl lg:!text-7xl xl:!text-8xl `}
      />

      <motion.div ref={ref} className="my-3 relative">
        {/* left line scrolling start */}
        <motion.div
          className="absolute left-0 md:left-8 top-0 w-[4px] h-full origin-top bg-dark dark:bg-light/70"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        {/* left line scrolling end */}
        {educationData.map((edu, i) => (
          <motion.div
            className="flex justify-center items-center flex-col m-6 relative"
            key={i}
          >
            <LiIcons reference={liRef} />
            <motion.div
              ref={liRef}
              className="p-6 glassBg rounded shadow-md  md:w-[70%] flex justify-center items-center flex-col"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-light/70">
                {edu.degree} | {edu.year}
              </p>
              {/* <p className="text-gray-800 mt-4 dark:text-light/90 text-center">
                {edu.description.length > 70
                  ? `${edu.description.slice(0, 200)}...`
                  : edu.description}
              </p> */}
            </motion.div>
            <motion.div />
            {/* </div> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
// const Education = () => {
//   return <div>ijfjf</div>;
// };
const AboutPage = () => {
  const [mode] = UseThemesSwitcher();
  console.log(mode);

  return (
    <div
      // className={`${
      //   mode === "dark" ? "twoBgColorDark" : mode === "light" && "twoBgColor"
      // }  dark:text-white`}
      className="twoBgColor
       dark:bg-gradient-to-r from-gray-900 via-transparent to-gray-700 relative py-20;
"
    >
      {/* <Electric className="absolute left-0  text-white" /> */}
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
