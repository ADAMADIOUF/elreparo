import React from 'react'
import limon from '../assets/limon.png'
import fork from '../assets/fork.png'


const AboutBanner = () => {
  return (
    <div className='about-banner'>
      {/* Overlay */}
      <div className='overlay'></div>

      <div className='about-banner-content'>
        <h1 className='about-banner-title'>
          Experience Excellence in Every Bite
        </h1>
        <p className='about-banner-description'>
          Our passion is serving exquisite flavors with the finest ingredients.
          Whether it's a casual meal or a grand celebration, we ensure every
          dish is a masterpiece. Join us for an unforgettable dining experience.
        </p>
      </div>

      {/* Left and Right small images */}
      <div className='left-image'>
        <img src={limon} alt='Lemon Decoration' className='small-image' />
      </div>
      <div className='right-image'>
        <img src={fork} alt='Fork' className='small-image' />
      </div>
    </div>
  )
}

export default AboutBanner
