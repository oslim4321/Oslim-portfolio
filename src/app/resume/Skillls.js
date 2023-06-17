// import React from "react";

// const Skillls = () => {
//   return (
//     <div>
//       {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
//       <section class="pb-6 mb-4 mt-0 first:mt-0 break-inside-avoid border-b-4 border-gray-300 ">
//         {/* <!-- To keep in the same column --> */}
//         <section class="break-inside-avoid">
//           <h2 class="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
//             SKILLS
//           </h2>
//           <section class="mb-0 break-inside-avoid">
//             <section class="mt-1 last:pb-1">
//               <ul class="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1 font-bold">
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   HTML5
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   CSS3
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   SCSS
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Prompt Engineering
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Containerization
//                 </li>

//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   CI/CD
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   System Administration
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   BASH
//                 </li>

//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   AWS
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Linux
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Javascript
//                 </li>

//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Typescript
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Node.js
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   React.js
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Python
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   NoSQL
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Postgresql
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   MongoDB
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Lua
//                 </li>
//                 <li class="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800">
//                   Functional Programming
//                 </li>
//               </ul>
//             </section>
//           </section>
//         </section>
//       </section>
//     </div>
//   );
// };

// export default Skillls;

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue.js",
  "Sass",
  "Webpack",
  "Babel",
  "Git",
  "Responsive Design",
  "UI/UX Design",
  // Add more skills as needed
];

// const languageData = [
//   "JavaScript",
//   "Python",
//   "Java",
//   "C#",
//   "Ruby",
//   "Go",
//   "Swift",
//   "TypeScript",
//   "PHP",
//   "Rust",
//   // Add more programming languages as needed
// ];

const Skillls = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="gridd grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#a36cb7]">Skills</h1>
          <ul className="list-none space-y-2 flex flex-wrap gap-3 mb-4">
            {skillsData.map((skill, index) => (
              <li
                key={index}
                className="text-lg flex items-center dark:text-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-[#a36cb7]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12zm1 7H9v2h2v-2zm0-4H9V7h2v2z"
                    clipRule="evenodd"
                  />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* <div>
          <h1 className="text-3xl font-bold mb-4">Programming Languages</h1>
          <ul className="list-none space-y-2 flex flex-wrap gap-3">
            {languageData.map((language, index) => (
              <li key={index} className="text-lg flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-blue-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 100 12 6 6 0 000-12zm1 7H9v2h2v-2zm0-4H9V7h2v2z"
                    clipRule="evenodd"
                  />
                </svg>
                {language}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
import React from "react";

export const MobileSkills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Skills
      </h2>
      <div className="border border-gray-300 rounded-md shadow-md py-4 px-6 flex flex-wrap gap-3">
        {skillsData.map((skill) => (
          <div
            key={skill}
            className="bg-purple-500 text-white rounded-md py-1 px-3 text-sm font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Languages
      </h2>
      {/* <div className="border border-gray-300 rounded-md shadow-md py-4 px-6 flex flex-wrap gap-3">
        {languageData.map((language) => (
          <div
            key={language}
            className="bg-blue-500 text-white rounded-md py-1 px-3 text-sm font-medium"
          >
            {language}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Skillls;
