import Image from "next/image";
import React from "react";
import MapPointSVG from "@/public/MapPointSVG.svg";
import LetterSVG from "@/public/LetterSVG.svg";
import GirlContact from "@/public/png/GirlContact.png";
import ComboBoxComponent from "@/components/ComboBox";

const formInputList = [
  { name: "firstName", placeholder: "First Name", required: true },
  { name: "lastName", placeholder: "Last Name", required: true },
  { name: "email", placeholder: "Your Email", type: "email", required: true },
  { name: "companyName", placeholder: "Company Name", required: true },
  {
    name: "phoneNumber",
    placeholder: "Phone Number",
    type: "numeric",
    required: true,
  },
];

type InputComponentTypes = {
  inputProps: {
    type?: string;
    name: string;
    placeholder?: string;
  };
};

const InputComponent: React.FC<InputComponentTypes> = ({ inputProps }) => (
  <input
    {...inputProps}
    className="p-2 px-3 border border-activeTab rounded-xl bg-light text-14 font-nunito400 text-secondary placeholder:text-secondary"
  />
);

const ContactUsPage = () => {
  return (
    <div>
      <section className=" bg-lightGray">
        <div className="max-w-1440 mx-auto grid lg:grid-cols-2 md:grid-cols-1 py-8per px-5per gap-5">
          <div className="col-span-1">
            <Image
              src={GirlContact}
              className="w-auto h-auto md:object-cover sm:object-cover mx-auto"
              alt="FrightTop"
            />
          </div>

          <div className="col-span-1">
            <h6 className="text-16 text-activeTab font-sharpsans700 tracking-widest">
              {"let's get in touch"}
            </h6>
            <h1 className="lg:text-56 md:text-40 text-32 text-secondary font-sharpsans800">
              Contact Us
            </h1>
            <form
              action=""
              className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-4"
            >
              {formInputList.map((input, index) => (
                <InputComponent key={index} inputProps={input} />
              ))}
              <ComboBoxComponent />
              <button className="text-16 leading py-16 md:px-24 px-5 max-w-200 w-full my-5 font-nunito700 bg-accent text-secondary rounded-16">
                Send Message
              </button>
            </form>

            <p className="text-14 text-secondary font-nunito400 lg:w-3/4">
              Want to know more details on how we can help you? Reach out to us
              today! Cargoe Inc. is supported by stellar customer service staff
              who always stay on top of current updates so they can serve you.
              We value your feasibility and cater to your queries as soon as
              possible. So, if you’re interested in our services, please fill
              out your information and we’ll get the conversation started
              immediately.
            </p>
            <div className="flex items-start md:flex-nowrap flex-wrap gap-4 md:my-5 my-10">
              <div className="md:w-1/3 w-full">
                <Image src={MapPointSVG} alt="Marker" />
                <p className="text-14 text-secondary font-nunito700">
                  1401 21ST STREET SUITE R SACRAMENTO CA 95811
                </p>
              </div>
              <div className="">
                <Image src={LetterSVG} alt="Marker" />
                <p className="text-14 text-secondary font-nunito700">
                  info@cargoe.io
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
