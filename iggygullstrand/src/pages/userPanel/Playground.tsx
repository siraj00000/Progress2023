import { useState } from "react";
import ComboboxComponent from "../../components/others/ComboBox";
import { AccountType, MessageList } from "../../contants";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ArrowUturnDownIconSVG,
  ResetIconSVG,
  ReverseClockIconSVG,
} from "../../assets";
const PlaygroundPage = () => {
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const handleConfirm = () => setIsConfirmed(true);
  return (
    <div className="h-full">
      {!isConfirmed ? (
        <section className="w-full h-full flex items-center flex-col justify-center">
          <form onSubmit={handleConfirm} className="w-96 my-auto text-right">
            <h5 className="text-left text-24 text-white poppins600">
              Select an API
            </h5>
            <div className="text-left flex flex-col gap-[8px] my-16">
              <label className="text-15 poppins600 text-white ">
                Select an API to test
              </label>
              <ComboboxComponent data={AccountType} placeholder="Select" />
            </div>
            <button className="custom-button text-white text-15 poppins600">
              Confirm
            </button>
          </form>
        </section>
      ) : (
        <section className="py-32 px-48 w-full h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 border-b border-b-light pb-16">
              <h4 className="text-20 text-white poppins600">
                Selected API Name
              </h4>
              <ChevronDownIcon className="w-6 h-6 text-white" />
            </div>

            {/* Messages List */}
            <div>
              {MessageList.map(({ typeOfMessage, message }, index) => (
                <div
                  className={`${
                    typeOfMessage === "Output" ? `bg-dark` : `bg-transparent`
                  } p-16 grid grid-cols-6 rounded-8`}
                >
                  <h4 className="col-span-1 text-15 text-white poppins600">
                    {typeOfMessage}
                  </h4>
                  <p className="col-span-5 w-3/4 text-15 text-graySecondary poppins400">
                    {message}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-darkHard rounded-16 p-16 ">
            <textarea
              name="message"
              placeholder="Type a message"
              rows={2}
              className="resize-none outline-none w-full text-white placeholder:text-grayLight text-15 poppins400 bg-transparent"
            ></textarea>
            <div className="flex items-center justify-end gap-3">
              <img src={ArrowUturnDownIconSVG} alt="ArrowUturnDownIconSVG" />
              <img src={ResetIconSVG} alt="ResetIconSVG" />
              <img src={ReverseClockIconSVG} alt="ReverseClockIconSVG" />
              <button className="custom-button text-white text-15 poppins600">
                send
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PlaygroundPage;
