import React, { useState } from "react";
import { CardProps } from "../../types/index.types";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import MenuDropdown from "./MenuDropdown";
import ModalComponent from "./Modal";
import CreatePlugin from "./modals/apiModal/createPlugin";
import EditAPIName from "./modals/apiModal/editAPIName";

const APICard: React.FC<CardProps> = ({ title, date, description, status }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  
  return (
    <div>
      <ModalComponent
        children={<EditAPIName />}
        btnTitle="Create New"
        maxWidth="sm:max-w-6xl"
        directToggle
        directToggleStatus={isEditModalOpen}
      />
      <article className="w-full bg-dark p-16 rounded-16">
        <div className="flex items-center justify-between">
          <h4 className="text-24 poppins600 text-white">{title}</h4>
          <MenuDropdown
            children={<EllipsisVerticalIcon className="w-6 h-6 text-white" />}
            menuList={[
              { title: "Edit", onClickHandler: () => setIsEditModalOpen(true) },
              { title: "Clone", onClickHandler: () => {} },
              { title: "Delete", onClickHandler: () => {} },
            ]}
          />
        </div>
        <p className="text-gray text-12 poppins400">{date}</p>
        <p className="text-gray text-14 poppins400 my-16">{description}</p>

        <div className="flex items-center justify-between w-full">
          {/* Status */}
          <h5
            className={`text-14 poppins600 ${
              status === "Pending" ? "text-goldenGrad" : "text-white"
            }`}
          >
            {status}
          </h5>

          {status === "Pending" ? (
            <button className="bg-darkPrimary rounded-16 py-12 px-24 poppins600 text-white text-15">
              Publish
            </button>
          ) : (
            <ModalComponent
              children={<CreatePlugin />}
              btnTitle="Create Plugin"
              btnStyle="custom-button"
              maxWidth="sm:max-w-6xl"
            />
          )}
        </div>
      </article>
    </div>
  );
};

export default APICard;
