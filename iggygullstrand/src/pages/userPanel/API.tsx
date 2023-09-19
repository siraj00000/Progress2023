import APICard from "../../components/others/APICard";
import ModalComponent from "../../components/others/Modal";
import Searchbar from "../../components/others/Searchbar";
import CreateNewAPIModal from "../../components/others/modals/apiModal/createNewAPI";
import { APICardList } from "../../contants";

const APIPage = () => {
  return (
    <div className="px-48 py-32 flex flex-col gap-[32px]">
      <section className="flex items-center justify-between">
        <Searchbar />
        <div className="flex items-center gap-5">
          <ModalComponent
            children={<CreateNewAPIModal />}
            btnTitle="Create API"
            maxWidth="sm:max-w-lg"
          />
        </div>
      </section>

      {/* Card List */}
      <section className="w-full grid grid-cols-3 gap-4">
        {APICardList.map((item, index) => (
          <APICard key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default APIPage;
