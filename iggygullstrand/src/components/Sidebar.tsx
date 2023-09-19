import { NavLink } from "react-router-dom";
import {
  DashboardIconSVG,
  PlaygroundIconSVG,
  ConnectionIconSVG,
  IndexedIconSVG,
  ModuleIconSVG,
  APIIconSVG,
  UserIconSVG,
  BillingIconSVG,
  SupportIconSVG,
  TriformLogo,
} from "../assets";
import { SidebarMenuType } from "../types/index.types";

const SidebarMenuLinks: SidebarMenuType[] = [
  {
    Icon: DashboardIconSVG,
    title: "Dashboard",
    link: "/",
  },
  {
    Icon: PlaygroundIconSVG,
    title: "Playground",
    link: "/playground",
  },
  {
    Icon: ConnectionIconSVG,
    title: "Connections",
    link: "/connections",
  },
  {
    Icon: IndexedIconSVG,
    title: "Indexes",
    link: "/indexes",
  },
  {
    Icon: ModuleIconSVG,
    title: "Modules",
    link: "/modules",
  },
  {
    Icon: APIIconSVG,
    title: "API",
    link: "/api",
  },
  {
    Icon: UserIconSVG,
    title: "User",
    link: "/user",
  },
  {
    Icon: BillingIconSVG,
    title: "Billing",
    link: "/billing",
  },
  {
    Icon: SupportIconSVG,
    title: "Support",
    link: "/support",
  },
];
const Sidebar = () => {
  return (
    <nav className="w-60 p-12 flex flex-col justify-between border-r border-r-light">
      <img
        src={TriformLogo}
        className="mx-auto w-130 h-32 my-3"
        alt="TriformLogo"
      />

      {/* Navigation links */}
      <div className="flex flex-col gap-[8px]">
        {SidebarMenuLinks.map(
          ({ title, Icon, link }: SidebarMenuType, index: number) => (
            <NavLink
              to={link}
              key={index}
              className={({ isActive }) =>
                `${
                  isActive
                    ? `text-gradBlue bg-dark`
                    : `text-white hover:bg-dark`
                } flex items-center gap-4 rounded-16 w-full text-15 poppins600 py-12 px-16`
              }
            >
              <img src={Icon} alt="" className="text-black" /> {title}
            </NavLink>
          )
        )}
      </div>

      {/* Sidebar footer */}
      <div className="py-12 px-16">
        <NavLink to="#" className="text-grayLight text-12 poppins400 block">
          Term of use
        </NavLink>
        <NavLink to="#" className="text-grayLight text-12 poppins400 block">
          Privacy Policy
        </NavLink>

        {/* Triform Copy rights */}
        <p className="text-darkPrimary text-12 poppins400 mt-3">
          © Triform 2023. All rights reserved
        </p>
      </div>
    </nav>
  );
};

export default Sidebar;
