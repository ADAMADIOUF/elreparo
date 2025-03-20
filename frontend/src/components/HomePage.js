import React from 'react'
import LastBanner from './LastBanner'
import OurChef from './OurChef'
import BannerLastMenu from './BannerLastMenu'
import WhyChooseUs from './WhyChooseUs'
import HomeContact from './HomeContact'
import FourBanner from './FourBanner'
import BestSpecialMenu from './BestSpecialMenu '
import SpecialMenu from './SpecialMenu'
import ThirdBanner from './ThirdBanner'
import SecondBanner from './SecondBanner'
import FirstBanner from './FirstBanner'
import HeroSlider from './HeroSlider'
const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <FirstBanner />
      <SecondBanner />
      <ThirdBanner />
      <SpecialMenu />
      <BestSpecialMenu />
      <FourBanner />
      <HomeContact />
      <WhyChooseUs />
      <BannerLastMenu />
      <OurChef />
      <LastBanner />
    </div>
  )
}

export default HomePage
