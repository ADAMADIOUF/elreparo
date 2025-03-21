import React from 'react'
import { motion } from 'framer-motion'

const HeroSection = ({ title, description, backgroundImage }) => {
  return (
    <section
      className='hero-usuable'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        className='hero-usuable-content'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.h1
          className='hero-usuable-title'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>
        <motion.p
          className='hero-usuable-description'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default HeroSection
