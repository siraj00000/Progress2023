import { StatisticscomponentProps } from "@/types/index.types";
import Image from "next/image";
import React from "react";

const StatisticsComponent: React.FC<StatisticscomponentProps> = ({
  Icon,
  count,
  category,
}) => {
  return (
    <article className="">
      <Image src={Icon} className="w-auto h-auto object-contain" alt="Icon" />
      <h4 className="lg:text-80 md:text-40 text-56 font-sharpsans800 text-secondary">{count}</h4>
      <p className="text16 text-center text-activeTab font-nunito400 uppercase">{category}</p>
    </article>
  );
};

export default StatisticsComponent;
