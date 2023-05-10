import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const page = () => {
  // throw new Error("error fuck");
  return (
    <div className={`${montserrat.className}`}>
      <h2 className=" font-montserra">page</h2>
    </div>
  );
};

export default page;
