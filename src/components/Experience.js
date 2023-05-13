"use client";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="p-6 bg-white rounded shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="text-xl font-semibold mb-2">Company Name</h3>
          <p className="text-gray-600">Position | Dates</p>
          <p className="text-gray-800 mt-4">
            Description of your experience and responsibilities in this role.
          </p>
        </motion.div>
        {/* Add more experience items as needed */}
      </div>
    </section>
  );
};

// const Education = () => {
//   const educationData = [
//     {
//       id: 1,
//       title: "Education",
//       year: 2021,
//       institution: "Gateway Polytechnic, Ogun State, Nigeria",
//       degree: "Diploma: Mass Communication",
//       description:
//         "As a recent graduate of Gateway Polytechnic with a diploma in Mass Communication, I am a highly motivated and detail-oriented individual with a passion for learning and applying new knowledge. Throughout my studies, I developed strong skills in written and verbal communication, critical thinking, and problem-solving, which I have successfully applied in various academic projects and internships. I have also honed my ability to work collaboratively with diverse teams and individuals, and to adapt to changing situations and deadlines. As I embark on the next phase of my academic and professional journey, I am excited to leverage my skills and experience to pursue new opportunities and make a positive impact in my field.",
//     },
//     {
//       id: 2,
//       title: "Education",
//       year: 2022,
//       institution: "SQI College of ICT, Ibadan.",
//       degree: "Software Engineering",
//       description:
//         "As a current software engineering student at SQI College of ICT, I am a dedicated and detail-oriented individual with a strong interest in software development and emerging technologies. Through my coursework and projects, I have gained a solid foundation in programming languages, software design, and development methodologies, as well as experience working in collaborative team environments. I am eager to continue building my skills and knowledge in software engineering and to apply them to real-world challenges and opportunities.",
//     },
//   ];

//   return (
//     <section className="py-10 flex justify-center items-center flex-col">
//       <h2 className="text-3xl font-bold mb-6">Education</h2>
//       {educationData.map((edu) => (
//         <div key={edu.id} className="my-5">
//           <div className="grid grid-cols-12 gap-8">
//             <motion.div
//               className="p-6 bg-white rounded shadow-md col-span-12 md:col-span-6"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
//               <p className="text-gray-600">
//                 {edu.degree} | {edu.year}
//               </p>
//               <p className="text-gray-800 mt-4">{edu.description}</p>
//             </motion.div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };
const Education = () => {
  return <div>ijfjf</div>;
};

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center flex-co">
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;
