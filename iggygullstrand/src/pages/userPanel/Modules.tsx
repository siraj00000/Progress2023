import ModalComponent from "../../components/others/Modal";
import ModulesCard from "../../components/others/ModulesCard";
import CreatePythonModals from "../../components/others/modals/modulesModals/CreatePythonModals";

const ModulesPages = () => {
  return (
    <div className="py-32 px-48">
      {/* Title and create mudule and python module button */}
      <section className="flex items-center justify-between">
        <h5 className="text-white text-28 poppins600">Modules</h5>
        <div className="flex items-center gap-5">
          <button className="bg-dark py-12 px-24 rounded-16 text-white text-15 poppins600">
            Create Module
          </button>

          <ModalComponent
            children={<CreatePythonModals />}
            btnTitle="Create Python Module"
            maxWidth="sm:max-w-6xl"
          />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 py-32">
        {/* Modules cards List*/}
        {[...Array(8)].map((_, index) => (
          <ModulesCard key={index} />
        ))}
      </section>
    </div>
  );
};

export default ModulesPages;
