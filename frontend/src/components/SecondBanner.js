import React from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import imageOne from '../assets/imageOne.jpg'
import imageTwo from '../assets/imageTwo.jpg'
import { Link } from 'react-router-dom'

const SecondBanner = () => {
  return (
    <section className='secondbanner'>
      <div className='secondbanner-content'>
        <div className='secondbanner-story-content'>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h2>
          <img src={bg} alt='' className='secondbanner-svg-image' />
          <motion.div
            className='secondbanner-svg-container'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Every Flavor Tells a Story
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            El Reparo Mexican Grill is an authentic Mexican restaurant, founded
            and run by a family originally from Puerto Vallarta, Jalisco,
            Mexico. Our passion for food and tradition brings you a variety of
            delicious, authentic Mexican dishes and tropical cocktails made with
            fresh ingredients. More than just a restaurant, we offer a 100%
            family-friendly atmosphere, where great food meets entertainment.
            Whether you’re here for a casual dinner, a celebration, or just to
            enjoy a refreshing margarita, we promise an experience filled with
            flavors, warmth, and culture. Join us and taste the tradition!
          </motion.p>

          <motion.div
            className='secondbanner-call-info'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h4>Book Through Call</h4>
            <p>+1 701-838-4337</p>
          </motion.div>

          <motion.div
            className='secondbanner-buttons-container'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link to='/about-us' className='secondbanner-btn btn'>
              Read More
            </Link>
          </motion.div>
        </div>
        <div className='secondbanner-image-section'>
          <motion.img
            src={imageOne}
            alt='Story Image One'
            className='secondbanner-story-image secondbanner-image-one'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={imageTwo}
            alt='Story Image Two'
            className='secondbanner-story-image secondbanner-image-two'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      <svg viewBox='0 0 200 200' className='secondbanner-circle-text'>
        <path
          id='secondbanner-circlePath'
          d='M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
        />

        <text>
          <textPath href='#secondbanner-circlePath' startOffset='0%'>
            QUALITÉ RESTAURANT • El Reparo Mexican Grill & Cantina •
          </textPath>
        </text>

        <text
          x='50%'
          y='50%'
          className='secondbanner-center-text'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          Since 2024
        </text>
      </svg>
    </section>
  )
}

export default SecondBanner
