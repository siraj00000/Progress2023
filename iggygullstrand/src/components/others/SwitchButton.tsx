import React from "react";
import { SwitchButtonType } from "../../types/index.types";

const SwitchButton: React.FC<SwitchButtonType> = ({
  label,
  handleToggle,
  isOn,
}) => {
  return (
    <div className="flex items-center">
      <button
        className={`rounded-full w-12 h-6 flex items-center justify-${
          isOn ? "end" : "start"
        } ${
          isOn ? "bg-greenLight" : "bg-darkHard"
        } transition-colors duration-300`}
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white mx-1 transition-transform duration-300 transform translate-x-${
            isOn ? "8" : "0"
          }`}
        ></div>
      </button>
      <label className="ml-2 text-15 poppins700 text-white">{label}</label>
    </div>
  );
};

export default SwitchButton;
