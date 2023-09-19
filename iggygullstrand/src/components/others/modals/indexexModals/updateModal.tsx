import ComboboxComponent from "../../ComboBox";
import { AccountType } from "../../../../contants";
import { UploadFileIconSVG } from "../../../../assets";

const UpdateModal = () => {
  return (
    <div>
      <h1 className="text-28 text-white poppins700">Upload data</h1>

      <label className="text-15 poppins600 text-white flex flex-col max-w-md my-[24px]">
        <span className="flex items-center gap-1">Chunk Size</span>
        <ComboboxComponent data={AccountType} placeholder="Select" />
      </label>

      <aside className="flex items-center justify-start gap-4 my-12">
        <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
          <input
            type="checkbox"
            className="accent-greenDark hover:accent-greenDark w-4 h-4 border rounded-16"
            checked
            readOnly
          />{" "}
          Include Filename
        </label>

        <label className="text-15 poppins400 text-grayMedium flex items-center gap-3">
          <input
            type="checkbox"
            className="accent-greenDark hover:accent-greenDark w-4 h-4 border rounded-16"
            checked
            readOnly
          />{" "}
          Include Prev/Next Rel
        </label>
      </aside>

      <aside className="flex items-center justify-center flex-col gap-[32px] mt-16 h-300 border-2 border-dashed border-grayLight bg-darkHard rounded-16">
        <img src={UploadFileIconSVG} alt="UploadFileIconSVG" />
        <p className="text-graySecondary text-15 poppins400">
          Drop your file(s) here to upload, or{" "}
          <span className="text-greenGradLight">click to browse</span>
        </p>
      </aside>
    </div>
  );
};

export default UpdateModal;
