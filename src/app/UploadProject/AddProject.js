"use client";

import { useState } from "react";
import TechnologySelect from "./TechnologySelect";

export default function AddProject() {
  const [image, setImage] = useState(null);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [projectImages, setProjectImages] = useState([]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image file to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, "images/" + image.name);
      await uploadBytes(storageRef, image);

      // Get the download URL of the uploaded image
      const downloadURL = await storageRef.getDownloadURL();

      // Save the project data to Firebase Firestore
      await db.collection("projects").add({
        image: downloadURL,
        projectName,
        projectDesc,
        gitHubLink,
        projectLink,
        technologies,
        projectImages,
        type: "client",
      });

      // Reset the form
      setImage(null);
      setProjectName("");
      setProjectDesc("");
      setGitHubLink("");
      setProjectLink("");
      setTechnologies("");
      setProjectImages([]);

      console.log("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="container cont mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Add Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block mb-1 font-semibold">
            Image
          </label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="projectName" className="block mb-1 font-semibold">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="projectDesc" className="block mb-1 font-semibold">
            Project Description
          </label>
          <textarea
            id="projectDesc"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            className="w-full border rounded p-2"
          ></textarea>
        </div>
        <div>
          <label htmlFor="gitHubLink" className="block mb-1 font-semibold">
            GitHub Link
          </label>
          <input
            type="text"
            id="gitHubLink"
            value={gitHubLink}
            onChange={(e) => setGitHubLink(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="projectLink" className="block mb-1 font-semibold">
            Project Link
          </label>
          <input
            type="text"
            id="projectLink"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        {/* <div>
          <label htmlFor="technologies" className="block mb-1 font-semibold">
            Technologies
          </label>
          <input
            type="text"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div> */}
        <TechnologySelect />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
