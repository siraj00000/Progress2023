import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { LineChartProps } from "../../../types/index.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false, // Remove the background grid
      },
      ticks: {
        color: "#969696", // Set the y-axis tick text color to white
      },
    },
    y: {
      stacked: false,
      beginAtZero: true,
      grid: {
        display: false, // Remove the background grid
      },
      ticks: {
        color: "#969696", // Set the y-axis tick text color to white
        lineWidth: 2,
        stepSize: 10,
      },
    },
  },
  bezierCurve: true,
  scaleShowVerticalLines: false,
};

export const LineChart: React.FC<LineChartProps> = ({data}) => {
  return <Line options={options} data={data} />;
};
