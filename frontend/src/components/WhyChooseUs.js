import React from 'react'
import {
  FaHandSparkles,
  FaLeaf,
  FaUtensils,
  FaBirthdayCake,
} from 'react-icons/fa' // Using available icons
import bg from '../assets/bg1.svg'
import { motion } from 'framer-motion'
const WhyChooseUs = () => {
  return (
    <div className='why-choose-us'>
      <h2 className='why-choose-us-title'>Why Choose Us</h2>
      <div className='my-svg-image'>
        <motion.div
          className='svg-container'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bg} alt='SVG Image' className='my-svg-image' />
        </motion.div>
      </div>
      <div className='why-choose-us-container'>
        {/* SVG Image */}

        {/* Our Strength */}
        <div className='our-strength'>
          <h3 className='our-strength-title'>Our Strength</h3>
          <div className='strength-list'>
            <div className='strength-item'>
              <FaHandSparkles className='whychoose-icon' />
              <h4>Hygienic Food</h4>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className='strength-item'>
              <FaLeaf className='whychoose-icon' />
              <h4>Fresh Environment</h4>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className='strength-item'>
              <FaUtensils className='whychoose-icon' />
              <h4>Skilled Chefs</h4>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
            <div className='strength-item'>
              <FaBirthdayCake className='whychoose-icon' />
              <h4>Event & Party</h4>
              <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
