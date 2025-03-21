import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuItem from './MenuItem'
import productsMenu from '../productsMenu'

const AppetizersPage = () => {
  // Get only appetizer items
  const appetizers = productsMenu.appetizers || []

  return (
    <div>
      <HeroSection
        title='Tasty Appetizers'
        description='Start your meal with our delicious appetizers!'
        backgroundImage='https://i.pinimg.com/474x/87/4b/b7/874bb751a22673e4b4673ec5ea6891e9.jpg' // Replace with an appetizer-related image
      />
      <div className='menu-container'>
        <h2>Appetizers</h2>
        {appetizers.length > 0 ? (
          appetizers.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p>No appetizers available.</p>
        )}
      </div>
    </div>
  )
}

export default AppetizersPage
