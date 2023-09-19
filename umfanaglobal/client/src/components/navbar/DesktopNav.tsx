/**
 * DesktopNav component to display a navigation header
 *
 * @returns {JSX.Element} - A navigation header with a desktop menu
 */

import { NavHashLink } from 'react-router-hash-link'
import { Popover } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Logo } from '../../assets'
import { MENU_LIST } from './_menu_list'
import { useLocation } from 'react-router-dom'

type Props = {
  headerTransparentBg: boolean
  location: string
}

const darkInactiveNavLinkColoredPageList = ['blog', 'program']

const DesktopNav = ({ headerTransparentBg = true, location }: Props) => {
  const { pathname } = useLocation()

  let darkColor = darkInactiveNavLinkColoredPageList.includes(
    pathname.split('/')[1],
  )

  const activeStyle = {
    color: '#F1620E',
  }
  const inactiveStyle = {
    color: headerTransparentBg || darkColor ? '#000' : '#fff',
  }

  return (
    <header
      className={`fixed w-full z-40 px-[5%] ${
        headerTransparentBg
          ? 'bg-light border-b-[1px] border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between md:justify-start md:space-x-10 px-15 bg-transparent">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <NavHashLink to={'/'}>
            <img src={Logo} alt="logo" />
          </NavHashLink>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-dark hover:text-gray-500 focus:outline-none  ">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-12 w-12" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-14">
          {MENU_LIST.map((item, index) => (
            <NavHashLink
              key={index}
              className={`text-lg leading-[38px] hover:text-dark`}
              style={() =>
                location === item.slug ? activeStyle : inactiveStyle
              }
              {...item}
            >
              {item.route_name}
            </NavHashLink>
          ))}
          <NavHashLink
            to={'/nominate'}
            className={
              'bg-dark rounded-md text-light px-5 py-2 text-lg leading-[38px] flex items-center justify-center'
            }
          >
            Apply
          </NavHashLink>
        </div>
      </div>
    </header>
  )
}

export default DesktopNav
