import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

interface CustomCheckboxProps {
  checked: boolean;
  uncheckedColor: string;
  checkedColor: string;
  onChange?: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  uncheckedColor,
  checkedColor,
  onChange,
}) => {

  const handleCheckboxChange = () => {
    if (onChange) {
      onChange();
    }
  };

  const checkboxStyle = `w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer border border-darkHard ${
    checked ? `bg-${checkedColor} text-white` : `bg-${uncheckedColor}`
  }`;

  return (
    <div className={checkboxStyle} onClick={handleCheckboxChange}>
      {checked ? (
        <CheckIcon className={`w-5 h-5 bg-${checkedColor} rounded-lg`} />
      ) : (
        <span className="w-5 h-5"></span>
      )}
    </div>
  );
};

export default CustomCheckbox;
