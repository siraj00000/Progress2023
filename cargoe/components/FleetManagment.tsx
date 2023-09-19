import React from "react";
import FileLady from "@/public/FileLady.svg";
import AppActivesSVG from "@/public/AppActivesSVG.svg";
import AppSnapSVG from "@/public/AppSnapSVG.svg";
import Image from "next/image";

const FleetManagment = () => {
  return (
    <figure className="h-auto w-450 max-sm:w-350 mx-auto relative pt-20">
      <Image
        src={AppActivesSVG}
        className="w-auto ml-auto h-auto object-contain absolute sm:left-[3%] max-sm:-left-10 z-10"
        alt="AppActivesSVG"
      />
      <Image
        src={AppSnapSVG}
        className="w-auto h-auto object-contain absolute sm:left-[25%] max-sm:left-[10%] z-0 sm:scale-125 max-sm:scale-100"
        alt="AppSnapSVG"
      />
      <Image
        src={FileLady}
        className="w-auto ml-auto h-auto object-contain relative z-10 max-sm:left-10"
        alt="FileLady"
      />
    </figure>
  );
};

export default FleetManagment;
