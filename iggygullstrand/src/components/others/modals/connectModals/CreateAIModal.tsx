import { InformationCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import ComboboxComponent from "../../ComboBox";
import { AccountType } from "../../../../contants";

const CreateAIModal = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">Create AI</h1>

      <label className="">
        <span className="text-white poppins400 text-15 block">Select</span>
        <ComboboxComponent data={AccountType} placeholder="Select" />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">
          API Key
          <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
        </span>
        <input
          type="text"
          placeholder="API key"
          className="custom-input-field"
        />
      </label>

      <div className="flex items-center justify-end gap-3">
        <button className="bg-transparent border-2 border-darkPrimary py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Test Key
        </button>
        <button className="text-white text-15 poppins600 mt-8 custom-button">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateAIModal;
