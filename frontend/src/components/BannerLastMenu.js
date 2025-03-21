import React from 'react'
import { Link } from 'react-router-dom'

const BannerLastMenu = () => {
  return (
    <div className='banner-last-menu'>
      <div className='banner-last-menu-container'>
        <div className='banner-last-menu-column'>
          <div className='banner-last-menu-item'>
            <h3 className='banner-last-menu-title'>Our Signature Dishes</h3>
            <p className='banner-last-menu-description'>Taste the Best</p>
            <p className='banner-last-menu-text'>
              Enjoy our carefully crafted dishes made with the finest
              ingredients.
            </p>
            <Link to='/menus' className='banner-last-menu-view'>
              View Menu
            </Link>
          </div>

          <div className='banner-last-menu-item banner-last-menu-img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipN79mO5P823PjKi1FcxHRbppyEJ-z41W5PqWSpA=s1360-w1360-h1020'
              alt='Special Dishes'
              className='banner-last-menu-img'
            />
            <div className='banner-last-menu-overlay'></div>
          </div>

          <div className='banner-last-menu-item'>
            <h3 className='banner-last-menu-title'>Chef's Specials</h3>
            <p className='banner-last-menu-description'>Handpicked for You</p>
            <p className='banner-last-menu-text'>
              Experience a delightful blend of flavors with our chef’s top
              recommendations.
            </p>
            <Link to='/menus' className='banner-last-menu-view'>
              View Menu
            </Link>
          </div>
        </div>

        {/* Second Column: Image - Text - Image */}
        <div className='banner-last-menu-column'>
          <div className='banner-last-menu-item banner-last-menu-img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipP4W8z9WRsJUbH0paAO4G1XgcbVgutV32HpdKPF=s1360-w1360-h1020'
              alt='Upcoming Events'
              className='banner-last-menu-img'
            />
            <div className='banner-last-menu-overlay'></div>
          </div>

          <div className='banner-last-menu-item'>
            <h3 className='banner-last-menu-title'>Exciting Events</h3>
            <p className='banner-last-menu-description'>Join the Celebration</p>
            <p className='banner-last-menu-text'>
              Be part of our special events with great food, music, and company.
            </p>
            <Link to='/contact' className='banner-last-menu-event'>
              Join Event
            </Link>
          </div>

          <div className='banner-last-menu-item banner-last-menu-img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipOR1Pvx8CumX0RAwBizJ904lr1tzkqcXQVp4l9c=s1360-w1360-h1020'
              alt='Chef Choice'
              className='banner-last-menu-img'
            />
            <div className='banner-last-menu-overlay'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLastMenu
