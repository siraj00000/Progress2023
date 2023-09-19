import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import ModalComponent from "../../components/others/Modal";
import CreateAIModal from "../../components/others/modals/connectModals/CreateAIModal";
import CreateDatabase from "../../components/others/modals/connectModals/CreateDatabase";
import NewChatIntegration from "../../components/others/modals/connectModals/NewChatIntegration";

const OpenAISections: React.FC<{ title: string }> = ({ title }) => {
  return (
    <aside>
      <div className="flex items-end gap-4 mt-8">
        <label className="text-15 poppins600 text-white flex flex-col">
          <span className="flex items-center gap-1">
            {title}
            <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
          </span>

          <input
            type="number"
            placeholder="123456789"
            className="custom-input-field"
          />
        </label>
        <button className="bg-dark py-12 border-2 border-dark px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Save Key
        </button>
        <button className="bg-transparent border-2 border-dark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Save Key
        </button>
        <button className="bg-redDark border-2 border-redDark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Remove key
        </button>
      </div>
    </aside>
  );
};

const OpenAIDBSections: React.FC<{ title: Array<string> }> = ({ title }) => {
  return (
    <aside>
      <div className="flex items-end flex-wrap gap-4 mt-8">
        <label className="text-15 poppins600 text-white flex flex-col">
          <span className="flex items-center gap-1">
            {title[0]}
            <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
          </span>

          <input
            type="number"
            placeholder="123456789"
            className="custom-input-field"
          />
        </label>
        <label className="text-15 poppins600 text-white flex flex-col">
          <span className="flex items-center gap-1">
            {title[1]}
            <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
          </span>

          <input
            type="number"
            placeholder="123456789"
            className="custom-input-field"
          />
        </label>
        <label className="text-15 poppins600 text-white flex flex-col">
          <span className="flex items-center gap-1">
            {title[2]}
            <InformationCircleIcon className="w-4 h-4 text-grayMedium" />
          </span>

          <input
            type="number"
            placeholder="123456789"
            className="custom-input-field"
          />
        </label>
        <button className="bg-dark py-12 border-2 border-dark px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Save Key
        </button>
        <button className="bg-transparent border-2 border-dark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Save Key
        </button>
        <button className="bg-redDark border-2 border-redDark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
          Remove key
        </button>
      </div>
    </aside>
  );
};

const AIManagementSection = () => (
  <>
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h4 className="text-28 poppins700 text-white">AI Management</h4>
        <ModalComponent
          children={<CreateAIModal />}
          btnTitle="Create New"
          maxWidth="sm:max-w-lg"
        />
      </div>
    </section>

    <h4 className="text-20 poppins600 text-white mt-32 mb-16">OpenAI</h4>
    <OpenAISections title="API Key" />
    <h4 className="text-20 poppins600 text-white mt-32 mb-16">Anthropic</h4>
    <OpenAISections title="API Key" />
    <h4 className="text-20 poppins600 text-white mt-32 mb-16">Google</h4>
    <OpenAISections title="API Key" />

    <h4 className="text-20 poppins600 text-white mt-32 mb-16">
      Hugging Face Hub
    </h4>
  </>
);

const DatabaseManagementSection = () => (
  <>
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h4 className="text-28 poppins700 text-white">Database Management</h4>
        <ModalComponent
          children={<CreateDatabase />}
          btnTitle="Create New"
          maxWidth="sm:max-w-lg"
        />
      </div>
    </section>
    <h4 className="text-20 poppins600 text-white mt-32 mb-16">Pinecone</h4>
    <OpenAIDBSections title={["API KEY", "Index", "Environment"]} />
    <h4 className="text-20 poppins600 text-white mt-32 mb-16">WeAviate</h4>
    <OpenAIDBSections title={["API KEY", "Index", "Environment"]} />
    <h4 className="text-20 poppins600 text-white mt-32 mb-16">Milvus</h4>
    <OpenAIDBSections title={["API KEY", "Index", "Environment"]} />
  </>
);

const ClientManagementSection = () => (
  <>
    <section className="py-32">
      <div className="flex items-center justify-between">
        <h4 className="text-28 poppins700 text-white">Database Management</h4>
        <ModalComponent
          children={<NewChatIntegration />}
          btnTitle="Create New"
          maxWidth="sm:max-w-lg"
        />
      </div>
    </section>

    <table className="w-3/4 table-auto border-separate border-spacing-y-3">
      <tbody>
        <tr>
          <td className="text-20 poppins600 text-white">Slack</td>
          <td className="text-15 poppins600 text-white">{`https://<host>:<port>/webhooks/twilio/webhook`}</td>
          <td className="flex gap-4">
            <button className="bg-transparent border-2 border-greenGradLight py-12 px-24 rounded-16 text-greenGradLight text-15 poppins600 mt-8 h-48">
              Edit
            </button>
            <button className="bg-redDark border-2 border-redDark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
              Remove
            </button>
          </td>
        </tr>
        <tr>
          <td className="text-20 poppins600 text-white">Slack</td>
          <td className="text-15 poppins600 text-white">{`https://<host>:<port>/webhooks/twilio/webhook`}</td>
          <td className="flex gap-4">
            <button className="bg-transparent border-2 border-greenGradLight py-12 px-24 rounded-16 text-greenGradLight text-15 poppins600 mt-8 h-48">
              Edit
            </button>
            <button className="bg-redDark border-2 border-redDark py-12 px-24 rounded-16 text-white text-15 poppins600 mt-8 h-48">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

const ConnectionsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const firstTabActive = activeTab === 0;
  const secondTabActive = activeTab === 1;
  const thirdTabActive = activeTab === 2;
  return (
    <div className="py-32 px-48">
      {/* Tabs */}
      <section className="flex items-center gap-[32px]">
        <div className="w-max cursor-pointer" onClick={() => setActiveTab(0)}>
          <h4
            className={`text-15 poppins700 ${
              firstTabActive ? "text-gradBlue" : "text-grayLight"
            }`}
          >
            AI Management
          </h4>
          <hr
            className={`${
              firstTabActive && "bg-gradBlue h-1 border-t rounded-t-16"
            }  mt-11 border-0`}
          />
        </div>
        <div className="w-max cursor-pointer" onClick={() => setActiveTab(1)}>
          <h4
            className={`text-15 poppins700 ${
              secondTabActive ? "text-gradBlue" : "text-grayLight"
            }`}
          >
            Database MANAGEMENT
          </h4>
          <hr
            className={`${
              secondTabActive && "bg-gradBlue h-1 border-t rounded-t-16"
            }  mt-11 border-0`}
          />
        </div>
        <div className="w-max cursor-pointer" onClick={() => setActiveTab(2)}>
          <h4
            className={`text-15 poppins700 ${
              thirdTabActive ? "text-gradBlue" : "text-grayLight"
            }`}
          >
            CLIENT MANAGEMENT
          </h4>
          <hr
            className={`${
              thirdTabActive && "bg-gradBlue h-1 border-t rounded-t-16"
            }  mt-11 border-0`}
          />
        </div>
      </section>

      {/* AI managent tab active when tab is 0 */}
      {firstTabActive && <AIManagementSection />}

      {/* Database Management tab active when tab is 1 */}
      {secondTabActive && <DatabaseManagementSection />}

      {/* Client Management tab active when tab is 2 */}
      {thirdTabActive && <ClientManagementSection />}
    </div>
  );
};

export default ConnectionsPage;
