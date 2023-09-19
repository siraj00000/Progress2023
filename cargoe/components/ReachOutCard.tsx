import { ReachOutOptionProps } from "@/types/index.types";
import Image from "next/image";
import React from "react";

const ReachOutCard: React.FC<ReachOutOptionProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="">
      <div className="w-238 p-3 py-5 rounded-24 box-shadow h-full text-center">
        <Image
          src={Icon}
          className="w-auto h-auto object-contain mx-auto"
          alt=""
        />
        <h4 className="text14 font-sharpsans700 my-3">{title}</h4>
        <p className="text14 font-nunito400">{description}</p>
      </div>
    </div>
  );
};

export default ReachOutCard;
