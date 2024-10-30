import React from 'react'
import Landing from '@/_components/Home/Landing'
import SuccessStories from '@/_components/SuccessStories/SuccessStories'
import Successsteps from '@/_components/SuccessStories/Successsteps'

const success_stories = () => {

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
      <Successsteps />
      <SuccessStories />
    </div>
  )
}

export default success_stories