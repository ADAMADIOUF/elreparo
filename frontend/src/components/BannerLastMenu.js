import React from 'react'

const BannerLastMenu = () => {
  return (
    <div className='banner-last-menu'>
      <div className='banner-last-menu-container'>
        <div className='banner-last-menu-column'>
          <div className='banner-last-menu-item'>
            <h3 className='banner-last-menu-title'>Best Menu</h3>
            <p className='banner-last-menu-description'>Special Dishes</p>
            <p className='banner-last-menu-text'>
              Lorem Ipsum is simply dummy printing.
            </p>
            <a href='#' className='banner-last-menu-view'>
              View Menu
            </a>
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
            <h3 className='banner-last-menu-title'>Selected</h3>
            <p className='banner-last-menu-description'>Chef Choice</p>
            <p className='banner-last-menu-text'>
              Dummy printing lorem Ipsum simply.
            </p>
            <a href='#' className='banner-last-menu-view'>
              View Menu
            </a>
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
            <h3 className='banner-last-menu-title'>Latest</h3>
            <p className='banner-last-menu-description'>Upcoming Events</p>
            <p className='banner-last-menu-text'>
              Simply dummy printing and setting.
            </p>
            <a href='#' className='banner-last-menu-event'>
              Join Event
            </a>
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
