import React from 'react'


const HeroSection = ({ title, description, backgroundImage }) => {
  return (
    <section
      className='hero-usuable'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='hero-usuable-content'>
        <h1 className='hero-usuable-title'>{title}</h1>
        <p className='hero-usuable-description'>{description}</p>
      </div>
    </section>
  )
}

export default HeroSection
