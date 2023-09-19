import { useLocation, useNavigate } from "react-router-dom";
import { ActiveBellIconSVG } from "../assets";
import { useMemo } from "react";
import { TopbarTitle } from "../contants";
import { handleLogout, matchTopbarElement } from "../utils/actions";
import MenuDropdown from "./others/MenuDropdown";

const Topbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getTitle = useMemo(() => {
    return matchTopbarElement(pathname, TopbarTitle);
  }, [pathname]);

  return (
    <header className="bg-transparent w-full flex items-center justify-between py-12 px-48 border-b border-b-light">
      <h1 className="text-32 text-white poppins700">{getTitle}</h1>
      <aside className="flex items-center gap-[32px]">
        <img src={ActiveBellIconSVG} alt="" />
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
      </aside>
    </header>
  );
};

export default Topbar;
