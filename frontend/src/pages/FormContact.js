import React, { useState } from 'react'
import { useSendContactFormMutation } from '../slices/contactApiSlice'

const FormContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    emailAdress: '',
    phone: '',
    specialRequest: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [sendContactForm, { isLoading, isError }] = useSendContactFormMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // Update the emailContent to reflect the correct form fields
      let emailContent = `
        First Name: ${formData.firstName}
        Email Address: ${formData.emailAdress}
        Phone: ${formData.phone}
        Special Request: ${formData.specialRequest}
      `

      setIsFormSubmitted(true)

      // Send the form data
      await sendContactForm({
        ...formData,
        message: emailContent, // Send the content as part of the request
      })

      // Reset form data
      setFormData({
        firstName: '',
        emailAdress: '',
        phone: '',
        specialRequest: '',
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
    <div className='formcontact'>
      <h2>Message Us</h2>
      <p>
        Have a question about our service? We're here to help, contact us today!
      </p>

      {!isFormSubmitted && (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='firstName'>Your Name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='emailAdress'>Your Email</label>
            <input
              type='email'
              id='emailAdress'
              name='emailAdress'
              value={formData.emailAdress}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone Number</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='specialRequest'>Special Request</label>
            <textarea
              id='specialRequest'
              name='specialRequest'
              value={formData.specialRequest}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type='submit'>Send Your Message</button>
        </form>
      )}

      {isFormSubmitted && !isError && (
        <div className='success-message'>
          Message sent successfully! We will reply to you soon.
        </div>
      )}

      {isError && (
        <div className='error-message'>
          There was an error sending your message. Please try again later.
        </div>
      )}
    </div>
  )
}

export default FormContact
