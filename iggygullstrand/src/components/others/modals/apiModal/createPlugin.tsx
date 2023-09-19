const CreatePlugin = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">{`Plugin Creation for <API Name>`}</h1>

      <h5 className="text-15 text-white poppins600 mt-16">
        Plugin Specification
      </h5>

      {/* Specification */}
      <div className="bg-darkHard rounded-16 h-400 p-32">
        <div className="flex items-center gap-4 text-14 poppins400 text-[#F0F0F0]">
          <p>1</p>
          <p>
            Plugin Specification that fits the OpenAI's plugin specification.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
        <button className="bg-darkHard py-12 px-24 rounded-16 text-white text-15 poppins600">
          Copy to Clipboard
        </button>
        <button className="text-white text-15 poppins600 custom-button">
          Download
        </button>
      </div>
    </div>
  );
};

export default CreatePlugin;
