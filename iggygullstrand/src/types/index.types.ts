export type PrivateRoutesTypes = {
  token: boolean;
  component: JSX.Element;
  path: string;
};

export type CompboListDataTypes = {
  id: number;
  name: string;
};

export type SidebarMenuType = {
  title: string;
  link: string;
  Icon: string;
};

export type TopbarTitleTypes = {
  title: string;
  path: string;
};

export type StatsBoxProps = {
  Icon: string;
  title: string;
  count: string;
  percentage: string;
};

export type MessagesProps = {
  typeOfMessage: "Input" | "Output";
  message: string;
};

export type CardProps = {
  title: string;
  date: string;
  description: string;
  status: "Pending" | "Published";
};

export type DropdownProps = {
  children: any;
  menuList: MenuList[];
};

export type MenuList = {
  title: string;
  onClickHandler?: () => void;
};

export type SwitchButtonType = {
  handleToggle: () => void;
  label: string;
  isOn: boolean;
};

export type LineChartDatasetListProps = {
  label: string;
  data: number[];
  lineTension: number;
  borderColor: string;
  pointRadius: number;
  hoverPointRadius: number;
};

export type ChartDataProps = {
  labels: string[];
  datasets: LineChartDatasetListProps[];
};

export type LineChartProps = {
  data: ChartDataProps;
};
