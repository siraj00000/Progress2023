import {
  BookmarkIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Avatars from "./Avatars";
import {
  AvatorComponentProps,
  DynamicImageWithComponentsProps,
} from "@/types/index.types";

const AvatorComponent: React.FC<AvatorComponentProps> = ({
  name,
  designation,
  profilePic,
  companyLogo,
  blurBg = "blured-bg-1",
  designationTextColor = "text-light",
}) => (
  <div className={`${blurBg} w-200 h-48px flex items-center p-1`}>
    <Avatars avaFront={profilePic} avaBack={companyLogo} />
    <div className="relative -left-3">
      <h6 className="text-12 leading-16 text-secondary font-nunito700">
        {name}
      </h6>
      <p
        className={`${designationTextColor} text-10 leading-16 font-nunito700`}
      >
        {designation}
      </p>
    </div>
  </div>
);

const DynamicImageWithComponents: React.FC<DynamicImageWithComponentsProps> = ({
  backgroundImage,
  profileImage,
  profilerBlurClass,
  iconsPositioning,
  AvatorComponentProps,
}) => {
  return (
    <div className="relative max-w-524">
      <Image
        src={backgroundImage}
        className="w-auto h-auto object-cover"
        alt="backgroundImage"
      />
      <div className={`${profilerBlurClass} absolute top-20 -left-10`}>
        <Image
          src={profileImage}
          className="w-auto h-auto object-contain"
          alt="profileImage"
        />
      </div>

      <div
        className={`flex items-center absolute top-12 ${iconsPositioning} gap-2`}
      >
        <HeartIcon className="h-10 w-10 bg-lightGray border-2 border-light p-2 shadow-lg shadow-shadowGray rounded-full" />
        <ShareIcon className="h-10 w-10 bg-lightGray border-2 border-light p-2 shadow-lg shadow-shadowGray rounded-full" />
        <BookmarkIcon className="h-10 w-10 bg-lightGray border-2 border-light p-2 shadow-lg shadow-shadowGray rounded-full" />
      </div>

      <div className="flex flex-col gap-3 absolute bottom-16 right-0">
        {AvatorComponentProps.map((info, index) => (
          <AvatorComponent key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default DynamicImageWithComponents;
