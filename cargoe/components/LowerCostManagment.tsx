import React from "react";
import ShipmentBookingSVG from "@/public/ShipmentBookingSVG.svg";
import EngineerSVG from "@/public/EngineerSVG.svg";
import AppActivesSVG from "@/public/AppActivesSVG.svg";
import Image from "next/image";

const LowerCostManagment = () => {
  return (
    <div className="h-400 w-450 max-sm:w-350 relative">
      <Image
        src={AppActivesSVG}
        className="w-auto ml-auto h-auto object-contain absolute -left-14 md:top-12 top-4 z-10 md:scale-100 scale-90"
        alt="AppActivesSVG"
      />
      <Image
        src={ShipmentBookingSVG}
        className="w-auto h-auto object-contain absolute z-0"
        alt="ShipmentBookingSVG"
      />
      <Image
        src={EngineerSVG}
        className="w-auto h-auto ml-auto object-contain relative z-10"
        alt="EngineerSVG"
      />
    </div>
  );
};

export default LowerCostManagment;
