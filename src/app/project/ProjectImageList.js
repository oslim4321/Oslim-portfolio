  "use client";

import { ChevronLeft, ChevronRight } from "@/src/components/Icons";
import Image from "next/image";
import React, { useState } from "react";

const ProjectImageList = ({ pupUpShow }) => {
  const [showImagePopup, setshowImagePopup] = useState(0);
  return (
    <div>
      {/* <div className="flex items-center justify-center gap-10 overflow-x-scroll  no-scrollbar">
        {pupUpShow.projectImages.length > 0 &&
          pupUpShow.projectImages.map((img, i) => (
            <Image
              key={i}
              src={img}
              alt={pupUpShow.projectName}
              className="w-[100px] h-[100px] object-cover cursor-pointer rounded-full"
              onClick={() => setshowImagePopup(i)}
              width="500"
              height="500"
              priority
            />
          ))}
        <p className="dark:text-light">View All</p>

      </div> */}
      {/* {showImagePopup && ( */}
      <div className="w-full h-full bg-ligfht absoludte top-[50%] transelte-y-[-50%] glassBg shadow flex justify-center items-center inset-0">
        <Slider pupUpShow={pupUpShow} />
      </div>
      {/* )} */}
    </div>
  );
};

function Slider({ pupUpShow }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pupUpShow.projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pupUpShow.projectImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-red-300 overflow-hidden w-[90%]">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pupUpShow.projectImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full"
            width="500"
            height="500"
            priority
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[#a36bb9] p-2 rounded-full text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#a36bb9] p-2 rounded-full text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
        onClick={nextSlide}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default ProjectImageList;
