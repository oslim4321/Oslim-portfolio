"use client";
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedImg from "./AnimatedImg";

const TipsAboutMe = () => {
  return (
    <div className="relative overflow-">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className=" -mb-14"
      >
        <path
          fill="#efced9"
          fill-opacity="1"
          d="M0,128L40,112C80,96,160,64,240,69.3C320,75,400,117,480,117.3C560,117,640,75,720,69.3C800,64,880,96,960,133.3C1040,171,1120,213,1200,224C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#efced9]">
        <AnimatedText
          text="Introduction and Expertise"
          className="!text-5xl font-bold capitalize"
        />
        <div className=" cont grid grid-cols-12 place-items-center">
          <div className="col-span-12 md:col-span-6">
            <p className="text-center">
              Passionate Web Developer with a knack for crafting innovative and
              user-friendly digital experiences. With a strong foundation in
              HTML, CSS, and JavaScript, I specialize in building responsive and
              interactive websites. My goal is to combine my technical skills
              and creative mindset to develop intuitive and visually captivating
              web solutions. Through continuous learning and staying up-to-date
              with industry trends, I strive to deliver high-quality code and
              exceed client expectations. Let's bring your ideas to life and
              create meaningful online experiences together.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            {/* <Image
              src={"/images/cartoonTable.jpg"}
              width={"700"}
              height={"700"}
              className="w-full "
            /> */}
            <AnimatedImg
              path={"/images/cartoonTable.jpg"}
              alt="coding table"
              className=""
              direction="100%"
            />
          </div>

          {/* <div
            // className="flex justify-ceenter items-center"
            style={{
              backgroundImage: `url("/images/cartoonTable.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default TipsAboutMe;
