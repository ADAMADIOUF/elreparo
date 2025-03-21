import React, { useState } from 'react'

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to API, etc.)
    alert('Message sent!')
    setFormData({
      name: '',
      email: '',
      phone: '',
      specialRequest: '',
    })
  }

  return (
    <div className='formcontact'>
      <h2>Message Us</h2>
      <p>
        Have a question about our service? We're here to help, contact us today!
      </p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
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
    </div>
  )
}

export default FormContact
