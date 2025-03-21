import React from 'react'
import { motion } from 'framer-motion'

const AboutTwo = () => {
  return (
    <div className='about-two-container'>
      {/* First Row: Image - Text */}
      <div className='about-two-row'>
        <motion.img
          src='https://i.pinimg.com/474x/e8/21/ec/e821ece2b6c83cc720b65a75ed50805e.jpg'
          alt='Experience Image'
          className='about-two-image'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className='about-two-text'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>35 Years of Experience</h2>
          <p>
            El Reparo Mexican Grill & Cantina is a family-owned restaurant
            dedicated to bringing authentic Mexican cuisine to Minot, North
            Dakota. The owners, a husband and wife duo, have transformed the
            former Captain's Cove building on South Broadway into a vibrant
            dining destination.
          </p>
          <h3>El Reparo Mexican Grill & Cantina</h3>
        </motion.div>
      </div>

      {/* Second Row: Text - Image (Reversed) */}
      <div className='about-two-row reverse'>
        <motion.img
          src='https://i.pinimg.com/474x/02/72/eb/0272ebdbd649be669550f375355e1d2f.jpg'
          alt='Delightful Experience'
          className='about-two-image'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className='about-two-text'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Delightful Experience</h2>
          <p>
            At El Reparo, freshness is paramount. Each day, the team prepares
            dishes using high-quality ingredients, marinating chicken and beef
            for 12 hours to ensure rich flavors. Signature offerings include
            homemade quesabirrias—authentic shredded beef tacos served with
            onions, cilantro, and a flavorful broth for dipping.
          </p>
          <button className=' btn'>Discover Now</button>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutTwo
