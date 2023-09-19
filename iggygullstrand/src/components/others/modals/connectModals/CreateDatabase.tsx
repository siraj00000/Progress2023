import { InformationCircleIcon } from "@heroicons/react/20/solid";
import ComboboxComponent from "../../ComboBox";
import { AccountType } from "../../../../contants";

const CreateDatabase = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">Create Database</h1>

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
          placeholder="Insert API Key"
          className="custom-input-field"
        />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">
          Index
          <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
        </span>
        <input
          type="text"
          placeholder="Insert Index"
          className="custom-input-field"
        />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">
          Environment
          <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
        </span>
        <input
          type="text"
          placeholder="Insert Environment"
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

export default CreateDatabase;
