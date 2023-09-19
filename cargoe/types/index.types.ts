import { StaticImageData } from "next/image";

export type FeaturesProps = {
  Icon: string | StaticImageData;
  title: string;
};

export type ThirdPartyLogisticsTypes = {
  Icon: string | StaticImageData;
  title: string;
  description: string;
};

export type ReachOutOptionProps = {
  Icon: string | StaticImageData;
  title: string;
  description: string;
};

export type AvatorComponentProps = {
  name: string;
  designation: string;
  profilePic: string | StaticImageData;
  companyLogo: string | StaticImageData;
  blurBg: string;
  designationTextColor?: string;
};

export type DynamicImageWithComponentsProps = {
  backgroundImage: StaticImageData;
  profileImage: StaticImageData;
  profilerBlurClass?: string;
  iconsPositioning: string;
  AvatorComponentProps: AvatorComponentProps[];
};

export type StatisticscomponentProps = {
  Icon: StaticImageData
  count: number,
  category: string
};

export type CompanyType = {
  id: number;
  name: string;
};