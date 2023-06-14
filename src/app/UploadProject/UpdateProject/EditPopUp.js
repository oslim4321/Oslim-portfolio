"use client";

import React, { useState } from "react";
import { buttons as projectCategory } from "@/lib/utilty/arrayList";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/lib/utilty/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const EditPopUp = ({ Aproject, removeEditPopup }) => {
  const [projectData, setprojectData] = useState({});
  const [Image, setImage] = useState("");
  console.log(Aproject, "ok it me");

  /* get  image url */
  const uploadImage = async () => {
    const randomNumber = Math.floor(Math.random() * 2000);

    const storageRef = ref(storage, `images/${Image.name + randomNumber}`);
    await uploadBytes(storageRef, Image);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  async function EditProject() {
    try {
      let newImageUrl = null;

      if (Image) {
        newImageUrl = await uploadImage();
      }
      // Update the project data with the new image URL
      const updatedProjectData = { ...projectData, image: newImageUrl };

      console.log(updatedProjectData);

      const docRef = doc(db, "projects", Aproject?.id);
      await updateDoc(docRef, Image ? updatedProjectData : projectData);

      console.log("Document successfully updated!");
      removeEditPopup(false);
      alert("success");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  }

  function formData(e) {
    // console.log(e.target.value);
    setprojectData({ ...projectData, [e.target.name]: e.target.value });
  }

  /* get image */
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files);
  };

  return (
    <div>
      {Aproject ? (
        <section className="md:max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Update Project
          </h1>
          <div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="ProjectName"
                >
                  Project Name
                </label>
                <input
                  id="ProjectName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={formData}
                  name={"projectName"}
                  value={Aproject.projectName}
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="gitHubLink"
                >
                  GitHub Link
                </label>
                <input
                  id="gitHubLink"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={formData}
                  name={"gitHubLink"}
                  value={Aproject.gitHubLink}
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="projectLink"
                >
                  Web Link
                </label>
                <input
                  id="projectLink"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={formData}
                  name={"projectLink"}
                  value={Aproject.projectLink}
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="ProjectLink
"
                >
                  Project Link
                </label>
                <input
                  id="ProjectLink"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={formData}
                  name={"projectLink"}
                  value={Aproject.projectLink}
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="StudentName"
                >
                  Student Name (optional)
                </label>
                <input
                  id="StudentName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  onChange={formData}
                  name="studentName"
                  value={Aproject.studentName}
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="Category
"
                >
                  Category
                </label>
                <select
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  name="category"
                  onChange={formData}
                >
                  <option disabled defaultValue>
                    {Aproject.category}
                  </option>
                  {projectCategory.map((elem, i) => (
                    <option value={elem.cat} key={i}>
                      {elem.text}
                    </option>
                  ))}
                  {/* <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option> */}
                </select>
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="ProjectDescription"
                >
                  Project Description
                </label>
                <textarea
                  id="ProjectDescription"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={Aproject.projectDesc}
                  onChange={formData}
                  name="projectDesc"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p className="text-xs text-white">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                onClick={EditProject}
              >
                Edit
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}

      {/* <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Account settings
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Password Confirmation
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section> */}
    </div>
  );
};

export default EditPopUp;
