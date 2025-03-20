import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import bg from '../assets/bg1.svg'



const LastBanner = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className='last-banner'>
      <div className='banner-content'>
        <h2 className='banner-title'>Amazing Experience</h2>

        <motion.div
          className='svg-container'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bg} alt='SVG Image' className='my-svg-image' />
        </motion.div>

        <p className='banner-description'>
          A modern restaurant with a menu that will make your mouth water.
        </p>
        <p className='chef-name'>- Willium Joe, Master Chef</p>

        {/* Animated Video Button */}
        <motion.button
          className='watch-video'
          onClick={() => setShowVideo(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPlay className='play-icon' />
        </motion.button>
      </div>

      {/* Video Popup */}
      {showVideo && (
        <motion.div
          className='video-popup'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className='video-content'>
            <span className='close-video' onClick={() => setShowVideo(false)}>
              &times;
            </span>
            <iframe
              width='100%'
              height='315'
              src='https://www.youtube.com/embed/dQw4w9WgXcQ'
              title='Restaurant Video'
              allowFullScreen
            ></iframe>
          </div>
         
        </motion.div>
      )}
      
    </section>
  )
}

export default LastBanner
