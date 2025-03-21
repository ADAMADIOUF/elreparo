import React from 'react'
import HeroSection from '../components/HeroSection' // Adjust the path if needed
import Reservation from '../components/Reservation'

const ReservationPage = () => {
  return (
    <div className='reservation-page'>
      {/* Hero Section */}
      <HeroSection
        title='Make a Reservation'
        description='Reserve your table at El Reparo Mexican Grill & Cantina. Enjoy an unforgettable dining experience with authentic flavors and warm hospitality.'
        backgroundImage='https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg'
      />

      {/* Reservation Info Section */}
      <div className='reservation-page-info'>
        <h2>Reservation Details</h2>
        <p>
          Plan your visit and secure your spot at our restaurant. We look
          forward to serving you!
        </p>

        <div className='reservation-page-info-grid'>
          <div className='reservation-page-info-box'>
            <h3>Lunch Time</h3>
            <p>Monday to Sunday</p>
            <p>11:00 am - 2:30 pm</p>
          </div>
          <div className='reservation-page-info-box'>
            <h3>Dinner Time</h3>
            <p>Monday to Sunday</p>
            <p>5:30 pm - 11:30 pm</p>
          </div>
          <div className='reservation-page-info-box'>
            <h3>Contact Info</h3>
            <p>1735 S Broadway, Minot, ND 58701</p>
            <p>Email: Elreparond@yahoo.com</p>
            <p>Phone: +1 701-838-4337</p>
          </div>
        </div>
      </div>

      {/* Reservation Form */}
      <div className='reservation-page-reservation-form'>
        <Reservation />
      </div>
    </div>
  )
}

export default ReservationPage
