import { CONTACT_URL, RESERVATION_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendContactForm: builder.mutation({
      query: (data) => ({
        url: CONTACT_URL,
        method: 'POST',
        body: data,
      }),
    }),
    sendReservationForm: builder.mutation({
      // Add this for reservation form submission
      query: (data) => ({
        url: RESERVATION_URL, // Define the reservation URL in your constants
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useSendContactFormMutation, useSendReservationFormMutation } =
  contactApiSlice
