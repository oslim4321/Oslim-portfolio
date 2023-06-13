"use client";

import { useState } from "react";
import EditPopUp from "./EditPopUp";
import { getProjectById } from "@/lib/QueryFirebase";

const ProjectList = ({ QueryProject }) => {
  console.log(QueryProject, "i am fast");
  const [oneProject, setoneProject] = useState(false);
  const [Aproject, setAproject] = useState("");

  async function GetTheProject(id) {
    setoneProject(id);
    const data = await getProjectById(id);
    setAproject(data);
  }

  return (
    <>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Student Name(optional)
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Created at
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Delete
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {QueryProject.map((proj, i) => (
                <tr key={i}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={proj.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {proj.projectName}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {proj.studentName ? proj.studentName : "not a student"}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {proj.id}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer border flexd justify-center items-center">
                    <p
                      className="text-gray-900 whitespace-no-wrap "
                      onClick={() => GetTheProject(proj.id)}
                    >
                      Edit
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer border flexd justify-center items-center">
                    <p className="text-gray-900 whitespace-no-wrap ">delete</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Activo</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {oneProject ? (
            <div>
              <div
                className="glassBg absolute fixed inset-0 mt-20 cursor-pointer"
                onClick={() => {
                  setoneProject(false);
                  setAproject("");
                }}
              ></div>
              <div className="absolute top-20 left-[50%] translate-x-[-50%] ">
                <EditPopUp
                  Aproject={Aproject}
                  removeEditPopup={setoneProject}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
