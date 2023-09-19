import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DropdownProps } from "../../types/index.types";

export default function MenuDropdown({ children, menuList }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left z-10">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-15  font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
          {children}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-14 p-12 bg-dark shadow-lg focus:outline-none">
          <div className="py-1">
            {menuList.map(({ onClickHandler, title }, i) => (
              <Menu.Item key={i}>
                <button
                  onClick={onClickHandler}
                  className={
                    "block px-4 py-2 text-14 poppins400 text-graySecondary"
                  }
                >
                  {title}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
