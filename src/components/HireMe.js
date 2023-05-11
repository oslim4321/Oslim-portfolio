import React from "react";

const HireMe = () => {
  return (
    <div className="fixed right-0 bottom-0 flex items-center justify-center">
      <div className=" w-72 flex justify-center items-center relative">
        <img
          src="/images/Web_Designer_._Web_Developer_.__1_-removebg-preview.png"
          className="fill fill-dark animate-spin-slow"
          alt=""
        />
        <span
          className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-2 text-sm bg-black rounded-full
        text-light shadow-md border border-solid h-20 w-20 hover:bg-light hover:text-dark"
        >
          Hire
        </span>
      </div>
    </div>
  );
};

export default HireMe;
