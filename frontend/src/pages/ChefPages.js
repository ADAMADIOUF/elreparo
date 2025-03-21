import React from 'react'
import HeroSection from '../components/HeroSection'
import OurChef from '../components/OurChef'
import AboutBannerChef from './AboutBannerChef'


const ChefPages = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title='About Our Chef'
        description='Meet our passionate and talented chef, who brings the flavors of Puerto Vallarta, Jalisco, to your table. With years of experience and a deep love for authentic Mexican cuisine, our chef crafts each dish with care, using only the freshest ingredients to ensure every meal is an unforgettable experience.'
        backgroundImage='https://i.pinimg.com/474x/3d/5a/b5/3d5ab5650a3036d96a8b9a57b0840870.jpg'
      />

      <section className='chef-section'>
        <div className='chef-section-content'>
          <h2>Meet Our Chef</h2>
          <p>
            Chef Antonio Garcia, the heart and soul of El Reparo Mexican Grill &
            Cantina, brings decades of culinary experience from Puerto Vallarta,
            Jalisco. With a passion for authentic Mexican flavors and fresh,
            locally sourced ingredients, Chef Garcia crafts each dish with love
            and attention to detail. Whether it's sizzling fajitas, flavorful
            tacos, or indulgent enchiladas, our chef’s creations will transport
            you straight to Mexico.
          </p>
        </div>
      </section>

      {/* Restaurant History Section */}
      <section className='restaurant-history'>
        <div className='history-content'>
          <h2>Our Story</h2>
          <p>
            El Reparo Mexican Grill & Cantina was founded with a vision to share
            the rich culture and culinary delights of Jalisco, Mexico, with the
            world. For over 20 years, our family-run restaurant has been serving
            traditional Mexican dishes with a modern twist. From our humble
            beginnings, we’ve grown into a beloved local establishment known for
            our warm hospitality, vibrant ambiance, and of course, our
            mouthwatering dishes.
          </p>
          <p>
            Every dish is made with love, using only the freshest ingredients
            sourced from local farms and markets. We take great pride in
            offering our guests a truly authentic Mexican dining experience,
            complete with traditional flavors and a cozy, family-friendly
            atmosphere.
          </p>
        </div>
      </section>

      {/* Chef's Philosophy Section */}
      <section className='chefs-philosophy'>
        <div className='philosophy-content'>
          <h2>Chef's Philosophy</h2>
          <p>
            "For me, cooking is all about bringing people together. It's about
            creating flavors that evoke memories, spark joy, and transport you
            to the streets of Mexico. Every meal is an experience, and every
            ingredient tells a story. I want each guest to feel like they’re
            part of our family when they dine with us." — Chef Antonio Garcia
          </p>
        </div>
      </section>
      <AboutBannerChef />
      <OurChef />
    </div>
  )
}

export default ChefPages
