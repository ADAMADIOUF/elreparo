import React from 'react'
import bg from '../assets/bg1.svg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
          <img src={bg} alt='' className='secondbanner-svg-image' />
        </motion.div>
        <h3>"El Reparo’s Signature Dish – A Taste of Tradition!"</h3>
        <p>
          Savor the rich and authentic flavors of Mexico with our signature dish
          at El Reparo Mexican Grill & Cantina. Made with the freshest
          ingredients, bold spices, and time-honored recipes, each bite brings a
          perfect balance of flavor, heat, and tradition. Whether you're craving
          sizzling fajitas, cheesy enchiladas, or tender carne asada, our
          special dish is a must-try for true Mexican food lovers!"
        </p>
        <div className='price'>
          <span className='original-price'>$40.00</span>
          <span className='discounted-price'>$20.00</span>
        </div>

        <Link to={'/menus'}>
          {' '}
          <button className='btn'>View All Menu</button>
        </Link>
      </div>
    </div>
  )
}

export default ThirdBanner
