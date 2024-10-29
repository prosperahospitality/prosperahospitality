import React from 'react'
import Landing from '@/_components/Home/Landing'

const page = () => {

  const revenuedata = [
    {
      "key": "1",
      "title": "Digital Marketing.",
      "description": "In the ever-evolving hospitality industry, mastering revenue management is key to driving profitability and enhancing guest satisfaction. Our expert team specializes in optimizing your hotel’s financial performance through data-driven strategies tailored to your unique needs."
    }
  ]

  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing content={revenuedata} />
    </div>
  )
}

export default page