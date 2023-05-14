"use client";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LiIcons from "./LiIcons";
import UseThemesSwitcher from "./Hooks/UseThemesSwitcher";

const Experience = () => {
  const ref = useRef();
  const liRef = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const experienceData = [
    {
      title: "Instructor",
      duration: "01/January/2023 - PRESENT",
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
      duration: "09/September/2022 - MONTH 20XX",
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

  return (
    <section className=" py-10 cont dark:text-light">
      <h2 className=" font-bold  text-3xl md:text-8xl  my-32 text-light w-full text-center dark:text-light">
        Experience
      </h2>

      <div className="my-3 relative" ref={ref}>
        {/* left line scrolling start */}
        <motion.div
          className="absolute left-0 md:left-8 top-0 w-[4px] h-full origin-top bg-dark"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        {/* left line scrolling end */}

        {experienceData.map((expe) => (
          <motion.div className="flex justify-center items-center flex-col m-6 relative">
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

              <p className="text-gray-600">
                {expe.title} | {expe.duration}
              </p>
              <div className="text-gray-800 mt-4 dark:text-light/90">
                {expe.description.map((item, index) => (
                  <p className="my-4">
                    ({index + 1}) <span key={index}>{item}</span>
                  </p>
                ))}
              </div>
            </motion.div>
            {/* Add more experience items as needed */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "Education",
      year: 2021,
      institution: "Gateway Polytechnic, Ogun State, Nigeria",
      degree: "Diploma: Mass Communication",
      description:
        "As a recent graduate of Gateway Polytechnic with a diploma in Mass Communication, I am a highly motivated and detail-oriented individual with a passion for learning and applying new knowledge. Throughout my studies, I developed strong skills in written and verbal communication, critical thinking, and problem-solving, which I have successfully applied in various academic projects and internships. I have also honed my ability to work collaboratively with diverse teams and individuals, and to adapt to changing situations and deadlines. As I embark on the next phase of my academic and professional journey, I am excited to leverage my skills and experience to pursue new opportunities and make a positive impact in my field.",
    },
    {
      id: 2,
      title: "Education",
      year: 2022,
      institution: "SQI College of ICT, Ibadan.",
      degree: "Software Engineering",
      description:
        "As a current software engineering student at SQI College of ICT, I am a dedicated and detail-oriented individual with a strong interest in software development and emerging technologies. Through my coursework and projects, I have gained a solid foundation in programming languages, software design, and development methodologies, as well as experience working in collaborative team environments. I am eager to continue building my skills and knowledge in software engineering and to apply them to real-world challenges and opportunities.",
    },
  ];

  return (
    <section className="py-10 cont dark:text-light">
      <h2 className=" font-bold  text-3xl md:text-8xl  my-32 text-light w-full text-center dark:text-light ">
        Education
      </h2>
      {educationData.map((edu) => (
        <div key={edu.id} className="my-5">
          <div className="flex justify-center items-center flex-col gap-6">
            <motion.div
              className="p-6 glassBg rounded shadow-md  md:w-[70%] flex justify-center items-center flex-col"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-gray-600">
                {edu.degree} | {edu.year}
              </p>
              <p className="text-gray-800 mt-4 dark:text-light/90 text-center">
                {edu.description.length > 70
                  ? `${edu.description.slice(0, 200)}...`
                  : edu.description}
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};
// const Education = () => {
//   return <div>ijfjf</div>;
// };
const AboutPage = () => {
  const [mode] = UseThemesSwitcher();
  const [classs, setclasss] = useState();
  console.log(mode);

  useEffect(() => {
    // Update your component or perform any side effects based on the current mode
    // For example, you can conditionally apply different styles or logic
    // alert("mode change");
    // if (mode === "dark") {
    //   setclasss("twoBgColorDark");
    //   // Dark mode logic
    // } else {
    //   setclasss("twoBgColor");
    //   // Light mode logic
    // }
  }, [mode]);
  // if (mode) {

  // }

  return (
    <div
      // className={`${
      //   mode === "dark" ? "twoBgColorDark" : mode === "light" && "twoBgColor"
      // }  dark:text-white`}
      className="twoBgColor
       dark:bg-gradient-to-r from-gray-900 via-transparent to-gray-700;
"
    >
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
