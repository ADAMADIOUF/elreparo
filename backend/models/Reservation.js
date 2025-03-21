import mongoose from 'mongoose'
import sendEmail from '../utils/sendEmail.js' // Import sendEmail function

const reservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    numberOfPeople: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true, // You can also validate the time format if needed
    },
    message: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

// After a reservation is saved, send a confirmation email
reservationSchema.post('save', async function (doc) {
  const emailOptions = {
    to: 'Elreparond@yahoo.com', // Replace with your email or recipient email
    subject: 'New Reservation Confirmation',
    message: `
      Reservation Details:
      Name: ${doc.firstName}
      Phone Number: ${doc.phoneNumber}
      Number of People: ${doc.numberOfPeople}
      Date: ${doc.date.toLocaleDateString()}
      Time: ${doc.time}
      Special Message: ${doc.message}
    `,
  }

  try {
    await sendEmail(emailOptions)
    console.log('Reservation confirmation email sent successfully.')
  } catch (error) {
    console.error('Error sending reservation confirmation email:', error)
  }
})

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation
