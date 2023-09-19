import { FeaturesProps } from "@/types/index.types";
import Image from "next/image";
import React from "react";

const Features: React.FC<FeaturesProps> = ({ Icon, title }) => {
  return (
    <article className="flex items-center gap-2 bg-lightGray rounded-80 p-2 px-3 border hover:border-activeTab hover:bg-light hover:shadow-lg hover:shadow-shadowGray cursor-pointer">
      <Image src={Icon} className="w-auto h-auto object-contain rounded-full border-none" alt="" />
      <h2 className="text-16 leading-16 font-nunito700 text-activeTab">{title}</h2>
    </article>
  );
};

export default Features;
