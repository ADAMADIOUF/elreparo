import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import HeroSection from '../components/HeroSection'
import FormContact from './FormContact'

const ContactPage = () => {
  const position = [48.2302, -101.2973] // Latitude and Longitude for El Reparo Mexican Grill & Cantina

  return (
    <div>
      <HeroSection
        title='Contact Us at El Reparo Mexican Grill & Cantina'
        description="Get in touch with us for reservations, inquiries, and more. We're here to serve you the best authentic Mexican cuisine in Minot, ND."
        backgroundImage='https://i.pinimg.com/474x/d7/39/38/d7393898679888a5ef32b0ccc25519a1.jpg'
      />
      {/* Map Section */}
      <div className='map-section'>
        <h2>Find Us</h2>
        <div className='map-container'>
          <MapContainer
            center={position}
            zoom={13}
            style={{ width: '100%', height: '450px' }}
            scrollWheelZoom={false}
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={position}>
              <Popup>
                El Reparo Mexican Grill & Cantina
                <br />
                1735 S Broadway, Minot, ND 58701, United States
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Restaurant Info Section */}
      <div className='restaurant-info'>
        <h2 className='restaurant-title'>Restaurant Info</h2>
        <div className='restaurant-details'>
          {/* Lunch Time */}
          <div className='info-row'>
            <h3>Lunch Time</h3>
            <p>Monday to Sunday</p>
            <p>11:00 am - 2:30 pm</p>
          </div>

          {/* Contact Info */}
          <div className='info-row'>
            <h3>Contact Info</h3>
            <p>
              El Reparo Mexican Grill & Cantina, 1735 S Broadway, Minot, ND
              58701, United States
            </p>
            <p>Email: Elreparond@yahoo.com</p>
            <p>Booking: +1 701-838-4337</p>
          </div>

          {/* Dinner Time */}
          <div className='info-row'>
            <h3>Dinner Time</h3>
            <p>Monday to Sunday</p>
            <p>5:30 pm - 11:30 pm</p>
          </div>
        </div>
      </div>
      <div className='formcontact-container'>
        <FormContact />
        <div className='formcontact-img'>
          <img
            src='https://react.mediacity.co.in/delici/static/media/restaurant.4ed4c160ef1f2c451fbf.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
