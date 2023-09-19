import { CodeBugIconSVG, CodeRunIconSVG } from "../../../../assets";

const CreatePythonModals = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-28 text-white poppins700">Create Python Module</h1>
        <img src={CodeRunIconSVG} alt="CodeRunIconSVG" />
        <img src={CodeBugIconSVG} alt="CodeBugIconSVG" />
      </div>

      <div className="grid grid-rows-3 rounded-20 border-2 border-transparent h-auto my-5 overflow-hidden">
        <div className="row-span-2 bg-darkHard">
          <div className="flex items-center gap-6 text-14 poppins400 text-[#F0F0F0] p-5">
            <p>1</p>
            <p className="text-greenDark">
              {`// Plugin Specification that fits the OpenAI's plugin specification.`}
            </p>
          </div>
        </div>
        <div className="row-span-1 bg-bgDark h-28"></div>
      </div>
      <div className="flex items-center justify-end">
        <button className="text-white text-15 poppins600 custom-button">
          Create Modules
        </button>
      </div>
    </div>
  );
};

export default CreatePythonModals;
