import React from "react";
import { Statistics } from "../../contants";
import StatsBox from "../../components/others/StatsBox";
import LegendComponent from "../../components/others/charts/Legend";
import { GroupBarChart } from "../../components/others/charts/GroupBarChart";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { NewSettingIconSVG, UsageAlertIconSVG } from "../../assets";

const APIStatsPage = () => {
  return (
    <div className="px-48 py-32">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <ArrowLeftIcon className="w-6 h-6 text-grayMedium" />
          <h5 className="text-28 poppins600 text-white">API Name</h5>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <img src={UsageAlertIconSVG} alt="UsageAlertIconSVG" />
            <span className="text-15 text-graySecondary poppins600">Usage Alerts</span>
          </div>
          <div className="flex items-center gap-3">
            <img src={NewSettingIconSVG} alt="NewSettingIconSVG" />
            <span className="text-15 text-graySecondary poppins600">Settings</span>
          </div>
        </div>
      </div>

      {/* Statistics Section, Statsbox */}
      <section className="flex items-center justify-center gap-4 my-32">
        {Statistics.map((stats, index) => (
          <StatsBox key={index} {...stats} />
        ))}
      </section>

      <section className="px-48 py-32 bg-dark rounded-16">
        <h3 className="text-24 text-white poppins600">Usage Over Time</h3>

        <div className="flex items-center gap-[32px] h-48 my-[24px]">
          <LegendComponent color="#0B1544" size={15} title="Request" />
          <LegendComponent color="#71C9EC" size={15} title="Success" />
          <LegendComponent color="#E94D3F" size={15} title="Error" />
        </div>
        {/* Bar Chart */}
        <GroupBarChart />
      </section>
    </div>
  );
};

export default APIStatsPage;
