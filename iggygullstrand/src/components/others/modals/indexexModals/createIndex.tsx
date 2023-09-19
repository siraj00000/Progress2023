const CreateIndexesModal = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">New Index</h1>

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">Name</span>
        <input
          type="text"
          placeholder="Name your index"
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

      <label className="text-15 poppins600 text-white flex flex-col">
        <span className="flex items-center gap-1">Associated Namespace</span>
        <input
          type="text"
          placeholder="Name your index"
          className="custom-input-field"
        />
      </label>

      <div className="flex items-center justify-end gap-3">
        <button className="text-white text-15 poppins600 mt-8 custom-button">
          Create Index
        </button>
      </div>
    </div>
  );
};

export default CreateIndexesModal;
