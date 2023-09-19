import { ErrorIconSVG, SuccessIconSVG, TotalRequestIconSVG } from "../assets";
import {
  CardProps,
  ChartDataProps,
  CompboListDataTypes,
  MessagesProps,
  StatsBoxProps,
  TopbarTitleTypes,
} from "../types/index.types";
import { generateRandomData } from "../utils/actions";

export const TopbarTitle: TopbarTitleTypes[] = [
  {
    title: "Usage Statistics and Monitoring",
    path: "/",
  },
  {
    title: "Test Your APIs",
    path: "/playground",
  },
  {
    title: "Connections",
    path: "/connections",
  },
  {
    title: "Indexes",
    path: "/indexes",
  },
  {
    title: "Module Management",
    path: "/modules",
  },
  {
    title: "API Configuration",
    path: "/api",
  },
  {
    title: "APIs",
    path: "/api/stats",
  },
  {
    title: "APIs",
    path: "/api/V2",
  },
  {
    title: "Billing",
    path: "/billing",
  },
  {
    title: "Billing",
    path: "/billing/V2",
  },
  {
    title: "Support",
    path: "/support",
  },
  {
    title: "Account Security Settings",
    path: "/account-settings",
  },
  {
    title: "User Management",
    path: "/user",
  },
  {
    title: "Module Management",
    path: "/module-management",
  },
];

export const AccountType: CompboListDataTypes[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

export const Statistics: StatsBoxProps[] = [
  {
    Icon: TotalRequestIconSVG,
    title: "Total Requests",
    count: "4,500",
    percentage: "4.85%",
  },
  {
    Icon: SuccessIconSVG,
    title: "Successes",
    count: "4,500",
    percentage: "4.85%",
  },
  {
    Icon: ErrorIconSVG,
    title: "Errors",
    count: "4,500",
    percentage: "4.85%",
  },
];

export const MessageList: MessagesProps[] = [
  {
    typeOfMessage: "Input",
    message: "Hello!",
  },
  {
    typeOfMessage: "Output",
    message: "Hi, how can I help you?",
  },
  {
    typeOfMessage: "Input",
    message: "What can you help me with?",
  },
  {
    typeOfMessage: "Output",
    message:
      "There are many things I can help you with, for example lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis auctor ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac ultricies mauris.",
  },
];

export const APICardList: CardProps[] = [
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Pending",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
  {
    title: "API Name",
    date: "01.01.23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis faucibus malesuada",
    status: "Published",
  },
];

export const labels = ["M", "T", "W", "T", "F", "S", "S"];

export const VectorCountLineChartDatasetList: ChartDataProps = {
  labels,
  datasets: [
    {
      label: "Vector Count",
      data: generateRandomData(0, 40, 7),
      borderColor: "#0B1544",
      lineTension: 0.4,
      pointRadius: 0,
      hoverPointRadius: 0,
    },
  ],
};

export const RequestsLineChartDatasetList: ChartDataProps = {
  labels,
  datasets: [
    {
      label: "Request",
      data: generateRandomData(0, 40, 7),
      borderColor: "#16BF5D",
      lineTension: 0.4,
      pointRadius: 0,
      hoverPointRadius: 0,
    },
    {
      label: "Request",
      data: generateRandomData(0, 40, 7),
      borderColor: "#B9962F",
      lineTension: 0.4,
      pointRadius: 0,
      hoverPointRadius: 0,
    },
    {
      label: "Request",
      data: generateRandomData(0, 40, 7),
      borderColor: "#71C9EC",
      lineTension: 0.4,
      pointRadius: 0,
      hoverPointRadius: 0,
    },
  ],
};
