import React from "react";
import { FaCircle } from "react-icons/fa";

type LegendComponentProps = {
  color: string;
  size: number;
  title: string;
};

const LegendComponent = ({
  color,
  size,
  title,
}: LegendComponentProps) => (
  <div className="flex items-center gap-2">
    <FaCircle color={color} size={size} />
    <p className="text-15 text-grayLight poppins400">{title}</p>
  </div>
);

export default LegendComponent;
