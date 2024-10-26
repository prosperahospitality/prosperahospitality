import Landing from '@/_components/Home/Landing'
import Revenuefeatures from '@/_components/Services/Revenuefeatures'
import React from 'react'

const revenuemanagement = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Maximize Your Hotel Revenue.",
      "description": "In the ever-evolving hospitality industry, mastering revenue management is key to driving profitability and enhancing guest satisfaction. Our expert team specializes in optimizing your hotel’s financial performance through data-driven strategies tailored to your unique needs."
    }
  ]

  return (
    <div className='flex flex-col gap-10 lg:gap-16`'>
      <Landing revenuedata={revenuedata} />
      <Revenuefeatures />
    </div>
  )
}

export default revenuemanagement