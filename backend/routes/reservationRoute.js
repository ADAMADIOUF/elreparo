import express from 'express'
import { reservationFormData } from '../controllers/reservationController.js'

const router = express.Router()

router.post('/', reservationFormData)

export default router
