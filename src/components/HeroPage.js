import Image from "next/image";
import AnimatedText from "./AnimatedText";

const HeroPage = () => {
  return (
    //   className="h-[100vh] bg-[#c8e2df]"
    <div>
      {/* <img src="/images/IMG_20230329_110911_269.jpg" width="'300'" alt="" /> */}

      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <Image
            src="/Images/youtube_profile_image.png"
            alt="oslim"
            width={"300"}
            height={"300"}
            className="w-[60%]"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center self-center">
          <AnimatedText
            text={
              "Creating Engaging Digital Experiences with Custom Code and Design"
            }
            className="text-6xl text-left"
          />

          <p className="font-base my-3 font-medium">
            Explore my latest projects and articles: A testament to my passion
            for turning ideas into web applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
