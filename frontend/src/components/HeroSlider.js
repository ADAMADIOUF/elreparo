import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' // Import Link from React Router

const slides = [
  {
    image:
      'https://i.pinimg.com/474x/e1/e6/cf/e1e6cf56f78cd75219d5bf881bc39f0a.jpg',
    title: 'Welcome to El Reparo!',
    description: 'Experience the best of Mexican Grill & Cantina.',
    buttonText: 'Explore Menu',
    buttonLink: '/menus',
  },
  {
    image:
      'https://i.pinimg.com/736x/fc/e2/2c/fce22ce7facd27eaf16ffeb881f5c5cc.jpg',
    title: 'Authentic Mexican Flavors',
    description: 'Fresh, vibrant, and flavorful dishes served daily.',
    buttonText: 'See Our Specials',
    buttonLink: '/menus', // Specials page can also be under the menu
  },
  {
    image:
      'https://i.pinimg.com/736x/96/0d/18/960d189c2b7f04ae0219b76a3d43133b.jpg',
    title: 'Enjoy Our Signature Margaritas',
    description:
      'Crafted with the finest ingredients for an unforgettable taste.',
    buttonText: 'Book a Table',
    buttonLink: '/reservation',
  },
]

const SliderWithText = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='slider'>
      <div className='slider-image'>
        <img src={slides[currentSlide].image} alt='Slider' />
        <div className='slider-overlay'></div> {/* Overlay added here */}
      </div>
      <div className='text-container'>
        <h1 className='slide-title'>{slides[currentSlide].title}</h1>
        <p className='slide-description'>{slides[currentSlide].description}</p>
        <Link to={slides[currentSlide].buttonLink} className='btn'>
          {slides[currentSlide].buttonText}
        </Link>
      </div>
    </div>
  )
}

export default SliderWithText
