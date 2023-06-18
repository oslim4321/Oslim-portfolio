"use client";

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
  "ReactJs",
  "NextJs",
  "AstroJS",
  "GatsbyJs",
  "firebase",
  "Bootstrap CSS",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PHP",
  "Laravel",
  "Git",
  "GitHub",

  // Add more skills as needed
];

const skillDa = {
  "Web Development Frameworks": [
    "ReactJs",
    "NextJs",
    "AstroJS",
    "GatsbyJs",
    "Bootstrap CSS",
    "Tailwind CSS",
  ],
  "Front-end Technologies": ["HTML", "CSS", "JavaScript"],
  "Back-end Technologies": ["Node.js", "Express.js", "PHP", "Laravel"],
  "Database Management": ["Firebase", "MongoDb", "SQL"],
  "Design Tools": ["Git", "GitHub"],
};
console.log(skillDa);

const Skillls = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="gridd grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#a36cb7]">Skills</h1>
          <ul className="list-none space-y-2 flex flex-wrap gap-3 mb-4">
            {Object.entries(skillDa).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h2 className="text-xl font-bold mb-2">{category}</h2>
                <ul className="list-none space-y-2 flex items-center flex-wrap gap-3 mb-4">
                  {skills.map((skill, index) => (
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
import React from "react";

export const MobileSkills = () => {
  const skillsArray = Object.values(skillDa).flat();
  console.log(skillsArray);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#a36cb7]">Skills</h1>
          <ul className="list-none space-y-2 flex flex-wrap gap-3 mb-4">
            {skillsArray.map((skill, index) => (
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
      </div>
    </div>
  );
};

export default Skillls;
