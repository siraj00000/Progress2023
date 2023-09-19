import { MastercardIconSVG } from "../../../../assets";

const EditBillingModals = () => {
  return (
    <div className="">
      <h1 className="text-28 text-white poppins700 mb-12">
        Edit Billing Information
      </h1>

      <h1 className="text-24 text-white poppins700 my-5">Address</h1>

      <div className="flex flex-col gap-3 my-12">
        <label className="text-15 poppins600 text-white flex flex-col">
          <span className="flex items-center gap-1">Street</span>
          <input
            type="text"
            placeholder="Your address"
            className="custom-input-field"
          />
        </label>

        <div className="flex items-center gap-5 w-full">
          <label className="text-15 poppins600 text-white flex flex-col w-1/3">
            <span className="flex items-center gap-1">Zip Code</span>
            <input
              type="text"
              placeholder="123456"
              className="custom-input-field w-full"
            />
          </label>
          <label className="text-15 poppins600 text-white flex flex-col w-1/3">
            <span className="flex items-center gap-1">City</span>
            <input
              type="text"
              placeholder="Your City"
              className="custom-input-field w-full"
            />
          </label>
          <label className="text-15 poppins600 text-white flex flex-col w-1/3">
            <span className="flex items-center gap-1">Country</span>
            <input
              type="text"
              placeholder="Your country"
              className="custom-input-field w-full"
            />
          </label>
        </div>
      </div>

      <h1 className="text-24 text-white poppins700 my-5">Payment</h1>
      <div className="flex flex-col gap-3 my-12">
        <label className="text-15 poppins600 text-white flex flex-col relative">
          <span className="flex items-center gap-1">Card Number</span>
          <input
            type="text"
            placeholder="1234 1234 1234 1234"
            className="custom-input-field"
          />
          <img src={MastercardIconSVG} alt="MastercardIconSVG" className="absolute top-11 right-5" />
        </label>

        <div className="flex items-center gap-5 w-full">
          <label className="text-15 poppins600 text-white flex flex-col w-3/5">
            <span className="flex items-center gap-1">Card Holder</span>
            <input
              type="text"
              placeholder="John Doe"
              className="custom-input-field w-full"
            />
          </label>
          <label className="text-15 poppins600 text-white flex flex-col w-1/5">
            <span className="flex items-center gap-1">Month</span>
            <input
              type="text"
              placeholder="12"
              className="custom-input-field w-full"
            />
          </label>
          <label className="text-15 poppins600 text-white flex flex-col w-1/5">
            <span className="flex items-center gap-1">Year</span>
            <input
              type="text"
              placeholder="2025"
              className="custom-input-field w-full"
            />
          </label>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <button className="custom-button text-15 text-white poppins600">
          Update
        </button>
      </div>
    </div>
  );
};

export default EditBillingModals;
