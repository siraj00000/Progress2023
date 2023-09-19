import ComboboxComponent from "../../components/others/ComboBox";
import StatsBox from "../../components/others/StatsBox";
import { GroupBarChart } from "../../components/others/charts/GroupBarChart";
import LegendComponent from "../../components/others/charts/Legend";
import { AccountType, Statistics } from "../../contants";

const Dashboard = () => {
  return (
    <div className="w-full py-32 px-48">
      {/* Comboboxes section, All APIs and Modules */}
      <section className="grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex items-center justify-center gap-4">
          <ComboboxComponent data={AccountType} placeholder="All APIs" />
          <ComboboxComponent data={AccountType} placeholder="All Modules" />
        </div>
      </section>

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

export default Dashboard;
