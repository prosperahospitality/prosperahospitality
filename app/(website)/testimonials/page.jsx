import React from 'react'
import Landing from '@/_components/Home/Landing'
import TestimonialsstepsStories from '@/_components/Testimonials/TestimonialsstepsStories'
import Testimonialssteps from '@/_components/Testimonials/Testimonialssteps'

const testimonials = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Prospera Success Story.",
      "description": "At Prospera Hospitality, we’ve transformed hospitality through innovation and exceptional service. With Prospera’s support, we’ve created unforgettable guest experiences, earning recognition as leaders in the industry."
    }
  ]

  return ( 
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
      <Testimonialssteps />
      <TestimonialsstepsStories />
    </div>
  )
}

export default testimonials


