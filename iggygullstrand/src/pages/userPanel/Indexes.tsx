import { ArrowLongDownIcon } from "@heroicons/react/20/solid";
import Searchbar from "../../components/others/Searchbar";
import { DeleteIconSVG, SettingIcon2SVG, SettingIconSVG } from "../../assets";
import ModalComponent from "../../components/others/Modal";
import CreateIndexesModal from "../../components/others/modals/indexexModals/createIndex";
import UpdateModal from "../../components/others/modals/indexexModals/updateModal";
import { useNavigate } from "react-router-dom";

const IndexesPage = () => {
  const navigate = useNavigate()
  const handleNavigatetoCSVData = () => navigate('csv-data');
  return (
    <div className="px-48 py-32 flex flex-col gap-[32px]">
      <section className="flex items-center justify-between">
        <Searchbar />
        <div className="flex items-center gap-5">
          <ModalComponent
            children={<CreateIndexesModal />}
            btnTitle="Create Index"
          />
          <ModalComponent children={<UpdateModal />} btnTitle="Upload Data" />
        </div>
      </section>

      <table className="w-full table-fixed text-12 poppins600 text-grayLight border border-separate border-spacing-0 border-light rounded-8 overflow-hidden">
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
            <tr
              key={index}
              className={`even:bg-dark odd:bg-transparent h-48 cursor-pointer`}
              onClick={handleNavigatetoCSVData}
            >
              <td className="pl-8 pr-4 py-2">indexname</td>
              <td className="px-4 py-2">Associated Namespace</td>
              <td colSpan={2} className="px-4 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                tristique mi in diam mollis efficitur.
                <span className="poppins600">read more</span>
              </td>
              <td className="flex items-center justify-end pr-16 my-auto gap-2 h-48">
                <img src={SettingIconSVG} alt="SettingIconSVG" />
                <img src={SettingIcon2SVG} alt="SettingIcon2SVG" />
                <img src={DeleteIconSVG} alt="DeleteIconSVG" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndexesPage;
