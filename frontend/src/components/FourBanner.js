import React from 'react'

const FourBanner = () => {
  return (
    <section className='fourbanner-section'>
     
      <div className='fourbanner-bg'>
        <img
          src='https://lh3.googleusercontent.com/p/AF1QipPM8mwVPGPz1gljW2DwjgqB7Osbi5BdFA-ssX7s=s1360-w1360-h1020' // Replace with your image
          alt='Thank You'
          className='fourbanner-bg-image'
        />
        {/* Black Overlay */}
        <div className='fourbanner-overlay'></div>
      </div>

      {/* Text Content */}
      <div className='fourbanner-text'>
        <h1 className='fourbanner-title'>Thank You for Your Support!</h1>
        <p className='fourbanner-paragraph'>
          We appreciate every customer and look forward to serving you again.
        </p>
      </div>

      {/* Small Rounded Image */}
      <div className='fourbanner-img-container'>
        <img
          src='https://lh3.googleusercontent.com/p/AF1QipPM8mwVPGPz1gljW2DwjgqB7Osbi5BdFA-ssX7s=s1360-w1360-h1020' // Replace with your small image
          alt='Logo'
          className='fourbanner-logo'
        />
      </div>
    </section>
  )
}

export default FourBanner
