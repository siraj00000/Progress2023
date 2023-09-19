import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CgClose } from 'react-icons/cg'
import { PopupBg, PopupMailChar, PopupMailCharBottom } from '../../assets'

export default function Example() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 90 * 1000)
  }, [])

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
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
          <div className="fixed inset-0 bg-black bg-opacity-50   transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                <div className="w-full h-full relative bg-gray-100">
                  <img src={PopupBg} alt="popup-bg" />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="bg-transparent w-4/5 h-[400px] rounded-[12px] border-[1px] border-[#7D73EC]">
                      <div className="bg-light -rotate-[3.71deg] w-full h-[400px] rounded-[12px] shadow-2xl shadow-[#C4C4C4]">
                        <div className="flex items-start w-full h-full relative rotate-[3.71deg]">
                          <CgClose
                            onClick={() => setOpen(false)}
                            className="absolute top-0 right-10 text-[16px] text-black cursor-pointer"
                          />
                          <div className="pt-10 relative">
                            <img
                              src={PopupMailChar}
                              alt="mail-character-icon-popup"
                              className="relative -left-2 z-10"
                            />
                            <img
                              src={PopupMailCharBottom}
                              alt="mail-character-icon-popup"
                              className="z-0 relative bottom-40 left-5"
                            />
                          </div>
                          <div className="w-4/6 text-center ml-auto p-5">
                            <h3 className="text-center text-[36px] font-extrabold leading-[54px] text-black">
                              Wait A Second !
                            </h3>
                            <p className="font-semibold text-[18px] leading-[27px]">
                              Sign up for our newsletter to get all the latest
                              information on Umfana Global
                            </p>
                            <form className="flex flex-col gap-2 mt-5 px-10">
                              <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="border-[1px] bg-dark bg-opacity-[0.2] border-light rounded-[10px] px-[10px] py-[8px] placeholder:text-[#514F4F] text-[18px] leading-[27px] active:outline-none"
                              />
                              <input
                                type="text"
                                placeholder="Enter Your E-mail Address"
                                className="border-[1px] bg-dark bg-opacity-[0.2] border-light rounded-[10px] px-[10px] py-[8px] placeholder:text-[#514F4F] text-[18px] leading-[27px]"
                              />
                              <button className="bg-dark rounded-[10px] text-[18px] font-extrabold text-white w-4/6 py-[11px] mx-auto mt-8">
                                Get Informed!
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
