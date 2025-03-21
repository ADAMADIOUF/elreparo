import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import bar from '../assets/bar.png'
import { Link } from 'react-router-dom'
import productsMenu from '../productsMenu' // Import productsMenu

const BestSpecialMenu = () => {
  const allItems = Object.values(productsMenu).flat() // Convert productsMenu object into a single array
  const [index, setIndex] = useState(0)

  const itemsPerPage = 4 // Show only 4 items at a time

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerPage) % allItems.length)
  }

  const prevSlide = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - itemsPerPage + allItems.length) % allItems.length
    )
  }

  const visibleItems = allItems.slice(index, index + itemsPerPage)

  return (
    <section className='bestspecialmenu-container'>
      <div className='section-center best-special'>
        <div className='bestspecialmenu-header'>
          <h2>Special Offer</h2>

          <motion.img
            src={bg}
            alt='Special Offer'
            className='secondbanner-svg-image'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
        <h2>Best Specialties</h2>
        <div className='bestspecialmenu-slider'>
          <button className='bestspecialmenu-prev' onClick={prevSlide}>
            ❮
          </button>

          <div className='bestspecialmenu-items'>
            {visibleItems.map((item, i) => (
              <motion.div
                key={i}
                className='bestspecialmenu-item'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='bestspecialmenu-image'
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className='bestspecialmenu-price'>
                  ${item.price.toFixed(2)}
                </span>
              </motion.div>
            ))}
          </div>

          <button className='bestspecialmenu-next' onClick={nextSlide}>
            ❯
          </button>
        </div>
        <Link to='/menus'>
          <button className='btn special-btn'>View All Menu</button>
        </Link>
      </div>
      <div className='bar-img'>
        <img src={bar} alt='' />
      </div>
      <div className='bar-img-two'>
        <img src={bar} alt='' />
      </div>
    </section>
  )
}

export default BestSpecialMenu
