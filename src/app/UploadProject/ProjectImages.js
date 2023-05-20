import React from "react";

const ProjectImages = ({ images, setImages }) => {
  // Event handlers
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };
  return (
    <div>
      <label htmlFor="images" className="block mb-1 font-semibold">
        Project Images
      </label>
      <input
        type="file"
        id="images"
        onChange={handleImageChange}
        multiple
        className="mb-2"
      />
    </div>
  );
};

export default ProjectImages;
