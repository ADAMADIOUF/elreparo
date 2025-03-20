import React from 'react'

const MenuItem = ({ name, price, description, image }) => {
  return (
    <div className='menu-item'>
      <img src={image} alt={name} className='menu-item-image' />
      <div className='menu-item-details'>
        <h3 className='menu-item-name'>{name}</h3>
        <p className='menu-item-price'>${price.toFixed(2)}</p>
        <p className='menu-item-description'>{description}</p>
      </div>
    </div>
  )
}

export default MenuItem
