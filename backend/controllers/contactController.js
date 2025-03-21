import asyncHandler from '../middleware/asyncHandler.js'
import Contact from '../models/Contact.js'

const contactFormData = asyncHandler(async (req, res) => {
 
  const {
    firstName,
    emailAdress,
    phone, 
    specialRequest, 
  } = req.body

  try {
    // Create a new Contact document
    const contact = new Contact({
      firstName,
      emailAdress,
      phone, // Use phone from the request
      specialRequest, // Use specialRequest from the request
    })

    // Save the contact document to the database
    const savedContact = await contact.save()

    res.status(201).json({
      success: true,
      data: savedContact,
    })
  } catch (error) {
    console.error('Error saving contact form data:', error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

export { contactFormData }
