import React from "react";

let projectInfo = [
  {
    projectName: "Purple Creation Video Editing Portfolio",
    projectDesc:
      "I developed and designed a video editing website for Purple Creation using Next.js, Tailwind, CSS, and Node.js. The website fetches videos from the company's YouTube channel and displays them on the website. ",
    projectLink: "https://purple-creation.vercel.app/",
    projecrGithub:
      "https://github.com/oslim4321/Adam-s-Video-Editor-Portfolio-",
    languages: ["Next JS", "Node JS", "YouTube API", "Tailwind CSS", "CSS"],
  },
  {
    projectName: "Time Shoppy",
    projectDesc:
      "I have developed an online marketplace website for a client and also collaborated with other developers to build the eCommerce website for a client using the MERN stack (MongoDB, Express.js, React.js, and Node.js), along with Tailwind CSS and Bootstrap for styling. ",
    projectLink: "https://timeshoppy.netlify.app/",
    projecrGithub: null,
    languages: [
      "React JS",
      "Node JS",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "Express JS",
      "Multer",
      "Swiper JS",
    ],
  },
  {
    projectName: "SQI Ecommerce Website",
    projectDesc:
      "I have developed an online marketplace website for a client and also collaborated with other developers to build the eCommerce website for a client using the MERN stack (MongoDB, Express.js, React.js, and Node.js), along with Tailwind CSS and Bootstrap for styling. ",
    projectLink: "https://sqi-frontend-ecommerce.vercel.app/",
    projecrGithub:
      "https://github.com/oslim4321/Sqi-frontend-project-ecommerce",
    languages: [
      "HTML",
      "CSS",
      "Tailwind",
      "React JS",
      "Node JS",
      "MongoDB",
      "Express",
      "Snow JS",
    ],
  },
];

const Project = () => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl mt-6 pb-1 border-b font-semibold dark:text-light">
        Projects
      </h2>
      <ul className="mt-1">
        {projectInfo.map((project, i) => (
          <li className="py-2" key={i}>
            <div className="flex justify-between my-1 dark:text-light/90">
              <strong>{project.projectName}</strong>
              {/* beforw  */}
            </div>
            <ul className="flex mb-2">
              <li>
                <a
                  href={project.projectLink}
                  className="bg-[#efced9] text-dark px-2 py-1 mr-1 text-sm rounded"
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-[#efced9] text-dark px-2 py-1 mr-1 text-sm rounded"
                >
                  {project.projecrGithub ? "Code" : "private repositories"}
                </a>
              </li>
            </ul>
            {/* <p className="text-gray-800 mt-4 dark:text-light/70 text-justify">
              {project.projectDesc}
            </p> */}
            <div className="w-2e0 md:w-[40%] flex justify-start">
              <p className="flex  overflow-x-scroll no-scrollbar">
                {project.languages.slice(0, 4).map((elem, i) => (
                  <span
                    className="border border-[#a36cb7] text-black px-2 py-1 ml-1 text-xs rounded dark:text-light"
                    key={i}
                  >
                    {elem.slice(0, 5)}
                  </span>
                ))}
              </p>
            </div>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Project;
