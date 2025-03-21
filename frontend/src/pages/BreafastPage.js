import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuItem from './MenuItem'
import productsMenu from '../productsMenu'

const BreafastPage = () => {
  // Get only breakfast items
  const breakfastItems = productsMenu.breakfast || []

  return (
    <div>
      <HeroSection
        title='Delicious Breakfast Menu'
        description='Start your day with our tasty breakfast options!'
        backgroundImage='https://i.pinimg.com/736x/77/8a/75/778a75de3c31f97dcdeef2f3a822c8fa.jpg' // Replace with a breakfast-related image
      />
      <div className='menu-container'>
        <h2>Breakfast</h2>
        {breakfastItems.length > 0 ? (
          breakfastItems.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p>No breakfast items available.</p>
        )}
      </div>
    </div>
  )
}

export default BreafastPage
