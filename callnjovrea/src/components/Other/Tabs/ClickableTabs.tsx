import React from "react";
import { dataBasedOn } from "../../../pages/LandingPage";

type Props = {
  changeDateTab: (tabName: dataBasedOn) => void;
  activeTab: dataBasedOn;
  tabTitle: dataBasedOn;
};

const ClickableTab: React.FC<Props> = ({
  changeDateTab,
  activeTab,
  tabTitle,
}) => {
  return (
    <button
      className={`text-white w-80 h-38 rounded-md outline-none ${
        activeTab === tabTitle ? "bg-secondary" : "bg-transparent"
      }`}
      onClick={() => changeDateTab(tabTitle)}
    >
      {tabTitle}
    </button>
  );
};

export default ClickableTab;
