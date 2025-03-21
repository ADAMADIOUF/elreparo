import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false)
    setSubmenuOpen(false) // Also close submenu when closing mobile menu
  }

  return (
    <header className='navbar'>
      <div className='nav-container'>
        <button className='menu-btn' onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
        <Link to={'/'}>
          <img src={logo} className='logo' alt='Logo' />
        </Link>
        <Link
          to={
            'https://www.toasttab.com/local/order/el-reparo-mexican-grill-cantina-1735-s-broadway/r-a93d16f5-cbf8-42eb-8dc8-c7d6cee16f70?diningOption=takeout'
          }
        >
          <button className='btn'>ORDER ONLINE FOR PICKUP OR DELIVERY</button>
        </Link>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className='menu-header'>
          <img src={logo} className='logo' alt='Logo' />
          <button className='close-btn' onClick={closeMenu}>
            <FaTimes />
          </button>
        </div>
        <ul>
          <li>
            <Link to='/' onClick={closeMenu}>
              Home
            </Link>
          </li>

          {/* Menus Link with Submenu */}
          <li className='has-submenu'>
            <button
              className='submenu-btn'
              onClick={() => setSubmenuOpen(!submenuOpen)}
            >
              Menus {submenuOpen ? '▲' : '▼'}
            </button>
            <ul className={`submenu ${submenuOpen ? 'open' : ''}`}>
              <li>
                <Link to='/menus' onClick={closeMenu}>
                  All Menus
                </Link>
              </li>
              <li>
                <Link to='/breakfast-menu' onClick={closeMenu}>
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to='/appetizers-menu' onClick={closeMenu}>
                  Appetizers
                </Link>
              </li>
              <li>
                <Link to='/drinks-menu' onClick={closeMenu}>
                  Drinks
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to='/about-us' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/chefs' onClick={closeMenu}>
              Our Chefs
            </Link>
          </li>
          <li>
            <Link to='/reservation' onClick={closeMenu}>
              Reservation
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
