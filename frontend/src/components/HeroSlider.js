import React, { useState, useEffect } from 'react'
import { FaCalendarAlt } from 'react-icons/fa' // Importing an icon from react-icons

const slides = [
  {
    image:
      'https://lh3.googleusercontent.com/p/AF1QipM51tls0GtrJnZ5OlVRDULGzQa1a3r5ixLY0baq=s1360-w1360-h1020',
    title: 'Welcome to El Reparo!',
    description: 'Experience the best of Mexican Grill & Cantina.',
    buttonText: 'Explore Menu',
  },
  {
    image:
      'https://files.oaiusercontent.com/file-LyjyCG9zmC8iYQsErYKBvs?se=2025-03-19T16%3A37%3A19Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df9b38357-d8ad-41ad-b164-d4641444d373.webp&sig=hPAj0aejlvlwwZf%2BMBuA%2BFN6hVCEIYm%2BS3a8DnZ4z2o%3D',
    title: 'Authentic Mexican Flavors',
    description: 'Fresh, vibrant, and flavorful dishes served daily.',
    buttonText: 'See Our Specials',
  },
  {
    image:
      'https://files.oaiusercontent.com/file-YEDhQijhbW3jqiUfK3tvU2?se=2025-03-19T16%3A39%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D381cd7fa-1384-4156-b527-03dd7dca1d9f.webp&sig=0VWdM/5Y/NDkW%2B6GfgLezgXaNl%2BfUra1XZDm0mcwrVE%3D',
    title: 'Enjoy Our Signature Margaritas',
    description:
      'Crafted with the finest ingredients for an unforgettable taste.',
    buttonText: 'Book a Table',
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
      </div>
      <div className='text-container'>
        <h1 className='slide-title'>{slides[currentSlide].title}</h1>
        <p className='slide-description'>{slides[currentSlide].description}</p>
        <button className='btn'>
          {slides[currentSlide].buttonText}
        </button>
      </div>
    </div>
  )
}


export default SliderWithText
