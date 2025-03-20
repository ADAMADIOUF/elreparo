import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className='navbar'>
      <div className='nav-container'>
        <button className='menu-btn' onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
        <img src={logo} className='logo' alt='Logo' />
        <button className='btn'>Find a Table</button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className='menu-header'>
          <img src={logo} className='logo' alt='Logo' />
          <button className='close-btn' onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul>
          <li>
            <Link to='/' onClick={closeMenu}>
              Home
            </Link>{' '}
            {/* Close menu on link click */}
          </li>
          <li>
            <Link to='/menus' onClick={closeMenu}>
              Menus
            </Link>
          </li>
          <li>
            <Link to='#about' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='#chefs' onClick={closeMenu}>
              Our Chefs
            </Link>
          </li>
          <li>
            <Link to='#contact' onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
