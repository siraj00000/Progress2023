const CreateNewAPIModal = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">Create New API</h1>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">API Name</span>
        <input
          type="text"
          placeholder="Name your API"
          className="custom-input-field"
        />
      </label>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">Description</span>
        <textarea
          rows={4}
          cols={3}
          placeholder="Description your index"
          className="p-16 bg-darkHard rounded-16 w-full resize-none text-white placeholder:text-[#969696] text-15 poppins400 outline-none mt-8"
        />
      </label>

      <div className="flex items-center justify-end gap-3">
        <button className="bg-darkPrimary py-12 px-24 rounded-16 text-white text-15 poppins600">
          Cancel
        </button>
        <button className="text-white text-15 poppins600 custom-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateNewAPIModal;
