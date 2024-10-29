import React from 'react'
import Landing from '@/_components/Home/Landing'
import Website from '@/_components/OurServices/Website/Website'

const page = () => {

  const websitedata = [
    {
      "key": "1",
      "title": "Website Development & Maintenance.",
      "description": "At Propera Hospitality, we provide premium website development and maintenance services to help businesses establish a strong online presence. From custom design to performance optimization, we deliver solutions that ensure your website stands out and operates seamlessly."
    }
  ]

  return (
    <div>
      <Landing content={websitedata} />
      <Website />
    </div>

  )
}

export default page