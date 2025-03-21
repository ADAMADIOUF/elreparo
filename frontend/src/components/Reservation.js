import React, { useState } from 'react'
import { useSendReservationFormMutation } from '../slices/contactApiSlice'

const Reservation = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [sendReservationForm, { isLoading, isError }] =
    useSendReservationFormMutation()
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Update the emailContent to reflect the correct form fields
      const emailContent = `
        Name: ${formData.firstName}
        Phone: ${formData.phoneNumber}
        Number of People: ${formData.numberOfPeople}
        Date: ${formData.date}
        Time: ${formData.time}
        Message: ${formData.message}
      `

      setIsFormSubmitted(true)

      // Send the form data
      await sendReservationForm({
        ...formData,
        message: emailContent, // Send the content as part of the request
      })

      // Reset form data
      setFormData({
        firstName: '',
        phoneNumber: '',
        numberOfPeople: '',
        date: '',
        time: '',
        message: '',
      })

      // Reset the submission status after 10 seconds
      setTimeout(() => {
        setIsFormSubmitted(false)
      }, 10000) // 10 seconds
    } catch (error) {
      console.error('An error occurred while submitting the form:', error)
    }
  }

  return (
    <div className='reservation-container'>
      <div className='reservation'>
        <h2 className='reservation-title'>Online Reservation</h2>
        <h3>
          Booking request <span>+1 701-838-4337</span> or fill out the order
          form
        </h3>
        {!isFormSubmitted && (
          <form className='reservation-form' onSubmit={handleSubmit}>
            <div className='reservation-form-group reservation-name-phone'>
              <div className='reservation-form-group'>
                <label htmlFor='name' className='reservation-label'>
                  Your Name:
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
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
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formData.phoneNumber}
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

            <button
              type='submit'
              className='reservation-btn'
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Book a Table'}
            </button>
          </form>
        )}
        {isFormSubmitted && !isError && (
          <div className='success-message'>
            Thank you for your order! We have received it and will contact you
            soon
          </div>
        )}
      </div>
    </div>
  )
}

export default Reservation
