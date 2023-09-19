import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const UserPanelLayout = () => {
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full h-full overflow-y-scroll scrollbar">
        <Topbar />
        <Outlet />
      </div>
    </main>
  );
};

export default UserPanelLayout;
