import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      ltr: true,
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        boxHeight: 20,
        padding: 40,
        color: "white", // Set the legend text color to white
      },
    },
    title: {
      display: true,
      color: "white", // Set the chart title text color to white
    },
  },
  scales: {
    y: {
      grid: {
        offset: true,
        display: false,
      },
      ticks: {
        color: "white", // Set the y-axis tick text color to white
      },
    },
    x: {
      grid: {
        offset: true,
        display: false,
      },
      ticks: {
        color: "white", // Set the x-axis tick text color to white
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Fresh Fish",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#2AD2BF",
    },
    {
      label: "Frozen Fish",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#A7ED7B",
    },
    {
      label: "Surgelato Fish",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#1524A8",
    },
    {
      label: "Premium Fish",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#9E2CC7",
    },
  ],
};

export default function BarChart() {
  return <Bar options={options} data={data} />;
}
