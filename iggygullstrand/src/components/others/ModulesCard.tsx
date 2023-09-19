import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import MenuDropdown from "./MenuDropdown";

type Props = {};

const ModulesCard = (props: Props) => {
  return (
    <article className="w-full bg-dark p-16 rounded-16">
      <div className="flex items-center justify-between">
        <h4 className="text-24 poppins600 text-white">Module Name</h4>
        <MenuDropdown
          children={<EllipsisVerticalIcon className="w-6 h-6 text-white" />}
          menuList={[
            { title: "Edit", onClickHandler: () => {} },
            { title: "Clone", onClickHandler: () => {} },
            { title: "Delete", onClickHandler: () => {} },
          ]}
        />
      </div>
      <p className="text-gray text-12 poppins400">01.01.23</p>
      <p className="text-gray text-14 poppins400 my-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tristique mi in diam mollis efficitur. Pellentesque cursus erat et felis
        faucibus malesuada
      </p>

      {/* Status */}
      <h5 className="text-14 poppins600 text-white">Active</h5>
    </article>
  );
};

export default ModulesCard;
