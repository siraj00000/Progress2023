import { Reset2IconSVG } from "../../../../assets";
import { AccountType } from "../../../../contants";
import ComboboxComponent from "../../ComboBox";

const CreateNewAlertModal = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">Create New API</h1>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">Name</span>
        <input
          type="text"
          placeholder="Name your alert"
          className="custom-input-field"
        />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">Metric</span>
        <ComboboxComponent data={AccountType} placeholder="Select" />
      </label>

      <aside>
        <div className="flex items-center justify-between mb-8">
          <h6 className="text-15 text-white poppins600">Threshold</h6>
          <div className="flex items-center gap-2">
            <img src={Reset2IconSVG} alt="Reset2IconSVG" />
            <span className="text-15 poppins400 bg-darkHard text-grayMedium text px-2 py-1 rounded-full">
              1
            </span>
          </div>
        </div>
        <input
          type="range"
          name="threshold"
          className="appearance-none w-full h-1 bg-darkHard rounded-full accent-white outline-none"
          style={{ padding: "0 10px" }}
        />
      </aside>

      <aside className="flex items-center gap-5 my-12">
        <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
          <input
            type="checkbox"
            className="accent-greenDark hover:accent-greenDark w-4 h-4 border rounded-16"
            checked
            onChange={() => {}}
          />{" "}
          Notify via Email
        </label>
        <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
          <input
            type="checkbox"
            className="accent-greenDark hover:accent-greenDark w-4 h-4 border rounded-16"
            checked
            onChange={() => {}}
          />{" "}
          Notify via Webhook
        </label>
      </aside>

      <div className="flex items-center justify-end gap-3">
        <button className="text-white text-15 poppins600 custom-button">
          Create Index
        </button>
      </div>
    </div>
  );
};

export default CreateNewAlertModal;
