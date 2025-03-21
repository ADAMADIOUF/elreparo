import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/bg1.svg'
import fithbanner from '../assets/fith.png'
import fourbanner from '../assets/four.png'
import thirdbanner from '../assets/third.png'
import productsMenu from '../productsMenu' 
import { Link } from 'react-router-dom'
const allMenuItems = Object.entries(productsMenu).flatMap(([category, items]) =>
  items.map((item) => ({ ...item, category }))
)

const SpecialMenu = () => {
  const [filter, setFilter] = useState('ALL')

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  const filteredItems =
    filter === 'ALL'
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === filter)

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
                alt=''
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
                src='https://i.pinimg.com/736x/26/77/1a/26771a2b50866590f2f9edb75bdd4216.jpg'
                alt='Special Menu'
                className='specialMenu-svgImage'
              />
            </motion.div>
            <div className='specialMenu-tags'>
              {['ALL', ...Object.keys(productsMenu)].map((tag) => (
                <span
                  key={tag}
                  className={filter === tag ? 'active' : ''}
                  onClick={() => handleFilterClick(tag)}
                >
                  {tag.toUpperCase()}
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
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span className='specialMenu-price'>${item.price}</span>
                  </div>
                ))}
              </div>

              <div className='specialMenu-buttons'>
                <Link to={'/menus'}>
                  {' '}
                  <button className='btn'>View All Menu</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialMenu
