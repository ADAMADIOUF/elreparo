import React from 'react'
import bg from '../assets/bg1.svg'
import { motion } from 'framer-motion'
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
          <img src={bg} alt='SVG Image' className='secondbanner-svg-image' />
        </motion.div>
        <h3>Lobster Tortellini</h3>
        <p>
          Indulge in our Lobster Tortellini, a rich and flavorful dish that
          brings the best of the sea to your plate. Our handmade tortellini are
          delicately filled with succulent lobster meat, blended with a touch of
          ricotta cheese and aromatic herbs for a creamy, savory bite. The pasta
          is then tossed in a luxurious butter-garlic sauce, infused with white
          wine, shallots, and a hint of lemon zest, creating the perfect balance
          of richness and freshness. Finished with a sprinkle of grated Parmesan
          and fresh parsley, this dish is a true delight for seafood lovers.
          Pair it with a glass of chilled white wine or a tropical cocktail for
          the ultimate dining experience! 🍷✨
        </p>
        <div className='price'>
          <span className='original-price'>$40.00</span>
          <span className='discounted-price'>$20.00</span>
        </div>

        <button className='btn'>View All Menu</button>
      </div>
    </div>
  )
}

export default ThirdBanner
