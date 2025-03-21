import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <img src={logo} className='logo' alt='Logo' />
          <p className='footer-description'>
            Authentic Mexican flavors served with passion and tradition.
          </p>
        </div>

        <div className='footer-section'>
          <h3 className='footer-links-title'>Quick Links</h3>
          <ul className='footer-links'>
            <li>
              <Link to='/' className='footer-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/menus' className='footer-link'>
                Menu
              </Link>
            </li>
            <li>
              <Link to='/about-us' className='footer-link'>
                About Us
              </Link>
            </li>
            <li>
              <Link to='/chefs' className='footer-link'>
                Our Chefs
              </Link>
            </li>
            <li>
              <Link to='/reservation' className='footer-link'>
                Reservation
              </Link>
            </li>
            <li>
              <Link to='/contact' className='footer-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3 className='footer-links-title'>Contact Us</h3>
          <p className='footer-contact'>123 Main Street, Minot, ND</p>
          <p className='footer-contact'>Phone: (701) 555-1234</p>
          <p className='footer-contact'>Email: info@elreparo.com</p>
          <div className='footer-social-icons'>
            <a
              href='https://www.facebook.com/p/El-Reparo-Mexican-GRILL-61550975976222/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-social-icon'
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-social-icon'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-social-icon'
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        &copy; {new Date().getFullYear()} El Reparo Mexican Grill & Cantina. All
        rights reserved.
      </div>
    </footer>
  )
}

export default Footer
