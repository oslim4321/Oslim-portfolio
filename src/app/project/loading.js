import { Skeleton } from "@/src/components/Icons";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div>
      {/* <Image
        src={"/images/skeleton.png&text=loading"}
        width={"700"}
        height="700"
      /> */}
      loading...
      {/* <Skeleton /> */}
    </div>
  );
};

export default loading;
