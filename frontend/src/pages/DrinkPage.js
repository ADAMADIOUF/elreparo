import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuItem from './MenuItem'
import productsMenu from '../productsMenu'

const DrinkPage = () => {
  // Get only drink items
  const drinks = productsMenu.drinks || []

  return (
    <div>
      <HeroSection
        title='Refreshing Drinks'
        description='Quench your thirst with our delicious beverages!'
        backgroundImage='https://i.pinimg.com/474x/c6/4d/26/c64d26e91c7c1a09916bcc3223da561b.jpg' // Replace with a drinks-related image
      />
      <div className='menu-container'>
        <h2>Drinks</h2>
        {drinks.length > 0 ? (
          drinks.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p>No drinks available.</p>
        )}
      </div>
    </div>
  )
}

export default DrinkPage
