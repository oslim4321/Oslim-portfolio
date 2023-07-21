import { merriweather } from "@/lib/utilty/Font";
import React from "react";

const FirstHeroPage = () => {
  return (
    <div>
      <div className="m:h-[100vh] dark:bg-dark bg-light">
        <div className="cont">
          <div>
            <p className="text-[48px] font-normal font-[400] text-[#efced9]">
              Hi, i’m
            </p>
            <h1
              className={` !font-bold !text-3xl md:!text-3xl lg:!text-6xl !leading-10 z-10 ${merriweather.className}`}
            >
              <span> Oslim Selim</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeroPage;
