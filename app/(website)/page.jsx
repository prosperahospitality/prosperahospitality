import Landing from '@/_components/Home/Landing'
import React from 'react'
import NumberStats from '@/_components/Home/NumberStats'
import HomeCards from '@/_components/home/HomeCards'
import Allpackages from '@/_components/home/Allpackages'
const Home = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-16'>
      <Landing />
      <HomeCards />
      <NumberStats />
      <Allpackages />
    </div>
  )
}

export default Home