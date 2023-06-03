import TransitionEffect from "@/src/components/TransitionEffect";
import React from "react";

const page = () => {
  return (
    <>
      <TransitionEffect />

      <secton className="w-full h-screen flex justify-center items-center bg-gray-100 mt-5">
        <iframe
          src="/International CV.pdf"
          className="w-full h-full"
          width="100%"
          height="1000px"
        ></iframe>
      </secton>
    </>
  );
};

export default page;
