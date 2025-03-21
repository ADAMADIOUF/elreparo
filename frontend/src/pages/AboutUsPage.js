import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import AboutTwo from './AboutTwo'
import Services from './Services'
import AboutBanner from './AboutBanner'
import WhyChooseUs from "../components/WhyChooseUs"
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
            <img src={bg} alt='SVG Background' className='my-svg-image' />
          </motion.div>
          <div className='who-we-are-text'>
            <h2>Who We Are</h2>
            <p>
              At El Reparo Mexican Grill & Cantina, we bring the heart and soul
              of authentic Mexican cuisine to your table. Inspired by the rich
              culinary traditions of Puerto Vallarta, Jalisco, our restaurant is
              a place where flavor, tradition, and hospitality come together.
              For over 15 years, we've been serving fresh, flavorful, and
              homemade dishes crafted with the finest ingredients. From sizzling
              fajitas and zesty tacos to handcrafted margaritas, every bite is a
              taste of Mexico’s vibrant culture. Whether you’re here for a
              casual meal, a family gathering, or a special celebration, we
              invite you to enjoy a warm atmosphere, friendly service, and an
              unforgettable dining experience. Welcome to El Reparo – where
              every meal is a fiesta! 🎉🌮🍹
            </p>
          </div>
        </section>

        {/* Three-Row Layout (Founder, Video, Restaurant Info) */}
        <div className='three-row-layout'>
          {/* Row 1: Founder Section with Video Popup */}
          <section className='founder-section'>
            <div className='founder-text'>
              <h3>Puerto Vallarta & Jalisco, Mexico, - Founder</h3>
              <p>
                El Reparo Mexican Grill & Cantina is a family-owned restaurant
                specializing in authentic Mexican cuisine. The family hails from
                Puerto Vallarta, Jalisco, Mexico, bringing their rich culinary
                traditions to the establishment. Specific details about the
                founder's identity are not readily available in the provided
                sources. However, the restaurant has been serving delicious
                Mexican food for over 15 years, emphasizing its commitment to
                quality and tradition.
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
              <p>
                El Reparo Mexican Grill & Cantina, 1735 S Broadway, Minot, ND
                58701
              </p>
              <p>+1 701-838-4337</p>
              <p>Elreparond@yahoo.com</p>
            </div>
          </section>
        </div>

        {/* Statistics Section */}
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
        <AboutTwo />
        <Services />
      </div>
      <AboutBanner />
      <WhyChooseUs/>
    </>
  )
}

export default AboutUsPage
