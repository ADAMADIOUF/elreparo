import asyncHandler from '../middleware/asyncHandler.js'
import Reservation from '../models/Reservation.js' // Import the Reservation model

// Reservation form data handler
const reservationFormData = asyncHandler(async (req, res) => {
  const { firstName, phoneNumber, numberOfPeople, date, time, message } =
    req.body

  try {
    // Create a new Reservation document
    const reservation = new Reservation({
      firstName,
      phoneNumber,
      numberOfPeople,
      date,
      time,
      message, // Optional message
    })

    // Save the reservation document to the database
    const savedReservation = await reservation.save()

    res.status(201).json({
      success: true,
      data: savedReservation,
    })
  } catch (error) {
    console.error('Error saving reservation form data:', error)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

export { reservationFormData }
