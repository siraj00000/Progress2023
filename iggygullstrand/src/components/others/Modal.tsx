import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type ModalComponentProps = {
  children: React.ReactNode;
  btnTitle: string;
  btnStyle?: string;
  maxWidth?: string;
  directToggle?: boolean;
  directToggleStatus?: boolean;
};

const ModalComponent: React.FC<ModalComponentProps> = ({
  children,
  btnTitle,
  btnStyle,
  maxWidth,
  directToggle = false,
  directToggleStatus = false,
}) => {
  const [open, setOpen] = useState(directToggleStatus);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (directToggle && directToggleStatus) {
      setOpen(true);
    }
  }, [directToggle, directToggleStatus]);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={`${btnStyle} ${
          directToggle && "hidden"
        } bg-dark py-12 px-24 rounded-16 text-white text-15 poppins600 outline-none`}
      >
        {btnTitle}
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel
                  className={`relative transform overflow-hidden p-32 rounded-16 bg-dark text-left shadow-xl transition-all sm:my-8 sm:w-full ${
                    maxWidth ? maxWidth : "sm:max-w-3xl"
                  }`}
                >
                  <span onClick={() => setOpen(false)}>
                    <XMarkIcon className="text-grayMedium w-8 h-8 absolute right-10 top-10 cursor-pointer" />
                  </span>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ModalComponent;
