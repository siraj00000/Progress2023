import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

export const options: any = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false, // Remove the background grid
      },
      ticks: {
        color: "#969696", // Set the y-axis tick text color to white
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false, // Remove the background grid
      },
      ticks: {
        color: "#969696", // Set the y-axis tick text color to white
      },
    },
  },
  cornerRadius: 10, // Rounded top ends of every bar
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function generateRandomData(min: number, max: number) {
  return labels.map(() => Math.floor(Math.random() * (max - min + 1)) + min);
}

export const data = {
  labels,
  datasets: [
    {
      label: "Request",
      data: generateRandomData(0, 40),
      backgroundColor: "#0B1544",
      stack: "Stack 0",
      borderRadius: 20,
      borderSkipped: false,
      showLine: false,

      //   barThickness: ,
    },
    {
      label: "Success",
      data: generateRandomData(0, 40),
      backgroundColor: "#71C9EC",
      stack: "Stack 1",
      borderRadius: 20,
      borderSkipped: false,
      showLine: false,

      //   barThickness: ,
    },
    {
      label: "Error",
      data: generateRandomData(0, 40),
      backgroundColor: "#E94D3F",
      stack: "Stack 2",
      borderRadius: 20,
      borderSkipped: false,
      showLine: false,

      // barThickness: ,
    },
  ],
};

export function GroupBarChart() {
  return <Bar options={options} data={data} />;
}
