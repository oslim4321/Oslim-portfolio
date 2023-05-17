import React from "react";
import { Dot, Rectangle } from "./Icons";

const ShowIcon = () => {
  return (
    <>
      <div>
        <Dot className=" absolute right-0 top-40" />
        <Rectangle className="absolute top-[50%]" />
      </div>
    </>
  );
};

export default ShowIcon;
