import React from 'react'
import bg from '../assets/bg1.svg'
import { motion } from 'framer-motion'
const ThirdBanner = () => {
  return (
    <div className='third-banner section-center'>
      <div className='image-section'>
        <img
          src='https://lh3.googleusercontent.com/p/AF1QipP21Zg7KW-sFnApp1_HpX5L5Wt1FWSGHaVvVxiD=s1360-w1360-h1020'
          alt='Special dish'
        />
      </div>
      <div className='text-section'>
        <h2>Special dish</h2>
        <motion.div
          className='svg-container'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bg} alt='SVG Image' className='my-svg-image' />
        </motion.div>
        <h3>Lobster Tortellini</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the when an unknown printer took a galley of type.
        </p>
        <div className='price'>
          <span className='original-price'>$40.00</span>
          <span className='discounted-price'>$20.00</span>
        </div>
        
          <button className='btn'>View All Menu</button>
       
      </div>
    </div>
  )
}

export default ThirdBanner
