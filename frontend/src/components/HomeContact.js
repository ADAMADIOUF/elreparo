import React from 'react'
import Reservation from './Reservation'
import ContactHome from './ContactHome'

const HomeContact = () => {
  return (
    <div className='home-contact'>
      <article className='reservation-row'>
        <Reservation />
      </article>
      <article className='contact-home-row'>
        <ContactHome />
      </article>
    </div>
  )
}

export default HomeContact
