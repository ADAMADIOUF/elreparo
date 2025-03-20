import React from 'react'
import { motion } from 'framer-motion'

import bg from '../assets/bg1.svg'
import bg2 from '../assets/bg3.png'
import firstbanner from '../assets/first.png'
import secondbanner from '../assets/second.png'

const FirstBanner = () => {
  return (
    <section className='first-banner'>
      <div className='first-banner-content section-center'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Flavors for Royalty
        </motion.h1>

        <motion.div
          className='svg-container'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bg} alt='SVG Image' className='secondbanner-svg-image' />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Offer Top Notch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We provide top-notch quality, delivering excellence and reliability in
          every service we offer. Our commitment to superior standards ensures
          customer satisfaction and an exceptional experience every time.
        </motion.p>

        <div className='first-baner-menu-section'>
          <div className='first-baner-menu-item'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Breakfast
            </motion.h3>
            <a href='#breakfast-menu' className='first-baner-view-menu'>
              View Menu
            </a>
          </div>
          <div className='first-baner-menu-item'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Appetizers
            </motion.h3>
            <a href='#appetizers-menu' className='first-baner-view-menu'>
              View Menu
            </a>
          </div>
          <div className='first-baner-menu-item'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Drinks
            </motion.h3>
            <a href='#drinks-menu' className='first-baner-view-menu'>
              View Menu
            </a>
          </div>
        </div>

        <div className='image-gallery'>
          <div className='gallery-img-container'>
            <motion.img
              src={bg2}
              alt='Top Background'
              className='gallery-bg top-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src='https://react.mediacity.co.in/delici/static/media/offer-image-1.c020474aea0ed9a09d2a.jpg'
              alt='First Image'
              className='gallery-img large-height hover-effect'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.img
              src={bg2}
              alt='Bottom Background'
              className='gallery-bg bottom-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
          <div className='gallery-img-container'>
            <motion.img
              src={bg2}
              alt='Top Background'
              className='gallery-bg top-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.img
              src='https://react.mediacity.co.in/delici/static/media/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg'
              alt='Middle Image'
              className='gallery-img medium-height hover-effect'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.img
              src={bg2}
              alt='Bottom Background'
              className='gallery-bg bottom-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            />
          </div>
          <div className='gallery-img-container'>
            <motion.img
              src={bg2}
              alt='Top Background'
              className='gallery-bg top-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3 }}
            />
            <motion.img
              src='https://react.mediacity.co.in/delici/static/media/offer-image-3.2220579532c7ff25ef9c.jpg'
              alt='Last Image'
              className='gallery-img large-height hover-effect'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
            />
            <motion.img
              src={bg2}
              alt='Bottom Background'
              className='gallery-bg bottom-bg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 4 }}
            />
          </div>
        </div>
      </div>
      <div className='first-banner-img'>
        <img src={firstbanner} alt='' />
      </div>
      <div className='second-banner-img'>
        <img src={secondbanner} alt='' />
      </div>
    </section>
  )
}

export default FirstBanner
