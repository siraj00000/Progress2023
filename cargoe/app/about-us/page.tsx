import Image from "next/image";
import React from "react";
import CaliforniaSVG from "@/public/CaliforniaSVG.svg";
import BoltSVG from "@/public/BoltSVG.svg";
import FireSVG from "@/public/FireSVG.svg";
import TruckSupplingSVG from "@/public/TruckSupplingSVG.svg";
import TrainSupplingSVG from "@/public/TrainSupplingSVG.svg";
import PlaneSupplingSVG from "@/public/PlaneSupplingSVG.svg";
import ShipSupplingSVG from "@/public/ShipSupplingSVG.svg";
import ShipPortSVG from "@/public/ShipPort.svg";
import Quotation from "@/components/Quotation";
const aboutus = () => {
  return (
    <div>
      {/* About Cargoe */}
      <section className="relative h-auto bg-lightGray pb-12per">
        <div className="bg-primary absolute inset-0 lg:h-300 md:h-200 h-100 w-full z-0"></div>
        <div className="relative">
          {/* Background Image */}
          <Image
            src={CaliforniaSVG}
            className="w-auto h-auto lg:object-contain object-cover mx-auto relative z-10"
            alt=""
          />

          <div className="flex flex-col lg:items-center justify-center gap-2 lg:absolute inset-0 h-full w-full z-10 lg:p-0 p-8per">
            <h4 className="text-24 lg:text-light text-secondary font-sharpsans700">
              <span className="lg:text-accent text-primary">00.</span> About
              Cargoe
            </h4>
            <h2 className="lg:text-40 md:text-32 text-24 font-sharpsans800 lg:text-light text-secondary lg:w-1/2 mx-auto lg:text-center">
              Cargoe Inc. is a locally owned and operated firm based in
              California.
            </h2>
            <p className="text16 font-nunito400 lg:text-light text-secondary lg:w-3/5 lg:text-center">
              We offer specialized cloud-based ERP software to businesses in the
              logistics industry eager to make a breakthrough powered by
              technology. Finding the right partner in the 21st century is no
              easy feat, not to mention the time it takes to network. However,
              with an effectively structured marketplace such as ours, 3PL,
              freight forwarders, brokers, owner-operators, carriers, cartage
              agents, and couriers can find better ways to grow their business.
              We offer maximum scalability with endless networking opportunities
              you won’t find elsewhere.
            </p>
          </div>
        </div>

        <div className="lg:max-w-70per mx-auto  pt-5per lg:p-0 p-8per">
          <h4 className="text-24 text-activeTab font-sharpsans700">
            <span className="text-primary">01.</span> Modern Logistics
          </h4>
          <h2 className="text-secondary font-sharpsans800 lg:text-40 md:text-32 text-24">
            Streamline and Scale Your Logistics Operations with the{" "}
            <span className="text-activeTab">
              Ultimate All-in-One Marketplace SaaS Solution{" "}
            </span>{" "}
            for Modern Supply Chain
          </h2>

          <div className="grid lg:grid-cols-5 grid-cols-1 gap-14 my-8">
            <div className="col-span-2">
              <Image
                src={BoltSVG}
                className="w-5 h-5 object-contain mb-2"
                alt="BoltSVG"
              />
              <p className="text-16 text-secondary font-nunito400">
                We bridge the connectivity gap so you never have to wait for
                your big break. <br /> <br />
                <span className="text-activeTab">
                  Cargoe Inc. is a one-way ticket to seamless networking between
                  businesses that want to outsource their service. However,
                  that’s just the tip of the iceberg, you also get access to a
                  myriad of integrated solutions that help your business thrive.
                </span>
              </p>
            </div>
            <div className="col-span-2">
              <Image
                src={FireSVG}
                className="w-5 h-5 object-contain mb-2"
                alt="FireSVG"
              />
              <p className="text-16 text-secondary font-nunito400">
                We bridge the connectivity gap so you never have to wait for
                your big break. <br /> <br />
                <span className="text-activeTab">
                  Cargoe Inc. is a one-way ticket to seamless networking between
                  businesses that want to outsource their service. However,
                  that’s just the tip of the iceberg, you also get access to a
                  myriad of integrated solutions that help your business thrive.
                </span>
              </p>
            </div>
            <div className="flex lg:flex-col items-center md:flex-nowrap flex-wrap md:gap-2 gap-0 col-span-1 w-full">
              <Image
                src={TruckSupplingSVG}
                className="w-auto h-auto object-contain"
                alt="TruckSupplingSVG"
              />
              <Image
                src={TrainSupplingSVG}
                className="w-auto h-auto object-contain"
                alt="TrainSupplingSVG"
              />
              <Image
                src={PlaneSupplingSVG}
                className="w-auto h-auto object-contain"
                alt="PlaneSupplingSVG"
              />
              <Image
                src={ShipSupplingSVG}
                className="w-auto h-auto object-contain"
                alt="ShipSupplingSVG"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leading the way */}
      <section className="grid md:grid-cols-2 grid-cols-1 p-8per gap-10">
        <div className="flex flex-col items-start justify-center gap-2">
          <h4 className="text-24 text-activeTab font-sharpsans700">
            <span className="text-primary">02.</span> Leading the Way
          </h4>
          <h2 className="text-32 font-sharpsans800 text-secondary">
            Unlike others, Cargoe Inc. focuses on delivering streamlined
            solutions to the customer.
          </h2>
          <p className="text14 font-sharpsans500 text-secondary">
            We are technology experts with ample experience working in the realm
            of transportation and IT. This is exactly why we understand that
            both domains complement each other. While you may find various
            outdated ERP software on the market, ours is exceptionally modern
            and easy to use. Safe to say, Cargoe is built with resilient
            features that expand the scope of your functionality, profitability,
            and efficiency in every way possible.
          </p>
          <button className="text-16 leading py-16 px-24 my-5 font-nunito700 bg-accent text-secondary rounded-16">
            Book a Demo
          </button>
        </div>

        <Image src={ShipPortSVG} className="w-auto h-auto" alt="" />
      </section>

      {/* Qoutation */}
      <section className="px-8per pb-12per">
        <Quotation qoutation="Want to know more details on how we can help you? Reach out to us today! Cargoe Inc. is supported by stellar customer service staff who always stay on top of current updates so they can serve you." />
      </section>
    </div>
  );
};

export default aboutus;
