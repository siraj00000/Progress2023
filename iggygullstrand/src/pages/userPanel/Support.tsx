import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { TriformLogoIconSVG } from "../../assets";
import MenuDropdown from "../../components/others/MenuDropdown";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../utils/actions";

const SupportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-48 py-32">
      <section className="grid grid-cols-3 gap-5">
        {/* Support Chat */}
        <div className="col-span-2 grid grid-rows-5 border border-transparent rounded-20">
          <div className="row-span-1 bg-dark p-24 rounded-t-20 flex items-center">
            <h3 className="text-24 text-white poppins600">
              Chat with the Docs
            </h3>
          </div>

          <div className="row-span-3 flex flex-col justify-end gap-5 p-16">
            {/* Support Bot Message */}
            <div className="flex items-center gap-5">
              <img src={TriformLogoIconSVG} alt="TriformLogoIconSVG" />
              <p className="p-16 rounded-16 bg-dark text-white text-15 poppins400">
                Hi! How can I help you?
              </p>
            </div>

            {/* Client Message */}
            <div className="flex items-center justify-end gap-5">
              <p className="p-16 rounded-16 bg-dark text-white text-15 poppins400">
                Hello, I’d like to know more about upgrading my plan{" "}
              </p>
              <MenuDropdown
                children={
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                }
                menuList={[
                  {
                    title: "Account Settings",
                    onClickHandler: () => navigate("/account-settings"),
                  },
                  {
                    title: "Logout",
                    onClickHandler: () => handleLogout(),
                  },
                ]}
              />
            </div>
          </div>

          <div className="row-span-1 bg-dark p-24 rounded-b-16">
            <div className="w-full bg-darkHard flex items-center justify-between p-16 rounded-16">
              <input
                type="text"
                placeholder="Type a message here..."
                className="bg-transparent outline-none text-15 poppins400 text-white placeholder:text-grayMedium"
              />
              <button className="bg-dark p-12 rounded-16">
                <PaperAirplaneIcon className="w-6 h-6 text-graySecondary" />
              </button>
            </div>
          </div>
        </div>

        {/* Read Docs */}
        <div className="col-span-1 flex flex-col gap-[32px]">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-[20px] px-24 py-48 bg-dark rounded-16"
            >
              <h4 className="text-24 poppins600 text-white">Read the Docs</h4>
              <p className="text-14 poppins400 text-graySecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                sapien ante, sollicitudin in ligula sit amet, volutpat tempor
                tortor.
              </p>
              <button className="custom-button text-15 poppins600 text-white">
                Read the Docs
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
