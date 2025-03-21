import mongoose from 'mongoose'
import sendEmail from '../utils/sendEmail.js'

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true, // Optional: Set to true if you want this field to be mandatory
    },
    specialRequest: {
      type: String,
      required: false, // Optional field, set to true if you want it to be mandatory
    },
  },
  {
    timestamps: true,
  }
)

contactSchema.post('save', async function (doc) {
  const emailOptions = {
    to: 'Elreparond@yahoo.com', // Replace with recipient's email address
    subject: 'New Contact Form Submission',
    message: `
      First Name: ${doc.firstName}
      Email Address: ${doc.emailAdress}
      Phone: ${doc.phone}
      Special Request: ${
        doc.specialRequest || 'No special request provided'
      }  // Handle case if no special request
    `,
  }

  try {
    await sendEmail(emailOptions)
    console.log('Notification email sent successfully.')
  } catch (error) {
    console.error('Error sending notification email:', error)
  }
})

const Contact = mongoose.model('Contact', contactSchema)

export default Contact
