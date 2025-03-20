import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuItem from './MenuItem'
import productsMenu from '../productsMenu'

const MenuPage = () => {
  return (
    <div>
      <HeroSection
        title='Discover Our Menus'
        description='Explore our delicious menu options and find your new favorite dish.'
        backgroundImage='https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/480502665_122236354742032532_7946515004517641667_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XLy0RAp1JE8Q7kNvgFfatbe&_nc_oc=Adn9qq-gldiTzpuhdn1HSJ2PBoCLKJZkysR1aBVBxsKpKMWcXuC2FxpFRUS0beF8iiQypq8twVpJWFekwQLxvtRV&_nc_zt=23&_nc_ht=scontent.fdkr6-1.fna&_nc_gid=0KwkdzLYeliwcK3_KbDybg&oh=00_AYGf9uvv1GGLMnDzov46ypxLec2lPosJK3qJWxR4lBuljA&oe=67E1E8DC' // Replace with another image URL
      />
      <div className='menu-container'>
        {Object.entries(productsMenu).map(([category, items]) => (
          <div className='menu-category' key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            {items.map((item) => (
              <MenuItem
                key={item.name}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuPage
