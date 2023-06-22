"use client";
import { MyAddress, MyEmail, MyPhone, YearOfExperiance } from "@/lib/MyDetails";
import { educationData, experienceData } from "@/src/components/AboutPage";
import React from "react";
import Skillls, { MobileSkills } from "./Skillls";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { Bullet } from "@/src/components/Icons";
import {
  Facebook,
  GithubIcon,
  TwitterIcon,
  Whatsapp,
} from "@/src/components/Icons";
import Image from "next/image";
import Project from "./Project";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  // variable: "--font-montserrat",
});

const Resume = () => {
  return (
    <div className="flex justify-center content-center FunFont">
      <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 md:w-4/5 mt-10 mb-10 dark:bg-slate-800">
        <header>
          <ul className="flex flex-wrap justify-end gap-2">
            {/* <li>
              <a
                href=""
                className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                {" "}
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                  </g>
                </svg>
              </a>
            </li> */}
            {/* <li>
              {/* <!-- github --> */}
            {/* <a
                href="https://github.com/"
                className="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  aria-hidden="true"
                  role="img"
                  className="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </a>
            </li>  */}

            <li className="bg-[#a36cb7] flex justify-center items-center rounded-full w-10 h-10 hover:bg-slate-300">
              {" "}
              <motion.a
                href={"https://twitter.com/selim_adewale"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.8 }}
              >
                <TwitterIcon className="text-[#fab0c8] text-2xl hover:text-black dark:hover:text-light" />
              </motion.a>
            </li>
            <li className="bg-[#a36cb7] flex justify-center items-center rounded-full w-10 h-10 hover:bg-slate-300">
              {" "}
              <motion.a
                href={"https://github.com/oslim4321"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <GithubIcon className="text-[#fab0c8] text-2xl hover:text-black dark:hover:text-light" />
              </motion.a>
            </li>
            <li className="bg-[#a36cb7] flex justify-center items-center rounded-full w-10 h-10 hover:bg-slate-300">
              {" "}
              <motion.a
                href={"https://m.facebook.com/selim.sooto"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="text-[#fab0c8] text-2xl hover:text-black dark:hover:text-light" />
              </motion.a>
            </li>
            <li className="bg-[#a36cb7] flex justify-center items-center rounded-full w-10 h-10 hover:bg-slate-300">
              <motion.a
                href={"https://wa.me/07087121696"}
                className="w- mx-3  w-6"
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Whatsapp className="text-[#fab0c8] text-2xl hover:text-black dark:hover:text-light" />
              </motion.a>
            </li>
          </ul>
          <div className="md:flex justify-between items-center">
            <div className="my-5">
              <div
                className="bg-cover bg-no-repeat rounded-full h-52 w-52 border-4 border-[#a36cb7] overflow-hidden"
                // style={{ backgroundImage: "url(images/myPicture.jpg)" }}
              >
                <Image
                  width="500"
                  height="500"
                  src="/images/myPicture.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* text */}
            <div className="grid justify-items-start md:justify-items-end mt-4 w-full">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#a36cb7] dark:text-white relative inline-block ${poppins.className}`}
              >
                <span
                  className={`relative FunFont`}
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
                >
                  Sooto Selim
                </span>
                <motion.span
                  className={`absolute inset-0`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ borderColor: "#efced9" }}
                ></motion.span>
              </motion.h1>
              <p className="text-xl mt-5 dark:text-light/75">
                Full stack Developer
              </p>
            </div>
          </div>
        </header>
        <main className="md:flex gap-x-10">
          <div className="md:w-2/6">
            <h2 className="text-2xl pb-1 border-b font-semibold text-[#a36cb7]">
              Contact Details
            </h2>
            <ul className="mt-2 mb-10 fleex md:block">
              <li className="px-2 mt-1">
                <strong className="mr-1 dark:text-light">Phone </strong>
                <span className="block dark:text-slate-200">
                  <MyPhone />
                </span>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1 dark:text-light">E-mail </strong>
                <span className="block dark:text-slate-200">
                  <MyEmail />
                </span>
              </li>
              <li className="px-2 mt-1">
                <strong className="mr-1 dark:text-light">Location</strong>
                <span className="block dark:text-slate-200">
                  <MyAddress />
                </span>
              </li>
            </ul>
            {/* <strong className="text-xl font-medium ">Github Stats</strong>
            <ul className="flex w-full mt-2 mb-10">
              <li className="px-2 mt-2 w-4/12 bg-pink-600 text-white text-center rounded-tl-lg rounded-bl-lg">
                HTML
              </li>
              <li className="px-2 mt-2 w-4/12 bg-blue-600 text-white text-center">
                CSS
              </li>
              <li className="px-2 mt-2 w-5/12 bg-yellow-500 text-white text-center rounded-tr-lg rounded-br-lg">
                JS
              </li>
            </ul> */}
            {/* <!-- skills --> */}
            <div className="hidden md:block">
              <Skillls />
            </div>
            <div className="md:hidden">
              <MobileSkills />
            </div>
          </div>
          {/* <!-- info --> */}
          <div className="w-full md:w-4/6">
            <section>
              {/* <!-- about me --> */}
              <h2 className="text-2xl pb-1 border-b font-semibold text-[#a36cb7]">
                About
              </h2>
              <div className="text-gray-800 mt-4 dark:text-light/90 text-justify">
                <p>
                  I am a Junior Web Developer with <YearOfExperiance />+ years
                  of experience in the MERN (MongoDB, Express.js, React,
                  Node.js) stack and the MEVN (MongoDB, Express.js, Vue.js,
                  Node.js) stack, and also a PHP Laravel developer. I specialize
                  in frontend development and have a strong understanding of
                  backend technologies.
                </p>
                <p>
                  Currently, I am working as a Frontend Developer Instructor at
                  SQI College of ICT, where I impart my knowledge and expertise
                  to aspiring developers. I am passionate about creating
                  well-designed, responsive, and user-friendly websites and
                  applications.
                </p>
                <p>
                  I enjoy working with diverse teams and I am always eager to
                  learn and take on new challenges. With my skills and
                  dedication, I am confident that I can make a valuable
                  contribution to your organization.
                </p>
              </div>
            </section>

            <section>
              {/* <!-- work experiences --> */}
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold text-[#a36cb7]">
                Work Experiences
              </h2>
              <ul className="mt-2">
                {experienceData.map((experi, i) => (
                  <li className="pt-2" key={i}>
                    <p className="flex justify-between text-sm dark:text-light">
                      <strong className="text-base ">{experi.company}</strong>
                      {experi.duration}
                    </p>
                    <p className="flex justify-between text-base dark:text-light/70">
                      {experi.title}
                      <small>Nigeria</small>
                    </p>
                    {/* <div className="text-gray-800 mt-4 dark:text-light/90 text-justify">
                      {experi.description.map((item, index) => (
                        <div className="my-4" key={index}>
                          <div className="flex items-start">
                            <div className="flex items-start justify-start">
                              <Bullet className={"text-left"} />
                            </div>
                            <span key={index}>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              {/* <!-- education --> */}
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold text-[#a36cb7]">
                Education
              </h2>
              <ul className="mt-2">
                {educationData.map((edu, i) => (
                  <div key={i}>
                    <p className="flex justify-between text-sm dark:text-light mt-2">
                      <strong className="text-base  ">{edu.institution}</strong>
                      {edu.year}
                    </p>
                    {/* <p className="text-gray-800 mt-4 dark:text-light/90 text-justify">
                      {edu.description.length > 70
                        ? `${edu.description}`
                        : edu.description}
                    </p> */}
                  </div>
                ))}
              </ul>
            </section>
            <section>
              <Project />
            </section>
          </div>
        </main>
        {/* <footer className="mt-6">
          <p className="bg-gray-600 text-white text-center text-xs pt-2">
            The best way to predict the future is to create it.{" "}
            <small>- AbrahamLincoln</small>
          </p>
          <p className="bg-gray-600 text-white text-center text-sm pb-2">
            I am creating my future by learning new things and making small
            progresses everyday.
          </p>
        </footer> */}
      </div>
    </div>
  );
};

export default Resume;
