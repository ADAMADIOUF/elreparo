import React from 'react'
import bg from '../assets/bg1.svg'
import { motion } from 'framer-motion'
const chefs = [
  {
    id: 1,
    name: 'Willium Joe',
    role: 'Master Chef',
    description:
      'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industry’s.',
    image:
      'https://i.pinimg.com/474x/21/c7/45/21c74544e840003d9bc8a6dde1cc8472.jpg',
  },
  {
    id: 2,
    name: 'Steave Den',
    role: 'Master Chef',
    description:
      'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industry’s.',
    image:
      'https://i.pinimg.com/474x/98/ab/ee/98abee22de3d2b23da218670309c5c66.jpg',
  },
  {
    id: 3,
    name: 'Lily Sopy',
    role: 'Master Chef',
    description:
      'Lorem Ipsum is simply dummy printing and typeset industry lorem Ipsum has been the industry’s.',
    image:
      'https://i.pinimg.com/474x/f9/67/6d/f9676d9ae69101d069c09ee48eb03979.jpg',
  },
]

const OurChef = () => {
  return (
    <section className='our-chef'>
      <h1>experienced team</h1>
      <div className='chef-header'>
        <motion.div
          className='svg-container'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={bg} alt='' className='secondbanner-svg-image' />
        </motion.div>
        <h2 className='chef-title'>Meet Our Chef</h2>
      </div>
      <div className='chef-container'>
        {chefs.map((chef) => (
          <div className='chef-card' key={chef.id}>
            <img src={chef.image} alt={chef.name} className='chef-img' />
            <h3 className='chef-name'>{chef.name}</h3>
            <p className='chef-role'>{chef.role}</p>
            <p className='chef-description'>{chef.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurChef
