import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import fithbanner from '../assets/fith.png'
import fourbanner from '../assets/four.png'
import thirdbanner from '../assets/third.png'
const menuItems = [
  {
    name: 'Greek Salad',
    price: '$25.50',
    description:
      'Tomatoes, green bell pepper, sliced cucumber, onion, olives, and feta cheese.',
    tag: 'LUNCH',
  },
  {
    name: 'Lasagne',
    price: '$40.00',
    description:
      'Vegetables, cheeses, ground meats, tomato sauce, seasonings, and spices.',
    tag: 'DINNER',
    badge: 'SEASONAL',
  },
  {
    name: 'Butternut Pumpkin',
    price: '$10.00',
    description:
      'Typesetting industry lorem Ipsum is simply dummy text of the priand.',
    tag: 'MORNING',
  },
  {
    name: 'Tokusen Wagyu',
    price: '$39.00',
    description:
      'Vegetables, cheeses, ground meats, tomato sauce, seasonings, and spices.',
    tag: 'DINNER',
    badge: 'NEW',
  },
  {
    name: 'Olivas Rellenas',
    price: '$25.00',
    description:
      'Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.',
    tag: 'LUNCH',
  },
  {
    name: 'Opu Fish',
    price: '$49.00',
    description:
      'Vegetables, cheeses, ground meats, tomato sauce, seasonings, and spices.',
    tag: 'DINNER',
  },
]

const SpecialMenu = () => {
  const [filter, setFilter] = useState('ALL')

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  const filteredItems =
    filter === 'ALL'
      ? menuItems
      : menuItems.filter((item) => item.tag === filter)

  return (
    <section className='specialMenu-container'>
      <div className='section-center'>
        <div className='specialfixed-img-first'>
          <img src={thirdbanner} alt='' />
        </div>
        <div className='specialfixed-img-second'>
          <img src={fourbanner} alt='' />
        </div>
        <div className='specialfixed-img-fith'>
          <img src={fithbanner} alt='' />
        </div>
        <div className='section-center'>
          <div className='specialMenu-header'>
            <hr className='hr' />
            <h2>Special Selection</h2>
            <hr className='hr' />
            <motion.div
              className='svg-container'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={bg}
                alt='SVG Image'
                className='secondbanner-svg-image'
              />
            </motion.div>
          </div>

          <div className='specialMenu-content'>
            <motion.div
              className='specialMenu-svgContainer'
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src='https://lh3.googleusercontent.com/p/AF1QipPWGpDMl9Rp2lw1dCmYufEnl4ZNeOQiIuS5BS6H=s1360-w1360-h1020'
                alt='Special Menu'
                className='specialMenu-svgImage'
              />
            </motion.div>

            {/* Filter Tags */}
            <div className='specialMenu-tags'>
              {['ALL', 'MORNING', 'LUNCH', 'DINNER'].map((tag) => (
                <span
                  key={tag}
                  className={filter === tag ? 'active' : ''}
                  onClick={() => handleFilterClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Menu Items Section */}
            <div className='specialMenu-list'>
              <h3>Delicious Menu</h3>

              <div className='specialMenu-menuItems'>
                {filteredItems.map((item, index) => (
                  <div key={index} className='specialMenu-menuItem'>
                    <div className='specialMenu-menuItemLeft'>
                      <h4>
                        {item.name}{' '}
                        {item.badge && (
                          <span className='specialMenu-badge'>
                            {item.badge}
                          </span>
                        )}
                      </h4>
                      <p>{item.description}</p>
                    </div>
                    <span className='specialMenu-price'>{item.price}</span>
                  </div>
                ))}
              </div>

              <div className='specialMenu-buttons'>
                <button className='btn'>View All Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialMenu
