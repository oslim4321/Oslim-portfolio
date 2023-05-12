import React from "react";

const TipsAboutMe = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#efced9"
          fill-opacity="1"
          d="M0,128L40,112C80,96,160,64,240,69.3C320,75,400,117,480,117.3C560,117,640,75,720,69.3C800,64,880,96,960,133.3C1040,171,1120,213,1200,224C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div
        style={{
          backgroundImage: `url("/images/cartoonTable.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      ></div>
    </>
  );
};

export default TipsAboutMe;
