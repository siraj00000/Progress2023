import React from "react";
import { StatsBoxProps } from "../../types/index.types";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const StatsBox: React.FC<StatsBoxProps> = ({
  Icon,
  count,
  percentage,
  title,
}) => {
  return (
    <article className="flex-1 bg-dark p-24 rounded-16">
      <div className="flex items-center gap-3">
        <img src={Icon} alt="stats-category-icon" />
        <h6 className="text-graySecondary text-18 poppins600">{title}</h6>
      </div>
      <div className="flex items-center gap-8 mt-16">
        <h3 className="text-28 nunito600 text-white">{count}</h3>
        <div className="flex items-center gap-1 text-greenGradDark per-bg-grad px-12 py-1 rounded-10">
          <ArrowUpRightIcon className="w-4 h-4" />
          {percentage}
        </div>
      </div>
    </article>
  );
};

export default StatsBox;
