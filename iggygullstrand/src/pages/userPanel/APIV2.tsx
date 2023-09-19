import { useState } from "react";
import Searchbar from "../../components/others/Searchbar";
import ComboboxComponent from "../../components/others/ComboBox";
import { AccountType } from "../../contants";
import {
  ArrowLeftIcon,
  ArrowLongDownIcon,
  ChevronDownIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import CreateNewAlertModal from "../../components/others/modals/apiModal/createNewAlert";
import ModalComponent from "../../components/others/Modal";
import CustomCheckbox from "../../components/others/Checkbox";
import MenuDropdown from "../../components/others/MenuDropdown";

const APIV2 = (): JSX.Element => {
  const [isBulkSelected, setIsBulkSelected] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleBulkSelectChange = (): void => {
    const newIsBulkSelected = !isBulkSelected;
    setIsBulkSelected(newIsBulkSelected);

    const indices: number[] = [];
    for (let i = 0; i < 4; i++) {
      indices.push(i);
    }

    if (newIsBulkSelected) {
      setSelectedItems(indices);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemSelectChange = (index: number): void => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  return (
    <div className="px-48 py-32">
      <div className="flex items-center gap-5">
        <ArrowLeftIcon className="w-6 h-6 text-grayMedium" />
        <h5 className="text-28 poppins600 text-white">Usage Alerts</h5>
      </div>

      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <CustomCheckbox
              checkedColor="darkHard"
              uncheckedColor="darkHard"
              onChange={handleBulkSelectChange}
              checked={isBulkSelected}
            />

            <h6 className="text-15 poppins600 text-white">Bulk Action</h6>
            <ChevronDownIcon className="w-6 h-6 text-grayMedium" />
          </div>
          <Searchbar />
        </div>
        <div className="flex items-center gap-5">
          <ComboboxComponent data={AccountType} placeholder="Add Filter" />
          <ModalComponent
            children={<CreateNewAlertModal />}
            btnTitle="Create Alert"
            maxWidth="sm:max-w-lg"
            btnStyle="w-48"
          />
        </div>
      </section>

      <table className="w-full table-fixed text-12 poppins600 text-grayLight border border-separate border-spacing-0 border-light rounded-8 overflow-hidden my-32 relative z-0">
        <thead>
          <tr className="text-left bg-darkHard h-48">
            <th className="pl-8 pr-4 py-2">
              <span className="inline-flex items-end">
                Index Name <ArrowLongDownIcon className="w-4 h-4" />
              </span>
            </th>
            <th className="px-4 py-2">
              <span className="inline-flex items-end">
                Associated Namespace <ArrowLongDownIcon className="w-4 h-4" />
              </span>
            </th>
            <th colSpan={2} className="px-4 py-2">
              <span className="inline-flex items-end">
                Description <ArrowLongDownIcon className="w-4 h-4" />
              </span>
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(4)].map((_, index) => (
            <tr key={index} className={`even:bg-dark odd:bg-transparent h-48`}>
              <td className="pl-8 pr-4 h-full flex items-center gap-2">
                <CustomCheckbox
                  checkedColor="darkHard"
                  uncheckedColor="darkHard"
                  onChange={() => handleItemSelectChange(index)}
                  checked={selectedItems.includes(index)}
                />
                indexname
              </td>
              <td className="px-4 h-full">Associated Namespace</td>
              <td colSpan={2} className="px-4 h-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tristique mi in diam mollis efficitur.
                <span className="poppins600">read more</span>
              </td>
              <td className="flex items-center justify-end pr-16 my-auto gap-2 h-48">
                <MenuDropdown
                  children={<EllipsisVerticalIcon className="w-6 h-6" />}
                  menuList={[
                    {
                      title: "Edit",
                      onClickHandler: () => {},
                    },
                    {
                      title: "Clone",
                      onClickHandler: () => {},
                    },
                    {
                      title: "Delete",
                      onClickHandler: () => {},
                    },
                  ]}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default APIV2;
