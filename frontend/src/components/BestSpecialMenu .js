import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import bar from '../assets/bar.png'


const menuItems = [
  {
    name: 'Greek Salad',
    price: '$39.00',
    description:
      'Avocados with crab meat, red onion, crab salad red bell pepper...',
    image:
      'https://react.mediacity.co.in/delici/static/media/menu-image-13.def913c8d8e23413a075.jpg',
  },
  {
    name: 'Tokusen Wagyu',
    price: '$45.00',
    description:
      'Tomatoes, green bell pepper, sliced cucumber onion, olives...',
    image:
      'https://react.mediacity.co.in/delici/static/media/menu-image-14.cc993aeb8cae1e7c3ae7.jpg',
  },
  {
    name: 'Butternut Pumpkin',
    price: '$15.00',
    description:
      'Avocados with crab meat, red onion, crab salad stuffed bell pepper...',
    image:
      'https://react.mediacity.co.in/delici/static/media/menu-image-11.7be629d8a04827b964cc.jpg',
  },
  {
    name: 'Opu Fish',
    price: '$12.00',
    description:
      'Vegetables, cheeses, ground meats, tomato sauce, seasonings...',
    image:
      'https://react.mediacity.co.in/delici/static/media/menu-image-12.d21e54a8cc34de459bc8.jpg',
  },
    
]

const BestSpecialMenu = () => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % menuItems.length)
  }

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length
    )
  }

  return (
    <section className='bestspecialmenu-container '>
      <div className='section-center best-special'>
        <div className='bestspecialmenu-header'>
          <h2>special offer</h2>

          <motion.img
            src={bg}
            alt='Special Offer'
            className='bestspecialmenu-svg'
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
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                className={`bestspecialmenu-item ${
                  i === index ? 'active' : ''
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: i === index ? 1 : 0.5,
                  scale: i === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='bestspecialmenu-image'
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className='bestspecialmenu-price'>{item.price}</span>
              </motion.div>
            ))}
          </div>

          <button className='bestspecialmenu-next' onClick={nextSlide}>
            ❯
          </button>
        </div>
        <button className='btn special-btn'>View All Menu</button>
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
