import { useState } from "react";
import SwitchButton from "../../components/others/SwitchButton";
import { QRCodeSVG } from "../../assets";

const AccountSettingsPage = () => {
  const [isOn, setIsOn] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="px-48 py-32">
      <section className="grid grid-cols-5 gap-5">
        <div className="col-span-2">
          <h3 className="text-20 text-white poppins600 mb-16">
            Two-factor authentication
          </h3>
          <SwitchButton
            handleToggle={handleToggle}
            label="Two-Factor Authentication"
            isOn={isOn}
          />
          {isOn && (
            <div className="flex gap-5 py-16">
              <img src={QRCodeSVG} alt="QRCodeSVG" />
              <div className="flex flex-col gap-2 items-end">
                <label className="poppins400 text-white text-15 mt-12 text-left w-full">
                  Confirmation code
                </label>
                <input
                  placeholder="Type confirmation code"
                  className="custom-input-field w-full"
                />
                <button className="custom-button poppins600 text-white text-15">
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-3 flex flex-col gap-10">
          <div className="w-full">
            <h3 className="text-20 text-white poppins600">
              Devices Used
            </h3>
            <table className="w-full table-fixed text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-[#F0F0F0] text-15 poppins600">
                  <th>Device</th>
                  <th>Date/Time</th>
                  <th>IP Address</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody className="text-14 poppins400 text-[#F0F0F0]">
                <tr>
                  <td>Computer</td>
                  <td>01.01.23 00:00:00 CET</td>
                  <td>123.456.789.000</td>
                  <td>Stockholm - SE</td>
                </tr>
                <tr>
                  <td>iPhone</td>
                  <td>01.01.23 00:00:00 CET</td>
                  <td>123.456.789.000</td>
                  <td>Stockholm - SE</td>
                </tr>
                <tr>
                  <td>Android Phone</td>
                  <td>01.01.23 00:00:00 CET</td>
                  <td>123.456.789.000</td>
                  <td>Stockholm - SE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full">
            <h3 className="text-20 text-white poppins600">
              Account Activity
            </h3>
            <table className="w-full table-fixed text-left border-separate border-spacing-y-3">
              <thead>
                <tr className="text-[#F0F0F0] text-15 poppins600">
                  <th>API Creation</th>
                  <th>Date/Time</th>
                  <th>IP Address</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody className="text-14 poppins400 text-[#F0F0F0]">
                <tr>
                  <td>API Creation</td>
                  <td>01.01.23 00:00:00 CET</td>
                  <td>123.456.789.000</td>
                  <td>Stockholm - SE</td>
                </tr>
                <tr>
                  <td>API Creation</td>
                  <td>01.01.23 00:00:00 CET</td>
                  <td>123.456.789.000</td>
                  <td>Stockholm - SE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSettingsPage;
