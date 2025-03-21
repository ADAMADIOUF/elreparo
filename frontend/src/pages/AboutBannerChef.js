import limon from '../assets/pepers.png'
import fork from '../assets/persil.png'


const AboutBannerChef = () => {
  return (
    <div className='about-banner-chef'>
      {/* Overlay */}
      <div className='overlay'></div>

      <div className='about-banner-content-chef'>
        <h1 className='about-banner-title-chef'>
          Experience Excellence in Every Bite
        </h1>
        <p className='about-banner-description-chef'>
          Our passion is serving exquisite flavors with the finest ingredients.
          Whether it's a casual meal or a grand celebration, we ensure every
          dish is a masterpiece. Join us for an unforgettable dining experience.
        </p>
      </div>

      {/* Left and Right small images */}
      <div className='left-image'>
        <img src={limon} alt='Lemon Decoration' className='small-image' />
      </div>
      <div className='right-image'>
        <img src={fork} alt='Fork' className='small-image' />
      </div>
    </div>
  )
}

export default AboutBannerChef
