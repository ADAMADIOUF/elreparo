import React from 'react'
import { motion } from 'framer-motion'
import bg2 from '../assets/bg3.png'
import bg from '../assets/bg1.svg'
import imageOne from '../assets/imageOne.jpg' // Replace with actual image path
import imageTwo from '../assets/imageTwo.jpg' // Replace with actual image path
import firstbanner from '../assets/first.png'
import secondbanner from '../assets/second.png'
const SecondBanner = () => {
  return (
    <section className='second-banner'>
      <div className='section-center second-banner-content'>
        {/* First Part: Text Section */}
        <div className='story-content'>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Story
          </motion.h2>
          <img src={bg} alt='SVG Image' className='my-svg-image' />
          <motion.div
            className='svg-container'
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </motion.p>

          <motion.div
            className='call-info'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h4>Book Through Call</h4>
            <p>+80 (400) 123 4567</p>
          </motion.div>

          <motion.div
            className='buttons-container'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a href='#read-more' className='btn'>
              Read More
            </a>
          </motion.div>
        </div>

        {/* Second Part: Overlapping Images */}
        <div className='image-section'>
          <motion.img
            src={imageOne}
            alt='Story Image One'
            className='story-image image-one'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src={imageTwo}
            alt='Story Image Two'
            className='story-image image-two'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
        
      </div>
      <svg viewBox='0 0 200 200' className='circle-text'>
        <path
          id='circlePath'
          d='M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
        />

        <text>
          <textPath href='#circlePath' startOffset='0%'>
            QUALITÉ RESTAURANT • El Reparo Mexican Grill & Cantina •
          </textPath>
        </text>

        <text
          x='50%'
          y='50%'
          className='center-text'
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
