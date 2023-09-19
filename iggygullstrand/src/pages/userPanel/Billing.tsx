import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import ModalComponent from "../../components/others/Modal";
import EditBillingModals from "../../components/others/modals/billingModals/editBillingModals";

const BillingPage = () => {
  return (
    <div className="px-48 py-32">
      <h1 className="text-28 poppins700 text-white">Our Plans</h1>

      {/* Our Plans */}
      <section className="w-full grid grid-cols-12 grid-rows-1 mb-32">
        <div className="col-span-2 grid grid-rows-2">
          <div className="row-span-1"></div>
          <div className="row-span-1 bg-dark border-l-2 border-dark rounded-l-16">
            <ul className="grid grid-rows-3 h-full pl-16">
              <li className="row-span-1 flex items-center text-20 poppins600 text-white">
                Users
              </li>
              <li className="row-span-1 flex items-center text-20 poppins600 text-white">
                APIs
              </li>
              <li className="row-span-1 flex items-center text-20 poppins600 text-white">
                Request/mo
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-rows-2">
          <div className="row-span-1 flex flex-col gap-[8px] items-start w-3/4 py-32 mx-auto">
            <h6 className="text-15 poppins700 text-white">Freemium</h6>
            <h4 className="text-22 poppins600 text-white">Free</h4>
            <NavLink
              to="V2"
              className="custom-button text-14 text-white poppins600"
            >
              Choose Plan
            </NavLink>
          </div>
          <div className="row-span-1 bg-dark">
            <ul className="grid grid-rows-3 h-full">
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-t-4 border-l-8 rounded-tl-20 border-dark text-20 poppins600 text-white text-center">
                1
              </li>
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-l-8 border-dark text-20 poppins600 text-white text-center">
                1
              </li>
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-b-4 border-l-8 rounded-bl-20 border-dark text-20 poppins600 text-white text-center">
                500
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-rows-2">
          <div className="row-span-1 flex flex-col gap-[8px] items-start w-3/4 py-32 mx-auto">
            <h6 className="text-15 poppins700 text-white">Freemium</h6>
            <h4 className="text-22 poppins600 text-white">Free</h4>
            <NavLink
              to="V2"
              className="custom-button text-14 text-white poppins600"
            >
              Choose Plan
            </NavLink>
          </div>
          <div className="row-span-1 bg-dark">
            <ul className="grid grid-rows-3 h-full">
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-t-4 border-dark text-20 poppins600 text-white text-center">
                1
              </li>
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-dark text-20 poppins600 text-white text-center">
                1
              </li>
              <li className="row-span-1 flex items-center justify-center bg-bgDark border border-b-4 border-dark text-20 poppins600 text-white text-center">
                500
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-rows-2 billing-card-grad">
          <div className="row-span-1 flex flex-col gap-[8px] items-start py-32 mx-auto">
            <h6 className="text-15 poppins700 text-white">Small Business</h6>
            <h4 className="text-22 poppins600 text-white">$2 500/mo</h4>
            <NavLink
              to="V2"
              className="custom-button text-14 text-white poppins600"
            >
              Choose Plan
            </NavLink>
          </div>
          <div className="row-span-1">
            <ul className="grid grid-rows-3 h-full">
              <li className="row-span-1 flex items-center justify-center text-20 poppins600 text-white">
                10
              </li>
              <li className="row-span-1 flex items-center justify-center text-20 poppins600 text-white">
                25
              </li>
              <li className="row-span-1 flex items-center justify-center text-20 poppins600 text-white">
                100 000
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-rows-2">
          <div className="row-span-1 flex flex-col gap-[8px] items-start w-3/4 py-32 mx-auto">
            <h6 className="text-15 poppins700 text-white">Large Business</h6>
            <h4 className="text-22 poppins600 text-white">$5 000/mo</h4>
            <NavLink
              to="V2"
              className="custom-button text-14 text-white poppins600"
            >
              Choose Plan
            </NavLink>
          </div>
          <div className="row-span-1 bg-dark">
            <ul className="grid grid-rows-3 h-full">
              <li className="row-span-1 border border-dark bg-bgDark border-t-4 flex items-center justify-center text-20 poppins600 text-white text-center">
                25
              </li>
              <li className="row-span-1 border border-dark bg-bgDark flex items-center justify-center text-20 poppins600 text-white text-center">
                50
              </li>
              <li className="row-span-1 border border-dark bg-bgDark border-b-4 flex items-center justify-center text-20 poppins600 text-white text-center">
                500 000
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 grid grid-rows-2">
          <div className="row-span-1 flex flex-col gap-[8px] items-start w-3/4 py-32 mx-auto">
            <h6 className="text-15 poppins700 text-white">Enterprise</h6>
            <p className="text-12 poppins400 text-white">
              Get in contact now to unlock the full potential for you needs
            </p>
          </div>
          <div className="row-span-1 flex flex-col justify-center border border-y-4 border-r-8 rounded-r-20 border-dark">
            <ul className="text-14 poppins600 text-white my-auto flex flex-col gap-4 w-3/4 mx-auto">
              <li>
                Call us{" "}
                <span className="text-greenGradLight block">
                  +46722 99 99 99
                </span>
              </li>
              <li>
                Mail us at{" "}
                <span className="text-greenGradLight block">
                  contact@movs.ai
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Your Current Plan */}
      <section className="grid grid-cols-2 py-48 w-full gap-10">
        <div className="col-span-1">
          <h1 className="text-28 poppins700 text-white">Your Current Plan</h1>
          <div className="border-2 border-grayMedium rounded-16 py-16 px-32 my-16">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-24 text-white poppins600">Freemium</h4>
              <h4 className="text-24 text-gray poppins600">Free</h4>
            </div>
            <div className="flex flex-col gap-2 my-2">
              <h4 className="text-24 text-white poppins600">
                1 <span className="text-15 poppins400">User</span>
              </h4>
              <h4 className="text-24 text-white poppins600">
                1 <span className="text-15 poppins400">API</span>
              </h4>
            </div>
            <div className="flex items-center justify-between mt-8">
              <h4 className="text-24 text-white poppins600">
                500 <span className="text-15 poppins400">Request/mo</span>
              </h4>
              <h4 className="text-20 text-white poppins600">Current Plan</h4>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex items-center justify-between">
            <h1 className="text-28 poppins700 text-white">History</h1>

            <div className="flex items-center gap-4">
              <ModalComponent
                children={<EditBillingModals />}
                btnTitle="Edit Billing Info"
                maxWidth="sm:max-w-xl"
              />
              <button className="bg-dark py-12 px-24 rounded-16 text-white text-15 poppins600">
                <ArrowDownTrayIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* History list */}
          <div className="flex flex-col gap-[32px] my-32">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <h5 className="text-15 poppins400 text-white">Basic Plan</h5>
                  <h5 className="text-15 poppins600 text-white">$199,99</h5>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-15 poppins600 text-grayLight">
                    19 April, 12:00
                  </h5>
                  <h5 className="text-15 poppins600 text-grayLight">
                    Card 0123
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingPage;