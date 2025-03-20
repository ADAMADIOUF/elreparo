import React, { useState } from 'react'

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    numberOfPeople: '',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process the reservation logic here
    console.log('Reservation submitted', formData)
  }

  return (
    <div className='reservation-container'>
      <div className=' reservation'>
        <h2 className='reservation-title'>Online Reservation</h2>
        <h3>
          Booking request <span>+1 701-838-4337</span> or fill out the order
          form
        </h3>
        <form className='reservation-form' onSubmit={handleSubmit}>
          <div className='reservation-form-group reservation-name-phone'>
            <div className='reservation-form-group'>
              <label htmlFor='name' className='reservation-label'>
                Your Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='reservation-input'
                required
              />
            </div>

            <div className='reservation-form-group'>
              <label htmlFor='phone' className='reservation-label'>
                Phone Number:
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='reservation-input'
                required
              />
            </div>
          </div>

          <div className='reservation-form-group reservation-date-time'>
            <div className='reservation-form-group'>
              <label htmlFor='numberOfPeople' className='reservation-label'>
                Number of People:
              </label>
              <input
                type='number'
                id='numberOfPeople'
                name='numberOfPeople'
                value={formData.numberOfPeople}
                onChange={handleChange}
                className='reservation-input'
                required
                min='1'
              />
            </div>

            <div className='reservation-form-group'>
              <label htmlFor='date' className='reservation-label'>
                Date:
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                className='reservation-input'
                required
              />
            </div>

            <div className='reservation-form-group'>
              <label htmlFor='time' className='reservation-label'>
                Time:
              </label>
              <input
                type='time'
                id='time'
                name='time'
                value={formData.time}
                onChange={handleChange}
                className='reservation-input'
                required
              />
            </div>
          </div>

          <div className='reservation-form-group'>
            <label htmlFor='message' className='reservation-label'>
              Message (Optional):
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='reservation-textarea'
            />
          </div>

          <button type='submit' className='reservation-btn'>
            Book a Table
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reservation
