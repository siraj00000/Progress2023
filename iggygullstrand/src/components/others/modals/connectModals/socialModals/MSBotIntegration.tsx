import ComboboxComponent from "../../../ComboBox";
import { AccountType } from "../../../../../contants";

const MSBotIntegration = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-28 text-white poppins700 w-[90%]">
        New Microsoft Bot Framework Integration
      </h1>
      <p className="text-gray text-15 poppins400">
        Go to https://rasa.com/docs/rasa/connectors/microsoft-bot-framework for
        more details
      </p>

      <label className="text-15 poppins600  flex flex-col">
        <span className="flex items-center text-white gap-1">
          Select API-configuration
        </span>
        <ComboboxComponent placeholder="Select" data={AccountType} />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">App ID</span>
        <input
          type="text"
          placeholder="Insert App ID"
          className="custom-input-field"
        />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">App Password</span>
        <input
          type="text"
          placeholder="Insert App Password"
          className="custom-input-field"
        />
      </label>

      <div className="flex items-center justify-end">
        <button className="text-white text-15 poppins600 mt-8 custom-button">
          Create
        </button>
      </div>
    </div>
  );
};

export default MSBotIntegration;