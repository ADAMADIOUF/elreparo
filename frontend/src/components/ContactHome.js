import React from 'react'

const ContactHome = () => {
  return (
    <div className='contact-container'>
      <div className=' contact'>
        <h2 className='contact-title'>Contact Us</h2>

        <div className='contact-info'>
          <div className='contact-item'>
            <h3>Booking Request</h3>
            <p>
              {' '}
              <span>+1 701-838-4337</span>
            </p>
          </div>

          <div className='contact-item'>
            <h3>Location</h3>
            <p>
              El Reparo Mexican Grill & Cantina, 1735 S Broadway, Minot, ND
              58701
            </p>
          </div>

          <div className='contact-item'>
            <h3>Lunch Time</h3>
            <p>
              Monday to Sunday
              <br />
              11.00 am - 2.30 pm
            </p>
          </div>

          <div className='contact-item'>
            <h3>Dinner Time</h3>
            <p>
              Monday to Sunday
              <br />
              05.00 pm - 10.00 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactHome
