/**
 * Navbar component to display a navigation header
 *
 *
 * @returns {JSX.Element} - A navigation header with a desktop and mobile components
 */
import { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname, hash } = useLocation()

  const [transparentHeader, setTransparentHeader] = useState<boolean>(false)
  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setTransparentHeader(true)
      : setTransparentHeader(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <Popover className="relative">
      <DesktopNav
        headerTransparentBg={transparentHeader}
        location={pathname + hash}
      />
      <MobileNav location={pathname + hash} />
    </Popover>
  )
}
