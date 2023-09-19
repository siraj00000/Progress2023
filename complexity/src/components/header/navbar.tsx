import React from 'react'
import { NavLink } from 'react-router-dom'
//Icons
import { IoIosMenu } from 'react-icons/io'
import { BsPersonFill, BsCartFill } from 'react-icons/bs'
import { CiHome } from 'react-icons/ci'
import { RiContactsBookFill } from 'react-icons/ri'
import { useState } from 'react'
type Props = {}

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <IoIosMenu size={46} color="#000" onClick={toggleMenuHandler} />
      {toggleMenu ? (
        <nav>
          <NavLink to={'/profile'} onClick={toggleMenuHandler}>
            <BsPersonFill />
            Profile
          </NavLink>
          <NavLink to={'/browser'} onClick={toggleMenuHandler}>
            <BsCartFill />
            Browser
          </NavLink>
          <NavLink to={'/listings'} onClick={toggleMenuHandler}>
            <CiHome />
            My Listings
          </NavLink>
          <NavLink to={'/my-deal'} onClick={toggleMenuHandler}>
            <BsPersonFill />
            My Deals
          </NavLink>
          <NavLink to={'/contact'} onClick={toggleMenuHandler}>
            <RiContactsBookFill />
            Contact
          </NavLink>
        </nav>
      ) : null}
    </>
  )
}

export default React.memo(Navbar)
