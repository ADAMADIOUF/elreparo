import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    image:
      'https://i.pinimg.com/736x/77/02/10/770210663f41df2b873f18f7f9113a53.jpg',
    title: 'Welcome to El Reparo!',
    description: 'Experience the best of Mexican Grill & Cantina.',
    buttonText: 'Explore Menu',
    buttonLink: '/menus',
  },
  {
    image:
      'https://i.pinimg.com/736x/cd/7c/2b/cd7c2b6938c17998c8c56939a9b0c4db.jpg',
    title: 'Authentic Mexican Flavors',
    description: 'Fresh, vibrant, and flavorful dishes served daily.',
    buttonText: 'See Our Specials',
    buttonLink: '/menus', // Specials page can also be under the menu
  },
  {
    image:
      'https://i.pinimg.com/736x/32/d8/5c/32d85ce21ababbe7085d2e956711fa10.jpg',
    title: 'A Fiesta of Flavors – Fresh, Bold, and Authentic!',
    description: 'Taste Mexico in every dish – fresh, bold, and flavorful!',
    buttonText: 'Book a Table',
    buttonLink: '/reservation',
  },
]

const SliderWithText = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='slider'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide} // Key ensures each slide is treated uniquely
          className='slider-wrapper'
          initial={{ opacity: 0, x: 100 }} // Starts from the right
          animate={{ opacity: 1, x: 0 }} // Moves to center smoothly
          exit={{ opacity: 0, x: -100 }} // Exits to the left
          transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        >
          <div className='slider-image'>
            <img src={slides[currentSlide].image} alt='Slider' />
            <div className='slider-overlay'></div> {/* Overlay added */}
          </div>
          <div className='text-container'>
            <motion.h1
              className='slide-title'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className='slide-description'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to={slides[currentSlide].buttonLink} className='btn'>
                {slides[currentSlide].buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SliderWithText
