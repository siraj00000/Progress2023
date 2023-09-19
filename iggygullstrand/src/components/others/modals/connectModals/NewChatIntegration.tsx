import ModalComponent from "../../Modal";
import MSBotIntegration from "./socialModals/MSBotIntegration";
import MessengerIntegration from "./socialModals/MessengerIntegration";
import SlackIntegration from "./socialModals/SlackIntegration";
import TwilioIntegration from "./socialModals/TwilioIntegration";

const NewChatIntegration = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-28 text-white poppins700">New Chat Integration</h1>

      <div className="">
        <h4 className="text-15 text-white poppins400">Select integration</h4>

        <ModalComponent
          children={<SlackIntegration />}
          btnTitle="Slack"
          btnStyle="w-full border-2 border-[#F0F0F0] rounded-16 p-16 my-8 text-15 poppins600 text-white text-center"
          maxWidth="sm:max-w-lg"
        />

        <ModalComponent
          children={<MessengerIntegration />}
          btnTitle="Messenger"
          btnStyle="w-full border-2 border-[#F0F0F0] rounded-16 p-16 my-8 text-15 poppins600 text-white text-center"
          maxWidth="sm:max-w-lg"
        />

        <ModalComponent
          children={<TwilioIntegration />}
          btnTitle="Twilio (WhatsApp)"
          btnStyle="w-full border-2 border-[#F0F0F0] rounded-16 p-16 my-8 text-15 poppins600 text-white text-center"
          maxWidth="sm:max-w-lg"
        />

        <ModalComponent
          children={<MSBotIntegration />}
          btnTitle="Microsoft Bot Framework"
          btnStyle="w-full border-2 border-[#F0F0F0] rounded-16 p-16 my-8 text-15 poppins600 text-white text-center"
          maxWidth="sm:max-w-lg"
        />

      </div>
    </div>
  );
};

export default NewChatIntegration;
