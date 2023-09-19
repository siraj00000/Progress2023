import { ArrowDownRightIcon, ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";
import UploadDocToEmbed from "../../components/others/modals/indexexModals/uploadDocToEmbed";
import ModalComponent from "../../components/others/Modal";
import ComboboxComponent from "../../components/others/ComboBox";
import { AccountType, RequestsLineChartDatasetList, VectorCountLineChartDatasetList } from "../../contants";
import LegendComponent from "../../components/others/charts/Legend";
import { LineChart } from "../../components/others/charts/LineChart";

const IndexesCSVData = () => {
  return (
    <div className="px-48 py-32">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <ArrowLeftIcon className="w-6 h-6 text-grayMedium" />
          <h5 className="text-28 poppins600 text-white">csvdata Statistics</h5>
        </div>

        <div className="flex items-center gap-3">
          <ModalComponent
            children={<UploadDocToEmbed />}
            btnTitle="Upload Document"
            btnStyle="w-48"
          />
          <ComboboxComponent data={AccountType} placeholder="Week" />
        </div>
      </section>

      <section>
        <div className="flex items-center gap-[32px] h-48 my-[24px]">
          <LegendComponent color="#0B1544" size={15} title="Vector Count" />
          <LegendComponent color="#71C9EC" size={15} title="Query" />
          <LegendComponent color="#24B26B" size={15} title="Upsert" />
          <LegendComponent color="#833FB4" size={15} title="Update" />
          <LegendComponent color="#E94D3F" size={15} title="Delete" />
          <LegendComponent color="#FFFFFF" size={15} title="Fetch" />
          <LegendComponent
            color="#B9962F"
            size={15}
            title="Describe Index Stats"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-[32px] w-full">
        {/* Vector Count */}
        <div className="bg-dark p-24 rounded-16">
          <h1 className="text-20 poppins600 text-white">Vector Count</h1>
          {/* Count with Percentage */}
          <div className="flex items-center gap-8 mt-16">
            <h3 className="text-28 nunito600 text-white">13.535</h3>
            <div className="flex items-center gap-1 text-greenGradDark per-bg-grad px-12 py-1 rounded-10">
              <ArrowUpRightIcon className="w-4 h-4" />
              {`3.48%`}
            </div>
          </div>

          <div className="w-full pt-16">
            {/* Line Chart */}
            <LineChart data={VectorCountLineChartDatasetList} />
          </div>
        </div>
        {/* Requests */}
        <div className="bg-dark p-24 rounded-16">
          <h1 className="text-20 poppins600 text-white">Requests</h1>
          {/* Count with Percentage */}
          <div className="flex items-center gap-8 mt-16">
            <h3 className="text-28 nunito600 text-white">462</h3>
            <div className="flex items-center gap-1 text-greenGradDark per-bg-grad px-12 py-1 rounded-10">
              <ArrowUpRightIcon className="w-4 h-4" />
              {`3.48%`}
            </div>
          </div>

          <div className="w-full pt-16">
            {/* Line Chart */}
            <LineChart data={RequestsLineChartDatasetList} />
          </div>
        </div>
        {/* Request Latency (50th percentile) */}
        <div className="bg-dark p-24 rounded-16">
          <h1 className="text-20 poppins600 text-white">
            Request Latency (50th percentile){" "}
          </h1>
          {/* Count with Percentage */}
          <div className="flex items-center gap-8 mt-16">
            <h3 className="text-28 nunito600 text-white">20ms</h3>
            <div className="flex items-center gap-1 text-greenGradDark per-bg-grad px-12 py-1 rounded-10">
              <ArrowDownRightIcon className="w-4 h-4" />
              {`3.48%`}
            </div>
          </div>

          <div className="w-full pt-16">
            {/* Line Chart */}
            <LineChart data={RequestsLineChartDatasetList} />
          </div>
        </div>
        {/* Errors */}
        <div className="bg-dark p-24 rounded-16">
          <h1 className="text-20 poppins600 text-white">Erros</h1>
          {/* Count with Percentage */}
          <div className="flex items-center gap-8 mt-16">
            <h3 className="text-28 nunito600 text-white">100</h3>
          </div>

          <div className="w-full pt-16">
            {/* Line Chart */}
            <LineChart data={VectorCountLineChartDatasetList} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexesCSVData;
