import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'

const AboutUsPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = () => {
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
  }

  return (
    <>
      <HeroSection
        title='About El Reparo Mexican Grill & Cantina'
        description='Experience the warmth of family, tradition, and authentic Mexican cuisine. Our passion is to bring the flavors of Puerto Vallarta, Jalisco, to your table with fresh ingredients, vibrant dishes, and a welcoming atmosphere.'
        backgroundImage='https://i.pinimg.com/474x/e3/84/41/e38441da0e92391e31dc1d9d6f58c872.jpg'
      />
      <div className='about-us-container'>
        {/* Who We Are Section */}
        <section className='who-we-are'>
          <motion.div
            className='svg-container'
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={bg} alt='SVG Image' className='my-svg-image' />
          </motion.div>
          <div className='who-we-are-text'>
            <h2>Who We Are</h2>
            <p>
              A modern restaurant with a menu that will make your mouth water.
              Serving delicious food for over 45 years. Enjoy our seasonal menu
              and experience the beauty of naturalness.
            </p>
          </div>
        </section>

        {/* Three-Row Layout (Founder, Video, Restaurant Info) */}
        <div className='three-row-layout'>
          {/* Row 1: Founder Section with Video Popup */}
          <section className='founder-section'>
            <div className='founder-text'>
              <h3>Andrew Joe - Founder</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has been the industry's standard dummy text ever
                since the unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
            <div className='founder-media'>
              <img
                src='https://i.pinimg.com/474x/5d/62/34/5d623476a1fa70bd124a2cdb91b1824f.jpg'
                alt='Founder Andrew Joe'
                className='founder-img'
              />
              <button className='video-popup-btn' onClick={openVideo}>
                ▶ Watch Video
              </button>
            </div>
          </section>

          {/* Row 2: Video Popup (Opens in Fullscreen) */}
          {isVideoOpen && (
            <div className='video-modal'>
              <div className='video-content'>
                <button className='close-video' onClick={closeVideo}>
                  ✖
                </button>
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                  title='Restaurant Video'
                  frameBorder='0'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Row 3: Restaurant Info */}
          <section className='restaurant-info'>
            <div className='info-box'>
              <h3>Lunch Time</h3>
              <p>Monday to Sunday</p>
              <p>11.00 AM - 2.30 PM</p>
            </div>
            <div className='info-box'>
              <h3>Dinner Time</h3>
              <p>Monday to Sunday</p>
              <p>5.30 PM - 11.30 PM</p>
            </div>
            <div className='info-box'>
              <h3>Contact Us</h3>
              <p>Restaurant St, Delicious City, London 9578, UK</p>
              <p>+88-123-123456</p>
              <p>reservation@restro.com</p>
            </div>
          </section>
        </div>

        {/* Statistics Section (Now at the Bottom) */}
        <section className='statistics-section'>
          <div className='stat-box'>
            <h3>150+</h3>
            <p>Daily Orders</p>
          </div>
          <div className='stat-box'>
            <h3>82+</h3>
            <p>Special Dishes</p>
          </div>
          <div className='stat-box'>
            <h3>35+</h3>
            <p>Expert Chefs</p>
          </div>
          <div className='stat-box'>
            <h3>10+</h3>
            <p>Awards Won</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUsPage
