import React from 'react'
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div className='nav-center'>
        <div className='nav-info'>
          <span>
            <FaMapMarkerAlt className='icon' /> El Reparo Mexican Grill &
            Cantina, 1735 S Broadway, Minot, ND 58701, United States
          </span>
          <span>
            <FaClock className='icon' /> Daily: 11.00 AM - 9.00 PM
          </span>
          <span>
            <FaPhoneAlt className='icon' /> +1 701-838-4337
          </span>
          <span>
            <FaEnvelope className='icon' /> Elreparond@yahoo.com
          </span>
        </div>
      </div>
      <div className='nav-line'></div>
    </div>
  )
}

export default TopNav
