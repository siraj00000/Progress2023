/**
 * MobileNav component to display a navigation header
 *
 * @returns {JSX.Element} - A navigation header with a mobile menu
 */

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Logo } from '../../assets'
import { NavHashLink } from 'react-router-hash-link'
import { MENU_LIST } from './_menu_list'

type Props = {
  location: string
}

const MobileNav = ({ location }: Props) => {
  return (
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden bg-  z-50"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img src={Logo} alt="logo" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark ">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-12 w-12" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {MENU_LIST.map((item, index) => (
                  <NavHashLink
                    key={index}
                    className={`text-[25px] leading-[38px] ${
                      location === item.slug ? 'text-dark' : 'text-black'
                    }`}
                    {...item}
                  >
                    {item.route_name}
                  </NavHashLink>
                ))}
                <NavHashLink
                  to={'/nominate'}
                  className={
                    'bg-dark rounded-md text-light w-full h-[55px] text-[25px] leading-[38px] flex items-center justify-center'
                  }
                >
                  Apply
                </NavHashLink>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default MobileNav
