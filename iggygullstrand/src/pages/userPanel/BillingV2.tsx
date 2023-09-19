import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import ModalComponent from "../../components/others/Modal";
import EditBillingModals from "../../components/others/modals/billingModals/editBillingModals";

const BillingV2Page = () => {
  return (
    <div className="px-48 py-32">
      <section className="grid grid-cols-2 py-48 w-full gap-10">
        <div className="col-span-1">
          {" "}
          <h1 className="text-28 poppins700 text-white">Our Plans</h1>
          <div className="w-full flex flex-col gap-[16px]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border-2 py-16 px-32 my-16 billing-our-planV2"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-24 text-white poppins600">Freemium</h4>
                  <h4 className="text-24 text-gray poppins600">$2 500/mo</h4>
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
                  <button className="custom-button text-25 text-white poppins600">
                    Current Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div className="col-span-1">
          {" "}
          <h1 className="text-28 poppins700 text-white">Your Current Plan</h1>
          {/* Plan */}
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
          {/* History */}
          <div className="col-span-1 my-32">
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
                    <h5 className="text-15 poppins400 text-white">
                      Basic Plan
                    </h5>
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
        </div>
      </section>
    </div>
  );
};

export default BillingV2Page;
