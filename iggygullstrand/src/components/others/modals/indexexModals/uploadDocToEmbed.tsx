import { UploadFileIconSVG } from "../../../../assets";

const UploadDocToEmbed = () => {
  return (
    <div>
      <h1 className="text-28 text-white poppins700">
        Upload Documents to Embed
      </h1>
      <aside className="flex items-center justify-center flex-col gap-[32px] mt-16 h-400 border-2 border-dashed border-grayLight bg-darkHard rounded-16">
        <img src={UploadFileIconSVG} alt="UploadFileIconSVG" />
        <p className="text-graySecondary text-15 poppins400">
          Drop your file(s) here to upload, or{" "}
          <span className="text-greenGradLight">click to browse</span>
        </p>
      </aside>
    </div>
  );
};

export default UploadDocToEmbed;
