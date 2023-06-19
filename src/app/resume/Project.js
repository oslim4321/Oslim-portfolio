import React from "react";

let projectInfo = [
  {
    projectName: "Purple Creation Video Editing Portfolio",
    projectDesc:
      "I developed and designed a video editing website for Purple Creation using Next.js, Tailwind, CSS, and Node.js. The website fetches videos from the company's YouTube channel and displays them on the website. ",
    projectLink: "https://purple-creation.vercel.app/",
    projecrGithub:
      "https://github.com/oslim4321/Adam-s-Video-Editor-Portfolio-",
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
];

const Project = () => {
  return (
    <div>
      {" "}
      <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
      <ul className="mt-1">
        {projectInfo.map((project, i) => (
          <li className="py-2" key={i}>
            <div className="flex justify-between my-1">
              <strong>{project.projectName}</strong>
              <p className="flex">
                {project.languages.map((elem, i) => (
                  <span
                    className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded"
                    key={i}
                  >
                    {elem.slice(0, 5)}
                  </span>
                ))}
              </p>
            </div>
            <ul className="flex mb-2">
              <li>
                <a
                  href={project.projectLink}
                  className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                >
                  {project.projecrGithub ? "Code" : "private repositories"}
                </a>
              </li>
            </ul>
            <p className="text-gray-800 mt-4 dark:text-light/90 text-justify">
              {project.projectDesc}
            </p>
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};

export default Project;
