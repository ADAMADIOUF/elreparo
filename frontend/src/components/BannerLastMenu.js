import React from 'react'


const BannerLastMenu = () => {
  return (
    <div className='banner-last-menu'>
      <div className='menu-container'>
        {/* First Column: Text - Image - Text */}
        <div className='menu-column'>
          <div className='menu-item'>
            <h3 className='menu-title'>Best Menu</h3>
            <p className='menu-description'>Special Dishes</p>
            <p className='menu-text'>Lorem Ipsum is simply dummy printing.</p>
            <a href='#' className='view-menu'>
              View Menu
            </a>
          </div>

          <div className='menu-item img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipN79mO5P823PjKi1FcxHRbppyEJ-z41W5PqWSpA=s1360-w1360-h1020'
              alt='Special Dishes'
              className='menu-img'
            />
            <div className='img-overlay'></div>
          </div>

          <div className='menu-item'>
            <h3 className='menu-title'>Selected</h3>
            <p className='menu-description'>Chef Choice</p>
            <p className='menu-text'>Dummy printing lorem Ipsum simply.</p>
            <a href='#' className='view-menu'>
              View Menu
            </a>
          </div>
        </div>

        {/* Second Column: Image - Text - Image */}
        <div className='menu-column'>
          <div className='menu-item img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipP4W8z9WRsJUbH0paAO4G1XgcbVgutV32HpdKPF=s1360-w1360-h1020'
              alt='Upcoming Events'
              className='menu-img'
            />
            <div className='img-overlay'></div>
          </div>

          <div className='menu-item'>
            <h3 className='menu-title'>Latest</h3>
            <p className='menu-description'>Upcoming Events</p>
            <p className='menu-text'>Simply dummy printing and setting.</p>
            <a href='#' className='join-event'>
              Join Event
            </a>
          </div>

          <div className='menu-item img-item'>
            <img
              src='https://lh3.googleusercontent.com/p/AF1QipOR1Pvx8CumX0RAwBizJ904lr1tzkqcXQVp4l9c=s1360-w1360-h1020'
              alt='Chef Choice'
              className='menu-img'
            />
            <div className='img-overlay'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerLastMenu
