import React from 'react'
import {
  FaShippingFast,
  FaUtensils,
  FaConciergeBell,
  FaStore,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className='services-container'>
      <h2 className='services-title'>Our Services</h2>

      {/* First Row: Door Delivery & Fine Dining */}
      <div className='service-row'>
        <motion.div
          className='service-item'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <FaShippingFast className='service-icon' />
          <h3>Door Delivery</h3>
          <p>
            Enjoy the convenience of our fast and reliable door delivery
            service. Whether you're at home, at the office, or any location of
            your choice, we ensure your food is delivered quickly, safely, and
            with great care, so you can enjoy your meal without any hassle.
          </p>
        </motion.div>

        <motion.div
          className='service-item'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <FaUtensils className='service-icon' />
          <h3>Fine Dining</h3>
          <p>
            Indulge in an exquisite fine dining experience. Our chefs prepare a
            selection of gourmet dishes using only the finest ingredients,
            offering you an unforgettable culinary journey. Whether it's for a
            special occasion or a sophisticated evening out, our fine dining
            service is sure to delight.
          </p>
        </motion.div>
      </div>

      {/* Second Row: Image */}
      <div className='service-row image-row'>
        <motion.img
          src='https://react.mediacity.co.in/delici/static/media/service-image.92ab1b7d826d885a0f6c.png'
          alt='Services Image'
          className='services-image'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Third Row: Outdoor Catering & Banquets Hall */}
      <div className='service-row'>
        <motion.div
          className='service-item'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <FaConciergeBell className='service-icon' />
          <h3>Outdoor Catering</h3>
          <p>
            Make your outdoor events unforgettable with our premium outdoor
            catering service. Whether it's a wedding, party, or corporate event,
            our team provides fresh, delicious meals tailored to your
            preferences. We bring the restaurant experience right to your venue,
            ensuring your guests enjoy every bite.
          </p>
        </motion.div>

        <motion.div
          className='service-item'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <FaStore className='service-icon' />
          <h3>Banquets Hall</h3>
          <p>
            Our Banquets Hall is perfect for hosting events of any size. Whether
            you're planning a wedding, corporate gathering, or a family reunion,
            we offer a beautiful space with elegant decor, exceptional service,
            and a range of dining options to suit your needs. Let us help you
            create lasting memories in our state-of-the-art venue.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
